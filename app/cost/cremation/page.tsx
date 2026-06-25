import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "葛飾区の火葬式・直葬の費用｜費用の内訳と目安｜稲垣屋葬儀店",
  description:
    "葛飾区で火葬式（直葬）の費用が気になる方へ。稲垣屋葬儀店が火葬式の費用に含まれるもの・含まれないもの・費用を左右する要素を丁寧に解説します。事前見積もり無料。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/cost/cremation" },
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "葛飾区の火葬式・直葬の費用｜費用の内訳と目安｜稲垣屋葬儀店",
  description:
    "葛飾区で火葬式（直葬）の費用が気になる方へ。稲垣屋葬儀店が火葬式の費用に含まれるもの・含まれないもの・費用を左右する要素を丁寧に解説します。事前見積もり無料。",
  url: "https://www.inagakiyasougiten.com/cost/cremation",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀費用", item: "https://www.inagakiyasougiten.com/cost" },
      { "@type": "ListItem", position: 3, name: "葛飾区の火葬式・直葬の費用｜費用の内訳と目安", item: "https://www.inagakiyasougiten.com/cost/cremation" },
    ],
  },
};

export default function CostCremationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <PageHero title="火葬式の費用" subtitle="最もシンプルな葬儀形式の費用について" en="CREMATION COST" />
      <Breadcrumb items={[{ label: "葬儀費用", href: "/cost" }, { label: "火葬式の費用" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ABOUT COST</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              火葬式（直葬）の費用について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              火葬式（直葬）はお通夜・告別式を行わず、火葬のみを行う葬儀形式です。全ての葬儀形式の中で最もシンプルであり、費用を最小限に抑えることができます。ただし、シンプルな形式であっても、故人への敬意は変わりません。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              稲垣屋葬儀店では、火葬式においても心を込めてお手伝いします。費用は事前に明確にご提示しますので、お気軽にご相談ください。
            </p>
          </FadeInUp>

          <FadeInUp className="mt-10 mb-10">
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              火葬式の費用に含まれるもの
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {[
              { title: "搬送・安置費用", desc: "ご逝去後の故人様のお迎え・搬送・安置にかかる費用。ご安置場所によって変わります。" },
              { title: "棺・骨壺", desc: "故人様を納める棺や収骨のための骨壺。火葬式では比較的シンプルなものが選ばれます。" },
              { title: "火葬前のお別れ", desc: "火葬の前に、ごく近しい方でお別れの時間をもつことができます。" },
              { title: "スタッフ費用", desc: "搬送・安置・火葬立会いなどをサポートするスタッフの費用。" },
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
              別途かかる費用
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {[
              { title: "火葬料・斎場使用料", desc: "火葬場への支払い費用。葛飾区内の施設によって異なります。葛飾区民の方は区民葬儀制度をご利用いただける場合があります。" },
              { title: "死亡診断書取得・手続き費用", desc: "死亡届の提出・火葬許可証の取得など、行政手続きに関連する費用。状況によって異なります。" },
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
              ※ 費用はご状況・内容・時期によって異なります。事前に詳細をご確認いただくため、お気軽にご相談ください。
            </p>
          </FadeInUp>

          <FadeInUp className="mt-10">
            <div className="flex flex-wrap gap-4">
              <Link href="/plans/cremation" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                火葬式プランの詳細<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>火葬式の費用についてご相談ください</h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">お見積もりは無料です。ご状況に合わせて丁寧にご説明します。</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 group w-full sm:w-auto justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
                <MessageCircle size={17} />お問い合わせ<ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/plans/cremation" className="inline-flex items-center gap-2 border border-[#9278be] text-[#5c4a80] hover:bg-[#ede7f6] px-8 py-4 tracking-wider transition-colors duration-300 w-full sm:w-auto justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
                火葬式プランを見る
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
