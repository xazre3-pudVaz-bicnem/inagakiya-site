import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { FadeInUp } from "../AnimatedSection";
import PlanShowcase from "./PlanShowcase";
import { funeralPlans, PLAN_PRICE_NOTE, plansItemListJsonLd } from "@/data/plans";

interface PlanSectionProps {
  /** 表示するプランの slug */
  slugs: string[];
  title: string;
  lead?: React.ReactNode;
  en?: string;
  /** 葬儀形式ページ内で使う場合は false（自ページへのリンクを出さない） */
  showStyleLink?: boolean;
  className?: string;
}

/**
 * 葬儀形式ページ（家族葬・火葬式など）に該当プランの内容・料金を掲載するセクション。
 * 該当プランの Product / Offer 構造化データも出力する。
 */
export default function PlanSection({
  slugs,
  title,
  lead,
  en = "PLAN & PRICE",
  showStyleLink = false,
  className = "",
}: PlanSectionProps) {
  const plans = funeralPlans.filter((p) => slugs.includes(p.slug));
  if (plans.length === 0) return null;

  return (
    <section className={`border-b border-[#e8ddf4] bg-[#faf9f7] py-20 md:py-28 ${className}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(plansItemListJsonLd(plans, title)) }}
      />
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <FadeInUp className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm tracking-[0.4em] text-[#a8853f]">{en}</p>
          <h2 className="text-[1.75rem] tracking-[0.08em] text-[#312852] md:text-4xl" style={{ fontFamily: "var(--font-mincho)" }}>
            {title}
          </h2>
          <div className="mt-5 h-px w-8 bg-[#c9a55a]" />
          {lead && <p className="mt-5 text-base leading-loose text-[#4a4a4a] md:text-lg">{lead}</p>}
        </FadeInUp>

        <div className="space-y-8">
          {plans.map((plan, i) => (
            <div key={plan.slug} className="py-2">
              <FadeInUp>
                <PlanShowcase plan={plan} showStyleLink={showStyleLink} reverse={i % 2 === 1} />
              </FadeInUp>
            </div>
          ))}
        </div>

        <FadeInUp className="mt-12 border-t border-[#e8ddf4] pt-8">
          <p className="text-sm leading-relaxed text-[#6b6080]">{PLAN_PRICE_NOTE}</p>
          <Link
            href="/plans"
            className="group mt-5 inline-flex items-center gap-2 text-base tracking-wide text-[#5c4a80] transition-colors hover:text-[#312852]"
          >
            すべてのプラン・料金を比較する
            <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
}
