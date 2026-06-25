import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "火葬許可証について｜葛飾区 稲垣屋葬儀店",
  description:
    "火葬許可証とは何か・取得方法・火葬後の埋葬許可証・葬儀社のサポートについて葛飾区の稲垣屋葬儀店が解説します。手続きの流れを分かりやすくご案内します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/flow/cremation-permit" },
};

const permitItems = [
  {
    en: "What is It",
    title: "火葬許可証とは",
    desc: "火葬許可証は、ご遺体を火葬するために必要な許可証です。市区町村の役所（葛飾区の場合は葛飾区役所・各出張所）が発行します。この許可証がなければ火葬を行うことができないため、葬儀の日程に間に合うよう早めに取得することが重要です。",
  },
  {
    en: "How to Get",
    title: "取得方法",
    desc: "火葬許可証は、死亡届を役所に提出する際に同時に申請することで取得できます。死亡届の提出と火葬許可証の申請は、ほぼ同時に行われる手続きです。稲垣屋葬儀店では、この手続きの代行・サポートも承っています。お客様ご自身が役所に出向く必要がない場合もありますので、ご相談ください。",
  },
  {
    en: "When Needed",
    title: "火葬当日の手続き",
    desc: "火葬当日、火葬場に火葬許可証を提出します。稲垣屋葬儀店が手続きを代行することが一般的ですが、ご家族が直接提出する場合もあります。火葬許可証を紛失しないよう、取得後は大切に保管してください。",
  },
  {
    en: "After Cremation",
    title: "火葬後の埋葬許可証",
    desc: "火葬が完了すると、火葬許可証に「火葬済み」の証明が記入・押印され、「埋葬許可証」として返却されます。この書類はお墓・納骨堂への納骨時に必要になります。大切に保管し、納骨の際に使用してください。",
  },
  {
    en: "Support",
    title: "稲垣屋葬儀店のサポート",
    desc: "稲垣屋葬儀店では、死亡届の提出・火葬許可証の取得・火葬場への提出など、書類に関する手続きのサポートを承っています。「どこに何を持っていけばよいか分からない」という方も、安心してお任せください。",
  },
];

const faqItems = [
  {
    q: "火葬許可証は誰が取りに行きますか？",
    a: "稲垣屋葬儀店では、死亡届の提出・火葬許可証の取得を代行するサポートを行っています。ご家族が役所に出向く必要がない場合もありますので、ご相談ください。",
  },
  {
    q: "火葬許可証の取得に費用はかかりますか？",
    a: "火葬許可証自体の発行は、多くの場合無料または低額の手数料で対応しています。詳細は発行機関にご確認ください。葬儀社が代行する場合、代行費用が発生することがあります。",
  },
  {
    q: "埋葬許可証はいつまで有効ですか？",
    a: "埋葬許可証の有効期限については、原則として特定の期限が定められているわけではありませんが、なるべく早めに納骨されることをお勧めします。詳細はお墓・納骨堂の管理者にご確認ください。",
  },
  {
    q: "火葬許可証・埋葬許可証を紛失した場合はどうすればよいですか？",
    a: "火葬許可証・埋葬許可証を紛失した場合は、発行した役所または火葬場に再発行の手続きについてご相談ください。手続きの方法は発行機関によって異なります。",
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

export default function FlowCremationPermitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="火葬許可証について"
        subtitle="火葬に必要な許可証の取得から埋葬許可証まで丁寧にご説明します"
        en="CREMATION PERMIT"
      />
      <Breadcrumb items={[{ label: "葬儀の流れ", href: "/flow" }, { label: "火葬許可証" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">CREMATION PERMIT</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              火葬許可証について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              火葬許可証は火葬を行うために必須の書類です。死亡届の提出とセットで役所から取得します。稲垣屋葬儀店では手続きのサポートを承っており、ご家族の負担を軽減します。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {permitItems.map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-1">{item.en}</p>
                  <h4 className="text-[#312852] text-lg tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>
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
              <Link href="/flow/death-notification" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                死亡届について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/flow/death-certificate" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                死亡診断書について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/flow/documents" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                手続き・書類について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/flow/after-funeral-procedures" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                葬儀後の手続き一覧<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/flow" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                葬儀全体の流れ<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              ご不明な点はお気軽にご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              事前相談・お見積もりは無料です。
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
