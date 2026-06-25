import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "葛飾区でシンプルな葬儀をお考えの方へ｜稲垣屋葬儀店",
  description:
    "葛飾区でシンプルな葬儀をお考えの方へ。火葬式（直葬）・一日葬の特徴と費用を稲垣屋葬儀店が丁寧にご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/katsushika-funeral/simple-funeral" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "火葬式（直葬）とはどのような葬儀ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "火葬式（直葬）とは、お通夜・告別式を行わず、火葬のみを行う葬儀形式です。ごく近しい方だけで静かに見送ることができ、葬儀費用を最小限に抑えることができます。葛飾区では、故人が生前に「シンプルでよい」と希望されていた場合や、高齢で参列者が少ない場合に選ばれることが多い形式です。",
      },
    },
    {
      "@type": "Question",
      name: "火葬式でも心を込めたお別れができますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、できます。火葬式であっても、火葬炉の前でのお別れの時間はあります。花でお棺を飾ったり、生花を手向けたりすることも可能です。形式がシンプルであっても、故人への気持ちは変わりません。稲垣屋葬儀店では、火葬式でも心を込めた対応をいたします。",
      },
    },
    {
      "@type": "Question",
      name: "一日葬と火葬式（直葬）の違いは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "一日葬はお通夜を省略し、告別式と火葬を一日で行う形式です。告別式という場でのお別れを大切にしたい方に向いています。火葬式（直葬）は告別式も行わず、火葬のみを行う最もシンプルな形式です。費用は火葬式の方が抑えられますが、告別式という儀式の場がない点が異なります。",
      },
    },
    {
      "@type": "Question",
      name: "葛飾区で火葬式を行う場合の費用はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "火葬式の費用は、葬儀社のプラン料金・火葬場の使用料・安置施設の費用などから構成されます。プランの内容によって異なりますので、稲垣屋葬儀店では事前相談（無料）で費用の内訳を詳しくご説明します。葛飾区民の方は区民葬儀制度の活用もご検討ください。",
      },
    },
  ],
};

export default function SimpleFuneralPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="葛飾区でシンプルな葬儀をお考えの方へ"
        subtitle="火葬式・一日葬の特徴と費用をご説明します"
        en="SIMPLE FUNERAL"
      />
      <Breadcrumb
        items={[
          { label: "葛飾区の葬儀", href: "/katsushika-funeral" },
          { label: "シンプルな葬儀" },
        ]}
      />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">SIMPLE FUNERAL</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              シンプルな葬儀を選ぶ理由
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp>
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose">
              <p>
                「儀式よりも、静かに見送ることを大切にしたい」「故人が生前にシンプルな葬儀を希望していた」「費用の負担を最小限にしたい」など、シンプルな葬儀を選ぶ理由はさまざまです。
              </p>
              <p>
                葛飾区でも、火葬式（直葬）や一日葬を選ぶご家族が増えています。形式がシンプルであっても、故人への気持ちは変わりません。稲垣屋葬儀店は、どのような形式の葬儀でも、誠実に、心を込めて対応します。
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">CREMATION</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              火葬式（直葬）について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp>
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose mb-6">
              <p>
                火葬式（直葬）は、お通夜・告別式を行わず、火葬のみを行う葬儀形式です。ご逝去後、安置施設または自宅に安置し、火葬場に直接向かいます。ごく近しい方だけが立ち会い、静かに見送ることができます。
              </p>
              <p>
                火葬炉の前でのお別れの時間はありますので、花を手向けたり、最後の挨拶をする機会はあります。シンプルな形式ですが、大切な場面は残されています。
              </p>
            </div>
            <Link href="/plans/cremation" className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group">
              火葬式プランの詳細を見る
              <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ONE-DAY</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              一日葬との違い
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "一日葬の特徴",
                body: "お通夜を省略し、告別式と火葬を一日で行います。告別式という場でのお別れを大切にしたい方に適しています。参列者が来やすく、故人を見送る場として機能します。火葬式よりも費用はかかりますが、一般葬よりはシンプルです。",
              },
              {
                title: "火葬式との比較",
                body: "一日葬には告別式があるため、参列者が故人に挨拶できる機会があります。火葬式はより簡素で、参列者も火葬に立ち会う方だけとなります。どちらが合っているかは、ご家族の希望・参列してほしい方の有無によって異なります。",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3 className="text-[#312852] text-lg tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-sm leading-loose">{item.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeInUp className="mt-6">
            <Link href="/plans/oneday-funeral" className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group">
              一日葬プランの詳細を見る
              <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
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
                シンプルな葬儀でも、費用はプランの内容によって異なります。葬儀社への料金・火葬場の使用料・安置費用・搬送費などが基本的な費用です。宗教者へのお礼・飲食費・返礼品などは別途かかる場合があります。
              </p>
              <p>
                稲垣屋葬儀店では、事前に費用の内訳を明確にご説明します。「何が含まれていて何が含まれていないか」をはっきりとお伝えすることを大切にしています。
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/cost/cremation" className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group">
                火葬式の費用詳細
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

      <section className="py-16 md:py-24 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              シンプルな葬儀に関するよくあるご質問
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
