import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "葬儀のことが全くわからない方へ｜葛飾区 稲垣屋葬儀店",
  description:
    "葬儀が初めてで何も分からない方へ。最初の一歩から丁寧にご案内します。葛飾区の稲垣屋葬儀店が、はじめての方にも分かりやすく葬儀の流れ・費用・プランを説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/needs/no-idea" },
};

const faqs = [
  {
    q: "葬儀のことが全く分かりません。何から始めればよいですか？",
    a: "まず稲垣屋葬儀店（03-3690-0870）へお電話ください。「何も分からない」という状態でご連絡いただいて構いません。スタッフが現在の状況をお聞きし、今すぐすべきことを一つひとつご案内します。いざというときは「搬送」だけ依頼していただければ、その後のことはスタッフがご案内します。",
  },
  {
    q: "葬儀にはどれくらい費用がかかりますか？",
    a: "葬儀の費用は、選ぶプランや規模によって異なります。最もシンプルな火葬式から、家族葬・一般葬まで幅広い形式があります。稲垣屋葬儀店では事前相談（生前相談）の際に、ご希望に合わせた費用目安をご説明します。まずはお気軽にお問い合わせください。",
  },
  {
    q: "菩提寺や宗教が分かりません。どうすればよいですか？",
    a: "菩提寺・宗派が不明な場合でも、葬儀は行えます。ご家族や親族に確認していただくか、故人のご自宅にある仏壇・位牌・数珠などから手がかりが得られることがあります。不明な場合は宗教者なしの葬儀（無宗教葬）や、ご希望に応じた宗教者をご紹介することも可能ですのでご相談ください。",
  },
  {
    q: "葬儀の後にやるべきことは何ですか？",
    a: "葬儀後には、死亡届の提出（通常は葬儀社がサポート）、各種機関への届け出（年金・銀行・保険など）、四十九日法要の準備などが必要です。稲垣屋葬儀店では葬儀後の手続きについてもご案内しますのでご安心ください。",
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

const basics = [
  {
    title: "葬儀社に連絡するタイミング",
    desc: "ご家族が亡くなった直後、または亡くなる見込みが出た段階でご連絡ください。病院でご逝去の場合、医師から死亡診断書を受け取った後、できるだけ早めにご連絡ください。稲垣屋葬儀店は24時間365日対応（03-3690-0870）しております。",
  },
  {
    title: "葬儀の形式の種類",
    desc: "葬儀にはいくつかの形式があります。「家族葬」（少人数の親しい方のみ）、「一日葬」（通夜なし・1日で完結）、「火葬式（直葬）」（儀式を省いた最もシンプルな形）、「一般葬」（多くの方をお呼びする伝統的な形）などがあります。",
  },
  {
    title: "費用の構成",
    desc: "葬儀費用は「葬儀社へのプラン費用」「宗教者へのお布施」「飲食・返礼品などの実費」の3つに大きく分かれます。プランを選ぶことで、葬儀社への費用をコントロールできます。",
  },
  {
    title: "葬儀の大まかな流れ",
    desc: "ご逝去後、葬儀社への連絡→遺体の搬送・安置→打ち合わせ→通夜（または省略）→告別式・出棺→火葬→収骨、という流れが一般的です。全体で2〜3日程度かかります（プランにより異なります）。",
  },
  {
    title: "何も決まっていなくても大丈夫",
    desc: "葬儀のことが全く分からなくても、最初から全部決める必要はありません。まず「ご遺体の搬送」だけ依頼していただければ、その後のことはスタッフが一つひとつ丁寧にご案内します。",
  },
];

export default function NoIdeaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        title="葬儀のことが全くわからない方へ"
        subtitle="最初の一歩から、丁寧にご案内します"
        en="COMPLETE BEGINNER"
      />
      <Breadcrumb
        items={[
          { label: "こんな方へ", href: "/needs" },
          { label: "葬儀のことが全くわからない方へ" },
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
              「何も分からない」で、大丈夫です
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              葬儀の経験がない方にとって、ご逝去の直後に「何をすればよいか」を判断することは非常に困難です。「どこに連絡すればよいか」「費用はどれくらいかかるのか」「何を決めなければいけないのか」——こうした不安は、初めての葬儀では当然のことです。
            </p>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              稲垣屋葬儀店は、明治11年頃の創業以来、葛飾区で長年にわたり地域の方々の葬儀をお手伝いしてきました。葬祭ディレクター1級を取得したスタッフが、はじめての方にも分かりやすく一つひとつご説明しながら対応いたします。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              まず「全く分からない」という状態でお電話いただいて構いません。何もご準備できていなくても、スタッフが現在の状況からご案内します。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">BASICS</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              葬儀の基本を知っておきましょう
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {basics.map((item) => (
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
              詳しい流れは
              <Link href="/flow" className="underline underline-offset-2 hover:text-[#312852] transition-colors mx-1">
                葬儀の流れ全体ガイド
              </Link>
              もご参照ください。
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

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
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
              { href: "/support/first-time", label: "はじめての葬儀をお考えの方へ" },
              { href: "/flow", label: "葬儀の流れ全体ガイド" },
              { href: "/consultation", label: "事前相談のご案内" },
              { href: "/needs/sudden", label: "急な葬儀で困っている方へ" },
              { href: "/faq", label: "よくある質問" },
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
              まず「分からない」と、おっしゃってください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              何も分からなくても大丈夫です。稲垣屋葬儀店は24時間365日対応しております。一緒に一歩ずつ進めます。
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
