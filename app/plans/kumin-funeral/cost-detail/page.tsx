import type { Metadata } from "next";
import PageHero from "../../../components/PageHero";
import Breadcrumb from "../../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "葛飾区民葬儀の費用と注意点｜稲垣屋葬儀店",
  description:
    "葛飾区民葬儀の費用と注意点。制度で賄われる範囲・別途かかる費用・区民葬儀利用時の流れを稲垣屋葬儀店が丁寧にご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/plans/kumin-funeral/cost-detail" },
};

const faqItems = [
  {
    question: "区民葬儀を使うと費用はどのくらい変わりますか？",
    answer:
      "区民葬儀制度を利用した場合の費用については、葛飾区の規定に基づきます。制度の内容によって費用面でのメリットが異なりますので、具体的な金額は稲垣屋葬儀店またはお近くの区役所にてご確認ください。お見積もりは無料で対応しております。",
  },
  {
    question: "区民葬儀の費用に火葬費用は含まれますか？",
    answer:
      "区民葬儀制度で対応される費用の範囲については、葛飾区の規定によって定められています。火葬費用が含まれるかどうかを含め、詳細は稲垣屋葬儀店またはお近くの区役所にてご確認いただくことをお勧めします。",
  },
  {
    question: "区民葬儀に追加費用は発生しますか？",
    answer:
      "区民葬儀の制度範囲外となるサービス（宗教者費用・飲食・返礼品・オプションサービスなど）については、別途費用が発生する場合があります。どの範囲が制度の対象となるかは規定による部分が大きいため、事前に稲垣屋葬儀店にご相談ください。",
  },
  {
    question: "区民葬儀の最新の費用はどこで確認できますか？",
    answer:
      "葛飾区民葬儀の最新の費用・制度内容は、葛飾区役所または稲垣屋葬儀店（葛飾区指定取扱店）にてご確認ください。制度の内容は変更される場合があります。事前相談は無料ですので、お気軽にお問い合わせください。",
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

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "葛飾区民葬儀の費用と注意点｜稲垣屋葬儀店",
  description:
    "葛飾区民葬儀の費用と注意点。制度で賄われる範囲・別途かかる費用・区民葬儀利用時の流れを稲垣屋葬儀店が丁寧にご説明します。",
  url: "https://www.inagakiyasougiten.com/plans/kumin-funeral/cost-detail",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "区民葬儀", item: "https://www.inagakiyasougiten.com/plans/kumin-funeral" },
      { "@type": "ListItem", position: 3, name: "費用と注意点", item: "https://www.inagakiyasougiten.com/plans/kumin-funeral/cost-detail" },
    ],
  },
};

export default function KuminFuneralCostDetailPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero title="葛飾区民葬儀の費用と注意点" subtitle="費用の構成と注意点をご説明します" en="COST & NOTES" />
      <Breadcrumb
        items={[
          { label: "葬儀プラン", href: "/plans" },
          { label: "区民葬儀", href: "/plans/kumin-funeral" },
          { label: "費用と注意点" },
        ]}
      />

      {/* 費用の考え方 */}
      <section className="py-20 md:py-28 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">OVERVIEW</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em] mb-5"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              区民葬儀における費用の考え方
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mb-6" />
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              葛飾区民葬儀制度は、葛飾区の規定に基づいて葬儀費用の一部に対応する制度です。この制度を利用することで、一定の範囲において費用面でのサポートが受けられる可能性があります。ただし、制度が対応する範囲や具体的な費用は、葛飾区の規定の内容によります。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              区民葬儀制度で対応される費用の範囲と、別途かかる可能性がある費用（宗教者費用・飲食費・返礼品など）の両面を事前にご確認いただくことで、費用全体の計画を立てやすくなります。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              稲垣屋葬儀店（葛飾区指定取扱店）では、区民葬儀制度の内容をわかりやすくご説明した上で、ご状況に応じた費用のご案内をしております。事前相談は無料ですので、お気軽にご相談ください。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* 制度で対応される費用の範囲 */}
      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COVERAGE</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              制度で対応される費用の範囲
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              葛飾区民葬儀制度において対応される費用の範囲は、葛飾区の規定に基づきます。一般的に、区民葬儀制度では葬儀の基本的な内容（搬送・安置・棺・式場設備など）の一部が制度の範囲内となる場合があります。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              ただし、制度の内容・範囲・費用は変更される可能性があります。最新の制度内容については、稲垣屋葬儀店またはお近くの葛飾区役所にてご確認いただくことをお勧めします。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              具体的に何が含まれ、何が含まれないかについては、稲垣屋葬儀店の事前相談で個別にご説明しております。「この費用は制度の範囲内ですか？」というご質問も歓迎ですので、遠慮なくお尋ねください。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* 別途かかる可能性がある費用 */}
      <section className="py-16 md:py-24 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ADDITIONAL COSTS</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              別途かかる可能性がある費用
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "宗教者費用（お布施）",
                desc: "僧侶・神官・牧師などの宗教者をお呼びする場合のお布施は、区民葬儀制度の範囲外となる場合があります。菩提寺がある場合はそちらへの連絡・相談が必要です。ご不明な場合は稲垣屋葬儀店にご相談ください。",
              },
              {
                title: "飲食・返礼品費用",
                desc: "通夜振る舞い・精進落とし（会食）や参列者への返礼品・会葬礼状などの費用は、制度の範囲外となる場合があります。飲食・返礼品の規模・内容によって費用が変わりますので、事前にご確認ください。",
              },
              {
                title: "オプション・追加サービス",
                desc: "区民葬儀の基本的な範囲を超えるサービス（棺のグレードアップ・追加の生花・映像・音楽演出など）は別途費用となる場合があります。どの範囲が制度の対象か、事前に確認しておくと安心です。",
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

          <FadeInUp className="mt-8">
            <p className="text-[#5c4a80] text-sm leading-relaxed border-l-2 border-[#9278be] pl-4">
              上記の内容はあくまで一般的な目安です。葛飾区の規定によって実際の範囲・費用は異なります。詳細は稲垣屋葬儀店またはお近くの区役所にてご確認ください。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* 追加費用の考え方 */}
      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">PLANNING</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              追加費用の考え方と費用計画
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              区民葬儀制度を利用する場合でも、宗教者費用・飲食費・返礼品費用など制度の範囲外となる費用が発生することがあります。費用全体の計画を立てる際は、制度で対応される範囲と、別途かかる費用を合算して考えることが大切です。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              稲垣屋葬儀店では、区民葬儀制度を利用した場合の費用全体を明確にお見積もりしてご提示します。「制度を使うといくらになるのか」「何が含まれないのか」を事前に把握することで、安心して葬儀の準備を進めていただけます。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              費用のご不安は遠慮なくご相談ください。お見積もりは無料で対応しております。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* 注意点 */}
      <section className="py-16 md:py-24 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">NOTES</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              ご利用にあたっての注意点
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "制度内容の変更可能性",
                desc: "葛飾区民葬儀制度の内容（費用・対象者・対応範囲など）は、葛飾区の規定改定などにより変更される場合があります。このページの情報は最新の制度を反映していない可能性があります。",
              },
              {
                title: "最新情報の確認をお勧めします",
                desc: "区民葬儀制度の最新の費用・制度内容については、葛飾区役所または稲垣屋葬儀店（葛飾区指定取扱店）にてご確認いただくことをお勧めします。稲垣屋葬儀店では最新の情報をもとにご案内するよう努めております。",
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
                { href: "/plans/kumin-funeral", label: "区民葬儀について" },
                { href: "/plans/kumin-funeral/guide", label: "区民葬儀の利用ガイド" },
                { href: "/plans/kumin-funeral/flow", label: "区民葬儀の流れ" },
                { href: "/plans/family-funeral/cost", label: "家族葬の費用" },
                { href: "/contact", label: "お問い合わせ" },
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
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              ご不明な点はお気軽にご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              事前相談・お見積もりは無料です。強引な勧誘は一切行いません。
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
