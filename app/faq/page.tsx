import type { Metadata } from "next";
import FaqClient from "./FaqClient";
import { faqs } from "./faqData";

export const metadata: Metadata = {
  title: "よくある質問｜葛飾区の葬儀・費用・流れ・区民葬儀｜稲垣屋葬儀店",
  description:
    "葛飾区の稲垣屋葬儀店へのよくある質問を18カテゴリー・100問以上にまとめました。急なご逝去・費用・家族葬・区民葬儀・葬儀の流れ・マナーなど網羅的にご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/faq" },
};

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
  description:
    "葛飾区の稲垣屋葬儀店へのよくある質問を18カテゴリー・100問以上にまとめました。急なご逝去・費用・家族葬・区民葬儀・葬儀の流れ・マナーなど網羅的にご説明します。",
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
