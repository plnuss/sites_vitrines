import { OFFRES } from "@/lib/content";
import Reveal from "./Reveal";

/*
  OffresSection — 3 formules en cards comparatives. L'offre du milieu
  (Performance) est mise en avant visuellement comme "la plus choisie".
*/

// Icone check reutilisee (SVG inline, aucune librairie).
function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M4 10.5l4 4 8-9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function OffresSection() {
  return (
    <section id="offres" className="relative bg-night py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-ember">
            Les offres
          </p>
          <h2 className="font-display text-4xl leading-tight text-bone md:text-5xl">
            Trois niveaux d'accompagnement, un seul objectif : le tien.
          </h2>
          <p className="mt-5 leading-relaxed text-bone-dim">
            Du cadre pour démarrer au sur-mesure complet pour un ultra. Chaque
            formule est personnalisée — les tarifs sont indicatifs et affinés
            lors de l'appel gratuit.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:items-stretch">
          {OFFRES.map((offre, i) => (
            <Reveal key={offre.id} delay={i * 100} className="flex">
              <div
                className={`group relative flex w-full flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1.5 ${
                  offre.featured
                    ? "border-ember bg-forest/60 shadow-xl shadow-black/40 md:-my-3 md:py-10"
                    : "border-forest-line bg-forest/25 hover:border-ember/60"
                }`}
              >
                {offre.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-ember px-4 py-1 text-xs font-semibold uppercase tracking-wider text-night">
                    La plus choisie
                  </span>
                )}

                <div className="mb-5">
                  <h3 className="font-display text-3xl uppercase tracking-wide text-bone">
                    {offre.name}
                  </h3>
                  <p className="mt-1 text-sm text-bone-dim">{offre.pitch}</p>
                </div>

                <div className="mb-6 flex items-baseline gap-2">
                  <span className="font-display text-4xl text-ember">
                    {offre.price}
                  </span>
                  <span className="text-sm text-bone-dim">{offre.priceNote}</span>
                </div>

                <ul className="mb-7 space-y-3.5">
                  {offre.features.map((f, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed">
                      <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-ember" />
                      <span className="text-bone-dim">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <p className="mb-5 rounded-xl border border-forest-line bg-night/40 p-3.5 text-xs leading-relaxed text-bone-dim">
                    <span className="font-semibold text-bone">Idéal pour : </span>
                    {offre.idealFor}
                  </p>
                  <a
                    href="#contact"
                    className={`block rounded-full px-6 py-3 text-center text-sm font-semibold transition-all duration-200 ${
                      offre.featured
                        ? "bg-ember text-night hover:bg-ember-soft"
                        : "border border-forest-line text-bone hover:border-ember hover:text-ember"
                    }`}
                  >
                    Choisir cette offre
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
