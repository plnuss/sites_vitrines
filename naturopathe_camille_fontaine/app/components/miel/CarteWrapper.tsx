"use client";

import dynamic from "next/dynamic";

// Chargée uniquement côté client : Leaflet dépend de l'objet window.
const Carte = dynamic(
  () => import("@/app/components/miel/Carte").then((m) => m.Carte),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[360px] rounded-[2rem] bg-sauge/10 animate-pulse" />
    ),
  }
);

export function CarteWrapper() {
  return <Carte />;
}
