"use client";

import { useEffect, useState } from "react";
import { BOOKING_URL } from "@/lib/content";

/*
  MobileCTABar — barre fixe en bas d'ecran sur mobile avec le CTA principal.
  Apparait apres avoir depasse le hero pour ne pas masquer l'accroche.
*/
export default function MobileCTABar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-forest-line bg-night/95 p-3 backdrop-blur transition-transform duration-300 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-full bg-ember py-3.5 text-center text-base font-semibold text-night"
      >
        Réserver un appel gratuit
      </a>
    </div>
  );
}
