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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-2.5">
          <ol className="flex flex-wrap items-center gap-0.5 text-xs text-[#7560a0] tracking-wide">
            {all.map((item, i) => (
              <li key={i} className="flex items-center gap-0.5">
                {i > 0 && (
                  <ChevronRight size={11} className="text-[#b8a0d8] mx-0.5 shrink-0" />
                )}
                {item.href && i < all.length - 1 ? (
                  <Link href={item.href} className="hover:text-[#312852] transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-[#4a4a4a]">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
