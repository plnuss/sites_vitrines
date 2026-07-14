"use client";

import { useEffect, useState } from "react";
import { nav, siteInfo } from "@/app/content";
import { CloseIcon, MenuIcon } from "@/app/components/ui/Icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between h-18 py-3">
        <a
          href="#accueil"
          className="font-serif text-lg sm:text-xl font-medium text-brun leading-tight"
        >
          {siteInfo.name}
          <span className="hidden sm:inline text-brun-soft font-sans text-sm font-normal">
            {" "}
            — {siteInfo.title}
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brun-soft hover:text-miel transition-colors duration-250"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#reservation"
            className="hidden sm:inline-flex items-center rounded-full bg-miel px-5 py-2.5 text-sm font-semibold text-cream shadow-sm hover:bg-miel-light hover:shadow-md transition-all duration-250"
          >
            Réserver un appel
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center rounded-full w-11 h-11 text-brun hover:bg-cream-dark transition-colors duration-250"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Overlay mobile plein écran */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-cream transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-8 gap-2">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-serif text-3xl text-brun py-4 border-b border-brun/10"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#reservation"
            onClick={() => setMenuOpen(false)}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-miel px-6 py-3.5 text-base font-semibold text-cream shadow-sm"
          >
            Réserver un appel
          </a>
        </div>
      </div>
    </header>
  );
}
