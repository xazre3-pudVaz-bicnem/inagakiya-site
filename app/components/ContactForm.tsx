"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  nameKana: string;
  phone: string;
  email: string;
  content: string;
  contactMethod: string;
  agree: boolean;
}

const initialData: FormData = {
  name: "",
  nameKana: "",
  phone: "",
  email: "",
  content: "",
  contactMethod: "",
  agree: false,
};

const contentOptions = [
  "葬儀全般のご相談",
  "家族葬について",
  "一日葬について",
  "火葬式について",
  "一般葬について",
  "区民葬儀について",
  "事前相談・費用について",
  "葬儀の流れについて",
  "その他",
];

const contactMethodOptions = [
  "お電話（折り返し連絡）",
  "メール",
  "どちらでも可",
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) newErrors.name = "お名前を入力してください";
    if (!formData.nameKana.trim()) newErrors.nameKana = "ふりがなを入力してください";
    if (!formData.phone.trim()) newErrors.phone = "電話番号を入力してください";
    else if (!/^[\d\-+()]+$/.test(formData.phone)) newErrors.phone = "正しい電話番号を入力してください";
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "正しいメールアドレスを入力してください";
    }
    if (!formData.content) newErrors.content = "ご相談内容を選択してください";
    if (!formData.contactMethod) newErrors.contactMethod = "希望連絡方法を選択してください";
    if (!formData.agree) newErrors.agree = "個人情報の取り扱いに同意してください";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12 px-4">
        <div className="w-14 h-14 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} className="text-[#7560a0]" />
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
          ※緊急の場合は、お電話（03-3690-0870）にてご連絡ください。
        </p>
      </div>
    );
  }

  const inputClass = (field: keyof FormData) =>
    `w-full border ${errors[field] ? "border-red-300 bg-red-50" : "border-[#e8ddf4] bg-white"} px-4 py-3 text-[#312852] text-base focus:outline-none focus:border-[#9278be] transition-colors`;

  const selectClass = (field: keyof FormData) =>
    `w-full border ${errors[field] ? "border-red-300 bg-red-50" : "border-[#e8ddf4] bg-white"} px-4 py-3 text-[#312852] text-base focus:outline-none focus:border-[#9278be] transition-colors appearance-none`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div>
        <label className="block text-[#312852] text-sm tracking-wide mb-2">
          お名前 <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="例：山田 花子"
          className={inputClass("name")}
          autoComplete="name"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-[#312852] text-sm tracking-wide mb-2">
          ふりがな <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          type="text"
          value={formData.nameKana}
          onChange={(e) => setFormData({ ...formData, nameKana: e.target.value })}
          placeholder="例：やまだ はなこ"
          className={inputClass("nameKana")}
        />
        {errors.nameKana && <p className="text-red-500 text-xs mt-1">{errors.nameKana}</p>}
      </div>

      <div>
        <label className="block text-[#312852] text-sm tracking-wide mb-2">
          電話番号 <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="例：090-1234-5678"
          className={inputClass("phone")}
          autoComplete="tel"
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>

      <div>
        <label className="block text-[#312852] text-sm tracking-wide mb-2">
          メールアドレス <span className="text-[#4a4a4a] text-xs ml-1">（任意）</span>
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="例：hanako@example.com"
          className={inputClass("email")}
          autoComplete="email"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-[#312852] text-sm tracking-wide mb-2">
          ご相談内容 <span className="text-red-500 ml-1">*</span>
        </label>
        <div className="relative">
          <select
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            className={selectClass("content")}
          >
            <option value="">ご相談内容を選択してください</option>
            {contentOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#9278be]">▼</div>
        </div>
        {errors.content && <p className="text-red-500 text-xs mt-1">{errors.content}</p>}
      </div>

      <div>
        <label className="block text-[#312852] text-sm tracking-wide mb-2">
          希望連絡方法 <span className="text-red-500 ml-1">*</span>
        </label>
        <div className="space-y-2">
          {contactMethodOptions.map((opt) => (
            <label key={opt} className="flex items-center gap-3 cursor-pointer group">
              <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                formData.contactMethod === opt ? "border-[#7560a0] bg-[#7560a0]" : "border-[#d5c6eb] group-hover:border-[#9278be]"
              }`}>
                {formData.contactMethod === opt && (
                  <div className="w-2 h-2 bg-white rounded-full" />
                )}
              </div>
              <input
                type="radio"
                name="contactMethod"
                value={opt}
                checked={formData.contactMethod === opt}
                onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                className="sr-only"
              />
              <span className="text-[#312852] text-base">{opt}</span>
            </label>
          ))}
        </div>
        {errors.contactMethod && <p className="text-red-500 text-xs mt-1">{errors.contactMethod}</p>}
      </div>

      <div className="border border-[#e8ddf4] bg-[#faf7fd] p-5">
        <p className="text-[#4a4a4a] text-sm leading-relaxed mb-4">
          ご入力いただいた個人情報は、お問い合わせへの返答・葬儀サービスのご提供のみに使用いたします。第三者への提供は行いません。
        </p>
        <label className="flex items-start gap-3 cursor-pointer group">
          <div
            className={`w-5 h-5 border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
              formData.agree ? "border-[#7560a0] bg-[#7560a0]" : "border-[#d5c6eb] group-hover:border-[#9278be]"
            }`}
            onClick={() => setFormData({ ...formData, agree: !formData.agree })}
          >
            {formData.agree && <span className="text-white text-xs">✓</span>}
          </div>
          <input
            type="checkbox"
            checked={formData.agree}
            onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
            className="sr-only"
          />
          <span className="text-[#312852] text-base leading-relaxed">
            個人情報の取り扱いに同意する <span className="text-red-500">*</span>
          </span>
        </label>
        {errors.agree && <p className="text-red-500 text-xs mt-2">{errors.agree}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-[#5c4a80] hover:bg-[#453869] disabled:bg-[#b8a0d8] text-white py-5 text-lg tracking-wider transition-colors duration-300 flex items-center justify-center gap-3"
        style={{ fontFamily: "var(--font-mincho)" }}
      >
        {submitting ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            送信中...
          </>
        ) : (
          <>お問い合わせを送信する</>
        )}
      </button>

      <p className="text-[#4a4a4a] text-xs text-center leading-relaxed">
        <span className="text-red-500">*</span> は必須項目です。緊急の場合はお電話（03-3690-0870）にてご連絡ください。
      </p>
    </form>
  );
}
