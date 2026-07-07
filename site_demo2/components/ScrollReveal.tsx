"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Observe tous les éléments `.reveal` de la page et ajoute `.is-visible`
 * lorsqu'ils entrent dans le viewport. Se re-synchronise à chaque
 * changement de route (App Router) et gère aussi le curseur du sheen.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay ?? "0";
            el.style.transitionDelay = `${delay}ms`;
            el.classList.add("is-visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    els.forEach((el) => observer.observe(el));

    // Curseur pour l'effet de sheen sur les cartes
    const handlePointer = (e: PointerEvent) => {
      const target = (e.target as HTMLElement)?.closest<HTMLElement>(".card-sheen");
      if (!target) return;
      const rect = target.getBoundingClientRect();
      target.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      target.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    window.addEventListener("pointermove", handlePointer);

    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", handlePointer);
    };
  }, [pathname]);

  return null;
}
