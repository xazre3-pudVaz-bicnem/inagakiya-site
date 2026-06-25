import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "葬儀の事前準備｜いつ・何を準備すべきか｜葛飾区 稲垣屋葬儀店",
  description:
    "葬儀の事前準備について。いつから・何を準備すべきか、家族での話し合い・菩提寺の確認・費用の検討など、今からできることをご案内します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/consultation/preparation" },
};

const preparationItems = [
  {
    title: "菩提寺の確認",
    desc: "先祖代々のお寺（菩提寺）がある場合、葬儀の際には菩提寺の住職に読経をお願いするのが一般的です。菩提寺の名称・連絡先・宗派を事前に確認しておきましょう。",
  },
  {
    title: "費用の把握",
    desc: "葬儀費用は形式によって大きく異なります。火葬式・家族葬・一日葬・一般葬それぞれの概算を事前に把握しておくと、いざというときに慌てずに対応できます。",
  },
  {
    title: "形式の検討",
    desc: "どのような形式でお別れしたいか、故人やご家族の希望を確認しておきましょう。「小規模で親族だけで見送りたい」「会社関係者も呼びたい」など、希望の規模感を共有しておくことが大切です。",
  },
  {
    title: "参列者の範囲",
    desc: "参列をお願いする方の範囲を事前に検討しておきましょう。葬儀の規模・費用・会場の選定にも影響します。連絡先リストをまとめておくと、いざというときに役立ちます。",
  },
  {
    title: "安置場所の確認",
    desc: "ご逝去後、葬儀まで数日間はご遺体を安置する必要があります。自宅安置が可能かどうか、または葬儀社の安置施設を利用するかを事前に確認しておきましょう。",
  },
  {
    title: "遺影の準備",
    desc: "葬儀で使用する遺影写真を事前に選んでおくと安心です。近年のスマートフォンで撮影した写真でも対応できます。「この写真を使ってほしい」とご本人が決めておくことで、ご家族の負担が軽減されます。",
  },
  {
    title: "費用の積立",
    desc: "葬儀費用を事前に準備しておくことも重要な事前準備のひとつです。生命保険・葬儀費用の積立・貯蓄など、費用の手当てについて家族で話し合っておきましょう。",
  },
];

const faqs = [
  {
    q: "いつから事前準備を始めるべきですか？",
    a: "早ければ早いほど良いですが、特に「もしものとき」が心配になった段階や、ご親族の高齢化が進んできた頃が相談のきっかけになります。稲垣屋葬儀店では形式に迷っている段階でもご相談いただけますので、まずはお気軽にお問い合わせください。急なご逝去では準備が整っていないことがほとんどです。元気なうちにご家族で話し合い、葬儀社に相談しておくことで、「もしものとき」も落ち着いて対応できます。",
  },
  {
    q: "菩提寺がない場合の準備はどうすればよいですか？",
    a: "菩提寺がない場合でも事前準備は可能です。宗教者を呼ばない無宗教葬（自由葬）という形式もあります。また、ご希望があれば稲垣屋葬儀店がお寺をご紹介することも可能です。まず「どのような形式で見送りたいか」をご家族で話し合い、その内容を事前相談でお聞かせいただければ、適切なご案内ができます。",
  },
  {
    q: "事前に費用の見積もりを取ることはできますか？",
    a: "はい、事前相談の際に費用の概算をご説明することができます。葬儀費用はプランや規模によって異なりますが、火葬式・家族葬・一日葬・一般葬それぞれの目安をご説明します。また、葛飾区民の方は区民葬儀制度を活用できる場合があります。見積もり相談は無料ですので、お気軽にご連絡ください。",
  },
  {
    q: "遺影はいつ準備すればよいですか？",
    a: "生前に「これを遺影に使ってほしい」とご本人やご家族が決めておくと、急なご逝去のときに慌てずに対応できます。近年のスマートフォンの写真でも対応できますが、準備されている場合はその写真をお持ちいただくとスムーズです。事前相談でご相談いただければ、どのような写真が遺影に適しているかもアドバイスします。",
  },
];

export default function PreparationPage() {
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
        title="葬儀の事前準備について"
        subtitle="いつから・何を準備すべきか"
        en="PRE-PREPARATION"
      />
      <Breadcrumb
        items={[
          { label: "事前相談", href: "/consultation" },
          { label: "葬儀の事前準備" },
        ]}
      />

      {/* Intro section */}
      <section className="py-20 md:py-28 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">WHY PREPARE</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              事前準備の重要性
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp className="mb-16">
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose">
              <p>
                葬儀はある日突然のことが多く、準備が整っていない状態で対応しなければならないケースがほとんどです。「何から手をつければよいか分からない」「費用の目安を知りたかった」という声を多くいただきます。
              </p>
              <p>
                事前準備を整えておくことで、「もしものとき」も慌てずに対応できます。また、ご家族で事前に話し合うきっかけにもなり、故人の希望に沿った葬儀が実現しやすくなります。
              </p>
              <p>
                稲垣屋葬儀店では、<Link href="/consultation" className="text-[#5c4a80] underline underline-offset-2 hover:text-[#453869] transition-colors">事前相談</Link>を無料で承っています。「形式に迷っている」「費用の見当がつかない」という段階でも、お気軽にご相談ください。また、<Link href="/consultation/family-meeting" className="text-[#5c4a80] underline underline-offset-2 hover:text-[#453869] transition-colors">ご家族での話し合い</Link>のサポートも行っています。
              </p>
            </div>
          </FadeInUp>

          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">CHECKLIST</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              今からできる7つの事前準備
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-16">
            {preparationItems.map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3 className="text-[#312852] text-base tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-base leading-relaxed pl-4 border-l border-[#c9a55a]">
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">RELATED</p>
            <h2 className="text-[#312852] text-xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              関連ページ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp className="mb-16">
            <ul className="space-y-3">
              {[
                { label: "費用の事前相談", href: "/consultation/cost" },
                { label: "家族での話し合いについて", href: "/consultation/family-meeting" },
                { label: "家族葬のプランについて", href: "/plans/family-funeral" },
                { label: "よくあるご質問", href: "/faq" },
                { label: "お問い合わせ・事前相談", href: "/contact" },
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
