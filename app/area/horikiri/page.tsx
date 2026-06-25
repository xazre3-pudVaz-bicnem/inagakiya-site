import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle, MapPin, Clock, Shield } from "lucide-react";
import RelatedColumns from "../../components/RelatedColumns";

export const metadata: Metadata = {
  title: "堀切で葬儀のご相談なら稲垣屋葬儀店｜葛飾区堀切の地域密着葬儀社",
  description:
    "葛飾区堀切の稲垣屋葬儀店。堀切・堀切菖蒲園周辺の方のご葬儀をサポート。24時間365日対応。事前相談無料。区民葬儀・家族葬・火葬式に対応。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/area/horikiri" },
};

const faqs = [
  {
    q: "堀切から稲垣屋葬儀店まではどのくらいかかりますか？",
    a: "稲垣屋葬儀店は葛飾区堀切6-33-4に所在しており、堀切エリアが本店の地元です。堀切菖蒲園周辺・堀切橋周辺からも徒歩や車ですぐの距離にあります。ご連絡いただければ迅速にお伺いいたします。",
  },
  {
    q: "堀切で葬儀の事前相談はできますか？",
    a: "はい、事前相談は無料で承っております。「いざというとき何をすればよいか」「費用の目安を知りたい」など、どんなことでもお気軽にお電話（03-3690-0870）またはお問い合わせフォームよりご連絡ください。",
  },
  {
    q: "堀切の方でも区民葬儀は利用できますか？",
    a: "はい、ご利用いただけます。区民葬儀は葛飾区民の方（故人または喪主が葛飾区に住民票をお持ちの場合）が対象の制度です。稲垣屋葬儀店は葛飾区の区民葬儀取扱店として登録しており、堀切にお住まいの方のご相談も承っております。",
  },
  {
    q: "堀切で急な葬儀にも対応していますか？",
    a: "はい、24時間365日対応しております。深夜・早朝・休日を問わず、ご連絡いただければすぐに対応いたします。急なご逝去の際も、まずはお電話（03-3690-0870）ください。",
  },
  {
    q: "堀切菖蒲園周辺のご自宅からのお迎えも可能ですか？",
    a: "はい、葛飾区内どこへでもお迎えに参ります。堀切菖蒲園周辺のご自宅やご病院からのご出発にも対応しておりますので、お気軽にご連絡ください。",
  },
];

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "堀切で葬儀のご相談なら稲垣屋葬儀店｜葛飾区堀切の地域密着葬儀社",
  description: "葛飾区堀切の稲垣屋葬儀店。堀切・堀切菖蒲園周辺の方のご葬儀をサポート。24時間365日対応。事前相談無料。区民葬儀・家族葬・火葬式に対応。",
  url: "https://www.inagakiyasougiten.com/area/horikiri",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葛飾区 地域別葬儀情報", item: "https://www.inagakiyasougiten.com/area" },
      { "@type": "ListItem", position: 3, name: "堀切から見た稲垣屋葬儀店", item: "https://www.inagakiyasougiten.com/area/horikiri" },
    ],
  },
};

export default function HorikiriPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <PageHero
        title="堀切で葬儀のご相談"
        subtitle="葛飾区堀切の稲垣屋葬儀店がお迎えします"
        en="FUNERAL SERVICE"
      />
      <Breadcrumb
        items={[
          { label: "対応エリア", href: "/area" },
          { label: "堀切" },
        ]}
      />

      {/* Section 1: エリア紹介 */}
      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">SERVICE AREA</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              堀切の皆様へ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              稲垣屋葬儀店は、葛飾区堀切6-33-4に本店を構える葬儀社です。堀切は、菖蒲の名所「堀切菖蒲園」を擁する緑豊かな町として知られており、荒川沿いの静かな住宅地が広がっています。昔ながらの下町の人情が息づくこの地で、稲垣屋葬儀店は明治11年頃の創業以来、地域の皆様のご葬儀をお手伝いしてまいりました。
            </p>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              堀切は私どもの本拠地です。堀切菖蒲園周辺・堀切橋周辺・堀切1〜8丁目など、堀切エリア全域の皆様に最も迅速にお伺いできます。ご連絡をいただければ、深夜・早朝・休日を問わず、すぐに駆けつけます。
            </p>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              葬儀は、大切な方との最後のお別れの場です。稲垣屋葬儀店では、ご家族の気持ちに寄り添いながら、丁寧にお手伝いすることを大切にしています。急なご逝去でも、事前の相談でも、どうぞお気軽にお声がけください。葬祭ディレクター1級の資格を持つスタッフが、ご家族のご要望をていねいに伺い、最適なご葬儀をご提案いたします。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              稲垣屋葬儀店は葛飾区の区民葬儀取扱店として登録されており、葛飾区民の方はより費用を抑えた区民葬儀のご利用も可能です。また、家族葬・一日葬・火葬式・一般葬など多様なプランをご用意しており、ご家族のご希望やご状況に合わせてご提案いたします。24時間365日いつでもご連絡ください。
            </p>
          </FadeInUp>

          <FadeInUp className="mt-10 space-y-3">
            <div className="flex items-center gap-3">
              <MapPin size={15} className="text-[#9278be] shrink-0" />
              <span className="text-[#4a4a4a] text-sm">東京都葛飾区堀切6-33-4</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={15} className="text-[#9278be] shrink-0" />
              <span className="text-[#4a4a4a] text-sm">24時間365日対応　TEL：03-3690-0870</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield size={15} className="text-[#9278be] shrink-0" />
              <span className="text-[#4a4a4a] text-sm">葬祭ディレクター1級取得・区民葬儀取扱・組合加盟</span>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Section 2: 葬儀プラン */}
      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FUNERAL PLANS</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              堀切で選べる葬儀プラン
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                href: "/plans/family-funeral",
                title: "家族葬",
                en: "Family Funeral",
                desc: "ご家族やごく親しい方だけで、心静かにお別れする葬儀スタイルです。",
              },
              {
                href: "/plans/oneday-funeral",
                title: "一日葬",
                en: "One-Day Funeral",
                desc: "お通夜を省略し、告別式と火葬を一日で行います。ご遺族の負担を軽減します。",
              },
              {
                href: "/plans/cremation",
                title: "火葬式",
                en: "Cremation Only",
                desc: "お通夜・告別式を行わず、火葬のみのシンプルなお別れです。",
              },
              {
                href: "/plans/general-funeral",
                title: "一般葬",
                en: "Traditional Funeral",
                desc: "お通夜・告別式を執り行う伝統的な葬儀形式です。",
              },
              {
                href: "/plans/kumin-funeral",
                title: "区民葬儀",
                en: "Kuminso-gi",
                desc: "葛飾区民の方が利用できる区の制度。費用を抑えた葬儀が可能です。",
              },
            ].map((plan) => (
              <StaggerItem key={plan.title}>
                <Link href={plan.href} className="flex items-center justify-between gap-6 py-7 group">
                  <div>
                    <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-1">{plan.en}</p>
                    <h3
                      className="text-[#312852] text-xl tracking-wide mb-1.5 group-hover:text-[#5c4a80] transition-colors"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      {plan.title}
                    </h3>
                    <p className="text-[#4a4a4a] text-sm leading-relaxed">{plan.desc}</p>
                  </div>
                  <ChevronRight
                    size={18}
                    className="text-[#b8a0d8] group-hover:text-[#5c4a80] group-hover:translate-x-1 transition-all shrink-0"
                  />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Section 3: 稲垣屋葬儀店について */}
      <section className="py-20 md:py-28 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ABOUT US</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              稲垣屋葬儀店について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "明治創業の地域密着葬儀社",
                desc: "明治11年頃の創業以来、葛飾区堀切を拠点に地域の皆様のご葬儀をお手伝いしてきました。長年にわたり培ってきた経験と、地域への深い理解をもとに、ご家族に寄り添ったご葬儀をご提供します。",
              },
              {
                title: "葬祭ディレクター1級取得",
                desc: "葬祭ディレクターは、葬儀の専門的な知識と技術を持つことを国が認定する資格です。稲垣屋葬儀店では葬祭ディレクター1級を取得したスタッフが対応し、ご家族の大切なお別れをしっかりとサポートします。",
              },
              {
                title: "区民葬儀取扱店として登録",
                desc: "葛飾区が実施する区民葬儀制度の取扱店として登録されています。葛飾区民の方はこの制度を利用することで、費用を抑えた葬儀をご検討いただけます。詳しくはお気軽にお問い合わせください。",
              },
              {
                title: "24時間365日対応",
                desc: "ご逝去はいつ訪れるかわかりません。深夜・早朝・休日も関係なく、365日24時間対応しております。まずはお電話（03-3690-0870）をいただければ、すぐに対応いたします。",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3
                    className="text-[#312852] text-lg tracking-wide mb-3"
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

      {/* Section 4: FAQ */}
      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              堀切からよくあるご質問
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

      {/* 関連コラム */}
      <section className="py-14 md:py-20 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-7">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COLUMN</p>
            <h2 className="text-[#312852] text-xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              関連コラム
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-4" />
          </FadeInUp>
          <RelatedColumns slugs={["horikiri-funeral", "katsushika-funeral-first-guide", "what-to-do-after-death-katsushika", "funeral-home-choice-katsushika"]} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2
              className="text-[#312852] text-2xl tracking-[0.08em] mb-5"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              堀切からのご相談はこちら
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              事前相談は無料です。どんな小さなことでも、お気軽にご連絡ください。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 group w-full sm:w-auto justify-center"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                <MessageCircle size={17} />お問い合わせ
                <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 border border-[#9278be] text-[#5c4a80] hover:bg-[#ede7f6] px-8 py-4 tracking-wider transition-colors duration-300 w-full sm:w-auto justify-center"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                事前相談について
              </Link>
            </div>
            <p className="mt-6 text-[#7560a0] text-sm">
              <Link href="/area" className="hover:text-[#312852] transition-colors">
                ← 対応エリア一覧に戻る
              </Link>
            </p>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
