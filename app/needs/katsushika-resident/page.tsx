import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "葛飾区民として葬儀を考えている方へ｜区民葬儀制度も｜稲垣屋葬儀店",
  description:
    "葛飾区民として葬儀を考えている方へ。区民葬儀制度の活用・葛飾区内の葬儀事情・稲垣屋葬儀店のサポートについてご案内します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/needs/katsushika-resident" },
};

const faqs = [
  {
    q: "葛飾区民葬儀制度はどのような制度ですか？",
    a: "葛飾区が設けた制度で、葛飾区に住民登録されている方が利用できる葬儀の枠組みです。稲垣屋葬儀店は葛飾区指定の区民葬儀取扱店として登録されており、制度の詳細・申請方法・費用についての相談を承っております。まずはお気軽にご連絡ください。",
  },
  {
    q: "葛飾区内で葬儀を行う場合、地域密着の葬儀社を選ぶメリットは何ですか？",
    a: "地域に密着した葬儀社は、地元の火葬場・寺院・慣習を熟知しており、スムーズな対応が期待できます。稲垣屋葬儀店は明治11年頃から葛飾区で葬儀を行っており、地域の事情を深く理解しています。",
  },
  {
    q: "葛飾区外の親族も稲垣屋葬儀店に相談できますか？",
    a: "はい、葛飾区外にお住まいの方でも、葛飾区で葬儀を行う場合はご相談いただけます。また、葛飾区民の親御さんをお持ちの方が「親の葬儀を考え始めた」という段階でのご相談も歓迎しています。",
  },
  {
    q: "稲垣屋葬儀店は葛飾区のどこにありますか？",
    a: "稲垣屋葬儀店は東京都葛飾区堀切6-33-4にございます。京成本線「堀切菖蒲園」駅より徒歩約5分の場所です。お電話（03-3690-0870）での相談・ご訪問での相談も承っております。24時間365日対応しています。",
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

export default function KatsushikaResidentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        title="葛飾区民として葬儀を考えている方へ"
        subtitle="葛飾区でのご葬儀についてご案内します"
        en="KATSUSHIKA RESIDENT GUIDE"
      />
      <Breadcrumb
        items={[{ label: "ご要望から選ぶ" }, { label: "葛飾区民の方へ" }]}
      />

      {/* Intro */}
      <section className="py-20 md:py-28 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ABOUT</p>
            <h2
              className="text-[#312852] text-2xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              葛飾区での葬儀と稲垣屋葬儀店
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              稲垣屋葬儀店は、明治11年頃から葛飾区で葬儀を行っている地域密着の葬儀社です。葛飾区の火葬場・斎場・寺院・地域の慣習を深く理解しており、地元の方に長年にわたりご利用いただいています。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              葛飾区では、区民を対象とした「区民葬儀制度」があります。稲垣屋葬儀店は葛飾区指定の区民葬儀取扱店として登録されており、制度の活用についてもご相談いただけます。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              「葛飾区で葬儀を考えている」という段階から、お気軽にご相談ください。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* 区民葬儀制度 */}
      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">KUMIN FUNERAL</p>
            <h2
              className="text-[#312852] text-2xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              葛飾区民葬儀制度について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              葛飾区では、葛飾区に住民登録されている方を対象とした「区民葬儀」という制度が設けられています。区が定めた内容と費用の枠組みの中で葬儀を行える公的な仕組みです。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              稲垣屋葬儀店は葛飾区指定の区民葬儀取扱店として登録されており、区民葬儀の申請方法・対象者の条件・費用の詳細についてご説明することができます。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              区民葬儀制度を活用するかどうか、またどの形式が最もご家族の状況に合っているかについては、事前相談でご相談ください。
            </p>
            <div className="mt-6">
              <Link
                href="/consultation/kumin-funeral"
                className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group"
              >
                区民葬儀制度について詳しく
                <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* 葛飾区での葬儀の選択肢 */}
      <section className="py-20 md:py-28 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">PLANS</p>
            <h2
              className="text-[#312852] text-2xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              葛飾区での葬儀の選択肢
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "区民葬儀",
                desc: "葛飾区民が利用できる制度に基づく葬儀です。稲垣屋葬儀店は区民葬儀取扱店として登録されています。",
                link: "/plans/kumin-funeral",
                linkLabel: "区民葬儀について",
              },
              {
                title: "家族葬",
                desc: "ご家族・親族を中心に行う少人数の葬儀です。葛飾区内の式場・斎場を使用した家族葬に対応しています。",
                link: "/plans/family-funeral",
                linkLabel: "家族葬について",
              },
              {
                title: "一日葬",
                desc: "通夜を省略し、告別式と火葬を1日で行う形式です。参列者の負担を減らしながら、きちんとしたお別れの場を設けます。",
                link: "/plans/oneday-funeral",
                linkLabel: "一日葬について",
              },
              {
                title: "火葬式",
                desc: "通夜・告別式を行わず、火葬のみを行う最もシンプルな形式です。葛飾区内の火葬場での対応も可能です。",
                link: "/plans/cremation",
                linkLabel: "火葬式について",
              },
              {
                title: "一般葬",
                desc: "多くの参列者をお迎えして行う一般的な葬儀の形式です。葛飾区での一般葬にも対応しています。",
                link: "/plans/general-funeral",
                linkLabel: "一般葬について",
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
                  <p className="text-[#4a4a4a] text-base leading-relaxed mb-3">{item.desc}</p>
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group"
                  >
                    {item.linkLabel}
                    <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 地域密着の理由 */}
      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">OUR HISTORY</p>
            <h2
              className="text-[#312852] text-2xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              稲垣屋葬儀店が葛飾区民の方を長年サポートしている理由
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              稲垣屋葬儀店は明治11年頃に創業し、以来葛飾区を拠点に地域の皆様の葬儀をお手伝いしてきました。長い歴史の中で培った地域の事情への理解と、多くのご家族との信頼関係が私たちの強みです。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              葛飾区内の火葬場・斎場・寺院との連携、区民葬儀制度への精通、地域の慣習への理解など、地元の葬儀社だからこそできるサポートを提供しています。
            </p>
            <div className="flex flex-wrap gap-5 mt-6">
              <Link
                href="/area"
                className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group"
              >
                葛飾区の葬儀情報
                <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group"
              >
                稲垣屋葬儀店について
                <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group"
              >
                事前相談について
                <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group"
              >
                よくあるご質問
                <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
            <h2
              className="text-[#312852] text-2xl tracking-[0.08em]"
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

      {/* Soft CTA */}
      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2
              className="text-[#312852] text-2xl tracking-[0.08em] mb-5"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              まずはお気軽にご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              形式に迷っている段階でも、どんな疑問でもお気軽にどうぞ。<br />
              事前相談は無料、強引な勧誘は一切行いません。
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
