import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle, MapPin, Clock, Shield } from "lucide-react";
import RelatedColumns from "../../components/RelatedColumns";

export const metadata: Metadata = {
  title: "お花茶屋で葬儀のご相談なら稲垣屋葬儀店｜葛飾区の地域密着葬儀社",
  description:
    "葛飾区お花茶屋周辺で葬儀をご検討の方へ。稲垣屋葬儀店はお花茶屋から近い堀切に拠点を置く地域密着の葬儀社です。家族葬・火葬式・区民葬儀に対応。24時間対応。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/area/ohanajaya" },
};

const faqs = [
  {
    q: "お花茶屋から稲垣屋葬儀店まではどのくらいかかりますか？",
    a: "稲垣屋葬儀店は葛飾区堀切6-33-4にあり、お花茶屋からは車で数分ほどの距離です。京成本線お花茶屋駅からも近く、ご連絡いただければすぐにお伺いすることができます。",
  },
  {
    q: "お花茶屋で葬儀の事前相談はできますか？",
    a: "はい、事前相談は無料で承っております。「葬儀にかかる費用を知りたい」「どのプランが合うか相談したい」など、お気軽にお電話（03-3690-0870）またはお問い合わせフォームからご連絡ください。",
  },
  {
    q: "お花茶屋の方でも区民葬儀は利用できますか？",
    a: "はい、ご利用いただけます。区民葬儀は葛飾区民の方が対象の制度で、お花茶屋にお住まいの方も対象となります。稲垣屋葬儀店は葛飾区の区民葬儀取扱店として登録しておりますので、詳しくはお気軽にお問い合わせください。",
  },
  {
    q: "お花茶屋で急な葬儀にも対応していますか？",
    a: "はい、24時間365日対応しております。深夜・早朝・休日を問わずご連絡いただければ、すぐに対応いたします。お花茶屋からも近い堀切に拠点がありますので、迅速にお伺いできます。",
  },
];

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "お花茶屋で葬儀のご相談なら稲垣屋葬儀店｜葛飾区の地域密着葬儀社",
  description: "葛飾区お花茶屋周辺で葬儀をご検討の方へ。稲垣屋葬儀店はお花茶屋から近い堀切に拠点を置く地域密着の葬儀社です。家族葬・火葬式・区民葬儀に対応。24時間対応。",
  url: "https://www.inagakiyasougiten.com/area/ohanajaya",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葛飾区 地域別葬儀情報", item: "https://www.inagakiyasougiten.com/area" },
      { "@type": "ListItem", position: 3, name: "お花茶屋から見た稲垣屋葬儀店", item: "https://www.inagakiyasougiten.com/area/ohanajaya" },
    ],
  },
};

export default function OhanajayaPage() {
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
        title="お花茶屋で葬儀のご相談"
        subtitle="葛飾区堀切の稲垣屋葬儀店がお迎えします"
        en="FUNERAL SERVICE"
      />
      <Breadcrumb
        items={[
          { label: "対応エリア", href: "/area" },
          { label: "お花茶屋" },
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
              お花茶屋の皆様へ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              京成本線お花茶屋駅を中心に広がるお花茶屋は、昔ながらの住宅地と静かな商店街が混在する、穏やかな雰囲気のエリアです。葛飾区の中でも比較的コンパクトにまとまったこの町には、長く住み続けてきた方も多く、地域のつながりが今も大切にされています。
            </p>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              稲垣屋葬儀店は、お花茶屋から近い堀切（葛飾区堀切6-33-4）に拠点を置く地域密着の葬儀社です。お花茶屋と堀切は隣接エリアであり、ご連絡をいただければ迅速にお伺いすることができます。「どの葬儀社に連絡すればよいか」と迷われた際も、どうぞお気軽にお声がけください。
            </p>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              大切な方を突然亡くされたとき、何をすべきかわからずに不安を感じるのは自然なことです。稲垣屋葬儀店では、ご逝去直後のお迎えからご葬儀の手配・アフターフォローまで、ご家族に寄り添いながらすべてをサポートいたします。葬祭ディレクター1級の資格を持つスタッフが、ていねいにご要望をお伺いし、適切な葬儀の形をご提案いたします。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              事前のご相談も大歓迎です。「将来のために葬儀の内容や費用を知っておきたい」「家族でどんな葬儀にするか話し合いたい」など、どんなことでもお気軽にご相談ください。稲垣屋葬儀店は24時間365日、お花茶屋の皆様のご相談をお待ちしております。
            </p>
          </FadeInUp>

          <FadeInUp className="mt-10 space-y-3">
            <div className="flex items-center gap-3">
              <MapPin size={15} className="text-[#9278be] shrink-0" />
              <span className="text-[#4a4a4a] text-sm">稲垣屋葬儀店　東京都葛飾区堀切6-33-4（お花茶屋駅より近距離）</span>
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
              お花茶屋で選べる葬儀プラン
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

      {/* Section 3: FAQ */}
      <section className="py-20 md:py-28 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              お花茶屋からよくあるご質問
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
          <RelatedColumns slugs={["ohanajaya-funeral", "katsushika-funeral-first-guide", "what-to-do-after-death-katsushika"]} />
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
              お花茶屋からのご相談はこちら
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
