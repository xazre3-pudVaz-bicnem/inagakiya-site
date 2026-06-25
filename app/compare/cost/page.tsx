import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "葬儀費用を比較するときの注意点｜葛飾区 稲垣屋葬儀店",
  description:
    "葬儀費用を比較するときの注意点。「安い」だけで選ばない・含まれるもの・含まれないものの確認ポイントを解説します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/compare/cost" },
};

const faqs = [
  {
    q: "葬儀費用の見積もりをもらったとき、何を確認すればよいですか？",
    a: "「プラン費用」の内訳が明確か、「別途費用（実費）」が何かを必ず確認してください。一般的に葬儀費用は「葬儀社への費用」「宗教者へのお布施」「飲食・返礼品などの実費」に分かれます。見積書でどこまでが含まれているかを明確にしてもらうことが重要です。稲垣屋葬儀店では分かりやすい見積書を作成します。",
  },
  {
    q: "見積もり以外に発生する費用はどんなものがありますか？",
    a: "主なものとして、宗教者へのお布施（金額はお寺や宗派によって異なります）、飲食費（精進落としなど）、返礼品費、火葬場の料金（一部は葬儀社の見積もりに含まれる場合もあります）などがあります。稲垣屋葬儀店では事前相談の際に、実費分についても概算をご説明します。",
  },
  {
    q: "ご予算が限られている場合、どの形式を選べばよいですか？",
    a: "ご予算に合わせた形式を一緒に考えることが稲垣屋葬儀店のスタンスです。一般的に費用が抑えられる形式としては火葬式・一日葬などがあります。また、葛飾区民の方は区民葬儀制度をご活用いただける場合があります。まずはご予算と希望をお聞かせください。",
  },
  {
    q: "費用の相談だけでも来ていただけますか？",
    a: "はい、費用の相談のみのご来店も大歓迎です。「費用の目安を知りたい」「複数の形式の費用を比較したい」という段階での相談も承っています。稲垣屋葬儀店の事前相談は完全無料です。",
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

const cautionPoints = [
  {
    title: "「プラン費用」だけで比較しない",
    desc: "葬儀社が提示するプラン費用には、実費（お布施・火葬料・返礼品・飲食費など）が含まれていない場合があります。プラン費用のみで比較すると、実際の総費用が大きく異なることがあります。",
  },
  {
    title: "含まれるものと含まれないものを確認する",
    desc: "見積書の「含まれるもの」と「別途費用」の区分を必ず確認しましょう。同じ金額でも含まれる内容が異なる場合があります。",
  },
  {
    title: "追加費用の有無を必ず確認する",
    desc: "葬儀の進行に伴い、後から追加費用が発生するケースもあります。「追加は何が発生しますか？」と事前に確認することが大切です。",
  },
  {
    title: "見積もりの内訳が明確かどうか",
    desc: "「葬儀一式」などの曖昧な表記ではなく、棺・祭壇・人件費・車両費などが明細として記載された見積書かどうかを確認しましょう。",
  },
  {
    title: "費用よりも「対応の丁寧さ」も重要",
    desc: "費用だけでなく、スタッフの対応・コミュニケーション・信頼性も葬儀社選びの重要な要素です。事前相談で実際に相談してみて、対応の丁寧さを確かめることをお勧めします。",
  },
];

const checkItems = [
  "プラン費用の内訳（棺・祭壇・車両・人件費など）",
  "別途費用（実費）の項目と概算（宗教者へのお布施・飲食費・返礼品・火葬料など）",
  "追加費用が発生する場合の条件",
  "見積もり金額の有効期限",
  "支払いのタイミングと方法",
];

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "葬儀費用を比較するときの注意点｜葛飾区 稲垣屋葬儀店",
  description:
    "葬儀費用を比較するときの注意点。「安い」だけで選ばない・含まれるもの・含まれないものの確認ポイントを解説します。",
  url: "https://www.inagakiyasougiten.com/compare/cost",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀プラン比較", item: "https://www.inagakiyasougiten.com/compare" },
      { "@type": "ListItem", position: 3, name: "葬儀費用の比較", item: "https://www.inagakiyasougiten.com/compare/cost" },
    ],
  },
};

export default function CostComparePage() {
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
        title="葬儀費用を比較するときの注意点"
        subtitle="ご予算に合わせた形式を一緒に考えます"
        en="COST COMPARISON"
      />

      <Breadcrumb
        items={[
          { label: "比較・選び方", href: "/compare" },
          { label: "費用比較の注意点" },
        ]}
      />

      {/* Intro */}
      <section className="py-16 md:py-20 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-relaxed">
              葬儀費用を比較する際には、いくつかの落とし穴があります。葬儀社が提示する「プラン費用」だけを見て判断すると、実際の費用総額が想定と大きく異なることがあります。ご予算に合わせた形式を選ぶためにも、費用の構成と注意点を事前に理解しておくことが大切です。
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link href="/compare/funeral-plans" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 transition-colors">
                葬儀形式の比較一覧
              </Link>
              <Link href="/cost" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 transition-colors">
                費用について
              </Link>
              <Link href="/consultation/cost" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 transition-colors">
                費用の事前相談
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* 注意点5項目 */}
      <section className="py-16 md:py-20 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">CAUTION POINTS</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              費用比較の5つの注意点
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {cautionPoints.map((point, i) => (
              <StaggerItem key={point.title}>
                <div className="py-7 flex gap-5">
                  <span className="text-[#c9a55a] text-sm shrink-0 pt-0.5" style={{ fontFamily: "var(--font-mincho)" }}>
                    0{i + 1}
                  </span>
                  <div>
                    <p className="text-[#312852] text-base tracking-wide mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                      {point.title}
                    </p>
                    <p className="text-[#4a4a4a] text-base leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 見積もりで確認すべき項目 */}
      <section className="py-16 md:py-20 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">CHECKLIST</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              見積もりで確認すべき項目
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {checkItems.map((item) => (
              <StaggerItem key={item}>
                <div className="py-5 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c9a55a] mt-2 shrink-0" />
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 稲垣屋葬儀店の費用透明性 */}
      <section className="py-16 md:py-20 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-8">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">OUR APPROACH</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              稲垣屋葬儀店の費用への考え方
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <p className="text-[#4a4a4a] text-base leading-relaxed">
              稲垣屋葬儀店では、費用の透明性を大切にしています。事前相談では、プラン費用・別途費用（実費）のそれぞれについて分かりやすくご説明します。「ご予算に合わせた形式」を一緒に考えることが私たちのスタンスです。見積もりは無料で、強引に契約を求めることはありません。まずはお気軽にご相談ください。
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link href="/plans/family-funeral" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 transition-colors">
                家族葬プランを見る
              </Link>
              <Link href="/consultation" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 transition-colors">
                事前相談について
              </Link>
              <Link href="/faq" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 transition-colors">
                よくある質問
              </Link>
            </div>
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
