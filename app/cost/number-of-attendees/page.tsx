import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "参列人数で変わる葬儀費用｜葛飾区 稲垣屋葬儀店",
  description:
    "参列者の人数によって葬儀費用がどのように変わるかを葛飾区の稲垣屋葬儀店が解説します。飲食費・返礼品費など、参列者数に連動する費用の考え方をご案内します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/cost/number-of-attendees" },
};

const attendeeItems = [
  {
    en: "Food & Drink",
    title: "飲食費（通夜振る舞い・精進落とし）",
    desc: "通夜振る舞い・告別式後の会食にかかる費用は、参列者の人数に直接連動します。一般葬では数十人〜数百人規模の飲食が発生することもありますが、家族葬・火葬式では参列者が少ないため、飲食費を大幅に抑えることができます。飲食の内容（仕出し・料亭・シンプルなお茶菓子など）によっても費用は異なります。",
  },
  {
    en: "Return Gifts",
    title: "返礼品費用（香典返し・会葬礼品）",
    desc: "参列者一人ひとりにお渡しする香典返し・会葬礼品の費用も、参列者数に応じて変わります。一般葬では参列者が多い分、返礼品費用が大きな割合を占めることがあります。家族葬の場合、参列者が少ない分、一人あたりの予算を少し上げても総費用を抑えられるケースがあります。",
  },
  {
    en: "Venue Size",
    title: "式場の広さ・設備",
    desc: "参列者の人数に応じて、必要な式場の広さが変わります。少人数の葬儀では、大きな式場を借りる必要がない場合も多く、式場費用を抑えることができます。家族葬・一日葬では、小規模な式場やご自宅での葬儀も選択肢に入ります。",
  },
  {
    en: "Staff Support",
    title: "スタッフ人数・サポート体制",
    desc: "参列者が多い場合、受付・案内・誘導・接待などのスタッフが多く必要になります。少人数の葬儀ではスタッフ人数を絞ることができ、人件費の削減につながる場合があります。",
  },
];

const smallFuneralItems = [
  { title: "費用が把握しやすい", desc: "参列者が少ない分、飲食費・返礼品費用の見通しが立てやすく、総費用を事前にほぼ確定させることができます。" },
  { title: "故人とゆっくりお別れできる", desc: "参列者が少ない分、ひとりひとりが故人と向き合う時間が取れ、静かな雰囲気でお別れができます。" },
  { title: "ご遺族の負担が少ない", desc: "大勢の参列者への対応は、ご遺族にとって体力的・精神的な負担になることがあります。少人数葬儀では、その負担を軽減できます。" },
  { title: "近年増えている選択肢", desc: "少子高齢化・核家族化が進む中で、少人数・家族中心のご葬儀を選ぶご家族が増えています。稲垣屋葬儀店でも多くのご相談をいただいています。" },
];

const faqItems = [
  {
    q: "参列者が何人を超えると費用が大きく変わりますか？",
    a: "参列者数によって費用が連動するのは主に飲食費・返礼品費用です。10名前後の家族葬と50名規模の一般葬では、これらの費用に大きな差が出ます。葬儀基本費用（搬送・安置・棺・式進行など）は参列者数に関わらず発生しますが、飲食・返礼品で費用を調整することができます。",
  },
  {
    q: "家族葬を選んだ場合、後から参列者が増えてしまうことはありますか？",
    a: "家族葬では事前に「近親者のみで行う旨」をご連絡することが大切です。ご連絡の範囲や文面についても稲垣屋葬儀店がサポートします。予想外の参列者が増えた場合でも、できる範囲で対応しますのでご相談ください。",
  },
  {
    q: "少人数の葬儀でも香典返しは必要ですか？",
    a: "少人数の家族葬でも、香典をいただいた場合は何らかの形でお礼をするのが一般的です。返礼品の内容・方法（当日手渡し・後日郵送）はご家族のご判断で決めていただけます。稲垣屋葬儀店でも返礼品のご手配が可能です。",
  },
  {
    q: "参列者数が確定していない段階でも費用の概算を出してもらえますか？",
    a: "はい。「おおよそ何人程度」という見込みをお伝えいただければ、概算の費用をご提示することができます。参列者数が変わった場合の費用変動についても事前にご説明します。お気軽にご相談ください。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "参列人数で変わる葬儀費用｜葛飾区 稲垣屋葬儀店",
  description:
    "参列者の人数によって葬儀費用がどのように変わるかを葛飾区の稲垣屋葬儀店が解説します。飲食費・返礼品費など、参列者数に連動する費用の考え方をご案内します。",
  url: "https://www.inagakiyasougiten.com/cost/number-of-attendees",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀費用", item: "https://www.inagakiyasougiten.com/cost" },
      { "@type": "ListItem", position: 3, name: "参列人数で変わる葬儀費用", item: "https://www.inagakiyasougiten.com/cost/number-of-attendees" },
    ],
  },
};

export default function CostNumberOfAttendeesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="参列人数と葬儀費用の関係"
        subtitle="参列者の人数が費用にどう影響するかを丁寧にご説明します"
        en="ATTENDEES & COST"
      />
      <Breadcrumb items={[{ label: "葬儀費用", href: "/cost" }, { label: "参列人数と費用" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ATTENDEES & COST</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              参列者数と費用の関係
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              葬儀費用の中で、参列者の人数に連動して変わる費用と、変わらない費用があります。この違いを理解しておくことで、費用の見通しが立てやすくなります。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              参列者数に関わらず発生する費用（搬送・安置・棺・葬儀基本費用など）は固定的な性格を持ちます。一方で、飲食費・返礼品費用・式場の広さなどは参列者数に応じて変動します。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {attendeeItems.map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-1">{item.en}</p>
                  <h4 className="text-[#312852] text-lg tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.title}
                  </h4>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mb-10">
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              少人数葬儀の特徴
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {smallFuneralItems.map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-6">
                  <h4 className="text-[#312852] text-base tracking-wide mb-1.5" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.title}
                  </h4>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mb-10">
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              よくあるご質問
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {faqItems.map((item) => (
              <StaggerItem key={item.q}>
                <div className="py-6">
                  <p className="text-[#312852] text-base mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                    <span className="text-[#9278be] font-bold mr-2">Q</span>
                    {item.q}
                  </p>
                  <p className="text-[#4a4a4a] text-sm leading-loose pl-6">
                    <span className="text-[#c9a55a] font-bold mr-2">A</span>
                    {item.a}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp>
            <div className="flex flex-wrap gap-4">
              <Link href="/cost/return-gift" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                返礼品・飲食費の考え方<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/cost/reduce" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                費用を抑えるための考え方<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/plans/family-funeral" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                家族葬プランについて<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/cost/breakdown" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                費用の内訳について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/cost" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                葬儀費用一覧に戻る<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
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
              事前相談・お見積もりは無料です。
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
