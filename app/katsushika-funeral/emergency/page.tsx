import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "葛飾区で急なご逝去があった場合｜今すぐ連絡できます｜稲垣屋葬儀店",
  description:
    "葛飾区で急なご逝去があった場合の対応。深夜・早朝でも24時間365日対応の稲垣屋葬儀店が、最初にすべきことを丁寧にご案内します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/katsushika-funeral/emergency" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "深夜に葛飾区でご逝去がありました。今すぐ連絡できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、稲垣屋葬儀店は24時間365日対応しています。深夜・早朝・休日を問わず、03-3690-0870にお電話ください。まずご状況をお聞きし、搬送・安置の手配から次のステップを丁寧にご案内します。「何をすればよいか分からない」という状態でも構いません。",
      },
    },
    {
      "@type": "Question",
      name: "病院でご逝去した場合、まず何をすればよいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "病院の担当医から死亡確認を受け、死亡診断書を受け取ります。その後、葬儀社にご連絡ください。病院によっては葬儀社を紹介される場合がありますが、必ずしも紹介先に依頼する必要はありません。稲垣屋葬儀店（03-3690-0870）にご連絡いただければ、葛飾区内の病院からの搬送に対応します。",
      },
    },
    {
      "@type": "Question",
      name: "自宅でご逝去した場合の対応を教えてください。",
      acceptedAnswer: {
        "@type": "Answer",
        text: "自宅でのご逝去の場合、まずかかりつけ医にご連絡ください。かかりつけ医がいない場合や、突然のご逝去の場合は警察（110番）への連絡が必要になることがあります。警察が介入する場合でも、葬儀社への連絡は検視終了後に行います。稲垣屋葬儀店は自宅での搬送にも24時間対応しています。",
      },
    },
    {
      "@type": "Question",
      name: "警察が関わる場合、葬儀社にはいつ連絡すればよいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "突然のご逝去や事故死など、警察が関わる場合は、検視・検案が終わった後に葬儀社に連絡します。検視の完了までに時間がかかる場合がありますが、その間に稲垣屋葬儀店に事前にご連絡いただければ、検視完了後すぐに搬送に伺えるよう準備しておきます。",
      },
    },
  ],
};

export default function EmergencyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="葛飾区で急なご逝去があった場合"
        subtitle="深夜・早朝でも24時間365日、今すぐお電話ください"
        en="EMERGENCY RESPONSE"
      />
      <Breadcrumb
        items={[
          { label: "葛飾区の葬儀", href: "/katsushika-funeral" },
          { label: "急なご逝去への対応" },
        ]}
      />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">EMERGENCY</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              急なご逝去に直面したとき
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp>
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose">
              <p>
                突然の訃報は、誰も覚悟ができていない状況で訪れます。深夜に病院から連絡が来た、朝起きたら家族が亡くなっていた——そのような状況で「次に何をすればよいか」を冷静に判断することは容易ではありません。
              </p>
              <p>
                稲垣屋葬儀店は、葛飾区で創業明治11年頃より地域に根付いてきた葬儀社として、24時間365日、急なご逝去にも対応しています。まずお電話ください（03-3690-0870）。ご状況をお聞きしながら、次のステップを落ち着いてご案内します。「何をすればよいか分からない」という言葉だけで大丈夫です。
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">SITUATION</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              場所・状況による対応の違い
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              {
                title: "病院・施設でご逝去された場合",
                body: "担当医から死亡確認を受け、死亡診断書を受け取ります。その後、葬儀社にご連絡ください。病院から葬儀社を紹介されることがありますが、必ずしも紹介先に依頼する必要はなく、稲垣屋葬儀店にお任せいただけます。葛飾区内の病院・施設からの搬送に24時間対応しています。",
                link: "/flow/hospital",
                linkLabel: "病院からの流れを見る",
              },
              {
                title: "ご自宅でご逝去された場合",
                body: "まずかかりつけ医にご連絡ください。かかりつけ医が到着し、死亡診断書を発行した後、葬儀社に連絡します。在宅でのご臨終に慣れていない方も多いため、「どうすればよいか分からない」と感じる方は、まず稲垣屋葬儀店にお電話ください。",
                link: "/flow/home",
                linkLabel: "ご自宅での流れを見る",
              },
              {
                title: "突然のご逝去・警察が関わる場合",
                body: "事故や突然の病気など、警察が関わる場合は警察（110番）にご連絡ください。検視・検案が終了した後に葬儀社に連絡します。稲垣屋葬儀店では、検視終了後すぐに対応できるよう事前にご連絡いただくことをお勧めします。",
                link: "/flow/police",
                linkLabel: "警察が関わる場合の流れを見る",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="py-7">
                  <h3 className="text-[#312852] text-lg tracking-wide mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                    {item.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-sm leading-loose mb-3">{item.body}</p>
                  <Link href={item.link} className="inline-flex items-center gap-1 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors group">
                    {item.linkLabel}
                    <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FIRST STEPS</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              まず最初にすること
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              { step: "Step 1", title: "医師への連絡・死亡確認", body: "病院では担当医が確認します。自宅ではかかりつけ医へご連絡ください。突然のご逝去の場合は110番に連絡します。" },
              { step: "Step 2", title: "葬儀社（稲垣屋葬儀店）への連絡", body: "03-3690-0870にお電話ください。24時間365日対応しています。「どこに連絡すればよいか分からない」という状況でも丁寧にご案内します。" },
              { step: "Step 3", title: "搬送・安置の手配", body: "稲垣屋葬儀店がご遺体をお迎えし、ご自宅または安置施設へお連れします。深夜の搬送も可能です。" },
              { step: "Step 4", title: "翌日以降に打ち合わせ", body: "搬送・安置が完了した後、落ち着いた状態で葬儀の打ち合わせを行います。急いで決断する必要はありません。" },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="py-7">
                  <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-1">{item.step}</p>
                  <h3 className="text-[#312852] text-lg tracking-wide mb-2" style={{ fontFamily: "var(--font-mincho)" }}>
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

      <section className="py-16 md:py-24 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">SUPPORT</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              慌てなくて大丈夫です
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp>
            <div className="space-y-5 text-[#4a4a4a] text-base leading-loose">
              <p>
                葬儀の詳細は、搬送・安置が落ち着いた後でゆっくり決めることができます。形式・費用・日程・宗教者の手配など、急ぎで決断する必要のある事項はほとんどありません。稲垣屋葬儀店がすべての手順をひとつひとつご案内しますので、焦らずにいてください。
              </p>
              <p>
                葛飾区で創業明治11年頃より地域に根付いてきた稲垣屋葬儀店が、急なご逝去の場面でもしっかりとサポートします。深夜・早朝・休日でも、まずお電話ください。
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              緊急時によくあるご質問
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
