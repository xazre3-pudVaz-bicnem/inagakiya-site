"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, ChevronRight } from "lucide-react";
import Link from "next/link";
import PageHero from "../components/PageHero";
import Breadcrumb from "../components/Breadcrumb";
import { FadeInUp } from "../components/AnimatedSection";
import { faqs } from "./faqData";
import RelatedColumns from "../components/RelatedColumns";

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#e8ddf4] last:border-b-0">
      <button
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <div className="flex gap-4 flex-1">
          <span className="text-[#9278be] font-bold text-lg shrink-0 w-5">Q</span>
          <span className="text-[#312852] text-base leading-relaxed" style={{ fontFamily: "var(--font-mincho)" }}>
            {q}
          </span>
        </div>
        <ChevronDown
          size={18}
          className={`text-[#9278be] shrink-0 mt-1 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="flex gap-4 pb-5 pt-1">
              <span className="text-[#c9a55a] font-bold text-lg shrink-0 w-5">A</span>
              <p className="text-[#4a4a4a] text-base leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqClient() {
  const totalQuestions = faqs.reduce((sum, cat) => sum + cat.items.length, 0);

  return (
    <>
      <PageHero
        title="よくある質問"
        subtitle="葬儀に関するよくある疑問にお答えします"
        en="FAQ"
      />
      <Breadcrumb items={[{ label: "よくある質問" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FREQUENTLY ASKED QUESTIONS</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              よくあるご質問
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
            <p className="text-[#4a4a4a] mt-5 text-base leading-relaxed">
              葬儀に関する疑問を18のカテゴリー・{totalQuestions}問にまとめました。解決しない場合はお気軽にお問い合わせください。
            </p>
          </FadeInUp>

          <div className="space-y-12">
            {faqs.map((category) => (
              <FadeInUp key={category.category}>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-[#312852] text-lg tracking-wide" style={{ fontFamily: "var(--font-mincho)" }}>
                      {category.category}
                    </h3>
                    <div className="flex-1 h-px bg-[#e8ddf4]" />
                  </div>
                  <div>
                    {category.items.map((item) => (
                      <FaqItem key={item.q} q={item.q} a={item.a} />
                    ))}
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* 関連コラム */}
      <section className="py-14 md:py-20 bg-white border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-7">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">COLUMN</p>
            <h2 className="text-[#312852] text-xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              関連コラム
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-4" />
          </FadeInUp>
          <RelatedColumns slugs={["katsushika-funeral-first-guide", "funeral-cost-katsushika", "family-funeral-katsushika", "kumin-funeral-katsushika", "funeral-consultation"]} />
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              ご不明な点はお気軽にお問い合わせください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              こちらに記載のない疑問も、どうぞお気軽にご相談ください。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 group w-full sm:w-auto justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
                <MessageCircle size={17} />お問い合わせ・ご相談<ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/consultation" className="inline-flex items-center gap-2 border border-[#9278be] text-[#5c4a80] hover:bg-[#ede7f6] px-8 py-4 tracking-wider transition-colors duration-300 w-full sm:w-auto justify-center" style={{ fontFamily: "var(--font-mincho)" }}>
                事前相談について
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
