"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { hero } from "@/app/content";
import { LeafIcon } from "@/app/components/ui/Icons";

type Particle = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
};

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, id) => ({
    id,
    left: Math.random() * 100,
    size: 4 + Math.random() * 8,
    duration: 16 + Math.random() * 12,
    delay: Math.random() * 14,
    drift: Math.random() * 80 - 40,
  }));
}

export function Hero() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(generateParticles(16));
  }, []);

  return (
    <section
      id="accueil"
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-gradient-hero pt-28 pb-16"
    >
      {/* Blobs organiques pastel en fond */}
      <div
        className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-sauge-pastel/60 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -right-28 w-[30rem] h-[30rem] rounded-full bg-miel-pastel/70 blur-3xl"
        aria-hidden="true"
      />

      {/* Particules pollen/feuilles */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {particles.map((p) => (
          <span
            key={p.id}
            className="pollen"
            style={
              {
                left: `${p.left}%`,
                bottom: "-5%",
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
                "--drift": `${p.drift}px`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Colonne texte */}
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 font-script text-2xl sm:text-3xl text-sauge-dark">
              <LeafIcon className="w-6 h-6" />
              {hero.eyebrow}
            </span>
            <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-brun leading-[1.08]">
              Retrouver l&apos;équilibre par une{" "}
              <span className="underline-brush italic text-miel">
                alimentation vraie
              </span>
              .
            </h1>
            <p className="mt-6 text-base sm:text-lg text-brun-soft leading-relaxed">
              {hero.subtitle}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#reservation"
                className="inline-flex items-center justify-center rounded-full bg-miel px-7 py-3.5 text-sm sm:text-base font-semibold text-cream shadow-md hover:bg-miel-light hover:-translate-y-0.5 transition-all duration-300"
              >
                {hero.ctaPrimary}
              </a>
              <a
                href="#approche"
                className="inline-flex items-center justify-center rounded-full border border-sauge/40 bg-white/50 px-7 py-3.5 text-sm sm:text-base font-semibold text-brun hover:bg-white transition-all duration-300"
              >
                {hero.ctaSecondary}
              </a>
            </div>

            {/* Ligne de confiance */}
            <p className="mt-6 flex items-center gap-2 text-sm text-brun-soft">
              <span className="inline-flex items-center gap-0.5 text-miel" aria-hidden="true">
                {"★★★★★"}
              </span>
              {hero.trust}
            </p>

            {/* Stats */}
            <dl className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {hero.stats.map((s) => (
                <div key={s.label} className="text-center sm:text-left">
                  <dt className="font-serif text-2xl sm:text-3xl font-semibold text-brun">
                    {s.value}
                  </dt>
                  <dd className="mt-0.5 text-xs sm:text-sm text-brun-soft leading-snug">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Colonne visuelle */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto w-full max-w-md aspect-[7/8] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brun/10 rotate-1">
              <Image
                src={hero.image}
                alt={hero.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 0px, 28rem"
                className="object-cover"
              />
            </div>

            {/* Badge flottant bas-gauche */}
            <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl bg-cream/95 backdrop-blur px-5 py-4 shadow-xl shadow-brun/10 -rotate-2">
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-sauge/20 text-sauge-dark">
                <LeafIcon className="w-6 h-6" />
              </span>
              <div>
                <p className="font-serif text-brun font-medium leading-tight">
                  {hero.badge.title}
                </p>
                <p className="text-xs text-brun-soft">{hero.badge.subtitle}</p>
              </div>
            </div>

            {/* Petite pastille prix flottante haut-droite */}
            <div className="absolute -top-4 -right-2 rounded-2xl bg-miel px-4 py-3 shadow-lg shadow-miel/30 rotate-3 text-center">
              <p className="font-script text-cream text-lg leading-none">
                dès
              </p>
              <p className="font-serif text-cream text-2xl font-semibold leading-tight">
                149€
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <a
        href="#approche"
        aria-label="Faire défiler vers le bas"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1 text-brun-soft"
      >
        <span className="text-xs font-medium tracking-wide uppercase">
          {hero.scrollHint}
        </span>
        <svg viewBox="0 0 24 24" className="w-5 h-5 scroll-bob" fill="none" aria-hidden="true">
          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}
