import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "もしもの時に備えて準備すること｜生前準備｜葛飾区 稲垣屋葬儀店",
  description:
    "「もしもの時」に備えて今から準備しておくこと。葛飾区の稲垣屋葬儀店が生前準備・事前相談・必要書類・エンディングノートについて丁寧にご案内します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/support/preparing" },
};

const faqs = [
  {
    q: "エンディングノートと遺言書は何が違いますか？",
    a: "エンディングノートは法的効力を持たない個人的な記録帳で、葬儀の希望・家族へのメッセージ・財産のメモなどを自由に書き残すものです。一方、遺言書は法的効力を持ち、相続に関する指示を残すものです。エンディングノートは気軽に始められますが、財産の分配に関しては遺言書の作成も検討することをおすすめします。",
  },
  {
    q: "葬儀費用の準備はどうすればよいですか？",
    a: "葬儀費用は選ぶプランによって大きく異なります。事前に葬儀社に相談して費用の目安を把握しておき、預金や互助会（積立式の葬儀費用）などで備えておく方法があります。また、生命保険の死亡保険金を葬儀費用に充てるケースも多いです。稲垣屋葬儀店では事前相談の際に費用の目安をご説明しますので、お気軽にご相談ください。",
  },
  {
    q: "事前相談はどこでできますか？費用はかかりますか？",
    a: "稲垣屋葬儀店では事前相談を無料で承っております。ご来店いただくか、お電話（03-3690-0870）、またはお問い合わせフォームよりご連絡ください。「まだ先のこと」という段階からでも歓迎しております。",
  },
  {
    q: "菩提寺がないのですが、葬儀はできますか？",
    a: "はい、菩提寺がなくても葬儀を行うことができます。無宗教葬（自由葬）のほか、ご希望に応じて宗教者をご紹介することも可能です。菩提寺の有無にかかわらず、まずはお気軽にご相談ください。",
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
  name: "もしもの時に備えて準備すること｜生前準備｜葛飾区 稲垣屋葬儀店",
  description:
    "「もしもの時」に備えて今から準備しておくこと。葛飾区の稲垣屋葬儀店が生前準備・事前相談・必要書類・エンディングノートについて丁寧にご案内します。",
  url: "https://www.inagakiyasougiten.com/support/preparing",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀サポート", item: "https://www.inagakiyasougiten.com/support" },
      { "@type": "ListItem", position: 3, name: "もしもの時に備えて準備すること", item: "https://www.inagakiyasougiten.com/support/preparing" },
    ],
  },
};

export default function PreparingPage() {
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
        title="もしもの時に備えて準備すること"
        subtitle="生前準備は、ご本人と家族への大切な贈り物です"
        en="LIFE PLANNING"
      />
      <Breadcrumb
        items={[
          { label: "サポート情報", href: "/support" },
          { label: "もしもの時に備えて準備すること" },
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
              生前準備の重要性
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              「もしもの時」はいつ訪れるかわかりません。突然の出来事に直面したとき、ご家族は悲しみの中で多くの手続きや判断を迫られます。生前に準備しておくことは、ご本人の意思を残すためだけでなく、残されたご家族の精神的・経済的負担を大幅に軽減することにつながります。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              「縁起でもない」と感じる方もいるかもしれませんが、生前準備は人生の終わりを「暗く考える」ことではなく、大切な家族への配慮であり、自分らしい最後を実現するための前向きな行動です。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">CHECKLIST</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              備えておくべきこと
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "家族で葬儀の希望を話し合う",
                desc: "葬儀の形式（家族葬・一般葬・火葬式）、規模、宗教形式について、本人の希望と家族の意見をすり合わせておきましょう。「こぢんまりと見送ってほしい」「好きな音楽を流してほしい」といった希望をメモしておくだけでも役立ちます。",
              },
              {
                title: "エンディングノートの作成",
                desc: "エンディングノートには、葬儀の希望・連絡してほしい人・財産のメモ・家族へのメッセージなどを書き残しておくことができます。市販のエンディングノートや、自作のメモでも構いません。定期的に見直すことが大切です。",
              },
              {
                title: "菩提寺・墓地の確認",
                desc: "先祖代々のお墓がある菩提寺の名前・連絡先・宗派を確認しておきましょう。また、お墓の場所・使用状況・年間管理費なども把握しておくと、いざというときスムーズです。",
              },
              {
                title: "加入している保険・年金の確認",
                desc: "生命保険・医療保険・学資保険などの契約内容を整理しておきましょう。保険証書の保管場所を家族と共有しておくことが重要です。また、年金の受給状況や受給停止の手続きについても把握しておくとよいでしょう。",
              },
              {
                title: "葬儀費用の準備",
                desc: "葬儀費用を事前に把握・準備しておくことで、いざというときに経済的な混乱を防ぐことができます。互助会（積立式）・預金・生命保険の活用など、ご家族の状況に応じた方法を検討しましょう。",
              },
              {
                title: "遺影用写真の選定",
                desc: "葬儀の際に使用する遺影写真は、後日探すのが大変なことがあります。本人が気に入っている写真を数枚選んで、家族が分かる場所に保管しておきましょう。デジタルデータで保存しておくのもよい方法です。",
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
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">CONSULTATION</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              事前相談のすすめ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              葬儀社への事前相談は、費用の目安を把握する・葬儀形式を決める・疑問を解消するための大切な機会です。いざというときに慌てないためにも、余裕がある時期に一度ご相談いただくことをおすすめします。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              稲垣屋葬儀店では事前相談を無料で承っております。「まだ先のことだけど費用感を知りたい」「菩提寺がない場合はどうすればよいか」など、どんなご質問でも構いません。お電話（03-3690-0870）またはお問い合わせフォームよりお気軽にご連絡ください。
            </p>
            <p className="text-[#7560a0] text-sm">
              <Link href="/consultation" className="underline underline-offset-2 hover:text-[#312852] transition-colors">
                事前相談について詳しく見る
              </Link>
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
