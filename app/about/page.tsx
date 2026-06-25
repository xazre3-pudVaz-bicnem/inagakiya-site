import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import Breadcrumb from "../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "稲垣屋葬儀店について｜葛飾区堀切の地域密着葬儀社",
  description:
    "稲垣屋葬儀店は東京都葛飾区堀切の葬儀社です。葬祭ディレクター1級取得・区民葬儀取扱店。創業明治11年頃より、葛飾区のご家族の大切なお別れをお手伝いしています。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/about" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "稲垣屋葬儀店はいつ創業しましたか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "創業明治11年頃より、葛飾区堀切の地に根付いた葬儀社です。100年以上にわたり地域の皆さまのご葬儀をお手伝いしてきた歴史があります。",
      },
    },
    {
      "@type": "Question",
      name: "葛飾区民葬儀取扱店とはどのような認定ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "葛飾区が指定する区民葬儀取扱店です。葛飾区民の方は区民葬儀制度を利用することで費用を抑えながら質の高い葬儀を行うことができます。",
      },
    },
    {
      "@type": "Question",
      name: "事前相談は無料で受けられますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、事前相談は無料で承っております。費用・流れ・希望のスタイルなど、どんな疑問もお気軽にご相談ください。",
      },
    },
    {
      "@type": "Question",
      name: "代表の飯田雄生はどのような資格を持っていますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "葬祭ディレクター1級（厚生労働省認定）および認定飯田葬儀相談員の資格を取得しており、葬儀全般に関する深い知識と専門的な相談対応が可能です。",
      },
    },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "稲垣屋葬儀店について｜葛飾区堀切の地域密着葬儀社",
  description:
    "稲垣屋葬儀店は東京都葛飾区堀切の葬儀社です。葬祭ディレクター1級取得・区民葬儀取扱店。創業明治11年頃より、葛飾区のご家族の大切なお別れをお手伝いしています。",
  url: "https://www.inagakiyasougiten.com/about",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "稲垣屋葬儀店について", item: "https://www.inagakiyasougiten.com/about" },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      <PageHero
        title="稲垣屋葬儀店について"
        subtitle="葛飾区堀切に根付いた、信頼の葬儀社"
        en="ABOUT US"
      />
      <Breadcrumb items={[{ label: "稲垣屋葬儀店について" }]} />

      {/* 会社概要 */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-12">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COMPANY PROFILE</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              会社概要
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <dl className="divide-y divide-[#e8ddf4] border-t border-[#e8ddf4]">
              {[
                { label: "会社名", value: "稲垣屋葬儀店" },
                { label: "代表", value: "飯田 雄生" },
                { label: "所在地", value: "東京都葛飾区堀切6-33-4" },
                { label: "電話", value: "03-3690-0870", tel: true },
                { label: "営業時間", value: "24時間365日対応" },
                { label: "創業", value: "明治11年頃" },
                { label: "資格", value: "葬祭ディレクター1級、葛飾区民葬儀取扱店" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col sm:flex-row sm:gap-8 py-5">
                  <dt
                    className="text-[#9278be] text-sm tracking-[0.15em] shrink-0 w-28 mb-1 sm:mb-0"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    {item.label}
                  </dt>
                  <dd className="text-[#312852] text-base leading-relaxed">
                    {item.tel ? (
                      <a
                        href={`tel:${(item.value as string).replace(/-/g, "")}`}
                        className="text-[#312852] hover:text-[#5c4a80] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-12">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">OUR STORY</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              創業明治11年頃からの歴史
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            <StaggerItem>
              <div className="py-7">
                <h3
                  className="text-[#312852] text-xl tracking-wide mb-4"
                  style={{ fontFamily: "var(--font-mincho)" }}
                >
                  葛飾区堀切に根付いてきた歩み
                </h3>
                <p className="text-[#4a4a4a] text-base md:text-lg leading-loose">
                  稲垣屋葬儀店は、創業明治11年頃より東京都葛飾区堀切の地に根付いた葬儀社です。以来100年以上にわたり、地域の皆さまの大切なお別れをお手伝いしてまいりました。堀切・お花茶屋・青戸・四ツ木など葛飾区内各地の方々との長いご縁が、私どもの誇りであり、変わらない使命の源です。
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="py-7">
                <h3
                  className="text-[#312852] text-xl tracking-wide mb-4"
                  style={{ fontFamily: "var(--font-mincho)" }}
                >
                  代替わりした新体制——父から飯田雄生へ
                </h3>
                <p className="text-[#4a4a4a] text-base md:text-lg leading-loose">
                  長年にわたって地域の皆さまに支えていただいた稲垣屋葬儀店は、父から息子・飯田雄生へと代替わりし、新体制でのスタートを切りました。葬祭ディレクター1級・認定飯田葬儀相談員などの専門資格を取得し、先代が培ってきた信頼と地域とのつながりを引き継ぎながら、現代のご家族のニーズにも柔軟にお応えできる体制を整えています。
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="py-7">
                <h3
                  className="text-[#312852] text-xl tracking-wide mb-4"
                  style={{ fontFamily: "var(--font-mincho)" }}
                >
                  不易流行——変わらぬ本質と時代への対応
                </h3>
                <p className="text-[#4a4a4a] text-base md:text-lg leading-loose">
                  「不易流行」——変わらぬ本質を守りながら、時代のニーズに応えていく。これが稲垣屋葬儀店の理念です。大切な方を心を込めてお送りするという本質は変えず、家族葬・一日葬・火葬式など現代の多様な葬儀形式にも誠実に対応してまいります。形が変わっても、ご家族に寄り添う姿勢だけは、これからも変わることはありません。
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="py-7">
                <h3
                  className="text-[#312852] text-xl tracking-wide mb-4"
                  style={{ fontFamily: "var(--font-mincho)" }}
                >
                  葛飾区民に寄り添う姿勢
                </h3>
                <p className="text-[#4a4a4a] text-base md:text-lg leading-loose">
                  葛飾区堀切で長年地域に根付いてきたからこそ、地元の地理・文化・習慣を深く理解しています。地域のお寺や斎場との連携もスムーズで、急なご連絡にも迅速に対応できる体制を整えています。葛飾区民葬儀取扱店として区指定を受けており、区民葬儀制度のご案内から手続きのサポートまで、費用面でも安心してお任せいただけます。
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-12">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">CREDENTIALS</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              資格・認定一覧
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
            <p className="text-[#4a4a4a] mt-5 text-base leading-relaxed">
              確かな資格と認定が、安心のご葬儀の証です。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            <StaggerItem>
              <div className="py-7">
                <p className="text-[#c9a55a] text-xs tracking-[0.2em] mb-1">厚生労働省認定・国家資格</p>
                <h3
                  className="text-[#312852] text-lg tracking-wide mb-2"
                  style={{ fontFamily: "var(--font-mincho)" }}
                >
                  葬祭ディレクター1級
                </h3>
                <p className="text-[#4a4a4a] text-base leading-relaxed">
                  厚生労働省が認定する葬祭ディレクター技能審査制度に基づく国家資格。葬儀全般に関する深い知識と高い技術を持つ専門家として認定されています。1級は葬祭業の最上位資格です。
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="py-7">
                <p className="text-[#c9a55a] text-xs tracking-[0.2em] mb-1">専門相談員認定</p>
                <h3
                  className="text-[#312852] text-lg tracking-wide mb-2"
                  style={{ fontFamily: "var(--font-mincho)" }}
                >
                  認定飯田葬儀相談員
                </h3>
                <p className="text-[#4a4a4a] text-base leading-relaxed">
                  葬儀に関する専門知識を持つ相談員としての認定。ご家族の想いや疑問に、専門的な知識をもって丁寧にお答えします。事前相談から葬儀後のフォローまで一貫してサポートします。
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="py-7">
                <p className="text-[#c9a55a] text-xs tracking-[0.2em] mb-1">葛飾区指定</p>
                <h3
                  className="text-[#312852] text-lg tracking-wide mb-2"
                  style={{ fontFamily: "var(--font-mincho)" }}
                >
                  葛飾区民葬儀取扱店
                </h3>
                <p className="text-[#4a4a4a] text-base leading-relaxed">
                  葛飾区が指定する区民葬儀取扱店として認定。葛飾区民の方は区民葬儀制度を利用することで費用を抑えた葬儀が可能です。制度の申し込みから手続きまで、丁寧にご案内します。
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="py-7">
                <p className="text-[#c9a55a] text-xs tracking-[0.2em] mb-1">業界団体所属</p>
                <h3
                  className="text-[#312852] text-lg tracking-wide mb-2"
                  style={{ fontFamily: "var(--font-mincho)" }}
                >
                  業界団体加盟
                </h3>
                <p className="text-[#4a4a4a] text-base leading-relaxed">
                  葬祭業の業界団体に加盟しており、適正な価格と質の高いサービスを提供するための業界基準を遵守しています。品質・価格・対応の透明性を保証します。
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <FadeInUp className="mt-8">
            <Link
              href="/qualification"
              className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group"
            >
              資格・認定の詳細を見る
              <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-12">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">PLANS</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              対応プラン一覧
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
            <p className="text-[#4a4a4a] mt-5 text-base leading-relaxed">
              ご家族のご希望やご予算に合わせて、さまざまなプランをご用意しています。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            <StaggerItem>
              <div className="py-7">
                <h3
                  className="text-[#312852] text-lg tracking-wide mb-2"
                  style={{ fontFamily: "var(--font-mincho)" }}
                >
                  <Link href="/plan-family" className="hover:text-[#5c4a80] transition-colors inline-flex items-center gap-1.5">
                    家族葬<ChevronRight size={14} />
                  </Link>
                </h3>
                <p className="text-[#4a4a4a] text-base leading-relaxed">
                  ご家族・ご親族だけでゆっくりとお別れしたい方のためのプランです。故人との静かな時間を大切に過ごせます。
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="py-7">
                <h3
                  className="text-[#312852] text-lg tracking-wide mb-2"
                  style={{ fontFamily: "var(--font-mincho)" }}
                >
                  <Link href="/plan-oneday" className="hover:text-[#5c4a80] transition-colors inline-flex items-center gap-1.5">
                    一日葬<ChevronRight size={14} />
                  </Link>
                </h3>
                <p className="text-[#4a4a4a] text-base leading-relaxed">
                  お通夜を省略し、告別式・火葬を1日で行うプランです。ご負担を抑えながら、しっかりとしたお別れが可能です。
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="py-7">
                <h3
                  className="text-[#312852] text-lg tracking-wide mb-2"
                  style={{ fontFamily: "var(--font-mincho)" }}
                >
                  <Link href="/plan-cremation" className="hover:text-[#5c4a80] transition-colors inline-flex items-center gap-1.5">
                    火葬式<ChevronRight size={14} />
                  </Link>
                </h3>
                <p className="text-[#4a4a4a] text-base leading-relaxed">
                  必要最小限の形で、火葬のみを行うプランです。シンプルなお別れをご希望の方にお勧めします。
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="py-7">
                <h3
                  className="text-[#312852] text-lg tracking-wide mb-2"
                  style={{ fontFamily: "var(--font-mincho)" }}
                >
                  <Link href="/plan-general" className="hover:text-[#5c4a80] transition-colors inline-flex items-center gap-1.5">
                    一般葬<ChevronRight size={14} />
                  </Link>
                </h3>
                <p className="text-[#4a4a4a] text-base leading-relaxed">
                  お通夜・告別式を執り行う伝統的な葬儀形式です。故人とご縁のあった多くの方にお集まりいただけます。
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-8">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">CONSULTATION</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              事前相談のご案内
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              「もしものとき」に慌てないために、事前のご相談をお勧めしています。費用の目安・葬儀の流れ・希望するスタイルなど、どんな小さな疑問でもお気軽にご相談ください。事前相談は無料で承っております。
            </p>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose">
              葬儀は、準備があるとないとでは、ご家族の負担が大きく変わります。稲垣屋葬儀店では、いざというときに焦らず、後悔のないお別れができるよう、事前相談を通じてご家族をサポートします。認定飯田葬儀相談員が、丁寧にお話を伺います。
            </p>
            <div className="mt-8">
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group"
              >
                事前相談について詳しく見る
                <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              葬儀のご相談・事前相談
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              どんな疑問でも、お気軽にご連絡ください。事前相談は無料です。
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
