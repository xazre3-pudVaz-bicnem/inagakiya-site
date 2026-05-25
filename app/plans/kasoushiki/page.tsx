import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "火葬式｜葛飾区の葬儀社 稲垣屋葬儀店",
  description: "葛飾区の稲垣屋葬儀店の火葬式プラン。通夜・告別式を行わずに火葬のみを行うシンプルな直葬。費用・流れ・特徴をご紹介します。",
};

const flow = [
  { step: "1", title: "ご逝去・ご連絡", desc: "24時間いつでもご連絡ください。迅速にお迎えに参ります。" },
  { step: "2", title: "ご安置", desc: "ご自宅または安置施設にてご安置します。" },
  { step: "3", title: "火葬場へのご移動", desc: "火葬場へご移動いただきます。" },
  { step: "4", title: "お別れ・出棺", desc: "火葬前に僅かな時間ですが、故人とお別れの時間をお持ちいただけます。" },
  { step: "5", title: "火葬", desc: "火葬を行います。" },
  { step: "6", title: "収骨", desc: "ご家族で収骨をお行いいただきます。" },
];

export default function KasoushikiPage() {
  return (
    <>
      <PageHero title="火葬式" subtitle="最もシンプルな形で故人をお送りする葬儀" en="CREMATION ONLY" />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">WHAT IS CREMATION ONLY</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>火葬式とは</h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            <StaggerItem>
              <div className="py-8">
                <p className="text-[#4a4a4a] text-base md:text-lg leading-loose">
                  火葬式（直葬）とは、お通夜・告別式を行わず、火葬のみを行うシンプルな葬儀スタイルです。最もシンプルな形での葬儀であり、費用を最大限に抑えることができます。シンプルではありますが、故人への敬意は変わりません。稲垣屋葬儀店では、火葬式においても心を込めてお手伝いいたします。
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="py-8">
                <h3 className="text-[#312852] text-xl tracking-wide mb-4" style={{ fontFamily: "var(--font-mincho)" }}>火葬式の特徴</h3>
                <ul className="space-y-3">
                  {["通夜・告別式を省略した最もシンプルな葬儀形式", "お迎えから火葬まで短時間で完結", "全ての葬儀形式の中で最も費用を抑えられる", "ごく近しい方だけで静かにお別れできる"].map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-[#4a4a4a] text-base">
                      <span className="w-1 h-1 bg-[#9278be] rounded-full shrink-0 mt-2.5" />{pt}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="py-8">
                <h3 className="text-[#312852] text-xl tracking-wide mb-4" style={{ fontFamily: "var(--font-mincho)" }}>こんな方に火葬式がおすすめです</h3>
                <ul className="space-y-3">
                  {["シンプルで費用を最小限に抑えたい", "故人の遺志でシンプルな葬儀を希望された", "ごく近しい方だけで静かにお別れしたい", "遺族の高齢・体調などで大きな葬儀が難しい"].map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-[#4a4a4a] text-base">
                      <span className="w-1 h-1 bg-[#9278be] rounded-full shrink-0 mt-2.5" />{pt}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <FadeInUp className="mt-16 mb-8">
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>火葬式の流れ</h3>
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
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>火葬式についてご相談ください</h2>
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
