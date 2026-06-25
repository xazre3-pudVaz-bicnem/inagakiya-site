import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "宗教別の葬儀について｜仏式・神式・キリスト教式・無宗教｜葛飾区 稲垣屋葬儀店",
  description:
    "仏式・神式・キリスト教式・無宗教葬の違いと特徴について。宗教・宗派ごとの葬儀の流れを葛飾区の稲垣屋葬儀店が解説します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/support/religion" },
};

const faqs = [
  {
    q: "宗派が分からない場合はどうすればよいですか？",
    a: "菩提寺（ぼだいじ）がある場合はそのお寺に確認しましょう。菩提寺がない・分からない場合は、故人の実家やご兄弟などに確認するか、葬儀社に相談してください。お仏壇がある場合は宗派を確認する手がかりになります。",
  },
  {
    q: "無宗教の葬儀でも一般的な葬儀と同じようにできますか？",
    a: "はい、無宗教（自由葬・音楽葬など）でも、読経なしで故人を偲ぶ会を行うことができます。流れや内容は自由に設定できますので、葬儀社と相談しながら故人らしい式をプランニングすることをおすすめします。",
  },
  {
    q: "仏式の葬儀で参列する場合、数珠は必要ですか？",
    a: "仏式の通夜・葬儀に参列する場合、数珠（じゅず）を持参するのが正式なマナーです。数珠は宗派によって形が異なりますが、参列者は略式の数珠で問題ありません。持っていない場合でも、参列は可能です。",
  },
  {
    q: "キリスト教式の葬儀に参列する場合の注意点は？",
    a: "キリスト教式の葬儀では焼香はなく、献花を行います。喪服は黒が基本ですが、数珠は不要です。お悔やみの言葉は「安らかな眠りをお祈りします」など、キリスト教的な表現を使うとよいでしょう。香典（御花料）は白の封筒か不祝儀袋に包みます。",
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

export default function ReligionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        title="宗教別の葬儀について"
        subtitle="仏式・神式・キリスト教式・無宗教葬の違いと特徴をご説明します"
        en="FUNERAL BY RELIGION"
      />
      <Breadcrumb
        items={[
          { label: "サポート情報", href: "/support" },
          { label: "宗教別の葬儀について" },
        ]}
      />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">BUDDHISM</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              仏式の葬儀
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              日本の葬儀の大多数を占める仏式（仏教式）葬儀は、僧侶による読経と焼香を中心とした儀式です。通夜・葬儀（告別式）・火葬という流れが一般的で、各宗派によって作法が異なります。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "浄土真宗",
                desc: "焼香は1回（押しいただかない）。「戒名」ではなく「法名」と呼ぶ。故人はすでに極楽浄土にいるという考えから、「冥福を祈る」という表現は使わない宗派です。",
              },
              {
                title: "曹洞宗・臨済宗（禅宗）",
                desc: "焼香は1〜3回。座禅を重視する禅宗の葬儀は厳かな雰囲気です。遺族は白衣を着ることもあります。",
              },
              {
                title: "真言宗・天台宗",
                desc: "焼香は3回。密教的な儀式が特徴で、読経が長めです。戒名（法名）は院号などの格が重視されます。",
              },
              {
                title: "日蓮宗",
                desc: "焼香は1〜3回。「南無妙法蓮華経（なむみょうほうれんげきょう）」のお題目が読まれます。",
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
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">SHINTO</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              神式の葬儀（神道）
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              神式（神葬祭）では、神職（神主）が祝詞（のりと）を読み上げ、玉串奉奠（たまぐしほうてん）を行います。「御霊前（みたまのまえ）」に供えるという考え方で、仏式とは異なります。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "玉串奉奠（たまぐしほうてん）",
                desc: "仏式の焼香に相当するものが「玉串奉奠」です。榊（さかき）の枝に紙垂（しで）をつけた玉串を祭壇に供えます。正しい手順を葬儀社に確認しましょう。",
              },
              {
                title: "香典袋の表書き",
                desc: "神式の香典袋の表書きは「御玉串料」「御榊料」「御霊前」が一般的です。蓮の花が描かれた袋は仏式用ですので、白無地か水引のみの袋を使用します。",
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
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">CHRISTIANITY</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              キリスト教式の葬儀
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              キリスト教式の葬儀では、牧師や神父による祈りと賛美歌・聖書朗読が中心です。カトリックとプロテスタントで式の内容が異なります。焼香はなく、献花を行います。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "カトリック（ミサ葬）",
                desc: "神父によるミサが行われます。遺体は土葬が原則でしたが、現在は火葬も行われます。献花の際は白い花（百合・カーネーションなど）が一般的です。",
              },
              {
                title: "プロテスタント（召天式）",
                desc: "牧師による祈りと賛美歌が中心。故人の死を「天に召された」と表現します。献花で弔意を表します。",
              },
              {
                title: "香典の表書き",
                desc: "「御花料」が一般的です。不祝儀袋は白無地か十字架・百合が描かれたものを選びます。",
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
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">NO RELIGION</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              無宗教葬（自由葬）
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              特定の宗教・宗派にとらわれない「無宗教葬」「自由葬」も近年増えています。故人の好きな音楽を流す「音楽葬」、映像で思い出を振り返る「映像葬」など、故人らしさを表現した式を自由に組み立てることができます。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              読経や焼香はありませんが、参列者が花を手向けたり、言葉を贈る場を設けたりと、弔意を伝える方法は様々です。稲垣屋葬儀店では、無宗教葬のご相談も承っております。
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
              { href: "/support/manners", label: "葬儀のマナーについて" },
              { href: "/support/no-religion", label: "無宗教葬について" },
              { href: "/support/kouden", label: "香典について" },
              { href: "/support/flowers", label: "供花・花輪について" },
              { href: "/support/attire", label: "葬儀の服装について" },
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
              稲垣屋葬儀店は24時間365日対応。宗教・宗派に関するご相談もお気軽にどうぞ。
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
