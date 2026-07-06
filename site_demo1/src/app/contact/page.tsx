import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Ancrage — Élise Vasseur",
  description:
    "Contactez Élise Vasseur pour un premier échange gratuit autour de coaching, sophrologie ou naturopathie.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-14 flex flex-col gap-4">
        <span className="text-sm uppercase tracking-[0.2em] text-accent-soft">Contact</span>
        <h1 className="font-serif text-4xl text-foreground sm:text-5xl">Parlons de votre projet</h1>
        <p className="max-w-2xl text-muted">
          Une question, une envie d&apos;échanger avant de réserver une séance ? Écrivez-moi, je
          reviens vers vous sous 48h.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <ContactForm />

        <div className="flex flex-col gap-8">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h2 className="font-serif text-xl text-foreground">Cabinet</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>12 rue des Tilleuls, 44000 Nantes</li>
              <li>06 12 34 56 78</li>
              <li>contact@ancrage-coaching.fr</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6">
            <h2 className="font-serif text-xl text-foreground">Horaires</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>Lundi – Vendredi : 9h – 19h</li>
              <li>Samedi : 9h – 13h</li>
              <li>Dimanche : fermé</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6">
            <h2 className="font-serif text-xl text-foreground">Séances à distance</h2>
            <p className="mt-4 text-sm text-muted">
              Les séances de coaching et de sophrologie sont également proposées en visio pour les
              personnes ne pouvant pas se déplacer jusqu&apos;au cabinet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
