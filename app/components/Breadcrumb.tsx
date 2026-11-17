import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface Props {
  items: BreadcrumbItem[];
}

const BASE_URL = "https://www.inagakiyasougiten.com";

export default function Breadcrumb({ items }: Props) {
  const all = [{ label: "ホーム", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${BASE_URL}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="パンくずリスト" className="border-b border-[#e8ddf4] bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#7560a0] tracking-wide">
            {all.map((item, i) => (
              <li key={i} className="flex min-w-0 max-w-full items-center gap-1">
                {i > 0 && (
                  <ChevronRight size={11} className="text-[#b8a0d8] mx-0.5 shrink-0" />
                )}
                {item.href && i < all.length - 1 ? (
                  <Link href={item.href} className="inline-block py-1 underline decoration-[#d5c6eb] underline-offset-4 hover:text-[#312852] transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span aria-current={i === all.length - 1 ? "page" : undefined} className="text-[#4a4a4a]">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
