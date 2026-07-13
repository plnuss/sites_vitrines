import Image from "next/image";
import { COACH } from "@/lib/content";
import Reveal from "./Reveal";
import AnimatedCounter from "./AnimatedCounter";

/*
  CoachSection — presentation de Frederic Percier : bio, stats animees,
  timeline de palmares et philosophie de coaching.
*/
export default function CoachSection() {
  return (
    <section id="coach" className="relative bg-night-2 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Colonne image */}
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-forest-line">
              <Image
                src={COACH.image}
                alt="Frédéric Percier, coach trail et course à pied"
                width={1000}
                height={1200}
                className="h-full w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-display text-2xl text-bone">{COACH.name}</p>
                <p className="text-sm text-ember">{COACH.role}</p>
              </div>
            </div>
          </Reveal>

          {/* Colonne texte */}
          <div>
            <Reveal>
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-ember">
                Le Coach
              </p>
              <h2 className="font-display text-4xl leading-tight text-bone md:text-5xl">
                {COACH.intro}
              </h2>
            </Reveal>

            <div className="mt-7 space-y-5">
              {COACH.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 80}>
                  <p className="leading-relaxed text-bone-dim">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Stats animees */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:mt-20 md:grid-cols-4 md:gap-6">
          {COACH.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <div className="rounded-2xl border border-forest-line bg-forest/40 p-6 text-center">
                <div className="font-display text-4xl text-ember md:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-sm text-bone-dim">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Timeline / palmares */}
        <div className="mt-16 grid gap-12 md:mt-24 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-ember">
                Palmarès & parcours
              </p>
              <h3 className="font-display text-3xl text-bone md:text-4xl">
                J'ai couru ce que je fais préparer.
              </h3>
              <p className="mt-5 leading-relaxed text-bone-dim">
                {COACH.philosophy}
              </p>
            </div>
          </Reveal>

          <div className="relative border-l border-forest-line pl-8">
            {COACH.timeline.map((item, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="relative pb-8 last:pb-0">
                  {/* Point sur la timeline */}
                  <span className="absolute -left-[41px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-ember bg-night">
                    <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                  </span>
                  <p className="font-display text-lg text-ember">{item.year}</p>
                  <p className="mt-1 text-bone-dim">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
