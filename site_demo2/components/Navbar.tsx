"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--color-border)] bg-[rgba(10,10,15,0.72)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-deep)] shadow-lg shadow-[rgba(127,119,221,0.4)] transition-transform duration-300 group-hover:scale-110">
            <span className="h-3.5 w-3.5 rounded-full bg-white/90" />
          </span>
          <span className="text-lg font-semibold tracking-tight">
            Séréné<span className="text-[var(--color-accent-soft)]">a</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "text-white"
                      : "text-[var(--color-text-muted)] hover:text-white"
                  }`}
                >
                  {l.label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-[var(--color-accent)]" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-full bg-[var(--color-accent)] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[rgba(127,119,221,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-accent-soft)] hover:shadow-[rgba(127,119,221,0.55)]"
          >
            Prendre rendez-vous
          </Link>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-[var(--color-border)] md:hidden"
        >
          <span
            className={`h-0.5 w-5 bg-white transition-all duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-white transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-white transition-all duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden border-t border-[var(--color-border)] bg-[rgba(10,10,15,0.95)] backdrop-blur-xl transition-[max-height] duration-400 ease-out md:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-transparent"
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    active
                      ? "bg-[var(--color-surface)] text-white"
                      : "text-[var(--color-text-muted)] hover:bg-[var(--color-surface)] hover:text-white"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
          <li className="mt-2">
            <Link
              href="/contact"
              className="block rounded-full bg-[var(--color-accent)] px-4 py-3 text-center text-base font-semibold text-white"
            >
              Prendre rendez-vous
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
