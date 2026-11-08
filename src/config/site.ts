export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  nature: string;
  methodOrTech: string;
  description: string;
  technologies: string[];
  imageSrc?: string;
  imageAlt?: string;
}

export interface ApproachStep {
  number: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface SkillGroup {
  title: string;
  description?: string;
  items: string[];
  note?: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  author: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  whatsappUrl: string;
  whatsappMessage: string;
  location: string;
  navigation: NavItem[];
  socials: SocialLink[];
  projects: ProjectItem[];
  approach: ApproachStep[];
  skills: SkillGroup[];
  stats: StatItem[];
  services: ServiceItem[];
  faq: FaqItem[];
}

export const siteConfig: SiteConfig = {
  name: "Aziz Studio",
  tagline: "Concepteur web indépendant",
  description:
    "Découvrez Aziz Studio, l'univers d'Aziz, concepteur web indépendant. Projets personnels, conception d'interfaces et création de sites web.",

  // Coordonnées officielles
  url: "", // À renseigner lors de la configuration du domaine Cloudflare Pages (PUBLIC_SITE_URL)
  author: "Aziz",
  email: "azizstudio@proton.me",
  phone: "+242068692400",
  phoneDisplay: "+242 06 869 24 00",
  whatsapp: "+242068692400",
  whatsappDisplay: "+242 06 869 24 00",
  whatsappUrl:
    "https://wa.me/242068692400?text=Bonjour%2C%20je%20souhaite%20discuter%20d%27un%20projet%20web%20avec%20vous.",
  whatsappMessage: "Bonjour, je souhaite discuter d'un projet web avec vous.",
  location: "",

  navigation: [
    { label: "Accueil", href: "/" },
    { label: "Projets", href: "/projets" },
    { label: "Approche", href: "/#approche" },
    { label: "Compétences", href: "/#competences" },
    { label: "À propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
  ],

  socials: [
    {
      label: "GitHub",
      href: "https://github.com/aziz-studio",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/azizstudiodigital",
      icon: "linkedin",
    },
    {
      label: "X",
      href: "https://x.com/Azizstudio81",
      icon: "x",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/azizstudiodigital",
      icon: "facebook",
    },
  ],

  projects: [
    {
      id: "boulevard-hotel",
      title: "Boulevard Hôtel",
      category: "Hôtellerie",
      nature: "Projet personnel",
      methodOrTech: "Conception assistée par l'IA",
      description: "Un univers hôtelier présenté à travers une expérience web.",
      technologies: ["Design d'interface", "Assistance IA", "Prototypage"],
      imageSrc: "/images/boulevard-hotel-thumb.webp",
      imageAlt: "Aperçu de l'interface conçue pour le projet Boulevard Hôtel",
    },
    {
      id: "molato-commerce",
      title: "Molato Commerce",
      category: "Commerce en ligne",
      nature: "Projet personnel",
      methodOrTech: "Conception assistée par l'IA",
      description: "Une expérience digitale pensée autour de la découverte des produits.",
      technologies: ["E-commerce", "Assistance IA", "Parcours utilisateur"],
      imageSrc: "/images/molato-commerce-thumb.webp",
      imageAlt: "Aperçu de l'interface conçue pour le projet Molato Commerce",
    },
    {
      id: "maison-kiala",
      title: "Maison Kiala",
      category: "Architecture & design intérieur",
      nature: "Projet personnel",
      methodOrTech: "WordPress & Elementor",
      description: "Un univers visuel consacré à l'aménagement et au design intérieur.",
      technologies: ["WordPress", "Elementor", "Direction visuelle"],
      imageSrc: "/images/maison-kiala-thumb.webp",
      imageAlt: "Aperçu de l'interface conçue pour le projet Maison Kiala",
    },
    {
      id: "elikia-sante",
      title: "Elikia Santé",
      category: "Santé",
      nature: "Projet personnel",
      methodOrTech: "WordPress & Gutenberg",
      description: "Une présentation claire et structurée pour une clinique dentaire.",
      technologies: ["WordPress", "Gutenberg", "Mise en page éditoriale"],
      imageSrc: "/images/elikia-sante-thumb.webp",
      imageAlt: "Aperçu de l'interface conçue pour le projet Elikia Santé",
    },
    {
      id: "atre-steakhouse",
      title: "Âtre Steakhouse",
      category: "Restauration",
      nature: "Projet personnel",
      methodOrTech: "Conception assistée par l'IA",
      description: "Une vitrine gourmande et chaleureuse pour un restaurant de grillades.",
      technologies: ["Design d'interface", "Assistance IA", "Prototypage"],
      imageSrc: "/images/atre-steakhouse.webp",
      imageAlt: "Aperçu de l'interface conçue pour le projet Âtre Steakhouse",
    },
    {
      id: "renovo-couleur",
      title: "Renovo Couleur",
      category: "Peinture & Rénovation",
      nature: "Projet personnel",
      methodOrTech: "WordPress & Elementor",
      description: "Un site vitrine professionnel pour une entreprise de peinture et rénovation.",
      technologies: ["WordPress", "Elementor", "Direction visuelle"],
      imageSrc: "/images/renovo-couleur.webp",
      imageAlt: "Aperçu de l'interface conçue pour le projet Renovo Couleur",
    },
  ],

  approach: [
    {
      number: "01",
      title: "Comprendre",
      description: "Clarifier l'idée, le besoin et l'objectif du projet.",
    },
    {
      number: "02",
      title: "Structurer",
      description: "Organiser les contenus et définir les grandes lignes de l'expérience.",
    },
    {
      number: "03",
      title: "Concevoir",
      description: "Travailler l'identité visuelle, les interfaces et la cohérence graphique.",
    },
    {
      number: "04",
      title: "Réaliser",
      description: "Assembler, intégrer et améliorer l'expérience web à l'aide des outils adaptés au projet.",
    },
  ],

  skills: [
    {
      title: "Conception web",
      description: "Principes et méthodes de conception centrés sur la clarté et l'ergonomie.",
      items: [
        "Organisation des contenus",
        "Conception d'interfaces",
        "Structure de pages",
        "Hiérarchie visuelle",
        "Réflexion sur l'expérience utilisateur",
      ],
    },
    {
      title: "WordPress",
      description: "Création et gestion de sites web avec le CMS de référence.",
      items: ["Elementor", "Divi", "Gutenberg", "WooCommerce"],
    },
    {
      title: "Outils d'intelligence artificielle",
      description: "Outils d'assistance à la réflexion, à la structuration et à la réalisation.",
      items: ["ChatGPT", "Claude", "Gemini", "Cursor", "Antigravity"],
      note: "Utilisés comme outils d'assistance et de productivité créative.",
    },
    {
      title: "Technologies en exploration",
      description: "Outils et architectures modernes en cours d'apprentissage actif.",
      items: ["Astro"],
      note: "Technologie explorée pour des architectures rapides et légères.",
    },
  ],

  // Chiffres clés affichés sous le hero (composant StatsBar).
  // À modifier librement : supprime l'entrée ou toute la liste pour masquer la barre.
  stats: [
    { value: "8 ans", label: "de pratique du web (WordPress, HTML/CSS)" },
    { value: "30+", label: "projets personnels réalisés" },
    { value: "99+", label: "score Performances sur PageSpeed Insights" },
  ],

  // Prestations affichées sur l'accueil (composant Services).
  services: [
    {
      number: "01",
      title: "Sites vitrines WordPress",
      description:
        "Un site clair pour présenter une activité, un savoir-faire ou une entreprise : structure des pages, mise en page soignée avec Elementor ou Gutenberg, lecture agréable sur mobile.",
      tags: ["WordPress", "Elementor", "Gutenberg"],
    },
    {
      number: "02",
      title: "Boutiques en ligne WooCommerce",
      description:
        "Une boutique pour présenter et vendre des produits : catalogue lisible, fiches produits claires et parcours d'achat simple.",
      tags: ["WooCommerce", "E-commerce", "Parcours utilisateur"],
    },
    {
      number: "03",
      title: "Sites rapides avec Astro",
      description:
        "Un site léger et très rapide pour une présentation soignée, avec une architecture simple à faire évoluer. Ce portfolio est lui-même réalisé avec Astro.",
      tags: ["Astro", "Performance", "Architecture légère"],
    },
  ],

  // Questions fréquentes affichées sur la page Contact (composant Faq).
  faq: [
    {
      question: "Quels types de sites réalises-tu ?",
      answer:
        "Des sites vitrines et de présentation avec WordPress (Elementor, Gutenberg, Divi), des boutiques en ligne avec WooCommerce et des sites rapides et légers avec Astro. Chaque projet est pensé selon le besoin, pas selon un modèle imposé.",
    },
    {
      question: "Comment se déroule un projet ?",
      answer:
        "En quatre étapes : comprendre le besoin, structurer les contenus, concevoir l'identité et les interfaces, puis réaliser le site. Chaque étape est validée avec vous avant de passer à la suivante.",
    },
    {
      question: "Quels sont les délais ?",
      answer:
        "Ils dépendent de la taille du projet et de la rapidité avec laquelle les contenus (textes, images) sont fournis. À titre indicatif, comptez environ 2 à 3 semaines pour un site vitrine simple ; une boutique en ligne ou un projet sur mesure demande davantage. Un délai précis est donné après un premier échange.",
    },
    {
      question: "Combien coûte un site ?",
      answer:
        "Chaque projet est différent : je prépare un devis après un premier échange gratuit, par WhatsApp ou par e-mail. Je préfère proposer un prix clair et adapté à votre besoin plutôt qu'une grille standard.",
    },
    {
      question: "Comment se passe le paiement ?",
      answer:
        "Les modalités de paiement sont discutées ensemble avant le démarrage du projet, puis précisées dans le devis. L'objectif est de trouver un accord clair et adapté à votre situation.",
    },
    {
      question: "Puis-je demander des modifications ?",
      answer:
        "Oui. Deux séries de retours sont prévues pendant la conception, et une courte période de corrections est assurée après la mise en ligne.",
    },
    {
      question: "Peux-tu t'occuper de l'hébergement et du nom de domaine ?",
      answer:
        "Oui, si vous le souhaitez, je peux m'en occuper : choix de l'hébergement, configuration du nom de domaine et mise en ligne. Vous pouvez aussi garder la main en gérant vous-même votre compte. Nous en discutons ensemble selon votre préférence.",
    },
    {
      question: "Utilises-tu l'intelligence artificielle ?",
      answer:
        "Oui, comme outil d'assistance pour réfléchir, structurer et gagner du temps. Les choix de conception, la direction visuelle et la vérification du résultat restent les miens.",
    },
  ],
};
