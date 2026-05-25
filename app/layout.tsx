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
    default: "葛飾区で葬儀なら稲垣屋葬儀店｜家族葬・区民葬儀に対応",
    template: "%s | 稲垣屋葬儀店",
  },
  description:
    "葛飾区堀切の稲垣屋葬儀店は、葬祭ディレクター1級・区民葬儀取扱に対応した地域密着の葬儀社です。伝統を大切にしながら、ご家族の想いに寄り添う葬儀をご提案します。",
  keywords: [
    "葛飾区 葬儀",
    "葛飾区 葬儀社",
    "葛飾区 家族葬",
    "堀切 葬儀",
    "堀切 葬儀社",
    "区民葬儀 葛飾区",
    "稲垣屋葬儀店",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "稲垣屋葬儀店",
    title: "葛飾区で葬儀なら稲垣屋葬儀店｜家族葬・区民葬儀に対応",
    description:
      "葛飾区堀切の稲垣屋葬儀店は、葬祭ディレクター1級・区民葬儀取扱に対応した地域密着の葬儀社です。",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FuneralHome",
  name: "稲垣屋葬儀店",
  description:
    "葛飾区堀切の地域密着型葬儀社。葬祭ディレクター1級取得、区民葬儀取扱店。創業明治11年頃の歴史ある葬儀社です。",
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
  areaServed: {
    "@type": "City",
    name: "葛飾区",
  },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
