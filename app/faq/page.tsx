import type { Metadata } from "next";
import FaqClient from "./FaqClient";
import { faqs } from "./faqData";

export const metadata: Metadata = {
  title: "よくある質問｜葛飾区の葬儀・費用・流れ｜稲垣屋葬儀店",
  description:
    "葛飾区の稲垣屋葬儀店へのよくある質問。費用・プランの選び方・区民葬儀・事前相談・流れ・手続き・法要・生前準備など18カテゴリー100問以上にまとめました。24時間365日対応。",
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

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FaqClient />
    </>
  );
}
