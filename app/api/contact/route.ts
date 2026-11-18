/**
 * お問い合わせフォームの送信 API（POST /api/contact）。
 * Resend のメール送信 API で、店舗あてに通知メールを送る。
 *
 * 必要な環境変数（Vercel → Project Settings → Environment Variables。変更後は再デプロイが必要）
 *   RESEND_API_KEY      Resend の API キー（re_ で始まる）
 *   CONTACT_TO_EMAIL    通知を受け取るアドレス。カンマ区切りで複数指定可
 *   CONTACT_FROM_EMAIL  送信元。Resend で認証したドメインのアドレス
 *                       例）稲垣屋葬儀店 ホームページ <form@inagakiyasougiten.com>
 *
 * 未設定のときは 503 を返す。フォーム側は「送信できませんでした。お電話で…」と表示する。
 */
import { URGENT_CONTENT, validateContact, type ContactInput } from "@/lib/contact";

// テスト時にローカルのモックサーバーへ差し替えられるようにしている（通常は未設定）
const RESEND_ENDPOINT = process.env.RESEND_API_URL || "https://api.resend.com/emails";
const MAX_BODY_CHARS = 16_000; // 入力の上限（詳細 2,000 字など）に対して十分な大きさ
const RATE_LIMIT = { windowMs: 10 * 60_000, max: 5 }; // 同じ IP から 10 分間に 5 件まで（インスタンス単位の簡易制限）
const recentPosts = new Map<string, number[]>();

function json(body: Record<string, unknown>, status = 200) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const hits = (recentPosts.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT.windowMs);
  hits.push(now);
  recentPosts.set(ip, hits);
  if (recentPosts.size > 1000) {
    for (const [key, times] of recentPosts) {
      if (times.every((t) => now - t >= RATE_LIMIT.windowMs)) recentPosts.delete(key);
    }
  }
  return hits.length > RATE_LIMIT.max;
}

function buildSubject(data: ContactInput) {
  const urgent = data.content === URGENT_CONTENT ? "【至急】" : "";
  return `${urgent}【ホームページお問い合わせ】${data.content}｜${data.name}様`;
}

function buildText(data: ContactInput, pageUrl: string) {
  const received = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());
  return [
    "ホームページのお問い合わせフォームから送信がありました。",
    data.content === URGENT_CONTENT ? "※「急なご逝去」のご相談です。至急ご連絡をお願いします。" : "",
    "",
    `■ ご相談の種別：${data.content}`,
    `■ お名前：${data.name}（${data.nameKana}）`,
    `■ 電話番号：${data.phone}`,
    `■ メールアドレス：${data.email || "（未入力）"}`,
    `■ 希望連絡方法：${data.contactMethod}`,
    "■ ご相談の詳細：",
    data.detail || "（未入力）",
    "",
    "――――――――――――――――",
    `受付日時：${received}`,
    `送信ページ：${pageUrl}`,
    data.email ? "※このメールに返信すると、お客様のメールアドレスあてに送られます。" : "",
  ]
    .filter((line, i, all) => line !== "" || (i > 0 && all[i - 1] !== ""))
    .join("\n");
}

export async function POST(request: Request) {
  // 他サイトからの送信を拒否（ブラウザは POST に Origin を付ける）
  const origin = request.headers.get("origin");
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (origin && host) {
    let originHost = "";
    try {
      originHost = new URL(origin).host;
    } catch {}
    if (originHost !== host) return json({ ok: false, error: "forbidden" }, 403);
  }

  // Vercel が付ける送信元 IP を優先（x-forwarded-for の先頭は送信側で偽装できるため最後の手段）
  const ip =
    request.headers.get("x-vercel-forwarded-for") ||
    request.headers.get("x-real-ip") ||
    (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() ||
    "unknown";
  if (isRateLimited(ip)) return json({ ok: false, error: "rate_limited" }, 429);

  // 極端に大きい送信は本文を読む前に断る（UTF-8 は 1 文字最大 4 バイト）
  if (Number(request.headers.get("content-length") || 0) > MAX_BODY_CHARS * 4) {
    return json({ ok: false, error: "too_large" }, 413);
  }
  const raw = await request.text();
  if (raw.length > MAX_BODY_CHARS) return json({ ok: false, error: "too_large" }, 413);
  let body: Record<string, unknown>;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("not an object");
    body = parsed as Record<string, unknown>;
  } catch {
    return json({ ok: false, error: "bad_request" }, 400);
  }

  // ボット対策（画面に表示しない項目に入力があれば、送信したふりをして何もしない）
  if (typeof body.website === "string" && body.website.trim() !== "") return json({ ok: true });

  const { data, errors } = validateContact(body);
  if (Object.keys(errors).length > 0) return json({ ok: false, error: "invalid", fields: errors }, 400);

  const apiKey = process.env.RESEND_API_KEY;
  const to = (process.env.CONTACT_TO_EMAIL ?? "").split(",").map((s) => s.trim()).filter(Boolean);
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || to.length === 0 || !from) {
    console.error("[contact] 送信設定（RESEND_API_KEY / CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL）が未設定のため、お問い合わせを送信できませんでした");
    return json({ ok: false, error: "not_configured" }, 503);
  }

  const submissionId = typeof body.submissionId === "string" && /^[\w-]{8,64}$/.test(body.submissionId) ? body.submissionId : null;
  const pageUrl = `${origin ?? `https://${host ?? "www.inagakiyasougiten.com"}`}/contact`;

  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        // 二重送信・再送信で同じメールが重複しないようにする（24時間有効）
        ...(submissionId ? { "Idempotency-Key": `contact-${submissionId}` } : {}),
      },
      body: JSON.stringify({
        from,
        to,
        subject: buildSubject(data),
        text: buildText(data, pageUrl),
        ...(data.email ? { reply_to: data.email } : {}),
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      const detail = (await res.text().catch(() => "")).slice(0, 500);
      console.error(`[contact] Resend がエラーを返しました: ${res.status} ${detail}`);
      return json({ ok: false, error: "send_failed" }, 502);
    }
  } catch (err) {
    console.error("[contact] Resend への送信に失敗しました", err);
    return json({ ok: false, error: "send_failed" }, 502);
  }

  return json({ ok: true });
}
