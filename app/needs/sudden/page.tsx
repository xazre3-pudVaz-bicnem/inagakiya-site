import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "急な葬儀で困っている方へ｜葛飾区 稲垣屋葬儀店",
  description:
    "突然のご逝去で何から始めればよいかわからない方へ。葛飾区の稲垣屋葬儀店が、急な葬儀でまず最初にすべきことを丁寧にご案内します。24時間365日対応。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/needs/sudden" },
};

const faqs = [
  {
    q: "突然の逝去で、まず何をすればよいですか？",
    a: "まず葬儀社へお電話ください（03-3690-0870）。稲垣屋葬儀店は24時間365日対応しており、深夜・早朝を問わずお受けします。病院でご逝去の場合、医師から死亡診断書を受け取り、葬儀社への連絡が次のステップです。急いですべてを決める必要はありません。まず「ご遺体の搬送」だけご依頼いただければ、その後のことはスタッフが一つひとつご案内します。",
  },
  {
    q: "夜中や早朝でも連絡できますか？",
    a: "はい、24時間365日、深夜・早朝を問わずご連絡いただけます。ご逝去はいつ起きるかわかりません。稲垣屋葬儀店は常時対応しておりますので、時間を気にせずお電話ください。",
  },
  {
    q: "病院から「安置施設へ移してほしい」と言われました。どうすればよいですか？",
    a: "葬儀社にご連絡いただければ、病院へのお迎えと安置施設への搬送を行います。病院には「葬儀社の手配ができた」とお伝えいただき、死亡診断書を受け取っておいてください。搬送先はご自宅または稲垣屋葬儀店の安置施設をご選択いただけます。",
  },
  {
    q: "急いで葬儀社を決めなければいけないですか？",
    a: "ご逝去の直後は、まず搬送先を決めることが急がれます。葬儀のプラン・日程・参列者への連絡などは、安置後に落ち着いてから決めていただいて構いません。最初から全部決めなくても大丈夫ですので、まずお電話ください。",
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

const firstSteps = [
  {
    step: "1",
    title: "まずお電話ください",
    desc: "稲垣屋葬儀店（03-3690-0870）へお電話ください。24時間365日対応しております。深夜・早朝でも構いません。電話口でどうすればよいかをご案内します。",
  },
  {
    step: "2",
    title: "死亡診断書を受け取る",
    desc: "病院でご逝去の場合、担当医師から死亡診断書が発行されます。大切な書類ですので受け取り、保管してください。葬儀社がコピーの管理や手続きをお手伝いします。",
  },
  {
    step: "3",
    title: "ご遺体の搬送先を伝える",
    desc: "ご自宅への安置か、葬儀社の安置施設への安置かをお伝えください。スタッフが迅速にお迎えに参ります。病院から急かされても、焦らずにお電話ください。",
  },
  {
    step: "4",
    title: "葬儀の詳細は安置後に決める",
    desc: "日程・プラン・参列者への連絡などは、安置後に落ち着いてから決めていただけます。最初から全部決める必要はありません。スタッフが一つひとつ丁寧にご案内します。",
  },
];

export default function SuddenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        title="急な葬儀で困っている方へ"
        subtitle="突然のことで、まず何をすればよいかをご案内します"
        en="SUDDEN FUNERAL"
      />
      <Breadcrumb
        items={[
          { label: "こんな方へ", href: "/needs" },
          { label: "急な葬儀で困っている方へ" },
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
              何も分からなくて構いません。まずお電話ください。
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              突然のご逝去に直面したとき、「何をすればよいか分からない」「誰に連絡すればよいか」「病院から早くしてほしいと言われた」——頭が真っ白になるのは、ごく自然なことです。葬儀の経験がない方が、突然のことで慌てるのは当たり前です。
            </p>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              稲垣屋葬儀店は24時間365日対応しております。深夜・早朝でも構いません。まず「ご遺体を搬送してほしい」とお電話いただくだけで大丈夫です。その後のことは、スタッフが一つひとつ丁寧にご案内します。
            </p>
            <div className="mt-8 p-6 bg-[#f4eef9] border border-[#c9a55a]">
              <p className="text-[#312852] text-lg tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>
                まずはお電話ください
              </p>
              <a
                href="tel:0336900870"
                className="inline-flex items-center gap-2 text-[#5c4a80] text-2xl font-bold hover:text-[#312852] transition-colors"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                <Phone size={22} />03-3690-0870
              </a>
              <p className="text-[#7560a0] text-sm mt-2">24時間365日対応 / 深夜・早朝でもお電話ください</p>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FIRST STEPS</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              急なご逝去のとき、最初にすること
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {firstSteps.map((s) => (
              <StaggerItem key={s.step}>
                <div className="py-7 flex items-start gap-6">
                  <span
                    className="text-[#c9a55a] text-2xl tracking-tight shrink-0"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    {s.step}
                  </span>
                  <div>
                    <h3
                      className="text-[#312852] text-lg tracking-wide mb-2"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-[#4a4a4a] text-base leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mt-8">
            <p className="text-[#7560a0] text-sm">
              詳しい流れについては
              <Link href="/flow/critical" className="underline underline-offset-2 hover:text-[#312852] transition-colors mx-1">
                ご逝去直後の対応ガイド
              </Link>
              もご参照ください。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">SUPPORT</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              急なご葬儀でも、稲垣屋葬儀店にお任せください
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              稲垣屋葬儀店は明治11年頃の創業以来、葛飾区で長年にわたり地域の方々の葬儀をお手伝いしてきました。急なご連絡でも、経験豊富なスタッフが落ち着いて対応します。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              ご逝去の報告を受けてから、搬送・安置・打ち合わせ・葬儀の実施まで、すべてスタッフがご案内します。「何から始めればよいか」という段階からご相談いただいて構いません。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              葛飾区の緊急対応については
              <Link href="/katsushika-funeral/emergency" className="underline underline-offset-2 text-[#5c4a80] hover:text-[#312852] transition-colors mx-1">
                葛飾区での緊急対応
              </Link>
              もご覧ください。
            </p>
          </FadeInUp>
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
              { href: "/flow/critical", label: "ご逝去直後の対応ガイド" },
              { href: "/katsushika-funeral/emergency", label: "葛飾区での緊急対応について" },
              { href: "/needs/no-idea", label: "葬儀のことが全くわからない方へ" },
              { href: "/support/first-time", label: "はじめての葬儀をお考えの方へ" },
              { href: "/flow", label: "葬儀の流れ全体ガイド" },
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
              まずお電話ください。すぐに動き出します。
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              稲垣屋葬儀店は24時間365日対応。何も分からなくても大丈夫です。一緒に一歩ずつ進めます。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:0336900870"
                className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 w-full sm:w-auto justify-center"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                <Phone size={17} />03-3690-0870（24時間）
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-[#9278be] text-[#5c4a80] hover:bg-[#ede7f6] px-8 py-4 tracking-wider transition-colors duration-300 w-full sm:w-auto justify-center"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                <MessageCircle size={17} />メールでのお問い合わせ
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
