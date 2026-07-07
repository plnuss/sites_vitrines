import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Réalisations — Sérénéa",
  description:
    "Découvrez des exemples d'accompagnements menés par Sérénéa : coaching, sophrologie, naturopathie. Des parcours de transformation réels et inspirants.",
};

export default function RealisationsPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-8 pt-32 sm:pt-40">
        <div className="blob right-[-8%] top-0 h-80 w-80 bg-[radial-gradient(circle,#5a52b8,transparent_70%)] opacity-30" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <span className="reveal text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-soft)]">
            Parcours & résultats
          </span>
          <h1 className="reveal mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl" data-delay="80">
            Des transformations{" "}
            <span className="text-gradient">qui inspirent</span>
          </h1>
          <p className="reveal mt-5 max-w-2xl text-lg text-[var(--color-text-muted)]" data-delay="140">
            Chaque histoire est unique. Voici quelques exemples d'accompagnements
            menés — anonymisés et représentatifs des parcours possibles.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.title}
              data-delay={(i % 3) * 90}
              className="card-sheen reveal group flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-accent)]/60"
            >
              {/* Visuel dégradé */}
              <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5) 0, transparent 45%), radial-gradient(circle at 75% 70%, rgba(255,255,255,0.35) 0, transparent 40%)",
                  }}
                />
                <div className="absolute inset-0 flex items-end p-5">
                  <span className="rounded-full bg-black/25 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="absolute right-4 top-4 text-3xl transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">
                  ✦
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-lg font-semibold text-white">{p.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">{p.description}</p>
                <div className="mt-5 flex items-center gap-2 rounded-xl bg-[var(--color-accent)]/8 px-4 py-3">
                  <span className="text-[var(--color-accent-soft)]">↗</span>
                  <span className="text-sm font-medium text-[var(--color-text)]">{p.result}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bandeau chiffres */}
        <div className="reveal mt-14 grid gap-6 rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-8 text-center sm:grid-cols-4">
          {[
            { n: "300+", l: "Accompagnements" },
            { n: "96 %", l: "Recommandent" },
            { n: "8 ans", l: "D'expérience" },
            { n: "12", l: "Ateliers animés / an" },
          ].map((s) => (
            <div key={s.l}>
              <p className="text-3xl font-extrabold text-white">{s.n}</p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal rounded-3xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-surface-2)] to-[var(--color-bg-soft)] px-8 py-12 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Et si la prochaine histoire était la vôtre&nbsp;?</h2>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[rgba(127,119,221,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-accent-soft)]"
          >
            Commencer mon accompagnement →
          </Link>
        </div>
      </section>
    </>
  );
}
