import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { ApprocheSection } from "@/app/components/ApprocheSection";
import { AccompagnementSection } from "@/app/components/AccompagnementSection";
import { AvisSection } from "@/app/components/AvisSection";
import { MielSection } from "@/app/components/MielSection";
import { ReservationSection } from "@/app/components/ReservationSection";
import { ContactSection } from "@/app/components/ContactSection";
import { Footer } from "@/app/components/Footer";
import { StickyMobileCta } from "@/app/components/StickyMobileCta";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 pb-20 sm:pb-0">
        <Hero />
        <ApprocheSection />
        <AccompagnementSection />
        <AvisSection />
        <MielSection />
        <ReservationSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
