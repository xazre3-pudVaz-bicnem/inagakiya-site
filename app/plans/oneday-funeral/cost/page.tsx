import type { Metadata } from "next";
import PageHero from "../../../components/PageHero";
import Breadcrumb from "../../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "一日葬の費用と内訳｜葛飾区 稲垣屋葬儀店",
  description:
    "葛飾区での一日葬の費用と内訳。何が含まれるか・含まれないか・費用を左右する要素を稲垣屋葬儀店が丁寧にご説明します。見積もり無料。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/plans/oneday-funeral/cost" },
};

const faqItems = [
  {
    question: "一日葬の費用は家族葬より安いですか？",
    answer:
      "お通夜がない分、通夜振る舞いの飲食費や会場の追加使用料などがかからない場合があります。ただし告別式・宗教者費用・火葬費用などは同様にかかります。一概に安いとは言えませんので、事前にお見積もりをご確認ください。",
  },
  {
    question: "一日葬でも火葬費用は別ですか？",
    answer:
      "火葬場の利用料は葬儀費用とは別に発生する場合があります。葛飾区内の火葬場（四ツ木斎場など）の利用料は区民・区外で異なります。詳細はお見積もりの際にご確認ください。",
  },
  {
    question: "お見積もりはいつお願いするのがよいですか？",
    answer:
      "できれば事前（生前）にご相談いただくことをお勧めします。いざというときに慌てることなく、じっくりと内容を確認・比較できます。もちろんご逝去後のご相談にも迅速に対応いたします。",
  },
  {
    question: "追加費用が発生することはありますか？",
    answer:
      "ご要望によっては、当初の見積もりに含まれない項目が追加される場合があります。たとえば供花の追加・霊柩車のグレード変更・飲食の追加などです。稲垣屋葬儀店では事前に明細を丁寧にご説明し、ご了解のうえで進めます。",
  },
];

const costItems = [
  {
    title: "葬儀基本費用",
    desc: "葬儀一式に必要な基本的な費用です。棺・骨壺・祭壇設営・搬送・スタッフ人件費・事務手続きなどが含まれます。葬儀社によって何が「基本費用」に含まれるかが異なるため、見積もり時に内訳をご確認ください。",
  },
  {
    title: "式場使用料",
    desc: "告別式を執り行う会場の使用料です。自社式場・公営斎場・寺院の会場など、どこで行うかによって金額が大きく変わります。一日葬ではお通夜の二日目使用料はかかりません。",
  },
  {
    title: "宗教者費用",
    desc: "僧侶などの宗教者を手配する場合の費用です。お布施・お車代・御膳料などが含まれます。菩提寺がある場合はお寺に直接お支払いいただきます。稲垣屋葬儀店で宗教者を手配することも可能です。",
  },
  {
    title: "飲食・返礼品費用",
    desc: "告別式後の精進落とし（会食）や参列者への返礼品の費用です。一日葬ではお通夜の会食（通夜振る舞い）がない分、この費用を抑えられる場合があります。参列人数によって変動します。",
  },
  {
    title: "火葬費用",
    desc: "火葬場の利用料です。葛飾区民が区内の火葬場を利用する場合と、区外の方・区外の火葬場を利用する場合では金額が異なります。葬儀費用と別途計上されることが多い項目です。",
  },
];

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "一日葬の費用と内訳｜葛飾区 稲垣屋葬儀店",
  description:
    "葛飾区での一日葬の費用と内訳。何が含まれるか・含まれないか・費用を左右する要素を稲垣屋葬儀店が丁寧にご説明します。見積もり無料。",
  url: "https://www.inagakiyasougiten.com/plans/oneday-funeral/cost",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "一日葬", item: "https://www.inagakiyasougiten.com/plans/oneday-funeral" },
      { "@type": "ListItem", position: 3, name: "一日葬の費用と内訳", item: "https://www.inagakiyasougiten.com/plans/oneday-funeral/cost" },
    ],
  },
};

export default function OnedayFuneralCostPage() {
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
        title="一日葬の費用と内訳"
        subtitle="費用の構成と内訳をご説明します"
        en="COST OF ONE-DAY FUNERAL"
      />
      <Breadcrumb
        items={[
          { label: "葬儀プラン", href: "/plans" },
          { label: "一日葬", href: "/plans/oneday-funeral" },
          { label: "一日葬の費用" },
        ]}
      />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ABOUT COST</p>
            <h1 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              一日葬の費用と内訳
            </h1>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              一日葬の費用は、葬儀の内容・参列者数・会場・宗教者の有無・飲食の規模など、さまざまな要素によって変わります。インターネット上で目にする「一日葬○○万円〜」という表示には、含まれない項目があることも多く、最終的な費用は見積もりを取るまで確定しません。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              稲垣屋葬儀店では、費用の内訳をひとつひとつ丁寧にご説明します。わかりにくい項目についてもご遠慮なくご質問ください。強引な勧誘は一切行いません。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              以下では、一日葬の費用を構成する主な項目をご説明します。
            </p>
          </FadeInUp>

          <FadeInUp className="mt-16 mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COST ITEMS</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              費用を構成する主な項目
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
              葬儀社によって「基本プラン」に含まれる内容は異なります。稲垣屋葬儀店では、見積もりの際に含まれるものと含まれないものを明確にご説明します。
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-[#e8ddf4] px-6 py-6">
                <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-4">TYPICALLY INCLUDED</p>
                <p className="text-[#312852] text-base tracking-wide mb-4" style={{ fontFamily: "var(--font-mincho)" }}>含まれることが多い項目</p>
                <StaggerContainer className="divide-y divide-[#e8ddf4]">
                  {[
                    "ご遺体の搬送・安置",
                    "棺・骨壺・副葬品",
                    "祭壇設営・後飾り",
                    "スタッフ人件費",
                    "役所・死亡届などの手続き代行",
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
                    "飲食・返礼品",
                    "追加の供花・生花祭壇",
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
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COMPARISON</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              一日葬と二日葬の費用の違い
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp className="mb-16">
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-6">
              一日葬と、お通夜を含む二日間の葬儀（一般葬・家族葬）の費用の違いは、主にお通夜に関連する費用の有無にあります。具体的には以下の点が異なります。
            </p>
            <StaggerContainer className="divide-y divide-[#e8ddf4]">
              {[
                {
                  title: "通夜振る舞いの飲食費",
                  desc: "お通夜後の会食（通夜振る舞い）がないため、その分の飲食費が発生しません。参列者の人数が多い場合、この差は大きくなります。",
                },
                {
                  title: "会場の使用日数",
                  desc: "二日間の葬儀では式場を二日間使用するのに対し、一日葬は一日のみです。会場によっては日数分の使用料がかかるため、費用を抑えられる場合があります。",
                },
                {
                  title: "宗教者費用の考え方",
                  desc: "お通夜の読経・告別式の読経と、二回依頼する場合は費用が変わることもあります。一日葬では告別式のみとなります。",
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
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ESTIMATE</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              見積もり方法・事前相談の流れ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp className="mb-16">
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-6">
              稲垣屋葬儀店では、事前相談・お見積もりを無料で承っております。いざというときに慌てないよう、事前にご相談いただくことをお勧めします。
            </p>
            <StaggerContainer className="divide-y divide-[#e8ddf4]">
              {[
                { step: "STEP 01", title: "ご相談・ご連絡", desc: "お電話またはお問い合わせフォームからご連絡ください。ご要望をお聞きし、日程を調整します。" },
                { step: "STEP 02", title: "お打ち合わせ", desc: "ご希望の内容（参列者数・会場・宗教の有無など）をお聞きし、費用の概算をご提示します。" },
                { step: "STEP 03", title: "見積書のご提示", desc: "内訳を明示した見積書をご提示します。ご不明な点はご遠慮なくご質問ください。" },
                { step: "STEP 04", title: "ご検討・ご決定", desc: "強引な勧誘は一切行いません。じっくりとご検討いただき、ご家族でご決定ください。" },
              ].map((item) => (
                <StaggerItem key={item.step}>
                  <div className="flex items-start gap-6 py-6">
                    <div className="shrink-0 w-20 text-[#c9a55a] text-xs tracking-[0.2em] pt-0.5" style={{ fontFamily: "var(--font-mincho)" }}>
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[#312852] text-base tracking-wide mb-1" style={{ fontFamily: "var(--font-mincho)" }}>
                        {item.title}
                      </h3>
                      <p className="text-[#4a4a4a] text-sm leading-relaxed">{item.desc}</p>
                    </div>
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
                { href: "/plans/oneday-funeral", label: "一日葬プランのご案内" },
                { href: "/plans/oneday-funeral/flow", label: "一日葬の流れ" },
                { href: "/plans/oneday-funeral/merit", label: "一日葬のメリット・注意点" },
                { href: "/plans/family-funeral/cost", label: "家族葬の費用と内訳" },
                { href: "/plans/kumin-funeral", label: "葛飾区 区民葬儀について" },
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
