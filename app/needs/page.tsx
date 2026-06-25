import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import Breadcrumb from "../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "こんな方へ｜状況別葬儀ガイド｜葛飾区 稲垣屋葬儀店",
  description:
    "費用を抑えたい・小規模で行いたい・急な葬儀で困っている・無宗教で行いたいなど、さまざまな状況やご要望に応じた葬儀ガイドです。葛飾区の稲垣屋葬儀店がご案内します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/needs" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "どんな状況でも相談できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、どのような状況でもお気軽にご相談ください。急なご逝去・費用が心配・宗教がないなど、さまざまなご事情に対応しております。稲垣屋葬儀店は24時間365日対応（03-3690-0870）しておりますので、まずはお電話ください。",
      },
    },
    {
      "@type": "Question",
      name: "小規模な葬儀や家族だけの葬儀は可能ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、可能です。家族葬・一日葬・火葬式など、少人数でご家族だけで見送る形式に対応しております。ご希望の規模やスタイルをお聞きした上で、最適なプランをご提案します。",
      },
    },
    {
      "@type": "Question",
      name: "葛飾区民は葬儀費用が抑えられると聞きましたが？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "葛飾区では「区民葬儀」制度があり、区が定めた内容・費用で葬儀を行える制度があります。稲垣屋葬儀店は区民葬儀の取扱店として登録されており、ご相談を承っております。",
      },
    },
    {
      "@type": "Question",
      name: "事前に相談することはできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、ぜひご活用ください。いざというときに慌てないためにも、事前相談（生前相談）をお勧めしております。費用・プラン・流れなどを事前に確認しておくことで、ご家族の安心にもつながります。",
      },
    },
  ],
};

const subpages = [
  {
    href: "/needs/low-cost",
    label: "費用を抑えた葬儀をお考えの方へ",
    desc: "費用を最小限に抑えながらも、心を込めた葬儀を行う方法をご案内します。",
  },
  {
    href: "/needs/small",
    label: "小規模葬儀を希望の方へ",
    desc: "10名以下のこぢんまりとした葬儀を希望される方へ、適切なプランと会場をご案内します。",
  },
  {
    href: "/needs/family-only",
    label: "家族だけで見送りたい方へ",
    desc: "ご家族だけのプライベートな空間で、静かにお別れしたい方へのご案内です。",
  },
  {
    href: "/needs/no-wake",
    label: "お通夜なしで葬儀をしたい方へ",
    desc: "一日葬・直葬など、お通夜を省略した形式をお考えの方へのご案内です。",
  },
  {
    href: "/needs/simple",
    label: "シンプルな葬儀を希望の方へ",
    desc: "儀式を簡素にし、形式よりも気持ちを大切にした葬儀を希望される方へ。",
  },
  {
    href: "/needs/sudden",
    label: "急な葬儀で困っている方へ",
    desc: "突然のご逝去で何から始めればよいか分からない方へ、まず最初にすべきことをご案内します。",
  },
  {
    href: "/needs/no-religion",
    label: "無宗教で葬儀をしたい方へ",
    desc: "宗教的な儀式を行わない自由葬・無宗教葬をお考えの方へのご案内です。",
  },
  {
    href: "/needs/elderly-parent",
    label: "高齢の親の葬儀を考えている方へ",
    desc: "高齢の親御さんのためにいまから準備・相談しておきたい方へのご案内です。",
  },
  {
    href: "/needs/no-idea",
    label: "葬儀のことが全くわからない方へ",
    desc: "葬儀が初めてで何も分からない方へ、最初の一歩をわかりやすくご説明します。",
  },
  {
    href: "/needs/katsushika-resident",
    label: "葛飾区民の方へ（区民葬儀・地域情報）",
    desc: "葛飾区民の方が利用できる区民葬儀制度や、地域の葬儀情報をご紹介します。",
  },
];

export default function NeedsHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        title="こんな方へ"
        subtitle="状況やご要望に応じた葬儀ガイド"
        en="NEEDS GUIDE"
      />
      <Breadcrumb items={[{ label: "こんな方へ" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FOR YOUR SITUATION</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              あなたの状況に合わせたご案内
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              葬儀をご検討される方の状況は、それぞれ異なります。「費用をできるだけ抑えたい」「家族だけの静かな葬儀にしたい」「急なことで何をすれば良いか分からない」「宗教にこだわらない式を希望している」——そのひとつひとつに、適切な形があります。
            </p>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose">
              稲垣屋葬儀店は、明治11年頃の創業以来、葛飾区でさまざまなご事情やご要望にお応えしてきました。このページでは、よくある状況・ご要望別に、適したプランや対応方法をご案内します。気になる状況のページをご覧ください。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">SITUATION LIST</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              状況・ご要望から探す
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {subpages.map((page) => (
              <StaggerItem key={page.href}>
                <Link href={page.href} className="block py-7 group">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3
                        className="text-[#312852] text-lg tracking-wide mb-2 group-hover:text-[#5c4a80] transition-colors"
                        style={{ fontFamily: "var(--font-mincho)" }}
                      >
                        {page.label}
                      </h3>
                      <p className="text-[#4a4a4a] text-base leading-relaxed">{page.desc}</p>
                    </div>
                    <ChevronRight
                      size={18}
                      className="text-[#c9a55a] shrink-0 mt-1 group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#faf9f7] border-t border-[#e8ddf4]">
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
            {faqJsonLd.mainEntity.map((faq) => (
              <StaggerItem key={faq.name}>
                <div className="py-7">
                  <p
                    className="text-[#312852] text-base tracking-wide mb-3"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    Q. {faq.name}
                  </p>
                  <p className="text-[#4a4a4a] text-base leading-relaxed pl-4 border-l border-[#c9a55a]">
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
            <h2
              className="text-[#312852] text-2xl tracking-[0.08em] mb-5"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              ご不明な点はお気軽にご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              稲垣屋葬儀店は24時間365日対応。どのような状況でもまずはお電話ください。
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
