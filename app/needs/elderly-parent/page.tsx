import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "高齢の親の葬儀を考えている方へ｜葛飾区 稲垣屋葬儀店",
  description:
    "高齢の親御さんの葬儀を事前に考えておきたい方へ。生前相談・事前準備のポイントを葛飾区の稲垣屋葬儀店がわかりやすくご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/needs/elderly-parent" },
};

const faqs = [
  {
    q: "親が高齢で、そろそろ葬儀の準備を考えたほうがよいですか？",
    a: "はい、事前の準備はご家族の安心につながります。いざというときに慌てないためにも、葬儀の形式・費用・流れを事前に確認しておくことをお勧めします。稲垣屋葬儀店では生前相談（事前相談）を承っており、親御さんのご意思を確認しながら準備を進めることができます。",
  },
  {
    q: "親本人を事前相談に連れていく必要はありますか？",
    a: "いいえ、必ずしもご本人がいらっしゃらなくても構いません。お子様などご家族の方だけでご相談いただき、費用・プラン・流れについてのご説明をお聞きいただけます。後日ご本人を交えて再度ご相談いただくことも可能です。",
  },
  {
    q: "親の希望（形式・規模など）を事前に確認する方法はありますか？",
    a: "エンディングノートを活用することをお勧めします。葬儀の形式・規模・宗教・参列者の範囲など、ご本人の希望を書き留めておいていただくと、いざというときにご家族が迷わずに済みます。稲垣屋葬儀店でもエンディングノートのご案内をしております。",
  },
  {
    q: "葬儀費用はいつ支払うのですか？",
    a: "葬儀費用は一般的に、葬儀終了後にお支払いいただきます。事前にご葬儀のプランや内容を確認しておくことで、費用の目安を把握でき、いざというときに慌てて用意する必要がなくなります。",
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

export default function ElderlyParentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        title="高齢の親の葬儀を考えている方へ"
        subtitle="いざというときに慌てないための事前準備"
        en="PLANNING AHEAD"
      />
      <Breadcrumb
        items={[
          { label: "こんな方へ", href: "/needs" },
          { label: "高齢の親の葬儀を考えている方へ" },
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
              事前に考えておくことが、ご家族の安心につながります
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              「親が高齢になってきた。いつかはくる日のことを、少しずつ考えておきたい」——そのようなお気持ちでご相談に来られる方は多くいらっしゃいます。縁起でもないと思う気持ちも自然ですが、事前に準備をしておくことで、いざというときにご家族が慌てずに済みます。
            </p>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              葬儀の準備とは、死を急かすことではなく、残されたご家族への思いやりです。葬儀の形式・費用・流れを事前に把握し、親御さんの意思を確認しておくことで、後悔のないお見送りができます。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              稲垣屋葬儀店では、生前相談（事前相談）を随時承っております。親御さんを連れてこなくても、ご子息・ご子女の方だけでのご相談も歓迎しております。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">PREPARATION</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              事前に準備しておくべきこと
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "親の意思・希望を確認する",
                desc: "葬儀の形式・規模・宗教・参列者の範囲などについて、親御さんの希望を確認しておきましょう。エンディングノートに記録してもらうと、後日ご家族間での共有がスムーズになります。",
              },
              {
                title: "菩提寺・宗教の確認",
                desc: "菩提寺があるかどうか、どの宗派に属しているかを事前に確認しておくと、いざというときに慌てません。菩提寺の連絡先や檀家であることを示す書類の場所も確認しておくとよいでしょう。",
              },
              {
                title: "葬儀費用の目安を把握する",
                desc: "葬儀にかかる費用の目安を事前に把握しておくことで、準備に余裕が生まれます。稲垣屋葬儀店の事前相談では、形式別の費用目安をわかりやすくご説明します。",
              },
              {
                title: "葬儀社を事前に決めておく",
                desc: "いざというとき、葬儀社を比較検討する余裕はほとんどありません。事前に信頼できる葬儀社を決めておくことで、万一の際にすぐに連絡できます。",
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
            <p className="text-[#7560a0] text-sm">
              事前準備については
              <Link href="/consultation/preparation" className="underline underline-offset-2 hover:text-[#312852] transition-colors mx-1">
                葬儀の事前準備ガイド
              </Link>
              もご覧ください。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">CONSULTATION</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              親の葬儀に関する生前相談について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              稲垣屋葬儀店の生前相談（事前相談）では、費用・プラン・流れについてをご説明するほか、「こんな場合はどうする？」というご質問にも丁寧にお答えします。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              親御さんを連れてこなくても、お子様だけでのご相談も歓迎しております。「まだ先のこととして聞いておきたい」という段階でも、お気軽にお問い合わせください。
            </p>
            <Link
              href="/consultation/parent"
              className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors"
            >
              親の葬儀に関する相談について <ChevronRight size={13} />
            </Link>
          </FadeInUp>
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
              { href: "/consultation/parent", label: "親の葬儀についての相談" },
              { href: "/consultation/preparation", label: "葬儀の事前準備ガイド" },
              { href: "/consultation", label: "事前相談のご案内" },
              { href: "/needs/no-idea", label: "葬儀のことが全くわからない方へ" },
              { href: "/support/first-time", label: "はじめての葬儀をお考えの方へ" },
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
              親の葬儀について、まずご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              「まだ先のこと」でも構いません。早めのご相談が、ご家族の安心につながります。稲垣屋葬儀店は24時間365日対応しております。
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
