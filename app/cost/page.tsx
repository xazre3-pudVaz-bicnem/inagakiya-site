import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import Breadcrumb from "../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "葛飾区の葬儀費用｜家族葬・一日葬・火葬式の費用目安｜稲垣屋葬儀店",
  description:
    "葛飾区で葬儀の費用が気になる方へ。稲垣屋葬儀店が家族葬・一日葬・火葬式・区民葬儀の費用について丁寧にご説明します。費用に含まれるもの・含まれないものも明確にご案内。事前見積もり無料。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/cost" },
};

const plans = [
  {
    href: "/cost/cremation",
    title: "火葬式の費用",
    en: "Cremation Only",
    desc: "お通夜・告別式を行わず、火葬のみを行うシンプルな葬儀。葬儀形式の中で費用を最小限に抑えられます。",
  },
  {
    href: "/cost/oneday-funeral",
    title: "一日葬の費用",
    en: "One-Day Funeral",
    desc: "お通夜を省略し、告別式と火葬を一日で行います。家族葬より費用を抑えながら、きちんとした告別式でお別れできます。",
  },
  {
    href: "/cost/family-funeral",
    title: "家族葬の費用",
    en: "Family Funeral",
    desc: "ご家族やごく親しい方だけで行う小規模な葬儀。一般葬より費用を抑えながら、心のこもったお別れができます。",
  },
  {
    href: "/cost/kumin-funeral",
    title: "区民葬儀の費用",
    en: "Kuminso-gi",
    desc: "葛飾区民の方が利用できる区の制度。稲垣屋葬儀店は葛飾区指定の取扱店です。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "葬儀費用の見積もりは無料ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、お見積もりは無料です。事前相談の際にも概算をお伝えすることが可能です。費用は事前に明確にご提示しますので、安心してご相談ください。",
      },
    },
    {
      "@type": "Question",
      name: "葬儀費用に含まれるものは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "葬儀プランによって異なりますが、一般的には搬送・安置・棺・骨壷・式場使用料・スタッフ人件費などが含まれます。祭壇・花・返礼品・飲食費・宗教者への謝礼などは別途かかる場合があります。稲垣屋葬儀店では事前にすべての費用を明確にご提示します。",
      },
    },
    {
      "@type": "Question",
      name: "葛飾区民は区民葬儀制度を使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、葛飾区民の方は葛飾区の区民葬儀制度をご利用いただけます。稲垣屋葬儀店は葛飾区が指定する区民葬儀取扱店として、この制度の詳細からお申し込みまでサポートします。",
      },
    },
    {
      "@type": "Question",
      name: "後から追加費用が発生することはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "稲垣屋葬儀店では、費用を事前に明確にご提示し、急な追加費用が発生しないよう丁寧にご説明します。ご不明な点があれば事前相談の際にご確認ください。",
      },
    },
  ],
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

      {/* Intro */}
      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ABOUT COST</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              葬儀費用について知っておきたいこと
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              葬儀の費用は、選ぶプランや規模・内容によって大きく異なります。「費用が分からないまま進めてしまった」という後悔がないよう、稲垣屋葬儀店では事前に費用を明確にご提示することを大切にしています。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              葬儀費用は大きく以下の要素で構成されます。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {[
              { title: "葬儀一式費用", desc: "搬送・安置・棺・骨壷・式場使用・スタッフ人件費など、葬儀を執り行うために必要な基本的な費用。プランによって内容が異なります。" },
              { title: "飲食・返礼品費用", desc: "通夜・告別式での飲食接待費や、会葬者へのお礼品（返礼品）の費用。参列者の人数に応じて変わります。家族葬・火葬式では不要な場合が多いです。" },
              { title: "宗教者への謝礼", desc: "お坊さんや神父・牧師など宗教者を呼ぶ場合のお布施・謝礼。宗教・宗派・依頼先によって異なります。無宗教葬の場合は不要です。" },
              { title: "火葬料・斎場使用料", desc: "火葬場への支払い費用。葛飾区内の公立斎場を利用する場合と民間斎場を利用する場合で異なります。状況によって変わりますので、ご相談ください。" },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3 className="text-[#312852] text-lg tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp>
            <p className="text-[#7560a0] text-sm leading-loose">
              ※ 費用は葬儀の内容・規模・地域・時期によって異なります。詳細は事前相談またはお問い合わせでご確認ください。葛飾区民の方は区民葬儀制度もご活用いただけます。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Plan cost links */}
      <section className="py-20 md:py-32 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">BY PLAN</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              プラン別の費用について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
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
                    <p className="text-[#4a4a4a] text-base leading-relaxed">{plan.desc}</p>
                  </div>
                  <ChevronRight size={18} className="text-[#b8a0d8] group-hover:text-[#5c4a80] group-hover:translate-x-1 transition-all shrink-0 mt-2" />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Kumin */}
      <section className="py-20 md:py-28 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FOR KATSUSHIKA RESIDENTS</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              葛飾区民葬儀制度について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              葛飾区民の方は、葛飾区が設ける「区民葬儀」制度をご利用いただくことで、費用を抑えた葬儀が可能です。稲垣屋葬儀店は葛飾区が指定する区民葬儀取扱店として認定されており、この制度のご利用をサポートしています。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              区民葬儀の詳細な内容・対象範囲・費用については、葛飾区の規定に基づくため変更される場合があります。最新の情報はお問い合わせにてご確認ください。
            </p>
            <div className="mt-6">
              <Link
                href="/plans/kumin-funeral"
                className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group"
              >
                区民葬儀について詳しく見る
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInUp>
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
