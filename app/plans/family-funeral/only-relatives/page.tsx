import type { Metadata } from "next";
import PageHero from "../../../components/PageHero";
import Breadcrumb from "../../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "親族のみで行う家族葬｜葛飾区 稲垣屋葬儀店",
  description:
    "親族のみで行う家族葬について。葛飾区の稲垣屋葬儀店が、親族だけの葬儀の注意点・後日の対応・費用をご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/plans/family-funeral/only-relatives" },
};

const faqItems = [
  {
    question: "親族のみの葬儀と伝える方法は？",
    answer:
      "訃報をお知らせする際に「誠に勝手ながら、葬儀はご家族・親族のみにて執り行います」と一文添えるのが一般的です。職場関係者・ご近所・知人へはご逝去後または葬儀後に改めてお知らせする方法もあります。稲垣屋葬儀店でも文面についてご相談いただけます。",
  },
  {
    question: "参列できなかった方が後日自宅へ来た場合はどうすればよいですか？",
    answer:
      "後日の弔問はご家族の都合に合わせて対応いただいて構いません。お茶とお菓子をご用意し、故人を偲ぶ時間をお持ちいただくのが一般的です。弔問者が多い場合は、日時を決めて「偲ぶ会」を設けるご家族もいらっしゃいます。",
  },
  {
    question: "友人・知人を完全に呼ばないことへの配慮は？",
    answer:
      "葬儀後に訃報と挨拶状をお送りすることが大切な配慮となります。「家族の意向により、近親者のみで執り行いました」と丁寧にお伝えすることで、多くの方にご理解いただけます。稲垣屋葬儀店では挨拶状の内容もご相談いただけます。",
  },
  {
    question: "親族のみの家族葬でも香典は受け取るべきですか？",
    answer:
      "香典を受け取るかどうかはご家族のご意向によります。親族間では香典をやり取りする慣習がある場合もありますので、事前に話し合っておくと安心です。香典辞退の場合は事前にその旨をお伝えください。",
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

export default function FamilyFuneralOnlyRelativesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="親族のみの家族葬"
        subtitle="ごく身近な方だけでお別れする葬儀"
        en="RELATIVES ONLY FUNERAL"
      />
      <Breadcrumb
        items={[
          { label: "葬儀プラン", href: "/plans" },
          { label: "家族葬", href: "/plans/family-funeral" },
          { label: "親族のみの家族葬" },
        ]}
      />

      {/* 特徴 */}
      <section className="py-20 md:py-28 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">OVERVIEW</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em] mb-5"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              親族のみの家族葬とは
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mb-6" />
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              親族のみで行う家族葬とは、参列者をご家族・ご親族（二親等〜三親等程度）のみに限定した葬儀です。友人・知人・職場関係者・ご近所の方などはお呼びせず、ごく身近な方だけで故人様とお別れする形式です。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              葛飾区でも、「家族だけでゆっくりお別れしたい」「故人が大げさな葬儀を望んでいなかった」「高齢のため参列できる方が限られている」などのご事情から、親族限定の家族葬を選ばれるご家族が増えています。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              稲垣屋葬儀店では、親族のみの葬儀であっても、ご家族の気持ちに寄り添い、故人様への感謝と敬意を込めたお別れの場をご用意します。参列者が少ない分、形式にとらわれず、故人様らしいお別れが実現できます。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "参列者を絞ることで得られる静けさ",
                desc: "参列者が親族のみの場合、多人数に対する接待や気遣いが不要となり、ご遺族が故人様のそばに寄り添う時間が増えます。故人様との最後の時間を静かに、心をこめて過ごすことができます。",
              },
              {
                title: "故人の意向を尊重できる",
                desc: "「大きな葬儀はしたくない」「身内だけで見送ってほしい」という故人様のご遺志をそのまま実現できます。事前に故人様がそのようなご意向を示されていた場合、親族のみの家族葬はその意向に最も沿った形式といえます。",
              },
              {
                title: "ご遺族の心身への負担が少ない",
                desc: "一般葬や参列者が多い家族葬では、受付・対応・挨拶などでご遺族が多忙になります。親族のみであれば、ご遺族自身も故人様と向き合う時間が確保でき、深いお別れができます。",
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

      {/* 参列者への連絡方法 */}
      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COMMUNICATION</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              参列しない方への連絡方法
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "訃報のお知らせ方",
                desc: "親族のみの葬儀を行う場合、知人・友人・職場関係者などへの連絡は「葬儀後」に行うことが多いです。訃報をお知らせする際に「誠に勝手ながら、葬儀はご家族・親族のみにて執り行いました」と明記することで、参列されなかった方へ丁寧にお伝えできます。",
              },
              {
                title: "職場・近隣への伝え方",
                desc: "職場関係者やご近所の方への連絡は、葬儀後に行うことが一般的です。故人様が長く勤められた職場や、お世話になった方へは個別にご連絡されることをお勧めします。連絡のタイミングや内容についてもご相談ください。",
              },
              {
                title: "挨拶状の活用",
                desc: "葬儀後に挨拶状（お礼状）をお送りすることで、参列できなかった方へ丁寧にお知らせできます。挨拶状には「近親者のみで執り行いました」「生前のご厚誼に感謝申し上げます」などの文言を添えるのが一般的です。稲垣屋葬儀店では挨拶状の内容についてもご相談を承ります。",
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

      {/* 後日の弔問・偲ぶ会 */}
      <section className="py-16 md:py-24 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">AFTER THE FUNERAL</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              後日の弔問・偲ぶ会について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              親族のみで葬儀を行った場合、参列されなかった方が後日ご自宅へ弔問にいらっしゃることがあります。事前に心の準備と簡単な準備をしておくと、ご遺族も安心して対応できます。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              故人様の友人・知人が多い場合や、葬儀に参列できなかった方が多い場合には、葬儀後に「偲ぶ会」を設けることも一つの方法です。偲ぶ会は宗教的な形式にとらわれず、故人様を懐かしみながら参加者が集まる場であるため、家族葬を選んだ後の対応としてご検討いただける選択肢です。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              偲ぶ会の開催については、時期・会場・規模などを含めて稲垣屋葬儀店でもご相談いただけます。葬儀後のことについても、遠慮なくお声がけください。
            </p>
          </FadeInUp>
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
                { href: "/plans/family-funeral/merit", label: "家族葬のメリット・注意点" },
                { href: "/plans/family-funeral/small", label: "少人数の家族葬" },
                { href: "/plans/family-funeral/cost", label: "家族葬の費用" },
                { href: "/plans/family-funeral/flow", label: "家族葬の流れ" },
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
