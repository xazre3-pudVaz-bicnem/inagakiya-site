import { allColumns } from "../../data/columns";
import { CATEGORY_LABELS } from "../../types/column";

const BASE = "https://www.inagakiyasougiten.com";

export async function GET() {
  const items = allColumns
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 50)
    .map(
      (col) => `
    <item>
      <title><![CDATA[${col.title}]]></title>
      <link>${BASE}/column/${col.slug}</link>
      <guid isPermaLink="true">${BASE}/column/${col.slug}</guid>
      <description><![CDATA[${col.description}]]></description>
      <category><![CDATA[${CATEGORY_LABELS[col.category]}]]></category>
      <pubDate>${new Date(col.date).toUTCString()}</pubDate>
    </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>稲垣屋葬儀店 専門コラム</title>
    <link>${BASE}/column</link>
    <description>葛飾区の稲垣屋葬儀店による葬儀専門コラム。葬儀の基礎知識・家族葬・費用・区民葬儀・流れ・マナー・事前相談・地域情報など。</description>
    <language>ja</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE}/rss.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
