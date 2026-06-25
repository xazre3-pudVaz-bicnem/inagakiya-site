import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "葬儀の打ち合わせについて｜葬儀の流れ｜稲垣屋葬儀店（葛飾区）",
  description:
    "葬儀の打ち合わせで決めること・流れ・注意点を葛飾区の稲垣屋葬儀店が丁寧にご説明します。プランの選択・日程・参列者・宗教者・費用など。事前相談も無料で承っています。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/flow/meeting" },
};

export default function FlowMeetingPage() {
  return (
    <>
      <PageHero title="打ち合わせについて" subtitle="葬儀の内容を一緒に決めていきます" en="FUNERAL PLANNING MEETING" />
      <Breadcrumb items={[{ label: "葬儀の流れ", href: "/flow" }, { label: "打ち合わせ" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">PLANNING MEETING</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              打ち合わせで決めること
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              ご安置が整ったら、葬儀の内容についての打ち合わせを行います。稲垣屋葬儀店のスタッフが、ご家族の想いに寄り添いながら丁寧にお聞きします。「何を決めればよいか分からない」という方も、ご安心ください。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {[
              {
                title: "葬儀のプラン・形式",
                desc: "家族葬・一日葬・火葬式・一般葬・区民葬儀など、どの形式が適切かをご家族の状況・ご希望をもとにご提案します。それぞれのメリット・デメリット、費用の目安もご説明します。",
              },
              {
                title: "日程・場所",
                desc: "葬儀の日程は、ご家族のご都合・宗教者のスケジュール・斎場の空き状況などを考慮して決定します。葛飾区内の斎場・式場のご案内も行います。",
              },
              {
                title: "参列者の規模",
                desc: "家族葬の場合は参列者を限定するための案内方法、一般葬の場合は参列者へのご連絡方法もご相談できます。",
              },
              {
                title: "宗教・宗派",
                desc: "仏式・神式・キリスト教式・無宗教葬など、ご希望の形式に合わせてご対応します。菩提寺が決まっている場合はお寺とのやり取りについても相談できます。",
              },
              {
                title: "費用・プランの詳細",
                desc: "費用の内訳を事前に明確にご提示します。オプションについても丁寧にご説明しますので、ご不明な点はお気軽にご質問ください。",
              },
              {
                title: "遺影・返礼品・供花",
                desc: "遺影写真のご用意（手持ちのお写真からご準備できます）、返礼品・供花のご要望についてもご相談します。",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3 className="text-[#312852] text-lg tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp>
            <div className="border-t border-[#e8ddf4] pt-8">
              <p className="text-[#4a4a4a] text-base leading-loose mb-6">
                打ち合わせは通常、ご安置後の落ち着いたタイミングで行います。一度で全て決める必要はなく、後から変更が可能な項目もあります。ご家族で話し合いながら、一つずつ決めていただければ大丈夫です。
              </p>
              <p className="text-[#7560a0] text-sm leading-loose">
                ※ 事前相談（もしものときのための準備）は無料で承っています。「実際にお願いするかどうか決めていない」という段階でもお気軽にご連絡ください。
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/consultation" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                  事前相談について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/flow" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                  葬儀全体の流れ<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
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
              どんな小さなことでも、お気軽にご連絡ください。
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
