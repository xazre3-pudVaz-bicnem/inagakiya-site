import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "喪主の挨拶について｜通夜・告別式の挨拶文例｜葛飾区 稲垣屋葬儀店",
  description:
    "喪主が行う挨拶のタイミング・構成・文例をご紹介します。通夜・告別式・精進落としでの挨拶について、葛飾区の稲垣屋葬儀店が丁寧にご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/support/greeting" },
};

const faqs = [
  {
    q: "喪主の挨拶はどのくらいの長さが適切ですか？",
    a: "2〜3分程度（400〜600字相当）が目安です。長すぎず短すぎず、参列者への感謝・故人の人柄・今後のご支援のお願いを簡潔に伝えましょう。読み上げる場合はメモを手に持って構いません。",
  },
  {
    q: "挨拶で泣いてしまった場合はどうすればよいですか？",
    a: "無理に抑える必要はありません。参列者も温かく見守ってくれます。言葉に詰まった場合は少し間を置き、深呼吸してから続けましょう。あらかじめメモを用意しておくと安心です。",
  },
  {
    q: "挨拶で避けるべき言葉はありますか？",
    a: "忌み言葉（重ね言葉・不幸を連想させる言葉）は避けましょう。「重ね重ね」「たびたび」「再び」「また」「続いて」などの繰り返し表現や、「死」「生きていた頃」といった直接的な表現は言い換えます。「お浄土へ旅立った」「天に召された」などの表現を用いるとよいでしょう。",
  },
  {
    q: "挨拶の際に持ち物はありますか？",
    a: "挨拶文を記したメモ（カンペ）を持つことは一般的に許容されています。緊張のあまり頭が真っ白になることもありますので、事前に文章を書き出し、練習しておくと安心です。",
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

export default function GreetingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        title="喪主の挨拶について"
        subtitle="通夜・告別式・精進落としでの挨拶の構成と文例をご紹介します"
        en="CHIEF MOURNER'S SPEECH"
      />
      <Breadcrumb
        items={[
          { label: "サポート情報", href: "/support" },
          { label: "喪主の挨拶について" },
        ]}
      />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">OVERVIEW</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              喪主が挨拶するタイミング
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              喪主は葬儀の中心的な役割を担い、複数の場面で参列者への挨拶を行います。急な訃報の中で準備しなければならないことは多いですが、挨拶は事前に文章を用意しておくと安心して臨めます。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "通夜の終わりに（通夜振る舞いの案内）",
                desc: "通夜の式が終わった後、参列者に対してお礼と通夜振る舞いへのご案内を行います。「本日はご多忙の中お越しいただきありがとうございます。粗茶を用意しておりますので、どうぞお召し上がりください」などの言葉を添えます。",
              },
              {
                title: "告別式の閉式後",
                desc: "葬儀・告別式の閉式後、出棺前に改めて参列者全員へのお礼を述べます。故人の人柄や生前のエピソードを簡潔に触れると、参列者の記憶に残る挨拶になります。",
              },
              {
                title: "精進落とし（会食）の冒頭と終わりに",
                desc: "火葬後の会食（精進落とし）の始まりと終わりにも喪主が挨拶します。冒頭では参列者へのお礼と食事のご案内を、終わりには改めての感謝と今後のご支援のお願いを伝えます。",
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
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">STRUCTURE</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              挨拶の基本構成
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "① 参列への感謝",
                desc: "まず参列者へのお礼を述べます。「本日はご多忙のところ、またご遠方にもかかわらずお越しいただきまして、誠にありがとうございます」など。",
              },
              {
                title: "② 故人の人柄・エピソード",
                desc: "故人がどのような人柄だったか、生前にお世話になったことへの感謝を一言添えます。長くなりすぎず、印象的なエピソードをひとつ選ぶとよいでしょう。",
              },
              {
                title: "③ 生前のご厚情への感謝",
                desc: "「故人が生前に皆様から賜りましたご厚情に、深く感謝申し上げます」といった言葉で、故人への支援を称えます。",
              },
              {
                title: "④ 今後のご支援のお願い",
                desc: "「今後とも遺族一同に変わらぬご支援をいただけますよう、よろしくお願い申し上げます」と締めくくります。",
              },
              {
                title: "⑤ 略儀の一言",
                desc: "「誠に略儀ではございますが、一言ご挨拶申し上げました」と結びます。",
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
              { href: "/support/chief-mourner", label: "喪主の役割について" },
              { href: "/support/reception", label: "受付の対応について" },
              { href: "/support/notification", label: "訃報の連絡について" },
              { href: "/support/manners", label: "葬儀のマナーについて" },
              { href: "/support/religion", label: "宗教別の葬儀について" },
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
              稲垣屋葬儀店は24時間365日対応。喪主の挨拶についてもお気軽にご相談ください。
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
