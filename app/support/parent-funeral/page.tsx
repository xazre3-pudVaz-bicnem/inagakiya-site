import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "親の葬儀を考え始めた方へ｜葛飾区 稲垣屋葬儀店",
  description:
    "親の葬儀をそろそろ考え始めた方へ。葛飾区の稲垣屋葬儀店が、事前相談のタイミング・費用・葬儀形式の選び方・区民葬儀制度について丁寧にご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/support/parent-funeral" },
};

const faqs = [
  {
    q: "親がまだ元気なうちに葬儀の相談をするのは早すぎますか？",
    a: "早すぎることはありません。元気なうちに話し合っておくことで、本人の希望を反映した葬儀を行うことができます。また、家族全員が冷静に費用や形式について考える時間ができます。稲垣屋葬儀店では事前相談を無料で承っており、「まだ先のこと」という段階からでもお気軽にご相談いただけます。",
  },
  {
    q: "菩提寺との関係はどう確認すればよいですか？",
    a: "菩提寺（先祖代々お世話になっているお寺）がある場合は、葬儀の際にご住職に来ていただく必要があります。事前に菩提寺の名前・連絡先・宗派を確認しておきましょう。また、お墓が菩提寺にある場合は、葬儀の方法が制限されることもあるため、早めの確認をおすすめします。",
  },
  {
    q: "葛飾区の区民葬儀はどのような制度ですか？",
    a: "区民葬儀は、葛飾区が実施する費用を抑えた葬儀制度です。故人または喪主が葛飾区に住民票をお持ちの方が対象で、区が定めた葬儀内容を区指定の葬儀社（稲垣屋葬儀店はその一社）が行います。詳しくはお問い合わせいただくか、葛飾区役所にご確認ください。",
  },
  {
    q: "兄弟・親族で葬儀の形式について意見が合わない場合はどうすればよいですか？",
    a: "葬儀の形式に対する考え方は人それぞれです。大切なのは、故人の意思と主な喪主（費用を負担する方）の意向を中心に話し合うことです。稲垣屋葬儀店では、ご家族の話し合いに関する相談にも応じます。事前相談の場でご家族全員でお越しいただき、一緒に考えることも歓迎しております。",
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

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "親の葬儀を考え始めた方へ｜葛飾区 稲垣屋葬儀店",
  description:
    "親の葬儀をそろそろ考え始めた方へ。葛飾区の稲垣屋葬儀店が、事前相談のタイミング・費用・葬儀形式の選び方・区民葬儀制度について丁寧にご説明します。",
  url: "https://www.inagakiyasougiten.com/support/parent-funeral",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀サポート", item: "https://www.inagakiyasougiten.com/support" },
      { "@type": "ListItem", position: 3, name: "親の葬儀を考え始めた方へ", item: "https://www.inagakiyasougiten.com/support/parent-funeral" },
    ],
  },
};

export default function ParentFuneralPage() {
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

      <PageHero
        title="親の葬儀を考え始めた方へ"
        subtitle="今から備えておくことで、いざというとき穏やかに対応できます"
        en="PLANNING AHEAD"
      />
      <Breadcrumb
        items={[
          { label: "サポート情報", href: "/support" },
          { label: "親の葬儀を考え始めた方へ" },
        ]}
      />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">INTRODUCTION</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              「まだ元気だけれど」という段階で
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              「親も高齢になってきた。そろそろ葬儀のことも考えておかなければ」と感じ始めている方は多くいらっしゃいます。しかし「縁起でもない」「まだ元気だから」という思いから、なかなか話し合いが進まないご家庭も少なくありません。
            </p>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              実際には、親が元気なうちに葬儀のことを話し合っておくことは、本人の意思を尊重するうえでも、残されたご家族の負担を軽減するうえでも、とても大切なことです。「いざ」というとき、冷静に対応できるかどうかは、事前の備えによって大きく変わります。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              稲垣屋葬儀店では事前相談を無料で承っております。「まだ先のこと」という段階からでも、どうぞお気軽にご連絡ください。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAMILY DISCUSSION</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              家族で話し合っておくべきこと
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "葬儀の規模・形式の希望",
                desc: "家族葬にしたいか、一般葬で広く参列者を迎えたいか、本人の希望を確認しておきましょう。「こぢんまりと見送ってほしい」という方が近年増えています。",
              },
              {
                title: "宗教・宗派の確認",
                desc: "仏式・神式・キリスト教式・無宗教など、どの宗教形式で行うかを確認しましょう。菩提寺がある場合は宗派も把握しておく必要があります。",
              },
              {
                title: "費用の負担者と準備",
                desc: "誰が費用を負担するか、どれくらいの費用をかけるかを話し合っておきましょう。葬儀費用の目安を知りたい場合は事前相談にてご説明できます。",
              },
              {
                title: "訃報を知らせる範囲",
                desc: "友人・知人・会社関係などへの訃報をどこまで知らせるかを決めておくと、実際の対応がスムーズになります。家族葬では参列を限定するため、事前の整理が重要です。",
              },
              {
                title: "遺影用の写真の準備",
                desc: "葬儀の際に使用する遺影写真を事前に選んでおくと、いざというときの慌ただしさを減らせます。本人が気に入っている写真を選んでおくのがよいでしょう。",
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

      <section className="py-20 md:py-28 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">TEMPLE</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              菩提寺との関係を確認しておくこと
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              菩提寺（先祖代々のお墓があるお寺）がある場合、葬儀はその菩提寺のご住職に依頼することが一般的です。菩提寺の名前・連絡先・宗派を事前に確認しておきましょう。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              菩提寺がある場合、宗派によっては葬儀の方法に制限がかかることがあります（例：浄土真宗では「友引」の概念がないなど）。また、菩提寺のお墓を使用する場合、葬儀を他の宗教形式で行うと納骨を断られるケースもあるため、早めの確認をおすすめします。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              菩提寺がない場合や、菩提寺との関係についてご不明な点がある場合は、稲垣屋葬儀店にご相談ください。状況に応じてご案内いたします。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">KUMIN</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              葛飾区民葬儀制度の活用
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              葛飾区では、区民の方が費用を抑えて葬儀を行うための「区民葬儀」制度があります。故人または喪主が葛飾区に住民票をお持ちの方が対象です。区が定めた葬儀内容を区指定の葬儀社が担当し、費用の目安が区によって公示されています。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              稲垣屋葬儀店は葛飾区の区民葬儀取扱店として登録されており、区民葬儀のご利用が可能です。区民葬儀についてご不明な点は、稲垣屋葬儀店または葛飾区役所にお問い合わせください。
            </p>
            <p className="text-[#7560a0] text-sm">
              <Link href="/kuminsogi" className="underline underline-offset-2 hover:text-[#312852] transition-colors">
                区民葬儀について詳しく見る
              </Link>
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
