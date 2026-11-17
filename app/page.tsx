import type { Metadata } from "next";
import { pageMetadata, SITE_URL } from "@/lib/seo";
import TopPage, { topFaqs } from "./components/TopPage";

const TITLE = "葛飾区の葬儀・家族葬なら稲垣屋葬儀店｜直葬18万円・区民葬儀取扱";
const DESCRIPTION =
  "葛飾区堀切の稲垣屋葬儀店は、明治11年頃創業・葛飾区で60年以上の地域密着の葬儀社です。直葬18万円、家族葬45万円〜、一般葬・社葬の料金プランをご用意。葬祭ディレクター1級、区民葬儀取扱店。24時間365日対応。";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/` },
});

export default function HomePage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    name: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/`,
    inLanguage: "ja",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    mainEntity: { "@id": `${SITE_URL}/#organization` },
    primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` }],
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: topFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <TopPage />
    </>
  );
}
