import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "家族葬と火葬式の違い｜どちらを選ぶ？｜葛飾区 稲垣屋葬儀店",
  description:
    "家族葬と火葬式（直葬）の違いを詳しく解説。お別れの時間・費用・向いている方を比較して、どちらが合うかをご案内します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/compare/family-vs-cremation" },
};

const faqs = [
  {
    q: "火葬式でも家族でお別れの時間はありますか？",
    a: "はい、火葬式でも火葬炉前での最後のお別れの時間はございます。宗教的な儀式はありませんが、ご家族が集まり、故人に最後のお別れをする時間を持つことができます。",
  },
  {
    q: "火葬式に菩提寺はどう対応しますか？",
    a: "菩提寺がある場合は、火葬式を希望する旨を事前にお寺にご相談ください。菩提寺によっては、宗教的な儀式を省略することを希望しない場合もありますので、事前確認が重要です。稲垣屋葬儀店では、菩提寺との調整についてもアドバイスできます。",
  },
  {
    q: "家族葬と火葬式、費用の差はどのくらいですか？",
    a: "費用は葬儀の内容・規模・返礼品などによって異なります。一般的に火葬式は葬儀社への費用が少なく抑えられる傾向がありますが、お布施・飲食費などは別途発生する場合があります。稲垣屋葬儀店では、ご予算に合わせた形式をご提案しますので、事前相談でご確認ください。",
  },
  {
    q: "どちらの形式でも「心を込めたお別れ」はできますか？",
    a: "はい、どちらの形式でも、故人への心を込めたお別れは十分に行えます。形式の豪華さよりも、ご家族が故人とどのようにお別れしたいか、が大切です。稲垣屋葬儀店では、形式の選択よりもご家族のご希望と想いを大切にしてご対応します。",
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
  name: "家族葬と火葬式の違い｜どちらを選ぶ？｜葛飾区 稲垣屋葬儀店",
  description:
    "家族葬と火葬式（直葬）の違いを詳しく解説。お別れの時間・費用・向いている方を比較して、どちらが合うかをご案内します。",
  url: "https://www.inagakiyasougiten.com/compare/family-vs-cremation",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀プラン比較", item: "https://www.inagakiyasougiten.com/compare" },
      { "@type": "ListItem", position: 3, name: "家族葬と火葬式の違い", item: "https://www.inagakiyasougiten.com/compare/family-vs-cremation" },
    ],
  },
};

export default function FamilyVsCremationPage() {
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
        title="家族葬と火葬式の違い"
        subtitle="お別れの時間・費用・向いている方"
        en="COMPARISON"
      />

      <Breadcrumb
        items={[
          { label: "比較で選ぶ", href: "/compare/funeral-plans" },
          { label: "家族葬と火葬式の違い" },
        ]}
      />

      {/* Intro */}
      <section className="py-16 md:py-20 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-relaxed">
              家族葬と火葬式（直葬）は、どちらも少人数で見送る形式ですが、葬儀の内容と流れに大きな違いがあります。家族葬は通夜・告別式を伴う葬儀形式であるのに対し、火葬式は宗教的な儀式を行わず、火葬炉前でのお別れのみとなります。シンプルに見送りたいか、ご家族でしっかりとお別れの場を持ちたいかが、選択の大きなポイントです。
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link href="/plans/family-funeral" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 transition-colors">
                家族葬の詳細
              </Link>
              <Link href="/plans/cremation" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 transition-colors">
                火葬式の詳細
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
              家族葬と火葬式の比較
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
                    <th className="py-3 px-4 text-center text-[#312852] font-normal tracking-wide" style={{ fontFamily: "var(--font-mincho)" }}>火葬式</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e8ddf4]">
                  <tr>
                    <td className="py-4 px-4 text-[#312852]" style={{ fontFamily: "var(--font-mincho)" }}>通夜</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">あり</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">なし</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-[#312852]" style={{ fontFamily: "var(--font-mincho)" }}>告別式</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">あり</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">なし</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-[#312852]" style={{ fontFamily: "var(--font-mincho)" }}>火葬前のお別れ</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">あり</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">炉前のみ</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-[#312852]" style={{ fontFamily: "var(--font-mincho)" }}>日程</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">2日間（通夜省略で1日も可）</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">1日</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-[#312852]" style={{ fontFamily: "var(--font-mincho)" }}>参列者</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">少人数</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">ごく少人数</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-[#312852]" style={{ fontFamily: "var(--font-mincho)" }}>費用感</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">中程度</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">抑えめ</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-[#312852]" style={{ fontFamily: "var(--font-mincho)" }}>向いている方</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">ゆっくりお別れしたい方</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">シンプルに見送りたい方</td>
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
              家族葬はご家族やごく親しい方だけで行う葬儀形式で、通夜・告別式を通じて故人とじっくり向き合えるお別れの場があります。少人数だからこそ、一人ひとりが故人への気持ちを丁寧に表現できる時間が生まれます。宗教者をお呼びすることもでき、菩提寺がある方にも対応可能です。通夜を省略した「一日葬」スタイルでの家族葬も承っています。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* 火葬式の特徴 */}
      <section className="py-16 md:py-20 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-8">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">CREMATION ONLY</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              火葬式（直葬）の特徴
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <p className="text-[#4a4a4a] text-base leading-relaxed">
              火葬式（直葬）は、宗教的な儀式を行わず、ご遺体を安置した後、火葬炉前でのお別れのみを行う形式です。葬儀の中で最もシンプルな形式であり、ごく少人数でひっそりと送り出したい方や、ご本人の意向でシンプルを希望されている場合などに選ばれます。形式がシンプルなぶん、後日の「お別れの会」と組み合わせる方もいらっしゃいます。
            </p>
            <div className="mt-4">
              <Link href="/needs/simple" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 text-sm transition-colors">
                シンプルな葬儀をご希望の方へ
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* 向いている方 */}
      <section className="py-16 md:py-20 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">HOW TO CHOOSE</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              向いている方
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
                  通夜・告別式でのお別れの場を大切にしたい方、菩提寺がある方、ご家族や親しい方と一定の形式でお別れしたい方。
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="py-7">
                <p className="text-[#312852] text-base tracking-wide mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                  火葬式が向く方
                </p>
                <p className="text-[#4a4a4a] text-base leading-relaxed pl-4 border-l border-[#c9a55a]">
                  宗教的な儀式を行わず、ごく少人数でシンプルに見送りたい方、故人の意向でシンプルな形を希望されている方、ご予算に合わせた形式をお探しの方。
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
          <FadeInUp delay={0.2} className="mt-8">
            <p className="text-[#4a4a4a] text-sm leading-relaxed">
              ご不明な点は
              <Link href="/consultation" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 mx-1 transition-colors">事前相談</Link>
              にてご確認いただけます。
              <Link href="/faq" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 mx-1 transition-colors">よくある質問</Link>
              もあわせてご覧ください。
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
