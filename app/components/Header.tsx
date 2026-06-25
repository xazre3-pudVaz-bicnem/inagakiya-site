"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "葛飾区の葬儀", href: "/katsushika-funeral" },
  {
    label: "葬儀プラン",
    href: "/plans",
    children: [
      { label: "家族葬", href: "/plans/family-funeral" },
      { label: "一日葬", href: "/plans/oneday-funeral" },
      { label: "火葬式", href: "/plans/cremation" },
      { label: "一般葬", href: "/plans/general-funeral" },
      { label: "区民葬儀", href: "/plans/kumin-funeral" },
    ],
  },
  { label: "葬儀費用", href: "/cost" },
  { label: "葬儀の流れ", href: "/flow" },
  { label: "事前相談", href: "/consultation" },
  { label: "よくある質問", href: "/faq" },
  {
    label: "サポート情報",
    href: "/support",
    children: [
      { label: "はじめての葬儀", href: "/support/first-time" },
      { label: "親の葬儀を考える方へ", href: "/support/parent-funeral" },
      { label: "葬儀後の手続き", href: "/support/after-funeral" },
      { label: "葬儀のマナー", href: "/support/manners" },
      { label: "生前準備について", href: "/support/preparing" },
    ],
  },
  {
    label: "稲垣屋について",
    href: "/about",
    children: [
      { label: "稲垣屋について", href: "/about" },
      { label: "選ばれる理由", href: "/reasons" },
      { label: "創業の歴史", href: "/history" },
      { label: "資格・認定", href: "/qualification" },
      { label: "会社概要", href: "/company" },
    ],
  },
  {
    label: "比較・選び方",
    href: "/compare",
    children: [
      { label: "家族葬 vs 一日葬", href: "/compare/family-vs-oneday" },
      { label: "家族葬 vs 火葬式", href: "/compare/family-vs-cremation" },
      { label: "一日葬 vs 火葬式", href: "/compare/oneday-vs-cremation" },
      { label: "葬儀プラン比較", href: "/compare/funeral-plans" },
    ],
  },
  {
    label: "こんな方へ",
    href: "/needs",
    children: [
      { label: "費用を抑えたい方へ", href: "/needs/low-cost" },
      { label: "小規模葬儀を希望の方へ", href: "/needs/small" },
      { label: "家族だけで送りたい方へ", href: "/needs/family-only" },
      { label: "突然の葬儀に戸惑う方へ", href: "/needs/sudden" },
      { label: "葛飾区民の方へ", href: "/needs/katsushika-resident" },
    ],
  },
  { label: "お問い合わせ", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/97 backdrop-blur-md shadow-sm border-b border-[#e8ddf4]"
          : "bg-white/95 backdrop-blur-sm border-b border-[#f4eef9]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight group">
            <span
              className="text-[#312852] text-xl md:text-2xl tracking-[0.15em] font-bold group-hover:text-[#5c4a80] transition-colors duration-300"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              稲垣屋葬儀店
            </span>
            <span className="text-[#c9a55a] text-[10px] md:text-xs tracking-[0.2em]">
              INAGAKIYA FUNERAL HOME
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.href)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-0.5 px-3 py-2 text-sm text-[#1a1a1a] hover:text-[#5c4a80] transition-colors duration-200 tracking-wide"
                  >
                    {item.label}
                    <ChevronDown size={13} className="mt-0.5 text-[#c9a55a]" />
                  </Link>
                  <AnimatePresence>
                    {openDropdown === item.href && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-0 mt-1 w-44 bg-white shadow-md border border-[#e8ddf4] overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-5 py-3 text-sm text-[#1a1a1a] hover:bg-[#faf7fd] hover:text-[#5c4a80] transition-colors border-b border-[#f4eef9] last:border-0 tracking-wide"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm text-[#1a1a1a] hover:text-[#5c4a80] transition-colors duration-200 tracking-wide"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Phone CTA */}
          <div className="hidden lg:flex items-center gap-2 ml-4">
            <a
              href="tel:0336900870"
              className="flex items-center gap-2 bg-[#5c4a80] hover:bg-[#453869] text-white px-4 py-2.5 transition-colors duration-300 group"
            >
              <Phone size={15} className="text-[#dfc07e] group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="text-[10px] text-[#d5c6eb] tracking-wider">24時間受付</div>
                <div className="text-sm font-bold tracking-wider">03-3690-0870</div>
              </div>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-[#312852]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28 }}
            className="lg:hidden bg-white border-t border-[#e8ddf4] overflow-hidden"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-0.5">
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-3.5 text-[#1a1a1a] hover:text-[#5c4a80] hover:bg-[#faf7fd] transition-colors tracking-wide border-b border-[#f4eef9]"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMenuOpen(false)}
                          className="block px-4 py-3 text-sm text-[#4a4a4a] hover:text-[#5c4a80] hover:bg-[#faf7fd] transition-colors tracking-wide border-b border-[#f4eef9]"
                        >
                          └ {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <a
                  href="tel:0336900870"
                  className="flex items-center justify-center gap-2 bg-[#5c4a80] text-white px-6 py-4 w-full"
                >
                  <Phone size={18} className="text-[#dfc07e]" />
                  <div className="text-center">
                    <div className="text-xs text-[#d5c6eb]">24時間受付</div>
                    <div className="text-lg font-bold tracking-wider">03-3690-0870</div>
                  </div>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
