"use client";

import { useRef } from "react";
import { AVIS } from "@/lib/content";
import Reveal from "./Reveal";

// Monogramme (initiales) a partir du nom "Prénom, 38 ans".
function initials(name: string): string {
  const first = name.split(",")[0]?.trim() ?? name;
  return first.slice(0, 2).toUpperCase();
}

/*
  AvisSection — carrousel horizontal de temoignages (scroll tactile natif +
  fleches sur desktop). Profils varies, orientes resultats concrets.
*/
function QuoteMark() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-9 w-9 text-ember/60" aria-hidden>
      <path
        d="M17 10c-5 2-8 6-8 12v8h9v-9h-5c0-4 2-6 5-7l-1-4zm16 0c-5 2-8 6-8 12v8h9v-9h-5c0-4 2-6 5-7l-1-4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function AvisSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const amount = Math.min(track.clientWidth * 0.85, 380);
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section id="avis" className="relative bg-night py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-ember">
              Avis clients
            </p>
            <h2 className="font-display text-4xl leading-tight text-bone md:text-5xl">
              Des objectifs visés, des objectifs atteints.
            </h2>
          </Reveal>

          {/* Fleches (desktop) */}
          <div className="hidden gap-3 md:flex">
            <button
              type="button"
              aria-label="Témoignage précédent"
              onClick={() => scrollByCard(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-forest-line text-bone transition-colors hover:border-ember hover:text-ember"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Témoignage suivant"
              onClick={() => scrollByCard(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-forest-line text-bone transition-colors hover:border-ember hover:text-ember"
            >
              →
            </button>
          </div>
        </div>

        {/* Piste scrollable */}
        <div
          ref={trackRef}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
        >
          {AVIS.map((avis, i) => (
            <article
              key={i}
              className="flex w-[85%] shrink-0 snap-start flex-col rounded-2xl border border-forest-line bg-forest/30 p-7 sm:w-[420px]"
            >
              <QuoteMark />
              <p className="mt-4 flex-1 text-lg leading-relaxed text-bone">
                {avis.quote}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span
                  aria-hidden
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ember/40 bg-forest font-display text-lg text-ember"
                >
                  {initials(avis.name)}
                </span>
                <div>
                  <p className="font-semibold text-bone">{avis.name}</p>
                  <p className="text-sm text-ember">{avis.detail}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
