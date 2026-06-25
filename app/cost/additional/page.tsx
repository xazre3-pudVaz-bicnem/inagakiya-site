import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "葬儀で追加費用が発生しやすい項目｜葛飾区 稲垣屋葬儀店",
  description:
    "葬儀の追加費用が発生しやすい項目を葛飾区の稲垣屋葬儀店が解説します。オプション祭壇・遠方搬送・安置延長など、事前に確認しておくべきポイントを丁寧にご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/cost/additional" },
};

const additionalItems = [
  {
    en: "Optional Altar",
    title: "オプション祭壇・生花の追加",
    desc: "プランに含まれる標準的な祭壇から、より豪華な生花祭壇や装飾に変更・追加する場合に費用が発生します。「基本プランの祭壇でよい」と思っていても、当日の打ち合わせで追加したいというご要望が生まれることも多いです。事前に「どの程度の祭壇を想定しているか」を確認しておくことで、予算オーバーを防げます。",
  },
  {
    en: "Long-distance Transport",
    title: "遠方からの搬送・長距離搬送",
    desc: "県外・遠方でご逝去された場合の搬送は、距離に応じて費用が加算される場合があります。また、飛行機や新幹線を利用した搬送が必要なケースでは、追加費用が発生することがあります。事前に「どこからどこへ搬送するか」を明確にし、見積もりに含めてもらうことが大切です。",
  },
  {
    en: "Extended Rest",
    title: "安置期間の延長",
    desc: "ご葬儀の日程が決まるまでの間、安置期間が長くなると追加費用が発生する場合があります。特に年末年始・お盆などの時期は火葬場が混雑しやすく、安置が長引くことがあります。安置施設の日割り費用・ドライアイスの追加費用なども事前に確認しておきましょう。",
  },
  {
    en: "Death Photo",
    title: "遺影写真の加工・制作費用",
    desc: "遺影写真の制作は、使用する写真の状態・サイズ・仕上がりの仕様によって費用が異なります。既存の写真のトリミング・背景変更などの加工が必要な場合は追加費用となることがあります。プランに「遺影制作一式」として含まれているか確認し、対象の写真について事前に相談しておくと安心です。",
  },
  {
    en: "Reception Support",
    title: "会葬受付・接待の人員追加",
    desc: "参列者が予想より多くなった場合、会葬受付・案内・接待のスタッフが不足することがあります。追加スタッフを依頼すると費用が発生します。特に一般葬・社葬などで参列者の規模が読みにくい場合は、スタッフ体制についても確認しておきましょう。",
  },
  {
    en: "Priest Offering",
    title: "戒名・追加読経の費用",
    desc: "戒名（法名）を授けていただく場合の費用は、ランク・宗派によって大きく異なります。また、通夜・葬儀のほかに「初七日法要」を葬儀当日にあわせて行う場合は、追加の読経料が発生することがあります。菩提寺がある場合は事前にご確認ください。",
  },
  {
    en: "Supplies",
    title: "消耗品・その他小物の追加",
    desc: "お線香・蝋燭・供花・弔電・位牌・仏壇用小物など、プランに含まれていない消耗品・備品が当日の流れで必要になることがあります。これらは個別に費用が発生しますので、「一式に含まれているかどうか」を事前確認しておくことをお勧めします。",
  },
];

const checkItems = [
  { title: "見積もりに含まれるものを一覧で確認する", desc: "口頭だけでなく、書面で項目を確認しましょう。「プランに含まれる」と口頭で言われた内容でも、書面で確認することで認識のズレを防げます。" },
  { title: "「含まれない費用」を明示してもらう", desc: "「この費用は別途かかりますか？」と積極的に確認することが大切です。特に火葬料・宗教者謝礼・返礼品・飲食費・遺影制作費などは別途になることが多い項目です。" },
  { title: "安置日数の費用を確認する", desc: "安置が長引いた場合の費用について事前に確認しておきましょう。特に日程が未確定の段階での安置費用は、延長した場合の単価を聞いておくと安心です。" },
  { title: "変更・キャンセルのルールを確認する", desc: "プランの内容変更や追加を行う場合、いつまでなら対応可能か・費用がどう変わるかを事前に確認しておきましょう。" },
];

const faqItems = [
  {
    q: "追加費用が発生しないようにするにはどうすればよいですか？",
    a: "見積もり時に「プランに含まれるもの」と「含まれないもの」を書面で確認し、疑問点はすべて質問することが大切です。稲垣屋葬儀店では、事前にすべての費用項目を明確にご提示し、ご納得いただいた上で進めています。",
  },
  {
    q: "見積もりより実際の請求が高くなることはありますか？",
    a: "稲垣屋葬儀店では、事前にご提示した費用から予期せぬ追加費用が発生しないよう丁寧にご説明しています。ご希望による内容の変更・追加の場合は、その都度事前にご説明した上で対応しております。",
  },
  {
    q: "遠方から故人を連れてくる場合、搬送費用はどのくらいかかりますか？",
    a: "搬送費用は距離・搬送方法・時間帯によって異なります。県外・遠方からの搬送については、事前にご相談いただくことで概算をお伝えすることが可能です。お気軽にお問い合わせください。",
  },
  {
    q: "祭壇のグレードを変更したいと思った場合、いつまで相談できますか？",
    a: "ご葬儀の打ち合わせ時はもちろん、可能な範囲でご要望に対応します。ただし、ご葬儀直前の大幅な変更は対応が難しい場合もあります。早めにご相談いただくほど選択肢が広がります。",
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
  name: "葬儀で追加費用が発生しやすい項目｜葛飾区 稲垣屋葬儀店",
  description:
    "葬儀の追加費用が発生しやすい項目を葛飾区の稲垣屋葬儀店が解説します。オプション祭壇・遠方搬送・安置延長など、事前に確認しておくべきポイントを丁寧にご説明します。",
  url: "https://www.inagakiyasougiten.com/cost/additional",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀費用", item: "https://www.inagakiyasougiten.com/cost" },
      { "@type": "ListItem", position: 3, name: "葬儀で追加費用が発生しやすい項目", item: "https://www.inagakiyasougiten.com/cost/additional" },
    ],
  },
};

export default function CostAdditionalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="追加費用が発生しやすい項目"
        subtitle="事前に確認しておくことで、安心してご葬儀を進めていただけます"
        en="ADDITIONAL COSTS"
      />
      <Breadcrumb items={[{ label: "葬儀費用", href: "/cost" }, { label: "追加費用の注意点" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ADDITIONAL COSTS</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              よくある追加費用の種類
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              葬儀の見積もりを見て「予算内で収まりそう」と思っていたのに、実際の請求が予想より高くなってしまった、というお話を聞くことがあります。多くの場合、プランに含まれていない項目が積み重なることが原因です。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              稲垣屋葬儀店では事前に費用を明確にご提示していますが、一般的に追加費用が発生しやすい項目についてご案内します。ご参考にしてください。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {additionalItems.map((item) => (
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
              見積もり時に確認しておくべきポイント
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {checkItems.map((item) => (
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
              <Link href="/cost/estimate" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                見積もりで確認すべきこと<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/cost/reduce" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                費用を抑えるための考え方<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/cost/facility-cost" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                式場・火葬・安置の費用<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
