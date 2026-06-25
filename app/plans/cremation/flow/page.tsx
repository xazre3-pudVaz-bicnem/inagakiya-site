import type { Metadata } from "next";
import PageHero from "../../../components/PageHero";
import Breadcrumb from "../../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "火葬式・直葬の流れ｜葛飾区 稲垣屋葬儀店",
  description:
    "葛飾区での火葬式（直葬）の流れをご説明します。お通夜・告別式なしのシンプルな葬儀のステップを丁寧にご案内します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/plans/cremation/flow" },
};

const faqItems = [
  {
    question: "火葬式でも読経はできますか？",
    answer:
      "はい、可能です。火葬前に僧侶に来ていただき、火葬炉前で短い読経をお願いすることができます。宗教者の手配をご希望の場合は、葬儀社へお申し付けください。菩提寺がある場合はお寺へご相談ください。",
  },
  {
    question: "火葬式の場合、葬儀社は必要ですか？",
    answer:
      "はい、葬儀社への依頼が必要です。ご遺体の搬送・安置・納棺・火葬場との手続き・死亡届の手配など、法的・実務的な対応が必要なためです。火葬式であっても葬儀社のサポートは不可欠です。",
  },
  {
    question: "火葬式は何人程度で行うものですか？",
    answer:
      "特に決まった人数はありませんが、ごく近しい家族・親族のみで行われることが多く、数名から十数名程度が一般的です。大勢の参列者をお迎えする式典がないため、小人数でのお別れが中心になります。",
  },
  {
    question: "火葬式のあとに法要・法事を行うことはできますか？",
    answer:
      "はい、火葬式のあとに四十九日・一周忌などの法要を行うことは一般的です。火葬式を選んだ場合でも、後日ご自宅や寺院で法要を行い、故人を偲ぶ機会を設けることができます。",
  },
];

const steps = [
  {
    number: "01",
    title: "ご逝去・ご連絡",
    desc: "病院・施設・ご自宅でのご逝去後、24時間いつでもご連絡ください。深夜・早朝・休日を問わず、迅速にお迎えに参ります。まずはお電話一本でご連絡ください。",
  },
  {
    number: "02",
    title: "搬送・ご安置（自宅または安置施設）",
    desc: "病院や施設から故人様をご自宅または弊社の安置施設へ搬送します。ご安置の場所や火葬の日程・費用などについて、担当者が丁寧に打ち合わせします。",
  },
  {
    number: "03",
    title: "納棺・火葬場への移動",
    desc: "火葬当日、故人様を棺に納める「納棺」を行います。ご家族で最後のお別れをしていただいたあと、霊柩車で火葬場へ向かいます。",
  },
  {
    number: "04",
    title: "火葬前のお別れ（火葬炉前での短いお別れ）",
    desc: "火葬場の炉前ホールにて、ごく近しい方でお別れの時間をお持ちいただけます。ご希望の場合は僧侶に来ていただき、短い読経をお願いすることも可能です。",
  },
  {
    number: "05",
    title: "火葬・収骨",
    desc: "火葬を行い、火葬終了後にご家族で収骨を行います。故人様のお骨を骨壺に納め、ご自宅へお戻りいただきます。後飾りの設置もご相談ください。",
  },
];

export default function CremationFlowPage() {
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
        title="火葬式・直葬の流れ"
        subtitle="シンプルな葬儀のステップをご説明します"
        en="FLOW OF CREMATION"
      />
      <Breadcrumb
        items={[
          { label: "葬儀プラン", href: "/plans" },
          { label: "火葬式", href: "/plans/cremation" },
          { label: "火葬式の流れ" },
        ]}
      />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ABOUT CREMATION</p>
            <h1 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              火葬式・直葬の流れ
            </h1>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              火葬式（直葬）とは、お通夜・告別式などの式典を行わず、搬送・安置・納棺・火葬という必要な手続きのみを行う葬儀形式です。全ての葬儀形式の中で最もシンプルであり、ごく近しい方だけで静かに故人を見送りたいという方に選ばれています。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              形式がシンプルであることと、故人への思いの深さは別のことです。稲垣屋葬儀店では、火葬式においても一つひとつ丁寧に、ご家族の気持ちに寄り添いながらお手伝いします。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              以下では、火葬式・直葬が実際にどのような流れで進むかをご説明します。
            </p>
          </FadeInUp>

          <FadeInUp className="mt-16 mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">STEPS</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              火葬式・直葬のステップ
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
              家族葬との違い
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp className="mb-16">
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-6">
              家族葬と火葬式（直葬）はしばしば混同されますが、大きな違いがあります。家族葬は小人数での葬儀形式を指しますが、通夜・告別式などの式典は行います。火葬式は式典を省略し、火葬のみを行います。
            </p>
            <div className="border border-[#e8ddf4] overflow-hidden">
              <div className="grid grid-cols-3 bg-[#f4eef9] border-b border-[#e8ddf4]">
                <div className="px-4 py-3 text-[#312852] text-sm tracking-wide" style={{ fontFamily: "var(--font-mincho)" }}>項目</div>
                <div className="px-4 py-3 text-[#312852] text-sm tracking-wide border-l border-[#e8ddf4]" style={{ fontFamily: "var(--font-mincho)" }}>火葬式（直葬）</div>
                <div className="px-4 py-3 text-[#312852] text-sm tracking-wide border-l border-[#e8ddf4]" style={{ fontFamily: "var(--font-mincho)" }}>家族葬</div>
              </div>
              {[
                { item: "お通夜", cremation: "なし", family: "あり" },
                { item: "告別式", cremation: "なし", family: "あり" },
                { item: "読経・焼香", cremation: "炉前のみ（希望制）", family: "式典で行う" },
                { item: "式典の有無", cremation: "なし", family: "あり" },
                { item: "参列者の範囲", cremation: "ごく近親者", family: "家族・親族中心" },
              ].map((row) => (
                <div key={row.item} className="grid grid-cols-3 border-b border-[#e8ddf4] last:border-b-0">
                  <div className="px-4 py-4 text-[#312852] text-sm">{row.item}</div>
                  <div className="px-4 py-4 text-[#4a4a4a] text-sm border-l border-[#e8ddf4]">{row.cremation}</div>
                  <div className="px-4 py-4 text-[#4a4a4a] text-sm border-l border-[#e8ddf4]">{row.family}</div>
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
              火葬式の当日は、火葬場の予約時間に合わせて動きます。火葬場によって受付時間や火葬所要時間が異なります。以下はあくまで目安です。
            </p>
            <StaggerContainer className="divide-y divide-[#e8ddf4]">
              {[
                { time: "当日午前", content: "ご自宅または安置施設で納棺を行います。ご家族でお別れの時間をお持ちください。" },
                { time: "出発時刻", content: "火葬場の予約時刻に合わせて霊柩車で出発します。ご家族の方々は自家用車やタクシーでお向かいください。" },
                { time: "炉前到着後", content: "火葬炉前にて短いお別れの時間をお過ごしいただきます。ご希望の場合は僧侶による読経も可能です。" },
                { time: "火葬中", content: "火葬中は控室でお待ちいただきます。所要時間は火葬場によって異なりますが、概ね1〜2時間程度です。" },
                { time: "収骨", content: "火葬終了後、ご家族で収骨を行います。お骨を骨壺に納め、ご自宅へお持ち帰りいただきます。" },
              ].map((item) => (
                <StaggerItem key={item.time}>
                  <div className="flex items-start gap-6 py-6">
                    <div className="shrink-0 w-24 text-[#c9a55a] text-sm tracking-wide pt-0.5" style={{ fontFamily: "var(--font-mincho)" }}>
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
                { href: "/plans/cremation", label: "火葬式（直葬）プランのご案内" },
                { href: "/plans/cremation/cost", label: "火葬式・直葬の費用" },
                { href: "/plans/cremation/difference", label: "火葬式と直葬の違い" },
                { href: "/plans/family-funeral/flow", label: "家族葬の流れ" },
                { href: "/plans/oneday-funeral/flow", label: "一日葬の流れ" },
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
