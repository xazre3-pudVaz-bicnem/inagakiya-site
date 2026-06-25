import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "家族葬と一日葬の違い｜どちらを選ぶ？｜葛飾区 稲垣屋葬儀店",
  description:
    "家族葬と一日葬の違いを詳しく解説。通夜の有無・費用・向いている方・選び方を葛飾区の稲垣屋葬儀店が比較してご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/compare/family-vs-oneday" },
};

const faqs = [
  {
    q: "家族葬と一日葬、費用はどちらが高いですか？",
    a: "一般的に一日葬のほうが通夜を省略する分、費用が抑えられる傾向があります。ただし費用は葬儀の内容・規模・返礼品・飲食費などによって異なりますので、一概には言えません。稲垣屋葬儀店では、ご家族のご予算とご要望に合わせて、ご状況に応じた形式をご提案します。",
  },
  {
    q: "家族葬で通夜を省略することはできますか？",
    a: "はい、家族葬で通夜を省略することは可能です。その場合は告別式と火葬を1日で行う「一日葬」という形式になります。通夜を省略する理由としては、「高齢の参列者への負担を減らしたい」「遠方から来るのが難しい」「日程を短くしたい」などが多く挙げられます。",
  },
  {
    q: "一日葬でも宗教者に来てもらえますか？",
    a: "はい、一日葬でも宗教者（お坊さん・牧師など）をお呼びすることができます。菩提寺がある場合はそちらにご連絡いただき、一日葬で対応いただけるかご確認ください。菩提寺によっては通夜を行うことを条件とする場合もありますので、事前確認が大切です。",
  },
  {
    q: "迷っている場合は事前相談で相談できますか？",
    a: "はい、「家族葬か一日葬か迷っている」という段階でのご相談も大歓迎です。稲垣屋葬儀店では、ご家族の状況やご希望をお聞きしながら、どちらの形式が合いそうかを一緒に考えます。強引にどちらかを勧めることはありませんので、安心してご相談ください。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "家族葬と一日葬の違い｜どちらを選ぶ？｜葛飾区 稲垣屋葬儀店",
  description:
    "家族葬と一日葬の違いを詳しく解説。通夜の有無・費用・向いている方・選び方を葛飾区の稲垣屋葬儀店が比較してご説明します。",
  url: "https://www.inagakiyasougiten.com/compare/family-vs-oneday",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀プラン比較", item: "https://www.inagakiyasougiten.com/compare" },
      { "@type": "ListItem", position: 3, name: "家族葬と一日葬の違い", item: "https://www.inagakiyasougiten.com/compare/family-vs-oneday" },
    ],
  },
};

export default function FamilyVsOnedayPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        title="家族葬と一日葬の違い"
        subtitle="通夜の有無・費用・向いている方"
        en="COMPARISON"
      />

      <Breadcrumb
        items={[
          { label: "比較で選ぶ", href: "/compare/funeral-plans" },
          { label: "家族葬と一日葬の違い" },
        ]}
      />

      {/* Intro */}
      <section className="py-16 md:py-20 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-relaxed">
              家族葬と一日葬は、どちらもご家族やごく親しい方だけで行う少人数の葬儀形式です。最大の違いは「通夜を行うかどうか」という点にあります。家族葬は通常2日間（通夜・告別式）で行われますが、一日葬は通夜を省略して告別式と火葬を1日で完結させます。どちらが合うかは、ご家族の体力・日程・参列者の状況などによって異なります。
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link href="/plans/family-funeral" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 transition-colors">
                家族葬の詳細
              </Link>
              <Link href="/plans/oneday-funeral" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 transition-colors">
                一日葬の詳細
              </Link>
              <Link href="/compare/funeral-plans" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 transition-colors">
                5形式の比較一覧
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-20 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COMPARISON TABLE</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              家族葬と一日葬の比較
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-[#e8ddf4]">
                    <th className="py-3 px-4 text-left text-[#312852] font-normal tracking-wide" style={{ fontFamily: "var(--font-mincho)" }}>比較項目</th>
                    <th className="py-3 px-4 text-center text-[#312852] font-normal tracking-wide" style={{ fontFamily: "var(--font-mincho)" }}>家族葬</th>
                    <th className="py-3 px-4 text-center text-[#312852] font-normal tracking-wide" style={{ fontFamily: "var(--font-mincho)" }}>一日葬</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e8ddf4]">
                  <tr>
                    <td className="py-4 px-4 text-[#312852]" style={{ fontFamily: "var(--font-mincho)" }}>通夜</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">あり（省略可）</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">なし</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-[#312852]" style={{ fontFamily: "var(--font-mincho)" }}>告別式</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">あり</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">あり</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-[#312852]" style={{ fontFamily: "var(--font-mincho)" }}>日程</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">2日間</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">1日</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-[#312852]" style={{ fontFamily: "var(--font-mincho)" }}>参列者数</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">少人数</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">少人数</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-[#312852]" style={{ fontFamily: "var(--font-mincho)" }}>費用感</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">中程度</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">やや抑えめ</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-[#312852]" style={{ fontFamily: "var(--font-mincho)" }}>向いている方</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">ゆっくりお別れしたい方</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">負担を軽くしたい方</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* 家族葬の特徴 */}
      <section className="py-16 md:py-20 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-8">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAMILY FUNERAL</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              家族葬の特徴
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <p className="text-[#4a4a4a] text-base leading-relaxed">
              家族葬は、ご家族やごく親しい方だけで行う葬儀形式です。通夜と告別式の2日間が基本ですが、通夜を省略することも可能です。少人数だからこそ、参列者一人ひとりが故人とゆっくり向き合えるお別れの時間を持てることが最大の特徴です。故人の個性や思い出を大切にした、より家族らしい形で見送ることができます。宗教者をお呼びすることもでき、菩提寺がある方にも対応しています。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* 一日葬の特徴 */}
      <section className="py-16 md:py-20 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-8">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ONE-DAY FUNERAL</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              一日葬の特徴
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <p className="text-[#4a4a4a] text-base leading-relaxed">
              一日葬は通夜を省略し、告別式と火葬を1日で完結させる形式です。高齢の参列者が多い場合や、遠方から来る方への負担を軽減したい場合、また日程の都合上2日間取ることが難しい場合に選ばれることが多い形式です。告別式でのお別れの時間はしっかりと設けられており、宗教者をお呼びすることもできます。ご予算に合わせた形式として選ぶ方も増えています。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* 向いている方・選び方 */}
      <section className="py-16 md:py-20 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">HOW TO CHOOSE</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              向いている方・選び方
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            <StaggerItem>
              <div className="py-7">
                <p className="text-[#312852] text-base tracking-wide mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                  家族葬が向く方
                </p>
                <p className="text-[#4a4a4a] text-base leading-relaxed pl-4 border-l border-[#c9a55a]">
                  故人との時間をゆっくりと確保したい方、通夜でのお別れを大切にしたい方、菩提寺との関係を重視される方、2日間の日程に余裕がある方に向いています。
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="py-7">
                <p className="text-[#312852] text-base tracking-wide mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                  一日葬が向く方
                </p>
                <p className="text-[#4a4a4a] text-base leading-relaxed pl-4 border-l border-[#c9a55a]">
                  参列者への体力的・移動の負担を軽くしたい方、日程を1日に収めたい方、ご予算に合わせた形式をご希望の方に向いています。告別式でのお別れはしっかり行いたいという方にも選ばれています。
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
          <FadeInUp delay={0.2} className="mt-8">
            <p className="text-[#4a4a4a] text-sm leading-relaxed">
              迷われている場合は、ぜひ
              <Link href="/consultation" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 mx-1 transition-colors">事前相談</Link>
              をご活用ください。また
              <Link href="/consultation/cost" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 mx-1 transition-colors">費用についての相談</Link>
              や
              <Link href="/faq" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 mx-1 transition-colors">よくある質問</Link>
              もご参照ください。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              よくあるご質問
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <div className="py-7">
                  <p className="text-[#312852] text-base tracking-wide mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                    Q. {faq.q}
                  </p>
                  <p className="text-[#4a4a4a] text-base leading-relaxed pl-4 border-l border-[#c9a55a]">
                    {faq.a}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Soft CTA */}
      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              まずはお気軽にご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              形式に迷っている段階でも、どんな疑問でもお気軽にどうぞ。<br />
              事前相談は無料、強引な勧誘は一切行いません。
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
