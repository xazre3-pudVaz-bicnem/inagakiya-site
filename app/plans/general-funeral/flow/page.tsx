import type { Metadata } from "next";
import PageHero from "../../../components/PageHero";
import Breadcrumb from "../../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "一般葬の流れ｜お通夜・告別式の葬儀｜葛飾区 稲垣屋葬儀店",
  description:
    "葛飾区での一般葬（お通夜・告別式を執り行う伝統的な葬儀）の流れをご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/plans/general-funeral/flow" },
};

const steps = [
  {
    number: "01",
    title: "ご逝去・ご連絡",
    desc: "大切な方がご逝去されましたら、まず稲垣屋葬儀店へご連絡ください。24時間365日、深夜・早朝・休日を問わずお電話をお受けしております。ご連絡いただきましたら、担当者が速やかにお伺いします。慌てず、まずはお電話一本からお任せください。",
  },
  {
    number: "02",
    title: "搬送・ご安置",
    desc: "病院や施設などからご自宅、または当社の安置施設へ故人様をお連れします。葛飾区内および近郊への搬送に迅速に対応しております。ご安置後、ご家族でゆっくりとそばにいていただける環境をご用意します。",
  },
  {
    number: "03",
    title: "葬儀の打ち合わせ",
    desc: "葬儀日程・プランの内容・参列者数の規模・式場の選定・宗教者の手配などについて丁寧に打ち合わせを行います。一般葬は参列者数に応じた準備が必要となりますので、この段階でご希望やご不安な点をご遠慮なくご相談ください。費用についても詳細なお見積もりをご提示します。",
  },
  {
    number: "04",
    title: "訃報のご連絡",
    desc: "葬儀の日程・式場が決まりましたら、参列者へ訃報をお知らせします。一般葬では会社関係・近所の方・友人知人など広い範囲への連絡が必要になります。連絡方法（電話・手紙・メール）や文面についても、稲垣屋葬儀店でアドバイスいたします。",
  },
  {
    number: "05",
    title: "納棺",
    desc: "故人様を棺に納める「納棺の儀」を行います。ご希望に応じて湯灌（ゆかん）も承ります。ご家族が故人様のお身支度を整え、最後のお別れの準備をするための大切な時間です。",
  },
  {
    number: "06",
    title: "通夜",
    desc: "夕方から始まるお通夜を執り行います。喪主は参列者をお迎えし、焼香・読経などの儀式を進めます。参列者は焼香を行い、ご遺族にお悔やみを申し上げます。通夜の時間帯・式の進行・喪主・参列者それぞれの役割については、事前の打ち合わせで丁寧にご説明します。",
  },
  {
    number: "07",
    title: "通夜振る舞い",
    desc: "お通夜が終わった後、参列者をもてなす通夜振る舞い（会食）を行う場合があります。近年は略式で行う場合や省略するケースもありますが、地域の慣習や規模に応じてご相談のうえ対応いたします。",
  },
  {
    number: "08",
    title: "告別式",
    desc: "翌日、告別式を執り行います。宗教者による読経・焼香・弔辞・弔電の拝読などが行われます。参列者が順に焼香を行い、故人様と最後のお別れをする場となります。告別式の進行・喪主の役割についても事前に詳しくご案内します。",
  },
  {
    number: "09",
    title: "出棺・火葬・収骨・繰り上げ初七日",
    desc: "告別式の後、ご出棺し火葬場へ向かいます。葛飾区では近隣の公営火葬場をご利用いただきます。火葬後、ご家族で収骨（お骨上げ）を行います。また、近年では繰り上げ初七日（火葬後にそのまま初七日法要を行う）を行うケースも多く、ご希望に応じて対応いたします。",
  },
];

const faqItems = [
  {
    question: "一般葬はどのくらいの日数がかかりますか？",
    answer:
      "一般的に、ご逝去からお通夜・告別式・火葬まで2〜3日程度かかります。ご逝去当日にご連絡いただき、翌日または翌々日にお通夜、その翌日に告別式・火葬というのが標準的な流れです。日程は火葬場の空き状況や宗教者のご都合によって前後することがあります。",
  },
  {
    question: "一般葬の参列者は何名程度ですか？",
    answer:
      "一般葬の参列者数はご家族・会社関係・近所など故人の交友関係の広さによって大きく異なります。数十名から数百名になる場合もあります。葛飾区内での一般葬では、地域のつながりから多くの方にご参列いただくケースも多いため、早めに規模の見通しをたてることが大切です。",
  },
  {
    question: "一般葬と家族葬、どちらを選べばよいですか？",
    answer:
      "故人との関係者の範囲や、ご遺族の意向によって選択が変わります。多くの方にお別れいただきたい場合や、地域・職場のつながりを大切にしたい場合は一般葬が適しています。一方、身内だけで静かに送りたい場合は家族葬が選ばれます。稲垣屋葬儀店の事前相談でご状況に合わせてご案内します。",
  },
  {
    question: "一般葬でも葛飾区民葬儀は利用できますか？",
    answer:
      "葛飾区民葬儀制度は、対象となる区民の葬儀に利用できる制度です。一般葬の形式で区民葬儀を利用できるかどうかは、葛飾区の規定や制度内容によります。詳細は稲垣屋葬儀店（葛飾区指定取扱店）またはお近くの区役所へお問い合わせください。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function GeneralFuneralFlowPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero title="一般葬の流れ" subtitle="お通夜・告別式を執り行う伝統的な葬儀" en="FLOW OF GENERAL FUNERAL" />
      <Breadcrumb
        items={[
          { label: "葬儀プラン", href: "/plans" },
          { label: "一般葬", href: "/plans/general-funeral" },
          { label: "一般葬の流れ" },
        ]}
      />

      {/* イントロ */}
      <section className="py-20 md:py-28 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">OVERVIEW</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em] mb-5"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              一般葬とは
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mb-6" />
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              一般葬とは、お通夜と告別式を執り行う伝統的な葬儀形式です。参列者の範囲を限定せず、故人と縁のあったご親族・友人・仕事関係者・地域の方々など、多くの方にお別れの場を設けることができます。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              葛飾区は地域のつながりが強く、一般葬を選ばれるご家族も引き続き多くいらっしゃいます。稲垣屋葬儀店は葛飾区堀切に根付いた葬儀社として、地域の慣習を踏まえながら、ご遺族のご意向に沿った葬儀をきめ細かくお手伝いします。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              ここでは一般葬の流れをステップごとにご説明します。事前に流れを把握しておくことで、いざというときに落ち着いて対応できます。ご不明な点は事前相談でいつでもご確認ください。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ステップセクション */}
      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">STEP BY STEP</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              一般葬の流れ（9ステップ）
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {steps.map((step) => (
              <StaggerItem key={step.number}>
                <div className="flex items-start gap-6 py-8">
                  <div className="shrink-0 w-14 text-center pt-1">
                    <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-1">STEP</p>
                    <p
                      className="text-[#c9a55a] text-2xl tracking-wider"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      {step.number}
                    </p>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3
                      className="text-[#312852] text-lg tracking-wide mb-2"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[#4a4a4a] text-base leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 家族葬との違い */}
      <section className="py-16 md:py-24 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COMPARISON</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              家族葬との違い
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "参列者の範囲",
                desc: "一般葬は参列者の範囲に制限を設けないため、故人の知人・仕事関係者・地域の方など広い範囲の方にお越しいただけます。家族葬はご家族・ご親族のみに限定するため、参列者数が大きく異なります。",
              },
              {
                title: "費用の目安",
                desc: "一般葬は参列者数が増えるほど、飲食費・返礼品費・式場費用なども増加する傾向があります。家族葬や一日葬と比べて費用の幅が広くなりやすいため、事前のお見積もりをご活用ください。",
              },
              {
                title: "準備の量と役割分担",
                desc: "一般葬は参列者への対応（受付・案内・接待）など、準備や当日の役割が家族葬より多くなります。稲垣屋葬儀店では世話役の段取りや当日の進行サポートまで丁寧にお手伝いします。",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3
                    className="text-[#312852] text-lg tracking-wide mb-2"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 当日の主な役割 */}
      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ROLES</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              当日の主な役割
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "喪主の役割",
                desc: "喪主は葬儀の主宰者として、参列者へのご挨拶・お礼、宗教者への対応、式全体の取り仕切りを担います。お通夜・告別式それぞれで喪主の挨拶が求められる場合があります。稲垣屋葬儀店では挨拶文のご相談にも対応しております。",
              },
              {
                title: "世話役の役割",
                desc: "一般葬では受付・案内・香典管理・参列者の誘導など、世話役（世話人）の方々の協力が欠かせません。事前に役割分担を決めておくことで当日の混乱を防げます。役割の割り振りについてもご相談ください。",
              },
              {
                title: "葬儀社スタッフの役割",
                desc: "稲垣屋葬儀店のスタッフは、式場設営・進行管理・宗教者への対応・搬送など、葬儀全体の運営を担当します。当日はご遺族が故人とのお別れに集中できるよう、裏方の仕事をすべてお任せください。",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3
                    className="text-[#312852] text-lg tracking-wide mb-2"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              よくあるご質問
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {faqItems.map((item) => (
              <StaggerItem key={item.question}>
                <div className="py-7">
                  <p
                    className="text-[#5c4a80] text-base tracking-wide mb-3"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    Q. {item.question}
                  </p>
                  <p className="text-[#4a4a4a] text-base leading-relaxed pl-4 border-l-2 border-[#e8ddf4]">
                    {item.answer}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 関連ページ */}
      <section className="py-12 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-5">RELATED PAGES</p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {[
                { href: "/plans/general-funeral", label: "一般葬について" },
                { href: "/plans/general-funeral/cost", label: "一般葬の費用" },
                { href: "/plans/family-funeral/flow", label: "家族葬の流れ" },
                { href: "/plans/oneday-funeral/flow", label: "一日葬の流れ" },
                { href: "/plans/kumin-funeral", label: "区民葬儀について" },
                { href: "/consultation", label: "事前相談" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-1 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group"
                >
                  {link.label}
                  <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              ご不明な点はお気軽にご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              事前相談・お見積もりは無料です。強引な勧誘は一切行いません。
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
