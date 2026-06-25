import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "無宗教葬について｜葛飾区 稲垣屋葬儀店",
  description:
    "無宗教葬（自由葬）について。葛飾区の稲垣屋葬儀店が無宗教葬の特徴・流れ・注意点・宗教的な形式との違いを丁寧にご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/support/no-religion" },
};

const faqs = [
  {
    q: "無宗教葬でも葬儀社に依頼できますか？",
    a: "はい、稲垣屋葬儀店では無宗教葬（自由葬）にも対応しております。宗教者を呼ばない形式でも、式の進行・ご遺体の搬送・火葬の手配など、必要なサポートをすべて行います。故人の希望や遺族の意向に合わせて、自由な形式でのお別れをご提案できます。",
  },
  {
    q: "無宗教葬を選ぶと、後々お墓に入れないことはありますか？",
    a: "菩提寺のお墓を使用する場合、無宗教葬を行うと納骨を断られるケースがあります。菩提寺がある場合は、事前にご住職に相談されることをおすすめします。一方、民間の墓地や納骨堂では、宗教形式を問わないことが多いため、お墓の種類によって対応が異なります。",
  },
  {
    q: "無宗教葬でも香典は必要ですか？",
    a: "無宗教葬でも香典は一般的に受け取ります。ただし、「香典不要」と明示している場合はその案内に従ってください。無宗教葬だからといって香典のマナーが大きく変わるわけではありませんが、表書きは「御霊前」「御花料」などが使われることがあります。",
  },
  {
    q: "無宗教葬の費用は仏式と比べてどうですか？",
    a: "無宗教葬では宗教者へのお布施が不要となるため、その分の費用を節約できます。一方で、音楽演奏・映像制作・生花の装飾など、自由な演出を加えるとその分費用がかかることもあります。全体的な費用はプランや演出内容によって異なりますので、お気軽にご相談ください。",
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
  name: "無宗教葬について｜葛飾区 稲垣屋葬儀店",
  description:
    "無宗教葬（自由葬）について。葛飾区の稲垣屋葬儀店が無宗教葬の特徴・流れ・注意点・宗教的な形式との違いを丁寧にご説明します。",
  url: "https://www.inagakiyasougiten.com/support/no-religion",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀サポート", item: "https://www.inagakiyasougiten.com/support" },
      { "@type": "ListItem", position: 3, name: "無宗教葬について", item: "https://www.inagakiyasougiten.com/support/no-religion" },
    ],
  },
};

export default function NoReligionPage() {
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
        title="無宗教葬について"
        subtitle="故人らしい自由な形でのお別れをサポートします"
        en="NON-RELIGIOUS FUNERAL"
      />
      <Breadcrumb
        items={[
          { label: "サポート情報", href: "/support" },
          { label: "無宗教葬について" },
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
              無宗教葬（自由葬）とは
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              無宗教葬（自由葬）とは、特定の宗教・宗派の形式に縛られず、ご家族が自由に内容を組み立てる葬儀のことです。仏式のように読経や念珠を必要とせず、神式のように神職を呼ぶ必要もありません。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              「宗教にこだわらず、故人が好きだった音楽を流してお別れしたい」「形式にとらわれず、思い出の写真や映像を流す場にしたい」といったご要望に応じられるのが無宗教葬の特徴です。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              近年は無宗教の方が増えていること、また「故人の個性を大切にしたい」というご要望から、無宗教葬を選ぶ方が増えています。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FLOW</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              無宗教葬の一般的な流れ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              { title: "開式の言葉", desc: "司会者または親族代表が開式の言葉を述べます。" },
              { title: "故人の紹介・生い立ちの紹介", desc: "故人の写真や映像を用いながら、その人生を振り返ります。" },
              { title: "献花・献奏", desc: "参列者が花を捧げたり、故人の好きだった音楽を流します。焼香の代わりに献花を行うことが多いです。" },
              { title: "弔辞・お別れの言葉", desc: "参列者や家族から、故人への言葉を述べます。" },
              { title: "閉式・出棺", desc: "閉式の言葉の後、出棺・火葬へと移ります。" },
            ].map((step) => (
              <StaggerItem key={step.title}>
                <div className="py-7">
                  <h3
                    className="text-[#312852] text-base tracking-wide mb-2"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mt-6">
            <p className="text-[#7560a0] text-sm leading-relaxed">
              上記はあくまで一例です。内容はご家族のご希望に応じて自由に組み立てることができます。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">NOTES</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              無宗教葬の注意点
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "菩提寺がある場合は事前に相談する",
                desc: "菩提寺のお墓を使用する場合、無宗教葬を行うと納骨を断られるケースがあります。菩提寺がある場合は、必ず事前にご住職に相談されることをおすすめします。",
              },
              {
                title: "参列者への事前説明",
                desc: "無宗教葬に慣れていない参列者は、焼香がないことに戸惑う場合があります。案内状に「無宗教形式で行います」と明記しておくとスムーズです。",
              },
              {
                title: "式の内容を事前に決めておく",
                desc: "自由な形式だからこそ、式の進行・演出・使用する曲・映像などを事前にしっかり決めておく必要があります。葬儀社との打ち合わせを丁寧に行うことが大切です。",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3
                    className="text-[#312852] text-base tracking-wide mb-2"
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
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COMPARISON</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              無宗教葬と仏式葬儀の違い
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "宗教者の有無",
                bussiki: "僧侶が読経を行う",
                mushukyo: "宗教者なし。司会者が進行",
              },
              {
                title: "焼香・献花",
                bussiki: "参列者が焼香を行う",
                mushukyo: "献花（花を捧げる）が一般的",
              },
              {
                title: "式の内容",
                bussiki: "仏式の儀式に沿って進行",
                mushukyo: "自由に内容を組み立て可能",
              },
              {
                title: "費用",
                bussiki: "お布施が必要",
                mushukyo: "お布施不要（演出費は別途）",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <p
                    className="text-[#312852] text-sm tracking-wide mb-3 text-[#7560a0]"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    {item.title}
                  </p>
                  <div className="flex gap-6 flex-col sm:flex-row">
                    <div className="flex-1">
                      <p className="text-[#9278be] text-xs tracking-widest mb-1">仏式</p>
                      <p className="text-[#4a4a4a] text-base leading-relaxed">{item.bussiki}</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-[#c9a55a] text-xs tracking-widest mb-1">無宗教葬</p>
                      <p className="text-[#4a4a4a] text-base leading-relaxed">{item.mushukyo}</p>
                    </div>
                  </div>
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
