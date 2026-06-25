import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "お通夜なしで葬儀をしたい方へ｜葛飾区 稲垣屋葬儀店",
  description:
    "お通夜を省略した一日葬・火葬式をお考えの方へ。通夜なしで行う葬儀の流れ・メリット・注意点を葛飾区の稲垣屋葬儀店がわかりやすくご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/needs/no-wake" },
};

const faqs = [
  {
    q: "お通夜なしで葬儀はできますか？",
    a: "はい、可能です。お通夜を省略した「一日葬」や、通夜・告別式を省いた「火葬式（直葬）」という形式があります。近年、こうした形式を選ばれる方は増えており、稲垣屋葬儀店でも多くのご対応実績があります。",
  },
  {
    q: "一日葬と火葬式（直葬）の違いは何ですか？",
    a: "一日葬は通夜を省略しますが、告別式・お別れの儀式・火葬を1日で行います。宗教者を呼ぶことも可能で、一定の形式を保ちながら簡略化した形です。火葬式（直葬）は通夜・告別式ともに省略し、安置後に直接火葬を行う最もシンプルな形式です。",
  },
  {
    q: "お通夜なしだと故人への弔いが足りないと感じますか？",
    a: "形式よりも、故人への思いが大切です。一日葬や火葬式でも、ご家族がしっかりとお別れの時間を持つことができます。大切なのは儀式の日数ではなく、どれだけ心を込めて見送れるかです。稲垣屋葬儀店では、シンプルな形でも心のこもった葬儀をご提案します。",
  },
  {
    q: "菩提寺がある場合でも一日葬はできますか？",
    a: "菩提寺がある場合は、事前に寺院にご相談されることをお勧めします。寺院によっては通夜なしの形式を認めない場合もあります。稲垣屋葬儀店では、菩提寺との調整についてもアドバイスいたします。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "お通夜なしで葬儀をしたい方へ｜葛飾区 稲垣屋葬儀店",
  description:
    "お通夜を省略した一日葬・火葬式をお考えの方へ。通夜なしで行う葬儀の流れ・メリット・注意点を葛飾区の稲垣屋葬儀店がわかりやすくご説明します。",
  url: "https://www.inagakiyasougiten.com/needs/no-wake",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "ニーズ別ご相談", item: "https://www.inagakiyasougiten.com/needs" },
      { "@type": "ListItem", position: 3, name: "お通夜なしで葬儀をしたい方へ", item: "https://www.inagakiyasougiten.com/needs/no-wake" },
    ],
  },
};

export default function NoWakePage() {
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

      <PageHero
        title="お通夜なしで葬儀をしたい方へ"
        subtitle="一日葬・火葬式という選択肢について"
        en="NO WAKE FUNERAL"
      />
      <Breadcrumb
        items={[
          { label: "こんな方へ", href: "/needs" },
          { label: "お通夜なしで葬儀をしたい方へ" },
        ]}
      />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">INTRODUCTION</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              お通夜なしの葬儀は、今や珍しくありません
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              「通夜まで行うと、ご家族への負担が大きい」「故人の意思でシンプルにしたい」「高齢の参列者が多く、2日間の式は体力的につらい」——こうしたご事情からお通夜を省略する葬儀を希望される方が増えています。
            </p>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              お通夜を省略した「一日葬」や、通夜・告別式を省いた「火葬式（直葬）」は、現代の葬儀の形として広く選ばれるようになっています。形式を減らすことは、故人への弔いの気持ちを減らすことではありません。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              このページでは、通夜なし葬儀の形式・流れ・注意点をご案内します。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">PLANS</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              通夜なし葬儀の形式
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "一日葬",
                desc: "お通夜を省略し、告別式と火葬を1日で行う形式です。宗教者を呼ぶことも可能で、ある程度の儀式の形を保ちながら、ご家族や参列者の負担を軽減できます。参列者が比較的少ない場合や、遠方から来る方が少ない場合に適しています。",
                href: "/plans/oneday-funeral",
              },
              {
                title: "火葬式（直葬）",
                desc: "通夜・告別式を行わず、ご安置後に火葬場へ直接搬送する形式です。儀式を最小限にし、ご家族だけで静かにお別れする時間を持てます。費用も最も抑えられる形式です。",
                href: "/plans/cremation",
              },
            ].map((plan) => (
              <StaggerItem key={plan.title}>
                <div className="py-7">
                  <h3
                    className="text-[#312852] text-lg tracking-wide mb-2"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    {plan.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-base leading-relaxed mb-3">{plan.desc}</p>
                  <Link
                    href={plan.href}
                    className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors"
                  >
                    詳細を見る <ChevronRight size={13} />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">POINTS</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              通夜なし葬儀を選ぶ際のポイント
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "菩提寺・宗教者への事前確認",
                desc: "菩提寺がある場合は、一日葬・直葬の形式について事前に相談されることをお勧めします。宗派・寺院によって対応が異なります。",
              },
              {
                title: "参列者への案内を明確に",
                desc: "通夜がないため、参列できる日時・場所を明確に案内する必要があります。1日のみの葬儀であることを伝え、参列日程の混乱を防ぎましょう。",
              },
              {
                title: "お別れの時間を意識的に確保する",
                desc: "通夜なしの形式では、告別式や火葬前にご家族のお別れの時間を意識的に設けることが大切です。短い時間でも、故人との最後の対話を大切にしてください。",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3
                    className="text-[#312852] text-base tracking-wide mb-2"
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

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
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
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <div className="py-7">
                  <p
                    className="text-[#312852] text-base tracking-wide mb-3"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    Q. {faq.q}
                  </p>
                  <p className="text-[#4a4a4a] text-base leading-relaxed pl-4 border-l border-[#c9a55a]">
                    {faq.a}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-8">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">RELATED</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              関連ページ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              { href: "/plans/oneday-funeral", label: "一日葬プランの詳細" },
              { href: "/plans/cremation", label: "火葬式（直葬）プランの詳細" },
              { href: "/needs/family-only", label: "家族だけで見送りたい方へ" },
              { href: "/needs/simple", label: "シンプルな葬儀を希望の方へ" },
              { href: "/needs/low-cost", label: "費用を抑えたい方へ" },
            ].map((link) => (
              <StaggerItem key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between py-5 text-[#5c4a80] hover:text-[#312852] transition-colors group"
                >
                  <span className="text-base">{link.label}</span>
                  <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2
              className="text-[#312852] text-2xl tracking-[0.08em] mb-5"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              通夜なし葬儀について、ご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              ご希望の形に合わせた最適なプランをご提案します。稲垣屋葬儀店は24時間365日対応しております。
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
