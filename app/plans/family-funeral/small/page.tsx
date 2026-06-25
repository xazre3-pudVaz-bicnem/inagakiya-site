import type { Metadata } from "next";
import PageHero from "../../../components/PageHero";
import Breadcrumb from "../../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "少人数の家族葬｜5〜15名程度のお別れ｜葛飾区 稲垣屋葬儀店",
  description:
    "葛飾区で少人数（5〜15名程度）の家族葬をお考えの方へ。稲垣屋葬儀店が少人数葬儀の特徴・費用・流れをご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/plans/family-funeral/small" },
};

const faqItems = [
  {
    question: "少人数でも通夜・告別式はできますか？",
    answer:
      "はい、参列者が少人数であっても通夜・告別式を執り行うことができます。5名程度の少人数でも丁寧にお別れの場を整えます。通夜を省略した一日葬の形式にも対応しておりますので、ご希望をご相談ください。",
  },
  {
    question: "参列者5名程度の葬儀でも稲垣屋葬儀店に依頼できますか？",
    answer:
      "はい、もちろんお受けしております。稲垣屋葬儀店ではご家族だけの少人数葬儀から対応しております。参列者が極めて少ない場合も、故人様とご家族のためにできる限りの準備を整えます。お気軽にご相談ください。",
  },
  {
    question: "少人数葬儀の場合、式場は必要ですか？",
    answer:
      "必ずしも式場が必要というわけではありません。ご自宅での葬儀や、安置施設を活用した形式も選択肢の一つです。ただし、ご自宅の間取りや地域の慣習によって対応が異なりますので、一度ご相談ください。",
  },
  {
    question: "少人数での家族葬でも区民葬儀は使えますか？",
    answer:
      "葛飾区の区民葬儀制度は、参列者の人数に関わらずご利用いただけます。少人数の家族葬であっても区民葬儀を活用することで費用を抑えられる場合があります。区民葬儀との組み合わせについてはご相談ください。",
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

export default function FamilyFuneralSmallPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero title="少人数の家族葬" subtitle="5〜15名程度のお別れ" en="SMALL FAMILY FUNERAL" />
      <Breadcrumb
        items={[
          { label: "葬儀プラン", href: "/plans" },
          { label: "家族葬", href: "/plans/family-funeral" },
          { label: "少人数の家族葬" },
        ]}
      />

      {/* 定義・特徴 */}
      <section className="py-20 md:py-28 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">WHAT IS SMALL FAMILY FUNERAL</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em] mb-5"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              少人数の家族葬とは
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mb-6" />
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              少人数の家族葬とは、参列者がおおむね5〜15名程度で行う葬儀のことを指します。ただし、これはあくまで目安であり、明確な人数制限があるわけではありません。「ごく親しい家族だけで見送りたい」というご希望に応えた形式です。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              葛飾区でも、近年は参列者を絞った少人数葬儀を選ぶご家族が増えています。高齢化や核家族化が進む中、遠方に住む親族が集まりにくいケースや、故人様が「大げさにしてほしくない」とご希望されていたケースなど、様々な事情から少人数葬儀が選ばれています。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              稲垣屋葬儀店では、参列者の人数にかかわらず、故人様とご家族にとって心のこもったお別れの場をご用意します。少人数でも、丁寧な納棺・通夜・告別式・火葬の一連の流れを執り行います。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* 費用の考え方 */}
      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ABOUT COST</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              少人数葬儀と費用の関係
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "人数によって変わる費用",
                desc: "参列者の人数が少ない場合、飲食費（お斎・茶菓子など）と返礼品費用が抑えられます。参列者一人あたりの飲食・返礼品費用は、人数に比例して増減する部分です。少人数ほどこれらの費用は少なくなります。",
              },
              {
                title: "人数によって変わらない費用",
                desc: "一方で、葬儀の基本費用（棺・搬送・安置・人件費・祭壇・備品など）は参列者数によって大きく変動するわけではありません。少人数だからといって葬儀基本費用が半額になるわけではない点はご注意ください。",
              },
              {
                title: "式場使用料について",
                desc: "式場を使用する場合の使用料は、施設によって異なります。小規模な式場や家族葬専用ホールを利用することで、大型式場と比べて使用料を抑えられる場合があります。ご自宅での葬儀も選択肢の一つです。",
              },
              {
                title: "区民葬儀との組み合わせ",
                desc: "葛飾区の区民葬儀制度をご利用いただくと、一部の費用について区の補助が受けられます。少人数の家族葬であっても区民葬儀の対象となる場合がありますので、事前にご確認ください。",
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

      {/* 場所の選び方 */}
      <section className="py-16 md:py-24 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">VENUE</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              場所の選び方
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "ご自宅での葬儀",
                desc: "少人数での葬儀はご自宅で執り行うことも可能です。慣れ親しんだご自宅での葬儀は、故人様にとっても、ご家族にとっても温かみのあるお別れの場となります。ご自宅の間取りや立地条件についてはご相談ください。",
              },
              {
                title: "安置施設・家族葬ホール",
                desc: "稲垣屋葬儀店の安置施設や提携する家族葬専用ホールもご利用いただけます。少人数に適した落ち着いた雰囲気の空間でのお別れが可能です。葛飾区内および近郊でのご案内となります。",
              },
              {
                title: "式場の選択について",
                desc: "式場を選ぶ際には、アクセスの良さ・広さ・費用・雰囲気などをご確認ください。少人数の場合、大型の式場は空間的に広すぎる場合があります。ご家族の人数や状況に合った場所を一緒に選びます。",
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
                { href: "/plans/family-funeral", label: "家族葬について" },
                { href: "/plans/family-funeral/flow", label: "家族葬の流れ" },
                { href: "/plans/family-funeral/cost", label: "家族葬の費用" },
                { href: "/plans/family-funeral/only-relatives", label: "親族のみの家族葬" },
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
