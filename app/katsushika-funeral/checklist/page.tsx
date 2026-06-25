import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "葛飾区で葬儀前に確認しておきたいこと｜稲垣屋葬儀店",
  description:
    "葛飾区で葬儀を行う前に確認しておきたいチェックリスト。菩提寺・費用・形式・参列者・区民葬儀など、事前に把握しておくと安心なポイント。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/katsushika-funeral/checklist" },
};

const checklistItems = [
  {
    number: "01",
    title: "菩提寺の有無を確認する",
    body: "菩提寺がある場合は、葬儀の形式・宗派の作法について事前に相談しておくことが大切です。菩提寺が決まっていない場合や、無宗教葬をご希望の場合もご相談ください。",
  },
  {
    number: "02",
    title: "葬儀の形式を家族で話し合う",
    body: "家族葬・一日葬・火葬式・一般葬・区民葬儀など、どの形式が故人・ご家族の希望に合っているかを家族で話し合っておきましょう。",
  },
  {
    number: "03",
    title: "参列者の規模を考える",
    body: "何人くらいの方に参列していただくかを大まかに把握しておくと、式場や費用の見当がつきます。家族のみか、職場・知人も呼ぶかによって形式も変わります。",
  },
  {
    number: "04",
    title: "費用の見当をつける",
    body: "葬儀の総費用は、形式・規模・宗教者へのお礼・飲食費・返礼品などによって変わります。事前相談で概算を確認しておくと安心です。稲垣屋葬儀店では無料でお見積もりを行います。",
  },
  {
    number: "05",
    title: "葛飾区民葬儀制度の活用可否を確認する",
    body: "葛飾区民の方は「区民葬儀制度」を利用することで費用を抑えることができます。稲垣屋葬儀店は葛飾区指定の取扱店ですので、制度の詳細・手続きについてご相談ください。",
  },
  {
    number: "06",
    title: "安置場所を決める",
    body: "ご逝去後、ご遺体を安置する場所（ご自宅または安置施設）を事前に考えておきましょう。自宅安置を希望する場合は、スペースや搬入経路についても確認が必要です。",
  },
  {
    number: "07",
    title: "遺影写真を準備しておく",
    body: "遺影に使う写真は、生前に本人が気に入っている写真を選んでおくとよいでしょう。デジタルデータでも印刷物でも対応できます。スマートフォンの写真も加工が可能です。",
  },
  {
    number: "08",
    title: "喪主の決め方を話し合う",
    body: "喪主は通常、故人の配偶者または長男・長女が務めますが、ご家族で話し合って決めることが大切です。喪主が複数いる場合もあります。",
  },
  {
    number: "09",
    title: "葬儀後の手続きについて把握しておく",
    body: "葬儀後には役所への届け出・相続・年金・銀行手続きなど多くの事務手続きがあります。概要を事前に把握しておくと、葬儀後の対応がスムーズになります。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "葛飾区で葬儀を行う前に最初に確認すべきことは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "まず菩提寺の有無と、葬儀の形式についてご家族で話し合うことをお勧めします。菩提寺がある場合は宗派の作法が関係してくるため、形式を決める前に菩提寺に相談することが大切です。葬儀の形式・参列者の規模・費用の目安を大まかに把握しておくと、実際にご逝去があった際に落ち着いて対応できます。",
      },
    },
    {
      "@type": "Question",
      name: "遺影写真はどのように準備すればよいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "遺影写真は、故人が気に入っている写真や、表情がよく分かる写真を選んでおくとよいでしょう。スマートフォンで撮影した写真や集合写真から個人を切り抜いたものも加工可能です。生前に本人と一緒に写真を選んでおくと、ご本人の意思を反映させることができます。稲垣屋葬儀店では遺影写真の加工・制作もサポートしています。",
      },
    },
    {
      "@type": "Question",
      name: "葬儀前の事前相談では、どのような内容を相談できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "稲垣屋葬儀店の事前相談（無料）では、葬儀の形式・費用の目安・流れ・区民葬儀制度の活用方法・菩提寺がない場合の宗教者手配など、葬儀に関するあらゆる疑問にお答えします。「まだ何も決まっていない」という段階でも構いません。強引な勧誘は一切行いませんので、安心してご相談ください。",
      },
    },
    {
      "@type": "Question",
      name: "葬儀後にはどのような手続きが必要ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "葬儀後には、死亡届の提出（ご逝去から7日以内、葛飾区役所）・火葬許可証の処理・年金受給停止の手続き・健康保険の脱退・銀行口座の相続手続きなどが必要です。また、相続が発生する場合は相続税の申告期限（死亡から10ヶ月以内）もあります。稲垣屋葬儀店では葬儀後の手続きについての概要もご案内しています。",
      },
    },
  ],
};

export default function ChecklistPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="葛飾区で葬儀前に確認しておきたいこと"
        subtitle="事前に把握しておくと、もしものときに落ち着いて対応できます"
        en="PRE-FUNERAL CHECKLIST"
      />
      <Breadcrumb
        items={[
          { label: "葛飾区の葬儀", href: "/katsushika-funeral" },
          { label: "葬儀前チェックリスト" },
        ]}
      />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">CHECKLIST</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              事前に確認しておくと安心なこと
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp>
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose">
              <p>
                葛飾区で葬儀を行う際、事前に確認・準備しておくことで、実際にご逝去があった際に冷静に対応することができます。すべてを事前に決める必要はありませんが、大まかな方向性を把握しておくだけで、慌てる場面が大幅に減ります。
              </p>
              <p>
                稲垣屋葬儀店では、事前相談（無料）でこれらの項目を一緒に確認するお手伝いをしています。「まだ具体的なことは何も決まっていない」という段階でも、気軽にご相談ください。
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">9 POINTS</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              確認しておきたい9つの項目
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {checklistItems.map((item) => (
              <StaggerItem key={item.number}>
                <div className="py-7">
                  <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-1">{item.number}</p>
                  <h3 className="text-[#312852] text-lg tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-sm leading-loose">{item.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">RELATED PAGES</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              関連ページ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp>
            <div className="divide-y divide-[#e8ddf4]">
              {[
                { href: "/consultation", label: "事前相談について（無料）" },
                { href: "/faq", label: "よくある質問" },
                { href: "/flow", label: "葬儀の流れ" },
                { href: "/plans", label: "プラン一覧" },
                { href: "/katsushika-funeral", label: "葛飾区の葬儀トップ" },
              ].map((link) => (
                <div key={link.href} className="py-5">
                  <Link href={link.href} className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group">
                    {link.label}
                    <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              葬儀前の準備に関するよくあるご質問
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {faqJsonLd.mainEntity.map((faq) => (
              <StaggerItem key={faq.name}>
                <div className="py-7">
                  <p className="text-[#312852] text-base mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                    <span className="text-[#9278be] font-bold mr-2">Q</span>
                    {faq.name}
                  </p>
                  <p className="text-[#4a4a4a] text-sm leading-loose pl-6">
                    <span className="text-[#c9a55a] font-bold mr-2">A</span>
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              葛飾区の葬儀に関するご相談
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              稲垣屋葬儀店は24時間365日対応。事前相談・お見積もりは無料です。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:0336900870" className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 w-full sm:w-auto justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
                <Phone size={17} className="text-[#dfc07e]" />03-3690-0870
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-[#9278be] text-[#5c4a80] hover:bg-[#ede7f6] px-8 py-4 tracking-wider transition-colors duration-300 w-full sm:w-auto justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
                <MessageCircle size={17} />お問い合わせ
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
