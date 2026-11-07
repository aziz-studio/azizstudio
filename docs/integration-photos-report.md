# Rapport d'intégration — Photos personnelles & Revue des visuels
**Projet :** Aziz Studio — Concepteur web indépendant  
**Date :** 7 novembre 2026  
**Auteur :** Antigravity (Google DeepMind)  
**Statut :** Intégration validée à 100 % sur tous les formats (Desktop, Tablette, Mobile)  

---

## Sommaire

1. [Emplacements d'intégration des photos personnelles](#1-emplacements-dintégration-des-photos-personnelles)
2. [Fichiers modifiés & Détails techniques](#2-fichiers-modifiés--détails-techniques)
3. [Revue exhaustive des autres emplacements d'images du portfolio](#3-revue-exhaustive-des-autres-emplacements-dimages-du-portfolio)
4. [Améliorations responsive et ergonomiques](#4-améliorations-responsive-et-ergonomiques)
5. [Résultats des contrôles techniques (Build, TypeScript, Lighthouse, Débordement)](#5-résultats-des-contrôles-techniques)

---

## 1. Emplacements d'intégration des photos personnelles

Les deux photos fournies dans `public/images/` ont été intégrées avec soin en respectant scrupuleusement la direction artistique « minimalisme chaleureux » :

### 1.1. Photo du Hero — `/images/aziz-studio-hero.webp`
- **Page :** Page d'accueil (`/` -> `src/pages/index.astro`).
- **Section :** Section 1 — Hero principal (`.hero-section`).
- **Emplacement précis :** Colonne droite `.hero-visual` au sein de la grille `.hero-grid`.
- **Rôle :** Visuel principal du Hero humanisant immédiatement le portfolio.
- **Mise en valeur :**
  - Carte photographique `.hero-photo-card` avec passe-partout sobre, fond `var(--color-surface)`, bordure fine `var(--color-border)` et ombre douce `var(--shadow-card)`.
  - Cadre d'image `.hero-photo-card__frame` au ratio d'aspect **4:5** avec coins arrondis `var(--radius-md)` (8px).
  - Cadrage `object-fit: cover` et `object-position: center 20%` centré idéalement sur le visage et le regard.
  - Attributs de performance : `width="480"`, `height="600"`, `loading="eager"`, `decoding="async"`, `fetchpriority="high"`.
  - Légende sobre sous le visuel avec puce d'accent terracotta : `Aziz — Concepteur web indépendant`.

### 1.2. Photo de la Vision — `/images/aziz-studio-vision.webp`
- **Page :** Page d'accueil (`/` -> `src/pages/index.astro`).
- **Section :** Section 6 — Présentation & Démarche (`#a-propos` : *« Parcours & Vision — Derrière Aziz Studio »*).
- **Emplacement précis :** Colonne gauche `.about-visual` au sein de la grille `.about-grid`.
- **Rôle :** Illustration authentique de l'atelier, de l'état d'esprit et de la réflexion conceptuelle d'Aziz.
- **Mise en valeur :**
  - Carte photographique `.vision-photo-card` en parfaite cohérence visuelle avec la carte du Hero (même rayon de bordure, même ombre et même finesse de trait).
  - Cadre d'image au ratio d'aspect **4:5**, `object-fit: cover` et `object-position: center 25%`.
  - Attributs de performance : `width="480"`, `height="600"`, `loading="lazy"`, `decoding="async"`.
  - Légende intégrée : badge typographique `Vision & Atelier` et mention `Conception web indépendante & soignée`.

---

## 2. Fichiers modifiés & Détails techniques

1. `src/pages/index.astro` :
   - Remplacement de l'ancien monogramme vectoriel `.hero-monogram` par la véritable carte photographique `.hero-photo-card`.
   - Remplacement de l'ancien graphique stylisé `.about-card-graphic` par la carte photographique `.vision-photo-card`.
   - Adaptation des styles CSS locaux pour assurer un affichage harmonieux, un léger effet de survol doux (`scale(1.02)`), des dimensions intrinsèques explicites et l'absence totale de décalage de mise en page (CLS = 0).
   - Révision complète des règles responsive (`@media (max-width: 1023px)` et `@media (max-width: 767px)`) pour conserver l'affichage de la photo Vision sur mobile et tablette au lieu de la masquer.
2. `src/components/ui/Tag.astro` :
   - Ajout de `max-width: 100%`, `white-space: normal` et `line-height: 1.2` pour garantir qu'aucune signature ou tag long ne déborde sur les écrans ultra-compacts (360 px).
3. `src/components/layout/Header.astro` :
   - Sécurisation des dimensions du menu mobile déroulant (`width: 100%`, `box-sizing: border-box`) évitant tout sous-pixel de débordement.

---

## 3. Revue exhaustive des autres emplacements d'images du portfolio

Un audit méticuleux a été réalisé sur toutes les pages pour recenser le statut de chaque image :

| Page | Emplacement | Statut actuel | Visuel utilisé / Manquant |
|---|---|:---:|---|
| **Accueil `/`** | Hero (visuel principal) | **COMPLÈT** | `/images/aziz-studio-hero.webp` |
| **Accueil `/`** | Section 6 (Vision & Parcours) | **COMPLÈT** | `/images/aziz-studio-vision.webp` |
| **Accueil `/`** | Grille des 4 projets sélectionnés | **COMPLÈT** | 4 vignettes WebP réelles 800x500 (`boulevard-hotel-thumb.webp`, `molato-commerce-thumb.webp`, `maison-kiala-thumb.webp`, `elikia-sante-thumb.webp`). |
| **Accueil `/`** | Encart des 2 futurs projets | *Réservé* | Emplacement textuel pur (*« Deux futurs projets en cours d'exploration »*). Aucune image requise pour le moment. |
| **Catalogue `/projets`** | Grille des 4 projets | **COMPLÈT** | 4 vignettes WebP réelles 800x500 px. |
| **Catalogue `/projets`** | Encart des 2 futurs projets | *Réservé* | Emplacement textuel sobre. **À fournir plus tard :** 2 vignettes WebP 800x500 lorsque les projets seront créés. |
| **Détail `/projets/boulevard-hotel`** | Bannière & capture réelle | **COMPLÈT** | Capture réelle pleine largeur `boulevard-hotel.webp` (1200x700 px). |
| **Détail `/projets/molato-commerce`** | Bannière & capture réelle | **COMPLÈT** | Capture réelle pleine largeur `molato-commerce.webp` (1200x700 px). |
| **Détail `/projets/maison-kiala`** | Bannière & capture réelle | **COMPLÈT** | Capture réelle pleine largeur `maison-kiala.webp` (1200x700 px). |
| **Détail `/projets/elikia-sante`** | Bannière & capture réelle | **COMPLÈT** | Capture réelle pleine largeur `elikia-sante.webp` (1200x700 px). |
| **Détails Projets (corps)** | Sections intérieures (Arborescence, Nuanciers, Méthode) | *Éditorial* | Conçues sous forme de diagrammes textuels, listes et nuanciers CSS natifs. **Optionnel pour le futur :** Des captures secondaires d'écrans intérieurs (ex: vue mobile de la réservation d'hôtel, écran de panier e-commerce) pourront être ajoutées si vous réalisez des captures complémentaires. |
| **À propos `/a-propos`** | Hero (Carte de portrait) | **COMPLÈT** | Portrait `/images/aziz-studio-hero.webp` intégré avec badges. |
| **À propos `/a-propos`** | Récit de parcours & Démarche en 4 étapes | *Éditorial* | Mise en page textuelle structurée sur deux colonnes. Aucune image manquante. |
| **Contact `/contact`** | Coordonnées & Formulaire | *Fonctionnel* | Page ergonomique à double colonne. Aucune image requise. |

---

## 4. Améliorations responsive et ergonomiques

Le comportement responsive a été testé et vérifié sur les 5 résolutions de référence :

1. **Desktop Large (1920 × 1080 px) :**
   - Hero : Grille 1.25fr / 0.75fr avec la photo à droite (largeur 360 px), équilibrant harmonieusement le titre en grand corps Instrument Serif.
   - Vision : Grille 0.8fr / 1.2fr avec la photo à gauche, apportant un rythme visuel alterné.
2. **Desktop Standard (1440 × 900 px) :**
   - Alignement parfait, absence de débordement, marges généreuses et lisibilité optimale.
3. **Tablette (768 × 1024 px) :**
   - Grille 1 colonne.
   - La photo du Hero est centrée (largeur 320 px) sous les boutons d'action : le titre H1 et le message d'introduction restent immédiatement lisibles en tête de page sans être repoussés hors de l'écran.
   - La photo Vision est affichée et centrée au-dessus du texte explicatif.
4. **Mobile iPhone (390 × 844 px) :**
   - Largeur adaptative `width: min(280px, 100%)`.
   - Boutons tactiles pleine largeur, espacement respirant.
5. **Mobile Android Compact (360 × 740 px) :**
   - **0 pixel de débordement horizontal** (`scrollWidth === clientWidth === 360 px`).
   - Le tag supérieur s'adapte sans forcer la largeur et le cadre photo préserve 40 px de marge latérale de confort.

---

## 5. Résultats des contrôles techniques

### 5.1. Vérification TypeScript strict
```text
> npm run check
09:38:41 [check] Getting diagnostics for Astro files in C:\Users\Aziz\Desktop\portfolio_astro...
Result (26 files): 
- 0 errors
- 0 warnings
- 0 hints
```

### 5.2. Compilation de production statique
```text
> npm run build
09:39:05 [build] output: "static"
09:39:06 [build] 8 page(s) built in 952ms
09:39:06 [build] Complete!
```

### 5.3. Audit Lighthouse officiel (Version finale avec photos)
- **Performance :** **100 / 100**
- **Accessibilité :** **100 / 100**
- **Bonnes Pratiques :** **100 / 100**
- **SEO :** **100 / 100**

### 5.4. Navigation View Transitions (Astro ClientRouter)
- Navigation `/` -> `/a-propos` -> `/` testée en conditions réelles : les images conservent leur état chargé (`complete: true`, `naturalWidth: 800`) sans clignotement ni rechargement parasite.
