# Site vitrine — Mié Tanaka (Shiatsu · Tuina · Énergétique chinoise)

Refonte moderne, responsive et optimisée SEO du site `shiatsu-mie.com`.
Site **statique** (HTML5 + CSS3 + JS vanilla), sans build ni framework : facile à héberger n'importe où.

## Arborescence

```
tananka-mie/
├── index.html            # Accueil (H1 « Mié Tanaka », séances, bon cadeau)
├── tarifs.html           # Tarifs, présentation du Shiatsu, formation, coordonnées
├── contact.html          # Coordonnées + formulaire de contact
├── 404.html              # Page d'erreur
├── sitemap.xml           # Plan du site (référencé dans robots.txt)
├── robots.txt            # Autorise l'indexation + pointe vers le sitemap
└── assets/
    ├── css/style.css     # Palette (variables CSS), layout, animations, a11y
    ├── js/main.js        # Menu mobile, header sticky, reveal au scroll, parallaxe
    └── images/           # SVG originaux (favicon, branche, oiseau, motif, image OG)
```

## Prévisualiser en local

Aucune dépendance. Un simple serveur statique suffit (les chemins relatifs
fonctionnent aussi en ouvrant `index.html` directement, mais un serveur évite
les restrictions de certains navigateurs) :

```bash
# Depuis le dossier tananka-mie/
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

Autres options : `npx serve` ou l'extension « Live Server » de VS Code.

## Palette & typographie

| Rôle            | Variable       | Hex        |
|-----------------|----------------|------------|
| Fond crème      | `--cream`      | `#F5EAD3`  |
| Fond alterné    | `--cream-deep` | `#EFE1C3`  |
| Kaki accent     | `--olive`      | `#8A8B5C`  |
| Kaki foncé      | `--olive-deep` | `#5F6138`  |
| Cerise accent   | `--cherry`     | `#C0392B`  |
| Texte           | `--ink`        | `#3A322B`  |
| Texte doux      | `--ink-soft`   | `#6A5F54`  |

- **Titres** : Cormorant Garamond (serif) · **Corps** : Inter (sans-serif), via Google Fonts (`display=swap`).

## Où remplacer les éléments définitifs

- **Illustrations / photos** : les visuels sont des **SVG originaux** dans `assets/images/`.
  Pour remplacer par les illustrations ou photos définitives, déposez vos fichiers dans
  ce dossier et mettez à jour les `src`/`alt` dans les pages (pensez aux attributs
  `width`/`height` pour éviter le CLS ; format **WebP** recommandé pour les photos).
- **Image de partage réseaux (`og-image.svg`)** : pour un rendu fiable sur Facebook/LinkedIn,
  exportez une version **PNG/JPG 1200×630** et remplacez les balises `og:image` / `twitter:image`.

## À compléter avant / après la mise en ligne

1. **Google Search Console** — remplacer `content="À_COMPLÉTER"` dans la balise
   `<meta name="google-site-verification">` de chaque page, puis soumettre `sitemap.xml`
   (étape manuelle dans l'interface Search Console).
2. **Formulaire de contact** — le site étant statique, brancher le `action` du formulaire
   (`contact.html`) sur un service comme **Formspree**/**Basin** (`À_COMPLÉTER`), ou
   supprimer le formulaire et ne garder que le téléphone / e-mail.
3. **Domaine / HTTPS** — les URL canoniques, OG et le sitemap pointent vers
   `https://www.shiatsu-mie.com`. Adapter si le domaine change. Servir le site en **HTTPS**.

## Pistes d'amélioration (mentionnées, non incluses faute de contenu)

Horaires d'ouverture, avis clients / témoignages, galerie photo : emplacements prêts
à intégrer dès que le contenu sera fourni (les horaires alimenteront aussi le Schema.org).

## Accessibilité & performance

- Responsive mobile-first (Grid/Flexbox), navigation clavier, lien d'évitement, focus visibles.
- Contrastes conformes WCAG AA (texte crème sur kaki foncé, gris-brun sur crème).
- `prefers-reduced-motion` respecté : animations et parallaxe désactivées.
- SVG légers, polices en `display=swap`, JS en `defer`.
