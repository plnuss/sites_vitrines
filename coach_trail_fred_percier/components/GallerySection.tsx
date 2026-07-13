import Image from "next/image";
import { GALLERY, GALLERY_INTRO } from "@/lib/content";
import Reveal from "./Reveal";

/*
  GallerySection — mosaïque de photos trail / montagne. La première image
  occupe une tuile 2x2 (mise en avant) ; les autres remplissent une grille
  4x2 sur desktop. Overlay sombre + légende au survol.
*/
export default function GallerySection() {
  return (
    <section className="relative bg-night py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-ember">
            {GALLERY_INTRO.eyebrow}
          </p>
          <h2 className="font-display text-4xl leading-tight text-bone md:text-5xl">
            {GALLERY_INTRO.title}
          </h2>
          <p className="mt-5 leading-relaxed text-bone-dim">{GALLERY_INTRO.text}</p>
        </Reveal>

        <Reveal className="mt-14">
          <div className="grid auto-rows-[170px] grid-cols-2 gap-3 md:auto-rows-[210px] md:grid-cols-4 md:gap-4">
            {GALLERY.map((item, i) => (
              <figure
                key={i}
                className={`group relative overflow-hidden rounded-2xl border border-forest-line ${
                  i === 0 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes={i === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                />
                {/* Overlay degrade pour la lisibilite de la legende */}
                <div className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/10 to-transparent" />
                <figcaption className="absolute bottom-3 left-4 right-4 flex items-center gap-2 text-sm font-semibold text-bone md:text-base">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
