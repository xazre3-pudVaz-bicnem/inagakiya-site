import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import { FadeInUp, StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, Award, Star, Shield, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "稲垣屋葬儀店について｜葛飾区の葬儀社",
  description:
    "葛飾区堀切の稲垣屋葬儀店。創業明治11年頃より根付く地域密着の葬儀社です。代表・飯田雄生のもと、不易流行の精神で伝統を守りながら現代のニーズに寄り添います。",
};

const credentials = [
  { icon: Award, label: "葬祭ディレクター1級", sub: "国家資格", desc: "厚生労働省認定の葬祭ディレクター技能審査1級を取得。葬儀全般に関する深い知識と高い技術を持つ専門家として認定されています。" },
  { icon: Star, label: "認定飯田葬儀相談員", sub: "専門相談員認定", desc: "葬儀に関する専門的な相談に対応できる認定相談員として認定。ご家族の想いや疑問に、専門知識を持って丁寧にお答えします。" },
  { icon: Shield, label: "区民葬儀取扱店", sub: "葛飾区指定", desc: "葛飾区が指定する区民葬儀取扱店。葛飾区民の方は区民葬儀制度を利用することで費用を抑えた葬儀が可能です。" },
  { icon: Users, label: "組合加盟", sub: "業界団体所属", desc: "業界団体の組合に加盟。適正な価格と質の高いサービスを提供するための業界基準を遵守しています。" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="稲垣屋葬儀店について"
        subtitle="葛飾区に根付いた、信頼の葬儀社"
        en="ABOUT US"
      />

      {/* ─── Story ─────────────────────────────────────────── */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-12">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">OUR STORY</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              葛飾区で選ばれ続ける理由
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            <StaggerItem>
              <div className="py-9">
                <h3
                  className="text-[#312852] text-xl tracking-wide mb-4"
                  style={{ fontFamily: "var(--font-mincho)" }}
                >
                  創業明治11年頃からの歴史
                </h3>
                <p className="text-[#4a4a4a] text-base md:text-lg leading-loose">
                  稲垣屋葬儀店は、創業明治11年頃より葛飾区堀切に根付いた葬儀社です。100年以上にわたり、地域の皆さまの大切なお別れをお手伝いしてきた歴史があります。その積み重ねが、私たちの誇りであり、変わらない使命です。
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="py-9">
                <h3
                  className="text-[#312852] text-xl tracking-wide mb-4"
                  style={{ fontFamily: "var(--font-mincho)" }}
                >
                  地域密着の葬儀社として
                </h3>
                <p className="text-[#4a4a4a] text-base md:text-lg leading-loose">
                  葛飾区堀切で長年地域に寄り添ってきたからこそ、地元の地理・文化・習慣を熟知しています。地元のお寺・斎場との連携もスムーズで、きめ細やかな対応をお約束します。
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="py-9">
                <h3
                  className="text-[#312852] text-xl tracking-wide mb-4"
                  style={{ fontFamily: "var(--font-mincho)" }}
                >
                  現代のニーズへの柔軟な対応
                </h3>
                <p className="text-[#4a4a4a] text-base md:text-lg leading-loose">
                  現在の代表・飯田雄生のもと、伝統を大切にしながらも現代のご家族のニーズに柔軟に対応。家族葬・小規模葬儀など、今の時代に合ったお葬式をご提案しています。「昔ながらの安心感」と「現代的な対応力」の両立こそが、稲垣屋葬儀店の強みです。
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <FadeInUp className="mt-8">
            <Link
              href="/company"
              className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group"
            >
              会社概要・沿革を見る
              <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* ─── Credentials ───────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-12">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">CREDENTIALS</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              資格・認定・所属
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
            <p className="text-[#4a4a4a] mt-5 text-base leading-relaxed">
              稲垣屋葬儀店は、確かな資格・認定・組合加盟により、安心・信頼の葬儀をお届けします。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {credentials.map((item) => (
              <StaggerItem key={item.label}>
                <div className="flex items-start gap-5 py-7">
                  <item.icon size={20} className="text-[#9278be] mt-1 shrink-0" />
                  <div>
                    <p className="text-[#c9a55a] text-xs tracking-[0.2em] mb-0.5">{item.sub}</p>
                    <h3
                      className="text-[#312852] text-lg tracking-wide mb-2"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      {item.label}
                    </h3>
                    <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <p
              className="text-[#312852] text-base md:text-lg leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              葛飾区で安心してご相談いただける老舗葬儀社として、
              <br className="hidden md:block" />
              いつでもお気軽にお問い合わせください。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 group"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              お問い合わせ・ご相談
              <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
