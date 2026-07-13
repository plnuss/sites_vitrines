import { NAV_LINKS, SOCIALS, BRAND, CONTACT_EMAIL } from "@/lib/content";

/*
  Footer — logo, nav rapide, reseaux sociaux (SVG inline), mentions legales
  fictives et copyright.
*/

// Icones SVG inline (aucune librairie externe).
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
    </svg>
  );
}
function StravaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M9 3l5 10h-3l-2-4-2 4H4L9 3zm4 12l2 4 2-4h-2.6l-.4-.8-.4.8H13z" />
    </svg>
  );
}
function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 9.5l5 2.5-5 2.5v-5z" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-forest-line bg-night-2 py-14">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Marque */}
          <div>
            <p className="font-display text-2xl text-bone">{BRAND.name}</p>
            <p className="mt-1 text-sm uppercase tracking-[0.2em] text-ember">
              {BRAND.tagline}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-bone-dim">
              Coaching course à pied & trail, du premier 10 km à l'ultra. Un plan
              pour ton objectif, un suivi qui te tient responsable.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={SOCIALS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-forest-line text-bone-dim transition-colors hover:border-ember hover:text-ember"
              >
                <InstagramIcon />
              </a>
              <a
                href={SOCIALS.strava}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Strava"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-forest-line text-bone-dim transition-colors hover:border-ember hover:text-ember"
              >
                <StravaIcon />
              </a>
              <a
                href={SOCIALS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-forest-line text-bone-dim transition-colors hover:border-ember hover:text-ember"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Navigation rapide */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-bone-dim">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-bone-dim transition-colors hover:text-ember"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-bone-dim">
              Contact
            </p>
            <ul className="space-y-2.5 text-sm text-bone-dim">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="transition-colors hover:text-ember"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>France · à distance, partout</li>
              <li>Réponse sous 48 h</li>
            </ul>
          </div>
        </div>

        {/* Bas de footer */}
        <div className="mt-12 flex flex-col gap-3 border-t border-forest-line pt-6 text-xs text-bone-dim md:flex-row md:items-center md:justify-between">
          <p>© {year} {BRAND.name}. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="#" className="transition-colors hover:text-ember">
              Mentions légales
            </a>
            <a href="#" className="transition-colors hover:text-ember">
              Politique de confidentialité
            </a>
            <a href="#" className="transition-colors hover:text-ember">
              CGV
            </a>
          </div>
        </div>
        <p className="mt-6 text-[0.7rem] leading-relaxed text-bone-dim/60">
          Site de démonstration. Frédéric Percier est un personnage fictif ;
          palmarès, tarifs et témoignages sont illustratifs et à remplacer par
          des informations réelles.
        </p>
      </div>
    </footer>
  );
}
