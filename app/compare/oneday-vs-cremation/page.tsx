import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "一日葬と火葬式の違い｜どちらを選ぶ？｜葛飾区 稲垣屋葬儀店",
  description:
    "一日葬と火葬式（直葬）の違いを解説。費用・流れ・お別れの時間を比較して選び方をご案内します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/compare/oneday-vs-cremation" },
};

const faqs = [
  {
    q: "一日葬と火葬式、どちらが身体的・精神的負担が少ないですか？",
    a: "どちらも通夜がなく1日で完結するため、2日間の葬儀よりは負担が少なくなります。一日葬は告別式があるため若干の準備が必要ですが、宗教的な儀式とご家族・参列者でのきちんとしたお別れの場があります。火葬式はさらにシンプルで時間も短くなります。ご家族の体力・状況に合わせてご検討ください。",
  },
  {
    q: "一日葬か火葬式か、決め手は何ですか？",
    a: "「参列者を呼ぶかどうか」「宗教的な儀式を行うかどうか」「告別式でのお別れの時間を持ちたいかどうか」が主な決め手となります。ごく少人数でシンプルに見送りたい場合は火葬式、ご親族や親しい方と告別式でのお別れを行いたい場合は一日葬が向いています。",
  },
  {
    q: "菩提寺がある場合、火葬式は選べますか？",
    a: "菩提寺がある場合、火葬式を希望する際は菩提寺のご住職への事前相談が重要です。宗教的な儀式を行わない火葬式に対して、菩提寺によっては希望に沿えない場合もあります。一日葬であれば宗教者を呼ぶことができますので、菩提寺がある方には一日葬をご検討いただくことが多いです。",
  },
  {
    q: "どちらの形式でも葛飾区民葬儀制度は使えますか？",
    a: "区民葬儀制度は一定の内容が定められた枠組みですので、火葬式や一日葬との組み合わせについては個別にご確認が必要です。稲垣屋葬儀店では区民葬儀についての事前相談も承っております。",
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
  name: "一日葬と火葬式の違い｜どちらを選ぶ？｜葛飾区 稲垣屋葬儀店",
  description:
    "一日葬と火葬式（直葬）の違いを解説。費用・流れ・お別れの時間を比較して選び方をご案内します。",
  url: "https://www.inagakiyasougiten.com/compare/oneday-vs-cremation",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀プラン比較", item: "https://www.inagakiyasougiten.com/compare" },
      { "@type": "ListItem", position: 3, name: "一日葬と火葬式の違い", item: "https://www.inagakiyasougiten.com/compare/oneday-vs-cremation" },
    ],
  },
};

export default function OnedayVsCremationPage() {
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
        title="一日葬と火葬式の違い"
        subtitle="費用・流れ・お別れの時間を比較"
        en="COMPARISON"
      />

      <Breadcrumb
        items={[
          { label: "比較で選ぶ", href: "/compare/funeral-plans" },
          { label: "一日葬と火葬式の違い" },
        ]}
      />

      {/* Intro */}
      <section className="py-16 md:py-20 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-relaxed">
              一日葬と火葬式（直葬）は、どちらも通夜を行わず1日で完結する点が共通しています。一方で、一日葬には告別式があり宗教者をお呼びすることもできるのに対し、火葬式は告別式も行わず火葬炉前でのお別れのみとなります。「どこまでの形式を行いたいか」が選び方の核心となります。
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link href="/plans/oneday-funeral" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 transition-colors">
                一日葬の詳細
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
              一日葬と火葬式の比較
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-[#e8ddf4]">
                    <th className="py-3 px-4 text-left text-[#312852] font-normal tracking-wide" style={{ fontFamily: "var(--font-mincho)" }}>比較項目</th>
                    <th className="py-3 px-4 text-center text-[#312852] font-normal tracking-wide" style={{ fontFamily: "var(--font-mincho)" }}>一日葬</th>
                    <th className="py-3 px-4 text-center text-[#312852] font-normal tracking-wide" style={{ fontFamily: "var(--font-mincho)" }}>火葬式</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e8ddf4]">
                  <tr>
                    <td className="py-4 px-4 text-[#312852]" style={{ fontFamily: "var(--font-mincho)" }}>告別式</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">あり</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">なし</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-[#312852]" style={{ fontFamily: "var(--font-mincho)" }}>通夜</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">なし</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">なし</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-[#312852]" style={{ fontFamily: "var(--font-mincho)" }}>宗教者</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">呼べる</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">なし（炉前のみ）</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-[#312852]" style={{ fontFamily: "var(--font-mincho)" }}>お別れの時間</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">告別式での時間あり</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">炉前のみ</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-[#312852]" style={{ fontFamily: "var(--font-mincho)" }}>参列者</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">少人数</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">ごく少人数</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-[#312852]" style={{ fontFamily: "var(--font-mincho)" }}>費用感</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">やや抑えめ</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">抑えめ</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* 一日葬の特徴 */}
      <section className="py-16 md:py-20 bg-[#faf7fd] border-t border-[#e8ddf4]">
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
              一日葬は通夜を省略し、告別式と火葬を1日で行う形式です。通夜がない分、参列者への負担を抑えながらも、告別式でのきちんとしたお別れの時間を確保できます。宗教者をお呼びすることも可能であり、菩提寺がある方にも対応できる場合があります。2日間の日程を取ることが難しいご家族に多く選ばれています。
            </p>
            <div className="mt-4">
              <Link href="/needs/no-wake" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 text-sm transition-colors">
                通夜なし・一日葬をご検討の方へ
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* 火葬式の特徴 */}
      <section className="py-16 md:py-20 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-8">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">CREMATION ONLY</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              火葬式の特徴
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <p className="text-[#4a4a4a] text-base leading-relaxed">
              火葬式（直葬）は、通夜・告別式などの宗教的な儀式を行わず、ご遺体の安置後に直接火葬を行う形式です。火葬炉前で家族がお別れする時間は持てますが、式次第はなく最もシンプルな形式となります。故人の意向やご家族の事情から、儀式を簡略化したい場合に選ばれます。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* 向いている方の比較 */}
      <section className="py-16 md:py-20 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">HOW TO CHOOSE</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              向いている方の比較
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            <StaggerItem>
              <div className="py-7">
                <p className="text-[#312852] text-base tracking-wide mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                  一日葬が向く方
                </p>
                <p className="text-[#4a4a4a] text-base leading-relaxed pl-4 border-l border-[#c9a55a]">
                  告別式でのお別れの場を持ちたい方、菩提寺に宗教者として来ていただきたい方、参列者を少人数呼びたい方、1日で完結させたい方。
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="py-7">
                <p className="text-[#312852] text-base tracking-wide mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                  火葬式が向く方
                </p>
                <p className="text-[#4a4a4a] text-base leading-relaxed pl-4 border-l border-[#c9a55a]">
                  宗教的な儀式を一切行わず、ごく少人数でシンプルに見送りたい方、故人の意向でシンプルな形を選んでいる方。
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
          <FadeInUp delay={0.2} className="mt-8">
            <p className="text-[#4a4a4a] text-sm leading-relaxed">
              葛飾区民葬儀制度との組み合わせについては
              <Link href="/consultation/kumin-funeral" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 mx-1 transition-colors">区民葬儀の事前相談</Link>
              でご確認ください。また
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
