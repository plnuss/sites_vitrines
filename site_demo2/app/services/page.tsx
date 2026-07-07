import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/lib/data";
import ServiceIcon from "@/components/ServiceIcon";

export const metadata: Metadata = {
  title: "Services & tarifs — Sérénéa",
  description:
    "Découvrez les accompagnements Sérénéa : coaching de vie, sophrologie, naturopathie, ateliers et programmes. Prix indicatifs et détails de chaque prestation.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-8 pt-32 sm:pt-40">
        <div className="blob left-[-8%] top-0 h-80 w-80 bg-[radial-gradient(circle,#7f77dd,transparent_70%)] opacity-30" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <span className="reveal text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-soft)]">
            Prestations
          </span>
          <h1 className="reveal mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl" data-delay="80">
            Des accompagnements pensés pour{" "}
            <span className="text-gradient">votre équilibre</span>
          </h1>
          <p className="reveal mt-5 max-w-2xl text-lg text-[var(--color-text-muted)]" data-delay="140">
            Chaque prestation peut se vivre seule ou se combiner au sein d'un
            parcours personnalisé. Les tarifs indiqués sont donnés à titre
            indicatif.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((s, i) => (
            <article
              key={s.slug}
              data-delay={(i % 2) * 100}
              className="card-sheen reveal group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/60"
            >
              {s.featured && (
                <span className="absolute right-5 top-5 rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 px-3 py-1 text-xs font-medium text-[var(--color-accent-soft)]">
                  Populaire
                </span>
              )}

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-accent)]/12 text-[var(--color-accent-soft)] transition-colors duration-300 group-hover:bg-[var(--color-accent)] group-hover:text-white">
                  <ServiceIcon name={s.icon} className="h-7 w-7" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">{s.title}</h2>
                  <p className="text-sm font-medium text-[var(--color-accent-soft)]">{s.tagline}</p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-[var(--color-text-muted)]">{s.description}</p>

              <ul className="mt-5 space-y-2.5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-[var(--color-text)]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/15 text-xs text-[var(--color-accent-soft)]">✓</span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex items-end justify-between border-t border-[var(--color-border)] pt-5">
                <div>
                  <p className="text-2xl font-bold text-white">{s.price}</p>
                  <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">Durée&nbsp;: {s.duration}</p>
                </div>
                <Link
                  href="/contact"
                  className="rounded-full bg-[var(--color-accent)]/12 px-5 py-2.5 text-sm font-semibold text-[var(--color-accent-soft)] transition-all duration-300 hover:bg-[var(--color-accent)] hover:text-white"
                >
                  Réserver
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Note tarifaire */}
        <div className="reveal mt-10 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-6 text-sm text-[var(--color-text-muted)]">
          <p>
            <span className="font-semibold text-white">Bon à savoir&nbsp;:</span>{" "}
            un bilan découverte de 30 minutes est offert pour tout premier
            rendez-vous. Des formules d'abonnement et forfaits dégressifs sont
            disponibles sur demande. Séances possibles en cabinet à Lyon ou en
            visioconférence.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal rounded-3xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-surface-2)] to-[var(--color-bg-soft)] px-8 py-12 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Une question sur la formule idéale&nbsp;?</h2>
          <p className="mx-auto mt-3 max-w-xl text-[var(--color-text-muted)]">
            Parlons-en. Je vous oriente vers l'accompagnement le plus adapté à
            votre situation, sans engagement.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[rgba(127,119,221,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-accent-soft)]"
          >
            Me contacter →
          </Link>
        </div>
      </section>
    </>
  );
}
