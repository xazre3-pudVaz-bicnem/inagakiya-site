import type { Metadata } from "next";
import PageHero from "../../../components/PageHero";
import Breadcrumb from "../../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "葛飾区民葬儀の利用ガイド｜対象者・申請方法｜稲垣屋葬儀店",
  description:
    "葛飾区民葬儀の利用ガイド。対象者・申請方法・含まれるもの・注意点を稲垣屋葬儀店（葛飾区指定取扱店）が丁寧にご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/plans/kumin-funeral/guide" },
};

const applicationSteps = [
  {
    number: "01",
    title: "ご逝去・稲垣屋葬儀店へのご連絡",
    desc: "大切な方がご逝去されましたら、まず稲垣屋葬儀店へご連絡ください。24時間いつでもお受けしております。区民葬儀の利用をご希望の場合は、その旨を最初にお伝えいただくとスムーズです。",
  },
  {
    number: "02",
    title: "対象者の確認",
    desc: "区民葬儀制度の対象となるかどうか、葛飾区の規定に基づいて確認します。稲垣屋葬儀店（葛飾区指定取扱店）がご案内しますので、ご安心ください。",
  },
  {
    number: "03",
    title: "区民葬儀の申請手続き",
    desc: "葛飾区の規定に基づく申請手続きを行います。必要書類や手続きの詳細については区の規定により異なります。稲垣屋葬儀店が手続きのサポートを行いますので、ご不明な点はご相談ください。",
  },
  {
    number: "04",
    title: "葬儀の打ち合わせ",
    desc: "申請手続きと並行して、葬儀の日程・内容・式場などについて打ち合わせを行います。区民葬儀の範囲内でのご希望と、別途ご検討いただける追加サービスについてもご説明します。",
  },
  {
    number: "05",
    title: "葬儀の執行",
    desc: "打ち合わせの内容に基づいて葬儀を執り行います。稲垣屋葬儀店のスタッフが当日の進行・運営をすべてサポートします。",
  },
  {
    number: "06",
    title: "葬儀後の手続き・ご確認",
    desc: "葬儀後の各種手続きや、区民葬儀に関するご確認事項についてもご案内します。ご不明な点はいつでもご相談ください。",
  },
];

const faqItems = [
  {
    question: "葛飾区民葬儀の対象者は誰ですか？",
    answer:
      "葛飾区民葬儀制度の対象者については、葛飾区の規定に基づきます。一般的には葛飾区に住民登録のある方が対象となる場合が多いですが、詳細な条件は規定の内容によって異なります。最新の情報は稲垣屋葬儀店またはお近くの区役所にてご確認ください。",
  },
  {
    question: "区民葬儀の申し込みはいつすればよいですか？",
    answer:
      "区民葬儀の申し込みはご逝去後にお手続きいただく形となります。申請のタイミングや方法については葛飾区の規定に基づきます。稲垣屋葬儀店にご連絡いただければ、申請のサポートも含めてご案内しますので、まずはお電話ください。",
  },
  {
    question: "区民葬儀は家族葬や一日葬と組み合わせられますか？",
    answer:
      "区民葬儀制度と葬儀の形式（家族葬・一日葬など）の組み合わせについては、葛飾区の規定内容によります。どのような形式の葬儀を希望されているかを含めてご相談いただければ、稲垣屋葬儀店がご状況に応じてご案内します。",
  },
  {
    question: "稲垣屋葬儀店で区民葬儀を利用するにはどうすればよいですか？",
    answer:
      "稲垣屋葬儀店は葛飾区の指定取扱店として区民葬儀に対応しております。ご逝去後または事前相談の際にその旨をお伝えいただければ、申請手続きのサポートから葬儀の運営まで一貫してお手伝いします。まずはお気軽にご連絡ください。",
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

export default function KuminFuneralGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero title="葛飾区民葬儀の利用ガイド" subtitle="対象者・申請方法・取扱店の役割" en="GUIDE TO KUMIN FUNERAL" />
      <Breadcrumb
        items={[
          { label: "葬儀プラン", href: "/plans" },
          { label: "区民葬儀", href: "/plans/kumin-funeral" },
          { label: "区民葬儀の利用ガイド" },
        ]}
      />

      {/* 制度概要 */}
      <section className="py-20 md:py-28 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">OVERVIEW</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em] mb-5"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              葛飾区民葬儀制度とは
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mb-6" />
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              葛飾区民葬儀制度は、葛飾区の規定に基づく葬儀に関する制度です。稲垣屋葬儀店は葛飾区の指定取扱店として、この制度を利用した葬儀に対応しております。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              制度の内容・対象者・費用の範囲・申請方法などは葛飾区の規定に基づきます。制度の詳細や最新の情報は変更される場合がありますので、稲垣屋葬儀店またはお近くの区役所にてご確認ください。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              このページでは、葛飾区の規定を踏まえた区民葬儀の概要・申請の流れ・稲垣屋葬儀店の役割についてご説明します。ご不明な点はいつでもお問い合わせください。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* 対象者 */}
      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ELIGIBILITY</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              対象者について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              葛飾区民葬儀制度の対象者は、葛飾区の規定に基づいて定められています。一般的には葛飾区に住民登録のある方が対象とされる場合が多いとされていますが、具体的な条件・要件については制度の規定内容によります。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              対象者かどうかの確認は、稲垣屋葬儀店（葛飾区指定取扱店）がサポートします。ご逝去後にご連絡いただければ、速やかに対象者確認のご案内をいたします。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              制度の詳細・最新の対象者要件については、葛飾区の規定または区役所にてご確認いただくことをお勧めします。稲垣屋葬儀店でも最新情報をお伝えするよう努めておりますが、ご不明な点はお問い合わせください。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* 申請の流れ */}
      <section className="py-16 md:py-24 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">STEP BY STEP</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              申請の流れ（概要）
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {applicationSteps.map((step) => (
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
              申請の流れ・必要書類などの詳細は葛飾区の規定に基づきます。上記はあくまで概要です。最新の手続き内容については稲垣屋葬儀店またはお近くの区役所にてご確認ください。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* 取扱店の役割 */}
      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">OUR ROLE</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              稲垣屋葬儀店（取扱店）の役割
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "申請手続きのサポート",
                desc: "区民葬儀の申請に必要な手続きについて、稲垣屋葬儀店がサポートします。お亡くなりになった直後は慌ただしい時間ですが、手続き面は稲垣屋葬儀店にお任せいただけます。",
              },
              {
                title: "葬儀の企画・運営",
                desc: "区民葬儀の範囲内での葬儀内容の企画・日程調整・式場手配・宗教者の手配など、葬儀全体の運営を担います。ご遺族が故人との最後のお別れに集中できるよう、運営面はすべてお任せください。",
              },
              {
                title: "ご相談・情報提供",
                desc: "区民葬儀制度について、最新の情報をもとにわかりやすくご説明します。制度を使う場合と使わない場合の費用感の違いなど、率直にご案内しますので、気軽にご相談ください。",
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

      {/* 注意点 */}
      <section className="py-16 md:py-24 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">NOTES</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              ご利用にあたっての注意点
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              葛飾区民葬儀制度の内容（対象者・費用の範囲・申請方法など）は、葛飾区の規定に基づきます。制度の内容は変更される場合がありますので、ご利用の際は必ず最新の情報をご確認ください。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              最新の制度情報については、稲垣屋葬儀店またはお近くの葛飾区役所にてご確認いただくことをお勧めします。このページに掲載している情報はあくまで概要であり、個別のご状況によって対応が異なる場合があります。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              ご不明な点は、いつでも稲垣屋葬儀店へお問い合わせください。事前相談は無料で対応しております。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
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
      <section className="py-12 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-5">RELATED PAGES</p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {[
                { href: "/plans/kumin-funeral", label: "区民葬儀について" },
                { href: "/plans/kumin-funeral/flow", label: "区民葬儀の流れ" },
                { href: "/plans/kumin-funeral/cost-detail", label: "費用と注意点" },
                { href: "/plans/family-funeral", label: "家族葬について" },
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
