"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import usePastHero from "./usePastHero";

const navItems = [
  { label: "葛飾区の葬儀", href: "/katsushika-funeral" },
  {
    label: "葬儀プラン",
    href: "/plans",
    children: [
      { label: "プラン・料金一覧", href: "/plans" },
      { label: "家族葬", href: "/plans/family-funeral" },
      { label: "一日葬", href: "/plans/oneday-funeral" },
      { label: "火葬式・直葬", href: "/plans/cremation" },
      { label: "一般葬", href: "/plans/general-funeral" },
      { label: "社葬", href: "/plans/company-funeral" },
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
  {
    label: "専門コラム",
    href: "/column",
    children: [
      { label: "葬儀の基礎知識", href: "/column/category/funeral-basic" },
      { label: "家族葬", href: "/column/category/family-funeral" },
      { label: "葬儀費用", href: "/column/category/cost" },
      { label: "区民葬儀", href: "/column/category/kumin-funeral" },
      { label: "葬儀の流れ・手続き", href: "/column/category/flow" },
      { label: "葬儀マナー", href: "/column/category/manners" },
      { label: "事前相談・終活", href: "/column/category/consultation" },
      { label: "葛飾区の葬儀情報", href: "/column/category/area" },
    ],
  },
  { label: "お問い合わせ", href: "/contact" },
];

function HeaderContent({ pathname }: { pathname: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const showPhone = usePastHero(pathname === "/");
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [menuOpen]);

  // Desktop: collapse the two nav rows while scrolling down, restore on scroll up / near the top.
  const [navCollapsed, setNavCollapsed] = useState(false);
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const focusInside = headerRef.current?.contains(document.activeElement) ?? false;
        if (y < 160 || focusInside) setNavCollapsed(false);
        else if (y > lastY + 6) setNavCollapsed(true);
        else if (y < lastY - 6) setNavCollapsed(false);
        lastY = y;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpenDropdown(null);
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, []);

  return (
    <header
      ref={headerRef}
      className="site-header fixed inset-x-0 top-0 z-50 border-b border-[#e8ddf4] bg-white/97 shadow-[0_4px_24px_-20px_#312852] backdrop-blur-md"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          const trigger = headerRef.current?.querySelector<HTMLButtonElement>('[data-desktop-toggle][aria-expanded="true"]');
          setOpenDropdown(null);
          if (menuOpen) { setMenuOpen(false); menuButton.current?.focus(); }
          else trigger?.focus();
        }
        if (menuOpen && event.key === "Tab") {
          const focusable = Array.from(headerRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? []).filter(el => el.getClientRects().length > 0);
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
          else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
        }
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 md:h-20">
        <Link href="/" onClick={() => setMenuOpen(false)} className="group flex min-w-0 flex-col leading-tight">
          <span className="text-xl font-bold tracking-[0.15em] text-[#312852] transition-colors group-hover:text-[#5c4a80] md:text-2xl">稲垣屋葬儀店</span>
          <span className="mt-1 text-xs tracking-[0.08em] text-[#a8853f]">INAGAKIYA FUNERAL HOME</span>
        </Link>
        <div className="hidden lg:block" style={{ visibility: showPhone ? "visible" : "hidden" }}>
          <a href="tel:0336900870" className="flex min-h-12 items-center gap-3 rounded-sm border border-[#e8ddf4] bg-[#faf7fd] px-5 py-2 text-[#312852] transition-colors hover:bg-[#f4eef9]">
            <Phone size={20} className="text-[#a8853f]" aria-hidden="true" />
            <span className="text-sm text-[#5c4a80]">24時間受付</span>
            <span className="text-xl font-bold tracking-wider">03-3690-0870</span>
          </a>
        </div>
        <button ref={menuButton} type="button" className="flex size-12 shrink-0 items-center justify-center rounded-sm border border-[#e8ddf4] text-[#312852] lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="メニュー" aria-controls="mobile-navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      <nav
        aria-label="メインナビゲーション"
        className={
          "hidden border-t border-[#f4eef9] " +
          // 下スクロール中は2段のナビを畳み、ヘッダーを1段（ロゴ・電話）にして本文の表示領域を確保する
          (navCollapsed && !openDropdown ? "" : "lg:block animate-fade-in")
        }
      >
        <ul className="mx-auto grid max-w-7xl grid-cols-6 px-4 sm:px-6">
          {navItems.map((item, index) => (
            <li key={item.href} className="relative min-w-0" onMouseEnter={() => setOpenDropdown(item.href)} onMouseLeave={() => setOpenDropdown(null)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpenDropdown(null); }}>
              <div className={"flex min-h-12 items-stretch justify-center border-b border-[#f4eef9] transition-colors " + (isActive(item.href) ? "bg-[#f4eef9] text-[#312852]" : "text-[#4a4a4a] hover:bg-[#faf7fd]")}>
                <Link href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={() => setOpenDropdown(null)} className="flex min-w-0 items-center whitespace-nowrap py-2 pl-2 pr-1 text-sm leading-snug xl:pl-3">{item.label}</Link>
                {item.children && <button type="button" data-desktop-toggle aria-label={item.label + "の項目を開く"} aria-expanded={openDropdown === item.href} aria-controls={"desktop-nav-" + index} onClick={() => setOpenDropdown(openDropdown === item.href ? null : item.href)} className="flex w-7 shrink-0 items-center justify-center text-[#7560a0] xl:w-9"><ChevronDown size={15} aria-hidden="true" className={openDropdown === item.href ? "rotate-180" : ""} /></button>}
              </div>
              {item.children && (
                <ul id={"desktop-nav-" + index} hidden={openDropdown !== item.href} className={"absolute top-full z-10 w-72 border border-[#e8ddf4] border-t-2 border-t-[#c9a55a] bg-white p-2 shadow-[0_16px_40px_-16px_#31285255] " + (index % 6 >= 4 ? "right-0" : "left-0")}>
                  {item.children.map(child => <li key={child.href}><Link href={child.href} onClick={() => setOpenDropdown(null)} aria-current={pathname === child.href ? "page" : undefined} className="block rounded-sm px-4 py-3 text-sm leading-relaxed text-[#453869] hover:bg-[#f4eef9]">{child.label}</Link></li>)}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <nav id="mobile-navigation" aria-label="メインナビゲーション" hidden={!menuOpen} className="mobile-navigation border-t border-[#e8ddf4] bg-white lg:hidden">
        <ul className="mx-auto max-w-2xl px-4 py-3">
          {navItems.map((item, index) => (
            <li key={item.href} className="border-b border-[#e8ddf4]">
              <div className="flex items-stretch">
                <Link href={item.href} onClick={() => setMenuOpen(false)} aria-current={pathname === item.href ? "page" : undefined} className={"flex min-h-14 flex-1 items-center px-3 py-3 text-base " + (isActive(item.href) ? "font-medium text-[#453869]" : "text-[#1a1a1a]")}>{item.label}</Link>
                {item.children && <button type="button" aria-label={item.label + "の項目を開く"} aria-expanded={openDropdown === item.href} aria-controls={"mobile-nav-" + index} onClick={() => setOpenDropdown(openDropdown === item.href ? null : item.href)} className="flex w-14 shrink-0 items-center justify-center text-[#7560a0]"><ChevronDown size={20} aria-hidden="true" className={"transition-transform " + (openDropdown === item.href ? "rotate-180" : "")} /></button>}
              </div>
              {item.children && <ul id={"mobile-nav-" + index} hidden={openDropdown !== item.href} className="mb-3 border-l-2 border-[#c9a55a]/60 bg-[#faf7fd] p-2">
                {item.children.map(child => <li key={child.href}><Link href={child.href} onClick={() => setMenuOpen(false)} className="block min-h-12 px-4 py-3 text-sm leading-relaxed text-[#453869] hover:bg-[#f4eef9]">└ {child.label}</Link></li>)}
              </ul>}
            </li>
          ))}
        </ul>
        <div className="mx-auto max-w-2xl px-4 pb-6">
          <a href="tel:0336900870" className="flex items-center justify-center gap-3 rounded-sm bg-[#453869] px-6 py-4 text-white">
            <Phone size={20} className="text-[#dfc07e]" aria-hidden="true" />
            <span className="text-center"><span className="block text-sm text-[#e8ddf4]">24時間受付</span><span className="text-xl font-bold tracking-wider">03-3690-0870</span></span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default function Header() {
  const pathname = usePathname();
  return <HeaderContent key={pathname} pathname={pathname} />;
}
