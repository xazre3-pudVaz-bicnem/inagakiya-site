import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "小規模葬儀を希望の方へ｜葛飾区 稲垣屋葬儀店",
  description:
    "10名以下の小規模な葬儀をご希望の方へ。家族葬・一日葬など、こぢんまりとした形式で心のこもったお別れをするためのプランと会場を葛飾区の稲垣屋葬儀店がご案内します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/needs/small" },
};

const faqs = [
  {
    q: "小規模葬儀に向いているプランはどれですか？",
    a: "家族葬や一日葬が小規模葬儀に最も適しています。家族葬は数名から20名程度まで対応でき、ゆったりとした空間でお別れできます。一日葬は通夜を省略し1日で完結するため、遠方参列者が少ない場合にも最適です。",
  },
  {
    q: "小規模葬儀でも会場は借りられますか？",
    a: "はい、稲垣屋葬儀店ではご家族の人数に合った会場をご用意できます。少人数に対応した式場・ホール、またはご自宅での葬儀もご相談いただけます。人数や形式に応じて最適な場をご提案します。",
  },
  {
    q: "小規模だと、訃報を知らせる範囲が難しいですが？",
    a: "小規模葬儀の場合、訃報を知らせる範囲についてご家族で事前に話し合っておくことが大切です。葬儀後に「お別れの会」を開く方法もあります。稲垣屋葬儀店では、ご状況に合わせたご案内をしております。",
  },
  {
    q: "小規模葬儀と家族葬の違いは何ですか？",
    a: "家族葬は参列者をご家族・ご親族・ごく親しい方に限定した葬儀の形式で、人数はさまざまです。小規模葬儀は参列人数が少ない（おおよそ10名以下）ことを指すことが多く、家族葬の中でも特に小規模な形を指します。どちらも稲垣屋葬儀店でご対応可能です。",
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

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "小規模葬儀を希望の方へ｜葛飾区 稲垣屋葬儀店",
  description:
    "10名以下の小規模な葬儀をご希望の方へ。家族葬・一日葬など、こぢんまりとした形式で心のこもったお別れをするためのプランと会場を葛飾区の稲垣屋葬儀店がご案内します。",
  url: "https://www.inagakiyasougiten.com/needs/small",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "ニーズ別ご相談", item: "https://www.inagakiyasougiten.com/needs" },
      { "@type": "ListItem", position: 3, name: "小規模葬儀を希望の方へ", item: "https://www.inagakiyasougiten.com/needs/small" },
    ],
  },
};

export default function SmallPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        title="小規模葬儀を希望の方へ"
        subtitle="こぢんまりとした、心のこもったお別れのために"
        en="SMALL FUNERAL"
      />
      <Breadcrumb
        items={[
          { label: "こんな方へ", href: "/needs" },
          { label: "小規模葬儀を希望の方へ" },
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
              少人数でも、十分な葬儀ができます
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              「大勢に来てもらう葬儀ではなく、本当に親しい数名だけで行いたい」「故人も大きな式よりも小さくて温かい場を好んでいた」——そのようなご希望は、近年とても多くなっています。少人数・小規模の葬儀は、参列者のひとりひとりが故人と向き合える、深いお別れの時間を生みます。
            </p>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              稲垣屋葬儀店では、数名から数十名規模のさまざまな形の葬儀に対応しています。人数が少なくても、故人への敬意と家族の温もりを大切にした式を一緒に作り上げます。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              このページでは、小規模葬儀に適したプランや注意点をご案内します。ご不明な点はお気軽にお問い合わせください。
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
              小規模葬儀に適したプラン
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "家族葬",
                desc: "ご家族・ご親族・ごく親しい方だけで行う葬儀です。参列者を限定することで、ゆっくりと故人と向き合う時間が生まれます。通夜・告別式を2日間行う形と、一日葬として1日で行う形があります。",
                href: "/plans/family-funeral",
              },
              {
                title: "一日葬",
                desc: "通夜を省略し、告別式と火葬を1日で完結する形式です。少人数での葬儀に多く選ばれており、参列者の負担も軽減されます。",
                href: "/plans/oneday-funeral",
              },
              {
                title: "小規模葬儀のためのサポート",
                desc: "少人数だからこそ丁寧な対応が可能です。式場の広さ・花の量・返礼品の数など、実際の人数に合わせた調整が可能です。スタッフが人数に合わせた最適な提案をいたします。",
                href: "/support/small-funeral",
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
              小規模葬儀を行う際のポイント
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "案内する範囲を事前に決める",
                desc: "小規模葬儀では「誰に声をかけるか」が重要です。ご家族の中でどの範囲まで参列をご案内するかを話し合い、明確にしておくと後のトラブルを防げます。",
              },
              {
                title: "葬儀後のお知らせ方法を考える",
                desc: "お知らせできなかった方々には、葬儀後に書面や電話でご連絡するのが一般的です。必要に応じて「お別れの会」を別途設ける方もいらっしゃいます。",
              },
              {
                title: "少人数に合った式場を選ぶ",
                desc: "広い式場に少人数では寂しい印象になることも。人数に合ったコンパクトな空間を選ぶことで、温かみのある空間が生まれます。稲垣屋葬儀店では人数に応じた会場をご提案します。",
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
              { href: "/plans/family-funeral", label: "家族葬プランの詳細" },
              { href: "/plans/oneday-funeral", label: "一日葬プランの詳細" },
              { href: "/support/small-funeral", label: "小規模葬儀サポート" },
              { href: "/needs/family-only", label: "家族だけで見送りたい方へ" },
              { href: "/needs/low-cost", label: "費用を抑えたい方へ" },
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
              小規模な葬儀について、ご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              人数や形式のご希望をお聞きし、最適なプランをご提案します。稲垣屋葬儀店は24時間365日対応しております。
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
