import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "費用を抑えた葬儀をお考えの方へ｜葛飾区 稲垣屋葬儀店",
  description:
    "葬儀費用を抑えたいとお考えの方へ。火葬式・区民葬儀・費用削減のポイントを、葛飾区の稲垣屋葬儀店がわかりやすくご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/needs/low-cost" },
};

const faqs = [
  {
    q: "最も費用を抑えられる葬儀の形式は何ですか？",
    a: "火葬式（直葬）が最もシンプルで費用を抑えられる形式です。通夜・告別式を行わず、安置後に火葬場へ直接搬送します。必要最小限のご準備で行えますが、故人とのお別れの時間もきちんと確保できます。",
  },
  {
    q: "葛飾区民は葬儀費用が抑えられる制度がありますか？",
    a: "はい、葛飾区では「区民葬儀」という制度があります。区が定めた範囲・費用で葬儀を行える仕組みで、一般的な葬儀と比べて費用を抑えることができます。稲垣屋葬儀店は区民葬儀の取扱店として登録されており、詳しくご案内します。",
  },
  {
    q: "費用を抑えると、お別れの場が粗末になりますか？",
    a: "そのようなことはありません。費用を抑えることと、心のこもったお別れをすることは矛盾しません。シンプルな形式でも、ご家族が故人と向き合い、しっかりお別れできる場を作ることができます。",
  },
  {
    q: "事前に費用の見積もりをもらうことはできますか？",
    a: "はい、事前相談（生前相談）にて費用の概算をご説明しております。費用の内訳・削減できる項目・総費用の目安をわかりやすくお伝えします。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const points = [
  {
    title: "火葬式（直葬）を選ぶ",
    desc: "通夜・告別式を省き、ご安置後に火葬場へ直接搬送する形式です。費用を最小限に抑えられるうえ、ご家族だけで静かにお別れができます。「簡素にしたい」「費用が心配」という方に最も多く選ばれています。",
    href: "/plans/cremation",
    linkLabel: "火葬式（直葬）の詳細",
  },
  {
    title: "葛飾区の区民葬儀制度を活用する",
    desc: "葛飾区民の方は「区民葬儀」制度をご利用いただけます。区が定めた内容・価格帯で葬儀を行える公的な仕組みです。一般的な葬儀より費用を抑えながら、一定の内容を確保できます。稲垣屋葬儀店は区民葬儀の取扱店です。",
    href: "/plans/kumin-funeral",
    linkLabel: "区民葬儀について",
  },
  {
    title: "費用が膨らみやすい項目を事前に把握する",
    desc: "葬儀費用が膨らむ主な原因は「飲食費」「返礼品」「宗教者へのお布施」などの実費部分とオプション追加です。どの項目が必須でどこを調整できるかを事前に確認しておくことが費用を抑える第一歩です。",
    href: "/cost/reduce",
    linkLabel: "費用削減のポイント",
  },
  {
    title: "事前相談で透明性の高い見積もりを確認する",
    desc: "葬儀費用は後から追加になる場合があります。事前相談では総費用の内訳・追加費用が発生しやすい状況・見積もりの見方などをご説明します。納得したうえで葬儀に臨めるよう丁寧にご案内します。",
    href: "/consultation",
    linkLabel: "事前相談について",
  },
];

export default function LowCostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        title="費用を抑えた葬儀をお考えの方へ"
        subtitle="尊厳を大切にしながら、費用を最小化するための方法"
        en="LOW COST FUNERAL"
      />
      <Breadcrumb
        items={[
          { label: "こんな方へ", href: "/needs" },
          { label: "費用を抑えたい方へ" },
        ]}
      />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">INTRODUCTION</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              費用が心配でも、大丈夫です
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              「葬儀に多くのお金を使える状況ではない」「費用が心配で、どのくらいかかるか見当もつかない」——そのようなお気持ちで稲垣屋葬儀店にご連絡いただく方は少なくありません。費用を抑えることは決して恥ずかしいことではなく、大切なご判断のひとつです。
            </p>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              シンプルな形式であっても、故人への想いを込めた葬儀は十分に行えます。火葬式（直葬）や葛飾区の区民葬儀制度をはじめ、費用を抑えるための選択肢はいくつかあります。このページでは費用を最小化しながら心を込めたお見送りをするための方法をご案内します。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              「いくらかかるか分からない」という不安が一番つらいものです。稲垣屋葬儀店では費用の内訳を明確にお伝えし、ご家族の状況に合った形をご提案します。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">OPTIONS</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              費用を抑えるための選択肢
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {points.map((point) => (
              <StaggerItem key={point.title}>
                <div className="py-7">
                  <h3
                    className="text-[#312852] text-lg tracking-wide mb-2"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    {point.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-base leading-relaxed mb-3">{point.desc}</p>
                  <Link
                    href={point.href}
                    className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors"
                  >
                    {point.linkLabel} <ChevronRight size={13} />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COST BREAKDOWN</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              葬儀費用の構成を理解する
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              葬儀費用は大きく3つに分かれます。「葬儀社へのプラン費用」「宗教者へのお布施」「飲食・返礼品などの実費」です。このうち葬儀社へのプランを選択することで最も大きな差が生まれます。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              火葬式や区民葬儀を選ぶことで、葬儀社への費用を大きく抑えることができます。お布施については宗教・寺院によって異なるため、個別にご相談ください。飲食・返礼品は規模に応じてご自身でコントロールできる部分です。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              費用の詳細については
              <Link href="/cost" className="underline underline-offset-2 text-[#5c4a80] hover:text-[#312852] transition-colors mx-1">
                葬儀費用について
              </Link>
              もご覧ください。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
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
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <div className="py-7">
                  <p
                    className="text-[#312852] text-base tracking-wide mb-3"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    Q. {faq.q}
                  </p>
                  <p className="text-[#4a4a4a] text-base leading-relaxed pl-4 border-l border-[#c9a55a]">
                    {faq.a}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-8">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">RELATED</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              関連ページ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              { href: "/plans/cremation", label: "火葬式（直葬）プランの詳細" },
              { href: "/plans/kumin-funeral", label: "区民葬儀について" },
              { href: "/cost/reduce", label: "葬儀費用を抑えるポイント" },
              { href: "/needs/simple", label: "シンプルな葬儀を希望の方へ" },
              { href: "/needs/katsushika-resident", label: "葛飾区民の方へ（区民葬儀情報）" },
              { href: "/consultation", label: "事前相談のご案内" },
            ].map((link) => (
              <StaggerItem key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between py-5 text-[#5c4a80] hover:text-[#312852] transition-colors group"
                >
                  <span className="text-base">{link.label}</span>
                  <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2
              className="text-[#312852] text-2xl tracking-[0.08em] mb-5"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              費用について、まずはご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              「いくらかかるか分からない」という不安を、一緒に解消しましょう。稲垣屋葬儀店は24時間365日対応しております。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 group w-full sm:w-auto justify-center"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                <MessageCircle size={17} />お問い合わせ<ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 border border-[#9278be] text-[#5c4a80] hover:bg-[#ede7f6] px-8 py-4 tracking-wider transition-colors duration-300 w-full sm:w-auto justify-center"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                事前相談について
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
