"use client";

import { motion } from "framer-motion";
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
  CheckCircle2,
  Phone,
} from "lucide-react";
import { FadeInUp, FadeIn, StaggerContainer, StaggerItem } from "./AnimatedSection";

const aboutItems = [
  {
    label: "創業",
    value: "明治11年頃、葛飾区堀切にて創業。以来、地域の皆さまのご葬儀をお手伝いしてきました。",
  },
  {
    label: "資格",
    value: "葬祭ディレクター1級（厚生労働省認定）取得スタッフが在籍。認定飯田葬儀相談員も在籍しています。",
  },
  {
    label: "認定",
    value: "葛飾区が指定する区民葬儀取扱店として認定。葛飾区民の方は区民葬儀制度をご利用いただけます。",
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

const whyChooseUs = [
  {
    title: "葬祭ディレクター1級の専門知識",
    desc: "厚生労働省認定の国家資格「葬祭ディレクター1級」を取得したスタッフが葬儀全般をサポートします。専門的な知識と丁寧な対応で、初めて葬儀を行うご遺族もご安心いただけます。",
  },
  {
    title: "葛飾区民葬儀取扱店として認定",
    desc: "葛飾区が指定する区民葬儀取扱店として認定されています。葛飾区民の方は区民葬儀制度を利用することができ、申請手続きも一貫してサポートします。",
  },
  {
    title: "創業明治11年頃の地域密着の実績",
    desc: "葛飾区堀切に創業以来、地域の皆さまのご葬儀をお手伝いしてきました。葛飾区内の斎場・火葬場・行政手続きに精通しており、地元の葬儀社として信頼をいただいています。",
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
  { icon: Award, title: "葬祭ディレクター1級", desc: "国家資格「葬祭ディレクター1級」を取得。確かな知識と技術でお葬式全般をサポートします。" },
  { icon: Shield, title: "区民葬儀取扱店", desc: "葛飾区が認定する区民葬儀取扱店として、区民の方はより費用を抑えた葬儀をご利用いただけます。" },
  { icon: Clock, title: "24時間365日対応", desc: "深夜・早朝を問わず、いつでもご連絡いただけます。急なご逝去にも迅速に対応いたします。" },
  { icon: MapPin, title: "葛飾区密着", desc: "葛飾区堀切に根付いた地域密着の葬儀社。地域の地理や習慣を熟知しています。" },
  { icon: MessageCircle, title: "事前相談無料", desc: "「もしものとき」に備えた事前相談を無料で承っております。費用や流れを事前にご確認いただけます。" },
  { icon: Heart, title: "家族葬対応", desc: "ご家族やごく親しい方だけで行う家族葬に対応。故人様との最後の時間をゆっくりとお過ごしいただけます。" },
  { icon: Users, title: "認定飯田葬儀相談員", desc: "専門の葬儀相談員が在籍。ご家族の想いに寄り添い、丁寧なヒアリングでご提案いたします。" },
  { icon: Star, title: "柔軟な提案力", desc: "伝統的な葬儀から現代的なスタイルまで、ご家族のご希望に合わせた柔軟なご提案が可能です。" },
];

const plans = [
  {
    title: "家族葬",
    en: "Family Funeral",
    desc: "ご家族やごく親しい方だけで、心静かにお別れする葬儀スタイルです。",
    href: "/plans/family-funeral",
  },
  {
    title: "一日葬",
    en: "One-Day Funeral",
    desc: "お通夜を省略し、告別式・火葬を一日で行うスタイルです。",
    href: "/plans/oneday-funeral",
  },
  {
    title: "火葬式",
    en: "Cremation Only",
    desc: "お通夜・告別式を行わず、火葬のみのシンプルなお別れのスタイルです。",
    href: "/plans/cremation",
  },
  {
    title: "一般葬",
    en: "Traditional Funeral",
    desc: "お通夜・告別式を執り行う一般的な葬儀形式です。",
    href: "/plans/general-funeral",
  },
];

const flowSteps = [
  { num: "01", title: "ご連絡", desc: "24時間いつでもお電話ください。深夜・早朝も対応いたします。" },
  { num: "02", title: "お迎え", desc: "故人様のもとへ迅速にお迎えに参ります。" },
  { num: "03", title: "打ち合わせ", desc: "ご家族のご要望をお聞きし、最適なプランをご提案します。" },
  { num: "04", title: "通夜・葬儀", desc: "心を込めて、故人様とのお別れをお手伝いします。" },
  { num: "05", title: "アフターサポート", desc: "葬儀後の手続きや法要まで丁寧にサポートします。" },
];

const faqs = [
  {
    q: "急に亡くなった場合、夜中でも連絡できますか？",
    a: "はい、24時間365日対応しております。深夜・早朝を問わず、いつでもお電話ください（03-3690-0870）。まずご連絡いただければ、ご状況をお聞きしながら次の手順を丁寧にご案内します。",
  },
  {
    q: "葛飾区民葬儀とはどのような制度ですか？",
    a: "葛飾区が設けた葬儀制度で、葛飾区民の方が利用できます。稲垣屋葬儀店は区指定の取扱店として認定されており、区が定める範囲内の費用での葬儀が可能です。申請手続きのサポートも行っています。",
  },
  {
    q: "家族だけで小さな葬儀を行いたいのですが？",
    a: "家族葬・一日葬・火葬式など、ご家族だけでゆっくりとお別れできるプランをご用意しています。ご希望の規模・スタイルに合わせて最適なご提案をいたします。",
  },
  {
    q: "事前に相談や見積もりはできますか？",
    a: "はい、事前相談・お見積もりは無料で承っております。費用・流れ・プランについて事前に確認しておくことで、いざというときに落ち着いて対応できます。強引な勧誘は一切行いません。",
  },
];

export default function TopPageClient() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url("/hero-bg.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* White/lavender overlay — keeps text readable, maintains quiet elegance */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/78 via-white/62 to-[#f4eef9]/72 pointer-events-none" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 72px, #9278be 72px, #9278be 73px),
              repeating-linear-gradient(90deg, transparent, transparent 72px, #9278be 72px, #9278be 73px)`,
          }}
        />
        {/* Soft lavender wash from bottom-right */}
        <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-[#f4eef9] opacity-30 blur-3xl pointer-events-none" />

        {/* Vertical gold lines */}
        <div className="absolute left-10 md:left-20 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#c9a55a]/25 to-transparent pointer-events-none" />
        <div className="absolute right-10 md:right-20 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#c9a55a]/25 to-transparent pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {/* Small ornament */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center gap-1.5 mb-10"
          >
            <div className="w-px h-14 bg-gradient-to-b from-transparent to-[#c9a55a]" />
            <div className="w-2 h-2 border border-[#c9a55a] rotate-45" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-[#c9a55a] text-xs tracking-[0.45em] mb-7"
          >
            創業明治11年頃 ― 葛飾区堀切
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55 }}
            className="text-[#312852] mb-7"
            style={{ fontFamily: "var(--font-mincho)" }}
          >
            <span className="block text-3xl md:text-5xl lg:text-[3.4rem] tracking-[0.1em] leading-snug mb-3">
              葛飾区で選ばれ続けた
            </span>
            <span className="block text-3xl md:text-5xl lg:text-[3.4rem] tracking-[0.1em] leading-snug">
              地域密着の葬儀社
            </span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            className="w-16 h-px bg-[#c9a55a] mx-auto my-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-[#4a4a4a] text-base md:text-lg leading-loose max-w-xl mx-auto tracking-wide"
          >
            伝統を守り、現代に寄り添うお葬式。
            <br className="hidden md:block" />
            葛飾区堀切の稲垣屋葬儀店です。
          </motion.p>

          {/* Credentials strip — no CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mt-14 md:mt-20 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[#7560a0] text-xs tracking-[0.3em]"
          >
            <span>葬祭ディレクター1級</span>
            <span className="text-[#c9a55a]">｜</span>
            <span>区民葬儀取扱</span>
            <span className="text-[#c9a55a]">｜</span>
            <span>組合加盟</span>
            <span className="text-[#c9a55a]">｜</span>
            <span>24時間対応</span>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        >
          <span className="text-[#b8a0d8] text-[10px] tracking-[0.35em]">SCROLL</span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-9 bg-gradient-to-b from-[#c9a55a] to-transparent"
          />
        </motion.div>
      </section>

      {/* ─── 稲垣屋葬儀店について（3分でわかる）──────────────── */}
      <section className="py-20 md:py-28 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">ABOUT</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              稲垣屋葬儀店について（3分でわかる）
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
            <p className="text-[#4a4a4a] mt-5 text-base leading-relaxed">
              葛飾区で葬儀をお考えの方が、稲垣屋葬儀店について最初に知っておきたいことをまとめました。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {aboutItems.map((item) => (
              <StaggerItem key={item.label}>
                <div className="py-6 flex items-start gap-6">
                  <span
                    className="text-[#c9a55a] text-xs tracking-[0.2em] shrink-0 w-16 pt-0.5"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    {item.label}
                  </span>
                  <p className="text-[#4a4a4a] text-sm leading-loose">{item.value}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mt-8">
            <Link
              href="/katsushika-funeral"
              className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group"
            >
              葛飾区の葬儀について詳しく見る
              <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* ─── 葛飾区で選ばれる理由 ───────────────────────────── */}
      <section className="py-20 md:py-28 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">WHY CHOOSE US</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              葛飾区の葬儀で選ばれる理由
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {whyChooseUs.map((item, idx) => (
              <StaggerItem key={item.title}>
                <div className="flex items-start gap-5 py-7">
                  <span
                    className="text-[#c9a55a] text-xs tracking-[0.2em] shrink-0 pt-1 w-6"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3
                      className="text-[#312852] text-base md:text-lg tracking-wide mb-2"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[#4a4a4a] text-sm leading-loose">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mt-8">
            <Link
              href="/reasons"
              className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group"
            >
              選ばれる理由を詳しく見る
              <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* ─── Strengths ───────────────────────────────────── */}
      <section className="py-20 md:py-32 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">OUR STRENGTHS</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              稲垣屋葬儀店の強み
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {strengths.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex items-start gap-5 py-7 group">
                  <item.icon
                    size={20}
                    className="text-[#9278be] mt-1 shrink-0 group-hover:text-[#5c4a80] transition-colors"
                  />
                  <div>
                    <h3
                      className="text-[#312852] text-lg tracking-wide mb-2"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mt-10">
            <Link
              href="/reasons"
              className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group"
            >
              選ばれる理由を詳しく見る
              <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* ─── Plans ─────────────────────────────────────────── */}
      <section className="py-20 md:py-32 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FUNERAL PLANS</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              葬儀プラン
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
            <p className="text-[#4a4a4a] mt-5 text-base md:text-lg leading-relaxed">
              ご家族のご希望に合わせて、家族葬・一日葬・火葬式・一般葬・区民葬儀の5つのプランをご用意しています。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {plans.map((plan) => (
              <StaggerItem key={plan.title}>
                <Link
                  href={plan.href}
                  className="flex items-center justify-between gap-6 py-7 group"
                >
                  <div className="flex-1">
                    <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-1">{plan.en}</p>
                    <h3
                      className="text-[#312852] text-xl md:text-2xl tracking-wide mb-2 group-hover:text-[#5c4a80] transition-colors"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      {plan.title}
                    </h3>
                    <p className="text-[#4a4a4a] text-base leading-relaxed">{plan.desc}</p>
                  </div>
                  <ChevronRight
                    size={18}
                    className="text-[#b8a0d8] group-hover:text-[#5c4a80] group-hover:translate-x-1 transition-all shrink-0"
                  />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Kuminsogi */}
          <FadeInUp className="mt-4 pt-8 border-t border-[#e8ddf4]">
            <Link href="/plans/kumin-funeral" className="flex items-center justify-between gap-6 group">
              <div>
                <p className="text-[#c9a55a] text-xs tracking-[0.3em] mb-1">KUMINSO-GI</p>
                <h3
                  className="text-[#312852] text-xl md:text-2xl tracking-wide mb-2 group-hover:text-[#5c4a80] transition-colors"
                  style={{ fontFamily: "var(--font-mincho)" }}
                >
                  区民葬儀
                </h3>
                <p className="text-[#4a4a4a] text-base leading-relaxed">
                  葛飾区民の方が利用できる区民葬儀制度。稲垣屋葬儀店は葛飾区指定の取扱店として、費用を抑えた葬儀と申請手続きをサポートしています。
                </p>
              </div>
              <ChevronRight
                size={18}
                className="text-[#b8a0d8] group-hover:text-[#5c4a80] group-hover:translate-x-1 transition-all shrink-0"
              />
            </Link>
          </FadeInUp>

          <FadeInUp className="mt-10">
            <Link
              href="/plans"
              className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group"
            >
              プラン一覧・比較を見る
              <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* ─── Credentials ────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">CREDENTIALS</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              資格・認定・所属
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
            <p className="text-[#4a4a4a] mt-5 text-base leading-relaxed">
              稲垣屋葬儀店は、確かな資格・認定・組合加盟により安心の葬儀をお届けします。
            </p>
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {[
              { icon: Award, label: "葬祭ディレクター1級", sub: "国家資格取得", desc: "厚生労働省認定の葬祭ディレクター技能審査1級を取得。葬儀全般に関する深い知識と高い技術を持つ専門家として認定されています。" },
              { icon: Star, label: "認定飯田葬儀相談員", sub: "専門相談員認定", desc: "葬儀に関する専門的な相談に対応できる認定相談員として認定。ご家族の想いや疑問に、専門知識を持って丁寧にお答えします。" },
              { icon: Shield, label: "区民葬儀取扱店", sub: "葛飾区指定", desc: "葛飾区が指定する区民葬儀取扱店。葛飾区民の方は区民葬儀制度を利用することで費用を抑えた葬儀が可能です。" },
              { icon: Users, label: "組合加盟", sub: "業界団体所属", desc: "業界団体の組合に加盟。適正な価格と質の高いサービスを提供するための業界基準を遵守しています。" },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <div className="flex items-start gap-5 py-7">
                  <item.icon size={20} className="text-[#9278be] mt-1 shrink-0" />
                  <div>
                    <p className="text-[#c9a55a] text-xs tracking-[0.2em] mb-0.5">{item.sub}</p>
                    <h3
                      className="text-[#312852] text-lg tracking-wide mb-2"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      {item.label}
                    </h3>
                    <p className="text-[#4a4a4a] text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Flow ──────────────────────────────────────────── */}
      <section className="py-20 md:py-32 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FLOW</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              ご相談の流れ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {flowSteps.map((step) => (
              <StaggerItem key={step.num}>
                <div className="flex items-start gap-6 py-7">
                  <span
                    className="text-[#c9a55a] text-sm tracking-[0.15em] shrink-0 w-8 pt-0.5"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    {step.num}
                  </span>
                  <div>
                    <h3
                      className="text-[#312852] text-lg tracking-wide mb-2"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[#4a4a4a] text-base leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mt-10">
            <Link
              href="/flow"
              className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group"
            >
              葬儀の流れを詳しく見る
              <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* ─── FAQ（抜粋）────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#faf9f7] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
            <h2
              className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              よくあるご質問（抜粋）
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <StaggerContainer className="divide-y divide-[#e8ddf4]">
            {faqs.map((faq, i) => (
              <StaggerItem key={i}>
                <div className="py-7">
                  <div className="flex gap-4 mb-3">
                    <span className="text-[#9278be] font-bold text-base shrink-0">Q</span>
                    <p
                      className="text-[#312852] text-base md:text-lg leading-relaxed"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      {faq.q}
                    </p>
                  </div>
                  <div className="flex gap-4 pl-0 ml-8">
                    <p className="text-[#4a4a4a] text-base leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mt-10">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group"
            >
              よくある質問をすべて見る
              <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <div className="flex flex-col items-center gap-1.5 mb-8">
              <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#c9a55a]" />
              <div className="w-1.5 h-1.5 border border-[#c9a55a] rotate-45" />
            </div>
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-4">CONTACT</p>
            <h2
              className="text-[#312852] text-2xl md:text-3xl tracking-[0.08em] leading-snug mb-5"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              まずは、お気軽にご相談ください。
            </h2>
            <p className="text-[#4a4a4a] text-base md:text-lg leading-loose mb-10 max-w-xl mx-auto">
              葬儀のことで不安なこと、分からないことがあれば、
              事前相談を含めてお気軽にお声がけください。
              稲垣屋葬儀店は、いつでもあなたのそばにいます。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:0336900870"
                className="inline-flex items-center gap-3 bg-[#5c4a80] hover:bg-[#453869] text-white px-10 py-5 text-base tracking-wider transition-colors duration-300 group w-full sm:w-auto justify-center"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                <Phone size={18} className="text-[#dfc07e]" />
                03-3690-0870
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-[#9278be] text-[#5c4a80] hover:bg-[#ede7f6] px-10 py-5 text-base tracking-wider transition-colors duration-300 group w-full sm:w-auto justify-center"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                <MessageCircle size={18} />
                お問い合わせフォーム
                <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
