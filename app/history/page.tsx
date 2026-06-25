import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import Breadcrumb from "../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "創業の歴史｜明治11年頃創業・葛飾区堀切の稲垣屋葬儀店",
  description:
    "稲垣屋葬儀店の創業の歴史。明治11年頃に葛飾区堀切で創業し、時代とともに葛飾区の皆さまのご葬儀をお手伝いしてきた歴史。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/history" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "稲垣屋葬儀店はいつ創業しましたか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "創業明治11年頃、葛飾区堀切の地にて創業しました。100年以上にわたり地域の皆さまのご葬儀をお手伝いしてきた歴史があります。",
      },
    },
    {
      "@type": "Question",
      name: "葛飾区堀切という地域はどのような場所ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "葛飾区堀切は京成本線「堀切菖蒲園」駅の近くに位置する葛飾区の地域です。稲垣屋葬儀店は明治時代からこの地に根付き、地域の皆さまとともに歩んでまいりました。",
      },
    },
    {
      "@type": "Question",
      name: "現在の稲垣屋葬儀店はどのような体制ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "父から息子・飯田雄生へと代替わりし、葬祭ディレクター1級・認定飯田葬儀相談員などの専門資格を持つ新体制でお手伝いしています。伝統を守りながら家族葬・一日葬など現代のニーズにも対応しています。",
      },
    },
    {
      "@type": "Question",
      name: "不易流行という理念はどのような意味ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "「変わらぬ本質を守りながら、時代のニーズに応える」という意味です。稲垣屋葬儀店では、大切な方を心を込めてお送りするという本質は変えず、葬儀の形は時代に合わせて柔軟に対応しています。",
      },
    },
  ],
};

const milestones = [
  {
    era: "明治11年頃",
    title: "創業——葛飾区堀切にて",
    desc: "稲垣屋葬儀店は、明治11年頃に葛飾区堀切の地にて創業しました。当時の葬儀は地域コミュニティとの結びつきが深く、葬儀社は単に葬儀を執り行うだけでなく、地域の人々の生活に寄り添う存在でした。創業当初より、堀切・お花茶屋・青戸・四ツ木など葛飾区内のご葬儀をお手伝いしてまいりました。地域の皆さまとの信頼関係は、この創業の時から積み重ねられてきたものです。",
  },
  {
    era: "昭和",
    title: "地域とともに——葛飾区の変遷と歩む",
    desc: "昭和の時代、葛飾区は大きく変貌を遂げました。戦後の復興とともに人口が増え、地域のコミュニティの形も変化していきました。その中で稲垣屋葬儀店は、変わりゆく地域の暮らしに寄り添いながら、葬儀のお手伝いを続けてまいりました。どんな時代の変化の中でも、「大切な方を丁寧にお送りする」という姿勢は一貫して守られてきました。",
  },
  {
    era: "平成",
    title: "時代のニーズへの対応——区民葬儀取扱店として",
    desc: "平成に入り、葬儀の形は多様化してきました。大規模な葬儀から家族だけで静かに見送るスタイルへと、時代のニーズが変化していく中で、稲垣屋葬儀店も柔軟に対応してきました。葛飾区民葬儀取扱店としての指定を受け、区民の皆さまが費用面でも安心して葬儀を行えるよう、区民葬儀制度の案内・サポートにも取り組んできました。",
  },
  {
    era: "現代",
    title: "新体制と伝統の融合——父から飯田雄生へ",
    desc: "現在、稲垣屋葬儀店は父から息子・飯田雄生へと代替わりし、新体制でのスタートを切りました。葬祭ディレクター1級（厚生労働省認定）・認定飯田葬儀相談員などの専門資格を取得し、先代が培ってきた地域との信頼関係と専門的な知識・技術を融合させた体制で、葛飾区の皆さまのご葬儀をお手伝いしています。家族葬・一日葬・火葬式など多様な葬儀形式にも対応し、現代のご家族のニーズにお応えしています。",
  },
];

export default function HistoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero title="創業の歴史" subtitle="明治11年頃より、葛飾区堀切に根付いてきた歴史" en="OUR HISTORY" />
      <Breadcrumb items={[{ label: "創業の歴史" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">OUR HISTORY</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              葛飾区堀切から、時代を超えて
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              稲垣屋葬儀店は、創業明治11年頃より葛飾区堀切の地に根付いた葬儀社です。時代の流れの中で葬儀の形は変化してきましたが、「大切な方を心を込めてお送りする」という想いは変わることなく受け継がれています。100年以上の歴史は、地域の皆さまとの信頼の積み重ねそのものです。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mt-12 mb-14">
            {milestones.map((m) => (
              <StaggerItem key={m.era}>
                <div className="flex items-start gap-6 py-8">
                  <div className="shrink-0 pt-1 w-24">
                    <p className="text-[#c9a55a] text-sm tracking-[0.15em] whitespace-nowrap" style={{ fontFamily: "var(--font-mincho)" }}>
                      {m.era}
                    </p>
                  </div>
                  <div className="flex-1 border-l border-[#e8ddf4] pl-6">
                    <h3 className="text-[#312852] text-xl tracking-wide mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                      {m.title}
                    </h3>
                    <p className="text-[#4a4a4a] text-base leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp>
            <div className="space-y-6 text-[#4a4a4a] text-base md:text-lg leading-loose">
              <p>
                稲垣屋葬儀店が長く葛飾区の皆さまに支えられてきた理由——それは、単に葬儀を執り行うだけでなく、ご遺族の悲しみに寄り添い、地域の人々との繋がりを大切にしてきたからだと考えています。葛飾区の文化・習慣・地理を熟知した葬儀社として、地域の皆さまの「いざというとき」に寄り添い続けてきた歴史が、私どもの誇りです。
              </p>
              <p>
                地域への感謝の気持ちを胸に、これからも「不易流行」の精神で——変わらぬ本質を守りながら、時代のニーズに応えて——葛飾区の皆さまのご葬儀をお手伝いしてまいります。長年のご支援に、心より感謝申し上げます。
              </p>
            </div>
          </FadeInUp>

          <FadeInUp className="mt-12">
            <div className="flex flex-wrap gap-6">
              <Link href="/about" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                稲垣屋葬儀店について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/message" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                代表からのご挨拶<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/qualification" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                資格・認定<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
