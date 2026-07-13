/*
  ============================================================================
  content.ts — Source unique de verite pour tous les textes du site.
  ----------------------------------------------------------------------------
  Modifie ce fichier pour ajuster les textes, offres, questions du quiz et
  avis sans toucher aux composants. Les images sont des placeholders
  thematiques (picsum.photos avec seed cohérent) a remplacer par de vraies
  photos plus tard.
  ============================================================================
*/

export type OffreId = "essentiel" | "performance" | "ultra";

// --- Navigation -------------------------------------------------------------
export const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Le Coach", href: "#coach" },
  { label: "Offres", href: "#offres" },
  { label: "Trouver mon programme", href: "#programme" },
  { label: "Avis", href: "#avis" },
  { label: "Contact", href: "#contact" },
];

// Liens externes / actions (a personnaliser)
export const BOOKING_URL = "https://calendly.com/frederic-percier/appel-gratuit";
export const CONTACT_EMAIL = "frederic.percier@example.com";
export const SOCIALS = {
  instagram: "https://instagram.com/",
  strava: "https://strava.com/",
  youtube: "https://youtube.com/",
};

export const BRAND = {
  name: "Frédéric Percier",
  tagline: "Coach Trail & Performance",
};

/*
  Helper Unsplash — construit une URL optimisee a partir d'un identifiant de
  photo (photo-xxxxxxxx). Toutes les images sont des photos libres Unsplash
  (montagne / trail / course a pied), a remplacer plus tard par tes propres
  visuels si besoin. Le domaine images.unsplash.com est autorise dans
  next.config.ts.
*/
export function unsplash(id: string, w = 1200, q = 70): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

// --- Hero -------------------------------------------------------------------
export const HERO = {
  // Sommet au-dessus des nuages, lumiere de lever de soleil.
  image: unsplash("photo-1506905925346-21bda4d32df4", 1920, 72),
  eyebrow: "Course à pied · Trail · Ultra",
  title: "Ton sommet n'attend que toi.",
  titleAccent: "Encore faut-il le préparer comme il le mérite.",
  subtitle:
    "Accompagnement personnalisé, du 10 km à l'ultra-trail. Un plan construit pour ton objectif, un suivi exigeant, et la stratégie pour franchir la ligne — sans te cramer en route.",
  ctaPrimary: "Réserver un appel gratuit",
  ctaSecondary: "Découvrir les offres",
};

// --- Le Coach ---------------------------------------------------------------
export const COACH = {
  // Deux traileurs sur un sentier de montagne.
  image: unsplash("photo-1551632811-561732d1e306", 1000, 72),
  name: "Frédéric Percier",
  role: "Coach diplômé d'État · DEJEPS Performance Sportive",
  intro:
    "Ancien compétiteur passé de l'autre côté du dossard : j'accompagne aujourd'hui des coureurs, du premier 10 km à la ligne d'arrivée d'un 100 km en montagne.",
  paragraphs: [
    "Diplômé d'État (DEJEPS Performance Sportive, mention Athlétisme), formé à la physiologie de l'effort et à la préparation mentale, je construis des plans qui tiennent compte de ta vie réelle : ton temps disponible, ton historique, tes sensations.",
    "Sur le terrain, j'ai couru ce que je fais préparer : podium en catégorie sur une CCC (UTMB), finisher de l'UTMB et de la Diagonale des Fous. Je sais ce que coûte un objectif de montagne, et ce qu'il faut mettre en place — vraiment — pour y arriver entier.",
    "Depuis plus de dix ans, j'ai accompagné plus de 200 athlètes, du débutant qui remet des baskets au coureur confirmé qui vise le podium. Ma méthode : de l'exigence, beaucoup de personnalisation, et une vraie écoute du corps pour progresser sans se blesser.",
  ],
  // Compteurs animes (palmarès / stats)
  stats: [
    { value: 10, suffix: "+", label: "ans d'expérience" },
    { value: 200, suffix: "+", label: "athlètes coachés" },
    { value: 15, suffix: "", label: "finishers ultra-trail" },
    { value: 3, suffix: "", label: "ultras majeurs finishés" },
  ],
  // Timeline / palmarès
  timeline: [
    { year: "2013", text: "Obtention du DEJEPS Performance Sportive, mention Athlétisme." },
    { year: "2015", text: "Finisher de la Diagonale des Fous (Grand Raid de La Réunion)." },
    { year: "2018", text: "Podium en catégorie sur la CCC (UTMB)." },
    { year: "2021", text: "Finisher de l'UTMB — 170 km, 10 000 m de D+." },
    { year: "Aujourd'hui", text: "Plus de 200 athlètes accompagnés, du 10 km à l'ultra." },
  ],
  philosophy:
    "Exigence, personnalisation, écoute du corps. Je ne vends pas un plan générique : je construis le tien, je l'ajuste selon tes retours, et je te tiens responsable de tes séances — parce que c'est comme ça qu'on passe un cap.",
};

// --- Galerie "Le terrain de jeu" -------------------------------------------
export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

export const GALLERY_INTRO = {
  eyebrow: "Le terrain de jeu",
  title: "Là où se gagnent les objectifs.",
  text: "Route, forêt, single track, haute montagne : chaque plan est pensé pour le terrain que tu vas vraiment affronter le jour J.",
};

export const GALLERY: GalleryItem[] = [
  {
    src: unsplash("photo-1441974231531-c6227db76b6e", 1000, 68),
    alt: "Sentier de single track en sous-bois",
    caption: "Single track en forêt",
  },
  {
    src: unsplash("photo-1461896836934-ffe607ba8211", 700, 68),
    alt: "Groupe de coureurs à contre-jour au lever du jour",
    caption: "Sorties à l'aube",
  },
  {
    src: unsplash("photo-1476480862126-209bfaa8edc8", 700, 68),
    alt: "Foulée dans un escalier, chaussures de running",
    caption: "Renforcement & côtes",
  },
  {
    src: unsplash("photo-1464822759023-fed622ff2c3b", 700, 68),
    alt: "Vallée de montagne bordée de conifères",
    caption: "Reconnaissance de parcours",
  },
  {
    src: unsplash("photo-1454496522488-7a8e488e8606", 1000, 68),
    alt: "Chaîne de haute montagne enneigée",
    caption: "Objectifs ultra en altitude",
  },
];

// --- Offres -----------------------------------------------------------------
export interface Offre {
  id: OffreId;
  name: string;
  price: string;
  priceNote: string;
  pitch: string;
  featured?: boolean;
  features: string[];
  idealFor: string;
}

export const OFFRES: Offre[] = [
  {
    id: "essentiel",
    name: "Essentiel",
    price: "79€",
    priceNote: "à partir de / mois",
    pitch: "Pour démarrer ou structurer sa pratique.",
    features: [
      "Plan d'entraînement personnalisé, mis à jour chaque mois",
      "Suivi par message + 1 point d'échange (visio ou tél) par mois",
      "Ajustements selon tes retours et tes sensations",
    ],
    idealFor:
      "Reprendre la course, préparer un 10 km ou un semi, structurer ses semaines.",
  },
  {
    id: "performance",
    name: "Performance",
    price: "129€",
    priceNote: "à partir de / mois",
    pitch: "Pour viser un objectif chronométré ambitieux.",
    featured: true,
    features: [
      "Plan hebdomadaire individualisé, ajusté chaque semaine",
      "Renforcement musculaire intégré, spécifique course à pied / trail",
      "Suivi rapproché : messagerie illimitée + 2 points d'échange par mois",
      "Analyse détaillée post-course et ajustement de la stratégie",
    ],
    idealFor:
      "Viser un chrono précis (ex. sub 3 h au marathon), enchaîner une saison de courses.",
  },
  {
    id: "ultra",
    name: "Ultra",
    price: "199€",
    priceNote: "à partir de / mois",
    pitch: "Pour préparer un ultra-trail ou un gros objectif montagne.",
    features: [
      "Plan sur-mesure complet : route, trail technique, renforcement, préparation mentale",
      "Accompagnement nutrition inclus (stratégie de course, ravitaillement, alimentation)",
      "Suivi hebdomadaire illimité (message + appel chaque semaine)",
      "Aide à la reconnaissance de parcours et à la stratégie de course, à distance",
      "Contact possible le jour J",
    ],
    idealFor:
      "Ultra-trail (100 km et +, fort D+), objectifs montagne majeurs.",
  },
];

// --- Quiz "Trouver mon programme" ------------------------------------------
export interface QuizOption {
  label: string;
  // Points attribues a chaque offre pour cette reponse.
  scores: Record<OffreId, number>;
  // Marqueurs utilises pour la recommandation complementaire.
  tags?: ("nutrition" | "renfo" | "urgent" | "long")[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

export const QUIZ: QuizQuestion[] = [
  {
    id: "objectif",
    question: "Quel est ton objectif principal ?",
    options: [
      { label: "Débuter ou reprendre la course à pied", scores: { essentiel: 3, performance: 0, ultra: 0 } },
      { label: "Améliorer un chrono sur route", scores: { essentiel: 0, performance: 3, ultra: 0 } },
      { label: "Préparer un trail ou un ultra-trail", scores: { essentiel: 0, performance: 1, ultra: 3 } },
    ],
  },
  {
    id: "temps",
    question: "Combien de temps peux-tu consacrer à l'entraînement chaque semaine ?",
    options: [
      { label: "Moins de 3 h", scores: { essentiel: 2, performance: 0, ultra: 0 } },
      { label: "Entre 3 h et 6 h", scores: { essentiel: 0, performance: 2, ultra: 0 } },
      { label: "Plus de 6 h", scores: { essentiel: 0, performance: 1, ultra: 2 } },
    ],
  },
  {
    id: "plan",
    question: "As-tu déjà un plan d'entraînement structuré ?",
    options: [
      { label: "Non, jamais", scores: { essentiel: 2, performance: 0, ultra: 0 } },
      { label: "Oui, mais je veux passer un cap", scores: { essentiel: 0, performance: 2, ultra: 0 } },
      { label: "Oui, je veux un suivi très précis", scores: { essentiel: 0, performance: 1, ultra: 2 } },
    ],
  },
  {
    id: "nutrition",
    question: "Souhaites-tu un accompagnement nutrition ?",
    options: [
      { label: "Oui", scores: { essentiel: 0, performance: 0, ultra: 2 }, tags: ["nutrition"] },
      { label: "Non", scores: { essentiel: 1, performance: 1, ultra: 0 } },
      { label: "Je ne sais pas", scores: { essentiel: 0, performance: 1, ultra: 0 } },
    ],
  },
  {
    id: "renfo",
    question: "Souhaites-tu du renforcement musculaire en complément ?",
    options: [
      { label: "Oui", scores: { essentiel: 0, performance: 2, ultra: 1 }, tags: ["renfo"] },
      { label: "Non", scores: { essentiel: 1, performance: 0, ultra: 0 } },
    ],
  },
  {
    id: "echeance",
    question: "Ton échéance est dans combien de temps ?",
    options: [
      { label: "Moins de 3 mois", scores: { essentiel: 0, performance: 2, ultra: 1 }, tags: ["urgent"] },
      { label: "3 à 6 mois", scores: { essentiel: 1, performance: 1, ultra: 1 } },
      { label: "Plus de 6 mois", scores: { essentiel: 1, performance: 0, ultra: 2 }, tags: ["long"] },
    ],
  },
];

// --- Avis -------------------------------------------------------------------
export interface Avis {
  quote: string;
  name: string;
  detail: string;
  seed: string; // seed picsum pour l'avatar placeholder
}

export const AVIS: Avis[] = [
  {
    quote:
      "Grâce à Fred, je suis passé sous les 3 h au marathon de Paris après deux tentatives ratées. Un plan carré, et surtout la stratégie de course qui me manquait.",
    name: "Julien, 38 ans",
    detail: "Marathon · objectif sub 3 h atteint",
    seed: "runner-julien",
  },
  {
    quote:
      "Premier 100 km en autonomie, avec une vraie stratégie de course et de ravitaillement. Je n'aurais jamais imaginé finir aussi lucide.",
    name: "Sophie, 42 ans",
    detail: "Ultra-trail 100 km · première finisher",
    seed: "runner-sophie",
  },
  {
    quote:
      "Un suivi hebdo qui m'a fait progresser sans me blesser, contrairement à mes plans en solo. Enfin quelqu'un qui ajuste selon mes sensations.",
    name: "Karim, 31 ans",
    detail: "Semi-marathon · -8 min en une saison",
    seed: "runner-karim",
  },
  {
    quote:
      "J'ai repris la course à zéro après des années d'arrêt. En six mois, j'ai bouclé mon premier 10 km sans marcher. La régularité, c'est lui.",
    name: "Camille, 45 ans",
    detail: "Débutante · premier 10 km bouclé",
    seed: "runner-camille",
  },
  {
    quote:
      "Podium en catégorie sur mon premier trail long. Le renforcement et le travail technique en descente ont tout changé le jour J.",
    name: "Thomas, 29 ans",
    detail: "Trail 45 km · podium catégorie",
    seed: "runner-thomas",
  },
];

// --- Contact ----------------------------------------------------------------
export const CONTACT = {
  title: "Réserver un appel gratuit",
  text:
    "20 à 30 minutes, sans engagement. On fait le point sur ton objectif, ton historique et ton temps disponible — et je te dis honnêtement quel accompagnement a du sens pour toi (ou si tu n'en as pas besoin).",
  ctaBooking: "Choisir un créneau",
  ctaEmail: "Écrire un e-mail",
};
