import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "葬儀日程の決め方｜葛飾区 稲垣屋葬儀店",
  description:
    "葬儀の日程を決める際に考慮すべき要素を葛飾区の稲垣屋葬儀店が解説します。火葬場・斎場・宗教者の都合など、日程に影響する要素と一般的な日程の考え方をご案内します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/flow/schedule" },
};

const factorItems = [
  {
    en: "Cremation Facility",
    title: "火葬場の空き状況",
    desc: "葬儀の日程を決める上で、火葬場の空き状況が最も大きな制約になる場合があります。特に年末年始・お盆・大型連休・友引の翌日などは火葬場が混雑しやすく、希望の日程では予約が取れないことがあります。火葬場の空き状況を早めに確認することが、日程を決める第一歩となります。",
  },
  {
    en: "Venue",
    title: "式場・斎場の空き状況",
    desc: "葬儀・告別式を行う会場の予約状況も日程に影響します。火葬場と式場が同じ施設内にある場合は、同時に確認できます。式場が別の場所の場合は、火葬場と式場両方の空き状況を合わせて確認する必要があります。",
  },
  {
    en: "Religious Leader",
    title: "宗教者のスケジュール",
    desc: "仏式・神式などで宗教者（お坊さん・神職など）に来ていただく場合、宗教者のスケジュールも日程に影響します。菩提寺がある場合は早めに連絡し、都合を確認してください。宗教者のスケジュールと火葬場・式場の空き状況を調整しながら日程を決めます。",
  },
  {
    en: "Family",
    title: "ご家族・参列者の都合",
    desc: "遠方からご家族が集まる場合、移動・宿泊などの手配が必要になります。主要な参列者の都合を早めに確認し、日程を調整しましょう。ただし、日程は火葬場の空き状況が最優先になることが多いため、参列者には「火葬場の空き次第で日程が決まる」という点を事前にお伝えしておくと誤解が生じにくくなります。",
  },
  {
    en: "Tomobiki",
    title: "友引について",
    desc: "六曜の「友引」の日は、火葬場が休場であることが多いです（施設によって異なります）。友引の翌日は混雑する傾向があります。日程を検討する際は、六曜も参考にすると良いでしょう。ただし、必ずしも友引を避ける必要はなく、ご家族の判断で決めていただけます。",
  },
];

const typicalSchedule = [
  { title: "ご逝去当日〜翌日", desc: "葬儀社への連絡・搬送・安置・火葬場の空き確認・日程の仮決定。菩提寺への連絡も早めに行います。" },
  { title: "安置中（1〜3日程度）", desc: "打ち合わせ・日程確定・参列者への連絡・各種準備。稲垣屋葬儀店のスタッフが丁寧にご案内します。" },
  { title: "通夜（ご逝去から2〜4日後が多い）", desc: "ご家族・近親者が集まりお別れを行います。家族葬・一日葬の場合は省略するケースもあります。" },
  { title: "告別式・火葬（通夜の翌日が多い）", desc: "告別式の後、火葬場へ移動し火葬を行います。骨上げ後、初七日法要を行うケースもあります。" },
];

const faqItems = [
  {
    q: "葬儀の日程はいつまでに決める必要がありますか？",
    a: "ご逝去後できるだけ早い段階で火葬場の空き状況を確認し、日程を仮決定することをお勧めします。稲垣屋葬儀店では、搬送・安置の手配と同時に火葬場への確認も行います。",
  },
  {
    q: "友引の翌日はどれくらい混雑しますか？",
    a: "友引の翌日は火葬場が混雑しやすく、希望の時間帯での予約が難しいことがあります。特に混雑する時期・地域では、友引明けを避けて少し余裕を持った日程を選ぶとスムーズな場合があります。",
  },
  {
    q: "遠方から家族が来る場合、日程調整はどうすればよいですか？",
    a: "まず火葬場の空き状況を確認し、候補日程を把握した上で遠方のご家族に連絡することをお勧めします。「火葬場の空き次第で決まる」という点を最初に伝えておくと、調整がスムーズです。",
  },
  {
    q: "葬儀の日程は急ぎで決めなければいけませんか？",
    a: "火葬場の予約が必要なため、ある程度早めに日程を決めることが多いですが、「明日すぐに決めなければならない」というわけではありません。安置の状況を確認しながら、ご家族が納得できるタイミングで決めていただけるようサポートします。",
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
  name: "葬儀日程の決め方｜葛飾区 稲垣屋葬儀店",
  description:
    "葬儀の日程を決める際に考慮すべき要素を葛飾区の稲垣屋葬儀店が解説します。火葬場・斎場・宗教者の都合など、日程に影響する要素と一般的な日程の考え方をご案内します。",
  url: "https://www.inagakiyasougiten.com/flow/schedule",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀の流れ", item: "https://www.inagakiyasougiten.com/flow" },
      { "@type": "ListItem", position: 3, name: "葬儀日程の決め方", item: "https://www.inagakiyasougiten.com/flow/schedule" },
    ],
  },
};

export default function FlowSchedulePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="葬儀日程の決め方"
        subtitle="日程に影響する要素と一般的なスケジュールの考え方"
        en="FUNERAL SCHEDULE"
      />
      <Breadcrumb items={[{ label: "葬儀の流れ", href: "/flow" }, { label: "日程の決め方" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">SCHEDULE</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              日程を決める際の要素
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              葬儀の日程は、ご家族が自由に決められるわけではなく、火葬場の空き状況・式場・宗教者のスケジュールなど複数の要素が絡み合います。稲垣屋葬儀店では、これらの調整をサポートします。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {factorItems.map((item) => (
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
              一般的な葬儀のスケジュール
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
            <p className="text-[#7560a0] text-sm leading-loose mt-4">
              ※ 下記は一般的なスケジュールの目安です。ご状況によって異なります。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {typicalSchedule.map((item) => (
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
              <Link href="/flow/resting-place" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                安置場所の決め方<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/flow/cremation-permit" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                火葬許可証について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/flow/meeting" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                打ち合わせについて<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/cost/facility-cost" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                式場・火葬の費用について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
