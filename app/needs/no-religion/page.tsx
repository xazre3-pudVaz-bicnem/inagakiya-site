import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "無宗教で葬儀をしたい方へ｜葛飾区 稲垣屋葬儀店",
  description:
    "宗教的な儀式を行わない自由葬・無宗教葬をお考えの方へ。葛飾区の稲垣屋葬儀店が無宗教葬の流れ・内容・注意点をわかりやすくご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/needs/no-religion" },
};

const faqs = [
  {
    q: "宗教者（僧侶など）を呼ばずに葬儀はできますか？",
    a: "はい、可能です。無宗教葬（自由葬）という形式があり、宗教者を招かずにご家族・参列者だけでお別れする葬儀を行うことができます。読経・宗教的儀式を省き、音楽・献花・思い出の映像などで構成することができます。",
  },
  {
    q: "無宗教葬でも、火葬はできますか？",
    a: "はい、もちろんです。無宗教葬の後も、通常と同じように火葬を行います。火葬そのものは宗教と関係なく、行政の手続きに基づいて行われます。",
  },
  {
    q: "菩提寺があっても無宗教で葬儀ができますか？",
    a: "菩提寺がある場合は、事前にご相談されることをお勧めします。菩提寺の墓に埋葬する場合、寺院が宗教的な葬儀を条件とすることがあります。ご状況に応じてアドバイスしますのでご相談ください。",
  },
  {
    q: "無宗教葬はどのような流れで行いますか？",
    a: "一般的な無宗教葬は、故人の好きな音楽の演奏、参列者からの言葉（弔辞）、献花、思い出の映像上映などで構成されます。宗教儀式の代わりに、故人の人柄や人生を振り返る内容にすることが多いです。具体的な内容はご家族と一緒に考えます。",
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

export default function NoReligionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        title="無宗教で葬儀をしたい方へ"
        subtitle="宗教にとらわれない、自由なお別れの形"
        en="NON-RELIGIOUS FUNERAL"
      />
      <Breadcrumb
        items={[
          { label: "こんな方へ", href: "/needs" },
          { label: "無宗教で葬儀をしたい方へ" },
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
              宗教にとらわれず、故人らしい葬儀を
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              「宗教を信仰していないので、読経などの宗教的な儀式を行いたくない」「故人が無宗教を希望していた」「特定の宗教に属していないが、どのように葬儀を行えばよいか分からない」——このようなご相談は近年増えています。
            </p>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              宗教者を招かない「無宗教葬（自由葬）」という形式があります。読経の代わりに故人の好きな音楽を流したり、参列者それぞれが言葉を届けたりと、形式にとらわれず故人らしいお別れの場を作ることができます。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              稲垣屋葬儀店では、無宗教葬のご経験も豊富にございます。ご希望の形を丁寧にお聞きし、最適な内容をご提案します。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">CONTENT</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              無宗教葬でできること
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "音楽による演出",
                desc: "故人の好きだった音楽を流したり、生演奏をお願いしたりと、音楽で故人を偲ぶ場を作ることができます。",
              },
              {
                title: "参列者からの弔辞・メッセージ",
                desc: "宗教的な儀礼の代わりに、参列者が思い出や感謝の言葉を伝える場を設けることができます。",
              },
              {
                title: "映像・写真による回顧",
                desc: "故人の生涯を振り返る写真スライドショーや映像を上映し、その人らしさを参列者全員で共有できます。",
              },
              {
                title: "献花・フラワーセレモニー",
                desc: "読経の代わりに献花を中心としたお別れの形も選べます。シンプルながら心のこもったセレモニーになります。",
              },
              {
                title: "宗教儀式なしの火葬式",
                desc: "通夜・告別式を行わず、宗教儀式なしのシンプルな形で火葬のみ行うことも可能です。",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3
                    className="text-[#312852] text-base tracking-wide mb-2"
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
              詳しくは
              <Link href="/support/no-religion" className="underline underline-offset-2 hover:text-[#312852] transition-colors mx-1">
                無宗教葬のサポート
              </Link>
              もご覧ください。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">NOTES</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              無宗教葬を選ぶ際の注意点
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "菩提寺がある場合は事前に確認を",
                desc: "菩提寺の墓に埋葬する予定がある場合、寺院が宗教的な葬儀を条件とすることがあります。事前に菩提寺へご確認されることをお勧めします。",
              },
              {
                title: "ご家族・親族間で意見を合わせる",
                desc: "無宗教の形式について、ご家族や親族の中で意見が異なることもあります。事前に十分な話し合いをして、全員が納得した状態で進めることが大切です。",
              },
              {
                title: "宗教と無宗教の中間的な形式も選べる",
                desc: "「宗教儀式は省くが、形式はある程度保ちたい」という場合は、献花・弔辞のみの形式など、中間的な選択肢もあります。ご希望に合わせて柔軟にご提案します。",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3
                    className="text-[#312852] text-base tracking-wide mb-2"
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
              { href: "/support/no-religion", label: "無宗教葬サポートの詳細" },
              { href: "/support/religion", label: "宗教別葬儀のご案内" },
              { href: "/needs/simple", label: "シンプルな葬儀を希望の方へ" },
              { href: "/plans/cremation", label: "火葬式（直葬）プランの詳細" },
              { href: "/consultation", label: "事前相談のご案内" },
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
              無宗教葬について、ご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              ご希望の形をお聞きし、故人らしいお別れの場をご一緒に考えます。稲垣屋葬儀店は24時間365日対応しております。
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
