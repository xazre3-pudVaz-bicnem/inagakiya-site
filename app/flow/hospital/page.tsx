import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle, Phone } from "lucide-react";
import RelatedColumns from "../../components/RelatedColumns";

export const metadata: Metadata = {
  title: "病院で亡くなられた場合の流れ｜葛飾区 稲垣屋葬儀店",
  description:
    "病院でご逝去された際の流れを詳しく解説。病院からの搬送・安置手配、死亡診断書の受け取り方、葬儀社への連絡タイミングなど、葛飾区の稲垣屋葬儀店が丁寧にご案内します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/flow/hospital" },
};

const hospitalSteps = [
  {
    number: "01",
    title: "担当医師・スタッフの対応に従う",
    desc: "病院でご逝去された場合、担当医師がご逝去を確認し、「死亡診断書」を発行します。この書類は葬儀・火葬許可証の取得に必要な重要書類です。病院スタッフが対応の流れをご案内してくれますので、まずはその指示に従ってください。",
  },
  {
    number: "02",
    title: "ご家族・近親者への連絡",
    desc: "ご逝去を確認したら、ご家族・近親者に連絡を取りましょう。特に、最後のお別れをしてほしい方への連絡は早めに行うことをお勧めします。病院によって面会できる時間・人数に制限がある場合がありますので、事前に病院スタッフに確認しましょう。",
  },
  {
    number: "03",
    title: "葬儀社への連絡",
    desc: "ご逝去を確認したら、できるだけ早く葬儀社にご連絡ください。病院には安置できる期間・場所に限りがある場合がほとんどです。稲垣屋葬儀店は24時間365日対応しており、搬送・安置の手配を迅速に進めます。「まだ何も決まっていない」という段階でも問題ありません。まずはご連絡ください。",
  },
  {
    number: "04",
    title: "病院での手続き・精算",
    desc: "ご入院中の費用精算・退院手続きが必要になります。急ぎでない場合は、搬送・安置の手配が落ち着いた後で対応することもできます。病院のソーシャルワーカーや担当窓口にご確認ください。",
  },
  {
    number: "05",
    title: "搬送・安置の手配",
    desc: "葬儀社が病院にお迎えに参り、故人様をご指定の安置場所（ご自宅または安置施設）へ搬送します。搬送の際には、故人様の衣類・貴重品をまとめてお持ちください。",
  },
];

const noteItems = [
  { title: "死亡診断書を大切に保管する", desc: "死亡診断書は葬儀・役所手続きに必要な重要書類です。コピーを複数枚取っておくことをお勧めします。原本は役所への提出時に使用します。" },
  { title: "病院からの搬送は急いで決める必要はない", desc: "「すぐに搬送しなければいけない」と焦る必要はありません。ただし、病院によって安置できる時間に限りがある場合がありますので、早めに葬儀社に連絡しておくと安心です。" },
  { title: "持ち物・貴重品の確認", desc: "病院から搬送する際に、故人様の持ち物・貴重品・衣類を忘れずに持ち帰りましょう。後日改めて取りに行くことは難しい場合があります。" },
];

const faqItems = [
  {
    q: "病院から搬送してもらうのに費用はかかりますか？",
    a: "搬送費用は葬儀社への支払い費用に含まれます。距離・時間帯・搬送先によって費用が変わる場合があります。稲垣屋葬儀店では事前に搬送費用をご提示します。",
  },
  {
    q: "病院に安置したまま翌日まで待つことはできますか？",
    a: "病院によって安置できる時間に限りがあります。一般的に安置室が満室の場合や、一定の時間が経過すると搬送を求められることがあります。詳細は担当の病院スタッフにご確認ください。",
  },
  {
    q: "深夜にご逝去した場合、葬儀社は対応できますか？",
    a: "はい、稲垣屋葬儀店は24時間365日対応しています。深夜・早朝・休日を問わずお電話ください。搬送・安置の手配を速やかに進めます。",
  },
  {
    q: "死亡診断書はいつ受け取れますか？",
    a: "死亡診断書は担当医師が発行し、病院窓口でお渡しされます。ご逝去後、病院の手続きの流れの中でご案内があります。受け取ったら大切に保管し、コピーを複数枚取っておくことをお勧めします。",
  },
];

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "病院でご逝去された場合の流れ｜稲垣屋葬儀店",
  description:
    "病院でご逝去された際の流れを詳しく解説。病院からの搬送・安置手配、死亡診断書の受け取り方、葬儀社への連絡タイミングなど、葛飾区の稲垣屋葬儀店が丁寧にご案内します。",
  step: hospitalSteps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.title,
    text: s.desc,
  })),
};

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
  name: "病院で亡くなられた場合の流れ｜葛飾区 稲垣屋葬儀店",
  description:
    "病院でご逝去された際の流れを詳しく解説。病院からの搬送・安置手配、死亡診断書の受け取り方、葬儀社への連絡タイミングなど、葛飾区の稲垣屋葬儀店が丁寧にご案内します。",
  url: "https://www.inagakiyasougiten.com/flow/hospital",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀の流れ", item: "https://www.inagakiyasougiten.com/flow" },
      { "@type": "ListItem", position: 3, name: "病院で亡くなられた場合の流れ", item: "https://www.inagakiyasougiten.com/flow/hospital" },
    ],
  },
};

export default function FlowHospitalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="病院で亡くなられた場合"
        subtitle="病院でご逝去された際の対応の流れをご案内します"
        en="PASSING IN HOSPITAL"
      />
      <Breadcrumb items={[{ label: "葬儀の流れ", href: "/flow" }, { label: "病院でご逝去の場合" }]} />

      <section className="bg-[#faf7fd] border border-[#e8ddf4] py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[#312852] text-base leading-relaxed" style={{ fontFamily: "var(--font-mincho)" }}>
            まずは状況をお聞かせください。搬送先が決まっていない場合でも、ご安置場所についてご相談いただけます。夜間・早朝でも対応しております。
          </p>
          <a href="tel:0336900870" className="mt-4 inline-flex items-center gap-2 text-[#5c4a80] border-b border-[#9278be] pb-px hover:text-[#312852] transition-colors text-lg font-bold tracking-wider">
            03-3690-0870（24時間365日）
          </a>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">HOSPITAL</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              病院でご逝去された場合の流れ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              病院・施設でご逝去された場合、まず担当医師・スタッフの指示に従うことが大切です。「何をすればよいか分からない」という方も、病院スタッフが対応の流れをご案内してくれます。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              葬儀社への連絡は、できるだけ早く行うことをお勧めします。病院の安置室の状況によっては、搬送を急ぐ必要が生じることがあります。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {hospitalSteps.map((step) => (
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
            {noteItems.map((item) => (
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
              <Link href="/flow/death-certificate" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                死亡診断書について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/flow/transport" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                搬送・安置について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
          <RelatedColumns slugs={["death-at-hospital", "what-to-do-after-death-katsushika", "transport-and-resting", "funeral-flow-basic"]} />
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              まずは状況をお聞かせください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-3">
              夜間や早朝でも、ご状況に応じてご相談いただけます。
            </p>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              搬送先が決まっていない場合でも、どうぞご連絡ください。
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
