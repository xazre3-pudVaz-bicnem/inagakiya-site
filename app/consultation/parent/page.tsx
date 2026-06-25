import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "親の葬儀を考え始めた方へ｜葛飾区 稲垣屋葬儀店",
  description:
    "親の葬儀をそろそろ考え始めた方へ。何から始めるか・費用・形式の選択肢・区民葬儀制度について、稲垣屋葬儀店が丁寧にご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/consultation/parent" },
};

const discussionPoints = [
  {
    title: "本人の希望確認",
    desc: "「どのような形でお別れしたいか」をご本人に確認しておくことが最も大切です。宗教的な形式の有無・規模感・参列してほしい方の範囲など、できる範囲で話し合っておきましょう。",
  },
  {
    title: "菩提寺の有無",
    desc: "先祖代々のお寺（菩提寺）がある場合、葬儀の際には菩提寺の住職に読経をいただきます。菩提寺の名称・連絡先・宗派を親御さんに確認しておきましょう。",
  },
  {
    title: "参列者の範囲",
    desc: "親御さんの交友関係・職場関係・ご近所の方など、葬儀に参列をお願いする方の範囲を事前に把握しておくと、いざというときの連絡がスムーズです。",
  },
  {
    title: "費用の準備",
    desc: "葬儀費用は形式によって大きく異なります。生命保険・貯蓄など、費用の手当てについて親御さんと話し合っておくことで、急なご逝去にも落ち着いて対応できます。",
  },
  {
    title: "終活の意思",
    desc: "エンディングノートの作成・財産の整理・墓所の確認など、終活全般についても話し合うきっかけにしていただければと思います。葬儀社への相談は、終活を始める良いきっかけにもなります。",
  },
];

const faqs = [
  {
    q: "親が元気なうちに葬儀の相談をするのは失礼ではないですか？",
    a: "いいえ、失礼にはなりません。むしろ「もしものとき」に備えた準備は、親御さんへの思いやりでもあります。生前に「どのような形でお別れしたいか」を確認しておくことで、いざというときに故人の意思に沿った葬儀が実現できます。稲垣屋葬儀店では、そのような事前相談を多くいただいており、スタッフが丁寧にご対応します。",
  },
  {
    q: "葛飾区民の親の葬儀に、区民葬儀制度は使えますか？",
    a: "葛飾区に住民登録されている方が亡くなられた場合、区民葬儀制度を利用できる可能性があります。稲垣屋葬儀店は葛飾区指定の区民葬儀取扱店です。区民葬儀の対象者・申請方法・費用については事前相談でご説明しますので、お気軽にご連絡ください。",
  },
  {
    q: "菩提寺がある場合、葬儀社と菩提寺どちらに先に連絡すればよいですか？",
    a: "葬儀社への連絡を先にしていただくことをお勧めします。ご遺体の搬送・安置が優先事項となるためです。その後、菩提寺への連絡と日程調整を行います。稲垣屋葬儀店では菩提寺との連絡・調整もサポートしますので、ご安心ください。",
  },
  {
    q: "一人っ子で葬儀を取り仕切れるか不安です。",
    a: "ご安心ください。稲垣屋葬儀店のスタッフが全ての手続きを一つひとつご案内します。葬儀の手配から、死亡届の提出、各種手続きのご説明まで、一人でも対応できるよう丁寧にサポートします。事前に相談しておくと、より安心して「もしものとき」に備えられます。",
  },
];

export default function ParentPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="親の葬儀を考え始めた方へ"
        subtitle="「そろそろ考えたい」という段階からご相談ください"
        en="PARENT FUNERAL GUIDE"
      />
      <Breadcrumb
        items={[
          { label: "事前相談", href: "/consultation" },
          { label: "親の葬儀を考え始めた方へ" },
        ]}
      />

      {/* Intro */}
      <section className="py-20 md:py-28 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FOR CHILDREN</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              「そろそろ考えたい」という段階でのご相談
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp className="mb-16">
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose">
              <p>
                「親が高齢になってきた」「もしものときのために準備しておきたい」と感じ始めた方は多くいらっしゃいます。しかし「何から始めればよいか分からない」「親にどう話を切り出せばよいか」と迷ってしまうことも自然なことです。
              </p>
              <p>
                稲垣屋葬儀店では、そのような「そろそろ考えたい」という段階での<Link href="/consultation" className="text-[#5c4a80] underline underline-offset-2 hover:text-[#453869] transition-colors">事前相談</Link>を多くお受けしています。形式・費用・流れについてご説明しながら、ご家族の状況に合ったご提案をいたします。
              </p>
              <p>
                また、<Link href="/consultation/preparation" className="text-[#5c4a80] underline underline-offset-2 hover:text-[#453869] transition-colors">事前準備のポイント</Link>を事前に把握しておくことで、いざというときも落ち着いて対応できます。まずは情報収集の段階からお気軽にご相談ください。
              </p>
            </div>
          </FadeInUp>

          {/* Discussion points */}
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">KEY POINTS</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              親子間での話し合いポイント
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-16">
            {discussionPoints.map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3 className="text-[#312852] text-base tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-base leading-relaxed pl-4 border-l border-[#c9a55a]">
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Bodaiji */}
          <FadeInUp className="mb-16">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">TEMPLE</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              菩提寺の確認について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mb-6" />
            <div className="space-y-4 text-[#4a4a4a] text-base leading-loose">
              <p>
                菩提寺がある場合は、葬儀の日程・段取りについて菩提寺に確認が必要です。菩提寺の名称・連絡先・宗派を事前に把握しておくことが、スムーズな葬儀につながります。
              </p>
              <p>
                菩提寺がない場合も、宗教者を呼ばない形式（無宗教葬）や、ご希望に応じてお寺をご紹介することも可能です。どのような状況でもご相談いただけますので、まずはお気軽にご連絡ください。
              </p>
            </div>
          </FadeInUp>

          {/* Cost */}
          <FadeInUp className="mb-16">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COST</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              費用の考え方
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mb-6" />
            <div className="space-y-4 text-[#4a4a4a] text-base leading-loose">
              <p>
                葬儀費用は形式によって大きく異なります。<Link href="/consultation/cost" className="text-[#5c4a80] underline underline-offset-2 hover:text-[#453869] transition-colors">費用の事前相談</Link>では、火葬式・家族葬・一日葬・一般葬それぞれの概算をご説明します。
              </p>
              <p>
                葛飾区に住民登録のある方が亡くなられた場合、区民葬儀制度を利用できる場合があります。稲垣屋葬儀店は葛飾区指定の区民葬儀取扱店です。費用を抑えた葬儀をご検討の方は、事前相談でご確認ください。
              </p>
              <p>
                <Link href="/plans/family-funeral" className="text-[#5c4a80] underline underline-offset-2 hover:text-[#453869] transition-colors">家族葬</Link>は近年多くご利用いただいているプランです。小規模でありながら、故人を丁寧に見送ることができます。
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>よくあるご質問</h2>
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
