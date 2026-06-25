import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import Breadcrumb from "../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle, Award, Shield, Clock, MapPin, Users, Heart, Phone } from "lucide-react";

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
  {
    href: "/plans/family-funeral",
    title: "家族葬",
    en: "Family Funeral",
    desc: "ご家族やごく親しい方だけで、心静かにお別れできる葬儀です。参列者が少ない分、故人との最後の時間をゆっくりと過ごせます。葛飾区では近年、家族葬を選ぶご家族が増えています。",
    costLink: "/cost/family-funeral",
  },
  {
    href: "/plans/oneday-funeral",
    title: "一日葬",
    en: "One-Day Funeral",
    desc: "お通夜を省略し、告別式と火葬を一日で執り行う葬儀スタイルです。ご遺族の体力的・精神的な負担を軽減しながら、きちんとした告別式でお別れできます。",
    costLink: "/cost/oneday-funeral",
  },
  {
    href: "/plans/cremation",
    title: "火葬式",
    en: "Cremation Only",
    desc: "お通夜・告別式を行わず、火葬のみのシンプルな葬儀です。ごく近しい方だけで静かにお見送りされたい方に選ばれています。費用を最小限に抑えることができます。",
    costLink: "/cost/cremation",
  },
  {
    href: "/plans/general-funeral",
    title: "一般葬",
    en: "Traditional Funeral",
    desc: "お通夜・告別式を執り行う伝統的な葬儀形式です。故人と縁のあった多くの方々にお集まりいただき、きちんとしたお別れができます。",
    costLink: null,
  },
  {
    href: "/plans/kumin-funeral",
    title: "区民葬儀",
    en: "Kuminso-gi",
    desc: "葛飾区が設けた制度で、葛飾区民の方が利用できます。稲垣屋葬儀店は葛飾区が指定する区民葬儀取扱店として、費用を抑えた葬儀をご提供しています。",
    costLink: "/cost/kumin-funeral",
  },
];

const strengths = [
  {
    icon: Award,
    title: "葬祭ディレクター1級",
    desc: "厚生労働省認定の国家資格。葬儀全般に関する深い知識と高い技術を持つ専門家として、葛飾区内のご葬儀をサポートします。資格を持つスタッフが責任を持って対応します。",
  },
  {
    icon: Shield,
    title: "葛飾区民葬儀取扱店",
    desc: "葛飾区が指定する区民葬儀取扱店として認定を受けています。葛飾区民の皆さまが利用できる区民葬儀制度に対応しており、申請手続きもサポートします。",
  },
  {
    icon: Clock,
    title: "24時間365日対応",
    desc: "深夜・早朝・休日を問わず、いつでもお電話ください。急なご逝去にも迅速に対応いたします。まずはご連絡いただければ、落ち着いて次のステップをご案内します。",
  },
  {
    icon: MapPin,
    title: "葛飾区堀切の地域密着",
    desc: "創業明治11年頃より葛飾区堀切に根付き、地域の皆さまのご葬儀をお手伝いしてきました。地元の地理・習慣・斎場の事情を熟知しています。",
  },
  {
    icon: Users,
    title: "認定飯田葬儀相談員",
    desc: "専門の葬儀相談員が在籍しています。ご家族の想いに寄り添い、丁寧なヒアリングでお一人おひとりに合ったプランをご提案します。",
  },
  {
    icon: Heart,
    title: "事前相談無料",
    desc: "「もしものとき」に備えた事前相談を無料で承っています。費用・流れ・プランについて、どんな疑問もお気軽にご相談ください。強引な勧誘は一切いたしません。",
  },
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
    q: "葛飾区内の病院・施設から搬送してもらえますか？",
    a: "はい、葛飾区内の病院・施設・ご自宅からの搬送に対応しています。堀切・お花茶屋・青戸・立石・四つ木・亀有・金町・柴又・新小岩など、葛飾区全域に迅速に対応します。24時間365日受付です。",
  },
  {
    q: "事前相談と見積もりは無料ですか？",
    a: "はい、事前相談・お見積もりは完全無料です。相談したからといって必ずご依頼いただく義務はありません。強引な勧誘は一切行いませんので、安心してご相談ください。",
  },
];

export default function KatsushikaFuneralPage() {
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
      telephone: "03-3690-0870",
      address: {
        "@type": "PostalAddress",
        streetAddress: "堀切6-33-4",
        addressLocality: "葛飾区",
        addressRegion: "東京都",
        postalCode: "124-0006",
        addressCountry: "JP",
      },
      openingHours: "Mo-Su 00:00-24:00",
      areaServed: { "@type": "City", name: "葛飾区" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "葬儀プラン",
        itemListElement: [
          { "@type": "Offer", name: "家族葬", url: "https://www.inagakiyasougiten.com/plans/family-funeral" },
          { "@type": "Offer", name: "一日葬", url: "https://www.inagakiyasougiten.com/plans/oneday-funeral" },
          { "@type": "Offer", name: "火葬式", url: "https://www.inagakiyasougiten.com/plans/cremation" },
          { "@type": "Offer", name: "区民葬儀", url: "https://www.inagakiyasougiten.com/plans/kumin-funeral" },
        ],
      },
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com/" },
        { "@type": "ListItem", position: 2, name: "葛飾区の葬儀", item: "https://www.inagakiyasougiten.com/katsushika-funeral" },
      ],
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="葛飾区の葬儀"
        subtitle="地域に根付いた葬儀社として、誠実にお手伝いします"
        en="FUNERAL IN KATSUSHIKA"
      />
      <Breadcrumb items={[{ label: "葛飾区の葬儀" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">KATSUSHIKA FUNERAL</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              葛飾区で葬儀をお考えの方へ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose">
              <p>
                葛飾区で葬儀が必要になったとき、「どこに連絡すればよいか」「費用はどのくらいかかるか」「どんな形式を選べばよいか」と、多くのことを短時間で判断しなければなりません。稲垣屋葬儀店は、葛飾区堀切に創業明治11年頃より根付いてきた地域密着の葬儀社として、その「最初の一歩」をしっかりとサポートします。
              </p>
              <p>
                葛飾区の地域事情、斎場・火葬場の状況、区民葬儀制度の活用方法まで、地元の葬儀社として熟知しています。「急なご逝去でどうすればよいか分からない」という方も、まずお電話ください（03-3690-0870、24時間365日対応）。電話口で落ち着いてご状況をお聞きし、次の手順を丁寧にご案内します。
              </p>
              <p>
                葬儀は形式や費用よりも、「故人とご家族らしいお別れができたか」が大切だと私たちは考えています。家族葬・一日葬・火葬式・一般葬・区民葬儀など、さまざまな形式の中からご家族のご希望・ご状況に合ったプランをご提案します。また、葛飾区民の方には区民葬儀制度の活用もお勧めしています。
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">PLANS</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              葛飾区で選べる5つの葬儀プラン
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
            <p className="text-[#4a4a4a] mt-5 text-base leading-relaxed">
              稲垣屋葬儀店では、ご家族のご希望に合わせた5つのプランをご用意しています。どのプランが合うか迷っている場合も、事前相談（無料）で一緒にご検討します。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {plans.map((plan) => (
              <StaggerItem key={plan.title}>
                <div className="py-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-1">{plan.en}</p>
                      <h3
                        className="text-[#312852] text-xl md:text-2xl tracking-wide mb-3"
                        style={{ fontFamily: "var(--font-mincho)" }}
                      >
                        {plan.title}
                      </h3>
                      <p className="text-[#4a4a4a] text-sm leading-loose mb-3">{plan.desc}</p>
                      <div className="flex flex-wrap gap-3">
                        <Link
                          href={plan.href}
                          className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group"
                        >
                          プラン詳細
                          <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        {plan.costLink && (
                          <Link
                            href={plan.costLink}
                            className="inline-flex items-center gap-1 text-[#7560a0] text-sm hover:text-[#312852] transition-colors group"
                          >
                            費用の目安
                            <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mt-8">
            <Link
              href="/plans"
              className="inline-flex items-center gap-2 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group"
            >
              プラン一覧・比較表を見る
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COST</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              葛飾区での葬儀費用について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose mb-8">
              <p>
                葬儀費用は、プランの形式・式場・参列者数・宗教者へのお礼（お布施）・飲食費・返礼品など多くの要素によって変わります。同じ「家族葬」でも、式場の有無や参列者の人数、宗教的な儀式の内容によって費用は異なります。
              </p>
              <p>
                稲垣屋葬儀店では、費用の内訳を事前に明確にご説明し、「何が含まれて何が含まれないか」をはっきりとお伝えします。急な追加費用が発生しないよう、丁寧に確認しながら進めます。
              </p>
              <p>
                また、葛飾区民の方には「区民葬儀制度」があります。この制度を利用することで、一定の費用の範囲内で葬儀を行うことができます。稲垣屋葬儀店は葛飾区指定の区民葬儀取扱店ですので、手続きのサポートも含めてお任せください。
              </p>
            </div>
            <Link
              href="/cost"
              className="inline-flex items-center gap-2 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group"
            >
              葬儀費用の詳細を見る
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">EMERGENCY FLOW</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              ご逝去直後にすること
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
            <p className="text-[#4a4a4a] mt-5 text-sm leading-relaxed">
              急なご逝去の際、最初に何をすればよいか分からない方のために、基本的な流れをご案内します。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-8">
            {[
              {
                step: "Step 1",
                title: "ご逝去の確認・医師への連絡",
                body: "病院でご逝去の場合は担当医が確認します。ご自宅でご逝去の場合はかかりつけ医にご連絡ください。突然のご逝去・かかりつけ医がいない場合は警察（110番）への連絡が必要な場合があります。",
              },
              {
                step: "Step 2",
                title: "葬儀社への連絡",
                body: "稲垣屋葬儀店（03-3690-0870）にご連絡ください。24時間365日対応です。病院・施設・ご自宅、いずれの場所からでも対応します。「どこに連絡したらよいか分からない」という状況でもまずお電話ください。",
              },
              {
                step: "Step 3",
                title: "お迎え・ご遺体の搬送",
                body: "稲垣屋葬儀店がご遺体をお迎えし、安置場所（ご自宅または安置施設）へお連れします。葛飾区全域に対応しています。",
              },
              {
                step: "Step 4",
                title: "葬儀の打ち合わせ",
                body: "ご安置後、葬儀の形式・日程・費用・宗教者の手配などを打ち合わせます。初めての方でも分かりやすく説明しますので、ご安心ください。",
              },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="py-6">
                  <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-1">{item.step}</p>
                  <h3
                    className="text-[#312852] text-base md:text-lg tracking-wide mb-2"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-sm leading-loose">{item.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp>
            <Link
              href="/flow/after-death"
              className="inline-flex items-center gap-2 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group"
            >
              ご逝去直後の流れ（詳細）を見る
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">WHY CHOOSE US</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              稲垣屋葬儀店が選ばれる理由
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {strengths.map((s) => (
              <StaggerItem key={s.title}>
                <div className="flex items-start gap-5 py-7">
                  <s.icon size={20} className="text-[#c9a55a] shrink-0 mt-0.5" />
                  <div>
                    <h3
                      className="text-[#312852] text-base tracking-wide mb-2"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-[#4a4a4a] text-sm leading-loose">{s.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mt-6">
            <Link
              href="/reasons"
              className="inline-flex items-center gap-2 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group"
            >
              選ばれる理由の詳細
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">SERVICE AREA</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              葛飾区全域に対応しています
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
            <p className="text-[#4a4a4a] mt-5 text-base leading-relaxed">
              稲垣屋葬儀店は、堀切を拠点に葛飾区の各地域でのご葬儀に対応しています。お住まいの地域から迅速にお伺いします。
            </p>
          </FadeInUp>

          <FadeInUp>
            <div className="flex flex-wrap gap-3 mb-8">
              {areas.map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  className="px-5 py-2.5 border border-[#e8ddf4] text-[#312852] text-sm hover:border-[#9278be] hover:text-[#5c4a80] transition-colors"
                  style={{ fontFamily: "var(--font-mincho)" }}
                >
                  {area.label}
                </Link>
              ))}
            </div>
            <Link
              href="/area"
              className="inline-flex items-center gap-2 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group"
            >
              対応エリア一覧を見る
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              よくあるご質問
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-8">
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <div className="py-6">
                  <p
                    className="text-[#312852] text-base mb-3"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    <span className="text-[#9278be] font-bold mr-2">Q</span>
                    {faq.q}
                  </p>
                  <p className="text-[#4a4a4a] text-sm leading-loose pl-6">
                    <span className="text-[#c9a55a] font-bold mr-2">A</span>
                    {faq.a}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group"
            >
              よくある質問をすべて見る（61問）
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2
                  className="text-[#312852] text-2xl tracking-[0.08em] mb-3"
                  style={{ fontFamily: "var(--font-mincho)" }}
                >
                  葛飾区の葬儀に関するご相談
                </h2>
                <p className="text-[#4a4a4a] text-base leading-relaxed">
                  24時間365日対応。事前相談・お見積もりは無料です。
                  <br className="hidden md:block" />
                  強引な勧誘は一切行いません。
                </p>
              </div>
              <div className="flex flex-col gap-3 w-full md:w-auto">
                <a
                  href="tel:0336900870"
                  className="inline-flex items-center justify-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 w-full md:w-auto"
                  style={{ fontFamily: "var(--font-mincho)" }}
                >
                  <Phone size={16} className="text-[#dfc07e]" />
                  03-3690-0870
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-[#9278be] text-[#5c4a80] hover:bg-[#ede7f6] px-8 py-4 tracking-wider transition-colors duration-300 w-full md:w-auto"
                  style={{ fontFamily: "var(--font-mincho)" }}
                >
                  <MessageCircle size={16} />
                  メールでのお問い合わせ
                </Link>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
