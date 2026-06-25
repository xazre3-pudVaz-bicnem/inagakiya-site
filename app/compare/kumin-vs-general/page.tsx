import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "区民葬儀と一般葬の違い｜葛飾区 稲垣屋葬儀店",
  description:
    "葛飾区の区民葬儀と一般葬の違いを解説。費用の考え方・対象者・内容を比較してご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/compare/kumin-vs-general" },
};

const faqs = [
  {
    q: "区民葬儀は申請が複雑ですか？",
    a: "区民葬儀には手続きが必要ですが、稲垣屋葬儀店が申請手続きをサポートします。葛飾区指定の取扱店として、区民葬儀の手続きに慣れたスタッフが丁寧にご案内しますので、ご安心ください。",
  },
  {
    q: "区民葬儀を利用しても、一定の形式でのお別れはできますか？",
    a: "はい、区民葬儀制度の枠内でも、心を込めたお別れの場を作ることは十分可能です。形式の豪華さよりも、故人とご家族がどのようにお別れしたいかを大切にしながら、稲垣屋葬儀店がサポートします。",
  },
  {
    q: "一般葬の場合、費用はどう決まりますか？",
    a: "一般葬の費用は、葬儀の規模・プラン・参列者数・返礼品・飲食費・宗教者へのお布施などによって決まります。稲垣屋葬儀店では事前相談でご予算に合わせた形式と費用をご説明します。見積もりは無料です。",
  },
  {
    q: "稲垣屋葬儀店は区民葬儀と一般葬の両方を扱っていますか？",
    a: "はい、稲垣屋葬儀店は葛飾区指定の区民葬儀取扱店であり、一般葬・家族葬・一日葬・火葬式なども承っております。ご家族のご状況に合わせた形式をご提案しますので、お気軽にご相談ください。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "区民葬儀と一般葬の違い｜葛飾区 稲垣屋葬儀店",
  description:
    "葛飾区の区民葬儀と一般葬の違いを解説。費用の考え方・対象者・内容を比較してご説明します。",
  url: "https://www.inagakiyasougiten.com/compare/kumin-vs-general",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀プラン比較", item: "https://www.inagakiyasougiten.com/compare" },
      { "@type": "ListItem", position: 3, name: "区民葬儀と一般葬の違い", item: "https://www.inagakiyasougiten.com/compare/kumin-vs-general" },
    ],
  },
};

export default function KuminVsGeneralPage() {
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
        title="区民葬儀と一般葬の違い"
        subtitle="費用の考え方・対象者・内容を比較"
        en="COMPARISON"
      />

      <Breadcrumb
        items={[
          { label: "比較で選ぶ", href: "/compare/funeral-plans" },
          { label: "区民葬儀と一般葬の違い" },
        ]}
      />

      {/* Intro */}
      <section className="py-16 md:py-20 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-relaxed">
              葛飾区では、区民を対象とした「区民葬儀制度」があります。これは葛飾区が定めた基準に基づいて葬儀を行う制度で、区指定の取扱店を通じて利用できます。一方、一般葬は形式・規模・プランを自由に選べる葬儀です。どちらを選ぶかは、対象者・内容の自由度・費用の考え方などで異なります。
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link href="/plans/kumin-funeral" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 transition-colors">
                区民葬儀プランの詳細
              </Link>
              <Link href="/plans/general-funeral" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 transition-colors">
                一般葬の詳細
              </Link>
              <Link href="/compare/funeral-plans" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 transition-colors">
                5形式の比較一覧
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-20 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COMPARISON TABLE</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              区民葬儀と一般葬の比較
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-[#e8ddf4]">
                    <th className="py-3 px-4 text-left text-[#312852] font-normal tracking-wide" style={{ fontFamily: "var(--font-mincho)" }}>比較項目</th>
                    <th className="py-3 px-4 text-center text-[#312852] font-normal tracking-wide" style={{ fontFamily: "var(--font-mincho)" }}>区民葬儀</th>
                    <th className="py-3 px-4 text-center text-[#312852] font-normal tracking-wide" style={{ fontFamily: "var(--font-mincho)" }}>一般葬</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e8ddf4]">
                  <tr>
                    <td className="py-4 px-4 text-[#312852]" style={{ fontFamily: "var(--font-mincho)" }}>対象者</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">葛飾区民</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">制限なし</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-[#312852]" style={{ fontFamily: "var(--font-mincho)" }}>費用</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">区の定める基準</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">選択により変動</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-[#312852]" style={{ fontFamily: "var(--font-mincho)" }}>内容の自由度</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">一定の枠内</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">自由</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-[#312852]" style={{ fontFamily: "var(--font-mincho)" }}>申請</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">あり</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">なし</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-[#312852]" style={{ fontFamily: "var(--font-mincho)" }}>葬儀社</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">区指定取扱店</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">自由に選択</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* 区民葬儀制度の特徴 */}
      <section className="py-16 md:py-20 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-8">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">KUMIN FUNERAL</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              区民葬儀制度の特徴
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <p className="text-[#4a4a4a] text-base leading-relaxed">
              葛飾区民葬儀制度は、葛飾区が定めた基準のもと、区指定の取扱店が行う葬儀です。費用の枠組みが定められており、葛飾区民の方が利用できます。内容は一定の枠内となりますが、申請手続きを葬儀社がサポートするため、初めての方でも安心して利用できます。稲垣屋葬儀店は葛飾区指定の区民葬儀取扱店として登録されており、申請から葬儀まで一貫してお手伝いします。
            </p>
            <div className="mt-4">
              <Link href="/consultation/kumin-funeral" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 text-sm transition-colors">
                区民葬儀の事前相談はこちら
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* 一般葬の特徴 */}
      <section className="py-16 md:py-20 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-8">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">GENERAL FUNERAL</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              一般葬の特徴
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <p className="text-[#4a4a4a] text-base leading-relaxed">
              一般葬は、参列者・形式・規模などを自由に選択できる葬儀形式です。広くご縁のある方々に参列していただき、故人を見送ることができます。通夜・告別式の2日間で行われるのが一般的で、宗教・宗派に合わせた形式も選択できます。費用はご選択の内容によって変動しますが、稲垣屋葬儀店では事前相談で分かりやすく費用をご説明します。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* どちらを選ぶか */}
      <section className="py-16 md:py-20 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">HOW TO CHOOSE</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              どちらを選ぶか
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            <StaggerItem>
              <div className="py-7">
                <p className="text-[#312852] text-base tracking-wide mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                  区民葬儀制度が向く方
                </p>
                <p className="text-[#4a4a4a] text-base leading-relaxed pl-4 border-l border-[#c9a55a]">
                  葛飾区民の方で、区の制度を活用したい方。費用の枠組みが定められた形式での葬儀を希望する方。
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="py-7">
                <p className="text-[#312852] text-base tracking-wide mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                  一般葬が向く方
                </p>
                <p className="text-[#4a4a4a] text-base leading-relaxed pl-4 border-l border-[#c9a55a]">
                  広くご縁のある方々に参列いただきたい方、形式や内容を自由に選びたい方、葛飾区外の方。
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
          <FadeInUp delay={0.2} className="mt-8">
            <p className="text-[#4a4a4a] text-sm leading-relaxed">
              費用の目安については
              <Link href="/cost/kumin-funeral" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 mx-1 transition-colors">区民葬儀の費用ページ</Link>
              をご覧ください。また
              <Link href="/faq" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 mx-1 transition-colors">よくある質問</Link>
              もご参照ください。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              よくあるご質問
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <div className="py-7">
                  <p className="text-[#312852] text-base tracking-wide mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
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

      {/* Soft CTA */}
      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              まずはお気軽にご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              形式に迷っている段階でも、どんな疑問でもお気軽にどうぞ。<br />
              事前相談は無料、強引な勧誘は一切行いません。
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
