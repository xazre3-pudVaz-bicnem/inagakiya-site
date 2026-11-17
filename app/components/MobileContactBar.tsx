"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone } from "lucide-react";
import usePastHero from "./usePastHero";

function ContactActions({ home }: { home: boolean }) {
  const visible = usePastHero(home);

  return (
    <>
      <div aria-hidden="true" className="mobile-contact-spacer lg:hidden" />
      <nav
        aria-label="ご相談窓口"
        hidden={!visible}
        className="mobile-contact-bar fixed inset-x-0 bottom-0 z-40 border-t border-[#d5c6eb] bg-white lg:hidden"
      >
        <div className="mx-auto grid max-w-lg grid-cols-[1.25fr_1fr] gap-2 px-3 py-2">
          <a href="tel:0336900870" className="flex min-h-14 items-center justify-center gap-2 rounded-sm bg-[#453869] px-2 py-3 text-sm font-medium text-white hover:bg-[#312852]">
            <Phone size={19} className="shrink-0 text-[#dfc07e]" aria-hidden="true" />
            <span>24時間 電話相談</span>
          </a>
          <Link href="/contact" className="flex min-h-14 items-center justify-center gap-2 rounded-sm border border-[#d5c6eb] bg-[#faf7fd] px-2 py-3 text-sm font-medium text-[#312852] hover:bg-[#e8ddf4]">
            <Mail size={19} className="shrink-0" aria-hidden="true" />
            <span>メール相談</span>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default function MobileContactBar() {
  const pathname = usePathname();
  return <ContactActions key={pathname} home={pathname === "/"} />;
}
