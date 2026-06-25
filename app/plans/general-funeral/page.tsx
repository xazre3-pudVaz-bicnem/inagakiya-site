import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "一般葬｜葛飾区の一般葬なら稲垣屋葬儀店｜お通夜・告別式の伝統的な葬儀",
  description:
    "葛飾区の稲垣屋葬儀店の一般葬プラン。お通夜・告別式を執り行う伝統的な葬儀形式。多くの方にお別れいただける形式の費用・流れ・特徴をご紹介します。事前相談無料。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/plans/general-funeral" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "一般葬",
  description: "お通夜・告別式を執り行う伝統的な葬儀。葛飾区の稲垣屋葬儀店がご相談に応じます。",
  provider: {
    "@type": "FuneralHome",
    name: "稲垣屋葬儀店",
    url: "https://www.inagakiyasougiten.com",
  },
  areaServed: { "@type": "City", name: "葛飾区" },
  url: "https://www.inagakiyasougiten.com/plans/general-funeral",
};

const flow = [
  { number: "01", title: "ご逝去・ご連絡", desc: "24時間いつでもご連絡ください。深夜・早朝・休日を問わず、迅速にお迎えに参ります。" },
  { number: "02", title: "ご安置・打ち合わせ", desc: "ご安置後、葬儀の日程・内容について詳しく打ち合わせをします。参列者の規模・宗教者・費用について確認します。" },
  { number: "03", title: "訃報のご連絡", desc: "ご葬儀の日程・場所をご遺族・参列予定者にお知らせします。" },
  { number: "04", title: "通夜", desc: "夕方から始まるお通夜を執り行います。故人と縁のある方々にお集まりいただきます。" },
  { number: "05", title: "告別式", desc: "翌日、告別式を執り行います。宗教者（お坊さんなど）による式典の後、参列者が最後のお別れをします。" },
  { number: "06", title: "出棺・火葬・収骨", desc: "告別式後にご出棺し、火葬場へ向かいます。火葬が終わったらご家族で収骨を行います。" },
];

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "一般葬｜葛飾区の一般葬なら稲垣屋葬儀店｜お通夜・告別式の伝統的な葬儀",
  description:
    "葛飾区の稲垣屋葬儀店の一般葬プラン。お通夜・告別式を執り行う伝統的な葬儀形式。多くの方にお別れいただける形式の費用・流れ・特徴をご紹介します。事前相談無料。",
  url: "https://www.inagakiyasougiten.com/plans/general-funeral",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀プラン", item: "https://www.inagakiyasougiten.com/plans" },
      { "@type": "ListItem", position: 3, name: "一般葬", item: "https://www.inagakiyasougiten.com/plans/general-funeral" },
    ],
  },
};

export default function GeneralFuneralPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <PageHero title="一般葬" subtitle="お通夜・告別式を執り行う、伝統的な葬儀形式" en="TRADITIONAL FUNERAL" />
      <Breadcrumb items={[{ label: "葬儀プラン", href: "/plans" }, { label: "一般葬" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">WHAT IS GENERAL FUNERAL</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              一般葬とは
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              一般葬とは、お通夜と告別式を執り行う伝統的な葬儀形式です。故人と縁のあった多くの方々にお集まりいただき、きちんとしたお別れができます。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              地域のつながりが深い葛飾区では、近所の方々や職場関係者など、多くの方に参列いただける一般葬が今も選ばれています。稲垣屋葬儀店は、葛飾区堀切に根付いた葬儀社として、地域の慣習に沿った葬儀をきめ細かくお手伝いします。
            </p>
          </FadeInUp>

          <FadeInUp className="mt-14 mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FEATURES</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              一般葬の特徴
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {[
              { title: "多くの方に参列いただける", desc: "参列者に制限がないため、故人の友人・知人・仕事関係者・近所の方々など、幅広い方々にお別れいただけます。" },
              { title: "伝統的な形式で格式あるお別れ", desc: "お通夜・告別式という伝統的な形式で、格式のあるお別れが可能です。宗教的な儀式を大切にされる方に選ばれています。" },
              { title: "社会的なお別れの場", desc: "一般葬は、ご遺族が故人の交友関係に対してお別れの機会を提供する場でもあります。香典・弔電・供花など、多くの方からの心遣いを受け取ることができます。" },
              { title: "費用の注意点", desc: "参列者が多い分、飲食・返礼品などの費用がかかります。規模・内容に応じて費用が異なりますので、事前に詳細をご確認ください。" },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3 className="text-[#312852] text-lg tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>{item.title}</h3>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FLOW</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              一般葬の流れ
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

          <FadeInUp>
            <div className="flex flex-wrap gap-4">
              <Link href="/plans" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                他のプランを見る<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/cost" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                費用について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>一般葬についてご相談ください</h2>
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
