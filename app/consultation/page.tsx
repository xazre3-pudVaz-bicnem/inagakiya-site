import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import Breadcrumb from "../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, CheckCircle2, MessageCircle, Clock, Heart, Shield, Users, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "葛飾区の葬儀事前相談｜無料・強引な営業なし｜稲垣屋葬儀店",
  description:
    "稲垣屋葬儀店の事前相談は完全無料。強引な勧誘は一切しません。葬儀の形式・費用・流れについて、いつでもご相談いただけます。来店・電話・ご自宅訪問に対応。",
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
    title: "故人・ご家族のご希望の整理",
    desc: "「故人が生前にこんな葬儀を希望していた」「ご家族でこういう形でお別れしたい」など、ご希望を事前にお伺いします。いざというときに、ご希望に沿った葬儀がスムーズに実現できます。",
  },
  {
    icon: CheckCircle2,
    title: "その他ご不安なこと・疑問",
    desc: "葬儀に関するどんな疑問・不安もお気軽にご相談ください。「こんなことを聞いてよいのか」というご遠慮は不要です。葬儀に関することであれば、なんでもお答えします。",
  },
];

const consultTriggers = [
  {
    title: "親の高齢化が気になってきた",
    body: "親が70代・80代になり、「もしものとき」を意識し始めた方が事前相談に来られるケースが最も多いです。「まだ元気だから早いかも」とお感じの方も多いですが、元気なうちに話し合っておくことで、いざというときにご本人・ご家族が慌てずに対応できます。",
  },
  {
    title: "病気療養中のご家族がいる",
    body: "ご家族が入院中・療養中という状況で、「いざとなったときにどうすればよいか」を確認したいという方も多くいらっしゃいます。どんな準備が必要か、費用はどのくらいかかるか、事前に確認しておくことで不安を和らげることができます。",
  },
  {
    title: "終活として準備したい",
    body: "ご自身の葬儀について、生前のうちに希望を決めておきたいという方もいらっしゃいます。葬儀の形式・規模・費用など、ご自身の意思を家族に伝える「終活」の一環として事前相談をご利用いただけます。",
  },
  {
    title: "急な場合に備えて知っておきたい",
    body: "突然のことが起きたとき、どこに連絡すべきか・何をすべきかを事前に把握しておきたいという方もいらっしゃいます。稲垣屋葬儀店への連絡先や搬送の流れを確認しておくだけでも、いざというときの安心につながります。",
  },
];

const afterConsultFlow = [
  {
    step: "01",
    title: "ご相談・費用のご提示",
    body: "ご状況・ご希望をお聞きした上で、費用の目安と各プランの概要をご説明します。お見積もりは無料です。",
  },
  {
    step: "02",
    title: "ご検討",
    body: "ご提示した内容をご家族でゆっくりとご検討いただけます。相談したからといってご依頼の義務はありません。",
  },
  {
    step: "03",
    title: "ご依頼（任意）",
    body: "ご依頼いただく場合は、改めてご連絡ください。いつでもご依頼を受け付けています。強引な勧誘は一切しません。",
  },
];

const subPages = [
  {
    href: "/consultation/parent",
    title: "親の葬儀の事前相談",
    desc: "親の高齢化・療養中など、「もしものとき」に備えた相談内容",
  },
  {
    href: "/consultation/preparation",
    title: "葬儀の事前準備について",
    desc: "いざというときに慌てないための、事前に確認しておくこと",
  },
  {
    href: "/consultation/cost",
    title: "費用について事前に知りたい方へ",
    desc: "プラン別の費用目安と、費用を抑えるための選び方",
  },
  {
    href: "/consultation/ending-note",
    title: "エンディングノートと終活",
    desc: "ご自身の希望を残すエンディングノートの書き方と活用",
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
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "葛飾区の葬儀事前相談｜無料・強引な営業なし｜稲垣屋葬儀店",
    description: "稲垣屋葬儀店の事前相談は完全無料。強引な勧誘は一切しません。葬儀の形式・費用・流れについて、いつでもご相談いただけます。",
    url: "https://www.inagakiyasougiten.com/consultation",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com/" },
        { "@type": "ListItem", position: 2, name: "事前相談", item: "https://www.inagakiyasougiten.com/consultation" },
      ],
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="事前相談"
        subtitle="「もしものとき」に備えた、無料の事前相談"
        en="PRE-CONSULTATION"
      />
      <Breadcrumb items={[{ label: "事前相談" }]} />

      {/* このページでわかること */}
      <section className="py-12 md:py-16 bg-white border-b border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-4">ON THIS PAGE</p>
            <h2
              className="text-[#312852] text-xl md:text-2xl tracking-[0.06em] mb-6"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              このページでわかること
            </h2>
            <ul className="divide-y divide-[#e8ddf4]">
              {[
                "事前相談で確認できること（費用目安・プラン・流れ・家族の希望の整理など）",
                "来店・電話・ご自宅訪問の3つの相談方法",
                "よくある事前相談のきっかけ（高齢化・療養中・終活・急な場合への備え）",
                "相談後の流れと、依頼の義務がないことについて",
              ].map((text) => (
                <li key={text} className="flex items-start gap-3 py-3">
                  <span className="w-1.5 h-1.5 bg-[#c9a55a] rounded-full shrink-0 mt-2" />
                  <span className="text-[#4a4a4a] text-sm leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </FadeInUp>
        </div>
      </section>

      {/* 事前相談は無料です */}
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

          {/* 事前相談で確認できること */}
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">WHAT WE COVER</p>
            <h3 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              事前相談で確認できること
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
        </div>
      </section>

      {/* 相談方法 */}
      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">HOW TO CONSULT</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              相談方法
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
            <p className="text-[#4a4a4a] mt-5 text-sm leading-relaxed">
              ご都合に合わせて3つの方法からご相談いただけます。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-6">
            {[
              {
                icon: MapPin,
                title: "ご来店でのご相談",
                desc: "稲垣屋葬儀店（東京都葛飾区堀切6-33-4）へご来店いただくと、より詳しくご説明できます。お時間に余裕のある方は、ご来店をおすすめします。京成本線「堀切菖蒲園」駅より徒歩約5分。ご予約なしでもお越しいただけますが、事前にご連絡いただけるとスムーズです。",
              },
              {
                icon: MessageCircle,
                title: "お電話でのご相談",
                desc: "お電話（03-3690-0870）にてご相談を承っています。24時間365日対応しております。「事前相談したい」とお伝えください。ご来店が難しい場合も、電話で十分にご相談いただけます。",
              },
              {
                icon: Heart,
                title: "ご自宅への訪問相談",
                desc: "ご自宅へのお伺いも可能です。「来店が難しい」「高齢のご家族と一緒に相談したい」という方も、お気軽にご連絡ください。葛飾区全域に対応しています。",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex items-start gap-5 py-7">
                  <item.icon size={18} className="text-[#c9a55a] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-[#312852] text-base tracking-wide mb-1.5" style={{ fontFamily: "var(--font-mincho)" }}>{item.title}</h4>
                    <p className="text-[#4a4a4a] text-sm leading-loose">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* よくある相談のきっかけ */}
      <section className="py-16 md:py-24 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">WHY CONSULT</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              よくある事前相談のきっかけ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {consultTriggers.map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3
                    className="text-[#312852] text-base tracking-wide mb-3"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-sm leading-loose">{item.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 相談後の流れ */}
      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">AFTER CONSULTATION</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              相談後はどうなるか
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
            <p className="text-[#4a4a4a] mt-5 text-sm leading-relaxed">
              事前相談後に「必ずご依頼しなければ」という義務は一切ありません。情報収集のためだけのご相談も歓迎します。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-8">
            {afterConsultFlow.map((item) => (
              <StaggerItem key={item.step}>
                <div className="flex items-start gap-6 py-7">
                  <span
                    className="text-[#c9a55a] text-xs tracking-[0.2em] shrink-0 pt-1 w-6"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    {item.step}
                  </span>
                  <div>
                    <h3
                      className="text-[#312852] text-base tracking-wide mb-2"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[#4a4a4a] text-sm leading-loose">{item.body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp>
            <ul className="space-y-2.5">
              {[
                "事前相談は完全無料です",
                "強引な勧誘・セールスは一切いたしません",
                "相談した内容が後から費用に反映されることはありません",
                "秘密・プライバシーは厳守いたします",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-1 h-1 bg-[#9278be] rounded-full shrink-0" />
                  <span className="text-[#4a4a4a] text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </FadeInUp>
        </div>
      </section>

      {/* 詳細ページへのリンク */}
      <section className="py-16 md:py-24 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">DETAIL PAGES</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              テーマ別の事前相談ガイド
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {subPages.map((page) => (
              <StaggerItem key={page.href}>
                <Link href={page.href} className="flex items-center justify-between py-7 group">
                  <div>
                    <h3 className="text-[#312852] text-base tracking-wide mb-1.5 group-hover:text-[#5c4a80] transition-colors" style={{ fontFamily: "var(--font-mincho)" }}>
                      {page.title}
                    </h3>
                    <p className="text-[#4a4a4a] text-sm leading-relaxed">{page.desc}</p>
                  </div>
                  <ChevronRight size={16} className="text-[#b8a0d8] group-hover:text-[#5c4a80] group-hover:translate-x-1 transition-all shrink-0 ml-4" />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              事前相談に関するよくある質問
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
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

      {/* CTA */}
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
