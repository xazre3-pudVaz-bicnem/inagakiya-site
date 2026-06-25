export type ColumnCategory =
  | "funeral-basic"
  | "family-funeral"
  | "cost"
  | "kumin-funeral"
  | "flow"
  | "manners"
  | "consultation"
  | "area";

export const CATEGORY_LABELS: Record<ColumnCategory, string> = {
  "funeral-basic": "葬儀の基礎知識",
  "family-funeral": "家族葬",
  "cost": "葬儀費用",
  "kumin-funeral": "区民葬儀",
  "flow": "葬儀の流れ・手続き",
  "manners": "葬儀マナー",
  "consultation": "事前相談・終活",
  "area": "葛飾区の葬儀情報",
};

export const CATEGORY_ORDER: ColumnCategory[] = [
  "funeral-basic",
  "family-funeral",
  "cost",
  "kumin-funeral",
  "flow",
  "manners",
  "consultation",
  "area",
];

export const CATEGORY_RELATED_PAGES: Record<ColumnCategory, { label: string; href: string }[]> = {
  "funeral-basic": [
    { label: "葛飾区で葬儀をお考えの方へ", href: "/katsushika-funeral" },
    { label: "葬儀プラン一覧", href: "/plans" },
    { label: "葬儀の流れ", href: "/flow" },
    { label: "よくある質問", href: "/faq" },
  ],
  "family-funeral": [
    { label: "家族葬プラン", href: "/plans/family-funeral" },
    { label: "家族葬の費用", href: "/cost/family-funeral" },
    { label: "家族葬 vs 一日葬", href: "/compare/family-vs-oneday" },
    { label: "事前相談", href: "/consultation" },
  ],
  "cost": [
    { label: "葬儀費用について", href: "/cost" },
    { label: "費用の内訳", href: "/cost/breakdown" },
    { label: "費用を抑える", href: "/cost/reduce" },
    { label: "お見積もり・事前相談", href: "/consultation" },
  ],
  "kumin-funeral": [
    { label: "区民葬儀プラン", href: "/plans/kumin-funeral" },
    { label: "区民葬儀の費用", href: "/cost/kumin-funeral" },
    { label: "事前相談", href: "/consultation" },
    { label: "お問い合わせ", href: "/contact" },
  ],
  "flow": [
    { label: "葬儀の流れ", href: "/flow" },
    { label: "ご逝去直後にすること", href: "/flow/after-death" },
    { label: "搬送・安置", href: "/flow/transport" },
    { label: "葬儀後の手続き", href: "/flow/after-funeral-procedures" },
  ],
  "manners": [
    { label: "葬儀マナーについて", href: "/support/manners" },
    { label: "よくある質問", href: "/faq" },
    { label: "サポート情報", href: "/support" },
  ],
  "consultation": [
    { label: "事前相談", href: "/consultation" },
    { label: "生前準備について", href: "/support/preparing" },
    { label: "エンディングノートについて", href: "/consultation/ending-note" },
    { label: "お問い合わせ", href: "/contact" },
  ],
  "area": [
    { label: "対応エリア一覧", href: "/area" },
    { label: "葛飾区で葬儀をお考えの方へ", href: "/katsushika-funeral" },
    { label: "葬儀プラン一覧", href: "/plans" },
    { label: "事前相談", href: "/consultation" },
  ],
};

export interface ColumnFaq {
  q: string;
  a: string;
}

export interface ColumnRelatedLink {
  label: string;
  href: string;
}

export interface ColumnTocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

export interface Column {
  slug: string;
  title: string;
  description: string;
  category: ColumnCategory;
  date: string;
  updatedAt: string;
  author: string;
  keywords: string[];
  knowThis: string[];
  body: string;
  faq: ColumnFaq[];
  relatedLinks: ColumnRelatedLink[];
  relatedColumns: string[];
}

export function extractToc(html: string): ColumnTocItem[] {
  const regex = /<h([23])[^>]*\sid="([^"]+)"[^>]*>([\s\S]*?)<\/h[23]>/g;
  const items: ColumnTocItem[] = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    items.push({
      level: parseInt(match[1]) as 2 | 3,
      id: match[2],
      text: match[3].replace(/<[^>]+>/g, "").trim(),
    });
  }
  return items;
}
