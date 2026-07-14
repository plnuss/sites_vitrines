# Camille Fontaine — Naturopathe & Nutritionniste

Site vitrine one-page (fictif) pour une naturopathe et nutritionniste,
spécialisée dans le retour à une alimentation naturelle et variée, les
bienfaits du jeûne et l'amélioration de la digestion. Inclut une petite
boutique en ligne pour un produit unique : du miel bio français.

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- **react-leaflet** + **Leaflet** (tuiles OpenStreetMap) pour la carte des
  lieux de production du miel
- Animations en **CSS natif + Intersection Observer** (aucune librairie
  d'animation)
- Aucun backend : formulaires (contact, commande) en `mailto`, réservation
  via lien Calendly (placeholder)

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
```

## Structure

```
app/
  layout.tsx              Polices (Fraunces / Nunito Sans / Caveat), métadonnées
  page.tsx                Assemblage des sections (one-page)
  content.ts               TOUS les textes, l'offre, les avis, les infos produit
  globals.css              Thème Tailwind v4, palette pastel, dégradés, animations
  components/
    Header.tsx              Nav sticky + menu overlay mobile
    Hero.tsx                Hero deux colonnes, stats, particules pollen
    ApprocheSection.tsx      Philosophie (alimentation, jeûne, digestion)
    AccompagnementSection.tsx Offre unique à prix fixe (149€)
    AvisSection.tsx          Témoignages clients
    MielSection.tsx          Boutique miel : photo produit, carte, formats
    miel/
      BoutiquePhoto.tsx       Photo produit encadrée (remplaçable)
      Carte.tsx                Carte Leaflet des terroirs de production
      CarteWrapper.tsx         Chargement client-only de la carte
      OrderForm.tsx            Formulaire de commande → mailto
    ReservationSection.tsx   CTA appel découverte (Calendly placeholder)
    ContactSection.tsx       Formulaire de contact → mailto
    Footer.tsx               Liens, réseaux (SVG inline), mentions légales
    StickyMobileCta.tsx      Barre CTA fixe en bas sur mobile
    ui/
      Reveal.tsx               Apparition au scroll (Intersection Observer)
      WaveDivider.tsx           Séparateurs de section en vagues SVG
      Icons.tsx                 Icônes SVG inline
  lib/
    useReveal.ts             Hook Intersection Observer pour les animations
```

## Personnaliser

- **Textes, offre, avis, infos produit** : un seul fichier →
  [`app/content.ts`](app/content.ts).
- **Photos** : `public/hero-plat.jpg` (hero) et
  `public/miel-des-clairieres.jpg` (produit) — à remplacer par de vraies
  photos en gardant le même nom de fichier, ou en mettant à jour les champs
  `image` dans `content.ts`.
- **Couleurs / polices** : bloc `@theme` dans
  [`app/globals.css`](app/globals.css).
- **Lien de réservation / e-mail / réseaux** : objet `siteInfo` en haut de
  `app/content.ts`.

> ⚠️ Contenu de démonstration : la praticienne, les témoignages, les tarifs
> et le produit sont fictifs et illustratifs. Cet accompagnement ne
> remplace pas un avis médical.
