import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "家族葬｜葛飾区で家族葬なら稲垣屋葬儀店｜少人数で心を込めたお別れ",
  description:
    "葛飾区の稲垣屋葬儀店の家族葬プラン。ご家族やごく親しい方だけで心静かにお別れできる家族葬について、費用・流れ・特徴をご紹介します。区民葬儀との組み合わせも可能。事前相談無料。",
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "家族葬に参列できる人数は？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "家族葬に明確な人数制限はありません。一般的にはご家族・ご親族・ごく親しい友人など10〜30名程度で行われることが多いですが、ご家族のご希望に応じて柔軟に対応できます。",
      },
    },
    {
      "@type": "Question",
      name: "家族葬を行うことを参列できなかった方にどう伝えればよいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "家族葬を行う旨は、死亡通知の際や葬儀後の挨拶状でお知らせするのが一般的です。稲垣屋葬儀店では挨拶状の内容についてもご相談いただけます。",
      },
    },
    {
      "@type": "Question",
      name: "家族葬でもお坊さんを呼べますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、家族葬でも宗教者（お坊さん・牧師など）をお呼びできます。菩提寺がある場合はそちらにご連絡ください。菩提寺がない場合や無宗教葬をご希望の場合もご相談ください。",
      },
    },
  ],
};

export default function FamilyFuneralPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero title="家族葬" subtitle="ご家族だけで、静かに心を込めてお別れする葬儀" en="FAMILY FUNERAL" />
      <Breadcrumb items={[{ label: "葬儀プラン", href: "/plans" }, { label: "家族葬" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">WHAT IS FAMILY FUNERAL</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              家族葬とは
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
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

          <FadeInUp className="mt-14 mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FEATURES</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              家族葬の特徴
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {[
              { title: "少人数で心静かにお別れ", desc: "参列者を限定することで、故人との時間をゆっくりと過ごせます。一般葬のような大きな場ではなく、親族だけの温かい雰囲気の中でお別れできます。" },
              { title: "ご遺族の負担を軽減", desc: "参列者が少ない分、接待・返礼品の準備など、ご遺族の精神的・体力的な負担が少なくなります。" },
              { title: "費用を抑えやすい", desc: "参列者が少ないため、飲食・返礼品の費用を抑えられます。ただし、葬儀の内容によって費用は異なります。事前に詳細なお見積もりをご提示します。" },
              { title: "柔軟なアレンジが可能", desc: "故人の好きだった音楽や花を取り入れるなど、故人らしさを表現したアレンジが比較的しやすい形式です。" },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3 className="text-[#312852] text-lg tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>{item.title}</h3>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

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

          <FadeInUp>
            <div className="flex flex-wrap gap-4">
              <Link href="/cost/family-funeral" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                家族葬の費用について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/plans" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                他のプランを見る<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInUp>
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
