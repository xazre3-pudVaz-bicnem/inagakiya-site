import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "はじめて葬儀を行う方へ｜葛飾区 稲垣屋葬儀店",
  description:
    "はじめて葬儀を行う方へ。急なご逝去でも慌てないよう、葛飾区の稲垣屋葬儀店が葬儀の全体像・流れ・費用・プランの選び方を丁寧にご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/support/first-time" },
};

const faqs = [
  {
    q: "葬儀社への連絡は、いつ・どのタイミングでするのでしょうか？",
    a: "ご家族が亡くなられた直後、または亡くなる見込みが出た段階でご連絡いただけます。病院でご逝去の場合、医師から死亡診断書を受け取った後、できるだけ早めにご連絡ください。稲垣屋葬儀店は24時間365日対応しており、深夜・早朝でも構いません。まずはお電話（03-3690-0870）をいただければ、次に何をすべきかをご案内します。",
  },
  {
    q: "葬儀の費用はどれくらいかかりますか？",
    a: "葬儀の費用は、選ぶプランや規模によって大きく異なります。火葬式（直葬）であれば基本的な費用から、家族葬・一般葬になるほど費用は増える傾向にあります。また、飲食費・返礼品・お布施などの実費も別途発生します。稲垣屋葬儀店では事前相談の際に、ご家族のご要望に合わせた費用目安をご説明しますので、お気軽にお問い合わせください。",
  },
  {
    q: "菩提寺がない場合でも葬儀はできますか？",
    a: "はい、菩提寺がなくても葬儀を行うことができます。宗教者を呼ばない無宗教葬（自由葬）という形式もありますし、ご希望に応じて寺院をご紹介することも可能です。また、火葬式であれば宗教的な儀式なしで行うこともできます。お気軽にご相談ください。",
  },
  {
    q: "急な死亡で何も準備できていませんが、大丈夫でしょうか？",
    a: "はい、ご安心ください。急なご逝去の際、ご家族が準備できていないのは当然のことです。稲垣屋葬儀店では、まずご遺体のお迎えから始まり、手続き・打ち合わせ・葬儀の実施まで、スタッフが一つひとつ丁寧にご案内します。何も分からなくて構いません。まずはお電話一本をいただければ、すぐに動き出します。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const steps = [
  { step: "1", title: "ご逝去・ご連絡", desc: "病院または自宅でご逝去後、葬儀社へ連絡します。" },
  { step: "2", title: "ご遺体のお迎え・安置", desc: "葬儀社がご遺体をお迎えし、ご自宅または安置施設へ搬送します。" },
  { step: "3", title: "葬儀の打ち合わせ", desc: "日程・プラン・宗教者・返礼品などを決めます。" },
  { step: "4", title: "通夜（または省略）", desc: "ご家族・親族・参列者とともにお別れの場を設けます。" },
  { step: "5", title: "葬儀・告別式", desc: "宗教者による儀式と、参列者によるお別れを行います。" },
  { step: "6", title: "出棺・火葬", desc: "火葬場へ移動し、火葬を行います。収骨後、骨壺に納めます。" },
  { step: "7", title: "初七日・精進落とし", desc: "火葬後、初七日法要や食事の場を設けることが多いです。" },
];

export default function FirstTimePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        title="はじめて葬儀を行う方へ"
        subtitle="葬儀の全体像・流れ・費用をわかりやすくご説明します"
        en="FIRST TIME GUIDE"
      />
      <Breadcrumb
        items={[
          { label: "サポート情報", href: "/support" },
          { label: "はじめての葬儀" },
        ]}
      />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">INTRODUCTION</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              はじめての葬儀について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              大切な方を突然失ったとき、葬儀の経験がない方はどこから手をつければよいか分からず、戸惑われることがほとんどです。「何を準備すればよいか」「費用はどれくらいかかるのか」「菩提寺がないが大丈夫か」——そのような不安は、初めての葬儀では当然のことです。
            </p>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              稲垣屋葬儀店は、明治11年頃の創業以来、葛飾区の地域の皆様のご葬儀を数多くお手伝いしてきた葬儀社です。葬祭ディレクター1級を取得したスタッフが、はじめての方にも分かりやすく一つひとつご説明しながら対応いたします。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              このページでは、葬儀の全体像・流れ・費用の考え方・プランの選び方などを解説します。ご不明な点はいつでもお気軽にご連絡ください。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FLOW</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              葬儀の全体的な流れ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {steps.map((s) => (
              <StaggerItem key={s.step}>
                <div className="py-7 flex items-start gap-6">
                  <span className="text-[#c9a55a] text-2xl tracking-tight shrink-0" style={{ fontFamily: "var(--font-mincho)" }}>
                    {s.step}
                  </span>
                  <div>
                    <h3
                      className="text-[#312852] text-lg tracking-wide mb-2"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-[#4a4a4a] text-base leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mt-8">
            <p className="text-[#7560a0] text-sm leading-relaxed">
              詳しい流れは
              <Link href="/flow/after-death" className="underline underline-offset-2 hover:text-[#312852] transition-colors mx-1">
                ご逝去直後から葬儀まで
              </Link>
              もご参照ください。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">PLAN TYPES</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              葬儀の形式・プランの種類
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "家族葬",
                desc: "ご家族やごく親しい方だけで行う葬儀です。参列者が少ないため、故人とゆっくりお別れする時間を持てます。費用も一般葬より抑えられることが多いです。",
                href: "/plans/family-funeral",
              },
              {
                title: "一日葬",
                desc: "お通夜を省略し、告別式と火葬を1日で行います。遠方からの参列者が少ない場合や、体力的・時間的な負担を軽減したい方に向いています。",
                href: "/plans/oneday-funeral",
              },
              {
                title: "火葬式（直葬）",
                desc: "通夜・告別式を行わず、火葬のみのシンプルな形式です。費用を最小限に抑えたい方、故人の希望で簡素に見送りたい方に選ばれています。",
                href: "/plans/cremation",
              },
              {
                title: "一般葬",
                desc: "お通夜・告別式を行う伝統的な葬儀形式です。友人・知人・会社関係など多くの方にお別れの機会を設けたい場合に適しています。",
                href: "/plans/general-funeral",
              },
            ].map((plan) => (
              <StaggerItem key={plan.title}>
                <div className="py-7">
                  <h3
                    className="text-[#312852] text-lg tracking-wide mb-2"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    {plan.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-base leading-relaxed mb-3">{plan.desc}</p>
                  <Link
                    href={plan.href}
                    className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors"
                  >
                    詳細を見る <ChevronRight size={13} />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COST</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              費用の考え方
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              葬儀費用は「葬儀社への支払い」「宗教者へのお布施」「飲食・返礼品などの実費」の3つに大きく分かれます。葬儀社への支払いはプランや規模によって異なりますが、実費部分はご家族の選択次第で変動します。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              葛飾区民の方は、葛飾区が提供する「区民葬儀」制度をご利用いただくことで、費用を抑えた葬儀を行うことができます。稲垣屋葬儀店は区民葬儀の取扱店として登録されており、ご相談を承っております。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              費用についての詳細は
              <Link href="/cost" className="underline underline-offset-2 text-[#5c4a80] hover:text-[#312852] transition-colors mx-1">
                葬儀費用について
              </Link>
              または
              <Link href="/consultation" className="underline underline-offset-2 text-[#5c4a80] hover:text-[#312852] transition-colors mx-1">
                事前相談
              </Link>
              にてご確認ください。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">URGENT</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              急なご逝去のときに最初にすること
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "まず落ち着いて、葬儀社へ連絡する",
                desc: "病院から「臨終です」と告げられた直後、または自宅で亡くなられた場合は、まず葬儀社へお電話ください。稲垣屋葬儀店は24時間365日対応（03-3690-0870）しております。",
              },
              {
                title: "死亡診断書を受け取る",
                desc: "病院でご逝去の場合、医師から死亡診断書が発行されます。大切な書類ですので紛失しないよう保管してください。葬儀社がコピーの管理や手続きをサポートします。",
              },
              {
                title: "ご遺体の搬送先を決める",
                desc: "ご自宅への安置か、葬儀社の安置施設への安置かをお伝えください。スタッフが迅速にお迎えに参ります。",
              },
              {
                title: "急いで全部決めなくて大丈夫",
                desc: "葬儀の日程・プラン・参列者への連絡などは、安置後に落ち着いてから決めていただけます。まず「搬送」だけ依頼していただければ構いません。",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3
                    className="text-[#312852] text-base tracking-wide mb-2"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              よくあるご質問
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <div className="py-7">
                  <p
                    className="text-[#312852] text-base tracking-wide mb-3"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    Q. {faq.q}
                  </p>
                  <p className="text-[#4a4a4a] text-base leading-relaxed pl-4 border-l border-[#c9a55a]">
                    {faq.a}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mt-8">
            <p className="text-[#7560a0] text-sm">
              その他のご質問は
              <Link href="/faq" className="underline underline-offset-2 hover:text-[#312852] transition-colors mx-1">
                よくある質問ページ
              </Link>
              もご覧ください。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2
              className="text-[#312852] text-2xl tracking-[0.08em] mb-5"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              ご不明な点はお気軽にご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              稲垣屋葬儀店は24時間365日対応。どんなご相談でもお気軽にどうぞ。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 group w-full sm:w-auto justify-center"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                <MessageCircle size={17} />お問い合わせ<ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 border border-[#9278be] text-[#5c4a80] hover:bg-[#ede7f6] px-8 py-4 tracking-wider transition-colors duration-300 w-full sm:w-auto justify-center"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                事前相談について
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
