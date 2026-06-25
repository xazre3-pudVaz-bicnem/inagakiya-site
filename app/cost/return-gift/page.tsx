import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "返礼品・飲食費の考え方｜葛飾区 稲垣屋葬儀店",
  description:
    "葬儀の返礼品・飲食費の考え方を葛飾区の稲垣屋葬儀店が解説します。香典返し・会葬礼品の種類・費用の目安、通夜振る舞い・精進落としの考え方、家族葬の場合の対応についてご案内します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/cost/return-gift" },
};

const returnGiftItems = [
  {
    en: "Kaiden Return",
    title: "香典返し",
    desc: "いただいた香典に対するお礼として、後日（四十九日法要後が一般的）にお渡しする品物です。いただいた香典額のおおよそ3分の1から半額程度の品物を用意するのが一般的とされていますが、金額の目安は地域・宗派・親族間の慣習によって異なります。後日郵送で手配する場合は、送料も考慮に入れましょう。",
  },
  {
    en: "Reception Gift",
    title: "会葬礼品（当日の手土産）",
    desc: "葬儀・告別式の当日、参列いただいた方に感謝の意を込めてお渡しする品物です。会葬礼状と一緒にお渡しするのが一般的です。内容はお茶・お菓子・タオルなどが多く、参列者数に合わせて事前に準備します。家族葬の場合は省略するケースもあります。",
  },
  {
    en: "Osenko Return",
    title: "お供物・お花へのお礼",
    desc: "お供物・供花をいただいた場合のお礼も必要になる場合があります。会葬礼品や香典返しとは別に考えるケースもありますので、事前にどのような形でお礼するかを整理しておくと段取りがスムーズです。",
  },
];

const foodItems = [
  {
    en: "Tsuya Furumai",
    title: "通夜振る舞い",
    desc: "通夜の後に参列者をもてなす飲食の場です。規模は参列者数によって異なり、一般葬では数十人規模の飲食が必要になることもあります。家族葬・火葬式では、家族だけで簡素に行うケースや省略するケースもあります。内容は仕出し料理・お寿司・お茶菓子など、ご家族のご判断で決めることができます。",
  },
  {
    en: "After Service",
    title: "精進落とし（告別式後の会食）",
    desc: "火葬後、骨上げを終えてから行う会食です。「お斎（おとき）」とも呼ばれます。参列者・親族が一堂に会し、故人を偲ぶ場となります。一般葬では参列者全員を招くこともありますが、家族葬・少人数葬儀では家族・親族のみで行うことが多いです。費用は参列者数・料理の内容によって異なります。",
  },
  {
    en: "Family Funeral Case",
    title: "家族葬の場合の飲食費",
    desc: "家族葬では参列者が少ないため、飲食費を大幅に抑えることができます。家族だけで静かにお食事する程度で済む場合も多く、費用の見通しが立てやすいのも家族葬のメリットのひとつです。通夜振る舞い・精進落としをどうするかは、ご家族のご判断で自由に決めることができます。",
  },
];

const faqItems = [
  {
    q: "返礼品はどのくらいの予算で用意すればよいですか？",
    a: "返礼品の費用は、香典返しの場合はいただいた香典の3分の1〜半額程度が目安とされることが多いです。会葬礼品は参列者一人あたりのご予算によりますが、内容・数量によって費用は異なります。稲垣屋葬儀店では返礼品のご手配も承っていますので、お気軽にご相談ください。",
  },
  {
    q: "通夜振る舞いを省略しても問題ありませんか？",
    a: "家族葬・少人数葬儀では、通夜振る舞いを省略または簡略化するケースが増えています。省略する場合は、参列者の方々にその旨をお伝えするとよいでしょう。ご家族の判断で自由に決めていただいて問題ありません。",
  },
  {
    q: "返礼品・飲食の手配は葬儀社に依頼できますか？",
    a: "はい、稲垣屋葬儀店では返礼品のご手配も承っています。飲食についても、ご希望の内容に合わせてご案内できます。ご自身で手配される場合も、どのような内容が適切かについてのご相談には応じます。",
  },
  {
    q: "後日郵送で香典返しをする場合の費用はどうなりますか？",
    a: "後日郵送で香典返しをする場合は、品物の費用に加えて送料が発生します。件数が多い場合は送料もまとまった費用になりますので、事前に費用を把握しておくことをお勧めします。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function CostReturnGiftPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="返礼品・飲食費の考え方"
        subtitle="参列者へのお礼と飲食費について丁寧にご説明します"
        en="RETURN GIFTS & CATERING"
      />
      <Breadcrumb items={[{ label: "葬儀費用", href: "/cost" }, { label: "返礼品・飲食費" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">RETURN GIFTS</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              返礼品について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              参列者へのお礼として準備する「返礼品」には、葬儀当日にお渡しする会葬礼品と、後日お渡しする香典返しがあります。参列者の人数と内容によって費用が変わります。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {returnGiftItems.map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-1">{item.en}</p>
                  <h4 className="text-[#312852] text-lg tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.title}
                  </h4>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">CATERING</p>
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              飲食費について
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {foodItems.map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-1">{item.en}</p>
                  <h4 className="text-[#312852] text-lg tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.title}
                  </h4>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp>
            <p className="text-[#7560a0] text-sm leading-loose border-t border-[#e8ddf4] pt-6 mb-10">
              ※ 返礼品・飲食費はご家族のご判断で自由に内容を決めていただけます。上記は一般的な慣習の説明であり、地域・宗派・ご家族の状況によって異なる場合があります。
            </p>
          </FadeInUp>

          <FadeInUp className="mb-10">
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              よくあるご質問
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {faqItems.map((item) => (
              <StaggerItem key={item.q}>
                <div className="py-6">
                  <p className="text-[#312852] text-base mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                    <span className="text-[#9278be] font-bold mr-2">Q</span>
                    {item.q}
                  </p>
                  <p className="text-[#4a4a4a] text-sm leading-loose pl-6">
                    <span className="text-[#c9a55a] font-bold mr-2">A</span>
                    {item.a}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp>
            <div className="flex flex-wrap gap-4">
              <Link href="/cost/number-of-attendees" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                参列人数と費用の関係<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/cost/breakdown" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                費用の内訳について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/cost/reduce" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                費用を抑えるための考え方<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/support/kouden" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                香典・マナーについて<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/cost" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                葬儀費用一覧に戻る<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              ご不明な点はお気軽にご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              事前相談・お見積もりは無料です。
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
