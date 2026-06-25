import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "香典返しについて｜時期・品物・のし・挨拶状｜葛飾区 稲垣屋葬儀店",
  description:
    "香典返しの時期・品物の選び方・のしの書き方・挨拶状の文例について。葛飾区の稲垣屋葬儀店が丁寧にご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/support/kouden-return" },
};

const faqs = [
  {
    q: "香典返しはいつ頃送れば良いですか？",
    a: "香典返しは忌明け（四十九日法要）後、2週間程度を目安にお送りするのが一般的です。最近は葬儀当日に「当日返し」として会葬御礼品をお渡しするケースも増えています。当日返しをした場合でも、高額な香典をいただいた方には後日改めてお送りすることをおすすめします。",
  },
  {
    q: "香典返しの金額はどのくらいが適切ですか？",
    a: "いただいた香典の3分の1〜半額程度が目安です。ただし、高額な香典をいただいた場合に半額を返すと相手に気を遣わせることもありますので、全体的なバランスを見ながら調整してください。当日返しを行った場合は、残りの差額分をお送りするケースもあります。",
  },
  {
    q: "香典返しに適した品物はどのようなものですか？",
    a: "「消えもの」と呼ばれる、使うと消えてなくなる品物が適しています。具体的にはお茶・コーヒー・海苔・お菓子・調味料セット、または入浴剤・洗剤などの日用品、カタログギフトなどが一般的です。肉・魚などの生ものや慶事に使う品物は避けましょう。",
  },
  {
    q: "のしの書き方について教えてください。",
    a: "香典返しのし紙は「掛け紙」といい、黒白または双銀の結び切りの水引を使用します。表書きは「志」（仏式・宗派不明の場合）が一般的です。神式では「偲び草」、キリスト教式では「偲び草」または「志」を用います。下段には「喪主の姓」または「○○家」と書きます。",
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

export default function KoudenReturnPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        title="香典返しについて"
        subtitle="時期・品物の選び方・のし・挨拶状のポイントを解説します"
        en="KOUDEN RETURN GIFT"
      />
      <Breadcrumb
        items={[
          { label: "サポート情報", href: "/support" },
          { label: "香典返しについて" },
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
              香典返しとは
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              香典返しとは、葬儀や法要の際にいただいた香典（お悔やみの気持ちを込めたお金）に対し、感謝の意を表してお返しする品物のことです。日本の葬儀文化において長く続く大切な慣習のひとつです。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              香典返しは単なる返礼品ではなく、無事に忌明けを迎えたことをお知らせするとともに、故人の生前にお世話になったことへの感謝を伝える機会でもあります。挨拶状を添えて丁寧にお送りしましょう。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">TIMING</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              香典返しの時期と方法
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "忌明け後に送る（本来の形式）",
                desc: "四十九日法要（忌明け）後、2週間程度を目安にお送りします。「忌明けを無事に迎えました」という報告の意味も込められています。郵送が一般的ですが、近しい方には持参することもあります。",
              },
              {
                title: "当日返し（即日返し）",
                desc: "葬儀当日に会葬御礼として一律の品物をお渡しする方法です。後日の手間が省けるため、近年では家族葬を含め広く普及しています。ただし高額の香典をいただいた場合は、後日追加の香典返しをご用意するのが丁寧です。",
              },
              {
                title: "半返しが基本",
                desc: "いただいた香典の3分の1〜半額程度を目安に品物を選びます。高額の香典の場合は3分の1程度でも失礼にはなりません。金額よりも、心のこもった挨拶状を添えることが大切です。",
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

      <section className="py-20 md:py-28 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">GIFT</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              品物の選び方
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              香典返しには「消えもの」（使うとなくなるもの）を選ぶのが基本とされています。これは「悲しみや不幸が消えてなくなる」という意味が込められているためです。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "食品類（お茶・コーヒー・海苔・お菓子）",
                desc: "定番の品物です。日持ちするものを選びましょう。個包装のお菓子や高品質のお茶・コーヒーギフトセットは多くの方に喜ばれます。",
              },
              {
                title: "日用品（洗剤・タオル・入浴剤）",
                desc: "実用的で誰にでも使っていただける品物です。ブランドにこだわりすぎず、品質の良いものを選ぶと印象が良いです。",
              },
              {
                title: "カタログギフト",
                desc: "受け取った方が自由に品物を選べるカタログギフトも近年人気です。遠方の方への郵送にも便利です。金額帯の幅が広いため、香典の額に応じて選びやすいのも利点です。",
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
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">LETTER</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              挨拶状について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              香典返しには必ず挨拶状を添えます。挨拶状には、①葬儀への参列・香典への御礼、②忌明けの報告、③遺族一同が元気に過ごしていること、④略儀ながら書中をもってご挨拶する旨を盛り込みます。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-4">
              挨拶状は縦書きが基本で、句読点を使わないのが慣習です（「、」「。」を付けない）。また、「重ね重ね」「再び」などの忌み言葉も避けます。葬儀社や仏具店でひな形を用意しているところも多いので、活用してください。
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

      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">RELATED</p>
            <h2
              className="text-[#312852] text-2xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              関連ページ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              { href: "/support/kouden", label: "香典について（金額・包み方）" },
              { href: "/support/manners", label: "葬儀のマナーについて" },
              { href: "/support/after-funeral", label: "葬儀後の手続きについて" },
              { href: "/support/funeral-aftercare", label: "葬儀後のアフターケア" },
              { href: "/support/greeting", label: "喪主の挨拶について" },
            ].map((link) => (
              <StaggerItem key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between py-5 text-[#5c4a80] hover:text-[#312852] transition-colors group"
                >
                  <span className="text-base tracking-wide" style={{ fontFamily: "var(--font-mincho)" }}>
                    {link.label}
                  </span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
              ご不明な点はお気軽にご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              稲垣屋葬儀店は24時間365日対応。香典返しのご相談もお気軽にどうぞ。
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
