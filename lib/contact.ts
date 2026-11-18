/**
 * お問い合わせフォームの項目定義と入力チェック。
 * フォーム画面（app/components/ContactForm.tsx）と送信 API（app/api/contact/route.ts）の両方で使う。
 */

export const CONTACT_CONTENT_OPTIONS = [
  "急なご逝去（今すぐ相談したい）",
  "葬儀全般のご相談",
  "家族葬について",
  "一日葬について",
  "火葬式・直葬について",
  "一般葬について",
  "社葬について",
  "区民葬儀について",
  "事前相談・生前準備について",
  "葬儀費用について",
  "葬儀の流れについて",
  "その他",
] as const;

/** 至急の対応が必要な種別（通知メールの件名に【至急】を付ける） */
export const URGENT_CONTENT: string = CONTACT_CONTENT_OPTIONS[0];

export const CONTACT_METHOD_OPTIONS = ["お電話（折り返し連絡）", "メール", "どちらでも可"] as const;

export interface ContactInput {
  name: string;
  nameKana: string;
  phone: string;
  email: string;
  content: string;
  detail: string;
  contactMethod: string;
  agree: boolean;
}

export type ContactErrors = Partial<Record<keyof ContactInput, string>>;

export const CONTACT_LIMITS = { name: 50, nameKana: 50, phone: 30, email: 254, detail: 2000 } as const;

/** 1行の項目：全角英数を半角にそろえ、改行・タブを除く（件名へのヘッダー注入も防ぐ） */
function oneLine(value: unknown): string {
  return typeof value === "string" ? value.normalize("NFKC").replace(/[\r\n\t]+/g, " ").trim() : "";
}

/** 電話番号：全角数字・長音記号などのハイフン類・空白を正規化する */
export function normalizePhone(value: unknown): string {
  return typeof value === "string"
    ? value.normalize("NFKC").replace(/[ー−‐‑‒–—―]/g, "-").replace(/\s+/g, "")
    : "";
}

const includesOption = (options: readonly string[], value: string) => options.includes(value);

/** 入力値を正規化し、エラーがあれば項目ごとのメッセージを返す */
export function validateContact(raw: Partial<Record<keyof ContactInput, unknown>>): {
  data: ContactInput;
  errors: ContactErrors;
} {
  const data: ContactInput = {
    name: oneLine(raw.name),
    nameKana: oneLine(raw.nameKana),
    phone: normalizePhone(raw.phone),
    email: oneLine(raw.email),
    content: typeof raw.content === "string" ? raw.content : "",
    detail: typeof raw.detail === "string" ? raw.detail.normalize("NFC").replace(/\r\n?/g, "\n").trim() : "",
    contactMethod: typeof raw.contactMethod === "string" ? raw.contactMethod : "",
    agree: raw.agree === true,
  };

  const errors: ContactErrors = {};
  const L = CONTACT_LIMITS;

  if (!data.name) errors.name = "お名前を入力してください";
  else if (data.name.length > L.name) errors.name = `お名前は${L.name}文字以内で入力してください`;

  if (!data.nameKana) errors.nameKana = "ふりがなを入力してください";
  else if (data.nameKana.length > L.nameKana) errors.nameKana = `ふりがなは${L.nameKana}文字以内で入力してください`;

  const digits = data.phone.replace(/\D/g, "");
  if (!data.phone) errors.phone = "電話番号を入力してください";
  else if (data.phone.length > L.phone || !/^\+?[\d\-()]+$/.test(data.phone) || digits.length < 10 || digits.length > 15) {
    errors.phone = "電話番号を正しく入力してください（例：090-1234-5678）";
  }

  if (data.email && (data.email.length > L.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))) {
    errors.email = "メールアドレスを正しく入力してください";
  }

  if (!includesOption(CONTACT_CONTENT_OPTIONS, data.content)) errors.content = "ご相談の種別を選択してください";

  if (data.detail.length > L.detail) errors.detail = `ご相談の詳細は${L.detail}文字以内で入力してください`;

  if (!includesOption(CONTACT_METHOD_OPTIONS, data.contactMethod)) {
    errors.contactMethod = "希望連絡方法を選択してください";
  } else if (data.contactMethod === "メール" && !data.email && !errors.email) {
    errors.email = "メールでのご連絡をご希望の場合は、メールアドレスを入力してください";
  }

  if (!data.agree) errors.agree = "個人情報の取り扱いへの同意が必要です";

  return { data, errors };
}
