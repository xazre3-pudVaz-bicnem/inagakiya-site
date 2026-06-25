import type { Metadata } from "next";
import PageHero from "../../../components/PageHero";
import Breadcrumb from "../../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "家族葬の流れ｜葛飾区 稲垣屋葬儀店",
  description:
    "葛飾区での家族葬の流れをご説明します。ご連絡から搬送・安置・打ち合わせ・通夜・告別式・火葬・葬儀後の手続きまで、ステップごとに丁寧にご案内します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/plans/family-funeral/flow" },
};

const steps = [
  {
    number: "01",
    title: "ご逝去・ご連絡",
    desc: "大切な方がご逝去されましたら、まず稲垣屋葬儀店へご連絡ください。24時間365日、深夜・早朝・休日を問わずお電話をお受けしております。ご連絡いただきましたら、担当者が速やかにお伺いします。",
  },
  {
    number: "02",
    title: "搬送・ご安置",
    desc: "病院や施設などからご自宅、または当社の安置施設へ故人様をお連れします。葛飾区内および近郊への搬送に対応しております。ご安置後、ご家族でゆっくりとそばにいていただける環境をご用意します。",
  },
  {
    number: "03",
    title: "葬儀の打ち合わせ",
    desc: "葬儀日程・プランの内容・参列者の範囲・宗教者の手配などについて丁寧に打ち合わせを行います。ご不明な点はこの段階でご遠慮なくご質問ください。費用についても詳細なお見積もりをご提示します。",
  },
  {
    number: "04",
    title: "納棺",
    desc: "故人様を棺に納める「納棺の儀」を行います。ご希望に応じて湯灌（ゆかん）も承ります。ご家族が故人様のお身支度を整え、最後のお別れの準備をするための大切な時間です。",
  },
  {
    number: "05",
    title: "通夜",
    desc: "家族葬でのお通夜は、ごく少人数でしめやかに執り行います。宗教者による読経・焼香の後、故人様を囲んでご家族でゆっくりと過ごしていただけます。なお、通夜を省略した一日葬形式にも対応しております。",
  },
  {
    number: "06",
    title: "告別式",
    desc: "翌日、告別式を執り行います。家族葬の告別式は参列者が限られているため、形式的にならず、故人様との心のこもったお別れができます。宗教者による読経・焼香・お別れの儀を執り行います。",
  },
  {
    number: "07",
    title: "出棺・火葬・収骨",
    desc: "告別式の後、火葬場へ出棺します。葛飾区では主に近隣の公営火葬場をご利用いただきます。火葬の後、ご家族で収骨（お骨上げ）を行い、故人様をご自宅へお連れします。",
  },
  {
    number: "08",
    title: "葬儀後の手続き",
    desc: "葬儀後には死亡届の提出・火葬許可証の受け取り・各種役所手続きが必要です。また、四十九日法要や納骨など、その後の法要についてもご相談いただけます。稲垣屋葬儀店では葬儀後のご相談にも対応しております。",
  },
];

const faqItems = [
  {
    question: "家族葬の流れは一般葬と何が違いますか？",
    answer:
      "基本的な流れ（ご逝去・安置・通夜・告別式・火葬）は一般葬と同じですが、家族葬は参列者をご家族・近親者に限定する点が大きな違いです。参列者が少ない分、受付対応や接待の負担が少なく、故人とのお別れの時間をゆっくりと過ごせます。",
  },
  {
    question: "葛飾区で家族葬を行う場合、火葬場はどこになりますか？",
    answer:
      "葛飾区内には公営火葬場があります。ご自宅や式場の場所・ご希望の日程によって最適な火葬場をご案内します。火葬場の予約状況によっては日程が前後する場合もございますので、早めのご連絡をお勧めします。",
  },
  {
    question: "家族葬でも宗教者（お坊さん）を呼べますか？",
    answer:
      "はい、家族葬でも宗教者をお呼びすることができます。菩提寺がある場合はそちらにご連絡いただき、菩提寺がない場合は稲垣屋葬儀店でご紹介することも可能です。無宗教葬をご希望の場合もご相談ください。",
  },
  {
    question: "葬儀後の手続きはどうすればよいですか？",
    answer:
      "死亡届の提出・火葬許可証の受け取りは葬儀社がお手伝いします。その後の年金・保険・預貯金などの各種手続きは、ご遺族様ご自身でのお手続きが必要となります。四十九日法要・納骨などについても稲垣屋葬儀店にご相談ください。",
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

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "家族葬の流れ｜葛飾区 稲垣屋葬儀店",
  description:
    "葛飾区での家族葬の流れをご説明します。ご連絡から搬送・安置・打ち合わせ・通夜・告別式・火葬・葬儀後の手続きまで、ステップごとに丁寧にご案内します。",
  url: "https://www.inagakiyasougiten.com/plans/family-funeral/flow",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "家族葬", item: "https://www.inagakiyasougiten.com/plans/family-funeral" },
      { "@type": "ListItem", position: 3, name: "家族葬の流れ", item: "https://www.inagakiyasougiten.com/plans/family-funeral/flow" },
    ],
  },
};

export default function FamilyFuneralFlowPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero title="家族葬の流れ" subtitle="ご連絡からご葬儀・葬儀後の手続きまで" en="FLOW OF FAMILY FUNERAL" />
      <Breadcrumb
        items={[
          { label: "葬儀プラン", href: "/plans" },
          { label: "家族葬", href: "/plans/family-funeral" },
          { label: "家族葬の流れ" },
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
              家族葬の流れについて
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mb-6" />
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              家族葬の流れは、基本的には一般的な葬儀と同じ手順で進みます。ご逝去からご安置・打ち合わせ・納棺・通夜・告別式・火葬・収骨、そして葬儀後の手続きという流れです。葛飾区で家族葬をお考えの方に向けて、稲垣屋葬儀店が各ステップをわかりやすくご説明します。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              家族葬は参列者を限定するため、一般葬と比べてご遺族の負担が少なく、故人様とゆっくりとお別れできることが特徴です。流れを事前に知っておくことで、いざというときに落ち着いて対応できます。不明な点は事前相談でご確認ください。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ステップセクション */}
      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">STEP BY STEP</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              家族葬の流れ（8ステップ）
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
        </div>
      </section>

      {/* 家族葬特有の配慮事項 */}
      <section className="py-16 md:py-24 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">POINTS TO NOTE</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              家族葬ならではの配慮事項
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "参列できなかった方へのご連絡",
                desc: "家族葬では参列者を限定するため、葬儀に呼ばなかった方へのご連絡が必要です。葬儀後に挨拶状や訃報をお送りするのが一般的です。文面についても稲垣屋葬儀店でご相談いただけます。",
              },
              {
                title: "香典辞退の伝え方",
                desc: "家族葬では香典をご辞退されるご家族も多くいらっしゃいます。香典辞退の旨は、訃報をお知らせする際に明記することが大切です。受け取り方・辞退の方法についてはご相談ください。",
              },
              {
                title: "菩提寺への事前のご相談",
                desc: "菩提寺（先祖代々のお寺）がある場合は、家族葬を行うことを事前にご相談されることをお勧めします。菩提寺によっては家族葬の方針に意見を持つ場合もありますので、納骨の際に困らないよう事前確認が安心です。",
              },
              {
                title: "後日の弔問への対応",
                desc: "葬儀に呼ばなかった方が後日ご自宅へ弔問にいらっしゃることがあります。弔問の対応についても事前に準備しておくと安心です。対応の仕方についてもご相談いただけます。",
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
                { href: "/plans/family-funeral", label: "家族葬について" },
                { href: "/plans/family-funeral/cost", label: "家族葬の費用" },
                { href: "/plans/family-funeral/merit", label: "家族葬のメリット・注意点" },
                { href: "/plans/oneday-funeral", label: "一日葬について" },
                { href: "/consultation", label: "事前相談" },
                { href: "/contact", label: "お問い合わせ" },
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
            <h2
              className="text-[#312852] text-2xl tracking-[0.08em] mb-5"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
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
                <MessageCircle size={17} />お問い合わせ
                <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
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
