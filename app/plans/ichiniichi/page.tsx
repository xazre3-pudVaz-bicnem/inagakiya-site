import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "一日葬｜葛飾区の葬儀社 稲垣屋葬儀店",
  description: "葛飾区の稲垣屋葬儀店の一日葬プラン。お通夜を省略し告別式・火葬を一日で行うスタイル。費用・流れ・特徴をご紹介します。",
};

const flow = [
  { step: "1", title: "ご逝去・ご連絡", desc: "24時間いつでもご連絡ください。迅速にお迎えに参ります。" },
  { step: "2", title: "ご安置・打ち合わせ", desc: "ご安置の後、葬儀の日程・内容を打ち合わせします。" },
  { step: "3", title: "納棺", desc: "故人様を棺に納め、ご出棺の準備をします。" },
  { step: "4", title: "告別式", desc: "ご家族・参列者でお集まりいただき、告別式を執り行います。" },
  { step: "5", title: "出棺・火葬", desc: "火葬場にてご出棺、火葬を行います。" },
  { step: "6", title: "収骨", desc: "ご家族で収骨をお行いいただきます。" },
];

export default function IchiniichiPage() {
  return (
    <>
      <PageHero title="一日葬" subtitle="お通夜を省略し、一日で完結する葬儀スタイル" en="ONE-DAY FUNERAL" />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">WHAT IS ONE-DAY FUNERAL</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>一日葬とは</h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            <StaggerItem>
              <div className="py-8">
                <p className="text-[#4a4a4a] text-base md:text-lg leading-loose">
                  一日葬とは、従来の葬儀からお通夜を省略し、告別式と火葬を一日で執り行う葬儀スタイルです。ご遺族の体力的・精神的な負担を軽減しながらも、きちんとした告別式でお別れできます。費用も家族葬より抑えながら、告別式はしっかりと執り行うため、故人への敬意を表すことができます。
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="py-8">
                <h3 className="text-[#312852] text-xl tracking-wide mb-4" style={{ fontFamily: "var(--font-mincho)" }}>一日葬の特徴</h3>
                <ul className="space-y-3">
                  {["お通夜を省き、告別式・火葬を同日に行う", "ご遺族の体力的・精神的な負担を軽減", "一般葬や家族葬より費用を抑えられる", "遠方からの参列者も日程を調整しやすい"].map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-[#4a4a4a] text-base">
                      <span className="w-1 h-1 bg-[#9278be] rounded-full shrink-0 mt-2.5" />{pt}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="py-8">
                <h3 className="text-[#312852] text-xl tracking-wide mb-4" style={{ fontFamily: "var(--font-mincho)" }}>こんな方に一日葬がおすすめです</h3>
                <ul className="space-y-3">
                  {["ご遺族の体力的・精神的な負担を減らしたい", "二日間の葬儀が難しい状況", "費用を抑えながらも告別式はきちんと行いたい", "遠方からの参列者が多く、一日でまとめたい"].map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-[#4a4a4a] text-base">
                      <span className="w-1 h-1 bg-[#9278be] rounded-full shrink-0 mt-2.5" />{pt}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <FadeInUp className="mt-16 mb-8">
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>一日葬の流れ</h3>
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
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>一日葬についてご相談ください</h2>
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
