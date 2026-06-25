import Link from "next/link";
import type { Metadata } from "next";
import { Phone, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "ページが見つかりません｜稲垣屋葬儀店",
  description: "お探しのページは見つかりませんでした。稲垣屋葬儀店のトップページへお戻りください。",
  robots: { index: false, follow: true },
};

const quickLinks = [
  { label: "葛飾区の葬儀について", href: "/katsushika-funeral" },
  { label: "葬儀プラン一覧", href: "/plans" },
  { label: "葬儀費用について", href: "/cost" },
  { label: "葬儀の流れ", href: "/flow" },
  { label: "事前相談", href: "/consultation" },
  { label: "よくある質問", href: "/faq" },
  { label: "お問い合わせ", href: "/contact" },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#faf9f7] flex flex-col">
      {/* Top accent */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#c9a55a] to-transparent" />

      <main className="flex-1 flex items-center justify-center px-4 py-24">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 number */}
          <p className="text-[#e8ddf4] text-[120px] md:text-[160px] font-bold leading-none tracking-widest select-none"
             style={{ fontFamily: "var(--font-mincho)" }}>
            404
          </p>

          <div className="-mt-6 md:-mt-10 relative z-10">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-4">PAGE NOT FOUND</p>
            <h1 className="text-[#312852] text-2xl md:text-3xl tracking-[0.1em] mb-4"
                style={{ fontFamily: "var(--font-mincho)" }}>
              ページが見つかりませんでした
            </h1>
            <div className="w-8 h-px bg-[#c9a55a] mx-auto mb-6" />
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-10">
              お探しのページは移動・削除されたか、URLが正しくない可能性があります。<br />
              下記のリンクからご希望のページへお進みください。
            </p>
          </div>

          {/* Quick links */}
          <div className="border border-[#e8ddf4] bg-white p-6 mb-10 text-left">
            <p className="text-[#9278be] text-xs tracking-[0.3em] mb-4">よく見られているページ</p>
            <ul className="divide-y divide-[#f4eef9]">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center justify-between py-3.5 text-[#312852] text-sm hover:text-[#5c4a80] transition-colors group"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    <span className="tracking-wide">{link.label}</span>
                    <ChevronRight size={15} className="text-[#c9a55a] group-hover:translate-x-1 transition-transform shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-8 py-4 tracking-wider transition-colors duration-300"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              トップページへ戻る
            </Link>
            <a
              href="tel:0336900870"
              className="inline-flex items-center justify-center gap-2 border border-[#9278be] text-[#5c4a80] hover:bg-[#ede7f6] px-8 py-4 tracking-wider transition-colors duration-300"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              <Phone size={16} className="text-[#c9a55a]" />
              03-3690-0870
            </a>
          </div>

          <p className="text-[#9278be] text-xs mt-8 tracking-wide">
            24時間365日、お電話でもご相談いただけます
          </p>
        </div>
      </main>
    </div>
  );
}
