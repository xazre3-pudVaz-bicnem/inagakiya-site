import type { Metadata } from "next";
import PageHero from "../../../components/PageHero";
import Breadcrumb from "../../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "家族葬のメリット・注意点｜葛飾区 稲垣屋葬儀店",
  description:
    "家族葬のメリットと注意点を詳しく解説。葛飾区の稲垣屋葬儀店が、家族葬を選ぶ際の考え方・向いている方・よくある失敗を丁寧にご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/plans/family-funeral/merit" },
};

const merits = [
  {
    title: "ご家族だけで静かにお別れできる",
    desc: "参列者をご家族・近親者に限定するため、大勢の方への対応を気にせず、故人様との最後の時間を静かに過ごすことができます。故人様が望んでいた穏やかなお別れの形を実現しやすいのが家族葬の大きな魅力です。",
  },
  {
    title: "ご遺族の精神的・体力的負担が軽減される",
    desc: "一般葬では参列者への対応・挨拶・接待など、ご遺族の負担が大きくなりがちです。家族葬では参列者が少ない分、喪主・ご遺族が疲弊することなく、故人様のそばに寄り添う時間が増えます。",
  },
  {
    title: "費用を抑えやすい傾向がある",
    desc: "参列者が少ないと、飲食費・返礼品費用を抑えられます。ただし、葬儀基本費用（搬送・安置・棺・人件費など）は参列者数によって大きく変わるわけではありません。費用については内訳をご確認ください。",
  },
  {
    title: "故人の意向を反映しやすい",
    desc: "「大げさにしたくない」「家族だけで見送ってほしい」という故人様のご意向を尊重できます。形式や慣習に縛られず、故人様らしいお別れの場を作りやすいのが家族葬の特徴です。",
  },
  {
    title: "参列者への気遣いが少なく済む",
    desc: "一般葬では多くの参列者に対して気を遣う場面が多くなります。家族葬では、ご家族だけで集まるため、互いに気を遣わずに過ごすことができ、グリーフ（悲嘆）を共に分かち合う時間が持てます。",
  },
];

const points = [
  {
    title: "参列できなかった方へのご連絡",
    desc: "葬儀に参列されなかった知人・友人・職場関係者などへの連絡が必要です。葬儀後に訃報・挨拶状をお送りするのが一般的です。連絡を怠ると後日のトラブルや関係者への失礼につながることもあります。",
  },
  {
    title: "後日の弔問・香典について",
    desc: "葬儀に呼ばなかった方が後日ご自宅へ弔問にいらっしゃることがあります。その際の対応（お茶の準備・香典の受け取り方など）を事前に考えておくと安心です。香典辞退の方針も葬儀前に決めておきましょう。",
  },
  {
    title: "菩提寺への事前相談",
    desc: "菩提寺（先祖代々のお墓があるお寺）がある場合、家族葬を行うことを事前にご相談されることをお勧めします。菩提寺によっては家族葬の方針に対して意見をおっしゃる場合もあり、後の納骨・法要に影響することがあります。",
  },
];

const faqItems = [
  {
    question: "家族葬にすると後悔することはありますか？",
    answer:
      "参列できなかった方から「知らせてほしかった」とのお声をいただくことがあります。後日トラブルを避けるためにも、葬儀後の訃報連絡や挨拶状を丁寧に行うことが大切です。事前相談で不安な点をご確認ください。",
  },
  {
    question: "参列できなかった方からの香典はどうすればよいですか？",
    answer:
      "香典をご辞退されるかどうかはご家族のご判断によります。辞退される場合は訃報や挨拶状に明記し、受け取る場合は後日の返礼品（香典返し）をご用意するのが一般的です。稲垣屋葬儀店でもご相談いただけます。",
  },
  {
    question: "菩提寺がある場合、家族葬でも問題ありませんか？",
    answer:
      "菩提寺によって考え方が異なります。事前にご住職へ家族葬を行う旨をご相談されることをお勧めします。特に、菩提寺での葬儀や、菩提寺のお墓への納骨を予定されている場合は必ず事前にご確認ください。",
  },
  {
    question: "家族葬と一般葬、どちらが正解ですか？",
    answer:
      "どちらが正解ということはありません。故人様のご意向・ご家族の希望・お付き合いの範囲・費用のご事情などを考慮してお決めください。稲垣屋葬儀店では、ご家族の状況に合ったご提案をさせていただきます。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FamilyFuneralMeritPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="家族葬のメリット・注意点"
        subtitle="家族葬を選ぶ前に知っておきたいこと"
        en="MERIT & POINTS TO NOTE"
      />
      <Breadcrumb
        items={[
          { label: "葬儀プラン", href: "/plans" },
          { label: "家族葬", href: "/plans/family-funeral" },
          { label: "家族葬のメリット・注意点" },
        ]}
      />

      {/* イントロ */}
      <section className="py-20 md:py-28 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">OVERVIEW</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em] mb-5"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              家族葬を選ぶ前に
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mb-6" />
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              近年、葛飾区でも家族葬を選ぶご家族が増えています。家族葬には多くのメリットがある一方で、選択前に知っておくべき注意点もあります。稲垣屋葬儀店では、メリットだけでなく注意点もしっかりとお伝えし、ご家族が後悔のない選択ができるようご支援します。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              家族葬が「正解」かどうかはご家族の状況によって異なります。故人様のご意向・お付き合いの範囲・費用面などを総合的に考慮した上でご判断ください。以下に、家族葬のメリットと注意点を整理しました。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* メリット */}
      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">MERITS</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              家族葬のメリット
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {merits.map((item) => (
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

      {/* 注意点 */}
      <section className="py-16 md:py-24 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">POINTS TO NOTE</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              家族葬を選ぶ際の注意点
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {points.map((item) => (
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

      {/* 向いている方・向いていない方 */}
      <section className="py-16 md:py-24 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FOR WHOM</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              家族葬が向いている方・向いていない方
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <div className="flex flex-col md:flex-row gap-8">
            <FadeInUp className="flex-1">
              <div className="border-t-2 border-[#9278be] pt-6">
                <p
                  className="text-[#5c4a80] text-sm tracking-[0.3em] mb-5"
                  style={{ fontFamily: "var(--font-mincho)" }}
                >
                  向いている方
                </p>
                <ul className="divide-y divide-[#e8ddf4]">
                  {[
                    "「静かに家族だけで見送りたい」という故人の希望がある",
                    "ご高齢・介護中などで参列できない方が多い",
                    "社会的なお付き合いが少なく、呼ぶべき方が限られる",
                    "費用を可能な範囲で抑えたい",
                    "二次感染などの懸念がある時期に葬儀を行う",
                  ].map((text) => (
                    <li key={text} className="py-3 text-[#4a4a4a] text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-[#c9a55a] shrink-0 mt-0.5">—</span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInUp>

            <FadeInUp className="flex-1">
              <div className="border-t-2 border-[#e8ddf4] pt-6">
                <p
                  className="text-[#312852] text-sm tracking-[0.3em] mb-5"
                  style={{ fontFamily: "var(--font-mincho)" }}
                >
                  慎重にご検討が必要な方
                </p>
                <ul className="divide-y divide-[#e8ddf4]">
                  {[
                    "故人の交友関係が広く、多くの方が参列を望んでいる",
                    "菩提寺との関係が深く、寺院側の意向が強い",
                    "地域コミュニティとのつながりを大切にしている",
                    "後日の弔問対応が難しい状況にある",
                    "親族間で葬儀の形式について意見が分かれている",
                  ].map((text) => (
                    <li key={text} className="py-3 text-[#4a4a4a] text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-[#9278be] shrink-0 mt-0.5">—</span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
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
            {faqItems.map((item) => (
              <StaggerItem key={item.question}>
                <div className="py-7">
                  <p
                    className="text-[#5c4a80] text-base tracking-wide mb-3"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    Q. {item.question}
                  </p>
                  <p className="text-[#4a4a4a] text-base leading-relaxed pl-4 border-l-2 border-[#e8ddf4]">
                    {item.answer}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 関連ページ */}
      <section className="py-12 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-5">RELATED PAGES</p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {[
                { href: "/plans/family-funeral", label: "家族葬について" },
                { href: "/plans/family-funeral/flow", label: "家族葬の流れ" },
                { href: "/plans/family-funeral/cost", label: "家族葬の費用" },
                { href: "/plans/family-funeral/small", label: "少人数の家族葬" },
                { href: "/plans/family-funeral/only-relatives", label: "親族のみの家族葬" },
                { href: "/consultation", label: "事前相談" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-1 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group"
                >
                  {link.label}
                  <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* CTA */}
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
              事前相談・お見積もりは無料です。強引な勧誘は一切行いません。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 group w-full sm:w-auto justify-center"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                <MessageCircle size={17} />お問い合わせ
                <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
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
