import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "葬儀費用を抑えるための考え方｜葛飾区 稲垣屋葬儀店",
  description:
    "葬儀費用をご家族のご予算に合わせるための考え方を葛飾区の稲垣屋葬儀店が解説します。形式の選択・参列者規模・区民葬儀制度の活用など、品質を保ちながら費用を整えるポイントをご案内します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/cost/reduce" },
};

const reduceItems = [
  {
    en: "Funeral Style",
    title: "ご家族のご要望に合った形式を選ぶ",
    desc: "葬儀の形式によって費用は大きく変わります。一般葬・家族葬・一日葬・火葬式のいずれが、ご家族の状況やご要望に合っているかを考えることが、費用を整える第一歩です。「どの形式が合っているか分からない」という方も、稲垣屋葬儀店にご相談いただければ、ご状況に合わせてご提案します。",
  },
  {
    en: "Scale",
    title: "参列者の規模を明確にする",
    desc: "飲食費・返礼品は参列者の人数に連動します。「どなたにお声がけするか」を早めに整理することで、費用の見通しがつきやすくなります。家族だけで静かに送りたいというご要望も大切な選択肢です。無理に参列者を増やす必要はありません。",
  },
  {
    en: "Kuminso-gi",
    title: "葛飾区民葬儀制度の活用",
    desc: "葛飾区民の方には、区が設けた「区民葬儀制度」があります。稲垣屋葬儀店は葛飾区が認定した区民葬儀取扱店であり、この制度のご利用をサポートしています。制度の対象範囲・費用は葛飾区の規定に基づくため、詳細はご相談の際にご確認ください。",
  },
  {
    en: "No Over-specification",
    title: "必要以上の仕様にしない",
    desc: "祭壇・棺・骨壺などは多様なグレードがあります。「立派な葬儀でなければ失礼」と感じる方もいらっしゃいますが、故人を大切に送ることと費用の大きさは必ずしも一致しません。ご家族が納得できる形であれば、シンプルな形式を選ぶことも誠実な選択です。",
  },
  {
    en: "Pre-consultation",
    title: "事前に相談し、計画的に準備する",
    desc: "急いで決める必要がある状況では、十分に検討できないまま費用が膨らんでしまうことがあります。事前相談を活用して、ご家族のご予算・ご要望・状況を事前に整理しておくことで、いざという時に落ち着いて対応できます。",
  },
  {
    en: "DIY Where Possible",
    title: "ご家族ができることを分担する",
    desc: "受付・案内・通夜振る舞いの準備など、ご家族が担当できる部分を担うことで、スタッフ費用の一部を抑えることができる場合があります。ただし、無理のない範囲での分担が大切です。",
  },
];

const balanceItems = [
  { title: "費用と品質のバランスを考える", desc: "葬儀の費用を抑えることは決して悪いことではありません。大切なのは「ご家族の気持ちと予算の両方に無理がない形を選ぶこと」です。稲垣屋葬儀店では、ご予算の範囲内でご家族のご要望に合った葬儀をご提案します。" },
  { title: "後悔しない選択のために", desc: "費用を抑えることに集中するあまり、後から「あの演出があればよかった」「もう少し丁寧に送りたかった」と感じることがないよう、事前にじっくりとご相談ください。" },
  { title: "稲垣屋葬儀店のご提案姿勢", desc: "稲垣屋葬儀店では、ご家族のご予算とご要望を丁寧にお聞きし、「このご予算でできる最善の葬儀」をご提案することを大切にしています。無理な売り込みは一切行いません。" },
];

const faqItems = [
  {
    q: "費用を抑えた葬儀でも、きちんとしたお別れができますか？",
    a: "はい。費用の大きさと葬儀の誠実さは必ずしも一致しません。火葬式・家族葬など、シンプルな形式でも、故人様を心を込めて送ることは十分に可能です。稲垣屋葬儀店では、形式の大小にかかわらず、誠実なご対応を心がけています。",
  },
  {
    q: "区民葬儀制度とはどのようなものですか？",
    a: "葛飾区が設けた制度で、葛飾区民の方が利用できる葬儀の費用サポートです。稲垣屋葬儀店は区の指定する取扱店として認定されており、制度のご活用についてご相談いただけます。制度の詳細・適用条件は葛飾区の規定に基づきますので、ご相談の際にご確認ください。",
  },
  {
    q: "家族葬と一般葬で費用はどのくらい変わりますか？",
    a: "規模・内容によって異なりますが、参列者数の差による飲食費・返礼品費用の違いが大きく影響します。家族葬では参列者が少ない分、これらの費用を抑えやすい傾向があります。具体的な費用については事前相談でご確認ください。",
  },
  {
    q: "費用相談は電話でもできますか？",
    a: "はい。稲垣屋葬儀店では24時間365日電話でのご相談に対応しています。電話番号は03-3690-0870です。費用についても遠慮なくご相談ください。",
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

export default function CostReducePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="葬儀費用を抑えるための考え方"
        subtitle="ご家族のご予算に合わせた形式をご提案します"
        en="COST PLANNING"
      />
      <Breadcrumb items={[{ label: "葬儀費用", href: "/cost" }, { label: "費用を抑える考え方" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COST PLANNING</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              ご予算に合わせた葬儀の考え方
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              「葬儀には費用がかかる」とは分かっていても、実際にどのくらいかかるのか、どこで費用を調整できるのかが分からず不安に感じる方は多くいらっしゃいます。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              稲垣屋葬儀店では、ご家族のご予算に合わせた形式・内容をご提案することを大切にしています。費用を抑えることは決して恥ずかしいことではなく、ご家族にとって最善の選択を考えることです。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {reduceItems.map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-1">{item.en}</p>
                  <h4 className="text-[#312852] text-lg tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.title}
                  </h4>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mb-10">
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              費用と品質のバランスについて
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {balanceItems.map((item) => (
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
              <Link href="/cost/katsushika" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                葛飾区での費用のポイント<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/cost/number-of-attendees" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                参列人数と費用の関係<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/plans/kumin-funeral" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                区民葬儀プランについて<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
