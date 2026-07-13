"use client";

import { useEffect, useRef } from "react";
import { HERO, BOOKING_URL } from "@/lib/content";

/*
  Hero — image plein ecran montagne/trail avec overlay degrade sombre,
  grain outdoor, accroche orientee objectif et double CTA.
  Leger effet de parallaxe sur l'image de fond au scroll.
*/
export default function Hero() {
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = bgRef.current;
    if (!node) return;

    const prefersReduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const offset = window.scrollY * 0.35; // vitesse de parallaxe
        node.style.transform = `translate3d(0, ${offset}px, 0) scale(1.12)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Image de fond (parallaxe) */}
      <div
        ref={bgRef}
        className="absolute inset-0 -z-10 scale-110 bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO.image}')` }}
        aria-hidden
      />
      {/* Overlay degrade pour la lisibilite */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-night/70 via-night/80 to-night"
        aria-hidden
      />
      {/* Grain outdoor */}
      <div className="grain-overlay -z-10" aria-hidden />

      <div className="mx-auto w-full max-w-6xl px-5 pb-24 pt-28 md:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-forest-line bg-night/40 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-ember">
            {HERO.eyebrow}
          </p>
          <h1 className="font-display text-5xl leading-[0.95] text-bone sm:text-6xl md:text-7xl lg:text-8xl">
            {HERO.title}
            <span className="mt-3 block text-3xl text-bone-dim sm:text-4xl md:text-5xl">
              {HERO.titleAccent}
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-bone-dim md:text-lg">
            {HERO.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-ember px-7 py-3.5 text-center text-base font-semibold text-night transition-all duration-200 hover:-translate-y-0.5 hover:bg-ember-soft"
            >
              {HERO.ctaPrimary}
            </a>
            <a
              href="#offres"
              className="rounded-full border border-forest-line bg-night/30 px-7 py-3.5 text-center text-base font-semibold text-bone transition-all duration-200 hover:-translate-y-0.5 hover:border-ember hover:text-ember"
            >
              {HERO.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-bone-dim md:flex">
        <span className="text-[0.65rem] uppercase tracking-[0.25em]">Défiler</span>
        <span className="h-10 w-px animate-pulse bg-gradient-to-b from-ember to-transparent" />
      </div>
    </section>
  );
}
