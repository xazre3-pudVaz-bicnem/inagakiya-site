import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { allColumns } from "../../../data/columns";
import { CATEGORY_LABELS, extractToc } from "../../../types/column";
import Breadcrumb from "../../components/Breadcrumb";
import RelatedColumns from "../../components/RelatedColumns";
import { FadeInUp } from "../../components/AnimatedSection";

export const dynamicParams = false;

export function generateStaticParams() {
  return allColumns.map((col) => ({ slug: col.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const col = allColumns.find((c) => c.slug === slug);
  if (!col) return {};

  return {
    title: `${col.title}｜稲垣屋葬儀店`,
    description: col.description,
    keywords: col.keywords,
    alternates: {
      canonical: `https://www.inagakiyasougiten.com/column/${slug}`,
    },
    openGraph: {
      title: col.title,
      description: col.description,
      type: "article",
      publishedTime: col.date,
      modifiedTime: col.updatedAt,
      siteName: "稲垣屋葬儀店",
      locale: "ja_JP",
      images: [
        {
          url: "https://www.inagakiyasougiten.com/hero-bg.jpg",
          width: 1200,
          height: 630,
          alt: col.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: col.title,
      description: col.description,
      images: ["https://www.inagakiyasougiten.com/hero-bg.jpg"],
    },
  };
}

export default async function ColumnDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const col = allColumns.find((c) => c.slug === slug);
  if (!col) notFound();

  const toc = extractToc(col.body);

  const BASE = "https://www.inagakiyasougiten.com";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: col.title,
    description: col.description,
    image: `${BASE}/hero-bg.jpg`,
    inLanguage: "ja",
    author: {
      "@type": "Organization",
      name: "稲垣屋葬儀店",
      url: BASE,
    },
    publisher: {
      "@type": "Organization",
      name: "稲垣屋葬儀店",
      url: BASE,
      logo: {
        "@type": "ImageObject",
        url: `${BASE}/hero-bg.jpg`,
      },
    },
    datePublished: col.date,
    dateModified: col.updatedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE}/column/${slug}`,
    },
    keywords: col.keywords.join(", "),
    articleSection: CATEGORY_LABELS[col.category],
    about: {
      "@type": "Thing",
      name: CATEGORY_LABELS[col.category],
    },
    isPartOf: {
      "@type": "WebSite",
      name: "稲垣屋葬儀店",
      url: BASE,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: BASE },
      { "@type": "ListItem", position: 2, name: "専門コラム", item: `${BASE}/column` },
      { "@type": "ListItem", position: 3, name: CATEGORY_LABELS[col.category], item: `${BASE}/column/category/${col.category}` },
      { "@type": "ListItem", position: 4, name: col.title, item: `${BASE}/column/${slug}` },
    ],
  };

  const faqJsonLd =
    col.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: col.faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* Article header */}
      <div className="pt-36 pb-12 bg-white border-b border-[#e8ddf4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Link
              href={`/column/category/${col.category}`}
              className="text-[#9278be] text-xs tracking-wide border border-[#d5c6eb] px-2 py-0.5 hover:bg-[#faf7fd] transition-colors"
            >
              {CATEGORY_LABELS[col.category]}
            </Link>
            <time className="text-[#9278be] text-xs">
              {col.date.replace(/-/g, ".")}
            </time>
            {col.updatedAt !== col.date && (
              <span className="text-[#b0a0c8] text-xs">
                更新 {col.updatedAt.replace(/-/g, ".")}
              </span>
            )}
          </div>
          <h1
            className="text-[#312852] text-2xl md:text-3xl tracking-[0.06em] leading-[1.7] mb-6"
            style={{ fontFamily: "var(--font-mincho)" }}
          >
            {col.title}
          </h1>
          <div className="w-8 h-px bg-[#c9a55a]" />
        </div>
      </div>

      <Breadcrumb
        items={[
          { label: "専門コラム", href: "/column" },
          {
            label: CATEGORY_LABELS[col.category],
            href: `/column/category/${col.category}`,
          },
          { label: col.title },
        ]}
      />

      <div className="bg-[#faf9f7] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_260px] gap-12">

            {/* Main content */}
            <div>
              {/* この記事で分かること */}
              <div className="border border-[#e8ddf4] bg-white px-6 py-5 mb-10">
                <p className="text-[#7560a0] text-xs tracking-[0.3em] mb-3">
                  この記事で分かること
                </p>
                <ul className="space-y-2">
                  {col.knowThis.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-[#312852] leading-relaxed"
                    >
                      <span className="text-[#c9a55a] mt-0.5 shrink-0">・</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* TOC */}
              {toc.length > 0 && (
                <div className="border border-[#e8ddf4] bg-white px-6 py-5 mb-10">
                  <p className="text-[#7560a0] text-xs tracking-[0.3em] mb-3">目次</p>
                  <ol className="space-y-1.5">
                    {toc.map((item) => (
                      <li key={item.id} className={item.level === 3 ? "ml-4" : ""}>
                        <a
                          href={`#${item.id}`}
                          className="text-[#5c4a80] text-sm hover:text-[#312852] transition-colors tracking-wide"
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Article body */}
              <div
                className="prose-column"
                dangerouslySetInnerHTML={{ __html: col.body }}
              />

              {/* FAQ */}
              {col.faq.length > 0 && (
                <FadeInUp className="mt-16">
                  <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">FAQ</p>
                  <h2
                    className="text-[#312852] text-xl tracking-wide mb-2"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    よくある質問
                  </h2>
                  <div className="w-8 h-px bg-[#c9a55a] mb-8" />
                  <dl className="divide-y divide-[#e8ddf4]">
                    {col.faq.map((item, i) => (
                      <div key={i} className="py-5">
                        <dt
                          className="text-[#312852] font-medium mb-2 leading-relaxed"
                          style={{ fontFamily: "var(--font-mincho)" }}
                        >
                          <span className="text-[#c9a55a] mr-2">Q.</span>
                          {item.q}
                        </dt>
                        <dd className="text-[#4a4a4a] text-sm leading-relaxed pl-5">
                          <span className="text-[#9278be] mr-2">A.</span>
                          {item.a}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </FadeInUp>
              )}

              {/* Related links to fixed pages */}
              {col.relatedLinks.length > 0 && (
                <FadeInUp className="mt-16 border-t border-[#e8ddf4] pt-10">
                  <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">RELATED</p>
                  <h2
                    className="text-[#312852] text-xl tracking-wide mb-2"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    関連ページ
                  </h2>
                  <div className="w-8 h-px bg-[#c9a55a] mb-6" />
                  <ul className="divide-y divide-[#e8ddf4] border border-[#e8ddf4] bg-white">
                    {col.relatedLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="flex items-center justify-between px-6 py-4 hover:bg-[#faf7fd] transition-colors group"
                        >
                          <span className="text-[#312852] text-sm tracking-wide">
                            {link.label}
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
              )}

              {/* Author */}
              <div className="mt-16 border-t border-[#e8ddf4] pt-8">
                <p className="text-[#9278be] text-xs tracking-wide mb-1">
                  この記事の著者
                </p>
                <p
                  className="text-[#312852] font-medium mb-1"
                  style={{ fontFamily: "var(--font-mincho)" }}
                >
                  {col.author}
                </p>
                <p className="text-[#4a4a4a] text-sm leading-relaxed">
                  東京都葛飾区堀切の地域密着型葬儀社。葬祭ディレクター1級取得・葛飾区民葬儀取扱店。
                  ご家族の大切なお別れをお手伝いしています。
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Related columns */}
              {col.relatedColumns.length > 0 && (
                <RelatedColumns slugs={col.relatedColumns} title="関連コラム" />
              )}

              {/* Category link */}
              <div className="border border-[#e8ddf4] bg-white p-5">
                <p className="text-[#7560a0] text-xs tracking-[0.25em] mb-3">CATEGORY</p>
                <Link
                  href={`/column/category/${col.category}`}
                  className="flex items-center justify-between text-[#312852] hover:text-[#5c4a80] transition-colors group"
                  style={{ fontFamily: "var(--font-mincho)" }}
                >
                  <span className="text-sm tracking-wide">
                    {CATEGORY_LABELS[col.category]}の記事一覧
                  </span>
                  <ChevronRight
                    size={13}
                    className="text-[#c9a55a] group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>

              {/* Contact CTA */}
              <div className="border border-[#e8ddf4] bg-white p-5">
                <p className="text-[#7560a0] text-xs tracking-[0.25em] mb-3">CONTACT</p>
                <p
                  className="text-[#312852] text-sm leading-relaxed mb-4"
                  style={{ fontFamily: "var(--font-mincho)" }}
                >
                  ご不明な点は、いつでもご相談ください
                </p>
                <a
                  href="tel:0336900870"
                  className="block text-center border border-[#9278be] text-[#5c4a80] px-4 py-3 text-sm hover:bg-[#faf7fd] transition-colors tracking-wider mb-2"
                  style={{ fontFamily: "var(--font-mincho)" }}
                >
                  03-3690-0870
                </a>
                <p className="text-[#9278be] text-xs text-center">24時間365日対応</p>
              </div>
            </aside>

          </div>
        </div>
      </div>
    </>
  );
}
