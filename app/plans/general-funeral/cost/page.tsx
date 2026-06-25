import type { Metadata } from "next";
import PageHero from "../../../components/PageHero";
import Breadcrumb from "../../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "一般葬の費用｜葛飾区 稲垣屋葬儀店",
  description:
    "葛飾区での一般葬の費用と内訳。参列者規模・式場・飲食費など費用を左右する要素を稲垣屋葬儀店が丁寧にご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/plans/general-funeral/cost" },
};

const costItems = [
  {
    title: "葬儀基本費用",
    desc: "棺・搬送・ご安置・式場設備・人件費・祭壇などが含まれます。プランの内容や規模によって異なりますので、まずはお見積もりをご確認ください。稲垣屋葬儀店では葬儀の内容を丁寧にご説明したうえで、納得いただけるプランをご提案します。",
  },
  {
    title: "式場使用料",
    desc: "葬儀を行う式場の使用料です。公民館・葬儀専用式場・自宅など、どの場所で執り行うかによって費用が変わります。葛飾区内では利用できる式場の種類も様々ですので、ご希望に応じてご案内します。",
  },
  {
    title: "宗教者費用（お布施）",
    desc: "宗教者（僧侶・神官・牧師など）へのお布施は、ご葬儀の費用の一部です。菩提寺がある場合はそちらへのご連絡・相談が必要です。菩提寺がない場合は稲垣屋葬儀店でご紹介することも可能ですので、ご相談ください。",
  },
  {
    title: "通夜振る舞い・精進落とし（飲食費）",
    desc: "お通夜後の通夜振る舞いや告別式後の精進落とし（会食）にかかる費用です。一般葬では参列者が多い場合、飲食費の総額が大きくなる場合があります。会食の規模・内容についても事前にご相談いただけます。",
  },
  {
    title: "返礼品費用（会葬礼状・香典返し）",
    desc: "参列者へお渡しする会葬礼状・返礼品（香典返し）の費用です。一般葬では参列者数が多い分、返礼品の数も増えます。返礼品の選び方についても稲垣屋葬儀店でご相談いただけます。",
  },
  {
    title: "火葬費用",
    desc: "火葬場の利用にかかる費用です。公営火葬場を利用する場合と民間火葬場を利用する場合で費用が異なります。葛飾区では近隣の公営火葬場が一般的に利用されています。",
  },
];

const faqItems = [
  {
    question: "一般葬は他の葬儀形式より高くなりますか？",
    answer:
      "一概に高い・安いとは言えませんが、参列者が多い一般葬では飲食費・返礼品費・式場費用などが増える傾向があります。ただし香典収入がある場合は実質的な負担が軽減されることもあります。費用の全体像はお見積もりにてご確認ください。",
  },
  {
    question: "一般葬でも区民葬儀制度は使えますか？",
    answer:
      "葛飾区民葬儀制度を一般葬の形式で利用できるかどうかは、葛飾区の規定内容によります。詳細な条件については稲垣屋葬儀店（葛飾区指定取扱店）またはお近くの区役所にお問い合わせください。最新の制度情報をご確認いただくことをお勧めします。",
  },
  {
    question: "香典収入で費用がまかなえますか？",
    answer:
      "香典収入の総額は参列者数や故人の交際範囲によって大きく異なります。一般葬では参列者が多い分、香典収入が多くなるケースもありますが、収入額を事前に予測することは難しいため、費用はご自身でご準備いただくことを前提にお見積もりをご確認ください。",
  },
  {
    question: "費用の見積もりはいつ依頼すればよいですか？",
    answer:
      "できるだけ事前にご相談・お見積もりをご依頼いただくことをお勧めします。いざというときに慌てずに済むよう、生前のうちから稲垣屋葬儀店にご相談ください。事前相談・お見積もりは無料で対応しております。",
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
  name: "一般葬の費用｜葛飾区 稲垣屋葬儀店",
  description:
    "葛飾区での一般葬の費用と内訳。参列者規模・式場・飲食費など費用を左右する要素を稲垣屋葬儀店が丁寧にご説明します。",
  url: "https://www.inagakiyasougiten.com/plans/general-funeral/cost",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀プラン", item: "https://www.inagakiyasougiten.com/plans" },
      { "@type": "ListItem", position: 3, name: "一般葬", item: "https://www.inagakiyasougiten.com/plans/general-funeral" },
      { "@type": "ListItem", position: 4, name: "一般葬の費用", item: "https://www.inagakiyasougiten.com/plans/general-funeral/cost" },
    ],
  },
};

export default function GeneralFuneralCostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero title="一般葬の費用について" subtitle="費用の構成と内訳をご説明します" en="COST OF GENERAL FUNERAL" />
      <Breadcrumb
        items={[
          { label: "葬儀プラン", href: "/plans" },
          { label: "一般葬", href: "/plans/general-funeral" },
          { label: "一般葬の費用" },
        ]}
      />

      {/* 費用の考え方 */}
      <section className="py-20 md:py-28 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">OVERVIEW</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em] mb-5"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              一般葬の費用の考え方
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mb-6" />
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              一般葬の費用は、参列者の人数が大きく影響します。参列者が多ければ飲食費・返礼品費用・式場の規模などが増え、費用が増加する傾向があります。反面、香典収入が多くなるケースもあります。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              費用は大きく「葬儀基本費用」「式場使用料」「宗教者費用」「飲食費」「返礼品費用」「火葬費用」に分かれます。これらの各項目が合わさって総費用が決まります。稲垣屋葬儀店では各項目を丁寧にご説明し、明確なお見積もりをご提示します。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              費用についての不安や疑問は、事前相談でご遠慮なくお尋ねください。どのような規模・内容でも、ご予算やご状況に応じてご提案します。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* 費用項目 */}
      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COST BREAKDOWN</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              費用を構成する主な項目
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {costItems.map((item) => (
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

      {/* 費用を左右する要素 */}
      <section className="py-16 md:py-24 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">KEY FACTORS</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              費用を左右する要素
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "参列者数",
                desc: "一般葬において最も費用に影響するのが参列者数です。参列者が増えるほど、飲食費・返礼品費・式場のスペースなど多くの費用が増加します。事前に参列者数のおおよその目安をたてておくことが大切です。",
              },
              {
                title: "プランの内容",
                desc: "棺のグレード・祭壇の仕様・オプションサービスの有無などにより費用が変わります。必要なもの・不要なものを整理し、ご予算に合わせたプランをご選択ください。",
              },
              {
                title: "式場の選択",
                desc: "式場の種類（公民館・葬儀式場・自宅）や設備・立地によって式場使用料が異なります。ご希望の場所や日程・参列者数に合わせて最適な式場をご提案します。",
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

      {/* 参列者数による変化 */}
      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">SCALE</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              参列者数と費用の関係
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              一般葬では、参列者が増えるほど飲食費（通夜振る舞い・精進落とし）・返礼品費用の両方が比例して増加します。例えば、数十名と数百名では飲食費だけで大きな差が生まれます。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              一方で、参列者が多いほど香典収入が多くなるケースもあり、実質的な費用負担が変わってくる場合があります。ただし香典収入はあくまで不確実なものですので、費用の計画はご自身でのご準備を基本としてください。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              参列者数の見通しが難しい場合は、稲垣屋葬儀店にご相談ください。規模の異なるパターンでお見積もりをご提示することも可能です。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* 他の形式との比較 */}
      <section className="py-16 md:py-24 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COMPARISON</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              家族葬・一日葬との費用の比較
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "家族葬との違い",
                desc: "家族葬は参列者をご家族・近親者に限定するため、飲食費・返礼品費用が少なく済む傾向があります。一方で葬儀基本費用は葬儀の形式・内容によって家族葬でも相応の費用がかかります。参列者数が費用に大きく影響するのが一般葬との主な違いです。",
              },
              {
                title: "一日葬との違い",
                desc: "一日葬はお通夜を省略して告別式・火葬を一日で行う形式です。通夜振る舞いが不要になるため飲食費が抑えられます。ただしご家族の考え方や菩提寺の意向によって選択肢が変わりますので、事前にご相談ください。",
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
                { href: "/plans/general-funeral", label: "一般葬について" },
                { href: "/plans/general-funeral/flow", label: "一般葬の流れ" },
                { href: "/plans/family-funeral/cost", label: "家族葬の費用" },
                { href: "/plans/oneday-funeral/cost", label: "一日葬の費用" },
                { href: "/plans/kumin-funeral", label: "区民葬儀について" },
                { href: "/consultation", label: "事前相談" },
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
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              ご不明な点はお気軽にご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              事前相談・お見積もりは無料です。強引な勧誘は一切行いません。
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
