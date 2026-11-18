import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = pageMetadata({
  title: "区民葬儀と一般葬の違い｜葛飾区 稲垣屋葬儀店",
  description:
    "葛飾区の区民葬儀と一般葬の違いを解説。費用の考え方・対象者・内容を比較してご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/compare/kumin-vs-general" },
});

const faqs = [
  {
    q: "区民葬儀は申請が複雑ですか？",
    a: "区民葬儀には手続きが必要ですが、稲垣屋葬儀店が申請手続きをサポートします。葛飾区指定の取扱店として、区民葬儀の手続きに慣れたスタッフが丁寧にご案内しますので、ご安心ください。",
  },
  {
    q: "区民葬儀を利用しても、一定の形式でのお別れはできますか？",
    a: "はい、もちろんです。区民葬儀は祭壇・霊柩車・火葬・骨つぼに協定料金が適用される制度で、稲垣屋葬儀店では家族葬・一日葬・一般葬など、どのプランでも区民葬儀をご利用いただけます。協定料金の対象以外の内容は別途となりますが、故人とご家族がどのようにお別れしたいかを大切にしながら、稲垣屋葬儀店がサポートします。",
  },
  {
    q: "区民葬儀を利用すると、火葬料の助成を受けられますか？",
    a: "はい。四ツ木斎場など東京博善の6斎場（町屋・落合・代々幡・四ツ木・桐ケ谷・堀ノ内）は2026年（令和8年）3月末で区民葬儀の取り扱いを終了したため、これらの斎場では区民葬儀の火葬券は使えません。その代わりに、2026年（令和8年）4月1日から当面3年間、23区共通の火葬料金助成が設けられています。区民葬儀の祭壇券（棺のみを含む）または霊柩車券を利用し、6斎場のいずれかで最も低額の区分の火葬料（大人87,000円）を支払った場合が対象で、助成額は大人上限27,000円・小人（満6歳以下）上限15,000円です。申請先は故人が住民登録をしていた区（故人が23区外にお住まいだった場合は、火葬料を支払った方がお住まいの区）で、火葬日の翌日から2年以内に申請します。助成額の算定は区によって異なる場合がありますので、詳しくは区役所にご確認ください。",
  },
  {
    q: "一般葬の場合、費用はどう決まりますか？",
    a: "一般葬の費用は、葬儀の規模・プラン・参列者数・返礼品・飲食費・宗教者へのお布施などによって決まります。稲垣屋葬儀店では事前相談でご予算に合わせた形式と費用をご説明します。見積もりは無料です。",
  },
  {
    q: "稲垣屋葬儀店は区民葬儀と一般葬の両方を扱っていますか？",
    a: "はい、稲垣屋葬儀店は葛飾区指定の区民葬儀取扱店であり、一般葬・家族葬・一日葬・火葬式なども承っております。プランはすべて区民葬儀をご利用いただけますので、一般葬と区民葬儀を組み合わせることもできます。ご家族のご状況に合わせた形式をご提案しますので、お気軽にご相談ください。",
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
              葛飾区を含む東京23区には、区民を対象とした「区民葬儀制度」があります。これは23区（特別区）共通の制度で、故人または喪主が23区にお住まいの場合、区民葬儀取扱店を通じて、祭壇・霊柩車・火葬・骨つぼの4品目を23区共通の協定料金で利用できます（必要なものを選んで組み合わせられ、それ以外の費用は別途となります）。一方、一般葬は通夜・告別式を執り行い、故人とご縁のある多くの方々をお迎えする葬儀の形式です。区民葬儀は「制度」、一般葬は「形式」の呼び方であり、稲垣屋葬儀店では一般葬のプランでも区民葬儀をご利用いただけます。このページでは、両者の考え方の違いをご説明します。
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
              <table className="w-full border-collapse text-sm [&_th]:whitespace-nowrap [&_td:first-child]:whitespace-nowrap">
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
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">故人または喪主が23区在住</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">制限なし</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-[#312852]" style={{ fontFamily: "var(--font-mincho)" }}>費用</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">4品目は23区共通の協定料金（その他は別途）</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">選択により変動</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-[#312852]" style={{ fontFamily: "var(--font-mincho)" }}>内容の自由度</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">必要な品目を選んで組み合わせ</td>
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
              区民葬儀制度は、東京23区（特別区）共通の制度です。祭壇・霊柩車・火葬・遺骨収納容器（骨つぼ）の4品目に23区共通の協定料金が定められており、この中から必要なものを選んで組み合わせることができます（それ以外の費用は別途となります）。故人または喪主が葛飾区をはじめ23区にお住まいであれば利用でき、区民葬儀取扱店に利用したい旨を伝え、死亡届の提出時に区役所で区民葬儀券を申請して取扱店に渡す、という流れです。申請手続きは葬儀社がサポートするため、初めての方でも安心して利用できます。稲垣屋葬儀店は葛飾区指定の区民葬儀取扱店として登録されており、申請から葬儀まで一貫してお手伝いします。なお、四ツ木斎場など東京博善の6斎場は2026年（令和8年）3月末で区民葬儀の取り扱いを終了したため、これらの斎場では区民葬儀の火葬券は使えませんが、代わりに23区共通の火葬料金助成（大人上限27,000円）があります（詳しくは下記のよくあるご質問をご覧ください）。
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
                  故人または喪主が東京23区にお住まいで、祭壇・霊柩車・火葬・骨つぼを協定料金で利用して費用を抑えたい方。稲垣屋葬儀店では一般葬を含むすべてのプランで区民葬儀をご利用いただけます。
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="py-7">
                <p className="text-[#312852] text-base tracking-wide mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                  一般葬が向く方
                </p>
                <p className="text-[#4a4a4a] text-base leading-relaxed pl-4 border-l border-[#c9a55a]">
                  広くご縁のある方々に参列いただきたい方、通夜・告別式をしっかりと執り行いたい方。なお、故人または喪主が23区にお住まいであれば、一般葬でも区民葬儀をご利用いただけます。
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
