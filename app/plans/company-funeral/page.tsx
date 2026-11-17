import type { Metadata } from "next";
import { pageMetadata, SITE_URL } from "@/lib/seo";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle, Phone } from "lucide-react";
import PlanSection from "../../components/plans/PlanSection";
import KuminLink from "../../components/KuminLink";

const TITLE = "葛飾区の社葬は1,800,000円〜｜胡蝶蘭プラン｜稲垣屋葬儀店";
const DESCRIPTION =
  "葛飾区で社葬をお考えの企業さまへ。稲垣屋葬儀店の社葬・胡蝶蘭プランは1,800,000円〜（参列者数目安50名〜）。社葬の種類・準備・流れ・費用の考え方をご案内します。24時間365日ご相談受付。";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/plans/company-funeral` },
});

const types = [
  {
    title: "社葬",
    desc: "会社（企業）が運営主体となり、費用も会社が負担して執り行う葬儀です。創業者・役員・功労のあった社員の方などが亡くなられた際に行われます。",
  },
  {
    title: "合同葬",
    desc: "ご遺族と会社が合同で運営主体となる葬儀です。ご遺族による個人葬と社葬を一度に執り行うため、日程や費用の分担をあらかじめ取り決めておくことが大切です。",
  },
  {
    title: "お別れの会",
    desc: "ご家族で密葬・家族葬を済ませたあと、日を改めて会社主催で行うお別れの場です。宗教色を抑えた形式で行われることも多くあります。",
  },
];

const preparations = [
  { title: "社葬を行うかの決定", desc: "取締役会などで社葬の実施と、葬儀の形式（社葬・合同葬・お別れの会）を決定します。ご遺族のご意向の確認も欠かせません。" },
  { title: "葬儀委員長・実行委員の選任", desc: "葬儀委員長（一般的には社長や会長）と、実務を担う実行委員・担当者を決めます。窓口を一本化すると準備が円滑に進みます。" },
  { title: "日程・会場・規模の決定", desc: "参列者の人数や宗教・宗派、ご遺族のご意向をふまえて日程と会場を決めます。参列者数目安50名〜の場合は社葬の胡蝶蘭プランが目安です。" },
  { title: "訃報・案内状の発送", desc: "取引先・関係各所への訃報や案内状を準備します。供花・弔電・香典の受け取り方針もあわせて決めておきます。" },
  { title: "当日の運営・受付", desc: "受付・会計・誘導・弔辞・弔電の披露など、当日の役割分担を決めて進行します。葬儀社がお打ち合わせから当日の運営までお手伝いします。" },
];

const faqItems = [
  {
    q: "社葬の費用はどのくらいかかりますか？",
    a: "稲垣屋葬儀店の社葬・胡蝶蘭プランは1,800,000円〜（参列者数目安50名〜）です。花祭壇・人件費・お棺・骨壺・白木の位牌・遺影写真・受付用品・焼香用品など15項目を含みます。会場の規模や参列者数、飲食・返礼品などによって費用は変わるため、事前に詳しいお見積もりをご提示します。",
  },
  {
    q: "社葬の費用は会社の経費になりますか？",
    a: "社葬の費用は、一定の条件を満たす場合に会社の経費（損金）として扱える場合があります。取り扱いは内容によって異なるため、顧問税理士の方にもご確認ください。",
  },
  {
    q: "合同葬やお別れの会にも対応していますか？",
    a: "はい、ご遺族と会社が合同で行う合同葬や、家族葬のあとに会社主催で行うお別れの会についてもご相談いただけます。ご意向や規模をお聞きしてご提案します。",
  },
  {
    q: "社葬でも区民葬儀は利用できますか？",
    a: "稲垣屋葬儀店のプランはすべて区民葬儀をご利用いただけます。区民葬儀は、亡くなられた方または喪主の方が東京23区内にお住まいの場合に利用できる制度です。詳しくは区民葬儀のページをご覧ください。",
  },
  {
    q: "急な社葬の相談にも対応してもらえますか？",
    a: "はい、24時間365日お電話（03-3690-0870）で承っています。まずはご状況をお聞かせください。",
  },
];

export default function CompanyFuneralPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "社葬",
    serviceType: "社葬",
    description: "会社（企業）が運営主体となり執り行う葬儀。稲垣屋葬儀店の社葬・胡蝶蘭プランは1,800,000円〜（参列者数目安50名〜）。",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "City", name: "葛飾区" },
    url: `${SITE_URL}/plans/company-funeral`,
    offers: {
      "@type": "Offer",
      priceCurrency: "JPY",
      price: 1800000,
      priceSpecification: { "@type": "PriceSpecification", priceCurrency: "JPY", minPrice: 1800000 },
      url: `${SITE_URL}/plans/company-funeral`,
    },
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/plans/company-funeral`,
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero title="社葬" subtitle="会社（企業）が運営主体となって執り行う葬儀" en="COMPANY FUNERAL" />
      <Breadcrumb items={[{ label: "葬儀プラン", href: "/plans" }, { label: "社葬" }]} />

      <PlanSection
        slugs={["kochouran"]}
        title="稲垣屋葬儀店の社葬プラン"
        lead="会社（企業）が運営主体となって執り行う社葬のプランです。取引先や社員の皆さまなど、多くの方をお迎えする葬儀に対応しています。"
      />

      <section className="bg-[#faf9f7] py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="mb-3 text-sm tracking-[0.4em] text-[#a8853f]">WHAT IS COMPANY FUNERAL</p>
            <h2 className="text-[1.75rem] tracking-[0.08em] text-[#312852] md:text-4xl" style={{ fontFamily: "var(--font-mincho)" }}>
              社葬とは
            </h2>
            <div className="mt-5 h-px w-8 bg-[#c9a55a]" />
          </FadeInUp>
          <FadeInUp>
            <p className="mb-6 text-base leading-loose text-[#4a4a4a] md:text-lg">
              社葬とは、会社（企業）が運営の主体となり、費用も会社が負担して執り行う葬儀です。創業者や役員、会社に大きく貢献された方が亡くなられた際に、故人を偲ぶとともに、取引先や関係者の皆さまへ感謝をお伝えする場として行われます。
            </p>
            <p className="text-base leading-loose text-[#4a4a4a]">
              ご家族が主体となる一般葬・家族葬とは、運営の主体や参列者の範囲、準備の進め方が異なります。稲垣屋葬儀店では、社葬の形式選びから当日の運営まで、会社のご担当者さまとご遺族のお気持ちに寄り添いながらお手伝いします。
            </p>
          </FadeInUp>

          <FadeInUp className="mb-8 mt-16">
            <p className="mb-3 text-sm tracking-[0.4em] text-[#a8853f]">TYPES</p>
            <h2 className="text-2xl tracking-[0.08em] text-[#312852] md:text-3xl" style={{ fontFamily: "var(--font-mincho)" }}>
              社葬の主な形式
            </h2>
            <div className="mt-5 h-px w-8 bg-[#c9a55a]" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4] border-y border-[#e8ddf4]">
            {types.map((t) => (
              <StaggerItem key={t.title}>
                <div className="py-7">
                  <h3 className="mb-2 text-xl tracking-wide text-[#312852]" style={{ fontFamily: "var(--font-mincho)" }}>
                    {t.title}
                  </h3>
                  <p className="text-base leading-loose text-[#4a4a4a]">{t.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mb-8 mt-16">
            <p className="mb-3 text-sm tracking-[0.4em] text-[#a8853f]">PREPARATION</p>
            <h2 className="text-2xl tracking-[0.08em] text-[#312852] md:text-3xl" style={{ fontFamily: "var(--font-mincho)" }}>
              社葬の準備と流れ
            </h2>
            <div className="mt-5 h-px w-8 bg-[#c9a55a]" />
          </FadeInUp>
          <StaggerContainer>
            <ol className="divide-y divide-[#e8ddf4] border-y border-[#e8ddf4]">
              {preparations.map((step, i) => (
                <li key={step.title}>
                  <StaggerItem className="flex items-start gap-6 py-7">
                    <span className="w-10 shrink-0 pt-0.5 text-2xl tracking-wider text-[#c9a55a]" style={{ fontFamily: "var(--font-mincho)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="mb-2 text-lg tracking-wide text-[#312852]" style={{ fontFamily: "var(--font-mincho)" }}>
                        {step.title}
                      </h3>
                      <p className="text-base leading-relaxed text-[#4a4a4a]">{step.desc}</p>
                    </div>
                  </StaggerItem>
                </li>
              ))}
            </ol>
          </StaggerContainer>

          <FadeInUp className="mt-16">
            <p className="mb-3 text-sm tracking-[0.4em] text-[#a8853f]">FAQ</p>
            <h2 className="mb-2 text-2xl tracking-[0.08em] text-[#312852] md:text-3xl" style={{ fontFamily: "var(--font-mincho)" }}>
              社葬に関するよくある質問
            </h2>
            <div className="mb-8 mt-5 h-px w-8 bg-[#c9a55a]" />
            <dl className="divide-y divide-[#e8ddf4]">
              {faqItems.map((item) => (
                <div key={item.q} className="py-6">
                  <dt className="mb-2 text-lg leading-relaxed text-[#312852]" style={{ fontFamily: "var(--font-mincho)" }}>
                    <span className="mr-2 text-[#c9a55a]">Q.</span>
                    {item.q}
                  </dt>
                  <dd className="pl-6 text-base leading-loose text-[#4a4a4a]">
                    <span className="mr-2 text-[#9278be]">A.</span>
                    {item.a}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeInUp>

          <FadeInUp className="mt-12">
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              <Link href="/plans" className="group inline-flex items-center gap-2 text-base tracking-wide text-[#5c4a80] transition-colors hover:text-[#312852]">
                すべてのプラン・料金を見る
                <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/plans/general-funeral" className="group inline-flex items-center gap-2 text-base tracking-wide text-[#5c4a80] transition-colors hover:text-[#312852]">
                一般葬（百合プラン）
                <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <span className="inline-flex items-center gap-2 text-base tracking-wide text-[#5c4a80]">
                <KuminLink>区民葬儀について</KuminLink>
                <ChevronRight size={16} />
              </span>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="border-t border-[#e8ddf4] bg-[#f4eef9] py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <FadeInUp>
            <h2 className="mb-5 text-2xl tracking-[0.08em] text-[#312852] md:text-3xl" style={{ fontFamily: "var(--font-mincho)" }}>
              社葬についてご相談ください
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-base leading-loose text-[#4a4a4a] md:text-lg">
              ご担当者さまからのご相談も承ります。事前相談・お見積もりは無料です。
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="tel:0336900870"
                className="inline-flex w-full items-center justify-center gap-2 bg-[#5c4a80] px-8 py-4 text-lg tracking-wider text-white transition-colors duration-300 hover:bg-[#453869] sm:w-auto"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                <Phone size={18} className="text-[#dfc07e]" />
                03-3690-0870（24時間）
              </a>
              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-2 border border-[#9278be] px-8 py-4 text-lg tracking-wider text-[#5c4a80] transition-colors duration-300 hover:bg-[#ede7f6] sm:w-auto"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                <MessageCircle size={18} />
                お問い合わせ
                <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
