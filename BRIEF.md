Tu es un développeur front-end senior et un directeur artistique. Crée le site portfolio "Aziz Studio" avec Astro. Le site doit être moderne, minimaliste, soigné, et ne surtout pas ressembler à un site généré par une IA ou à un template.

## Contexte
Aziz est développeur web, expert WordPress, qui conçoit aussi des sites avec Astro et transforme des maquettes Figma en sites réels. Le site vise des clients qui cherchent des sites rapides, modernes et sur mesure, et doit pouvoir évoluer plus tard vers une agence. Site 100 % en français.

## Stack
- Astro (dernière version stable), TypeScript strict
- CSS : variables CSS + Tailwind CSS (ou CSS modules), au choix, mais avec un vrai design system (tokens de couleurs, typographie, espacements)
- Animations : Lenis (smooth scroll) + GSAP (ScrollTrigger, SplitText) uniquement. Pas d'autre librairie d'animation
- Content collections Astro pour le blog (Markdown/MDX) et les projets
- astro:assets pour les images (optimisation, formats modernes, lazy loading)
- Sitemap, RSS du blog, balises SEO et Open Graph, favicon
- Pas de framework JS lourd : îlots Astro seulement si nécessaire

## Pages
1. Accueil
2. Services
3. Projets (liste) + page détail d'un projet (étude de cas)
4. Blog (liste) + page d'article
5. À propos
6. Contact
7. 404

## Accueil : sections dans cet ordre
1. Hero : grand titre typographique, une phrase de positionnement ("Sites web rapides, modernes et sur mesure"), deux boutons (Voir les projets / Me contacter), portrait placeholder. Composition éditoriale, pas de dégradé décoratif
2. Bandeau de chiffres sobre (années d'expérience, projets livrés, etc.) avec des valeurs placeholder faciles à modifier
3. Services : Sites WordPress, Sites Astro, Intégration Figma, Refonte, Maintenance. Présentés en liste numérotée avec lignes de séparation, pas en cartes colorées
4. Projets sélectionnés : 4 projets (mélange de projets WordPress et de projets réalisés avec l'aide de l'IA), grandes vignettes avec effet de survol discret
5. Processus de travail en 4 étapes
6. Témoignages (placeholder, 2 à 3)
7. FAQ en accordéon accessible
8. Derniers articles du blog (3)
9. Appel à l'action final + pied de page

## Direction artistique
- Minimaliste, beaucoup d'espace, grille stricte, alignements nets
- Thème clair par défaut (fond blanc cassé chaud, texte presque noir), avec un mode sombre via prefers-color-scheme et un bouton de bascule
- UNE seule couleur d'accent (orange/corail chaud, inspiré de mes références), utilisée avec parcimonie : liens, boutons principaux, détails
- Typographie : une police d'affichage de caractère pour les titres (par ex. Instrument Serif ou Fraunces) + une sans-serif propre pour le texte (par ex. Geist ou Satoshi). Pas d'Inter, pas de Roboto. Auto-héberger les polices (Fontsource)
- Titres très grands, contraste d'échelle marqué, interlignage serré sur les titres
- Boutons simples, coins peu arrondis ou pilule, avec un petit effet de flèche au survol
- Images : placeholders neutres et cohérents (fichiers locaux dans /src/assets/placeholders), faciles à remplacer. Prévoir des ratios fixes pour éviter les décalages de mise en page
- Interdits : dégradés violet/bleu, effets de verre (glassmorphism) partout, ombres lourdes, emojis en guise d'icônes, grilles de 3 cartes identiques, textes génériques du type "Solutions innovantes pour votre croissance"
- Icônes : un seul jeu cohérent en SVG (Lucide ou Phosphor)

## Animations (discrètes)
- Lenis pour le défilement doux, intégré à ScrollTrigger
- Animation de "découpe de ligne" : les titres sont séparés ligne par ligne avec SplitText (type lines), chaque ligne dans un masque overflow hidden, et elle monte depuis le bas avec un léger décalage (stagger) à l'apparition
- Apparitions au scroll très subtiles (opacité + 16 à 24 px de translation), jamais spectaculaires
- Lignes de séparation qui se tracent de gauche à droite quand elles entrent à l'écran
- Transitions de page douces avec les View Transitions d'Astro
- Respect obligatoire de prefers-reduced-motion : désactiver Lenis et les animations dans ce cas
- Les animations ne doivent jamais bloquer le contenu : sans JS, tout reste visible et lisible

## Blog
- Content collection "blog" avec schéma Zod : titre, description, date, catégorie, image, brouillon
- Liste avec filtre par catégorie, page d'article avec temps de lecture et table des matières
- 3 articles d'exemple en français

## Projets
- Content collection "projets" avec : titre, client, année, type (WordPress / Astro / Refonte / Intégration Figma), technologies, résumé, image, lien
- Page détail structurée : contexte, défi, solution, résultat

## Contact
- Formulaire (nom, e-mail, type de projet, budget optionnel, message) avec validation côté client et serveur, anti-spam (honeypot), messages d'état accessibles. Envoi via un service configurable par variable d'environnement (Web3Forms ou Resend), avec un exemple de .env
- Boutons directs : e-mail (mailto) et WhatsApp (lien wa.me avec message pré-rempli)
- Numéro et e-mail placeholder centralisés dans un fichier de config

## Qualité
- Responsive mobile d'abord, testé de 360 px à 1920 px
- Accessibilité : HTML sémantique, navigation clavier, focus visibles, contrastes AA, attributs alt
- Performance : score Lighthouse 95+ partout, pas de layout shift, JS minimal
- Un fichier src/config/site.ts centralise : nom du site, baseline, e-mail, WhatsApp, réseaux sociaux, navigation
- Code propre, composants réutilisables, commentaires seulement quand utiles

## Livraison
Procède par étapes : 1) structure du projet, design tokens et layout, 2) composants et page d'accueil, 3) pages internes et collections, 4) animations, 5) SEO, accessibilité et performance. Explique brièvement chaque étape terminée et pose-moi une question seulement si un point est vraiment bloquant.
