import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import { FadeInUp, StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "葛飾区の葬儀 対応エリア｜堀切・亀有・金町・柴又など｜稲垣屋葬儀店",
  description:
    "稲垣屋葬儀店の対応エリア。葛飾区の堀切・お花茶屋・青戸・立石・亀有・金町・柴又・高砂・水元・小菅など、葛飾区全域に対応しています。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/area" },
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "葛飾区の葬儀 対応エリア｜堀切・亀有・金町・柴又など｜稲垣屋葬儀店",
  description:
    "稲垣屋葬儀店の対応エリア。葛飾区の堀切・お花茶屋・青戸・立石・亀有・金町・柴又・高砂・水元・小菅など、葛飾区全域に対応しています。",
  url: "https://www.inagakiyasougiten.com/area",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "対応エリア", item: "https://www.inagakiyasougiten.com/area" },
    ],
  },
};

const areas = [
  {
    href: "/area/horikiri",
    name: "堀切",
    en: "HORIKIRI",
    desc: "稲垣屋葬儀店の所在地。堀切菖蒲園でも知られる閑静なエリアです。最も近い拠点としてすぐにお伺いできます。",
    note: "本店所在地",
  },
  {
    href: "/area/horikiri-shobuen",
    name: "堀切菖蒲園",
    en: "HORIKIRI-SHOBUEN",
    desc: "堀切菖蒲園駅周辺エリア。本店から最も近いエリアのひとつとして迅速にご対応いたします。",
    note: null,
  },
  {
    href: "/area/ohanajaya",
    name: "お花茶屋",
    en: "OHANAJAYA",
    desc: "京成本線お花茶屋駅周辺。堀切の拠点からほど近く、迅速にご対応いたします。",
    note: null,
  },
  {
    href: "/area/aoto",
    name: "青戸",
    en: "AOTO",
    desc: "京成本線青砥駅周辺。葛飾区中部の住宅地で、古くから栄えるエリアです。",
    note: null,
  },
  {
    href: "/area/tateishi",
    name: "立石",
    en: "TATEISHI",
    desc: "京成押上線立石駅周辺。下町情緒あふれる商店街で知られるエリアです。",
    note: null,
  },
  {
    href: "/area/higashi-tateishi",
    name: "東立石",
    en: "HIGASHI-TATEISHI",
    desc: "立石の東側に広がる住宅地。葛飾区内のご相談に迅速に対応します。",
    note: null,
  },
  {
    href: "/area/yotsugi",
    name: "四つ木",
    en: "YOTSUGI",
    desc: "京成押上線四ツ木駅周辺。葛飾区立四ツ木斎場があり、火葬・葬儀のご相談もお気軽に。",
    note: null,
  },
  {
    href: "/area/higashi-yotsugi",
    name: "東四つ木",
    en: "HIGASHI-YOTSUGI",
    desc: "四つ木の東側エリア。葛飾区内全域に対応した稲垣屋葬儀店がお手伝いします。",
    note: null,
  },
  {
    href: "/area/kameari",
    name: "亀有",
    en: "KAMEARI",
    desc: "JR常磐線（各停）亀有駅周辺。下町の温かみが残るエリアからのご相談もお待ちしています。",
    note: null,
  },
  {
    href: "/area/nishi-kameari",
    name: "西亀有",
    en: "NISHI-KAMEARI",
    desc: "亀有の西側に位置するエリア。葛飾区全域からのご連絡に24時間対応しています。",
    note: null,
  },
  {
    href: "/area/kanamachi",
    name: "金町",
    en: "KANAMACHI",
    desc: "JR常磐線・京成金町線金町駅周辺。葛飾区北部のエリアからも迅速に対応いたします。",
    note: null,
  },
  {
    href: "/area/higashi-kanamachi",
    name: "東金町",
    en: "HIGASHI-KANAMACHI",
    desc: "金町の東側に広がるエリア。葛飾区北東部からのご相談にも対応します。",
    note: null,
  },
  {
    href: "/area/shibamata",
    name: "柴又",
    en: "SHIBAMATA",
    desc: "京成金町線柴又駅周辺。柴又帝釈天で有名な歴史ある地域からのご相談もお気軽に。",
    note: null,
  },
  {
    href: "/area/takasago",
    name: "高砂",
    en: "TAKASAGO",
    desc: "京成本線高砂駅周辺。葛飾区の交通の要所からのご相談にお応えします。",
    note: null,
  },
  {
    href: "/area/kamakura",
    name: "鎌倉",
    en: "KAMAKURA",
    desc: "葛飾区鎌倉エリア。地域の皆さまのご葬儀をサポートします。",
    note: null,
  },
  {
    href: "/area/shinkoiwa",
    name: "新小岩",
    en: "SHINKOIWA",
    desc: "JR総武線新小岩駅周辺。葛飾区南西部、江戸川区との境界付近からのご相談に対応します。",
    note: null,
  },
  {
    href: "/area/okudo",
    name: "奥戸",
    en: "OKUDO",
    desc: "葛飾区奥戸エリア。地域に根付いた稲垣屋葬儀店がお力になります。",
    note: null,
  },
  {
    href: "/area/niijuku",
    name: "新宿",
    en: "NIIJUKU",
    desc: "葛飾区新宿（にいじゅく）エリア。葛飾区内全域のご相談に対応します。",
    note: null,
  },
  {
    href: "/area/mizumoto",
    name: "水元",
    en: "MIZUMOTO",
    desc: "水元公園で知られる葛飾区北部のエリア。遠方でも迅速にお伺いします。",
    note: null,
  },
  {
    href: "/area/higashi-mizumoto",
    name: "東水元",
    en: "HIGASHI-MIZUMOTO",
    desc: "水元の東側に位置するエリア。葛飾区全域を対応エリアとする稲垣屋葬儀店がお手伝いします。",
    note: null,
  },
  {
    href: "/area/minami-mizumoto",
    name: "南水元",
    en: "MINAMI-MIZUMOTO",
    desc: "水元南部エリア。24時間365日のご連絡に対応しています。",
    note: null,
  },
  {
    href: "/area/kosuge",
    name: "小菅",
    en: "KOSUGE",
    desc: "葛飾区小菅エリア。葛飾区西部からのご相談にもお応えします。",
    note: null,
  },
  {
    href: "/area/takaramachi",
    name: "宝町",
    en: "TAKARAMACHI",
    desc: "葛飾区宝町エリア。地域のご家族のお別れをお手伝いします。",
    note: null,
  },
  {
    href: "/area/shiratori",
    name: "白鳥",
    en: "SHIRATORI",
    desc: "葛飾区白鳥エリア。葛飾区全域を対応範囲として迅速にご対応します。",
    note: null,
  },
];

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "葛飾区の葬儀 対応エリア一覧｜稲垣屋葬儀店",
  itemListElement: areas.map((a, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${a.name}の葬儀`,
    url: `https://www.inagakiyasougiten.com${a.href}`,
  })),
};

export default function AreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />

      <PageHero
        title="対応エリア"
        subtitle="葛飾区全域に対応した地域密着の葬儀社"
        en="SERVICE AREA"
      />

      {/* このページでわかること */}
      <section className="py-12 bg-white border-b border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ON THIS PAGE</p>
            <h2
              className="text-[#312852] text-xl md:text-2xl tracking-[0.08em] mb-6"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              このページでわかること
            </h2>
            <ul className="divide-y divide-[#e8ddf4]">
              {[
                "稲垣屋葬儀店の対応エリア（葛飾区全域）",
                "堀切・お花茶屋・青戸・立石・亀有・金町・柴又・高砂・水元・小菅など各エリアの案内",
                "各エリアの詳細ページへのリンク",
                "葛飾区外の方へのご案内",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 py-3">
                  <span className="text-[#c9a55a] text-xs mt-1 shrink-0">—</span>
                  <span className="text-[#4a4a4a] text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </FadeInUp>
        </div>
      </section>

      {/* Section 1: 概要 */}
      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ABOUT OUR COVERAGE</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              葛飾区全域に対応しています
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              稲垣屋葬儀店は、東京都葛飾区堀切6-33-4を拠点とする地域密着の葬儀社です。明治11年頃の創業以来、葛飾区に根ざして地域の皆様のご葬儀をお手伝いしてまいりました。
            </p>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              堀切・お花茶屋・青戸・立石・四つ木・亀有・金町・柴又・高砂・水元・小菅など、葛飾区内のどのエリアからもご相談いただけます。24時間365日対応しておりますので、深夜・早朝を問わずお電話ください。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              事前のご相談は無料で承っております。「いざというとき、どうすればよいか」「費用はどのくらいかかるか」など、どんな小さなことでもお気軽にお問い合わせください。
            </p>
          </FadeInUp>

          <FadeInUp className="mt-10 flex items-center gap-3">
            <MapPin size={16} className="text-[#9278be] shrink-0" />
            <span className="text-[#4a4a4a] text-sm">
              稲垣屋葬儀店　東京都葛飾区堀切6-33-4　TEL：03-3690-0870
            </span>
          </FadeInUp>
        </div>
      </section>

      {/* Section 2: エリア一覧 */}
      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">AREA LIST</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              各エリアのご案内
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {areas.map((area) => (
              <StaggerItem key={area.href}>
                <Link href={area.href} className="flex items-center justify-between gap-6 py-7 group">
                  <div className="flex-1">
                    <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-1">{area.en}</p>
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3
                        className="text-[#312852] text-xl tracking-wide group-hover:text-[#5c4a80] transition-colors"
                        style={{ fontFamily: "var(--font-mincho)" }}
                      >
                        {area.name}
                      </h3>
                      {area.note && (
                        <span className="text-[10px] text-[#5c4a80] border border-[#9278be] px-1.5 py-0.5 tracking-wide">
                          {area.note}
                        </span>
                      )}
                    </div>
                    <p className="text-[#4a4a4a] text-sm leading-relaxed">{area.desc}</p>
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

      {/* エリア外の方へ */}
      <section className="py-16 md:py-24 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">OUTSIDE KATSUSHIKA</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              エリア外の方へ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              稲垣屋葬儀店は葛飾区外のエリアにも対応しています。足立区・江戸川区・墨田区・荒川区など、近隣区からのご相談もお受けしておりますので、まずはお気軽にお電話ください。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-8">
              対応可否はエリアや状況によって異なる場合があります。詳細はお電話にてご確認ください。
            </p>
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-[#9278be] shrink-0" />
              <span className="text-[#4a4a4a] text-sm">
                TEL：03-3690-0870（24時間365日対応）
              </span>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Section 3: 対応プラン */}
      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FUNERAL PLANS</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              葛飾区全域で選べる葬儀プラン
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

      {/* CTA */}
      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2
              className="text-[#312852] text-2xl tracking-[0.08em] mb-5"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              葛飾区のどのエリアからもご相談いただけます
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
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
