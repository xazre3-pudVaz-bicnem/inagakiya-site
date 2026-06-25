import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import Breadcrumb from "../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "創業の歴史｜明治11年頃創業・葛飾区堀切の稲垣屋葬儀店",
  description:
    "稲垣屋葬儀店の創業の歴史。明治11年頃に葛飾区堀切で創業し、時代とともに葛飾区の皆さまのご葬儀をお手伝いしてきた歴史をご紹介します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/history" },
};

const milestones = [
  {
    era: "明治11年頃",
    title: "創業",
    desc: "葛飾区堀切の地にて創業。地域に根付いた葬儀社として、堀切・お花茶屋・青戸など葛飾区内のご葬儀をお手伝いし始める。",
  },
  {
    era: "昭和・平成",
    title: "地域との絆を深める",
    desc: "葛飾区内の地域コミュニティとともに成長。区民葬儀取扱店としての認定を受け、葛飾区民の皆さまへのサービスを拡充する。",
  },
  {
    era: "現代",
    title: "伝統と革新の融合",
    desc: "父から息子へと受け継がれた稲垣屋葬儀店。伝統の技と現代のニーズに応える新体制で、家族葬・一日葬・火葬式など多様な葬儀形式に対応。葬祭ディレクター1級・認定飯田葬儀相談員など専門資格を取得し、葛飾区の皆さまに安心の葬儀サービスを提供している。",
  },
];

export default function HistoryPage() {
  return (
    <>
      <PageHero title="創業の歴史" subtitle="明治11年頃より、葛飾区堀切に根付いてきた歴史" en="OUR HISTORY" />
      <Breadcrumb items={[{ label: "創業の歴史" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">OUR HISTORY</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              葛飾区堀切から、時代を超えて
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              稲垣屋葬儀店は、創業明治11年頃より葛飾区堀切の地に根付いた葬儀社です。時代の流れの中で葬儀の形は変化してきましたが、「大切な方を心を込めてお送りする」という想いは変わることなく受け継がれています。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {milestones.map((m) => (
              <StaggerItem key={m.era}>
                <div className="flex items-start gap-6 py-8">
                  <div className="shrink-0 pt-1">
                    <p className="text-[#c9a55a] text-sm tracking-[0.2em] whitespace-nowrap" style={{ fontFamily: "var(--font-mincho)" }}>
                      {m.era}
                    </p>
                  </div>
                  <div className="flex-1 border-l border-[#e8ddf4] pl-6">
                    <h3 className="text-[#312852] text-xl tracking-wide mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                      {m.title}
                    </h3>
                    <p className="text-[#4a4a4a] text-base leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              稲垣屋葬儀店が長く葛飾区の皆さまに支えられてきた理由——それは、単に葬儀を執り行うだけでなく、ご遺族の悲しみに寄り添い、地域の人々との繋がりを大切にしてきたからだと考えています。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              これからも、不易流行の精神で——変わらぬ本質を守りながら、時代のニーズに応えて——葛飾区の皆さまのご葬儀をお手伝いしてまいります。
            </p>
          </FadeInUp>

          <FadeInUp className="mt-10">
            <div className="flex flex-wrap gap-4">
              <Link href="/about" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                稲垣屋葬儀店について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/message" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                代表からのご挨拶<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/qualification" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                資格・認定<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
