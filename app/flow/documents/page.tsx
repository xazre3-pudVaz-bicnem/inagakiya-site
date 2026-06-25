import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "葬儀後の手続き・書類について｜葬儀の流れ｜稲垣屋葬儀店（葛飾区）",
  description:
    "葬儀後に必要な手続き・書類について、葛飾区の稲垣屋葬儀店が丁寧にご説明します。死亡届・火葬許可証・各種保険・相続など、葬儀後にすべきことをまとめました。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/flow/documents" },
};

export default function FlowDocumentsPage() {
  return (
    <>
      <PageHero title="葬儀後の手続き・書類" subtitle="葬儀後にすべき手続きをご案内します" en="POST-FUNERAL PROCEDURES" />
      <Breadcrumb items={[{ label: "葬儀の流れ", href: "/flow" }, { label: "葬儀後の手続き" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">AFTER FUNERAL</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              葬儀後の手続きについて
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              葬儀が終わっても、さまざまな手続きが残っています。悲しみの中での手続きは大変ですが、期限があるものもありますので、ご確認ください。稲垣屋葬儀店では、葬儀後の手続きについてもご案内しています。
            </p>
          </FadeInUp>

          <FadeInUp className="mt-8 mb-10">
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              葬儀直後〜数日以内の手続き
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {[
              {
                title: "死亡届の提出",
                deadline: "ご逝去後7日以内",
                desc: "市区町村役場に「死亡届」を提出します。死亡診断書（死体検案書）に必要事項を記入して提出。稲垣屋葬儀店でもサポートしています。",
              },
              {
                title: "火葬許可証の取得・提出",
                deadline: "火葬前に必要",
                desc: "死亡届提出後に「火葬許可証」が交付されます。火葬時に火葬場へ提出し、火葬後に「埋葬許可証」が発行されます。",
              },
              {
                title: "健康保険証の返還",
                deadline: "ご逝去後14日以内",
                desc: "故人様が加入していた健康保険の保険証を返還します。国民健康保険の場合は市区町村役場へ、会社の健保の場合は勤務先を通じて手続きします。",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-[#312852] text-lg tracking-wide" style={{ fontFamily: "var(--font-mincho)" }}>
                      {item.title}
                    </h3>
                    <span className="text-[#9278be] text-xs border border-[#d5c6eb] px-2 py-0.5 shrink-0">{item.deadline}</span>
                  </div>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mb-10">
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              葬儀後〜数ヶ月以内の手続き
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-14">
            {[
              {
                title: "年金受給停止の手続き",
                deadline: "ご逝去後14日以内（国民年金）/ 10日以内（厚生年金）",
                desc: "故人様が年金を受給していた場合、受給停止の手続きが必要です。年金事務所または市区町村役場にご相談ください。",
              },
              {
                title: "各種保険の手続き",
                deadline: "保険によって異なる",
                desc: "生命保険・損害保険などの死亡保険金請求手続き。加入している保険会社にご連絡の上、必要書類を準備します。",
              },
              {
                title: "相続に関する手続き",
                deadline: "相続放棄は3か月以内など",
                desc: "相続の手続きは複雑な場合があります。特に相続放棄を検討される場合は期限（3か月）に注意が必要です。弁護士・税理士など専門家への相談をお勧めします。",
              },
              {
                title: "公共料金・各種名義変更",
                deadline: "できるだけ早めに",
                desc: "電気・ガス・水道・電話など各種公共料金の名義変更や解約手続き。金融機関の口座凍結にも注意が必要です。",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-[#312852] text-lg tracking-wide" style={{ fontFamily: "var(--font-mincho)" }}>
                      {item.title}
                    </h3>
                    <span className="text-[#9278be] text-xs border border-[#d5c6eb] px-2 py-0.5">{item.deadline}</span>
                  </div>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp>
            <p className="text-[#7560a0] text-sm leading-loose">
              ※ 上記は一般的な手続きの目安です。ご状況によって必要な手続きが異なる場合があります。詳細は各担当窓口または専門家にご確認ください。
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/flow" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                葬儀全体の流れ<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              手続きについてご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              葬儀後の手続きについてもお気軽にご相談ください。
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 group justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
              <MessageCircle size={17} />お問い合わせ<ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
