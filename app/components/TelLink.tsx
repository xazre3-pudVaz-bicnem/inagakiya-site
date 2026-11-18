import type { ReactNode } from "react";

const PHONE = "03-3690-0870";

/**
 * 本文中の電話番号。スマホではタップで発信でき、番号の途中（ハイフンの後ろ）で改行しない。
 * 文字色は周りの文章を引き継ぐ（濃い背景の上でも読めるよう、色は変えず下線で示す）。
 */
export default function TelLink({ className = "" }: { className?: string }) {
  return (
    <a
      href="tel:0336900870"
      className={`whitespace-nowrap underline decoration-1 underline-offset-4 hover:decoration-2 ${className}`}
    >
      {PHONE}
    </a>
  );
}

/**
 * データ（FAQ の回答など）の文字列に含まれる電話番号を <TelLink /> に置き換えて返す。
 * 電話番号を含まない文字列や、文字列以外はそのまま返す。
 */
export function withTel(text: ReactNode): ReactNode {
  if (typeof text !== "string" || !text.includes(PHONE)) return text;
  return text.split(PHONE).flatMap((part, i) => (i === 0 ? [part] : [<TelLink key={i} />, part]));
}
