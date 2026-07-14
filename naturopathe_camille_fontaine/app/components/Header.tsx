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
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-cream/95 backdrop-blur shadow-sm" : "bg-transparent"
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
      </header>

      {/*
        Overlay mobile plein écran — rendu HORS du <header> à dessein.
        Un ancêtre avec backdrop-blur (ajouté au header au scroll) crée un
        nouveau containing block pour ses descendants en position fixed,
        ce qui casse l'opacité de ce panneau sur iOS Safari/WKWebView.
        En le sortant du header, il reste toujours positionné par rapport
        au viewport et son fond opaque s'affiche correctement.
      */}
      <div
        aria-hidden={!menuOpen}
        className={`lg:hidden fixed inset-0 z-[60] transition-transform duration-300 ease-out ${
          menuOpen
            ? "translate-x-0 pointer-events-auto"
            : "translate-x-full pointer-events-none"
        }`}
        style={{ backgroundColor: "#FBF8F1" }}
      >
        <div className="flex items-center justify-between px-5 h-18 py-3">
          <span className="font-serif text-lg font-medium text-brun">
            {siteInfo.name}
          </span>
          <button
            type="button"
            aria-label="Fermer le menu"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center rounded-full w-11 h-11 text-brun hover:bg-cream-dark transition-colors duration-250"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="flex flex-col px-8 gap-2">
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
    </>
  );
}
