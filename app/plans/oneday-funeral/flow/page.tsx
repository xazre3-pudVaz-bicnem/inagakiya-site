import type { Metadata } from "next";
import PageHero from "../../../components/PageHero";
import Breadcrumb from "../../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "一日葬の流れ｜お通夜なしの葬儀｜葛飾区 稲垣屋葬儀店",
  description:
    "葛飾区での一日葬（お通夜なし）の流れをご説明します。告別式・火葬を一日で行う葬儀のステップを丁寧にご案内します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/plans/oneday-funeral/flow" },
};

const faqItems = [
  {
    question: "一日葬ではお通夜をまったく行わないのですか？",
    answer:
      "はい、一日葬はお通夜を省略した葬儀形式です。告別式と火葬を同日に執り行います。お通夜に代わる場として、ご安置期間中に近しい方々がお顔を見てお別れいただくことは可能です。",
  },
  {
    question: "一日葬の場合、参列者に事前に何を伝えればよいですか？",
    answer:
      "お通夜がない旨、告別式の日時・会場、服装の案内をお伝えください。「一日葬のため通夜は行いません」と明記することで参列者の混乱を防げます。葬儀社がご案内文の作成をお手伝いします。",
  },
  {
    question: "一日葬は宗教的に問題ありませんか？",
    answer:
      "菩提寺のある方は事前にお寺へご相談ください。宗派によっては一日葬（通夜省略）を認めない場合もあります。菩提寺がない方や無宗教の方は特に問題ありません。",
  },
  {
    question: "一日葬でも葛飾区の区民葬儀は使えますか？",
    answer:
      "葛飾区の区民葬儀は利用できる場合があります。ただし区民葬儀の規定と一日葬の内容の組み合わせによって費用の構成が変わります。詳しくは稲垣屋葬儀店へお問い合わせください。",
  },
];

const steps = [
  {
    number: "01",
    title: "ご逝去・ご連絡",
    desc: "病院や施設からご連絡をいただきましたら、24時間いつでも対応いたします。深夜・早朝・休日を問わず、迅速に故人様のお迎えに参ります。まずはお電話でご連絡ください。",
  },
  {
    number: "02",
    title: "搬送・ご安置・打ち合わせ",
    desc: "病院または施設から故人様をご自宅や安置施設へ搬送します。ご安置後、葬儀の日程・プラン・参列者の範囲・宗教者の手配などを丁寧に打ち合わせいたします。",
  },
  {
    number: "03",
    title: "納棺",
    desc: "告別式前日または当日の朝に、故人様を棺に納める「納棺」を行います。ご家族でお顔を見ながらお別れの時間をお持ちいただけます。湯灌やお化粧のご要望もお受けしております。",
  },
  {
    number: "04",
    title: "告別式当日の朝（準備・開式前）",
    desc: "会場設営・供花の配置・受付の準備を整えます。参列者の方々が到着される前に、式の流れについて担当者からご説明します。ご不安な点はこの時間にご質問ください。",
  },
  {
    number: "05",
    title: "告別式（読経・焼香・お別れ）",
    desc: "宗教者による読経のもと、ご参列者で焼香をし、故人様との最後のお別れの時間をお持ちいただきます。無宗教の場合は、音楽などを取り入れたお別れの式を行うことも可能です。",
  },
  {
    number: "06",
    title: "出棺・火葬・収骨",
    desc: "告別式終了後、ご出棺して火葬場へ向かいます。火葬終了後、ご家族で収骨を行い、故人様のお骨を骨壺に納めます。すべてを一日で執り行うのが一日葬の特徴です。",
  },
];

const comparison = [
  {
    item: "お通夜",
    oneday: "なし",
    twoday: "あり（前日に執り行う）",
  },
  {
    item: "告別式",
    oneday: "あり",
    twoday: "あり",
  },
  {
    item: "火葬",
    oneday: "告別式と同日",
    twoday: "告別式翌日または同日",
  },
  {
    item: "日程",
    oneday: "1日",
    twoday: "2日",
  },
  {
    item: "ご遺族の負担",
    oneday: "比較的少ない",
    twoday: "二日間にわたる",
  },
];

export default function OnedayFuneralFlowPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title="一日葬の流れ"
        subtitle="お通夜なしで告別式・火葬を一日で執り行う"
        en="FLOW OF ONE-DAY FUNERAL"
      />
      <Breadcrumb
        items={[
          { label: "葬儀プラン", href: "/plans" },
          { label: "一日葬", href: "/plans/oneday-funeral" },
          { label: "一日葬の流れ" },
        ]}
      />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ABOUT ONE-DAY FUNERAL</p>
            <h1 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              一日葬の流れ
            </h1>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              一日葬とは、お通夜を省略し、告別式と火葬を同じ日に執り行う葬儀スタイルです。二日間の日程を必要とする一般的な葬儀と比べ、ご遺族の体力的・精神的な負担を軽減できる形式として近年選ばれています。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              お通夜を省略するといっても、告別式はきちんと執り行います。読経・焼香・ご出棺という一連の儀式を通じて、故人様と心を込めてお別れすることができます。「一日で終わらせたい」のではなく、「一日の中で心を尽くしてお別れしたい」という思いを大切にしています。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              以下では、一日葬が実際にどのような流れで進むかをステップごとにご説明します。ご不明な点は事前相談でいつでもご確認ください。
            </p>
          </FadeInUp>

          <FadeInUp className="mt-16 mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">STEPS</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              一日葬のステップ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-16">
            {steps.map((step) => (
              <StaggerItem key={step.number}>
                <div className="flex items-start gap-6 py-8">
                  <div className="shrink-0 w-14 text-center pt-1">
                    <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-1">STEP</p>
                    <p className="text-[#c9a55a] text-2xl tracking-wider" style={{ fontFamily: "var(--font-mincho)" }}>
                      {step.number}
                    </p>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-[#312852] text-lg tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>
                      {step.title}
                    </h3>
                    <p className="text-[#4a4a4a] text-base leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COMPARISON</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              お通夜ありとの違い
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp className="mb-16">
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-6">
              一日葬と二日間かけて行う通常の葬儀（お通夜あり）の主な違いは以下のとおりです。どちらが良いというものではなく、ご家族の状況や故人様のご意向に合わせてご選択ください。
            </p>
            <div className="border border-[#e8ddf4] overflow-hidden">
              <div className="grid grid-cols-3 bg-[#f4eef9] border-b border-[#e8ddf4]">
                <div className="px-4 py-3 text-[#312852] text-sm tracking-wide" style={{ fontFamily: "var(--font-mincho)" }}>項目</div>
                <div className="px-4 py-3 text-[#312852] text-sm tracking-wide border-l border-[#e8ddf4]" style={{ fontFamily: "var(--font-mincho)" }}>一日葬</div>
                <div className="px-4 py-3 text-[#312852] text-sm tracking-wide border-l border-[#e8ddf4]" style={{ fontFamily: "var(--font-mincho)" }}>お通夜あり</div>
              </div>
              {comparison.map((row) => (
                <div key={row.item} className="grid grid-cols-3 border-b border-[#e8ddf4] last:border-b-0">
                  <div className="px-4 py-4 text-[#312852] text-sm">{row.item}</div>
                  <div className="px-4 py-4 text-[#4a4a4a] text-sm border-l border-[#e8ddf4]">{row.oneday}</div>
                  <div className="px-4 py-4 text-[#4a4a4a] text-sm border-l border-[#e8ddf4]">{row.twoday}</div>
                </div>
              ))}
            </div>
          </FadeInUp>

          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">TIME SCHEDULE</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              当日の流れの目安
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp className="mb-16">
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-6">
              一日葬の当日は、一般的に午前中に告別式を執り行い、午後に火葬となるケースが多く見られます。ただし火葬場の空き状況や宗教者のご都合によって時間は変わります。以下はあくまで目安です。
            </p>
            <StaggerContainer className="divide-y divide-[#e8ddf4]">
              {[
                { time: "午前 9:00 頃", content: "開式前の準備・受付開始。参列者の方々のご到着をお待ちします。" },
                { time: "午前 10:00 頃", content: "告別式 開式。読経・焼香・ご挨拶などを執り行います。通常60〜90分程度です。" },
                { time: "正午 前後", content: "ご出棺。参列者でお見送りし、火葬場へ出発します。" },
                { time: "午後", content: "火葬・収骨。火葬の時間は火葬場によって異なりますが、概ね1〜2時間程度です。" },
              ].map((item) => (
                <StaggerItem key={item.time}>
                  <div className="flex items-start gap-6 py-6">
                    <div className="shrink-0 w-28 text-[#c9a55a] text-sm tracking-wide pt-0.5" style={{ fontFamily: "var(--font-mincho)" }}>
                      {item.time}
                    </div>
                    <p className="flex-1 text-[#4a4a4a] text-base leading-relaxed">{item.content}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
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
                { href: "/plans/oneday-funeral/merit", label: "一日葬のメリット・注意点" },
                { href: "/plans/oneday-funeral/cost", label: "一日葬の費用と内訳" },
                { href: "/plans/family-funeral/flow", label: "家族葬の流れ" },
                { href: "/plans/kumin-funeral", label: "葛飾区 区民葬儀について" },
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
