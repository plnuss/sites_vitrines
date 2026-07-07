import Link from "next/link";
import { services, testimonials } from "@/lib/data";
import ServiceIcon from "@/components/ServiceIcon";

export default function Home() {
  const featured = services.filter((s) => s.featured);

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
        {/* blobs */}
        <div className="blob left-[-10%] top-[-6%] h-[420px] w-[420px] animate-pulse-glow bg-[radial-gradient(circle,#7f77dd,transparent_70%)]" />
        <div className="blob right-[-8%] top-[20%] h-[360px] w-[360px] animate-pulse-glow bg-[radial-gradient(circle,#5a52b8,transparent_70%)] [animation-delay:1.5s]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="reveal inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/60 px-4 py-1.5 text-xs font-medium text-[var(--color-accent-soft)] backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              </span>
              Nouveaux accompagnements disponibles
            </div>

            <h1 className="reveal mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl" data-delay="80">
              Retrouvez votre{" "}
              <span className="text-gradient">équilibre intérieur</span>, en
              douceur.
            </h1>

            <p className="reveal mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-text-muted)]" data-delay="160">
              Coaching de vie, sophrologie et naturopathie réunis dans un
              accompagnement holistique. Apaisez votre mental, ravivez votre
              énergie et avancez avec clarté.
            </p>

            <div className="reveal mt-9 flex flex-col gap-3 sm:flex-row" data-delay="240">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[rgba(127,119,221,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-accent-soft)] hover:shadow-[rgba(127,119,221,0.55)]"
              >
                Réserver un premier échange
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/50 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-[var(--color-accent)]"
              >
                Découvrir les services
              </Link>
            </div>

            <dl className="reveal mt-12 grid grid-cols-3 gap-6 border-t border-[var(--color-border)] pt-8" data-delay="320">
              {[
                { n: "300+", l: "Personnes accompagnées" },
                { n: "8 ans", l: "D'expérience" },
                { n: "4,9/5", l: "Satisfaction moyenne" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="text-2xl font-bold text-white sm:text-3xl">{s.n}</dt>
                  <dd className="mt-1 text-xs text-[var(--color-text-muted)] sm:text-sm">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Carte visuelle flottante */}
          <div className="reveal relative mx-auto w-full max-w-md" data-delay="200">
            <div className="animate-float">
              <div className="relative rounded-3xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-bg-soft)] p-8 shadow-2xl shadow-black/40">
                <div className="absolute -right-3 -top-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-deep)] shadow-lg shadow-[rgba(127,119,221,0.5)]">
                  <span className="text-2xl">🌿</span>
                </div>
                <p className="text-sm font-medium text-[var(--color-accent-soft)]">Votre séance découverte</p>
                <p className="mt-2 text-2xl font-bold text-white">Bilan personnalisé offert</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  30 minutes pour faire le point ensemble et définir
                  l'accompagnement le plus adapté à vos besoins.
                </p>

                <div className="mt-6 space-y-3">
                  {["Écoute sans jugement", "Approche 100 % personnalisée", "En cabinet ou en visio"].map((f) => (
                    <div key={f} className="flex items-center gap-3 text-sm text-[var(--color-text)]">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent-soft)]">✓</span>
                      {f}
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex items-center justify-between rounded-2xl bg-[var(--color-bg)]/60 p-4">
                  <div>
                    <p className="text-xs text-[var(--color-text-muted)]">Prochaine dispo.</p>
                    <p className="text-sm font-semibold text-white">Cette semaine</p>
                  </div>
                  <Link href="/contact" className="rounded-full bg-[var(--color-accent)] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[var(--color-accent-soft)]">
                    Réserver
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SERVICES PHARES ---------------- */}
      <section className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-soft)]">
            Mes accompagnements
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Trois approches, un même objectif&nbsp;: votre mieux-être
          </h2>
          <p className="mt-4 text-[var(--color-text-muted)]">
            Chaque personne est unique. Je combine ces disciplines
            complémentaires pour construire un accompagnement sur mesure.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {featured.map((s, i) => (
            <div
              key={s.slug}
              data-delay={i * 100}
              className="card-sheen reveal group flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-accent)]/60"
            >
              <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-[var(--color-accent)]/12 p-3 text-[var(--color-accent-soft)] transition-colors duration-300 group-hover:bg-[var(--color-accent)] group-hover:text-white">
                <ServiceIcon name={s.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-1 text-sm font-medium text-[var(--color-accent-soft)]">{s.tagline}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">{s.description}</p>
              <div className="mt-6 flex items-center justify-between border-t border-[var(--color-border)] pt-4">
                <span className="text-sm font-semibold text-white">{s.price}</span>
                <Link href="/services" className="text-sm font-medium text-[var(--color-accent-soft)] transition-colors hover:text-white">
                  En savoir plus →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- APPROCHE / PROCESSUS ---------------- */}
      <section className="relative overflow-hidden border-y border-[var(--color-border)] bg-[var(--color-bg-soft)] py-20">
        <div className="blob left-1/2 top-0 h-72 w-72 -translate-x-1/2 bg-[radial-gradient(circle,#7f77dd,transparent_70%)] opacity-20" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-soft)]">Ma méthode</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Un chemin en quatre temps</h2>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Rencontre", d: "Un premier échange pour comprendre vos besoins et vos objectifs, sans engagement." },
              { n: "02", t: "Bilan", d: "Une évaluation globale de votre situation pour construire un plan adapté." },
              { n: "03", t: "Accompagnement", d: "Des séances régulières mêlant les approches les plus pertinentes pour vous." },
              { n: "04", t: "Autonomie", d: "Vous repartez avec des outils concrets pour cultiver durablement votre équilibre." },
            ].map((step, i) => (
              <div key={step.n} data-delay={i * 90} className="reveal relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                <span className="text-4xl font-extrabold text-[var(--color-accent)]/30">{step.n}</span>
                <h3 className="mt-2 text-lg font-semibold text-white">{step.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- TÉMOIGNAGES ---------------- */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-soft)]">Témoignages</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Ils ont retrouvé leur sérénité</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={t.name} data-delay={i * 100} className="reveal flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7">
              <div className="text-[var(--color-accent-soft)]">★★★★★</div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-[var(--color-text)]">
                « {t.quote} »
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-deep)] text-sm font-semibold text-white">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">{t.name}</span>
                  <span className="block text-xs text-[var(--color-text-muted)]">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ---------------- CTA FINAL ---------------- */}
      <section className="mx-auto max-w-6xl px-5 pb-8 sm:px-8">
        <div className="reveal card-sheen relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-surface-2)] to-[var(--color-bg-soft)] px-8 py-14 text-center sm:px-16">
          <div className="blob left-[-5%] top-[-30%] h-72 w-72 bg-[radial-gradient(circle,#7f77dd,transparent_70%)] opacity-30" />
          <div className="blob right-[-5%] bottom-[-40%] h-72 w-72 bg-[radial-gradient(circle,#5a52b8,transparent_70%)] opacity-30" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Prêt·e à faire le premier pas vers votre équilibre&nbsp;?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-muted)]">
              Réservez votre bilan découverte offert. On prend le temps de faire
              connaissance et de définir ensemble la meilleure approche.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-[rgba(127,119,221,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-accent-soft)]"
            >
              Réserver mon bilan offert →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
