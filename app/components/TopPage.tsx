import Link from "next/link";
import {
  Award,
  Users,
  Clock,
  MapPin,
  MessageCircle,
  Heart,
  Star,
  Shield,
  ChevronRight,
  Phone,
} from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "./AnimatedSection";
import HeroSection from "./home/HeroSection";
import PlanCard from "./plans/PlanCard";
import KuminLink from "./KuminLink";
import { funeralPlans } from "@/data/plans";
import { withTel } from "@/app/components/TelLink";

const aboutItems: { label: string; value: React.ReactNode }[] = [
  {
    label: "創業",
    value: "明治11年頃、足立区千住にて創業。葛飾区では60年以上、地域の皆さまのご葬儀をお手伝いしてきました。",
  },
  {
    label: "資格",
    value: "葬祭ディレクター1級（厚生労働省認定）取得スタッフが在籍。認定飯田葬儀相談員も在籍しています。",
  },
  {
    label: "認定",
    value: (
      <>
        葛飾区が指定する
        <KuminLink className="mx-0.5">区民葬儀取扱店</KuminLink>
        として認定。23区にお住まいの方は区民葬儀制度をご利用いただけます。
      </>
    ),
  },
  {
    label: "対応時間",
    value: "24時間365日対応。深夜・早朝・休日を問わず、お電話（03-3690-0870）にてご連絡いただけます。",
  },
  {
    label: "対応エリア",
    value: "葛飾区全域（堀切・亀有・金町・立石・青戸・四つ木・柴又・お花茶屋・新小岩周辺など）に対応。",
  },
];

const whyChooseUs: { title: string; desc: React.ReactNode }[] = [
  {
    title: "葬祭ディレクター1級の専門知識",
    desc: "厚生労働省認定の「葬祭ディレクター1級」を取得したスタッフが葬儀全般をサポートします。専門的な知識と丁寧な対応で、初めて葬儀を行うご遺族もご安心いただけます。",
  },
  {
    title: "区民葬儀取扱店として認定",
    desc: (
      <>
        葛飾区が指定する区民葬儀取扱店として認定されています。23区にお住まいの方は
        <KuminLink className="mx-0.5">区民葬儀制度</KuminLink>
        を利用することができ、申請手続きも一貫してサポートします。
      </>
    ),
  },
  {
    title: "創業明治11年頃・葛飾区で60年以上の実績",
    desc: "明治11年頃に足立区千住で創業し、葛飾区では60年以上にわたり地域の皆さまのご葬儀をお手伝いしてきました。葛飾区内の斎場・火葬場・行政手続きに精通しており、地元の葬儀社として信頼をいただいています。",
  },
  {
    title: "24時間365日、いつでも対応",
    desc: "深夜・早朝・休日を問わず24時間365日対応しています。急なご逝去の際も「まずお電話ください」。ご状況をお聞きし、落ち着いて次の手順をご案内します。",
  },
  {
    title: "事前相談・お見積もり無料",
    desc: "「もしものとき」に備えた事前相談を無料で承っています。費用・流れ・プランについてどんな疑問もお気軽にご相談ください。相談したからといって必ずご依頼いただく義務はなく、強引な勧誘は一切行いません。",
  },
];

const strengths = [
  { icon: Award, title: "葬祭ディレクター1級", desc: "厚生労働省認定の「葬祭ディレクター1級」を取得。確かな知識と技術でお葬式全般をサポートします。" },
  { icon: Shield, title: "区民葬儀取扱店", desc: "区民葬儀取扱店として、23区にお住まいの方は区民葬儀制度を利用して費用を抑えた葬儀をご利用いただけます。" },
  { icon: Clock, title: "24時間365日対応", desc: "深夜・早朝を問わず、いつでもご連絡いただけます。急なご逝去にも迅速に対応いたします。" },
  { icon: MapPin, title: "葛飾区密着", desc: "葛飾区で60年以上、地域に根付いてきた葬儀社。地域の地理や習慣を熟知しています。" },
  { icon: MessageCircle, title: "事前相談無料", desc: "「もしものとき」に備えた事前相談を無料で承っております。費用や流れを事前にご確認いただけます。" },
  { icon: Heart, title: "家族葬対応", desc: "ご家族やごく親しい方だけで行う家族葬に対応。故人様との最後の時間をゆっくりとお過ごしいただけます。" },
  { icon: Users, title: "認定飯田葬儀相談員", desc: "専門の葬儀相談員が在籍。ご家族の想いに寄り添い、丁寧なヒアリングでご提案いたします。" },
  { icon: Star, title: "柔軟な提案力", desc: "伝統的な葬儀から現代的なスタイルまで、ご家族のご希望に合わせた柔軟なご提案が可能です。" },
];

const styleLinks = [
  { title: "家族葬", href: "/plans/family-funeral" },
  { title: "一日葬", href: "/plans/oneday-funeral" },
  { title: "火葬式・直葬", href: "/plans/cremation" },
  { title: "一般葬", href: "/plans/general-funeral" },
  { title: "社葬", href: "/plans/company-funeral" },
  { title: "区民葬儀", href: "/plans/kumin-funeral" },
];

const credentials = [
  { icon: Award, label: "葬祭ディレクター1級", sub: "厚生労働省認定", desc: "厚生労働省認定の葬祭ディレクター技能審査1級を取得。葬儀全般に関する深い知識と高い技術を持つ専門家として認定されています。" },
  { icon: Star, label: "認定飯田葬儀相談員", sub: "専門相談員認定", desc: "葬儀に関する専門的な相談に対応できる認定相談員として認定。ご家族の想いや疑問に、専門知識を持って丁寧にお答えします。" },
  { icon: Shield, label: "区民葬儀取扱店", sub: "葛飾区指定", desc: "葛飾区が指定する区民葬儀取扱店。23区にお住まいの方は区民葬儀制度を利用することで費用を抑えた葬儀が可能です。", href: "/plans/kumin-funeral" },
  { icon: Users, label: "葬儀組合加盟", sub: "業界団体所属", desc: "葬儀業の組合に加盟。適正な価格と質の高いサービスを提供するための業界基準を遵守しています。" },
];

const flowSteps = [
  { num: "01", title: "ご連絡", desc: "24時間いつでもお電話ください。深夜・早朝も対応いたします。" },
  { num: "02", title: "お迎え", desc: "故人様のもとへ迅速にお迎えに参ります。" },
  { num: "03", title: "打ち合わせ", desc: "ご家族のご要望をお聞きし、最適なプランをご提案します。" },
  { num: "04", title: "通夜・葬儀", desc: "心を込めて、故人様とのお別れをお手伝いします。" },
  { num: "05", title: "アフターサポート", desc: "葬儀後の手続きや法要まで丁寧にサポートします。" },
];

export const topFaqs: { q: string; a: string }[] = [
  {
    q: "急に亡くなった場合、夜中でも連絡できますか？",
    a: "はい、24時間365日対応しております。深夜・早朝を問わず、いつでもお電話ください（03-3690-0870）。まずご連絡いただければ、ご状況をお聞きしながら次の手順を丁寧にご案内します。",
  },
  {
    q: "葬儀の費用はどのくらいかかりますか？",
    a: "稲垣屋葬儀店では、直葬プラン180,000円（参列者数目安〜10名）、家族葬プラン450,000円〜（蒲公英・白菊・菖蒲の3プラン）、一般葬プラン（百合）1,200,000円〜、社葬プラン（胡蝶蘭）1,800,000円〜をご用意しています。プランに記載のない費用が必要となる場合も、事前にお見積もりでご案内します。",
  },
  {
    q: "区民葬儀とはどのような制度ですか？",
    a: "東京23区が共通で設けている葬儀の制度で、亡くなられた方または喪主の方が23区内にお住まいであれば利用できます。祭壇・霊柩車・火葬・骨つぼなどを23区共通の協定料金で利用でき、稲垣屋葬儀店は区民葬儀取扱店として申請手続きもサポートしています。稲垣屋葬儀店のプランはすべて区民葬儀をご利用いただけます。",
  },
  {
    q: "家族だけで小さな葬儀を行いたいのですが？",
    a: "家族葬・一日葬・火葬式（直葬）など、ご家族だけでゆっくりとお別れできるプランをご用意しています。家族葬の蒲公英プラン・白菊プランは、お通夜を行わない1日葬儀にも対応可能です。",
  },
  {
    q: "事前に相談や見積もりはできますか？",
    a: "はい、事前相談・お見積もりは無料で承っております。費用・流れ・プランについて事前に確認しておくことで、いざというときに落ち着いて対応できます。強引な勧誘は一切行いません。",
  },
];

function SectionHeading({ en, title, lead }: { en: string; title: string; lead?: React.ReactNode }) {
  return (
    <>
      <p className="mb-4 text-sm tracking-[0.28em] text-[#a8853f]">{en}</p>
      <h2 className="text-[1.75rem] tracking-[0.08em] text-[#312852] md:text-4xl" style={{ fontFamily: "var(--font-mincho)" }}>
        {title}
      </h2>
      <div className="mt-6 h-px w-14 bg-[#c9a55a]" />
      {lead && <p className="mt-5 text-base leading-loose text-[#4a4a4a] md:text-lg">{lead}</p>}
    </>
  );
}

export default function TopPage() {
  return (
    <>
      <HeroSection />

      {/* ─── 稲垣屋葬儀店について（3分でわかる）──────────────── */}
      <section className="bg-[#faf9f7] py-20 md:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <SectionHeading
              en="ABOUT"
              title="稲垣屋葬儀店について（3分でわかる）"
              lead="葛飾区で葬儀をお考えの方が、稲垣屋葬儀店について最初に知っておきたいことをまとめました。"
            />
          </FadeInUp>

          <StaggerContainer>
            <dl className="divide-y divide-[#e8ddf4] border-y border-[#c9a55a]/40">
              {aboutItems.map((item) => (
                <StaggerItem key={item.label} className="flex flex-col gap-1.5 py-6 sm:flex-row sm:items-start sm:gap-8">
                  <dt
                    className="w-28 shrink-0 pt-0.5 text-base tracking-[0.2em] text-[#a8853f]"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    {item.label}
                  </dt>
                  <dd className="text-base leading-loose text-[#3f3f3f] md:text-[1.0625rem]">{item.value}</dd>
                </StaggerItem>
              ))}
            </dl>
          </StaggerContainer>

          <FadeInUp className="mt-8">
            <Link
              href="/katsushika-funeral"
              className="group inline-flex items-center gap-2 text-base tracking-wide text-[#5c4a80] transition-colors hover:text-[#312852]"
            >
              葛飾区の葬儀について詳しく見る
              <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* ─── 料金プラン ─────────────────────────────────────── */}
      <section id="plans" className="border-y border-[#e8ddf4] bg-gradient-to-b from-white to-[#faf7fd] py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeInUp className="mx-auto mb-12 max-w-4xl">
            <SectionHeading
              en="FUNERAL PLANS"
              title="葬儀プラン・料金"
              lead={
                <>
                  直葬・家族葬・一般葬・社葬の6つのプランをご用意しています。すべてのプランで
                  <KuminLink className="mx-0.5" />
                  をご利用いただけます。
                </>
              }
            />
          </FadeInUp>

          <StaggerContainer className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {funeralPlans.map((plan) => (
              <StaggerItem key={plan.slug} className="h-full">
                <PlanCard plan={plan} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mx-auto mt-12 max-w-4xl">
            <div className="border border-[#e8ddf4] bg-[#faf7fd] px-5 py-6 md:px-8">
              <p className="mb-4 text-sm tracking-[0.3em] text-[#7560a0]">葬儀の形式から選ぶ</p>
              <ul className="flex flex-wrap gap-2.5">
                {styleLinks.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="group inline-flex items-center gap-1 border border-[#d5c6eb] bg-white px-4 py-2.5 text-base tracking-wider text-[#312852] transition-colors hover:border-[#9278be] hover:text-[#5c4a80]"
                    >
                      {s.title}
                      <ChevronRight size={15} className="text-[#b8a0d8] transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 flex justify-center">
              <Link
                href="/plans"
                className="group inline-flex items-center gap-2 border border-[#5c4a80] px-8 py-4 text-base tracking-wider text-[#5c4a80] transition-colors hover:bg-[#5c4a80] hover:text-white"
              >
                プランの内容・料金を詳しく見る
                <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ─── 葛飾区で選ばれる理由 ───────────────────────────── */}
      <section className="border-t border-[#e8ddf4] bg-[#faf9f7] py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <SectionHeading en="WHY CHOOSE US" title="葛飾区の葬儀で選ばれる理由" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {whyChooseUs.map((item, idx) => (
              <StaggerItem key={item.title}>
                <div className="flex h-full items-start gap-4 border-t border-[#d5c6eb] py-7">
                  <span
                    className="w-8 shrink-0 pt-1 text-base tracking-[0.15em] text-[#a8853f]"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="mb-2 text-lg tracking-wide text-[#312852] md:text-xl" style={{ fontFamily: "var(--font-mincho)" }}>
                      {item.title}
                    </h3>
                    <p className="text-base leading-loose text-[#4a4a4a]">{withTel(item.desc)}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mt-8">
            <Link
              href="/reasons"
              className="group inline-flex items-center gap-2 text-base tracking-wide text-[#5c4a80] transition-colors hover:text-[#312852]"
            >
              選ばれる理由を詳しく見る
              <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* ─── Strengths ───────────────────────────────────── */}
      <section className="border-t border-[#e8ddf4] bg-white py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <FadeInUp className="mb-12">
            <SectionHeading en="OUR STRENGTHS" title="稲垣屋葬儀店の強み" />
          </FadeInUp>

          <StaggerContainer className="grid gap-5 sm:grid-cols-2">
            {strengths.map((item) => (
              <StaggerItem key={item.title} className="rounded-sm border border-[#e8ddf4] bg-[#faf9f7]">
                <div className="group flex h-full items-start gap-4 px-5 py-8 sm:px-7">
                  <item.icon size={22} className="mt-1 shrink-0 text-[#9278be] transition-colors group-hover:text-[#5c4a80]" />
                  <div>
                    <h3 className="mb-2 text-lg tracking-wide text-[#312852]" style={{ fontFamily: "var(--font-mincho)" }}>
                      {item.title}
                    </h3>
                    <p className="text-base leading-relaxed text-[#4a4a4a]">{withTel(item.desc)}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Credentials ────────────────────────────────────── */}
      <section className="border-t border-[#e8ddf4] bg-[#faf9f7] py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <FadeInUp className="mb-12">
            <SectionHeading
              en="CREDENTIALS"
              title="資格・認定・所属"
              lead="稲垣屋葬儀店は、確かな資格・認定・葬儀組合への加盟により安心の葬儀をお届けします。"
            />
          </FadeInUp>

          <StaggerContainer className="grid gap-x-10 gap-y-2 md:grid-cols-2">
            {credentials.map((item) => (
              <StaggerItem key={item.label}>
                <div className="flex items-start gap-5 py-7">
                  <item.icon size={22} className="mt-1 shrink-0 text-[#9278be]" />
                  <div>
                    <p className="mb-0.5 text-sm tracking-[0.2em] text-[#a8853f]">{item.sub}</p>
                    <h3 className="mb-2 text-lg tracking-wide text-[#312852] md:text-xl" style={{ fontFamily: "var(--font-mincho)" }}>
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="underline decoration-[#c9a55a] decoration-1 underline-offset-[6px] hover:text-[#5c4a80]"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        item.label
                      )}
                    </h3>
                    <p className="text-base leading-relaxed text-[#4a4a4a]">{withTel(item.desc)}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Flow ──────────────────────────────────────────── */}
      <section className="border-t border-[#e8ddf4] bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <FadeInUp className="mb-12">
            <SectionHeading en="FLOW" title="ご相談の流れ" />
          </FadeInUp>

          <StaggerContainer>
            <ol className="divide-y divide-[#e8ddf4]">
              {flowSteps.map((step) => (
                <li key={step.num}>
                  <StaggerItem className="flex items-start gap-6 py-7">
                    <span
                      className="w-9 shrink-0 pt-0.5 text-lg tracking-[0.12em] text-[#a8853f]"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      {step.num}
                    </span>
                    <div>
                      <h3 className="mb-2 text-lg tracking-wide text-[#312852] md:text-xl" style={{ fontFamily: "var(--font-mincho)" }}>
                        {step.title}
                      </h3>
                      <p className="text-base leading-relaxed text-[#4a4a4a]">{withTel(step.desc)}</p>
                    </div>
                  </StaggerItem>
                </li>
              ))}
            </ol>
          </StaggerContainer>

          <FadeInUp className="mt-10">
            <Link
              href="/flow"
              className="group inline-flex items-center gap-2 text-base tracking-wide text-[#5c4a80] transition-colors hover:text-[#312852]"
            >
              葬儀の流れを詳しく見る
              <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* ─── FAQ（抜粋）────────────────────────────────────── */}
      <section className="border-t border-[#e8ddf4] bg-[#faf9f7] py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <FadeInUp className="mb-12">
            <SectionHeading en="FAQ" title="よくあるご質問（抜粋）" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {topFaqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <div className="py-7">
                  <div className="mb-3 flex gap-4">
                    <span className="shrink-0 text-lg font-bold text-[#9278be]">Q</span>
                    <h3 className="text-lg leading-relaxed text-[#312852]" style={{ fontFamily: "var(--font-mincho)" }}>
                      {faq.q}
                    </h3>
                  </div>
                  <div className="flex gap-4">
                    <span className="shrink-0 text-lg font-bold text-[#c9a55a]">A</span>
                    <p className="text-base leading-loose text-[#4a4a4a]">{withTel(faq.a)}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mt-10">
            <Link
              href="/faq"
              className="group inline-flex items-center gap-2 text-base tracking-wide text-[#5c4a80] transition-colors hover:text-[#312852]"
            >
              よくある質問をすべて見る
              <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────── */}
      <section className="border-t border-[#e8ddf4] bg-[#f4eef9] py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <FadeInUp>
            <div className="mb-8 flex flex-col items-center gap-1.5">
              <div className="h-10 w-px bg-gradient-to-b from-transparent to-[#c9a55a]" />
              <div className="h-1.5 w-1.5 rotate-45 border border-[#c9a55a]" />
            </div>
            <p className="mb-4 text-sm tracking-[0.4em] text-[#a8853f]">CONTACT</p>
            <h2
              className="mb-5 text-2xl leading-snug tracking-[0.08em] text-[#312852] md:text-3xl"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              まずは、お気軽にご相談ください。
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-base leading-loose text-[#4a4a4a] md:text-lg">
              葬儀のことで不安なこと、分からないことがあれば、
              事前相談を含めてお気軽にお声がけください。
              稲垣屋葬儀店は、いつでもあなたのそばにいます。
            </p>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <a
                href="tel:0336900870"
                className="group inline-flex w-full items-center justify-center gap-3 bg-[#5c4a80] px-10 py-5 text-lg tracking-wider text-white transition-colors duration-300 hover:bg-[#453869] sm:w-auto"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                <Phone size={19} className="text-[#dfc07e]" />
                03-3690-0870
              </a>
              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-3 border border-[#9278be] px-4 sm:px-8 py-5 text-lg tracking-wider text-[#5c4a80] transition-colors duration-300 hover:bg-[#ede7f6] sm:w-auto"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                <MessageCircle size={19} />
                お問い合わせフォーム
                <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
