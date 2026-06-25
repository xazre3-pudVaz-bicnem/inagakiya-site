import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "シンプルな葬儀を希望の方へ｜葛飾区 稲垣屋葬儀店",
  description:
    "儀式を簡素にし、形式よりも気持ちを大切にした葬儀をご希望の方へ。シンプルな葬儀の形式・プランを葛飾区の稲垣屋葬儀店がご案内します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/needs/simple" },
};

const faqs = [
  {
    q: "シンプルな葬儀でも、ちゃんとしたお別れができますか？",
    a: "はい、十分にできます。シンプルな形式であっても、故人への敬意と家族の気持ちを込めたお別れは可能です。形式の多さと弔いの深さは比例しません。稲垣屋葬儀店では、シンプルながらも心のこもった葬儀をご提案します。",
  },
  {
    q: "シンプルな葬儀とはどんな形式ですか？",
    a: "一般的に「火葬式（直葬）」「一日葬」が最もシンプルな形式です。火葬式は通夜・告別式を省き、直接火葬を行います。一日葬は通夜を省略し、告別式と火葬を1日で行います。どちらも費用を抑えられ、ご家族の負担も少ない形式です。",
  },
  {
    q: "シンプルにしたいが、宗教者（僧侶など）は呼べますか？",
    a: "はい、呼ぶことができます。一日葬であれば宗教者に読経をお願いすることが可能です。火葬式であっても、炉前での読経をお願いするケースもあります。ご希望に応じて対応しますのでご相談ください。",
  },
  {
    q: "故人の希望でシンプルにしたいのですが、親族の反対が心配です",
    a: "ご家族や親族のご意見が異なる場合は、事前に十分に話し合うことが大切です。故人の意思（エンディングノートや遺言など）があれば、それを示すことで理解を得やすくなります。稲垣屋葬儀店でも、ご家族の調整についてご相談を承っております。",
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

export default function SimplePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        title="シンプルな葬儀を希望の方へ"
        subtitle="形よりも気持ちを大切に——シンプルなお別れのために"
        en="SIMPLE FUNERAL"
      />
      <Breadcrumb
        items={[
          { label: "こんな方へ", href: "/needs" },
          { label: "シンプルな葬儀を希望の方へ" },
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
              形式よりも、気持ちを大切に
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              「故人も、大げさな式よりシンプルに送ってほしいと言っていた」「儀式よりも、ご家族が気持ちよくお別れできることを優先したい」——シンプルな葬儀を希望される理由はさまざまです。
            </p>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              葬儀の形式が簡素であることと、お別れの深さは関係ありません。シンプルな式でも、故人への愛情と感謝の気持ちを込めることは十分にできます。稲垣屋葬儀店では、ご希望に合わせたシンプルで心のこもった葬儀をご提案します。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              このページでは、シンプルな葬儀に適したプランと、選ぶ際のポイントをご案内します。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">PLANS</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              シンプルな葬儀に適したプラン
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "火葬式（直葬）",
                desc: "通夜・告別式を行わず、ご安置後に直接火葬場へ搬送する最もシンプルな形式です。費用を最小限に抑えながら、ご家族だけの静かなお別れが実現できます。",
                href: "/plans/cremation",
              },
              {
                title: "一日葬",
                desc: "お通夜を省略し、告別式と火葬を1日で完結する形式です。宗教者を招いて一定の儀式を行いながらも、2日間の式よりシンプルに行えます。",
                href: "/plans/oneday-funeral",
              },
            ].map((plan) => (
              <StaggerItem key={plan.title}>
                <div className="py-7">
                  <h3
                    className="text-[#312852] text-lg tracking-wide mb-2"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    {plan.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-base leading-relaxed mb-3">{plan.desc}</p>
                  <Link
                    href={plan.href}
                    className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors"
                  >
                    詳細を見る <ChevronRight size={13} />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">POINTS</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              シンプルな葬儀を選ぶ際のポイント
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "故人の意思を確認・記録しておく",
                desc: "「シンプルに送りたい」という故人の意思がある場合は、エンディングノートや遺言として残しておくと、ご家族間の話し合いがスムーズになります。",
              },
              {
                title: "ご家族間で事前に話し合う",
                desc: "シンプルな形式を希望する場合、ご家族全員が納得している状態で進めることが大切です。親族の中に異なる意見がある場合は、事前に十分な対話を持ちましょう。",
              },
              {
                title: "シンプルでも、お別れの場は大切に",
                desc: "形式をシンプルにした分、お別れの言葉・花・思い出の品など、気持ちを表す工夫をすることで、より心に残る葬儀になります。スタッフが一緒に考えます。",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3
                    className="text-[#312852] text-base tracking-wide mb-2"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
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
              { href: "/plans/cremation", label: "火葬式（直葬）プランの詳細" },
              { href: "/plans/oneday-funeral", label: "一日葬プランの詳細" },
              { href: "/needs/no-wake", label: "お通夜なしで葬儀をしたい方へ" },
              { href: "/needs/family-only", label: "家族だけで見送りたい方へ" },
              { href: "/needs/low-cost", label: "費用を抑えたい方へ" },
              { href: "/needs/no-religion", label: "無宗教で葬儀をしたい方へ" },
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
              シンプルな葬儀について、ご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              形式を省きながらも、心のこもったお別れをご一緒に考えます。稲垣屋葬儀店は24時間365日対応しております。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 group w-full sm:w-auto justify-center"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                <MessageCircle size={17} />お問い合わせ<ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 border border-[#9278be] text-[#5c4a80] hover:bg-[#ede7f6] px-8 py-4 tracking-wider transition-colors duration-300 w-full sm:w-auto justify-center"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                事前相談について
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
