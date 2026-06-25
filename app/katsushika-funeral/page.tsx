import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import Breadcrumb from "../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, Phone, MessageCircle, Award, Shield, Clock, MapPin, Users, CheckCircle2 } from "lucide-react";
import RelatedColumns from "../components/RelatedColumns";

export const metadata: Metadata = {
  title: "葛飾区で葬儀なら稲垣屋葬儀店｜家族葬・区民葬儀・火葬式に対応",
  description:
    "葛飾区堀切の稲垣屋葬儀店は、葛飾区民葬儀取扱・葬祭ディレクター1級の地域密着葬儀社です。家族葬・一日葬・火葬式・区民葬儀に対応。24時間365日ご相談承ります。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/katsushika-funeral" },
  openGraph: {
    title: "葛飾区で葬儀なら稲垣屋葬儀店｜家族葬・区民葬儀・火葬式に対応",
    description:
      "葛飾区堀切の稲垣屋葬儀店。葛飾区民葬儀取扱・葬祭ディレクター1級。家族葬・一日葬・火葬式・区民葬儀に対応。24時間365日対応。",
  },
};

const planComparisonRows = [
  {
    name: "家族葬",
    href: "/plans/family-funeral",
    wake: "あり",
    farewell: "あり",
    costRange: "ご相談ください",
    note: "近親者のみで静かにお別れ。参列者が少ない分、故人と過ごす時間をゆっくり取れる",
  },
  {
    name: "一日葬",
    href: "/plans/oneday-funeral",
    wake: "なし",
    farewell: "あり",
    costRange: "ご相談ください",
    note: "お通夜を省略。告別式と火葬を一日で執り行い、ご遺族の負担を軽減",
  },
  {
    name: "火葬式",
    href: "/plans/cremation",
    wake: "なし",
    farewell: "なし",
    costRange: "ご相談ください",
    note: "お通夜・告別式を行わず火葬のみ。ごく近しい方だけで静かにお見送り",
  },
  {
    name: "一般葬",
    href: "/plans/general-funeral",
    wake: "あり",
    farewell: "あり",
    costRange: "ご相談ください",
    note: "故人と縁のある多くの方々をお迎えする伝統的な葬儀形式",
  },
  {
    name: "区民葬儀",
    href: "/plans/kumin-funeral",
    wake: "あり",
    farewell: "あり",
    costRange: "区の定めによる",
    note: "葛飾区が設けた制度。葛飾区民が利用できる。稲垣屋は区指定取扱店",
  },
];

const strengths = [
  {
    icon: Award,
    title: "葬祭ディレクター1級を取得したスタッフが対応",
    desc: "葬祭ディレクター1級は厚生労働省が認定する国家資格で、葬儀全般に関する高度な知識と実務能力を証明するものです。稲垣屋葬儀店には同資格を持つスタッフが在籍しており、葛飾区内のご葬儀を専門的な知見のもとでサポートします。資格の裏付けある対応で、初めて葬儀を行うご遺族も安心してお任せいただけます。",
  },
  {
    icon: Shield,
    title: "葛飾区民葬儀の指定取扱店として認定",
    desc: "稲垣屋葬儀店は、葛飾区が指定する区民葬儀取扱店として認定されています。葛飾区民の皆さまは区民葬儀制度を利用することで、区が定める範囲内での費用で葬儀を行うことができます。制度の説明から申請書類の手続きまで、丁寧にサポートしますのでご不明な点はお気軽にご相談ください。",
  },
  {
    icon: Clock,
    title: "24時間365日、深夜・早朝・休日も対応",
    desc: "ご逝去は時間帯を選びません。深夜でも早朝でも、お盆・年末年始を問わず、稲垣屋葬儀店は24時間365日対応しています。まずお電話ください（03-3690-0870）。電話口でご状況をお聞きし、その後の手順を落ち着いて丁寧にご案内します。「どこに連絡すればよいか分からない」という方もご遠慮なくどうぞ。",
  },
  {
    icon: MapPin,
    title: "創業明治11年頃より葛飾区堀切に根付いた地域密着",
    desc: "稲垣屋葬儀店は創業明治11年頃より、葛飾区堀切を拠点として地域の皆さまのご葬儀をお手伝いしてきました。葛飾区内の斎場・火葬場・宗教者・各行政手続きに精通しており、地元ならではの知見でスムーズに葬儀を進めることができます。地域に根付いた信頼を大切にしています。",
  },
  {
    icon: Users,
    title: "認定飯田葬儀相談員による丁寧なご相談対応",
    desc: "稲垣屋葬儀店には認定飯田葬儀相談員が在籍しています。葬儀の費用・流れ・プラン選びの疑問に、専門知識を持ちながらも分かりやすい言葉でお答えします。事前相談は無料です。相談したからといって必ずご依頼いただく義務はなく、強引な勧誘は一切行いません。どうぞ気軽にご連絡ください。",
  },
];

const selectionPoints = [
  {
    title: "地域に根付いた葬儀社かどうかを確認する",
    body: "葛飾区内の斎場・火葬場・宗教者とのつながり、地域の行政手続きへの精通度は、葬儀をスムーズに進めるうえで重要です。地域外の大手業者では、地元特有の事情に対応しにくいケースもあります。創業や実績年数、対応エリアを事前に確認しておくとよいでしょう。",
  },
  {
    title: "資格・認定・所属を確認する",
    body: "葬祭ディレクター1級（厚生労働省認定）を持つスタッフが在籍しているか、業界団体の組合に加盟しているかを確認することで、サービスの質や信頼性をある程度把握できます。資格は葬儀社を選ぶ際の目安のひとつです。",
  },
  {
    title: "費用の内訳が明確かどうか",
    body: "葬儀費用は「基本料金」だけでなく、式場使用料・返礼品・飲食費・宗教者へのお布施・搬送費など多くの要素が加わります。見積もりの内訳が分かりやすく示されるか、追加費用の発生条件が明確かどうかを事前に確認することが重要です。",
  },
  {
    title: "24時間365日の対応体制があるか",
    body: "ご逝去は昼夜問いません。深夜・早朝でも連絡が取れ、迅速にお迎えに来てもらえるかどうかは葬儀社選びの重要な基準です。電話がつながるか、実際に対応してもらえるかを事前に確認しておくと安心です。",
  },
  {
    title: "事前相談を受け付けているか",
    body: "「もしものとき」に備えた事前相談を受け付けているか、相談費用が無料かどうかも確認しましょう。事前に費用・流れ・プランを把握しておくことで、いざというときの判断がスムーズになります。強引な勧誘がないかも重要なポイントです。",
  },
];

const checkItems = [
  "葛飾区内の斎場・火葬場の種類と特徴",
  "葬儀の形式（家族葬・一日葬・火葬式・一般葬・区民葬儀）とその違い",
  "稲垣屋葬儀店の5つの特徴と強み",
  "葛飾区民葬儀制度の仕組みと利用条件",
  "葬儀社を選ぶ際に確認すべき5つのポイント",
  "急なご逝去の際にまず取るべき行動",
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
    a: "はい、24時間365日対応しております。深夜・早朝・休日を問わず、お電話（03-3690-0870）にてご連絡ください。まずはご連絡いただければ、ご状況をお聞きしながら次のステップを丁寧にご案内します。",
  },
  {
    q: "葛飾区民葬儀とはどのような制度ですか？",
    a: "葛飾区が設けた葬儀制度で、葛飾区民の方が利用できます。稲垣屋葬儀店は葛飾区が指定する区民葬儀取扱店として認定されており、区が定める範囲内の費用で葬儀を行うことができます。申請手続きのサポートも含めてお任せください。詳細は区民葬儀のページもご参照ください。",
  },
  {
    q: "葛飾区内の病院や施設からご遺体を搬送してもらえますか？",
    a: "はい、葛飾区内の病院・施設・ご自宅からの搬送に対応しています。堀切・お花茶屋・青戸・立石・四つ木・亀有・金町・柴又・新小岩など、葛飾区全域に24時間365日対応します。お電話一本でお迎えにまいります。",
  },
  {
    q: "葛飾区での葬儀費用の目安を教えてください。",
    a: "葬儀費用はプランの形式・式場・参列者数・宗教者へのお礼・返礼品など多くの要素によって変わります。まずは事前相談（無料）で概算をお伝えすることができます。葛飾区民の方は区民葬儀制度を活用する方法もご案内できますので、お気軽にお問い合わせください。",
  },
  {
    q: "家族葬と一般葬はどのように選べばよいですか？",
    a: "ご参列いただく方の人数、故人の交友関係の広さ、ご遺族のご希望・ご体力などを総合的に考慮してご判断いただくことが多いです。「ゆっくりと身内だけで送り出したい」という場合は家族葬や一日葬を、「故人と縁のあった多くの方にお別れの機会を設けたい」という場合は一般葬を選ばれることが多い傾向にあります。稲垣屋葬儀店ではご状況をお聞きしながら最適なプランをご提案します。",
  },
];

const firstStepItems = [
  {
    title: "葬儀社にまず連絡する",
    body: "病院・施設・ご自宅でご逝去が確認されたら、まず葬儀社にご連絡ください（03-3690-0870、24時間対応）。「どこに連絡すればよいか分からない」という状況でも、電話口でご状況をお聞きし、必要な手順を一つずつご案内します。葛飾区全域に迅速に対応します。",
  },
  {
    title: "ご遺体の搬送先を決める",
    body: "ご逝去後は速やかにご遺体を安置場所へ搬送する必要があります。搬送先はご自宅または稲垣屋葬儀店が手配する安置施設です。葛飾区内の病院・施設どこからでも搬送に対応しています。",
  },
  {
    title: "死亡診断書・死体検案書を受け取る",
    body: "ご逝去が確認されたら医師から死亡診断書（または死体検案書）が発行されます。この書類は死亡届の提出・各種手続きに必要です。稲垣屋葬儀店でも手続きのサポートを行います。",
  },
  {
    title: "葬儀の形式・日程を決める",
    body: "搬送・安置後、葬儀の形式（家族葬・一日葬・火葬式・一般葬・区民葬儀）と日程を決定します。葛飾区内の斎場・火葬場の空き状況を確認しながら、ご希望に沿った日程をご提案します。",
  },
  {
    title: "葛飾区民葬儀制度の活用を検討する",
    body: "葛飾区民の方は区民葬儀制度を利用できます。稲垣屋葬儀店は区指定の取扱店ですので、制度の説明から申請書類の準備まで一貫してサポートします。制度の対象範囲については事前相談でご確認ください。",
  },
  {
    title: "費用の内訳を事前に確認する",
    body: "葬儀費用は基本料金に加え、式場使用料・搬送費・宗教者へのお礼・返礼品・飲食費などが加わります。稲垣屋葬儀店では見積もりの内訳を明確にご説明し、ご納得いただいたうえで進めます。不明な点は遠慮なくお聞きください。",
  },
  {
    title: "宗教・宗派の確認",
    body: "仏式・神式・キリスト教式・無宗教式など、葬儀の形式は宗教・宗派によって異なります。故人の宗教・宗派・菩提寺の有無を事前に把握しておくとスムーズです。宗教者の手配についても稲垣屋葬儀店がサポートします。",
  },
];

export default function KatsushikaFuneralPage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "葛飾区で葬儀なら稲垣屋葬儀店｜家族葬・区民葬儀・火葬式に対応",
    description:
      "葛飾区堀切の稲垣屋葬儀店は、葛飾区民葬儀取扱・葬祭ディレクター1級の地域密着葬儀社です。家族葬・一日葬・火葬式・区民葬儀に対応。24時間365日ご相談承ります。",
    url: "https://www.inagakiyasougiten.com/katsushika-funeral",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com/" },
        { "@type": "ListItem", position: 2, name: "葛飾区の葬儀", item: "https://www.inagakiyasougiten.com/katsushika-funeral" },
      ],
    },
  };

  const funeralHomeJsonLd = {
    "@context": "https://schema.org",
    "@type": "FuneralHome",
    name: "稲垣屋葬儀店",
    url: "https://www.inagakiyasougiten.com",
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
        { "@type": "Offer", name: "一般葬", url: "https://www.inagakiyasougiten.com/plans/general-funeral" },
        { "@type": "Offer", name: "区民葬儀", url: "https://www.inagakiyasougiten.com/plans/kumin-funeral" },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(funeralHomeJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="葛飾区の葬儀"
        subtitle="地域に根付いた葬儀社として、誠実にお手伝いします"
        en="FUNERAL IN KATSUSHIKA"
      />
      <Breadcrumb items={[{ label: "葛飾区の葬儀" }]} />

      {/* ─── このページでわかること ─────────────────────────── */}
      <section className="py-12 md:py-16 bg-white border-b border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="border border-[#e8ddf4] p-8">
              <p
                className="text-[#312852] text-sm tracking-[0.25em] mb-5"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                このページでわかること
              </p>
              <ul className="divide-y divide-[#e8ddf4]">
                {checkItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 py-3">
                    <CheckCircle2 size={16} className="text-[#c9a55a] shrink-0 mt-0.5" />
                    <span className="text-[#4a4a4a] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 space-y-4 text-[#4a4a4a] text-base leading-loose">
              <p>
                葛飾区で葬儀をご検討の際は、稲垣屋葬儀店（葛飾区堀切）にご相談ください。創業明治11年頃より地域に根付き、葬祭ディレクター1級・葛飾区民葬儀取扱店として、家族葬・一日葬・火葬式・一般葬・区民葬儀のすべてに対応しています。
              </p>
              <p>
                24時間365日対応のため、急なご逝去の際も深夜・早朝を問わずお電話ください（03-3690-0870）。事前相談・お見積もりは無料です。地域の事情を熟知した地元の葬儀社として、ご家族の状況に合わせた葬儀をご提案します。
              </p>
              <p>
                葛飾区民の方には区民葬儀制度の活用もご案内できます。制度の内容から申請手続きまで、稲垣屋葬儀店が一貫してサポートします。
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ─── 葛飾区で葬儀を考え始めたら ─────────────────────── */}
      <section className="py-20 md:py-32 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FIRST STEPS</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              葛飾区で葬儀を考え始めたら最初に確認すること
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
            <p className="text-[#4a4a4a] mt-5 text-base leading-relaxed">
              葛飾区で葬儀が必要になったとき、または「もしものとき」に備えて事前に確認しておくべきことを整理しました。急なご逝去の際には判断しなければならないことが多くあります。事前に把握しておくことで、いざというとき落ち着いて対応できます。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {firstStepItems.map((item, idx) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <div className="flex items-start gap-5">
                    <span
                      className="text-[#c9a55a] text-xs tracking-[0.2em] shrink-0 pt-1 w-6"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3
                        className="text-[#312852] text-base md:text-lg tracking-wide mb-2"
                        style={{ fontFamily: "var(--font-mincho)" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-[#4a4a4a] text-sm leading-loose">{item.body}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mt-8">
            <Link
              href="/flow/after-death"
              className="inline-flex items-center gap-2 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group"
            >
              ご逝去直後の流れ（詳細）を見る
              <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* ─── 稲垣屋の5つの特徴 ─────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">WHY CHOOSE US</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              稲垣屋葬儀店の5つの特徴
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
            <p className="text-[#4a4a4a] mt-5 text-base leading-relaxed">
              葛飾区で長年にわたり葬儀をお手伝いしてきた稲垣屋葬儀店が、地域の皆さまに選ばれる理由をご紹介します。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {strengths.map((s) => (
              <StaggerItem key={s.title}>
                <div className="flex items-start gap-5 py-8">
                  <s.icon size={20} className="text-[#c9a55a] shrink-0 mt-1" />
                  <div>
                    <h3
                      className="text-[#312852] text-base md:text-lg tracking-wide mb-3"
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
              href="/consultation"
              className="inline-flex items-center gap-2 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group"
            >
              事前相談（無料）のご案内
              <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* ─── 葛飾区の葬儀プラン比較 ──────────────────────────── */}
      <section className="py-16 md:py-24 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">PLAN COMPARISON</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              葛飾区の葬儀プラン比較
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
            <p className="text-[#4a4a4a] mt-5 text-base leading-relaxed">
              稲垣屋葬儀店では5種類の葬儀プランに対応しています。どのプランが合うかお悩みの方は、事前相談（無料）でご一緒にご検討します。
            </p>
          </FadeInUp>

          <FadeInUp>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-t border-[#e8ddf4]">
                <thead>
                  <tr className="border-b border-[#e8ddf4]">
                    <th
                      className="text-left text-[#312852] py-4 pr-4 font-normal tracking-wide w-24"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      プラン
                    </th>
                    <th className="text-left text-[#312852] py-4 px-3 font-normal tracking-wide w-16">お通夜</th>
                    <th className="text-left text-[#312852] py-4 px-3 font-normal tracking-wide w-16">告別式</th>
                    <th className="text-left text-[#312852] py-4 px-3 font-normal tracking-wide w-28">費用感</th>
                    <th className="text-left text-[#312852] py-4 pl-3 font-normal tracking-wide">特徴・備考</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e8ddf4]">
                  {planComparisonRows.map((row) => (
                    <tr key={row.name}>
                      <td className="py-5 pr-4 align-top">
                        <Link
                          href={row.href}
                          className="text-[#5c4a80] hover:text-[#312852] transition-colors"
                          style={{ fontFamily: "var(--font-mincho)" }}
                        >
                          {row.name}
                        </Link>
                      </td>
                      <td className="py-5 px-3 text-[#4a4a4a] align-top">{row.wake}</td>
                      <td className="py-5 px-3 text-[#4a4a4a] align-top">{row.farewell}</td>
                      <td className="py-5 px-3 text-[#4a4a4a] align-top text-xs leading-relaxed">{row.costRange}</td>
                      <td className="py-5 pl-3 text-[#4a4a4a] text-xs leading-relaxed align-top">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[#7a7a7a] text-xs mt-4 leading-relaxed">
              費用は葬儀の形式・式場・参列者数・宗教者へのお礼・飲食費・返礼品など多くの要素によって変わります。詳細は事前相談（無料）でご確認ください。
            </p>
          </FadeInUp>

          <FadeInUp className="mt-8 flex flex-wrap gap-5">
            <Link
              href="/plans/family-funeral"
              className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group"
            >
              家族葬の詳細
              <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/plans/oneday-funeral"
              className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group"
            >
              一日葬の詳細
              <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/plans/cremation"
              className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group"
            >
              火葬式の詳細
              <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/plans/general-funeral"
              className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group"
            >
              一般葬の詳細
              <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/plans/kumin-funeral"
              className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group"
            >
              区民葬儀の詳細
              <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* ─── 葬儀社を選ぶ5つのポイント ────────────────────────── */}
      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">HOW TO CHOOSE</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              葛飾区で葬儀社を選ぶときの5つのポイント
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
            <p className="text-[#4a4a4a] mt-5 text-base leading-relaxed">
              葬儀社選びは、急いでいる状況の中で判断しなければならないことが多いです。事前に確認すべきポイントを把握しておくと、いざというときにスムーズに選ぶことができます。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {selectionPoints.map((point, idx) => (
              <StaggerItem key={point.title}>
                <div className="flex items-start gap-5 py-7">
                  <span
                    className="text-[#c9a55a] text-xs tracking-[0.2em] shrink-0 pt-1 w-6"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3
                      className="text-[#312852] text-base tracking-wide mb-2"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      {point.title}
                    </h3>
                    <p className="text-[#4a4a4a] text-sm leading-loose">{point.body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mt-6">
            <Link
              href="/katsushika-funeral/choose-funeral-home"
              className="inline-flex items-center gap-2 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group"
            >
              葛飾区で葬儀社を選ぶ際の詳細ガイド
              <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* ─── 葛飾区の費用について ──────────────────────────────── */}
      <section className="py-16 md:py-24 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-8">
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
                葛飾区での葬儀費用は、プランの形式・式場の有無・参列者数・宗教者へのお礼（お布施）・飲食費・返礼品などの要素によって変わります。同じ「家族葬」と呼ばれる形式でも、式場を使うかどうか・参列者の人数・宗教的な儀式の内容によって費用は大きく異なります。
              </p>
              <p>
                稲垣屋葬儀店では、お見積もりの際に費用の内訳を分かりやすくご説明します。「何が含まれて何が含まれないか」を明確にお伝えし、ご納得いただいたうえで進めます。急な追加費用が発生しないよう、丁寧に確認しながら進めることを心がけています。
              </p>
              <p>
                葛飾区民の方は「区民葬儀制度」を利用することができます。稲垣屋葬儀店は葛飾区指定の区民葬儀取扱店として、制度の内容説明から申請手続きまで一貫してサポートします。
              </p>
            </div>
            <Link
              href="/cost"
              className="inline-flex items-center gap-2 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group"
            >
              葬儀費用の詳細ページを見る
              <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* ─── 対応エリア ────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">SERVICE AREA</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              葛飾区の対応エリア
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
            <p className="text-[#4a4a4a] mt-5 text-base leading-relaxed">
              稲垣屋葬儀店は、葛飾区堀切を拠点として葛飾区の各地域でのご葬儀に24時間365日対応しています。お住まいの地域から迅速にお伺いします。
            </p>
          </FadeInUp>

          <FadeInUp>
            <div className="divide-y divide-[#e8ddf4] mb-8">
              {areas.map((area) => (
                <div key={area.href} className="py-4">
                  <Link
                    href={area.href}
                    className="inline-flex items-center gap-2 text-[#312852] hover:text-[#5c4a80] transition-colors group text-base"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    <ChevronRight size={13} className="text-[#c9a55a] group-hover:translate-x-1 transition-transform" />
                    葛飾区{area.label}の葬儀
                  </Link>
                </div>
              ))}
            </div>
            <Link
              href="/area"
              className="inline-flex items-center gap-2 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group"
            >
              対応エリア一覧を見る
              <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* ─── FAQ ───────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-[#faf9f7] border-t border-[#e8ddf4]">
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
                <div className="py-7">
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

          <FadeInUp className="flex flex-wrap gap-5">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group"
            >
              よくある質問をすべて見る
              <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/katsushika-funeral/emergency"
              className="inline-flex items-center gap-2 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group"
            >
              急なご逝去の際にすること
              <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
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
          <RelatedColumns slugs={["katsushika-funeral-first-guide", "what-to-do-after-death-katsushika", "funeral-home-choice-katsushika", "funeral-flow-basic", "funeral-preparation-checklist"]} />
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
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
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                  <Link
                    href="/consultation"
                    className="inline-flex items-center gap-1 text-[#5c4a80] text-xs hover:text-[#312852] transition-colors group"
                  >
                    事前相談について
                    <ChevronRight size={11} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/flow/after-death"
                    className="inline-flex items-center gap-1 text-[#5c4a80] text-xs hover:text-[#312852] transition-colors group"
                  >
                    ご逝去後の流れ
                    <ChevronRight size={11} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
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
