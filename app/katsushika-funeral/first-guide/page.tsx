import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "葛飾区ではじめて葬儀を行う方へ｜稲垣屋葬儀店",
  description:
    "葛飾区ではじめて葬儀を行う方へ。ご逝去直後の対応から葬儀の形式・費用・流れまで、稲垣屋葬儀店がステップごとに丁寧にご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/katsushika-funeral/first-guide" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "葬儀ははじめてで何もわかりません。まず何をすればよいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "まず葬儀社にお電話ください。稲垣屋葬儀店（03-3690-0870）は24時間365日対応しています。病院・施設・ご自宅のどこからでも、ご連絡いただければ搬送・安置から葬儀の打ち合わせまでをまとめてサポートします。「何をすればよいか分からない」とおっしゃっていただくだけで大丈夫です。",
      },
    },
    {
      "@type": "Question",
      name: "葛飾区での葬儀はどんな形式が選べますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "稲垣屋葬儀店では、家族葬・一日葬・火葬式（直葬）・一般葬・葛飾区民葬儀の5つの形式に対応しています。ご家族の希望・参列者の人数・費用のご予算に応じて最適なプランをご提案します。どの形式が合うか分からない場合も、事前相談（無料）で一緒に考えます。",
      },
    },
    {
      "@type": "Question",
      name: "葛飾区民葬儀とは何ですか？利用できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "葛飾区民葬儀とは、葛飾区が設けた葬儀制度で、葛飾区民の方が利用できます。葛飾区が指定する取扱店（稲垣屋葬儀店はその一つです）を通じて申し込むことで、定められた費用の範囲内で葬儀を行うことができます。詳しくは区民葬儀のページをご覧いただくか、お問い合わせください。",
      },
    },
    {
      "@type": "Question",
      name: "葬儀の費用は後から増えることがありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "稲垣屋葬儀店では、事前に費用の内訳を詳しくご説明し、追加費用が発生する場合は必ず事前にご確認のうえ進めます。宗教者へのお布施・飲食費・返礼品などプラン外の費用についても、打ち合わせの段階で丁寧にご説明します。不透明な追加請求は一切行いません。",
      },
    },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "葛飾区ではじめて葬儀を行う方へ",
  description:
    "葛飾区ではじめて葬儀を行う方へ。ご逝去直後の対応から葬儀の形式・費用・流れまで、稲垣屋葬儀店がステップごとに丁寧にご説明します。",
  url: "https://www.inagakiyasougiten.com/katsushika-funeral/first-guide",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葛飾区の葬儀", item: "https://www.inagakiyasougiten.com/katsushika-funeral" },
      { "@type": "ListItem", position: 3, name: "はじめての方へ", item: "https://www.inagakiyasougiten.com/katsushika-funeral/first-guide" },
    ],
  },
};

export default function FirstGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="葛飾区ではじめて葬儀を行う方へ"
        subtitle="ご逝去直後の対応から葬儀の流れまで、ステップごとにご説明します"
        en="FIRST TIME GUIDE"
      />
      <Breadcrumb
        items={[
          { label: "葛飾区の葬儀", href: "/katsushika-funeral" },
          { label: "はじめての方へ" },
        ]}
      />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FIRST TIME</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              「葬儀ははじめて」という方へ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp>
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose">
              <p>
                大切な方を突然亡くされたとき、「葬儀のことは何もわからない」という方がほとんどです。葛飾区でも、はじめて喪主を務める方、葬儀自体に参列したことがほとんどない方が多くいらっしゃいます。稲垣屋葬儀店は、そのような方のそばに寄り添い、ご逝去直後の対応から葬儀後の手続きまで、丁寧にご案内します。
              </p>
              <p>
                「まず何をすればよいのか」という不安は、最初の一本の電話で解消されます。稲垣屋葬儀店は24時間365日対応ですので、深夜・早朝を問わずお電話ください（03-3690-0870）。電話口でご状況をお聞きし、次のステップを落ち着いてご案内します。
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">STEP BY STEP</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              ご逝去直後に最初にすること
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                step: "Step 1",
                title: "医師への連絡・死亡診断書の取得",
                body: "病院でご逝去の場合は担当医が死亡を確認し、死亡診断書を発行します。ご自宅でご逝去の場合は、かかりつけ医にご連絡ください。かかりつけ医がいない、あるいは突然のご逝去の場合は、警察（110番）への連絡が必要になることがあります。死亡診断書は葬儀・役所の手続きに必要な書類ですので、大切に保管してください。",
              },
              {
                step: "Step 2",
                title: "葬儀社への連絡",
                body: "次に葬儀社にご連絡ください。稲垣屋葬儀店（03-3690-0870）は24時間365日対応しています。「どこから連絡すればよいか分からない」という状態でも構いません。葛飾区の病院・施設・ご自宅のどこからでも対応します。搬送・安置から葬儀の段取りまで、順番にご案内します。",
              },
              {
                step: "Step 3",
                title: "ご遺体の搬送・安置",
                body: "葬儀社がご遺体をお迎えし、安置場所（ご自宅または安置施設）へお連れします。葛飾区内はもちろん、近隣エリアにも対応しています。夜間の搬送も可能ですので、深夜でも遠慮なくご連絡ください。",
              },
              {
                step: "Step 4",
                title: "葬儀の打ち合わせ",
                body: "ご安置後、落ち着いた状態で葬儀の打ち合わせを行います。葬儀の形式・日程・費用・宗教者の手配・参列者への連絡方法など、ひとつひとつ確認しながら進めます。はじめての方でも分かるよう丁寧にご説明しますので、疑問はその都度お聞きください。",
              },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="py-7">
                  <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-1">{item.step}</p>
                  <h3 className="text-[#312852] text-lg tracking-wide mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-sm leading-loose">{item.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeInUp className="mt-6">
            <Link href="/flow/after-death" className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group">
              ご逝去直後の流れ詳細を見る
              <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">PLANS</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              葬儀の形式の選択肢
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
            <p className="text-[#4a4a4a] mt-5 text-base leading-relaxed">
              葛飾区では、ご家族の状況に応じてさまざまな葬儀の形式を選ぶことができます。それぞれの特徴を理解した上で、ご家族に合った形式を選びましょう。
            </p>
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "家族葬",
                desc: "ご家族やごく親しい方だけで、心静かにお別れする葬儀形式です。参列者が少ない分、故人との時間をゆっくり過ごせます。葛飾区でも近年選ばれることが増えています。",
                href: "/plans/family-funeral",
              },
              {
                title: "一日葬",
                desc: "お通夜を省略し、告別式と火葬を一日で行う形式です。ご遺族の負担を減らしながら、きちんとした告別式でお別れできます。",
                href: "/plans/oneday-funeral",
              },
              {
                title: "火葬式（直葬）",
                desc: "お通夜・告別式を行わず、火葬のみのシンプルな葬儀です。ごく近しい方だけで静かに見送りたい場合に選ばれます。費用を抑えることができます。",
                href: "/plans/cremation",
              },
              {
                title: "葛飾区民葬儀",
                desc: "葛飾区が設けた制度で、葛飾区民の方が利用できます。稲垣屋葬儀店は葛飾区指定の取扱店として対応しています。費用を抑えた葬儀が可能です。",
                href: "/plans/kumin-funeral",
              },
            ].map((plan) => (
              <StaggerItem key={plan.title}>
                <div className="py-7">
                  <h3 className="text-[#312852] text-lg tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>
                    {plan.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-sm leading-loose mb-3">{plan.desc}</p>
                  <Link href={plan.href} className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group">
                    詳細を見る
                    <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COST</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              費用の考え方
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp>
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose mb-8">
              <p>
                葬儀費用は「葬儀社へのプラン料金」「火葬場・斎場の使用料」「宗教者へのお礼（お布施）」「飲食費・返礼品」など複数の要素から成ります。葬儀社の見積もりには含まれない費用もあるため、何が含まれていて何が含まれていないかを事前に確認することが大切です。
              </p>
              <p>
                稲垣屋葬儀店では、事前相談の段階から費用の内訳を詳しくご説明します。「後から追加費用が増えた」ということがないよう、透明性を大切にしています。葛飾区民の方には区民葬儀制度の活用もご提案します。
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/cost" className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group">
                葬儀費用の詳細
                <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/plans" className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group">
                プラン一覧を見る
                <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/consultation" className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group">
                事前相談について
                <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">AFTER FUNERAL</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              葬儀後の手続きの概要
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp>
            <div className="space-y-4 text-[#4a4a4a] text-base leading-loose mb-6">
              <p>
                葬儀が終わった後も、役所への届け出・相続・年金・銀行手続きなど、さまざまな事務手続きが必要です。葛飾区役所への死亡届は死亡診断書を受け取った日から7日以内に提出する必要があります。
              </p>
              <p>
                稲垣屋葬儀店では、葬儀後の手続きについての概要もご案内しています。「何から始めればよいか分からない」という場合もお気軽にご相談ください。
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/faq" className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group">
                よくある質問を見る
                <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/katsushika-funeral" className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group">
                葛飾区の葬儀トップへ
                <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              はじめての方からよくあるご質問
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4] mb-8">
            {faqJsonLd.mainEntity.map((faq) => (
              <StaggerItem key={faq.name}>
                <div className="py-7">
                  <p className="text-[#312852] text-base mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                    <span className="text-[#9278be] font-bold mr-2">Q</span>
                    {faq.name}
                  </p>
                  <p className="text-[#4a4a4a] text-sm leading-loose pl-6">
                    <span className="text-[#c9a55a] font-bold mr-2">A</span>
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeInUp>
            <Link href="/faq" className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group">
              よくある質問をすべて見る
              <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              葛飾区の葬儀に関するご相談
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              稲垣屋葬儀店は24時間365日対応。事前相談・お見積もりは無料です。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:0336900870" className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 w-full sm:w-auto justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
                <Phone size={17} className="text-[#dfc07e]" />03-3690-0870
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-[#9278be] text-[#5c4a80] hover:bg-[#ede7f6] px-8 py-4 tracking-wider transition-colors duration-300 w-full sm:w-auto justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
                <MessageCircle size={17} />お問い合わせ
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
