import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "死亡届・火葬許可証について｜葛飾区 稲垣屋葬儀店",
  description:
    "死亡届・火葬許可証・埋葬許可証について詳しく解説。提出期限・必要書類・手続きの流れを葛飾区の稲垣屋葬儀店が丁寧にご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/support/documents" },
};

const faqs = [
  {
    q: "死亡届の提出は誰でもできますか？",
    a: "死亡届を提出できる届出人は、同居の親族・その他の同居者・家主・地主・後見人などです。一般的には喪主（遺族代表）が届出人になることが多いですが、葬儀社が喪主の代わりに提出代行を行うことも可能です。稲垣屋葬儀店でも書類の取り扱い・代行を行っております。",
  },
  {
    q: "死亡診断書を紛失した場合はどうすればよいですか？",
    a: "死亡診断書は医師が発行するもので、原本は死亡届と一体になっています。紛失した場合は、死亡届を提出した市区町村役場で「死亡届記載事項証明書」の取得が可能です。また、死亡診断書のコピーを複数枚取っておくことをおすすめします（保険請求等に使用します）。",
  },
  {
    q: "火葬許可証を紛失した場合はどうなりますか？",
    a: "火葬許可証（埋葬許可証）を紛失した場合は、火葬を行った火葬場または死亡届を提出した市区町村役場で再発行の手続きができます。納骨の際に必要となる書類ですので、大切に保管してください。",
  },
  {
    q: "葬儀社はどこまで書類手続きをサポートしてくれますか？",
    a: "稲垣屋葬儀店では、死亡届の提出代行・火葬許可証の取得・火葬場への書類提出など、葬儀に関連する書類手続きのサポートを行っております。役所への提出や火葬場への申請など、基本的な書類手続きはスタッフが対応しますので、ご安心ください。",
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

export default function DocumentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        title="死亡届・火葬許可証について"
        subtitle="葬儀に必要な書類と手続きの流れをご説明します"
        en="DOCUMENTS"
      />
      <Breadcrumb
        items={[
          { label: "サポート情報", href: "/support" },
          { label: "死亡届・火葬許可証について" },
        ]}
      />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">DEATH CERTIFICATE</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              死亡届とは
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              死亡届は、人が亡くなったことを行政に知らせるための届出書です。「死亡届」と「死亡診断書」は1枚の用紙の左右に分かれており、左側が「死亡届」（届出人が記入）、右側が「死亡診断書」（医師が記入）となっています。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              死亡診断書は、病院や診療所でご逝去された場合に担当医師が発行します。ご自宅でのご逝去の場合は、かかりつけ医または救急医が発行します。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">PROCEDURE</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              死亡届の提出について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "提出期限",
                desc: "ご逝去を知った日から7日以内（海外でのご逝去は3か月以内）に提出する必要があります。期限を過ぎると過料（罰則）が科される場合がありますので、速やかに手続きを行ってください。",
              },
              {
                title: "提出先",
                desc: "死亡地・故人の本籍地・届出人の住所地のいずれかの市区町村役場に提出します。葛飾区内でお亡くなりの場合は、葛飾区役所または区内の出張所に提出できます。",
              },
              {
                title: "届出人",
                desc: "届出人になれるのは同居の親族・その他の同居者・家主・地主・後見人などです。一般的には喪主や遺族代表が届出人となります。",
              },
              {
                title: "必要なもの",
                desc: "医師が記入・押印した死亡診断書（死亡届右側）と、届出人が記入した死亡届（左側）。届出人の印鑑（認印可）。なお、死亡届の記入は葬儀社がサポートします。",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3
                    className="text-[#312852] text-lg tracking-wide mb-2"
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

      <section className="py-20 md:py-28 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">CREMATION PERMIT</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              火葬許可証について
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "火葬許可証とは",
                desc: "火葬許可証は、死亡届を提出した市区町村役場が発行する書類で、火葬を行うために必要です。死亡届と同時に申請することで、その場で交付されます。",
              },
              {
                title: "火葬許可証の使い方",
                desc: "火葬場へ持参し、火葬前に提出します。火葬が完了すると、「埋葬許可証」として押印・返却されます。稲垣屋葬儀店が火葬場への提出を代行します。",
              },
              {
                title: "埋葬許可証（火葬後）",
                desc: "火葬後に返却される埋葬許可証は、納骨（お墓への埋葬）の際に必要な書類です。紛失しないよう大切に保管してください。納骨まで数か月以上かかる場合もありますので、保管場所を家族全員で共有しておきましょう。",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3
                    className="text-[#312852] text-lg tracking-wide mb-2"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mt-8">
            <p className="text-[#7560a0] text-sm">
              書類手続きの詳細は
              <Link href="/flow/documents" className="underline underline-offset-2 hover:text-[#312852] transition-colors mx-1">
                必要書類・手続きの流れ
              </Link>
              もご参照ください。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">SUPPORT</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              葬儀社のサポート範囲
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              稲垣屋葬儀店では、死亡届の記入サポート・提出代行・火葬許可証の取得・火葬場への提出など、葬儀に関連する書類手続きをしっかりとサポートします。ご家族が書類手続きで困ることのないよう、スタッフが丁寧にご案内します。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              なお、相続・年金・保険など、葬儀以外の手続きについては、それぞれ専門機関（弁護士・司法書士・税理士・年金事務所・保険会社等）にお問い合わせください。稲垣屋葬儀店で対応可能な範囲についてはお気軽にご相談ください。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#faf9f7] border-t border-[#e8ddf4]">
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
