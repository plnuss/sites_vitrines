# Frédéric Percier — Coach Trail & Performance

Site vitrine one-page (fictif) pour un coach spécialisé course à pied & trail,
du débutant à l'ultra-trail. Positionnement **performance**.

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- Animations en **CSS natif + Intersection Observer** (aucune librairie d'animation)
- Aucun backend : formulaires en `mailto`, réservation via lien Calendly (placeholder)

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
```

## Structure

```
app/
  layout.tsx          Polices (Anton / Inter), métadonnées, <html>
  page.tsx            Assemblage des sections (one-page)
  globals.css         Thème Tailwind v4, palette, animations reveal, grain
components/
  Header.tsx          Nav sticky + menu hamburger mobile
  Hero.tsx            Hero plein écran + parallaxe + grain
  CoachSection.tsx    Bio, stats animées, timeline palmarès
  OffresSection.tsx   3 offres comparatives (offre du milieu mise en avant)
  QuizSection.tsx     Quiz interactif « Trouver mon programme »
  AvisSection.tsx     Carrousel de témoignages
  ContactSection.tsx  CTA appel gratuit (Calendly + mailto)
  Footer.tsx          Liens, réseaux (SVG inline), mentions légales
  MobileCTABar.tsx    Barre CTA fixe en bas sur mobile
  Reveal.tsx          Apparition au scroll (Intersection Observer)
  AnimatedCounter.tsx Compteurs animés
lib/
  content.ts          ⭐ TOUS les textes, offres, questions du quiz, avis
  quiz.ts             Logique de scoring du quiz → recommandation d'offre
```

## Personnaliser

- **Textes, offres, quiz, avis** : un seul fichier → [`lib/content.ts`](lib/content.ts).
- **Lien de réservation / e-mail / réseaux** : constantes en haut de `lib/content.ts`
  (`BOOKING_URL`, `CONTACT_EMAIL`, `SOCIALS`).
- **Couleurs / polices** : bloc `@theme` dans [`app/globals.css`](app/globals.css).
- **Images** : placeholders `picsum.photos` (seeds cohérents) à remplacer par de
  vraies photos. Les domaines autorisés sont dans `next.config.ts`.

> ⚠️ Contenu de démonstration : le personnage, le palmarès, les tarifs et les
> témoignages sont fictifs et illustratifs.
