import Image from "next/image";
import { miel } from "@/app/content";

/**
 * Photo produit du miel, présentée dans un cadre organique.
 * Le placeholder SVG (miel.image) est pensé pour être remplacé par une
 * vraie photo (.jpg/.webp) — il suffit de mettre à jour le chemin dans
 * content.ts, aucun autre changement n'est nécessaire.
 */
export function BoutiquePhoto() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brun/15 rotate-1">
        <Image
          src={miel.image}
          alt={miel.imageAlt}
          fill
          sizes="(max-width: 1024px) 90vw, 24rem"
          className="object-cover"
        />
      </div>

      {/* Badges produit flottants */}
      <div className="absolute -top-4 -left-3 flex flex-col gap-2">
        {miel.badges.map((b, i) => (
          <span
            key={b}
            className={`inline-flex items-center rounded-full bg-cream/95 backdrop-blur px-4 py-1.5 text-xs font-semibold text-sauge-dark shadow-lg shadow-brun/10 ${
              i % 2 === 0 ? "-rotate-2" : "rotate-2"
            }`}
          >
            {b}
          </span>
        ))}
      </div>

      {/* Pastille format flottante */}
      <div className="absolute -bottom-4 -right-3 rounded-2xl bg-miel px-5 py-3 shadow-xl shadow-miel/30 rotate-2 text-center">
        <p className="font-script text-cream text-lg leading-none">à partir de</p>
        <p className="font-serif text-cream text-2xl font-semibold leading-tight">
          {miel.products[0].price}
        </p>
      </div>
    </div>
  );
}
