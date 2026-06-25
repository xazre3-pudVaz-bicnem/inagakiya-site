import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "区民葬儀の事前相談｜葛飾区民の方へ｜稲垣屋葬儀店",
  description:
    "葛飾区民葬儀の事前相談。区民葬儀制度の内容・申請方法・費用について、葛飾区指定取扱店の稲垣屋葬儀店が丁寧にご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/consultation/kumin-funeral" },
};

const consultationItems = [
  {
    title: "制度の詳細確認",
    desc: "区民葬儀制度の内容・利用条件・含まれるサービスの範囲について、分かりやすくご説明します。",
  },
  {
    title: "対象者の確認",
    desc: "葛飾区に住民登録されている方が対象となります。具体的な対象条件を事前相談でご確認いただけます。",
  },
  {
    title: "費用目安の説明",
    desc: "区民葬儀を利用した場合の費用目安と、内訳についてご説明します。一般葬儀との費用比較もご案内します。",
  },
  {
    title: "申請手続きのサポート",
    desc: "区民葬儀の申請に必要な書類・手続きの流れを事前にご説明します。いざというときにスムーズに進められます。",
  },
];

const faqs = [
  {
    q: "区民葬儀は葛飾区民以外でも利用できますか？",
    a: "区民葬儀制度は、基本的に葛飾区に住民登録されている方を対象としています。対象者の詳細な条件については、事前相談でご確認ください。稲垣屋葬儀店は葛飾区指定の区民葬儀取扱店として、区民葬儀に関するご相談に対応しております。",
  },
  {
    q: "区民葬儀を利用する場合、事前に申請が必要ですか？",
    a: "区民葬儀の手続きは、ご逝去後に行います。事前に「区民葬儀を使いたい」という意思確認や情報収集のためにご相談いただくことは可能です。稲垣屋葬儀店では区民葬儀の申請手続きをサポートします。",
  },
  {
    q: "区民葬儀と一般の家族葬を組み合わせることはできますか？",
    a: "区民葬儀制度は一定の内容が定められた葬儀の枠組みです。その中でご家族のご希望に沿った葬儀を実現するための調整は可能な部分もあります。詳細は事前相談でご説明しますので、お気軽にご連絡ください。",
  },
  {
    q: "区民葬儀と一般葬儀、費用の差はどのくらいですか？",
    a: "費用は個々の状況によって異なります。区民葬儀は葛飾区の定めた基準に基づく費用設定があります。一般葬儀との比較については、事前相談で具体的な費用目安をご説明します。「ご予算に合わせた形式」を一緒に考えますので、お気軽にご相談ください。",
  },
];

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "区民葬儀の事前相談",
  description:
    "葛飾区民葬儀の事前相談。区民葬儀制度の内容・申請方法・費用について、葛飾区指定取扱店の稲垣屋葬儀店が丁寧にご説明します。",
  url: "https://www.inagakiyasougiten.com/consultation/kumin-funeral",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "事前相談", item: "https://www.inagakiyasougiten.com/consultation" },
      { "@type": "ListItem", position: 3, name: "区民葬儀の相談", item: "https://www.inagakiyasougiten.com/consultation/kumin-funeral" },
    ],
  },
};

export default function KuminFuneralConsultationPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="区民葬儀の事前相談"
        subtitle="葛飾区民葬儀制度について丁寧にご説明します"
        en="KUMIN FUNERAL CONSULTATION"
      />
      <Breadcrumb
        items={[
          { label: "事前相談", href: "/consultation" },
          { label: "区民葬儀の相談" },
        ]}
      />

      {/* Intro */}
      <section className="py-20 md:py-28 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ABOUT KUMIN FUNERAL</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              区民葬儀制度とは
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp className="mb-16">
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose">
              <p>
                区民葬儀制度とは、葛飾区が指定する葬儀社と連携して、区民の方が一定の内容・費用で葬儀を行えるようにした制度です。葛飾区に住民登録されている方が対象となります。
              </p>
              <p>
                葬儀費用を少しでも抑えたい方や、「区民葬儀という制度があると聞いたが詳しく知りたい」という方に向けて、稲垣屋葬儀店では丁寧にご説明しています。まずは<Link href="/consultation" className="text-[#5c4a80] underline underline-offset-2 hover:text-[#453869] transition-colors">事前相談</Link>でご確認ください。
              </p>
              <p>
                区民葬儀制度の詳細な内容（プランに含まれるもの・費用・申請方法）については、<Link href="/plans/kumin-funeral" className="text-[#5c4a80] underline underline-offset-2 hover:text-[#453869] transition-colors">区民葬儀プランのページ</Link>もあわせてご覧ください。
              </p>
            </div>
          </FadeInUp>

          {/* Who can use */}
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ELIGIBILITY</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              対象者について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp className="mb-16">
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose">
              <p>
                区民葬儀制度は、葛飾区に住民登録されている方が亡くなった場合、またはご遺族が葛飾区民である場合を主な対象としています。ただし、対象条件の詳細は確認が必要です。
              </p>
              <p>
                「自分（またはご親族）が対象になるかどうか分からない」という段階でも、お気軽にお問い合わせください。稲垣屋葬儀店が対象かどうかをご確認します。費用面での詳しい内容は<Link href="/cost/kumin-funeral" className="text-[#5c4a80] underline underline-offset-2 hover:text-[#453869] transition-colors">区民葬儀の費用</Link>のページもご参照ください。
              </p>
            </div>
          </FadeInUp>

          {/* What consultation covers */}
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">WHAT WE EXPLAIN</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              事前相談でできること
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-16">
            {consultationItems.map((item) => (
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

          {/* Designated store */}
          <FadeInUp className="mb-16">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">DESIGNATED STORE</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              稲垣屋葬儀店は葛飾区指定の区民葬儀取扱店です
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mb-8" />
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose">
              <p>
                稲垣屋葬儀店は、葛飾区が指定する区民葬儀取扱店です。区民葬儀制度に精通したスタッフが、制度の内容・申請手続き・費用について丁寧にご説明します。
              </p>
              <p>
                区民葬儀と一般葬儀の違いについては<Link href="/compare/kumin-vs-general" className="text-[#5c4a80] underline underline-offset-2 hover:text-[#453869] transition-colors">区民葬儀と一般葬儀の比較</Link>もご参照ください。また、葬儀全般のご質問は<Link href="/faq" className="text-[#5c4a80] underline underline-offset-2 hover:text-[#453869] transition-colors">よくあるご質問</Link>をご覧ください。
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
                { label: "区民葬儀プランの詳細", href: "/plans/kumin-funeral" },
                { label: "区民葬儀の費用", href: "/cost/kumin-funeral" },
                { label: "区民葬儀と一般葬儀の比較", href: "/compare/kumin-vs-general" },
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
