import type { Metadata } from "next";
import { gallery } from "@/lib/data";

export const metadata: Metadata = {
  title: "Réalisations | Ancrage — Élise Vasseur",
  description:
    "Découvrez des exemples fictifs d'accompagnements menés par Élise Vasseur : coaching, sophrologie et naturopathie.",
};

const gradients = [
  "from-accent/40 via-surface-2 to-background",
  "from-accent-soft/30 via-surface-2 to-background",
  "from-accent/30 via-background to-surface-2",
  "from-accent-soft/40 via-background to-surface-2",
  "from-accent/25 via-surface-2 to-background",
  "from-accent-soft/25 via-background to-surface-2",
];

export default function RealisationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-14 flex flex-col gap-4">
        <span className="text-sm uppercase tracking-[0.2em] text-accent-soft">Réalisations</span>
        <h1 className="font-serif text-4xl text-foreground sm:text-5xl">
          Des parcours, des transformations
        </h1>
        <p className="max-w-2xl text-muted">
          Quelques exemples représentatifs d&apos;accompagnements passés. Les prénoms et détails
          ont été modifiés pour préserver la confidentialité de chacun.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((item, index) => (
          <article
            key={item.slug}
            className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface"
          >
            <div
              className={`flex h-40 items-center justify-center bg-gradient-to-br ${gradients[index % gradients.length]}`}
            >
              <span className="font-serif text-lg text-foreground/80">{item.category}</span>
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <h2 className="font-serif text-xl text-foreground">{item.title}</h2>
              <p className="text-sm text-muted">{item.description}</p>
              <blockquote className="mt-auto border-l-2 border-accent pl-4 text-sm italic text-foreground/90">
                « {item.quote} »
                <footer className="mt-2 text-xs not-italic uppercase tracking-[0.1em] text-muted">
                  {item.author}
                </footer>
              </blockquote>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
