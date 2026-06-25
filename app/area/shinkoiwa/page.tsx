import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle, MapPin, Clock, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "新小岩周辺で葬儀のご相談なら稲垣屋葬儀店｜葛飾区の地域密着葬儀社",
  description:
    "葛飾区新小岩周辺で葬儀をご検討の方へ。稲垣屋葬儀店は葛飾区に根付く地域密着の葬儀社。新小岩エリアからのご相談もお気軽に。24時間365日対応。",
};

const faqs = [
  {
    q: "新小岩周辺から稲垣屋葬儀店まではどのくらいかかりますか？",
    a: "稲垣屋葬儀店は葛飾区堀切6-33-4にあります。新小岩周辺からは車で15〜20分ほどの距離です。JR総武線新小岩駅周辺からのご連絡もお気軽にどうぞ。ご連絡をいただければ迅速に対応いたします。",
  },
  {
    q: "新小岩周辺で葬儀の事前相談はできますか？",
    a: "はい、事前相談は無料で承っております。「どんな葬儀の種類があるか知りたい」「費用の見当をつけておきたい」など、どんなことでもお気軽にお電話（03-3690-0870）またはお問い合わせフォームよりご連絡ください。",
  },
  {
    q: "新小岩周辺の方でも区民葬儀は利用できますか？",
    a: "はい、葛飾区にお住まいの方（新小岩の葛飾区側）であれば区民葬儀の対象となります。稲垣屋葬儀店は葛飾区の区民葬儀取扱店として登録しておりますので、詳しくはお気軽にお問い合わせください。なお、江戸川区側にお住まいの方は対象外となりますのでご注意ください。",
  },
  {
    q: "新小岩周辺で急な葬儀にも対応していますか？",
    a: "はい、24時間365日対応しております。深夜・早朝・休日も関係なく、ご連絡いただければすぐに対応いたします。急なご逝去の際も、まずはお電話（03-3690-0870）ください。",
  },
];

export default function ShinkoiwaPage() {
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
        title="新小岩周辺で葬儀のご相談"
        subtitle="葛飾区堀切の稲垣屋葬儀店がお迎えします"
        en="FUNERAL SERVICE"
      />
      <Breadcrumb
        items={[
          { label: "対応エリア", href: "/area" },
          { label: "新小岩周辺" },
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
              新小岩周辺の皆様へ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              JR総武線新小岩駅を中心に広がる新小岩周辺は、葛飾区南西部に位置するエリアです。荒川と江戸川に挟まれた地域で、江戸川区との境界付近にあたります。交通の便がよく、活気ある商店街と落ち着いた住宅地が隣り合うこのエリアでは、さまざまな世代の方が暮らしています。
            </p>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              稲垣屋葬儀店は、葛飾区堀切6-33-4を拠点とする地域密着の葬儀社です。明治11年頃の創業以来、葛飾区に根ざして地域の皆様のご葬儀をお手伝いしてまいりました。新小岩周辺の葛飾区域にお住まいの方からのご相談にも、真摯に対応いたします。
            </p>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              ご葬儀の手配は、突然のご逝去から始まることがほとんどです。「何をすればよいかわからない」「どこに電話すればよいか」という状態でも、稲垣屋葬儀店にご連絡いただければ、状況をお伺いしながら一つひとつ丁寧にご案内いたします。ご逝去直後のお迎え・ご安置から、葬儀の手配・各種手続き・アフターフォローまで、ご家族の側に立ってサポートいたします。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              家族葬・一日葬・火葬式・一般葬・区民葬儀など、ご希望に合わせた多様なプランをご用意しています。葛飾区の新小岩側にお住まいの方は区民葬儀制度のご利用も可能です。「どのプランが合うかわからない」という場合は、事前相談（無料）でご説明いたしますので、どうぞお気軽にご連絡ください。24時間365日対応しております。
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
              新小岩周辺で選べる葬儀プラン
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
              新小岩周辺からよくあるご質問
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

      {/* CTA */}
      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2
              className="text-[#312852] text-2xl tracking-[0.08em] mb-5"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              新小岩周辺からのご相談はこちら
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
