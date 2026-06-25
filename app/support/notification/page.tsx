import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "訃報の連絡について｜知らせる範囲・順番・方法｜葛飾区 稲垣屋葬儀店",
  description:
    "訃報（ふほう）の連絡方法・伝える順番・範囲・注意点について。葛飾区の稲垣屋葬儀店が丁寧にご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/support/notification" },
};

const faqs = [
  {
    q: "訃報は電話とメール、どちらで知らせるのが適切ですか？",
    a: "親族や親しい友人など近しい方への訃報は、電話で直接伝えるのが基本です。会社や遠方の知人などには、電話後にメールやFAXで詳細を送ることもあります。SNSでの訃報連絡は現在も賛否がありますので、慎重に判断してください。",
  },
  {
    q: "訃報を知らせる順番はありますか？",
    a: "まず近親者（配偶者・子・親など）に連絡し、その後に親族全体、次いで故人と親しかった友人・知人、最後に会社・所属団体などの順で連絡するのが一般的です。葬儀の日程が決まったら、順を追って詳細を伝えましょう。",
  },
  {
    q: "家族葬の場合、訃報の連絡範囲はどうすればよいですか？",
    a: "家族葬では参列者を限定するため、連絡する範囲も限定的にします。近親者のみに知らせ、一般の参列を断る場合はその旨も明記します。葬儀終了後に改めて「葬儀を終えた」旨の報告（死亡通知）を幅広く送ることもあります。",
  },
  {
    q: "訃報の連絡で伝えるべき内容は何ですか？",
    a: "①故人の氏名と続柄、②死亡日時と死因（任意）、③通夜・葬儀の日程と場所、④喪主の氏名と連絡先、⑤その他（香典・供花辞退など）を伝えます。詳細が決まっていない段階では、まず死亡の事実を伝え、詳細は後報とする形でも構いません。",
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
  name: "訃報の連絡について｜知らせる範囲・順番・方法｜葛飾区 稲垣屋葬儀店",
  description:
    "訃報（ふほう）の連絡方法・伝える順番・範囲・注意点について。葛飾区の稲垣屋葬儀店が丁寧にご説明します。",
  url: "https://www.inagakiyasougiten.com/support/notification",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "葬儀サポート", item: "https://www.inagakiyasougiten.com/support" },
      { "@type": "ListItem", position: 3, name: "訃報の連絡について", item: "https://www.inagakiyasougiten.com/support/notification" },
    ],
  },
};

export default function NotificationPage() {
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
        title="訃報の連絡について"
        subtitle="知らせる範囲・順番・方法と注意点をご説明します"
        en="DEATH NOTIFICATION"
      />
      <Breadcrumb
        items={[
          { label: "サポート情報", href: "/support" },
          { label: "訃報の連絡について" },
        ]}
      />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ABOUT</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              訃報とは
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              訃報（ふほう）とは、人が亡くなったことを知らせる報告のことです。大切な方を亡くされた直後、ご遺族は悲しみの中で多くのことを同時に行わなければなりません。訃報の連絡は、葬儀の準備と並行して行う重要な作業のひとつです。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              何を、誰に、どの順番で伝えるかをあらかじめ整理しておくことで、混乱を最小限に抑えることができます。葬儀社のスタッフにも相談しながら進めましょう。
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ORDER</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              連絡する順番と範囲
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "① 近親者・同居家族",
                desc: "まず配偶者・子・親・兄弟姉妹などの最も近しい家族に知らせます。病院で亡くなった場合は、可能であれば直接来てもらえるよう連絡します。",
              },
              {
                title: "② 親族（おじ・おばなど）",
                desc: "第一報を近親者に伝えた後、親族全体に連絡します。葬儀に参列が必要かどうかを考慮し、遠方の方には早めに連絡しましょう。",
              },
              {
                title: "③ 故人の親しい友人・知人",
                desc: "生前に特に親しかった方、また職場・趣味・地域のつながりで特に故人が大切にしていたお付き合いの方に連絡します。",
              },
              {
                title: "④ 勤務先・所属団体",
                desc: "故人の勤務先や所属するコミュニティ（町内会・宗教団体など）への連絡も必要です。会社には総務や人事部門に連絡し、香典や供花の有無も確認します。",
              },
              {
                title: "⑤ 葬儀終了後の通知",
                desc: "家族葬など小規模な葬儀の場合、葬儀後に「死亡通知」として広く連絡することがあります。葬儀が終わった旨と御礼を簡潔に伝えます。",
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
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">CONTENT</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              訃報に含める内容
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-loose mb-6">
              訃報を伝える際には、以下の内容を漏れなく伝えると受け取った方が迷わずに済みます。詳細がまだ決まっていない段階では「追って連絡します」と伝えて問題ありません。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              { title: "故人の氏名と続柄", desc: "「○○（続柄：父・母など）の○○（氏名）が、○月○日に永眠いたしました」と明確に伝えます。" },
              { title: "通夜・葬儀の日程と場所", desc: "日時・会場名・住所・電話番号を正確に伝えます。地図やアクセス情報も添えると親切です。" },
              { title: "喪主の氏名と連絡先", desc: "問い合わせ先として喪主または担当者の連絡先を明記します。" },
              { title: "香典・供花・参列についての意向", desc: "家族葬や香典辞退の場合は、その旨を明記します。誤解を避けるために明確に伝えることが大切です。" },
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

      <section className="py-16 md:py-24 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">RELATED</p>
            <h2
              className="text-[#312852] text-2xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              関連ページ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              { href: "/support/chief-mourner", label: "喪主の役割について" },
              { href: "/support/greeting", label: "喪主の挨拶について" },
              { href: "/support/first-time", label: "初めての方へ（葬儀の流れ）" },
              { href: "/support/documents", label: "葬儀後の手続き・書類について" },
              { href: "/support/after-funeral", label: "葬儀後のこと" },
            ].map((link) => (
              <StaggerItem key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between py-5 text-[#5c4a80] hover:text-[#312852] transition-colors group"
                >
                  <span className="text-base tracking-wide" style={{ fontFamily: "var(--font-mincho)" }}>
                    {link.label}
                  </span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
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
              稲垣屋葬儀店は24時間365日対応。訃報連絡についてもお気軽にご相談ください。
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
