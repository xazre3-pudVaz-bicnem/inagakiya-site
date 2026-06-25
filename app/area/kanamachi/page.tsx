import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle, MapPin, Clock, Shield } from "lucide-react";
import RelatedColumns from "../../components/RelatedColumns";

export const metadata: Metadata = {
  title: "金町で葬儀のご相談なら稲垣屋葬儀店｜葛飾区の地域密着葬儀社",
  description:
    "葛飾区金町周辺で葬儀をご検討の方へ。稲垣屋葬儀店は葛飾区全域に対応した地域密着の葬儀社。金町エリアからのご相談もお気軽に。事前相談無料。",
};

const faqs = [
  {
    q: "金町から稲垣屋葬儀店まではどのくらいかかりますか？",
    a: "稲垣屋葬儀店は葛飾区堀切6-33-4にあります。金町エリアからは車で20〜25分ほどの距離です。JR常磐線・京成金町線金町駅周辺からのご連絡もお気軽にどうぞ。迅速に対応いたします。",
  },
  {
    q: "金町で葬儀の事前相談はできますか？",
    a: "はい、事前相談は無料で承っております。「葬儀の費用を知りたい」「家族でどの葬儀スタイルにするか決めたい」など、どんなことでもお気軽にお電話（03-3690-0870）またはお問い合わせフォームよりご連絡ください。",
  },
  {
    q: "金町の方でも区民葬儀は利用できますか？",
    a: "はい、ご利用いただけます。区民葬儀は葛飾区民の方が対象の制度です。金町にお住まいの方も対象となります。稲垣屋葬儀店は葛飾区の区民葬儀取扱店として登録しておりますので、詳しくはお気軽にお問い合わせください。",
  },
  {
    q: "金町で急な葬儀にも対応していますか？",
    a: "はい、24時間365日対応しております。深夜・早朝・休日も関係なく、ご連絡いただければすぐに対応いたします。急なご逝去の際も、まずはお電話（03-3690-0870）ください。",
  },
];

export default function KanamachiPage() {
  return (
    <>
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
        title="金町で葬儀のご相談"
        subtitle="葛飾区堀切の稲垣屋葬儀店がお迎えします"
        en="FUNERAL SERVICE"
      />
      <Breadcrumb
        items={[
          { label: "対応エリア", href: "/area" },
          { label: "金町" },
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
              金町の皆様へ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              JR常磐線（各停）および京成金町線の金町駅周辺に広がる金町は、葛飾区北部に位置するエリアです。江戸川に近い自然豊かな環境の中に、住宅地や商業施設が広がっています。葛飾区の中でも比較的落ち着いた雰囲気が漂い、長年この地に住み続けてきた方も多いエリアです。
            </p>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              稲垣屋葬儀店は、葛飾区堀切6-33-4を拠点とする地域密着の葬儀社です。金町は葛飾区の北部に位置し、堀切からやや距離がありますが、葛飾区全域への対応を行っており、金町エリアのご家族からのご相談にも迅速に対応いたします。深夜・早朝を問わず、ご連絡をいただければすぐに向かいます。
            </p>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              稲垣屋葬儀店は明治11年頃の創業以来、葛飾区に根ざして地域の皆様のご葬儀をお手伝いしてきました。葬祭ディレクター1級を取得したスタッフが対応し、家族葬・一日葬・火葬式・一般葬・区民葬儀など、ご家族のご希望に合わせたプランをご提案いたします。手続きや進行のご不安も、一つひとつていねいにご説明しながらサポートいたします。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              「まだ葬儀が必要になったわけではないが、費用や流れを事前に知っておきたい」という事前相談も無料で承っております。金町にお住まいの方も、どうぞお気軽にご連絡ください。稲垣屋葬儀店は24時間365日、葛飾区全域の皆様のご相談をお待ちしております。
            </p>
          </FadeInUp>

          <FadeInUp className="mt-10 space-y-3">
            <div className="flex items-center gap-3">
              <MapPin size={15} className="text-[#9278be] shrink-0" />
              <span className="text-[#4a4a4a] text-sm">稲垣屋葬儀店　東京都葛飾区堀切6-33-4</span>
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
              金町で選べる葬儀プラン
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
              金町からよくあるご質問
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
          <RelatedColumns slugs={["kanamachi-funeral", "shibamata-funeral", "katsushika-funeral-first-guide", "what-to-do-after-death-katsushika"]} />
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
              金町からのご相談はこちら
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
