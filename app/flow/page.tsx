import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import { FadeInUp, StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, Phone, Users, MessageCircle, Heart, Star, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "葬儀の流れ｜葛飾区 稲垣屋葬儀店",
  description:
    "葛飾区の稲垣屋葬儀店が葬儀の流れをご説明します。ご逝去のご連絡からお迎え・打ち合わせ・通夜・葬儀・アフターサポートまで、丁寧にサポートします。",
};

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "ご連絡",
    subtitle: "24時間いつでも",
    desc: "ご逝去された際は、まず稲垣屋葬儀店にお電話ください。深夜・早朝・休日を問わず、24時間365日対応しております。慌てず、まずはお電話一本から始まります。",
    detail: [
      "24時間365日受付対応",
      "深夜・早朝も迅速に対応",
      "どんな状況でも落ち着いてご連絡を",
    ],
  },
  {
    number: "02",
    icon: Heart,
    title: "お迎え・ご安置",
    subtitle: "迅速に対応",
    desc: "ご連絡いただいた後、迅速に故人様のもとへお迎えに参ります。ご自宅または斎場・安置施設にてご安置いたします。ご家族が落ち着いてお別れできる環境を整えます。",
    detail: [
      "迅速なお迎え対応",
      "ご自宅または安置施設にてご安置",
      "24時間安置対応",
    ],
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "打ち合わせ",
    subtitle: "ご希望をお聞きします",
    desc: "ご安置の後、担当スタッフがご家族とご相談しながら葬儀のプランを決めていきます。ご希望のスタイル・日程・参列者の人数・費用など、丁寧にお伺いします。費用は事前に明確にご提示します。",
    detail: [
      "ご希望のプランを一緒に決める",
      "費用の明確な事前提示",
      "強引な勧誘は一切なし",
    ],
  },
  {
    number: "04",
    icon: Users,
    title: "納棺",
    subtitle: "ご家族の時間",
    desc: "故人様を棺に納める「納棺」を行います。ご家族が一緒にお手伝いいただけます。故人様の旅立ちの準備をご家族と一緒に行う、大切な時間です。",
    detail: [
      "ご家族も一緒に参加できます",
      "丁寧で心を込めた納棺",
      "故人様への最後のお世話",
    ],
  },
  {
    number: "05",
    icon: Star,
    title: "通夜・告別式",
    subtitle: "お別れの場",
    desc: "ご希望のプランに合わせて、通夜・告別式を執り行います。家族葬の場合はご家族だけで、一般葬の場合は多くのご参列者をお迎えして、故人とのお別れの場を設けます。",
    detail: [
      "プランに合わせた式の進行",
      "心を込めたご進行サポート",
      "ご参列者への対応もサポート",
    ],
  },
  {
    number: "06",
    icon: Shield,
    title: "出棺・火葬・収骨",
    subtitle: "最後のお見送り",
    desc: "告別式の後、火葬場へご出棺します。火葬の後、ご家族でお骨上げ（収骨）を行います。故人様が骨壺に収まるまで、スタッフが丁寧にサポートいたします。",
    detail: [
      "火葬場への移動サポート",
      "収骨のご案内",
      "ご家族へのお付き添い",
    ],
  },
  {
    number: "07",
    icon: Heart,
    title: "アフターサポート",
    subtitle: "葬儀後も寄り添います",
    desc: "葬儀後も、稲垣屋葬儀店はご家族に寄り添います。四十九日・一周忌などの法要のご相談、各種手続きのアドバイスなど、葬儀後も丁寧にサポートいたします。",
    detail: [
      "四十九日・法要のご相談",
      "各種手続きのアドバイス",
      "アフターサポートも充実",
    ],
  },
];

export default function FlowPage() {
  return (
    <>
      <PageHero
        title="葬儀の流れ"
        subtitle="ご逝去からアフターサポートまで、丁寧にサポートします"
        en="FUNERAL FLOW"
      />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">STEP BY STEP</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              葬儀の流れ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
            <p className="text-[#4a4a4a] mt-6 text-base leading-relaxed max-w-2xl">
              ご逝去から葬儀・アフターサポートまで、一連の流れをご説明します。どのタイミングでご相談いただいても、丁寧にサポートいたします。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {steps.map((step) => (
              <StaggerItem key={step.number}>
                <div className="flex items-start gap-6 py-8">
                  <div className="shrink-0 w-14 text-center pt-1">
                    <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-1">STEP</p>
                    <p className="text-[#c9a55a] text-2xl tracking-wider" style={{ fontFamily: "var(--font-mincho)" }}>
                      {step.number}
                    </p>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2.5 mb-2">
                      <step.icon size={16} className="text-[#9278be] shrink-0" />
                      <h3 className="text-[#312852] text-lg tracking-wide" style={{ fontFamily: "var(--font-mincho)" }}>
                        {step.title}
                      </h3>
                      <span className="text-[#9278be] text-xs tracking-wide">{step.subtitle}</span>
                    </div>
                    <p className="text-[#4a4a4a] text-base leading-loose mb-4">{step.desc}</p>
                    <ul className="space-y-1.5">
                      {step.detail.map((d) => (
                        <li key={d} className="flex items-center gap-2.5 text-[#4a4a4a] text-sm">
                          <span className="w-1 h-1 bg-[#9278be] rounded-full shrink-0" />{d}
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

      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              流れについてご不明な点はお気軽に
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              事前相談も承っております。いざというときに慌てないよう、まずはお気軽にご相談ください。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 group w-full sm:w-auto justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
                <MessageCircle size={17} />
                お問い合わせ
                <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/consultation" className="inline-flex items-center gap-2 border border-[#9278be] text-[#5c4a80] hover:bg-[#ede7f6] px-8 py-4 tracking-wider transition-colors duration-300 w-full sm:w-auto justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
                事前相談について
                <ChevronRight size={15} />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
