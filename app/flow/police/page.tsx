import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "警察が関わる場合｜突然死・変死｜葛飾区 稲垣屋葬儀店",
  description:
    "突然死・変死など警察が関わるご逝去の場合の流れを葛飾区の稲垣屋葬儀店が解説します。検視・検案の流れ・死体検案書・その後の葬儀の流れについて安心して読めるようご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/flow/police" },
};

const policeItems = [
  {
    en: "When Police Involved",
    title: "警察への連絡が必要なケース",
    desc: "以下のような状況では、警察への連絡が必要になる場合があります。ただし、状況によって対応が異なりますので、不明な場合は119番または110番にご相談ください。（1）かかりつけ医がいない状態でのご自宅でのご逝去、（2）原因が不明な突然死、（3）事故・自殺・他殺の疑いがある場合、（4）亡くなった状況が不明な場合。これらのケースでは、まず110番または119番に連絡することが一般的に求められます。",
  },
  {
    en: "Autopsy Process",
    title: "検視・検案の流れ",
    desc: "警察が関わる場合、警察医または法医学者が故人様の状況を確認する「検視」が行われることがあります。検視の後、「検案」として死因が特定されます。場合によっては司法解剖が行われることがあります。これらの手続きには時間がかかる場合があり、ご遺族の方はその間待機することが求められることがあります。",
  },
  {
    en: "Death Certificate",
    title: "死体検案書について",
    desc: "警察・法医学者が関わった場合に発行されるのは「死亡診断書」ではなく「死体検案書」です。内容・役割は死亡診断書と同様で、役所への届け出・火葬許可証の取得に使用します。検案書の発行には費用が発生する場合があります。",
  },
  {
    en: "After Investigation",
    title: "警察の手続き終了後の流れ",
    desc: "警察の手続きが終了し、故人様が返還されたら、葬儀社に連絡して搬送・安置を手配します。稲垣屋葬儀店では、警察の手続き終了後に迅速に対応します。手続き完了の見込み時間を葬儀社にお知らせいただくと、スムーズに進みます。",
  },
  {
    en: "Funeral After",
    title: "その後の葬儀の流れ",
    desc: "警察関連の手続きが終了した後は、通常の葬儀の流れと同様に進みます。日程は手続き完了後に決めることになりますので、安置期間が通常より長くなる場合があります。稲垣屋葬儀店では、ご状況に合わせて柔軟に対応します。",
  },
];

const faqItems = [
  {
    q: "突然死の場合、すぐに葬儀社に連絡してよいですか？",
    a: "突然死の場合はまず110番または119番に連絡し、警察・救急の指示に従うことが求められる場合があります。葬儀社への連絡は、警察の初期対応が終わった後になることが一般的です。ただし、状況が整い次第、稲垣屋葬儀店にご連絡ください。",
  },
  {
    q: "検視・検案にはどのくらい時間がかかりますか？",
    a: "状況によって大きく異なります。外因性の死（事故・自殺など）の場合や解剖が必要な場合は、数日かかることもあります。警察の担当者から目安を確認しておくと、葬儀の日程を立てやすくなります。",
  },
  {
    q: "警察が関わった場合でも、稲垣屋葬儀店に依頼できますか？",
    a: "はい、警察の手続きが終了した後、稲垣屋葬儀店がご対応します。検案書の取得後の搬送・安置・葬儀について、ご状況に合わせて丁寧にサポートします。お電話（03-3690-0870）でご相談ください。",
  },
  {
    q: "死体検案書と死亡診断書は何が違いますか？",
    a: "死亡診断書はかかりつけ医・担当医師が発行するもので、通常の病死の場合に使用します。死体検案書は検案医・法医学者が発行するもので、警察が関わる場合に使用されます。役所への届け出・火葬許可証の取得には、いずれも使用できます。",
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

export default function FlowPolicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="警察が関わる場合（突然死・変死の場合）"
        subtitle="突然の状況でも、一つひとつ落ち着いて対応できるようご案内します"
        en="WHEN POLICE INVOLVED"
      />
      <Breadcrumb items={[{ label: "葬儀の流れ", href: "/flow" }, { label: "警察が関わる場合" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">POLICE INVOLVEMENT</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              警察が関わる場合の流れ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              突然死・変死など、警察が関わる場合はご遺族にとって特に辛く混乱する状況です。以下に一般的な流れをご説明しますが、状況により対応が異なりますので、詳細は警察や担当者にご確認ください。
            </p>
            <p className="text-[#7560a0] text-sm leading-loose mb-8 border-l-2 border-[#e8ddf4] pl-4">
              ※ 以下の内容は一般的な流れの説明であり、具体的な手続き・期間等については担当の警察・医療機関にご確認ください。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {policeItems.map((item) => (
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
              <Link href="/flow/home" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                自宅でご逝去の場合<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/flow/first-call" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                葬儀社への最初の連絡<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/flow/death-certificate" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                死亡診断書について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/flow/resting-place" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                安置場所の決め方<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
