export interface ProjectStructureItem {
  title: string;
  description: string;
}

export interface DetailedProject {
  id: string;
  title: string;
  category: string;
  nature: string;
  methodOrTech: string;
  period: string;
  role: string;
  summary: string;
  technologies: string[];
  imageSrc?: string;
  imageAlt?: string;
  fullImageSrc?: string;
  context: string;
  objectives: string[];
  artDirection: {
    palette: string[];
    paletteDescription: string;
    typography: string;
    ambiance: string;
  };
  structure: ProjectStructureItem[];
  technologiesDetails: string;
  contribution: string;
  learnings: string;
  nextId: string;
  prevId: string;
}

export const detailedProjects: DetailedProject[] = [
  {
    id: "boulevard-hotel",
    title: "Boulevard Hôtel",
    category: "Hôtellerie",
    nature: "Projet personnel",
    methodOrTech: "Conception assistée par l'IA",
    period: "Projet personnel — 2024",
    role: "Conception, direction visuelle & prototypage",
    summary:
      "Un univers hôtelier haut de gamme présenté à travers une expérience web immersive, combinant élégance visuelle et parcours de réservation épuré.",
    technologies: ["Design d'interface", "Assistance IA", "Prototypage"],
    imageSrc: "/images/boulevard-hotel-thumb.webp",
    fullImageSrc: "/images/boulevard-hotel.webp",
    imageAlt: "Aperçu de l'interface conçue pour le projet Boulevard Hôtel",
    context:
      "Ce projet est né de ma volonté d'explorer l'univers du luxe et de l'hôtellerie indépendante à travers le web. L'enjeu principal était d'expérimenter comment l'intelligence artificielle peut assister la formalisation d'une identité visuelle complète et la structuration d'une expérience digitale élégante, sans jamais sacrifier la cohérence humaine et le sens du détail.",
    objectives: [
      "Transmettre une atmosphère chaleureuse, feutrée et haut de gamme dès le premier coup d'œil.",
      "Concevoir un parcours de consultation et de réservation fluide, clair et sans friction superflue.",
      "Valoriser les chambres, suites et prestations annexes avec une hiérarchie typographique maîtrisée.",
      "Assurer une lisibilité irréprochable et un confort de lecture optimal sur mobile et tablette.",
    ],
    artDirection: {
      palette: ["#1C1917", "#B45309", "#E7E5E4", "#FBF9F5", "#44403C"],
      paletteDescription:
        "Tons feutrés alliant sable chaud, charbon doux et accents dorés/terracotta discrets pour une sensation d'intimité et de raffinement.",
      typography:
        "Association d'une typographie serif élégante pour les titres d'accroche et d'une sans-serif contemporaine pour une lisibilité parfaite des fiches chambres.",
      ambiance:
        "Minimalisme sophistiqué, lumière naturelle suggérée et mise en page aérée inspirée des publications d'architecture d'intérieur.",
    },
    structure: [
      {
        title: "Accueil & Immersion",
        description:
          "Accroche soignée, sélecteur rapide de dates de séjour et mise en avant de l'esprit du lieu.",
      },
      {
        title: "Chambres & Suites",
        description:
          "Présentation détaillée de chaque espace : superficie, prestations, ambiance et tarifs indicatifs.",
      },
      {
        title: "Expériences & Gastronomie",
        description:
          "Sections dédiées au restaurant de l'hôtel, au spa et aux services de conciergerie.",
      },
      {
        title: "Réservation & Accès",
        description:
          "Tunnel de réservation simplifié en étapes claires avec plan d'accès et coordonnées.",
      },
    ],
    technologiesDetails:
      "Conception réalisée avec l'assistance d'outils d'intelligence artificielle (ChatGPT et Claude pour la réflexion éditoriale et la structuration des besoins, outils de génération visuelle pour les concepts d'ambiance) combinée à un travail manuel de maquettage et de composition d'interfaces.",
    contribution:
      "J'ai pris en charge l'intégralité de la démarche : définition du positionnement conceptuel, élaboration de l'arborescence, structuration de l'expérience utilisateur, formalisation de la charte graphique et prototypage des écrans clés.",
    learnings:
      "Ce projet m'a permis de comprendre comment utiliser l'IA comme un accélérateur de réflexion et de maquettage, tout en conservant une rigueur absolue sur la cohérence des espacements, la hiérarchie visuelle et la simplicité d'usage.",
    prevId: "elikia-sante",
    nextId: "molato-commerce",
  },
  {
    id: "molato-commerce",
    title: "Molato Commerce",
    category: "Commerce en ligne",
    nature: "Projet personnel",
    methodOrTech: "Conception assistée par l'IA",
    period: "Projet personnel — 2024",
    role: "Conception UX/UI & parcours client",
    summary:
      "Une boutique en ligne épurée pensée pour sublimer les produits de mode contemporaine et offrir un parcours d'achat sans friction.",
    technologies: ["E-commerce", "Assistance IA", "Parcours utilisateur"],
    imageSrc: "/images/molato-commerce-thumb.webp",
    fullImageSrc: "/images/molato-commerce.webp",
    imageAlt: "Aperçu de l'interface conçue pour le projet Molato Commerce",
    context:
      "Molato Commerce est une exploration personnelle centrée sur le design e-commerce. Face aux boutiques en ligne souvent saturées de bannières criardes et de sollicitations agressives, j'ai voulu imaginer une interface apaisée où le produit occupe le centre de l'attention et où chaque interaction reste simple et transparente.",
    objectives: [
      "Éliminer toute surcharge visuelle pour privilégier la mise en valeur des vêtements et accessoires.",
      "Optimiser l'ergonomie du catalogue avec des filtres instantanés, lisibles et intuitifs.",
      "Concevoir une fiche produit complète mais aérée, intégrant guide des tailles et réassurance claire.",
      "Garantir une expérience d'achat ultra-rapide et confortable sur écran mobile.",
    ],
    artDirection: {
      palette: ["#18181B", "#71717A", "#E4E4E7", "#FAFAFA", "#B45309"],
      paletteDescription:
        "Contraste net noir/blanc cassé complété par des gris minéraux et une touche terracotta pour les interactions clés.",
      typography:
        "Typographie sans-serif moderne aux proportions géométriques, assurant une lecture nette des prix et descriptions.",
      ambiance:
        "Galerie d'art contemporain appliquée au prêt-à-porter : grands espaces blancs, cadrages généreux et typographie discrète.",
    },
    structure: [
      {
        title: "Page d'accueil",
        description:
          "Mise en avant éditoriale de la collection du moment et sélection de pièces phares.",
      },
      {
        title: "Catalogue & Filtres",
        description:
          "Grille responsive modulable avec tri par catégorie, pointure/taille et disponibilité.",
      },
      {
        title: "Fiche Produit",
        description:
          "Galerie visuelle, composition textile, guide des tailles interactif et bouton d'action immédiat.",
      },
      {
        title: "Panier & Récapitulatif",
        description:
          "Tunnel d'achat sobre en une page simplifiée réduisant le taux d'abandon.",
      },
    ],
    technologiesDetails:
      "Méthode hybride combinant l'assistance par l'IA pour l'analyse des meilleures pratiques e-commerce et la formulation des parcours d'achat, avec une conception d'interfaces rigoureuse orientée mobile-first.",
    contribution:
      "Définition complète du parcours d'achat, design du système de composants e-commerce (cartes produit, modales, tiroir de panier), sélection de la direction artistique et rédaction des fiches.",
    learnings:
      "Approfondissement des mécaniques d'achat en ligne, de l'importance cruciale de la hiérarchie d'information sur petit écran et de la réduction cognitive pour favoriser la décision du visiteur.",
    prevId: "boulevard-hotel",
    nextId: "maison-kiala",
  },
  {
    id: "maison-kiala",
    title: "Maison Kiala",
    category: "Architecture & design intérieur",
    nature: "Projet personnel",
    methodOrTech: "WordPress & Elementor",
    period: "Projet personnel — 2024",
    role: "Direction visuelle & intégration WordPress",
    summary:
      "Un site vitrine au style éditorial haut de gamme dédié à un studio d'architecture d'intérieur et d'aménagement d'espaces contemporains.",
    technologies: ["WordPress", "Elementor", "Direction visuelle"],
    imageSrc: "/images/maison-kiala-thumb.webp",
    fullImageSrc: "/images/maison-kiala.webp",
    imageAlt: "Aperçu de l'interface conçue pour le projet Maison Kiala",
    context:
      "Maison Kiala a été développé pour tester les limites créatives de WordPress associé au constructeur de pages Elementor. L'objectif était de dépasser l'aspect standardisé souvent associé aux thèmes préconçus pour obtenir une composition asymétrique digne d'une revue d'architecture internationale.",
    objectives: [
      "Créer une identité visuelle forte et poétique autour des matières nobles (bois, pierre, lin).",
      "Concevoir une mise en page fluide mêlant photographies de réalisations et textes de réflexion.",
      "Offrir au propriétaire du site une interface d'administration simple pour enrichir son portfolio.",
      "Optimiser le temps de chargement malgré la présence d'images volumineuses.",
    ],
    artDirection: {
      palette: ["#292524", "#78716C", "#D6D3D1", "#F5F5F4", "#9A3412"],
      paletteDescription:
        "Tons organiques inspirés de la pierre calcaire, de l'argile et du noyer avec des contrastes délicats.",
      typography:
        "Typographie à fort caractère éditorial pour les titres, associée à une police de labeur équilibrée pour les notes de projet.",
      ambiance:
        "Maison d'architecte lumineuse, calme et épurée où chaque élément respire.",
    },
    structure: [
      {
        title: "Page d'accueil & Manifeste",
        description:
          "Introduction à la philosophie du studio et sélection de projets récents.",
      },
      {
        title: "Portfolio des Réalisations",
        description:
          "Grille de projets d'architecture filtrable par typologie (résidentiel, bureaux, hôtellerie).",
      },
      {
        title: "Étude de Cas Détaillée",
        description:
          "Page immersive décrivant le projet du concept à la livraison, matériaux utilisés et plans de masse.",
      },
      {
        title: "Le Studio & Contact",
        description:
          "Présentation de l'équipe, méthodologie de travail et formulaire de prise de contact pour projet.",
      },
    ],
    technologiesDetails:
      "Réalisé sous WordPress avec Elementor, complété par du CSS personnalisé pour affiner les espacements et les transitions typographiques. Optimisation des médias et structure allégée pour préserver la réactivité.",
    contribution:
      "Installation et paramétrage de l'environnement WordPress, création intégrale des gabarits de pages sur Elementor, rédaction éditoriale et adaptation responsive millimétrée.",
    learnings:
      "Maîtrise approfondie des réglages fins d'Elementor, gestion des grilles complexes et compréhension des équilibres nécessaires entre ambition graphique et performance de chargement WordPress.",
    prevId: "molato-commerce",
    nextId: "elikia-sante",
  },
  {
    id: "elikia-sante",
    title: "Elikia Santé",
    category: "Santé",
    nature: "Projet personnel",
    methodOrTech: "WordPress & Gutenberg",
    period: "Projet personnel — 2024",
    role: "Architecture d'information & intégration Gutenberg",
    summary:
      "Une vitrine claire, accessible et rassurante pour une clinique dentaire et pôle de santé pluridisciplinaire.",
    technologies: ["WordPress", "Gutenberg", "Mise en page éditoriale"],
    imageSrc: "/images/elikia-sante-thumb.webp",
    fullImageSrc: "/images/elikia-sante.webp",
    imageAlt: "Aperçu de l'interface conçue pour le projet Elikia Santé",
    context:
      "Elikia Santé est né de la volonté de prouver qu'il est possible de concevoir un site web WordPress rapide, propre, accessible et élégant en utilisant exclusivement l'éditeur de blocs natif Gutenberg, sans dépendre de constructeurs tiers lourds.",
    objectives: [
      "Inspirer confiance et sérénité aux patients grâce à une présentation claire et soignée des soins.",
      "Faciliter l'accès immédiat aux informations indispensables : urgences, horaires, praticiens et accès.",
      "Garantir une accessibilité exemplaire (contrastes forts, hiérarchie limpide, navigation clavier).",
      "Profiter de la légèreté absolue de Gutenberg pour des temps de chargement quasi instantanés.",
    ],
    artDirection: {
      palette: ["#0F172A", "#334155", "#E2E8F0", "#F8FAFC", "#0284C7"],
      paletteDescription:
        "Tons apaisants de bleu clinique profond, gris bleuté et blanc immaculé inspirant professionnalisme et hygiène.",
      typography:
        "Police sans-serif humaniste très lisible à toutes les échelles pour faciliter la lecture des patients de tout âge.",
      ambiance:
        "Clarté médicale, sérénité, écoute et transparence totale.",
    },
    structure: [
      {
        title: "Accueil & Urgences",
        description:
          "Bandeau d'information prioritaire, numéro d'urgence visible et accès rapide aux spécialités.",
      },
      {
        title: "Pôles de Soins",
        description:
          "Pages informatives vulgarisées pour chaque type d'intervention (prévention, soins, esthétique dentaire).",
      },
      {
        title: "L'Équipe & Les Praticiens",
        description:
          "Profils professionnels des praticiens avec diplômes, spécialités et philosophie de prise en charge.",
      },
      {
        title: "Informations Pratiques",
        description:
          "Plan d'accès interactif, transports en commun, modalités de prise de rendez-vous et honoraires.",
      },
    ],
    technologiesDetails:
      "Site propulsé par WordPress avec l'éditeur natif Gutenberg et des compositions de blocs (patterns) créées sur mesure. Zéro constructeur tiers, zéro surcharge de scripts.",
    contribution:
      "Architecture des contenus orientée besoin patient, conception et assemblage des blocs Gutenberg, rédaction des textes pédagogiques et vérification des critères d'accessibilité WCAG.",
    learnings:
      "Confirmation de l'excellence de Gutenberg pour des projets durables et légers, et apprentissage approfondi de la conception de sites de santé où la clarté prime sur l'artifice visuel.",
    prevId: "maison-kiala",
    nextId: "boulevard-hotel",
  },
];

export function getProjectById(id: string): DetailedProject | undefined {
  return detailedProjects.find((p) => p.id === id);
}
