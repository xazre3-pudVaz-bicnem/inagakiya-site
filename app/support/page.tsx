import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import Breadcrumb from "../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "サポート情報｜葛飾区の葬儀を総合的にサポート｜稲垣屋葬儀店",
  description:
    "稲垣屋葬儀店のサポート情報一覧。葬儀後の手続き・マナー・服装・香典・はじめての葬儀まで、葛飾区の葬儀に関する情報を幅広くご提供します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/support" },
};

const pages = [
  {
    href: "/support/first-time",
    title: "はじめて葬儀を行う方へ",
    desc: "急なご逝去でも慌てないよう、葬儀の全体像・流れ・費用・プランの選び方を丁寧にご説明します。",
  },
  {
    href: "/support/parent-funeral",
    title: "親の葬儀を考え始めた方へ",
    desc: "まだ元気な時期から事前相談・費用・葬儀形式・区民葬儀制度について考えておくべきことをご案内します。",
  },
  {
    href: "/support/small-funeral",
    title: "小規模な葬儀を希望される方へ",
    desc: "家族葬・一日葬・火葬式の違いと選び方、それぞれのメリットと注意点をわかりやすく解説します。",
  },
  {
    href: "/support/no-religion",
    title: "無宗教葬について",
    desc: "無宗教葬（自由葬）の特徴・流れ・注意点・仏式葬儀との違いについて丁寧にご説明します。",
  },
  {
    href: "/support/preparing",
    title: "もしもの時に備えて準備すること",
    desc: "生前準備・エンディングノート・菩提寺の確認・費用の準備など、今から備えておくことをご案内します。",
  },
  {
    href: "/support/after-funeral",
    title: "葬儀後の手続き一覧",
    desc: "死亡届・年金停止・保険・相続など、葬儀後に必要な手続きを時系列でまとめています。",
  },
  {
    href: "/support/documents",
    title: "死亡届・火葬許可証について",
    desc: "死亡届の提出期限・必要書類・火葬許可証・埋葬許可証の取得方法を詳しく解説します。",
  },
  {
    href: "/support/manners",
    title: "葬儀のマナー",
    desc: "参列時の服装・香典の包み方・焼香の作法・忌み言葉など、葬儀に関するマナーを解説します。",
  },
  {
    href: "/support/kouden",
    title: "香典について",
    desc: "香典の金額目安・不祝儀袋の選び方・表書き・香典返しについて詳しくご説明します。",
  },
  {
    href: "/support/attire",
    title: "葬儀の服装について",
    desc: "男性・女性・子供の喪服・略式喪服・アクセサリー・靴・バッグのルールをわかりやすく解説します。",
  },
];

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "サポート情報｜葛飾区の葬儀を総合的にサポート｜稲垣屋葬儀店",
  description:
    "稲垣屋葬儀店のサポート情報一覧。葬儀後の手続き・マナー・服装・香典・はじめての葬儀まで、葛飾区の葬儀に関する情報を幅広くご提供します。",
  url: "https://www.inagakiyasougiten.com/support",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀サポート", item: "https://www.inagakiyasougiten.com/support" },
    ],
  },
};

export default function SupportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <PageHero
        title="葬儀に関するサポート情報"
        subtitle="葛飾区の稲垣屋葬儀店が葬儀に関する情報を幅広くご提供します"
        en="SUPPORT INFORMATION"
      />
      <Breadcrumb items={[{ label: "サポート情報" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">SUPPORT GUIDE</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              ご葬儀に関する情報
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
            <p className="text-[#4a4a4a] text-base leading-loose mt-6">
              稲垣屋葬儀店では、葛飾区をはじめとする地域の皆様が安心してご葬儀を迎えられるよう、葬儀に関するさまざまな情報をご提供しております。はじめて葬儀を行う方、親の葬儀を考え始めた方、服装やマナーを確認したい方など、どうぞご参考ください。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {pages.map((page) => (
              <StaggerItem key={page.href}>
                <Link href={page.href} className="flex items-center justify-between gap-6 py-7 group">
                  <div>
                    <h3
                      className="text-[#312852] text-xl tracking-wide mb-1.5 group-hover:text-[#5c4a80] transition-colors"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      {page.title}
                    </h3>
                    <p className="text-[#4a4a4a] text-sm leading-relaxed">{page.desc}</p>
                  </div>
                  <ChevronRight
                    size={18}
                    className="text-[#b8a0d8] group-hover:text-[#5c4a80] group-hover:translate-x-1 transition-all shrink-0"
                  />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2
              className="text-[#312852] text-2xl tracking-[0.08em] mb-5"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              ご不明な点はお気軽にご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              稲垣屋葬儀店は24時間365日対応。どんなご相談でもお気軽にどうぞ。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 group w-full sm:w-auto justify-center"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                <MessageCircle size={17} />お問い合わせ<ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 border border-[#9278be] text-[#5c4a80] hover:bg-[#ede7f6] px-8 py-4 tracking-wider transition-colors duration-300 w-full sm:w-auto justify-center"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                事前相談について
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
