import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "小規模な葬儀を希望される方へ｜家族葬・火葬式｜葛飾区 稲垣屋葬儀店",
  description:
    "葛飾区で小規模な葬儀を希望される方へ。家族葬・一日葬・火葬式の違いと選び方を稲垣屋葬儀店が丁寧にご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/support/small-funeral" },
};

const faqs = [
  {
    q: "家族葬に呼ぶ人数の目安はありますか？",
    a: "家族葬に明確な人数の規定はありませんが、一般的にはご家族・親族を中心に10〜30名程度で行うことが多いです。ごく近しい方だけの5名以下の場合もあります。人数よりも「誰に来ていただきたいか」を基準に考えると決めやすくなります。稲垣屋葬儀店ではご要望に合わせた家族葬を承っております。",
  },
  {
    q: "家族葬を行った後、連絡しなかった方から「なぜ知らせてくれなかったのか」と言われることはありますか？",
    a: "そのようなご心配の声は時折あります。家族葬では参列者を限定するため、事前に「家族葬として行う旨」を伝えておくか、葬儀後に改めて訃報をお知らせする方法が一般的です。稲垣屋葬儀店では、参列者へのご連絡方法についてもアドバイスしております。",
  },
  {
    q: "火葬式でもお別れの時間はありますか？",
    a: "はい、火葬式でもお別れの時間は設けることができます。火葬前に炉前でご家族だけのお別れの場を持つことが一般的です。簡素ではありますが、心を込めたお見送りが可能です。詳しくはお問い合わせください。",
  },
  {
    q: "一日葬と家族葬はどう違いますか？",
    a: "家族葬は参列者の規模（身内中心）を表す言葉で、通夜と告別式の両方を行う場合もあります。一日葬は通夜を省略し、告別式と火葬を1日で行う形式のことです。つまり「小規模の一日葬」という形も可能です。ご家族の状況やご希望に合わせてご提案しますので、お気軽にご相談ください。",
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

export default function SmallFuneralPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        title="小規模な葬儀を希望される方へ"
        subtitle="家族葬・一日葬・火葬式の違いと選び方をご説明します"
        en="SMALL FUNERAL"
      />
      <Breadcrumb
        items={[
          { label: "サポート情報", href: "/support" },
          { label: "小規模な葬儀を希望される方へ" },
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
              身内だけで静かに見送りたい
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              近年、葬儀の形式は多様化しており、「大勢を呼ぶ一般葬よりも、家族や親しい人だけで静かに見送りたい」というご要望が増えています。核家族化や高齢化が進む中、参列者の高齢化・遠方化、故人の「簡素にしてほしい」という希望などから、小規模な葬儀を選ぶ方が増えています。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              稲垣屋葬儀店では、家族葬・一日葬・火葬式など、さまざまな規模の葬儀に対応しております。葬儀の規模・形式の選び方についてご不明な点は、お気軽にご相談ください。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">TYPES</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              小規模葬儀の種類と特徴
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                href: "/plans/family-funeral",
                title: "家族葬",
                merit: "ご家族・親族だけで、ゆっくりとお別れできる。参列者が少ないため、気持ちに余裕を持った式を行いやすい。費用も一般葬より抑えられることが多い。",
                caution: "参列できなかった方から後日弔問を受けることがある。連絡の範囲について事前に整理しておく必要がある。",
              },
              {
                href: "/plans/oneday-funeral",
                title: "一日葬",
                merit: "通夜を省略することで、2日間に及ぶ葬儀を1日にまとめられる。ご遺族の体力的・時間的な負担を軽減できる。",
                caution: "菩提寺によっては通夜を省略することを認めない場合もあるため、事前確認が必要。",
              },
              {
                href: "/plans/cremation",
                title: "火葬式（直葬）",
                merit: "通夜・告別式を行わないため、費用を最小限に抑えられる。故人が「簡素にしてほしい」と希望していた場合に適している。",
                caution: "お別れの時間が炉前のみとなるため、参列者が多い場合には不向き。菩提寺への事前相談が必要な場合がある。",
              },
            ].map((plan) => (
              <StaggerItem key={plan.title}>
                <div className="py-7">
                  <h3
                    className="text-[#312852] text-xl tracking-wide mb-3"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    {plan.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-sm leading-relaxed mb-1">
                    <span className="text-[#5c4a80] font-medium">メリット：</span>{plan.merit}
                  </p>
                  <p className="text-[#4a4a4a] text-sm leading-relaxed mb-3">
                    <span className="text-[#7560a0] font-medium">注意点：</span>{plan.caution}
                  </p>
                  <Link
                    href={plan.href}
                    className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors"
                  >
                    詳細を見る <ChevronRight size={13} />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">NOTIFICATION</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              参列者への連絡・後日の対応
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              家族葬や火葬式で参列者を限定する場合、訃報を知らせなかった方への対応が課題になることがあります。「家族葬として行う」旨を事前に伝えるか、葬儀後に改めてはがきや電話でお知らせする方法が一般的です。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              また、葬儀後に友人・知人向けの「偲ぶ会」を別途設ける方も増えています。偲ぶ会は宗教的な形式にとらわれず、故人らしい雰囲気でお別れの場を設けることができます。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              参列者へのご連絡方法や偲ぶ会の開催についても、稲垣屋葬儀店にご相談いただければ、経験をもとにアドバイスいたします。
            </p>
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
              稲垣屋葬儀店は24時間365日対応。どんなご相談でもお気軽にどうぞ。
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
