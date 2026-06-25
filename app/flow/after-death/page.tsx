import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "ご逝去直後にすること｜葬儀の流れ｜稲垣屋葬儀店（葛飾区）",
  description:
    "大切な方がご逝去された直後にすること・連絡先・手続きの流れを葛飾区の稲垣屋葬儀店が丁寧にご説明します。突然のことで何をすべきか分からない方へ。24時間365日対応。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/flow/after-death" },
};

const steps = [
  {
    number: "01",
    title: "主治医・病院への連絡",
    desc: "ご自宅でご逝去された場合は、かかりつけ医師にご連絡ください。病院・施設でご逝去された場合は、担当の医療スタッフがご対応します。医師が「死亡診断書」を発行します。",
  },
  {
    number: "02",
    title: "葬儀社への連絡",
    desc: "ご逝去を確認次第、葬儀社にご連絡ください。稲垣屋葬儀店は24時間365日対応しております。電話一本で、故人様のお迎え・搬送・安置から葬儀の段取りまで、すべてご案内します。慌てる必要はありませんが、早めにご連絡いただくことで、ご安置の手配がスムーズに進みます。",
  },
  {
    number: "03",
    title: "ご遺体の搬送・安置",
    desc: "葬儀社がご指定の場所（病院・施設・ご自宅など）へお迎えに伺い、適切に搬送・安置します。安置場所は、ご自宅または稲垣屋葬儀店の安置施設からお選びいただけます。",
  },
  {
    number: "04",
    title: "死亡届の提出・火葬許可証の取得",
    desc: "ご逝去後7日以内に、市区町村役場に「死亡届」を提出する必要があります。死亡診断書の写しを使用します。稲垣屋葬儀店では、この手続きのサポートも承っています。火葬には「火葬許可証」が必要なため、早めの手続きをお勧めします。",
  },
  {
    number: "05",
    title: "宗教者・菩提寺への連絡",
    desc: "お寺とのお付き合いがある場合は、早めに菩提寺にご連絡ください。葬儀の日程は、ご寺院のスケジュールも考慮して決定します。宗教者が決まっていない場合や無宗教葬をご希望の場合も、稲垣屋葬儀店にご相談ください。",
  },
  {
    number: "06",
    title: "近親者への連絡",
    desc: "ご家族・ご親族・故人の親友など、特に近しい方には早めのご連絡をお勧めします。葬儀の日程・形式が決まったら、参列者への案内もご準備ください。家族葬の場合は、参列者を限定する旨をお伝えすることも重要です。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "深夜に亡くなった場合、何時でも電話してよいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、稲垣屋葬儀店は24時間365日対応しております。深夜・早朝・休日を問わず、いつでもお電話ください。まずはご連絡いただければ、次のステップを丁寧にご案内します。",
      },
    },
    {
      "@type": "Question",
      name: "死亡届はいつまでに提出する必要がありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ご逝去を知った日から7日以内（国外の場合は3か月以内）に提出する必要があります。稲垣屋葬儀店では手続きのサポートも承っておりますので、お気軽にご相談ください。",
      },
    },
    {
      "@type": "Question",
      name: "病院に安置してもらえますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "病院によって安置できる時間が限られています。葬儀社へ早めにご連絡いただき、ご自宅または安置施設への搬送をご手配されることをお勧めします。",
      },
    },
  ],
};

export default function FlowAfterDeathPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="ご逝去直後にすること"
        subtitle="突然のことで不安なあなたへ。最初にすべきことを丁寧にご案内します"
        en="FIRST STEPS AFTER PASSING"
      />
      <Breadcrumb items={[{ label: "葬儀の流れ", href: "/flow" }, { label: "ご逝去直後にすること" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FIRST STEPS</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              まず、深呼吸してください
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              突然の訃報に、何をすればよいか分からなくなることは当然のことです。まずは深呼吸してください。急いですべてを決める必要はありません。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              稲垣屋葬儀店は24時間365日対応しております。電話一本いただければ、次のステップを丁寧にご案内します。以下に、ご逝去直後の流れをまとめました。参考にしていただければ幸いです。
            </p>
          </FadeInUp>

          <FadeInUp className="mt-10 mb-10">
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              ご逝去直後の流れ
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {steps.map((step) => (
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

          <FadeInUp className="mt-14">
            <div className="border-t border-[#e8ddf4] pt-8">
              <p className="text-[#7560a0] text-sm leading-loose mb-4">
                ※ 上記はご逝去後の一般的な流れです。状況によって順序や内容が異なる場合があります。
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Link href="/flow" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                  葬儀全体の流れを見る<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/flow/transport" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                  搬送・安置について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/flow/meeting" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                  打ち合わせについて<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              今すぐご連絡ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-3">
              稲垣屋葬儀店は24時間365日対応しております。
            </p>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              深夜・早朝・休日を問わず、いつでもお電話ください。
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
