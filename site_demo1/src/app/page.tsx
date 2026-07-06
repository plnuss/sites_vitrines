import Link from "next/link";
import { services } from "@/lib/data";

const featured = services.filter((s) => s.highlight);

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="glow-accent absolute inset-0 -z-10" />
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-24 sm:py-32">
          <span className="rounded-full border border-border bg-surface px-4 py-1 text-xs uppercase tracking-[0.2em] text-accent-soft">
            Coaching · Sophrologie · Naturopathie
          </span>
          <h1 className="max-w-2xl font-serif text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">
            Retrouvez l&apos;équilibre entre corps et esprit
          </h1>
          <p className="max-w-xl text-lg text-muted">
            Je suis Élise Vasseur, coach de vie, sophrologue certifiée et naturopathe. Je vous
            accompagne, à Nantes ou à distance, vers une vie plus alignée avec qui vous êtes.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-accent px-6 py-3 text-center text-sm font-medium text-background transition-colors hover:bg-accent-soft"
            >
              Réserver un premier échange
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-border px-6 py-3 text-center text-sm font-medium text-foreground transition-colors hover:border-accent-soft hover:text-accent-soft"
            >
              Découvrir mes accompagnements
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 flex flex-col gap-3">
          <span className="text-sm uppercase tracking-[0.2em] text-accent-soft">
            Mes accompagnements phares
          </span>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
            Trois chemins, un même objectif : votre équilibre
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service) => (
            <div
              key={service.slug}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent-soft/60"
            >
              <span className="text-xs uppercase tracking-[0.15em] text-accent-soft">
                {service.category}
              </span>
              <h3 className="font-serif text-xl text-foreground">{service.title}</h3>
              <p className="text-sm text-muted">{service.description}</p>
              <div className="mt-auto flex items-center justify-between border-t border-border pt-4 text-sm">
                <span className="text-muted">{service.duration}</span>
                <span className="font-medium text-foreground">{service.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="text-sm font-medium text-accent-soft underline-offset-4 hover:underline"
          >
            Voir tous les services et tarifs →
          </Link>
        </div>
      </section>

      <section className="border-t border-border/60 bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-20 text-center">
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
            Un premier échange, sans engagement
          </h2>
          <p className="max-w-xl text-muted">
            Parlons de votre situation lors d&apos;un appel de 20 minutes, gratuit, pour définir
            ensemble l&apos;accompagnement le plus adapté à vos besoins.
          </p>
          <Link
            href="/contact"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent-soft"
          >
            Me contacter
          </Link>
        </div>
      </section>
    </>
  );
}
