import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { allColumns } from "../../../../data/columns";
import {
  CATEGORY_ORDER,
  CATEGORY_LABELS,
  CATEGORY_RELATED_PAGES,
  type ColumnCategory,
} from "../../../../types/column";
import PageHero from "../../../components/PageHero";
import Breadcrumb from "../../../components/Breadcrumb";
import { FadeInUp } from "../../../components/AnimatedSection";

export function generateStaticParams() {
  return CATEGORY_ORDER.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  if (!CATEGORY_ORDER.includes(category as ColumnCategory)) return {};
  const cat = category as ColumnCategory;
  const label = CATEGORY_LABELS[cat];
  return {
    title: `${label}のコラム一覧｜葛飾区の葬儀専門コラム｜稲垣屋葬儀店`,
    description: `稲垣屋葬儀店の専門コラム「${label}」の記事一覧。葛飾区の葬儀に関する専門情報をご覧ください。`,
    alternates: {
      canonical: `https://www.inagakiyasougiten.com/column/category/${category}`,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  if (!CATEGORY_ORDER.includes(category as ColumnCategory)) notFound();

  const cat = category as ColumnCategory;
  const cols = allColumns.filter((c) => c.category === cat);
  const relatedPages = CATEGORY_RELATED_PAGES[cat];
  const label = CATEGORY_LABELS[cat];

  const collectionPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${label}のコラム一覧｜葛飾区の葬儀専門コラム｜稲垣屋葬儀店`,
    description: `稲垣屋葬儀店の専門コラム「${label}」の記事一覧。葛飾区の葬儀に関する専門情報をご覧ください。`,
    url: `https://www.inagakiyasougiten.com/column/category/${cat}`,
    isPartOf: {
      "@type": "WebSite",
      name: "稲垣屋葬儀店",
      url: "https://www.inagakiyasougiten.com",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.inagakiyasougiten.com" },
      { "@type": "ListItem", position: 2, name: "専門コラム", item: "https://www.inagakiyasougiten.com/column" },
      { "@type": "ListItem", position: 3, name: label, item: `https://www.inagakiyasougiten.com/column/category/${cat}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHero title={label} subtitle="葛飾区の葬儀専門コラム" en="COLUMN" />
      <Breadcrumb
        items={[
          { label: "専門コラム", href: "/column" },
          { label: label },
        ]}
      />

      <div className="bg-[#faf9f7] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-16">

          <FadeInUp>
            {cols.length === 0 ? (
              <p className="text-[#4a4a4a] text-base">
                このカテゴリーの記事は準備中です。
              </p>
            ) : (
              <ul className="divide-y divide-[#e8ddf4]">
                {cols.map((col) => (
                  <li key={col.slug}>
                    <Link
                      href={`/column/${col.slug}`}
                      className="flex items-start justify-between py-5 gap-4 hover:text-[#5c4a80] transition-colors group"
                    >
                      <div className="flex-1 min-w-0">
                        <time className="text-[#9278be] text-xs block mb-1.5">
                          {col.date.replace(/-/g, ".")}
                        </time>
                        <p
                          className="text-[#312852] text-base leading-snug group-hover:text-[#5c4a80] transition-colors"
                          style={{ fontFamily: "var(--font-mincho)" }}
                        >
                          {col.title}
                        </p>
                        <p className="text-[#4a4a4a] text-sm mt-1.5 leading-relaxed line-clamp-2">
                          {col.description}
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
            )}
          </FadeInUp>

          {/* Related fixed pages */}
          <FadeInUp>
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">RELATED PAGES</p>
            <h2
              className="text-[#312852] text-xl tracking-wide mb-2"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              関連する詳細ページ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mb-6" />
            <ul className="divide-y divide-[#e8ddf4] border border-[#e8ddf4] bg-white">
              {relatedPages.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="flex items-center justify-between px-6 py-4 hover:bg-[#faf7fd] transition-colors group"
                  >
                    <span className="text-[#312852] text-sm tracking-wide">
                      {p.label}
                    </span>
                    <ChevronRight
                      size={13}
                      className="text-[#c9a55a] group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </FadeInUp>

          {/* Column index link */}
          <div className="text-center">
            <Link
              href="/column"
              className="inline-flex items-center gap-2 border border-[#9278be] text-[#5c4a80] hover:bg-[#faf7fd] px-8 py-3 tracking-wider transition-colors"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              専門コラム一覧へ戻る
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
