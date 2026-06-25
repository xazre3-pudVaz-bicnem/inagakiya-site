import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "死亡届について｜提出期限・窓口・書き方｜葛飾区 稲垣屋葬儀店",
  description:
    "死亡届の提出方法・期限・必要書類・提出先を葛飾区の稲垣屋葬儀店が解説します。7日以内という期限の考え方や、稲垣屋葬儀店のサポートについても丁寧にご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/flow/death-notification" },
};

const notificationItems = [
  {
    en: "What is It",
    title: "死亡届とは",
    desc: "死亡届は、ご逝去の事実を市区町村の役所に届け出るための公的書類です。死亡診断書（または死体検案書）と一体の書類として、医師が記載した死亡診断書の欄と、届出人が記載する死亡届の欄が同一用紙に印刷されています。死亡届の提出が完了することで、火葬許可証の取得が可能になります。",
  },
  {
    en: "Deadline",
    title: "提出期限について",
    desc: "死亡届の提出期限は、一般的にご逝去を知った日から7日以内と定められています（国外でご逝去の場合は3か月以内が目安とされることがあります）。ただし、状況により異なる場合がありますので、詳細は担当機関にご確認ください。稲垣屋葬儀店では、提出のサポートを承っており、ご家族の負担を軽減します。",
  },
  {
    en: "Where to Submit",
    title: "提出先",
    desc: "死亡届は、故人様の本籍地・死亡地・届出人の住所地のいずれかの市区町村役所に提出します。葛飾区の場合、葛飾区役所または各出張所に提出します。24時間受け付けている窓口があることも多いですが、詳細は各役所にご確認ください。",
  },
  {
    en: "What to Fill",
    title: "届出人が記入する内容",
    desc: "死亡届の届出人欄には、故人様のお名前・生年月日・住所・死亡の年月日・届出人との続柄・届出人の氏名・住所などを記入します。死亡診断書の欄は医師が記載しているため、そちらを変更する必要はありません。不明な点は役所の窓口または稲垣屋葬儀店にご相談ください。",
  },
  {
    en: "Support",
    title: "稲垣屋葬儀店のサポート",
    desc: "稲垣屋葬儀店では、死亡届の提出代行・火葬許可証の取得を承っています。ご家族が役所に出向かなくてもよいよう、書類の手続きをサポートします。何をどこに提出すれば良いか分からない方も、安心してご相談ください。",
  },
];

const faqItems = [
  {
    q: "死亡届はいつまでに提出すればよいですか？",
    a: "一般的にご逝去を知った日から7日以内と定められています。ただし状況により異なる場合がありますので、詳細は担当機関またはご相談の際に稲垣屋葬儀店にご確認ください。火葬の日程に合わせて早めに提出することをお勧めします。",
  },
  {
    q: "深夜や休日でも死亡届を提出できますか？",
    a: "多くの市区町村役所では、死亡届について24時間・365日受け付けを行っています。ただし、時間帯によっては窓口対応が制限される場合があります。詳細は各役所にご確認ください。稲垣屋葬儀店でも、提出のタイミングについてご案内します。",
  },
  {
    q: "死亡届の提出は誰でもできますか？",
    a: "死亡届の届出人は、同居の親族・その他の親族・医師・後見人などが対象とされています（届出できる方の範囲は法律に基づいています）。葬儀社が代行する場合も多いです。詳細は担当役所にご確認ください。",
  },
  {
    q: "死亡届に記載する内容で分からないことがある場合はどうすればよいですか？",
    a: "死亡届の記入については、役所の窓口や稲垣屋葬儀店にご相談ください。医師が記載する死亡診断書の欄については、発行した医療機関にご確認ください。",
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
  name: "死亡届について｜提出期限・窓口・書き方｜葛飾区 稲垣屋葬儀店",
  description:
    "死亡届の提出方法・期限・必要書類・提出先を葛飾区の稲垣屋葬儀店が解説します。7日以内という期限の考え方や、稲垣屋葬儀店のサポートについても丁寧にご説明します。",
  url: "https://www.inagakiyasougiten.com/flow/death-notification",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀の流れ", item: "https://www.inagakiyasougiten.com/flow" },
      { "@type": "ListItem", position: 3, name: "死亡届について｜提出期限・窓口・書き方", item: "https://www.inagakiyasougiten.com/flow/death-notification" },
    ],
  },
};

export default function FlowDeathNotificationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="死亡届について"
        subtitle="提出期限・窓口・書き方・稲垣屋葬儀店のサポートについて"
        en="DEATH NOTIFICATION"
      />
      <Breadcrumb items={[{ label: "葬儀の流れ", href: "/flow" }, { label: "死亡届" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">DEATH NOTIFICATION</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              死亡届について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              死亡届は葬儀に際して必要な行政手続きの中心となる書類です。提出することで火葬許可証を取得でき、火葬・葬儀を進めることができます。
            </p>
            <p className="text-[#7560a0] text-sm leading-loose mb-8 border-l-2 border-[#e8ddf4] pl-4">
              ※ 以下の内容は一般的な説明です。具体的な手続き・期限については担当の役所・機関にご確認ください。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {notificationItems.map((item) => (
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
              <Link href="/flow/death-certificate" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                死亡診断書について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/flow/cremation-permit" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                火葬許可証について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/flow/after-funeral-procedures" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                葬儀後の手続き一覧<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/flow/documents" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                手続き・書類について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
