import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "家族葬｜葛飾区の葬儀社 稲垣屋葬儀店",
  description:
    "葛飾区の稲垣屋葬儀店の家族葬プラン。ご家族やごく親しい方だけで心静かにお別れできる家族葬について、費用・流れ・特徴をご紹介します。",
};

const flow = [
  { step: "1", title: "ご逝去・ご連絡", desc: "24時間いつでもご連絡ください。迅速にお迎えに参ります。" },
  { step: "2", title: "ご安置・打ち合わせ", desc: "ご自宅または安置施設にてご安置します。葬儀の日程・プランを打ち合わせます。" },
  { step: "3", title: "納棺", desc: "故人様を棺に納め、ご家族でお別れの時間をお持ちいただけます。" },
  { step: "4", title: "通夜（ご希望の場合）", desc: "少人数でのお通夜を執り行います。省略することも可能です。" },
  { step: "5", title: "告別式", desc: "ご家族でお集まりいただき、心を込めて故人をお見送りします。" },
  { step: "6", title: "火葬・収骨", desc: "火葬場にてご出棺、火葬を行います。ご家族で収骨をお行いいただきます。" },
];

export default function FamilyFuneralPage() {
  return (
    <>
      <PageHero title="家族葬" subtitle="ご家族だけで、静かに心を込めてお別れする葬儀" en="FAMILY FUNERAL" />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* What is */}
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">WHAT IS FAMILY FUNERAL</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              家族葬とは
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            <StaggerItem>
              <div className="py-8">
                <p className="text-[#4a4a4a] text-base md:text-lg leading-loose">
                  家族葬とは、ご家族やごく親しい方だけで行う小規模な葬儀です。一般的な葬儀と比べて参列者が少なく、ご遺族が故人とゆっくりお別れできる時間が持てることが特徴です。近年、葛飾区でも家族葬を選ぶご家族が増えています。費用を抑えながらも、心のこもったお別れができると多くの方にご好評いただいています。
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="py-8">
                <h3 className="text-[#312852] text-xl tracking-wide mb-4" style={{ fontFamily: "var(--font-mincho)" }}>
                  家族葬の特徴
                </h3>
                <ul className="space-y-3">
                  {[
                    "ご家族やごく親しい方のみが参列（10〜30名程度が一般的）",
                    "参列者が少ない分、故人との最後の時間をゆっくりと過ごせる",
                    "一般葬に比べ、費用を抑えながらも心のこもった葬儀が可能",
                    "参列者への対応に気を遣わず、故人との時間を大切にできる",
                  ].map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-[#4a4a4a] text-base">
                      <span className="w-1 h-1 bg-[#9278be] rounded-full shrink-0 mt-2.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="py-8">
                <h3 className="text-[#312852] text-xl tracking-wide mb-4" style={{ fontFamily: "var(--font-mincho)" }}>
                  こんな方に家族葬がおすすめです
                </h3>
                <ul className="space-y-3">
                  {[
                    "ご家族や親しい方だけでゆっくりお別れしたい",
                    "費用を抑えながらも心のこもった葬儀をしたい",
                    "故人の遺志で家族だけの葬儀を希望された",
                    "遠方の方への連絡が難しい状況",
                  ].map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-[#4a4a4a] text-base">
                      <span className="w-1 h-1 bg-[#9278be] rounded-full shrink-0 mt-2.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Flow */}
          <FadeInUp className="mt-16 mb-8">
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              家族葬の一般的な流れ
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {flow.map((f) => (
              <StaggerItem key={f.step}>
                <div className="flex items-start gap-6 py-6">
                  <span className="text-[#c9a55a] text-sm tracking-wide shrink-0 w-6 pt-0.5" style={{ fontFamily: "var(--font-mincho)" }}>
                    {f.step}
                  </span>
                  <div>
                    <h4 className="text-[#312852] text-base tracking-wide mb-1.5" style={{ fontFamily: "var(--font-mincho)" }}>
                      {f.title}
                    </h4>
                    <p className="text-[#4a4a4a] text-base leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              家族葬についてご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">費用や流れについて、まずはお気軽にご相談ください。</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 group w-full sm:w-auto justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
                <MessageCircle size={17} />お問い合わせ
                <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/plans" className="inline-flex items-center gap-2 border border-[#9278be] text-[#5c4a80] hover:bg-[#ede7f6] px-8 py-4 tracking-wider transition-colors duration-300 w-full sm:w-auto justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
                プラン一覧に戻る
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
