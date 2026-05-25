"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, ChevronRight } from "lucide-react";
import Link from "next/link";
import PageHero from "../components/PageHero";
import { FadeInUp } from "../components/AnimatedSection";

const faqs = [
  {
    category: "緊急・対応",
    items: [
      {
        q: "急に亡くなった場合、夜中でも連絡できますか？",
        a: "はい、24時間365日対応しております。深夜・早朝・休日を問わず、いつでもお電話ください。まずはご連絡いただければ、次のステップを丁寧にご案内します。",
      },
      {
        q: "連絡してからどのくらいで来てもらえますか？",
        a: "葛飾区・堀切周辺であれば迅速に対応いたします。ご連絡後、状況を確認して最短でお伺いします。",
      },
      {
        q: "病院で亡くなった場合はどうすればよいですか？",
        a: "病院でご逝去された場合は、まず稲垣屋葬儀店にご連絡ください。病院からご自宅または安置施設へのお迎えの手配からサポートいたします。",
      },
    ],
  },
  {
    category: "費用・プラン",
    items: [
      {
        q: "費用はどれくらいかかりますか？",
        a: "葬儀の形式・規模・ご要望によって異なります。家族葬・一日葬・火葬式・一般葬など、プランによって費用は変わります。まずは事前相談で概算をお伝えすることが可能ですので、お気軽にご相談ください。",
      },
      {
        q: "区民葬儀とはなんですか？費用はどれくらい安くなりますか？",
        a: "区民葬儀は葛飾区が設けた制度で、葛飾区民の方が利用できます。稲垣屋葬儀店は区民葬儀取扱店として、通常よりも費用を抑えた葬儀を提供しています。詳細はお問い合わせください。",
      },
      {
        q: "支払いはどのような方法がありますか？",
        a: "現金払い・振込など、ご相談に応じて対応しております。費用については事前に明確にご提示しますので、ご安心ください。",
      },
      {
        q: "見積もりは無料ですか？",
        a: "はい、お見積もりは無料です。事前相談の際にも概算をご提示することが可能です。",
      },
    ],
  },
  {
    category: "葬儀のスタイル",
    items: [
      {
        q: "家族だけで小さな葬儀を行いたいのですが？",
        a: "家族葬・火葬式など、ご家族だけでゆっくりとお別れできるプランをご用意しています。参列者の人数・ご希望に合わせて最適なプランをご提案します。お気軽にご相談ください。",
      },
      {
        q: "お通夜はしなければなりませんか？",
        a: "お通夜は必須ではありません。一日葬（お通夜なし）や火葬式（通夜・告別式なし）など、お通夜を省略したプランもご用意しています。",
      },
      {
        q: "宗教・宗派は問いますか？",
        a: "仏式・神式・キリスト教式・無宗教など、各宗教・宗派に対応しています。また、特定の宗教にとらわれない無宗教葬も承っています。ご希望をお伝えください。",
      },
    ],
  },
  {
    category: "事前相談",
    items: [
      {
        q: "事前に相談や見学はできますか？",
        a: "はい、事前相談は無料で承っております。「もしものとき」に備えて、費用や流れを事前にご確認いただけます。強引な勧誘は一切いたしませんので、安心してご相談ください。",
      },
      {
        q: "どのタイミングで相談するのが良いですか？",
        a: "「もしものとき」はいつ訪れるか分かりません。元気なうちに事前相談していただくことで、いざというときに慌てずに対応できます。親御様の高齢化が進んでいる方などは、早めのご相談をおすすめします。",
      },
      {
        q: "相談したからといって、必ず依頼しなければなりませんか？",
        a: "いいえ、事前相談は情報収集・確認のためのものです。相談したからといって、必ずご依頼いただく義務はありません。安心してご相談ください。",
      },
    ],
  },
  {
    category: "葬儀後",
    items: [
      {
        q: "葬儀後の法要についても対応していますか？",
        a: "はい、四十九日・一周忌などの法要についてもご相談承っています。お寺との連絡調整など、アフターサポートも充実しています。",
      },
      {
        q: "葬儀後の手続き（死亡届など）についても教えてもらえますか？",
        a: "はい、死亡届の提出など葬儀後の手続きについても、アドバイスいたします。どうぞお気軽にご相談ください。",
      },
    ],
  },
];

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

export default function FaqPage() {
  return (
    <>
      <PageHero
        title="よくある質問"
        subtitle="葬儀に関するよくある疑問にお答えします"
        en="FAQ"
      />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FREQUENTLY ASKED QUESTIONS</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              よくあるご質問
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
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

      <section className="py-14 md:py-20 bg-[#f4eef9] border-t border-[#e8ddf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-[#312852] text-2xl tracking-[0.08em] mb-5" style={{ fontFamily: "var(--font-mincho)" }}>
              ご不明な点はお気軽にお問い合わせください
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8">
              こちらに記載のない疑問も、どうぞお気軽にご相談ください。
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300 group" style={{ fontFamily: "var(--font-mincho)" }}>
              <MessageCircle size={17} />
              お問い合わせ・ご相談
              <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
