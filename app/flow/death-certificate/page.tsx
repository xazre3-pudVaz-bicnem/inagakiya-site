import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "死亡診断書について｜葛飾区 稲垣屋葬儀店",
  description:
    "死亡診断書とは何か・誰が発行するか・死亡届との関係・費用の考え方を葛飾区の稲垣屋葬儀店が解説します。大切な書類についての疑問を分かりやすくご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/flow/death-certificate" },
};

const certItems = [
  {
    en: "What is It",
    title: "死亡診断書とは",
    desc: "死亡診断書は、医師が故人様のご逝去を確認し、死亡の年月日・時刻・原因などを記載した公的な書類です。この書類は、役所への死亡届の提出・火葬許可証の取得・各種手続きに必要となります。葬儀に関わる書類の中でも、最も重要な書類の一つです。",
  },
  {
    en: "Who Issues",
    title: "誰が発行するか",
    desc: "死亡診断書は、診察・治療を行っていた医師（かかりつけ医・担当医師・病院の医師）が発行します。病院・施設でご逝去された場合は担当医師が発行します。ご自宅でご逝去された場合はかかりつけ医に連絡し、来宅・確認の上で発行していただきます。警察が関与する突然死・変死の場合は「死体検案書」が発行されます。",
  },
  {
    en: "Relationship with Notice",
    title: "死亡届との関係",
    desc: "死亡診断書と死亡届は同一の書類（A3用紙の左右に印刷されていることが多い）です。医師が死亡診断書の欄に記載した書類の、死亡届の欄にご家族が必要事項を記入して役所に提出します。死亡届の提出期限については、一般的に7日以内とされていますが、詳細は担当機関にご確認ください。",
  },
  {
    en: "Copies",
    title: "コピーを複数枚取っておく",
    desc: "死亡診断書（死亡届）の原本は役所提出時に使用します。後続の各種手続き（年金・保険・銀行など）でも写しが必要になる場面があります。原本を提出する前に、コピーを複数枚（5〜10枚程度）取っておくことをお勧めします。",
  },
  {
    en: "Cost",
    title: "費用について",
    desc: "死亡診断書の発行に関しては、医療機関が費用を設定しているケースがあります。費用は医療機関・状況によって異なります。稲垣屋葬儀店では書類の手配サポートも承っていますので、不明な点はご相談ください。",
  },
];

const faqItems = [
  {
    q: "死亡診断書はいつ受け取れますか？",
    a: "病院・施設でご逝去された場合は、ご逝去当日に発行されることが一般的です。ご自宅の場合はかかりつけ医が来宅・確認後に発行されます。発行までの時間は状況によって異なります。",
  },
  {
    q: "死亡診断書を紛失した場合はどうすればよいですか？",
    a: "死亡診断書は再発行が原則として難しい書類です。原本を提出する前にコピーを複数枚取っておくことを強くお勧めします。紛失した場合は、発行した医療機関または役所にご相談ください。",
  },
  {
    q: "死亡診断書の手続きは葬儀社がサポートしてくれますか？",
    a: "稲垣屋葬儀店では、死亡届の提出・火葬許可証の取得手続きのサポートも承っています。「何をどこに持っていけばよいか」という点についても丁寧にご案内します。",
  },
  {
    q: "死体検案書と死亡診断書は何が違いますか？",
    a: "死亡診断書は担当医師が発行するものです。死体検案書は、警察が関わる突然死・変死の場合に検案医が発行するものです。役所への届け出・火葬許可証の取得にはどちらも使用できます。",
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

export default function FlowDeathCertificatePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="死亡診断書について"
        subtitle="葬儀に欠かせない重要書類についてご説明します"
        en="DEATH CERTIFICATE"
      />
      <Breadcrumb items={[{ label: "葬儀の流れ", href: "/flow" }, { label: "死亡診断書" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">DEATH CERTIFICATE</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              死亡診断書について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              死亡診断書は葬儀・行政手続きの全ての出発点となる重要な書類です。何のための書類か、どのように扱うべきかを事前に知っておくと、いざという時に落ち着いて対応できます。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {certItems.map((item) => (
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
              <Link href="/flow/cremation-permit" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                火葬許可証について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/flow/hospital" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                病院でご逝去の場合<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/flow/police" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                警察が関わる場合<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
