import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";
import RelatedColumns from "../../components/RelatedColumns";

export const metadata: Metadata = {
  title: "ご遺体の搬送・安置について｜葬儀の流れ｜稲垣屋葬儀店（葛飾区）",
  description:
    "ご逝去後のご遺体の搬送・安置について、葛飾区の稲垣屋葬儀店が丁寧にご説明します。病院・施設からのお迎え、安置場所の選び方、安置中の過ごし方など。24時間対応。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/flow/transport" },
};

const transportSteps = [
  {
    title: "病院・施設からの搬送",
    desc: "病院・介護施設などでご逝去された場合、稲垣屋葬儀店が故人様をお迎えに参ります。病院によって安置できる時間に制限がある場合がありますので、なるべく早めにご連絡ください。",
  },
  {
    title: "ご自宅での安置",
    desc: "故人様をご自宅でお迎えしたい場合、搬送後にご自宅へお連れすることができます。ご自宅での安置は、故人様と最後の時間をゆっくりとお過ごしいただける環境です。枕飾りのご用意もいたします。",
  },
  {
    title: "安置施設でのご安置",
    desc: "ご自宅での安置が難しい場合は、稲垣屋葬儀店の安置施設をご利用いただけます。清潔で静かな環境で、故人様を安全にお預かりします。",
  },
  {
    title: "遠方からの搬送",
    desc: "遠方でご逝去された場合の搬送も承っております。詳しい状況をお電話でお聞かせください。",
  },
];

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "ご遺体の搬送・安置の流れ｜稲垣屋葬儀店",
  description:
    "ご逝去後のご遺体の搬送・安置について、葛飾区の稲垣屋葬儀店が丁寧にご説明します。病院・施設からのお迎え、安置場所の選び方、安置中の過ごし方など。24時間対応。",
  step: transportSteps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.title,
    text: s.desc,
  })),
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "ご遺体の搬送・安置について｜葬儀の流れ｜稲垣屋葬儀店（葛飾区）",
  description:
    "ご逝去後のご遺体の搬送・安置について、葛飾区の稲垣屋葬儀店が丁寧にご説明します。病院・施設からのお迎え、安置場所の選び方、安置中の過ごし方など。24時間対応。",
  url: "https://www.inagakiyasougiten.com/flow/transport",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀の流れ", item: "https://www.inagakiyasougiten.com/flow" },
      { "@type": "ListItem", position: 3, name: "ご遺体の搬送・安置について｜葬儀の流れ", item: "https://www.inagakiyasougiten.com/flow/transport" },
    ],
  },
};

export default function FlowTransportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <PageHero title="搬送・安置について" subtitle="ご逝去後、故人様を丁寧にお迎えし安置します" en="TRANSPORT & LAYING IN STATE" />
      <Breadcrumb items={[{ label: "葬儀の流れ", href: "/flow" }, { label: "搬送・安置" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">TRANSPORT</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              搬送について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              ご逝去後は、故人様を病院・施設・ご自宅などからご指定の安置場所まで搬送します。稲垣屋葬儀店では、深夜・早朝・休日を問わず迅速に対応し、故人様を丁寧にお迎えします。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {transportSteps.map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3 className="text-[#312852] text-lg tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">LAYING IN STATE</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              安置中について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {[
              {
                title: "枕飾り",
                desc: "ご安置場所に、枕飾り（線香・蝋燭・花など）をご用意します。宗教・宗派によって形式が異なりますので、ご希望をお聞かせください。",
              },
              {
                title: "ドライアイス・保全処置",
                desc: "ご遺体を適切な状態で保全するため、ドライアイスなどの処置を行います。",
              },
              {
                title: "お参り・線香の上げ方",
                desc: "ご安置中、ご家族・ご親族はいつでもお参りいただけます。線香を絶やさないよう注意が必要な場合もありますので、詳しくはスタッフにご確認ください。",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3 className="text-[#312852] text-lg tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp>
            <div className="flex flex-wrap gap-4">
              <Link href="/flow/after-death" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                ご逝去直後にすること<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/flow/meeting" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                打ち合わせについて<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/flow" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                葬儀全体の流れ<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* 関連コラム */}
      <section className="py-14 md:py-20 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-7">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COLUMN</p>
            <h2 className="text-[#312852] text-xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              関連コラム
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-4" />
          </FadeInUp>
          <RelatedColumns slugs={["transport-and-resting", "what-to-do-after-death-katsushika", "funeral-flow-basic", "death-at-hospital"]} />
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              搬送・安置についてご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              稲垣屋葬儀店は24時間365日対応。いつでもお電話ください。
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 group justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
              <MessageCircle size={17} />お問い合わせ<ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
