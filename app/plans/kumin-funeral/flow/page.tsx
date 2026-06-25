import type { Metadata } from "next";
import PageHero from "../../../components/PageHero";
import Breadcrumb from "../../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "葛飾区民葬儀の流れ｜申請から葬儀まで｜稲垣屋葬儀店",
  description:
    "葛飾区民葬儀の申請から葬儀完了までの流れ。稲垣屋葬儀店（葛飾区指定取扱店）が申請手続きのサポートも行います。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/plans/kumin-funeral/flow" },
};

const steps = [
  {
    number: "01",
    title: "ご逝去・稲垣屋葬儀店へのご連絡（24時間対応）",
    desc: "大切な方がご逝去されましたら、まず稲垣屋葬儀店へご連絡ください。24時間365日、深夜・早朝・休日を問わずお電話をお受けしております。区民葬儀のご利用をご希望の場合は、その旨を最初にお伝えいただくとスムーズです。",
  },
  {
    number: "02",
    title: "対象者確認・区民葬儀のご案内",
    desc: "葛飾区民葬儀制度の対象者かどうかを、葛飾区の規定に基づいて確認します。稲垣屋葬儀店（葛飾区指定取扱店）が丁寧にご案内しますので、制度についてご不明な点もこの段階でご質問ください。",
  },
  {
    number: "03",
    title: "区民葬儀の申請手続き",
    desc: "葛飾区の規定に基づく申請手続きを行います。必要書類・手続きの方法などについては区の規定に基づき異なりますが、稲垣屋葬儀店が申請のサポートを行います。手続きの不安はお任せください。",
  },
  {
    number: "04",
    title: "葬儀の打ち合わせ（日程・内容）",
    desc: "申請手続きと並行して、葬儀の日程・式の内容・式場・宗教者の手配などについて打ち合わせを行います。区民葬儀の範囲内でのご希望と、別途ご検討いただける内容についても丁寧にご説明します。",
  },
  {
    number: "05",
    title: "葬儀の執行",
    desc: "打ち合わせの内容に基づいて葬儀を執り行います。お通夜・告別式など、選択した形式に応じて進めます。稲垣屋葬儀店のスタッフが式の進行・運営をすべてサポートしますので、ご遺族は故人様とのお別れに集中していただけます。",
  },
  {
    number: "06",
    title: "葬儀後の手続き・アフターサポート",
    desc: "葬儀後の各種手続き（死亡届・火葬許可証など）について稲垣屋葬儀店がサポートします。また、四十九日法要・納骨・区民葬儀に関するご確認事項など、葬儀後のご相談にも対応しております。",
  },
];

const faqItems = [
  {
    question: "区民葬儀の申請は誰がどこでしますか？",
    answer:
      "区民葬儀の申請方法は葛飾区の規定によります。稲垣屋葬儀店（葛飾区指定取扱店）が申請のサポートを行いますので、ご逝去後に稲垣屋葬儀店へご連絡いただければ、手続きについて丁寧にご案内します。申請の場所・方法の詳細は区の規定による部分が大きいため、まずはお電話ください。",
  },
  {
    question: "区民葬儀の手続きは複雑ですか？",
    answer:
      "区民葬儀の手続きには一定の書類や確認が必要ですが、稲垣屋葬儀店（葛飾区指定取扱店）が申請のサポートを行いますので、ご遺族が単独で複雑な手続きをこなす必要はありません。ご逝去後は慌ただしい時間ですが、手続き面は稲垣屋葬儀店にお任せいただけます。",
  },
  {
    question: "急いでいる場合でも区民葬儀は利用できますか？",
    answer:
      "稲垣屋葬儀店は24時間対応しておりますので、急いでいる場合もまずはご連絡ください。区民葬儀の申請手続きについてはスムーズに進められるようサポートします。ただし葛飾区の規定による手続きが必要なため、詳細はご連絡後にご案内します。",
  },
  {
    question: "区民葬儀を利用した後の手続きは？",
    answer:
      "葬儀後には死亡届の提出・火葬許可証の受け取りなどの手続きがあります。稲垣屋葬儀店ではこれらの手続きのサポートも行います。また四十九日法要・納骨・各種保険・年金の手続きなどについても、ご相談いただければ情報をご提供します。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function KuminFuneralFlowPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero title="葛飾区民葬儀の流れ" subtitle="申請から葬儀完了までのステップ" en="FLOW OF KUMIN FUNERAL" />
      <Breadcrumb
        items={[
          { label: "葬儀プラン", href: "/plans" },
          { label: "区民葬儀", href: "/plans/kumin-funeral" },
          { label: "区民葬儀の流れ" },
        ]}
      />

      {/* イントロ */}
      <section className="py-20 md:py-28 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">OVERVIEW</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em] mb-5"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              区民葬儀の流れについて
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mb-6" />
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              葛飾区民葬儀制度を利用した葬儀は、一般的な葬儀の流れに申請手続きが加わります。稲垣屋葬儀店（葛飾区指定取扱店）では、申請から葬儀の執行・葬儀後の手続きまで一貫してサポートしますので、ご遺族の方々が複雑な手続きで戸惑うことなく葬儀を進めていただけます。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              区民葬儀の申請手続きの詳細は葛飾区の規定に基づきます。手続きの内容・必要書類などについては、ご逝去後に稲垣屋葬儀店にご連絡いただければ、最新の情報をもとに丁寧にご案内します。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              このページでは、区民葬儀を利用した際の流れの概要をステップ形式でご説明します。事前に流れを把握しておくことで、いざというときに落ち着いて対応できます。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ステップ */}
      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">STEP BY STEP</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              区民葬儀の流れ（6ステップ）
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {steps.map((step) => (
              <StaggerItem key={step.number}>
                <div className="flex items-start gap-6 py-8">
                  <div className="shrink-0 w-14 text-center pt-1">
                    <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-1">STEP</p>
                    <p
                      className="text-[#c9a55a] text-2xl tracking-wider"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      {step.number}
                    </p>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3
                      className="text-[#312852] text-lg tracking-wide mb-2"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[#4a4a4a] text-base leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mt-8">
            <p className="text-[#5c4a80] text-sm leading-relaxed border-l-2 border-[#9278be] pl-4">
              上記の流れは概要です。申請手続きの詳細・必要書類などは葛飾区の規定によります。最新の情報については稲垣屋葬儀店またはお近くの区役所にてご確認ください。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* 取扱店経由の利点 */}
      <section className="py-16 md:py-24 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">BENEFITS</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              稲垣屋葬儀店（取扱店）を通じて申請する利点
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "申請手続きのサポート",
                desc: "区民葬儀の申請に必要な手続きを稲垣屋葬儀店がサポートします。慌ただしいご逝去直後の時間でも、手続き面はお任せいただけます。必要書類の準備・確認についても丁寧にご案内します。",
              },
              {
                title: "葬儀の企画・運営の一貫対応",
                desc: "申請手続きから葬儀の企画・日程調整・式場手配・当日の運営まで、稲垣屋葬儀店が一貫して対応します。複数の窓口を使い分ける必要がなく、スムーズに葬儀を進めることができます。",
              },
              {
                title: "制度の内容をわかりやすくご説明",
                desc: "区民葬儀制度で対応される範囲・別途かかる費用・葬儀の選択肢など、制度の内容をわかりやすくご説明します。「どれが制度の範囲内か」「追加費用はどれくらいか」という疑問にも率直にお答えします。",
              },
              {
                title: "24時間対応",
                desc: "稲垣屋葬儀店は深夜・早朝・休日を問わず24時間対応しております。ご逝去の時間帯を問わず、すぐにご連絡いただければ速やかに対応します。",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3
                    className="text-[#312852] text-lg tracking-wide mb-2"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 注意事項 */}
      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">NOTES</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              ご利用にあたっての注意事項
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              葛飾区民葬儀制度の内容（対象者・手続き方法・費用の範囲など）は、葛飾区の規定に基づきます。規定の内容は変更される場合がありますので、最新の情報については必ず稲垣屋葬儀店またはお近くの葛飾区役所にてご確認ください。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              このページに掲載している内容はあくまで一般的な流れの概要であり、個別のご状況や区の規定によって実際の手続き・内容が異なる場合があります。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              ご不明な点は遠慮なく稲垣屋葬儀店へお問い合わせください。事前相談は無料で対応しております。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              よくあるご質問
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {faqItems.map((item) => (
              <StaggerItem key={item.question}>
                <div className="py-7">
                  <p
                    className="text-[#5c4a80] text-base tracking-wide mb-3"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    Q. {item.question}
                  </p>
                  <p className="text-[#4a4a4a] text-base leading-relaxed pl-4 border-l-2 border-[#e8ddf4]">
                    {item.answer}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 関連ページ */}
      <section className="py-12 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-5">RELATED PAGES</p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {[
                { href: "/plans/kumin-funeral", label: "区民葬儀について" },
                { href: "/plans/kumin-funeral/guide", label: "区民葬儀の利用ガイド" },
                { href: "/plans/kumin-funeral/cost-detail", label: "費用と注意点" },
                { href: "/plans/family-funeral/flow", label: "家族葬の流れ" },
                { href: "/contact", label: "お問い合わせ" },
                { href: "/consultation", label: "事前相談" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-1 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group"
                >
                  {link.label}
                  <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* CTA */}
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
