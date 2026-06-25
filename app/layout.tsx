import type { Metadata } from "next";
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-mincho",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-gothic",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "葛飾区で葬儀なら稲垣屋葬儀店｜家族葬・区民葬儀・火葬式に対応",
    template: "%s | 稲垣屋葬儀店",
  },
  description:
    "葛飾区堀切の稲垣屋葬儀店は、葬祭ディレクター1級・区民葬儀取扱に対応した地域密着の葬儀社です。創業明治11年頃より、伝統を大切にしながら、ご家族の想いに寄り添う葬儀をご提案します。24時間365日対応。",
  keywords: [
    "葛飾区 葬儀",
    "葛飾区 葬儀社",
    "葛飾区 家族葬",
    "葛飾区 一日葬",
    "葛飾区 火葬式",
    "葛飾区 区民葬儀",
    "堀切 葬儀",
    "堀切 葬儀社",
    "区民葬儀 葛飾区",
    "稲垣屋葬儀店",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "稲垣屋葬儀店",
    title: "葛飾区で葬儀なら稲垣屋葬儀店｜家族葬・区民葬儀・火葬式に対応",
    description:
      "葛飾区堀切の稲垣屋葬儀店は、葬祭ディレクター1級・区民葬儀取扱に対応した地域密着の葬儀社です。24時間365日対応。",
  },
  twitter: {
    card: "summary_large_image",
    title: "葛飾区で葬儀なら稲垣屋葬儀店",
    description:
      "葛飾区堀切の稲垣屋葬儀店は、葬祭ディレクター1級・区民葬儀取扱に対応した地域密着の葬儀社です。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["FuneralHome", "LocalBusiness"],
  "@id": "https://www.inagakiyasougiten.com/#organization",
  name: "稲垣屋葬儀店",
  alternateName: "Inagakiya Funeral Home",
  description:
    "葛飾区堀切の地域密着型葬儀社。葬祭ディレクター1級取得、区民葬儀取扱店。創業明治11年頃より葛飾区の皆さまのご葬儀をお手伝いしてきた歴史ある葬儀社です。",
  url: "https://www.inagakiyasougiten.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "堀切6-33-4",
    addressLocality: "葛飾区",
    addressRegion: "東京都",
    postalCode: "124-0006",
    addressCountry: "JP",
  },
  telephone: "03-3690-0870",
  openingHours: "Mo-Su 00:00-24:00",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "03-3690-0870",
    contactType: "customer service",
    availableLanguage: "Japanese",
  },
  areaServed: [
    { "@type": "City", name: "葛飾区" },
    { "@type": "City", name: "足立区" },
    { "@type": "City", name: "江戸川区" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "葬儀プラン",
    itemListElement: [
      { "@type": "Offer", name: "家族葬", url: "https://www.inagakiyasougiten.com/plans/family-funeral" },
      { "@type": "Offer", name: "一日葬", url: "https://www.inagakiyasougiten.com/plans/oneday-funeral" },
      { "@type": "Offer", name: "火葬式", url: "https://www.inagakiyasougiten.com/plans/cremation" },
      { "@type": "Offer", name: "一般葬", url: "https://www.inagakiyasougiten.com/plans/general-funeral" },
      { "@type": "Offer", name: "区民葬儀", url: "https://www.inagakiyasougiten.com/plans/kumin-funeral" },
    ],
  },
  foundingDate: "1878",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "稲垣屋葬儀店",
  url: "https://www.inagakiyasougiten.com",
  description: "葛飾区堀切の地域密着型葬儀社。葬祭ディレクター1級・区民葬儀取扱店。",
  inLanguage: "ja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSerifJP.variable} ${notoSansJP.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#faf9f7] text-[#1a1a1a] font-[family-name:var(--font-mincho)] antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
