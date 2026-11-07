# Ajustement Visuel — Portraits Éditoriaux (Hero & À propos)
**Projet :** Aziz Studio — Concepteur web indépendant  
**Date :** 7 novembre 2026  
**Statut :** Validé — Agrandissement des portraits et suppression totale des cadres de profil  

---

## 1. Contexte et Objectifs

À la suite du premier examen de l'intégration photographique, les portraits personnels présentaient une apparence de « carte de profil » (fond blanc, bordures, ombre portée, encadrement passe-partout et tags intégrés) qui diminuait leur impact visuel et leur conférait une échelle trop modeste.

L'objectif de cet ajustement visuel :
- **Supprimer tous les cadres, bordures, fonds blancs et ombres** autour des portraits.
- **Agrandir sensiblement les portraits** pour leur donner une présence forte, naturelle et éditoriale.
- Viser **360 à 420 px de largeur sur grand écran pour le Hero** et **320 à 360 px pour la page À propos**, au ratio portrait **4:5**.
- Placer sobrement le nom « Aziz » et la fonction « Concepteur web indépendant » sous la photo sur la page À propos, sans encadrement de carte.
- **Conserver strictement intacte** la photo de la section Vision (Section 6 de l'accueil) dont la fonction et le traitement graphique sont distincts.
- Vérifier l'absence totale de débordement horizontal sur 1920, 1440, 768, 390 et 360 px.

---

## 2. Fichiers modifiés

### 2.1. `src/pages/index.astro`
- Remplacement du conteneur `.hero-photo-card` par `.hero-portrait`.
- Suppression du cadre blanc passe-partout, du fond blanc, de la bordure et de l'ombre portée.
- Affichage direct de la photographie `/images/aziz-studio-hero.webp` dans la colonne visuelle du Hero.
- Cadrage `object-position: center 20%` pour mettre naturellement en valeur le visage et le haut du corps.
- Largeur portée à **400 px** sur Desktop (1920 px et 1440 px), **340 px** sur tablette (768 px), **280 px** sur mobile (390 px et 360 px) avec ratio 4:5 (500 px de haut sur grand écran).
- La section 6 (« Parcours & Vision ») avec `.vision-photo-card` est restée **100 % inchangée**.

### 2.2. `src/pages/a-propos.astro`
- Remplacement de `.visual-portrait-card` par le conteneur éditorial direct `.about-portrait`.
- Suppression du fond blanc, de la bordure, de l'ombre et des tags de profil superflus.
- Intégration directe de la photo au ratio 4:5 avec largeur portée à **360 px** sur Desktop (1920 px et 1440 px), **320 px** sur tablette (768 px) et **280 px** sur mobile.
- Positionnement sobre de la légende typographique sous la photo : `Aziz — Concepteur web indépendant` (typographie Instrument Serif et Geist Sans).
- Suppression de l'import inutilisé de `Tag.astro`.

---

## 3. Mesures réelles et Vérifications sur les 5 résolutions

| Page & Emplacement | Résolution | Largeur rendue | Hauteur rendue | Ratio réel | Débordement horizontal |
|---|---|:---:|:---:|:---:|:---:|
| **Hero Accueil (`/`)** | Desktop 1920 px | **400 px** | 500 px | 4:5 (0.80) | **0 px** |
| **Hero Accueil (`/`)** | Desktop 1440 px | **400 px** | 500 px | 4:5 (0.80) | **0 px** |
| **Hero Accueil (`/`)** | Tablette 768 px | **340 px** | 425 px | 4:5 (0.80) | **0 px** |
| **Hero Accueil (`/`)** | Mobile 390 px | **280 px** | 350 px | 4:5 (0.80) | **0 px** |
| **Hero Accueil (`/`)** | Mobile 360 px | **280 px** | 350 px | 4:5 (0.80) | **0 px** |
| **À propos (`/a-propos`)** | Desktop 1920 px | **360 px** | 450 px | 4:5 (0.80) | **0 px** |
| **À propos (`/a-propos`)** | Desktop 1440 px | **360 px** | 450 px | 4:5 (0.80) | **0 px** |
| **À propos (`/a-propos`)** | Tablette 768 px | **320 px** | 400 px | 4:5 (0.80) | **0 px** |
| **À propos (`/a-propos`)** | Mobile 390 px | **280 px** | 350 px | 4:5 (0.80) | **0 px** |
| **À propos (`/a-propos`)** | Mobile 360 px | **280 px** | 350 px | 4:5 (0.80) | **0 px** |

---

## 4. Contrôles techniques

- **Diagnostic TypeScript strict (`npm run check`) :** 0 erreur, 0 avertissement, 0 hint sur 26 fichiers.
- **Compilation de production statique (`npm run build`) :** 8 pages générées avec succès en 845 ms.
- **Section Vision de la page d'accueil :** Conservée intacte avec sa carte photographique et son badge *Vision & Atelier*.
- **Déploiement public :** Aucun déploiement réalisé ; prévisualisation active en local uniquement.
