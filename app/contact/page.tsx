import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import Breadcrumb from "../components/Breadcrumb";
import { FadeInUp } from "../components/AnimatedSection";
import ContactForm from "../components/ContactForm";
import { MapPin, Clock, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "お問い合わせ｜事前相談無料・24時間対応｜葛飾区 稲垣屋葬儀店",
  description:
    "葛飾区の稲垣屋葬儀店へのお問い合わせ。葬儀のご相談・事前相談は無料で承っております。強引なご案内は一切いたしません。フォームまたは24時間対応のお電話でご連絡ください。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/contact" },
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "お問い合わせ｜稲垣屋葬儀店",
  description: "葛飾区の稲垣屋葬儀店へのお問い合わせページ。事前相談無料・強引な勧誘なし。",
  url: "https://www.inagakiyasougiten.com/contact",
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <PageHero
        title="お問い合わせ"
        subtitle="まずは、お気軽にご相談ください"
        en="CONTACT"
      />
      <Breadcrumb items={[{ label: "お問い合わせ" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">GET IN TOUCH</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              ご相談・お問い合わせ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
            <p className="text-[#4a4a4a] mt-6 text-base md:text-lg leading-relaxed max-w-2xl">
              葬儀のご相談・事前相談は無料で承っております。どんな小さな疑問でも、まずはお気軽にご連絡ください。
            </p>
          </FadeInUp>

          <div className="grid lg:grid-cols-3 gap-10 md:gap-16">
            <FadeInUp>
              <div className="divide-y divide-[#e8ddf4]">
                <div className="pb-8">
                  <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">PHONE</p>
                  <h3 className="text-[#312852] text-lg tracking-wide mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                    お電話でのご相談
                  </h3>
                  <p className="text-[#9278be] text-xs mb-2">24時間365日受付</p>
                  <a href="tel:0336900870" className="text-[#312852] text-2xl font-bold tracking-wider hover:text-[#5c4a80] transition-colors block" style={{ fontFamily: "var(--font-mincho)" }}>
                    03-3690-0870
                  </a>
                  <p className="text-[#4a4a4a] text-xs leading-relaxed mt-2">
                    深夜・早朝・休日を問わず、24時間いつでもお電話ください。
                  </p>
                </div>

                <div className="py-8 space-y-5">
                  <p className="text-[#c9a55a] text-xs tracking-[0.4em]">INFORMATION</p>
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-[#9278be] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[#9278be] text-xs mb-0.5">所在地</p>
                      <p className="text-[#4a4a4a] text-sm">東京都葛飾区堀切6-33-4</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={16} className="text-[#9278be] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[#9278be] text-xs mb-0.5">営業時間</p>
                      <p className="text-[#4a4a4a] text-sm">24時間365日対応</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail size={16} className="text-[#9278be] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[#9278be] text-xs mb-0.5">メール</p>
                      <p className="text-[#4a4a4a] text-sm">フォームよりご連絡ください</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <p className="text-[#7560a0] text-sm leading-loose" style={{ fontFamily: "var(--font-mincho)" }}>
                    事前相談は無料です。強引な勧誘は一切いたしませんので、お気軽にご連絡ください。
                  </p>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp className="lg:col-span-2">
              <div className="border-t border-[#e8ddf4] pt-8 lg:border-t-0 lg:pt-0 lg:border-l lg:pl-10">
                <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FORM</p>
                <h3 className="text-[#312852] text-xl tracking-wide mb-8" style={{ fontFamily: "var(--font-mincho)" }}>
                  お問い合わせフォーム
                </h3>
                <ContactForm />
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
    </>
  );
}
