import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import Breadcrumb from "../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, Award, Shield, Users, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "資格・認定・所属団体｜葛飾区堀切の稲垣屋葬儀店",
  description:
    "稲垣屋葬儀店の資格・認定・所属団体一覧。葬祭ディレクター1級・認定飯田葬儀相談員・葛飾区民葬儀取扱店・東京都葬祭業組合加盟。確かな資格と地域密着の信頼。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/qualification" },
};

const qualifications = [
  {
    icon: Award,
    title: "葬祭ディレクター1級",
    issuer: "厚生労働省認定",
    desc: "葬祭ディレクター技能審査制度に基づき、厚生労働省が認定する国家資格。葬儀全般に関する深い知識と高い技術を持つ専門家であることを証明します。1級は葬祭業の最上位資格です。",
  },
  {
    icon: Users,
    title: "認定飯田葬儀相談員",
    issuer: "葬儀相談専門資格",
    desc: "葬儀に関する専門知識を持つ相談員としての認定。ご遺族の想いに寄り添い、適切なアドバイスとプランのご提案ができる専門家であることを示します。",
  },
  {
    icon: Shield,
    title: "葛飾区民葬儀取扱店",
    issuer: "葛飾区指定",
    desc: "葛飾区が指定する区民葬儀取扱店として認定。葛飾区民の方が利用できる区民葬儀制度に対応し、制度の説明から申し込みまで一貫してサポートします。",
  },
  {
    icon: BookOpen,
    title: "東京都葬祭業組合加盟",
    issuer: "業界団体",
    desc: "東京都の葬祭業者が加盟する組合に所属。業界全体の品質向上と適正な葬儀サービスの提供に取り組んでいます。",
  },
];

export default function QualificationPage() {
  return (
    <>
      <PageHero title="資格・認定・所属" subtitle="確かな専門性と信頼の証" en="QUALIFICATIONS" />
      <Breadcrumb items={[{ label: "資格・認定" }]} />

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
              稲垣屋葬儀店は、葬儀専門の資格と認定を取得し、葛飾区の皆さまに安心の葬儀サービスをお届けしています。資格は「誰でも葬儀ができる」のではなく、「確かな知識と技術をもってお手伝いできる」ことの証です。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mt-10">
            {qualifications.map((q) => (
              <StaggerItem key={q.title}>
                <div className="flex items-start gap-5 py-8">
                  <q.icon size={22} className="text-[#9278be] mt-1 shrink-0" />
                  <div>
                    <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-1">{q.issuer}</p>
                    <h3 className="text-[#312852] text-xl tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>
                      {q.title}
                    </h3>
                    <p className="text-[#4a4a4a] text-base leading-relaxed">{q.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mt-10">
            <div className="flex flex-wrap gap-4">
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
    </>
  );
}
