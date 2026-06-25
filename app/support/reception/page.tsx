import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "受付の対応について｜葬儀受付の流れと役割｜葛飾区 稲垣屋葬儀店",
  description:
    "葬儀・通夜での受付係の役割・対応方法・言葉遣いについて。葛飾区の稲垣屋葬儀店が受付担当者向けに詳しくご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/support/reception" },
};

const faqs = [
  {
    q: "受付係はいつ集合すればよいですか？",
    a: "開式の1時間前を目安に集合します。その際、香典の管理方法・名簿への記帳方法・お礼品の手渡し方などを喪主または葬儀担当者から確認しておきましょう。",
  },
  {
    q: "香典を受け取る際に気をつけることはありますか？",
    a: "香典を受け取る際は「ありがとうございます」ではなく「恐れ入ります」「頂戴します」などの言葉を使います。受け取った香典はすぐに確認・記帳し、管理者（会計係）に渡します。香典袋は受付台の下などの見えない場所に置きましょう。",
  },
  {
    q: "参列者が多く受付が混雑した場合はどうすれば良いですか？",
    a: "受付係を複数名配置するか、担当エリアを分担します。混雑時でも笑顔を保ち、丁寧に対応することが大切です。参列者をお待たせしてしまう場合は「少々お待ちください」と一声かけましょう。",
  },
  {
    q: "受付係を依頼する人選に決まりはありますか？",
    a: "受付係は故人と縁が深すぎない方（喪主の友人・知人や職場の同僚など）が担うのが一般的です。親族は葬儀の進行に専念することが多いため、受付は親族以外にお願いするのがスムーズです。",
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
  name: "受付の対応について｜葬儀受付の流れと役割｜葛飾区 稲垣屋葬儀店",
  description:
    "葬儀・通夜での受付係の役割・対応方法・言葉遣いについて。葛飾区の稲垣屋葬儀店が受付担当者向けに詳しくご説明します。",
  url: "https://www.inagakiyasougiten.com/support/reception",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀サポート", item: "https://www.inagakiyasougiten.com/support" },
      { "@type": "ListItem", position: 3, name: "受付の対応について", item: "https://www.inagakiyasougiten.com/support/reception" },
    ],
  },
};

export default function ReceptionPage() {
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
        title="受付の対応について"
        subtitle="葬儀・通夜での受付係の役割と対応方法をご説明します"
        en="RECEPTION GUIDE"
      />
      <Breadcrumb
        items={[
          { label: "サポート情報", href: "/support" },
          { label: "受付の対応について" },
        ]}
      />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">OVERVIEW</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              受付係の役割
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              葬儀・通夜の受付係は、参列者を最初に迎え入れる重要な役割を担います。故人や喪家を代表して参列者をお迎えするため、言葉遣い・立ち居振る舞いに気を配ることが求められます。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              受付係の主な仕事は、①参列者への挨拶と誘導、②香典の受け取りと管理、③記帳（芳名帳への記入案内）、④会葬御礼品の手渡しなどです。葬儀社スタッフと事前に役割分担を確認しておきましょう。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">PROCEDURE</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              受付の流れと対応手順
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "① 事前準備",
                desc: "開式1時間前に集合し、担当者から芳名帳・香典管理の方法・会葬御礼品の位置などを確認します。受付テーブルの配置、筆記用具の用意も確認しておきましょう。",
              },
              {
                title: "② 参列者のお出迎え",
                desc: "参列者が来られたら「本日はご参列いただき、誠にありがとうございます」とお迎えします。笑顔は控え、穏やかで丁寧な表情を意識します。",
              },
              {
                title: "③ 記帳のご案内",
                desc: "「こちらにご芳名をお書きください」と芳名帳を案内します。代筆が必要な場合は申し出を受け、丁寧に記入します。",
              },
              {
                title: "④ 香典の受け取り",
                desc: "「頂戴いたします」と両手で受け取り、会計係に渡します。香典袋は受付の見えない場所に保管し、受け取りの記録をつけます。",
              },
              {
                title: "⑤ 会葬御礼品のお渡し",
                desc: "記帳・香典の受け取り後、「どうぞお受け取りください」と会葬御礼品をお渡しします。参列者を式場へご案内する場合は、方向をお伝えします。",
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
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">MANNER</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              受付担当者の服装・マナー
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "服装",
                desc: "受付係も参列者と同様、喪服（黒のスーツ・ワンピースなど）を着用します。アクセサリーは控えめにし、清潔感のある身なりを心がけます。",
              },
              {
                title: "言葉遣い",
                desc: "「ありがとうございます」より「恐れ入ります」「頂戴いたします」の方が丁寧です。参列者を案内する際は「こちらへどうぞ」など穏やかに声をかけます。",
              },
              {
                title: "立ち居振る舞い",
                desc: "受付の間中、話し声や笑い声は控えます。スマートフォンの操作も極力控えましょう。常に参列者の動きに注意を払い、困っている方がいれば率先してサポートします。",
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
              { href: "/support/chief-mourner", label: "喪主の役割について" },
              { href: "/support/greeting", label: "喪主の挨拶について" },
              { href: "/support/kouden", label: "香典について" },
              { href: "/support/manners", label: "葬儀のマナーについて" },
              { href: "/support/attire", label: "葬儀の服装について" },
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
              稲垣屋葬儀店は24時間365日対応。受付の準備についてもお気軽にご相談ください。
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
