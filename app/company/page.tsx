import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import { FadeInUp, StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, Phone, MapPin, Clock, Award, Shield, Star, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "会社概要｜葛飾区の葬儀社 稲垣屋葬儀店",
  description:
    "葛飾区堀切の稲垣屋葬儀店の会社概要。創業明治11年頃、代表飯田雄生。不易流行の精神で伝統と現代を融合した葬儀社です。電話・住所・アクセスなどの会社情報をご確認ください。",
};

const companyInfo = [
  { label: "会社名", value: "稲垣屋葬儀店" },
  { label: "代表者", value: "飯田 雄生" },
  { label: "創業", value: "明治11年頃" },
  { label: "所在地", value: "東京都葛飾区堀切6-33-4" },
  { label: "電話番号", value: "03-3690-0870", tel: true },
  { label: "営業時間", value: "24時間365日対応" },
  { label: "対応エリア", value: "東京都葛飾区中心" },
];

const credentials = [
  { icon: Award, label: "葬祭ディレクター1級", sub: "国家資格取得", desc: "厚生労働省認定の葬祭ディレクター技能審査1級取得。" },
  { icon: Star, label: "認定飯田葬儀相談員", sub: "専門相談員認定", desc: "葬儀に関する専門的な相談に対応できる認定相談員。" },
  { icon: Shield, label: "区民葬儀取扱店", sub: "葛飾区指定", desc: "葛飾区が指定する区民葬儀取扱店として登録。" },
  { icon: Users, label: "組合加盟", sub: "業界団体所属", desc: "業界団体の組合に加盟し、適正基準に従ったサービスを提供。" },
];

export default function CompanyPage() {
  return (
    <>
      <PageHero
        title="会社概要"
        subtitle="稲垣屋葬儀店について"
        en="COMPANY PROFILE"
      />

      {/* ─── 不易流行 ── 導入セクション ──────────────────── */}
      <section className="py-20 md:py-32 bg-white border-b border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            {/* Ornament */}
            <div className="flex flex-col items-center gap-1.5 mb-12">
              <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#c9a55a]" />
              <div className="w-2 h-2 border border-[#c9a55a] rotate-45" />
            </div>

            <div className="text-center mb-14">
              <p className="text-[#c9a55a] text-xs tracking-[0.45em] mb-4">OUR PHILOSOPHY</p>
              <h2
                className="text-[#312852] text-5xl md:text-6xl tracking-[0.15em] mb-4"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                不易流行
              </h2>
              <p className="text-[#7560a0] text-base md:text-lg tracking-wide" style={{ fontFamily: "var(--font-mincho)" }}>
                変わらない本質を守り、時代の流れに柔軟に適応する
              </p>
              <div className="w-8 h-px bg-[#c9a55a] mx-auto mt-6" />
            </div>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            <StaggerItem>
              <div className="py-9">
                <p className="text-[#c9a55a] text-xs tracking-[0.35em] mb-3">HISTORY</p>
                <h3
                  className="text-[#312852] text-xl md:text-2xl tracking-wide mb-4"
                  style={{ fontFamily: "var(--font-mincho)" }}
                >
                  創業明治11年頃 ― 葛飾区堀切
                </h3>
                <p className="text-[#4a4a4a] text-base md:text-lg leading-loose">
                  稲垣屋葬儀店は、創業明治11年頃より東京都葛飾区堀切に根付いた葬儀社です。100年以上にわたり、地域の皆さまの大切なお別れをお手伝いしてきた歴史があります。地元の方々からの信頼と実績を積み重ね、葛飾区の葬儀文化と共に歩んでまいりました。
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="py-9">
                <p className="text-[#c9a55a] text-xs tracking-[0.35em] mb-3">NEW CHAPTER</p>
                <h3
                  className="text-[#312852] text-xl md:text-2xl tracking-wide mb-4"
                  style={{ fontFamily: "var(--font-mincho)" }}
                >
                  父から息子へ ― 新しい稲垣屋葬儀店
                </h3>
                <p className="text-[#4a4a4a] text-base md:text-lg leading-loose">
                  現在の代表・飯田雄生は、先代から受け継いだ「誠実に、丁寧に」という信念を胸に、新しい時代の稲垣屋葬儀店を担っています。伝統と歴史を大切にしながら、家族葬・小規模葬儀など現代のご家族のニーズにも柔軟に対応。「老舗の安心感」と「現代的な対応力」を両立した葬儀社として、葛飾区で選ばれ続けています。
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="py-9 grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-3">不易</p>
                  <h4
                    className="text-[#312852] text-lg tracking-wide mb-3"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    変わらないもの
                  </h4>
                  <p className="text-[#4a4a4a] text-base leading-loose">
                    葬儀の本質は、故人への敬意と遺族への寄り添いです。この変わらない真心を、稲垣屋葬儀店は創業以来大切にしてきました。どんな時代になっても、人の死と向き合う誠実さは変わりません。
                  </p>
                </div>
                <div>
                  <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-3">流行</p>
                  <h4
                    className="text-[#312852] text-lg tracking-wide mb-3"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    時代への適応
                  </h4>
                  <p className="text-[#4a4a4a] text-base leading-loose">
                    現代のご家族のニーズは多様化しています。家族葬・一日葬・火葬式など、新しいスタイルへの対応、そして丁寧な事前相談など、時代に合わせた柔軟なサービスを提供しています。
                  </p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Representative ────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#faf9f7] border-b border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-12">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">REPRESENTATIVE</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              代表挨拶
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <div className="border-t border-[#e8ddf4] pt-8 space-y-6">
              <p className="text-[#4a4a4a] text-base md:text-lg leading-loose">
                このたびはご訪問いただき、誠にありがとうございます。
              </p>
              <p className="text-[#4a4a4a] text-base md:text-lg leading-loose">
                稲垣屋葬儀店は、創業明治11年頃より葛飾区堀切で歩んできた葬儀社です。先代から受け継いだ「誠実に、丁寧に」という信念を胸に、現代のご家族のニーズにお応えしてまいります。
              </p>
              <p className="text-[#4a4a4a] text-base md:text-lg leading-loose">
                葬儀は、故人への最後の贈り物です。ご家族の想いを形にするために、私たちは常に寄り添い、一つひとつのお別れを丁寧にお手伝いいたします。
              </p>
              <p className="text-[#4a4a4a] text-base md:text-lg leading-loose">
                「不易流行」― 変わらぬ本質を守りながら、現代に合った葬儀の形を共に考えてまいりましょう。どうぞお気軽にご相談ください。
              </p>
              <div className="pt-6 border-t border-[#e8ddf4]">
                <p
                  className="text-[#312852] text-lg tracking-wider text-right"
                  style={{ fontFamily: "var(--font-mincho)" }}
                >
                  稲垣屋葬儀店 代表　飯田 雄生
                </p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ─── Company Info ──────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white border-b border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-12">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COMPANY INFO</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              会社情報
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <dl className="divide-y divide-[#e8ddf4]">
              {companyInfo.map((item) => (
                <div key={item.label} className="flex flex-col sm:flex-row gap-1 sm:gap-8 py-5">
                  <dt className="text-[#7560a0] text-sm tracking-wide shrink-0 sm:w-28 pt-0.5">{item.label}</dt>
                  <dd className="text-[#1a1a1a] text-base leading-relaxed">
                    {item.tel ? (
                      <a
                        href={`tel:${item.value.replace(/-/g, "")}`}
                        className="text-[#312852] font-bold text-xl tracking-wider hover:text-[#5c4a80] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeInUp>
        </div>
      </section>

      {/* ─── Credentials ───────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#faf7fd] border-b border-[#e8ddf4]">
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
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {credentials.map((item) => (
              <StaggerItem key={item.label}>
                <div className="flex items-start gap-5 py-7">
                  <item.icon size={20} className="text-[#9278be] mt-1 shrink-0" />
                  <div>
                    <p className="text-[#c9a55a] text-xs tracking-[0.2em] mb-0.5">{item.sub}</p>
                    <h3
                      className="text-[#312852] text-lg tracking-wide mb-1.5"
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

      {/* ─── Map ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-12">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ACCESS</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              アクセス
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <div className="border border-[#e8ddf4] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.8!2d139.849!3d35.736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%91%9B%E9%A3%BE%E5%8C%BA%E5%A0%80%E5%88%876-33-4!5e0!3m2!1sja!2sjp!4v1"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="稲垣屋葬儀店 地図"
              />
              <div className="p-6 border-t border-[#e8ddf4]">
                <div className="flex items-start gap-3 mb-2">
                  <MapPin size={16} className="text-[#9278be] mt-0.5 shrink-0" />
                  <p className="text-[#1a1a1a] text-base">〒124-0006　東京都葛飾区堀切6-33-4</p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-[#9278be] mt-0.5 shrink-0" />
                  <a href="tel:0336900870" className="text-[#312852] font-bold tracking-wider hover:text-[#5c4a80] transition-colors">
                    03-3690-0870
                  </a>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-12 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <p className="text-[#4a4a4a] text-base mb-6">
              葬儀のご相談は、いつでもお気軽にご連絡ください。
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
