# Sérénéa — Site vitrine démo

Site vitrine fictif pour une praticienne en **coaching de vie, sophrologie & naturopathie**.
Contenu 100 % fictif mais réaliste, à but de démonstration.

## Stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS v4** (config via `@theme` dans `app/globals.css`)
- **React 19**

## Thème

- Fond sombre `#0A0A0F`
- Accent violet `#7F77DD`
- Design responsive (mobile-first), menu burger, animations au scroll,
  effets de survol, blobs lumineux, formulaire de contact interactif.

## Pages

| Route            | Contenu                                                        |
| ---------------- | ------------------------------------------------------------- |
| `/`              | Hero + 3 services phares + méthode + témoignages + CTA         |
| `/services`      | Liste détaillée de 6 prestations avec prix indicatifs         |
| `/realisations`  | Galerie de 6 réalisations fictives + chiffres clés            |
| `/contact`       | Formulaire nom / email / message (validation + état de succès) |

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build production

```bash
npm run build && npm start
```

## Structure

```
app/
  layout.tsx          # Layout global (nav, footer, fonts, SEO)
  globals.css         # Thème Tailwind v4 + animations
  page.tsx            # Accueil
  services/page.tsx
  realisations/page.tsx
  contact/page.tsx
components/
  Navbar.tsx          # Nav responsive + menu mobile
  Footer.tsx
  ScrollReveal.tsx    # Animations d'apparition au scroll (IntersectionObserver)
  ServiceIcon.tsx     # Icônes SVG des services
  ContactForm.tsx     # Formulaire contrôlé + validation
lib/
  data.ts             # Contenu (services, réalisations, témoignages)
```
