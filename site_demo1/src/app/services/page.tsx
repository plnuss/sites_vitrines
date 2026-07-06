import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services & Tarifs | Ancrage — Élise Vasseur",
  description:
    "Coaching de vie, sophrologie et naturopathie : découvrez l'ensemble des séances, forfaits et tarifs indicatifs proposés par Élise Vasseur.",
};

const categories = [
  "Coaching",
  "Sophrologie",
  "Naturopathie",
  "Accompagnement complet",
] as const;

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-14 flex flex-col gap-4">
        <span className="text-sm uppercase tracking-[0.2em] text-accent-soft">Services</span>
        <h1 className="font-serif text-4xl text-foreground sm:text-5xl">
          Des accompagnements sur mesure
        </h1>
        <p className="max-w-2xl text-muted">
          Chaque parcours est adapté à votre rythme et à vos besoins. Les tarifs ci-dessous sont
          indicatifs ; ils peuvent être ajustés lors de notre premier échange.
        </p>
      </div>

      <div className="flex flex-col gap-16">
        {categories.map((category) => {
          const items = services.filter((s) => s.category === category);
          if (items.length === 0) return null;

          return (
            <div key={category}>
              <h2 className="mb-6 font-serif text-2xl text-foreground">{category}</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {items.map((service) => (
                  <div
                    key={service.slug}
                    className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-serif text-xl text-foreground">{service.title}</h3>
                      <span className="whitespace-nowrap rounded-full bg-surface-2 px-3 py-1 text-sm font-medium text-accent-soft">
                        {service.price}
                      </span>
                    </div>
                    <p className="text-sm text-muted">{service.description}</p>
                    <span className="mt-auto text-xs uppercase tracking-[0.15em] text-muted">
                      Durée : {service.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl border border-border bg-surface px-6 py-12 text-center">
        <h2 className="font-serif text-2xl text-foreground sm:text-3xl">
          Une question sur le déroulement d&apos;une séance ?
        </h2>
        <p className="max-w-xl text-muted">
          Contactez-moi pour un premier échange gratuit de 20 minutes, en visio ou par téléphone.
        </p>
        <Link
          href="/contact"
          className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent-soft"
        >
          Me contacter
        </Link>
      </div>
    </div>
  );
}
