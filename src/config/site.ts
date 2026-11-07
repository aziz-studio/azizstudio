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
};
