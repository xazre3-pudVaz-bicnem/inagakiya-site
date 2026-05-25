import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import { FadeInUp, StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, CheckCircle2, MessageCircle, Clock, Heart, Shield, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "事前相談｜葛飾区 稲垣屋葬儀店",
  description:
    "葛飾区の稲垣屋葬儀店では、「もしものとき」に備えた事前相談を無料で承っています。葬儀の費用・流れ・プランについて、お気軽にご相談ください。",
};

export default function ConsultationPage() {
  return (
    <>
      <PageHero
        title="事前相談"
        subtitle="「もしものとき」に備えた、無料の事前相談"
        en="PRE-CONSULTATION"
      />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FREE CONSULTATION</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              事前相談は無料です
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp className="mb-14">
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose">
              葬儀はある日突然のことが多く、「何から準備すればよいか分からない」「費用が心配」という方も多いです。稲垣屋葬儀店では、「もしものとき」に備えた事前相談を無料で承っています。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mt-4">
              事前にご相談いただくことで、いざというときに落ち着いて対応できます。また、ご希望のお別れの形を事前に共有いただくことで、より故人とご家族の想いに沿った葬儀が実現します。
            </p>
          </FadeInUp>

          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">WHAT WE COVER</p>
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              事前相談でお答えできること
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-16">
            {[
              { icon: Clock, title: "葬儀の費用について", desc: "葬儀の種類・規模別の概算費用をご説明します。予算に合わせたプランをご提案します。" },
              { icon: Heart, title: "葬儀のプランについて", desc: "家族葬・一日葬・火葬式・一般葬など、各プランの特徴・違いをご説明します。" },
              { icon: Shield, title: "区民葬儀について", desc: "葛飾区民の方が利用できる区民葬儀制度についてご説明します。" },
              { icon: Users, title: "葬儀の流れについて", desc: "ご逝去からアフターサポートまで、葬儀の一般的な流れをご説明します。" },
              { icon: MessageCircle, title: "ご希望の葬儀スタイル", desc: "どのようなお別れをしたいか、ご希望を事前にお伺いします。" },
              { icon: CheckCircle2, title: "その他ご不安なこと", desc: "葬儀に関するどんな疑問・不安もお気軽にご相談ください。" },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex items-start gap-5 py-7">
                  <item.icon size={20} className="text-[#9278be] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-[#312852] text-lg tracking-wide mb-1.5" style={{ fontFamily: "var(--font-mincho)" }}>{item.title}</h4>
                    <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FLOW</p>
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              事前相談の流れ
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-16">
            {[
              { step: "1", title: "お問い合わせ", desc: "お電話またはお問い合わせフォームよりご連絡ください。" },
              { step: "2", title: "日程のご調整", desc: "ご都合に合わせて相談日時を調整します。ご来社または電話相談も承ります。" },
              { step: "3", title: "ご相談", desc: "費用・プラン・流れなど、どんな疑問もお気軽にお話しください。強引な勧誘は一切いたしません。" },
              { step: "4", title: "ご確認・記録", desc: "ご希望の内容をご確認いただき、必要に応じてお見積書をお渡しします。" },
            ].map((flow) => (
              <StaggerItem key={flow.step}>
                <div className="flex items-start gap-6 py-6">
                  <span className="text-[#c9a55a] text-sm tracking-wide shrink-0 w-6 pt-0.5" style={{ fontFamily: "var(--font-mincho)" }}>{flow.step}</span>
                  <div>
                    <h4 className="text-[#312852] text-base tracking-wide mb-1.5" style={{ fontFamily: "var(--font-mincho)" }}>{flow.title}</h4>
                    <p className="text-[#4a4a4a] text-base leading-relaxed">{flow.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp>
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">REASSURANCE</p>
            <h3 className="text-[#312852] text-xl tracking-wide mb-5" style={{ fontFamily: "var(--font-mincho)" }}>ご安心ください</h3>
            <ul className="space-y-3">
              {[
                "事前相談は完全無料です",
                "強引な勧誘・セールスは一切いたしません",
                "相談した内容が後から費用に反映されることはありません",
                "秘密は厳守いたします",
                "電話相談も承ります",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-1 h-1 bg-[#9278be] rounded-full shrink-0" />
                  <span className="text-[#4a4a4a] text-base">{item}</span>
                </li>
              ))}
            </ul>
          </FadeInUp>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              まずは、お気軽にご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              事前相談は無料です。「もしものとき」に備えて、今のうちにご相談いただくことをおすすめします。
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 group" style={{ fontFamily: "var(--font-mincho)" }}>
              <MessageCircle size={17} />
              事前相談・お問い合わせ
              <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
