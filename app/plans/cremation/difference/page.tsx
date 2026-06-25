import type { Metadata } from "next";
import PageHero from "../../../components/PageHero";
import Breadcrumb from "../../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "火葬式と直葬の違い｜葛飾区 稲垣屋葬儀店",
  description:
    "火葬式と直葬は同じ意味？違いは？葛飾区の稲垣屋葬儀店が火葬式・直葬の定義と特徴をわかりやすく解説します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/plans/cremation/difference" },
};

const faqItems = [
  {
    question: "「直葬」と「火葬式」は同じですか？",
    answer:
      "ほぼ同じ意味で使われますが、厳密なニュアンスは異なります。「直葬」は式典を行わずに直接火葬するという手順を強調した呼び方、「火葬式」は火葬を中心とした葬儀形式として位置づける呼び方です。実際の内容は同様です。",
  },
  {
    question: "直葬（火葬式）を選んだ場合、後悔することはありますか？",
    answer:
      "「きちんとしたお別れができなかった」と後悔する方もいらっしゃいます。後日、自宅や寺院で偲ぶ会・法要を行うことで気持ちの区切りをつける方も多くいます。事前にご家族でよく話し合うことが大切です。",
  },
  {
    question: "直葬でも戒名はつけてもらえますか？",
    answer:
      "はい、可能です。戒名は葬儀の形式とは別のことで、菩提寺または葬儀社を通じて依頼した僧侶につけていただけます。ただし菩提寺がある場合は必ずお寺へご相談ください。",
  },
  {
    question: "直葬でも四十九日は行いますか？",
    answer:
      "はい、直葬を選んだ場合でも四十九日の法要を行うことは一般的です。葬儀の形式にかかわらず、法要・法事はご遺族の判断で執り行えます。菩提寺がある場合はお寺へご相談ください。",
  },
];

export default function CremationDifferencePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title="火葬式と直葬の違い"
        subtitle="定義と特徴をわかりやすく解説します"
        en="CREMATION vs CHOKUSO"
      />
      <Breadcrumb
        items={[
          { label: "葬儀プラン", href: "/plans" },
          { label: "火葬式", href: "/plans/cremation" },
          { label: "火葬式と直葬の違い" },
        ]}
      />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">DEFINITION</p>
            <h1 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              火葬式と直葬の違い
            </h1>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              「火葬式」と「直葬（ちょくそう）」は、どちらもお通夜・告別式などの式典を行わず、火葬のみで故人をお見送りする葬儀形式です。実質的にはほぼ同じ内容を指していますが、呼び方が異なることがあります。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              「直葬」という言葉は、「直接火葬する」という手順を端的に表した言い方で、やや事務的なニュアンスを含むことがあります。一方「火葬式」は、火葬を中心とした「式」として捉える呼び方で、故人への敬意を示す表現として用いられることが多い言葉です。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              稲垣屋葬儀店では、どちらの言葉でお問い合わせいただいても、同じ内容のサービスとしてご案内しています。以下では、両者の定義・共通点・地域差・選ぶ際の注意点を詳しく解説します。
            </p>
          </FadeInUp>

          <FadeInUp className="mt-16 mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">DEFINITION</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              それぞれの定義
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp className="mb-16">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-[#e8ddf4] px-6 py-6">
                <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">KASOSHIKI</p>
                <h3 className="text-[#312852] text-xl tracking-wide mb-4" style={{ fontFamily: "var(--font-mincho)" }}>火葬式</h3>
                <p className="text-[#4a4a4a] text-base leading-relaxed mb-4">
                  火葬を中心とした葬儀形式を指す言葉です。「式」という言葉が入っていることからわかるように、火葬前のお別れや読経なども含めた一連の儀式的な意味合いを持ちます。
                </p>
                <p className="text-[#4a4a4a] text-sm leading-relaxed">
                  葬儀社が提供するプランとして広く使われており、「火葬式プラン」として案内されることが多い呼称です。
                </p>
              </div>
              <div className="border border-[#e8ddf4] px-6 py-6">
                <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">CHOKUSO</p>
                <h3 className="text-[#312852] text-xl tracking-wide mb-4" style={{ fontFamily: "var(--font-mincho)" }}>直葬</h3>
                <p className="text-[#4a4a4a] text-base leading-relaxed mb-4">
                  「直接火葬する」という意味で使われる言葉です。式典を経由せずに火葬する手順を強調した呼び方であり、比較的新しい呼称です。
                </p>
                <p className="text-[#4a4a4a] text-sm leading-relaxed">
                  費用を最小限に抑えたい方や、家族だけで静かに見送りたい方の選択肢として知られるようになりました。
                </p>
              </div>
            </div>
          </FadeInUp>

          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COMMON POINTS</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              共通点
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-16">
            {[
              {
                title: "お通夜・告別式を行わない",
                desc: "どちらも宗教的・社会的な式典（お通夜・告別式）を省略します。搬送・安置・納棺・火葬という手順で進みます。",
              },
              {
                title: "参列者はごく近しい家族・親族のみ",
                desc: "式典がないため、一般的にはご家族・近親者のみで行います。広く参列者を招く形ではありません。",
              },
              {
                title: "葬儀社への依頼が必要",
                desc: "ご遺体の搬送・安置・火葬場の手配・役所への書類手続きなど、葬儀社の協力が不可欠です。自分だけで行うことはできません。",
              },
              {
                title: "火葬前のお別れは可能",
                desc: "どちらの形式でも、火葬炉前での短いお別れの時間は設けられます。ご希望によって読経をお願いすることも可能です。",
              },
            ].map((item, i) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-2">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="text-[#312852] text-base tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">REGIONAL DIFFERENCES</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              呼び方の違い・地域差
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp className="mb-16">
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-6">
              「火葬式」「直葬」という呼び方の普及度は地域によって異なります。関東では「直葬」という言葉が広く使われていますが、関西では「火葬式」と呼ばれることが多い傾向があります。
            </p>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-6">
              葛飾区を含む東京都内では、どちらの呼び方も理解されています。葬儀社によって呼び方は異なりますが、内容に大きな違いはありません。
            </p>
            <p className="text-[#4a4a4a] text-base leading-relaxed">
              いずれの呼び名でも、実際にどのような手順でどのような内容が含まれるのかを事前に確認することが重要です。稲垣屋葬儀店では丁寧に内容をご説明します。
            </p>
          </FadeInUp>

          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">POINTS TO NOTE</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              選ぶ際の注意点
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-16">
            {[
              {
                title: "菩提寺への事前確認",
                desc: "菩提寺（先祖代々のお墓があるお寺）がある場合、直葬・火葬式について事前にお寺へご相談ください。宗派や住職の考えによっては、式典なしの葬儀に難色を示されることもあります。後日のお墓への納骨にも影響することがあります。",
              },
              {
                title: "後日の法要について",
                desc: "直葬・火葬式を選ばれた場合でも、四十九日・一周忌などの法要は行うことができます。式典を行わなかった分、後日ゆっくりと偲ぶ機会を設けるご家族も多くいらっしゃいます。",
              },
              {
                title: "参列者への事前連絡",
                desc: "式典がないことを事前に参列者へお伝えすることが大切です。「通夜・告別式は行わない」旨を明確に伝えることで、参列者の混乱を防ぐことができます。",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3 className="text-[#312852] text-lg tracking-wide mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COMPARISON</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              一日葬・家族葬との比較
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp className="mb-16">
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-6">
              火葬式（直葬）・一日葬・家族葬は、それぞれ異なる葬儀形式です。どれが最善かはご家族の状況によって異なります。
            </p>
            <div className="border border-[#e8ddf4] overflow-hidden">
              <div className="grid grid-cols-4 bg-[#f4eef9] border-b border-[#e8ddf4]">
                <div className="px-3 py-3 text-[#312852] text-xs tracking-wide" style={{ fontFamily: "var(--font-mincho)" }}>項目</div>
                <div className="px-3 py-3 text-[#312852] text-xs tracking-wide border-l border-[#e8ddf4]" style={{ fontFamily: "var(--font-mincho)" }}>火葬式</div>
                <div className="px-3 py-3 text-[#312852] text-xs tracking-wide border-l border-[#e8ddf4]" style={{ fontFamily: "var(--font-mincho)" }}>一日葬</div>
                <div className="px-3 py-3 text-[#312852] text-xs tracking-wide border-l border-[#e8ddf4]" style={{ fontFamily: "var(--font-mincho)" }}>家族葬</div>
              </div>
              {[
                { item: "お通夜", cremation: "なし", oneday: "なし", family: "あり" },
                { item: "告別式", cremation: "なし", oneday: "あり", family: "あり" },
                { item: "式典の有無", cremation: "なし", oneday: "あり", family: "あり" },
                { item: "参列者", cremation: "近親者のみ", oneday: "近親者中心", family: "家族・親族" },
                { item: "日程", cremation: "1日以内", oneday: "1日", family: "2日" },
              ].map((row) => (
                <div key={row.item} className="grid grid-cols-4 border-b border-[#e8ddf4] last:border-b-0">
                  <div className="px-3 py-4 text-[#312852] text-xs">{row.item}</div>
                  <div className="px-3 py-4 text-[#4a4a4a] text-xs border-l border-[#e8ddf4]">{row.cremation}</div>
                  <div className="px-3 py-4 text-[#4a4a4a] text-xs border-l border-[#e8ddf4]">{row.oneday}</div>
                  <div className="px-3 py-4 text-[#4a4a4a] text-xs border-l border-[#e8ddf4]">{row.family}</div>
                </div>
              ))}
            </div>
          </FadeInUp>

          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              よくあるご質問
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-16">
            {faqItems.map((faq) => (
              <StaggerItem key={faq.question}>
                <div className="py-7">
                  <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-2">Q</p>
                  <h3 className="text-[#312852] text-base tracking-wide mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                    {faq.question}
                  </h3>
                  <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-2">A</p>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{faq.answer}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp>
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-5">RELATED PAGES</p>
            <div className="divide-y divide-[#e8ddf4]">
              {[
                { href: "/plans/cremation", label: "火葬式（直葬）プランのご案内" },
                { href: "/plans/cremation/flow", label: "火葬式・直葬の流れ" },
                { href: "/plans/cremation/cost", label: "火葬式・直葬の費用" },
                { href: "/plans/oneday-funeral", label: "一日葬プランのご案内" },
                { href: "/plans/family-funeral", label: "家族葬プランのご案内" },
                { href: "/consultation", label: "事前相談のご案内" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between py-4 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group"
                >
                  {link.label}
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
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
