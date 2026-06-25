import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "何から始めればよいか分からない方へ｜葛飾区 稲垣屋葬儀店",
  description:
    "葬儀のことが何も分からない方へ。「何をすればよいか分からない」という状況から、最初の一歩をご案内します。稲垣屋葬儀店が丁寧にサポートします。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/needs/no-idea" },
};

const faqs = [
  {
    q: "「何も分からない」と電話していいですか？",
    a: "はい、それで構いません。「葬儀のことが全く分からない」という状態でのご連絡は、稲垣屋葬儀店でも最も多くいただくご相談の一つです。何も知らなくて当然ですし、一からご説明します。電話口で「何も分からないのですが」とおっしゃっていただければ、スタッフが順を追ってご案内します。",
  },
  {
    q: "まず何を準備してから電話すればよいですか？",
    a: "何も準備しなくて構いません。急なご逝去の場合は病院名・場所をお伝えいただければ、あとはスタッフが対応します。事前相談の場合は「何が聞きたいか」すら分からなくても大丈夫です。「とりあえず相談したい」という段階で歓迎します。",
  },
  {
    q: "葬儀に関して何も知らないまま任せていいですか？",
    a: "はい、全て任せていただいて構いません。ただし、葬儀の形式・費用・参列者などについては、ご家族の意思決定が必要な場面もあります。稲垣屋葬儀店では、一つひとつ丁寧に説明しながら進めますので、「分からないまま決めさせられた」ということがないようにサポートします。",
  },
  {
    q: "友人・知人の葬儀のことを調べているのですが、相談できますか？",
    a: "はい、ご友人・ご知人の葬儀についてのご相談も承っています。「自分が手伝うことになりそう」「急なご逝去で困っている友人の代わりに」という場合もお気軽にご連絡ください。",
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

export default function NoIdeaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        title="何から始めればよいか分からない方へ"
        subtitle="「分からない」という状態から、一緒に始めます"
        en="FIRST STEP GUIDE"
      />
      <Breadcrumb
        items={[{ label: "ご要望から選ぶ" }, { label: "何から始めるか分からない" }]}
      />

      {/* Intro */}
      <section className="py-20 md:py-28 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ABOUT</p>
            <h2
              className="text-[#312852] text-2xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              「分からなくて当然」です
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              葬儀のことは、多くの方にとって未知の世界です。「何をすればよいか分からない」「どこに電話すればよいか分からない」「何を聞けばよいかも分からない」—そのような状態で稲垣屋葬儀店にご連絡いただく方がほとんどです。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              葬儀のことが分からないのは当然のことです。普段の生活の中でそれほど経験することがないからこそ、突然直面したときに途方に暮れてしまうのは自然なことです。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              稲垣屋葬儀店では、「何も分からない」という状態からでも、一つひとつ丁寧にご案内します。まずはお電話ください。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* まず最初の一歩 */}
      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FIRST STEPS</p>
            <h2
              className="text-[#312852] text-2xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              まず最初の一歩
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                step: "01",
                title: "葬儀社に電話する",
                desc: "まず稲垣屋葬儀店（03-3690-0870）にお電話ください。24時間365日対応しています。急なご逝去の場合も、「そろそろ考えたい」という事前相談の場合も、まずはお電話から始めます。",
              },
              {
                step: "02",
                title: "「何も分からない」と伝える",
                desc: "電話口で「葬儀のことが全く分からない」「何から話せばよいか分からない」とそのままお伝えください。スタッフが状況をお聞きしながら、次のステップをご案内します。事前に何かを準備する必要はありません。",
              },
              {
                step: "03",
                title: "あとはスタッフが案内する",
                desc: "スタッフが順を追って「今すぐ必要なこと」と「後で決めてよいこと」をご説明します。一度に全てを決める必要はありません。一つひとつ確認しながら進めていきます。",
              },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="flex items-start gap-6 py-8">
                  <div className="shrink-0 w-14 text-center pt-1">
                    <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-1">STEP</p>
                    <p
                      className="text-[#c9a55a] text-2xl tracking-wider"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      {item.step}
                    </p>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3
                      className="text-[#312852] text-lg tracking-wide mb-2"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 2つのシナリオ */}
      <section className="py-20 md:py-28 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">SCENARIOS</p>
            <h2
              className="text-[#312852] text-2xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              あなたの状況はどちらですか？
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "事前に備えておきたい場合",
                desc: "「高齢の親がいて、そろそろ考えておきたい」「自分自身の終活として」という場合は、事前相談をご利用ください。費用・形式・流れを把握しておくことで、いざというときに慌てずに対応できます。事前相談は無料です。",
                link: "/consultation",
                linkLabel: "事前相談について",
              },
              {
                title: "急なご逝去に直面している場合",
                desc: "「突然亡くなった」「病院から搬送の手配を言われた」という急な状況の場合は、今すぐお電話ください（03-3690-0870）。24時間365日対応しています。まず搬送・安置を行い、その後に葬儀の詳細を決めていただけます。",
                link: "/needs/sudden",
                linkLabel: "急なご逝去の方へ",
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
                  <p className="text-[#4a4a4a] text-base leading-relaxed mb-3">{item.desc}</p>
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group"
                  >
                    {item.linkLabel}
                    <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* サポート体制 */}
      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">SUPPORT</p>
            <h2
              className="text-[#312852] text-2xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              稲垣屋葬儀店のサポート体制
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              稲垣屋葬儀店では、葬儀のことが全く分からない方に向けた丁寧なサポートを行っています。「何も分からない」という状態でお電話いただいても、スタッフが状況をお聞きしながら、必要なことを一つひとつご案内します。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              強引な勧誘は一切行いません。「話を聞いてみただけ」という段階でも歓迎です。
            </p>
            <div className="flex flex-wrap gap-5 mt-6">
              <Link
                href="/support/first-time"
                className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group"
              >
                初めての方へのサポート
                <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/flow/after-death"
                className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group"
              >
                ご逝去後の流れ
                <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/plans/family-funeral"
                className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group"
              >
                家族葬について
                <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group"
              >
                よくあるご質問
                <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
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
            <h2
              className="text-[#312852] text-2xl tracking-[0.08em]"
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

      {/* Soft CTA */}
      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2
              className="text-[#312852] text-2xl tracking-[0.08em] mb-5"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
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
