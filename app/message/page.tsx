import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import Breadcrumb from "../components/Breadcrumb";
import { FadeInUp } from "../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "代表・飯田雄生からのご挨拶｜稲垣屋葬儀店（葛飾区堀切）",
  description:
    "稲垣屋葬儀店代表・飯田雄生からのご挨拶。創業明治11年頃より葛飾区堀切に根付き、地域の皆さまのご葬儀をお手伝いしてきた想いをお伝えします。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/message" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "稲垣屋葬儀店の代表は誰ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "代表は飯田雄生です。葬祭ディレクター1級・認定飯田葬儀相談員の資格を持ち、葛飾区堀切を拠点に地域の皆さまのご葬儀をお手伝いしています。",
      },
    },
    {
      "@type": "Question",
      name: "不易流行とはどのような考え方ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "変わらぬ本質を守りながら、時代のニーズに応えていくという考え方です。稲垣屋葬儀店では、大切な方を心を込めてお送りするという本質を守りながら、家族葬・一日葬など現代のニーズにも対応しています。",
      },
    },
    {
      "@type": "Question",
      name: "稲垣屋葬儀店はどのような想いで葬儀をお手伝いしていますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "故人への敬意と、残されたご家族への誠実な寄り添いを大切にしています。後悔のないお別れができるよう、事前相談から葬儀後のフォローまで一貫してサポートします。",
      },
    },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "代表・飯田雄生からのご挨拶｜稲垣屋葬儀店（葛飾区堀切）",
  description: "稲垣屋葬儀店代表・飯田雄生からのご挨拶。創業明治11年頃より葛飾区堀切に根付き、地域の皆さまのご葬儀をお手伝いしてきた想いをお伝えします。",
  url: "https://www.inagakiyasougiten.com/message",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "稲垣屋葬儀店について", item: "https://www.inagakiyasougiten.com/about" },
      { "@type": "ListItem", position: 3, name: "代表からのご挨拶", item: "https://www.inagakiyasougiten.com/message" },
    ],
  },
};

export default function MessagePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero title="代表からのご挨拶" subtitle="稲垣屋葬儀店の想いをお伝えします" en="MESSAGE FROM DIRECTOR" />
      <Breadcrumb items={[{ label: "代表からのご挨拶" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">MESSAGE</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              ご縁をいただいた皆さまへ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <div className="space-y-8 text-[#4a4a4a] text-base md:text-lg leading-[2.1]">
              <p>
                稲垣屋葬儀店のホームページをご覧いただき、ありがとうございます。代表の飯田雄生と申します。
              </p>

              <p>
                私どもは創業明治11年頃より、葛飾区堀切のこの地でご葬儀のお手伝いをさせていただいてまいりました。長い年月の中で、地域の皆さまに支えていただきながら、大切な方とのお別れに立ち会わせていただいてきたことを、心より光栄に思っております。
              </p>

              <p>
                葬儀は、故人への最後の贈り物です。「こんな葬儀にしたかった」「もっと時間をかけてお別れしたかった」という後悔が残らないよう、ご家族の想いをしっかりと受け止め、誠実に形にすることが私どもの務めだと考えています。故人への敬意と、残されたご家族への誠実な寄り添い——この二つを、私は葬儀においてもっとも大切にしています。
              </p>

              <p>
                「不易流行」——変わらぬ本質を大切にしながら、時代のニーズに応えていく。この言葉を私どもの指針としています。先代から受け継いだ稲垣屋葬儀店は、伝統のもとで培われた地域との信頼関係を大切にしながら、現代のご家族のニーズにも誠実にお応えできるよう、日々研鑽を重ねています。
              </p>

              <p>
                父から受け継いだのは、葬儀社としての事業だけではありません。地域の皆さまとのご縁、長年にわたって積み重ねてきた信頼、そして「大切な方を心を込めてお送りする」という変わらない使命です。その重さをしっかりと受け止め、これからの稲垣屋葬儀店を担っていく覚悟でおります。
              </p>

              <p>
                葬儀のことは、なかなか普段から考えるものではありません。しかし、いざというときに慌てないために、事前に少しでも知っておいていただくことが、ご家族の助けになります。どんな些細な疑問でも、お気軽にご連絡ください。
              </p>

              <p>
                これからも、葛飾区の地域に根付いた葬儀社として、皆さまのそばに寄り添い続けてまいります。どうぞよろしくお願いいたします。
              </p>
            </div>

            <div className="mt-14 border-t border-[#e8ddf4] pt-10">
              <p className="text-[#9278be] text-sm tracking-[0.3em] mb-1" style={{ fontFamily: "var(--font-mincho)" }}>稲垣屋葬儀店　代表</p>
              <p className="text-[#312852] text-2xl tracking-[0.15em]" style={{ fontFamily: "var(--font-mincho)" }}>飯田 雄生</p>
            </div>
          </FadeInUp>

          <FadeInUp className="mt-14">
            <div className="flex flex-wrap gap-6">
              <Link href="/about" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                稲垣屋葬儀店について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/history" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                創業の歴史<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
