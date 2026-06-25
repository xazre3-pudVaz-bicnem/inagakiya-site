import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "葛飾区の家族葬費用｜費用の内訳と目安｜稲垣屋葬儀店",
  description:
    "葛飾区で家族葬の費用が気になる方へ。稲垣屋葬儀店が家族葬の費用に含まれるもの・含まれないもの・費用を左右する要素を丁寧に解説します。事前見積もり無料。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/cost/family-funeral" },
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "葛飾区の家族葬費用｜費用の内訳と目安｜稲垣屋葬儀店",
  description:
    "葛飾区で家族葬の費用が気になる方へ。稲垣屋葬儀店が家族葬の費用に含まれるもの・含まれないもの・費用を左右する要素を丁寧に解説します。事前見積もり無料。",
  url: "https://www.inagakiyasougiten.com/cost/family-funeral",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀費用", item: "https://www.inagakiyasougiten.com/cost" },
      { "@type": "ListItem", position: 3, name: "葛飾区の家族葬費用｜費用の内訳と目安", item: "https://www.inagakiyasougiten.com/cost/family-funeral" },
    ],
  },
};

export default function CostFamilyFuneralPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <PageHero title="家族葬の費用" subtitle="費用の内訳と、費用を左右する要素について" en="FAMILY FUNERAL COST" />
      <Breadcrumb items={[{ label: "葬儀費用", href: "/cost" }, { label: "家族葬の費用" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ABOUT COST</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              家族葬の費用について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              家族葬はご家族やごく親しい方だけで行う小規模な葬儀で、一般葬と比較して費用を抑えやすい葬儀形式です。ただし、「家族葬だから安い」とは一概には言えず、選ぶ内容によって費用は大きく変わります。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              稲垣屋葬儀店では、ご希望の内容に応じた費用を事前に明確にご提示します。お見積もりは無料ですので、まずはお気軽にご相談ください。
            </p>
          </FadeInUp>

          <FadeInUp className="mt-10 mb-10">
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              家族葬の費用に含まれるもの
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {[
              { title: "搬送・安置費用", desc: "ご逝去後の故人様のお迎え・搬送・安置にかかる費用。ご安置場所（ご自宅・安置施設）によって変わります。" },
              { title: "棺・骨壺・副葬品", desc: "故人様を納める棺や収骨のための骨壺。材質や仕様によって費用が異なります。" },
              { title: "式場・設備費用", desc: "葬儀を執り行う場所の使用料。ご自宅・斎場・葬儀会館など、場所によって費用が変わります。" },
              { title: "スタッフ・進行費用", desc: "葬儀の進行・運営を担うスタッフの費用。葬儀の内容・日数によって異なります。" },
              { title: "祭壇・花・装飾", desc: "祭壇の飾り付けや花祭壇。シンプルなものから豪華なものまで、ご希望に合わせて選べます。" },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-6">
                  <h4 className="text-[#312852] text-base tracking-wide mb-1.5" style={{ fontFamily: "var(--font-mincho)" }}>{item.title}</h4>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mb-10">
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              別途かかる費用の目安
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {[
              { title: "火葬料・斎場使用料", desc: "火葬場への支払い費用。葛飾区内の公立斎場・民間斎場によって異なります。葛飾区民の方は区民葬儀制度が利用できる場合があります。" },
              { title: "宗教者へのお布施・謝礼", desc: "お坊さん・神父・牧師など宗教者を招く場合に発生します。宗派・依頼先によって異なります。無宗教葬の場合は不要です。" },
              { title: "飲食・返礼品", desc: "家族葬では参列者が少ないため、通夜振る舞いや香典返しの費用は一般葬より少なくなる傾向があります。" },
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
              ※ 費用はご状況・内容・時期によって異なります。稲垣屋葬儀店では事前に詳細な費用をご提示しますので、お気軽にご相談ください。葛飾区民の方は区民葬儀制度もご活用いただける場合があります。
            </p>
          </FadeInUp>

          <FadeInUp className="mt-10">
            <div className="flex flex-wrap gap-4">
              <Link href="/plans/family-funeral" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                家族葬プランの詳細<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>家族葬の費用についてご相談ください</h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">お見積もりは無料です。ご状況に合わせて丁寧にご説明します。</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 group w-full sm:w-auto justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
                <MessageCircle size={17} />お問い合わせ<ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/plans/family-funeral" className="inline-flex items-center gap-2 border border-[#9278be] text-[#5c4a80] hover:bg-[#ede7f6] px-8 py-4 tracking-wider transition-colors duration-300 w-full sm:w-auto justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
                家族葬プランを見る
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
