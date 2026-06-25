import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "葬儀後に必要な手続き一覧｜葛飾区 稲垣屋葬儀店",
  description:
    "葬儀後に必要な手続きの一覧を葛飾区の稲垣屋葬儀店が解説します。年金・健康保険・相続など各手続きの概要と時系列をご案内します。詳細は各窓口・専門家にご確認ください。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/flow/after-funeral-procedures" },
};

const procedures = [
  {
    timing: "葬儀後すぐ〜1週間以内",
    items: [
      { title: "死亡届の提出（未提出の場合）", desc: "葬儀社がサポートする場合が多いですが、未提出の場合は早めに対応が必要です。" },
      { title: "火葬許可証・埋葬許可証の保管", desc: "骨上げ後に返却される埋葬許可証は、納骨時に必要です。大切に保管してください。" },
      { title: "遺言書の有無の確認", desc: "公正証書遺言・自筆証書遺言の有無を早めに確認しましょう。" },
    ],
  },
  {
    timing: "葬儀後2週間〜1か月以内",
    items: [
      { title: "健康保険の手続き", desc: "故人様が加入していた健康保険（国民健康保険・社会保険など）の脱退手続きが必要になる場合があります。詳細は各窓口にご確認ください。" },
      { title: "年金の手続き", desc: "年金の受給停止・未支給年金の請求などが必要になる場合があります。日本年金機構または年金事務所にご確認ください。" },
      { title: "銀行口座・預貯金の凍結対応", desc: "故人様名義の銀行口座は原則として凍結されます。必要な費用の引き出しは早めに行うことが大切です。相続手続きについては専門家にご相談ください。" },
    ],
  },
  {
    timing: "葬儀後1か月以内",
    items: [
      { title: "葬儀費用の清算", desc: "葬儀社・火葬場・宗教者への支払い精算を行います。" },
      { title: "社会保険・雇用保険の手続き（現役世代の場合）", desc: "故人様が現役世代だった場合、雇用保険や社会保険の手続きが必要になる場合があります。詳細はハローワーク・年金事務所にご確認ください。" },
    ],
  },
  {
    timing: "四十九日法要までに",
    items: [
      { title: "四十九日法要の準備", desc: "宗教者・会場の手配・参列者への連絡などを進めます。" },
      { title: "納骨の手配", desc: "墓地・納骨堂の手配、埋葬許可証の準備など。" },
      { title: "香典返しの手配（後日送付の場合）", desc: "四十九日法要後に香典返しを郵送する場合は、この時期に手配を進めます。" },
    ],
  },
  {
    timing: "3か月〜10か月以内",
    items: [
      { title: "相続手続き", desc: "遺産相続に関する手続きは、相続放棄の期限（ご逝去を知った日から3か月以内が一般的）などがあります。相続税申告は10か月以内とされています。詳細は弁護士・税理士などの専門家にご相談ください。" },
      { title: "不動産の名義変更（相続登記）", desc: "不動産がある場合の名義変更手続きです。法務局での手続きが必要になります。" },
    ],
  },
];

const faqItems = [
  {
    q: "葬儀後の手続きは全て自分でしなければなりませんか？",
    a: "手続きの種類によって、ご家族が行うものと専門家に依頼できるものがあります。相続・税務・法的手続きについては、弁護士・税理士・司法書士などの専門家への相談をお勧めします。葛飾区役所の窓口でも相談を受け付けています。",
  },
  {
    q: "葬儀後の手続きに期限はありますか？",
    a: "手続きによって期限が異なります。死亡届は一般的に7日以内、相続放棄は3か月以内、相続税申告は10か月以内などが一般的とされています。ただし状況により異なる場合がありますので、各窓口・専門家にご確認ください。",
  },
  {
    q: "稲垣屋葬儀店では葬儀後の手続きもサポートしてもらえますか？",
    a: "稲垣屋葬儀店では、死亡届の提出・火葬許可証の取得などの葬儀に直接関わる手続きのサポートを行っています。年金・相続などの手続きについては、各担当窓口または専門家（弁護士・税理士など）へのご相談をお勧めします。",
  },
  {
    q: "手続きを進める順番はありますか？",
    a: "まず死亡届の提出・火葬許可証の取得を優先します。その後、健康保険・年金などの早めに対応が必要な手続きを進め、相続・税務などは専門家に相談しながら進めることをお勧めします。焦らず一つひとつ進めてください。",
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

export default function FlowAfterFuneralProceduresPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="葬儀後に必要な手続き一覧"
        subtitle="葬儀後に行う各種手続きの流れをご案内します"
        en="AFTER FUNERAL PROCEDURES"
      />
      <Breadcrumb items={[{ label: "葬儀の流れ", href: "/flow" }, { label: "葬儀後の手続き" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">AFTER FUNERAL</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              葬儀後の手続きについて
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              葬儀が終わった後も、さまざまな手続きが必要になります。一度にすべてをこなす必要はありませんが、期限があるものもありますので、一つひとつ確認しながら進めていきましょう。
            </p>
            <p className="text-[#7560a0] text-sm leading-loose mb-8 border-l-2 border-[#e8ddf4] pl-4">
              ※ 以下は一般的な手続きの目安です。詳細・期限については各窓口または弁護士・税理士等の専門家にご確認ください。
            </p>
          </FadeInUp>

          {procedures.map((period) => (
            <FadeInUp key={period.timing} className="mb-10">
              <h3 className="text-[#312852] text-xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
                {period.timing}
              </h3>
              <StaggerContainer className="divide-y divide-[#e8ddf4]">
                {period.items.map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="py-5">
                      <h4 className="text-[#312852] text-base tracking-wide mb-1" style={{ fontFamily: "var(--font-mincho)" }}>
                        {item.title}
                      </h4>
                      <p className="text-[#4a4a4a] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </FadeInUp>
          ))}

          <FadeInUp>
            <p className="text-[#7560a0] text-sm leading-loose border-t border-[#e8ddf4] pt-6 mb-10">
              ※ 各手続きの詳細・必要書類・期限については、各窓口または弁護士・税理士等の専門家にご相談ください。稲垣屋葬儀店では葬儀に直接関わる手続きのサポートを承っています。
            </p>
          </FadeInUp>

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
              <Link href="/flow/memorial-service" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                法要・四十九日について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/support/after-funeral" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                葬儀後のサポート<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
