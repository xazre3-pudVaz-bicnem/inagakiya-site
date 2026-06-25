import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "葛飾区で家族だけの葬儀を希望される方へ｜稲垣屋葬儀店",
  description:
    "葛飾区で家族だけのお別れを希望される方へ。家族葬・一日葬・火葬式の特徴と選び方を稲垣屋葬儀店が丁寧にご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/katsushika-funeral/family-only" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "家族葬と一般葬の違いは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "家族葬はご家族やごく親しい方だけで行う葬儀で、参列者を限定することで故人との最後の時間をゆっくり過ごせます。一般葬は故人と縁のあった多くの方にご参列いただく形式です。葛飾区では近年、家族葬を選ぶご家族が増えています。参列者数や費用の規模が異なりますが、どちらも誠実なお別れができます。",
      },
    },
    {
      "@type": "Question",
      name: "家族葬で「お断り」した方への対応はどうすればよいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "家族葬の場合、参列をお断りする方への連絡（訃報）は葬儀後に行うことが一般的です。訃報の内容に「家族葬にて執り行いました」と明記することで、参列できなかった方への配慮を示せます。後日、弔問に来られる方のために、四十九日法要や自宅への弔問受付の有無も事前に決めておくとよいでしょう。稲垣屋葬儀店では、このような対応についてもご相談に応じます。",
      },
    },
    {
      "@type": "Question",
      name: "家族葬・一日葬・火葬式のうち、どれを選べばよいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "選び方は、故人やご家族の希望・参列者の人数・費用のご予算・宗教的な儀式の有無によって異なります。「家族と親しい方だけで、通夜と告別式をきちんと行いたい」なら家族葬、「一日で終わらせたい」なら一日葬、「ごく近しい方だけで静かに火葬したい」なら火葬式が適しています。稲垣屋葬儀店では、事前相談（無料）で一緒に選ぶお手伝いをします。",
      },
    },
    {
      "@type": "Question",
      name: "葛飾区で家族葬を行う場合の費用の目安はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "葛飾区での家族葬の費用は、プランの内容・参列者数・式場の有無・宗教者へのお礼などによって異なります。稲垣屋葬儀店では事前に費用の内訳を詳しくご説明しますので、まず事前相談でご状況をお聞かせください。葛飾区民の方は区民葬儀制度の活用も検討できます。",
      },
    },
  ],
};

export default function FamilyOnlyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="葛飾区で家族だけの葬儀を希望される方へ"
        subtitle="家族葬・一日葬・火葬式の特徴と選び方をご説明します"
        en="FAMILY FUNERAL"
      />
      <Breadcrumb
        items={[
          { label: "葛飾区の葬儀", href: "/katsushika-funeral" },
          { label: "家族だけの葬儀" },
        ]}
      />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAMILY ONLY</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              家族だけで静かに見送りたい
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp>
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose">
              <p>
                「大勢の人に来てもらうより、家族だけで静かに見送りたい」という気持ちは、ごく自然なものです。葛飾区でも、近年は家族葬・一日葬・火葬式など少人数でのお別れを選ぶご家族が増えています。
              </p>
              <p>
                参列者が少ないからといって、故人へのお別れが不十分になるわけではありません。家族だけの葬儀だからこそ、故人と近しい方々がゆっくりと最後の時間を過ごすことができます。稲垣屋葬儀店は、そのような葬儀でも丁寧に、心を込めてお手伝いします。
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">PLAN COMPARISON</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              家族葬・一日葬・火葬式の違いと選び方
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "家族葬",
                sub: "ご家族・親族・親しい方だけで行う葬儀",
                body: "お通夜と告別式を行い、参列者をご家族・親族・ごく親しい方に限定する葬儀形式です。規模が小さい分、故人との最後の時間をゆっくり過ごすことができます。費用は一般葬よりも抑えられることが多いですが、参列者数や式場の有無によって変わります。",
                href: "/plans/family-funeral",
              },
              {
                title: "一日葬",
                sub: "お通夜を省略し、告別式と火葬を一日で行う",
                body: "お通夜を省いて、告別式と火葬を一日で行う形式です。ご遺族の体力的・精神的な負担を軽減しながら、告別式という儀式の場でしっかりとお別れができます。参列者が来やすい形式です。",
                href: "/plans/oneday-funeral",
              },
              {
                title: "火葬式（直葬）",
                sub: "通夜・告別式なしで火葬のみを行う",
                body: "お通夜・告別式を行わず、ごく近しい方だけで火葬を行う最もシンプルな形式です。費用を抑えながら、静かに見送ることができます。故人が生前に「シンプルでよい」と希望されていた場合にも選ばれます。",
                href: "/plans/cremation",
              },
            ].map((plan) => (
              <StaggerItem key={plan.title}>
                <div className="py-7">
                  <h3 className="text-[#312852] text-xl tracking-wide mb-1" style={{ fontFamily: "var(--font-mincho)" }}>
                    {plan.title}
                  </h3>
                  <p className="text-[#9278be] text-xs tracking-wide mb-3">{plan.sub}</p>
                  <p className="text-[#4a4a4a] text-sm leading-loose mb-3">{plan.body}</p>
                  <Link href={plan.href} className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group">
                    詳細・費用の目安を見る
                    <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">POINTS</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              家族のみの葬儀のメリットと注意点
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "メリット：ゆっくりお別れができる",
                body: "参列者が限られるため、故人との最後の時間をゆっくりと過ごすことができます。大勢の方の対応に追われることなく、ご家族の気持ちに集中できます。",
              },
              {
                title: "メリット：費用を抑えやすい",
                body: "参列者数が少ないと、飲食費・返礼品・式場の規模も小さくなるため、費用全体を抑えやすくなります。ただし、プランの内容によって費用は変わりますので、事前に確認が必要です。",
              },
              {
                title: "注意点：後日の弔問・訃報の連絡",
                body: "家族葬では参列をお断りした方への連絡（訃報）を葬儀後に行うことが一般的です。訃報の文面・連絡のタイミング・後日弔問を受け入れるかどうかを事前に決めておくとスムーズです。",
              },
              {
                title: "注意点：菩提寺への事前確認",
                body: "菩提寺がある場合は、家族葬・一日葬・火葬式を選ぶ前に菩提寺に相談することをお勧めします。宗派・寺院によっては形式に関して意向がある場合があります。",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3 className="text-[#312852] text-base tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-sm leading-loose">{item.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              家族葬に関するよくあるご質問
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {faqJsonLd.mainEntity.map((faq) => (
              <StaggerItem key={faq.name}>
                <div className="py-7">
                  <p className="text-[#312852] text-base mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                    <span className="text-[#9278be] font-bold mr-2">Q</span>
                    {faq.name}
                  </p>
                  <p className="text-[#4a4a4a] text-sm leading-loose pl-6">
                    <span className="text-[#c9a55a] font-bold mr-2">A</span>
                    {faq.acceptedAnswer.text}
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
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              葛飾区の葬儀に関するご相談
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              稲垣屋葬儀店は24時間365日対応。事前相談・お見積もりは無料です。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:0336900870" className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 w-full sm:w-auto justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
                <Phone size={17} className="text-[#dfc07e]" />03-3690-0870
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-[#9278be] text-[#5c4a80] hover:bg-[#ede7f6] px-8 py-4 tracking-wider transition-colors duration-300 w-full sm:w-auto justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
                <MessageCircle size={17} />お問い合わせ
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
