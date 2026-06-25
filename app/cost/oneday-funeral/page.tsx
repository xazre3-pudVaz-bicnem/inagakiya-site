import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "葛飾区の一日葬費用｜費用の内訳と目安｜稲垣屋葬儀店",
  description:
    "葛飾区で一日葬の費用が気になる方へ。稲垣屋葬儀店が一日葬の費用に含まれるもの・含まれないもの・費用を左右する要素を丁寧に解説します。事前見積もり無料。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/cost/oneday-funeral" },
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "葛飾区の一日葬費用｜費用の内訳と目安｜稲垣屋葬儀店",
  description:
    "葛飾区で一日葬の費用が気になる方へ。稲垣屋葬儀店が一日葬の費用に含まれるもの・含まれないもの・費用を左右する要素を丁寧に解説します。事前見積もり無料。",
  url: "https://www.inagakiyasougiten.com/cost/oneday-funeral",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀費用", item: "https://www.inagakiyasougiten.com/cost" },
      { "@type": "ListItem", position: 3, name: "葛飾区の一日葬費用｜費用の内訳と目安", item: "https://www.inagakiyasougiten.com/cost/oneday-funeral" },
    ],
  },
};

export default function CostOnedayFuneralPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <PageHero title="一日葬の費用" subtitle="お通夜なし・一日で執り行う葬儀の費用について" en="ONE-DAY FUNERAL COST" />
      <Breadcrumb items={[{ label: "葬儀費用", href: "/cost" }, { label: "一日葬の費用" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ABOUT COST</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              一日葬の費用について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              一日葬はお通夜を省略し、告別式と火葬を一日で執り行う葬儀スタイルです。二日間の日程が必要な一般葬・家族葬に比べて、費用と体力的な負担を抑えられる傾向があります。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              ただし、お通夜の費用が省かれる一方で、告別式・火葬の費用は通常通り発生します。費用の比較は、実際の内容を確認したうえでご検討ください。
            </p>
          </FadeInUp>

          <FadeInUp className="mt-10 mb-10">
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              一日葬の費用に含まれるもの
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {[
              { title: "搬送・安置費用", desc: "ご逝去後の搬送・安置にかかる費用。ご自宅または安置施設での安置料が含まれます。" },
              { title: "棺・骨壺・副葬品", desc: "故人様を納める棺や骨壺。ご希望に応じて選べます。" },
              { title: "告別式の進行費用", desc: "告別式の運営・進行に関わる費用。式場の設営・スタッフ人件費などが含まれます。" },
              { title: "祭壇・花", desc: "告別式の祭壇・花。規模やスタイルに応じてご提案します。" },
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
              ※ 費用はご状況・内容・時期によって異なります。お見積もりは無料ですので、まずはご相談ください。
            </p>
          </FadeInUp>

          <FadeInUp className="mt-10">
            <div className="flex flex-wrap gap-4">
              <Link href="/plans/oneday-funeral" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                一日葬プランの詳細<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>一日葬の費用についてご相談ください</h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">お見積もりは無料です。ご状況に合わせて丁寧にご説明します。</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 group w-full sm:w-auto justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
                <MessageCircle size={17} />お問い合わせ<ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/plans/oneday-funeral" className="inline-flex items-center gap-2 border border-[#9278be] text-[#5c4a80] hover:bg-[#ede7f6] px-8 py-4 tracking-wider transition-colors duration-300 w-full sm:w-auto justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
                一日葬プランを見る
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
