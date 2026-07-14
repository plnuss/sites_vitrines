// Fichier central de contenu — modifiez les textes, l'offre, les avis et les infos produit ici.

export const siteInfo = {
  name: "Camille Fontaine",
  title: "Naturopathe & Nutritionniste",
  fullTitle: "Camille Fontaine — Naturopathe & Nutritionniste",
  email: "contact@camillefontaine-naturo.fr",
  phone: "06 12 34 56 78",
  address: "14 rue des Tilleuls, 69001 Lyon",
  calendlyPlaceholder: "https://calendly.com/camille-fontaine/appel-decouverte",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
  },
};

export const nav = [
  { label: "Accueil", href: "#accueil" },
  { label: "Mon approche", href: "#approche" },
  { label: "Accompagnement", href: "#accompagnement" },
  { label: "Boutique", href: "#miel" },
  { label: "Avis", href: "#avis" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Naturopathe & nutritionniste",
  title: "Retrouver l'équilibre par une alimentation vraie.",
  subtitle:
    "Un accompagnement personnalisé pour revenir à des aliments bruts et variés, apprivoiser les bienfaits du jeûne et retrouver une digestion sereine — à votre rythme, sans injonction.",
  ctaPrimary: "Réserver un appel découverte",
  ctaSecondary: "Découvrir mon approche",
  scrollHint: "Découvrir",
  image: "/hero-plat.jpg",
  imageAlt:
    "Tartine d'œuf mollet, avocat et pousses d'épinard — une assiette d'aliments bruts et naturels",
  trust: "Sur rendez-vous à Lyon & en visio partout en France",
  stats: [
    { value: "10 ans", label: "d'accompagnement" },
    { value: "+200", label: "personnes suivies" },
    { value: "4,9/5", label: "de satisfaction" },
  ],
  badge: {
    title: "Approche naturelle",
    subtitle: "Aliments bruts, jeûne & digestion",
  },
};

export const approche = {
  eyebrow: "Ma philosophie",
  title: "Mon approche",
  subtitle:
    "Une philosophie simple : revenir à l'essentiel, avec exigence et bienveillance.",
  items: [
    {
      title: "Une alimentation vraie et variée",
      description:
        "Retrouver le goût des aliments bruts, de saison et peu transformés. Pas de liste d'interdits — une réappropriation progressive de ce qui nourrit vraiment.",
      icon: "leaf",
    },
    {
      title: "Les bienfaits du jeûne, en douceur",
      description:
        "Jeûne intermittent ou plus structuré selon votre profil et votre histoire, pour soulager la digestion, retrouver de l'énergie et réapprendre à écouter la faim.",
      icon: "sun",
    },
    {
      title: "Une approche individualisée",
      description:
        "Chaque corps, chaque parcours, chaque rythme de vie est différent. Le programme s'ajuste à vous — jamais l'inverse.",
      icon: "fingerprint",
    },
    {
      title: "Une digestion apaisée",
      description:
        "Ballonnements, lourdeurs, inconfort après les repas : un accompagnement concret pour comprendre et soulager les déséquilibres digestifs du quotidien.",
      icon: "wave",
    },
  ],
  disclaimer:
    "Cet accompagnement ne se substitue pas à un avis médical et s'inscrit en complément d'un suivi de santé classique.",
};

export const accompagnement = {
  eyebrow: "L'offre",
  title: "Mon accompagnement",
  subtitle: "Une seule offre, pensée pour aller à l'essentiel.",
  offerName: "Accompagnement Naturopathie & Nutrition",
  price: "149€",
  priceNote: "Un accompagnement complet, sans complexité ni options cachées.",
  features: [
    "Bilan initial complet (habitudes alimentaires, mode de vie, objectifs)",
    "Programme alimentaire personnalisé, orienté produits bruts et variété",
    "Introduction progressive au jeûne adaptée à votre rythme",
    "Un suivi à 3 semaines pour ajuster le programme",
    "Accès à des fiches conseils (digestion, hydratation, sommeil)",
  ],
  cta: "Réserver mon accompagnement",
};

export const avis = {
  eyebrow: "Témoignages",
  title: "Elles et ils en parlent",
  subtitle: "Des parcours différents, un même retour à l'équilibre.",
  items: [
    {
      name: "Marion, 34 ans",
      context: "Troubles digestifs chroniques",
      quote:
        "Depuis que j'ai revu mon alimentation avec Camille, ma digestion n'a plus rien à voir. Je n'aurais jamais pensé que de simples ajustements pouvaient changer autant de choses.",
    },
    {
      name: "Thomas, 41 ans",
      context: "Découverte du jeûne intermittent",
      quote:
        "Le jeûne m'effrayait, elle m'a accompagné pas à pas, sans brutalité. Aujourd'hui c'est devenu naturel, et je me sens beaucoup plus léger au quotidien.",
    },
    {
      name: "Sophie, 29 ans",
      context: "Envie de rééquilibrage simple",
      quote:
        "Un vrai déclic sur ma relation à la nourriture, loin des régimes classiques. J'ai enfin l'impression de manger pour moi, pas contre moi.",
    },
    {
      name: "Julien, 52 ans",
      context: "Fatigue chronique",
      quote:
        "Le bilan initial était très complet et le programme vraiment adapté à mon rythme de vie. Trois mois après, mon énergie n'a plus rien à voir avec avant.",
    },
    {
      name: "Elodie, 38 ans",
      context: "Alimentation ultra-transformée au quotidien",
      quote:
        "Camille m'a aidée à réintroduire des produits bruts sans que ça devienne une contrainte. Le suivi à 3 semaines a fait toute la différence pour tenir dans la durée.",
    },
  ],
};

export const miel = {
  title: "Le Miel des Clairières",
  subtitle: "Récolte bio française",
  story:
    "Le Miel des Clairières est issu de ruchers partenaires implantés dans trois terroirs français, conduits en agriculture biologique certifiée. Récolté de façon artisanale et dans le respect du rythme des abeilles, il porte la signature de la fleur butinée et du paysage qui l'a vu naître.",
  badges: ["Agriculture Biologique", "Origine France"],
  image: "/miel-des-clairieres.jpg",
  imageAlt:
    "Pot de miel doré avec sa cuillère à miel en bois, filet de miel qui coule dans la lumière",
  products: [
    { size: "250g", price: "8€" },
    { size: "500g", price: "14€" },
  ],
  cta: "Commander",
  lieux: [
    {
      id: "provence",
      nom: "Provence",
      fleur: "Lavande",
      lat: 43.9352,
      lng: 5.7128,
      description:
        "Au cœur du plateau de Sault, les ruches butinent les champs de lavande fine pour un miel doré au parfum floral intense.",
    },
    {
      id: "cevennes",
      nom: "Cévennes",
      fleur: "Châtaignier",
      lat: 44.25,
      lng: 3.85,
      description:
        "Sur les pentes boisées des Cévennes, un miel de châtaignier ambré, au caractère affirmé et légèrement boisé.",
    },
    {
      id: "bretagne",
      nom: "Bretagne",
      fleur: "Sarrasin",
      lat: 48.2,
      lng: -2.9,
      description:
        "Face à l'océan, les champs de sarrasin donnent un miel foncé et corsé, typique des terres bretonnes.",
    },
    {
      id: "alpes",
      nom: "Alpes de Haute-Provence",
      fleur: "Fleurs de montagne",
      lat: 44.15,
      lng: 6.3,
      description:
        "En altitude, un miel toutes fleurs récolté sur des prairies préservées, léger et délicatement parfumé.",
    },
  ],
};

export const reservation = {
  eyebrow: "Premier pas",
  title: "Réserver un appel découverte",
  description:
    "Un échange de 20 minutes, sans engagement, pour comprendre vos besoins, répondre à vos questions et voir ensemble si cet accompagnement vous correspond.",
  cta: "Choisir un créneau",
};

export const contact = {
  eyebrow: "Échangeons",
  title: "Contact",
  subtitle: "Une question ? Une envie d'échanger avant de vous lancer ?",
};

export const footer = {
  legal: "Camille Fontaine — Naturopathe & Nutritionniste. SIRET fictif : 000 000 000 00000.",
  mentions:
    "Les informations présentées sur ce site ne remplacent pas un avis médical. Consultez un professionnel de santé pour toute question relative à votre état de santé.",
};
