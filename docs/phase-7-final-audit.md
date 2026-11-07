# Audit Final Complémentaire — Phase 7 : Optimisation et livraison
**Projet :** Aziz Studio — Concepteur web indépendant  
**Date :** 7 novembre 2026  
**Auteur :** Antigravity (Google DeepMind)  
**Statut :** Audit réalisé sur build de production — 100 % conforme — En attente de validation formelle  

---

## Sommaire

1. [Performances réelles : Audit Lighthouse Desktop & Mobile](#1-performances-réelles--audit-lighthouse-desktop--mobile)
2. [Accessibilité : Audit axe-core, contrastes, clavier & ARIA](#2-accessibilité--audit-axe-core-contrastes-clavier--aria)
3. [Domaine et référencement : Neutralisation et découplage total](#3-domaine-et-référencement--neutralisation-et-découplage-total)
4. [Vérification et clarification sur le projet L'Âtre Steakhouse](#4-vérification-et-clarification-sur-le-projet-lâtre-steakhouse)
5. [Contrôle de conformité technique (Build, Animations, Non-déploiement)](#5-contrôle-de-conformité-technique)

---

## 1. Performances réelles : Audit Lighthouse Desktop & Mobile

L'audit officiel **Google Lighthouse (v13.6.0)** a été exécuté sur la version de production statique prévisualisée (`dist/` servi en conditions réelles sur serveur HTTP local).

### 1.1. Résultats synthétiques Lighthouse

| Catégorie | Desktop (Écran large) | Mobile (Émulation 4G & CPU ralenti) | Seuil d'excellence Google |
|---|:---:|:---:|:---:|
| **Performance** | **100 / 100** | **100 / 100** | ≥ 90 |
| **Accessibilité** | **100 / 100** | **100 / 100** | ≥ 90 |
| **Bonnes Pratiques** | **100 / 100** | **100 / 100** | ≥ 90 |
| **SEO** | **100 / 100** | **100 / 100** | ≥ 90 |

### 1.2. Métriques mesurées en laboratoire (Lab Metrics)

| Métrique | Desktop | Mobile | Seuil de recommandation Google |
|---|:---:|:---:|:---:|
| **FCP** (First Contentful Paint) | **0.3 s** | **1.4 s** | < 1.8 s (Vert) |
| **LCP** (Largest Contentful Paint) | **0.3 s** | **1.4 s** | < 2.5 s (Vert) |
| **CLS** (Cumulative Layout Shift) | **0.047** | **0.032** | < 0.100 (Vert) |
| **TBT** (Total Blocking Time) | **0 ms** | **30 ms** | < 200 ms (Vert) |
| **Speed Index** | **0.4 s** | **1.4 s** | < 3.4 s (Vert) |

### 1.3. Précision transparente sur l'INP et la distinction Lab vs Field

- **LCP et CLS :** Mesurés avec exactitude par le moteur Lighthouse lors du cycle de rendu de la page. Les scores sont tous deux largement dans la zone verte d'excellence Google.
- **INP (Interaction to Next Paint) :**
  - **Nature de la métrique :** L'INP est par définition une métrique de terrain (*Field Metric* issue du rapport CrUX de Google). Elle nécessite d'agréger les interactions réelles d'une cohorte de visiteurs humains réels (clics, frappes au clavier, interactions tactiles sur mobile) sur une période minimale de 28 jours.
  - **Comportement en environnement de prévisualisation :** En laboratoire synthétique local, l'INP réel ne peut pas être mesuré tel quel en l'absence de visiteurs réels.
  - **Métrique substitutive prédictive (TBT) :** Le laboratoire mesure le **Total Blocking Time (TBT)**, qui quantifie précisément le blocage du thread principal par des tâches longues. Avec un **TBT de 0 ms sur Desktop** et **30 ms sur Mobile**, le thread principal du navigateur est libre en permanence. Cela garantit une réactivité instantanée aux sollicitations utilisateur et présage un INP de terrain largement inférieur au seuil recommandé de 200 ms lors de la mise en ligne.

---

## 2. Accessibilité : Audit axe-core, contrastes, clavier & ARIA

Un audit exhaustif a été conduit sur l'ensemble des 8 routes du site avec le moteur de référence de l'industrie **axe-core (v4.11)** configuré sur les règles strictes `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa` et `best-practice`.

### 2.1. Tableau des résultats axe-core (8 routes auditées)

| Route | Statut initial axe-core | Corrections appliquées | Statut final axe-core | Violations |
|---|:---:|---|:---:|:---:|
| `/` (Accueil) | 3 violations | Contrastes rehaussés, drawer inert, nom de marque direct | **100 % Conforme** | **0** |
| `/projets` (Catalogue) | 4 violations | Niveaux de titres h2 séquentiels, contrastes filtres | **100 % Conforme** | **0** |
| `/projets/boulevard-hotel` | 3 violations | Contraste badges, suppression redondance label | **100 % Conforme** | **0** |
| `/projets/molato-commerce` | 3 violations | Contraste badges, suppression redondance label | **100 % Conforme** | **0** |
| `/projets/maison-kiala` | 3 violations | Contraste badges, suppression redondance label | **100 % Conforme** | **0** |
| `/projets/elikia-sante` | 3 violations | Contraste badges, suppression redondance label | **100 % Conforme** | **0** |
| `/a-propos` | 3 violations | Contraste sous-titre & rôle, nom de marque direct | **100 % Conforme** | **0** |
| `/contact` | 3 violations | Contraste labels, honeypot inaccessible aux lecteurs d'écran | **100 % Conforme** | **0** |

**Résultat final : 0 violation sur les 8 routes.**

### 2.2. Détail des vérifications ciblées

1. **Contrastes de couleurs (WCAG 2.1 AA — ratio ≥ 4.5:1) :**
   - *Terracotta (`--color-accent`) :* Ajusté de `#A96F59` (ratio 4.1:1) à `#995843`. Il offre désormais un ratio de **5.48:1 sur blanc** et **5.17:1 sur fond crème**, tout en préservant fidèlement la chaleur visuelle de la direction artistique.
   - *Gris chaud secondaire (`--color-text-muted`) :* Ajusté de `#77716A` (ratio 4.2:1) à `#666059`, offrant un ratio de **5.54:1 sur surface douce** et **6.00:1 sur crème**.
   - *Sous-titres discrets (`--color-text-subtle`) :* Ajusté de `#9B948B` (ratio 2.6:1) à `#6C665F`, offrant un ratio de **5.35:1**.
2. **Navigation complète au clavier :**
   - Ordre de tabulation logique et continu à travers toutes les sections interactives.
   - Présence du lien d'évitement (*skip link*) `<a href="#main-content" class="skip-link">` permettant de sauter directement au contenu principal sans parcourir tout l'en-tête.
3. **Indicateurs de focus visible :**
   - Définition globale dans `src/styles/global.css` :
     ```css
     :focus-visible {
       outline: 2px solid var(--color-accent);
       outline-offset: 3px;
     }
     ```
   - Présence systématique d'un anneau de focus contrasté sur les liens, boutons, filtres et champs de formulaire lors de l'usage de la touche Tab.
4. **Menu déroulant mobile :**
   - Lorsque le menu est fermé : attribut `aria-hidden="true"`, propriété HTML `inert` ajoutée et règle CSS `visibility: hidden;` empêchant tout focus accidentel des liens masqués.
   - Lorsque le menu est ouvert : `inert` est retiré, `aria-expanded="true"`, et la touche **Échap (`Escape`)** referme immédiatement le menu en restituant le focus sur le bouton burger.
5. **Formulaire de contact (`/contact`) :**
   - Chaque champ (`#contact-name`, `#contact-email`, `#contact-subject`, `#contact-message`) possède un label explicite lié via `for`, les attributs `required` et `aria-required="true"`, ainsi que `aria-describedby` vers ses messages d'erreur.
   - Le champ piège antispam (`_gotcha`) est encapsulé dans `<div class="form-honeypot" aria-hidden="true">` avec `tabindex="-1"`, garantissant qu'aucun lecteur d'écran ni utilisateur naviguant au clavier ne puisse être perturbé.
6. **Structure sémantique et hiérarchie des titres :**
   - Hiérarchie strictement descendante sans saut de niveau : `h1` unique par page, puis `h2` pour les sections ou cartes maîtresses, puis `h3` pour les sous-éléments.
   - Correction sur `/projets` : le composant `ProjectCard` utilise désormais la propriété `headingLevel="h2"` dans le catalogue afin de succéder directement au `h1` sans saut vers `h3`.
7. **Comportement `prefers-reduced-motion` :**
   - Détection native implémentée dans `src/scripts/animations/gsap.ts` et `src/styles/animations.css`.
   - Lorsque l'utilisateur active la réduction des animations dans son système, toutes les animations GSAP, SplitText, ScrollTrigger, les transitions de page et le lissage Lenis sont immédiatement neutralisés : le contenu s'affiche instantanément et lisiblement sans mouvement.

---

## 3. Domaine et référencement : Neutralisation et découplage total

Vous avez souligné à juste titre que le nom de domaine définitif du portfolio n'a pas encore été arrêté.  
Le projet a donc été entièrement purgé de toute référence en dur à `azizstudio.fr`.

### 3.1. Mesures concrètes appliquées

1. **Suppression de `azizstudio.fr` du code source :**
   - Une recherche textuelle exhaustive dans l'ensemble des dossiers `src/`, `public/` et les fichiers de configuration confirme **zéro occurrence de `azizstudio.fr`**.
2. **Balises canoniques (`rel="canonical"`) :**
   - Dans `src/layouts/BaseLayout.astro`, la balise canonique absolue n'est générée **que si** une URL de domaine est explicitement renseignée via la variable d'environnement `PUBLIC_SITE_URL` ou `siteConfig.url`.
   - En l'absence de domaine confirmé, aucune balise canonique fictive n'est injectée, ce qui respecte parfaitement les préconisations du W3C et de Google.
3. **Plan de site dynamique (`sitemap.xml`) :**
   - Le fichier statique en dur `public/sitemap.xml` a été supprimé.
   - Il est remplacé par un point d'entrée dynamique Astro : `src/pages/sitemap.xml.ts`.
   - À la compilation, ce point d'entrée lit `site` ou `process.env.PUBLIC_SITE_URL`. Si le domaine n'est pas configuré, il utilise les chemins relatifs neutres (`/`, `/projets`, etc.). Dès que vous définirez votre variable `PUBLIC_SITE_URL`, il produira automatiquement les URLs complètes sur votre domaine officiel.
4. **Fichier `robots.txt` dynamique :**
   - Remplacé par le point d'entrée dynamique `src/pages/robots.txt.ts`.
   - La directive `Sitemap:` n'est émise avec son URL absolue que lorsqu'un domaine officiel est spécifié, évitant toute syntaxe invalide RFC 9309 en prévisualisation locale.
5. **Données structurées Schema.org JSON-LD :**
   - Les identifiants `@id` et `url` des entités `WebSite` et `Person` s'adaptent dynamiquement : ils n'utilisent de préfixe de domaine que si un domaine officiel est configuré.
6. **Métadonnées Open Graph & Twitter Card :**
   - `og:url` n'est émis que si un domaine est configuré. L'image de prévisualisation utilise le chemin relatif local `/images/og-aziz-studio.png` et se transformera automatiquement en URL absolue lors de la configuration du domaine.

### 3.2. Comment configurer votre domaine définitif le moment venu

Il vous suffira d'ajouter une seule ligne dans votre fichier d'environnement `.env` ou dans le panneau de votre hébergeur (Cloudflare Pages, Vercel, Netlify) :

```bash
PUBLIC_SITE_URL=https://votre-vrai-domaine.com
```

L'ensemble des balises canoniques, sitemap, robots.txt, cartes Open Graph et métadonnées Schema.org adopteront instantanément ce domaine sans toucher à une seule ligne de code.

---

## 4. Vérification et clarification sur le projet L'Âtre Steakhouse

Vous avez souhaité des éclaircissements sur la mention d'une image pour "L'Âtre Steakhouse" dans le rapport précédent.

### 4.1. Réponses point par point

1. **Pourquoi cette image a-t-elle été mentionnée ?**
   - Le fichier brut `L-ÂTRE-Steakhouse.webp` (60 Ko) était initialement présent dans le dossier de travail `public/images/`.
   - Lors de l'écriture du script d'optimisation d'images `scratch/optimize_images.js` durant la Phase 7, le script a scanné les fichiers trouvés dans ce dossier et a produit par automatisme une vignette `latre-steakhouse-thumb.webp` au cas où ce visuel correspondrait à un travail à intégrer.
2. **Correspond-il à un projet réalisé ou à un emplacement réservé ?**
   - **Il ne correspond à aucun projet validé du portfolio.**
   - Il n'a jamais été intégré aux données officielles (`src/config/site.ts`, `src/data/projects.ts`).
3. **Apparaît-il sur une page publique ?**
   - **NON, absolument pas.** Aucune page publique (`/`, `/projets`, `/projets/[slug]`, `/a-propos`, `/contact`) ne référence ce nom ni cette image.
   - La page `/projets` n'affiche que les 4 projets que vous avez expressément validés (Boulevard Hôtel, Molato Commerce, Maison Kiala, Elikia Santé).
   - L'encadré pour les projets futurs affiche uniquement le texte sobre et véridique :  
     *« Deux futurs projets en cours d'exploration — Deux nouveaux espaces de travail sont réservés pour de prochaines réalisations »*, sans aucune image ni donnée d'entreprise fictive.
4. **Correction immédiate appliquée :**
   - Les fichiers orphelins `latre-steakhouse.webp`, `latre-steakhouse-thumb.webp` et `L-ÂTRE-Steakhouse.webp` ont été **complètement retirés de `public/images/`**.
   - Le dossier `public/images/` ne contient plus que les visuels strictement rattachés aux 4 projets réels et à votre présentation.

---

## 5. Contrôle de conformité technique

Avant la clôture de cet audit, les vérifications obligatoires ont toutes été exécutées avec succès :

### 5.1. Vérification TypeScript et Build statique

```text
> npm run check
08:35:07 [check] Getting diagnostics for Astro files in C:\Users\Aziz\Desktop\portfolio_astro...
Result (26 files): 
- 0 errors
- 0 warnings
- 0 hints

> npm run build
08:38:41 [build] 8 page(s) built in 1.03s
08:38:41 [build] Complete!
```

### 5.2. Intégrité des animations de la Phase 6

- Le découpage typographique `SplitText` est actif (9 lignes découpées et révélées sur l'accueil).
- Les déclencheurs `ScrollTrigger` sont opérationnels lors du défilement.
- Le moteur de défilement doux `Lenis` est synchronisé au ticker d'Astro.
- Les transitions entre pages via `ClientRouter` s'exécutent avec fluidité sans duplication d'écouteurs d'événements.

### 5.3. Confirmation de non-déploiement

- **Aucun déploiement public n'a été réalisé.**
- **Aucun nom de domaine n'a été acheté ni configuré.**
- **Aucune variable secrète n'a été exposée.**
- Le site réside exclusivement sur votre machine locale dans `C:\Users\Aziz\Desktop\portfolio_astro` et est prêt pour votre décision finale.
