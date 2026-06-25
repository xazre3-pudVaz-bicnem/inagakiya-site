import { MetadataRoute } from "next";

const BASE = "https://www.inagakiyasougiten.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries: { url: string; priority: number; freq?: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    // Top
    { url: "/", priority: 1.0, freq: "monthly" },

    // Pillar: 葛飾区の葬儀
    { url: "/katsushika-funeral", priority: 0.95, freq: "monthly" },
    { url: "/katsushika-funeral/first-guide", priority: 0.82, freq: "monthly" },
    { url: "/katsushika-funeral/emergency", priority: 0.85, freq: "monthly" },
    { url: "/katsushika-funeral/choose-funeral-home", priority: 0.80, freq: "monthly" },
    { url: "/katsushika-funeral/family-only", priority: 0.80, freq: "monthly" },
    { url: "/katsushika-funeral/small-funeral", priority: 0.80, freq: "monthly" },
    { url: "/katsushika-funeral/simple-funeral", priority: 0.80, freq: "monthly" },
    { url: "/katsushika-funeral/night-support", priority: 0.78, freq: "monthly" },
    { url: "/katsushika-funeral/local-custom", priority: 0.75, freq: "monthly" },
    { url: "/katsushika-funeral/checklist", priority: 0.78, freq: "monthly" },
    { url: "/katsushika-funeral/compare", priority: 0.78, freq: "monthly" },

    // Plans
    { url: "/plans", priority: 0.90, freq: "monthly" },
    { url: "/plans/family-funeral", priority: 0.88, freq: "monthly" },
    { url: "/plans/family-funeral/flow", priority: 0.78, freq: "monthly" },
    { url: "/plans/family-funeral/cost", priority: 0.80, freq: "monthly" },
    { url: "/plans/family-funeral/merit", priority: 0.75, freq: "monthly" },
    { url: "/plans/family-funeral/small", priority: 0.75, freq: "monthly" },
    { url: "/plans/family-funeral/only-relatives", priority: 0.75, freq: "monthly" },
    { url: "/plans/oneday-funeral", priority: 0.88, freq: "monthly" },
    { url: "/plans/oneday-funeral/flow", priority: 0.78, freq: "monthly" },
    { url: "/plans/oneday-funeral/cost", priority: 0.80, freq: "monthly" },
    { url: "/plans/oneday-funeral/merit", priority: 0.75, freq: "monthly" },
    { url: "/plans/cremation", priority: 0.88, freq: "monthly" },
    { url: "/plans/cremation/flow", priority: 0.78, freq: "monthly" },
    { url: "/plans/cremation/cost", priority: 0.80, freq: "monthly" },
    { url: "/plans/cremation/difference", priority: 0.75, freq: "monthly" },
    { url: "/plans/general-funeral", priority: 0.85, freq: "monthly" },
    { url: "/plans/general-funeral/flow", priority: 0.75, freq: "monthly" },
    { url: "/plans/general-funeral/cost", priority: 0.78, freq: "monthly" },
    { url: "/plans/kumin-funeral", priority: 0.88, freq: "monthly" },
    { url: "/plans/kumin-funeral/guide", priority: 0.80, freq: "monthly" },
    { url: "/plans/kumin-funeral/cost-detail", priority: 0.80, freq: "monthly" },
    { url: "/plans/kumin-funeral/flow", priority: 0.78, freq: "monthly" },

    // Cost
    { url: "/cost", priority: 0.90, freq: "monthly" },
    { url: "/cost/family-funeral", priority: 0.82, freq: "monthly" },
    { url: "/cost/oneday-funeral", priority: 0.82, freq: "monthly" },
    { url: "/cost/cremation", priority: 0.82, freq: "monthly" },
    { url: "/cost/kumin-funeral", priority: 0.82, freq: "monthly" },
    { url: "/cost/breakdown", priority: 0.80, freq: "monthly" },
    { url: "/cost/additional", priority: 0.78, freq: "monthly" },
    { url: "/cost/estimate", priority: 0.80, freq: "monthly" },
    { url: "/cost/reduce", priority: 0.78, freq: "monthly" },
    { url: "/cost/number-of-attendees", priority: 0.75, freq: "monthly" },
    { url: "/cost/facility-cost", priority: 0.75, freq: "monthly" },
    { url: "/cost/return-gift", priority: 0.72, freq: "monthly" },
    { url: "/cost/religious-fee", priority: 0.72, freq: "monthly" },
    { url: "/cost/katsushika", priority: 0.80, freq: "monthly" },

    // Flow
    { url: "/flow", priority: 0.85, freq: "monthly" },
    { url: "/flow/after-death", priority: 0.80, freq: "monthly" },
    { url: "/flow/critical", priority: 0.82, freq: "monthly" },
    { url: "/flow/hospital", priority: 0.80, freq: "monthly" },
    { url: "/flow/facility", priority: 0.78, freq: "monthly" },
    { url: "/flow/home", priority: 0.78, freq: "monthly" },
    { url: "/flow/police", priority: 0.78, freq: "monthly" },
    { url: "/flow/first-call", priority: 0.80, freq: "monthly" },
    { url: "/flow/resting-place", priority: 0.78, freq: "monthly" },
    { url: "/flow/transport", priority: 0.78, freq: "monthly" },
    { url: "/flow/meeting", priority: 0.78, freq: "monthly" },
    { url: "/flow/schedule", priority: 0.75, freq: "monthly" },
    { url: "/flow/death-certificate", priority: 0.78, freq: "monthly" },
    { url: "/flow/cremation-permit", priority: 0.75, freq: "monthly" },
    { url: "/flow/death-notification", priority: 0.78, freq: "monthly" },
    { url: "/flow/documents", priority: 0.78, freq: "monthly" },
    { url: "/flow/after-funeral-procedures", priority: 0.75, freq: "monthly" },
    { url: "/flow/memorial-service", priority: 0.72, freq: "monthly" },

    // Consultation
    { url: "/consultation", priority: 0.90, freq: "monthly" },
    { url: "/consultation/preparation", priority: 0.78, freq: "monthly" },
    { url: "/consultation/parent", priority: 0.78, freq: "monthly" },
    { url: "/consultation/living", priority: 0.75, freq: "monthly" },
    { url: "/consultation/cost", priority: 0.78, freq: "monthly" },
    { url: "/consultation/family-meeting", priority: 0.75, freq: "monthly" },
    { url: "/consultation/checklist", priority: 0.75, freq: "monthly" },
    { url: "/consultation/no-pressure", priority: 0.75, freq: "monthly" },
    { url: "/consultation/kumin-funeral", priority: 0.75, freq: "monthly" },
    { url: "/consultation/ending-note", priority: 0.73, freq: "monthly" },

    // Support
    { url: "/support", priority: 0.80, freq: "monthly" },
    { url: "/support/first-time", priority: 0.78, freq: "monthly" },
    { url: "/support/parent-funeral", priority: 0.78, freq: "monthly" },
    { url: "/support/small-funeral", priority: 0.75, freq: "monthly" },
    { url: "/support/no-religion", priority: 0.75, freq: "monthly" },
    { url: "/support/preparing", priority: 0.75, freq: "monthly" },
    { url: "/support/after-funeral", priority: 0.75, freq: "monthly" },
    { url: "/support/documents", priority: 0.75, freq: "monthly" },
    { url: "/support/manners", priority: 0.73, freq: "monthly" },
    { url: "/support/kouden", priority: 0.72, freq: "monthly" },
    { url: "/support/attire", priority: 0.72, freq: "monthly" },
    { url: "/support/kouden-return", priority: 0.72, freq: "monthly" },
    { url: "/support/flowers", priority: 0.70, freq: "monthly" },
    { url: "/support/telegram", priority: 0.70, freq: "monthly" },
    { url: "/support/greeting", priority: 0.70, freq: "monthly" },
    { url: "/support/notification", priority: 0.70, freq: "monthly" },
    { url: "/support/reception", priority: 0.70, freq: "monthly" },
    { url: "/support/chief-mourner", priority: 0.72, freq: "monthly" },
    { url: "/support/religion", priority: 0.72, freq: "monthly" },
    { url: "/support/funeral-aftercare", priority: 0.72, freq: "monthly" },

    // Area
    { url: "/area", priority: 0.85, freq: "monthly" },
    { url: "/area/horikiri", priority: 0.82, freq: "monthly" },
    { url: "/area/horikiri-shobuen", priority: 0.80, freq: "monthly" },
    { url: "/area/ohanajaya", priority: 0.78, freq: "monthly" },
    { url: "/area/aoto", priority: 0.78, freq: "monthly" },
    { url: "/area/tateishi", priority: 0.78, freq: "monthly" },
    { url: "/area/higashi-tateishi", priority: 0.75, freq: "monthly" },
    { url: "/area/yotsugi", priority: 0.78, freq: "monthly" },
    { url: "/area/higashi-yotsugi", priority: 0.75, freq: "monthly" },
    { url: "/area/kameari", priority: 0.78, freq: "monthly" },
    { url: "/area/nishi-kameari", priority: 0.75, freq: "monthly" },
    { url: "/area/higashi-kanamachi", priority: 0.75, freq: "monthly" },
    { url: "/area/kanamachi", priority: 0.78, freq: "monthly" },
    { url: "/area/kanamachi-josui", priority: 0.72, freq: "monthly" },
    { url: "/area/shibamata", priority: 0.78, freq: "monthly" },
    { url: "/area/takasago", priority: 0.75, freq: "monthly" },
    { url: "/area/kamakura", priority: 0.75, freq: "monthly" },
    { url: "/area/okudo", priority: 0.75, freq: "monthly" },
    { url: "/area/niijuku", priority: 0.75, freq: "monthly" },
    { url: "/area/mizumoto", priority: 0.75, freq: "monthly" },
    { url: "/area/higashi-mizumoto", priority: 0.72, freq: "monthly" },
    { url: "/area/minami-mizumoto", priority: 0.72, freq: "monthly" },
    { url: "/area/kosuge", priority: 0.72, freq: "monthly" },
    { url: "/area/takaramachi", priority: 0.72, freq: "monthly" },
    { url: "/area/shiratori", priority: 0.72, freq: "monthly" },
    { url: "/area/shinkoiwa", priority: 0.75, freq: "monthly" },

    // Compare
    { url: "/compare", priority: 0.82, freq: "monthly" },
    { url: "/compare/family-vs-oneday", priority: 0.78, freq: "monthly" },
    { url: "/compare/family-vs-cremation", priority: 0.78, freq: "monthly" },
    { url: "/compare/oneday-vs-cremation", priority: 0.78, freq: "monthly" },
    { url: "/compare/kumin-vs-general", priority: 0.75, freq: "monthly" },
    { url: "/compare/funeral-plans", priority: 0.80, freq: "monthly" },
    { url: "/compare/funeral-home", priority: 0.75, freq: "monthly" },
    { url: "/compare/cost", priority: 0.78, freq: "monthly" },

    // Needs
    { url: "/needs", priority: 0.82, freq: "monthly" },
    { url: "/needs/low-cost", priority: 0.80, freq: "monthly" },
    { url: "/needs/small", priority: 0.78, freq: "monthly" },
    { url: "/needs/family-only", priority: 0.78, freq: "monthly" },
    { url: "/needs/no-wake", priority: 0.75, freq: "monthly" },
    { url: "/needs/simple", priority: 0.75, freq: "monthly" },
    { url: "/needs/sudden", priority: 0.82, freq: "monthly" },
    { url: "/needs/no-religion", priority: 0.75, freq: "monthly" },
    { url: "/needs/elderly-parent", priority: 0.80, freq: "monthly" },
    { url: "/needs/no-idea", priority: 0.80, freq: "monthly" },
    { url: "/needs/katsushika-resident", priority: 0.82, freq: "monthly" },

    // About cluster
    { url: "/about", priority: 0.75, freq: "monthly" },
    { url: "/reasons", priority: 0.75, freq: "monthly" },
    { url: "/history", priority: 0.68, freq: "yearly" },
    { url: "/message", priority: 0.68, freq: "yearly" },
    { url: "/qualification", priority: 0.70, freq: "yearly" },
    { url: "/company", priority: 0.72, freq: "yearly" },

    // Other
    { url: "/faq", priority: 0.88, freq: "monthly" },
    { url: "/contact", priority: 0.80, freq: "yearly" },
    { url: "/privacy", priority: 0.30, freq: "yearly" },
    { url: "/rss.xml", priority: 0.40, freq: "weekly" },

    // Column hub + categories
    { url: "/column", priority: 0.88, freq: "weekly" },
    { url: "/column/category/funeral-basic", priority: 0.78, freq: "monthly" },
    { url: "/column/category/family-funeral", priority: 0.78, freq: "monthly" },
    { url: "/column/category/cost", priority: 0.78, freq: "monthly" },
    { url: "/column/category/kumin-funeral", priority: 0.78, freq: "monthly" },
    { url: "/column/category/flow", priority: 0.78, freq: "monthly" },
    { url: "/column/category/manners", priority: 0.75, freq: "monthly" },
    { url: "/column/category/consultation", priority: 0.75, freq: "monthly" },
    { url: "/column/category/area", priority: 0.78, freq: "monthly" },

    // Column articles — 葬儀の基礎知識
    { url: "/column/katsushika-funeral-first-guide", priority: 0.75, freq: "monthly" },
    { url: "/column/what-to-do-after-death-katsushika", priority: 0.75, freq: "monthly" },
    { url: "/column/funeral-home-choice-katsushika", priority: 0.73, freq: "monthly" },
    { url: "/column/funeral-flow-basic", priority: 0.72, freq: "monthly" },
    { url: "/column/funeral-preparation-checklist", priority: 0.70, freq: "monthly" },
    { url: "/column/oneday-funeral-katsushika", priority: 0.72, freq: "monthly" },
    { url: "/column/cremation-only-katsushika", priority: 0.72, freq: "monthly" },
    { url: "/column/cremation-vs-oneday", priority: 0.70, freq: "monthly" },

    // Column articles — 家族葬
    { url: "/column/family-funeral-katsushika", priority: 0.75, freq: "monthly" },
    { url: "/column/family-funeral-cost-katsushika", priority: 0.73, freq: "monthly" },
    { url: "/column/family-funeral-only-relatives", priority: 0.70, freq: "monthly" },
    { url: "/column/family-funeral-small", priority: 0.70, freq: "monthly" },
    { url: "/column/family-funeral-vs-oneday", priority: 0.72, freq: "monthly" },

    // Column articles — 費用
    { url: "/column/oneday-funeral-cost", priority: 0.72, freq: "monthly" },
    { url: "/column/funeral-cost-katsushika", priority: 0.75, freq: "monthly" },
    { url: "/column/funeral-cost-breakdown", priority: 0.73, freq: "monthly" },
    { url: "/column/funeral-additional-cost", priority: 0.70, freq: "monthly" },
    { url: "/column/funeral-estimate-check", priority: 0.70, freq: "monthly" },
    { url: "/column/how-to-reduce-funeral-cost", priority: 0.72, freq: "monthly" },

    // Column articles — 区民葬儀
    { url: "/column/kumin-funeral-katsushika", priority: 0.75, freq: "monthly" },
    { url: "/column/kumin-funeral-cost", priority: 0.73, freq: "monthly" },
    { url: "/column/kumin-funeral-flow", priority: 0.72, freq: "monthly" },
    { url: "/column/kumin-funeral-vs-general", priority: 0.70, freq: "monthly" },
    { url: "/column/kumin-funeral-family", priority: 0.70, freq: "monthly" },

    // Column articles — 流れ・手続き
    { url: "/column/cremation-only-flow", priority: 0.70, freq: "monthly" },
    { url: "/column/death-at-hospital", priority: 0.73, freq: "monthly" },
    { url: "/column/death-at-facility", priority: 0.70, freq: "monthly" },
    { url: "/column/death-at-home", priority: 0.72, freq: "monthly" },
    { url: "/column/transport-and-resting", priority: 0.70, freq: "monthly" },
    { url: "/column/death-notification-and-cremation-permit", priority: 0.72, freq: "monthly" },

    // Column articles — マナー
    { url: "/column/funeral-attire", priority: 0.70, freq: "monthly" },
    { url: "/column/kouden-basic", priority: 0.70, freq: "monthly" },
    { url: "/column/kouden-return", priority: 0.68, freq: "monthly" },
    { url: "/column/condolence-telegram", priority: 0.68, freq: "monthly" },
    { url: "/column/funeral-flowers", priority: 0.68, freq: "monthly" },

    // Column articles — 事前相談・終活
    { url: "/column/funeral-consultation", priority: 0.72, freq: "monthly" },
    { url: "/column/parent-funeral-preparation", priority: 0.73, freq: "monthly" },
    { url: "/column/funeral-cost-consultation", priority: 0.70, freq: "monthly" },
    { url: "/column/ending-note-funeral", priority: 0.70, freq: "monthly" },
    { url: "/column/no-pressure-consultation", priority: 0.70, freq: "monthly" },

    // Column articles — 葛飾区の地域情報
    { url: "/column/horikiri-funeral", priority: 0.73, freq: "monthly" },
    { url: "/column/ohanajaya-funeral", priority: 0.70, freq: "monthly" },
    { url: "/column/aoto-funeral", priority: 0.70, freq: "monthly" },
    { url: "/column/tateishi-funeral", priority: 0.70, freq: "monthly" },
    { url: "/column/kameari-funeral", priority: 0.72, freq: "monthly" },
    { url: "/column/kanamachi-funeral", priority: 0.70, freq: "monthly" },
    { url: "/column/shibamata-funeral", priority: 0.70, freq: "monthly" },
    { url: "/column/yotsugi-funeral", priority: 0.70, freq: "monthly" },
    { url: "/column/takasago-funeral", priority: 0.70, freq: "monthly" },
    { url: "/column/mizumoto-funeral", priority: 0.70, freq: "monthly" },
  ];

  return entries.map(({ url, priority, freq }) => ({
    url: `${BASE}${url}`,
    lastModified: now,
    changeFrequency: freq ?? "yearly",
    priority,
  }));
}
