import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "葛飾区で小規模葬儀をお考えの方へ｜稲垣屋葬儀店",
  description:
    "葛飾区で小規模な葬儀をお考えの方へ。参列者が少ない葬儀の形式・費用・注意点を稲垣屋葬儀店が丁寧にご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/katsushika-funeral/small-funeral" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "小規模葬儀が増えている理由は何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "高齢化社会の進展により故人が高齢になるケースが増え、参列できる知人・友人の数が少なくなっていることが主な理由の一つです。また、費用負担の軽減・ご家族への負担軽減・故人の生前の希望など、さまざまな理由から少人数の葬儀が選ばれています。葛飾区でも家族葬・一日葬・火葬式を選ぶご家族が増えています。",
      },
    },
    {
      "@type": "Question",
      name: "少人数でも心のこもったお別れができますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "もちろんです。参列者の人数に関わらず、故人を大切に思う気持ちは変わりません。むしろ少人数の葬儀では、ご家族が故人との最後の時間をゆっくりと過ごせることが多く、慌ただしさなく丁寧なお別れができます。稲垣屋葬儀店では、どのような規模の葬儀でも誠実に対応します。",
      },
    },
    {
      "@type": "Question",
      name: "葛飾区で小規模葬儀を行う場合の費用の目安はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "小規模葬儀の費用は、選ぶ形式（家族葬・一日葬・火葬式）や式場の有無、宗教者へのお礼の有無などによって異なります。火葬式が最もシンプルで費用を抑えやすく、家族葬・一日葬は内容に応じて費用が変わります。稲垣屋葬儀店では事前相談（無料）で費用の内訳を丁寧にご説明しますので、お気軽にご相談ください。",
      },
    },
    {
      "@type": "Question",
      name: "葛飾区民葬儀制度は小規模葬儀でも利用できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "葛飾区民葬儀制度は葛飾区民の方が利用できる制度で、定められた内容の葬儀を一定の費用内で行うことができます。小規模な葬儀にも適しており、稲垣屋葬儀店は葛飾区指定の取扱店として手続きをサポートします。詳しくはお問い合わせください。",
      },
    },
  ],
};

export default function SmallFuneralPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="葛飾区で小規模葬儀をお考えの方へ"
        subtitle="参列者が少なくても、丁寧で心のこもったお別れができます"
        en="SMALL FUNERAL"
      />
      <Breadcrumb
        items={[
          { label: "葛飾区の葬儀", href: "/katsushika-funeral" },
          { label: "小規模葬儀" },
        ]}
      />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">SMALL FUNERAL</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              小規模葬儀が増えている背景
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp>
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose">
              <p>
                葛飾区でも、近年は少人数の葬儀が増えています。高齢社会の進展により、故人が亡くなるころには参列できる知人・友人が少なくなっているケースが多くなっています。また、費用や遺族の負担を考えて、規模を小さくしたいというご希望も増えています。
              </p>
              <p>
                「少人数の葬儀は故人への敬意が薄いのでは」と感じる方もいるかもしれませんが、そのようなことはありません。参列者の数よりも、心を込めてお別れすることの方が大切です。稲垣屋葬儀店では、どのような規模の葬儀でも誠実に対応します。
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
              小規模葬儀の形式比較
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "家族葬",
                body: "ご家族・親族・親しい方だけでお通夜と告別式を行う形式。参列者を限定しつつ、葬儀としての儀式をきちんと行いたい方に向いています。",
                href: "/plans/family-funeral",
              },
              {
                title: "一日葬",
                body: "お通夜を省略し、告別式と火葬を一日で行う形式。参列者への案内が一度で済み、スケジュール的な負担が軽くなります。",
                href: "/plans/oneday-funeral",
              },
              {
                title: "火葬式（直葬）",
                body: "お通夜・告別式を行わず、火葬のみを行う最もシンプルな形式。費用を最小限に抑えながら、静かに見送ることができます。",
                href: "/plans/cremation",
              },
            ].map((plan) => (
              <StaggerItem key={plan.title}>
                <div className="py-7">
                  <h3 className="text-[#312852] text-xl tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>
                    {plan.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-sm leading-loose mb-3">{plan.body}</p>
                  <Link href={plan.href} className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group">
                    詳細を見る
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
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COST</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              費用の考え方
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp>
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose mb-6">
              <p>
                小規模葬儀は参列者が少ない分、飲食費・返礼品の費用を抑えることができます。ただし、葬儀社へのプラン料金・火葬場の使用料・宗教者へのお礼（お布施）は形式によって変わりますので、事前に確認が必要です。
              </p>
              <p>
                葛飾区民の方は「葛飾区民葬儀制度」を活用することで、費用をさらに抑えることが可能です。稲垣屋葬儀店は葛飾区指定の取扱店として、この制度のサポートも行っています。
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/cost" className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group">
                費用の詳細を見る
                <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/katsushika-funeral" className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group">
                葛飾区の葬儀トップへ
                <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">AFTER FUNERAL</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              参列者への連絡・後日の対応
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp>
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose">
              <p>
                小規模葬儀では、参列をお断りした方への訃報連絡を葬儀後に行うことが一般的です。「家族葬にて執り行いました」という内容を含む訃報を送ることで、参列できなかった方への配慮を示せます。
              </p>
              <p>
                後日弔問を受け入れるかどうかも事前に決めておくとスムーズです。稲垣屋葬儀店では、訃報の書き方や後日の対応についてもご相談に応じます。
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              小規模葬儀に関するよくあるご質問
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
