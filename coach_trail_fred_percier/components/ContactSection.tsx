import { CONTACT, BOOKING_URL, CONTACT_EMAIL } from "@/lib/content";
import Reveal from "./Reveal";

/*
  ContactSection — CTA forte sur fond accent chaud. Prise de rendez-vous
  (placeholder Calendly) + contact e-mail (mailto). Aucun backend.
*/
export default function ContactSection() {
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    "Appel gratuit — coaching course à pied / trail",
  )}&body=${encodeURIComponent(
    "Bonjour Frédéric,\n\nJe souhaiterais échanger sur mon objectif.\n\nMon objectif : \nMon niveau actuel : \nMon échéance : \nMon temps dispo par semaine : \n\nMerci !",
  )}`;

  return (
    <section id="contact" className="relative overflow-hidden bg-ember py-24 text-night md:py-32">
      {/* Texture / grain leger pour casser l'aplat */}
      <div className="grain-overlay opacity-[0.12]" aria-hidden />

      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-night/70">
            Sans engagement
          </p>
          <h2 className="font-display text-4xl leading-tight text-night md:text-6xl">
            {CONTACT.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-night/80 md:text-lg">
            {CONTACT.text}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-night px-8 py-4 text-base font-semibold text-bone transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
            >
              {CONTACT.ctaBooking}
            </a>
            <a
              href={mailto}
              className="w-full rounded-full border-2 border-night/40 px-8 py-4 text-base font-semibold text-night transition-colors duration-200 hover:border-night sm:w-auto"
            >
              {CONTACT.ctaEmail}
            </a>
          </div>

          <p className="mt-6 text-sm text-night/60">
            Réponse sous 48 h · Échange en visio ou par téléphone
          </p>
        </Reveal>
      </div>
    </section>
  );
}
