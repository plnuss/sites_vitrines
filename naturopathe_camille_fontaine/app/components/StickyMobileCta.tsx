"use client";

import { useEffect, useState } from "react";

export function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`sm:hidden fixed bottom-0 inset-x-0 z-40 p-4 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href="#reservation"
        className="block w-full text-center rounded-full bg-miel px-6 py-3.5 text-sm font-semibold text-cream shadow-xl"
      >
        Réserver un appel
      </a>
    </div>
  );
}
