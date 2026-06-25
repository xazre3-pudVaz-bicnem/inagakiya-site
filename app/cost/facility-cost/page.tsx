import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "式場費・火葬料・安置費用について｜葛飾区 稲垣屋葬儀店",
  description:
    "葬儀の式場費・火葬料・安置費用の考え方を葛飾区の稲垣屋葬儀店が解説します。葛飾区での斎場・火葬場の費用の目安、安置期間中の費用の考え方について分かりやすくご案内します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/cost/facility-cost" },
};

const facilityItems = [
  {
    en: "Venue Cost",
    title: "式場使用料について",
    desc: "葬儀・告別式を行う会場の使用料です。公営の斎場・葬儀会館・民間の式場・ご自宅などから選ぶことができます。公営施設は民間施設と比べて費用を抑えられる場合がありますが、予約状況・空き時間によっては希望の日程で利用できないこともあります。稲垣屋葬儀店では、ご希望の日程・形式に合わせた式場のご提案も承っています。",
  },
  {
    en: "Cremation Fee",
    title: "火葬料について",
    desc: "ご遺体を火葬するための費用で、火葬場（斎場内の火葬設備）に支払います。公営の火葬場と民間の火葬場とでは費用が異なることがあります。葛飾区内にお住まいの方（区民）とそれ以外の方では、公営施設の利用料が異なる場合があります。火葬料は葬儀社のプランには含まれないことが多く、別途支払いとなるケースが一般的です。",
  },
  {
    en: "Rest & Storage",
    title: "安置費用について",
    desc: "ご逝去から葬儀・火葬までの間、故人様をお預かりするための費用です。ご自宅で安置する場合と、葬儀社や専用施設で安置する場合とで費用が変わります。安置日数が長くなるほど費用が加算されるケースが多いため、葬儀の日程が決まり次第、早めに手配することをお勧めします。",
  },
  {
    en: "Dry Ice",
    title: "ドライアイス・保全処置費用",
    desc: "安置中、ご遺体を適切な状態に保つためのドライアイス・保全処置にかかる費用です。安置日数に応じて費用が変わります。葬儀プランに含まれている場合と、日数に応じて別途加算される場合があります。",
  },
  {
    en: "Katsushika Info",
    title: "葛飾区における費用の考え方",
    desc: "葛飾区には公営の火葬・葬儀施設があります。葛飾区民の方はこれらの施設を利用する際、区民向けの費用が適用される場合があります。また、葛飾区民葬儀制度をご利用の場合、制度の範囲内で費用が定められています。詳細は葛飾区の規定または稲垣屋葬儀店へのご相談でご確認ください。",
  },
];

const tipsItems = [
  { title: "式場費と火葬料は別と理解する", desc: "葬儀社のプランに「式場費・火葬料込み」と明示されていない限り、これらは別途費用と考えるのが一般的です。見積もり時に必ず確認しましょう。" },
  { title: "安置日数の見通しを早めに立てる", desc: "葬儀の日程が長引くと安置費用が加算される場合があります。火葬場の空き状況・宗教者の都合などを早めに確認し、日程を決定することが大切です。" },
  { title: "葛飾区民葬儀制度の利用を検討する", desc: "葛飾区民の方は、区が設ける費用制度を活用することで、式場・火葬料について定められた費用で利用できる場合があります。稲垣屋葬儀店はこの制度の取扱店です。" },
];

const faqItems = [
  {
    q: "火葬料は葬儀費用の見積もりに含まれますか？",
    a: "多くの場合、火葬料は葬儀社のプランとは別に、火葬場（斎場）に直接お支払いいただく費用となります。稲垣屋葬儀店では見積もり時に「別途火葬料が発生します」と明確にご説明します。",
  },
  {
    q: "葛飾区民は公営の火葬場・斎場を利用できますか？",
    a: "葛飾区内には公営の火葬・葬儀施設があり、区民の方はご利用いただける場合があります。予約状況・日程によっては希望通りにならないこともありますので、早めにご相談ください。",
  },
  {
    q: "安置費用はいつから発生しますか？",
    a: "安置費用は、故人様をお預かりした日から発生するのが一般的です。安置日数が長くなると追加費用が発生する場合があります。具体的な費用はご相談の際にご案内します。",
  },
  {
    q: "式場を使わずにご自宅で葬儀を行うことはできますか？",
    a: "はい、ご自宅での葬儀も対応しています。ご自宅での葬儀は式場使用料がかからない分、費用を抑えることができる場合があります。ご自宅の広さ・状況に合わせてご提案しますので、ご相談ください。",
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
  name: "式場費・火葬料・安置費用について｜葛飾区 稲垣屋葬儀店",
  description:
    "葬儀の式場費・火葬料・安置費用の考え方を葛飾区の稲垣屋葬儀店が解説します。葛飾区での斎場・火葬場の費用の目安、安置期間中の費用の考え方について分かりやすくご案内します。",
  url: "https://www.inagakiyasougiten.com/cost/facility-cost",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀費用", item: "https://www.inagakiyasougiten.com/cost" },
      { "@type": "ListItem", position: 3, name: "式場費・火葬料・安置費用について", item: "https://www.inagakiyasougiten.com/cost/facility-cost" },
    ],
  },
};

export default function CostFacilityCostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="式場費・火葬料・安置費用について"
        subtitle="葛飾区での施設関連費用の考え方をご案内します"
        en="FACILITY & CREMATION COST"
      />
      <Breadcrumb items={[{ label: "葬儀費用", href: "/cost" }, { label: "式場・火葬・安置の費用" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FACILITY COST</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              施設に関連する費用について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              葬儀の費用は大きく「葬儀社への支払い」と「施設への支払い」に分かれます。施設への支払いには、式場使用料・火葬料・安置費用などが含まれます。これらは葬儀社のプランとは別に発生することが多い費用です。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              葛飾区には公営・民間の葬儀施設があり、それぞれ費用や予約方法が異なります。稲垣屋葬儀店では、ご状況に合わせた施設のご案内も承っています。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {facilityItems.map((item) => (
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
              費用を把握するためのポイント
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {tipsItems.map((item) => (
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
              <Link href="/cost/katsushika" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                葛飾区での費用のポイント<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/flow/resting-place" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                安置場所の決め方<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/cost/additional" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                追加費用の注意点<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
