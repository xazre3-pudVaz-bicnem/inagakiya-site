import type { Metadata } from "next";
import { pageMetadata, SITE_URL } from "@/lib/seo";
import PageHero from "../components/PageHero";
import Breadcrumb from "../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle, Phone } from "lucide-react";
import PlanCard from "../components/plans/PlanCard";
import PlanShowcase from "../components/plans/PlanShowcase";
import PlanPriceTable from "../components/plans/PlanPriceTable";
import KuminLink from "../components/KuminLink";
import { funeralPlans, plansItemListJsonLd } from "@/data/plans";

const TITLE = "葛飾区の葬儀プラン・料金｜直葬18万円・家族葬45万円〜｜稲垣屋葬儀店";
const DESCRIPTION =
  "稲垣屋葬儀店の葬儀プランと料金。直葬180,000円、家族葬（蒲公英450,000円・白菊690,000円・菖蒲880,000円）、一般葬（百合）1,200,000円〜、社葬（胡蝶蘭）1,800,000円〜。全プランで区民葬儀を利用できます。";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/plans` },
});

const styles = [
  {
    title: "家族葬",
    en: "Family Funeral",
    href: "/plans/family-funeral",
    price: "450,000円〜",
    plans: "蒲公英・白菊・菖蒲",
    desc: "ご家族やごく親しい方だけで、心静かにお別れできる葬儀スタイルです。参列者の人数（〜10名／〜20名／〜30名）に合わせて3つのプランからお選びいただけます。",
  },
  {
    title: "一日葬",
    en: "One-Day Funeral",
    href: "/plans/oneday-funeral",
    price: "450,000円〜",
    plans: "蒲公英・白菊",
    desc: "お通夜を省略し、告別式と火葬を一日で行うスタイルです。家族葬の蒲公英プラン・白菊プランは1日葬儀にも対応しています。",
  },
  {
    title: "火葬式（直葬）",
    en: "Cremation Only",
    href: "/plans/cremation",
    price: "180,000円",
    plans: "直葬プラン",
    desc: "お通夜・告別式などの宗教儀式を行わず、火葬のみを執り行うシンプルな葬送です。ごく近しい方だけで静かにお見送りされたい方に選ばれています。",
  },
  {
    title: "一般葬",
    en: "Traditional Funeral",
    href: "/plans/general-funeral",
    price: "1,200,000円〜",
    plans: "百合",
    desc: "ご親族やご友人、職場関係者など、ご縁のあった方を広くお招きして、お通夜・告別式を執り行う伝統的な葬儀です。",
  },
  {
    title: "社葬",
    en: "Company Funeral",
    href: "/plans/company-funeral",
    price: "1,800,000円〜",
    plans: "胡蝶蘭",
    desc: "会社（企業）が運営主体となって執り行う葬儀です。参列者が多い場合や、取引先・社員の皆さまをお迎えする場合に適しています。",
  },
];

const howToChoose = [
  {
    title: "参列者の人数から考える",
    body: "10名程度までなら直葬プラン（180,000円）や家族葬の蒲公英プラン（450,000円）、20名程度なら白菊プラン（690,000円）、30名程度なら菖蒲プラン（880,000円）が目安です。30名以上の場合は一般葬の百合プラン（1,200,000円〜）、会社が主体となる場合は社葬の胡蝶蘭プラン（1,800,000円〜）をご検討ください。",
  },
  {
    title: "日程・体力的な負担から考える",
    body: "ご高齢のご家族が多い・遠方にお住まいの方が多いなど、体力的・時間的な制約がある場合は、お通夜を行わない一日葬（蒲公英・白菊プランで対応）や直葬がご遺族の負担を軽減できます。二日間かけて丁寧に見送りたい場合は家族葬・一般葬が向いています。",
  },
  {
    title: "費用から考える",
    body: "費用を最小限に抑えたい場合は直葬プラン（180,000円）が選択肢になります。23区にお住まいの方は、すべてのプランで区民葬儀をご利用いただけます。事前相談（無料）では、ご希望に合わせたお見積もりをご提示します。",
  },
  {
    title: "迷ったらご相談ください",
    body: "どのプランが合うか分からない場合は、稲垣屋葬儀店の事前相談をご利用ください。ご家族の状況・ご希望・ご予算・故人様のご意向などをお聞きして、最適なプランをご提案します。事前相談は無料で、強引な勧誘は一切行いません。",
  },
];

const faqItems = [
  {
    q: "稲垣屋葬儀店の葬儀プランの料金はいくらですか？",
    a: "直葬プラン180,000円（参列者数目安〜10名）、家族葬の蒲公英プラン450,000円（〜10名）・白菊プラン690,000円（〜20名）・菖蒲プラン880,000円（〜30名）、一般葬の百合プラン1,200,000円〜（30名〜）、社葬の胡蝶蘭プラン1,800,000円〜（50名〜）をご用意しています。",
  },
  {
    q: "プランの料金には何が含まれていますか？",
    a: "家族葬・一般葬・社葬の各プランには、花祭壇・人件費・お棺・骨壺・白木の位牌・遺影写真・納棺セット・搬送10km・ドライアイス10kg・受付用品・焼香用品・仏具一式・花束・自宅飾り用祭壇・役所手続きの15項目が含まれます。直葬プランには、人件費・お棺・搬送10km・白木の位牌・納棺セット・仏具一式・役所手続きが含まれます。プランに記載のない費用が必要となる場合は、事前にお見積もりでご案内します。",
  },
  {
    q: "一日葬に対応したプランはありますか？",
    a: "はい。家族葬の蒲公英プラン（450,000円）と白菊プラン（690,000円）は、お通夜を行わない1日葬儀（一日葬）にも対応可能です。",
  },
  {
    q: "区民葬儀は使えますか？葛飾区以外に住んでいても利用できますか？",
    a: "稲垣屋葬儀店のプランはすべて区民葬儀をご利用いただけます。区民葬儀は東京23区共通の制度で、亡くなられた方または喪主の方が23区内にお住まいであれば、葛飾区以外の区（足立区・江戸川区など）にお住まいの方もご利用いただけます。",
  },
  {
    q: "家族葬と一般葬はどう違いますか？",
    a: "家族葬は参列者をご家族や親しい方に限定し、少人数で静かにお別れする形式です。一般葬は故人と縁のあった多くの方にお集まりいただく伝統的な形式です。参列者の規模・費用・ご遺族の負担など、さまざまな点で異なります。ご状況をお聞きして最適な形式をご提案しますので、まずはご相談ください。",
  },
  {
    q: "プランは途中で変更できますか？",
    a: "打ち合わせ前であれば変更が可能です。ご安置後の打ち合わせで最終的な内容を決めていきますので、事前に決めていても状況に応じて柔軟に対応します。ご不安な点はお気軽にご相談ください。",
  },
];

export default function PlansPage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/plans`,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "葬儀プラン", item: `${SITE_URL}/plans` },
      ],
    },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(plansItemListJsonLd()) }} />

      <PageHero title="葬儀プラン・料金" subtitle="直葬・家族葬・一般葬・社葬の6つのプランをご用意しています" en="FUNERAL PLANS" />
      <Breadcrumb items={[{ label: "葬儀プラン" }]} />

      {/* プラン一覧 */}
      <section className="bg-[#faf9f7] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeInUp className="mx-auto mb-12 max-w-4xl">
            <p className="mb-3 text-sm tracking-[0.4em] text-[#a8853f]">PLAN LIST</p>
            <h2 className="text-[1.75rem] tracking-[0.08em] text-[#312852] md:text-4xl" style={{ fontFamily: "var(--font-mincho)" }}>
              料金プラン一覧
            </h2>
            <div className="mt-5 h-px w-8 bg-[#c9a55a]" />
            <p className="mt-5 text-base leading-loose text-[#4a4a4a] md:text-lg">
              参列者の人数やお見送りのかたちに合わせて、6つのプランをご用意しています。すべてのプランで
              <KuminLink className="mx-0.5" />
              をご利用いただけます。気になるプランを選ぶと、内容の詳細をご覧いただけます。
            </p>
          </FadeInUp>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {funeralPlans.map((plan) => (
              <StaggerItem key={plan.slug} className="h-full">
                <PlanCard plan={plan} href={`#plan-${plan.slug}`} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 各プランの詳細 */}
      <section className="border-t border-[#e8ddf4] bg-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <FadeInUp className="mb-12">
            <p className="mb-3 text-sm tracking-[0.4em] text-[#a8853f]">PLAN DETAILS</p>
            <h2 className="text-[1.75rem] tracking-[0.08em] text-[#312852] md:text-4xl" style={{ fontFamily: "var(--font-mincho)" }}>
              各プランの内容
            </h2>
            <div className="mt-5 h-px w-8 bg-[#c9a55a]" />
          </FadeInUp>

          <div className="divide-y divide-[#e8ddf4]">
            {funeralPlans.map((plan, i) => (
              <div key={plan.slug} className="py-12 first:pt-0 md:py-16">
                <FadeInUp>
                  <PlanShowcase plan={plan} reverse={i % 2 === 1} />
                </FadeInUp>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 料金比較表 */}
      <section className="border-t border-[#e8ddf4] bg-[#faf7fd] py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="mb-3 text-sm tracking-[0.4em] text-[#a8853f]">COMPARISON</p>
            <h2 className="text-[1.75rem] tracking-[0.08em] text-[#312852] md:text-3xl" style={{ fontFamily: "var(--font-mincho)" }}>
              プラン料金の比較表
            </h2>
            <div className="mt-5 h-px w-8 bg-[#c9a55a]" />
          </FadeInUp>
          <FadeInUp>
            <PlanPriceTable />
          </FadeInUp>
        </div>
      </section>

      {/* 葬儀の形式から選ぶ */}
      <section className="border-t border-[#e8ddf4] bg-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="mb-3 text-sm tracking-[0.4em] text-[#a8853f]">FUNERAL STYLES</p>
            <h2 className="text-[1.75rem] tracking-[0.08em] text-[#312852] md:text-3xl" style={{ fontFamily: "var(--font-mincho)" }}>
              葬儀の形式から選ぶ
            </h2>
            <div className="mt-5 h-px w-8 bg-[#c9a55a]" />
            <p className="mt-5 text-base leading-loose text-[#4a4a4a]">
              それぞれの葬儀形式の特徴・流れ・費用の考え方は、各ページで詳しくご案内しています。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] border-y border-[#e8ddf4]">
            {styles.map((style) => (
              <StaggerItem key={style.href}>
                <Link href={style.href} className="group flex items-center justify-between gap-6 py-7">
                  <div className="flex-1">
                    <p className="mb-1 text-sm tracking-[0.3em] text-[#a8853f]">{style.en}</p>
                    <h3
                      className="text-xl tracking-wide text-[#312852] transition-colors group-hover:text-[#5c4a80] md:text-2xl"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      {style.title}
                      <span className="ml-3 align-middle text-base tracking-wide text-[#5c4a80]">{style.price}</span>
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-[#4a4a4a]">{style.desc}</p>
                    <p className="mt-2 text-sm text-[#7560a0]">対応プラン：{style.plans}</p>
                  </div>
                  <ChevronRight
                    size={20}
                    className="shrink-0 text-[#b8a0d8] transition-all group-hover:translate-x-1 group-hover:text-[#5c4a80]"
                  />
                </Link>
              </StaggerItem>
            ))}
            <StaggerItem>
              <Link href="/plans/kumin-funeral" className="group flex items-center justify-between gap-6 py-7">
                <div className="flex-1">
                  <p className="mb-1 text-sm tracking-[0.3em] text-[#a8853f]">Kuminso-gi</p>
                  <h3
                    className="text-xl tracking-wide text-[#312852] transition-colors group-hover:text-[#5c4a80] md:text-2xl"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    区民葬儀
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-[#4a4a4a]">
                    東京23区にお住まいの方が利用できる制度です。祭壇・霊柩車・火葬・骨つぼなどを23区共通の協定料金でご利用いただけます。稲垣屋葬儀店の全プランで利用可能です。
                  </p>
                </div>
                <ChevronRight
                  size={20}
                  className="shrink-0 text-[#b8a0d8] transition-all group-hover:translate-x-1 group-hover:text-[#5c4a80]"
                />
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* プランの選び方 */}
      <section className="border-t border-[#e8ddf4] bg-[#faf9f7] py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="mb-3 text-sm tracking-[0.4em] text-[#a8853f]">HOW TO CHOOSE</p>
            <h2 className="text-[1.75rem] tracking-[0.08em] text-[#312852] md:text-3xl" style={{ fontFamily: "var(--font-mincho)" }}>
              プランの選び方
            </h2>
            <div className="mt-5 h-px w-8 bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {howToChoose.map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3 className="mb-3 text-lg tracking-wide text-[#312852]" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.title}
                  </h3>
                  <p className="text-base leading-loose text-[#4a4a4a]">{item.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mt-8">
            <Link
              href="/cost"
              className="group inline-flex items-center gap-2 text-base tracking-wide text-[#5c4a80] transition-colors hover:text-[#312852]"
            >
              葬儀費用の考え方・内訳を詳しく見る
              <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[#e8ddf4] bg-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="mb-3 text-sm tracking-[0.4em] text-[#a8853f]">FAQ</p>
            <h2 className="text-[1.75rem] tracking-[0.08em] text-[#312852] md:text-3xl" style={{ fontFamily: "var(--font-mincho)" }}>
              葬儀プラン・料金に関するよくある質問
            </h2>
            <div className="mt-5 h-px w-8 bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {faqItems.map((item) => (
              <StaggerItem key={item.q}>
                <div className="py-7">
                  <h3 className="mb-3 flex gap-3 text-lg leading-relaxed text-[#312852]" style={{ fontFamily: "var(--font-mincho)" }}>
                    <span className="font-bold text-[#9278be]">Q</span>
                    {item.q}
                  </h3>
                  <p className="flex gap-3 text-base leading-loose text-[#4a4a4a]">
                    <span className="font-bold text-[#c9a55a]">A</span>
                    <span>{item.a}</span>
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#e8ddf4] bg-[#f4eef9] py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <FadeInUp>
            <h2 className="mb-5 text-2xl tracking-[0.08em] text-[#312852] md:text-3xl" style={{ fontFamily: "var(--font-mincho)" }}>
              どのプランが合うか分からない方へ
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-base leading-loose text-[#4a4a4a] md:text-lg">
              ご家族の状況やご希望をお聞きして、最適なプランをご提案します。事前相談・お見積もりは無料、強引な勧誘は一切行いません。
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
                お問い合わせ・事前相談
                <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
