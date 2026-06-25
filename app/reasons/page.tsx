import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import Breadcrumb from "../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "稲垣屋葬儀店が選ばれる理由｜葛飾区の地域密着葬儀社",
  description:
    "葛飾区で稲垣屋葬儀店が選ばれる7つの理由。葬祭ディレクター1級・区民葬儀取扱店・創業明治11年頃の歴史・24時間対応・事前相談無料など。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/reasons" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "葬祭ディレクター1級とはどのような資格ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "厚生労働省が認定する国家資格で、葬儀全般に関する深い知識と高い技術を持つ専門家であることを証明します。1級は葬祭業の最上位資格です。",
      },
    },
    {
      "@type": "Question",
      name: "稲垣屋葬儀店は24時間対応していますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、24時間365日対応しております。深夜・早朝・休日・祝日を問わず、急なご連絡にも迅速に対応いたします。",
      },
    },
    {
      "@type": "Question",
      name: "葛飾区民葬儀制度とはどのような制度ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "葛飾区が設けた葬儀費用を抑えるための制度です。稲垣屋葬儀店は葛飾区指定の区民葬儀取扱店のため、制度の申請から手続きまで一貫してサポートします。",
      },
    },
    {
      "@type": "Question",
      name: "事前相談はなぜ重要ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "事前相談をしておくことで、いざというときに慌てず、ご家族の負担を減らすことができます。費用の目安・葬儀の流れ・希望スタイルなど、準備しておくことで後悔のないお別れが可能になります。事前相談は無料です。",
      },
    },
  ],
};

const reasons = [
  {
    num: "01",
    title: "葬祭ディレクター1級の確かな専門知識と技術",
    desc: "国家資格である葬祭ディレクター技能審査1級を取得した専門家が対応します。葬儀全般に関する深い知識と高い技術は、厚生労働省の認定を受けて初めて証明されるものです。資格を持つ専門家がご担当することで、法令・マナー・作法に沿った適切なご葬儀をお届けします。「何もわからない」状態でご葬儀を迎えるご家族の不安に、専門家として丁寧にお答えします。費用のこと、流れのこと、宗教的な作法のこと——どんな疑問もご遠慮なくお聞きください。",
  },
  {
    num: "02",
    title: "葛飾区民葬儀取扱店——行政が認定した信頼の証",
    desc: "稲垣屋葬儀店は葛飾区が指定する区民葬儀取扱店です。葛飾区が定める一定の基準をクリアした葬儀社のみが取得できる認定で、地域行政からの信頼の証でもあります。葛飾区民の方は区民葬儀制度を利用することで、費用を抑えながら質の高い葬儀を行うことができます。制度の内容のご説明から、申請手続きのサポートまで、稲垣屋葬儀店が一貫してお手伝いします。費用面でのご不安も、まずはご相談ください。",
  },
  {
    num: "03",
    title: "創業明治11年頃——葛飾区堀切の地域密着の歴史",
    desc: "稲垣屋葬儀店は創業明治11年頃より、葛飾区堀切の地に根付いてきた葬儀社です。100年以上にわたり地域の皆さまのご葬儀をお手伝いしてきた歴史が、私どもの最大の強みです。地元の地理・文化・習慣を熟知しており、地域のお寺や斎場との連携もスムーズです。何世代にもわたって稲垣屋葬儀店にご依頼いただいているご家族も多く、その信頼の積み重ねが、私どもの誇りです。",
  },
  {
    num: "04",
    title: "24時間365日——いつでも迅速に対応",
    desc: "ご逝去は時間を選びません。深夜・早朝・休日・祝日を問わず、24時間365日対応しております。急なご連絡にも迅速にお迎えに上がり、ご家族の不安を少しでも和らげられるよう努めます。「どこに連絡すればいいかわからない」というときも、まずはお電話ください。最初の一歩から、丁寧にご案内いたします。葛飾区堀切を拠点としているため、区内各地への迅速な対応が可能です。",
  },
  {
    num: "05",
    title: "認定飯田葬儀相談員——専門知識による丁寧な相談対応",
    desc: "葬儀に関する専門知識を持つ認定飯田葬儀相談員が在籍しています。葬儀に関するあらゆる疑問・不安に、専門的な知識をもって丁寧にお答えします。費用のこと、宗教・宗派のこと、火葬場や斎場のこと、葬儀後の手続きのことまで、幅広くサポートします。「こんなこと聞いていいのかな」と思うような些細な疑問も、ご遠慮なくお話しください。ご家族の想いに寄り添い、最善のご提案をいたします。",
  },
  {
    num: "06",
    title: "事前相談・見積もり無料——後悔のない準備のために",
    desc: "「もしものとき」に備えた事前相談を無料で承っています。いざというときに慌てないよう、費用の目安・葬儀の流れ・希望するスタイルを事前に確認しておくことが大切です。稲垣屋葬儀店では、事前相談から費用の概算見積もりまで、無料でご対応しています。「まだ先の話だから」と思わず、気になったときにご相談ください。準備があるとないとでは、いざというときのご家族の負担が大きく変わります。",
  },
  {
    num: "07",
    title: "業界団体加盟——適正サービスの安心感",
    desc: "葬祭業の業界団体に加盟しており、業界全体の適正基準に沿ったサービスを提供しています。価格の透明性・品質の一定基準・対応マナーについて、業界ルールに基づいた適切なサービスをお約束します。「葬儀社を選ぶ基準がわからない」という方にとって、業界団体への加盟は一つの安心の目安となります。稲垣屋葬儀店は、資格・認定・団体加盟の三つの観点から、信頼できる葬儀社であることをお約束します。",
  },
];

export default function ReasonsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        title="稲垣屋葬儀店が選ばれる理由"
        subtitle="葛飾区の皆さまに長く信頼されてきた7つの強み"
        en="WHY CHOOSE US"
      />
      <Breadcrumb items={[{ label: "選ばれる理由" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">7 REASONS</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              7つの選ばれる理由
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
            <p className="text-[#4a4a4a] mt-5 text-base md:text-lg leading-relaxed max-w-2xl">
              葛飾区の葬儀社として、私どもが大切にしていることをご紹介します。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {reasons.map((reason) => (
              <StaggerItem key={reason.num}>
                <div className="flex items-start gap-6 py-9">
                  <div className="shrink-0 pt-1">
                    <span
                      className="text-[#c9a55a] text-sm tracking-[0.2em]"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      {reason.num}
                    </span>
                  </div>
                  <div className="flex-1 border-l border-[#e8ddf4] pl-6">
                    <h3
                      className="text-[#312852] text-xl tracking-wide mb-4"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      {reason.title}
                    </h3>
                    <p className="text-[#4a4a4a] text-base leading-loose">{reason.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mt-10">
            <div className="flex flex-wrap gap-6">
              <Link href="/about" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                稲垣屋葬儀店について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/qualification" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                資格・認定について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              葬儀のご相談・事前相談
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              どんな疑問でも、お気軽にご連絡ください。事前相談は無料です。
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
