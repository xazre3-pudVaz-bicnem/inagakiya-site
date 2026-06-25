import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "事前相談で確認すること｜チェックリスト｜葛飾区 稲垣屋葬儀店",
  description:
    "事前相談で確認しておきたいことのチェックリスト。費用・プラン・流れ・区民葬儀・菩提寺など、相談前に知っておくとよいこと。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/consultation/checklist" },
};

const checklistItems = [
  {
    num: "01",
    title: "葬儀の形式について（家族葬・一日葬・火葬式など）",
    desc: "どのような形式でお別れしたいか。故人の希望やご家族の考えを事前に整理しておきましょう。",
  },
  {
    num: "02",
    title: "おおよその費用・見積もり",
    desc: "葬儀にかかる費用の目安を把握しておくことで、いざというときに慌てずに対応できます。",
  },
  {
    num: "03",
    title: "区民葬儀制度の対象かどうか",
    desc: "葛飾区民の方は区民葬儀制度が利用できる場合があります。対象かどうかを事前に確認しておきましょう。",
  },
  {
    num: "04",
    title: "菩提寺・宗教者の有無と手続き",
    desc: "先祖代々のお寺（菩提寺）があるかどうかを確認し、連絡先・宗派を把握しておくことが大切です。",
  },
  {
    num: "05",
    title: "葬儀の流れ全体",
    desc: "ご逝去から葬儀・葬儀後の手続きまで、一連の流れを事前に把握しておくことで、いざというときに落ち着いて対応できます。",
  },
  {
    num: "06",
    title: "安置場所・安置期間",
    desc: "ご逝去後、葬儀まで数日間はご遺体を安置する必要があります。自宅安置が可能かどうかも確認しておきましょう。",
  },
  {
    num: "07",
    title: "参列者の範囲と人数",
    desc: "参列をお願いする方の範囲と人数の目安を検討しておきましょう。葬儀の規模・費用・会場の選定に影響します。",
  },
  {
    num: "08",
    title: "喪主・取りまとめ役の決め方",
    desc: "喪主や葬儀全体の取りまとめ役を事前に話し合っておくことで、いざというときの混乱を防ぐことができます。",
  },
  {
    num: "09",
    title: "葬儀後の手続きの概要",
    desc: "死亡届・火葬許可証・年金停止・相続手続きなど、葬儀後に必要な手続きの概要を把握しておきましょう。",
  },
  {
    num: "10",
    title: "緊急時の連絡先・手順",
    desc: "「もしものとき」に最初に連絡すべき先・手順を家族で共有しておきましょう。稲垣屋葬儀店は24時間365日対応しています（03-3690-0870）。",
  },
];

const faqs = [
  {
    q: "相談前に何か準備しておく必要はありますか？",
    a: "特に準備は不要です。「何から相談すればよいか分からない」という段階でも大丈夫です。稲垣屋葬儀店のスタッフが順を追ってご説明します。もし「聞きたいことをメモしておきたい」という方は、このページのチェックリストを参考にしてみてください。",
  },
  {
    q: "チェックリストの全部を一度に相談しなければなりませんか？",
    a: "いいえ、一度に全部確認する必要はありません。最初は「費用の目安を知りたい」「どんな形式があるか知りたい」といった一点からでも構いません。疑問が出てきたら何度でもご相談いただけます。稲垣屋葬儀店の相談は何度でも無料です。",
  },
  {
    q: "菩提寺のことがよく分からない場合はどうすればよいですか？",
    a: "菩提寺とは、ご先祖のお墓があるお寺のことです。まず「ご先祖のお墓がどこにあるか」を確認されることをお勧めします。菩提寺がある場合は、葬儀の際にそのお寺の住職に連絡する必要があります。分からない場合も稲垣屋葬儀店にご相談ください。",
  },
  {
    q: "緊急時（深夜・早朝）でも相談できますか？",
    a: "はい、稲垣屋葬儀店は24時間365日対応しています。深夜・早朝のご逝去や、急なご相談も遠慮なくお電話ください（03-3690-0870）。「もしものとき」はいつ訪れるか分かりません。いつでもご連絡いただけます。",
  },
];

export default function ChecklistPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="事前相談で確認すること"
        subtitle="相談前に知っておくとよいこと"
        en="CONSULTATION CHECKLIST"
      />
      <Breadcrumb
        items={[
          { label: "事前相談", href: "/consultation" },
          { label: "相談チェックリスト" },
        ]}
      />

      {/* Intro */}
      <section className="py-20 md:py-28 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">WHAT TO ASK</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              事前相談でよく聞かれることを整理しました
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp className="mb-16">
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose">
              <p>
                「何を聞けばよいか分からない」という方のために、稲垣屋葬儀店への事前相談でよく確認されることをチェックリストにまとめました。相談前に目を通しておくと、より充実した相談ができます。
              </p>
              <p>
                ただし、リストの全項目を準備しておく必要はありません。「費用のことだけ聞きたい」「どんな形式があるか知りたいだけ」という段階でも、お気軽に<Link href="/consultation" className="text-[#5c4a80] underline underline-offset-2 hover:text-[#453869] transition-colors">事前相談</Link>をご利用ください。稲垣屋葬儀店では、何度でも無料でご相談いただけます。
              </p>
              <p>
                事前に確認しておくことで、「もしものとき」に慌てず、ご家族全員が落ち着いて対応できます。また、<Link href="/consultation/preparation" className="text-[#5c4a80] underline underline-offset-2 hover:text-[#453869] transition-colors">葬儀の事前準備</Link>についての詳しいご案内もご覧ください。
              </p>
            </div>
          </FadeInUp>

          {/* Checklist */}
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">CHECKLIST</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              確認しておきたい10のこと
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-16">
            {checklistItems.map((item) => (
              <StaggerItem key={item.num}>
                <div className="flex items-start gap-5 py-7">
                  <span className="text-[#c9a55a] text-sm font-light tracking-widest shrink-0 mt-0.5" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-[#312852] text-base tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>
                      {item.title}
                    </h3>
                    <p className="text-[#4a4a4a] text-base leading-relaxed pl-4 border-l border-[#c9a55a]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Reassurance */}
          <FadeInUp className="mb-16">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">OUR STANCE</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              稲垣屋葬儀店では何でもお答えします
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mb-8" />
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose">
              <p>
                「こんなことを聞いてよいのか」というご遠慮は不要です。葬儀に関することであれば、どんな疑問でもお気軽にお聞かせください。稲垣屋葬儀店では、<Link href="/consultation/no-pressure" className="text-[#5c4a80] underline underline-offset-2 hover:text-[#453869] transition-colors">強引な勧誘は一切行わない</Link>スタンスを徹底しています。
              </p>
              <p>
                費用についても正直にお答えします。<Link href="/consultation/cost" className="text-[#5c4a80] underline underline-offset-2 hover:text-[#453869] transition-colors">費用の事前相談</Link>では、目安となる金額を分かりやすくご説明します。葛飾区民の方は区民葬儀制度についてもご確認ください。また、<Link href="/faq" className="text-[#5c4a80] underline underline-offset-2 hover:text-[#453869] transition-colors">よくあるご質問</Link>もあわせてご参照ください。
              </p>
            </div>
          </FadeInUp>

          {/* Related links */}
          <FadeInUp>
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">RELATED</p>
            <h2 className="text-[#312852] text-xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              関連ページ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mb-7" />
            <ul className="space-y-3">
              {[
                { label: "事前相談について", href: "/consultation" },
                { label: "葬儀の事前準備", href: "/consultation/preparation" },
                { label: "費用の事前相談", href: "/consultation/cost" },
                { label: "強引な営業をしない事前相談", href: "/consultation/no-pressure" },
                { label: "よくあるご質問", href: "/faq" },
                { label: "お問い合わせ", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-flex items-center gap-2 text-[#5c4a80] text-base hover:text-[#453869] transition-colors group">
                    <ChevronRight size={14} className="text-[#9278be] group-hover:translate-x-0.5 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeInUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>よくあるご質問</h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <div className="py-7">
                  <p className="text-[#312852] text-base tracking-wide mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
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

      {/* Soft CTA */}
      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              まずはお気軽にご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              形式に迷っている段階でも、どんな疑問でもお気軽にどうぞ。<br />
              事前相談は無料、強引な勧誘は一切行いません。
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
