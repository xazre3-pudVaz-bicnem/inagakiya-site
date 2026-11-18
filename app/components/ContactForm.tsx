"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2, Phone } from "lucide-react";
import {
  CONTACT_CONTENT_OPTIONS,
  CONTACT_LIMITS,
  CONTACT_METHOD_OPTIONS,
  URGENT_CONTENT,
  validateContact,
  type ContactErrors,
  type ContactInput,
} from "@/lib/contact";

const initialData: ContactInput = {
  name: "",
  nameKana: "",
  phone: "",
  email: "",
  content: "",
  detail: "",
  contactMethod: "",
  agree: false,
};

/** エラー時にフォーカスを移す順番（画面の上から） */
const FIELD_ORDER: (keyof ContactInput)[] = ["name", "nameKana", "phone", "email", "content", "detail", "contactMethod", "agree"];

function Required() {
  return (
    <>
      <span className="text-red-600 ml-1" aria-hidden="true">*</span>
      <span className="sr-only">（必須）</span>
    </>
  );
}

function Optional() {
  return <span className="text-[#4a4a4a] text-xs ml-1">（任意）</span>;
}

function newSubmissionId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(36).slice(2, 12)}`;
}

export default function ContactForm() {
  const uid = useId();
  const fid = (field: string) => `${uid}-${field}`;
  const [formData, setFormData] = useState<ContactInput>(initialData);
  const [website, setWebsite] = useState(""); // ボット対策用（画面には表示しない）
  const [errors, setErrors] = useState<ContactErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sendError, setSendError] = useState(false);
  const submissionId = useRef<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);
  const sendErrorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!submitted) return;
    doneRef.current?.scrollIntoView({ block: "center" });
    doneRef.current?.focus();
  }, [submitted]);

  // 送信失敗の案内が画面下の相談バーに隠れないよう、画面中央まで動かす
  useEffect(() => {
    if (sendError) sendErrorRef.current?.scrollIntoView({ block: "center", behavior: "smooth" });
  }, [sendError]);

  const update = <K extends keyof ContactInput>(field: K, value: ContactInput[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const focusFirstError = (errs: ContactErrors) => {
    const first = FIELD_ORDER.find((f) => errs[f]);
    if (first) formRef.current?.querySelector<HTMLElement>(`[data-field="${first}"]`)?.focus();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    const { errors: errs } = validateContact(formData);
    setErrors(errs);
    setSendError(false);
    if (Object.keys(errs).length > 0) {
      focusFirstError(errs);
      return;
    }

    submissionId.current ??= newSubmissionId();
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, website, submissionId: submissionId.current }),
      });
      const result: { ok?: boolean; fields?: ContactErrors } | null = await res.json().catch(() => null);
      if (res.ok && result?.ok) {
        submissionId.current = null;
        setSubmitted(true);
      } else if (res.status === 400 && result?.fields) {
        setErrors(result.fields);
        focusFirstError(result.fields);
      } else {
        setSendError(true);
      }
    } catch {
      setSendError(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div ref={doneRef} tabIndex={-1} role="status" className="text-center py-12 px-4 focus:outline-none">
        <div className="w-14 h-14 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} className="text-[#7560a0]" aria-hidden="true" />
        </div>
        <h3 className="text-[#312852] text-2xl tracking-wide mb-4" style={{ fontFamily: "var(--font-mincho)" }}>
          お問い合わせを受け付けました
        </h3>
        <div className="w-8 h-px bg-[#c9a55a] mx-auto mb-6" />
        <p className="text-[#4a4a4a] text-base leading-relaxed mb-4">
          この度はお問い合わせいただきありがとうございます。
          <br />
          内容を確認の上、担当者よりご連絡いたします。
        </p>
        <p className="text-[#7560a0] text-sm">
          ※緊急の場合は、お電話（<a href="tel:0336900870" className="whitespace-nowrap underline underline-offset-4">03-3690-0870</a>）にてご連絡ください。
        </p>
      </div>
    );
  }

  const describedBy = (field: keyof ContactInput) => (errors[field] ? fid(`${field}-error`) : undefined);
  const fieldClass = (field: keyof ContactInput) =>
    `w-full border ${errors[field] ? "border-red-400 bg-red-50" : "border-[#e8ddf4] bg-white"} px-4 py-3 text-[#312852] text-base focus:outline-none focus:border-[#9278be] transition-colors`;
  const labelClass = "block text-[#312852] text-sm tracking-wide mb-2";
  const errorText = (field: keyof ContactInput) =>
    errors[field] ? (
      <p id={fid(`${field}-error`)} className="text-red-700 text-xs mt-1">
        {errors[field]}
      </p>
    ) : null;

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6">
      <div>
        <label htmlFor={fid("name")} className={labelClass}>
          お名前 <Required />
        </label>
        <input
          id={fid("name")}
          data-field="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => update("name", e.target.value)}
          placeholder="例：山田 花子"
          className={fieldClass("name")}
          autoComplete="name"
          maxLength={CONTACT_LIMITS.name}
          required
          aria-invalid={!!errors.name}
          aria-describedby={describedBy("name")}
        />
        {errorText("name")}
      </div>

      <div>
        <label htmlFor={fid("nameKana")} className={labelClass}>
          ふりがな <Required />
        </label>
        <input
          id={fid("nameKana")}
          data-field="nameKana"
          type="text"
          name="nameKana"
          value={formData.nameKana}
          onChange={(e) => update("nameKana", e.target.value)}
          placeholder="例：やまだ はなこ"
          className={fieldClass("nameKana")}
          maxLength={CONTACT_LIMITS.nameKana}
          required
          aria-invalid={!!errors.nameKana}
          aria-describedby={describedBy("nameKana")}
        />
        {errorText("nameKana")}
      </div>

      <div>
        <label htmlFor={fid("phone")} className={labelClass}>
          電話番号 <Required />
        </label>
        <input
          id={fid("phone")}
          data-field="phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={(e) => update("phone", e.target.value)}
          placeholder="例：090-1234-5678"
          className={fieldClass("phone")}
          autoComplete="tel"
          maxLength={CONTACT_LIMITS.phone}
          required
          aria-invalid={!!errors.phone}
          aria-describedby={describedBy("phone")}
        />
        {errorText("phone")}
      </div>

      <div>
        <label htmlFor={fid("email")} className={labelClass}>
          メールアドレス <Optional />
        </label>
        <input
          id={fid("email")}
          data-field="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => update("email", e.target.value)}
          placeholder="例：hanako@example.com"
          className={fieldClass("email")}
          autoComplete="email"
          maxLength={CONTACT_LIMITS.email}
          aria-invalid={!!errors.email}
          aria-describedby={describedBy("email")}
        />
        {errorText("email")}
      </div>

      <div>
        <label htmlFor={fid("content")} className={labelClass}>
          ご相談の種別 <Required />
        </label>
        <div className="relative">
          <select
            id={fid("content")}
            data-field="content"
            name="content"
            value={formData.content}
            onChange={(e) => update("content", e.target.value)}
            className={`${fieldClass("content")} appearance-none pr-10`}
            required
            aria-invalid={!!errors.content}
            aria-describedby={describedBy("content")}
          >
            <option value="">ご相談の種別を選択してください</option>
            {CONTACT_CONTENT_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#9278be]" aria-hidden="true">
            ▼
          </div>
        </div>
        {errorText("content")}
        {formData.content === URGENT_CONTENT && (
          <p className="text-[#7560a0] text-xs mt-2 leading-relaxed border-l-2 border-[#c9a55a] pl-3">
            緊急の場合は、フォームより<strong>お電話（<a href="tel:0336900870" className="whitespace-nowrap underline underline-offset-4">03-3690-0870</a>）</strong>
            の方が迅速に対応できます。24時間365日受付しております。
          </p>
        )}
      </div>

      <div>
        <label htmlFor={fid("detail")} className={labelClass}>
          ご相談の詳細 <Optional />
        </label>
        <textarea
          id={fid("detail")}
          data-field="detail"
          name="detail"
          value={formData.detail}
          onChange={(e) => update("detail", e.target.value)}
          placeholder="ご状況やご希望など、差し支えない範囲でお聞かせください。"
          rows={4}
          maxLength={CONTACT_LIMITS.detail}
          className={`${fieldClass("detail")} resize-none`}
          aria-invalid={!!errors.detail}
          aria-describedby={describedBy("detail")}
        />
        {errorText("detail")}
      </div>

      <fieldset aria-describedby={describedBy("contactMethod")}>
        <legend className={labelClass}>
          希望連絡方法 <Required />
        </legend>
        <div className="space-y-1">
          {CONTACT_METHOD_OPTIONS.map((opt, i) => {
            const checked = formData.contactMethod === opt;
            return (
              <label key={opt} className="flex min-h-11 items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="contactMethod"
                  value={opt}
                  checked={checked}
                  onChange={(e) => update("contactMethod", e.target.value)}
                  className="peer sr-only"
                  data-field={i === 0 ? "contactMethod" : undefined}
                />
                <span
                  aria-hidden="true"
                  className={`w-5 h-5 border-2 rounded-full flex items-center justify-center shrink-0 transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-[#7560a0] peer-focus-visible:ring-offset-2 ${
                    checked ? "border-[#7560a0] bg-[#7560a0]" : "border-[#d5c6eb] group-hover:border-[#9278be]"
                  }`}
                >
                  {checked && <span className="w-2 h-2 bg-white rounded-full" />}
                </span>
                <span className="text-[#312852] text-base">{opt}</span>
              </label>
            );
          })}
        </div>
        {errorText("contactMethod")}
      </fieldset>

      <div className="border border-[#e8ddf4] bg-[#faf7fd] p-5">
        <p className="text-[#4a4a4a] text-sm leading-relaxed mb-4">
          ご入力いただいた個人情報は、お問い合わせへの返答・葬儀サービスのご提供のみに使用いたします。詳しくは
          <Link href="/privacy" className="text-[#5c4a80] underline underline-offset-4 hover:text-[#312852]">
            プライバシーポリシー
          </Link>
          をご覧ください。
        </p>
        {/* 四角い部分・文字のどちらを押しても 1 回だけ切り替わる（label が入力欄を包む） */}
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            name="agree"
            data-field="agree"
            checked={formData.agree}
            onChange={(e) => update("agree", e.target.checked)}
            className="peer sr-only"
            aria-invalid={!!errors.agree}
            aria-describedby={describedBy("agree")}
          />
          <span
            aria-hidden="true"
            className={`w-5 h-5 border-2 flex items-center justify-center shrink-0 mt-1 transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-[#7560a0] peer-focus-visible:ring-offset-2 ${
              formData.agree ? "border-[#7560a0] bg-[#7560a0]" : "border-[#d5c6eb] group-hover:border-[#9278be]"
            }`}
          >
            {formData.agree && <span className="text-white text-xs leading-none">✓</span>}
          </span>
          <span className="text-[#312852] text-base leading-relaxed">
            個人情報の取り扱いに同意する <Required />
          </span>
        </label>
        {errorText("agree")}
      </div>

      {/* ボット対策：人には見えない入力欄。入力があれば送信しない */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor={fid("website")}>この欄は入力しないでください</label>
        <input id={fid("website")} type="text" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>

      {sendError && (
        <div ref={sendErrorRef} role="alert" className="border border-red-300 bg-red-50 p-5 text-[#312852]">
          <p className="text-base font-medium">送信できませんでした。</p>
          <p className="mt-1 text-sm leading-relaxed">
            お手数ですが、時間をおいてもう一度お試しいただくか、お電話でご連絡ください（24時間365日受付）。
          </p>
          <a
            href="tel:0336900870"
            className="mt-4 inline-flex min-h-12 items-center gap-2 rounded-sm bg-[#453869] px-5 py-3 text-white hover:bg-[#312852]"
          >
            <Phone size={18} className="text-[#dfc07e]" aria-hidden="true" />
            <span className="text-lg font-bold tracking-wider">03-3690-0870</span>
          </a>
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-[#5c4a80] hover:bg-[#453869] disabled:bg-[#b8a0d8] text-white py-5 text-lg tracking-wider transition-colors duration-300 flex items-center justify-center gap-3"
        style={{ fontFamily: "var(--font-mincho)" }}
      >
        {submitting ? (
          <>
            <Loader2 size={20} className="animate-spin" aria-hidden="true" />
            送信中...
          </>
        ) : (
          <>お問い合わせを送信する</>
        )}
      </button>

      <p className="text-[#4a4a4a] text-xs text-center leading-relaxed">
        <span className="text-red-600">*</span> は必須項目です。緊急の場合はお電話（
        <a href="tel:0336900870" className="whitespace-nowrap underline underline-offset-4">
          03-3690-0870
        </a>
        ）にてご連絡ください。
      </p>
    </form>
  );
}
