import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "葬儀費用の事前相談｜見積もり無料｜葛飾区 稲垣屋葬儀店",
  description:
    "葬儀費用の事前相談は無料。葛飾区の稲垣屋葬儀店が費用の概算・プランの費用比較・区民葬儀の費用について丁寧にご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/consultation/cost" },
};

const consultPoints = [
  {
    title: "費用の概算",
    desc: "火葬式・家族葬・一日葬・一般葬、それぞれの費用の目安をご説明します。「大体いくらかかるのか」を把握しておくだけでも、いざというときの準備につながります。",
  },
  {
    title: "費用の内訳",
    desc: "葬儀費用は「葬儀社費用」「お布施・宗教費用」「実費（飲食・返礼品など）」の大きく3つに分かれます。内訳を事前に理解しておくことで、見積もりを見たときに適切に判断できます。",
  },
  {
    title: "追加費用の目安",
    desc: "「見積もりより高くなった」というトラブルを避けるため、どのような費用が追加になりやすいかも事前にご説明します。稲垣屋葬儀店では追加費用が生じる場合は事前にご説明します。",
  },
];

const costComponents = [
  {
    title: "葬儀社費用",
    desc: "葬儀の運営に関わる費用です。棺・祭壇・搬送・スタッフ人件費・式場費用などが含まれます。プランや規模によって大きく異なります。稲垣屋葬儀店では各プランの費用を明示しています。",
  },
  {
    title: "お布施（宗教費用）",
    desc: "菩提寺や宗教者への謝礼です。宗派・地域・寺院によって異なりますが、事前相談でおおよその目安をお伝えすることができます。菩提寺がない場合はこの費用がかからない形式も選べます。",
  },
  {
    title: "実費（飲食・返礼品など）",
    desc: "参列者への飲食（通夜振る舞い・精進落とし）・返礼品・遺影の作成・位牌・火葬料などの実費です。参列者の人数や選ぶ品物によって変動します。",
  },
];

const faqs = [
  {
    q: "費用相談だけでも来ていただけますか？",
    a: "はい、もちろんです。「費用の目安だけ知りたい」という段階でのご相談は大歓迎です。稲垣屋葬儀店の事前相談は完全無料で、相談したからといってご依頼いただく義務はありません。費用の概算・各プランの費用比較・区民葬儀の費用などについてご説明します。",
  },
  {
    q: "見積もりは書面でいただけますか？",
    a: "はい、ご希望の場合は書面での見積もりを作成します。葬儀費用の内訳が明確になるよう、わかりやすく記載します。見積もりの内容についてご不明な点はご遠慮なくお尋ねください。",
  },
  {
    q: "葛飾区民葬儀制度を使うと費用はどのくらいになりますか？",
    a: "区民葬儀制度は葛飾区が設定した葬儀費用の基準に基づく制度です。通常の葬儀と比較して費用が抑えられる場合があります。ただし区民葬儀には対象者の条件があり、葬儀の内容によっても異なります。詳細は事前相談でご確認ください。稲垣屋葬儀店は葛飾区指定の取扱店です。",
  },
  {
    q: "葬儀費用は後払いでもよいですか？",
    a: "基本的には葬儀後のお支払いとなります。お支払い方法・時期については事前相談でご確認ください。ご要望に応じて対応いたします。",
  },
];

export default function CostConsultationPage() {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="葬儀費用の事前相談"
        subtitle="費用の見当がつかない段階からご相談ください"
        en="COST CONSULTATION"
      />
      <Breadcrumb
        items={[
          { label: "事前相談", href: "/consultation" },
          { label: "費用の事前相談" },
        ]}
      />

      {/* Why cost matters */}
      <section className="py-20 md:py-28 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">WHY IT MATTERS</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              なぜ費用相談が大切か
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp className="mb-16">
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose">
              <p>
                葬儀費用は多くの方が「思っていたより高かった」と感じる傾向があります。事前に費用の目安を把握しておくことで、突然の出費への備えや、形式の選択がしやすくなります。
              </p>
              <p>
                稲垣屋葬儀店の<Link href="/consultation" className="text-[#5c4a80] underline underline-offset-2 hover:text-[#453869] transition-colors">事前相談</Link>では、費用について詳しくご説明しています。「費用の目安を知りたい」という段階からのご相談は大歓迎です。費用に関する詳細は<Link href="/cost" className="text-[#5c4a80] underline underline-offset-2 hover:text-[#453869] transition-colors">葬儀費用のご案内</Link>ページもご参照ください。
              </p>
              <p>
                また、葛飾区民の方が利用できる区民葬儀制度についても、事前相談でご説明します。稲垣屋葬儀店は葛飾区指定の取扱店として、制度を活用した費用を抑えた葬儀もご提案できます。
              </p>
            </div>
          </FadeInUp>

          {/* What you can confirm */}
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">WHAT YOU CAN CONFIRM</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              相談で確認できること
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-16">
            {consultPoints.map((item) => (
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

          {/* Cost components */}
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COMPONENTS</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              費用の3つの構成要素
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-16">
            {costComponents.map((item) => (
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

          {/* Estimate tips */}
          <FadeInUp className="mb-16">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">TIPS</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              見積もりの取り方と注意点
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mb-6" />
            <div className="space-y-4 text-[#4a4a4a] text-base leading-loose">
              <p>
                葬儀の見積もりは、希望する形式・規模・参列者の人数を事前に整理してからご相談いただくと、より正確な概算をお伝えできます。<Link href="/cost/family-funeral" className="text-[#5c4a80] underline underline-offset-2 hover:text-[#453869] transition-colors">家族葬の費用</Link>については専用ページも参照ください。
              </p>
              <p>
                見積もりを見る際は、何がセットプランに含まれていて何が含まれていないかを確認することが重要です。「追加費用が発生するもの」を明確にしておくことで、想定外の出費を防げます。
              </p>
            </div>
          </FadeInUp>

          {/* Kumin */}
          <FadeInUp className="mb-16">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">KUMIN FUNERAL</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              区民葬儀制度について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mb-6" />
            <div className="space-y-4 text-[#4a4a4a] text-base leading-loose">
              <p>
                葛飾区民葬儀制度は、葛飾区が設定した基準に基づき費用が抑えられる制度です。稲垣屋葬儀店は葛飾区指定の取扱店として、この制度を活用した葬儀のご提案ができます。
              </p>
              <p>
                制度の対象者・申請方法・利用できる葬儀の内容については、<Link href="/consultation/kumin-funeral" className="text-[#5c4a80] underline underline-offset-2 hover:text-[#453869] transition-colors">区民葬儀についてのページ</Link>または事前相談でご確認ください。
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
                { label: "葬儀費用のご案内", href: "/cost" },
                { label: "家族葬の費用について", href: "/cost/family-funeral" },
                { label: "区民葬儀について", href: "/consultation/kumin-funeral" },
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
