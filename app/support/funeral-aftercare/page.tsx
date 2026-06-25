import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "葬儀後のアフターケア｜四十九日・各種手続き・心のケア｜葛飾区 稲垣屋葬儀店",
  description:
    "葬儀後の四十九日法要・手続き・香典返し・心のケアについて。葛飾区の稲垣屋葬儀店が葬儀後の生活をサポートします。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/support/funeral-aftercare" },
};

const faqs = [
  {
    q: "葬儀後にまず行うべき手続きは何ですか？",
    a: "まず優先すべき手続きは、①死亡届の提出（7日以内）、②火葬許可証の受け取り、③健康保険・年金の資格喪失手続きです。特に死亡届は期限がありますので注意してください。詳細は葬儀社や役所に確認しましょう。",
  },
  {
    q: "四十九日法要はどのように準備すればよいですか？",
    a: "四十九日法要は、故人の命日から数えて49日目（または直前の土日）に行います。菩提寺に連絡して日程を決め、案内状を親族に送ります。法要後に納骨を行う場合は、お墓や納骨堂の手配も必要です。",
  },
  {
    q: "グリーフケア（悲嘆のケア）とは何ですか？",
    a: "グリーフケアとは、大切な人を亡くしたことによる悲しみや喪失感（グリーフ）に向き合い、回復を支援するケアです。悲しみは自然な感情ですが、長期間にわたって日常生活に支障が出る場合は、専門家に相談することも選択肢のひとつです。",
  },
  {
    q: "稲垣屋葬儀店では葬儀後のサポートはありますか？",
    a: "はい、葬儀後の手続きのご案内や、法要のご相談など、葬儀後もお気軽にご相談いただけます。どんなご質問でも、スタッフが誠心誠意対応いたします。",
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

export default function FuneralAftercarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        title="葬儀後のアフターケア"
        subtitle="四十九日・各種手続き・心のケアについてご説明します"
        en="FUNERAL AFTERCARE"
      />
      <Breadcrumb
        items={[
          { label: "サポート情報", href: "/support" },
          { label: "葬儀後のアフターケア" },
        ]}
      />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">OVERVIEW</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              葬儀後のアフターケアについて
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              葬儀が終わってもご遺族にとっては多くのことが続きます。法要の準備・各種手続き・香典返し・心のケアなど、やるべきことは決して少なくありません。稲垣屋葬儀店では、葬儀後もご遺族に寄り添い、必要なサポートをご提供いたします。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              すべてを一人で抱え込まず、ご家族で分担したり、専門家の力を借りながら、一つずつ進めていきましょう。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">IMMEDIATE</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              葬儀直後〜1週間の対応
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "死亡届・火葬許可証",
                desc: "死亡届は死亡を知ってから7日以内に市区町村役場へ提出します。葬儀社が代行することが多いですが、提出後に火葬許可証を受け取ることを確認しましょう。",
              },
              {
                title: "遺骨の安置と初七日法要",
                desc: "火葬後の遺骨はご自宅に安置します。葬儀当日または翌日に初七日法要（繰り上げ法要）を行うことが増えています。菩提寺と相談して進めましょう。",
              },
              {
                title: "葬儀費用の精算",
                desc: "葬儀社への支払いを葬儀後1〜2週間内に行います。香典の集計も並行して行い、収支を整理しておきましょう。",
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

      <section className="py-20 md:py-28 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">MEMORIAL</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              四十九日・法要の準備
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "四十九日法要",
                desc: "命日から49日目が忌明けです。四十九日法要は、菩提寺または法要会場で行います。親族を招いて法要後に会食を行うことが多く、案内状は3〜4週間前には送りましょう。",
              },
              {
                title: "納骨",
                desc: "四十九日法要に合わせてお墓や納骨堂への納骨を行うことが一般的です。お墓の準備（墓石・区画の確保）がまだの場合は早めに手配しましょう。",
              },
              {
                title: "香典返し",
                desc: "忌明け後2週間程度を目安に香典返しをお送りします。品物と挨拶状をセットで郵送するのが一般的です。詳しくは香典返しのページをご覧ください。",
              },
              {
                title: "一周忌・三回忌",
                desc: "一周忌（1年後の命日）・三回忌（2年後の命日）と法要が続きます。これらの法要も菩提寺と相談しながら、無理のない範囲で準備しましょう。",
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

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">MENTAL HEALTH</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              心のケア（グリーフケア）
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              大切な方を亡くされた後の悲しみや喪失感（グリーフ）は、誰もが経験する自然な感情です。泣きたい時は泣き、悲しみをそのまま受け止めることが大切です。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              葬儀後しばらくは、気力の低下・食欲不振・睡眠障害などが現れることがあります。これらは「グリーフ反応」と呼ばれ、多くの方が経験するものです。時間とともに回復していくことがほとんどですが、長期化する場合は専門家（医師・カウンセラーなど）に相談することも大切な選択肢です。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              稲垣屋葬儀店では、ご葬儀後もご遺族の心に寄り添い、ご不安やご相談に対応いたします。一人で抱え込まずに、いつでもご連絡ください。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#faf9f7] border-t border-[#e8ddf4]">
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

      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">RELATED</p>
            <h2
              className="text-[#312852] text-2xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              関連ページ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              { href: "/support/after-funeral", label: "葬儀後の手続きについて" },
              { href: "/support/documents", label: "葬儀後の書類・手続き一覧" },
              { href: "/support/kouden-return", label: "香典返しについて" },
              { href: "/support/chief-mourner", label: "喪主の役割について" },
              { href: "/support/first-time", label: "初めての方へ（葬儀の流れ）" },
            ].map((link) => (
              <StaggerItem key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between py-5 text-[#5c4a80] hover:text-[#312852] transition-colors group"
                >
                  <span className="text-base tracking-wide" style={{ fontFamily: "var(--font-mincho)" }}>
                    {link.label}
                  </span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
              ご不明な点はお気軽にご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              稲垣屋葬儀店は24時間365日対応。葬儀後のことも、どうぞお気軽にご相談ください。
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
