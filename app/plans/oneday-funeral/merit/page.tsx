import type { Metadata } from "next";
import PageHero from "../../../components/PageHero";
import Breadcrumb from "../../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "一日葬のメリット・注意点｜葛飾区 稲垣屋葬儀店",
  description:
    "一日葬のメリットと注意点。通夜を行わない葬儀形式の特徴・向いている方・費用への影響・よくある質問を葛飾区の稲垣屋葬儀店が解説します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/plans/oneday-funeral/merit" },
};

const faqItems = [
  {
    question: "一日葬にして後悔することはありますか？",
    answer:
      "お通夜を省略したことで「もっとゆっくりお別れしたかった」と感じる方もいらっしゃいます。ご安置期間中に近親者でお別れの時間を設けることで、気持ちの区切りをつけやすくなります。事前にご家族でよくご相談ください。",
  },
  {
    question: "お通夜なしの葬儀は失礼ではないですか？",
    answer:
      "一日葬は近年広く普及している葬儀スタイルで、失礼にはあたりません。告別式をきちんと執り行うため、参列者への敬意は十分に示せます。事前に参列者へお通夜がない旨をお伝えすれば問題ありません。",
  },
  {
    question: "一日葬と家族葬は同じですか？",
    answer:
      "異なります。家族葬は参列者の範囲（家族・親族・親しい友人のみ）を指す言葉です。一日葬は日程の形式（お通夜なし）を指す言葉です。家族葬の日程を一日葬の形式で行うことも可能です。",
  },
  {
    question: "一日葬は費用が安くなりますか？",
    answer:
      "お通夜の会場費・飲食費などがかからない分、費用を抑えられる傾向があります。ただし告別式・火葬・搬送などの費用はかかります。費用の詳細はプランによって異なりますので、事前に見積もりをご確認ください。",
  },
];

const merits = [
  {
    title: "ご遺族の体力的・精神的負担の軽減",
    desc: "一般的な葬儀では通夜から告別式・火葬まで二日間かけて執り行います。一日葬ではこれを一日に集約するため、特に高齢のご遺族や体調に不安がある方の負担を大きく軽減できます。喪主や中心となって動く方の消耗が少なくなるのも、一日葬を選ぶ理由のひとつです。",
  },
  {
    title: "費用を抑えやすい傾向",
    desc: "お通夜を行わないことで、通夜振る舞いの飲食費・会場の二日目使用料などがかからないケースがあります。ただし葬儀の費用は選択するプランや参列人数・会場・宗教者費用などによって異なります。断定的な金額は申し上げられないため、まずは事前のお見積もりをお勧めします。",
  },
  {
    title: "一日で完結するため遠方参列者への配慮",
    desc: "遠方からの参列者にとって、お通夜と告別式の二日間に合わせて日程を調整することは大きな負担となります。一日葬では告別式の一日だけに参列していただければよいため、参列者の負担軽減にもつながります。",
  },
  {
    title: "告別式を行うため一定の形式でお別れできる",
    desc: "火葬式（直葬）と異なり、一日葬では告別式を執り行います。読経・焼香・ご挨拶という儀式の形を通じて、故人様に対して丁寧なお別れができます。形式を大切にしながら日程を短縮したい方に適した選択肢です。",
  },
];

const cautions = [
  {
    title: "お通夜がないことへの菩提寺の確認",
    desc: "菩提寺（先祖代々のお墓があるお寺）がある場合、通夜省略に対する寺院の考え方を事前に確認することが大切です。宗派や住職のお考えによっては、一日葬の形式を認めないケースもあります。菩提寺への事前相談をお勧めします。",
  },
  {
    title: "参列者への事前連絡の重要性",
    desc: "お通夜があるものと思って参列日程を調整している方もいらっしゃいます。一日葬を選択した場合は、「お通夜は行わない」旨を参列者全員に早めにご連絡ください。誤解や混乱を防ぐための丁寧な案内が重要です。",
  },
  {
    title: "一日で疲労が集中する可能性",
    desc: "二日間に分散していたご遺族の役割と疲労が、一日に集中することになります。告別式・ご出棺・火葬・収骨が連続して続くため、精神的にも体力的にもご負担を感じる方もいらっしゃいます。お身体の状態を考慮したうえでご検討ください。",
  },
];

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "一日葬のメリット・注意点｜葛飾区 稲垣屋葬儀店",
  description:
    "一日葬のメリットと注意点。通夜を行わない葬儀形式の特徴・向いている方・費用への影響・よくある質問を葛飾区の稲垣屋葬儀店が解説します。",
  url: "https://www.inagakiyasougiten.com/plans/oneday-funeral/merit",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "一日葬", item: "https://www.inagakiyasougiten.com/plans/oneday-funeral" },
      { "@type": "ListItem", position: 3, name: "一日葬のメリット・注意点", item: "https://www.inagakiyasougiten.com/plans/oneday-funeral/merit" },
    ],
  },
};

export default function OnedayFuneralMeritPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title="一日葬のメリット・注意点"
        subtitle="選ぶ前に知っておきたいこと"
        en="MERIT & POINTS TO NOTE"
      />
      <Breadcrumb
        items={[
          { label: "葬儀プラン", href: "/plans" },
          { label: "一日葬", href: "/plans/oneday-funeral" },
          { label: "一日葬のメリット・注意点" },
        ]}
      />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ABOUT ONE-DAY FUNERAL</p>
            <h1 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              一日葬のメリット・注意点
            </h1>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              一日葬はお通夜を省略して告別式と火葬を一日で執り行う葬儀形式です。ご遺族の負担軽減という観点から選ばれることが増えています。一方で、事前に知っておきたい注意点もあります。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              このページでは、一日葬を選ぶ際のメリットと注意点を丁寧に解説します。ご家族にとって最善の選択をしていただくために、どうぞご参考ください。
            </p>
          </FadeInUp>

          <FadeInUp className="mt-16 mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">MERITS</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              一日葬のメリット
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-16">
            {merits.map((item, i) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-2">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="text-[#312852] text-lg tracking-wide mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">POINTS TO NOTE</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              一日葬の注意点
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-16">
            {cautions.map((item, i) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-2">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="text-[#312852] text-lg tracking-wide mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FOR WHOM</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              向いている方・向いていない方
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp className="mb-16">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-[#e8ddf4] px-6 py-6">
                <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-4">SUITED FOR</p>
                <p className="text-[#312852] text-base tracking-wide mb-4" style={{ fontFamily: "var(--font-mincho)" }}>向いている方</p>
                <StaggerContainer className="divide-y divide-[#e8ddf4]">
                  {[
                    "ご高齢・体調面でご遺族の負担を減らしたい方",
                    "遠方の参列者が多く、日程調整が難しい方",
                    "菩提寺がなく、形式にこだわらない方",
                    "告別式を行いたいが、二日間の日程が難しい方",
                  ].map((text) => (
                    <StaggerItem key={text}>
                      <p className="py-3 text-[#4a4a4a] text-sm leading-relaxed">{text}</p>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
              <div className="border border-[#e8ddf4] px-6 py-6">
                <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-4">NOT SUITED FOR</p>
                <p className="text-[#312852] text-base tracking-wide mb-4" style={{ fontFamily: "var(--font-mincho)" }}>慎重に検討すべき方</p>
                <StaggerContainer className="divide-y divide-[#e8ddf4]">
                  {[
                    "菩提寺があり、お寺との関係を大切にされている方",
                    "大勢の参列者をお迎えする予定の方",
                    "通夜の時間でじっくりとお別れしたい方",
                    "親族間で葬儀形式についての合意がとれていない方",
                  ].map((text) => (
                    <StaggerItem key={text}>
                      <p className="py-3 text-[#4a4a4a] text-sm leading-relaxed">{text}</p>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </FadeInUp>

          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              よくあるご質問
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-16">
            {faqItems.map((faq) => (
              <StaggerItem key={faq.question}>
                <div className="py-7">
                  <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-2">Q</p>
                  <h3 className="text-[#312852] text-base tracking-wide mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                    {faq.question}
                  </h3>
                  <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-2">A</p>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{faq.answer}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp>
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-5">RELATED PAGES</p>
            <div className="divide-y divide-[#e8ddf4]">
              {[
                { href: "/plans/oneday-funeral", label: "一日葬プランのご案内" },
                { href: "/plans/oneday-funeral/flow", label: "一日葬の流れ" },
                { href: "/plans/oneday-funeral/cost", label: "一日葬の費用と内訳" },
                { href: "/plans/family-funeral", label: "家族葬プランのご案内" },
                { href: "/plans/family-funeral/merit", label: "家族葬のメリット・注意点" },
                { href: "/consultation", label: "事前相談のご案内" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between py-4 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group"
                >
                  {link.label}
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              ご不明な点はお気軽にご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              事前相談・お見積もりは無料です。強引な勧誘は一切行いません。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 group w-full sm:w-auto justify-center"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                <MessageCircle size={17} />お問い合わせ<ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 border border-[#9278be] text-[#5c4a80] hover:bg-[#ede7f6] px-8 py-4 tracking-wider transition-colors duration-300 w-full sm:w-auto justify-center"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                事前相談について
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
