import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

/*
  Typographies chargees via next/font (self-hosted a la compilation) :
  - Anton : police display rugueuse/impactante pour les titres
  - Inter : sans-serif lisible pour le corps de texte
*/
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frédéric Percier — Coach Trail & Performance",
  description:
    "Accompagnement personnalisé en course à pied et trail, du 10 km à l'ultra-trail. Passer un cap, viser un chrono, préparer un objectif montagne majeur.",
  keywords: [
    "coach trail",
    "coach course à pied",
    "préparation ultra-trail",
    "plan d'entraînement running",
    "coach performance marathon",
  ],
  openGraph: {
    title: "Frédéric Percier — Coach Trail & Performance",
    description:
      "Passer un cap. Atteindre l'objectif que tu n'osais pas viser. Coaching course à pied & trail, du débutant à l'ultra.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${anton.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
