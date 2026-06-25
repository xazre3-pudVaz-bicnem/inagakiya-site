import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle, Phone } from "lucide-react";
import RelatedColumns from "../../components/RelatedColumns";

export const metadata: Metadata = {
  title: "自宅で亡くなられた場合｜最初にすること｜葛飾区 稲垣屋葬儀店",
  description:
    "自宅でご逝去された場合の対応の流れを葛飾区の稲垣屋葬儀店が丁寧に解説します。かかりつけ医への連絡・自宅での対応・搬送手配についてご案内します。24時間対応。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/flow/home" },
};

const homeSteps = [
  {
    number: "01",
    title: "かかりつけ医への連絡",
    desc: "ご自宅でご逝去された場合、まずかかりつけ医（主治医）に連絡してください。かかりつけ医が自宅に来て死亡を確認し、「死亡診断書」を発行します。かかりつけ医が対応できない場合や不明な場合は、葬儀社（稲垣屋葬儀店）にご連絡ください。次の対応をご案内します。",
  },
  {
    number: "02",
    title: "119番・110番への連絡は慎重に",
    desc: "かかりつけ医がいる場合は、まずかかりつけ医に連絡してください。かかりつけ医がおらず、病死が明らかでない場合や突然死の場合は、110番または119番への連絡が必要になる場合があります。状況が分からない場合は、稲垣屋葬儀店にご相談ください。",
  },
  {
    number: "03",
    title: "ご家族・近親者への連絡",
    desc: "ご逝去を確認したら、ご家族・近親者に連絡を取りましょう。会わせてあげたい方には早めにご連絡することをお勧めします。",
  },
  {
    number: "04",
    title: "葬儀社への連絡・搬送手配",
    desc: "かかりつけ医に死亡診断書を発行していただいた後、葬儀社にご連絡ください。稲垣屋葬儀店は24時間365日対応しています。自宅での安置をご希望の場合はそのままご自宅でお預かりし、斎場への移動をご希望の場合は搬送の手配をします。",
  },
  {
    number: "05",
    title: "ご自宅での安置の準備",
    desc: "ご自宅で安置をご希望の場合、布団・シーツの準備が必要になります。稲垣屋葬儀店が枕飾り（お線香・蝋燭・花など）のご用意もします。ご自宅の状況によって対応方法が異なりますので、まずはご相談ください。",
  },
];

const homeNotes = [
  { title: "かかりつけ医がいない場合", desc: "かかりつけ医がいない場合や、夜間・休日でかかりつけ医と連絡が取れない場合は、稲垣屋葬儀店にご連絡ください。状況に応じた対応方法をご案内します。" },
  { title: "ご遺体に触れる前に確認する", desc: "ご逝去が確認される前にご遺体を動かすことは、警察や医師の確認の妨げになる場合があります。まずはかかりつけ医・葬儀社に連絡してから対応することをお勧めします。" },
  { title: "ご自宅葬儀の選択肢", desc: "ご自宅でご逝去された場合、そのままご自宅で葬儀を行う「自宅葬」という選択肢もあります。稲垣屋葬儀店では自宅葬も対応していますので、ご希望の方はご相談ください。" },
];

const faqItems = [
  {
    q: "夜中に自宅で亡くなった場合、深夜でも連絡できますか？",
    a: "はい、稲垣屋葬儀店は24時間365日対応しています。深夜・早朝を問わずお電話ください。かかりつけ医への連絡方法や次のステップについてもご案内します。",
  },
  {
    q: "かかりつけ医がいない場合、誰に死亡診断書を発行してもらえますか？",
    a: "かかりつけ医がいない場合は、救急医や検案医が対応するケースがあります。状況によって対応が異なりますので、まず稲垣屋葬儀店にご連絡ください。次の手順をご案内します。",
  },
  {
    q: "自宅で亡くなった場合、警察に連絡する必要がありますか？",
    a: "かかりつけ医がいて病死が明らかな場合は、一般的に警察への連絡は不要です。ただし、原因が不明な場合や突然死の場合は警察への連絡が必要になることがあります。判断が難しい場合は、稲垣屋葬儀店または救急（119番）にご相談ください。",
  },
  {
    q: "自宅安置と施設安置、どちらがよいですか？",
    a: "ご家族のご状況・ご希望によって異なります。ご自宅でゆっくりお別れしたい場合は自宅安置が適しています。ご自宅の状況（スペース・ご家族の体力など）を考慮して選んでください。どちらでも対応しますので、お気軽にご相談ください。",
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

export default function FlowHomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="自宅で亡くなられた場合"
        subtitle="ご自宅でご逝去された際の対応の流れをご案内します"
        en="PASSING AT HOME"
      />
      <Breadcrumb items={[{ label: "葬儀の流れ", href: "/flow" }, { label: "自宅でご逝去の場合" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">PASSING AT HOME</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              ご自宅でご逝去された場合の流れ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              ご自宅でご逝去された場合、最初の対応が病院・施設と少し異なります。まずかかりつけ医に連絡し、死亡診断書を発行していただくことが基本となります。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              「どこに連絡すればよいか分からない」という場合は、稲垣屋葬儀店（03-3690-0870）にお電話ください。24時間365日、次のステップをご案内します。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {homeSteps.map((step) => (
              <StaggerItem key={step.number}>
                <div className="flex items-start gap-6 py-8">
                  <div className="shrink-0 w-14 text-center pt-1">
                    <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-1">STEP</p>
                    <p className="text-[#c9a55a] text-2xl tracking-wider" style={{ fontFamily: "var(--font-mincho)" }}>
                      {step.number}
                    </p>
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="text-[#312852] text-lg tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>
                      {step.title}
                    </h4>
                    <p className="text-[#4a4a4a] text-base leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mb-10">
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              確認しておきたいこと
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {homeNotes.map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-6">
                  <h4 className="text-[#312852] text-base tracking-wide mb-1.5" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.title}
                  </h4>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mb-10">
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              よくあるご質問
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
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
              <Link href="/flow/first-call" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                葬儀社への最初の連絡<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/flow/resting-place" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                安置場所の決め方<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/flow/police" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                警察が関わる場合<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/flow/death-certificate" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                死亡診断書について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/flow" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                葬儀全体の流れ<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
          <RelatedColumns slugs={["death-at-home", "what-to-do-after-death-katsushika", "transport-and-resting", "funeral-flow-basic"]} />
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              ご不明な点はお気軽にご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              稲垣屋葬儀店は24時間365日対応しております。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:0336900870" className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 w-full sm:w-auto justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
                <Phone size={17} />03-3690-0870（24時間対応）
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-[#9278be] text-[#5c4a80] hover:bg-[#ede7f6] px-8 py-4 tracking-wider transition-colors duration-300 w-full sm:w-auto justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
                <MessageCircle size={17} />メールでのお問い合わせ
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
