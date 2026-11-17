import type { Metadata, Viewport } from "next";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileContactBar from "./components/MobileContactBar";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";
import { funeralPlans, plansOfferCatalogJsonLd } from "@/data/plans";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-mincho",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const DEFAULT_TITLE = "葛飾区の葬儀・家族葬なら稲垣屋葬儀店｜直葬18万円・区民葬儀取扱";
const DEFAULT_DESCRIPTION =
  "葛飾区堀切の稲垣屋葬儀店は、明治11年頃創業・葛飾区で60年以上の地域密着の葬儀社です。直葬18万円、家族葬45万円〜、一般葬・社葬の料金プランをご用意。葬祭ディレクター1級、区民葬儀取扱店。24時間365日対応。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "葛飾区 葬儀",
    "葛飾区 葬儀社",
    "葛飾区 家族葬",
    "葛飾区 一日葬",
    "葛飾区 火葬式",
    "葛飾区 直葬",
    "葛飾区 社葬",
    "葛飾区 区民葬儀",
    "葛飾区 葬儀 費用",
    "堀切 葬儀",
    "堀切 葬儀社",
    "稲垣屋葬儀店",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: true, address: false, email: false },
};

export const viewport: Viewport = {
  themeColor: "#5c4a80",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["FuneralHome", "LocalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: ["いながきやそうぎてん", "Inagakiya Funeral Home"],
  description:
    "葛飾区堀切の地域密着型葬儀社。明治11年頃に足立区千住で創業し、葛飾区では60年以上にわたり地域の皆さまのご葬儀をお手伝いしています。葬祭ディレクター1級取得、区民葬儀取扱店、葬儀組合加盟。直葬・家族葬・一般葬・社葬の料金プランをご用意しています。",
  slogan: "葛飾区で選ばれ続ける地域密着の葬儀社",
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 600, height: 600 },
  image: [`${SITE_URL}/og-image.jpg`, ...funeralPlans.map((p) => `${SITE_URL}${p.image.src}`)],
  address: {
    "@type": "PostalAddress",
    streetAddress: "堀切6-33-4",
    addressLocality: "葛飾区",
    addressRegion: "東京都",
    postalCode: "124-0006",
    addressCountry: "JP",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.7523,
    longitude: 139.8304,
  },
  hasMap: "https://www.google.com/maps/search/?api=1&query=%E7%A8%B2%E5%9E%A3%E5%B1%8B%E8%91%AC%E5%84%80%E5%BA%97+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%91%9B%E9%A3%BE%E5%8C%BA%E5%A0%80%E5%88%876-33-4",
  telephone: "+81-3-3690-0870",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "¥180,000〜",
  currenciesAccepted: "JPY",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+81-3-3690-0870",
      contactType: "customer service",
      availableLanguage: "Japanese",
      areaServed: "JP",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    },
    {
      "@type": "ContactPoint",
      contactType: "emergency",
      telephone: "+81-3-3690-0870",
      availableLanguage: "Japanese",
    },
  ],
  areaServed: [
    { "@type": "City", name: "葛飾区" },
    { "@type": "Place", name: "堀切" },
    { "@type": "Place", name: "お花茶屋" },
    { "@type": "Place", name: "青戸" },
    { "@type": "Place", name: "立石" },
    { "@type": "Place", name: "四つ木" },
    { "@type": "Place", name: "亀有" },
    { "@type": "Place", name: "金町" },
    { "@type": "Place", name: "柴又" },
    { "@type": "Place", name: "高砂" },
    { "@type": "Place", name: "水元" },
    { "@type": "Place", name: "小菅" },
    { "@type": "Place", name: "新小岩" },
    { "@type": "City", name: "足立区" },
    { "@type": "City", name: "江戸川区" },
  ],
  hasOfferCatalog: plansOfferCatalogJsonLd(),
  foundingDate: "1878",
  foundingLocation: {
    "@type": "Place",
    name: "東京都足立区千住",
    address: { "@type": "PostalAddress", addressLocality: "足立区", addressRegion: "東京都", addressCountry: "JP" },
  },
  employee: { "@id": `${SITE_URL}/#representative` },
  knowsAbout: [
    "葬儀",
    "家族葬",
    "一日葬",
    "火葬式",
    "直葬",
    "一般葬",
    "社葬",
    "区民葬儀",
    "葬祭ディレクター",
    "葛飾区の葬儀",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: "稲垣屋葬儀店 公式サイト",
  url: SITE_URL,
  description: "葛飾区堀切の地域密着型葬儀社・稲垣屋葬儀店の公式サイト。葬儀プラン・料金、区民葬儀、葬儀の流れ、葛飾区の葬儀情報をご案内しています。",
  inLanguage: "ja",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#representative`,
  name: "飯田 雄生",
  jobTitle: "代表",
  worksFor: { "@id": `${SITE_URL}/#organization` },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "葬祭ディレクター1級",
    credentialCategory: "厚生労働省認定 葬祭ディレクター技能審査",
  },
  knowsAbout: ["葬儀", "葬祭ディレクター", "家族葬", "区民葬儀", "葛飾区の葬儀"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSerifJP.variable} h-full`}>
      <head>
        <link rel="alternate" type="application/rss+xml" title="稲垣屋葬儀店 専門コラム RSS" href={`${SITE_URL}/rss.xml`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </head>
      <body className="min-h-full flex flex-col bg-[#faf9f7] text-[#1a1a1a] font-[family-name:var(--font-mincho)] antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-[#312852] focus:shadow"
        >
          本文へスキップ
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileContactBar />
      </body>
    </html>
  );
}
