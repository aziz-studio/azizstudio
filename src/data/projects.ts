export interface ProjectStructureItem {
  title: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
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
  /** Défilement interactif activé */
  hasScrollAnimation?: boolean;
  /** Durée du défilement au survol (15s à 18s proportionnel) */
  scrollDuration?: string;
  /** URL de démonstration en ligne (si hébergé) */
  liveUrl?: string;
  /** URL affichée dans la barre du navigateur fictif */
  displayUrl?: string;
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
  /** Conclusion de l'étude de cas */
  conclusion?: string;
  /** Galerie complémentaire de captures */
  gallery?: GalleryImage[];
  nextId: string;
  prevId: string;
}

export const detailedProjects: DetailedProject[] = [
  {
    id: "boulevard-hotel",
    title: "Boulevard Hôtel",
    category: "Hôtellerie",
    nature: "Site de démonstration",
    methodOrTech: "Conception assistée par l'IA",
    period: "Site de démonstration — 2024",
    role: "Conception, direction visuelle & prototypage",
    summary:
      "Un univers hôtelier haut de gamme présenté à travers une expérience web immersive, combinant élégance visuelle et parcours de réservation épuré.",
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "Assistance IA"],
    imageSrc: "/images/boulevard-hotel-thumb.webp",
    fullImageSrc: "/images/boulevard-hotel.webp",
    hasScrollAnimation: true,
    scrollDuration: "17s",
    liveUrl: "https://boulevard-hotel.vercel.app/",
    displayUrl: "boulevard-hotel.vercel.app",
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
      "Conception full-stack moderne utilisant Next.js et React, avec l'assistance d'outils d'intelligence artificielle (ChatGPT et Claude pour la réflexion éditoriale et la structuration des besoins, outils de génération visuelle pour les concepts d'ambiance) combinée à un travail manuel de maquettage et de composition d'interfaces.",
    contribution:
      "J'ai pris en charge l'intégralité de la démarche : définition du positionnement conceptuel, élaboration de l'arborescence, structuration de l'expérience utilisateur, formalisation de la charte graphique et prototypage des écrans clés.",
    learnings:
      "Ce projet m'a permis de comprendre comment utiliser l'IA comme un accélérateur de réflexion et de maquettage, tout en conservant une rigueur absolue sur la cohérence des espacements, la hiérarchie visuelle et la simplicité d'usage.",
    conclusion:
      "Boulevard Hôtel démontre qu'une expérience digitale hôtelière haut de gamme peut être conçue avec rigueur en utilisant l'IA comme outil d'assistance. Le résultat est un site de démonstration complet qui illustre comment présenter un établissement de prestige à travers une interface soignée, un parcours de réservation fluide et une direction artistique cohérente.",
    prevId: "renovo-couleur",
    nextId: "molato-commerce",
  },
  {
    id: "molato-commerce",
    title: "Molato Commerce",
    category: "Commerce en ligne",
    nature: "Site de démonstration",
    methodOrTech: "Conception assistée par l'IA",
    period: "Site de démonstration — 2024",
    role: "Conception UX/UI & parcours client",
    summary:
      "Une boutique en ligne épurée pensée pour sublimer les produits de mode contemporaine et offrir un parcours d'achat sans friction.",
    technologies: ["E-commerce", "Next.js", "TypeScript", "Assistance IA"],
    imageSrc: "/images/molato-commerce-thumb.webp",
    fullImageSrc: "/images/molato-commerce.webp",
    hasScrollAnimation: true,
    scrollDuration: "15s",
    liveUrl: "https://molato-ecommerce.vercel.app/",
    displayUrl: "molato-ecommerce.vercel.app",
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
      "Méthode hybride combinant Next.js et TypeScript avec l'assistance par l'IA pour l'analyse des meilleures pratiques e-commerce et la formulation des parcours d'achat, avec une conception d'interfaces rigoureuse orientée mobile-first.",
    contribution:
      "Définition complète du parcours d'achat, design du système de composants e-commerce (cartes produit, modales, tiroir de panier), sélection de la direction artistique et rédaction des fiches.",
    learnings:
      "Approfondissement des mécaniques d'achat en ligne, de l'importance cruciale de la hiérarchie d'information sur petit écran et de la réduction cognitive pour favoriser la décision du visiteur.",
    conclusion:
      "Molato Commerce illustre comment une interface e-commerce peut être à la fois épurée et fonctionnelle. Ce site de démonstration prouve que le minimalisme et la mise en valeur du produit ne s'opposent pas à l'efficacité d'un parcours d'achat bien structuré.",
    prevId: "boulevard-hotel",
    nextId: "maison-kiala",
  },
  {
    id: "maison-kiala",
    title: "Maison Kiala",
    category: "Architecture & design intérieur",
    nature: "Site de démonstration",
    methodOrTech: "WordPress & Elementor",
    period: "Site de démonstration — 2024",
    role: "Direction visuelle & intégration WordPress",
    summary:
      "Un site vitrine au style éditorial haut de gamme dédié à un studio d'architecture d'intérieur et d'aménagement d'espaces contemporains.",
    technologies: ["WordPress", "Elementor Pro", "Direction visuelle"],
    imageSrc: "/images/maison-kiala-thumb.webp",
    fullImageSrc: "/images/maison-kiala-full.webp",
    hasScrollAnimation: true,
    scrollDuration: "17s",
    displayUrl: "maisonkiala.local",
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
        "Typographie Playfair Display pour les titres, associée à DM Sans pour les notes de projet et formulaires.",
      ambiance:
        "Maison d'architecte lumineuse, calme et épurée où chaque élément respire.",
    },
    structure: [
      {
        title: "Page d'accueil & Manifeste",
        description:
          "Introduction à la philosophie du studio avec chiffres clés (120+ projets, 10 ans d'expérience) et sélection de projets récents.",
      },
      {
        title: "Services (7 prestations)",
        description:
          "Intérieurs résidentiels, bureaux, restaurants et hôtels, zonage spatial, mobilier et décoration, conseil couleurs et matériaux, conception spatiale.",
      },
      {
        title: "Portfolio des Réalisations",
        description:
          "Quatre projets phares présentés : Villa Beauvoir, Loft TriBeCa, Casa Sereia et Résidence Kensington — avec images, localisation et typologies.",
      },
      {
        title: "Processus & Contact",
        description:
          "Méthodologie en 4 étapes (Découverte, Concept, Développement, Livraison), témoignages clients, formulaire de contact projet et newsletter.",
      },
    ],
    technologiesDetails:
      "Réalisé sous WordPress avec Elementor Pro, complété par du CSS personnalisé pour affiner les espacements et les transitions typographiques. Le thème Hello Elementor assure une base légère. LiteSpeed Cache optimise les performances. Header et footer gérés via le Theme Builder d'Elementor.",
    contribution:
      "Installation et paramétrage de l'environnement WordPress, création intégrale des gabarits de pages sur Elementor, rédaction éditoriale et adaptation responsive millimétrée. Conception des variantes du logo SVG et intégration du portfolio PDF téléchargeable.",
    learnings:
      "Maîtrise approfondie des réglages fins d'Elementor, gestion des grilles complexes et compréhension des équilibres nécessaires entre ambition graphique et performance de chargement WordPress.",
    conclusion:
      "Maison Kiala démontre qu'Elementor, utilisé avec rigueur et attention, permet de produire un site vitrine digne d'un studio d'architecture haut de gamme. Ce site de démonstration illustre la capacité de WordPress à servir de support à une identité visuelle exigeante, avec un header minimaliste, un processus en 4 étapes et des formulaires de contact fonctionnels.",
    prevId: "molato-commerce",
    nextId: "elikia-sante",
  },
  {
    id: "elikia-sante",
    title: "Elikia Santé",
    category: "Santé",
    nature: "Site de démonstration",
    methodOrTech: "WordPress & Gutenberg",
    period: "Site de démonstration — 2024",
    role: "Architecture d'information & intégration Gutenberg",
    summary:
      "Une vitrine claire, accessible et rassurante pour une clinique dentaire et pôle de santé pluridisciplinaire.",
    technologies: ["WordPress", "Gutenberg FSE", "theme.json v3", "Accessibilité"],
    imageSrc: "/images/elikia-sante-thumb.webp",
    fullImageSrc: "/images/elikia-sante.webp",
    hasScrollAnimation: true,
    scrollDuration: "17s",
    displayUrl: "aswblock.local",
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
        "Police Inter (sans-serif humaniste) chargée localement en variable WOFF2, très lisible à toutes les échelles pour faciliter la lecture des patients de tout âge.",
      ambiance:
        "Clarté médicale, sérénité, écoute et transparence totale.",
    },
    structure: [
      {
        title: "Accueil & Soins dentaires",
        description:
          "Hero médical, présentation des 5 spécialités (blanchiment, implants, orthodontie, nettoyage, préventif) et section télémédecine.",
      },
      {
        title: "Équipe médicale",
        description:
          "Profils des 4 praticiens avec spécialités et philosophie de prise en charge — cartes interactives.",
      },
      {
        title: "Solutions & Télémédecine",
        description:
          "Présentation des soins à distance, consultations en ligne et accompagnement médical accessible depuis le domicile.",
      },
      {
        title: "Contact & Rendez-vous",
        description:
          "Formulaire complet avec sélection de date, service, niveau d'urgence et consentement RGPD — système de schéma signé et honeypot intégré.",
      },
    ],
    technologiesDetails:
      "Site propulsé par WordPress avec un thème bloc FSE complet (ASW Block) utilisant exclusivement l'éditeur natif Gutenberg. Le theme.json v3 définit une palette complète, des typographies fluides avec clamp(), un mode sombre, 10 presets d'ombres et des rayons cohérents. Zéro constructeur tiers, zéro surcharge de scripts. Plugins légers développés sur mesure : formulaires (asw-form), blocs icônes et bouton retour en haut.",
    contribution:
      "Architecture des contenus orientée besoin patient, conception et assemblage des blocs Gutenberg et de plus de 100 patterns organisés en 13 catégories, rédaction des textes pédagogiques et vérification des critères d'accessibilité (focus visible, aria-label, contrastes, prefers-reduced-motion).",
    learnings:
      "Confirmation de l'excellence de Gutenberg pour des projets durables et légers, et apprentissage approfondi de la conception de sites de santé où la clarté prime sur l'artifice visuel.",
    conclusion:
      "Elikia Santé prouve que Gutenberg FSE est une alternative crédible et performante aux constructeurs de pages traditionnels. Ce site de démonstration montre comment concevoir une plateforme médicale accessible, rapide et rassurante, avec un theme.json complet, des formulaires sécurisés et une architecture de blocs entièrement maîtrisée.",
    prevId: "maison-kiala",
    nextId: "atre-steakhouse",
  },
  {
    id: "atre-steakhouse",
    title: "Âtre Steakhouse",
    category: "Restauration",
    nature: "Site de démonstration",
    methodOrTech: "Conception assistée par l'IA",
    period: "Site de démonstration — 2024",
    role: "Conception, direction visuelle & prototypage",
    summary:
      "Une vitrine gourmande et chaleureuse pour un restaurant de grillades haut de gamme, mêlant ambiance feutrée et parcours de réservation épuré.",
    technologies: ["Design d'interface", "HTML5", "TailwindCSS", "Alpine.js", "Assistance IA"],
    imageSrc: "/images/atre-steakhouse.webp",
    fullImageSrc: "/images/atre-steakhouse.webp",
    hasScrollAnimation: true,
    scrollDuration: "18s",
    liveUrl: "https://latre-braise.netlify.app/",
    displayUrl: "latre-braise.netlify.app",
    imageAlt: "Aperçu de l'interface conçue pour le projet Âtre Steakhouse",
    context:
      "Âtre Steakhouse est un projet né de l'envie d'explorer l'univers de la restauration gastronomique à travers le web. L'objectif était de concevoir une expérience digitale qui retranscrit fidèlement l'atmosphère chaleureuse d'un restaurant de grillades premium, en utilisant l'intelligence artificielle comme outil d'assistance à la conception.",
    objectives: [
      "Transmettre une ambiance chaleureuse, conviviale et gourmande dès la première visite.",
      "Mettre en valeur le menu et les spécialités avec une présentation appétissante et lisible.",
      "Concevoir un parcours de réservation simple et sans friction.",
      "Assurer une expérience fluide et engageante sur mobile comme sur grand écran.",
    ],
    artDirection: {
      palette: ["#1C1917", "#92400E", "#D6D3D1", "#FBF9F5", "#B45309"],
      paletteDescription:
        "Tons chauds inspirés des braises et du bois noble : brun profond, ambre doré et crème chaleureux pour une atmosphère intimiste.",
      typography:
        "Typographie Playfair Display et Cormorant Garamond pour les titres évoquant la tradition, associée à Inter pour les descriptions et le menu.",
      ambiance:
        "Restaurant de caractère Dark & Moody où le bois, le cuir et la lumière tamisée créent une enveloppe sensorielle rassurante.",
    },
    structure: [
      {
        title: "Accueil & Ambiance",
        description:
          "Accroche visuelle immersive avec photographies d'ambiance, horaires et bouton de réservation immédiat.",
      },
      {
        title: "La Carte & Spécialités",
        description:
          "Présentation structurée du menu par catégories : entrées, grillades, accompagnements et desserts.",
      },
      {
        title: "Notre Histoire",
        description:
          "Récit de la philosophie du restaurant, de la sélection des viandes et du savoir-faire des grilleurs.",
      },
      {
        title: "Réservation & Accès",
        description:
          "Formulaire de réservation simplifié avec choix de la date, nombre de couverts et plan d'accès.",
      },
    ],
    technologiesDetails:
      "Conception frontend légère en HTML5 sémantique, TailwindCSS et Alpine.js avec l'assistance d'outils d'intelligence artificielle pour la réflexion éditoriale et la structuration des contenus, combinée à un travail de maquettage et de composition d'interfaces soigné.",
    contribution:
      "Définition du positionnement visuel, élaboration de l'arborescence, conception des écrans clés et prototypage de l'expérience utilisateur complète.",
    learnings:
      "Ce projet m'a permis d'approfondir la conception d'interfaces orientées restauration, où l'atmosphère visuelle et la lisibilité du menu sont déterminantes pour l'expérience du visiteur.",
    conclusion:
      "Âtre Steakhouse illustre comment le web peut retranscrire l'atmosphère d'un lieu physique. Ce site de démonstration montre qu'une interface chaleureuse et un parcours de réservation épuré suffisent à donner envie de pousser la porte d'un restaurant, même à travers un écran.",
    prevId: "elikia-sante",
    nextId: "renovo-couleur",
  },
  {
    id: "renovo-couleur",
    title: "Renovo Couleur",
    category: "Peinture & Rénovation",
    nature: "Site de démonstration",
    methodOrTech: "WordPress & Elementor",
    period: "Site de démonstration — 2024",
    role: "Direction visuelle & intégration WordPress",
    summary:
      "Un site vitrine professionnel et rassurant pour une entreprise de peinture, rénovation et décoration intérieure.",
    technologies: ["WordPress", "Elementor Pro", "Direction visuelle", "Widgets sur mesure"],
    imageSrc: "/images/renovo-couleur.webp",
    fullImageSrc: "/images/renovo-couleur-full.webp",
    hasScrollAnimation: true,
    scrollDuration: "16s",
    displayUrl: "ronovo-couleur.local",
    imageAlt: "Aperçu de l'interface conçue pour le projet Renovo Couleur",
    context:
      "Renovo Couleur est un projet conçu pour démontrer comment WordPress et Elementor peuvent servir à créer un site vitrine efficace pour une entreprise artisanale. L'enjeu était de concevoir une présentation claire et professionnelle qui inspire confiance aux particuliers et professionnels à la recherche de services de peinture et rénovation.",
    objectives: [
      "Inspirer confiance et professionnalisme grâce à une présentation soignée des réalisations.",
      "Présenter clairement les services proposés : peinture intérieure, extérieure, décoration et rénovation.",
      "Faciliter la prise de contact et la demande de devis en ligne.",
      "Offrir un site rapide et lisible sur mobile pour les artisans et leurs clients.",
    ],
    artDirection: {
      palette: ["#1E293B", "#475569", "#E2E8F0", "#F8FAFC", "#2563EB"],
      paletteDescription:
        "Palette sobre et professionnelle : bleu confiance, gris ardoise et blanc lumineux, évoquant la propreté et la rigueur du travail bien fait.",
      typography:
        "Typographie Playfair Display pour les titres et Inter/Roboto pour le corps, privilégiant la lisibilité et le sérieux professionnel.",
      ambiance:
        "Propreté, précision et transformation : des espaces avant/après qui parlent d'eux-mêmes.",
    },
    structure: [
      {
        title: "Accueil & Présentation",
        description:
          "Mise en avant de l'expertise avec badge avis Google (4,9/5 — 184 avis), chiffres clés (+250 chantiers) et services phares.",
      },
      {
        title: "Services (7 prestations)",
        description:
          "Nuances Ressource®, peinture intérieure, peinture extérieure, rénovation murs et enduits, finitions décoratives, espaces professionnels et conseil couleurs.",
      },
      {
        title: "Réalisations avant/après",
        description:
          "Galerie de 9 projets terminés (sur 38) avec visuels avant/après, superficies et durées d'intervention. Cas d'étude détaillé inclus.",
      },
      {
        title: "Devis & Contact",
        description:
          "Formulaire de demande de devis multistep en 3 étapes (profil, informations personnelles, détails du chantier avec pièces jointes). Widget de prise de rendez-vous téléphonique avec calendrier interactif.",
      },
    ],
    technologiesDetails:
      "Site réalisé sous WordPress avec Elementor Pro pour la mise en page et le Theme Builder (header, footer). Thème Hello Elementor comme base légère. LiteSpeed Cache pour les performances. Trois plugins métiers développés sur mesure : widget de prise de rendez-vous (calendrier + créneaux + envoi mail), formulaire de devis multistep (3 étapes, pièces jointes, honeypot, RGPD) et fil d'Ariane Elementor.",
    contribution:
      "Création intégrale du site : architecture des contenus, choix de la direction artistique avec identité vert sauge et typographies Playfair Display / Inter, intégration Elementor, développement des 3 plugins métiers, rédaction des textes et adaptation responsive.",
    learnings:
      "Confirmation qu'Elementor permet de produire des sites vitrines professionnels de qualité lorsqu'il est utilisé avec rigueur, en évitant la surcharge de widgets et en soignant chaque détail typographique. Apprentissage du développement de widgets Elementor personnalisés avec formulaires multistep et système de rendez-vous.",
    conclusion:
      "Renovo Couleur démontre la capacité de WordPress et Elementor à servir une entreprise artisanale avec un site professionnel complet. Ce site de démonstration intègre des formulaires multistep fonctionnels, un système de prise de rendez-vous et une galerie avant/après, prouvant qu'un site vitrine peut être à la fois beau et réellement utile pour générer des demandes de devis.",
    prevId: "atre-steakhouse",
    nextId: "boulevard-hotel",
  },
];

export function getProjectById(id: string): DetailedProject | undefined {
  return detailedProjects.find((p) => p.id === id);
}
