import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import Breadcrumb from "../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "葬儀プランの比較・選び方｜稲垣屋葬儀店",
  description:
    "家族葬・一日葬・火葬式・一般葬・区民葬儀など、葬儀プランの違いを比較・解説。葛飾区の稲垣屋葬儀店が費用・形式・葬儀社の選び方まで丁寧にご案内します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/compare" },
};

const faqs = [
  {
    q: "葬儀形式はいつ決めればよいですか？",
    a: "ご逝去後できるだけ早い段階でご相談いただくのがスムーズです。ただし、事前にご相談いただければ各形式の違いをご説明し、ご家族のご状況に合ったプランをご提案します。焦らず決めるためにも、事前相談のご活用をお勧めします。",
  },
  {
    q: "費用が心配です。どのプランが一番負担が少ないですか？",
    a: "一般的に火葬式・一日葬・家族葬の順で費用を抑えやすい傾向があります。ただし費用はプランの内容・参列者数・返礼品・飲食費などによって異なります。稲垣屋葬儀店では事前にお見積りをご提示しますので、まずはご相談ください。",
  },
  {
    q: "葛飾区民葬儀制度とは何ですか？",
    a: "葛飾区が設けた区民向けの葬儀制度で、区指定の取扱店を利用することで一定の内容の葬儀をご利用いただけます。稲垣屋葬儀店は葛飾区指定の取扱店です。詳細は事前相談またはお問い合わせでご確認ください。",
  },
  {
    q: "どのページから調べ始めればよいですか？",
    a: "まず「5つの葬儀プランを比較」のページで各形式の概要をご覧ください。次に「葬儀費用の比較」で費用感をつかみ、「葬儀社の選び方」で相談先の判断基準をご確認いただくと、スムーズに検討を進められます。",
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

const comparePages = [
  {
    href: "/compare/funeral-plans",
    en: "PLAN TYPES",
    title: "5つの葬儀プランを比較",
    desc: "家族葬・一日葬・火葬式・一般葬・区民葬儀の特徴と違いを一覧表で確認できます。",
  },
  {
    href: "/compare/cost",
    en: "COST",
    title: "葬儀費用の比較",
    desc: "各プランの費用感と、含まれる内容・含まれない内容を整理してご説明します。",
  },
  {
    href: "/compare/funeral-home",
    en: "CHOOSING",
    title: "葬儀社の選び方",
    desc: "費用透明性・24時間対応・地域実績など、葬儀社を選ぶ際の判断基準をご紹介します。",
  },
  {
    href: "/compare/family-vs-oneday",
    en: "VS",
    title: "家族葬と一日葬の違い",
    desc: "通夜の有無・費用・どちらが向いているかを詳しく比較します。",
  },
  {
    href: "/compare/family-vs-cremation",
    en: "VS",
    title: "家族葬と火葬式の違い",
    desc: "お別れの時間・費用・向いている方を比較します。",
  },
  {
    href: "/compare/oneday-vs-cremation",
    en: "VS",
    title: "一日葬と火葬式の違い",
    desc: "費用・流れ・お別れの時間をポイントごとに比較します。",
  },
  {
    href: "/compare/kumin-vs-general",
    en: "VS",
    title: "区民葬儀と一般葬の違い",
    desc: "費用の考え方・対象者・内容の違いを葛飾区の制度と合わせてご説明します。",
  },
];

export default function CompareIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        title="葬儀プランの比較・選び方"
        subtitle="形式・費用・葬儀社の選び方を整理する"
        en="COMPARE & CHOOSE"
      />

      <Breadcrumb items={[{ label: "葬儀プランの比較" }]} />

      {/* Intro */}
      <section className="py-16 md:py-20 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-relaxed">
              葬儀の形式や費用、葬儀社の選び方は、初めて経験する方にとって分かりにくいことが多いものです。このページでは、葛飾区の稲垣屋葬儀店が取り扱う各種プランの違いや費用の目安、葬儀社を選ぶ際のポイントを分かりやすくまとめました。比較ページを活用して、ご家族にとって最も合った形式をゆっくりとご検討ください。
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link href="/plans/family-funeral" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 transition-colors">
                家族葬プランの詳細
              </Link>
              <Link href="/consultation" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 transition-colors">
                事前相談について
              </Link>
              <Link href="/faq" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 transition-colors">
                よくある質問
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Summary Table */}
      <section className="py-16 md:py-20 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">SUMMARY TABLE</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              葬儀プラン一覧
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-[#e8ddf4]">
                    <th className="py-3 px-4 text-left text-[#312852] font-normal tracking-wide" style={{ fontFamily: "var(--font-mincho)" }}>プラン</th>
                    <th className="py-3 px-4 text-center text-[#312852] font-normal tracking-wide" style={{ fontFamily: "var(--font-mincho)" }}>通夜</th>
                    <th className="py-3 px-4 text-center text-[#312852] font-normal tracking-wide" style={{ fontFamily: "var(--font-mincho)" }}>告別式</th>
                    <th className="py-3 px-4 text-center text-[#312852] font-normal tracking-wide" style={{ fontFamily: "var(--font-mincho)" }}>規模感</th>
                    <th className="py-3 px-4 text-center text-[#312852] font-normal tracking-wide" style={{ fontFamily: "var(--font-mincho)" }}>費用感</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e8ddf4]">
                  <tr>
                    <td className="py-4 px-4 text-[#312852] font-normal" style={{ fontFamily: "var(--font-mincho)" }}>家族葬</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">あり（省略可）</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">あり</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">少人数</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">中程度</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-[#312852] font-normal" style={{ fontFamily: "var(--font-mincho)" }}>一日葬</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">なし</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">あり</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">少人数</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">やや抑えめ</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-[#312852] font-normal" style={{ fontFamily: "var(--font-mincho)" }}>火葬式</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">なし</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">なし</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">ごく少人数</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">抑えめ</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-[#312852] font-normal" style={{ fontFamily: "var(--font-mincho)" }}>一般葬</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">あり</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">あり</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">多数</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">高め</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-[#312852] font-normal" style={{ fontFamily: "var(--font-mincho)" }}>区民葬儀</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">制度による</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">制度による</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">葛飾区民向け</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">制度内容による</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[#7560a0] text-xs mt-4 leading-relaxed">
              ※上記は目安です。実際の費用・内容は葬儀の詳細によって異なります。詳しくは
              <Link href="/compare/cost" className="underline underline-offset-2 hover:text-[#312852] transition-colors mx-1">葬儀費用の比較</Link>
              またはお問い合わせでご確認ください。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Compare Pages List */}
      <section className="py-16 md:py-20 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COMPARE PAGES</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              比較・解説ページ一覧
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {comparePages.map((page) => (
              <StaggerItem key={page.href}>
                <Link
                  href={page.href}
                  className="flex items-center justify-between py-6 group"
                >
                  <div>
                    <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-1">{page.en}</p>
                    <p className="text-[#312852] text-base tracking-wide group-hover:text-[#5c4a80] transition-colors" style={{ fontFamily: "var(--font-mincho)" }}>
                      {page.title}
                    </p>
                    <p className="text-[#7560a0] text-sm mt-1">{page.desc}</p>
                  </div>
                  <ChevronRight size={16} className="text-[#9278be] group-hover:translate-x-1 transition-transform shrink-0 ml-4" />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
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

      {/* CTA */}
      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              まずはお気軽にご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              形式や費用について迷っている段階でも、どうぞお気軽にご連絡ください。<br />
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
