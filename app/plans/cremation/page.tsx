import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "葛飾区の火葬式・直葬｜シンプルなお別れのご相談｜稲垣屋葬儀店",
  description:
    "火葬式（直葬）は通夜・告別式を行わず、火葬のみで見送る最もシンプルな葬儀形式です。葛飾区の稲垣屋葬儀店では、火葬式についても丁寧にご相談に応じます。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/plans/cremation" },
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "葛飾区の火葬式・直葬｜シンプルなお別れのご相談｜稲垣屋葬儀店",
  description:
    "火葬式（直葬）は通夜・告別式を行わず、火葬のみで見送る最もシンプルな葬儀形式です。葛飾区の稲垣屋葬儀店では、火葬式についても丁寧にご相談に応じます。",
  url: "https://www.inagakiyasougiten.com/plans/cremation",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀プラン", item: "https://www.inagakiyasougiten.com/plans" },
      { "@type": "ListItem", position: 3, name: "火葬式", item: "https://www.inagakiyasougiten.com/plans/cremation" },
    ],
  },
};

const flow = [
  { number: "01", title: "ご逝去・ご連絡", desc: "24時間いつでもご連絡ください。深夜・早朝・休日を問わず、迅速にお迎えに参ります。" },
  { number: "02", title: "ご安置", desc: "ご自宅または安置施設にてご安置します。火葬の日程を調整します。" },
  { number: "03", title: "納棺", desc: "故人様を棺に納め、ご家族でお別れの時間をお持ちいただけます。" },
  { number: "04", title: "火葬前のお別れ", desc: "火葬場にて、ごく近しい方でお別れの時間をもつことができます。" },
  { number: "05", title: "火葬・収骨", desc: "火葬を行い、ご家族で収骨をお行いいただきます。" },
];

export default function CremationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

      <PageHero title="火葬式（直葬）" subtitle="お通夜・告別式を行わず、火葬のみで静かにお見送りする葬儀" en="CREMATION ONLY" />
      <Breadcrumb items={[{ label: "葬儀プラン", href: "/plans" }, { label: "火葬式" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* このページでわかること */}
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ON THIS PAGE</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em] mb-6" style={{ fontFamily: "var(--font-mincho)" }}>
              このページでわかること
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mb-6" />
            <ul className="divide-y divide-[#e8ddf4]">
              {[
                "火葬式（直葬）とはどのような葬儀か",
                "火葬式が向いている方・向いていない方",
                "火葬式の一般的な流れ",
                "家族葬との費用・形式の違い",
                "ご相談・事前相談について",
              ].map((item) => (
                <li key={item} className="py-3 text-[#4a4a4a] text-base leading-relaxed pl-3 border-l-2 border-[#c9a55a] ml-px">
                  {item}
                </li>
              ))}
            </ul>
          </FadeInUp>

          {/* 火葬式とは */}
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">WHAT IS CREMATION</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              火葬式・直葬とはどのような葬儀か
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5 mb-8" />
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              火葬式（直葬）とは、お通夜・告別式を行わず、火葬のみを行う葬儀形式です。全ての葬儀形式の中で最もシンプルであり、ごく近しい方だけで静かにお見送りをされたい方に選ばれています。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              故人を安置したのち、火葬場に向かい、お別れの時間を経て火葬・収骨を行います。式典を行わないため、宗教的な儀礼のない形でのお見送りになります。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              形式はシンプルでも、故人への敬意は変わりません。稲垣屋葬儀店では、火葬式においても一つひとつ丁寧にお手伝いします。
            </p>
          </FadeInUp>

          {/* 向いている方・向いていない方 */}
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FOR WHOM</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              火葬式が向いている方・向いていない方
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {[
              {
                title: "向いている方",
                desc: "ごく近しい方だけで静かに見送りたい方、ご高齢や体力的に式典への出席が難しい方、生前に「シンプルに送ってほしい」というご意向があった方、日程や費用の面でシンプルな形式を希望される方。",
              },
              {
                title: "確認が必要な場合",
                desc: "菩提寺（お付き合いのあるお寺）がある場合は、火葬式について事前にご住職にご相談されることをお勧めします。宗派によっては、お寺への確認が必要なことがあります。また、後日「偲ぶ会」を別途行いたいというご家族もいらっしゃいます。",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3 className="text-[#312852] text-lg tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>{item.title}</h3>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* 火葬式の流れ */}
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FLOW</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              火葬式の流れ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {flow.map((step) => (
              <StaggerItem key={step.number}>
                <div className="flex items-start gap-6 py-8">
                  <div className="shrink-0 w-14 text-center pt-1">
                    <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-1">STEP</p>
                    <p className="text-[#c9a55a] text-2xl tracking-wider" style={{ fontFamily: "var(--font-mincho)" }}>{step.number}</p>
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="text-[#312852] text-lg tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>{step.title}</h4>
                    <p className="text-[#4a4a4a] text-base leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* 関連リンク */}
          <FadeInUp>
            <div className="flex flex-wrap gap-4">
              <Link href="/cost/cremation" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                火葬式の費用について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/plans/cremation/difference" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                火葬式と他の形式の違い<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/compare/family-vs-cremation" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                家族葬と火葬式の比較<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/plans" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                他のプランを見る<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>火葬式についてご相談ください</h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">事前相談は無料です。お気軽にご連絡ください。</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 group w-full sm:w-auto justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
                <MessageCircle size={17} />お問い合わせ<ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/consultation" className="inline-flex items-center gap-2 border border-[#9278be] text-[#5c4a80] hover:bg-[#ede7f6] px-8 py-4 tracking-wider transition-colors duration-300 w-full sm:w-auto justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
                事前相談について
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
