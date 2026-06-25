import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "葛飾区民葬儀の費用｜区民葬儀制度の詳細｜稲垣屋葬儀店",
  description:
    "葛飾区民葬儀の費用について。稲垣屋葬儀店は葛飾区指定の区民葬儀取扱店です。区民葬儀制度を活用することで費用を抑えた葬儀が可能です。詳細はお問い合わせください。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/cost/kumin-funeral" },
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "葛飾区民葬儀の費用｜区民葬儀制度の詳細｜稲垣屋葬儀店",
  description:
    "葛飾区民葬儀の費用について。稲垣屋葬儀店は葛飾区指定の区民葬儀取扱店です。区民葬儀制度を活用することで費用を抑えた葬儀が可能です。詳細はお問い合わせください。",
  url: "https://www.inagakiyasougiten.com/cost/kumin-funeral",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀費用", item: "https://www.inagakiyasougiten.com/cost" },
      { "@type": "ListItem", position: 3, name: "葛飾区民葬儀の費用｜区民葬儀制度の詳細", item: "https://www.inagakiyasougiten.com/cost/kumin-funeral" },
    ],
  },
};

export default function CostKuminFuneralPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <PageHero title="区民葬儀の費用" subtitle="葛飾区の区民葬儀制度と費用について" en="KUMINSO-GI COST" />
      <Breadcrumb items={[{ label: "葬儀費用", href: "/cost" }, { label: "区民葬儀の費用" }]} />

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
              葛飾区民葬儀とは、葛飾区が設ける制度で、葛飾区民の方が利用できる葬儀サービスです。葛飾区が指定した葬儀取扱店を通じて申し込むことで、一般的な葬儀よりも費用を抑えることができます。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              稲垣屋葬儀店は葛飾区が指定する区民葬儀取扱店として認定されており、区民葬儀の申し込みから葬儀の執行まで一貫してサポートします。
            </p>
          </FadeInUp>

          <FadeInUp className="mt-10 mb-10">
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              ご利用の条件
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {[
              { title: "対象者", desc: "葛飾区民（葛飾区に住民票を持つ方）が対象です。ご逝去された方、または喪主の方が葛飾区民の場合にご利用いただけます。" },
              { title: "取扱店での申し込み", desc: "葛飾区が指定する区民葬儀取扱店（稲垣屋葬儀店はその一つ）を通じて申し込みます。" },
              { title: "費用について", desc: "区民葬儀制度の詳細な費用・内容については葛飾区の規定によります。内容は変更される場合があります。最新の情報はお問い合わせにてご確認ください。" },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-6">
                  <h4 className="text-[#312852] text-base tracking-wide mb-1.5" style={{ fontFamily: "var(--font-mincho)" }}>{item.title}</h4>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp>
            <p className="text-[#7560a0] text-sm leading-loose">
              ※ 区民葬儀の詳細内容（料金・対象範囲等）については変更される場合があります。最新の情報は葛飾区のホームページまたは稲垣屋葬儀店へお問い合わせください。
            </p>
          </FadeInUp>

          <FadeInUp className="mt-10">
            <div className="flex flex-wrap gap-4">
              <Link href="/plans/kumin-funeral" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                区民葬儀プランの詳細<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/cost" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                葬儀費用一覧に戻る<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>区民葬儀についてご相談ください</h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">区民葬儀の詳細・利用条件についてお気軽にお問い合わせください。</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 group w-full sm:w-auto justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
                <MessageCircle size={17} />お問い合わせ<ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/plans/kumin-funeral" className="inline-flex items-center gap-2 border border-[#9278be] text-[#5c4a80] hover:bg-[#ede7f6] px-8 py-4 tracking-wider transition-colors duration-300 w-full sm:w-auto justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
                区民葬儀プランを見る
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
