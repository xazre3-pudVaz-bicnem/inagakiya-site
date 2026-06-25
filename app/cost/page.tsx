import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import Breadcrumb from "../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";
import RelatedColumns from "../components/RelatedColumns";

export const metadata: Metadata = {
  title: "葛飾区の葬儀費用｜家族葬・一日葬・火葬式の費用目安｜稲垣屋葬儀店",
  description:
    "葛飾区の葬儀費用について解説。家族葬・一日葬・火葬式・区民葬儀の費用目安と内訳、追加費用の注意点、お見積もりのご案内。稲垣屋葬儀店は事前に費用を明示します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/cost" },
};

const costComponents = [
  {
    title: "葬儀基本費用",
    en: "Basic Cost",
    desc: "搬送・安置・棺・骨壷・式場使用・スタッフ人件費など、葬儀を執り行うために必要な基本的な費用です。プランや内容によって異なります。",
  },
  {
    title: "式場・火葬場使用料",
    en: "Venue & Cremation",
    desc: "葬儀式場や火葬場の使用料です。葛飾区内の公立斎場と民間式場では費用が異なります。区民葬儀制度を利用する場合、斎場使用料が減額される場合があります。",
  },
  {
    title: "搬送・安置費用",
    en: "Transport & Rest",
    desc: "病院・施設・ご自宅からの遺体搬送費用と、安置中の管理費用です。搬送距離・時間帯・安置日数によって変わります。",
  },
  {
    title: "飲食費",
    en: "Food & Hospitality",
    desc: "通夜振る舞いや告別式後の会食など、参列者への飲食接待にかかる費用です。参列者の人数に応じて変わります。家族葬・火葬式では不要またはごく少額になることが多いです。",
  },
  {
    title: "返礼品費用",
    en: "Return Gifts",
    desc: "参列者へのお礼品（会葬返礼品・香典返し）の費用です。参列者の人数・品物の内容によって異なります。家族葬・火葬式では少なくなる傾向があります。",
  },
  {
    title: "宗教者への謝礼",
    en: "Religious Offering",
    desc: "お坊さんや神父・牧師など宗教者への謝礼（お布施・読経料）です。宗教・宗派・依頼先によって異なります。目安をお伝えすることは可能ですが、詳細はご依頼する宗教者にご確認ください。無宗教葬の場合は不要です。",
  },
  {
    title: "その他（遺影・生花・位牌など）",
    en: "Others",
    desc: "遺影写真の作成費・生花祭壇・供花・弔電・位牌・各種手続き費用などです。内容に応じてプランに含まれる場合と別途かかる場合があります。事前に明確にご提示します。",
  },
];

const costFactors = [
  {
    title: "参列者の人数",
    body: "参列者の人数が多くなるほど、式場の規模・飲食費・返礼品費が増えます。家族葬・一日葬・火葬式のように参列者を絞ると、これらの費用を抑えられます。",
  },
  {
    title: "葬儀の形式（プラン）",
    body: "通夜・告別式を行う形式（家族葬・一般葬）と、告別式のみ（一日葬）、火葬のみ（火葬式）では費用規模が大きく異なります。形式の選択が費用に最も大きく影響します。",
  },
  {
    title: "式場の選択",
    body: "葛飾区内の公立斎場と民間の式場では費用が異なります。区民葬儀制度を利用する場合、指定式場での費用が変わることがあります。",
  },
  {
    title: "宗教者の有無・宗派",
    body: "仏式・神式・キリスト教式では宗教者への謝礼が発生します。宗派や依頼先によっても金額が異なります。無宗教葬の場合は宗教者費用がかかりません。",
  },
  {
    title: "安置日数",
    body: "ご安置の日数が長くなると、保全管理の費用が加算されます。日程が決まれば早めに火葬場・式場を手配することが重要です。",
  },
];

const planCostPages = [
  {
    href: "/cost/cremation",
    title: "火葬式の費用",
    en: "Cremation Only",
    desc: "お通夜・告別式を行わず、火葬のみを行うシンプルな葬儀。葬儀形式の中で費用を最小限に抑えられます。",
    level: "費用水準：低",
  },
  {
    href: "/cost/oneday-funeral",
    title: "一日葬の費用",
    en: "One-Day Funeral",
    desc: "お通夜を省略し、告別式と火葬を一日で行います。家族葬より費用を抑えながら、きちんとした告別式でお別れできます。",
    level: "費用水準：中〜低",
  },
  {
    href: "/cost/family-funeral",
    title: "家族葬の費用",
    en: "Family Funeral",
    desc: "ご家族やごく親しい方だけで行う小規模な葬儀。一般葬より費用を抑えながら、心のこもったお別れができます。",
    level: "費用水準：中",
  },
  {
    href: "/cost/kumin-funeral",
    title: "区民葬儀の費用",
    en: "Kuminso-gi",
    desc: "葛飾区民の方が利用できる区の制度。稲垣屋葬儀店は葛飾区指定の取扱店です。制度の範囲内で費用を抑えた葬儀が可能です。",
    level: "費用水準：区の規定による",
  },
];

const faqItems = [
  {
    q: "葬儀費用の見積もりは無料ですか？",
    a: "はい、お見積もりは無料です。事前相談の際にも概算をお伝えすることが可能です。費用は事前に明確にご提示しますので、安心してご相談ください。",
  },
  {
    q: "葬儀費用に含まれるものは何ですか？",
    a: "葬儀プランによって異なりますが、一般的には搬送・安置・棺・骨壷・式場使用料・スタッフ人件費などが含まれます。祭壇・生花・返礼品・飲食費・宗教者への謝礼などは別途かかる場合があります。稲垣屋葬儀店では事前にすべての費用を明確にご提示します。",
  },
  {
    q: "葛飾区民は区民葬儀制度を使えますか？",
    a: "はい、葛飾区民の方は葛飾区の区民葬儀制度をご利用いただけます。稲垣屋葬儀店は葛飾区が指定する区民葬儀取扱店として、この制度の詳細からお申し込みまでサポートします。",
  },
  {
    q: "後から追加費用が発生することはありますか？",
    a: "稲垣屋葬儀店では、費用を事前に明確にご提示し、急な追加費用が発生しないよう丁寧にご説明します。ご希望による変更・追加の場合は事前にご説明してから対応します。",
  },
  {
    q: "費用を抑えるにはどうすればよいですか？",
    a: "参列者を絞った家族葬・一日葬・火葬式を選ぶこと、葛飾区民の方は区民葬儀制度を活用すること、飲食費・返礼品を必要最小限にすることなどが費用を抑えるポイントです。詳しくは「費用を抑えるための考え方」ページでご説明しています。",
  },
];

export default function CostPage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "葛飾区の葬儀費用｜家族葬・一日葬・火葬式の費用目安｜稲垣屋葬儀店",
    description:
      "葛飾区の葬儀費用について解説。家族葬・一日葬・火葬式・区民葬儀の費用目安と内訳、追加費用の注意点、お見積もりのご案内。",
    url: "https://www.inagakiyasougiten.com/cost",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com/" },
        { "@type": "ListItem", position: 2, name: "葬儀費用", item: "https://www.inagakiyasougiten.com/cost" },
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
    name: "葛飾区の葬儀費用 詳細ガイド",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "家族葬の費用", url: "https://www.inagakiyasougiten.com/cost/family-funeral" },
      { "@type": "ListItem", position: 2, name: "一日葬の費用", url: "https://www.inagakiyasougiten.com/cost/oneday-funeral" },
      { "@type": "ListItem", position: 3, name: "火葬式の費用", url: "https://www.inagakiyasougiten.com/cost/cremation" },
      { "@type": "ListItem", position: 4, name: "区民葬儀の費用", url: "https://www.inagakiyasougiten.com/cost/kumin-funeral" },
      { "@type": "ListItem", position: 5, name: "葬儀費用の内訳", url: "https://www.inagakiyasougiten.com/cost/breakdown" },
      { "@type": "ListItem", position: 6, name: "式場・火葬場の費用", url: "https://www.inagakiyasougiten.com/cost/facility-cost" },
      { "@type": "ListItem", position: 7, name: "追加費用について", url: "https://www.inagakiyasougiten.com/cost/additional" },
      { "@type": "ListItem", position: 8, name: "費用を抑えるには", url: "https://www.inagakiyasougiten.com/cost/reduce" },
      { "@type": "ListItem", position: 9, name: "お見積もり", url: "https://www.inagakiyasougiten.com/cost/estimate" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />

      <PageHero
        title="葬儀費用"
        subtitle="葛飾区での葬儀費用について、丁寧にご案内します"
        en="FUNERAL COST"
      />
      <Breadcrumb items={[{ label: "葬儀費用" }]} />

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
                "葬儀費用の主な内訳（基本費用・式場費・火葬料・飲食費・返礼品・宗教者謝礼など）",
                "費用が変わる主な要因（参列者数・形式・宗教者の有無など）",
                "プラン別（火葬式・一日葬・家族葬・区民葬儀）の費用の考え方",
                "費用を抑えるための考え方と事前見積もりについて",
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

      {/* 費用について知っておきたいこと */}
      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ABOUT COST</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              葬儀費用について知っておきたいこと
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp className="mb-16">
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose">
              <p>
                葬儀の費用は、選ぶプランや規模・内容によって大きく異なります。「費用が分からないまま進めてしまった」という後悔がないよう、稲垣屋葬儀店では事前に費用を明確にご提示することを大切にしています。
              </p>
              <p>
                葬儀費用は大きく、葬儀基本費用・式場費用・搬送費用・宗教者謝礼・飲食費・返礼品などに分かれます。同じ「家族葬」でも、式場の有無・参列者の人数・宗教的な儀式の内容によって費用は異なります。
              </p>
              <p>
                葛飾区民の方には「区民葬儀制度」があり、制度の範囲内で葬儀を行うことができます。事前相談（無料）でご状況をお聞きし、ご希望に合わせた費用の概算をご提示します。
              </p>
            </div>
          </FadeInUp>

          {/* 費用の主な内訳 */}
          <FadeInUp className="mb-8">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COST BREAKDOWN</p>
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              葬儀費用の主な内訳
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-6">
            {costComponents.map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-1">{item.en}</p>
                  <h3 className="text-[#312852] text-lg tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-sm leading-loose">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp>
            <p className="text-[#7560a0] text-xs leading-loose border-t border-[#e8ddf4] pt-5">
              ※ 費用は葬儀の内容・規模・地域・時期によって異なります。葛飾区民の方は区民葬儀制度もご活用いただけます。詳細は事前相談またはお問い合わせでご確認ください。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* 費用が変わる主な要因 */}
      <section className="py-16 md:py-24 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COST FACTORS</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              費用が変わる主な要因
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
            <p className="text-[#4a4a4a] mt-5 text-sm leading-relaxed max-w-2xl">
              葬儀費用は一律ではなく、さまざまな要因によって変わります。あらかじめ把握しておくことで、ご予算に合わせた計画ができます。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {costFactors.map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3
                    className="text-[#312852] text-base tracking-wide mb-2"
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

      {/* 費用を抑えるための考え方 */}
      <section className="py-12 md:py-16 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">REDUCE COST</p>
            <h2 className="text-[#312852] text-xl md:text-2xl tracking-[0.06em] mb-4" style={{ fontFamily: "var(--font-mincho)" }}>
              費用を抑えるための考え方
            </h2>
            <p className="text-[#4a4a4a] text-sm leading-loose mb-5 max-w-2xl">
              参列者を絞った形式を選ぶ・区民葬儀制度を活用する・飲食費や返礼品を必要最小限にするなど、費用を抑えながらも心のこもった葬儀を実現する方法があります。詳しくは専用ページをご覧ください。
            </p>
            <Link
              href="/cost/reduce"
              className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group"
            >
              費用を抑えるための考え方を見る
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* プラン別費用 */}
      <section className="py-16 md:py-24 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">BY PLAN</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              プラン別費用の考え方
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
            <p className="text-[#4a4a4a] mt-5 text-sm leading-relaxed">
              各プランの費用の考え方と詳細をご案内します。費用の目安はプランの内容・規模によって異なりますので、事前相談でご確認ください。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {planCostPages.map((plan) => (
              <StaggerItem key={plan.title}>
                <Link href={plan.href} className="flex items-start justify-between gap-6 py-8 group">
                  <div>
                    <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-1">{plan.en}</p>
                    <h3
                      className="text-[#312852] text-xl tracking-wide mb-2 group-hover:text-[#5c4a80] transition-colors"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      {plan.title}
                    </h3>
                    <p className="text-[#4a4a4a] text-sm leading-relaxed mb-2">{plan.desc}</p>
                    <p className="text-[#7560a0] text-xs">{plan.level}</p>
                  </div>
                  <ChevronRight size={18} className="text-[#b8a0d8] group-hover:text-[#5c4a80] group-hover:translate-x-1 transition-all shrink-0 mt-2" />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* お見積もりについて */}
      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-8">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ESTIMATE</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              お見積もりについて
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp>
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose mb-6">
              <p>
                稲垣屋葬儀店では、事前見積もりを無料で承っています。ご相談の際には、ご状況・ご希望をお聞きした上で、費用の内訳を一つひとつ丁寧にご説明します。
              </p>
              <p>
                「後から追加費用が発生するのでは」というご不安を持つ方も多くいらっしゃいます。稲垣屋葬儀店では、事前に費用を明確にご提示し、ご依頼いただく前に内容を十分にご確認いただけます。ご希望による変更・追加がある場合も、事前にご説明してから対応します。
              </p>
            </div>
            <ul className="space-y-2.5 mb-6">
              {[
                "事前見積もりは完全無料",
                "費用の内訳を一つひとつ明細でご説明",
                "ご依頼前に費用を十分ご確認いただけます",
                "ご希望による変更・追加は事前説明の上で対応",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#9278be] rounded-full shrink-0 mt-2" />
                  <span className="text-[#4a4a4a] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </FadeInUp>
        </div>
      </section>

      {/* 区民葬儀 */}
      <section className="py-16 md:py-24 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FOR KATSUSHIKA RESIDENTS</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              葛飾区民葬儀制度について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp>
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose mb-6">
              <p>
                葛飾区民の方は、葛飾区が設ける「区民葬儀」制度をご利用いただくことで、費用を抑えた葬儀が可能です。稲垣屋葬儀店は葛飾区が指定する区民葬儀取扱店として認定されており、この制度のご利用をサポートしています。
              </p>
              <p>
                区民葬儀の対象範囲・費用の詳細は葛飾区の規定に基づくため変更される場合があります。「区民葬儀を使いたい」という方は、ご相談の際にお申し出ください。申請手続きのサポートも承ります。
              </p>
            </div>
            <Link
              href="/plans/kumin-funeral"
              className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group"
            >
              区民葬儀について詳しく見る
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
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              費用に関するよくある質問
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

      {/* 関連コラム */}
      <section className="py-14 md:py-20 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-7">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COLUMN</p>
            <h2 className="text-[#312852] text-xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              関連コラム
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-4" />
          </FadeInUp>
          <RelatedColumns slugs={["funeral-cost-katsushika", "funeral-cost-breakdown", "funeral-additional-cost", "funeral-estimate-check", "how-to-reduce-funeral-cost"]} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              費用についてご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              お見積もりは無料です。ご状況に合わせて丁寧にご説明します。
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
