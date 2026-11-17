import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { allColumns } from "../../data/columns";
import { CATEGORY_LABELS } from "../../types/column";

interface RelatedColumnsProps {
  slugs: string[];
  title?: string;
  maxItems?: number;
}

export default function RelatedColumns({
  slugs,
  title = "関連コラム",
  maxItems = 5,
}: RelatedColumnsProps) {
  const columns = slugs
    .map((slug) => allColumns.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => c !== undefined)
    .slice(0, maxItems);

  if (columns.length === 0) return null;

  return (
    <div className="rounded-sm border border-[#e8ddf4] border-t-2 border-t-[#c9a55a] bg-white p-5 sm:p-7">
      <p className="text-[#453869] text-base tracking-[0.15em] mb-4">{title}</p>
      <ul className="divide-y divide-[#f4eef9]">
        {columns.map((col) => (
          <li key={col.slug}>
            <Link
              href={`/column/${col.slug}`}
              className="flex items-start gap-3 rounded-sm px-2 py-4 group hover:bg-[#faf7fd] transition-colors"
            >
              <ChevronRight
                size={12}
                className="text-[#c9a55a] mt-1 shrink-0"
              />
              <div>
                <span className="text-[#7560a0] text-xs block mb-0.5">
                  {CATEGORY_LABELS[col.category]}
                </span>
                <span
                  className="text-[#312852] text-base leading-relaxed group-hover:text-[#5c4a80] transition-colors"
                  style={{ fontFamily: "var(--font-mincho)" }}
                >
                  {col.title}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-4 pt-3 border-t border-[#e8ddf4]">
        <Link
          href="/column"
          className="text-[#7560a0] text-xs hover:text-[#5c4a80] transition-colors tracking-wide"
        >
          コラム一覧を見る →
        </Link>
      </div>
    </div>
  );
}
