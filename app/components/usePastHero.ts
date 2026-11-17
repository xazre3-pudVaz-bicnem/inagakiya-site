"use client";

import { useEffect, useState } from "react";

/** Call inside a component keyed by pathname so returning home starts hidden. */
export default function usePastHero(home: boolean) {
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    if (!home) return;
    let observer: IntersectionObserver | undefined;
    let resizeObserver: ResizeObserver | undefined;
    let hero: Element | null = null;
    const update = () => setPastHero(Boolean(hero && hero.getBoundingClientRect().bottom <= 0));
    const connect = () => {
      const next = document.querySelector("[data-home-hero]");
      if (hero === next) return;
      observer?.disconnect();
      resizeObserver?.disconnect();
      hero = next;
      if (hero) {
        observer = new IntersectionObserver(update, { threshold: 0 });
        resizeObserver = new ResizeObserver(update);
        observer.observe(hero);
        resizeObserver.observe(hero);
      }
      update();
    };
    connect();
    // App Router may stream the hero after the shared layout has mounted.
    const mutationObserver = new MutationObserver(connect);
    const main = document.getElementById("main");
    if (main) mutationObserver.observe(main, { childList: true, subtree: true });
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      observer?.disconnect();
      resizeObserver?.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [home]);

  return !home || pastHero;
}
