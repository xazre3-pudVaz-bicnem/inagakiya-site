import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import { FadeInUp, StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "葬儀プラン一覧｜葛飾区の葬儀社 稲垣屋葬儀店",
  description:
    "葛飾区の稲垣屋葬儀店の葬儀プラン。家族葬・一日葬・火葬式・一般葬・区民葬儀まで、ご家族のご希望に合わせた多様なプランをご用意しています。",
};

const plans = [
  {
    num: "01",
    title: "家族葬",
    en: "Family Funeral",
    href: "/plans/family",
    desc: "ご家族やごく親しい方だけで、心静かにお別れする葬儀スタイルです。故人様との最後の時間をゆっくりとお過ごしいただけます。",
    points: ["少人数でのお別れ（10〜30名程度）", "故人との時間をゆっくり過ごせる", "費用を抑えながらも丁寧な式"],
    recommended: "ご家族だけでゆっくりお別れしたい方",
  },
  {
    num: "02",
    title: "一日葬",
    en: "One-Day Funeral",
    href: "/plans/ichiniichi",
    desc: "お通夜を省略し、告別式・火葬を一日で行うスタイルです。ご遺族の負担を軽減しながらも、きちんとしたお別れができます。",
    points: ["お通夜なしで一日で完結", "ご遺族の体力的負担を軽減", "費用を家族葬より抑えられる"],
    recommended: "ご遺族の負担を減らしたい方",
  },
  {
    num: "03",
    title: "火葬式",
    en: "Cremation Only",
    href: "/plans/kasoushiki",
    desc: "お通夜・告別式を行わず、火葬のみのシンプルなお別れです。最もシンプルな形で故人をお送りします。",
    points: ["最もシンプルな葬儀形式", "費用を最小限に抑えられる", "近しい方だけで静かにお別れ"],
    recommended: "シンプルな式をご希望の方",
  },
  {
    num: "04",
    title: "一般葬",
    en: "Traditional Funeral",
    href: "/plans/general",
    desc: "お通夜・告別式を執り行う伝統的な葬儀です。多くのご参列者をお迎えし、故人を丁寧にお送りする形式です。",
    points: ["お通夜・告別式を執り行う", "多くのご参列者をお迎えできる", "伝統的な形式での丁寧な式"],
    recommended: "しっかりとした葬儀をご希望の方",
  },
  {
    num: "05",
    title: "区民葬儀",
    en: "Kuminso-gi",
    href: "/kuminsogi",
    desc: "葛飾区民の方が利用できる区民葬儀制度。稲垣屋葬儀店は区民葬儀取扱店として、費用を抑えながらも丁寧な葬儀を提供しています。",
    points: ["葛飾区民の方が対象", "区民葬儀制度で費用を抑えられる", "葛飾区指定取扱店"],
    recommended: "葛飾区民の方",
  },
];

export default function PlansPage() {
  return (
    <>
      <PageHero
        title="葬儀プラン"
        subtitle="ご家族のご希望に合わせた多様なプランをご用意しています"
        en="FUNERAL PLANS"
      />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">PLANS</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              5つの葬儀プラン
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
            <p className="text-[#4a4a4a] mt-5 text-base md:text-lg leading-relaxed max-w-2xl">
              稲垣屋葬儀店では、ご家族のご希望に合わせたさまざまな葬儀プランをご用意しています。
              まずはお気軽にご相談ください。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {plans.map((plan) => (
              <StaggerItem key={plan.num}>
                <Link href={plan.href} className="flex items-start gap-6 py-10 group">
                  <span
                    className="text-[#c9a55a] text-xs tracking-[0.2em] shrink-0 pt-1.5 w-6"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    {plan.num}
                  </span>
                  <div className="flex-1">
                    <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-1">{plan.en}</p>
                    <h3
                      className="text-[#312852] text-2xl md:text-3xl tracking-wide mb-3 group-hover:text-[#5c4a80] transition-colors"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      {plan.title}
                    </h3>
                    <p className="text-[#4a4a4a] text-base leading-loose mb-4">{plan.desc}</p>
                    <ul className="space-y-1.5 mb-4">
                      {plan.points.map((pt) => (
                        <li key={pt} className="flex items-center gap-2.5 text-sm text-[#4a4a4a]">
                          <span className="w-1 h-1 bg-[#9278be] rounded-full shrink-0" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <p className="text-[#7560a0] text-sm">
                      <span className="text-[#c9a55a] mr-2">◇</span>
                      こんな方におすすめ：{plan.recommended}
                    </p>
                  </div>
                  <ChevronRight
                    size={18}
                    className="text-[#b8a0d8] group-hover:text-[#5c4a80] group-hover:translate-x-1 transition-all shrink-0 mt-6"
                  />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-4">CONSULTATION</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em] mb-5"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              どのプランが合うか分からない方へ
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8 max-w-xl mx-auto">
              ご家族の状況やご希望をお聞きして、最適なプランをご提案します。
              まずはお気軽にご相談ください。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-10 py-5 text-base tracking-wider transition-colors duration-300 group"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              無料相談・お問い合わせ
              <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
