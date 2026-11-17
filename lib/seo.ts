import type { Metadata } from "next";

export const SITE_URL = "https://www.inagakiyasougiten.com";
export const SITE_NAME = "稲垣屋葬儀店";

export const DEFAULT_OG_IMAGE = {
  url: `${SITE_URL}/og-image.jpg`,
  width: 1200,
  height: 630,
  alt: "稲垣屋葬儀店｜葛飾区の葬儀・家族葬・区民葬儀",
};

function toUrlString(value: unknown): string | undefined {
  if (typeof value === "string") return value;
  if (value instanceof URL) return value.toString();
  return undefined;
}

/**
 * ページ単位のメタデータを組み立てるヘルパー。
 *
 * - タイトルに既に「稲垣屋葬儀店」を含む場合は title.absolute にして、
 *   layout の template（"%s | 稲垣屋葬儀店"）による社名の重複を防ぐ。
 * - 各ページの title / description / canonical から og:title・og:description・og:url と
 *   Twitter カードを生成する（未指定だと全ページがトップページの OGP を継承してしまうため）。
 * - ページ側で openGraph / twitter を指定した場合はそちらを優先する。
 */
export function pageMetadata(meta: Metadata): Metadata {
  const rawTitle = typeof meta.title === "string" ? meta.title : undefined;
  const hasBrand = rawTitle?.includes(SITE_NAME) ?? false;
  const fullTitle = rawTitle ? (hasBrand ? rawTitle : `${rawTitle} | ${SITE_NAME}`) : undefined;
  const description = typeof meta.description === "string" ? meta.description : undefined;
  const url = toUrlString(meta.alternates?.canonical);

  const openGraph = {
    type: "website",
    locale: "ja_JP",
    siteName: SITE_NAME,
    ...(fullTitle ? { title: fullTitle } : {}),
    ...(description ? { description } : {}),
    ...(url ? { url } : {}),
    images: [DEFAULT_OG_IMAGE],
    ...(meta.openGraph ?? {}),
  } as Metadata["openGraph"];

  const twitter = {
    card: "summary_large_image",
    ...(fullTitle ? { title: fullTitle } : {}),
    ...(description ? { description } : {}),
    images: [DEFAULT_OG_IMAGE.url],
    ...(meta.twitter ?? {}),
  } as Metadata["twitter"];

  return {
    ...meta,
    ...(rawTitle && hasBrand ? { title: { absolute: rawTitle } } : {}),
    openGraph,
    twitter,
  };
}
