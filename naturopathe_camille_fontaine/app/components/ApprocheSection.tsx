import { approche } from "@/app/content";
import { Reveal } from "@/app/components/ui/Reveal";
import {
  FingerprintIcon,
  LeafIcon,
  SunIcon,
  WaveIcon,
} from "@/app/components/ui/Icons";

const icons = {
  leaf: LeafIcon,
  sun: SunIcon,
  fingerprint: FingerprintIcon,
  wave: WaveIcon,
};

export function ApprocheSection() {
  return (
    <section id="approche" className="bg-gradient-sage py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="font-script text-2xl sm:text-3xl text-sauge-dark">
            {approche.eyebrow}
          </span>
          <h2 className="mt-1 font-serif text-3xl sm:text-4xl font-medium text-brun">
            {approche.title}
          </h2>
          <p className="mt-4 text-brun-soft text-base sm:text-lg">
            {approche.subtitle}
          </p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 gap-6 lg:gap-8">
          {approche.items.map((item, i) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <Reveal key={item.title} delay={i * 80}>
                <div className="h-full rounded-[2rem] bg-white/60 border border-brun/5 p-8 hover:-translate-y-1 hover:shadow-lg hover:shadow-brun/5 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-sauge/15 text-sauge-dark mb-5">
                    <Icon />
                  </div>
                  <h3 className="font-serif text-xl text-brun font-medium">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-brun-soft leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <p className="mt-14 text-center text-xs sm:text-sm text-brun-soft/80 italic max-w-xl mx-auto">
            {approche.disclaimer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
