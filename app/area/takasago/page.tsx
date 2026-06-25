import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle, Phone, MapPin, Clock, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "高砂の葬儀｜葛飾区 稲垣屋葬儀店",
  description:
    "高砂で葬儀をお考えの方へ。葛飾区の稲垣屋葬儀店が家族葬・一日葬・火葬式・区民葬儀に対応。24時間365日対応。",
  alternates: {
    canonical: "https://www.inagakiyasougiten.com/area/takasago",
  },
};

const faqs = [
  {
    q: "高砂で急にご逝去があった場合、何時でも連絡できますか？",
    a: "はい、24時間365日いつでもご連絡いただけます。深夜・早朝・休日を問わず対応しております。急なご逝去の際も、まずはお電話（03-3690-0870）ください。高砂周辺のご自宅や病院にも速やかにお迎えに参ります。",
  },
  {
    q: "高砂から稲垣屋葬儀店まではどのくらいですか？",
    a: "稲垣屋葬儀店は葛飾区堀切6-33-4にあります。高砂からは車で10〜20分ほどの距離です。京成本線「高砂」駅周辺からは、堀切方面へのアクセスもスムーズです。ご連絡いただければ迅速にお伺いします。",
  },
  {
    q: "高砂での家族葬の費用はどのくらいですか？",
    a: "家族葬の費用はご参列者の人数・プランの内容・ご利用の斎場などによって異なります。事前のお見積もりは無料です。費用の内訳も含め、丁寧にご説明しますので、まずはお気軽にご相談ください。",
  },
  {
    q: "高砂でも区民葬儀制度は使えますか？",
    a: "はい、ご利用いただけます。葛飾区の区民葬儀制度は、故人または喪主が葛飾区に住民票をお持ちの方が対象です。高砂にお住まいの方も対象となります。稲垣屋葬儀店は葛飾区の区民葬儀取扱店として登録しています。",
  },
];

export default function TakasagoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <PageHero
        title="高砂の葬儀について"
        subtitle="葛飾区堀切の稲垣屋葬儀店がお迎えします"
        en="FUNERAL SERVICE"
      />
      <Breadcrumb
        items={[{ label: "対応エリア", href: "/area" }, { label: "高砂の葬儀" }]}
      />

      {/* Section 1: エリア紹介 */}
      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">SERVICE AREA</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              高砂の皆様へ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              高砂は、京成本線「高砂」駅を中心とした葛飾区南部の住宅地です。駅周辺には昔ながらの商店街が残り、落ち着いた生活感のある下町の雰囲気が続いています。長年この地に暮らしてきたご家族が多く、ご年配の方を中心に「地元の葬儀社にお願いしたい」というご希望をお持ちの方もいらっしゃいます。
            </p>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              稲垣屋葬儀店は、葛飾区堀切6-33-4を拠点とする地域密着の葬儀社です。高砂エリアからも車で10〜20分ほどの距離にあり、ご連絡いただければ速やかにお伺いします。明治11年頃の創業以来、葛飾区内の各エリアで数多くのご葬儀をお手伝いしてきた経験があります。
            </p>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-6">
              高砂にお住まいの方からは、「急に亡くなってしまい、どうすればよいか」「事前に費用を確認しておきたい」といったご相談をいただくことが多くあります。稲垣屋葬儀店では、葬祭ディレクター1級の資格を持つスタッフが、はじめてのことで戸惑うご家族に寄り添い、一つひとつ丁寧にご案内いたします。
            </p>
            <p className="text-[#4a4a4a] text-base leading-loose">
              家族葬・一日葬・火葬式・一般葬・区民葬儀など多様なプランをご用意しています。葛飾区民の方は区民葬儀制度もご利用いただけます。事前相談・お見積もりはすべて無料です。お気軽にご連絡ください。
            </p>
          </FadeInUp>

          <FadeInUp className="mt-10 space-y-3">
            <div className="flex items-center gap-3">
              <MapPin size={15} className="text-[#9278be] shrink-0" />
              <span className="text-[#4a4a4a] text-sm">稲垣屋葬儀店　東京都葛飾区堀切6-33-4</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={15} className="text-[#9278be] shrink-0" />
              <span className="text-[#4a4a4a] text-sm">24時間365日対応　TEL：03-3690-0870</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield size={15} className="text-[#9278be] shrink-0" />
              <span className="text-[#4a4a4a] text-sm">葬祭ディレクター1級取得・区民葬儀取扱店・明治創業</span>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Section 2: 葬儀プラン */}
      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FUNERAL PLANS</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              高砂で選べる葬儀プラン
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              { href: "/plans/family-funeral", title: "家族葬", en: "Family Funeral", desc: "ご家族やごく親しい方だけで、心静かにお別れする葬儀スタイルです。" },
              { href: "/plans/oneday-funeral", title: "一日葬", en: "One-Day Funeral", desc: "お通夜を省略し、告別式と火葬を一日で行います。ご遺族の負担を軽減します。" },
              { href: "/plans/cremation", title: "火葬式", en: "Cremation Only", desc: "お通夜・告別式を行わず、火葬のみのシンプルなお別れです。" },
              { href: "/plans/general-funeral", title: "一般葬", en: "Traditional Funeral", desc: "お通夜・告別式を執り行う伝統的な葬儀形式です。" },
              { href: "/plans/kumin-funeral", title: "区民葬儀", en: "Kuminso-gi", desc: "葛飾区民の方が利用できる区の制度。費用を抑えた葬儀が可能です。" },
            ].map((plan) => (
              <StaggerItem key={plan.title}>
                <Link href={plan.href} className="flex items-center justify-between gap-6 py-7 group">
                  <div>
                    <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-1">{plan.en}</p>
                    <h3 className="text-[#312852] text-xl tracking-wide mb-1.5 group-hover:text-[#5c4a80] transition-colors" style={{ fontFamily: "var(--font-mincho)" }}>
                      {plan.title}
                    </h3>
                    <p className="text-[#4a4a4a] text-sm leading-relaxed">{plan.desc}</p>
                  </div>
                  <ChevronRight size={18} className="text-[#b8a0d8] group-hover:text-[#5c4a80] group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeInUp className="mt-10">
            <Link href="/cost" className="inline-flex items-center gap-2 text-[#5c4a80] text-sm hover:text-[#312852] transition-colors">
              <ChevronRight size={14} />葬儀費用について詳しく見る
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* Section 3: 関連情報 */}
      <section className="py-20 md:py-28 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">USEFUL LINKS</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              ご葬儀に関する情報
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              { href: "/after-death", title: "ご逝去直後にすること", desc: "突然のご逝去の際、まず何をすべきかをわかりやすくご説明します。" },
              { href: "/consultation", title: "事前相談について", desc: "いざというときのために、費用・プラン・流れを事前に確認しておきましょう。" },
              { href: "/flow", title: "葬儀の流れ", desc: "ご逝去からご葬儀・ご納骨までの一般的な流れをご説明します。" },
              { href: "/cost", title: "葬儀費用について", desc: "各プランの費用感や、費用に含まれるものについてご説明します。" },
            ].map((item) => (
              <StaggerItem key={item.href}>
                <Link href={item.href} className="flex items-center justify-between gap-6 py-7 group">
                  <div>
                    <h3 className="text-[#312852] text-lg tracking-wide mb-1.5 group-hover:text-[#5c4a80] transition-colors" style={{ fontFamily: "var(--font-mincho)" }}>
                      {item.title}
                    </h3>
                    <p className="text-[#4a4a4a] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <ChevronRight size={18} className="text-[#b8a0d8] group-hover:text-[#5c4a80] group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Section 4: FAQ */}
      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
            <h2 className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              高砂からよくあるご質問
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <div className="py-7">
                  <p className="text-[#312852] text-base tracking-wide mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                    Q. {faq.q}
                  </p>
                  <p className="text-[#4a4a4a] text-base leading-relaxed pl-4 border-l border-[#c9a55a]">{faq.a}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Section 5: 関連エリア */}
      <section className="py-16 md:py-20 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">RELATED AREAS</p>
            <h2 className="text-[#312852] text-xl md:text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              近隣エリアのご案内
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-4" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              { href: "/area/horikiri", label: "堀切の葬儀" },
              { href: "/area/ohanajaya", label: "お花茶屋の葬儀" },
              { href: "/area/aoto", label: "青戸の葬儀" },
              { href: "/area/shibamata", label: "柴又の葬儀" },
            ].map((link) => (
              <StaggerItem key={link.href}>
                <Link href={link.href} className="flex items-center justify-between py-5 group">
                  <span className="text-[#312852] text-base tracking-wide group-hover:text-[#5c4a80] transition-colors" style={{ fontFamily: "var(--font-mincho)" }}>
                    {link.label}
                  </span>
                  <ChevronRight size={16} className="text-[#b8a0d8] group-hover:text-[#5c4a80] group-hover:translate-x-1 transition-all" />
                </Link>
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
              高砂での葬儀のご相談
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
