import { accompagnement } from "@/app/content";
import { Reveal } from "@/app/components/ui/Reveal";
import { WaveDivider } from "@/app/components/ui/WaveDivider";

export function AccompagnementSection() {
  return (
    <section id="accompagnement" className="relative bg-sauge/10 py-24 sm:py-32">
      <div className="absolute top-0 left-0 right-0 -translate-y-full">
        <WaveDivider color="var(--color-sauge)" className="opacity-10" />
      </div>
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="font-script text-2xl sm:text-3xl text-sauge-dark">
            {accompagnement.eyebrow}
          </span>
          <h2 className="mt-1 font-serif text-3xl sm:text-4xl font-medium text-brun">
            {accompagnement.title}
          </h2>
          <p className="mt-4 text-brun-soft text-base sm:text-lg">
            {accompagnement.subtitle}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 rounded-[2.5rem] bg-white shadow-xl shadow-brun/5 border border-miel/15 overflow-hidden">
            <div className="grid lg:grid-cols-5">
              <div className="lg:col-span-3 p-8 sm:p-12">
                <h3 className="font-serif text-2xl sm:text-3xl text-brun font-medium">
                  {accompagnement.offerName}
                </h3>
                <ul className="mt-8 space-y-4">
                  {accompagnement.features.map((f) => (
                    <li key={f} className="flex gap-3 text-brun-soft leading-relaxed">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-5 h-5 shrink-0 mt-1 text-sauge-dark"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
                        <path
                          d="M8 12.5L10.5 15L16 9"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-2 bg-miel/10 p-8 sm:p-12 flex flex-col justify-center items-center text-center">
                <span className="font-script text-2xl text-sauge-dark">
                  Prix unique
                </span>
                <span className="font-serif text-5xl sm:text-6xl font-medium text-miel mt-3">
                  {accompagnement.price}
                </span>
                <p className="mt-4 text-sm text-brun-soft leading-relaxed">
                  {accompagnement.priceNote}
                </p>
                <a
                  href="#reservation"
                  className="mt-8 w-full inline-flex items-center justify-center rounded-full bg-miel px-6 py-3.5 text-sm sm:text-base font-semibold text-cream shadow-md hover:bg-miel-light hover:-translate-y-0.5 transition-all duration-300"
                >
                  {accompagnement.cta}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
