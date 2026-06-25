import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import Breadcrumb from "../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, CheckCircle2, MessageCircle, Clock, Heart, Shield, Users, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "事前相談｜無料・強引な勧誘なし｜葛飾区 稲垣屋葬儀店",
  description:
    "葛飾区の稲垣屋葬儀店では「もしものとき」に備えた事前相談を無料で承っています。費用・プラン・区民葬儀・流れなど、どんな疑問もお気軽にどうぞ。強引な勧誘は一切ありません。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/consultation" },
};

const consultItems = [
  {
    icon: Clock,
    title: "葬儀の費用について",
    desc: "葬儀の種類・規模別の概算費用をご説明します。「費用がどのくらいかかるか知りたい」というご相談が最も多く、事前に把握しておくことでいざというときの準備ができます。予算に合わせたプランをご提案します。",
  },
  {
    icon: Heart,
    title: "葬儀のプラン・形式について",
    desc: "家族葬・一日葬・火葬式・一般葬・区民葬儀など、各プランの特徴・違いをご説明します。「どの形式を選べばよいか分からない」というご家族に、状況やご希望をお聞きしながら一緒に考えます。",
  },
  {
    icon: Shield,
    title: "区民葬儀制度について",
    desc: "葛飾区民の方が利用できる区民葬儀制度についてご説明します。対象者の条件・申請手続き・費用の目安など、制度の詳細をご案内します。稲垣屋葬儀店は葛飾区指定の区民葬儀取扱店です。",
  },
  {
    icon: Users,
    title: "葬儀の流れ・手続きについて",
    desc: "ご逝去から葬儀・葬儀後の手続きまで、一連の流れをご説明します。死亡届・火葬許可証・年金停止など、葬儀後の手続きについても概要をご案内します。",
  },
  {
    icon: MessageCircle,
    title: "故人・ご家族のご希望を事前に共有",
    desc: "「故人が生前にこんな葬儀を希望していた」「ご家族でこういう形でお別れしたい」など、ご希望を事前にお伺いします。いざというときに、ご希望に沿った葬儀がスムーズに実現できます。",
  },
  {
    icon: CheckCircle2,
    title: "その他ご不安なこと・疑問",
    desc: "葬儀に関するどんな疑問・不安もお気軽にご相談ください。「こんなことを聞いてよいのか」というご遠慮は不要です。葬儀に関することであれば、なんでもお答えします。",
  },
];

const faqItems = [
  {
    q: "事前相談は本当に無料ですか？",
    a: "はい、完全無料です。費用が発生するのは、実際に葬儀をご依頼いただいた場合のみです。事前相談だけでのご来店・お電話は一切費用がかかりません。",
  },
  {
    q: "相談したら契約しなければなりませんか？",
    a: "いいえ、義務はありません。事前相談は情報収集のためのものです。相談したからといって必ずご依頼いただく必要はなく、強引な勧誘も一切行いません。安心してご相談ください。",
  },
  {
    q: "いつ相談するのが良いですか？",
    a: "「もしものとき」はいつ訪れるか分かりません。元気なうちに事前相談していただくことで、いざというときに慌てずに対応できます。特に、ご親族の高齢化が進んでいる方やご本人の体調が思わしくない方は、早めのご相談をおすすめします。",
  },
  {
    q: "電話での相談も可能ですか？",
    a: "はい、お電話（03-3690-0870）でのご相談も承っています。お時間のある方はご来店いただくと、より詳しくご説明できます。ご自宅への訪問相談も可能ですので、お気軽にご連絡ください。",
  },
];

export default function ConsultationPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "事前相談｜稲垣屋葬儀店",
    description: "葛飾区の稲垣屋葬儀店では「もしものとき」に備えた事前相談を無料で承っています。",
    url: "https://www.inagakiyasougiten.com/consultation",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com/" },
        { "@type": "ListItem", position: 2, name: "事前相談", item: "https://www.inagakiyasougiten.com/consultation" },
      ],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="事前相談"
        subtitle="「もしものとき」に備えた、無料の事前相談"
        en="PRE-CONSULTATION"
      />
      <Breadcrumb items={[{ label: "事前相談" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FREE CONSULTATION</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              事前相談は無料です
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp className="mb-14">
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose">
              <p>
                葬儀はある日突然のことが多く、「何から準備すればよいか分からない」「費用が心配」「どのような形式が合うか分からない」という方も多くいらっしゃいます。稲垣屋葬儀店では、「もしものとき」に備えた事前相談を無料で承っています。
              </p>
              <p>
                事前に相談することには大きなメリットがあります。いざというときに落ち着いて対応できること、ご家族での話し合いのきっかけになること、そして故人やご家族の希望を事前に共有しておくことで、より想いに沿った葬儀が実現できます。
              </p>
              <p>
                「まだ元気なのに葬儀の相談は早すぎるのでは」とお感じの方もいらっしゃいます。しかし、「もしものとき」は突然訪れます。特に、ご親族の高齢化が進んでいる方や、ご本人が生前に希望を伝えたい方は、早めにご相談いただくことをおすすめします。
              </p>
            </div>
          </FadeInUp>

          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">WHAT WE COVER</p>
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              事前相談でお答えできること
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-16">
            {consultItems.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex items-start gap-5 py-7">
                  <item.icon size={20} className="text-[#9278be] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-[#312852] text-base tracking-wide mb-1.5" style={{ fontFamily: "var(--font-mincho)" }}>{item.title}</h4>
                    <p className="text-[#4a4a4a] text-sm leading-loose">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">HOW TO CONSULT</p>
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              相談方法・来店のご案内
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-16">
            {[
              {
                icon: MessageCircle,
                title: "お電話でのご相談",
                desc: "お電話（03-3690-0870）にてご相談を承っています。24時間365日対応しております。「事前相談したい」とお伝えください。",
              },
              {
                icon: MapPin,
                title: "ご来店でのご相談",
                desc: "稲垣屋葬儀店（東京都葛飾区堀切6-33-4）へご来店いただくと、より詳しくご説明できます。お時間に余裕のある方は、ご来店をおすすめします。京成本線「堀切菖蒲園」駅より徒歩約5分。",
              },
              {
                icon: Heart,
                title: "ご訪問での相談",
                desc: "ご自宅へのお伺いも可能です。「来店が難しい」という方も、お気軽にご相談ください。",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex items-start gap-5 py-6">
                  <item.icon size={18} className="text-[#c9a55a] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-[#312852] text-base tracking-wide mb-1.5" style={{ fontFamily: "var(--font-mincho)" }}>{item.title}</h4>
                    <p className="text-[#4a4a4a] text-sm leading-loose">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mb-16">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">REASSURANCE</p>
            <h3 className="text-[#312852] text-xl tracking-wide mb-5" style={{ fontFamily: "var(--font-mincho)" }}>ご安心ください</h3>
            <ul className="space-y-3">
              {[
                "事前相談は完全無料です",
                "強引な勧誘・セールスは一切いたしません",
                "相談した内容が後から費用に反映されることはありません",
                "「相談したからご依頼しなければ」という義務は一切ありません",
                "秘密・プライバシーは厳守いたします",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-1 h-1 bg-[#9278be] rounded-full shrink-0" />
                  <span className="text-[#4a4a4a] text-base">{item}</span>
                </li>
              ))}
            </ul>
          </FadeInUp>

          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              事前相談に関するよくある質問
            </h3>
            <div className="w-8 h-px bg-[#c9a55a]" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {faqItems.map((item) => (
              <StaggerItem key={item.q}>
                <div className="py-6">
                  <p className="text-[#312852] text-base mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                    <span className="text-[#9278be] font-bold mr-2">Q</span>
                    {item.q}
                  </p>
                  <p className="text-[#4a4a4a] text-sm leading-loose pl-6">
                    <span className="text-[#c9a55a] font-bold mr-2">A</span>
                    {item.a}
                  </p>
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
              まずは、お気軽にご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              事前相談は無料です。「もしものとき」に備えて、今のうちにご相談いただくことをおすすめします。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 group w-full sm:w-auto justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
                <MessageCircle size={17} />
                事前相談・お問い合わせ
                <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/faq" className="inline-flex items-center gap-2 border border-[#9278be] text-[#5c4a80] hover:bg-[#ede7f6] px-8 py-4 tracking-wider transition-colors duration-300 w-full sm:w-auto justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
                よくある質問を見る
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
