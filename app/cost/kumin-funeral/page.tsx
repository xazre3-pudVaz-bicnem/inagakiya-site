import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = pageMetadata({
  title: "葛飾区民葬儀の費用｜区民葬儀制度の詳細｜稲垣屋葬儀店",
  description:
    "葛飾区民葬儀の費用について。稲垣屋葬儀店は葛飾区指定の区民葬儀取扱店です。区民葬儀制度を活用することで費用を抑えた葬儀が可能です。詳細はお問い合わせください。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/cost/kumin-funeral" },
});

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "葛飾区民葬儀の費用｜区民葬儀制度の詳細｜稲垣屋葬儀店",
  description:
    "葛飾区民葬儀の費用について。稲垣屋葬儀店は葛飾区指定の区民葬儀取扱店です。区民葬儀制度を活用することで費用を抑えた葬儀が可能です。詳細はお問い合わせください。",
  url: "https://www.inagakiyasougiten.com/cost/kumin-funeral",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀費用", item: "https://www.inagakiyasougiten.com/cost" },
      { "@type": "ListItem", position: 3, name: "葛飾区民葬儀の費用｜区民葬儀制度の詳細", item: "https://www.inagakiyasougiten.com/cost/kumin-funeral" },
    ],
  },
};

const faqItems = [
  {
    q: "区民葬儀制度はどのような方が利用できますか？",
    a: "東京23区にお住まいの方が対象です。故人様または喪主が23区内に住民登録をお持ちであることが条件となります。葛飾区以外の23区（足立区・江戸川区など）にお住まいの方もご利用いただけます。詳細な条件についてはご相談時にご確認ください。",
  },
  {
    q: "区民葬儀制度を利用すると費用はどのくらい変わりますか？",
    a: "区民葬儀では、祭壇・霊柩車・火葬・骨つぼ（遺骨収納容器）の4品目に23区共通の協定料金が設定されており、必要なものを選んで組み合わせられます（それ以外の費用は別途必要です）。どの品目を利用するかによって変わりますので、事前にご相談いただければ詳しくご説明します。",
  },
  {
    q: "区民葬儀を利用すると火葬料金の助成はありますか？",
    a: "四ツ木斎場など東京博善が運営する6斎場（町屋・落合・代々幡・四ツ木・桐ケ谷・堀ノ内）は2026年3月末で区民葬儀の取り扱いを終了したため、これらの斎場では区民葬儀の火葬券を使えません。代わりに令和8年4月1日から当面の間、23区共通の助成制度が設けられ、区民葬儀で祭壇（棺のみの利用を含む）または霊柩車のいずれかを利用し、これらの斎場で最も低い火葬料金（大人87,000円）を支払った場合に、大人27,000円・満6歳以下の小人15,000円を上限として助成を受けられます。故人様が住民登録をしていた区に、火葬日の翌日から2年以内に申請します。詳しい条件は区役所でご確認ください。",
  },
  {
    q: "稲垣屋葬儀店は区民葬儀を取り扱っていますか？",
    a: "はい、稲垣屋葬儀店は葛飾区が指定する区民葬儀取扱店として認定されています。区民葬儀の手続きサポートもいたします。",
  },
  {
    q: "区民葬儀制度を利用する場合、どのような手続きが必要ですか？",
    a: "区民葬儀取扱店に「区民葬儀を利用したい」とお伝えください。区民葬儀券は、死亡届の提出とあわせて区役所で申請します。稲垣屋葬儀店では申請手続きのサポートをいたしますので、お気軽にご相談ください。",
  },
];

export default function CostKuminFuneralPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageHero title="区民葬儀の費用" subtitle="葛飾区の区民葬儀制度と費用について" en="KUMINSO-GI COST" />
      <Breadcrumb items={[{ label: "葬儀費用", href: "/cost" }, { label: "区民葬儀の費用" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">KUMINSO-GI</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              葛飾区民葬儀制度について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              区民葬儀とは、東京23区（特別区）共通の葬儀制度で、故人様または喪主の方が葛飾区をはじめ東京23区にお住まいの場合に利用できます。区民葬儀取扱店を通じて申し込むことで、祭壇・霊柩車・火葬・骨つぼ（遺骨収納容器）の4品目を23区共通の協定料金で利用でき、費用を抑えやすくなります。必要なものだけを選んで組み合わせることができ、それ以外の費用は別途必要です。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              稲垣屋葬儀店は葛飾区が指定する区民葬儀取扱店として認定されており、区民葬儀の申し込みから葬儀の執行まで一貫してサポートします。直葬プラン（180,000円）から社葬プラン（胡蝶蘭 1,800,000円〜）まで、稲垣屋葬儀店のプランはすべて区民葬儀をご利用いただけます。
            </p>
          </FadeInUp>

          <FadeInUp className="mt-10 mb-10">
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              ご利用の条件
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {[
              { title: "対象者", desc: "東京23区にお住まいの方が対象です。ご逝去された方、または喪主の方が23区内に住民登録をお持ちの場合にご利用いただけます。" },
              { title: "取扱店での申し込み", desc: "区民葬儀取扱店（稲垣屋葬儀店はその一つ）に「区民葬儀を利用したい」とお伝えいただき、申し込みます。区民葬儀券は、死亡届の提出とあわせて区役所で申請し、取扱店にお渡しいただきます。" },
              { title: "費用について", desc: "祭壇・霊柩車・火葬・骨つぼ（遺骨収納容器）の4品目は、23区共通の協定料金に基づいています。必要なものを選んで組み合わせられ、それ以外の費用は別途必要です。内容は改定される場合があります。最新の情報はお問い合わせにてご確認ください。" },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-6">
                  <h4 className="text-[#312852] text-base tracking-wide mb-1.5" style={{ fontFamily: "var(--font-mincho)" }}>{item.title}</h4>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-6">
              なお、東京博善が運営する6斎場（町屋・落合・代々幡・四ツ木・桐ケ谷・堀ノ内）は2026年3月末で区民葬儀の取り扱いを終了したため、葛飾区内の四ツ木斎場でも区民葬儀の火葬券は使えません。代わりに令和8年4月1日から当面の間、23区共通の制度として火葬料金の助成が設けられています。区民葬儀で祭壇（棺のみの利用を含む）または霊柩車のいずれかを利用し、これらの斎場で最も低い火葬料金（大人87,000円）を支払った場合、大人27,000円・満6歳以下の小人15,000円を上限として助成されます。申請先は故人様が住民登録をしていた区（故人様が23区外にお住まいだった場合は、火葬料金を支払った方がお住まいの区）で、火葬日の翌日から2年以内の申請が必要です。詳しくは区役所でご確認ください。
            </p>
            <p className="text-[#7560a0] text-sm leading-loose">
              ※ 区民葬儀の詳細内容（料金・対象範囲等）については変更される場合があります。最新の情報は葛飾区のホームページまたは稲垣屋葬儀店へお問い合わせください。
            </p>
          </FadeInUp>

          <FadeInUp className="mt-10">
            <div className="flex flex-wrap gap-4">
              <Link href="/plans/kumin-funeral" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                区民葬儀プランの詳細<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/cost" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                葬儀費用一覧に戻る<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInUp>

          <FadeInUp className="mt-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-2" style={{ fontFamily: "var(--font-mincho)" }}>
              よくある質問
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mb-8" />
            <dl className="divide-y divide-[#e8ddf4]">
              {faqItems.map((item, i) => (
                <div key={i} className="py-5">
                  <dt className="text-[#312852] font-medium mb-2 leading-relaxed" style={{ fontFamily: "var(--font-mincho)" }}>
                    <span className="text-[#c9a55a] mr-2">Q.</span>
                    {item.q}
                  </dt>
                  <dd className="text-[#4a4a4a] text-sm leading-relaxed pl-5">
                    <span className="text-[#9278be] mr-2">A.</span>
                    {item.a}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeInUp>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>区民葬儀についてご相談ください</h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">区民葬儀の詳細・利用条件についてお気軽にお問い合わせください。</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 group w-full sm:w-auto justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
                <MessageCircle size={17} />お問い合わせ<ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/plans/kumin-funeral" className="inline-flex items-center gap-2 border border-[#9278be] text-[#5c4a80] hover:bg-[#ede7f6] px-8 py-4 tracking-wider transition-colors duration-300 w-full sm:w-auto justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
                区民葬儀プランを見る
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
