import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "葛飾区民の方へ（区民葬儀・地域情報）｜稲垣屋葬儀店",
  description:
    "葛飾区民の方が利用できる区民葬儀制度・地域の葬儀情報をご紹介します。稲垣屋葬儀店は葛飾区民葬儀の取扱店として登録されており、区民の方のご相談を承っております。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/needs/katsushika-resident" },
};

const faqs = [
  {
    q: "葛飾区民葬儀とはどのような制度ですか？",
    a: "葛飾区民葬儀は、葛飾区が提供する制度で、区が定めた内容・費用の範囲で葬儀を行える仕組みです。一般的な葬儀と比べて費用を抑えることができます。区が定めた取扱葬儀社でのみ利用できます。稲垣屋葬儀店は取扱店として登録されています。",
  },
  {
    q: "葛飾区民葬儀を利用するには、何が必要ですか？",
    a: "葛飾区民葬儀を利用するためには、故人または喪主が葛飾区民であることが条件となります。詳しい条件・手続きについては稲垣屋葬儀店までお問い合わせください。",
  },
  {
    q: "区民葬儀と通常の葬儀の違いは何ですか？",
    a: "区民葬儀は区が定めた内容・費用の範囲で行う葬儀です。内容に一定の制限がありますが、費用を抑えられます。通常の家族葬や一般葬は内容の自由度が高い分、費用は区民葬儀より高くなることが多いです。どちらが適しているかは、ご要望や状況によって異なります。",
  },
  {
    q: "稲垣屋葬儀店は葛飾区のどこにありますか？",
    a: "稲垣屋葬儀店は葛飾区内に位置しており、明治11年頃の創業以来、葛飾区の地域の皆様のご葬儀をお手伝いしてきました。地元の葬儀社として、地域の事情や慣習をよく理解したスタッフが対応します。",
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
  name: "葛飾区民の方へ（区民葬儀・地域情報）｜稲垣屋葬儀店",
  description:
    "葛飾区民の方が利用できる区民葬儀制度・地域の葬儀情報をご紹介します。稲垣屋葬儀店は葛飾区民葬儀の取扱店として登録されており、区民の方のご相談を承っております。",
  url: "https://www.inagakiyasougiten.com/needs/katsushika-resident",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "ニーズ別ご相談", item: "https://www.inagakiyasougiten.com/needs" },
      { "@type": "ListItem", position: 3, name: "葛飾区民の方へ", item: "https://www.inagakiyasougiten.com/needs/katsushika-resident" },
    ],
  },
};

export default function KatsushikaResidentPage() {
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
        title="葛飾区民の方へ"
        subtitle="区民葬儀制度と、地域の葬儀情報のご案内"
        en="KATSUSHIKA RESIDENT"
      />
      <Breadcrumb
        items={[
          { label: "こんな方へ", href: "/needs" },
          { label: "葛飾区民の方へ" },
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
              葛飾区民の方には、区民葬儀という選択肢があります
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              葛飾区民の方がご葬儀をお考えの場合、葛飾区が提供する「区民葬儀」制度をご活用いただける場合があります。区が定めた内容・費用の範囲で葬儀を行える仕組みで、費用を抑えながら一定の内容を確保できます。
            </p>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              稲垣屋葬儀店は明治11年頃の創業以来、葛飾区で長年にわたり地域の皆様のご葬儀をお手伝いしてきた葬儀社です。葛飾区民葬儀の取扱店として登録されており、区民葬儀のご利用に関するご相談も承っております。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              葛飾区の地元の葬儀社として、地域の慣習・火葬場・手続きについて精通したスタッフがご対応します。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">KUMIN FUNERAL</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              区民葬儀制度について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "区民葬儀とは",
                desc: "葛飾区が提供する制度で、区が定めた葬儀内容・費用の範囲でご葬儀を行える仕組みです。区民の方が利用できる制度で、費用を抑えることができます。",
              },
              {
                title: "利用の条件",
                desc: "故人または喪主が葛飾区民であることが主な条件です。詳しい条件や手続きについては稲垣屋葬儀店にご相談ください。",
              },
              {
                title: "区民葬儀の内容",
                desc: "区が定めた葬儀用品・サービスの範囲でご葬儀を行います。内容に一定の範囲がありますが、通常の葬儀より費用を抑えられます。",
              },
              {
                title: "稲垣屋葬儀店は取扱店",
                desc: "稲垣屋葬儀店は葛飾区民葬儀の取扱店として登録されており、区民葬儀のご案内・ご手配が可能です。ご不明な点はお気軽にご相談ください。",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3
                    className="text-[#312852] text-lg tracking-wide mb-2"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mt-8">
            <Link
              href="/plans/kumin-funeral"
              className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors"
            >
              区民葬儀プランの詳細 <ChevronRight size={13} />
            </Link>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">LOCAL INFO</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              葛飾区の葬儀に関する地域情報
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              葛飾区には区内に火葬場があり、葛飾区民は利用に際して一定の優遇を受けられる場合があります。また、葛飾区内の寺院・斎場の情報についても、地元の葬儀社として稲垣屋葬儀店が詳しくご案内できます。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              葛飾区内での葬儀をご希望の場合、会場・火葬場・斎場の選択についても、地域の事情をよく知るスタッフがサポートします。
            </p>
            <Link
              href="/katsushika-funeral"
              className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors"
            >
              葛飾区の葬儀情報 <ChevronRight size={13} />
            </Link>
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
              { href: "/plans/kumin-funeral", label: "区民葬儀プランの詳細" },
              { href: "/katsushika-funeral", label: "葛飾区の葬儀情報" },
              { href: "/needs/low-cost", label: "費用を抑えたい方へ" },
              { href: "/consultation", label: "事前相談のご案内" },
              { href: "/support/first-time", label: "はじめての葬儀をお考えの方へ" },
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
              葛飾区民葬儀について、ご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              区民葬儀の利用条件・内容・手続きについて丁寧にご案内します。稲垣屋葬儀店は24時間365日対応しております。
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
