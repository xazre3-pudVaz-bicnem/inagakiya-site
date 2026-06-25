import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import Breadcrumb from "../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle, Award, Shield, Clock, MapPin, Users, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "葛飾区で葬儀なら稲垣屋葬儀店｜家族葬・区民葬儀・火葬式に対応",
  description:
    "葛飾区で葬儀をご検討の方へ。稲垣屋葬儀店は葛飾区堀切に根付く地域密着の葬儀社です。家族葬・一日葬・火葬式・区民葬儀・事前相談まで、ご家族の状況に合わせて丁寧にご案内します。創業明治11年頃。24時間365日対応。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/katsushika-funeral" },
  openGraph: {
    title: "葛飾区で葬儀なら稲垣屋葬儀店｜家族葬・区民葬儀・火葬式に対応",
    description:
      "葛飾区堀切の稲垣屋葬儀店。家族葬・一日葬・火葬式・区民葬儀に対応。創業明治11年頃。24時間365日対応。事前相談無料。",
  },
};

const plans = [
  { href: "/plans/family-funeral", title: "家族葬", en: "Family Funeral", desc: "ご家族やごく親しい方だけで、心静かにお別れできる葬儀です。参列者が少ない分、故人との最後の時間をゆっくりと過ごせます。葛飾区では近年、家族葬を選ぶご家族が増えています。" },
  { href: "/plans/oneday-funeral", title: "一日葬", en: "One-Day Funeral", desc: "お通夜を省略し、告別式と火葬を一日で執り行う葬儀スタイル。ご遺族の体力的・精神的な負担を軽減しながら、きちんとした告別式でお別れできます。" },
  { href: "/plans/cremation", title: "火葬式", en: "Cremation Only", desc: "お通夜・告別式を行わず、火葬のみのシンプルな葬儀です。ごく近しい方だけで静かにお見送りされたい方に選ばれています。費用を最小限に抑えることができます。" },
  { href: "/plans/general-funeral", title: "一般葬", en: "Traditional Funeral", desc: "お通夜・告別式を執り行う伝統的な葬儀形式。故人と縁のあった多くの方々にお集まりいただき、きちんとしたお別れができます。" },
  { href: "/plans/kumin-funeral", title: "区民葬儀", en: "Kuminso-gi", desc: "葛飾区が設けた制度で、葛飾区民の方が利用できます。稲垣屋葬儀店は葛飾区が指定する区民葬儀取扱店として、費用を抑えた葬儀をご提供しています。" },
];

const strengths = [
  { icon: Award, title: "葬祭ディレクター1級", desc: "厚生労働省認定の国家資格。葬儀全般に関する深い知識と高い技術を持つ専門家として、葛飾区内のご葬儀をサポートします。" },
  { icon: Shield, title: "葛飾区民葬儀取扱店", desc: "葛飾区が指定する区民葬儀取扱店として認定。葛飾区民の皆さまが利用できる区民葬儀制度に対応しています。" },
  { icon: Clock, title: "24時間365日対応", desc: "深夜・早朝・休日を問わず、いつでもお電話ください。急なご逝去にも迅速に対応いたします。" },
  { icon: MapPin, title: "葛飾区堀切の地域密着", desc: "創業明治11年頃より葛飾区堀切に根付き、地域の皆さまのご葬儀をお手伝いしてきました。地元の地理と習慣を熟知しています。" },
  { icon: Users, title: "認定飯田葬儀相談員", desc: "専門の葬儀相談員が在籍。ご家族の想いに寄り添い、丁寧なヒアリングでお一人おひとりに合ったプランをご提案します。" },
  { icon: Heart, title: "事前相談無料", desc: "「もしものとき」に備えた事前相談を無料で承っています。費用・流れ・プランについて、どんな疑問もお気軽にご相談ください。" },
];

const areas = [
  { href: "/area/horikiri", label: "堀切" },
  { href: "/area/ohanajaya", label: "お花茶屋" },
  { href: "/area/aoto", label: "青戸" },
  { href: "/area/tateishi", label: "立石" },
  { href: "/area/yotsugi", label: "四つ木" },
  { href: "/area/kameari", label: "亀有" },
  { href: "/area/kanamachi", label: "金町" },
  { href: "/area/shibamata", label: "柴又" },
  { href: "/area/shinkoiwa", label: "新小岩周辺" },
];

const faqs = [
  {
    q: "葛飾区で急に葬儀が必要になりました。今すぐ連絡できますか？",
    a: "はい、24時間365日対応しております。深夜・早朝・休日を問わず、お電話（03-3690-0870）にてご連絡ください。まずはご連絡いただければ、次のステップを丁寧にご案内します。",
  },
  {
    q: "葛飾区民葬儀とはなんですか？",
    a: "葛飾区が設けた葬儀制度で、葛飾区民の方が利用できます。稲垣屋葬儀店は葛飾区が指定する区民葬儀取扱店として認定されており、この制度を活用することで費用を抑えた葬儀が可能です。詳しくは区民葬儀のページ、またはお問い合わせください。",
  },
  {
    q: "葛飾区での葬儀費用はどのくらいかかりますか？",
    a: "葬儀の形式・規模・内容によって異なります。シンプルな火葬式から伝統的な一般葬まで、ご希望に合わせたプランをご提案します。まずは事前相談で概算をお伝えすることが可能ですので、お気軽にご連絡ください。葛飾区民の方は区民葬儀制度も活用できます。",
  },
  {
    q: "堀切以外の葛飾区内でも対応していますか？",
    a: "はい、葛飾区全域に対応しております。お花茶屋・青戸・立石・四つ木・亀有・金町・柴又・新小岩周辺など、葛飾区内どのエリアからでもご相談いただけます。",
  },
  {
    q: "家族葬と一般葬のどちらが良いか迷っています。",
    a: "どちらが良いかは、故人との関係・参列者の人数・ご予算・ご遺族のご希望によって異なります。家族葬は少人数でゆっくりお別れできる一方、一般葬は多くの方に参列いただける形式です。まずはご希望をお聞かせください。お一人おひとりに合ったプランをご提案します。",
  },
  {
    q: "事前に相談だけすることはできますか？",
    a: "はい、事前相談は完全無料で承っております。「もしものとき」に備えて、費用や流れを事前にご確認いただけます。強引な勧誘は一切いたしませんので、安心してご相談ください。",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "葛飾区で葬儀なら稲垣屋葬儀店",
  description:
    "葛飾区で葬儀をご検討の方へ。稲垣屋葬儀店は葛飾区堀切に根付く地域密着の葬儀社です。",
  url: "https://www.inagakiyasougiten.com/katsushika-funeral",
  mainEntity: {
    "@type": "FuneralHome",
    name: "稲垣屋葬儀店",
    address: {
      "@type": "PostalAddress",
      streetAddress: "堀切6-33-4",
      addressLocality: "葛飾区",
      addressRegion: "東京都",
      postalCode: "124-0006",
      addressCountry: "JP",
    },
    telephone: "03-3690-0870",
    openingHours: "Mo-Su 00:00-24:00",
    areaServed: "葛飾区",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function KatsushikaFuneralPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="葛飾区で葬儀をお考えの方へ"
        subtitle="地域に根付いた葬儀社として、葛飾区全域をサポートします"
        en="KATSUSHIKA FUNERAL"
      />
      <Breadcrumb items={[{ label: "葛飾区の葬儀" }]} />

      {/* ─── Intro ─────────────────────────────────────── */}
      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ABOUT KATSUSHIKA FUNERAL</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              葛飾区で、あなたのそばにいる葬儀社
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              突然の訃報に、何をすればよいか分からなくなることは当然のことです。稲垣屋葬儀店は、葛飾区堀切に根付いた地域密着の葬儀社として、創業明治11年頃よりこの地域の皆さまのお役に立ってきました。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              葛飾区内には、下町の温かみが残るさまざまな地域があります。堀切・お花茶屋・青戸・立石・四つ木・亀有・金町・柴又・新小岩周辺——どのエリアからでも、稲垣屋葬儀店がお役に立てます。24時間365日、いつでもお電話ください。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              「どのような葬儀を選べばよいか」「費用はどのくらいかかるか」「区民葬儀は使えるか」——どんな疑問も、まずはお気軽にご相談ください。事前相談は無料で、強引な勧誘は一切いたしません。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              稲垣屋葬儀店は、葬祭ディレクター1級・認定飯田葬儀相談員・区民葬儀取扱店・組合加盟など、確かな資格と認定を持ち、葛飾区の皆さまに安心の葬儀サービスをお届けしています。父から息子へと受け継がれた稲垣屋葬儀店は、伝統の技と現代のニーズに応える新体制で、これからも地域に寄り添い続けます。
            </p>
          </FadeInUp>

          <FadeInUp className="mt-10">
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group"
              >
                稲垣屋葬儀店について
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/company"
                className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group"
              >
                会社概要・創業の歴史
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ─── Plans ─────────────────────────────────────── */}
      <section className="py-20 md:py-32 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FUNERAL PLANS</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              葛飾区で選べる葬儀プラン
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
            <p className="text-[#4a4a4a] mt-5 text-base leading-relaxed">
              稲垣屋葬儀店では、ご家族のご状況・ご希望に合わせて以下の葬儀プランをご用意しています。
              どのプランが適切か分からない場合は、まずお問い合わせください。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {plans.map((plan) => (
              <StaggerItem key={plan.title}>
                <Link href={plan.href} className="flex items-start justify-between gap-6 py-8 group">
                  <div className="flex-1">
                    <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-1">{plan.en}</p>
                    <h3
                      className="text-[#312852] text-xl md:text-2xl tracking-wide mb-2 group-hover:text-[#5c4a80] transition-colors"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      {plan.title}
                    </h3>
                    <p className="text-[#4a4a4a] text-base leading-relaxed">{plan.desc}</p>
                  </div>
                  <ChevronRight
                    size={18}
                    className="text-[#b8a0d8] group-hover:text-[#5c4a80] group-hover:translate-x-1 transition-all shrink-0 mt-2"
                  />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mt-10">
            <Link
              href="/plans"
              className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group"
            >
              葬儀プラン一覧を見る
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* ─── Strengths ─────────────────────────────────── */}
      <section className="py-20 md:py-32 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">WHY CHOOSE US</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              葛飾区で稲垣屋葬儀店が選ばれる理由
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {strengths.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex items-start gap-5 py-7">
                  <item.icon size={20} className="text-[#9278be] mt-1 shrink-0" />
                  <div>
                    <h3
                      className="text-[#312852] text-lg tracking-wide mb-2"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mt-10">
            <Link
              href="/reasons"
              className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group"
            >
              選ばれる理由を詳しく見る
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* ─── Cost ──────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COST</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              葛飾区の葬儀費用について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              葬儀の費用は、プランの種類・参列者の規模・ご希望の内容によって異なります。稲垣屋葬儀店では、費用を事前に明確にご提示し、後から追加費用が発生しないよう丁寧にご説明します。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-5">
              葛飾区民の方は、葛飾区が設ける区民葬儀制度を利用することで、費用を抑えた葬儀が可能です。稲垣屋葬儀店は葛飾区の区民葬儀取扱店として、制度の詳細から申し込みまでご案内します。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              お見積もりは無料です。まずはお気軽にお問い合わせください。
            </p>
          </FadeInUp>
          <FadeInUp className="mt-8">
            <Link
              href="/cost"
              className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group"
            >
              葬儀費用の詳細を見る
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* ─── Area ──────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">SERVICE AREA</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              葛飾区内の対応エリア
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
            <p className="text-[#4a4a4a] mt-5 text-base leading-relaxed">
              稲垣屋葬儀店は葛飾区全域に対応しております。各エリアからのご相談もお気軽にどうぞ。
            </p>
          </FadeInUp>
          <FadeInUp>
            <div className="flex flex-wrap gap-3">
              {areas.map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="inline-flex items-center gap-1 border border-[#d5c6eb] text-[#5c4a80] px-4 py-2 text-sm tracking-wide hover:bg-[#f4eef9] transition-colors"
                  style={{ fontFamily: "var(--font-mincho)" }}
                >
                  {a.label}
                  <ChevronRight size={13} />
                </Link>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ─── FAQ ───────────────────────────────────────── */}
      <section className="py-20 md:py-32 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              葛飾区の葬儀に関するよくある質問
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {faqs.map((faq, i) => (
              <StaggerItem key={i}>
                <div className="py-7">
                  <div className="flex gap-4 mb-3">
                    <span className="text-[#9278be] font-bold text-base shrink-0">Q</span>
                    <p
                      className="text-[#312852] text-base md:text-lg leading-relaxed"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      {faq.q}
                    </p>
                  </div>
                  <div className="ml-8">
                    <p className="text-[#4a4a4a] text-base leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mt-10">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group"
            >
              よくある質問をすべて見る
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em] mb-5"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              葛飾区でのご葬儀、まずはご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              事前相談は無料です。どんな小さなことでも、お気軽にご連絡ください。<br className="hidden md:block" />
              稲垣屋葬儀店は24時間365日、いつでも葛飾区の皆さまのそばにいます。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 group w-full sm:w-auto justify-center"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                <MessageCircle size={17} />お問い合わせ・ご相談
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
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
