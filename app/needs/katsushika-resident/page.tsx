import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";
import KuminLink from "@/app/components/KuminLink";

export const metadata: Metadata = pageMetadata({
  title: "葛飾区民の方へ（区民葬儀・地域情報）｜稲垣屋葬儀店",
  description:
    "葛飾区民の方もご利用いただける区民葬儀制度（東京23区共通）・地域の葬儀情報をご紹介します。稲垣屋葬儀店は葛飾区民葬儀の取扱店として登録されており、区民の方のご相談を承っております。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/needs/katsushika-resident" },
});

const faqs = [
  {
    q: "区民葬儀とはどのような制度ですか？",
    a: "区民葬儀は、東京23区に共通の制度で、祭壇・霊柩車・火葬・骨つぼの料金が23区共通の協定料金となっている仕組みです。一般的な葬儀と比べて費用を抑えることができます。区民葬儀の取扱店でのみ利用できます。稲垣屋葬儀店は取扱店として登録されています。",
  },
  {
    q: "区民葬儀を利用するには、何が必要ですか？",
    a: "区民葬儀を利用するためには、故人または喪主が東京23区内にお住まいであることが条件となります（葛飾区にお住まいの方ももちろん対象です）。ご利用の際は取扱店に区民葬儀を利用したい旨をお伝えください。区民葬儀券は、死亡届の提出と併せて申請します。詳しい条件・手続きについては稲垣屋葬儀店までお問い合わせください。",
  },
  {
    q: "区民葬儀と通常の葬儀の違いは何ですか？",
    a: "区民葬儀は葬儀の形式ではなく、祭壇・霊柩車・火葬・骨つぼの4品目に23区共通の協定料金が適用される制度です。4品目の中から必要なものを選んで組み合わせることができ、それ以外の費用（式場使用料・飲食・返礼品など）は別途となります。稲垣屋葬儀店のプランはすべて区民葬儀をご利用いただけますので、家族葬や一般葬などご希望の形式を選んだうえで、区民葬儀を利用するかどうかをご検討いただけます。",
  },
  {
    q: "区民葬儀を利用した場合、火葬料の助成はありますか？",
    a: "はい。四ツ木斎場など東京博善の6斎場（町屋・落合・代々幡・四ツ木・桐ケ谷・堀ノ内）は2026年（令和8年）3月末で区民葬儀の取り扱いを終了したため、これらの斎場では区民葬儀の火葬券は使えません。その代わりに、2026年（令和8年）4月1日から当面3年間、23区共通の火葬料金助成が設けられています。区民葬儀の祭壇券（棺のみを含む）または霊柩車券を利用し、6斎場のいずれかで最も低額の区分の火葬料（大人87,000円）を支払った場合が対象で、助成額は大人上限27,000円・小人（満6歳以下）上限15,000円です。申請先は故人が住民登録をしていた区（故人が23区外にお住まいだった場合は、火葬料を支払った方がお住まいの区）で、火葬日の翌日から2年以内に申請します。助成額の算定は区によって異なる場合がありますので、詳しくは区役所にご確認ください。",
  },
  {
    q: "稲垣屋葬儀店は葛飾区のどこにありますか？",
    a: "稲垣屋葬儀店は葛飾区内に位置する葬儀社です。明治11年頃に足立区千住で創業し、葛飾区では60年以上にわたり地域の皆様のご葬儀をお手伝いしてきました。地元の葬儀社として、地域の事情や慣習をよく理解したスタッフが対応します。",
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
    "葛飾区民の方もご利用いただける区民葬儀制度（東京23区共通）・地域の葬儀情報をご紹介します。稲垣屋葬儀店は葛飾区民葬儀の取扱店として登録されており、区民の方のご相談を承っております。",
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
              葛飾区民の方がご葬儀をお考えの場合、「<KuminLink className="mx-0.5">区民葬儀</KuminLink>」制度をご活用いただける場合があります。区民葬儀は葛飾区を含む東京23区に共通の制度で、祭壇・霊柩車・火葬・骨つぼを23区共通の協定料金で利用できる仕組みです。必要なものを選んで組み合わせられるため、費用を抑えながらご葬儀を行えます。
            </p>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              稲垣屋葬儀店は明治11年頃に足立区千住で創業し、葛飾区では60年以上にわたり地域の皆様のご葬儀をお手伝いしてきた葬儀社です。葛飾区民葬儀の取扱店として登録されており、区民葬儀のご利用に関するご相談も承っております。
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
                desc: "東京23区に共通の制度で、祭壇・霊柩車・火葬・骨つぼの4品目に23区共通の協定料金が適用される仕組みです。23区にお住まいの方が利用できる制度で、費用を抑えることができます。",
              },
              {
                title: "利用の条件",
                desc: "故人または喪主が東京23区内にお住まいであることが主な条件です（葛飾区にお住まいの方も対象です）。ご利用の際は取扱店に区民葬儀を利用したい旨をお伝えいただき、区民葬儀券は死亡届の提出と併せて申請します。詳しい条件や手続きについては稲垣屋葬儀店にご相談ください。",
              },
              {
                title: "区民葬儀の内容",
                desc: "協定料金が適用されるのは、祭壇・霊柩車・火葬・遺骨収納容器（骨つぼ）の4品目です。この中から必要なものだけを選んで組み合わせることができ、それ以外の費用（式場使用料・飲食・返礼品など）は別途となります。稲垣屋葬儀店のプランはすべて区民葬儀をご利用いただけます。",
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
              葛飾区には区立の火葬場はありませんが、区内の白鳥に、東京博善が運営する民営の火葬場「四ツ木斎場」（式場併設）があります。四ツ木斎場など東京博善の6斎場は2026年（令和8年）3月末で区民葬儀の取り扱いを終了したため、これらの斎場では区民葬儀の火葬券は使えませんが、代わりに23区共通の火葬料金助成（大人上限27,000円）があります（詳しくは下記のよくあるご質問をご覧ください）。また、葛飾区内の寺院・斎場の情報についても、地元の葬儀社として稲垣屋葬儀店が詳しくご案内できます。
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
              区民葬儀について、ご相談ください
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
