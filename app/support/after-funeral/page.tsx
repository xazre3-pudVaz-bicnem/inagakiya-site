import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "葬儀後の手続き一覧｜死亡届から相続まで｜葛飾区 稲垣屋葬儀店",
  description:
    "葬儀後に必要な手続き一覧。死亡届・火葬許可証・年金停止・保険・相続など、葛飾区の稲垣屋葬儀店が葬儀後の流れを丁寧にご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/support/after-funeral" },
};

const faqs = [
  {
    q: "死亡届はいつまでに提出する必要がありますか？",
    a: "死亡届は、ご逝去を知った日から7日以内に提出する必要があります（海外でのご逝去の場合は3か月以内）。提出先は死亡地・本籍地・届出人の住所地のいずれかの市区町村役場です。葬儀社が手続きをサポートしますので、ご安心ください。",
  },
  {
    q: "年金の受給停止はいつまでに手続きが必要ですか？",
    a: "国民年金の場合は14日以内、厚生年金の場合は10日以内に手続きが必要です。手続きが遅れると過払いとなり、後日返還を求められる場合があります。年金事務所または市区町村役場の窓口で手続きを行います。",
  },
  {
    q: "相続放棄はいつまでにすれば良いですか？",
    a: "相続放棄は、相続の開始を知った日（通常は故人の死亡日）から3か月以内に家庭裁判所に申立てを行う必要があります。借金などのマイナスの財産が多い場合は、相続放棄を検討することになります。手続きは弁護士・司法書士にご相談ください。",
  },
  {
    q: "葬儀後の法要はいつ行うのですか？",
    a: "仏式では、四十九日法要（ご逝去から49日後）が最初の重要な法要です。その後、一周忌（1年後）・三回忌（2年後）と続きます。四十九日法要の際にお墓への納骨を行うケースが多いです。法要の時期・場所・内容については菩提寺とご相談ください。",
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

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "葬儀後の手続き一覧｜死亡届から相続まで｜葛飾区 稲垣屋葬儀店",
  description:
    "葬儀後に必要な手続き一覧。死亡届・火葬許可証・年金停止・保険・相続など、葛飾区の稲垣屋葬儀店が葬儀後の流れを丁寧にご説明します。",
  url: "https://www.inagakiyasougiten.com/support/after-funeral",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀サポート", item: "https://www.inagakiyasougiten.com/support" },
      { "@type": "ListItem", position: 3, name: "葬儀後の手続き一覧", item: "https://www.inagakiyasougiten.com/support/after-funeral" },
    ],
  },
};

export default function AfterFuneralPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        title="葬儀後の手続きについて"
        subtitle="死亡届から相続まで、必要な手続きをまとめました"
        en="AFTER FUNERAL"
      />
      <Breadcrumb
        items={[
          { label: "サポート情報", href: "/support" },
          { label: "葬儀後の手続き一覧" },
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
              葬儀が終わった後に必要なこと
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              大切な方を見送った後、ご遺族は悲しみの中でさまざまな手続きに追われます。死亡届の提出・年金の停止・保険会社への連絡・相続手続きなど、期限のあるものも多くあります。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              このページでは、葬儀後に必要な主な手続きを時系列でまとめました。すべてを一度に行う必要はありませんが、期限のあるものから順に対応するようにしましょう。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">WITHIN 7 DAYS</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              7日以内に必要な手続き
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "死亡届の提出",
                desc: "ご逝去を知った日から7日以内に、死亡地・本籍地・届出人住所地のいずれかの市区町村役場へ提出します。死亡診断書（死亡届の右半分）が必要です。稲垣屋葬儀店が代行します。",
              },
              {
                title: "火葬許可証の取得",
                desc: "死亡届の提出と同時に、役場から火葬許可証が交付されます。火葬の際に火葬場へ提出します。火葬後は「埋葬許可証」として返却され、納骨の際に使用します。",
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
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">WITHIN 14 DAYS</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              14日以内に必要な手続き
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "健康保険証の返還",
                desc: "国民健康保険の場合は市区町村役場、社会保険（会社員等）の場合は会社を通じて手続きを行います。14日以内に健康保険証を返還し、資格喪失の届け出を行いましょう。",
              },
              {
                title: "年金受給停止の手続き",
                desc: "国民年金は14日以内、厚生年金は10日以内に年金事務所へ届け出が必要です。手続きが遅れると過払い分の返還を求められることがあります。",
              },
              {
                title: "世帯主変更届（必要な場合）",
                desc: "故人が世帯主だった場合、市区町村役場に世帯主変更届を提出します（14日以内）。新たな世帯主を届け出ます。",
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

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">WITHIN 3 MONTHS</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              その他の手続き（期限に注意）
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "生命保険・損害保険の請求",
                desc: "保険会社へ速やかに連絡し、死亡保険金の請求手続きを行います。契約内容によって必要書類が異なりますので、各保険会社に確認してください。",
              },
              {
                title: "公共料金・口座の名義変更",
                desc: "電気・ガス・水道・電話などの公共料金、銀行口座・クレジットカードの名義変更や解約手続きを行います。口座の凍結前に必要な資金を確保しておくことも重要です。",
              },
              {
                title: "相続の手続き（3か月以内）",
                desc: "相続放棄や限定承認（マイナス財産が多い場合の選択肢）は、相続開始を知った日から3か月以内に家庭裁判所へ申立てが必要です。期限を過ぎると単純承認（すべての財産・負債を引き継ぐ）となりますので注意が必要です。",
              },
              {
                title: "準確定申告（4か月以内）",
                desc: "故人が確定申告をしていた場合、相続開始を知った日から4か月以内に相続人が代わりに確定申告（準確定申告）を行う必要があります。税理士へのご相談をおすすめします。",
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
            <p className="text-[#7560a0] text-sm leading-relaxed">
              葬儀後の手続きの流れについては
              <Link href="/flow" className="underline underline-offset-2 hover:text-[#312852] transition-colors mx-1">
                葬儀の流れ
              </Link>
              もご参照ください。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">MEMORIAL</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              法要の準備
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              仏式では、ご逝去から7日ごとに法要があり、49日目の「四十九日法要」が特に重要です。四十九日法要の際には、仮祭壇から本位牌への切り替え・お墓への納骨を行うケースが多いです。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              その後、一周忌・三回忌・七回忌と法要が続きます。菩提寺がある場合は、早めにご住職へご連絡し、日程を調整しておきましょう。
            </p>
          </FadeInUp>
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
