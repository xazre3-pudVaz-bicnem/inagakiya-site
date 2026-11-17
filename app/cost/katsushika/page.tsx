import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";
import PlanPriceTable from "../../components/plans/PlanPriceTable";

export const metadata: Metadata = pageMetadata({
  title: "葛飾区で葬儀費用を考えるときのポイント｜稲垣屋葬儀店",
  description:
    "葛飾区で葬儀費用を考えるときのポイントを稲垣屋葬儀店が解説します。区民葬儀制度の活用・地域の斎場事情・費用を整えるための考え方について丁寧にご案内します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/cost/katsushika" },
});

const katsushikaItems = [
  {
    en: "Local Feature",
    title: "葛飾区での葬儀費用の特徴",
    desc: "葛飾区は東京23区の北東部に位置し、地域に根付いた葬儀文化があります。都内の他の地域と比較して、地域密着型の葬儀社が葬儀を担うケースが多く、地元の葬儀社に相談することで地域事情に合わせた費用のご案内が受けやすい傾向があります。稲垣屋葬儀店は葛飾区に根ざした葬儀店として、地域のご事情をよく理解した上でご対応しています。",
  },
  {
    en: "Kumin-sogI",
    title: "葛飾区民葬儀制度の活用",
    desc: "「区民葬儀制度」は東京23区（特別区）共通の制度で、故人様または喪主の方が葛飾区をはじめ23区にお住まいの場合にご利用いただけます。区民葬儀取扱店（稲垣屋葬儀店はその一つです）を通じて、祭壇・霊柩車・火葬・骨つぼ（遺骨収納容器）の4品目を23区共通の協定料金で利用でき、必要なものを選んで組み合わせられます。稲垣屋葬儀店のプランはすべて区民葬儀をご利用いただけます。制度の詳細・対象範囲・料金は改定される場合があります。ご活用を検討されている方は、ご相談の際にお申し出ください。",
  },
  {
    en: "Cremation Facility",
    title: "葛飾区周辺の火葬・葬儀施設",
    desc: "葛飾区には区が運営する火葬場・斎場はありません。区内には東京博善が運営する民営の四ツ木斎場（葛飾区白鳥、火葬場・式場）があり、23区では多くの火葬がこうした民営の火葬場で行われています。東京都が運営する瑞江葬儀所（江戸川区）などの公営施設もあり、公営・民営で費用が異なります。いずれの施設も予約状況・日程によって利用状況が変わりますので、早めのご相談をお勧めします。施設の特徴・費用の目安については、ご相談の中でご案内します。",
  },
  {
    en: "Transport",
    title: "葛飾区内の搬送について",
    desc: "葛飾区内でご逝去された場合（病院・施設・ご自宅など）、稲垣屋葬儀店が迅速にお迎えに伺います。24時間365日対応しており、深夜・早朝も対応可能です。葛飾区内であれば搬送距離が比較的短い場合が多く、搬送費用の面でも対応しやすい地域です。",
  },
  {
    en: "History",
    title: "稲垣屋葬儀店と葛飾区",
    desc: "稲垣屋葬儀店は明治11年頃に足立区千住で創業し、葛飾区では60年以上、地域のご葬儀をお手伝いしてきました（現在は葛飾区堀切を拠点としています）。葛飾区民葬儀取扱店として認定を受けており、長年にわたって地域の方々に寄り添った葬儀を提供してきた実績があります。「葛飾区での葬儀について相談したい」という方は、ぜひ稲垣屋葬儀店にご相談ください。",
  },
];

const pointItems = [
  { title: "区民葬儀制度の利用資格を事前確認する", desc: "区民葬儀制度の利用には条件があります。ご逝去された方または喪主の方が「東京23区にお住まいである」ことが基本ですが、詳細な条件については稲垣屋葬儀店へのご相談または区役所の窓口でご確認ください。" },
  { title: "早めに葬儀社に相談する", desc: "火葬場・式場は予約が混み合う時期があります。特に年末年始・お盆・友引の翌日などは予約が取りにくい場合があります。早めにご相談いただくことで日程の選択肢が広がります。" },
  { title: "地域の慣習・風習を踏まえた葬儀", desc: "葛飾区には地域固有の葬儀・法要の慣習があることがあります。地域に根ざした稲垣屋葬儀店では、こうした地域事情もふまえたご提案が可能です。" },
];

const faqItems = [
  {
    q: "葛飾区民葬儀制度を利用するには何が必要ですか？",
    a: "区民葬儀制度は東京23区共通の制度で、故人様または喪主が23区にお住まいであることが基本的な条件です。ご利用の際は区民葬儀取扱店に「区民葬儀を利用したい」とお伝えください。区民葬儀券は死亡届の提出とあわせて区役所で申請します。詳細な条件・手続きについては区役所の窓口または稲垣屋葬儀店へのご相談でご確認ください。申請サポートも承っています。",
  },
  {
    q: "葛飾区内の火葬場の予約はどうすればよいですか？",
    a: "火葬場の予約手配は、稲垣屋葬儀店がサポートいたします。ご逝去後、葬儀の日程を決める際に火葬場の空き状況も確認しながら進めますので、お客様ご自身で直接予約いただく必要は基本的にありません。",
  },
  {
    q: "稲垣屋葬儀店はどこにありますか？",
    a: "稲垣屋葬儀店は東京都葛飾区堀切6-33-4に所在しています。葛飾区内はもちろん、近隣エリアにも対応しています。お電話（03-3690-0870）は24時間365日受け付けておりますので、いつでもご相談ください。",
  },
  {
    q: "葛飾区外の方でも稲垣屋葬儀店に依頼できますか？",
    a: "はい、葛飾区外の方からのご相談・ご依頼も承っています。特に葛飾区近隣（墨田区・足立区・荒川区・江戸川区など）のご遺族の方からもご相談いただくことがあります。まずはお電話でご相談ください。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "葛飾区で葬儀費用を考えるときのポイント｜稲垣屋葬儀店",
  description:
    "葛飾区で葬儀費用を考えるときのポイントを稲垣屋葬儀店が解説します。区民葬儀制度の活用・地域の斎場事情・費用を整えるための考え方について丁寧にご案内します。",
  url: "https://www.inagakiyasougiten.com/cost/katsushika",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀費用", item: "https://www.inagakiyasougiten.com/cost" },
      { "@type": "ListItem", position: 3, name: "葛飾区で葬儀費用を考えるときのポイント", item: "https://www.inagakiyasougiten.com/cost/katsushika" },
    ],
  },
};

export default function CostKatsushikaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="葛飾区での葬儀費用を考えるポイント"
        subtitle="地域に根ざした葬儀社として、葛飾区ならではの情報をご案内します"
        en="KATSUSHIKA FUNERAL COST"
      />
      <Breadcrumb items={[{ label: "葬儀費用", href: "/cost" }, { label: "葛飾区での費用のポイント" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">KATSUSHIKA</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              葛飾区で葬儀費用を考えるポイント
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              葛飾区で葬儀を行う場合、地域固有の制度・施設・慣習を知っておくことで、費用の見通しが立てやすくなります。稲垣屋葬儀店は明治11年頃に足立区千住で創業し、葛飾区では60年以上にわたり地域に根ざした葬儀店として、地域の皆様のご葬儀をお手伝いしてきました。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              故人様または喪主の方が葛飾区をはじめ東京23区にお住まいの場合は、「区民葬儀制度」の協定料金を活用して葬儀を行うことができます。以下に、葛飾区での葬儀費用に関するポイントをご説明します。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {katsushikaItems.map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-1">{item.en}</p>
                  <h4 className="text-[#312852] text-lg tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.title}
                  </h4>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mb-10">
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              葛飾区での葬儀費用を整えるためのポイント
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {pointItems.map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-6">
                  <h4 className="text-[#312852] text-base tracking-wide mb-1.5" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.title}
                  </h4>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mb-10">
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              よくあるご質問
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {faqItems.map((item) => (
              <StaggerItem key={item.q}>
                <div className="py-6">
                  <p className="text-[#312852] text-base mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                    <span className="text-[#9278be] font-bold mr-2">Q</span>
                    {item.q}
                  </p>
                  <p className="text-[#4a4a4a] text-sm leading-loose pl-6">
                    <span className="text-[#c9a55a] font-bold mr-2">A</span>
                    {item.a}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp>
            <div className="flex flex-wrap gap-4">
              <Link href="/plans/kumin-funeral" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                区民葬儀プランについて<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/cost/reduce" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                費用を抑えるための考え方<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/katsushika-funeral" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                葛飾区の葬儀について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/cost/facility-cost" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                式場・火葬・安置の費用<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/cost" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                葬儀費用一覧に戻る<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-8">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">PLAN &amp; PRICE</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>稲垣屋葬儀店のプラン料金</h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp>
            <PlanPriceTable />
          </FadeInUp>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              ご不明な点はお気軽にご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              事前相談・お見積もりは無料です。
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
