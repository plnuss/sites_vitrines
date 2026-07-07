import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Sérénéa — Coaching de vie, Sophrologie & Naturopathie",
  description:
    "Sérénéa accompagne votre équilibre intérieur : coaching de vie, sophrologie et naturopathie. Retrouvez sérénité, énergie et clarté au quotidien.",
  keywords: [
    "coaching de vie",
    "sophrologie",
    "naturopathie",
    "développement personnel",
    "bien-être",
    "gestion du stress",
  ],
  openGraph: {
    title: "Sérénéa — Accompagnement bien-être",
    description:
      "Coaching de vie, sophrologie et naturopathie pour retrouver votre équilibre.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">
        <ScrollReveal />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
