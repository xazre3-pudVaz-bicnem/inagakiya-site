import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "葬儀社へ最初に伝えること｜葛飾区 稲垣屋葬儀店",
  description:
    "葬儀社への最初の電話で伝えるべきことを葛飾区の稲垣屋葬儀店が解説します。何を伝えれば良いか、準備不要なことも含めて分かりやすくご案内します。24時間対応。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/flow/first-call" },
};

const tellItems = [
  { title: "故人様のお名前（フルネーム）", desc: "故人様のお名前をお伝えください。葬儀の書類・手配に必要です。読み方が難しい場合は読み方も一緒にお伝えください。" },
  { title: "ご逝去の場所", desc: "病院・施設・ご自宅など、故人様が現在いらっしゃる場所をお伝えください。住所が分かれば合わせてお伝えいただくとスムーズです。" },
  { title: "ご逝去の状況", desc: "「病院でご逝去した」「自宅で亡くなっているのを見つけた」など、おおまかな状況をお伝えください。詳細は後からでも構いません。" },
  { title: "お電話されているご本人のお名前と連絡先", desc: "折り返しや確認のためにお名前と連絡先をお伝えください。" },
  { title: "搬送先のご希望（分かれば）", desc: "ご自宅に連れて帰りたい・施設に安置したいなど、ご希望があればお伝えください。まだ決まっていない場合は、ご相談の上決めることができます。" },
];

const notNeededItems = [
  { title: "葬儀の形式・内容", desc: "最初のお電話では、葬儀の形式（家族葬・一般葬など）や内容を決める必要はありません。搬送・安置の手配の後で、ゆっくりご相談いただけます。" },
  { title: "費用の詳細", desc: "最初のお電話で費用を全て決める必要はありません。安置の後に打ち合わせを行い、詳細な見積もりをご提示します。" },
  { title: "参列者リスト・日程", desc: "最初のご連絡時点では、参列者や日程が未定でも問題ありません。安置の後に改めてご相談いただけます。" },
  { title: "書類・現金の準備", desc: "最初のお電話で書類や現金を準備する必要はありません。搬送・安置の手配が完了してから、必要なものをご案内します。" },
];

const faqItems = [
  {
    q: "最初の電話で決まっていないことが多くても大丈夫ですか？",
    a: "はい、大丈夫です。最初のお電話では、故人様の現在の場所・逝去の状況・ご連絡先をお伝えいただければ十分です。葬儀の内容・費用・日程などは、安置の後でゆっくりご相談いただけます。",
  },
  {
    q: "深夜・早朝でも電話してよいですか？",
    a: "はい、稲垣屋葬儀店は24時間365日対応しています。深夜・早朝・休日を問わず、いつでもお電話ください（03-3690-0870）。",
  },
  {
    q: "電話が難しい場合、メールで連絡できますか？",
    a: "緊急の搬送・安置が必要な場合はお電話でのご連絡をお勧めします。事前相談・費用のご確認などについてはメールでのお問い合わせも承っています。",
  },
  {
    q: "葬儀社を事前に決めていなかった場合でも相談できますか？",
    a: "もちろんです。事前に葬儀社を決めていなかった方からのご連絡も多くいただいています。ご逝去後に初めてお電話いただく場合でも、丁寧にご対応します。",
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

export default function FlowFirstCallPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="葬儀社へ最初に伝えること"
        subtitle="最初のお電話で伝えるべきことをシンプルにご案内します"
        en="FIRST CONTACT"
      />
      <Breadcrumb items={[{ label: "葬儀の流れ", href: "/flow" }, { label: "葬儀社への最初の連絡" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FIRST CONTACT</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              最初のお電話で伝えること
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              葬儀社への最初のお電話は、慌てる必要はありません。全てを決めてからお電話いただく必要もありません。以下の情報をお伝えいただければ、稲垣屋葬儀店がスムーズに対応します。
            </p>
          </FadeInUp>

          <FadeInUp className="mb-10">
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              最初に伝えていただきたいこと
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {tellItems.map((item) => (
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
              最初のお電話で準備不要なこと
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {notNeededItems.map((item) => (
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
              <Link href="/flow/hospital" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                病院でご逝去の場合<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/flow/home" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                自宅でご逝去の場合<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/flow/resting-place" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                安置場所の決め方<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/flow/schedule" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                葬儀日程の決め方<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
              いつでもお電話ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-3">
              稲垣屋葬儀店は24時間365日対応しております。
            </p>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              何も決まっていなくても大丈夫です。まずはお電話ください。
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
