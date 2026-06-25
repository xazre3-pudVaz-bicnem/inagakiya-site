import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "葛飾区で夜間・早朝に葬儀相談が必要な方へ｜稲垣屋葬儀店",
  description:
    "葛飾区で深夜・早朝にご逝去があった場合の対応。稲垣屋葬儀店は24時間365日対応。夜間でも安心してお電話ください。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/katsushika-funeral/night-support" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "深夜2時にご逝去がありました。今すぐ連絡できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、稲垣屋葬儀店は24時間365日対応しています。深夜2時でも、早朝4時でも、お電話（03-3690-0870）にてご連絡いただければ、担当者が対応します。まずご状況をお聞きし、搬送・安置の手配を行います。葬儀の打ち合わせは翌朝以降に落ち着いて行っていただけます。",
      },
    },
    {
      "@type": "Question",
      name: "夜間に葬儀社に連絡した場合、深夜に搬送してもらえますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、深夜でも搬送に対応しています。病院・施設・ご自宅からの深夜搬送が可能です。葛飾区内であれば迅速に伺います。搬送後、安置施設またはご自宅に安置し、葬儀の打ち合わせは翌朝以降に行います。",
      },
    },
    {
      "@type": "Question",
      name: "夜間にご逝去があった場合、翌朝まで何もしなくてよいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "病院でのご逝去の場合、病院側から「遺体の搬送先を決めてください」と案内されることが多く、その時点で葬儀社に連絡する必要があります。自宅でのご逝去の場合も、かかりつけ医に連絡し死亡診断書を取得した後、葬儀社に連絡します。いずれの場合も、稲垣屋葬儀店（03-3690-0870）に深夜でもお電話ください。",
      },
    },
    {
      "@type": "Question",
      name: "夜間対応と昼間対応で、サービス内容は変わりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "稲垣屋葬儀店では、夜間・早朝のご連絡でも同じ水準で対応します。搬送・安置の手配は24時間行います。葬儀の詳細な打ち合わせは翌朝以降に改めて行いますが、緊急の確認事項は深夜でも対応します。",
      },
    },
  ],
};

export default function NightSupportPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="葛飾区で夜間・早朝に葬儀相談が必要な方へ"
        subtitle="24時間365日対応。深夜・早朝でも安心してお電話ください"
        en="NIGHT SUPPORT"
      />
      <Breadcrumb
        items={[
          { label: "葛飾区の葬儀", href: "/katsushika-funeral" },
          { label: "夜間・早朝の対応" },
        ]}
      />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">24H SUPPORT</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              深夜・早朝のご逝去に対応します
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp>
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose">
              <p>
                ご逝去は、昼夜を問わず訪れます。深夜に病院から連絡が入った、夜中に自宅で家族が息を引き取った——そのような状況で、深夜でも対応してくれる葬儀社を探すことは大変です。
              </p>
              <p>
                稲垣屋葬儀店は、葛飾区で24時間365日対応しています。深夜・早朝・休日を問わず、03-3690-0870にお電話いただければ担当者が対応します。「今すぐどうすればよいか分からない」という状況でも、落ち着いてご案内しますので、まずお電話ください。
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">IMPORTANCE</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              24時間365日対応が重要な理由
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp>
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose">
              <p>
                病院では、深夜に患者がご逝去した場合、家族に早急に葬儀社を選んで搬送の手続きをするよう求めることがあります。病院の霊安室は長時間の使用が難しいため、速やかに対応できる葬儀社に連絡する必要があります。
              </p>
              <p>
                また、ご自宅でのご逝去の場合も、かかりつけ医に連絡した後、深夜でも葬儀社への連絡が必要になります。稲垣屋葬儀店は深夜でも搬送に対応していますので、ご安心ください。
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">NIGHT FLOW</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              夜間に何をすべきか
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                step: "Step 1",
                title: "医師の確認・死亡診断書",
                body: "病院では担当医が確認し死亡診断書を発行します。自宅の場合はかかりつけ医に連絡します。突然のご逝去の場合は警察（110番）に連絡します。",
              },
              {
                step: "Step 2",
                title: "稲垣屋葬儀店にお電話（03-3690-0870）",
                body: "深夜・早朝でも担当者が対応します。「ご逝去がありました。どうすればよいですか」とおっしゃっていただくだけで大丈夫です。",
              },
              {
                step: "Step 3",
                title: "夜間の搬送・安置",
                body: "稲垣屋葬儀店がご遺体をお迎えし、安置施設またはご自宅に安置します。葛飾区内の病院・施設・自宅からの深夜搬送に対応しています。",
              },
              {
                step: "Step 4",
                title: "翌朝の打ち合わせ",
                body: "搬送・安置が完了した後、翌朝以降に葬儀の打ち合わせを行います。形式・費用・日程など、落ち着いた状態で丁寧にご説明します。急いで決める必要はありません。",
              },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="py-7">
                  <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-1">{item.step}</p>
                  <h3 className="text-[#312852] text-lg tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-sm leading-loose">{item.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeInUp className="mt-6">
            <div className="flex flex-wrap gap-4">
              <Link href="/flow/after-death" className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group">
                ご逝去直後の流れ詳細
                <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/katsushika-funeral/emergency" className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group">
                急なご逝去への対応
                <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              夜間対応に関するよくあるご質問
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
