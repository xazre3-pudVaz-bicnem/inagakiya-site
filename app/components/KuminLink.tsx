import Link from "next/link";
import type { ReactNode } from "react";

/** 区民葬儀の説明ページ */
export const KUMIN_HREF = "/plans/kumin-funeral";

const KUMIN = "区民葬儀";
// 「区民葬儀制度」「区民葬儀取扱店」などは、続く語までをまとめてリンクにする
const KUMIN_PATTERN = /区民葬儀(?:制度|取扱店|取扱業者|取扱)?/;

interface KuminLinkProps {
  children?: ReactNode;
  className?: string;
}

/**
 * 「区民葬儀」の文言から区民葬儀の説明ページ（/plans/kumin-funeral）へ移動するためのリンク。
 * 本文では、各ページで最初に出てくる「区民葬儀」にだけ付ける（同じページで何度もリンクにしない）。
 */
export default function KuminLink({ children = KUMIN, className = "" }: KuminLinkProps) {
  return (
    <Link
      href={KUMIN_HREF}
      className={`text-[#5c4a80] rounded-sm underline decoration-[#a8853f] decoration-1 underline-offset-[5px] hover:bg-[#f4eef9] hover:text-[#312852] hover:decoration-[#5c4a80] transition-colors ${className}`}
    >
      {children}
    </Link>
  );
}

/** 文字列の中で最初に出てくる「区民葬儀」を <KuminLink> にして返す。含まない場合はそのまま返す。 */
export function linkKumin(text: string): ReactNode {
  const m = KUMIN_PATTERN.exec(text);
  if (!m) return text;
  return [
    text.slice(0, m.index),
    <KuminLink key="kumin" className="mx-0.5">
      {m[0]}
    </KuminLink>,
    text.slice(m.index + m[0].length),
  ];
}

/**
 * データ（説明文・FAQ の回答など）を並べて表示するときに、「区民葬儀」を最初の1か所だけリンクにする関数を作る。
 * 返した関数は、「区民葬儀」を含む文字列を最初に受け取ったときだけリンクにし、2回目以降はそのまま返す。
 */
export function createKuminLinker(): (text: string) => ReactNode {
  let linked = false;
  return (text) => {
    if (linked || !text.includes(KUMIN)) return text;
    linked = true;
    return linkKumin(text);
  };
}

/**
 * HTML（コラム本文）の中で最初に出てくる「区民葬儀」をリンクにする。
 * 見出し・表の見出し・リンクの中にあるものは対象にしない。説明ページへのリンクがすでに先にあれば何もしない。
 */
export function linkKuminInHtml(html: string): string {
  const TAG = /<(\/?)([a-zA-Z][\w-]*)[^>]*>/g;
  const SKIP = new Set(["a", "h1", "h2", "h3", "h4", "h5", "h6", "th", "button"]);
  let depth = 0; // SKIP の要素の中にいる深さ
  let inKuminAnchor = false; // 説明ページへのリンクの中にいるか
  let textStart = 0;
  for (let tag = TAG.exec(html); ; tag = TAG.exec(html)) {
    const textEnd = tag ? tag.index : html.length;
    const m = KUMIN_PATTERN.exec(html.slice(textStart, textEnd));
    if (m && inKuminAnchor) return html;
    if (m && depth === 0) {
      const at = textStart + m.index;
      return `${html.slice(0, at)}<a href="${KUMIN_HREF}">${m[0]}</a>${html.slice(at + m[0].length)}`;
    }
    if (!tag) return html;
    const name = tag[2].toLowerCase();
    if (SKIP.has(name) && !tag[0].endsWith("/>")) {
      const closing = tag[1] === "/";
      depth = Math.max(0, depth + (closing ? -1 : 1));
      if (name === "a") inKuminAnchor = !closing && tag[0].includes(`href="${KUMIN_HREF}"`);
    }
    textStart = TAG.lastIndex;
  }
}
