import type { Metadata } from "next";
import TopPageClient from "./components/TopPageClient";

export const metadata: Metadata = {
  title: "葛飾区で葬儀なら稲垣屋葬儀店｜家族葬・区民葬儀に対応",
  description:
    "葛飾区堀切の稲垣屋葬儀店は、葬祭ディレクター1級・区民葬儀取扱に対応した地域密着の葬儀社です。伝統を大切にしながら、ご家族の想いに寄り添う葬儀をご提案します。",
};

export default function HomePage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "葛飾区で葬儀なら稲垣屋葬儀店｜家族葬・区民葬儀に対応",
    description:
      "葛飾区堀切の稲垣屋葬儀店は、葬祭ディレクター1級・区民葬儀取扱に対応した地域密着の葬儀社です。伝統を大切にしながら、ご家族の想いに寄り添う葬儀をご提案します。",
    url: "https://www.inagakiyasougiten.com/",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com/" },
      ],
    },
    mainEntity: {
      "@type": "FuneralHome",
      name: "稲垣屋葬儀店",
      url: "https://www.inagakiyasougiten.com",
      telephone: "03-3690-0870",
      address: {
        "@type": "PostalAddress",
        streetAddress: "堀切6-33-4",
        addressLocality: "葛飾区",
        addressRegion: "東京都",
        postalCode: "124-0006",
        addressCountry: "JP",
      },
      openingHours: "Mo-Su 00:00-24:00",
      areaServed: { "@type": "City", name: "葛飾区" },
      foundingDate: "1878",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <TopPageClient />
    </>
  );
}
