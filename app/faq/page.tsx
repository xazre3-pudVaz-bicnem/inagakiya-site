import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import FaqClient from "./FaqClient";
import { faqs } from "./faqData";

// 件数はデータから数える（質問を増減しても説明文の数字がずれないように）
const FAQ_COUNT = faqs.reduce((sum, cat) => sum + cat.items.length, 0);
const DESCRIPTION = `葛飾区の稲垣屋葬儀店へのよくある質問を${faqs.length}カテゴリー・${FAQ_COUNT}問にまとめました。急なご逝去・費用・家族葬・区民葬儀・葬儀の流れ・マナーなど網羅的にご説明します。`;

export const metadata: Metadata = pageMetadata({
  title: "よくある質問｜葛飾区の葬儀・費用・流れ・区民葬儀｜稲垣屋葬儀店",
  description: DESCRIPTION,
  alternates: { canonical: "https://www.inagakiyasougiten.com/faq" },
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    }))
  ),
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "よくある質問｜葛飾区の葬儀・費用・流れ・区民葬儀｜稲垣屋葬儀店",
  description: DESCRIPTION,
  url: "https://www.inagakiyasougiten.com/faq",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "よくある質問", item: "https://www.inagakiyasougiten.com/faq" },
    ],
  },
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <FaqClient />
    </>
  );
}
