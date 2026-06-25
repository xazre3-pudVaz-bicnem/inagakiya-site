import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle, MapPin, Clock, Shield } from "lucide-react";
import RelatedColumns from "../../components/RelatedColumns";

export const metadata: Metadata = {
  title: "青戸で葬儀のご相談なら稲垣屋葬儀店｜葛飾区の地域密着葬儀社",
  description:
    "葛飾区青戸周辺で葬儀をご検討の方へ。稲垣屋葬儀店は葛飾区堀切に拠点を置く地域密着の葬儀社。青戸エリアにもすぐに対応。家族葬・火葬式・区民葬儀に対応。",
};

const faqs = [
  {
    q: "青戸から稲垣屋葬儀店まではどのくらいかかりますか？",
    a: "稲垣屋葬儀店は葛飾区堀切6-33-4にあります。青戸エリアからは車で10分前後の距離です。京成本線青砥駅周辺からもスムーズにお伺いできますので、ご連絡をいただければ迅速に対応いたします。",
  },
  {
    q: "青戸で葬儀の事前相談はできますか？",
    a: "はい、事前相談は無料で承っております。「葬儀の流れを知りたい」「費用の見当をつけたい」「家族葬と一般葬の違いを教えてほしい」など、どんなことでもお気軽にお電話（03-3690-0870）またはお問い合わせフォームからご連絡ください。",
  },
  {
    q: "青戸の方でも区民葬儀は利用できますか？",
    a: "はい、ご利用いただけます。区民葬儀は葛飾区民の方（故人または喪主が葛飾区に住民票をお持ちの場合）が対象です。青戸にお住まいの方も対象となりますので、詳しくは稲垣屋葬儀店へお問い合わせください。",
  },
  {
    q: "青戸で急な葬儀にも対応していますか？",
    a: "はい、24時間365日対応しております。深夜・早朝・休日も関係なく、ご連絡いただければすぐに対応いたします。急なご逝去の際も、まずはお電話（03-3690-0870）ください。",
  },
];

export default function AotoPage() {
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
        title="青戸で葬儀のご相談"
        subtitle="葛飾区堀切の稲垣屋葬儀店がお迎えします"
        en="FUNERAL SERVICE"
      />
      <Breadcrumb
        items={[
          { label: "対応エリア", href: "/area" },
          { label: "青戸" },
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
              青戸の皆様へ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              京成本線青砥駅を中心に広がる青戸は、葛飾区の中部に位置する住宅地です。古くから栄えてきた商店街や落ち着いた住宅街が続き、長年にわたりこの地に根を張って暮らしてきた方も多いエリアです。地域のコミュニティが今も大切にされており、「お葬式は地元の葬儀社に頼みたい」というお気持ちを持つ方も少なくありません。
            </p>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              稲垣屋葬儀店は、青戸から近い堀切（葛飾区堀切6-33-4）に拠点を置く地域密着の葬儀社です。明治11年頃の創業以来、葛飾区に根ざしてまいりました。青戸エリアのご家族からのご相談にも、すぐに対応できる体制を整えております。ご連絡いただければ、深夜・早朝を問わず迅速にお伺いいたします。
            </p>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              葬儀は、故人との最後のお別れの場であるとともに、ご遺族がゆっくりと気持ちを整理するための大切な時間でもあります。稲垣屋葬儀店では、ご家族のご希望をていねいに伺いながら、家族葬・一日葬・火葬式・一般葬・区民葬儀など、最適なプランをご提案いたします。葬祭ディレクター1級を取得したスタッフが担当し、手続きや進行をすべてサポートいたします。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              「まだ葬儀が必要になったわけではないが、万一のときのために話を聞きたい」という事前相談も大歓迎です。費用のこと、プランのこと、手続きのことなど、どんなことでもお気軽にご相談ください。稲垣屋葬儀店は、青戸をはじめ葛飾区全域の皆様を24時間365日、心を込めてお迎えします。
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
              青戸で選べる葬儀プラン
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
              青戸からよくあるご質問
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
          <RelatedColumns slugs={["aoto-funeral", "katsushika-funeral-first-guide", "what-to-do-after-death-katsushika"]} />
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
              青戸からのご相談はこちら
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
