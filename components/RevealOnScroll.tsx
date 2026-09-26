"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Keep in sync with the "Scroll reveal" selectors in app/globals.css
const REVEAL = "[data-reveal], .section h2, .band, .car, .brand-tile, .dep, .timeline li, .form";

/**
 * Fades these elements in as they scroll into view.
 * Content is only hidden once this has run (html.reveal-ready), so nothing is lost without JS,
 * and it does nothing for visitors who prefer reduced motion.
 */
export function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.documentElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );

    document.querySelectorAll(REVEAL).forEach((el) => {
      if (!el.classList.contains("in")) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
