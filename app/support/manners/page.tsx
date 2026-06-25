import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "葬儀のマナー｜服装・香典・焼香の作法｜葛飾区 稲垣屋葬儀店",
  description:
    "葬儀のマナーについて。参列の服装・香典の包み方・焼香の作法・通夜と葬儀の違いなど、葛飾区の稲垣屋葬儀店がご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/support/manners" },
};

const faqs = [
  {
    q: "通夜と葬儀（告別式）の違いは何ですか？",
    a: "通夜は、ご遺族が故人に寄り添い、一夜を共に過ごす場です。参列者がお別れを告げる儀式でもあり、仕事帰りに参列することも多いです。葬儀（告別式）は翌日に行われ、宗教者による儀式と参列者によるお別れを行う、より正式な式です。どちらに参列するかは状況次第ですが、より重要な儀式は葬儀・告別式です。",
  },
  {
    q: "家族葬への参列を求められた場合の注意点はありますか？",
    a: "家族葬では参列者を限定していることが多いです。ご家族から参列の案内があった場合は参列しますが、案内のない場合は参列を控えるのがマナーです。また、香典や供花を辞退している場合もありますので、案内に記載されている内容をよく確認してください。",
  },
  {
    q: "焼香の回数は宗派によって違いますか？",
    a: "はい、宗派によって異なります。一般的には浄土真宗は1回、臨済宗・曹洞宗は1〜3回、真言宗・天台宗・日蓮宗は3回が目安です。ただし、宗派が不明な場合や参列者として慣例が分からない場合は、1〜2回行うか、前の方と同じ回数に合わせるとよいでしょう。",
  },
  {
    q: "香典の金額はどのくらいが適切ですか？",
    a: "香典の金額は、故人・喪主との関係や年齢・立場によって異なります。一般的な目安として、友人・知人は3,000〜5,000円、会社の同僚・上司は5,000〜10,000円、親族は10,000〜30,000円程度です。詳しくは香典のページをご参照ください。",
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

export default function MannersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        title="葬儀のマナー"
        subtitle="服装・香典・焼香・言葉遣いのポイントをまとめました"
        en="FUNERAL MANNERS"
      />
      <Breadcrumb
        items={[
          { label: "サポート情報", href: "/support" },
          { label: "葬儀のマナー" },
        ]}
      />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ATTIRE</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              参列時の服装
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "男性の服装",
                desc: "葬儀・告別式では黒のスーツ（喪服）が基本です。白のワイシャツ・黒のネクタイ・黒の靴・黒の靴下を合わせます。通夜は略式喪服（ダークスーツ）でも可とされています。",
              },
              {
                title: "女性の服装",
                desc: "黒のワンピースやアンサンブル、スーツが基本です。肌の露出を控え、ストッキングは黒または肌色です。バッグ・靴は黒の布製または本革。アクセサリーは真珠の一連ネックレスや結婚指輪程度に留めます。",
              },
              {
                title: "子供の服装",
                desc: "制服がある場合はそのまま参列可能です。制服がない場合は、白・黒・グレーなど地味な色の服装が適切です。派手な色や柄の服装は避けましょう。",
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

          <FadeInUp className="mt-6">
            <p className="text-[#7560a0] text-sm">
              服装についての詳細は
              <Link href="/support/attire" className="underline underline-offset-2 hover:text-[#312852] transition-colors mx-1">
                葬儀の服装について
              </Link>
              をご覧ください。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">KOUDEN</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              香典の包み方・金額の目安
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              香典は不祝儀袋（香典袋）に入れて持参します。表書きは、仏式なら「御霊前」（四十九日前）または「御仏前」（四十九日後）、神式なら「御玉串料」、キリスト教式なら「御花料」が一般的です。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-4">
              金額の目安（仏式の場合）は、友人・知人：3,000〜5,000円、会社関係：5,000〜10,000円、親族：10,000〜30,000円程度が一般的です。
            </p>
            <p className="text-[#7560a0] text-sm">
              <Link href="/support/kouden" className="underline underline-offset-2 hover:text-[#312852] transition-colors">
                香典について詳しく見る
              </Link>
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">INCENSE</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              焼香の作法
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              焼香は、祭壇前に進み、遺族・僧侶に一礼してから行います。抹香（粉末状のお香）を右手の親指・人差し指・中指でつまみ、額の高さまで持ち上げてから香炉にくべます。この動作を「押しいただく」といいます。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-4">
              焼香の回数は宗派によって異なります（浄土真宗：1回、曹洞宗・臨済宗：1〜3回、真言宗・天台宗：3回など）。参列者として宗派が不明な場合は、1〜2回で問題ありません。焼香後は遺族・僧侶に一礼して戻ります。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">WORDS</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              参列時の言葉遣い（忌み言葉）
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              葬儀の場では、不吉とされる言葉（忌み言葉）を避けるのがマナーです。「重ね重ね」「たびたび」「再び」「ますます」などの繰り返し言葉、「死ぬ」「亡くなる」（「お浄土へ旅立たれた」等に言い換え）、「生きていた頃」（「お元気だった頃」）などが代表的な忌み言葉です。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-4">
              お悔やみの言葉は「この度はご愁傷様でございます」「心よりお悔やみ申し上げます」などが一般的です。長々と話さず、簡潔に述べるのがよいでしょう。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">CONDOLENCE</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              弔電・供花の送り方
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "弔電",
                desc: "参列できない場合、弔電（電報）を葬儀会場宛に送ることができます。通夜または告別式の前日までに送るのが一般的です。宛名は喪主名とします。",
              },
              {
                title: "供花・供物",
                desc: "供花・供物を送る場合は、葬儀会場に直接届くよう手配します。ただし、家族葬では供花・供物を辞退されていることもありますので、事前にご遺族に確認することをおすすめします。",
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
