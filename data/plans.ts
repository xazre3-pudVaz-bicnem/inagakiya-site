/**
 * 稲垣屋葬儀店の料金プラン（クライアント提供のプラン画像 6 点の内容をデータ化）
 *
 * 画像: public/images/plans/{slug}.jpg（プラン画像そのもの）
 *       public/images/plans/{slug}-photo.jpg（プラン画像から写真部分のみ切り出したもの）
 */

export const SITE_URL = "https://www.inagakiyasougiten.com";

/** 直葬以外の 5 プランに共通して含まれるもの（プラン画像の「プランに含まれるもの」より） */
const STANDARD_ITEMS = [
  "花祭壇",
  "人件費",
  "お棺",
  "骨壺",
  "白木の位牌",
  "遺影写真",
  "納棺セット",
  "搬送10km",
  "ドライアイス10kg",
  "受付用品",
  "焼香用品",
  "仏具一式",
  "花束",
  "自宅飾り用祭壇",
  "役所手続き",
] as const;

export type PlanCategory = "直葬" | "家族葬" | "一般葬" | "社葬";

export interface FuneralPlan {
  slug: string;
  /** 表示名（花の名前）。直葬プランは名称なし */
  name: string;
  /** 読み仮名（花の名前のみ） */
  reading?: string;
  /** プラン画像に記載のタイプ名 */
  type: string;
  category: PlanCategory;
  /** プラン画像のキャッチコピー */
  catchcopy: string;
  /** 参列者数目安（表示用） */
  attendees: string;
  /** 料金（円・数値） */
  price: number;
  /** 「〜」付きの料金（以上）か */
  priceFrom: boolean;
  /** プランに含まれるもの */
  items: readonly string[];
  /** 1日葬儀（一日葬）にも対応 */
  oneDay: boolean;
  /** 区民葬儀を利用可能（全プラン共通） */
  kumin: boolean;
  /** 該当する葬儀形式の詳細ページ */
  href: string;
  /** 葬儀形式名（リンクのラベル） */
  styleLabel: string;
  image: { src: string; width: number; height: number };
  photo: { src: string; width: number; height: number };
}

const flyer = (slug: string) => ({ src: `/images/plans/${slug}.jpg`, width: 1051, height: 1557 });
const photo = (slug: string) => ({ src: `/images/plans/${slug}-photo.jpg`, width: 1050, height: 418 });

export const funeralPlans: FuneralPlan[] = [
  {
    slug: "chokuso",
    name: "直葬",
    type: "直葬タイプ",
    category: "直葬",
    catchcopy: "通夜や告別式などの宗教儀式を行わず、火葬のみを執り行うシンプルな葬送タイプ",
    attendees: "〜10名",
    price: 180000,
    priceFrom: false,
    items: ["人件費", "お棺", "搬送10km", "白木の位牌", "納棺セット", "仏具一式", "役所手続き"],
    oneDay: false,
    kumin: true,
    href: "/plans/cremation",
    styleLabel: "火葬式（直葬）",
    image: { src: "/images/plans/chokuso.jpg", width: 1050, height: 1559 },
    photo: { src: "/images/plans/chokuso-photo.jpg", width: 1049, height: 418 },
  },
  {
    slug: "tanpopo",
    name: "蒲公英",
    reading: "たんぽぽ",
    type: "家族葬Aタイプ",
    category: "家族葬",
    catchcopy: "少人数でお見送りをする際に最適。1日葬儀にも対応可能です",
    attendees: "〜10名",
    price: 450000,
    priceFrom: false,
    items: STANDARD_ITEMS,
    oneDay: true,
    kumin: true,
    href: "/plans/family-funeral",
    styleLabel: "家族葬",
    image: flyer("tanpopo"),
    photo: photo("tanpopo"),
  },
  {
    slug: "shiragiku",
    name: "白菊",
    reading: "しらぎく",
    type: "家族葬Bタイプ",
    category: "家族葬",
    catchcopy: "お花で優しく見送る心温まるプラン。1日葬儀にも対応可能です",
    attendees: "〜20名",
    price: 690000,
    priceFrom: false,
    items: STANDARD_ITEMS,
    oneDay: true,
    kumin: true,
    href: "/plans/family-funeral",
    styleLabel: "家族葬",
    image: flyer("shiragiku"),
    photo: photo("shiragiku"),
  },
  {
    slug: "shoubu",
    name: "菖蒲",
    reading: "しょうぶ",
    type: "家族葬Cタイプ",
    category: "家族葬",
    catchcopy: "ご親族が多い方向けの家族葬プラン。ボリュームのある花祭壇でお見送りいたします",
    attendees: "〜30名",
    price: 880000,
    priceFrom: false,
    items: STANDARD_ITEMS,
    oneDay: false,
    kumin: true,
    href: "/plans/family-funeral",
    styleLabel: "家族葬",
    image: flyer("shoubu"),
    photo: photo("shoubu"),
  },
  {
    slug: "yuri",
    name: "百合",
    reading: "ゆり",
    type: "一般葬タイプ",
    category: "一般葬",
    catchcopy: "ご親族や友人、職場関係者など、ご縁のあった方を広く招いて行う伝統的な葬儀",
    attendees: "30名〜",
    price: 1200000,
    priceFrom: true,
    items: STANDARD_ITEMS,
    oneDay: false,
    kumin: true,
    href: "/plans/general-funeral",
    styleLabel: "一般葬",
    image: flyer("yuri"),
    photo: photo("yuri"),
  },
  {
    slug: "kochouran",
    name: "胡蝶蘭",
    reading: "こちょうらん",
    type: "社葬タイプ",
    category: "社葬",
    catchcopy: "会社（企業）が運営主体となり執り行う葬儀",
    attendees: "50名〜",
    price: 1800000,
    priceFrom: true,
    items: STANDARD_ITEMS,
    oneDay: false,
    kumin: true,
    href: "/plans/company-funeral",
    styleLabel: "社葬",
    image: flyer("kochouran"),
    photo: photo("kochouran"),
  },
];

export function getPlan(slug: string): FuneralPlan {
  const plan = funeralPlans.find((p) => p.slug === slug);
  if (!plan) throw new Error(`Unknown plan: ${slug}`);
  return plan;
}

export function plansByCategory(category: PlanCategory): FuneralPlan[] {
  return funeralPlans.filter((p) => p.category === category);
}

/** 一日葬（1日葬儀）に対応したプラン */
export const oneDayPlans = funeralPlans.filter((p) => p.oneDay);

/** 「180,000円」「1,200,000円〜」形式 */
export function formatPrice(plan: Pick<FuneralPlan, "price" | "priceFrom">): string {
  return `${plan.price.toLocaleString("ja-JP")}円${plan.priceFrom ? "〜" : ""}`;
}

/** 「18万円」「120万円〜」形式 */
export function formatPriceMan(plan: Pick<FuneralPlan, "price" | "priceFrom">): string {
  return `${(plan.price / 10000).toLocaleString("ja-JP")}万円${plan.priceFrom ? "〜" : ""}`;
}

/** 「蒲公英（家族葬Aタイプ）」「直葬タイプ」形式 */
export function planDisplayName(plan: FuneralPlan): string {
  return plan.category === "直葬" ? plan.type : `${plan.name}（${plan.type}）`;
}

/** プラン画像の代替テキスト */
export function planImageAlt(plan: FuneralPlan): string {
  return `${planDisplayName(plan)}｜参列者数目安${plan.attendees}・${formatPrice(plan)}｜稲垣屋葬儀店の葬儀プラン`;
}

/** 料金に関する注記（全プラン共通） */
export const PLAN_PRICE_NOTE =
  "※記載の内容・料金はプランの基本内容です。火葬料・式場使用料・飲食接待・返礼品・宗教者へのお礼など、プランに記載のない費用が必要となる場合は、事前にお見積もりでご案内いたします。";

/**
 * 構造化データ（schema.org）: 各プランを Offer 付きの Product として表現。
 */
export function planProductJsonLd(plan: FuneralPlan) {
  const url = `${SITE_URL}/plans#plan-${plan.slug}`;
  return {
    "@type": "Product",
    "@id": `${SITE_URL}/plans#product-${plan.slug}`,
    name: `${planDisplayName(plan)}｜稲垣屋葬儀店`,
    description: `${plan.catchcopy}。参列者数目安${plan.attendees}。プランに含まれるもの：${plan.items.join("・")}。区民葬儀も利用可能です。`,
    image: `${SITE_URL}${plan.image.src}`,
    category: `葬儀プラン／${plan.category}`,
    brand: { "@type": "Brand", name: "稲垣屋葬儀店" },
    url,
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "JPY",
      ...(plan.priceFrom
        ? {
            price: plan.price,
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "JPY",
              minPrice: plan.price,
            },
          }
        : { price: plan.price }),
      availability: "https://schema.org/InStock",
      areaServed: [
        { "@type": "City", name: "葛飾区" },
        { "@type": "AdministrativeArea", name: "東京都" },
      ],
      seller: { "@id": `${SITE_URL}/#organization` },
    },
  };
}

/** /plans などで使う ItemList（各プランの Product + Offer） */
export function plansItemListJsonLd(plans: FuneralPlan[] = funeralPlans, name = "稲垣屋葬儀店の葬儀プラン・料金一覧") {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: plans.length,
    itemListElement: plans.map((plan, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: planProductJsonLd(plan),
    })),
  };
}

/** FuneralHome の hasOfferCatalog 用 */
export function plansOfferCatalogJsonLd() {
  return {
    "@type": "OfferCatalog",
    name: "葬儀プラン・料金",
    itemListElement: funeralPlans.map((plan) => ({
      "@type": "Offer",
      name: planDisplayName(plan),
      url: `${SITE_URL}/plans#plan-${plan.slug}`,
      priceCurrency: "JPY",
      price: plan.price,
      ...(plan.priceFrom
        ? { priceSpecification: { "@type": "PriceSpecification", priceCurrency: "JPY", minPrice: plan.price } }
        : {}),
      itemOffered: {
        "@type": "Service",
        name: planDisplayName(plan),
        serviceType: plan.category,
        description: `${plan.catchcopy}（参列者数目安${plan.attendees}）`,
      },
    })),
  };
}
