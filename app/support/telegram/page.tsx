import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "弔電について｜送り方・文例・マナー｜葛飾区 稲垣屋葬儀店",
  description:
    "弔電（ちょうでん）の送り方・文例・マナーについて。参列できない場合の弔意の伝え方を葛飾区の稲垣屋葬儀店がご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/support/telegram" },
};

const faqs = [
  {
    q: "弔電はどこから送れますか？",
    a: "NTTの電報サービス（d-MAIL）やKDDI、各種民間電報サービスから送ることができます。インターネットからも申し込みができ、台紙の種類や文章も選べます。急ぎの場合でも当日中に手配できることがほとんどです。",
  },
  {
    q: "弔電はいつまでに送ればよいですか？",
    a: "通夜または告別式の前日までに届くよう手配するのが理想です。葬儀当日の朝に届くよう手配することも可能ですが、早めに送るほど確実です。訃報を受けてからすぐに手配するとよいでしょう。",
  },
  {
    q: "弔電の宛名はどう書けばよいですか？",
    a: "弔電の宛名は「喪主のフルネーム 様」宛に送るのが基本です。喪主名が不明な場合は「（故人の名前）儀 ご遺族様」と書くこともできます。送り先の住所は葬儀会場（斎場）の住所を指定します。",
  },
  {
    q: "弔電に忌み言葉はありますか？",
    a: "弔電の文章でも忌み言葉を避けるのがマナーです。「重ね重ね」「たびたび」「再び」などの繰り返し表現、「浮かばれない」「迷う」「消える」なども使わないようにします。「永眠」「旅立つ」「天に召される」などの言葉を使うと丁寧です。",
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

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "弔電について｜送り方・文例・マナー｜葛飾区 稲垣屋葬儀店",
  description:
    "弔電（ちょうでん）の送り方・文例・マナーについて。参列できない場合の弔意の伝え方を葛飾区の稲垣屋葬儀店がご説明します。",
  url: "https://www.inagakiyasougiten.com/support/telegram",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀サポート", item: "https://www.inagakiyasougiten.com/support" },
      { "@type": "ListItem", position: 3, name: "弔電について", item: "https://www.inagakiyasougiten.com/support/telegram" },
    ],
  },
};

export default function TelegramPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        title="弔電について"
        subtitle="参列できない場合の弔意の伝え方・文例・マナーをご説明します"
        en="CONDOLENCE TELEGRAM"
      />
      <Breadcrumb
        items={[
          { label: "サポート情報", href: "/support" },
          { label: "弔電について" },
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
              弔電とは
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              弔電（ちょうでん）とは、葬儀に参列できない場合に、喪家（ご遺族）へお悔やみの気持ちを伝えるための電報です。遠方に住んでいる場合や、急な訃報で都合がつかない場合などに活用されます。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              弔電は葬儀・告別式の場で読み上げられることがあります。ご遺族の心に寄り添う丁寧な言葉を選び、簡潔かつ誠実に弔意を伝えましょう。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">HOW TO</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              弔電の送り方・手順
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "手配のタイミング",
                desc: "訃報を受けたらできるだけ早めに手配します。通夜または告別式の前日までに届くよう申し込みましょう。インターネット申込みは24時間受け付けており、当日配達も可能な場合があります。",
              },
              {
                title: "送り先の確認",
                desc: "送り先は「葬儀会場（斎場）の住所」を指定します。自宅での葬儀の場合はご自宅宛に送ります。会場名と住所、可能であれば電話番号も調べておくと確実です。",
              },
              {
                title: "宛名の書き方",
                desc: "宛名は「喪主のフルネーム 様」とします。喪主が不明な場合は「（故人の名前）儀 ご遺族様」と記載します。差出人は自分のフルネームと肩書き（必要に応じて）を書きます。",
              },
              {
                title: "台紙の選択",
                desc: "電報サービスでは様々なデザインの台紙が選べます。葬儀用には白・薄紫・グレーなど落ち着いた色合いの台紙を選びましょう。蓮の花や菊のデザインが仏式には適しています。",
              },
              {
                title: "文面の作成",
                desc: "定型文（テンプレート）を活用することもできます。個人的なメッセージを加える場合は、故人との思い出や感謝の言葉を簡潔に添えると心が伝わります。忌み言葉に注意しましょう。",
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
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">EXAMPLE</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              弔電の文例
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "一般的な文例",
                desc: "「ご尊父様ご逝去の報に接し、謹んでお悔やみ申し上げます。在りし日のお姿を偲び、心よりご冥福をお祈りいたします。なお、遠方のため参列が叶いませんことをお許しください。」",
              },
              {
                title: "親しい間柄の文例",
                desc: "「〇〇様のご訃報に、ただ驚くばかりでございます。生前のご厚情に深く感謝しつつ、謹んで哀悼の意を表します。ご家族の皆様のご心痛をお察し申し上げます。」",
              },
              {
                title: "ご友人・知人向け",
                desc: "「突然の悲報に、言葉もございません。これまでのお付き合いに心より感謝し、ご冥福を心よりお祈り申し上げます。ご遺族の皆様にとって、少しでも穏やかな日々が戻りますよう願っております。」",
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
                  <p className="text-[#4a4a4a] text-base leading-relaxed italic">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
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

      <section className="py-16 md:py-24 bg-[#faf9f7] border-t border-[#e8ddf4]">
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
              { href: "/support/flowers", label: "供花・花輪について" },
              { href: "/support/manners", label: "葬儀のマナーについて" },
              { href: "/support/kouden", label: "香典について" },
              { href: "/support/notification", label: "訃報の連絡について" },
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
              稲垣屋葬儀店は24時間365日対応。弔電に関するご相談もお気軽にどうぞ。
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
