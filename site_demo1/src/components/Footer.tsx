import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <span className="font-serif text-lg text-foreground">Ancrage</span>
          <p className="mt-3 text-sm text-muted">
            Coaching de vie, sophrologie et naturopathie à Nantes, en cabinet ou à distance.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-foreground">Navigation</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li><Link href="/" className="hover:text-foreground">Accueil</Link></li>
            <li><Link href="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link href="/realisations" className="hover:text-foreground">Réalisations</Link></li>
            <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-medium text-foreground">Coordonnées</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>12 rue des Tilleuls, 44000 Nantes</li>
            <li>06 12 34 56 78</li>
            <li>contact@ancrage-coaching.fr</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-medium text-foreground">Horaires</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Lundi – Vendredi : 9h – 19h</li>
            <li>Samedi : 9h – 13h</li>
            <li>Fermé le dimanche</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60 px-6 py-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} Ancrage — Élise Vasseur. Site fictif à but de démonstration.
      </div>
    </footer>
  );
}
