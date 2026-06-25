import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import Breadcrumb from "../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, Phone, Users, MessageCircle, Heart, Star, Shield } from "lucide-react";
import RelatedColumns from "../components/RelatedColumns";

export const metadata: Metadata = {
  title: "葛飾区の葬儀の流れ｜ご逝去から納骨まで｜稲垣屋葬儀店",
  description:
    "葬儀の流れを詳しく解説。危篤・ご逝去・搬送・安置・打ち合わせ・通夜・告別式・火葬・葬儀後の手続きまで。葛飾区の稲垣屋葬儀店が丁寧にサポートします。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/flow" },
};

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "危篤・ご逝去のご連絡",
    subtitle: "24時間いつでも",
    desc: "大切な方が危篤・ご逝去された際は、まず稲垣屋葬儀店にお電話ください（03-3690-0870）。深夜・早朝・休日を問わず、24時間365日対応しております。「何から始めればよいか分からない」という状況でも大丈夫です。電話口で落ち着いてご状況をお聞きし、次の手順を丁寧にご案内します。",
    detail: [
      "24時間365日受付対応",
      "深夜・早朝・休日も迅速に対応",
      "どんな状況でも落ち着いてご連絡を",
    ],
    links: [
      { href: "/flow/critical", label: "危篤時の対応について" },
      { href: "/flow/after-death", label: "ご逝去直後にすること" },
    ],
  },
  {
    number: "02",
    icon: Heart,
    title: "搬送・ご安置",
    subtitle: "迅速に対応",
    desc: "ご連絡いただいた後、迅速に故人様のもとへお迎えに参ります。病院・施設・ご自宅など、どこからでも搬送対応いたします。ご自宅または稲垣屋葬儀店の安置施設にてご安置いたします。ご家族が落ち着いてお別れできる環境を整えます。",
    detail: [
      "迅速なお迎え対応（葛飾区全域）",
      "ご自宅または安置施設にてご安置",
      "遺体保全・管理も承ります",
    ],
    links: [
      { href: "/flow/transport", label: "搬送について" },
      { href: "/flow/resting-place", label: "安置場所について" },
    ],
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "葬儀社との打ち合わせ",
    subtitle: "ご希望をお聞きします",
    desc: "ご安置の後、担当スタッフがご家族とご相談しながら葬儀のプランを決めていきます。葬儀の形式・日程・参列者の規模・宗教者の手配・費用など、順を追って丁寧にご説明します。費用は事前に明確にご提示し、強引な追加はありません。",
    detail: [
      "ご希望のプランを一緒に決める",
      "費用の明確な事前提示",
      "強引な勧誘は一切なし",
    ],
    links: [
      { href: "/flow/meeting", label: "打ち合わせで決めること" },
    ],
  },
  {
    number: "04",
    icon: Users,
    title: "納棺",
    subtitle: "ご家族の時間",
    desc: "故人様を棺に納める「納棺」を行います。ご家族が一緒にお手伝いいただける形で進めます。故人様の旅立ちの準備をご家族と一緒に行う、大切な時間です。故人様が好きだったものを一緒に棺に入れることもできます。",
    detail: [
      "ご家族も一緒に参加できます",
      "丁寧で心を込めた納棺",
      "副葬品のご相談も承ります",
    ],
    links: [],
  },
  {
    number: "05",
    icon: Star,
    title: "通夜・告別式",
    subtitle: "お別れの場",
    desc: "ご希望のプランに合わせて、通夜・告別式を執り行います。家族葬の場合はご家族だけで静かに、一般葬の場合は多くのご参列者をお迎えして、故人とのお別れの場を設けます。一日葬の場合はお通夜を省略し、告別式のみを行います。火葬式の場合は通夜・告別式は行いません。",
    detail: [
      "プランに合わせた式の進行",
      "宗教・宗派に対応",
      "ご参列者への対応もサポート",
    ],
    links: [],
  },
  {
    number: "06",
    icon: Shield,
    title: "出棺・火葬・収骨",
    subtitle: "最後のお見送り",
    desc: "告別式の後、火葬場へご出棺します。葛飾区内の火葬場への移動もサポートします。火葬の後、ご家族でお骨上げ（収骨）を行います。故人様の遺骨が骨壺に収まるまで、スタッフが丁寧にご案内します。",
    detail: [
      "火葬場への移動サポート",
      "収骨のご案内",
      "ご家族へのお付き添い",
    ],
    links: [],
  },
  {
    number: "07",
    icon: Heart,
    title: "葬儀後の手続き",
    subtitle: "葬儀後も寄り添います",
    desc: "葬儀後も、稲垣屋葬儀店はご家族に寄り添います。死亡届・年金停止・保険手続きなどのアドバイス、四十九日・一周忌などの法要のご相談など、葬儀後も丁寧にサポートいたします。",
    detail: [
      "死亡届・火葬許可証など各種書類のご案内",
      "四十九日・一周忌の法要ご相談",
      "葬儀後の手続きのアドバイス",
    ],
    links: [
      { href: "/flow/after-funeral-procedures", label: "葬儀後の手続き一覧" },
    ],
  },
  {
    number: "08",
    icon: Star,
    title: "法要",
    subtitle: "四十九日・一周忌など",
    desc: "葬儀後の法要（四十九日・一周忌・三回忌など）についてもご相談いただけます。法要の形式・会場・宗教者の手配など、引き続きサポートします。",
    detail: [
      "四十九日・一周忌などの法要",
      "会場・宗教者手配のご相談",
      "納骨のタイミングについてのご案内",
    ],
    links: [
      { href: "/flow/memorial-service", label: "法要について" },
    ],
  },
];

const situationPages = [
  { href: "/flow/hospital", title: "病院でご逝去された場合", desc: "入院中にご逝去された場合の、病院からの搬送・手続きの流れ" },
  { href: "/flow/facility", title: "施設でご逝去された場合", desc: "介護施設・老人ホームなどでご逝去された場合の対応" },
  { href: "/flow/home", title: "ご自宅でご逝去された場合", desc: "ご自宅でご逝去された場合の、医師への連絡と搬送の流れ" },
  { href: "/flow/police", title: "警察が関与する場合", desc: "突然死・事故死など、警察が関与する場合の葬儀の流れ" },
];

const documentPages = [
  { href: "/flow/death-certificate", title: "死亡診断書", desc: "死亡診断書の受け取り・管理・活用の仕方" },
  { href: "/flow/death-notification", title: "死亡届の提出", desc: "死亡届の提出先・期限・必要書類について" },
  { href: "/flow/cremation-permit", title: "火葬許可証", desc: "火葬許可証の取得方法と火葬場での手続き" },
];

const faqItems = [
  {
    q: "葬儀の準備にはどのくらい時間がかかりますか？",
    a: "ご逝去から葬儀（火葬）まで、通常2〜4日程度です。お通夜の翌日に告別式・火葬という流れが一般的です。一日葬・火葬式の場合はより短期間で執り行われます。斎場・火葬場の空き状況によって変わります。",
  },
  {
    q: "火葬式の場合、流れはどうなりますか？",
    a: "火葬式（直葬）の場合は、ご逝去→搬送・安置→打ち合わせ→納棺→火葬場へ直接出棺→収骨という流れになります。お通夜・告別式は行いません。",
  },
  {
    q: "葬儀の打ち合わせはいつ行いますか？",
    a: "ご安置後、なるべく早めに打ち合わせを行います。葬儀の形式・日程・費用・宗教者の手配など、順を追って確認していきます。初めての方でも分かりやすく説明しますので、ご安心ください。",
  },
  {
    q: "危篤の段階で葬儀社に連絡してもよいですか？",
    a: "はい、危篤の段階でご連絡いただいて問題ありません。事前に搬送の手順や葬儀の流れを確認しておくことで、いざというときに慌てずに対応できます。稲垣屋葬儀店では事前のご相談も無料で承っています。",
  },
];

export default function FlowPage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "葛飾区の葬儀の流れ｜ご逝去から納骨まで｜稲垣屋葬儀店",
    description: "葬儀の流れを詳しく解説。危篤・ご逝去・搬送・安置・打ち合わせ・通夜・告別式・火葬・葬儀後の手続きまで。葛飾区の稲垣屋葬儀店が丁寧にサポートします。",
    url: "https://www.inagakiyasougiten.com/flow",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com/" },
        { "@type": "ListItem", position: 2, name: "葬儀の流れ", item: "https://www.inagakiyasougiten.com/flow" },
      ],
    },
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="葬儀の流れ"
        subtitle="ご逝去から納骨まで、丁寧にサポートします"
        en="FUNERAL FLOW"
      />
      <Breadcrumb items={[{ label: "葬儀の流れ" }]} />

      {/* このページでわかること */}
      <section className="py-12 md:py-16 bg-white border-b border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-4">ON THIS PAGE</p>
            <h2
              className="text-[#312852] text-xl md:text-2xl tracking-[0.06em] mb-6"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              このページでわかること
            </h2>
            <ul className="divide-y divide-[#e8ddf4]">
              {[
                "危篤・ご逝去から搬送・安置・打ち合わせ・通夜・告別式・火葬・葬儀後の手続きまでの流れ",
                "病院・施設・ご自宅・警察関与など、状況別の葬儀の流れ",
                "死亡診断書・死亡届・火葬許可証など必要書類のご案内",
                "各ステップの詳細ページへのリンクと注意事項",
              ].map((text) => (
                <li key={text} className="flex items-start gap-3 py-3">
                  <span className="w-1.5 h-1.5 bg-[#c9a55a] rounded-full shrink-0 mt-2" />
                  <span className="text-[#4a4a4a] text-sm leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </FadeInUp>
        </div>
      </section>

      {/* ご逝去からの流れ */}
      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">STEP BY STEP</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              ご逝去からの流れ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
            <p className="text-[#4a4a4a] mt-6 text-base leading-relaxed max-w-2xl">
              ご逝去から葬儀・葬儀後の手続きまで、一連の流れをご説明します。どのタイミングでご相談いただいても、丁寧にサポートいたします。また、事前に流れを知っておくことで、いざというときに落ち着いて対応できます。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-16">
            {steps.map((step) => (
              <StaggerItem key={step.number}>
                <div className="flex items-start gap-6 py-8">
                  <div className="shrink-0 w-14 text-center pt-1">
                    <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-1">STEP</p>
                    <p className="text-[#c9a55a] text-2xl tracking-wider" style={{ fontFamily: "var(--font-mincho)" }}>
                      {step.number}
                    </p>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2.5 mb-2">
                      <step.icon size={16} className="text-[#9278be] shrink-0" />
                      <h3 className="text-[#312852] text-lg tracking-wide" style={{ fontFamily: "var(--font-mincho)" }}>
                        {step.title}
                      </h3>
                      <span className="text-[#9278be] text-xs tracking-wide">{step.subtitle}</span>
                    </div>
                    <p className="text-[#4a4a4a] text-base leading-loose mb-3">{step.desc}</p>
                    <ul className="space-y-1.5 mb-3">
                      {step.detail.map((d) => (
                        <li key={d} className="flex items-center gap-2.5 text-[#4a4a4a] text-sm">
                          <span className="w-1 h-1 bg-[#9278be] rounded-full shrink-0" />{d}
                        </li>
                      ))}
                    </ul>
                    {step.links && step.links.length > 0 && (
                      <div className="flex flex-wrap gap-4 mt-2">
                        {step.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group"
                          >
                            {link.label}
                            <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp>
            <p className="text-[#7560a0] text-xs leading-loose border-t border-[#e8ddf4] pt-6">
              ※ 上記はご逝去後の一般的な流れです。火葬式・一日葬など葬儀の形式によって流れが変わります。状況によって順序や内容が異なる場合があります。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* 状況別の流れ */}
      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">BY SITUATION</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              状況別の流れ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
            <p className="text-[#4a4a4a] mt-5 text-sm leading-relaxed">
              ご逝去の場所や状況によって、最初に行うべきことや手順が異なります。ご状況に合わせた詳細をご確認ください。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {situationPages.map((page) => (
              <StaggerItem key={page.href}>
                <Link href={page.href} className="flex items-center justify-between py-7 group">
                  <div>
                    <h3 className="text-[#312852] text-base tracking-wide mb-1.5 group-hover:text-[#5c4a80] transition-colors" style={{ fontFamily: "var(--font-mincho)" }}>
                      {page.title}
                    </h3>
                    <p className="text-[#4a4a4a] text-sm leading-relaxed">{page.desc}</p>
                  </div>
                  <ChevronRight size={16} className="text-[#b8a0d8] group-hover:text-[#5c4a80] group-hover:translate-x-1 transition-all shrink-0 ml-4" />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 必要書類 */}
      <section className="py-16 md:py-24 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">DOCUMENTS</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              必要書類について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
            <p className="text-[#4a4a4a] mt-5 text-sm leading-relaxed">
              葬儀に関する書類は種類が多く、期限があるものもあります。稲垣屋葬儀店では各書類の手続きについても丁寧にご案内します。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {documentPages.map((page) => (
              <StaggerItem key={page.href}>
                <Link href={page.href} className="flex items-center justify-between py-7 group">
                  <div>
                    <h3 className="text-[#312852] text-base tracking-wide mb-1.5 group-hover:text-[#5c4a80] transition-colors" style={{ fontFamily: "var(--font-mincho)" }}>
                      {page.title}
                    </h3>
                    <p className="text-[#4a4a4a] text-sm leading-relaxed">{page.desc}</p>
                  </div>
                  <ChevronRight size={16} className="text-[#b8a0d8] group-hover:text-[#5c4a80] group-hover:translate-x-1 transition-all shrink-0 ml-4" />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              葬儀の流れに関するよくある質問
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
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
          <RelatedColumns slugs={["funeral-flow-basic", "what-to-do-after-death-katsushika", "death-at-hospital", "cremation-only-flow", "death-notification-and-cremation-permit"]} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              流れについてご不明な点はお気軽に
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              事前相談も承っております。いざというときに慌てないよう、まずはお気軽にご相談ください。事前相談は無料です。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 group w-full sm:w-auto justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
                <MessageCircle size={17} />
                お問い合わせ
                <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
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
