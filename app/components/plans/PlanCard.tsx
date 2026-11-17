import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Users } from "lucide-react";
import { type FuneralPlan, planDisplayName } from "@/data/plans";

interface PlanCardProps {
  plan: FuneralPlan;
  /** カードのリンク先（省略時は /plans のプラン詳細アンカー） */
  href?: string;
  headingLevel?: "h3" | "h4";
}

/**
 * 料金プランの一覧用カード（写真・プラン名・参列者数目安・料金）。
 */
export default function PlanCard({ plan, href, headingLevel = "h3" }: PlanCardProps) {
  const Heading = headingLevel;
  const target = href ?? `/plans#plan-${plan.slug}`;

  return (
    <Link
      href={target}
      className="group flex min-w-0 h-full rounded-sm shadow-[0_4px_20px_-12px_#31285226] flex-col overflow-hidden border border-[#e8ddf4] bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#d5c6eb] hover:shadow-[0_24px_48px_-32px_rgba(49,40,82,0.6)]"
    >
      <div className="relative aspect-[1050/418] overflow-hidden bg-[#f4eef9]">
        <Image
          src={plan.photo.src}
          width={plan.photo.width}
          height={plan.photo.height}
          alt={`${planDisplayName(plan)}のイメージ`}
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <span className="absolute left-0 top-4 bg-[#5c4a80]/92 px-3.5 py-1.5 text-sm tracking-[0.12em] text-white">
          {plan.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-6 pt-5 md:px-6">
        <p className="text-sm tracking-[0.18em] text-[#a8853f]">{plan.type}</p>
        <Heading
          className="mt-1 text-2xl tracking-[0.14em] text-[#312852] transition-colors group-hover:text-[#5c4a80]"
          style={{ fontFamily: "var(--font-mincho)" }}
        >
          {plan.category === "直葬" ? "直葬プラン" : plan.name}
          {plan.reading && (
            <span className="ml-2 align-middle text-sm tracking-[0.1em] text-[#7560a0]">{plan.reading}</span>
          )}
        </Heading>

        <div className="mt-auto pt-5">
          <div className="flex flex-col items-start gap-4 border-t border-[#e8ddf4] pt-4">
            <p className="flex items-center gap-1.5 text-sm text-[#4a4a4a]">
              <Users size={15} className="text-[#7560a0]" aria-hidden="true" />
              参列者数目安 {plan.attendees}
            </p>
            <p
              className="whitespace-nowrap text-[2rem] leading-none tracking-wide text-[#5c4a80]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              {plan.price.toLocaleString("ja-JP")}
              <span className="ml-0.5 text-base">円{plan.priceFrom ? "〜" : ""}</span>
            </p>
          </div>
          <p className="mt-4 inline-flex items-center gap-1 text-sm tracking-wide text-[#7560a0] group-hover:text-[#312852]">
            プランの内容を見る
            <ChevronRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </p>
        </div>
      </div>
    </Link>
  );
}
