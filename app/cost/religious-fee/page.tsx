import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "宗教者への御礼について｜お布施の考え方｜葛飾区 稲垣屋葬儀店",
  description:
    "葬儀での宗教者への御礼（お布施）の考え方を葛飾区の稲垣屋葬儀店が解説します。宗派による違い・目安の考え方・菩提寺がない場合の対応について、断定せずに丁寧にご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/cost/religious-fee" },
};

const religiousFeeItems = [
  {
    en: "What is Ofuse",
    title: "お布施とは",
    desc: "お布施とは、葬儀・法要にあたって読経・戒名・法話などをいただく宗教者（僧侶・神職・牧師など）への感謝の気持ちを表す御礼です。法的に定められた金額があるわけではなく、宗派・地域・ご依頼先によって異なります。「いくら包めばよいか分からない」とお悩みの方は多いですが、稲垣屋葬儀店でもご参考になる情報をお伝えすることができます。",
  },
  {
    en: "By Religion",
    title: "宗教・宗派による違い",
    desc: "仏式・神式・キリスト教式など、宗教・宗派によってお礼の形式・呼び方・金額の目安が異なります。仏式では「お布施」「御車代」「御膳料」など複数の封筒を用意する慣習がある場合もあります。神式では「御祭祀料」、キリスト教では「献金」などと呼ぶ場合があります。ご依頼する宗教者や菩提寺にご確認されることをお勧めします。",
  },
  {
    en: "Guideline",
    title: "目安の考え方（断定はできません）",
    desc: "お布施の金額は「必ずこの金額」とお伝えすることが難しい性質のものです。一般的には、読経の回数・戒名のランク・宗派・地域の慣習などが影響します。稲垣屋葬儀店では、ご相談を通じてご参考になる情報をお伝えすることは可能ですが、最終的には菩提寺・ご依頼する宗教者に直接ご確認いただくことをお勧めします。",
  },
  {
    en: "Kaigo Name",
    title: "戒名について",
    desc: "仏式の葬儀では、故人様に戒名（法名）を授けていただくことが一般的です。戒名のランク・宗派によって、授けていただく際のお礼の金額の目安が変わる場合があります。戒名を授けていただくかどうか、またどのようなランクを選ぶかについても、菩提寺とご相談の上で決めることをお勧めします。",
  },
  {
    en: "No Temple",
    title: "菩提寺がない場合",
    desc: "菩提寺とのお付き合いがない場合や、宗派が分からない場合でも葬儀を行うことは可能です。稲垣屋葬儀店では、宗教者のご紹介も承っています。また、無宗教の葬儀（お布施が不要）も対応可能です。ご家族の状況・ご希望に合わせてご提案します。",
  },
];

const timingItems = [
  { title: "お布施を渡すタイミング", desc: "お布施は、葬儀の前後・法要の後など、ご依頼した宗教者にお渡しします。タイミングや形式については地域・宗派の慣習があります。分からない場合は、担当のスタッフにご確認ください。" },
  { title: "封筒の書き方", desc: "仏式の場合は「お布施」「御布施」と書いた白い封筒に入れてお渡しするのが一般的です。神式・キリスト教式では形式が異なります。稲垣屋葬儀店でも、封筒の準備・書き方についてご案内します。" },
  { title: "複数の封筒を用意する場合", desc: "「御車代」（宗教者の交通費）・「御膳料」（会食に参加されない場合のお礼）を別封筒で用意する慣習がある場合があります。必要かどうかは宗派・地域の慣習によりますので、担当者にご確認ください。" },
];

const faqItems = [
  {
    q: "お布施の金額を教えてもらうことはできますか？",
    a: "お布施の金額は宗派・地域・依頼先によって大きく異なるため、稲垣屋葬儀店として断定的な金額をお伝えすることは難しい状況です。ただし、一般的な目安や考え方についてはご相談の中でお伝えできます。最終的には菩提寺またはご依頼する宗教者にご確認されることをお勧めします。",
  },
  {
    q: "お付き合いのあるお寺がない場合はどうすればよいですか？",
    a: "稲垣屋葬儀店では、宗教者のご紹介も承っています。どの宗派が良いか分からない方・無宗教葬をご希望の方も、まずはご相談ください。",
  },
  {
    q: "無宗教の葬儀ではお布施は不要ですか？",
    a: "はい、無宗教葬では宗教者を招かないためお布施は発生しません。音楽葬・お別れ会形式など、ご家族のご希望に合わせた形式での葬儀も対応しています。",
  },
  {
    q: "戒名のランクによって費用はどのくらい変わりますか？",
    a: "戒名のランクによってお礼の目安が変わることがありますが、金額は宗派・菩提寺によって異なります。稲垣屋葬儀店として断定的な金額をお伝えすることは難しいため、菩提寺に直接ご確認されることをお勧めします。",
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
  name: "宗教者への御礼について｜お布施の考え方｜葛飾区 稲垣屋葬儀店",
  description:
    "葬儀での宗教者への御礼（お布施）の考え方を葛飾区の稲垣屋葬儀店が解説します。宗派による違い・目安の考え方・菩提寺がない場合の対応について、断定せずに丁寧にご説明します。",
  url: "https://www.inagakiyasougiten.com/cost/religious-fee",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀費用", item: "https://www.inagakiyasougiten.com/cost" },
      { "@type": "ListItem", position: 3, name: "宗教者への御礼について｜お布施の考え方", item: "https://www.inagakiyasougiten.com/cost/religious-fee" },
    ],
  },
};

export default function CostReligiousFeePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="宗教者への御礼（お布施）について"
        subtitle="宗教者への御礼の考え方を丁寧にご説明します"
        en="RELIGIOUS OFFERING"
      />
      <Breadcrumb items={[{ label: "葬儀費用", href: "/cost" }, { label: "宗教者への御礼" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">RELIGIOUS OFFERING</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              お布施の考え方
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              葬儀に際して宗教者（僧侶・神職など）をお招きする場合、御礼（お布施）をお渡しするのが一般的です。金額は「必ずこれ」と決まっているわけではなく、宗派・地域・ご依頼先によって異なります。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              「いくら用意すれば良いか分からない」というご相談は多くいただきます。以下に、お布施の考え方についてご説明します。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {religiousFeeItems.map((item) => (
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
              お布施を渡す際のマナー
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {timingItems.map((item) => (
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
              <Link href="/cost/breakdown" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                費用の内訳について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/cost/additional" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                追加費用の注意点<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/plans/family-funeral" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                家族葬プランについて<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/flow/memorial-service" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                法要・四十九日について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
