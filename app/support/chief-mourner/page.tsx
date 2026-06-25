import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "喪主の役割について｜決め方・やること・心構え｜葛飾区 稲垣屋葬儀店",
  description:
    "喪主の役割・決め方・葬儀前後にやることを解説します。初めて喪主を務める方へ、葛飾区の稲垣屋葬儀店が丁寧にサポートします。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/support/chief-mourner" },
};

const faqs = [
  {
    q: "喪主は誰が務めるのが一般的ですか？",
    a: "一般的には、故人の配偶者が喪主を務めます。配偶者が高齢や体調不良の場合は、長男・長女などの子供が務めることが多いです。法律的な定めはなく、遺族で話し合って決めることができます。",
  },
  {
    q: "喪主と施主の違いは何ですか？",
    a: "喪主は葬儀の代表者として儀式を取り仕切る役割で、施主は葬儀費用を負担する人を指します。一般的には同一人物が務めることが多いですが、喪主が高齢の場合などは子供が施主となり、両者が別々になることもあります。",
  },
  {
    q: "喪主を引き受けましたが何から始めればよいですか？",
    a: "まず葬儀社に連絡することが最優先です。葬儀社が遺体の搬送から始まり、通夜・葬儀の日程・会場・内容について一緒に決めていきます。喪主は葬儀社と連携しながら進めますので、一人で抱え込まないようにしましょう。",
  },
  {
    q: "喪主は葬儀中ずっと立ちっぱなしですか？",
    a: "葬儀の進行の多くは葬儀社が担いますが、喪主は要所要所で参列者への応対や挨拶を行います。体力的に不安な場合は葬儀社スタッフに相談してください。椅子の用意や休憩の配慮をしてもらえる場合があります。",
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

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "喪主の役割について｜決め方・やること・心構え｜葛飾区 稲垣屋葬儀店",
  description:
    "喪主の役割・決め方・葬儀前後にやることを解説します。初めて喪主を務める方へ、葛飾区の稲垣屋葬儀店が丁寧にサポートします。",
  url: "https://www.inagakiyasougiten.com/support/chief-mourner",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀サポート", item: "https://www.inagakiyasougiten.com/support" },
      { "@type": "ListItem", position: 3, name: "喪主の役割について", item: "https://www.inagakiyasougiten.com/support/chief-mourner" },
    ],
  },
};

export default function ChiefMournerPage() {
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
        title="喪主の役割について"
        subtitle="喪主の決め方・葬儀前後にやること・心構えをご説明します"
        en="CHIEF MOURNER'S ROLE"
      />
      <Breadcrumb
        items={[
          { label: "サポート情報", href: "/support" },
          { label: "喪主の役割について" },
        ]}
      />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ABOUT</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              喪主とは
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              喪主（もしゅ）とは、葬儀を取り仕切る遺族の代表者のことです。参列者・僧侶・葬儀社など、葬儀に関わるすべての方への窓口となり、葬儀全体の代表として挨拶や応対を行います。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              喪主を務めることは、精神的・体力的に大変な面もありますが、葬儀社のサポートを受けながら一歩一歩進めることができます。稲垣屋葬儀店では、喪主の方が安心して葬儀に臨めるよう、丁寧にお手伝いいたします。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">TASKS</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              喪主がやること
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "葬儀社への連絡・打ち合わせ",
                desc: "ご逝去後、まず葬儀社に連絡します。遺体の搬送先、通夜・葬儀の日程・会場・式の規模・内容（宗教・宗派など）を葬儀社と決めていきます。",
              },
              {
                title: "訃報の連絡",
                desc: "親族・知人・会社などへ訃報を連絡します。連絡する範囲・順番については事前に整理しておくとスムーズです。",
              },
              {
                title: "通夜・葬儀での参列者応対・挨拶",
                desc: "通夜・告別式では参列者をお迎えし、各場面での挨拶を行います。挨拶は事前にメモを用意しておくと安心です。",
              },
              {
                title: "寺院・宗教者との調整",
                desc: "菩提寺（ぼだいじ）がある場合はご住職への連絡・相談が必要です。読経の依頼、戒名（法名）の相談などを行います。",
              },
              {
                title: "葬儀費用・香典の管理",
                desc: "葬儀費用の支払い、香典の管理・集計を行います。会計係を別途設ける場合も、最終的には喪主が確認します。",
              },
              {
                title: "葬儀後の諸手続き",
                desc: "死亡届の提出・各種保険や年金の手続き・相続の準備など、葬儀後にも多くの手続きが待っています。優先順位をつけて一つずつ進めましょう。",
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
              { href: "/support/greeting", label: "喪主の挨拶について" },
              { href: "/support/notification", label: "訃報の連絡について" },
              { href: "/support/reception", label: "受付の対応について" },
              { href: "/support/first-time", label: "初めての方へ（葬儀の流れ）" },
              { href: "/support/documents", label: "葬儀後の手続き・書類について" },
              { href: "/support/funeral-aftercare", label: "葬儀後のアフターケア" },
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
              稲垣屋葬儀店は24時間365日対応。喪主として不安なことはなんでもご相談ください。
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
