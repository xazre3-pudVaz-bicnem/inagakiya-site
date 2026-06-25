import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "エンディングノートと葬儀準備｜葛飾区 稲垣屋葬儀店",
  description:
    "エンディングノートを活用した葬儀準備について。書いておくべき内容・活用方法・稲垣屋葬儀店との事前相談との組み合わせをご案内します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/consultation/ending-note" },
};

const noteItems = [
  {
    title: "葬儀の形式の希望",
    desc: "家族葬・一日葬・火葬式・一般葬など、どのような形式でお別れしたいかを書き残しておきましょう。ご家族への大切な意思表示になります。",
  },
  {
    title: "参列してほしい方",
    desc: "葬儀に参列してほしい方の名前・連絡先をまとめておくと、ご家族の負担が軽減されます。「知らせたい範囲」と「知らせなくてよい範囲」を明記しておくとより丁寧です。",
  },
  {
    title: "宗教・菩提寺のこと",
    desc: "菩提寺（先祖代々のお寺）の名前・所在地・連絡先・宗派を書き残しておきましょう。いざというときに、ご家族がすぐに連絡できます。",
  },
  {
    title: "遺影にしたい写真",
    desc: "葬儀で使用する遺影写真を生前に選んでおくと、ご家族の負担が大きく軽減されます。「この写真を使ってほしい」という希望を明記しておきましょう。",
  },
  {
    title: "費用の考え方・目安",
    desc: "葬儀にかける費用の目安や考え方を書き残しておきましょう。「できるだけシンプルに」「費用を抑えたい」などの意向があれば、ご家族の判断の助けになります。",
  },
  {
    title: "葬儀社への希望",
    desc: "葬儀を依頼したい葬儀社や、「稲垣屋葬儀店に相談した」という記録を残しておきましょう。事前相談の内容もあわせて書いておくと、よりスムーズです。",
  },
];

const faqs = [
  {
    q: "エンディングノートと遺言書は違いますか？",
    a: "エンディングノートは法的な効力を持たない「意思の記録」です。遺言書は法的な手続きを通じて財産の分配などを定めるものです。葬儀の希望はエンディングノートに書いておくだけでも、ご家族への伝達に役立ちます。法的な効力を持たせたい場合は、遺言書の作成を専門家にご相談ください。",
  },
  {
    q: "エンディングノートはどこに保管すればよいですか？",
    a: "エンディングノートは、ご家族がいざというときに見つけられる場所に保管することが大切です。「〇〇の引き出しにある」とご家族に伝えておくか、一緒に保管場所を確認しておくとよいでしょう。また、内容を定期的に見直し、更新することもお勧めします。",
  },
  {
    q: "エンディングノートを書いたら、必ずその通りに葬儀が行われますか？",
    a: "法的な効力はないため、必ずその通りになるとは限りませんが、ご家族への大切な伝達手段として非常に有効です。できれば、ノートの内容をご家族と共有し、「こういう希望がある」と話し合っておくことで、より本人の希望に沿った葬儀が実現しやすくなります。",
  },
  {
    q: "稲垣屋葬儀店でエンディングノートの内容を預かってもらえますか？",
    a: "事前相談でお聞きした内容をメモとして記録しておくことは可能です。エンディングノートそのものをお預かりするサービスは現在行っておりませんが、ご希望の内容をお聞きし、「もしものとき」にご家族からご連絡をいただいた際に参考にすることはできます。詳しくは事前相談でご確認ください。",
  },
];

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "エンディングノートと葬儀準備",
  description:
    "エンディングノートを活用した葬儀準備について。書いておくべき内容・活用方法・稲垣屋葬儀店との事前相談との組み合わせをご案内します。",
  url: "https://www.inagakiyasougiten.com/consultation/ending-note",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "事前相談", item: "https://www.inagakiyasougiten.com/consultation" },
      { "@type": "ListItem", position: 3, name: "エンディングノート", item: "https://www.inagakiyasougiten.com/consultation/ending-note" },
    ],
  },
};

export default function EndingNotePage() {
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
        title="エンディングノートと葬儀準備"
        subtitle="エンディングノートで葬儀の希望を残す方法"
        en="ENDING NOTE GUIDE"
      />
      <Breadcrumb
        items={[
          { label: "事前相談", href: "/consultation" },
          { label: "エンディングノートと葬儀準備" },
        ]}
      />

      {/* Intro */}
      <section className="py-20 md:py-28 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">WHAT IS ENDING NOTE</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              エンディングノートとは
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp className="mb-16">
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose">
              <p>
                エンディングノートとは、自分の意思・希望・大切な情報を書き残しておくためのノートです。遺言書のような法的な効力はありませんが、「もしものとき」にご家族が迷わず対応できるよう、葬儀の希望や連絡先をまとめておくことができます。
              </p>
              <p>
                葬儀に関する希望をエンディングノートに書き残しておくことで、ご家族の精神的・実務的な負担を大きく軽減できます。「どんな形式で見送ってほしいか」「誰に知らせてほしいか」といった希望が明確であれば、ご家族も迷わず動けます。
              </p>
              <p>
                エンディングノートの作成は、<Link href="/consultation/living" className="text-[#5c4a80] underline underline-offset-2 hover:text-[#453869] transition-colors">生前のご相談</Link>や<Link href="/consultation/preparation" className="text-[#5c4a80] underline underline-offset-2 hover:text-[#453869] transition-colors">葬儀の事前準備</Link>とあわせて取り組むことで、より充実した備えができます。
              </p>
            </div>
          </FadeInUp>

          {/* What to write */}
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">WHAT TO WRITE</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              葬儀に関して書いておく内容
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-16">
            {noteItems.map((item) => (
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

          {/* Family sharing */}
          <FadeInUp className="mb-16">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">SHARING WITH FAMILY</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              家族への共有方法
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mb-8" />
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose">
              <p>
                エンディングノートは書いて終わりではなく、ご家族と内容を共有することが大切です。「こういう希望がある」と話し合うことで、書いた内容がより活かされます。
              </p>
              <p>
                ノートの保管場所をご家族に伝えておくことも重要です。「いざというときにノートが見つからない」という状況を避けるために、保管場所を明確にしておきましょう。<Link href="/consultation/family-meeting" className="text-[#5c4a80] underline underline-offset-2 hover:text-[#453869] transition-colors">ご家族での話し合い</Link>のページもあわせてご参照ください。
              </p>
            </div>
          </FadeInUp>

          {/* Combining with consultation */}
          <FadeInUp className="mb-16">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">WITH CONSULTATION</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              稲垣屋葬儀店との事前相談との組み合わせ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mb-8" />
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose">
              <p>
                エンディングノートと<Link href="/consultation" className="text-[#5c4a80] underline underline-offset-2 hover:text-[#453869] transition-colors">稲垣屋葬儀店の事前相談</Link>を組み合わせることで、より充実した葬儀の備えができます。「エンディングノートに書こうとしているが、何を書けばよいか分からない」という段階でも、事前相談でご相談いただけます。
              </p>
              <p>
                事前相談でお聞きした内容をもとに、「どの項目をエンディングノートに書くべきか」「費用の目安はどのくらいか」などをご案内します。相談は何度でも無料ですので、ノートを書き進める中で疑問が出てきたら、その都度ご連絡ください。また、<Link href="/faq" className="text-[#5c4a80] underline underline-offset-2 hover:text-[#453869] transition-colors">よくあるご質問</Link>も参考にしてください。
              </p>
            </div>
          </FadeInUp>

          {/* Related links */}
          <FadeInUp>
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">RELATED</p>
            <h2 className="text-[#312852] text-xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              関連ページ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mb-7" />
            <ul className="space-y-3">
              {[
                { label: "事前相談について", href: "/consultation" },
                { label: "生前のご相談", href: "/consultation/living" },
                { label: "葬儀の事前準備", href: "/consultation/preparation" },
                { label: "ご家族での話し合い", href: "/consultation/family-meeting" },
                { label: "よくあるご質問", href: "/faq" },
                { label: "お問い合わせ", href: "/contact" },
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
