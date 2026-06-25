import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle, Phone } from "lucide-react";
import RelatedColumns from "../../components/RelatedColumns";

export const metadata: Metadata = {
  title: "施設で亡くなられた場合｜老人ホーム・ホスピスなど｜葛飾区 稲垣屋葬儀店",
  description:
    "老人ホーム・ホスピス・介護施設などでご逝去された場合の対応の流れを葛飾区の稲垣屋葬儀店が解説します。施設スタッフとの連携・搬送手配についてご案内します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/flow/facility" },
};

const facilitySteps = [
  {
    number: "01",
    title: "施設スタッフへの確認と連携",
    desc: "老人ホーム・ホスピス・介護施設などでご逝去された場合、施設の担当スタッフが対応の流れをご案内してくれます。担当医師または嘱託医が死亡診断書を発行します。施設ごとに対応の手順が異なりますので、まずは施設スタッフの指示に従ってください。",
  },
  {
    number: "02",
    title: "ご家族・近親者への連絡",
    desc: "ご逝去を確認したら、早めにご家族・近親者に連絡を取りましょう。施設での最後のお別れができる時間に制限がある場合もありますので、連絡は迅速に行うことをお勧めします。",
  },
  {
    number: "03",
    title: "葬儀社への連絡・搬送手配",
    desc: "施設では長時間の安置が難しい場合が多いため、葬儀社への連絡は早めに行うことが大切です。稲垣屋葬儀店は24時間365日対応しており、施設からの搬送・安置の手配を速やかに行います。施設名・住所・故人様のお名前をお伝えください。",
  },
  {
    number: "04",
    title: "施設の利用費用・退所手続き",
    desc: "施設利用中の費用精算・退所に関する手続きが必要になります。こちらは急ぎでない場合、搬送・安置の手配が落ち着いた後で対応することも可能です。施設の担当窓口にご確認ください。",
  },
  {
    number: "05",
    title: "施設への感謝・挨拶",
    desc: "故人様を長期間にわたってお世話いただいた施設のスタッフへの感謝のご挨拶も、後日でも構いませんが大切にしていただければと思います。カードや手紙でのご挨拶でも喜ばれます。",
  },
];

const facilityTypeItems = [
  { title: "老人ホーム・特別養護老人ホーム", desc: "施設内に嘱託医がいる場合が多く、ご逝去の確認・死亡診断書の発行が施設内で行われることがあります。施設の安置スペースは限られているため、早めに葬儀社へ連絡することをお勧めします。" },
  { title: "ホスピス・緩和ケア病棟", desc: "ホスピスでは死亡診断書の発行・家族への連絡など、施設スタッフが丁寧に対応してくれる場合が多いです。搬送のタイミングについても施設スタッフと相談してください。" },
  { title: "有料老人ホーム・グループホーム", desc: "施設によって対応が異なりますので、まず施設スタッフに確認してください。葬儀社への連絡のタイミングも施設スタッフに相談しながら進めると安心です。" },
];

const faqItems = [
  {
    q: "施設から搬送してもらう場合、施設への事前連絡は必要ですか？",
    a: "施設によっては、葬儀社の搬送車が施設に入る前に施設スタッフへの連絡・確認が必要な場合があります。稲垣屋葬儀店では、施設への連絡手順についてもご案内しますので、ご安心ください。",
  },
  {
    q: "施設でご逝去した場合も、死亡診断書は発行してもらえますか？",
    a: "施設に嘱託医がいる場合は施設内で発行される場合があります。嘱託医がいない場合は、かかりつけ医または救急医が発行することになります。状況によって異なりますので、施設スタッフにご確認ください。",
  },
  {
    q: "ホスピスでご逝去した場合、葬儀はどのように進みますか？",
    a: "ホスピスでご逝去された場合も、葬儀の流れは基本的に病院でご逝去された場合と同様です。施設からの搬送・安置後、葬儀の日程・内容についての打ち合わせを行います。稲垣屋葬儀店では、ご家族のご要望に合わせた葬儀をご提案します。",
  },
  {
    q: "施設で急にご逝去した場合（予期していなかった場合）はどうなりますか？",
    a: "施設内でのご逝去が予期しない場合でも、施設スタッフが担当医師・警察などへの連絡を含めた初期対応をサポートしてくれる場合があります。まず施設スタッフに任せ、次のステップとして葬儀社へのご連絡をお勧めします。",
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

export default function FlowFacilityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="施設で亡くなられた場合"
        subtitle="老人ホーム・ホスピス・介護施設でご逝去された際の対応をご案内します"
        en="PASSING IN CARE FACILITY"
      />
      <Breadcrumb items={[{ label: "葬儀の流れ", href: "/flow" }, { label: "施設でご逝去の場合" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">CARE FACILITY</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              施設でご逝去された場合の流れ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              老人ホーム・ホスピス・介護施設でご逝去された場合、施設スタッフが対応の流れをサポートしてくれます。施設によって対応が異なりますが、基本的な流れは病院でご逝去された場合と同様です。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              施設での安置は時間的に限りがある場合が多いため、葬儀社への連絡は早めに行うことをお勧めします。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {facilitySteps.map((step) => (
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
              施設の種類による対応の違い
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {facilityTypeItems.map((item) => (
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
              <Link href="/flow/transport" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                搬送・安置について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/flow/resting-place" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                安置場所の決め方<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/flow/hospital" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                病院でご逝去の場合<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
          <RelatedColumns slugs={["death-at-facility", "what-to-do-after-death-katsushika", "transport-and-resting"]} />
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
