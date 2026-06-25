import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "葬儀費用の内訳｜何に費用がかかるか｜葛飾区 稲垣屋葬儀店",
  description:
    "葬儀費用の内訳を葛飾区の稲垣屋葬儀店が丁寧に解説します。基本費用・式場費・搬送費・安置費・宗教者謝礼・飲食費・返礼品など、何にどれくらいかかるかを分かりやすくご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/cost/breakdown" },
};

const breakdownItems = [
  {
    en: "Basic Cost",
    title: "葬儀基本費用",
    desc: "棺・骨壺・寝台車・ドライアイス・湯灌・納棺・祭壇・式の進行・スタッフ人件費など、葬儀を執り行うために必要な基本的な一式費用です。葬儀社が提示するプランに含まれることが多い項目です。内容によって費用は大きく変わりますので、見積もり時に何が含まれているかを必ず確認してください。",
  },
  {
    en: "Venue Cost",
    title: "式場費用",
    desc: "葬儀・告別式を行う会場の使用料です。斎場・葬儀会館・ご自宅・菩提寺など、場所によって費用は異なります。公営斎場は民間式場より費用を抑えられる場合がありますが、予約の混雑状況もあります。式場費が葬儀基本費用に含まれているか、別途かかるかも事前に確認しましょう。",
  },
  {
    en: "Transport Cost",
    title: "搬送費用",
    desc: "ご逝去の場所（病院・施設・ご自宅など）から安置場所、さらに式場・火葬場への搬送にかかる費用です。搬送距離・時間帯・車両の種類によって異なります。深夜・早朝・遠距離の場合は費用が変わることがあります。葛飾区内であれば比較的対応しやすい地域です。",
  },
  {
    en: "Resting Place Cost",
    title: "安置費用",
    desc: "ご逝去からご葬儀まで故人様をお預かりするための費用です。ご自宅への搬送で安置する場合と、葬儀社の安置施設をご利用の場合とで異なります。安置日数が長くなるほど費用が加算される場合がありますので、葬儀日程の決定とあわせて確認することをお勧めします。",
  },
  {
    en: "Religious Offering",
    title: "宗教者への謝礼（お布施）",
    desc: "仏式・神式・キリスト教式などで宗教者を招く場合に発生する謝礼です。宗派・依頼先・読経の回数などによって大きく異なります。菩提寺がある場合は直接ご確認ください。無宗教葬の場合は不要です。稲垣屋葬儀店では、菩提寺がない場合の宗教者紹介も承っています。",
  },
  {
    en: "Food & Drink",
    title: "飲食費用",
    desc: "通夜振る舞い・精進落とし（告別式後の会食）にかかる費用です。参列者の人数・料理の内容によって異なります。家族葬・一日葬では省略または縮小することが多く、その分費用を抑えることができます。飲食をどうするかは早めに方針を決めておくと段取りがスムーズです。",
  },
  {
    en: "Return Gifts",
    title: "返礼品費用",
    desc: "参列者に渡すお礼の品（香典返し・会葬礼状・手土産など）にかかる費用です。参列者の人数に応じて変わります。家族葬・火葬式の場合、参列者が少ないため費用を抑えやすい傾向があります。後日郵送で香典返しを行う場合は、送料も含めた費用を確認しましょう。",
  },
  {
    en: "Others",
    title: "その他の費用",
    desc: "遺影写真の制作・供花・弔電・位牌の作成・死亡診断書の取得費用・役所への提出代行費用など、プランに含まれないケースがある費用です。これらは積み重なると思わぬ金額になることがあります。見積もり時に、プランに含まれないものを確認しておくことが大切です。",
  },
];

const faqItems = [
  {
    q: "葬儀費用の内訳で、一番費用がかかる項目はどれですか？",
    a: "葬儀の形式や規模によって異なりますが、一般的には「葬儀基本費用（式場・祭壇・スタッフ費用を含む）」が最も大きな割合を占めることが多いです。次いで宗教者への謝礼・飲食費・返礼品が続きます。家族葬・火葬式では飲食費・返礼品が少ない分、基本費用の比率が高くなります。",
  },
  {
    q: "火葬料は葬儀費用に含まれますか？",
    a: "多くの場合、火葬料は葬儀プランの費用には含まれず、斎場または火葬場への別途支払いとなります。葛飾区内の公営施設と民間施設とでは費用が異なります。区民の方向けの費用制度もある場合がありますので、ご相談の際にご確認ください。",
  },
  {
    q: "見積もりに含まれていない費用が後から発生することはありますか？",
    a: "稲垣屋葬儀店では、事前に費用を明確にご提示し、後から予期せぬ追加費用が発生しないよう丁寧にご説明しています。ただし、ご希望による内容の変更・追加の場合は事前にご説明した上で対応します。見積もり時に「これはプランに含まれますか」と確認することが大切です。",
  },
  {
    q: "葬儀費用は現金払いのみですか？",
    a: "稲垣屋葬儀店でのお支払い方法については、ご相談の際にご確認ください。現金のほか、対応可能な支払い方法についてご案内します。なお、葬儀費用は後日まとめて請求となることが一般的で、葬儀直後に全額現金で用意する必要はないケースがほとんどです。",
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
  name: "葬儀費用の内訳｜何に費用がかかるか｜葛飾区 稲垣屋葬儀店",
  description:
    "葬儀費用の内訳を葛飾区の稲垣屋葬儀店が丁寧に解説します。基本費用・式場費・搬送費・安置費・宗教者謝礼・飲食費・返礼品など、何にどれくらいかかるかを分かりやすくご説明します。",
  url: "https://www.inagakiyasougiten.com/cost/breakdown",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀費用", item: "https://www.inagakiyasougiten.com/cost" },
      { "@type": "ListItem", position: 3, name: "葬儀費用の内訳｜何に費用がかかるか", item: "https://www.inagakiyasougiten.com/cost/breakdown" },
    ],
  },
};

export default function CostBreakdownPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="葬儀費用の内訳について"
        subtitle="何にどれくらいの費用がかかるのかを丁寧にご説明します"
        en="COST BREAKDOWN"
      />
      <Breadcrumb items={[{ label: "葬儀費用", href: "/cost" }, { label: "費用の内訳" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ABOUT COST</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              葬儀費用の構成について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              「葬儀費用」と一口に言っても、実際にはさまざまな項目の合計です。葬儀社が提示するプランに含まれているものと、別途かかるものを正確に把握することが、納得のいく葬儀につながります。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              稲垣屋葬儀店では、お見積もり時に各費用の内訳を明確にご提示しています。以下に、一般的に発生する費用の項目とその内容をご説明します。
            </p>
          </FadeInUp>

          <FadeInUp className="mt-10 mb-10">
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              費用の主な内訳
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {breakdownItems.map((item) => (
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

          <FadeInUp>
            <p className="text-[#7560a0] text-sm leading-loose border-t border-[#e8ddf4] pt-6 mb-10">
              ※ 費用はご状況・葬儀内容・地域・時期によって異なります。上記はあくまで一般的な内訳の説明であり、具体的な費用については事前相談・お見積もりにてご確認ください。
            </p>
          </FadeInUp>

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
              <Link href="/cost/additional" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                追加費用が発生しやすい項目<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/cost/estimate" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                見積もりで確認すべきこと<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/cost/religious-fee" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                宗教者への御礼について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/cost/return-gift" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                返礼品・飲食費の考え方<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
