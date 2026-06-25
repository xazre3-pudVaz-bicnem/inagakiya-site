import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import Breadcrumb from "../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "資格・認定・所属団体｜稲垣屋葬儀店（葛飾区堀切）",
  description:
    "稲垣屋葬儀店の資格・認定・所属団体。葬祭ディレクター1級・認定飯田葬儀相談員・葛飾区民葬儀取扱店・業界団体加盟。確かな専門性で葛飾区の皆さまをサポート。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/qualification" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "葬祭ディレクター1級はどのような資格ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "厚生労働省が認定する葬祭ディレクター技能審査制度に基づく国家資格です。葬儀全般に関する深い知識と高い技術を持つ専門家であることを証明します。1級は葬祭業の最上位資格で、試験に合格した専門家のみが取得できます。",
      },
    },
    {
      "@type": "Question",
      name: "葛飾区民葬儀取扱店とはどのような認定ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "葛飾区が指定する葬儀取扱店の認定です。一定の基準をクリアした葬儀社のみが指定を受けられます。葛飾区民の方は区民葬儀制度を利用することで費用を抑えた葬儀が可能です。",
      },
    },
    {
      "@type": "Question",
      name: "認定飯田葬儀相談員とはどのような資格ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "葬儀に関する専門知識を持つ相談員としての認定です。ご遺族の想いに寄り添い、適切なアドバイスとプランのご提案ができる専門家であることを示します。",
      },
    },
    {
      "@type": "Question",
      name: "業界団体加盟は安心の証になりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい。業界団体に加盟した葬儀社は、業界全体の品質向上・適正価格・適切なサービス基準の遵守が求められます。加盟は価格・品質・対応の透明性を保証する一つの目安となります。",
      },
    },
  ],
};

const qualifications = [
  {
    category: "資格",
    issuer: "厚生労働省認定・国家資格",
    title: "葬祭ディレクター1級",
    desc: "葬祭ディレクター技能審査制度に基づき、厚生労働省が認定する国家資格です。葬儀全般に関する深い知識と高い技術を持つ専門家であることを証明します。1級は葬祭業の最上位資格で、試験に合格した専門家のみが取得できます。葬儀の段取りから宗教的な作法、費用の説明まで、幅広い専門知識を持つ担当者がお手伝いすることで、ご家族は安心して葬儀をお任せいただけます。「何もわからない」状態でご葬儀を迎えるご家族の不安に、国家資格を持つ専門家として誠実にお答えします。",
  },
  {
    category: "資格",
    issuer: "専門相談員認定",
    title: "認定飯田葬儀相談員",
    desc: "葬儀に関する専門知識を持つ相談員としての認定資格です。ご遺族の想いに寄り添い、適切なアドバイスとプランのご提案ができる専門家であることを示します。事前相談から葬儀後の各種手続きまで、幅広くサポートする知識と経験を持つことが認定の要件です。「費用はどれくらい？」「どんな葬儀形式が合っているの？」「宗教的な手続きはどうすれば？」など、葬儀に関するあらゆる疑問に丁寧にお答えします。専門知識を持った相談員がいることで、ご家族は安心して疑問を打ち明けることができます。",
  },
  {
    category: "認定",
    issuer: "葛飾区指定",
    title: "葛飾区民葬儀取扱店",
    desc: "葛飾区が指定する区民葬儀取扱店として認定を受けています。葛飾区が定める一定の基準をクリアした葬儀社のみが指定を受けることができる、行政からの信頼の証です。葛飾区民の方は区民葬儀制度を利用することで費用を抑えながら質の高い葬儀を行うことができます。区民葬儀制度の内容のご説明から、申請手続きのサポートまで、稲垣屋葬儀店が一貫してお手伝いします。「費用面が心配」という方も、まずはご相談ください。区の制度を最大限に活用できるよう、丁寧にご案内します。",
  },
  {
    category: "所属",
    issuer: "業界団体",
    title: "業界団体加盟",
    desc: "葬祭業の業界団体に加盟しており、業界全体の品質向上と適正な葬儀サービスの提供に取り組んでいます。業界団体への加盟は、価格の透明性・品質の一定基準・対応マナーについて、業界ルールに基づいた適切なサービスを提供することの証でもあります。「葬儀社の選び方がわからない」という方にとって、業界団体への加盟は安心の目安の一つとなります。稲垣屋葬儀店は、資格・認定・団体加盟の三つの観点から、信頼できる葬儀社であることをお約束します。葛飾区の皆さまに、安心してお任せいただける葬儀社であり続けるために、日々取り組んでいます。",
  },
];

export default function QualificationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero title="資格・認定・所属団体" subtitle="確かな専門性と信頼の証" en="QUALIFICATIONS" />
      <Breadcrumb items={[{ label: "資格・認定・所属団体" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">QUALIFICATIONS</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              確かな資格と地域密着の信頼
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              稲垣屋葬儀店は、葬儀専門の資格・認定・団体加盟により、葛飾区の皆さまに安心の葬儀サービスをお届けしています。資格とは「誰でも葬儀ができる」のではなく、「確かな知識と技術をもってお手伝いできる」ことの証です。ご家族が安心して葬儀をお任せいただけるよう、専門性の向上に日々取り組んでいます。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mt-10">
            {qualifications.map((q) => (
              <StaggerItem key={q.title}>
                <div className="py-9">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[#c9a55a] text-xs tracking-[0.25em] border border-[#c9a55a] px-2 py-0.5" style={{ fontFamily: "var(--font-mincho)" }}>
                      {q.category}
                    </span>
                    <p className="text-[#9278be] text-xs tracking-[0.15em]">{q.issuer}</p>
                  </div>
                  <h3 className="text-[#312852] text-xl tracking-wide mb-4" style={{ fontFamily: "var(--font-mincho)" }}>
                    {q.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{q.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mt-10">
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose">
              資格・認定・団体加盟は、ご家族に「安心してお任せできる」と感じていただくための一つの根拠です。しかし最終的には、担当者の人柄・誠実さ・対応の丁寧さが、ご葬儀の満足度を決めると考えています。稲垣屋葬儀店では、資格に裏付けられた専門知識と、地域に根付いた誠実な対応を合わせてお届けします。
            </p>
          </FadeInUp>

          <FadeInUp className="mt-12">
            <div className="flex flex-wrap gap-6">
              <Link href="/about" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                稲垣屋葬儀店について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/reasons" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                選ばれる理由<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              葬儀のご相談・事前相談
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              どんな疑問でも、お気軽にご連絡ください。事前相談は無料です。
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
