import type { Metadata } from "next";
import { Fraunces, Nunito_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { siteInfo } from "./content";

// Serif éditoriale et chaleureuse pour les titres.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

// Sans-serif douce et arrondie pour le corps de texte.
const nunitoSans = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Script manuscrit, utilisé avec parcimonie sur les intitulés et signatures.
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: siteInfo.fullTitle,
  description:
    "Accompagnement en naturopathie et nutrition : alimentation naturelle et variée, bienfaits du jeûne, digestion apaisée. Découvrez aussi le Miel des Clairières, miel bio français.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${nunitoSans.variable} ${caveat.variable} scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-cream text-brun antialiased">
        {children}
      </body>
    </html>
  );
}
