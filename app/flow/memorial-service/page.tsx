import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "法要・四十九日について｜葛飾区 稲垣屋葬儀店",
  description:
    "四十九日とは何か・一般的な法要の種類・準備の進め方・稲垣屋葬儀店のアフターサポートについて葛飾区の稲垣屋葬儀店が解説します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/flow/memorial-service" },
};

const shijukuNichiItems = [
  {
    en: "What is It",
    title: "四十九日とは",
    desc: "仏教の考え方において、故人様がご逝去後49日間をかけてあの世へ旅をするとされています。この期間を「中陰（ちゅういん）」と呼び、49日目に極楽浄土に到着するとされています。四十九日は、故人様の魂が安らかに旅立てるよう祈り、遺族が一つの節目を迎える大切な法要です。宗派によって考え方が異なる場合があります。",
  },
  {
    en: "Timing",
    title: "四十九日のタイミング",
    desc: "四十九日はご逝去日から数えて49日目が基本ですが、実際には直前の土日や休日に行うことが多いです。仕事の都合・参列者の都合を考慮して日程を決めます。宗派によっては35日（五七日）を重要な節目とする場合もあります。",
  },
  {
    en: "What to Prepare",
    title: "四十九日の準備",
    desc: "四十九日法要には、宗教者への連絡・会場の手配・参列者への案内・お布施の準備・返礼品の手配などが必要です。また、四十九日に合わせて納骨を行うケースも多いため、お墓・納骨堂の手配も進めておきましょう。",
  },
];

const memorialTypes = [
  { title: "初七日（しょなのか）", desc: "ご逝去後7日目の法要です。近年は葬儀当日に繰り上げて行うケースが増えています。「繰り上げ初七日」と呼ばれ、火葬後に行います。" },
  { title: "四十九日（しじゅうくにち）", desc: "ご逝去後49日目の法要で、最も重要な節目とされています。この日に合わせて納骨を行うことが多いです。精進落とし（会食）を行うことも多いです。" },
  { title: "百か日（ひゃっかにち）", desc: "ご逝去後100日目の法要です。四十九日ほど大規模ではない場合が多く、ご家族のみで行うことも多いです。" },
  { title: "一周忌（いっしゅうき）", desc: "ご逝去後1年目の法要です。遺族・親族・故人の友人などが集まり行う場合が多いです。この法要を経て「喪が明ける」とする考え方もあります。" },
  { title: "三回忌・七回忌・十三回忌…", desc: "一周忌の後も、三回忌（2年後）・七回忌（6年後）・十三回忌などの法要が続きます。宗派によって重視する回忌が異なります。" },
];

const supportItems = [
  { title: "法要のご連絡・ご案内", desc: "稲垣屋葬儀店では、法要の時期が近づいた際にご連絡することも可能です。「四十九日が近いけど何から始めればよいか分からない」という方もお気軽にご相談ください。" },
  { title: "宗教者のご紹介", desc: "菩提寺とのお付き合いがない方には、宗教者のご紹介も承っています。" },
  { title: "返礼品・飲食のご手配", desc: "四十九日法要の返礼品・飲食についても、ご手配のご相談を承っています。" },
  { title: "納骨のご相談", desc: "四十九日に合わせた納骨について、お墓・納骨堂の選択肢についてのご相談も承っています。" },
];

const faqItems = [
  {
    q: "四十九日法要は必ず行わなければいけませんか？",
    a: "四十九日法要は仏教の慣習であり、行うかどうかはご家族のご判断によります。菩提寺がある場合はご住職にご相談ください。無宗教の場合は法要を行わないことも選択肢の一つです。",
  },
  {
    q: "四十九日と納骨は同時に行う必要がありますか？",
    a: "四十九日に合わせて納骨を行う方が多いですが、必ずしも同時でなくても構いません。お墓の準備が整っていない場合など、別のタイミングで納骨することも可能です。",
  },
  {
    q: "遠方に住んでいる親族に来てもらうべきですか？",
    a: "四十九日法要の参列者の範囲はご家族のご判断で決めていただけます。遠方の方には無理なくご都合に合わせて出席いただくことで十分です。どうしても来られない方には、後日ご挨拶する形でも問題ありません。",
  },
  {
    q: "稲垣屋葬儀店では法要のサポートもしてもらえますか？",
    a: "はい、稲垣屋葬儀店では葬儀後も継続してサポートしています。法要の準備・宗教者のご紹介・返礼品の手配など、お気軽にご相談ください。",
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

export default function FlowMemorialServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="法要・四十九日について"
        subtitle="葬儀後の大切な節目をご家族が安心して迎えられるようご案内します"
        en="MEMORIAL SERVICE"
      />
      <Breadcrumb items={[{ label: "葬儀の流れ", href: "/flow" }, { label: "法要・四十九日" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">MEMORIAL SERVICE</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              四十九日について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              葬儀が終わった後も、四十九日・一周忌などの法要が続きます。法要は故人様を偲ぶ大切な時間であるとともに、ご遺族が少しずつ気持ちを整えていく節目でもあります。
            </p>
            <p className="text-[#7560a0] text-sm leading-loose mb-8 border-l-2 border-[#e8ddf4] pl-4">
              ※ 法要の内容・形式・時期は宗教・宗派・地域によって異なります。詳細は菩提寺・ご依頼する宗教者にご確認ください。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {shijukuNichiItems.map((item) => (
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
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              一般的な法要の種類
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {memorialTypes.map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-6">
                  <h4 className="text-[#312852] text-base tracking-wide mb-1.5" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.title}
                  </h4>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mb-10">
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              稲垣屋葬儀店のアフターサポート
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {supportItems.map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-6">
                  <h4 className="text-[#312852] text-base tracking-wide mb-1.5" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.title}
                  </h4>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

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
              <Link href="/flow/after-funeral-procedures" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                葬儀後の手続き一覧<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/cost/religious-fee" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                宗教者への御礼について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/support/after-funeral" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                葬儀後のサポート<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/cost/return-gift" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                返礼品・飲食費の考え方<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/flow" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                葬儀全体の流れ<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
