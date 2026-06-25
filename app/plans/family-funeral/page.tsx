import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";
import RelatedColumns from "../../components/RelatedColumns";

export const metadata: Metadata = {
  title: "葛飾区の家族葬｜少人数で静かに見送る葬儀なら稲垣屋葬儀店",
  description:
    "葛飾区の家族葬について詳しく解説。費用の目安・流れ・参列者の範囲・通夜の有無など、ご家族の状況に合った家族葬のかたちをご提案します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/plans/family-funeral" },
};

const flow = [
  { number: "01", title: "ご逝去・ご連絡", desc: "24時間いつでもご連絡ください。深夜・早朝・休日を問わず、迅速にお迎えに参ります。" },
  { number: "02", title: "ご安置・打ち合わせ", desc: "ご自宅または安置施設にてご安置します。葬儀の日程・プランを丁寧に打ち合わせます。" },
  { number: "03", title: "納棺", desc: "故人様を棺に納め、ご家族でお別れの時間をお持ちいただけます。" },
  { number: "04", title: "通夜（ご希望の場合）", desc: "少人数でのお通夜を執り行います。省略することも可能です（一日葬）。" },
  { number: "05", title: "告別式", desc: "ご家族でお集まりいただき、心を込めて故人をお見送りします。" },
  { number: "06", title: "火葬・収骨", desc: "火葬場にてご出棺、火葬を行います。ご家族で収骨をお行いいただきます。" },
];

const faqItems = [
  {
    q: "家族葬に参列できる人数は？",
    a: "家族葬に明確な人数制限はありません。一般的にはご家族・ご親族・ごく親しい友人など10〜30名程度で行われることが多いですが、ご家族のご希望に応じて柔軟に対応できます。",
  },
  {
    q: "家族葬を行うことを参列できなかった方にどう伝えればよいですか？",
    a: "家族葬を行う旨は、死亡通知の際や葬儀後の挨拶状でお知らせするのが一般的です。稲垣屋葬儀店では挨拶状の内容についてもご相談いただけます。",
  },
  {
    q: "家族葬でもお坊さんを呼べますか？",
    a: "はい、家族葬でも宗教者（お坊さん・牧師など）をお呼びできます。菩提寺がある場合はそちらにご連絡ください。菩提寺がない場合や無宗教葬をご希望の場合もご相談ください。",
  },
  {
    q: "通夜を省略することはできますか？",
    a: "はい、通夜を省略して告別式と火葬を一日で行う「一日葬」という形式も選べます。ご遺族の体力的な負担を考えて一日葬を選ばれる方もいらっしゃいます。詳しくは一日葬のページをご覧ください。",
  },
  {
    q: "家族葬の費用はどのくらいかかりますか？",
    a: "費用はご希望の内容・参列者の人数・祭壇の規模などによって異なります。事前に詳細なお見積もりをご提示しますので、まずはご相談ください。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "葛飾区の家族葬｜少人数で静かに見送る葬儀なら稲垣屋葬儀店",
  description:
    "葛飾区の家族葬について詳しく解説。費用の目安・流れ・参列者の範囲・通夜の有無など、ご家族の状況に合った家族葬のかたちをご提案します。",
  url: "https://www.inagakiyasougiten.com/plans/family-funeral",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀プラン", item: "https://www.inagakiyasougiten.com/plans" },
      { "@type": "ListItem", position: 3, name: "家族葬", item: "https://www.inagakiyasougiten.com/plans/family-funeral" },
    ],
  },
};

export default function FamilyFuneralPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

      <PageHero title="家族葬" subtitle="ご家族だけで、静かに心を込めてお別れする葬儀" en="FAMILY FUNERAL" />
      <Breadcrumb items={[{ label: "葬儀プラン", href: "/plans" }, { label: "家族葬" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* このページでわかること */}
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ON THIS PAGE</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em] mb-6" style={{ fontFamily: "var(--font-mincho)" }}>
              このページでわかること
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mb-6" />
            <ul className="divide-y divide-[#e8ddf4]">
              {[
                "家族葬とはどのような葬儀か",
                "家族葬が向いている方の特徴",
                "通夜あり・通夜なし（一日葬）それぞれの形式",
                "家族葬の一般的な流れ",
                "よくあるご質問（費用・参列者・宗教者など）",
              ].map((item) => (
                <li key={item} className="py-3 text-[#4a4a4a] text-base leading-relaxed pl-3 border-l-2 border-[#c9a55a] ml-px">
                  {item}
                </li>
              ))}
            </ul>
          </FadeInUp>

          {/* 家族葬とは */}
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">WHAT IS FAMILY FUNERAL</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              家族葬とは
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5 mb-8" />
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              家族葬とは、ご家族やごく親しい方だけで行う小規模な葬儀です。参列者の人数が限られているため、故人との最後の時間をゆっくりと過ごせます。近年、葛飾区でも家族葬を選ぶご家族が増えています。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              家族葬は、一般葬と同じく通夜・告別式・火葬という基本的な流れで執り行われます。ただし、参列者を限定することで、故人との最後の時間を親族だけでゆっくりと共有できます。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              稲垣屋葬儀店では、ご家族の想いに寄り添い、形式にとらわれない心のこもった家族葬をご提供します。
            </p>
          </FadeInUp>

          {/* 家族葬が向いている方 */}
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FOR WHOM</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              家族葬が向いている方
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mb-2" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {[
              { title: "近しい方だけで静かに見送りたい", desc: "ごく親しい方だけで、落ち着いた雰囲気の中でお別れしたいというご希望のある方に選ばれています。" },
              { title: "高齢のご遺族が多い", desc: "参列者が少ない分、ご遺族への接待や対応の負担が軽くなります。体力的な面でも無理のない形でお別れができます。" },
              { title: "故人が参列者を限定することを望んでいた", desc: "生前に「家族だけで送ってほしい」というご意向があった場合、その想いを形にする手段として家族葬が選ばれます。" },
              { title: "日程や費用の見通しを立てやすくしたい", desc: "参列者の規模が決まっているため、返礼品や飲食の準備が見通しやすくなります。ご事情に応じた柔軟な計画が可能です。" },
              { title: "故人らしいお別れの形にしたい", desc: "少人数であるため、故人の好きだったものや想い出を取り入れたアレンジがしやすい形式です。" },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3 className="text-[#312852] text-lg tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>{item.title}</h3>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* 家族葬でよく選ばれる形式 */}
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FORMATS</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              家族葬でよく選ばれる形式
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            <StaggerItem>
              <div className="py-7">
                <h3 className="text-[#312852] text-lg tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>通夜あり（二日間）</h3>
                <p className="text-[#4a4a4a] text-base leading-relaxed">
                  1日目にお通夜、2日目に告別式・火葬を行う、最も一般的な家族葬の形式です。ご家族でゆっくりと故人に寄り添う時間を持てます。
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="py-7">
                <h3 className="text-[#312852] text-lg tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>通夜なし・一日葬</h3>
                <p className="text-[#4a4a4a] text-base leading-relaxed mb-3">
                  お通夜を省略し、告別式と火葬を一日で行う形式です。ご遺族の体力的・精神的な負担を軽減したい方や、日程の調整が難しい方に選ばれています。
                </p>
                <Link href="/plans/oneday-funeral" className="inline-flex items-center gap-1 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                  一日葬についてくわしく見る<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* 家族葬の流れ */}
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FLOW</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              家族葬の流れ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {flow.map((step) => (
              <StaggerItem key={step.number}>
                <div className="flex items-start gap-6 py-8">
                  <div className="shrink-0 w-14 text-center pt-1">
                    <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-1">STEP</p>
                    <p className="text-[#c9a55a] text-2xl tracking-wider" style={{ fontFamily: "var(--font-mincho)" }}>{step.number}</p>
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="text-[#312852] text-lg tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>{step.title}</h4>
                    <p className="text-[#4a4a4a] text-base leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* FAQ */}
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              よくあるご質問
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {faqItems.map((item) => (
              <StaggerItem key={item.q}>
                <div className="py-6">
                  <p className="text-[#312852] text-base mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                    <span className="text-[#9278be] font-bold mr-2">Q</span>
                    {item.q}
                  </p>
                  <p className="text-[#4a4a4a] text-sm leading-loose pl-6">
                    <span className="text-[#c9a55a] font-bold mr-2">A</span>
                    {item.a}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp>
            <div className="flex flex-wrap gap-4">
              <Link href="/cost/family-funeral" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                家族葬の費用について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/plans/oneday-funeral" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                一日葬について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/plans" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                他のプランを見る<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInUp>
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
          <RelatedColumns slugs={["family-funeral-katsushika", "family-funeral-cost-katsushika", "family-funeral-vs-oneday", "family-funeral-only-relatives", "family-funeral-small"]} />
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>家族葬についてご相談ください</h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">事前相談は無料です。費用・流れ・ご希望のプランについて、お気軽にご相談ください。</p>
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
