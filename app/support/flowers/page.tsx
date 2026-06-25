import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "供花・花輪について｜葬儀の花のマナーと手配方法｜葛飾区 稲垣屋葬儀店",
  description:
    "葬儀の供花・花輪の意味・種類・手配方法・マナーについて。葛飾区の稲垣屋葬儀店がわかりやすくご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/support/flowers" },
};

const faqs = [
  {
    q: "供花はどこに注文すればよいですか？",
    a: "供花は、葬儀社または花屋に注文するのが一般的です。葬儀社に依頼すると、会場のスペースに合わせた適切なサイズで手配してもらえます。葬儀会場が指定している場合はその業者に依頼する必要がありますので、事前に確認しましょう。",
  },
  {
    q: "家族葬でも供花を送ることはできますか？",
    a: "家族葬では、供花・花輪を辞退されているケースが多くあります。葬儀の案内に「供花辞退」と記載がある場合は送らないのがマナーです。不明な場合は、葬儀社や喪主に直接確認することをおすすめします。",
  },
  {
    q: "供花の名前（名札）の書き方は？",
    a: "供花には名札を添えます。個人で送る場合は「氏名」、会社・団体で送る場合は「会社名（部署名）」や「○○一同」と書きます。故人との関係が分かるよう、名前の下に「友人一同」「○○課一同」などと添えるとよいでしょう。",
  },
  {
    q: "供花と供物の違いは何ですか？",
    a: "供花は生花や造花を使ったお供えで、祭壇の両脇などに飾ります。供物（くもつ）は食品・果物・菓子などのお供えです。どちらも故人へ捧げるものですが、宗派や地域によって適切なものが異なります。葬儀社に相談すると安心です。",
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

export default function FlowersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        title="供花・花輪について"
        subtitle="葬儀の花の種類・手配方法・マナーをご説明します"
        en="FUNERAL FLOWERS"
      />
      <Breadcrumb
        items={[
          { label: "サポート情報", href: "/support" },
          { label: "供花・花輪について" },
        ]}
      />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ABOUT</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              供花・花輪とは
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              供花（くか・きょうか）は、故人への哀悼と敬意を表すために贈る花のことです。葬儀会場の祭壇の両脇に飾られ、参列者の目に触れる大切なお供えです。花輪（はなわ）は、スタンド式の大型の花飾りで、会場の入口付近に飾られることが多いです。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              供花・花輪は、故人と関係の深い方や会社・団体などが手配します。葬儀社に依頼することで、会場のスペースや宗派に応じた適切な花を手配してもらえます。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">TYPES</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              供花・花輪の種類
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "スタンド花（フラワースタンド）",
                desc: "スタンドに生花を飾ったもので、会場入口や祭壇の脇に置かれます。白・淡いピンク・淡い紫などの落ち着いた色合いの花が選ばれます。菊・カーネーション・百合・蘭などが一般的です。",
              },
              {
                title: "花輪（造花・生花）",
                desc: "丸型の大きな花飾りで、会社や団体が贈ることが多いです。造花が多く使われますが、生花のものもあります。会場の入口近くに飾られ、「○○株式会社」などの名札を添えます。",
              },
              {
                title: "籠盛り花（かごもりばな）",
                desc: "籠に生花を盛り合わせたもので、祭壇近くに供えます。コンパクトで場所を取らないため、小規模な家族葬でも利用されやすいです。",
              },
              {
                title: "枕花（まくらばな）",
                desc: "ご自宅での安置中、枕元に供える小さな花飾りです。通夜・葬儀前に持参するもので、白い菊や洋花が使われます。近親者が手配することが多いです。",
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
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">HOW TO</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              供花・花輪の手配方法
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "手配のタイミング",
                desc: "通夜・告別式の前日までに注文・手配するのが理想です。急な訃報の場合は当日でも対応してもらえる場合がありますが、できるだけ早めに連絡しましょう。",
              },
              {
                title: "葬儀社への依頼",
                desc: "最も確実なのは葬儀社に依頼する方法です。会場の広さや他の供花とのバランスを考慮した上で手配してもらえます。会場によっては指定業者以外の供花を受け付けないケースもあります。",
              },
              {
                title: "辞退の場合の対応",
                desc: "案内状や連絡に「供花辞退」と記載がある場合は供花を送らないのがマナーです。参列できない場合は、弔電を送るか、後日弔問するとよいでしょう。",
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

      <section className="py-16 md:py-24 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">RELATED</p>
            <h2
              className="text-[#312852] text-2xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              関連ページ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              { href: "/support/telegram", label: "弔電について" },
              { href: "/support/manners", label: "葬儀のマナーについて" },
              { href: "/support/kouden", label: "香典について" },
              { href: "/support/religion", label: "宗教別の葬儀について" },
              { href: "/support/reception", label: "受付の対応について" },
            ].map((link) => (
              <StaggerItem key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between py-5 text-[#5c4a80] hover:text-[#312852] transition-colors group"
                >
                  <span className="text-base tracking-wide" style={{ fontFamily: "var(--font-mincho)" }}>
                    {link.label}
                  </span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
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
              稲垣屋葬儀店は24時間365日対応。供花・花輪のご相談もお気軽にどうぞ。
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
