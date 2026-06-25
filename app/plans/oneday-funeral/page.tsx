import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "一日葬｜葛飾区の一日葬なら稲垣屋葬儀店｜お通夜なし・告別式当日に火葬",
  description:
    "葛飾区の稲垣屋葬儀店の一日葬プラン。お通夜を省略し、告別式と火葬を一日で行います。ご遺族の負担を軽減しながら、きちんとしたお別れが可能。事前相談無料。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/plans/oneday-funeral" },
};

const flow = [
  { number: "01", title: "ご逝去・ご連絡", desc: "24時間いつでもご連絡ください。深夜・早朝・休日を問わず、迅速にお迎えに参ります。" },
  { number: "02", title: "ご安置・打ち合わせ", desc: "ご自宅または安置施設にてご安置します。葬儀の日程・プランを丁寧に打ち合わせます。" },
  { number: "03", title: "納棺", desc: "故人様を棺に納め、ご家族でお別れの時間をお持ちいただけます。" },
  { number: "04", title: "告別式", desc: "午前中に告別式を執り行います。ご家族・参列者で心を込めて故人をお見送りします。" },
  { number: "05", title: "出棺・火葬", desc: "告別式後にご出棺し、火葬場へ向かいます。火葬が終わったらご家族で収骨を行います。" },
];

export default function OnedayFuneralPage() {
  return (
    <>
      <PageHero title="一日葬" subtitle="お通夜を省略し、一日で告別式・火葬を執り行う葬儀" en="ONE-DAY FUNERAL" />
      <Breadcrumb items={[{ label: "葬儀プラン", href: "/plans" }, { label: "一日葬" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">WHAT IS ONE-DAY FUNERAL</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              一日葬とは
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              一日葬とは、お通夜を省略し、告別式と火葬を同じ日に執り行う葬儀スタイルです。二日間の日程が必要な一般葬や家族葬と比べて、ご遺族の体力的・精神的な負担を軽減できます。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              お通夜がない分、費用を抑えられる傾向がありますが、告別式・火葬の費用は通常通りかかります。費用については事前に詳細をご確認ください。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              「きちんとした告別式でお別れしたいが、二日間の日程は難しい」というご家族に選ばれています。
            </p>
          </FadeInUp>

          <FadeInUp className="mt-14 mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FEATURES</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              一日葬の特徴
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {[
              { title: "日程が一日で完結", desc: "告別式と火葬を同日に行うため、二日間の日程を確保するのが難しいご家族でも葬儀を執り行えます。遠方からの参列者への配慮にもなります。" },
              { title: "きちんとした告別式でお別れ", desc: "お通夜は省略しますが、告別式は行います。故人とのきちんとしたお別れが可能です。" },
              { title: "体力的・精神的負担の軽減", desc: "一日で終わるため、ご遺族の体力的・精神的な疲弊を抑えやすい形式です。" },
              { title: "費用の目安", desc: "お通夜がない分、費用を抑えられる傾向があります。ただし費用はプランの内容によって異なります。詳細は事前にお見積もりをご提示します。" },
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
              一日葬の流れ
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
              <Link href="/cost/oneday-funeral" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                一日葬の費用について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>一日葬についてご相談ください</h2>
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
