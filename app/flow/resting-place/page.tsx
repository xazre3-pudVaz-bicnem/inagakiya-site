import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "安置場所の決め方｜葛飾区 稲垣屋葬儀店",
  description:
    "ご自宅安置と安置施設の違い・それぞれのメリットと注意点・安置期間の考え方を葛飾区の稲垣屋葬儀店が解説します。安置場所の決め方について丁寧にご案内します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/flow/resting-place" },
};

const homeRestItems = [
  { title: "故人様と一緒に自宅で過ごせる", desc: "ご自宅安置では、ご家族が故人様のそばでゆっくりお別れの時間を過ごすことができます。特に在宅での生活が長かった方には、慣れ親しんだ場所でお別れできるというメリットがあります。" },
  { title: "枕飾りを整えてお参りできる", desc: "稲垣屋葬儀店が枕飾り（お線香・蝋燭・花など）をご用意します。ご自宅でゆっくりとお参りいただけます。" },
  { title: "スペース・環境の確認が必要", desc: "ご自宅安置には、故人様をお寝かせするスペースが必要です。また、夏場・冬場の温度管理・衛生面への配慮も必要です。ご自宅の状況によっては、安置施設の方が適している場合があります。" },
];

const facilityRestItems = [
  { title: "ご自宅の状況が難しい場合も安心", desc: "マンション・アパートなど集合住宅や、ご自宅が狭い場合でも、安置施設をご利用いただけます。清潔で静かな環境で故人様をお預かりします。" },
  { title: "温度管理・衛生管理が整っている", desc: "専門の安置施設では、ご遺体の保全に適した温度・衛生管理が行われています。安置期間が長くなる場合も安心してお預けいただけます。" },
  { title: "面会・お参りについて確認が必要", desc: "安置施設でのお参り・面会については、施設ごとに対応が異なります。いつでもお参りできる施設もあります。詳細は稲垣屋葬儀店にご確認ください。" },
];

const periodItems = [
  { title: "安置期間はどのくらいになりますか？", desc: "安置期間は、ご逝去から葬儀・火葬までの日数です。火葬場の予約状況・宗教者の都合・ご家族の状況によって変わります。一般的に数日から1週間程度の場合が多いですが、状況によって異なります。" },
  { title: "安置期間が長くなると費用はどうなりますか？", desc: "安置施設をご利用の場合、安置日数に応じて費用が加算されることがあります。事前に安置費用の計算方法を確認しておくと、費用の見通しが立てやすくなります。" },
  { title: "安置中にすることはありますか？", desc: "安置中は、葬儀の打ち合わせ・参列者への連絡・日程の確定などを進めます。稲垣屋葬儀店のスタッフが一つひとつご案内しますので、安心して進めていただけます。" },
];

const faqItems = [
  {
    q: "ご自宅安置と安置施設、どちらを選ぶべきですか？",
    a: "ご自宅でゆっくりお別れしたい場合や、故人様が自宅を大切にしていた場合は自宅安置が適しています。ご自宅のスペース・状況が難しい場合や、長期間の安置が見込まれる場合は施設安置をお勧めします。どちらが適しているかについては、ご状況をお聞きした上でご提案します。",
  },
  {
    q: "安置施設でも面会はできますか？",
    a: "稲垣屋葬儀店の安置施設では、ご家族のお参り・面会に対応しています。詳しい時間帯・方法についてはご相談の際にご確認ください。",
  },
  {
    q: "ご自宅安置の場合、何を準備すればよいですか？",
    a: "基本的には特別な準備は不要です。稲垣屋葬儀店が枕飾り・ドライアイスなどをご用意します。ご自宅の布団・シーツのご用意をお願いする場合があります。詳細はスタッフがご説明します。",
  },
  {
    q: "安置場所は後から変更できますか？",
    a: "状況によっては変更も可能な場合があります。ただし、搬送が発生するため追加費用が発生することがあります。早めにご相談ください。",
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
  name: "安置場所の決め方｜葛飾区 稲垣屋葬儀店",
  description:
    "ご自宅安置と安置施設の違い・それぞれのメリットと注意点・安置期間の考え方を葛飾区の稲垣屋葬儀店が解説します。安置場所の決め方について丁寧にご案内します。",
  url: "https://www.inagakiyasougiten.com/flow/resting-place",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀の流れ", item: "https://www.inagakiyasougiten.com/flow" },
      { "@type": "ListItem", position: 3, name: "安置場所の決め方", item: "https://www.inagakiyasougiten.com/flow/resting-place" },
    ],
  },
};

export default function FlowRestingPlacePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="安置場所の決め方"
        subtitle="ご自宅安置と安置施設、それぞれの特徴をご案内します"
        en="RESTING PLACE"
      />
      <Breadcrumb items={[{ label: "葬儀の流れ", href: "/flow" }, { label: "安置場所の決め方" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">RESTING PLACE</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              安置場所について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              ご逝去後から葬儀・火葬までの間、故人様をどこでお預かりするかを決める必要があります。大きく「ご自宅安置」と「安置施設での安置」の2つの選択肢があります。
            </p>
          </FadeInUp>

          <FadeInUp className="mb-10">
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              ご自宅での安置
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {homeRestItems.map((item) => (
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
              安置施設でのご安置
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {facilityRestItems.map((item) => (
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
              安置期間について
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {periodItems.map((item) => (
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
              <Link href="/flow/transport" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                搬送・安置について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/flow/schedule" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                葬儀日程の決め方<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/cost/facility-cost" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                安置費用について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/flow/first-call" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                葬儀社への最初の連絡<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/flow" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                葬儀全体の流れ<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
