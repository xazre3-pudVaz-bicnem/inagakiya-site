import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "葬儀見積もりで確認すべきこと｜葛飾区 稲垣屋葬儀店",
  description:
    "葬儀の見積もりを受け取ったとき、何を確認すれば安心できるか。葛飾区の稲垣屋葬儀店が、見積もりの読み方・確認ポイント・比較するときの注意点を丁寧に解説します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/cost/estimate" },
};

const includeItems = [
  { title: "搬送・安置費用", desc: "ご逝去場所から安置場所、安置場所から式場・火葬場への搬送費用が含まれているか確認します。「何km以内の搬送」など条件がある場合もあります。" },
  { title: "棺・骨壺・副葬品", desc: "棺や骨壺の種類・グレードが明記されているか確認します。標準と別料金のものを明確に区別してもらいましょう。" },
  { title: "祭壇・生花・装飾", desc: "どの程度の祭壇が含まれているか確認します。「花祭壇に変更する場合の追加費用」なども聞いておくと安心です。" },
  { title: "スタッフ人件費・進行費用", desc: "葬儀の進行・司会・受付補助などのスタッフ費用が含まれているか確認します。人数・日数についても確認しましょう。" },
  { title: "各種消耗品・備品", desc: "ドライアイス・お線香・蝋燭・会葬礼状・白木位牌などの消耗品が含まれているか、または別途費用となるかを確認します。" },
];

const excludeItems = [
  { title: "火葬料・斎場使用料", desc: "多くの場合、プランには含まれず別途請求となります。葛飾区民の方向けの費用制度がある場合もあります。" },
  { title: "宗教者への謝礼（お布施）", desc: "原則として葬儀社のプランには含まれず、直接宗教者にお渡しします。" },
  { title: "飲食費・返礼品", desc: "通夜振る舞いや香典返しは、別途費用がかかる場合が多いです。人数に応じて変わるため、概算を聞いておきましょう。" },
  { title: "遺影写真制作費", desc: "プランに含まれる場合と別途の場合があります。写真の加工費用についても確認しましょう。" },
  { title: "死亡診断書取得費・行政手続き代行費", desc: "書類取得や役所への提出代行が有料の場合があります。対応範囲について確認しましょう。" },
];

const compareItems = [
  { title: "同じ条件で比較する", desc: "葬儀社によって「プランに含まれるもの」が異なります。安さだけで比較するのではなく、何が含まれているかを揃えた状態で比較することが大切です。" },
  { title: "総額で比較する", desc: "基本プランの金額だけでなく、火葬料・宗教者謝礼・返礼品などを加えた総額で比較しましょう。トータルで見たときに変わる場合があります。" },
  { title: "対応力・信頼性も加味する", desc: "24時間対応できるか・担当者が丁寧に説明してくれるか・緊急時にすぐ動けるかも、葬儀社を選ぶ上で重要な要素です。" },
  { title: "アフターサポートを確認する", desc: "葬儀後の手続きサポート・法要のご案内・納骨の相談など、葬儀後も継続してお付き合いできる葬儀社かどうかも確認しましょう。" },
];

const faqItems = [
  {
    q: "見積もりはいつ取ればよいですか？",
    a: "事前相談として、急いでいない状況でも見積もりを取ることができます。ご逝去前に概算を把握しておくことで、いざという時に慌てずに対応できます。稲垣屋葬儀店では事前相談・見積もりを無料で承っています。",
  },
  {
    q: "複数の葬儀社から見積もりを取ることはできますか？",
    a: "もちろん可能です。ただし、比較する際は「同じ条件・内容で比較しているか」をご確認ください。プランに含まれる内容が異なる場合、単純に金額だけで比べることが難しいことがあります。稲垣屋葬儀店では、他社との比較についてもご相談いただけます。",
  },
  {
    q: "見積もりをもらった後にキャンセルはできますか？",
    a: "事前相談・見積もりの段階ではキャンセルに費用は発生しません。ご契約や手配を進めた後の変更については、状況により異なります。詳細はご相談の際にご確認ください。",
  },
  {
    q: "見積もりに含まれていない費用が発生した場合はどうなりますか？",
    a: "稲垣屋葬儀店では、ご希望による変更・追加がある場合は、その都度事前にご説明・確認した上で対応しています。お客様がご承知でない追加費用を請求することはございません。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "葬儀見積もりで確認すべきこと｜葛飾区 稲垣屋葬儀店",
  description:
    "葬儀の見積もりを受け取ったとき、何を確認すれば安心できるか。葛飾区の稲垣屋葬儀店が、見積もりの読み方・確認ポイント・比較するときの注意点を丁寧に解説します。",
  url: "https://www.inagakiyasougiten.com/cost/estimate",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀費用", item: "https://www.inagakiyasougiten.com/cost" },
      { "@type": "ListItem", position: 3, name: "葬儀見積もりで確認すべきこと", item: "https://www.inagakiyasougiten.com/cost/estimate" },
    ],
  },
};

export default function CostEstimatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="葬儀見積もりで確認すべきこと"
        subtitle="見積もりを正しく読み解き、納得のいく葬儀のためのポイント"
        en="ESTIMATE CHECKLIST"
      />
      <Breadcrumb items={[{ label: "葬儀費用", href: "/cost" }, { label: "見積もりの確認ポイント" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ESTIMATE</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              見積もりに含まれるもの
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              葬儀の見積もりを受け取ったとき、金額だけを見るのではなく、「何が含まれているか」を確認することが大切です。葬儀社によってプランに含まれる内容が異なるため、同じ金額でも実際の費用が変わることがあります。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {includeItems.map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-6">
                  <h4 className="text-[#312852] text-base tracking-wide mb-1.5" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.title}
                  </h4>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mb-10">
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              見積もりに含まれないことが多い費用
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {excludeItems.map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-6">
                  <h4 className="text-[#312852] text-base tracking-wide mb-1.5" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.title}
                  </h4>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mb-10">
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              葬儀社を比較する際の注意点
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {compareItems.map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-6">
                  <h4 className="text-[#312852] text-base tracking-wide mb-1.5" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.title}
                  </h4>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mb-10">
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              よくあるご質問
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {faqItems.map((item) => (
              <StaggerItem key={item.q}>
                <div className="py-6">
                  <p className="text-[#312852] text-base mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                    <span className="text-[#9278be] font-bold mr-2">Q</span>
                    {item.q}
                  </p>
                  <p className="text-[#4a4a4a] text-sm leading-loose pl-6">
                    <span className="text-[#c9a55a] font-bold mr-2">A</span>
                    {item.a}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp>
            <div className="flex flex-wrap gap-4">
              <Link href="/cost/breakdown" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                費用の内訳について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/cost/additional" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                追加費用が発生しやすい項目<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/cost/reduce" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                費用を抑えるための考え方<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/consultation" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                事前相談について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/cost" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                葬儀費用一覧に戻る<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              ご不明な点はお気軽にご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              事前相談・お見積もりは無料です。
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
