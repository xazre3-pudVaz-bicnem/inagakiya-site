import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "無理な営業をしない事前相談｜葛飾区 稲垣屋葬儀店",
  description:
    "稲垣屋葬儀店の事前相談は、強引な勧誘・セールスを一切行いません。情報収集だけでもOK。形式に迷っている段階からでもご相談いただけます。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/consultation/no-pressure" },
};

const doNotItems = [
  {
    title: "強引な勧誘やセールス",
    desc: "相談中に無理なプランの押しつけや、感情に訴えかけるセールスは一切行いません。",
  },
  {
    title: "相談費用の請求",
    desc: "事前相談は何度でも完全無料です。相談したことで費用が発生することはありません。",
  },
  {
    title: "プランの押しつけ",
    desc: "こちらから特定のプランをすすめることはしません。ご状況やご希望をお聞きした上で、選択肢をご説明します。",
  },
  {
    title: "何度も電話・連絡",
    desc: "相談後にしつこくご連絡することはありません。次の連絡はお客様のタイミングでお願いしています。",
  },
  {
    title: "「いつご依頼いただけますか」という催促",
    desc: "相談後の依頼を急かすことは一切しません。ご自身のペースで検討していただいて構いません。",
  },
];

const faqs = [
  {
    q: "相談後、断ることはできますか？",
    a: "はい、もちろんです。事前相談は情報収集のためのものです。相談後に「他社に依頼した」「まだ決めない」という判断も全く問題ありません。稲垣屋葬儀店では「相談したから必ず依頼しなければならない」という義務は一切ありません。お断りの連絡も不要です。安心してご相談ください。",
  },
  {
    q: "見積もりだけ取って断ることはできますか？",
    a: "はい、見積もりだけのご依頼も承っています。見積もりを他社と比較することも大切なことです。稲垣屋葬儀店では費用の内訳を分かりやすくご説明しますので、比較検討にご活用いただければと思います。",
  },
  {
    q: "相談後にしつこく電話がかかってくることはありますか？",
    a: "ありません。相談後に稲垣屋葬儀店からしつこく連絡することは一切行いません。ご自身のペースでご検討ください。もし追加で聞きたいことがあれば、ご自身からご連絡いただければ、いつでもお答えします。",
  },
  {
    q: "一度断ったら、もう相談できませんか？",
    a: "そのようなことはありません。一度断っても、改めてご相談いただくことは大歓迎です。また、他の葬儀社に依頼した方が後で「やっぱり稲垣屋葬儀店に相談したい」とご連絡いただくこともあります。いつでも歓迎します。",
  },
];

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "無理な営業をしない事前相談",
  description:
    "稲垣屋葬儀店の事前相談は、強引な勧誘・セールスを一切行いません。情報収集だけでもOK。形式に迷っている段階からでもご相談いただけます。",
  url: "https://www.inagakiyasougiten.com/consultation/no-pressure",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "事前相談", item: "https://www.inagakiyasougiten.com/consultation" },
      { "@type": "ListItem", position: 3, name: "無理な営業なし", item: "https://www.inagakiyasougiten.com/consultation/no-pressure" },
    ],
  },
};

export default function NoPressurePage() {
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
        title="強引な営業をしない事前相談"
        subtitle="情報収集だけでも、どうぞお気軽に"
        en="NO PRESSURE CONSULTATION"
      />
      <Breadcrumb
        items={[
          { label: "事前相談", href: "/consultation" },
          { label: "無理な営業なし" },
        ]}
      />

      {/* Intro */}
      <section className="py-20 md:py-28 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">OUR STANCE</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              稲垣屋葬儀店の相談スタンス
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp className="mb-16">
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose">
              <p>
                葬儀の相談をためらう方の多くが、「相談したら断れなくなるのでは」「しつこく営業されるのでは」というご不安をお持ちです。稲垣屋葬儀店では、そのような不安を感じさせない相談を心がけています。
              </p>
              <p>
                <Link href="/consultation" className="text-[#5c4a80] underline underline-offset-2 hover:text-[#453869] transition-colors">事前相談</Link>は、あくまでも情報収集のための機会です。「どんな形式があるか知りたい」「費用の目安だけ聞きたい」という段階でも、ご遠慮なくご連絡ください。相談後に依頼する義務は一切ありません。
              </p>
              <p>
                稲垣屋葬儀店は明治11年創業の老舗葬儀店として、地域の皆様との長いお付き合いを大切にしてきました。「いつでも気軽に相談できる葬儀社」でいることが、私たちの変わらぬ姿勢です。<Link href="/about" className="text-[#5c4a80] underline underline-offset-2 hover:text-[#453869] transition-colors">稲垣屋葬儀店について</Link>や<Link href="/reasons" className="text-[#5c4a80] underline underline-offset-2 hover:text-[#453869] transition-colors">選ばれる理由</Link>もあわせてご覧ください。
              </p>
            </div>
          </FadeInUp>

          {/* Do not list */}
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">WHAT WE DON&apos;T DO</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              稲垣屋葬儀店が「しない」こと
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-16">
            {doNotItems.map((item) => (
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

          {/* Info gathering section */}
          <FadeInUp className="mb-16">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">INFORMATION ONLY</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              情報収集段階からのご相談を歓迎します
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mb-8" />
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose">
              <p>
                「まだ具体的な予定はないが、いざというときのために知っておきたい」という段階でのご相談を歓迎しています。<Link href="/consultation/checklist" className="text-[#5c4a80] underline underline-offset-2 hover:text-[#453869] transition-colors">相談チェックリスト</Link>を参考に、気になることをいくつかお聞きいただくだけでも、いざというときの備えになります。
              </p>
              <p>
                また、費用の目安だけを知りたい方は<Link href="/consultation/cost" className="text-[#5c4a80] underline underline-offset-2 hover:text-[#453869] transition-colors">費用の事前相談</Link>、葬儀全般のご不明点は<Link href="/faq" className="text-[#5c4a80] underline underline-offset-2 hover:text-[#453869] transition-colors">よくあるご質問</Link>もご参照ください。
              </p>
            </div>
          </FadeInUp>

          {/* Why this stance */}
          <FadeInUp className="mb-16">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">OUR PHILOSOPHY</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              なぜこのスタンスを取るのか
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mb-8" />
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose">
              <p>
                明治11年創業の稲垣屋葬儀店は、葛飾区で長年にわたり地域の皆様に寄り添ってきました。葬儀は人生の中でも特別な場面です。だからこそ、プレッシャーなく、安心して相談できる環境が必要だと考えています。
              </p>
              <p>
                「いつでも気軽に相談できる葬儀社」として地域に根ざすことが、稲垣屋葬儀店の変わらぬ姿勢です。強引な勧誘は短期的には受注につながるかもしれませんが、長期的な信頼関係を築くものではありません。私たちは、ご相談いただいた方が本当に必要としたときに、真っ先に思い浮かべていただける存在でありたいと考えています。
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
                { label: "相談チェックリスト", href: "/consultation/checklist" },
                { label: "費用の事前相談", href: "/consultation/cost" },
                { label: "稲垣屋葬儀店について", href: "/about" },
                { label: "選ばれる理由", href: "/reasons" },
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
