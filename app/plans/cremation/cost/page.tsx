import type { Metadata } from "next";
import PageHero from "../../../components/PageHero";
import Breadcrumb from "../../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "火葬式・直葬の費用｜葛飾区 稲垣屋葬儀店",
  description:
    "葛飾区での火葬式（直葬）の費用と内訳。何が含まれるか・含まれないか・費用を左右する要素を稲垣屋葬儀店が丁寧にご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/plans/cremation/cost" },
};

const faqItems = [
  {
    question: "火葬式は最も費用が安い葬儀ですか？",
    answer:
      "葬儀形式の中では費用を最も抑えやすい形式です。ただし搬送・安置・棺・火葬場費用などは必ずかかります。また距離・安置日数・オプション内容によって費用は変わります。事前にお見積もりをご確認ください。",
  },
  {
    question: "火葬費用は葬儀費用に含まれますか？",
    answer:
      "多くの場合、火葬場の利用料は葬儀費用とは別に計上されます。葛飾区民が区内の火葬場を利用する場合と、区外の場合では利用料が異なります。見積もり時に内訳をご確認ください。",
  },
  {
    question: "区民葬儀と火葬式を組み合わせることはできますか？",
    answer:
      "葛飾区の区民葬儀制度と火葬式の組み合わせについては、内容によって可否や適用範囲が異なります。稲垣屋葬儀店では区民葬儀に対応しておりますので、詳細はお問い合わせください。",
  },
  {
    question: "事前に見積もりを取ることはできますか？",
    answer:
      "はい、事前のお見積もりは無料で承っております。いざというときに慌てないよう、事前にご相談いただくことをお勧めします。費用の内訳を丁寧にご説明しますので、ご不明な点はご遠慮なくお申し付けください。",
  },
];

const costItems = [
  {
    title: "搬送・安置費用",
    desc: "病院・施設から安置場所（ご自宅または安置施設）へのご遺体搬送費用と、火葬日まで安置するための費用です。搬送距離・安置日数によって費用が変わります。深夜・早朝の搬送は別途料金が発生する場合があります。",
  },
  {
    title: "棺・納棺用品",
    desc: "故人様を納める棺と、納棺に必要な用品（白装束・副葬品など）の費用です。棺の素材・デザインによって費用が異なります。火葬式では儀式的な祭壇は不要なため、この部分の費用はシンプルになる傾向があります。",
  },
  {
    title: "火葬費用",
    desc: "火葬場の利用料です。葛飾区民が区内の公営火葬場を利用する場合と、民営火葬場を利用する場合、または区外の火葬場を利用する場合で費用が異なります。葬儀費用とは別に計上されることが多い項目です。",
  },
  {
    title: "その他の費用",
    desc: "役所への書類手続き代行・後飾りの祭壇・骨壺・収骨容器などが含まれます。宗教者を呼ぶ場合のお布施・お車代なども別途必要です。これらは希望によって変わる部分ですので、見積もりの際に確認ください。",
  },
];

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "火葬式・直葬の費用｜葛飾区 稲垣屋葬儀店",
  description:
    "葛飾区での火葬式（直葬）の費用と内訳。何が含まれるか・含まれないか・費用を左右する要素を稲垣屋葬儀店が丁寧にご説明します。",
  url: "https://www.inagakiyasougiten.com/plans/cremation/cost",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "火葬式", item: "https://www.inagakiyasougiten.com/plans/cremation" },
      { "@type": "ListItem", position: 3, name: "火葬式の費用", item: "https://www.inagakiyasougiten.com/plans/cremation/cost" },
    ],
  },
};

export default function CremationCostPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title="火葬式・直葬の費用"
        subtitle="費用の構成と内訳をご説明します"
        en="COST OF CREMATION"
      />
      <Breadcrumb
        items={[
          { label: "葬儀プラン", href: "/plans" },
          { label: "火葬式", href: "/plans/cremation" },
          { label: "火葬式の費用" },
        ]}
      />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ABOUT COST</p>
            <h1 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              火葬式・直葬の費用
            </h1>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              火葬式（直葬）は葬儀形式の中で最もシンプルな形式ですが、「費用がかからない」わけではありません。ご遺体の搬送・安置・棺・火葬場の利用料など、必ず発生する費用があります。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              また、インターネット上で目にする「直葬○○万円〜」という表示には、含まれていない項目があることも少なくありません。最終的な費用は、内容・条件によって変わります。稲垣屋葬儀店では、費用の内訳をわかりやすくご説明します。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              以下では、火葬式・直葬の費用を構成する主な項目をご説明します。
            </p>
          </FadeInUp>

          <FadeInUp className="mt-16 mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COST ITEMS</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              費用を構成する項目
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-16">
            {costItems.map((item, i) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-2">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="text-[#312852] text-lg tracking-wide mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">INCLUDED / NOT INCLUDED</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              含まれるもの・含まれないもの
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp className="mb-16">
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-6">
              火葬式のプランに何が含まれるかは葬儀社によって異なります。稲垣屋葬儀店では見積もりの段階で内訳を丁寧にご説明します。
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-[#e8ddf4] px-6 py-6">
                <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-4">TYPICALLY INCLUDED</p>
                <p className="text-[#312852] text-base tracking-wide mb-4" style={{ fontFamily: "var(--font-mincho)" }}>含まれることが多い項目</p>
                <StaggerContainer className="divide-y divide-[#e8ddf4]">
                  {[
                    "ご遺体の搬送（病院→安置先）",
                    "安置（自社施設または提携施設）",
                    "棺・納棺用品（基本的なもの）",
                    "骨壺・収骨容器",
                    "役所への書類手続き代行",
                  ].map((text) => (
                    <StaggerItem key={text}>
                      <p className="py-3 text-[#4a4a4a] text-sm leading-relaxed">{text}</p>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
              <div className="border border-[#e8ddf4] px-6 py-6">
                <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-4">OFTEN SEPARATE</p>
                <p className="text-[#312852] text-base tracking-wide mb-4" style={{ fontFamily: "var(--font-mincho)" }}>別途費用となることが多い項目</p>
                <StaggerContainer className="divide-y divide-[#e8ddf4]">
                  {[
                    "火葬場の利用料",
                    "宗教者へのお布施・お車代",
                    "安置延長費用",
                    "後飾り祭壇",
                    "湯灌・特殊清拭",
                  ].map((text) => (
                    <StaggerItem key={text}>
                      <p className="py-3 text-[#4a4a4a] text-sm leading-relaxed">{text}</p>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </FadeInUp>

          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">KUMIN FUNERAL</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              区民葬儀制度との関係
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp className="mb-16">
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-6">
              葛飾区では、区民を対象とした葬儀費用の補助制度（区民葬儀）があります。この制度は対象となる葬儀内容・葬儀社に条件があります。
            </p>
            <StaggerContainer className="divide-y divide-[#e8ddf4]">
              {[
                {
                  title: "区民葬儀制度とは",
                  desc: "葛飾区民が対象となる葬儀費用の助成制度です。区が指定する葬儀社が提供する定められたプランを利用することで、費用の一部を区が負担する仕組みです。",
                },
                {
                  title: "火葬式への適用",
                  desc: "区民葬儀の対象プランと火葬式の内容を組み合わせる場合、内容・条件によって適用できるかが変わります。稲垣屋葬儀店では区民葬儀に対応しておりますので、まずはご相談ください。",
                },
                {
                  title: "事前確認のお勧め",
                  desc: "区民葬儀の申請には期限やルールがあります。いざというときに適切に利用できるよう、事前に葬儀社へ確認しておくことをお勧めします。",
                },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="py-6">
                    <h3 className="text-[#312852] text-base tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>
                      {item.title}
                    </h3>
                    <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeInUp>

          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">NOTES</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              費用に関する注意点
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp className="mb-16">
            <StaggerContainer className="divide-y divide-[#e8ddf4]">
              {[
                {
                  title: "宗教者費用は含まれないことが多い",
                  desc: "火葬式プランの基本費用には、宗教者（僧侶など）への費用は含まれないことが一般的です。お布施・お車代・御膳料はご遺族からお寺へ直接お支払いいただきます。",
                },
                {
                  title: "安置日数による費用変動",
                  desc: "火葬場の空き状況によっては、安置期間が延びることがあります。安置日数が増えると費用が追加されるケースもありますので、見積もりの際にご確認ください。",
                },
                {
                  title: "深夜・早朝の搬送",
                  desc: "深夜・早朝・休日のご逝去の場合、搬送費用に割増料金が発生する場合があります。稲垣屋葬儀店では事前に明確にご説明します。",
                },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="py-6">
                    <h3 className="text-[#312852] text-base tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>
                      {item.title}
                    </h3>
                    <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeInUp>

          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              よくあるご質問
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-16">
            {faqItems.map((faq) => (
              <StaggerItem key={faq.question}>
                <div className="py-7">
                  <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-2">Q</p>
                  <h3 className="text-[#312852] text-base tracking-wide mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                    {faq.question}
                  </h3>
                  <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-2">A</p>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{faq.answer}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp>
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-5">RELATED PAGES</p>
            <div className="divide-y divide-[#e8ddf4]">
              {[
                { href: "/plans/cremation", label: "火葬式（直葬）プランのご案内" },
                { href: "/plans/cremation/flow", label: "火葬式・直葬の流れ" },
                { href: "/plans/cremation/difference", label: "火葬式と直葬の違い" },
                { href: "/plans/kumin-funeral", label: "葛飾区 区民葬儀について" },
                { href: "/plans/family-funeral/cost", label: "家族葬の費用と内訳" },
                { href: "/consultation", label: "事前相談のご案内" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between py-4 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group"
                >
                  {link.label}
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
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
              事前相談・お見積もりは無料です。強引な勧誘は一切行いません。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 group w-full sm:w-auto justify-center"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                <MessageCircle size={17} />お問い合わせ<ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
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
