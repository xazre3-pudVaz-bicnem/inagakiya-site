import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { allColumns } from "../../data/columns";
import { CATEGORY_ORDER, CATEGORY_LABELS, CATEGORY_RELATED_PAGES } from "../../types/column";
import PageHero from "../components/PageHero";
import Breadcrumb from "../components/Breadcrumb";
import { FadeInUp } from "../components/AnimatedSection";

export const metadata: Metadata = {
  title: "葬儀専門コラム｜葛飾区の葬儀情報｜稲垣屋葬儀店",
  description:
    "葛飾区の稲垣屋葬儀店による葬儀専門コラム。葬儀の基礎知識・家族葬・費用・区民葬儀・流れ・マナー・事前相談・堀切など地域情報まで、初めての方にも分かりやすく解説します。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/column" },
};

const columnPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "葬儀専門コラム｜稲垣屋葬儀店",
  description: "葛飾区の稲垣屋葬儀店による葬儀専門コラム一覧",
  url: "https://www.inagakiyasougiten.com/column",
};

const FEATURED_SLUGS = [
  "katsushika-funeral-first-guide",
  "what-to-do-after-death-katsushika",
  "funeral-home-choice-katsushika",
  "family-funeral-katsushika",
  "funeral-cost-katsushika",
  "kumin-funeral-katsushika",
];

const FIXED_PAGE_LINKS = [
  { label: "葛飾区で葬儀をお考えの方へ", href: "/katsushika-funeral" },
  { label: "葬儀プランを比較する", href: "/plans" },
  { label: "葬儀費用について", href: "/cost" },
  { label: "葬儀の流れを確認する", href: "/flow" },
  { label: "事前相談について", href: "/consultation" },
  { label: "よくある質問", href: "/faq" },
];

export default function ColumnPage() {
  const recentColumns = allColumns
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 10);
  const featuredColumns = FEATURED_SLUGS.map((slug) =>
    allColumns.find((c) => c.slug === slug)
  ).filter(Boolean);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(columnPageJsonLd) }}
      />
      <PageHero
        title="専門コラム"
        subtitle="葛飾区の葬儀に関する専門情報"
        en="COLUMN"
      />
      <Breadcrumb items={[{ label: "専門コラム" }]} />

      <div className="bg-[#faf9f7] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-20">

          {/* Category navigation */}
          <FadeInUp>
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">CATEGORY</p>
            <h2
              className="text-[#312852] text-2xl tracking-wide mb-2"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              カテゴリーから探す
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mb-8" />
            <ul className="divide-y divide-[#e8ddf4] border border-[#e8ddf4] bg-white">
              {CATEGORY_ORDER.map((cat) => {
                const count = allColumns.filter((c) => c.category === cat).length;
                return (
                  <li key={cat}>
                    <Link
                      href={`/column/category/${cat}`}
                      className="flex items-center justify-between px-6 py-4 hover:bg-[#faf7fd] transition-colors group"
                    >
                      <span
                        className="text-[#312852] tracking-wide"
                        style={{ fontFamily: "var(--font-mincho)" }}
                      >
                        {CATEGORY_LABELS[cat]}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="text-[#9278be] text-xs">{count}記事</span>
                        <ChevronRight
                          size={14}
                          className="text-[#c9a55a] group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </FadeInUp>

          {/* Featured columns */}
          {featuredColumns.length > 0 && (
            <FadeInUp>
              <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FEATURED</p>
              <h2
                className="text-[#312852] text-2xl tracking-wide mb-2"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                おすすめ記事
              </h2>
              <div className="w-8 h-px bg-[#c9a55a] mb-8" />
              <ul className="divide-y divide-[#e8ddf4]">
                {featuredColumns.map(
                  (col) =>
                    col && (
                      <li key={col.slug}>
                        <Link
                          href={`/column/${col.slug}`}
                          className="flex items-start justify-between py-5 gap-4 hover:text-[#5c4a80] transition-colors group"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-1.5">
                              <span className="text-[#9278be] text-xs tracking-wide border border-[#d5c6eb] px-2 py-0.5 shrink-0">
                                {CATEGORY_LABELS[col.category]}
                              </span>
                              <time className="text-[#9278be] text-xs">
                                {col.date.replace(/-/g, ".")}
                              </time>
                            </div>
                            <p
                              className="text-[#312852] text-base leading-snug group-hover:text-[#5c4a80] transition-colors"
                              style={{ fontFamily: "var(--font-mincho)" }}
                            >
                              {col.title}
                            </p>
                          </div>
                          <ChevronRight
                            size={14}
                            className="text-[#c9a55a] mt-1.5 shrink-0 group-hover:translate-x-1 transition-transform"
                          />
                        </Link>
                      </li>
                    )
                )}
              </ul>
            </FadeInUp>
          )}

          {/* Recent columns */}
          {recentColumns.length > 0 && (
            <FadeInUp>
              <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">RECENT</p>
              <h2
                className="text-[#312852] text-2xl tracking-wide mb-2"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                最新のコラム
              </h2>
              <div className="w-8 h-px bg-[#c9a55a] mb-8" />
              <ul className="divide-y divide-[#e8ddf4]">
                {recentColumns.map((col) => (
                  <li key={col.slug}>
                    <Link
                      href={`/column/${col.slug}`}
                      className="flex items-start justify-between py-5 gap-4 hover:text-[#5c4a80] transition-colors group"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-1.5">
                          <span className="text-[#9278be] text-xs tracking-wide border border-[#d5c6eb] px-2 py-0.5 shrink-0">
                            {CATEGORY_LABELS[col.category]}
                          </span>
                          <time className="text-[#9278be] text-xs">
                            {col.date.replace(/-/g, ".")}
                          </time>
                        </div>
                        <p
                          className="text-[#312852] text-base leading-snug group-hover:text-[#5c4a80] transition-colors"
                          style={{ fontFamily: "var(--font-mincho)" }}
                        >
                          {col.title}
                        </p>
                      </div>
                      <ChevronRight
                        size={14}
                        className="text-[#c9a55a] mt-1.5 shrink-0 group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeInUp>
          )}

          {/* All columns by category */}
          {CATEGORY_ORDER.map((cat) => {
            const cols = allColumns.filter((c) => c.category === cat);
            if (cols.length === 0) return null;
            return (
              <FadeInUp key={cat}>
                <div className="flex items-baseline justify-between mb-2">
                  <div>
                    <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-2">
                      {cat.replace(/-/g, " ").toUpperCase()}
                    </p>
                    <h2
                      className="text-[#312852] text-xl tracking-wide"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      {CATEGORY_LABELS[cat]}
                    </h2>
                  </div>
                  <Link
                    href={`/column/category/${cat}`}
                    className="text-[#7560a0] text-sm hover:text-[#5c4a80] transition-colors tracking-wide shrink-0"
                  >
                    一覧を見る →
                  </Link>
                </div>
                <div className="w-8 h-px bg-[#c9a55a] mb-6 mt-3" />
                <ul className="divide-y divide-[#e8ddf4]">
                  {cols.map((col) => (
                    <li key={col.slug}>
                      <Link
                        href={`/column/${col.slug}`}
                        className="flex items-center justify-between py-4 hover:text-[#5c4a80] transition-colors group"
                      >
                        <p
                          className="text-[#312852] text-sm leading-snug group-hover:text-[#5c4a80] transition-colors"
                          style={{ fontFamily: "var(--font-mincho)" }}
                        >
                          {col.title}
                        </p>
                        <ChevronRight
                          size={13}
                          className="text-[#c9a55a] shrink-0 ml-3 group-hover:translate-x-1 transition-transform"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </FadeInUp>
            );
          })}

          {/* Fixed page links */}
          <FadeInUp>
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">RELATED PAGES</p>
            <h2
              className="text-[#312852] text-xl tracking-wide mb-2"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              詳細な情報はこちらから
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mb-6" />
            <ul className="divide-y divide-[#e8ddf4] border border-[#e8ddf4] bg-white">
              {FIXED_PAGE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center justify-between px-6 py-4 hover:bg-[#faf7fd] transition-colors group"
                  >
                    <span className="text-[#312852] text-sm tracking-wide">{link.label}</span>
                    <ChevronRight
                      size={13}
                      className="text-[#c9a55a] group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </FadeInUp>

        </div>
      </div>
    </>
  );
}
