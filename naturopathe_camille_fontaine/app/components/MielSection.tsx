import { miel } from "@/app/content";
import { Reveal } from "@/app/components/ui/Reveal";
import { BoutiquePhoto } from "@/app/components/miel/BoutiquePhoto";
import { CarteWrapper } from "@/app/components/miel/CarteWrapper";
import { OrderForm } from "@/app/components/miel/OrderForm";
import { WaveDivider } from "@/app/components/ui/WaveDivider";

export function MielSection() {
  return (
    <section
      id="miel"
      className="relative bg-gradient-honey py-24 sm:py-32 overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 -translate-y-full">
        <WaveDivider color="var(--color-cream)" />
      </div>

      {/* Halo doré discret */}
      <div
        className="absolute -top-32 -right-32 w-[26rem] h-[26rem] rounded-full bg-miel-pastel/70 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="font-script text-2xl sm:text-3xl text-sauge-dark">
            {miel.subtitle}
          </span>
          <h2 className="mt-1 font-serif text-3xl sm:text-4xl font-medium text-brun">
            {miel.title}
          </h2>
          <p className="mt-5 text-brun-soft leading-relaxed">{miel.story}</p>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-14 lg:gap-12 items-center">
          <Reveal>
            <BoutiquePhoto />
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-[2rem] bg-white/70 border border-miel/15 p-8">
              <h3 className="font-serif text-xl text-brun font-medium mb-5">
                Nos formats
              </h3>
              <div className="space-y-4">
                {miel.products.map((p) => (
                  <div
                    key={p.size}
                    className="flex items-center justify-between rounded-2xl bg-cream px-5 py-4 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
                  >
                    <span className="font-medium text-brun">
                      Pot de {p.size}
                    </span>
                    <span className="font-serif text-lg text-miel font-medium">
                      {p.price}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <OrderForm />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150} className="mt-20">
          <h3 className="font-serif text-2xl text-brun font-medium text-center">
            Nos terroirs de production
          </h3>
          <p className="mt-3 text-brun-soft text-center max-w-xl mx-auto">
            Chaque marqueur révèle un rucher partenaire, sa fleur butinée et
            son caractère.
          </p>
          <div className="mt-8 h-[380px] sm:h-[440px]">
            <CarteWrapper />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
