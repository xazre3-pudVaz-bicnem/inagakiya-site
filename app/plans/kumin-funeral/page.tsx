import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "区民葬儀｜葛飾区民葬儀取扱店・稲垣屋葬儀店｜葛飾区民の方へ",
  description:
    "葛飾区民の方が利用できる区民葬儀制度。稲垣屋葬儀店は葛飾区が指定する区民葬儀取扱店です。制度の詳細・利用条件・流れについて丁寧にご説明します。事前相談無料。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/plans/kumin-funeral" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "葛飾区民葬儀とは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "葛飾区が設けた葬儀制度で、葛飾区民の方が利用できます。葛飾区が指定する葬儀取扱店を通じて申し込むことで、費用を抑えた葬儀が可能です。稲垣屋葬儀店は葛飾区の区民葬儀取扱店として認定されています。",
      },
    },
    {
      "@type": "Question",
      name: "葛飾区民葬儀は誰でも使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "葛飾区に住民票を持つ区民の方が対象です。ご逝去された方または喪主の方が葛飾区民の場合にご利用いただけます。詳細は稲垣屋葬儀店にお問い合わせください。",
      },
    },
    {
      "@type": "Question",
      name: "区民葬儀を使うとどのようなメリットがありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "葛飾区の区民葬儀制度を利用することで、費用を抑えた葬儀が可能です。詳細な費用・内容は葛飾区の規定によりますので、最新情報はお問い合わせにてご確認ください。",
      },
    },
  ],
};

export default function KuminFuneralPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero title="区民葬儀" subtitle="葛飾区民の方が利用できる葬儀制度" en="KUMINSO-GI" />
      <Breadcrumb items={[{ label: "葬儀プラン", href: "/plans" }, { label: "区民葬儀" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">KUMINSO-GI</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              葛飾区民葬儀制度について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              葛飾区民葬儀とは、葛飾区が設ける制度で、葛飾区民の方が利用できる葬儀サービスです。葛飾区が指定した葬儀取扱店を通じて申し込むことで、費用を抑えた葬儀が可能です。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              稲垣屋葬儀店は葛飾区が指定する区民葬儀取扱店として認定されており、区民葬儀の申し込みから葬儀の執行まで、一貫してサポートします。葛飾区堀切に根付いた地域密着の葬儀社として、葛飾区民の皆さまのお力になれることを誇りにしています。
            </p>
          </FadeInUp>

          <FadeInUp className="mt-14 mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">HOW TO USE</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              ご利用の流れ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {[
              { number: "01", title: "稲垣屋葬儀店へのご連絡", desc: "まずはお電話またはお問い合わせフォームにてご連絡ください。区民葬儀制度のご利用をご希望の旨をお伝えください。24時間365日対応しております。" },
              { number: "02", title: "対象確認・手続き案内", desc: "ご逝去された方または喪主の方が葛飾区民であることをご確認します。区民葬儀の申し込み手続きについて丁寧にご案内します。" },
              { number: "03", title: "葬儀の打ち合わせ", desc: "区民葬儀制度に基づいたプランの中から、ご家族のご希望に合った葬儀内容を打ち合わせします。" },
              { number: "04", title: "葬儀の執行", desc: "稲垣屋葬儀店のスタッフが、心を込めてご葬儀をお手伝いします。" },
            ].map((step) => (
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
            <p className="text-[#7560a0] text-sm leading-loose">
              ※ 区民葬儀の詳細内容（料金・対象範囲等）については葛飾区の規定によります。内容は変更される場合があります。最新の情報は稲垣屋葬儀店またはの葛飾区役所にてご確認ください。
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/cost/kumin-funeral" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                区民葬儀の費用について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>区民葬儀についてご相談ください</h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">区民葬儀制度の詳細・利用条件・費用について、お気軽にご連絡ください。</p>
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
