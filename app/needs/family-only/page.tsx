import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "家族だけで見送りたい方へ｜葛飾区 稲垣屋葬儀店",
  description:
    "家族だけでプライベートにお別れしたい方へ。家族葬・火葬式など、ご家族のみで静かに見送るためのプランと注意点を葛飾区の稲垣屋葬儀店がご案内します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/needs/family-only" },
};

const faqs = [
  {
    q: "家族だけで葬儀をすることは可能ですか？",
    a: "はい、可能です。家族葬や火葬式（直葬）であれば、ご家族のみで行うことができます。参列者を限定することで、静かにプライベートな時間を持ちながら故人をお見送りできます。",
  },
  {
    q: "家族のみの葬儀では、親族や知人への連絡はどうすればよいですか？",
    a: "葬儀後に書面や電話でご逝去をお知らせする方法が一般的です。「家族のみで執り行いました」とひとこと添えると丁寧です。事前に参列をお断りする場合は、その旨を明確にお伝えすることで混乱を防げます。",
  },
  {
    q: "家族だけの葬儀でも宗教者（僧侶など）を呼べますか？",
    a: "はい、呼ぶことができます。家族だけの葬儀でも、菩提寺の僧侶や稲垣屋葬儀店がご紹介する宗教者に読経をお願いすることが可能です。無宗教形式を希望される場合は宗教者なしでも行えます。",
  },
  {
    q: "家族葬と火葬式（直葬）の違いは何ですか？",
    a: "家族葬は通夜・告別式などの儀式を少人数で行う形式で、お別れの時間をしっかり設けます。火葬式（直葬）は通夜・告別式を省略し、安置後に直接火葬を行う最もシンプルな形式です。どちらもご家族のみで行うことができます。",
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
  name: "家族だけで見送りたい方へ｜葛飾区 稲垣屋葬儀店",
  description:
    "家族だけでプライベートにお別れしたい方へ。家族葬・火葬式など、ご家族のみで静かに見送るためのプランと注意点を葛飾区の稲垣屋葬儀店がご案内します。",
  url: "https://www.inagakiyasougiten.com/needs/family-only",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "ニーズ別ご相談", item: "https://www.inagakiyasougiten.com/needs" },
      { "@type": "ListItem", position: 3, name: "家族だけで見送りたい方へ", item: "https://www.inagakiyasougiten.com/needs/family-only" },
    ],
  },
};

export default function FamilyOnlyPage() {
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
        title="家族だけで見送りたい方へ"
        subtitle="プライベートな空間で、静かにお別れするために"
        en="FAMILY ONLY FAREWELL"
      />
      <Breadcrumb
        items={[
          { label: "こんな方へ", href: "/needs" },
          { label: "家族だけで見送りたい方へ" },
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
              ご家族だけで、静かに見送ることができます
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              「大勢の方に来ていただく式ではなく、家族だけでゆっくりお別れしたい」「故人の意思として、家族のみで送ることを希望していた」——そのようなご要望は近年増えており、稲垣屋葬儀店でも多くの方にご対応しています。
            </p>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              家族だけの葬儀は、余分な気遣いや接客の必要がなく、故人との最後の時間をご家族が心ゆくまで過ごせます。プライバシーを守りながら、しかし十分に心を込めた葬儀を行うことができます。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              このページでは、家族のみで行う葬儀の形式・注意点・流れをご案内します。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">PLANS</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              家族のみで行える葬儀の形式
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "家族葬",
                desc: "ご家族・ご親族など親しい方だけに参列を絞った葬儀です。通夜・告別式の形式を保ちながら、少人数でゆっくりと故人を見送ることができます。宗教者を呼ぶ・呼ばないはご希望に応じて対応できます。",
                href: "/plans/family-funeral",
              },
              {
                title: "火葬式（直葬）",
                desc: "通夜・告別式を行わず、ご安置後に直接火葬場へ搬送する形式です。ご家族だけのプライベートな時間の中で、火葬前にお別れの時間を設けることができます。最もシンプルで費用も抑えられます。",
                href: "/plans/cremation",
              },
            ].map((plan) => (
              <StaggerItem key={plan.title}>
                <div className="py-7">
                  <h3
                    className="text-[#312852] text-lg tracking-wide mb-2"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    {plan.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-base leading-relaxed mb-3">{plan.desc}</p>
                  <Link
                    href={plan.href}
                    className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors"
                  >
                    詳細を見る <ChevronRight size={13} />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">POINTS</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              家族のみで行う際に大切なこと
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "参列範囲を家族内で統一しておく",
                desc: "「誰まで呼ぶか」について家族間で認識を合わせておくことが大切です。後から「なぜ声をかけてくれなかったのか」というご意見が出ることもあります。事前に方針を決めておくと安心です。",
              },
              {
                title: "葬儀後のお知らせを準備する",
                desc: "家族のみで行った場合、ご逝去と葬儀のご報告を後日行うのが一般的です。お知らせはがきや電話でのご連絡が多く用いられます。稲垣屋葬儀店でも、後日のご連絡方法についてご相談いただけます。",
              },
              {
                title: "故人との最後の時間をゆっくりと",
                desc: "家族のみの葬儀の最大のメリットは、接客に追われることなくご家族が故人と向き合えることです。お別れの言葉を伝えたり、思い出を語り合ったりする時間を大切にしてください。",
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

      <section className="py-20 md:py-28 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-8">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">RELATED</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              関連ページ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              { href: "/plans/family-funeral", label: "家族葬プランの詳細" },
              { href: "/plans/cremation", label: "火葬式（直葬）プランの詳細" },
              { href: "/needs/small", label: "小規模葬儀を希望の方へ" },
              { href: "/needs/no-wake", label: "お通夜なしで葬儀をしたい方へ" },
              { href: "/needs/low-cost", label: "費用を抑えたい方へ" },
            ].map((link) => (
              <StaggerItem key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between py-5 text-[#5c4a80] hover:text-[#312852] transition-colors group"
                >
                  <span className="text-base">{link.label}</span>
                  <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
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
              家族のみの葬儀について、ご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              ご希望の形を丁寧にお聞きし、プライベートなお別れをサポートします。稲垣屋葬儀店は24時間365日対応しております。
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
