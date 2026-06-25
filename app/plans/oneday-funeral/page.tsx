import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";
import RelatedColumns from "../../components/RelatedColumns";

export const metadata: Metadata = {
  title: "葛飾区の一日葬｜通夜を行わない葬儀のご相談｜稲垣屋葬儀店",
  description:
    "一日葬は通夜を省略して、告別式と火葬を1日で行う葬儀形式です。高齢の参列者が多い方・日程の調整が難しい方に選ばれています。葛飾区の稲垣屋葬儀店がご相談に応じます。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/plans/oneday-funeral" },
};

const faqItems = [
  {
    q: "一日葬はお通夜を省略するとのことですが、故人への敬意は変わりませんか？",
    a: "はい、一日葬でも告別式でしっかりとしたお別れができます。お通夜を省略するという形式の違いであり、故人を大切にお送りする気持ちは変わりません。",
  },
  {
    q: "一日葬の場合、翌日の火葬まで故人はどこに安置されますか？",
    a: "ご自宅または稲垣屋葬儀店の安置施設にてご安置します。ご家族がご都合に合わせてお別れの時間を持てるよう調整いたします。",
  },
  {
    q: "一日葬でもお坊さんに来ていただけますか？",
    a: "はい、一日葬でも告別式に宗教者をお迎えすることができます。ご宗旨・宗派に合わせてご対応します。",
  },
  {
    q: "参列者への案内はどのようにすればよいですか？",
    a: "訃報のご連絡方法についてもご相談ください。一日葬の場合は「お通夜はございません」と明記した案内をすることが一般的です。稲垣屋葬儀店がサポートします。",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "一日葬",
  description: "通夜を省略し、告別式と火葬を一日で行う一日葬。葛飾区の稲垣屋葬儀店がご相談に応じます。",
  provider: {
    "@type": "FuneralHome",
    name: "稲垣屋葬儀店",
    url: "https://www.inagakiyasougiten.com",
  },
  areaServed: { "@type": "City", name: "葛飾区" },
  url: "https://www.inagakiyasougiten.com/plans/oneday-funeral",
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "葛飾区の一日葬｜通夜を行わない葬儀のご相談｜稲垣屋葬儀店",
  description:
    "一日葬は通夜を省略して、告別式と火葬を1日で行う葬儀形式です。高齢の参列者が多い方・日程の調整が難しい方に選ばれています。葛飾区の稲垣屋葬儀店がご相談に応じます。",
  url: "https://www.inagakiyasougiten.com/plans/oneday-funeral",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀プラン", item: "https://www.inagakiyasougiten.com/plans" },
      { "@type": "ListItem", position: 3, name: "一日葬", item: "https://www.inagakiyasougiten.com/plans/oneday-funeral" },
    ],
  },
};

const daySections = [
  { time: "午前", title: "告別式", desc: "ご家族・参列者で心を込めて故人をお見送りします。宗教者による読経・焼香などを行います。" },
  { time: "午前〜昼", title: "出棺", desc: "告別式の後、火葬場へ向けてご出棺します。ご家族で最後のお見送りをされます。" },
  { time: "昼〜午後", title: "火葬", desc: "火葬場にて火葬を行います。火葬中、ご家族は控室でお待ちいただけます。" },
  { time: "午後", title: "収骨・解散", desc: "火葬が終わりましたら収骨を行い、解散となります。初七日法要を当日に行うこともできます。" },
];

export default function OnedayFuneralPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero title="一日葬" subtitle="お通夜を省略し、一日で告別式・火葬を執り行う葬儀" en="ONE-DAY FUNERAL" />
      <Breadcrumb items={[{ label: "葬儀プラン", href: "/plans" }, { label: "一日葬" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* このページでわかること */}
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ON THIS PAGE</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em] mb-6" style={{ fontFamily: "var(--font-mincho)" }}>
              このページでわかること
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mb-6" />
            <ul className="divide-y divide-[#e8ddf4]">
              {[
                "一日葬とはどのような葬儀か",
                "一日葬が選ばれる理由",
                "一日葬の当日の流れ（タイムライン）",
                "家族葬との違い",
                "費用・相談について",
              ].map((item) => (
                <li key={item} className="py-3 text-[#4a4a4a] text-base leading-relaxed pl-3 border-l-2 border-[#c9a55a] ml-px">
                  {item}
                </li>
              ))}
            </ul>
          </FadeInUp>

          {/* 一日葬とは */}
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">WHAT IS ONE-DAY FUNERAL</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              一日葬とは
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5 mb-8" />
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              一日葬とは、お通夜を省略し、告別式と火葬を同じ日に執り行う葬儀スタイルです。二日間の日程が必要な一般葬や家族葬と比べて、ご遺族の体力的・精神的な負担を軽減できます。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              お通夜がない分、費用を抑えられる傾向がありますが、告別式・火葬の費用は通常通りかかります。費用については事前に詳細をご確認ください。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              「きちんとした告別式でお別れしたいが、二日間の日程は難しい」というご家族に選ばれています。
            </p>
          </FadeInUp>

          {/* 一日葬が選ばれる理由 */}
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">REASONS</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              一日葬が選ばれる理由
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {[
              { title: "高齢の参列者が多い", desc: "二日間の参列が体力的に難しい方が多い場合、一日葬を選ばれるご家族がいらっしゃいます。参列者への負担を考えた選択として選ばれています。" },
              { title: "日程の調整が難しい", desc: "遠方から来るご家族や、仕事の都合で日程を絞りたい場合に、一日で完結する一日葬が選ばれることがあります。" },
              { title: "きちんとした告別式でお別れしたい", desc: "火葬式（直葬）より丁寧な形でお別れしたいが、通夜は省略したい、というご希望の方に向いています。" },
              { title: "ご遺族の体力・精神面への配慮", desc: "お通夜から告別式まで二日間にわたる対応は、ご遺族にとって大きな負担になることがあります。一日で終わる形式は、その負担を抑える選択肢のひとつです。" },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3 className="text-[#312852] text-lg tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>{item.title}</h3>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* 一日葬の当日の流れ */}
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">TIMELINE</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              一日葬の当日の流れ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-4">
            {daySections.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex items-start gap-6 py-7">
                  <div className="shrink-0 w-20 pt-1">
                    <p className="text-[#c9a55a] text-xs tracking-wide">{item.time}</p>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[#312852] text-lg tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>{item.title}</h4>
                    <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mb-14">
            <p className="text-[#7560a0] text-sm leading-loose">
              ※ 上記は一般的な一日葬の流れです。火葬場の予約状況・宗旨宗派・ご家族のご希望によって内容が異なる場合があります。
            </p>
          </FadeInUp>

          {/* 家族葬との違い */}
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COMPARISON</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              家族葬との違い
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5 mb-6" />
            <p className="text-[#4a4a4a] text-base leading-loose mb-4">
              家族葬はご参列の人数を限定した葬儀形式であり、通夜ありの二日間形式が一般的です。一日葬は通夜を省略した点で区別されます。一日葬であっても、参列者をご家族のみに限定すれば「家族葬の一日葬」という形になります。
            </p>
            <Link href="/compare/family-vs-oneday" className="inline-flex items-center gap-1 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
              家族葬と一日葬の違いをくわしく見る<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>

          <FadeInUp>
            <div className="flex flex-wrap gap-4">
              <Link href="/cost/oneday-funeral" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                一日葬の費用について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/plans/family-funeral" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                家族葬について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/plans" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                他のプランを見る<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInUp>

          <FadeInUp className="mt-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-2" style={{ fontFamily: "var(--font-mincho)" }}>
              よくある質問
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mb-8" />
            <dl className="divide-y divide-[#e8ddf4]">
              {faqItems.map((item, i) => (
                <div key={i} className="py-5">
                  <dt className="text-[#312852] font-medium mb-2 leading-relaxed" style={{ fontFamily: "var(--font-mincho)" }}>
                    <span className="text-[#c9a55a] mr-2">Q.</span>
                    {item.q}
                  </dt>
                  <dd className="text-[#4a4a4a] text-sm leading-relaxed pl-5">
                    <span className="text-[#9278be] mr-2">A.</span>
                    {item.a}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeInUp>
        </div>
      </section>

      {/* 関連コラム */}
      <section className="py-14 md:py-20 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-7">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COLUMN</p>
            <h2 className="text-[#312852] text-xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              関連コラム
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-4" />
          </FadeInUp>
          <RelatedColumns slugs={["oneday-funeral-katsushika", "oneday-funeral-cost", "family-funeral-vs-oneday", "cremation-vs-oneday"]} />
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>一日葬についてご相談ください</h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">事前相談は無料です。お気軽にご連絡ください。</p>
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
