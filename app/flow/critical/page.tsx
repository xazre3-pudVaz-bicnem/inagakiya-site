import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "危篤時に確認すること｜葛飾区 稲垣屋葬儀店",
  description:
    "危篤の知らせを受けたとき、何をすべきかを葛飾区の稲垣屋葬儀店が丁寧に解説します。病院への駆けつけ・家族への連絡・心の準備・事前連絡のすすめ。24時間対応。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/flow/critical" },
};

const criticalItems = [
  {
    en: "Rush to Hospital",
    title: "病院・施設への駆けつけ",
    desc: "危篤の連絡を受けたら、まずは病院・施設に向かいましょう。交通手段はタクシー・電車など、最もスムーズに移動できる方法を選んでください。夜間・早朝でも病院のスタッフが対応してくれます。到着したら担当ナースステーション・受付にお声がけください。",
  },
  {
    en: "Family Contact",
    title: "家族・近親者への連絡",
    desc: "危篤の知らせを受けたら、ご家族・近親者に連絡を取りましょう。会わせてあげたい方への連絡は早めに行うことが大切です。遠方の方には「できるだけ早く来てほしい」という旨を伝えましょう。ただし、深夜の連絡は相手の状況を考慮しながら行ってください。",
  },
  {
    en: "Mental Preparation",
    title: "心の準備をする",
    desc: "危篤の状態は、ご逝去が近い可能性を意味します。気持ちが動揺するのは自然なことです。無理に感情を抑える必要はありません。担当医師から病状・予後についての説明を受ける際は、ご家族が複数いる場合は一緒に聞くと後で共有しやすくなります。",
  },
  {
    en: "Pre-contact Funeral",
    title: "葬儀社への事前連絡のすすめ",
    desc: "危篤の段階で、葬儀社への事前相談・連絡を検討される方が増えています。ご逝去後はさまざまな手配が急きょ必要になりますが、事前に葬儀社と話をしておくことで、その後の流れを落ち着いて進めることができます。稲垣屋葬儀店では、危篤のご連絡時にもご相談をお受けしています。料金は発生しません。",
  },
  {
    en: "What to Prepare",
    title: "事前に準備できること",
    desc: "危篤の段階で、故人の遺影に使える写真を探しておくと、ご逝去後の手配がスムーズです。また、菩提寺・宗派の確認、葬儀に参列してほしい方のリストを整理しておくことも助けになります。ただし、無理に急がず、まずはご本人のそばにいることを優先してください。",
  },
];

const faqItems = [
  {
    q: "危篤の連絡を受けてから、すぐに葬儀社に連絡したほうがいいですか？",
    a: "危篤の段階での連絡は義務ではありませんが、事前に相談しておくことでご逝去後の手配がスムーズになります。稲垣屋葬儀店では危篤時のご相談も24時間受け付けています。「まだ何も決まっていないけれど相談したい」という段階でも構いません。",
  },
  {
    q: "病院からご逝去の連絡があった場合、最初に何をすれば良いですか？",
    a: "まず病院に向かい、担当スタッフの指示に従ってください。ご逝去が確認されたら、葬儀社（稲垣屋葬儀店）にご連絡ください。搬送・安置の手配が必要になりますので、早めのご連絡をお勧めします。",
  },
  {
    q: "危篤状態で一人で病院に行っています。葬儀のことを今考える必要がありますか？",
    a: "今すぐ葬儀の詳細を決める必要はありません。まずはご本人のそばにいてください。葬儀の手配はご逝去後から始めていただけます。稲垣屋葬儀店は24時間365日対応していますので、いつでもご連絡いただけます。",
  },
  {
    q: "菩提寺への連絡は危篤段階でするべきですか？",
    a: "お付き合いのある菩提寺がある場合、危篤の段階でご連絡しておくと、ご逝去後の日程調整がスムーズになることがあります。ただし、ご逝去後の連絡でも対応いただけることが多いです。ご状況に合わせてご判断ください。",
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

export default function FlowCriticalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="危篤時に確認しておくこと"
        subtitle="大切な方の危篤の知らせを受けたとき、何をすべきか"
        en="WHEN CRITICALLY ILL"
      />
      <Breadcrumb items={[{ label: "葬儀の流れ", href: "/flow" }, { label: "危篤時の対応" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">CRITICAL CONDITION</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              危篤の知らせを受けたとき
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              「危篤です」という連絡は突然届くことが多く、動揺するのは当然のことです。まず深呼吸して、一つひとつ確認していきましょう。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              危篤の段階では、葬儀の詳細を全て決める必要はありません。まずはご本人のそばにいることを最優先にしてください。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {criticalItems.map((item) => (
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
              <Link href="/flow/hospital" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                病院でご逝去の場合<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/flow/first-call" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                葬儀社への最初の連絡<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/consultation" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                事前相談について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/flow/after-death" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                ご逝去直後にすること<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-3">
              稲垣屋葬儀店は24時間365日対応しております。
            </p>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              危篤のご連絡時にもご相談をお受けしています。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:0336900870" className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 w-full sm:w-auto justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
                <Phone size={17} />03-3690-0870（24時間対応）
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-[#9278be] text-[#5c4a80] hover:bg-[#ede7f6] px-8 py-4 tracking-wider transition-colors duration-300 w-full sm:w-auto justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
                <MessageCircle size={17} />メールでのお問い合わせ
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
