import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Sérénéa",
  description:
    "Contactez Sérénéa pour réserver votre bilan découverte offert. Coaching de vie, sophrologie et naturopathie à Lyon ou en visioconférence.",
};

const infos = [
  { icon: "📍", label: "Cabinet", value: "12 rue des Tilleuls, 69003 Lyon" },
  { icon: "✉️", label: "Email", value: "contact@serenea.fr", href: "mailto:contact@serenea.fr" },
  { icon: "📞", label: "Téléphone", value: "06 12 34 56 78", href: "tel:+33612345678" },
  { icon: "🕑", label: "Horaires", value: "Lun–Sam · 9h–19h" },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden pb-8 pt-32 sm:pt-40">
      <div className="blob left-[-10%] top-10 h-80 w-80 bg-[radial-gradient(circle,#7f77dd,transparent_70%)] opacity-25" />
      <div className="blob right-[-8%] bottom-0 h-72 w-72 bg-[radial-gradient(circle,#5a52b8,transparent_70%)] opacity-20" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-soft)]">
            Parlons de vous
          </span>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Réservez votre <span className="text-gradient">bilan offert</span>
          </h1>
          <p className="mt-5 text-lg text-[var(--color-text-muted)]">
            Une question, une envie de démarrer&nbsp;? Écrivez-moi. Je réponds
            personnellement sous 24&nbsp;heures.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Infos */}
          <div className="reveal space-y-4">
            {infos.map((info) => (
              <div
                key={info.label}
                className="flex items-start gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-colors hover:border-[var(--color-accent)]/50"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent)]/12 text-xl">
                  {info.icon}
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-[var(--color-text-muted)]">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} className="text-sm font-medium text-white transition-colors hover:text-[var(--color-accent-soft)]">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-white">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/8 p-5">
              <p className="text-sm font-semibold text-white">🌿 Séance découverte offerte</p>
              <p className="mt-1.5 text-sm text-[var(--color-text-muted)]">
                30 minutes pour faire connaissance, sans aucun engagement.
              </p>
            </div>
          </div>

          {/* Formulaire */}
          <div className="reveal rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 sm:p-9" data-delay="120">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
