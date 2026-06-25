import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "葬儀社を選ぶときの比較ポイント｜葛飾区 稲垣屋葬儀店",
  description:
    "葛飾区で葬儀社を選ぶときの比較ポイント。費用の透明性・資格・地域密着・24時間対応など、後悔しない葬儀社選びをご案内します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/compare/funeral-home" },
};

const faqs = [
  {
    q: "葬儀社を選ぶ際、何を最優先にすべきですか？",
    a: "「いざというときに安心して任せられるか」が最大のポイントです。具体的には、費用の透明性（見積もりが明確か）、24時間対応しているか、強引な勧誘がないか、などを確認することをお勧めします。事前に相談してみて、スタッフの対応の丁寧さも確かめていただくと安心です。",
  },
  {
    q: "葬祭ディレクターとはどんな資格ですか？",
    a: "葬祭ディレクターは、厚生労働省が認定する葬儀に関する国家資格です。1級と2級があり、1級は高度な知識と技術を持つことを証明します。稲垣屋葬儀店の代表・飯田雄生は葬祭ディレクター1級を取得しており、葬儀に関する幅広い知識を持って対応します。",
  },
  {
    q: "葛飾区内で葬儀社を選ぶ際、区民葬儀取扱店かどうかは重要ですか？",
    a: "葛飾区民の方が区民葬儀制度を利用したい場合、区指定の取扱店に依頼する必要があります。稲垣屋葬儀店は葛飾区指定の区民葬儀取扱店として登録されております。区民葬儀を検討されている方は、この点もご確認ください。",
  },
  {
    q: "事前に複数の葬儀社に相談しても構いませんか？",
    a: "はい、ぜひ複数の葬儀社に相談・比較されることをお勧めします。稲垣屋葬儀店も比較検討対象の一つとして、お気軽にご相談ください。強引に依頼を求めることはありませんので、情報収集のためのご相談も歓迎します。",
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

const checkPoints = [
  {
    title: "費用の透明性（見積もりの分かりやすさ）",
    desc: "プラン費用と別途費用（実費）が明確に区分された見積書を提示してくれるか確認しましょう。追加費用が後から発生しないかも重要なポイントです。",
  },
  {
    title: "資格・実績（葬祭ディレクター資格など）",
    desc: "葬祭ディレクター1級は厚生労働省が認定する資格です。有資格者が在籍しているかどうかは、葬儀社の専門性の目安になります。",
  },
  {
    title: "地域密着・地元の実績",
    desc: "地域に根ざした葬儀社は、地元の火葬場・霊園・寺院との関係が深く、スムーズな対応が期待できます。長年の地域での実績も確認ポイントです。",
  },
  {
    title: "24時間対応かどうか",
    desc: "ご逝去はいつ起こるか分かりません。深夜・早朝・休日を問わず、速やかに対応してくれる葬儀社を選ぶことが重要です。",
  },
  {
    title: "強引な営業をしないか",
    desc: "事前相談の段階で強引に契約を求めたり、不要なオプションを勧めたりする葬儀社は避けた方が安心です。相談しやすい雰囲気かどうかも確認ください。",
  },
  {
    title: "区民葬儀取扱店の指定があるか（葛飾区の場合）",
    desc: "葛飾区民葬儀制度を利用したい場合、区指定の取扱店である必要があります。葛飾区内で葬儀社を選ぶ際は、この点も確認しておきましょう。",
  },
];

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "葬儀社を選ぶときの比較ポイント｜葛飾区 稲垣屋葬儀店",
  description:
    "葛飾区で葬儀社を選ぶときの比較ポイント。費用の透明性・資格・地域密着・24時間対応など、後悔しない葬儀社選びをご案内します。",
  url: "https://www.inagakiyasougiten.com/compare/funeral-home",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀プラン比較", item: "https://www.inagakiyasougiten.com/compare" },
      { "@type": "ListItem", position: 3, name: "葬儀社の選び方", item: "https://www.inagakiyasougiten.com/compare/funeral-home" },
    ],
  },
};

export default function FuneralHomePage() {
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
        title="葬儀社を選ぶときの比較ポイント"
        subtitle="後悔しない葬儀社選びのために"
        en="CHOOSING A FUNERAL HOME"
      />

      <Breadcrumb
        items={[
          { label: "比較・選び方", href: "/compare" },
          { label: "葬儀社の選び方" },
        ]}
      />

      {/* Intro */}
      <section className="py-16 md:py-20 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-relaxed">
              葬儀社を選ぶことは、大切な方を送り出すうえで重要な判断です。しかし、急な状況の中で比較検討する時間は限られています。だからこそ、事前に葬儀社選びのポイントを知っておくことが大切です。稲垣屋葬儀店では比較対象の一つとして、事前相談をいつでもお受けしています。
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link href="/compare/funeral-plans" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 transition-colors">
                葬儀形式の比較一覧
              </Link>
              <Link href="/about" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 transition-colors">
                稲垣屋葬儀店について
              </Link>
              <Link href="/reasons" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 transition-colors">
                選ばれる理由
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* 比較すべきポイント6項目 */}
      <section className="py-16 md:py-20 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">CHECK POINTS</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              比較すべき6つのポイント
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {checkPoints.map((point, i) => (
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

      {/* 稲垣屋葬儀店の特徴 */}
      <section className="py-16 md:py-20 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-8">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ABOUT US</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              稲垣屋葬儀店の特徴
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <p className="text-[#4a4a4a] text-base leading-relaxed">
              稲垣屋葬儀店は明治11年頃の創業以来、葛飾区に根ざして歩んできた葬儀店です。代表・飯田雄生は葬祭ディレクター1級を取得しており、葬儀に関する幅広い知識と経験を持って対応します。葛飾区指定の区民葬儀取扱店として登録されており、区民葬儀制度にも精通しています。24時間365日対応で、深夜・早朝・休日のご連絡にも迅速にお応えします。事前相談・見積もりは無料で、強引な営業は一切行いません。
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link href="/about" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 transition-colors">
                稲垣屋葬儀店について詳しく
              </Link>
              <Link href="/qualification" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 transition-colors">
                葬祭ディレクター資格について
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
          <FadeInUp delay={0.2} className="mt-8">
            <p className="text-[#4a4a4a] text-sm leading-relaxed">
              その他のご質問は
              <Link href="/faq" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 mx-1 transition-colors">よくある質問ページ</Link>
              もご覧ください。
            </p>
          </FadeInUp>
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
