import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Breadcrumb from "../../components/Breadcrumb";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "葬儀形式の選び方｜5つのプランを比較｜葛飾区 稲垣屋葬儀店",
  description:
    "家族葬・一日葬・火葬式・一般葬・区民葬儀の5つの葬儀形式を比較。どれを選べばよいか、葛飾区の稲垣屋葬儀店が丁寧にご説明します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/compare/funeral-plans" },
};

const faqs = [
  {
    q: "形式は必ず一つに決めなければなりませんか？",
    a: "形式の組み合わせや変更は可能な場合もあります。例えば「家族葬で通夜を省略する（=一日葬）」「区民葬儀制度を使いながら家族中心で行う」など、ご家族のご要望に応じて柔軟に対応します。まずは稲垣屋葬儀店にご相談ください。",
  },
  {
    q: "形式を決める前に相談することはできますか？",
    a: "はい、まさにそのような段階でのご相談を歓迎しています。「どの形式を選べばよいか分からない」というご相談は最も多いものの一つです。ご家族の状況・ご予算・参列者の範囲などをお聞きしながら、一緒に考えます。",
  },
  {
    q: "後から形式を変更することはできますか？",
    a: "葬儀前の打ち合わせ段階であれば変更は可能です。ただし、準備が進むほど変更が難しくなる部分もありますので、できるだけ早い段階でのご相談をお勧めします。",
  },
  {
    q: "葛飾区民葬儀制度は全ての葬儀形式に対応していますか？",
    a: "区民葬儀制度は一定の内容が定められた枠組みです。全ての形式に対応しているわけではありませんが、詳細は事前相談でご確認ください。稲垣屋葬儀店は葛飾区指定の取扱店として、区民葬儀に関する相談に対応しています。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const compareLinks = [
  {
    href: "/compare/family-vs-oneday",
    title: "家族葬と一日葬の違い",
    desc: "通夜の有無・費用・向いている方",
  },
  {
    href: "/compare/family-vs-cremation",
    title: "家族葬と火葬式の違い",
    desc: "お別れの時間・費用・向いている方",
  },
  {
    href: "/compare/oneday-vs-cremation",
    title: "一日葬と火葬式の違い",
    desc: "費用・流れ・お別れの時間を比較",
  },
  {
    href: "/compare/kumin-vs-general",
    title: "区民葬儀と一般葬の違い",
    desc: "費用の考え方・対象者・内容を比較",
  },
];

export default function FuneralPlansPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        title="葬儀形式の選び方"
        subtitle="5つの形式を比較して選ぶ"
        en="FUNERAL PLAN GUIDE"
      />

      <Breadcrumb items={[{ label: "葬儀形式の選び方" }]} />

      {/* Intro */}
      <section className="py-16 md:py-20 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <p className="text-[#4a4a4a] text-base leading-relaxed">
              葬儀にはさまざまな形式があります。「どれが正解」という答えはなく、ご家族の状況・ご希望・参列者の範囲・ご予算などによって、最も合った形式は異なります。稲垣屋葬儀店では5つの形式をご案内しており、どの形式が合うかを一緒に考えます。まずは各形式の特徴をご確認ください。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* 5形式の比較表 */}
      <section className="py-16 md:py-20 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COMPARISON TABLE</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              5つの形式を比較する
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-[#e8ddf4]">
                    <th className="py-3 px-4 text-left text-[#312852] font-normal tracking-wide" style={{ fontFamily: "var(--font-mincho)" }}>形式名</th>
                    <th className="py-3 px-4 text-center text-[#312852] font-normal tracking-wide" style={{ fontFamily: "var(--font-mincho)" }}>通夜</th>
                    <th className="py-3 px-4 text-center text-[#312852] font-normal tracking-wide" style={{ fontFamily: "var(--font-mincho)" }}>告別式</th>
                    <th className="py-3 px-4 text-center text-[#312852] font-normal tracking-wide" style={{ fontFamily: "var(--font-mincho)" }}>参列者</th>
                    <th className="py-3 px-4 text-center text-[#312852] font-normal tracking-wide" style={{ fontFamily: "var(--font-mincho)" }}>日程</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e8ddf4]">
                  <tr>
                    <td className="py-4 px-4 text-[#312852] font-normal" style={{ fontFamily: "var(--font-mincho)" }}>家族葬</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">あり（省略可）</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">あり</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">少人数</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">1〜2日</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-[#312852] font-normal" style={{ fontFamily: "var(--font-mincho)" }}>一日葬</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">なし</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">あり</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">少人数</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">1日</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-[#312852] font-normal" style={{ fontFamily: "var(--font-mincho)" }}>火葬式</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">なし</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">なし</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">ごく少人数</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">半日〜1日</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-[#312852] font-normal" style={{ fontFamily: "var(--font-mincho)" }}>一般葬</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">あり</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">あり</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">多数</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">2日</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-[#312852] font-normal" style={{ fontFamily: "var(--font-mincho)" }}>区民葬儀</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">制度による</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">制度による</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">葛飾区民</td>
                    <td className="py-4 px-4 text-center text-[#4a4a4a]">制度による</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* 選び方の考え方 */}
      <section className="py-16 md:py-20 bg-[#faf7fd] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">HOW TO CHOOSE</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              選び方の考え方
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            <StaggerItem>
              <div className="py-7">
                <p className="text-[#312852] text-base tracking-wide mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                  誰に参列していただきたいか
                </p>
                <p className="text-[#4a4a4a] text-base leading-relaxed pl-4 border-l border-[#c9a55a]">
                  ご家族・ごく親しい方だけなら家族葬・一日葬・火葬式が向いています。広くご縁のある方々に来ていただきたい場合は一般葬が適しています。
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="py-7">
                <p className="text-[#312852] text-base tracking-wide mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                  お別れの場をどのように持ちたいか
                </p>
                <p className="text-[#4a4a4a] text-base leading-relaxed pl-4 border-l border-[#c9a55a]">
                  通夜でゆっくりお別れしたい場合は家族葬や一般葬、告別式でのお別れを1日で済ませたい場合は一日葬、儀式なしでシンプルに見送る場合は火葬式が合っています。
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="py-7">
                <p className="text-[#312852] text-base tracking-wide mb-3" style={{ fontFamily: "var(--font-mincho)" }}>
                  葛飾区民葬儀制度を活用したいか
                </p>
                <p className="text-[#4a4a4a] text-base leading-relaxed pl-4 border-l border-[#c9a55a]">
                  葛飾区民の方は区民葬儀制度の利用をご検討いただけます。稲垣屋葬儀店は区指定取扱店として対応しています。
                  <Link href="/plans/kumin-funeral" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 ml-2 transition-colors text-sm">
                    区民葬儀の詳細
                  </Link>
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* 各形式への詳細リンク */}
      <section className="py-16 md:py-20 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COMPARE</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              2形式を詳しく比較する
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {compareLinks.map((link) => (
              <StaggerItem key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between py-6 group"
                >
                  <div>
                    <p className="text-[#312852] text-base tracking-wide group-hover:text-[#5c4a80] transition-colors" style={{ fontFamily: "var(--font-mincho)" }}>
                      {link.title}
                    </p>
                    <p className="text-[#7560a0] text-sm mt-1">{link.desc}</p>
                  </div>
                  <ChevronRight size={16} className="text-[#9278be] group-hover:translate-x-1 transition-transform shrink-0 ml-4" />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeInUp delay={0.2} className="mt-8">
            <p className="text-[#4a4a4a] text-sm leading-relaxed">
              各形式の詳細は
              <Link href="/plans/family-funeral" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 mx-1 transition-colors">家族葬プランページ</Link>
              や
              <Link href="/consultation" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 mx-1 transition-colors">事前相談</Link>
              でもご確認いただけます。また
              <Link href="/faq" className="text-[#5c4a80] hover:text-[#312852] underline underline-offset-2 mx-1 transition-colors">よくある質問</Link>
              もご参照ください。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              よくあるご質問
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
                  <p className="text-[#4a4a4a] text-base leading-relaxed pl-4 border-l border-[#c9a55a]">
                    {faq.a}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Soft CTA */}
      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              まずはお気軽にご相談ください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              形式に迷っている段階でも、どんな疑問でもお気軽にどうぞ。<br />
              事前相談は無料、強引な勧誘は一切行いません。
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
