import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "家族葬・一日葬・火葬式・区民葬儀の比較｜葛飾区 稲垣屋葬儀店",
  description:
    "葛飾区での葬儀形式を比較。家族葬・一日葬・火葬式・区民葬儀の特徴・費用・向いている方を表で比較してご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/katsushika-funeral/compare" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "家族葬と一日葬はどちらが費用を抑えられますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "一般的には一日葬の方が、お通夜を省略する分だけ費用を抑えやすいです。ただし、参列者の人数・式場の有無・宗教者へのお礼・飲食費などによって総費用は変わります。稲垣屋葬儀店では事前相談（無料）でそれぞれの費用の内訳を詳しくご説明しますので、お気軽にご相談ください。",
      },
    },
    {
      "@type": "Question",
      name: "葛飾区民葬儀は一般の家族葬と何が違いますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "葛飾区民葬儀は葛飾区が設けた制度で、葛飾区民の方が葛飾区指定の取扱店を通じて、定められた内容の葬儀を一定の費用内で行えるものです。家族葬は形式の名称であり、区民葬儀は制度の名称です。区民葬儀の枠組みを使いながら、家族葬的な少人数での葬儀を行うことも可能です。",
      },
    },
    {
      "@type": "Question",
      name: "菩提寺がある場合、火葬式（直葬）は選べますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "菩提寺がある場合、火葬式（直葬）を選ぶには事前に菩提寺に相談することをお勧めします。菩提寺の納骨を希望する場合、読経を行わない火葬式では納骨を断られることがあります。菩提寺との関係を大切にしながら、形式を選ぶことが重要です。",
      },
    },
    {
      "@type": "Question",
      name: "葛飾区でどの葬儀形式を選ぶべきか迷っています。相談できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "もちろんです。稲垣屋葬儀店では事前相談（無料）で、ご家族の状況・希望・費用のご予算をお聞きしながら、最適な形式をご提案します。家族葬・一日葬・火葬式・区民葬儀それぞれの特徴を丁寧にご説明し、一緒に選ぶお手伝いをします。強引な勧誘は一切行いません。",
      },
    },
  ],
};

const plans = [
  {
    title: "家族葬",
    days: "2日間",
    ceremony: "通夜＋告別式",
    attendees: "10〜30名程度",
    cost: "中",
    suitable: "家族・親族・親しい方のみで丁寧に見送りたい方",
    href: "/plans/family-funeral",
  },
  {
    title: "一日葬",
    days: "1日間",
    ceremony: "告別式のみ",
    attendees: "10〜20名程度",
    cost: "中〜低",
    suitable: "遺族の負担を減らしながら、告別式を行いたい方",
    href: "/plans/oneday-funeral",
  },
  {
    title: "火葬式（直葬）",
    days: "火葬のみ",
    ceremony: "なし",
    attendees: "ごく少数",
    cost: "低",
    suitable: "最もシンプルに、ごく近しい方だけで見送りたい方",
    href: "/plans/cremation",
  },
  {
    title: "区民葬儀",
    days: "相談による",
    ceremony: "制度による",
    attendees: "制度による",
    cost: "低〜中（区制度）",
    suitable: "葛飾区民で費用を抑えながら葬儀を行いたい方",
    href: "/plans/kumin-funeral",
  },
];

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "家族葬・一日葬・火葬式・区民葬儀の比較",
  description:
    "葛飾区での葬儀形式を比較。家族葬・一日葬・火葬式・区民葬儀の特徴・費用・向いている方を表で比較してご説明します。",
  url: "https://www.inagakiyasougiten.com/katsushika-funeral/compare",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葛飾区の葬儀", item: "https://www.inagakiyasougiten.com/katsushika-funeral" },
      { "@type": "ListItem", position: 3, name: "葬儀形式の比較", item: "https://www.inagakiyasougiten.com/katsushika-funeral/compare" },
    ],
  },
};

export default function ComparePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="葛飾区での葬儀形式を比較する"
        subtitle="家族葬・一日葬・火葬式・区民葬儀の特徴と選び方"
        en="PLAN COMPARISON"
      />
      <Breadcrumb
        items={[
          { label: "葛飾区の葬儀", href: "/katsushika-funeral" },
          { label: "葬儀形式の比較" },
        ]}
      />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COMPARISON</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              葛飾区で選べる葬儀形式
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp>
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose">
              <p>
                葛飾区での葬儀では、家族葬・一日葬・火葬式（直葬）・区民葬儀・一般葬など複数の形式から選ぶことができます。それぞれに特徴・費用の目安・向いている方が異なります。どの形式が合うか迷っている場合は、稲垣屋葬儀店の事前相談（無料）でご一緒に検討します。
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COMPARISON TABLE</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              葬儀形式比較表
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-[#e8ddf4]">
                    <th className="text-left py-4 pr-4 text-[#312852] font-normal tracking-wide" style={{ fontFamily: "var(--font-mincho)" }}>形式</th>
                    <th className="text-left py-4 px-3 text-[#312852] font-normal tracking-wide" style={{ fontFamily: "var(--font-mincho)" }}>日数</th>
                    <th className="text-left py-4 px-3 text-[#312852] font-normal tracking-wide" style={{ fontFamily: "var(--font-mincho)" }}>儀式</th>
                    <th className="text-left py-4 px-3 text-[#312852] font-normal tracking-wide" style={{ fontFamily: "var(--font-mincho)" }}>費用目安</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e8ddf4]">
                  {plans.map((plan) => (
                    <tr key={plan.title}>
                      <td className="py-5 pr-4">
                        <Link href={plan.href} className="text-[#5c4a80] hover:text-[#312852] transition-colors" style={{ fontFamily: "var(--font-mincho)" }}>
                          {plan.title}
                        </Link>
                      </td>
                      <td className="py-5 px-3 text-[#4a4a4a]">{plan.days}</td>
                      <td className="py-5 px-3 text-[#4a4a4a]">{plan.ceremony}</td>
                      <td className="py-5 px-3 text-[#4a4a4a]">{plan.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">DETAILS</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              各形式の特徴詳細
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "家族葬",
                body: "ご家族・親族・ごく親しい方だけで行う葬儀です。お通夜と告別式を行い、参列者を限定することで、故人との最後の時間をゆっくりと過ごすことができます。葛飾区でも近年最も選ばれることが増えている形式です。費用は参列者数・式場の有無によって変わります。",
                href: "/plans/family-funeral",
              },
              {
                title: "一日葬",
                body: "お通夜を省略し、告別式と火葬を一日で行う形式です。ご遺族の体力的・精神的な負担を軽減しながら、告別式という場でお別れができます。参列者の方にとっても一日で完結するため、スケジュールを立てやすいという利点があります。",
                href: "/plans/oneday-funeral",
              },
              {
                title: "火葬式（直葬）",
                body: "お通夜・告別式を行わず、火葬のみを行う最もシンプルな形式です。ごく近しい方だけで静かに見送ることができます。費用を最小限に抑えたい場合や、故人が生前にシンプルな葬儀を希望されていた場合に選ばれます。菩提寺がある場合は事前に相談が必要です。",
                href: "/plans/cremation",
              },
              {
                title: "葛飾区民葬儀",
                body: "葛飾区が設けた制度で、葛飾区民の方が利用できます。葛飾区指定の取扱店（稲垣屋葬儀店はその一つ）を通じて申し込むことで、定められた内容の葬儀を一定の費用内で行うことができます。葛飾区民の方にはまず区民葬儀制度の活用を検討することをお勧めしています。",
                href: "/plans/kumin-funeral",
              },
            ].map((plan) => (
              <StaggerItem key={plan.title}>
                <div className="py-7">
                  <h3 className="text-[#312852] text-xl tracking-wide mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                    {plan.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-sm leading-loose mb-3">{plan.body}</p>
                  <Link href={plan.href} className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group">
                    詳細・費用の目安を見る
                    <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">WHICH TO CHOOSE</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              どの形式が向いているか
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {plans.map((plan) => (
              <StaggerItem key={plan.title}>
                <div className="py-7">
                  <h3 className="text-[#312852] text-base tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>
                    {plan.title}が向いている方
                  </h3>
                  <p className="text-[#4a4a4a] text-sm leading-loose">{plan.suitable}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeInUp className="mt-6">
            <Link href="/plans" className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group">
              プラン一覧を見る
              <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              葬儀形式の比較に関するよくあるご質問
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {faqJsonLd.mainEntity.map((faq) => (
              <StaggerItem key={faq.name}>
                <div className="py-7">
                  <p className="text-[#312852] text-base mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                    <span className="text-[#9278be] font-bold mr-2">Q</span>
                    {faq.name}
                  </p>
                  <p className="text-[#4a4a4a] text-sm leading-loose pl-6">
                    <span className="text-[#c9a55a] font-bold mr-2">A</span>
                    {faq.acceptedAnswer.text}
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
              葛飾区の葬儀に関するご相談
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              稲垣屋葬儀店は24時間365日対応。事前相談・お見積もりは無料です。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:0336900870" className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 w-full sm:w-auto justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
                <Phone size={17} className="text-[#dfc07e]" />03-3690-0870
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-[#9278be] text-[#5c4a80] hover:bg-[#ede7f6] px-8 py-4 tracking-wider transition-colors duration-300 w-full sm:w-auto justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
                <MessageCircle size={17} />お問い合わせ
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
