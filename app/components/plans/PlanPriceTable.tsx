import Link from "next/link";
import { funeralPlans, PLAN_PRICE_NOTE, type FuneralPlan } from "@/data/plans";
import KuminLink from "../KuminLink";

interface PlanPriceTableProps {
  plans?: FuneralPlan[];
  /** 表示するプランを slug で絞り込む（例: ["tanpopo", "shiragiku", "shoubu"]） */
  slugs?: string[];
  /** プラン名を /plans のアンカーへリンクするか */
  linkToPlans?: boolean;
  caption?: string;
}

const CHECK_ITEMS = ["花祭壇", "骨壺", "遺影写真", "ドライアイス10kg", "受付用品", "自宅飾り用祭壇"] as const;

/**
 * 料金プランの比較表（テキスト）。費用ページ・プランページで共通利用。
 */
export default function PlanPriceTable({
  plans: plansProp,
  slugs,
  linkToPlans = true,
  caption = "稲垣屋葬儀店の葬儀プラン料金一覧",
}: PlanPriceTableProps) {
  const plans = (plansProp ?? funeralPlans).filter((p) => !slugs || slugs.includes(p.slug));
  return (
    <div>
      <div role="region" aria-label={caption} tabIndex={0} className="plan-table-scroll overflow-x-auto rounded-sm border border-[#e8ddf4] bg-white shadow-[0_6px_24px_-20px_#31285240]">
        <table className="w-full min-w-[800px] border-collapse text-left text-base">
          <caption className="sr-only">{caption}</caption>
          <thead>
            {/* 見出し・短い列は折り返さない（主な内容の列が残りの幅を使う） */}
            <tr className="whitespace-nowrap bg-[#f4eef9] text-sm tracking-wider text-[#5c4a80]">
              <th scope="col" className="min-w-40 px-5 py-4 font-medium">プラン</th>
              <th scope="col" className="px-5 py-4 font-medium">参列者数目安</th>
              <th scope="col" className="px-5 py-4 text-right font-medium">料金</th>
              <th scope="col" className="px-5 py-4 font-medium">主な内容</th>
              <th scope="col" className="px-5 py-4 text-center font-medium">一日葬</th>
              <th scope="col" className="px-5 py-4 text-center font-medium">区民葬儀</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e8ddf4]">
            {plans.map((plan) => {
              const label = plan.category === "直葬" ? "直葬プラン" : plan.name;
              const highlights = CHECK_ITEMS.filter((i) => plan.items.includes(i));
              return (
                <tr key={plan.slug} className="align-top transition-colors hover:bg-[#faf7fd]">
                  <th scope="row" className="whitespace-nowrap px-5 py-5 font-normal">
                    {linkToPlans ? (
                      <Link
                        href={`/plans#plan-${plan.slug}`}
                        className="text-lg tracking-[0.1em] text-[#312852] underline decoration-[#e8ddf4] underline-offset-[6px] hover:text-[#5c4a80] hover:decoration-[#c9a55a]"
                        style={{ fontFamily: "var(--font-mincho)" }}
                      >
                        {label}
                      </Link>
                    ) : (
                      <span className="text-lg tracking-[0.1em] text-[#312852]" style={{ fontFamily: "var(--font-mincho)" }}>
                        {label}
                      </span>
                    )}
                    <span className="mt-0.5 block text-sm text-[#7560a0]">{plan.type}</span>
                  </th>
                  <td className="whitespace-nowrap px-5 py-5 text-[#4a4a4a]">{plan.attendees}</td>
                  <td
                    className="whitespace-nowrap px-5 py-5 text-right text-xl text-[#5c4a80]"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    {plan.price.toLocaleString("ja-JP")}
                    <span className="text-sm">円{plan.priceFrom ? "〜" : ""}</span>
                  </td>
                  <td className="min-w-56 px-5 py-5 text-sm leading-relaxed text-[#4a4a4a]">
                    {highlights.length > 0 ? `${highlights.join("・")} ほか全${plan.items.length}項目` : plan.items.join("・")}
                  </td>
                  <td className="whitespace-nowrap px-5 py-5 text-center text-[#4a4a4a]">{plan.oneDay ? "対応" : "―"}</td>
                  <td className="whitespace-nowrap px-5 py-5 text-center text-[#4a4a4a]">利用可</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-[#6b6080]">
        ※全プランで<KuminLink className="mx-0.5" />をご利用いただけます。
        <br />
        {PLAN_PRICE_NOTE}
      </p>
    </div>
  );
}
