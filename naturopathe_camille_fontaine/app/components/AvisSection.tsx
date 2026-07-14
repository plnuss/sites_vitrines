import { avis } from "@/app/content";
import { Reveal } from "@/app/components/ui/Reveal";

export function AvisSection() {
  return (
    <section id="avis" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="font-script text-2xl sm:text-3xl text-sauge-dark">
            {avis.eyebrow}
          </span>
          <h2 className="mt-1 font-serif text-3xl sm:text-4xl font-medium text-brun">
            {avis.title}
          </h2>
          <p className="mt-4 text-brun-soft text-base sm:text-lg">
            {avis.subtitle}
          </p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {avis.items.map((item, i) => (
            <Reveal key={item.name} delay={(i % 3) * 90}>
              <figure className="h-full rounded-[2rem] bg-white p-8 border border-brun/5 hover:-translate-y-1 hover:shadow-lg hover:shadow-brun/5 transition-all duration-300 flex flex-col">
                <svg
                  viewBox="0 0 32 24"
                  className="w-8 h-8 text-miel/60 mb-4"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M0 24V14.4C0 6.4 5.4 0.8 13.6 0L14.8 3.2C9.6 4.4 6.8 7.6 6.4 12H14V24H0ZM17.2 24V14.4C17.2 6.4 22.6 0.8 30.8 0L32 3.2C26.8 4.4 24 7.6 23.6 12H31.2V24H17.2Z" />
                </svg>
                <blockquote className="text-brun-soft leading-relaxed grow">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-6 pt-6 border-t border-brun/10">
                  <span className="block font-serif text-lg text-brun">
                    {item.name}
                  </span>
                  <span className="block text-sm text-sauge-dark mt-0.5">
                    {item.context}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
