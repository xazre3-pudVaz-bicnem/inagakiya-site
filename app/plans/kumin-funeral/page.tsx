import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";
import RelatedColumns from "../../components/RelatedColumns";

export const metadata: Metadata = pageMetadata({
  title: "葛飾区の区民葬儀｜区民葬儀取扱店の稲垣屋葬儀店",
  description:
    "葛飾区の区民葬儀について解説。稲垣屋葬儀店は葛飾区の区民葬儀取扱店として認定されています。制度の概要・対象者・費用の考え方・申請の流れをご案内します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/plans/kumin-funeral" },
});

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "区民葬儀",
  description: "東京23区（特別区）共通の区民葬儀制度による葬儀。故人または喪主が23区にお住まいの場合に利用でき、祭壇・霊柩車・火葬・骨つぼの4品目を23区共通の協定料金で、必要なものを選んで利用できます。稲垣屋葬儀店は葛飾区民葬儀取扱店で、すべてのプランで区民葬儀をご利用いただけます。",
  provider: {
    "@type": "FuneralHome",
    name: "稲垣屋葬儀店",
    url: "https://www.inagakiyasougiten.com",
  },
  areaServed: { "@type": "City", name: "葛飾区" },
  url: "https://www.inagakiyasougiten.com/plans/kumin-funeral",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "葛飾区の区民葬儀とは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "東京23区（特別区）共通の葬儀制度で、葛飾区にお住まいの方もご利用いただけます。区民葬儀取扱店を通じて申し込むことで、祭壇・霊柩車・火葬・骨つぼ（遺骨収納容器）の4品目を23区共通の協定料金で利用できます。必要なものを選んで組み合わせることができ、それ以外の費用は別途必要です。",
      },
    },
    {
      "@type": "Question",
      name: "区民葬儀は誰でも使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "東京23区にお住まいの方が対象です。ご逝去された方または喪主の方が23区内に住民登録をお持ちの場合にご利用いただけます。葛飾区以外の23区（足立区・江戸川区など）にお住まいの方もご利用いただけます。詳細の対象条件は稲垣屋葬儀店へお問い合わせください。",
      },
    },
    {
      "@type": "Question",
      name: "稲垣屋葬儀店は区民葬儀取扱店として認定されていますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、稲垣屋葬儀店は葛飾区が指定する区民葬儀取扱店として認定されています。申し込みから葬儀の執行まで、一貫してサポートいたします。",
      },
    },
    {
      "@type": "Question",
      name: "区民葬儀の費用はどのくらいかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "区民葬儀では、祭壇・霊柩車・火葬・骨つぼ（遺骨収納容器）の4品目に23区共通の協定料金が設定されており、必要なものを選んで組み合わせられます。稲垣屋葬儀店では、直葬プラン（180,000円）から社葬プラン（1,800,000円〜）まで、すべてのプランで区民葬儀をご利用いただけます。実際の費用は内容により異なりますので、詳細は稲垣屋葬儀店または区役所にてご確認ください。",
      },
    },
    {
      "@type": "Question",
      name: "区民葬儀を利用すると火葬料金の助成はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "四ツ木斎場など東京博善が運営する6斎場（町屋・落合・代々幡・四ツ木・桐ケ谷・堀ノ内）は2026年3月末で区民葬儀の取り扱いを終了したため、これらの斎場では区民葬儀の火葬券を使えません。代わりに令和8年4月1日から当面の間、23区共通の助成制度が設けられ、区民葬儀で祭壇（棺のみの利用を含む）または霊柩車のいずれかを利用し、これらの斎場で最も低い火葬料金（大人87,000円）を支払った場合に、大人27,000円・満6歳以下の小人15,000円を上限として助成を受けられます。故人様が住民登録をしていた区に、火葬日の翌日から2年以内に申請します。詳しい条件は区役所でご確認ください。",
      },
    },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "葛飾区の区民葬儀｜区民葬儀取扱店の稲垣屋葬儀店",
  description:
    "葛飾区の区民葬儀について解説。稲垣屋葬儀店は葛飾区の区民葬儀取扱店として認定されています。制度の概要・対象者・費用の考え方・申請の流れをご案内します。",
  url: "https://www.inagakiyasougiten.com/plans/kumin-funeral",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀プラン", item: "https://www.inagakiyasougiten.com/plans" },
      { "@type": "ListItem", position: 3, name: "区民葬儀", item: "https://www.inagakiyasougiten.com/plans/kumin-funeral" },
    ],
  },
};

export default function KuminFuneralPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

      <PageHero title="区民葬儀" subtitle="東京23区にお住まいの方が利用できる葬儀制度" en="KUMINSO-GI" />
      <Breadcrumb items={[{ label: "葬儀プラン", href: "/plans" }, { label: "区民葬儀" }]} />

      {/* このページでわかること */}
      <section className="py-12 bg-white border-b border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ON THIS PAGE</p>
            <h2
              className="text-[#312852] text-xl md:text-2xl tracking-[0.08em] mb-6"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              このページでわかること
            </h2>
            <ul className="divide-y divide-[#e8ddf4]">
              {[
                "葛飾区の区民葬儀制度の概要と対象者",
                "稲垣屋葬儀店が葛飾区民葬儀取扱店として認定されている理由",
                "区民葬儀の費用の考え方と申請の流れ",
                "区民葬儀に関するよくある質問",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 py-3">
                  <span className="text-[#c9a55a] text-xs mt-1 shrink-0">—</span>
                  <span className="text-[#4a4a4a] text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </FadeInUp>
        </div>
      </section>

      {/* 区民葬儀制度とは */}
      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ABOUT KUMINSO-GI</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              区民葬儀制度とは
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              区民葬儀は、東京23区（特別区）共通の葬儀に関する制度です。区民葬儀取扱店（葬儀社）を通じて申し込むことで、祭壇・霊柩車・火葬・骨つぼ（遺骨収納容器）の4品目を23区共通の協定料金で利用できます。必要なものを選んで組み合わせることができ、それ以外の費用は別途必要です。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              対象となるのは、ご逝去された方または喪主の方が東京23区内に住民登録をお持ちの場合です。葛飾区以外の23区（足立区・江戸川区など）にお住まいの方もご利用いただけます。ご利用の際は区民葬儀取扱店に「区民葬儀を利用したい」とお伝えください。区民葬儀券は、死亡届の提出とあわせて区役所で申請し、取扱店にお渡しください。最新の正確な情報は、区役所または稲垣屋葬儀店へお問い合わせください。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              なお、四ツ木斎場など東京博善が運営する6斎場（町屋・落合・代々幡・四ツ木・桐ケ谷・堀ノ内）は2026年3月末で区民葬儀の取り扱いを終了し、これらの斎場では区民葬儀の火葬券を使えなくなりました。その代わりとして令和8年4月1日から当面の間、23区共通の火葬料金の助成制度が設けられています。区民葬儀で祭壇（棺のみの利用を含む）または霊柩車を利用し、これらの斎場で最も低い火葬料金（大人87,000円）を支払った場合、大人27,000円・満6歳以下の小人15,000円を上限として助成を受けられます。申請は火葬日の翌日から2年以内です。詳しくは区役所でご確認ください。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              稲垣屋葬儀店は葛飾区が指定する区民葬儀取扱店で、すべてのプランで区民葬儀をご利用いただけます。区民葬儀制度のご利用を希望される方に対し、申し込み手続きのご案内から葬儀の執行まで、一貫してお手伝いします。
            </p>
          </FadeInUp>

          {/* 関連ページへのリンク */}
          <FadeInUp className="mt-10">
            <div className="divide-y divide-[#e8ddf4] border-t border-[#e8ddf4]">
              {[
                { href: "/plans/kumin-funeral/guide", label: "区民葬儀 制度ガイド" },
                { href: "/plans/kumin-funeral/cost-detail", label: "区民葬儀 費用の詳細" },
                { href: "/plans/kumin-funeral/flow", label: "区民葬儀 申請・利用の流れ" },
              ].map((link) => (
                <div key={link.href} className="py-4">
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group"
                  >
                    {link.label}
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* 稲垣屋が取扱店である理由 */}
      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">WHY INAGAKIYA</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              稲垣屋葬儀店が区民葬儀取扱店である理由
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "葛飾区堀切を拠点とする地域密着の葬儀社",
                desc: "稲垣屋葬儀店は東京都葛飾区堀切6-33-4に拠点を置く、葛飾区の地域密着型葬儀社です。明治11年頃に足立区千住で創業し、葛飾区では60年以上にわたり地域のご家族のお別れをお手伝いしてきた歴史があります。",
              },
              {
                title: "葬祭ディレクター1級取得",
                desc: "代表・飯田雄生は厚生労働省認定の葬祭ディレクター1級を取得しています。葬儀全般に関する深い専門知識をもって、区民葬儀の制度説明から手続きまで丁寧にご対応します。",
              },
              {
                title: "葛飾区からの指定・認定",
                desc: "稲垣屋葬儀店は葛飾区が指定する区民葬儀取扱店として正式に認定されています。区民葬儀制度のご利用を希望される方は、安心してご相談ください。",
              },
              {
                title: "24時間365日対応",
                desc: "ご逝去の連絡は深夜・早朝を問わず入ります。稲垣屋葬儀店では24時間365日、いつでもお電話いただけます。急なご連絡にも迅速に対応いたします。",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-8">
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

      {/* ご利用の流れ */}
      <section className="py-20 md:py-28 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">HOW TO USE</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              ご利用の流れ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-10">
            {[
              {
                number: "01",
                title: "稲垣屋葬儀店へのご連絡",
                desc: "まずはお電話またはお問い合わせフォームにてご連絡ください。区民葬儀制度のご利用をご希望の旨をお伝えください。24時間365日対応しております。",
              },
              {
                number: "02",
                title: "対象確認・手続き案内",
                desc: "ご逝去された方または喪主の方が東京23区にお住まいであることをご確認します。区民葬儀の申し込み手続きについて丁寧にご案内します。",
              },
              {
                number: "03",
                title: "葬儀の打ち合わせ",
                desc: "祭壇・霊柩車・火葬・骨つぼのうち区民葬儀の協定料金で利用するものを選び、稲垣屋葬儀店のプランとあわせて、ご家族のご希望に合った葬儀内容を打ち合わせします。",
              },
              {
                number: "04",
                title: "葬儀の執行",
                desc: "稲垣屋葬儀店のスタッフが、心を込めてご葬儀をお手伝いします。",
              },
            ].map((step) => (
              <StaggerItem key={step.number}>
                <div className="flex items-start gap-6 py-8">
                  <div className="shrink-0 w-14 text-center pt-1">
                    <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-1">STEP</p>
                    <p
                      className="text-[#c9a55a] text-2xl tracking-wider"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      {step.number}
                    </p>
                  </div>
                  <div className="flex-1 pt-1">
                    <h4
                      className="text-[#312852] text-lg tracking-wide mb-2"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      {step.title}
                    </h4>
                    <p className="text-[#4a4a4a] text-base leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp>
            <p className="text-[#7560a0] text-sm leading-loose">
              ※ 区民葬儀の祭壇・霊柩車・火葬・骨つぼ（遺骨収納容器）の4品目の料金は、23区共通の協定料金です。それ以外の費用は別途必要です。内容・料金は改定される場合があります。最新の情報は稲垣屋葬儀店または区役所にてご確認ください。
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/plans/kumin-funeral/flow"
                className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group"
              >
                申請の流れを詳しく見る
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/plans/kumin-funeral/cost-detail"
                className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group"
              >
                費用の詳細を見る
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/plans"
                className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group"
              >
                他のプランを見る
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              よくある質問
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                q: "葛飾区の区民葬儀とは何ですか？",
                a: "東京23区（特別区）共通の葬儀制度で、葛飾区にお住まいの方もご利用いただけます。区民葬儀取扱店を通じて申し込むことで、祭壇・霊柩車・火葬・骨つぼ（遺骨収納容器）の4品目を23区共通の協定料金で利用できます。必要なものを選んで組み合わせることができ、それ以外の費用は別途必要です。最新情報はお問い合わせください。",
              },
              {
                q: "区民葬儀は誰でも利用できますか？",
                a: "東京23区にお住まいの方が対象です。ご逝去された方または喪主の方が23区内に住民登録をお持ちの場合にご利用いただけます。葛飾区以外の23区（足立区・江戸川区など）にお住まいの方もご利用いただけます。詳細の対象条件は稲垣屋葬儀店または区役所へお問い合わせください。",
              },
              {
                q: "区民葬儀の費用はどのくらいかかりますか？",
                a: "区民葬儀では、祭壇・霊柩車・火葬・骨つぼ（遺骨収納容器）の4品目に23区共通の協定料金が設定されており、必要なものを選んで組み合わせられます。稲垣屋葬儀店では、直葬プラン（180,000円）から社葬プラン（1,800,000円〜）まで、すべてのプランで区民葬儀をご利用いただけます。実際の費用は葬儀の内容により異なります。詳細は稲垣屋葬儀店へお気軽にお問い合わせください。",
              },
              {
                q: "区民葬儀を利用すると火葬料金の助成はありますか？",
                a: "四ツ木斎場など東京博善が運営する6斎場（町屋・落合・代々幡・四ツ木・桐ケ谷・堀ノ内）は2026年3月末で区民葬儀の取り扱いを終了したため、これらの斎場では区民葬儀の火葬券を使えません。代わりに令和8年4月1日から当面の間、23区共通の助成制度が設けられ、区民葬儀で祭壇（棺のみの利用を含む）または霊柩車のいずれかを利用し、これらの斎場で最も低い火葬料金（大人87,000円）を支払った場合に、大人27,000円・満6歳以下の小人15,000円を上限として助成を受けられます。故人様が住民登録をしていた区に、火葬日の翌日から2年以内に申請します。詳しい条件は区役所でご確認ください。",
              },
              {
                q: "急なご逝去でも区民葬儀の申し込みはできますか？",
                a: "はい、ご対応できます。稲垣屋葬儀店は24時間365日対応しておりますので、深夜・早朝でもお電話ください。申し込み手続きについて丁寧にご案内いたします。",
              },
            ].map((faq) => (
              <StaggerItem key={faq.q}>
                <div className="py-8">
                  <h3
                    className="text-[#312852] text-base md:text-lg tracking-wide mb-3"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    Q. {faq.q}
                  </h3>
                  <p className="text-[#4a4a4a] text-base leading-relaxed pl-5 border-l border-[#e8ddf4]">
                    {faq.a}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 関連コラム */}
      <section className="py-14 md:py-20 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-7">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COLUMN</p>
            <h2 className="text-[#312852] text-xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              関連コラム
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-4" />
          </FadeInUp>
          <RelatedColumns slugs={["kumin-funeral-katsushika", "kumin-funeral-cost", "kumin-funeral-flow", "kumin-funeral-vs-general", "kumin-funeral-family"]} />
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
              区民葬儀についてご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              区民葬儀制度の詳細・利用条件・費用について、お気軽にご連絡ください。
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
