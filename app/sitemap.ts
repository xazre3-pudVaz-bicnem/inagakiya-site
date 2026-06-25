import { MetadataRoute } from "next";

const BASE = "https://www.inagakiyasougiten.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries: { url: string; priority: number; freq?: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { url: "/", priority: 1.0, freq: "monthly" },
    { url: "/katsushika-funeral", priority: 0.95, freq: "monthly" },
    // Plans
    { url: "/plans", priority: 0.9, freq: "monthly" },
    { url: "/plans/family-funeral", priority: 0.85, freq: "monthly" },
    { url: "/plans/oneday-funeral", priority: 0.85, freq: "monthly" },
    { url: "/plans/cremation", priority: 0.85, freq: "monthly" },
    { url: "/plans/general-funeral", priority: 0.85, freq: "monthly" },
    { url: "/plans/kumin-funeral", priority: 0.85, freq: "monthly" },
    // Cost
    { url: "/cost", priority: 0.88, freq: "monthly" },
    { url: "/cost/family-funeral", priority: 0.8, freq: "monthly" },
    { url: "/cost/oneday-funeral", priority: 0.8, freq: "monthly" },
    { url: "/cost/cremation", priority: 0.8, freq: "monthly" },
    { url: "/cost/kumin-funeral", priority: 0.8, freq: "monthly" },
    // Flow
    { url: "/flow", priority: 0.82, freq: "monthly" },
    { url: "/flow/after-death", priority: 0.75, freq: "monthly" },
    { url: "/flow/transport", priority: 0.75, freq: "monthly" },
    { url: "/flow/meeting", priority: 0.75, freq: "monthly" },
    { url: "/flow/documents", priority: 0.75, freq: "monthly" },
    // Area
    { url: "/area", priority: 0.82, freq: "monthly" },
    { url: "/area/horikiri", priority: 0.78, freq: "monthly" },
    { url: "/area/ohanajaya", priority: 0.75, freq: "monthly" },
    { url: "/area/aoto", priority: 0.75, freq: "monthly" },
    { url: "/area/tateishi", priority: 0.75, freq: "monthly" },
    { url: "/area/yotsugi", priority: 0.75, freq: "monthly" },
    { url: "/area/kameari", priority: 0.75, freq: "monthly" },
    { url: "/area/kanamachi", priority: 0.75, freq: "monthly" },
    { url: "/area/shibamata", priority: 0.75, freq: "monthly" },
    { url: "/area/shinkoiwa", priority: 0.73, freq: "monthly" },
    // About cluster
    { url: "/about", priority: 0.72, freq: "yearly" },
    { url: "/company", priority: 0.72, freq: "yearly" },
    { url: "/reasons", priority: 0.72, freq: "yearly" },
    { url: "/message", priority: 0.68, freq: "yearly" },
    { url: "/history", priority: 0.68, freq: "yearly" },
    { url: "/qualification", priority: 0.68, freq: "yearly" },
    // Other
    { url: "/consultation", priority: 0.85, freq: "monthly" },
    { url: "/faq", priority: 0.82, freq: "monthly" },
    { url: "/contact", priority: 0.8, freq: "yearly" },
    { url: "/privacy", priority: 0.3, freq: "yearly" },
  ];

  return entries.map(({ url, priority, freq }) => ({
    url: `${BASE}${url}`,
    lastModified: now,
    changeFrequency: freq ?? "yearly",
    priority,
  }));
}
