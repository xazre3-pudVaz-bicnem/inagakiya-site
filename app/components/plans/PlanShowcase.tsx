import Link from "next/link";
import { CalendarDays, Check, ChevronRight, MessageCircle, Users } from "lucide-react";
import { type FuneralPlan, planImageAlt } from "@/data/plans";
import PlanFlyerImage from "./PlanFlyerImage";
import KuminLink from "../KuminLink";

interface PlanShowcaseProps {
  plan: FuneralPlan;
  /** 葬儀形式ページへのリンクを表示するか（形式ページ内で使う場合は false） */
  showStyleLink?: boolean;
  headingLevel?: "h2" | "h3";
  /** 画像を右側に配置 */
  reverse?: boolean;
}

/**
 * プラン画像（チラシ）と、その内容をテキストで整理した詳細ブロック。
 * 画像の内容をテキストでも掲載することで、検索エンジン・読み上げにも内容が伝わるようにしている。
 */
export default function PlanShowcase({
  plan,
  showStyleLink = true,
  headingLevel = "h3",
  reverse = false,
}: PlanShowcaseProps) {
  const Heading = headingLevel;
  const title = plan.category === "直葬" ? "直葬プラン" : plan.name;

  return (
    <article
      id={`plan-${plan.slug}`}
      className={`scroll-mt-28 grid items-start gap-8 rounded-sm border border-[#e8ddf4] bg-white p-5 shadow-[0_12px_40px_-28px_#31285240] sm:p-8 md:gap-12 ${
        // 画像を右側に置くときも「画像=狭い列／本文=広い列」を保つ
        reverse ? "md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]" : "md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
      }`}
    >
      <div className={reverse ? "md:order-2" : ""}>
        <PlanFlyerImage
          src={plan.image.src}
          width={plan.image.width}
          height={plan.image.height}
          alt={planImageAlt(plan)}
          sizes="(min-width: 1024px) 400px, (min-width: 768px) 40vw, 100vw"
        />
      </div>

      <div>
        <p className="text-sm tracking-[0.2em] text-[#a8853f]">― {plan.type} ―</p>
        <Heading
          className="mt-2 text-3xl tracking-[0.16em] text-[#312852] md:text-4xl"
          style={{ fontFamily: "var(--font-mincho)" }}
        >
          {title}
          {plan.reading && (
            <span className="ml-3 align-middle text-base tracking-[0.12em] text-[#7560a0]">{plan.reading}</span>
          )}
        </Heading>
        <p className="mt-4 text-base leading-loose text-[#4a4a4a] md:text-lg">{plan.catchcopy}</p>

        <dl className="mt-6 grid grid-cols-1 gap-px overflow-hidden border border-[#e8ddf4] bg-[#e8ddf4] xl:grid-cols-2">
          <div className="bg-[#faf7fd] px-5 py-4">
            <dt className="flex items-center gap-1.5 text-sm tracking-wider text-[#7560a0]">
              <Users size={15} aria-hidden="true" />
              参列者数目安
            </dt>
            <dd className="mt-1 text-2xl tracking-wide text-[#312852]" style={{ fontFamily: "var(--font-mincho)" }}>
              {plan.attendees}
            </dd>
          </div>
          <div className="bg-[#faf7fd] px-5 py-4">
            <dt className="text-sm tracking-wider text-[#7560a0]">プラン料金</dt>
            <dd className="mt-1 text-[2rem] leading-tight tracking-wide text-[#5c4a80]" style={{ fontFamily: "var(--font-mincho)" }}>
              {plan.price.toLocaleString("ja-JP")}
              <span className="ml-0.5 text-lg">円{plan.priceFrom ? "〜" : ""}</span>
            </dd>
          </div>
        </dl>

        <div className="mt-7">
          <p className="flex items-center gap-3 text-sm tracking-[0.2em] text-[#7560a0]">
            <span className="h-px w-6 bg-[#c9a55a]" aria-hidden="true" />
            プランに含まれるもの（{plan.items.length}項目）
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {plan.items.map((item) => (
              <li
                key={item}
                className="inline-flex max-w-full items-center gap-1.5 rounded-sm border border-[#e8ddf4] bg-white px-3 py-1.5 text-sm text-[#312852]"
              >
                <Check size={13} className="shrink-0 text-[#7560a0]" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-6 space-y-2 text-base text-[#4a4a4a]">
          {plan.oneDay && (
            <li className="flex items-start gap-2">
              <CalendarDays size={18} className="mt-1 shrink-0 text-[#c9a55a]" aria-hidden="true" />
              <span>
                お通夜を行わない
                <Link
                  href="/plans/oneday-funeral"
                  className="mx-0.5 text-[#5c4a80] underline decoration-[#c9a55a] underline-offset-[5px] hover:text-[#312852]"
                >
                  1日葬儀（一日葬）
                </Link>
                にも対応可能です
              </span>
            </li>
          )}
          {plan.kumin && (
            <li className="flex items-start gap-2">
              <Check size={18} className="mt-1 shrink-0 text-[#c9a55a]" aria-hidden="true" />
              <span>
                <KuminLink />
                を利用可能です
              </span>
            </li>
          )}
        </ul>

        <div className="mt-8 flex flex-col flex-wrap gap-3 xl:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#5c4a80] px-6 py-3.5 text-base tracking-wider text-white transition-colors hover:bg-[#453869]"
          >
            <MessageCircle size={17} aria-hidden="true" />
            このプランを相談する
          </Link>
          {showStyleLink && (
            <Link
              href={plan.href}
              className="group inline-flex items-center justify-center gap-1.5 border border-[#d5c6eb] px-6 py-3.5 text-base tracking-wider text-[#5c4a80] transition-colors hover:bg-[#f4eef9]"
            >
              {plan.styleLabel}について詳しく
              <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
