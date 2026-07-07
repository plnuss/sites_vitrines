export type Service = {
  slug: string;
  icon: "leaf" | "wave" | "compass" | "heart" | "moon" | "spark";
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  price: string;
  duration: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "coaching-de-vie",
    icon: "compass",
    title: "Coaching de vie",
    tagline: "Clarifier, décider, avancer",
    description:
      "Un accompagnement structuré pour dépasser les blocages, définir des objectifs alignés avec vos valeurs et retrouver un cap clair dans les transitions de vie.",
    bullets: [
      "Bilan de vie et définition d'objectifs",
      "Gestion des transitions (pro & perso)",
      "Confiance en soi et prise de décision",
    ],
    price: "70 € / séance",
    duration: "1 h",
    featured: true,
  },
  {
    slug: "sophrologie",
    icon: "wave",
    title: "Sophrologie",
    tagline: "Apaiser le corps et le mental",
    description:
      "Des techniques douces de respiration, relaxation et visualisation pour réguler le stress, améliorer le sommeil et cultiver un état de calme durable.",
    bullets: [
      "Gestion du stress et de l'anxiété",
      "Préparation mentale (examens, sport)",
      "Sommeil réparateur et lâcher-prise",
    ],
    price: "60 € / séance",
    duration: "50 min",
    featured: true,
  },
  {
    slug: "naturopathie",
    icon: "leaf",
    title: "Naturopathie",
    tagline: "Retrouver votre équilibre naturel",
    description:
      "Une approche globale de votre hygiène de vie : alimentation, sommeil, énergie. Des conseils personnalisés et naturels pour soutenir votre vitalité au quotidien.",
    bullets: [
      "Bilan de vitalité complet",
      "Rééquilibrage alimentaire",
      "Phytothérapie & compléments naturels",
    ],
    price: "80 € / consultation",
    duration: "1 h 15",
    featured: true,
  },
  {
    slug: "developpement-personnel",
    icon: "spark",
    title: "Ateliers développement personnel",
    tagline: "Grandir en groupe",
    description:
      "Des ateliers thématiques en petit groupe pour explorer la connaissance de soi, la gestion des émotions et la pleine conscience dans une dynamique collective.",
    bullets: [
      "Ateliers gestion des émotions",
      "Cercles de parole bienveillants",
      "Pratique de la pleine conscience",
    ],
    price: "35 € / atelier",
    duration: "2 h",
  },
  {
    slug: "accompagnement-sommeil",
    icon: "moon",
    title: "Programme sommeil serein",
    tagline: "Renouer avec des nuits paisibles",
    description:
      "Un programme sur 6 semaines mêlant sophrologie et hygiène de vie naturopathique pour retrouver un sommeil profond et réparateur, sans dépendance.",
    bullets: [
      "6 séances progressives",
      "Rituels du soir personnalisés",
      "Suivi et exercices audio",
    ],
    price: "320 € / programme",
    duration: "6 semaines",
  },
  {
    slug: "suivi-vitalite",
    icon: "heart",
    title: "Suivi vitalité premium",
    tagline: "Un accompagnement dans la durée",
    description:
      "Un forfait trimestriel combinant coaching, sophrologie et naturopathie pour une transformation en profondeur, avec un suivi régulier et personnalisé.",
    bullets: [
      "5 séances mixtes au choix",
      "Plan d'action personnalisé",
      "Messagerie de suivi entre séances",
    ],
    price: "290 € / trimestre",
    duration: "3 mois",
  },
];

export type Project = {
  title: string;
  category: string;
  result: string;
  description: string;
  gradient: string;
};

export const projects: Project[] = [
  {
    title: "Renaissance après un burn-out",
    category: "Coaching de vie",
    result: "Retour à l'emploi serein en 4 mois",
    description:
      "Accompagnement d'une cadre en reconversion : reconstruction de la confiance et clarification d'un nouveau projet professionnel aligné.",
    gradient: "from-[#7f77dd] to-[#b06ab3]",
  },
  {
    title: "Vaincre l'anxiété des examens",
    category: "Sophrologie",
    result: "Concours réussi, stress maîtrisé",
    description:
      "Préparation mentale d'un étudiant en médecine : techniques de respiration et d'ancrage pour gérer la pression le jour J.",
    gradient: "from-[#5a52b8] to-[#7f77dd]",
  },
  {
    title: "Énergie retrouvée au naturel",
    category: "Naturopathie",
    result: "Fatigue chronique divisée par deux",
    description:
      "Rééquilibrage alimentaire et micro-nutrition sur 3 mois pour une jeune maman épuisée. Retour d'une vitalité durable.",
    gradient: "from-[#6d5acb] to-[#8e7de0]",
  },
  {
    title: "Des nuits enfin paisibles",
    category: "Programme sommeil",
    result: "Endormissement en moins de 15 min",
    description:
      "Programme sommeil serein de 6 semaines pour un dirigeant insomniaque. Mise en place de rituels durables sans médicaments.",
    gradient: "from-[#7f77dd] to-[#4f5bd5]",
  },
  {
    title: "Atelier « Apprivoiser ses émotions »",
    category: "Développement personnel",
    result: "12 participants, 96 % de satisfaction",
    description:
      "Conception et animation d'un cycle d'ateliers en entreprise autour de l'intelligence émotionnelle et de la communication.",
    gradient: "from-[#9a5fd0] to-[#7f77dd]",
  },
  {
    title: "Transition de vie à 50 ans",
    category: "Suivi vitalité premium",
    result: "Nouveau cap de vie assumé",
    description:
      "Accompagnement global sur un trimestre mêlant coaching, sophrologie et naturopathie pour aborder sereinement une nouvelle étape de vie.",
    gradient: "from-[#5a52b8] to-[#a06cd5]",
  },
];

export const testimonials = [
  {
    name: "Camille L.",
    role: "Coaching de vie",
    quote:
      "Un accompagnement d'une justesse rare. J'ai retrouvé confiance et surtout une direction claire pour mon avenir.",
  },
  {
    name: "Thomas R.",
    role: "Sophrologie",
    quote:
      "Les séances ont transformé mon rapport au stress. Je respire, littéralement. Merci pour cette écoute et cette douceur.",
  },
  {
    name: "Sophie M.",
    role: "Naturopathie",
    quote:
      "Des conseils concrets et bienveillants. Mon énergie n'a jamais été aussi stable. Une approche vraiment globale.",
  },
];
