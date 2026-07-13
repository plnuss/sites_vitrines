import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CoachSection from "@/components/CoachSection";
import GallerySection from "@/components/GallerySection";
import OffresSection from "@/components/OffresSection";
import QuizSection from "@/components/QuizSection";
import AvisSection from "@/components/AvisSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";

/*
  Page d'accueil — one-page avec ancres. Chaque section est un composant
  autonome (voir /components). Les contenus proviennent de /lib/content.ts.
*/
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CoachSection />
        <GallerySection />
        <OffresSection />
        <QuizSection />
        <AvisSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
