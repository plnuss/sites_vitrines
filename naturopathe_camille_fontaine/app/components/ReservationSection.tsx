import { reservation, siteInfo } from "@/app/content";
import { Reveal } from "@/app/components/ui/Reveal";

export function ReservationSection() {
  return (
    <section
      id="reservation"
      className="relative bg-gradient-gold py-24 sm:py-28 overflow-hidden"
    >
      <div
        className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-cream/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-miel-pastel/50 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-5 sm:px-8 text-center">
        <Reveal>
          <span className="font-script text-2xl sm:text-3xl text-brun/80">
            {reservation.eyebrow}
          </span>
          <h2 className="mt-1 font-serif text-3xl sm:text-4xl font-medium text-brun">
            {reservation.title}
          </h2>
          <p className="mt-5 text-brun-soft text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            {reservation.description}
          </p>
          <a
            href={siteInfo.calendlyPlaceholder}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center justify-center rounded-full bg-brun px-8 py-4 text-base font-semibold text-cream shadow-lg hover:bg-brun/90 hover:-translate-y-0.5 transition-all duration-300"
          >
            {reservation.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
