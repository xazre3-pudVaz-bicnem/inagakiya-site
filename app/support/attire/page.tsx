import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "葬儀の服装について｜男性・女性・子供｜葛飾区 稲垣屋葬儀店",
  description:
    "葬儀・告別式・通夜の服装について。男性・女性・子供の正しい喪服・略式喪服・アクセサリーのルールを葛飾区の稲垣屋葬儀店が解説します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/support/attire" },
};

const faqs = [
  {
    q: "通夜と葬儀では服装は違いますか？",
    a: "通夜は略式喪服でも許容されることがあります（男性はダークスーツ、女性は黒または地味な色のスーツ・ワンピース）。ただし近年は通夜でも正式な喪服で参列する方が増えています。葬儀・告別式は正式な喪服が基本です。",
  },
  {
    q: "急な参列で正喪服が用意できません。どうすれば良いですか？",
    a: "急な訃報で喪服を用意できない場合は、黒・ダークグレー・濃紺などの地味な色のスーツやワンピースで参列するのが一般的です。白いシャツや地味なネクタイで整えることが大切です。翌日の葬儀には喪服を用意できるよう、レンタルサービスを利用するのも一つの方法です。",
  },
  {
    q: "アクセサリーはどこまでOKですか？",
    a: "葬儀では「一連の真珠のネックレス」と「結婚指輪」以外のアクセサリーは基本的に外すのがマナーです。二連・三連のネックレスは「不幸が重なる」として避けます。ピアス・イヤリングは一粒パールなら可。ブレスレットや派手な指輪は避けましょう。",
  },
  {
    q: "法事（法要）の服装は葬儀と同じですか？",
    a: "四十九日法要などは喪服が基本ですが、三回忌以降の法要は次第に平服（地味な色の服装）に変わっていくのが一般的です。法要の案内状に「平服でお越しください」と記載されている場合は、地味な色の普段着で参列できます。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function AttirePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        title="葬儀の服装について"
        subtitle="男性・女性・子供の服装マナーをまとめました"
        en="FUNERAL ATTIRE"
      />
      <Breadcrumb
        items={[
          { label: "サポート情報", href: "/support" },
          { label: "葬儀の服装について" },
        ]}
      />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">MOURNING WEAR</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              喪服の種類
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "正喪服",
                desc: "最も格式の高い喪服です。男性は和装（紋付羽織袴）または洋装（モーニングコート）、女性は和装（黒の紋付）または洋装（ブラックフォーマルのワンピース・アンサンブル）です。遺族・親族が着用するものであり、一般の参列者が正喪服を着る必要はありません。",
              },
              {
                title: "準喪服（喪服）",
                desc: "一般的に「喪服」といえばこれを指します。男性は黒のスーツ、女性は黒のワンピース・スーツ・アンサンブルです。葬儀・告別式への参列者はこれが基本となります。",
              },
              {
                title: "略式喪服",
                desc: "急な参列や通夜への参列に使用されることがあります。男性はダークスーツ、女性は黒や濃紺・グレーなど地味な色の服装です。ただし、近年は通夜でも準喪服での参列が一般的になっています。",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3
                    className="text-[#312852] text-xl tracking-wide mb-2"
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

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">BY GENDER</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              男性・女性・子供の服装
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "男性の服装",
                items: [
                  "スーツ：黒のブラックフォーマルスーツ",
                  "シャツ：白無地のワイシャツ",
                  "ネクタイ：黒無地（光沢のないもの）",
                  "靴下：黒",
                  "靴：黒の革靴（ストレートチップが基本）",
                  "腕時計：地味なデザインのもの、またははずす",
                ],
              },
              {
                title: "女性の服装",
                items: [
                  "服装：黒のワンピース・スーツ・アンサンブル（膝丈以下）",
                  "ストッキング：黒または肌色",
                  "靴：黒のパンプス（ヒール5cm以下、つま先・かかと閉じ）",
                  "バッグ：黒の布製または本革（金具が目立たないもの）",
                  "アクセサリー：一連の真珠ネックレスと結婚指輪のみ可",
                  "メイク：控えめにし、派手な色は避ける",
                ],
              },
              {
                title: "子供の服装",
                items: [
                  "学校の制服がある場合：制服を着用",
                  "制服がない場合：白・黒・グレー・紺などの地味な色の服",
                  "派手な柄・キャラクターものは避ける",
                  "靴：白や黒のシンプルなスニーカーや革靴",
                  "ランドセルや派手なバッグは持ち込まない",
                ],
              },
            ].map((group) => (
              <StaggerItem key={group.title}>
                <div className="py-7">
                  <h3
                    className="text-[#312852] text-lg tracking-wide mb-4"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    {group.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[#4a4a4a] text-base leading-relaxed">
                        <span className="text-[#c9a55a] text-xs mt-1.5 shrink-0">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ACCESSORIES</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              アクセサリーのルール
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "許容されるアクセサリー",
                desc: "一連の真珠ネックレス（本真珠またはコットンパール）、結婚指輪。パールの一粒ピアス・イヤリングも許容されています。",
              },
              {
                title: "避けるべきアクセサリー",
                desc: "金・プラチナ・宝石類のネックレス・ブレスレット・指輪（結婚指輪除く）。二連・三連のネックレス（「不幸が重なる」を連想）。光沢の強い素材やカラフルなアクセサリー全般。",
              },
              {
                title: "ネイルについて",
                desc: "派手な色やデザインのネイルは、黒い手袋で隠すか、落としてから参列するのがマナーです。薄いピンクやベージュなど落ち着いた色であれば許容される場合もあります。",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3
                    className="text-[#312852] text-lg tracking-wide mb-2"
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

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">URGENT</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              急な参列で喪服がない場合
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              急な訃報で正式な喪服が用意できない場合は、黒・ダークグレー・濃紺などの地味な色のスーツやワンピースで参列するのが一般的なマナーです。男性であれば白いシャツに黒いネクタイ・黒い靴、女性であれば黒い靴とバッグで統一することが大切です。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              翌日の葬儀・告別式には喪服を準備するのが望ましいです。百貨店・量販店のレンタルサービスを利用する方法もありますので、お急ぎの場合はご検討ください。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              よくあるご質問
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

      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2
              className="text-[#312852] text-2xl tracking-[0.08em] mb-5"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              ご不明な点はお気軽にご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              稲垣屋葬儀店は24時間365日対応。どんなご相談でもお気軽にどうぞ。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 group w-full sm:w-auto justify-center"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                <MessageCircle size={17} />お問い合わせ<ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
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
