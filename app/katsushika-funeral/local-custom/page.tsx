import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "葛飾区で葬儀を行う際の地域事情と相談ポイント｜稲垣屋葬儀店",
  description:
    "葛飾区で葬儀を行う際の地域事情と相談ポイント。葛飾区の斎場・区民葬儀制度・地域の習慣について稲垣屋葬儀店が丁寧にご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/katsushika-funeral/local-custom" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "葛飾区の葬儀事情には特徴がありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "葛飾区では仏式の葬儀が多く行われています。また、葛飾区が設けた「区民葬儀制度」があり、葛飾区民の方が費用を抑えた葬儀を行うことができます。地域によって寺院・菩提寺との関係が深いケースも多く、葬儀の形式を決める前に菩提寺に相談することをお勧めしています。稲垣屋葬儀店は創業明治11年頃より葛飾区に根付いており、地域の事情をよく知っています。",
      },
    },
    {
      "@type": "Question",
      name: "葛飾区民葬儀制度とは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "葛飾区民葬儀とは、葛飾区が設けた葬儀制度で、葛飾区民の方が葛飾区指定の取扱店を通じて利用できます。定められた内容の葬儀を一定の費用の範囲内で行うことができます。稲垣屋葬儀店は葛飾区指定の区民葬儀取扱店として認定されており、制度の申請手続きもサポートします。",
      },
    },
    {
      "@type": "Question",
      name: "葛飾区の斎場・火葬場についても相談できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、相談いただけます。葛飾区内の斎場・火葬場の状況・予約の取り方・アクセスなどについて、地域密着の葬儀社として詳しくご案内できます。葛飾区内の火葬場の混み具合や、斎場の特徴なども踏まえてご提案します。",
      },
    },
    {
      "@type": "Question",
      name: "葛飾区での葬儀で相談すべきことは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "主に以下の点を相談されることをお勧めします。菩提寺の有無と宗派の確認、葬儀の形式（家族葬・一日葬・火葬式・区民葬儀など）、参列者の規模、費用の予算、安置場所（自宅または安置施設）、斎場の希望です。稲垣屋葬儀店では事前相談（無料）でこれらをひとつひとつ一緒に考えます。",
      },
    },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "葛飾区で葬儀を行う際の地域事情と相談ポイント",
  description:
    "葛飾区で葬儀を行う際の地域事情と相談ポイント。葛飾区の斎場・区民葬儀制度・地域の習慣について稲垣屋葬儀店が丁寧にご説明します。",
  url: "https://www.inagakiyasougiten.com/katsushika-funeral/local-custom",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葛飾区の葬儀", item: "https://www.inagakiyasougiten.com/katsushika-funeral" },
      { "@type": "ListItem", position: 3, name: "地域事情と相談ポイント", item: "https://www.inagakiyasougiten.com/katsushika-funeral/local-custom" },
    ],
  },
};

export default function LocalCustomPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="葛飾区で葬儀を行う際の地域事情と相談ポイント"
        subtitle="地域に根付いた葬儀社として、葛飾区の事情をご説明します"
        en="LOCAL INFORMATION"
      />
      <Breadcrumb
        items={[
          { label: "葛飾区の葬儀", href: "/katsushika-funeral" },
          { label: "地域事情と相談ポイント" },
        ]}
      />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">LOCAL INFORMATION</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              葛飾区の葬儀事情
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp>
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose">
              <p>
                葛飾区は東京東部に位置し、下町の文化・人情が色濃く残る地域です。葬儀においては仏式が多く、菩提寺との関係が深いご家庭も多くあります。また、葛飾区が設けた「区民葬儀制度」は、葛飾区民が費用を抑えた葬儀を行える制度として利用されています。
              </p>
              <p>
                稲垣屋葬儀店は創業明治11年頃より葛飾区堀切に根付いており、地域の斎場・火葬場の状況、菩提寺との関係、地域の慣習について熟知しています。「葛飾区での葬儀をどう進めればよいか」という疑問にも、地元の視点からお答えします。
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">KUMIN FUNERAL</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              葛飾区民葬儀制度について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp>
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose mb-6">
              <p>
                葛飾区民葬儀制度は、葛飾区が設けた葬儀制度です。葛飾区民の方が葛飾区の指定する取扱店を通じて申し込むことで、定められた内容の葬儀を一定の費用内で行うことができます。
              </p>
              <p>
                稲垣屋葬儀店は葛飾区指定の区民葬儀取扱店として認定されています。制度の詳細説明・申請手続きのサポートまで、まとめてお任せいただけます。「区民葬儀制度を使いたいが、どうすればよいか分からない」という方も、お気軽にご相談ください。
              </p>
            </div>
            <Link href="/plans/kumin-funeral" className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group">
              区民葬儀制度の詳細を見る
              <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">CONSULTATION</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              相談ポイント・何を相談すればよいか
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "菩提寺の有無と宗派",
                body: "菩提寺がある場合は、葬儀の形式を決める前に菩提寺に相談することをお勧めします。宗派によって葬儀の作法・読経の形式が異なります。菩提寺がない場合は、宗教者の手配についてもご相談ください。",
              },
              {
                title: "葬儀の形式（家族葬・区民葬儀など）",
                body: "参列者の人数・費用のご予算・ご家族の希望に応じて、最適な形式をご提案します。家族葬・一日葬・火葬式・区民葬儀など、葛飾区の実情に合わせてご案内します。",
              },
              {
                title: "費用の目安",
                body: "葬儀の総費用の目安を事前相談でご説明します。葬儀社の料金だけでなく、火葬場の使用料・宗教者へのお礼・飲食費なども含めた概算をお伝えします。",
              },
              {
                title: "安置場所・斎場の希望",
                body: "ご遺体の安置場所（自宅または安置施設）と斎場の選択についてもご相談いただけます。葛飾区の斎場の状況・予約の取り方なども含めてご案内します。",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3 className="text-[#312852] text-base tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-sm leading-loose">{item.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeInUp className="mt-6">
            <div className="flex flex-wrap gap-4">
              <Link href="/consultation" className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group">
                事前相談について
                <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/katsushika-funeral" className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group">
                葛飾区の葬儀トップへ
                <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">PRE-CONSULTATION</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              事前相談のすすめ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp>
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose">
              <p>
                「もしものとき」に備えて、事前に葬儀社に相談しておくことをお勧めします。費用・形式・流れについて事前に把握しておくことで、実際にご逝去があった際に冷静に対応できます。
              </p>
              <p>
                稲垣屋葬儀店では事前相談・お見積もりを完全無料で承っています。相談したからといって必ず依頼する義務はなく、強引な勧誘も一切行いません。「まず話を聞いてみたい」という段階でのご相談も歓迎しています。
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              葛飾区の地域事情に関するよくあるご質問
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
