import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import Breadcrumb from "../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "葛飾区の葬儀プラン｜家族葬・一日葬・火葬式・区民葬儀｜稲垣屋葬儀店",
  description:
    "稲垣屋葬儀店の葬儀プランをご紹介。家族葬・一日葬・火葬式・一般葬・区民葬儀から、ご状況に合ったプランをご提案します。葛飾区の区民葬儀取扱店。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/plans" },
};

const plans = [
  {
    num: "01",
    title: "家族葬",
    en: "Family Funeral",
    href: "/plans/family-funeral",
    desc: "ご家族やごく親しい方だけで、心静かにお別れできる葬儀スタイルです。参列者を絞ることで、故人との最後の時間をゆっくりとお過ごしいただけます。葛飾区内でも近年最も選ばれる形式の一つです。通夜・告別式を執り行い、大切な方を丁寧に見送ります。",
    points: [
      "少人数でのお別れ（10〜30名程度）",
      "故人との時間をゆっくりと過ごせる",
      "ご遺族の負担を抑えながら丁寧な式",
      "訃報の範囲をご家族でコントロールできる",
    ],
    recommended: "ご家族だけで静かにお別れしたい方",
  },
  {
    num: "02",
    title: "一日葬",
    en: "One-Day Funeral",
    href: "/plans/oneday-funeral",
    desc: "お通夜を省略し、告別式と火葬を一日で行うスタイルです。ご遺族の体力的・精神的な負担を軽減しながら、きちんとした告別式でお別れできます。遠方の親族が集まりにくいご家族や、ご高齢の方が多いご家族にも多く選ばれています。",
    points: [
      "お通夜なしで一日に完結",
      "ご遺族の体力的・精神的な負担を軽減",
      "費用を家族葬より抑えられる場合がある",
      "告別式でしっかりとしたお別れができる",
    ],
    recommended: "日程や体力的な負担を軽くしたい方",
  },
  {
    num: "03",
    title: "火葬式",
    en: "Cremation Only",
    href: "/plans/cremation",
    desc: "お通夜・告別式を行わず、火葬のみのシンプルな葬儀です（直葬とも呼ばれます）。ごく近しい方だけで静かにお見送りされたい方に選ばれています。シンプルな形式ではありますが、故人を大切にお送りすることは変わりません。稲垣屋葬儀店では心を込めて対応いたします。",
    points: [
      "最もシンプルな葬儀形式",
      "費用を最小限に抑えられる",
      "近しい方だけで静かにお別れ",
      "体力的・時間的な制約がある場合にも対応",
    ],
    recommended: "シンプルに、でも心を込めてお見送りしたい方",
  },
  {
    num: "04",
    title: "一般葬",
    en: "Traditional Funeral",
    href: "/plans/general-funeral",
    desc: "お通夜・告別式を執り行う伝統的な葬儀形式です。故人と縁のあった多くの方々にお集まりいただき、きちんとしたお別れができます。社会的なつながりが広い方、地域・職場関係者へのご挨拶も兼ねてしっかりした式を望む方に向いています。",
    points: [
      "お通夜・告別式を執り行う",
      "多くの参列者をお迎えできる",
      "伝統的な形式での丁寧な式",
      "地域・職場・交友関係への対外的な意味も持つ",
    ],
    recommended: "交友関係が広く、多くの方にお別れの場を設けたい方",
  },
  {
    num: "05",
    title: "区民葬儀",
    en: "Kuminso-gi",
    href: "/plans/kumin-funeral",
    desc: "葛飾区が設けた制度で、葛飾区民の方が利用できる葬儀サービスです。稲垣屋葬儀店は葛飾区が指定する区民葬儀取扱店として認定されています。制度の範囲内で費用を抑えながらも、丁寧な葬儀を実現できます。申請手続きもサポートします。",
    points: [
      "葛飾区民の方が対象",
      "区民葬儀制度で費用を抑えられる",
      "稲垣屋葬儀店は葛飾区指定取扱店",
      "申請手続きもサポートします",
    ],
    recommended: "葛飾区民で費用を抑えた葬儀をご希望の方",
  },
];

const howToChoose = [
  {
    title: "参列者の人数から考える",
    body: "ごく近しい家族だけの場合は家族葬・火葬式が向いています。遠方の親族や故人の知人・職場関係者など多くの方に参列していただく場合は一般葬が適しています。参列者をある程度絞れるなら家族葬・一日葬という選択もあります。",
  },
  {
    title: "日程・体力的な負担から考える",
    body: "高齢のご家族が多い・遠方に住んでいるなど、体力的・時間的な制約がある場合は、一日葬や火葬式がご遺族の負担を軽減できます。一方で「しっかりお別れしたい」「二日間かけて丁寧に見送りたい」というご希望があれば、家族葬・一般葬が向いています。",
  },
  {
    title: "費用から考える",
    body: "費用を最小限に抑えたい場合は火葬式（直葬）が選択肢になります。葛飾区民の方には区民葬儀制度の活用もご検討ください。いずれの場合も、事前相談（無料）でご希望に合わせた概算をご提示します。費用の詳細は葬儀費用ページもご参照ください。",
  },
  {
    title: "迷ったらご相談ください",
    body: "どのプランが合うか分からない場合は、稲垣屋葬儀店の事前相談をご利用ください。ご家族の状況・ご希望・費用・故人との関係性などをお聞きして、最適なプランをご提案します。事前相談は無料で、強引な勧誘は一切行いません。",
  },
];

const comparison = [
  {
    item: "お通夜",
    family: "あり",
    oneday: "なし",
    cremation: "なし",
    general: "あり",
    kumin: "相談",
  },
  {
    item: "告別式",
    family: "あり",
    oneday: "あり",
    cremation: "なし",
    general: "あり",
    kumin: "相談",
  },
  {
    item: "参列者規模",
    family: "少人数",
    oneday: "少〜中規模",
    cremation: "最小限",
    general: "中〜大規模",
    kumin: "要相談",
  },
  {
    item: "費用感",
    family: "中",
    oneday: "中〜低",
    cremation: "低",
    general: "高",
    kumin: "区規定",
  },
  {
    item: "向いている方",
    family: "静かに見送りたい方",
    oneday: "負担を減らしたい方",
    cremation: "シンプルに送りたい方",
    general: "交友関係が広い方",
    kumin: "葛飾区民の方",
  },
];

const faqItems = [
  {
    q: "家族葬と一般葬はどう違いますか？",
    a: "家族葬は参列者をご家族や親しい方に限定し、少人数で静かにお別れする形式です。一般葬は故人と縁のあった多くの方にお集まりいただく伝統的な形式です。参列者の規模・費用・ご遺族の負担など、さまざまな点で異なります。ご状況をお聞きして最適な形式をご提案しますので、まずはご相談ください。",
  },
  {
    q: "プランは途中で変更できますか？",
    a: "打ち合わせ前であれば変更が可能です。ご安置後の打ち合わせで最終的な形式を決めていきますので、事前に決めていても状況に応じて柔軟に対応します。ご不安な点はお気軽にご相談ください。",
  },
  {
    q: "区民葬儀は葛飾区以外の方は使えませんか？",
    a: "区民葬儀制度は葛飾区民の方が対象です。葛飾区外の方は対象外となりますが、その他の葬儀プランからご状況に合ったものをご提案します。",
  },
  {
    q: "まだ元気なうちにプランを決めておくことはできますか？",
    a: "はい、事前に相談・検討していただくことを推奨しています。「もしものとき」に備えて葬儀の形式や希望を事前に整理しておくと、いざというときに慌てずに対応できます。事前相談は無料ですので、お気軽にお問い合わせください。",
  },
];

export default function PlansPage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "葛飾区の葬儀プラン｜家族葬・一日葬・火葬式・区民葬儀｜稲垣屋葬儀店",
    description:
      "稲垣屋葬儀店の葬儀プランをご紹介。家族葬・一日葬・火葬式・一般葬・区民葬儀から、ご状況に合ったプランをご提案します。",
    url: "https://www.inagakiyasougiten.com/plans",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com/" },
        { "@type": "ListItem", position: 2, name: "葬儀プラン", item: "https://www.inagakiyasougiten.com/plans" },
      ],
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "葛飾区の葬儀プラン一覧｜稲垣屋葬儀店",
    itemListElement: plans.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.title,
      url: `https://www.inagakiyasougiten.com${p.href}`,
      description: p.recommended,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <PageHero
        title="葬儀プラン"
        subtitle="ご家族のご希望に合わせた多様なプランをご用意しています"
        en="FUNERAL PLANS"
      />
      <Breadcrumb items={[{ label: "葬儀プラン" }]} />

      {/* このページでわかること */}
      <section className="py-12 md:py-16 bg-white border-b border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-4">ON THIS PAGE</p>
            <h2
              className="text-[#312852] text-xl md:text-2xl tracking-[0.06em] mb-6"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              このページでわかること
            </h2>
            <ul className="divide-y divide-[#e8ddf4]">
              {[
                "稲垣屋葬儀店が用意している5つの葬儀プランの特徴と違い",
                "状況・参列者数・費用感からのプランの選び方",
                "5プランを通夜・告別式・費用感・向いている方で比較した一覧表",
                "各プランの詳細ページへのリンクと費用ページへの案内",
              ].map((text) => (
                <li key={text} className="flex items-start gap-3 py-3">
                  <span className="w-1.5 h-1.5 bg-[#c9a55a] rounded-full shrink-0 mt-2" />
                  <span className="text-[#4a4a4a] text-sm leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </FadeInUp>
        </div>
      </section>

      {/* 5つのプラン */}
      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">PLANS</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              5つの葬儀プラン
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
            <p className="text-[#4a4a4a] mt-5 text-base md:text-lg leading-loose max-w-2xl">
              稲垣屋葬儀店では、ご家族のご希望・ご状況に合わせた5つの葬儀プランをご用意しています。どのプランが合うか迷っている場合も、まずはお気軽にご相談ください。事前相談は無料で、強引な勧誘は一切行いません。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-20">
            {plans.map((plan) => (
              <StaggerItem key={plan.num}>
                <div className="py-10">
                  <div className="flex items-start gap-6">
                    <span
                      className="text-[#c9a55a] text-xs tracking-[0.2em] shrink-0 pt-1.5 w-6"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      {plan.num}
                    </span>
                    <div className="flex-1">
                      <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-1">{plan.en}</p>
                      <h3
                        className="text-[#312852] text-2xl md:text-3xl tracking-wide mb-3"
                        style={{ fontFamily: "var(--font-mincho)" }}
                      >
                        {plan.title}
                      </h3>
                      <p className="text-[#4a4a4a] text-base leading-loose mb-4">{plan.desc}</p>
                      <ul className="space-y-1.5 mb-4">
                        {plan.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-2.5 text-sm text-[#4a4a4a]">
                            <span className="w-1 h-1 bg-[#9278be] rounded-full shrink-0 mt-2" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                      <p className="text-[#7560a0] text-sm mb-4">
                        <span className="text-[#c9a55a] mr-2">◇</span>
                        こんな方におすすめ：{plan.recommended}
                      </p>
                      <Link
                        href={plan.href}
                        className="inline-flex items-center gap-1.5 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group"
                      >
                        詳細を見る
                        <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* プランの選び方 */}
      <section className="py-16 md:py-24 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">HOW TO CHOOSE</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              プランの選び方
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
            <p className="text-[#4a4a4a] mt-5 text-sm leading-relaxed max-w-2xl">
              葬儀のプランは、参列者の人数・ご遺族の負担・費用・故人のご希望などによって選ぶのが一般的です。どの視点から考えるべきかを整理しました。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {howToChoose.map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3
                    className="text-[#312852] text-base tracking-wide mb-3"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-sm leading-loose">{item.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 比較表 */}
      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COMPARISON</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              プラン比較表
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
            <p className="text-[#4a4a4a] mt-5 text-sm leading-relaxed">
              5つのプランを主な項目で比較できます。費用感はプランの内容・式場・参列者数によって異なります。
            </p>
          </FadeInUp>

          <FadeInUp>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-[#312852]">
                    <th className="text-left py-3 pr-4 text-[#7560a0] text-xs tracking-wide font-normal w-28">比較項目</th>
                    <th className="text-center py-3 px-3 text-[#312852] font-medium" style={{ fontFamily: "var(--font-mincho)" }}>家族葬</th>
                    <th className="text-center py-3 px-3 text-[#312852] font-medium" style={{ fontFamily: "var(--font-mincho)" }}>一日葬</th>
                    <th className="text-center py-3 px-3 text-[#312852] font-medium" style={{ fontFamily: "var(--font-mincho)" }}>火葬式</th>
                    <th className="text-center py-3 px-3 text-[#312852] font-medium" style={{ fontFamily: "var(--font-mincho)" }}>一般葬</th>
                    <th className="text-center py-3 px-3 text-[#312852] font-medium" style={{ fontFamily: "var(--font-mincho)" }}>区民葬儀</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e8ddf4]">
                  {comparison.map((row) => (
                    <tr key={row.item} className="hover:bg-[#faf7fd] transition-colors">
                      <td className="py-3.5 pr-4 text-[#7560a0] text-xs">{row.item}</td>
                      <td className="text-center py-3.5 px-3 text-[#4a4a4a]">{row.family}</td>
                      <td className="text-center py-3.5 px-3 text-[#4a4a4a]">{row.oneday}</td>
                      <td className="text-center py-3.5 px-3 text-[#4a4a4a]">{row.cremation}</td>
                      <td className="text-center py-3.5 px-3 text-[#4a4a4a]">{row.general}</td>
                      <td className="text-center py-3.5 px-3 text-[#4a4a4a]">{row.kumin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[#9278be] text-xs mt-4 leading-relaxed">
              ※費用感はプランの内容・式場・参列者数・宗教者費用などによって異なります。「低」「中」「高」は相対的な目安です。事前相談（無料）でご希望に合わせた詳細なお見積もりをご提示します。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* まず費用が気になる方へ */}
      <section className="py-12 md:py-16 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ABOUT COST</p>
            <h2
              className="text-[#312852] text-xl md:text-2xl tracking-[0.06em] mb-4"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              まず費用が気になる方へ
            </h2>
            <p className="text-[#4a4a4a] text-sm leading-loose mb-5 max-w-2xl">
              「どのプランがよいか、費用がどのくらいかかるか」を知りたい方は、葬儀費用のページで各プランの費用の考え方と内訳をご確認いただけます。
            </p>
            <Link
              href="/cost"
              className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group"
            >
              葬儀費用について詳しく見る
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
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
              葬儀プランに関するよくある質問
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
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
              どのプランが合うか分からない方へ
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8 max-w-xl mx-auto">
              ご家族の状況やご希望をお聞きして、最適なプランをご提案します。事前相談は無料、強引な勧誘は一切行いません。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 group w-full sm:w-auto justify-center"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                <MessageCircle size={17} />
                お問い合わせ・事前相談
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
