import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "一般葬｜葛飾区の葬儀社 稲垣屋葬儀店",
  description: "葛飾区の稲垣屋葬儀店の一般葬プラン。お通夜・告別式を執り行う伝統的な葬儀スタイル。費用・流れ・特徴をご紹介します。",
};

const flow = [
  { step: "1", title: "ご逝去・ご連絡", desc: "24時間いつでもご連絡ください。迅速にお迎えに参ります。" },
  { step: "2", title: "ご安置・打ち合わせ", desc: "葬儀の日程・参列者への連絡・内容などを打ち合わせします。" },
  { step: "3", title: "納棺", desc: "故人様を棺に納めます。" },
  { step: "4", title: "お通夜", desc: "関係者にお集まりいただき、お通夜を執り行います。" },
  { step: "5", title: "告別式", desc: "多くの参列者をお迎えし、告別式を執り行います。" },
  { step: "6", title: "出棺・火葬・収骨", desc: "火葬場にてご出棺、火葬、収骨を行います。" },
];

export default function GeneralFuneralPage() {
  return (
    <>
      <PageHero title="一般葬" subtitle="伝統に則った、多くのご参列者とのお別れ" en="TRADITIONAL FUNERAL" />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">WHAT IS TRADITIONAL FUNERAL</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>一般葬とは</h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            <StaggerItem>
              <div className="py-8">
                <p className="text-[#4a4a4a] text-base md:text-lg leading-loose">
                  一般葬とは、お通夜・告別式を執り行う伝統的な葬儀スタイルです。故人と縁のあった多くの方々にお集まりいただき、きちんとしたお別れができます。社会的な関係者も含めて広くご参列いただける形式であり、故人の交友関係や社会的な立場を大切にしたいという方にも選ばれています。
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="py-8">
                <h3 className="text-[#312852] text-xl tracking-wide mb-4" style={{ fontFamily: "var(--font-mincho)" }}>一般葬の特徴</h3>
                <ul className="space-y-3">
                  {["故人と縁のあった多くの方々にお集まりいただける", "お通夜・告別式という伝統的な形式で丁寧にお送り", "職場関係者・友人など広く参列者をお迎えできる", "社会的なお別れの場として適している"].map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-[#4a4a4a] text-base">
                      <span className="w-1 h-1 bg-[#9278be] rounded-full shrink-0 mt-2.5" />{pt}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="py-8">
                <h3 className="text-[#312852] text-xl tracking-wide mb-4" style={{ fontFamily: "var(--font-mincho)" }}>こんな方に一般葬がおすすめです</h3>
                <ul className="space-y-3">
                  {["多くの方に故人とのお別れの機会を持っていただきたい", "伝統的な形式できちんとした葬儀をしたい", "故人の社会的関係を大切にしたい", "会社関係・地域関係者もご参列される予定がある"].map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-[#4a4a4a] text-base">
                      <span className="w-1 h-1 bg-[#9278be] rounded-full shrink-0 mt-2.5" />{pt}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <FadeInUp className="mt-16 mb-8">
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>一般葬の流れ</h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {flow.map((f) => (
              <StaggerItem key={f.step}>
                <div className="flex items-start gap-6 py-6">
                  <span className="text-[#c9a55a] text-sm tracking-wide shrink-0 w-6 pt-0.5" style={{ fontFamily: "var(--font-mincho)" }}>{f.step}</span>
                  <div>
                    <h4 className="text-[#312852] text-base tracking-wide mb-1.5" style={{ fontFamily: "var(--font-mincho)" }}>{f.title}</h4>
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
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>一般葬についてご相談ください</h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">費用や流れについて、まずはお気軽にご相談ください。</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 group w-full sm:w-auto justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
                <MessageCircle size={17} />お問い合わせ<ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/plans" className="inline-flex items-center gap-2 border border-[#9278be] text-[#5c4a80] hover:bg-[#ede7f6] px-8 py-4 tracking-wider transition-colors duration-300 w-full sm:w-auto justify-center" style={{ fontFamily: "var(--font-mincho)" }}>プラン一覧に戻る</Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
