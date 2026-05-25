import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import { FadeInUp, StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, Award, Clock, MapPin, MessageCircle, Heart, Star, Shield, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "葛飾区の葬儀社が選ばれる理由｜稲垣屋葬儀店",
  description:
    "葛飾区の稲垣屋葬儀店が選ばれる8つの理由。葬祭ディレクター1級・区民葬儀取扱・24時間対応・地域密着・事前相談無料。創業明治11年頃の信頼と実績をご紹介します。",
};

const reasons = [
  {
    num: "01",
    icon: Award,
    title: "葬祭ディレクター1級の確かな対応",
    desc: "国家資格である葬祭ディレクター技能審査1級を取得した専門家が対応します。葬儀全般に関する深い知識と高い技術で、ご家族を確かにサポートいたします。",
    points: ["葬儀全般の専門知識を保有", "法令・マナーに沿った対応", "ご家族の疑問に丁寧にお答え"],
  },
  {
    num: "02",
    icon: Shield,
    title: "区民葬儀取扱店として費用面も安心",
    desc: "稲垣屋葬儀店は葛飾区が指定する区民葬儀取扱店です。葛飾区民の方は区民葬儀制度を利用することで、費用を抑えながら質の高い葬儀を行うことができます。",
    points: ["葛飾区指定取扱店", "区民葬儀制度の活用が可能", "明確・透明な費用提示"],
  },
  {
    num: "03",
    icon: Clock,
    title: "24時間365日いつでも対応",
    desc: "ご逝去は時間を選びません。深夜・早朝・休日を問わず、24時間365日対応しております。急なご連絡にも迅速に対応し、ご家族の不安を和らげます。",
    points: ["深夜・早朝も対応", "休日・祝日も変わらず対応", "迅速なお迎えと対応"],
  },
  {
    num: "04",
    icon: MapPin,
    title: "葛飾区堀切の地域密着葬儀社",
    desc: "葛飾区堀切に根付いて100年以上。地域の地理・文化・習慣を熟知しており、地元のお寺・斎場との連携もスムーズです。",
    points: ["地元葛飾区での豊富な実績", "地域のお寺・斎場との強いつながり", "地域の慣習・文化への深い理解"],
  },
  {
    num: "05",
    icon: MessageCircle,
    title: "事前相談で「もしものとき」に備える",
    desc: "「もしものとき」に備えた事前相談を無料で承っています。費用・流れ・希望のスタイルなど、どんな疑問もお気軽にどうぞ。",
    points: ["事前相談は無料", "費用の概算を事前に確認可能", "希望のスタイルをじっくりご相談"],
  },
  {
    num: "06",
    icon: Heart,
    title: "家族葬・小規模葬儀への対応",
    desc: "近年増加している家族葬や小規模葬儀にも対応しています。ご家族だけでゆっくりお別れしたい、シンプルな葬儀がよいという現代のニーズに柔軟にお応えします。",
    points: ["家族葬・一日葬・火葬式に対応", "ご家族の希望を最大限に反映", "小規模でも心のこもった葬儀"],
  },
  {
    num: "07",
    icon: Star,
    title: "認定葬儀相談員による丁寧なサポート",
    desc: "認定飯田葬儀相談員として認定された相談員が在籍しています。葬儀に関するあらゆる疑問・不安に、専門的な知識をもって丁寧にお答えします。",
    points: ["専門資格を持つ相談員が在籍", "葬儀前から葬儀後まで一貫サポート", "ご家族の不安を丁寧に解消"],
  },
  {
    num: "08",
    icon: Users,
    title: "組合加盟による安心・信頼の保証",
    desc: "業界団体の組合に加盟しており、業界の適正基準に従ったサービスを提供しています。品質・価格・対応において一定の基準を保証しています。",
    points: ["業界基準に沿った適正サービス", "価格・品質の透明性", "業界ルールの遵守"],
  },
];

export default function ReasonsPage() {
  return (
    <>
      <PageHero
        title="葛飾区で選ばれる理由"
        subtitle="稲垣屋葬儀店が長く信頼されてきた理由をご紹介します"
        en="WHY CHOOSE US"
      />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">8 REASONS</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              8つの強み
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
            <p className="text-[#4a4a4a] mt-5 text-base md:text-lg leading-relaxed max-w-2xl">
              葛飾区の葬儀社として、私たちが大切にしていることをご紹介します。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {reasons.map((reason) => (
              <StaggerItem key={reason.num}>
                <div className="flex items-start gap-6 py-9">
                  <div className="shrink-0 flex flex-col items-center gap-2 pt-1">
                    <span
                      className="text-[#c9a55a] text-xs tracking-[0.2em]"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      {reason.num}
                    </span>
                    <reason.icon size={20} className="text-[#9278be]" />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-[#312852] text-xl tracking-wide mb-3"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      {reason.title}
                    </h3>
                    <p className="text-[#4a4a4a] text-base leading-loose mb-4">{reason.desc}</p>
                    <ul className="space-y-1.5">
                      {reason.points.map((pt) => (
                        <li key={pt} className="flex items-center gap-2.5 text-sm text-[#4a4a4a]">
                          <span className="w-1 h-1 bg-[#9278be] rounded-full shrink-0" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em] mb-5"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              葛飾区の葬儀は稲垣屋葬儀店へ
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              まずはお気軽にご相談ください。事前相談も無料で承っております。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 group w-full sm:w-auto justify-center"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                お問い合わせ
                <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 border border-[#9278be] text-[#5c4a80] hover:bg-[#ede7f6] px-8 py-4 tracking-wider transition-colors duration-300 group w-full sm:w-auto justify-center"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                事前相談について
                <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
