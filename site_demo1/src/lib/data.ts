export type Service = {
  slug: string;
  title: string;
  category: "Coaching" | "Sophrologie" | "Naturopathie" | "Accompagnement complet";
  description: string;
  duration: string;
  price: string;
  highlight?: boolean;
};

export const services: Service[] = [
  {
    slug: "coaching-individuel",
    title: "Séance de coaching de vie",
    category: "Coaching",
    description:
      "Un espace d'écoute et de clarification pour avancer sur une problématique précise : reconversion, confiance en soi, relations, prise de décision.",
    duration: "1h",
    price: "90 €",
    highlight: true,
  },
  {
    slug: "forfait-coaching",
    title: "Forfait coaching – 6 séances",
    category: "Coaching",
    description:
      "Un accompagnement suivi sur plusieurs semaines pour ancrer les prises de conscience dans des changements durables.",
    duration: "6 x 1h",
    price: "480 €",
  },
  {
    slug: "sophrologie-individuelle",
    title: "Séance de sophrologie",
    category: "Sophrologie",
    description:
      "Relaxation dynamique, respiration et visualisation pour apaiser le stress, mieux dormir et retrouver de l'énergie au quotidien.",
    duration: "50 min",
    price: "70 €",
    highlight: true,
  },
  {
    slug: "decouverte-sophrologie",
    title: "Forfait découverte sophrologie",
    category: "Sophrologie",
    description:
      "Trois séances pour découvrir la pratique à son rythme et identifier les exercices les plus adaptés à votre quotidien.",
    duration: "3 x 50 min",
    price: "180 €",
  },
  {
    slug: "bilan-naturopathique",
    title: "Bilan naturopathique complet",
    category: "Naturopathie",
    description:
      "Analyse globale du terrain (alimentation, sommeil, énergie, émotions) et remise d'un programme d'hygiène de vie personnalisé.",
    duration: "1h30",
    price: "120 €",
    highlight: true,
  },
  {
    slug: "suivi-naturopathie",
    title: "Suivi naturopathie – 3 consultations",
    category: "Naturopathie",
    description:
      "Un accompagnement dans la durée pour ajuster le programme initial et consolider les nouvelles habitudes.",
    duration: "3 x 1h",
    price: "300 €",
  },
  {
    slug: "atelier-groupe",
    title: "Atelier de groupe – gestion du stress",
    category: "Sophrologie",
    description:
      "Un atelier collectif en petit groupe (6 personnes max) pour apprendre des outils simples de respiration et de relâchement.",
    duration: "2h",
    price: "45 € / pers.",
  },
  {
    slug: "accompagnement-premium",
    title: "Accompagnement complet – 3 mois",
    category: "Accompagnement complet",
    description:
      "Le meilleur des trois approches – coaching, sophrologie et naturopathie – dans un parcours sur mesure de trois mois.",
    duration: "3 mois",
    price: "890 €",
  },
];

export type GalleryItem = {
  slug: string;
  title: string;
  category: string;
  description: string;
  quote: string;
  author: string;
};

export const gallery: GalleryItem[] = [
  {
    slug: "renaissance",
    title: "Programme Renaissance",
    category: "Reconversion professionnelle",
    description:
      "Accompagnement de 4 mois pour une cadre en reconversion : clarification du projet, gestion du stress lié au changement et préparation des entretiens.",
    quote:
      "J'ai quitté un poste qui ne me correspondait plus avec une direction claire, et sans la charge d'angoisse qui allait avec.",
    author: "Camille, 41 ans",
  },
  {
    slug: "entreprise-sereine",
    title: "Cercle Sophrologie en Entreprise",
    category: "Atelier collectif",
    description:
      "Cycle de 6 ateliers de sophrologie pour les équipes d'une PME, mis en place pendant une période de forte charge de travail.",
    quote:
      "Les pauses du jeudi matin sont devenues un vrai rituel d'équipe, tout le monde repart plus posé.",
    author: "Julien, responsable RH",
  },
  {
    slug: "equilibre",
    title: "Programme Équilibre",
    category: "Naturopathie post burn-out",
    description:
      "Suivi naturopathique de 6 mois après un arrêt pour épuisement professionnel : sommeil, alimentation et reprise progressive d'énergie.",
    quote:
      "On a repris les choses à la base, sans brusquer mon corps. Aujourd'hui je me reconnais à nouveau.",
    author: "Sophie, 35 ans",
  },
  {
    slug: "pleine-presence",
    title: "Retraite Pleine Présence",
    category: "Week-end bien-être",
    description:
      "Un week-end de retraite pour un groupe de huit personnes, mêlant sophrologie, marche en conscience et ateliers de naturopathie.",
    quote:
      "Deux jours qui ont eu l'effet de plusieurs mois de travail sur moi-même.",
    author: "Marc, 52 ans",
  },
  {
    slug: "coaching-parental",
    title: "Coaching Parental",
    category: "Accompagnement familial",
    description:
      "Un parcours de coaching pour des parents en questionnement face à l'adolescence de leurs enfants, sur trois mois.",
    quote:
      "Nous avons retrouvé une communication plus apaisée à la maison, sans culpabiliser sur nos méthodes.",
    author: "Nadia & Thomas",
  },
  {
    slug: "renouveau",
    title: "Programme Renouveau",
    category: "Transition vers la retraite",
    description:
      "Accompagnement de préparation à la retraite : donner du sens à cette nouvelle étape et anticiper les changements de rythme.",
    quote:
      "Je pensais redouter cette étape, j'ai fini par l'attendre avec impatience.",
    author: "Bernard, 63 ans",
  },
];
