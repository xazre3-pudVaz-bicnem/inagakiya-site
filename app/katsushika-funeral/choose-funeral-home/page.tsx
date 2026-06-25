import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "葛飾区で葬儀社を選ぶときの考え方｜稲垣屋葬儀店",
  description:
    "葛飾区で葬儀社を選ぶときのポイント。費用の透明性・資格・地域密着・24時間対応・事前相談の有無など、後悔しない葬儀社選びをご案内します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/katsushika-funeral/choose-funeral-home" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "葛飾区で葬儀社を選ぶとき、一番重要なポイントは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "費用の透明性と24時間対応の有無が特に重要です。葬儀は急なご逝去の場合が多く、深夜でも対応できる葬儀社を事前に把握しておくことが大切です。また、見積もりに何が含まれているか・含まれていないかを明確にしてくれる葬儀社を選ぶことで、後から予想外の追加費用が発生するリスクを減らせます。",
      },
    },
    {
      "@type": "Question",
      name: "葬祭ディレクター資格とは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "葬祭ディレクターは、厚生労働省が認定する葬儀の専門資格です。1級と2級があり、1級は葬儀全般に関する高度な知識・技術を有することを証明します。資格保有者が対応する葬儀社は、専門的な知識に基づいてサービスを提供できるため、安心して任せることができます。稲垣屋葬儀店では葬祭ディレクター1級資格保有者が対応します。",
      },
    },
    {
      "@type": "Question",
      name: "地域密着の葬儀社を選ぶメリットは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "地域密着の葬儀社は、地元の斎場・火葬場の状況、地域の慣習・習慣、行政手続きの流れを熟知しています。葛飾区であれば、区民葬儀制度の活用方法、葛飾区内の斎場事情なども詳しく把握しています。また、長年の信頼関係があるため、万が一のトラブルの際もスムーズに対応してもらいやすいという利点があります。",
      },
    },
    {
      "@type": "Question",
      name: "事前相談は義務ですか？相談したら依頼しなければなりませんか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "事前相談は義務ではなく、相談したからといって必ず依頼する必要はありません。稲垣屋葬儀店では、事前相談・お見積もりを完全無料で承っており、強引な勧誘は一切行いません。「もしものときに備えて情報を知りたい」という段階でのご相談も歓迎しています。",
      },
    },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "葛飾区で葬儀社を選ぶときの考え方",
  description:
    "葛飾区で葬儀社を選ぶときのポイント。費用の透明性・資格・地域密着・24時間対応・事前相談の有無など、後悔しない葬儀社選びをご案内します。",
  url: "https://www.inagakiyasougiten.com/katsushika-funeral/choose-funeral-home",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葛飾区の葬儀", item: "https://www.inagakiyasougiten.com/katsushika-funeral" },
      { "@type": "ListItem", position: 3, name: "葬儀社の選び方", item: "https://www.inagakiyasougiten.com/katsushika-funeral/choose-funeral-home" },
    ],
  },
};

export default function ChooseFuneralHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="葛飾区で葬儀社を選ぶときの考え方"
        subtitle="後悔しない葬儀社選びのために、確認したいポイントをご案内します"
        en="HOW TO CHOOSE"
      />
      <Breadcrumb
        items={[
          { label: "葛飾区の葬儀", href: "/katsushika-funeral" },
          { label: "葬儀社の選び方" },
        ]}
      />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">HOW TO CHOOSE</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              葬儀社選びで後悔しないために
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp>
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose">
              <p>
                葬儀社を選ぶ機会は人生でそれほど多くありません。急なご逝去の場合は、冷静に比較検討する時間も限られています。そのため、「もしものとき」に備えて事前に葬儀社について知っておくことが、後悔のないお別れにつながります。
              </p>
              <p>
                葛飾区にはさまざまな葬儀社があります。価格・対応エリア・資格・実績など、選ぶ際の基準は複数あります。ここでは、葬儀社選びで特に重要なポイントを整理してご説明します。
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">POINTS</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              確認したい6つのポイント
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                number: "01",
                title: "費用の透明性（見積もり・追加費用）",
                body: "見積もりに何が含まれていて何が含まれていないか、明確に説明してくれる葬儀社を選びましょう。「基本プラン」と表示されていても、火葬場の使用料・宗教者へのお礼・飲食費・返礼品などが別途かかる場合があります。事前に総額の概算を確認することが大切です。",
              },
              {
                number: "02",
                title: "葬祭ディレクター等の資格の有無",
                body: "葬祭ディレクターは厚生労働省が認定する専門資格です。資格保有者がいる葬儀社は、葬儀に関する専門知識を持ったスタッフが対応するため安心感があります。1級資格は葬儀全般に関する高度な知識を有することを示します。",
              },
              {
                number: "03",
                title: "地域密着であるか",
                body: "葛飾区の斎場・火葬場の状況、地域の慣習、行政手続きの流れを熟知した地域密着の葬儀社を選ぶと、スムーズに進めることができます。葛飾区民葬儀制度の活用サポートも地域密着の葬儀社だからこそできることです。",
              },
              {
                number: "04",
                title: "24時間対応しているか",
                body: "ご逝去は深夜・早朝・休日を問わず訪れます。24時間365日対応の葬儀社であれば、急な場合でも迅速に対応してもらえます。「24時間対応」と表示されていても、電話はつながるが担当者が来るのは翌朝という場合もあるため、確認が必要です。",
              },
              {
                number: "05",
                title: "事前相談ができるか",
                body: "「もしものとき」に備えた事前相談を無料で受け付けているかどうかも重要なポイントです。事前に費用・流れ・プランについて相談しておくことで、実際にご逝去があった際に落ち着いて対応できます。",
              },
              {
                number: "06",
                title: "強引な勧誘をしないか",
                body: "相談したことを理由に強引に契約を迫るような葬儀社は避けましょう。信頼できる葬儀社は、相談したことや見積もりを取ったことで無理な依頼をすることはありません。",
              },
            ].map((item) => (
              <StaggerItem key={item.number}>
                <div className="py-7">
                  <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-1">{item.number}</p>
                  <h3 className="text-[#312852] text-lg tracking-wide mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-sm leading-loose">{item.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ABOUT US</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              稲垣屋葬儀店について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp>
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose mb-8">
              <p>
                稲垣屋葬儀店は、東京都葛飾区堀切6-33-4に拠点を置く、創業明治11年頃の地域密着の葬儀社です。葛飾区民葬儀取扱店として葛飾区から指定を受けており、葛飾区民葬儀制度のサポートにも対応しています。
              </p>
              <p>
                葬祭ディレクター1級、認定飯田葬儀相談員など、専門的な資格を持つスタッフが在籍しています。24時間365日対応で、事前相談・お見積もりは無料です。強引な勧誘は一切行いませんので、安心してご相談ください。
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/reasons" className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group">
                選ばれる理由を見る
                <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/qualification" className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group">
                資格・認定について
                <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/consultation" className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group">
                事前相談について
                <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/compare/funeral-home" className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group">
                葬儀社の比較について
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
              葬儀社選びに関するよくあるご質問
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
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
