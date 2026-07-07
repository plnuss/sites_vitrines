import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-[var(--color-border)] bg-[var(--color-bg-soft)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-deep)]">
              <span className="h-3.5 w-3.5 rounded-full bg-white/90" />
            </span>
            <span className="text-lg font-semibold tracking-tight">
              Séréné<span className="text-[var(--color-accent-soft)]">a</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--color-text-muted)]">
            Accompagnement holistique en coaching de vie, sophrologie et
            naturopathie. Un espace pour retrouver équilibre, énergie et clarté.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Navigation</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-[var(--color-text-muted)]">
            <li><Link href="/" className="transition-colors hover:text-white">Accueil</Link></li>
            <li><Link href="/services" className="transition-colors hover:text-white">Services</Link></li>
            <li><Link href="/realisations" className="transition-colors hover:text-white">Réalisations</Link></li>
            <li><Link href="/contact" className="transition-colors hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Contact</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-[var(--color-text-muted)]">
            <li>12 rue des Tilleuls, 69003 Lyon</li>
            <li>
              <a href="mailto:contact@serenea.fr" className="transition-colors hover:text-white">
                contact@serenea.fr
              </a>
            </li>
            <li>
              <a href="tel:+33612345678" className="transition-colors hover:text-white">
                06 12 34 56 78
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--color-border)]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-[var(--color-text-muted)] sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} Sérénéa. Tous droits réservés.</p>
          <p>Site de démonstration — contenu fictif.</p>
        </div>
      </div>
    </footer>
  );
}
