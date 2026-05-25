import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import { FadeInUp, StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "区民葬儀｜葛飾区の葬儀社 稲垣屋葬儀店",
  description:
    "葛飾区の区民葬儀取扱店・稲垣屋葬儀店。葛飾区民の方が利用できる区民葬儀制度について、費用・内容・利用方法をご紹介します。",
};

export default function KuminsogiPage() {
  return (
    <>
      <PageHero title="区民葬儀" subtitle="葛飾区民の方が利用できる区民葬儀制度" en="KUMINSO-GI" />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">CERTIFIED STORE</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              区民葬儀取扱店
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            <StaggerItem>
              <div className="py-8">
                <h3 className="text-[#312852] text-xl tracking-wide mb-4" style={{ fontFamily: "var(--font-mincho)" }}>区民葬儀とは</h3>
                <p className="text-[#4a4a4a] text-base md:text-lg leading-loose">
                  区民葬儀とは、葛飾区が設けている制度で、葛飾区民の方が利用できる葬儀サービスです。区が指定した葬儀取扱店（稲垣屋葬儀店はその一つ）を通じて申し込むことで、一般的な葬儀よりも費用を抑えることができます。稲垣屋葬儀店は葛飾区が指定する区民葬儀取扱店として、区民の皆さまに費用面でも安心した葬儀をご提供しています。
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="py-8">
                <h3 className="text-[#312852] text-xl tracking-wide mb-4" style={{ fontFamily: "var(--font-mincho)" }}>区民葬儀のメリット</h3>
                <ul className="space-y-3">
                  {[
                    { icon: Shield, text: "区の制度を活用することで、一般的な葬儀よりも費用を抑えることができます" },
                    { icon: Shield, text: "葛飾区が認定した取扱店なので、安心してご依頼いただけます" },
                    { icon: Shield, text: "区の基準を満たした葬儀社のみが取扱店として認定されています" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[#4a4a4a] text-base">
                      <span className="w-1 h-1 bg-[#9278be] rounded-full shrink-0 mt-2.5" />
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="py-8">
                <h3 className="text-[#312852] text-xl tracking-wide mb-4" style={{ fontFamily: "var(--font-mincho)" }}>ご利用条件</h3>
                <ul className="space-y-3">
                  {[
                    "葛飾区民（葛飾区に住民票を持つ方）が対象です",
                    "ご逝去された方、または喪主の方が葛飾区民の場合に利用できます",
                    "詳細な条件は葛飾区の規定によります",
                    "ご不明な点はお気軽にお問い合わせください",
                  ].map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-[#4a4a4a] text-base">
                      <span className="w-1 h-1 bg-[#9278be] rounded-full shrink-0 mt-2.5" />{pt}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="py-8">
                <p className="text-[#7560a0] text-sm leading-loose">
                  ※ 区民葬儀の詳細内容（料金・対象範囲等）については変更される場合があります。最新の情報は葛飾区のホームページまたは稲垣屋葬儀店へお問い合わせください。
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>区民葬儀についてご相談ください</h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">区民葬儀の利用条件・費用などについて、お気軽にお問い合わせください。</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 group" style={{ fontFamily: "var(--font-mincho)" }}>
              <MessageCircle size={17} />お問い合わせ・ご相談<ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
