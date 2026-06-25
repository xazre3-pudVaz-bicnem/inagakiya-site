import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import Breadcrumb from "../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "葛飾区の葬儀費用｜費用の内訳・プラン別目安｜稲垣屋葬儀店",
  description:
    "葛飾区で葬儀の費用が気になる方へ。稲垣屋葬儀店が家族葬・一日葬・火葬式・区民葬儀の費用について丁寧にご説明します。費用の内訳・含まれるもの・含まれないものも明確にご案内。事前見積もり無料。",
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
    desc: "葬儀式場や火葬場の使用料です。葛飾区内の公立斎場（葛飾区斎場）と民間式場では費用が異なります。区民葬儀制度を利用する場合、斎場使用料が減額される場合があります。",
  },
  {
    title: "搬送・安置費用",
    en: "Transport & Rest",
    desc: "病院・施設・ご自宅からの遺体搬送費用と、安置中の管理費用です。搬送距離・時間帯・安置日数によって変わります。",
  },
  {
    title: "飲食・返礼品費用",
    en: "Food & Gifts",
    desc: "通夜・告別式での飲食接待費や、参列者へのお礼品（返礼品）の費用です。参列者の人数に応じて変わります。家族葬・火葬式の場合、不要またはごく少額になることが多いです。",
  },
  {
    title: "宗教者への謝礼",
    en: "Religious Offering",
    desc: "お坊さんや神父・牧師など宗教者への謝礼（お布施）です。宗教・宗派・依頼先によって異なり、目安をお伝えすることは可能ですが、詳細はご依頼する宗教者にご確認ください。無宗教葬の場合は不要です。",
  },
  {
    title: "その他（遺影・花など）",
    en: "Others",
    desc: "遺影写真の作成費・生花祭壇・供花・弔電・位牌・各種手続き費用など。内容に応じてプランに含まれる場合と別途かかる場合があります。",
  },
];

const plans = [
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

export default function CostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="葬儀費用"
        subtitle="葛飾区での葬儀費用について、丁寧にご案内します"
        en="FUNERAL COST"
      />
      <Breadcrumb items={[{ label: "葬儀費用" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ABOUT COST</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              葬儀費用について知っておきたいこと
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp className="mb-12">
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose">
              <p>
                葬儀の費用は、選ぶプランや規模・内容によって大きく異なります。「費用が分からないまま進めてしまった」という後悔がないよう、稲垣屋葬儀店では事前に費用を明確にご提示することを大切にしています。
              </p>
              <p>
                葬儀費用は大きく、葬儀基本費用・式場費用・搬送費用・宗教者謝礼・飲食費・返礼品などに分かれます。同じ「家族葬」でも、式場の有無・参列者の人数・宗教的な儀式の内容によって費用は異なります。また、葛飾区民の方には「区民葬儀制度」があり、一定の費用の範囲内で葬儀を行うことができます。
              </p>
              <p>
                事前相談（無料）でご状況をお聞きし、ご希望に合わせた費用の概算をご提示します。「いくらかかるか不安」という方も、まずはお気軽にご相談ください。
              </p>
            </div>
          </FadeInUp>

          <FadeInUp className="mb-8">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COST BREAKDOWN</p>
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              葬儀費用の内訳
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

      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">BY PLAN</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              プラン別の費用について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
            <p className="text-[#4a4a4a] mt-5 text-sm leading-relaxed">
              各プランの費用の考え方と詳細をご案内します。費用の目安はプランの内容・規模によって異なりますので、事前相談でご確認ください。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {plans.map((plan) => (
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
