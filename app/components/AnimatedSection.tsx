"use client";

import { useEffect, useRef, type CSSProperties } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/** Content stays readable before hydration, without JS, and with reduced motion. */
function Entrance({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!element || preference.matches) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.dataset.revealed = "true";
        observer.disconnect();
      }
    }, { threshold: 0.05 });
    observer.observe(element);
    const stop = () => {
      if (preference.matches) {
        observer.disconnect();
        delete element.dataset.revealed;
      }
    };
    preference.addEventListener("change", stop);
    return () => { observer.disconnect(); preference.removeEventListener("change", stop); };
  }, []);
  return <div ref={ref} className={className} style={{ "--reveal-delay": delay + "s" } as CSSProperties}>{children}</div>;
}

export function FadeInUp(props: AnimatedSectionProps) { return <Entrance {...props} />; }
export function FadeIn(props: AnimatedSectionProps) { return <Entrance {...props} />; }
export function StaggerContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}
export function StaggerItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <Entrance className={className}>{children}</Entrance>;
}
