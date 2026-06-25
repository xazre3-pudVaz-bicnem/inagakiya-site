import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "家族で話し合っておきたいこと｜葬儀の事前準備｜葛飾区 稲垣屋葬儀店",
  description:
    "葬儀前に家族で話し合っておきたいこと。形式・費用・菩提寺・参列者の範囲など、事前に家族で確認しておくとスムーズなポイントをご案内します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/consultation/family-meeting" },
};

const discussionThemes = [
  {
    title: "葬儀の形式",
    desc: "家族葬・一日葬・火葬式・一般葬など、どのような形式で見送りたいかを話し合いましょう。「小規模で身内だけで」「会社関係者も呼びたい」など、希望の規模感を共有することが出発点です。",
  },
  {
    title: "費用の上限・分担",
    desc: "葬儀費用の総額の目安と、費用をどのように分担するかを事前に話し合っておくことで、いざというときに費用面でのトラブルを防げます。生命保険や貯蓄の状況も確認しておきましょう。",
  },
  {
    title: "菩提寺・宗教のこと",
    desc: "菩提寺がある場合は、名称・連絡先・宗派を確認しておきましょう。菩提寺がない場合は、宗教者を呼ばない形式（無宗教葬）も選択肢のひとつです。",
  },
  {
    title: "参列者の範囲",
    desc: "どこまでの方に参列をお願いするか（親族のみ・友人も含む・会社関係者も含むなど）を話し合っておきましょう。参列者の範囲が葬儀の規模・費用にも大きく影響します。",
  },
  {
    title: "喪主・責任者",
    desc: "葬儀の喪主（主催者）を誰が務めるかを決めておきましょう。喪主は葬儀社との窓口になるほか、挨拶や諸手続きを担います。複数の子がいる場合は事前に話し合っておくことが大切です。",
  },
  {
    title: "安置場所",
    desc: "ご逝去後、葬儀まで数日間は遺体の安置が必要です。自宅安置が可能かどうか、スペースや住環境を踏まえて確認しておきましょう。難しい場合は葬儀社の安置施設を利用します。",
  },
  {
    title: "故人の希望",
    desc: "「どのような形でお別れしたいか」「特定の曲を流してほしい」「遺影にはこの写真を使ってほしい」など、故人（または将来の自分）の希望を確認・共有しておきましょう。",
  },
];

const faqs = [
  {
    q: "家族で葬儀について話すのは縁起が悪いでしょうか？",
    a: "そのように感じられる方もいらっしゃいますが、事前に話し合っておくことは「もしものとき」の備えであり、ご家族への思いやりでもあります。実際、事前に話し合いをされていたご家族ほど、いざというときに慌てずに対応できています。難しく考えず「もしもの話」として、まず葬儀社に相談するきっかけにしていただくのもよいでしょう。",
  },
  {
    q: "家族が遠方に住んでいて話し合いの機会がありません。",
    a: "そのような場合も多くあります。全員が集まれる機会（お盆・お正月など）を活用したり、電話・ビデオ通話で話し合う方法もあります。また、事前相談で各形式の特徴・費用をまとめた資料をお渡しすることもできますので、それを共有して話し合いのきっかけにしていただくことも可能です。",
  },
  {
    q: "話し合いをしたいが、どこから始めればよいか分かりません。",
    a: "稲垣屋葬儀店の事前相談にご家族でご来店いただくのが最も話し合いを進めやすい方法です。スタッフが葬儀の形式・費用・流れを分かりやすくご説明しながら、ご家族の話し合いをサポートします。一度に全てを決める必要はありません。まず「どんな形式があるか」を知るところから始めませんか？",
  },
  {
    q: "話し合いで決めた内容は、葬儀社に事前に伝えておけますか？",
    a: "はい、事前相談でお聞きした内容を記録しておくことができます。「こういう希望がある」という内容をメモしておくだけでも、「もしものとき」の対応が格段にスムーズになります。稲垣屋葬儀店では、ご家族の希望を丁寧に記録しお預かりします。",
  },
];

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "家族で話し合っておきたいこと",
  description:
    "葬儀前に家族で話し合っておきたいこと。形式・費用・菩提寺・参列者の範囲など、事前に家族で確認しておくとスムーズなポイントをご案内します。",
  url: "https://www.inagakiyasougiten.com/consultation/family-meeting",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "事前相談", item: "https://www.inagakiyasougiten.com/consultation" },
      { "@type": "ListItem", position: 3, name: "家族での話し合い", item: "https://www.inagakiyasougiten.com/consultation/family-meeting" },
    ],
  },
};

export default function FamilyMeetingPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="家族で話し合っておきたいこと"
        subtitle="事前に家族で確認しておきたいポイント"
        en="FAMILY DISCUSSION"
      />
      <Breadcrumb
        items={[
          { label: "事前相談", href: "/consultation" },
          { label: "家族での話し合い" },
        ]}
      />

      {/* Why family discussion matters */}
      <section className="py-20 md:py-28 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">WHY IT MATTERS</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              なぜ家族での話し合いが大切か
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp className="mb-16">
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose">
              <p>
                葬儀はある日突然訪れることが多く、「何から決めればよいか分からない」「家族の意見がまとまらない」という状況になりがちです。いざというときに慌てず対応するためには、家族であらかじめ話し合っておくことが大切です。
              </p>
              <p>
                事前に「どのような形で見送りたいか」「費用をどうするか」「菩提寺はあるか」などを確認しておくだけで、いざというときの対応がスムーズになります。<Link href="/consultation/preparation" className="text-[#5c4a80] underline underline-offset-2 hover:text-[#453869] transition-colors">事前準備のポイント</Link>と合わせてご確認ください。
              </p>
              <p>
                稲垣屋葬儀店では、<Link href="/consultation" className="text-[#5c4a80] underline underline-offset-2 hover:text-[#453869] transition-colors">事前相談</Link>にご家族でお越しいただき、葬儀の形式・費用・流れについてご説明しながら、ご家族の話し合いをサポートすることもできます。
              </p>
            </div>
          </FadeInUp>

          {/* 7 themes */}
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">7 THEMES</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              話し合うべき7つのテーマ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-16">
            {discussionThemes.map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3 className="text-[#312852] text-base tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-base leading-relaxed pl-4 border-l border-[#c9a55a]">
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* When discussion is difficult */}
          <FadeInUp className="mb-16">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">WHEN IT IS DIFFICULT</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              話し合いが難しいときの対応
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mb-6" />
            <div className="space-y-4 text-[#4a4a4a] text-base leading-loose">
              <p>
                「葬儀の話を切り出しにくい」「家族が集まれる機会がない」というケースも多くあります。そのような場合は、まず葬儀社に一人でご相談いただき、各形式の資料をもらってから家族に共有する方法も有効です。
              </p>
              <p>
                また、<Link href="/plans/family-funeral" className="text-[#5c4a80] underline underline-offset-2 hover:text-[#453869] transition-colors">家族葬</Link>のような小規模な形式を前提に話し合いを始めると、具体的なイメージが持ちやすくなります。「大規模にしなくていい」と分かるだけで、話し合いのハードルが下がることも多いです。
              </p>
            </div>
          </FadeInUp>

          {/* How to use consultation */}
          <FadeInUp className="mb-16">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">HOW TO USE US</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              稲垣屋葬儀店での相談の活用方法
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mb-6" />
            <div className="space-y-4 text-[#4a4a4a] text-base leading-loose">
              <p>
                稲垣屋葬儀店の事前相談は、ご家族での話し合いの場としてもご活用いただけます。「家族を連れて行ったら、スタッフが丁寧に説明してくれたおかげで話し合いが進んだ」というお声をよくいただきます。
              </p>
              <p>
                話し合いで決まった内容を事前に葬儀社に伝えておくことも可能です。「こういう形式を希望している」「参列者はこのくらいの規模を想定している」という情報を共有しておくことで、いざというときの対応がスムーズになります。<Link href="/faq" className="text-[#5c4a80] underline underline-offset-2 hover:text-[#453869] transition-colors">よくあるご質問</Link>も参考にしてください。
              </p>
            </div>
          </FadeInUp>

          {/* Related links */}
          <FadeInUp>
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">RELATED</p>
            <h2 className="text-[#312852] text-xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              関連ページ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mb-6" />
            <ul className="space-y-3">
              {[
                { label: "事前相談について（無料）", href: "/consultation" },
                { label: "葬儀の事前準備について", href: "/consultation/preparation" },
                { label: "葬儀前の確認チェックリスト", href: "/consultation/checklist" },
                { label: "強引な勧誘はありません", href: "/consultation/no-pressure" },
                { label: "家族葬について", href: "/plans/family-funeral" },
                { label: "よくあるご質問", href: "/faq" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-flex items-center gap-2 text-[#5c4a80] text-base hover:text-[#453869] transition-colors group">
                    <ChevronRight size={14} className="text-[#9278be] group-hover:translate-x-0.5 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeInUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>よくあるご質問</h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <div className="py-7">
                  <p className="text-[#312852] text-base tracking-wide mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
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

      {/* Soft CTA */}
      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              まずはお気軽にご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              形式に迷っている段階でも、どんな疑問でもお気軽にどうぞ。<br />
              事前相談は無料、強引な勧誘は一切行いません。
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
