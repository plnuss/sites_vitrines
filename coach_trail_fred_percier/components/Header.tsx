"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, BOOKING_URL, BRAND } from "@/lib/content";

/*
  Header — sticky, transparent en haut de page puis fond sombre plein +
  ombre au scroll. Menu hamburger avec overlay plein ecran sur mobile.
*/
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloque le scroll du body quand le menu mobile est ouvert.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-night/95 shadow-lg shadow-black/40 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
        {/* Logo texte */}
        <a href="#top" className="group flex flex-col leading-none" onClick={() => setMenuOpen(false)}>
          <span className="font-display text-lg tracking-wide text-bone md:text-xl">
            {BRAND.name}
          </span>
          <span className="text-[0.62rem] uppercase tracking-[0.22em] text-ember md:text-xs">
            {BRAND.tagline}
          </span>
        </a>

        {/* Navigation desktop */}
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-bone-dim transition-colors duration-200 hover:text-bone"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-ember px-5 py-2.5 text-sm font-semibold text-night transition-transform duration-200 hover:-translate-y-0.5 hover:bg-ember-soft lg:inline-block"
        >
          Réserver un appel gratuit
        </a>

        {/* Bouton hamburger (mobile / tablette) */}
        <button
          type="button"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-bone transition-all duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-bone transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-bone transition-all duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Overlay plein ecran mobile */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-night/98 backdrop-blur transition-all duration-300 lg:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-1 flex-col items-center justify-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl uppercase tracking-wide text-bone transition-colors hover:text-ember"
            >
              {link.label}
            </a>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-4 rounded-full bg-ember px-8 py-3.5 text-base font-semibold text-night"
          >
            Réserver un appel gratuit
          </a>
        </nav>
      </div>
    </header>
  );
}
