import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "生前相談について｜ご本人からの葬儀相談｜葛飾区 稲垣屋葬儀店",
  description:
    "ご本人からの生前相談も承ります。「自分の葬儀について希望を伝えたい」という方への生前相談・エンディングノートについて稲垣屋葬儀店がご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/consultation/living" },
};

const significanceItems = [
  {
    title: "ご家族の負担を軽減できる",
    desc: "「もしものとき」にご家族が葬儀の形式や規模について迷わずに済みます。事前に希望を伝えておくことで、ご家族は故人の意思に沿った対応ができます。",
  },
  {
    title: "ご自身の希望を実現できる",
    desc: "「こういう葬儀にしてほしい」「この曲を流してほしい」など、ご自身の希望を形にしやすくなります。事前に葬儀社に伝えておくことで、より意向に沿った葬儀の実現につながります。",
  },
  {
    title: "家族間の話し合いのきっかけになる",
    desc: "生前相談への来店・電話が、ご家族で葬儀について話し合う良い機会になります。「葬儀社に行って相談してきた」という事実が、家族間の対話を始めるきっかけになることが多いです。",
  },
  {
    title: "終活全般の整理につながる",
    desc: "葬儀について考えることが、遺産・墓所・エンディングノートなど終活全般を整理するきっかけになります。葬儀社への相談は終活の第一歩として活用していただけます。",
  },
];

const sharingMethods = [
  {
    title: "エンディングノートへの記録",
    desc: "葬儀に関する希望をエンディングノートに書き留めておくことで、ご家族がいざというときに参照できます。形式・参列者の範囲・宗教的な希望・遺影の候補など、葬儀に関する項目を記しておきましょう。",
  },
  {
    title: "ご家族との直接の話し合い",
    desc: "お盆・お正月など家族が集まる機会に、葬儀の希望を伝えておくことが最もシンプルな方法です。「大げさに考えず、もしもの話として」話し合うきっかけにしていただければと思います。",
  },
  {
    title: "葬儀社への事前登録・記録",
    desc: "稲垣屋葬儀店では、生前相談でお聞きした内容を記録しておくことができます。「こういう形でお別れしてほしい」というご希望を事前に共有しておくことで、いざというときの対応がスムーズになります。",
  },
];

const faqs = [
  {
    q: "ご本人が生前相談に来ることはできますか？",
    a: "はい、ぜひお越しください。「自分の葬儀はこうしてほしい」というご希望をお聞きし、稲垣屋葬儀店で記録しておくことができます。ご家族と一緒にご来店いただくことで、ご本人の意思をご家族に直接伝える場にもなります。また、お電話での生前相談も承っております（03-3690-0870）。",
  },
  {
    q: "生前相談の内容は、実際の葬儀に反映されますか？",
    a: "はい、できる限りご本人のご希望に沿った葬儀を実現するよう努めます。ただし、ご逝去後はご家族の意思決定が優先される場合もありますので、ご家族との話し合いと合わせて相談されることをお勧めします。稲垣屋葬儀店では、ご本人とご家族双方のご希望を調整するお手伝いもします。",
  },
  {
    q: "エンディングノートはどこで入手できますか？",
    a: "エンディングノートは書店・ネット通販・一部の自治体窓口などで入手できます。葛飾区でも配布しているケースがあります。また、稲垣屋葬儀店でもエンディングノートに書いておくとよい葬儀に関する項目についてアドバイスできますので、お気軽にご相談ください。",
  },
  {
    q: "生前相談と生前契約は違いますか？",
    a: "生前相談は情報収集・希望の共有を行うものです。生前契約は費用の一部や内容を事前に確定させる契約形態を指します。稲垣屋葬儀店では、まず生前相談（無料）で希望をお聞きし、必要に応じてご提案を行います。費用が発生するのは実際に葬儀をご依頼いただいた場合のみです。",
  },
];

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "生前相談について",
  description:
    "ご本人からの生前相談も承ります。「自分の葬儀について希望を伝えたい」という方への生前相談・エンディングノートについて稲垣屋葬儀店がご説明します。",
  url: "https://www.inagakiyasougiten.com/consultation/living",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "事前相談", item: "https://www.inagakiyasougiten.com/consultation" },
      { "@type": "ListItem", position: 3, name: "生前相談", item: "https://www.inagakiyasougiten.com/consultation/living" },
    ],
  },
};

export default function LivingPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="生前相談について"
        subtitle="ご本人からの葬儀のご相談も承ります"
        en="PRE-DEATH CONSULTATION"
      />
      <Breadcrumb
        items={[
          { label: "事前相談", href: "/consultation" },
          { label: "生前相談について" },
        ]}
      />

      {/* What is living consultation */}
      <section className="py-20 md:py-28 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">WHAT IS THIS</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              生前相談とは
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp className="mb-16">
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose">
              <p>
                生前相談とは、ご本人が生きているうちに、ご自身の葬儀について希望を伝えたり、葬儀社と情報共有しておくことです。「自分の葬儀はこうしてほしい」というご希望をお持ちの方も、ぜひ稲垣屋葬儀店にご相談ください。
              </p>
              <p>
                稲垣屋葬儀店では、ご本人からの生前相談を多くいただいています。<Link href="/consultation" className="text-[#5c4a80] underline underline-offset-2 hover:text-[#453869] transition-colors">事前相談</Link>の一環として、ご本人単独でのご来店・お電話でのご相談も歓迎しています。
              </p>
              <p>
                「まだ元気なのに」とお感じの方もいらっしゃいますが、元気なうちに希望を伝えておくことが、いざというときのご家族の安心につながります。<Link href="/consultation/preparation" className="text-[#5c4a80] underline underline-offset-2 hover:text-[#453869] transition-colors">事前準備のポイント</Link>についても合わせてご確認いただけます。
              </p>
            </div>
          </FadeInUp>

          {/* Significance */}
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">SIGNIFICANCE</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              ご本人が希望を伝えることの意義
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-16">
            {significanceItems.map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3 className="text-[#312852] text-base tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-base leading-relaxed pl-4 border-l border-[#c9a55a]">
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Sharing methods */}
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">HOW TO SHARE</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              葬儀の希望を家族に共有する方法
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-16">
            {sharingMethods.map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3 className="text-[#312852] text-base tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-base leading-relaxed pl-4 border-l border-[#c9a55a]">
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Related links */}
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">RELATED</p>
            <h2 className="text-[#312852] text-xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              関連ページ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <ul className="space-y-3">
              {[
                { label: "事前相談について（無料）", href: "/consultation" },
                { label: "葬儀の事前準備について", href: "/consultation/preparation" },
                { label: "家族での話し合いについて", href: "/consultation/family-meeting" },
                { label: "よくあるご質問", href: "/faq" },
                { label: "お問い合わせ・事前相談", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-flex items-center gap-2 text-[#5c4a80] text-base hover:text-[#453869] transition-colors group">
                    <ChevronRight size={14} className="text-[#9278be] group-hover:translate-x-0.5 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeInUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>よくあるご質問</h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <div className="py-7">
                  <p className="text-[#312852] text-base tracking-wide mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
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
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              まずはお気軽にご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              形式に迷っている段階でも、どんな疑問でもお気軽にどうぞ。<br />
              事前相談は無料、強引な勧誘は一切行いません。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 group w-full sm:w-auto justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
                <MessageCircle size={17} />お問い合わせ<ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/consultation" className="inline-flex items-center gap-2 border border-[#9278be] text-[#5c4a80] hover:bg-[#ede7f6] px-8 py-4 tracking-wider transition-colors duration-300 w-full sm:w-auto justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
                事前相談について
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
