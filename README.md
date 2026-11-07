# Aziz Studio — Portfolio Astro

Portfolio personnel pour **Aziz**, développé avec **Astro** et **TypeScript strict**, stylisé avec **CSS natif** et un véritable Design System fondé sur des design tokens.

---

## Statut du projet : Phase 1 — Fondations techniques

Ce projet a été initialisé selon le cahier des charges officiel.

### Choix techniques validés (Phase 1)
- **Astro** : Astro 7 (v7.4.7)
- **TypeScript** : Mode strict activé (`astro/tsconfigs/strict` + `strict: true` + `noUncheckedIndexedAccess: true`)
- **CSS** : CSS natif modulaire (Tokens et styles globaux - propositions initiales pour la Phase 2)
- **Typographie** : Auto-hébergée avec Fontsource (`Instrument Serif` pour les titres, `Geist Sans` pour le corps - proposition initiale)
- **Accessibilité** : Balisage sémantique, skip-link, gestion du focus visible, respect de `prefers-reduced-motion`
- **Architecture de répertoires** : Conforme aux standards Astro

---

## Structure des répertoires

```
portfolio_astro/
├── public/
│   └── favicon.svg         # Favicon SVG officiel
├── src/
│   ├── assets/             # Images et médias statiques
│   ├── components/         # Composants d'interface (Header, Footer)
│   ├── config/             # Données et configuration du site (site.ts)
│   ├── content/            # Réservé aux Content Collections (Phases ultérieures)
│   ├── layouts/            # Layout principal (BaseLayout.astro)
│   ├── pages/              # Pages du site (index.astro - page de test)
│   └── styles/             # Styles globaux (tokens.css, reset.css, global.css)
├── astro.config.mjs        # Configuration Astro
├── package.json            # Dépendances et scripts de build
├── tsconfig.json           # Configuration TypeScript stricte
└── BRIEF.md                # Cahier des charges du projet
```

---

## Commandes disponibles

```bash
# Installation des dépendances
npm install

# Démarrage du serveur de développement
npm run dev

# Vérification des types TypeScript
npm run check

# Build de production
npm run build

# Prévisualisation du build de production
npm run preview
```
