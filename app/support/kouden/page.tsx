import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "香典について｜金額・包み方・返礼｜葛飾区 稲垣屋葬儀店",
  description:
    "香典の金額目安・包み方・表書き・返礼（香典返し）について。葛飾区の稲垣屋葬儀店が丁寧に解説します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/support/kouden" },
};

const faqs = [
  {
    q: "夫婦で参列する場合の香典はどうすれば良いですか？",
    a: "夫婦連名で包む場合は、不祝儀袋の中央に夫の氏名を書き、その左側に妻の名（下の名前のみ）を書きます。金額は一人分よりやや多めにするのが一般的で、5,000〜10,000円程度が目安です（関係性によって調整）。",
  },
  {
    q: "連名で香典を包む場合の書き方は？",
    a: "3名以内の連名であれば、中央から右・左の順に氏名を並べて書きます。4名以上の場合は、代表者の氏名を書いてその左横に「外一同」と書き、全員の名前を書いた別紙を中に入れます。",
  },
  {
    q: "香典を辞退している場合でも、何か持参したほうがよいですか？",
    a: "香典辞退が明記されている場合は、香典を持参しないのがマナーです。代わりに、ご自宅への弔問の際に菓子折りを持参する方もいますが、それも辞退されている場合は丁重にお断りの意を伝えれば大丈夫です。",
  },
  {
    q: "香典返しはどのタイミングで行うのですか？",
    a: "香典返しは、忌明け（四十九日法要）後に行うのが一般的です。忌明け後2週間程度を目安に送ります。最近は、葬儀当日に「当日返し」として会葬御礼品をお渡しするケースも増えています。",
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

const amountGuide = [
  { relation: "友人・知人", amount: "3,000〜5,000円" },
  { relation: "会社の同僚", amount: "3,000〜5,000円" },
  { relation: "上司・部下", amount: "5,000〜10,000円" },
  { relation: "親戚（遠縁）", amount: "5,000〜10,000円" },
  { relation: "親戚（近い）", amount: "10,000〜30,000円" },
  { relation: "兄弟姉妹", amount: "30,000〜50,000円" },
];

export default function KoudenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        title="香典について"
        subtitle="金額・包み方・表書き・香典返しを解説します"
        en="CONDOLENCE MONEY"
      />
      <Breadcrumb
        items={[
          { label: "サポート情報", href: "/support" },
          { label: "香典について" },
        ]}
      />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ABOUT</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              香典とは
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              香典は、故人への哀悼の意を表すとともに、葬儀費用やご遺族の生活を助けるために贈るお金のことです。もともとは、線香や花を持参する習慣が現金に変わったものといわれています。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              香典は不祝儀袋（香典袋）に入れて、通夜または告別式に持参します。最近は家族葬を中心に「香典辞退」とされるケースも増えていますので、案内を必ず確認しましょう。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">AMOUNT</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              香典の金額目安
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {amountGuide.map((item) => (
              <StaggerItem key={item.relation}>
                <div className="py-5 flex items-center justify-between gap-4">
                  <p
                    className="text-[#312852] text-base tracking-wide"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    {item.relation}
                  </p>
                  <p className="text-[#4a4a4a] text-base">{item.amount}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mt-6">
            <p className="text-[#7560a0] text-sm leading-relaxed">
              上記はあくまで目安です。地域・年齢・状況によって異なります。4・9のつく金額は「死」「苦」を連想させるため避けるのがマナーです。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">HOW TO</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              不祝儀袋の選び方・包み方
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "不祝儀袋の選び方",
                desc: "仏式では蓮の花が印刷された袋、神式・キリスト教式や宗教不明の場合は白無地か薄い模様の袋を選びます。金額に応じて袋の格（水引の素材や印刷・実物）を合わせるのが一般的です。",
              },
              {
                title: "表書きの書き方",
                desc: "仏式（四十九日前）：「御霊前」。仏式（四十九日後）：「御仏前」。神式：「御玉串料」「御榊料」。キリスト教式：「御花料」。宗派不明の場合は「御霊前」または「御香典」が無難です。",
              },
              {
                title: "氏名の書き方",
                desc: "表書きの下段に送り主の氏名をフルネームで書きます。薄墨（濃い墨より薄め）で書くのがマナーとされていますが、最近は濃い墨でも許容されることが多いです。",
              },
              {
                title: "お金の入れ方",
                desc: "中袋（内袋）に現金を入れます。新札は「あらかじめ用意していた」印象を与えるため避け、使用感のある紙幣を使います。ただし、あまりにも汚れた紙幣も避けましょう。",
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

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">RETURN GIFT</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              香典返しについて
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              香典返しは、香典をいただいた方へのお礼として贈るものです。忌明け（四十九日法要）後に、いただいた香典の3分の1〜半額程度の品物を贈るのが一般的です。「消えもの」（食品・消耗品・商品券など）が適切とされています。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              近年は葬儀当日に会葬御礼として品物をお渡しする「当日返し」も増えています。多額の香典をいただいた場合は、当日返しとは別に後日改めて香典返しを贈ることもあります。
            </p>
          </FadeInUp>
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
              稲垣屋葬儀店は24時間365日対応。どんなご相談でもお気軽にどうぞ。
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
