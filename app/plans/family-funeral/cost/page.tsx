import type { Metadata } from "next";
import PageHero from "../../../components/PageHero";
import Breadcrumb from "../../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "家族葬の費用と内訳｜葛飾区 稲垣屋葬儀店",
  description:
    "葛飾区での家族葬の費用と内訳。何が含まれるか・含まれないか・費用を左右する要素を稲垣屋葬儀店が丁寧にご説明します。見積もり無料。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/plans/family-funeral/cost" },
};

const faqItems = [
  {
    question: "家族葬の費用相場はいくらですか？",
    answer:
      "家族葬の費用は、参列者数・プランの内容・宗教者費用・式場の使用有無など、様々な要因によって異なります。一概に「相場はいくら」とお伝えすることが難しいため、稲垣屋葬儀店では個別の状況に合わせた詳細なお見積もりを無料でご提示しています。",
  },
  {
    question: "費用の見積もりはいつ依頼するのがよいですか？",
    answer:
      "事前のご相談・お見積もりをお勧めします。いざというときに慌てないよう、元気なうちから費用感を把握しておくことが大切です。稲垣屋葬儀店では事前相談・お見積もりを無料で承っており、強引なご提案は一切いたしません。",
  },
  {
    question: "区民葬儀と家族葬を組み合わせることはできますか？",
    answer:
      "はい、葛飾区の区民葬儀制度を活用しながら家族葬の形式で執り行うことが可能な場合があります。区民葬儀制度は葬儀の規模や形式ではなく、葛飾区民であることが条件となります。詳しくはご相談ください。",
  },
  {
    question: "追加費用が発生することはありますか？",
    answer:
      "お見積もり時点では想定していなかった内容（オプションの追加・参列者数の増加による飲食費の増加など）が発生した場合、追加費用が生じることがあります。稲垣屋葬儀店では事前に丁寧な説明を行い、お客様が納得した上でのご依頼を大切にしています。",
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
  name: "家族葬の費用と内訳｜葛飾区 稲垣屋葬儀店",
  description:
    "葛飾区での家族葬の費用と内訳。何が含まれるか・含まれないか・費用を左右する要素を稲垣屋葬儀店が丁寧にご説明します。見積もり無料。",
  url: "https://www.inagakiyasougiten.com/plans/family-funeral/cost",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "家族葬", item: "https://www.inagakiyasougiten.com/plans/family-funeral" },
      { "@type": "ListItem", position: 3, name: "家族葬の費用と内訳", item: "https://www.inagakiyasougiten.com/plans/family-funeral/cost" },
    ],
  },
};

export default function FamilyFuneralCostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="家族葬の費用と内訳"
        subtitle="費用の構成と内訳をご説明します"
        en="COST OF FAMILY FUNERAL"
      />
      <Breadcrumb
        items={[
          { label: "葬儀プラン", href: "/plans" },
          { label: "家族葬", href: "/plans/family-funeral" },
          { label: "家族葬の費用" },
        ]}
      />

      {/* 費用の考え方 */}
      <section className="py-20 md:py-28 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ABOUT COST</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em] mb-5"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              家族葬の費用の考え方
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mb-6" />
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              「家族葬の費用はいくら？」というご質問をよくいただきますが、家族葬の費用は一律ではなく、構成する要素によって大きく異なります。参列者の人数・選ぶプランの内容・式場の使用有無・宗教者費用の有無など、様々な要因が費用に影響します。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              稲垣屋葬儀店では、ご家族の状況に合わせた詳細なお見積もりを無料でご提示します。費用についての不安やご不明な点は、事前相談でお気軽にご確認ください。「費用について聞くのは失礼では」とご遠慮される必要はまったくありません。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              以下に、家族葬の費用を構成する主な項目と、費用に影響する要素をご説明します。事前にご確認いただくことで、いざというときに慌てず、納得のいく選択ができます。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* 費用を構成する主な項目 */}
      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COST COMPONENTS</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              家族葬費用を構成する主な項目
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "葬儀基本費用",
                desc: "棺・搬送・ご安置・人件費・祭壇・備品・ドライアイスなど、葬儀を執り行うための基本的な費用です。この部分は参列者数によって大きく変動するわけではなく、葬儀の「基盤」となる費用です。プランや棺の種類・搬送距離などによって変わります。",
              },
              {
                title: "式場使用料",
                desc: "式場（葬儀ホール・斎場など）を使用する場合の使用料です。式場を使用しない場合（ご自宅での葬儀など）はこの費用は発生しません。式場の規模・設備・立地によって使用料は異なります。",
              },
              {
                title: "宗教者費用（お布施など）",
                desc: "宗教者（僧侶・神職者・牧師など）をお呼びする場合のお布施や謝礼です。この費用は葬儀社が負担するものではなく、ご家族からご宗教者へ直接お渡しいただくものです。金額は菩提寺や宗旨・宗派によって異なりますので、直接ご確認されることをお勧めします。",
              },
              {
                title: "飲食・返礼品費用",
                desc: "お通夜・告別式後のお斎（会食）や、会葬御礼・香典返しなどの返礼品にかかる費用です。参列者の人数に比例して増減する部分であり、少人数の家族葬ではこの費用を抑えやすい傾向があります。",
              },
              {
                title: "火葬費用",
                desc: "火葬場の使用料です。葛飾区では公営の火葬場をご利用いただけます。公営火葬場は民営と比べて使用料が抑えられる傾向がありますが、予約状況によっては日程が前後する場合もあります。火葬費用は葬儀社の見積もりに含まれる場合と別途請求される場合がありますので、ご確認ください。",
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

      {/* 費用に含まれないものの例 */}
      <section className="py-16 md:py-24 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">NOT INCLUDED</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              費用に含まれないものの例
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              葬儀社の見積もりには含まれない費用が存在します。代表的なものとして以下が挙げられます。事前にご確認いただくことで、総費用を把握しやすくなります。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              { item: "宗教者へのお布施・謝礼（葬儀社が負担しないもの）" },
              { item: "死亡診断書・各種証明書の発行手数料" },
              { item: "遠方からの参列者への交通費・宿泊費のご配慮" },
              { item: "四十九日・納骨・法要に関する費用" },
              { item: "墓地・納骨堂の費用（別途手配が必要な場合）" },
              { item: "生花祭壇のオプション・追加飾り" },
            ].map((row) => (
              <StaggerItem key={row.item}>
                <div className="py-4 flex items-center gap-3">
                  <span className="text-[#c9a55a] shrink-0">—</span>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{row.item}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 費用を左右する要素 */}
      <section className="py-16 md:py-24 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COST FACTORS</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              費用を左右する主な要素
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "参列者の人数",
                desc: "参列者の人数は、飲食費・返礼品費用に直接影響します。10名と30名では飲食・返礼品の費用が大きく異なります。一方で、葬儀基本費用や火葬費用は人数によって大きく変動しません。",
              },
              {
                title: "プランの内容・棺の種類",
                desc: "選ぶプランや棺の種類によって葬儀基本費用が変わります。シンプルなプランから、祭壇を充実させたプランまで様々な選択肢があります。ご家族の希望と費用のバランスを相談しながら決めます。",
              },
              {
                title: "宗教者の有無",
                desc: "宗教者をお呼びするかどうかは費用に大きく影響します。仏式・神式・キリスト式のほか、無宗教葬という選択肢もあります。菩提寺がある場合は、そちらへのお布施が別途必要となります。",
              },
              {
                title: "式場の使用有無・規模",
                desc: "式場を使用するかどうか、また式場の規模によって使用料が変わります。ご自宅での葬儀を選ぶことで式場使用料がかからない場合もありますが、スペース・設備の確認が必要です。",
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

      {/* 区民葬儀との比較 */}
      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">KUMIN FUNERAL</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              区民葬儀制度との関係
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              葛飾区では「区民葬儀」制度があり、葛飾区民の方が亡くなられた際に、区が指定する葬儀社（稲垣屋葬儀店を含む）を通じて葬儀を行うことで、一部費用の補助を受けられる場合があります。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              区民葬儀は「一般葬向けのもの」というイメージをお持ちの方もいらっしゃいますが、家族葬の形式で執り行いながら区民葬儀制度を活用することが可能な場合もあります。参列者の人数制限があるわけではありませんので、少人数の家族葬でもご検討ください。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              区民葬儀の詳細・適用条件・手続きについては、稲垣屋葬儀店またはお住まいの葛飾区の担当窓口へご確認ください。事前相談の際に合わせてご質問いただくことをお勧めします。
            </p>
          </FadeInUp>

          <FadeInUp className="mt-6">
            <Link
              href="/plans/kumin-funeral"
              className="inline-flex items-center gap-1 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group"
            >
              区民葬儀についてくわしく見る
              <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-[#faf7fd] border-t border-[#e8ddf4]">
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
                { href: "/plans/family-funeral", label: "家族葬について" },
                { href: "/plans/family-funeral/flow", label: "家族葬の流れ" },
                { href: "/plans/family-funeral/merit", label: "家族葬のメリット・注意点" },
                { href: "/plans/kumin-funeral", label: "区民葬儀について" },
                { href: "/plans/kumin-funeral/cost-detail", label: "区民葬儀の費用詳細" },
                { href: "/consultation", label: "事前相談" },
                { href: "/contact", label: "お問い合わせ" },
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
            <h2
              className="text-[#312852] text-2xl tracking-[0.08em] mb-5"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              ご不明な点はお気軽にご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              事前相談・お見積もりは無料です。強引な勧誘は一切行いません。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 group w-full sm:w-auto justify-center"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                <MessageCircle size={17} />お問い合わせ
                <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 border border-[#9278be] text-[#5c4a80] hover:bg-[#ede7f6] px-8 py-4 tracking-wider transition-colors duration-300 w-full sm:w-auto justify-center"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                事前相談について
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
