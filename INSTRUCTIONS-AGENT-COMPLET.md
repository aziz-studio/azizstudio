# Instructions complètes pour l'agent — mise à jour du site Aziz Studio (Astro)

Ce document regroupe **toutes** les modifications à appliquer au projet existant, dans l'ordre, en une seule passe :
correctifs techniques (PageSpeed, SEO, 404), barre de chiffres clés, section Prestations et FAQ.

**Règles**
- Applique exactement ce qui est écrit ci-dessous, sans rien modifier d'autre (pas de refonte, pas de nouveaux paquets).
- Ne touche pas au `.env` ni aux clés.
- Les textes affichés sont en français ; garde-les tels quels.
- À la fin, lance `npm run build` puis `npx astro check` et exécute la liste de vérifications finale.

Fichiers concernés :

| Fichier | Action |
|---|---|
| `astro.config.mjs` | remplacer |
| `src/layouts/BaseLayout.astro` | 4 petites modifications |
| `src/components/layout/Footer.astro` | 1 modification |
| `src/pages/404.astro` | nouveau |
| `src/pages/llms.txt.ts` | nouveau |
| `src/components/ui/StatsBar.astro` | nouveau |
| `src/components/ui/Services.astro` | nouveau |
| `src/components/ui/Faq.astro` | nouveau |
| `src/config/site.ts` | ajouts (types + données) |
| `src/pages/index.astro` | 4 modifications |
| `src/pages/contact.astro` | 2 modifications |
| `public/images/` | supprimer 6 images |

---

## 1. `astro.config.mjs` — REMPLACER tout le fichier
```js
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // URL de production : configurable via la variable d'environnement PUBLIC_SITE_URL
  // (à remplacer par ton domaine personnalisé quand il existera).
  // Valeur par défaut : l'adresse Cloudflare Pages du projet, afin que le sitemap,
  // les balises canonical et l'image Open Graph soient toujours en URL absolue.
  site: process.env.PUBLIC_SITE_URL || 'https://azizstudio.pages.dev',
  compressHTML: true,
  // Le CSS du site est très léger (~10 Ko) : on l'intègre au HTML pour supprimer
  // les requêtes bloquant le rendu signalées par PageSpeed.
  build: { inlineStylesheets: 'always' },
  devToolbar: { enabled: false },
});
```

## 2. `src/layouts/BaseLayout.astro` — 4 modifications (option « noindex » pour la page 404)
a) Dans `interface Props`, ajouter `noindex?: boolean;` après `image?: string;`.

b) Dans la déstructuration de `Astro.props`, ajouter `noindex = false,` après la ligne `image = '/images/og-aziz-studio.png',`.

c) Remplacer la ligne :
```ts
const canonicalURL = siteOrigin ? new URL(Astro.url.pathname, siteOrigin).href : null;
```
par :
```ts
const canonicalURL = siteOrigin && !noindex ? new URL(Astro.url.pathname, siteOrigin).href : null;
```

d) Juste après la ligne `{canonicalURL && <link rel="canonical" href={canonicalURL} />}`, ajouter :
```astro
{noindex && <meta name="robots" content="noindex, follow" />}
```

## 3. `src/components/layout/Footer.astro` — 1 modification (le numéro apparaît en double)
Remplacer (une seule occurrence, dans le bloc « Coordonnées ») :
```astro
{siteConfig.phone && (
```
par :
```astro
{siteConfig.phone && siteConfig.phone !== siteConfig.whatsapp && (
```

## 4. `src/pages/404.astro` — NOUVEAU fichier
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Container from '../components/ui/Container.astro';
import Button from '../components/ui/Button.astro';
---

<BaseLayout
  title="Page introuvable — Aziz Studio"
  description="La page demandée n'existe pas ou a été déplacée."
  noindex
>
  <section class="not-found">
    <Container width="narrow">
      <p class="not-found__code">Erreur 404</p>
      <h1 class="not-found__title">Cette page est introuvable.</h1>
      <p class="not-found__text">
        Le lien est peut-être incorrect, ou la page a été déplacée. Vous pouvez revenir à l'accueil,
        parcourir les projets ou me contacter directement.
      </p>
      <div class="not-found__actions">
        <Button variant="primary" href="/" size="lg" showArrow>Retour à l'accueil</Button>
        <Button variant="secondary" href="/projets" size="lg">Voir les projets</Button>
        <Button variant="text" href="/contact">Me contacter</Button>
      </div>
    </Container>
  </section>
</BaseLayout>

<style>
  .not-found {
    padding-block: var(--section-space);
    min-height: 60vh;
    display: flex;
    align-items: center;
  }

  .not-found__code {
    margin: 0 0 var(--space-3, 1rem);
    font-size: 0.8125rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-accent);
  }

  .not-found__title {
    margin: 0 0 var(--space-4, 1.5rem);
    font-family: var(--font-display);
    font-weight: 400;
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    line-height: 1.05;
  }

  .not-found__text {
    max-width: var(--text-max-width, 68ch);
    margin: 0 0 var(--space-5, 2rem);
    color: var(--color-text-muted);
  }

  .not-found__actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-3, 1rem);
  }
</style>
```

## 5. `src/pages/llms.txt.ts` — NOUVEAU fichier
```ts
import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site';
import { detailedProjects } from '../data/projects';

// Fichier /llms.txt : présentation du site au format Markdown pour les assistants IA.
export const GET: APIRoute = ({ site }) => {
  const base = site ? site.origin : '';

  const lines = [
    `# ${siteConfig.name}`,
    '',
    `> ${siteConfig.description}`,
    '',
    '## Pages principales',
    '',
    `- [Accueil](${base}/) : présentation, démarche et sélection de projets`,
    `- [Projets](${base}/projets) : catalogue des réalisations`,
    `- [À propos](${base}/a-propos) : parcours et méthode de travail`,
    `- [Contact](${base}/contact) : formulaire, e-mail et WhatsApp`,
    '',
    '## Projets',
    '',
    ...detailedProjects.map((p) => `- [${p.title}](${base}/projets/${p.id})`),
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
```

## 6. `src/components/ui/StatsBar.astro` — NOUVEAU fichier (chiffres clés)
```astro
---
import Container from './Container.astro';
import { siteConfig, type StatItem } from '../../config/site';

interface Props {
  stats?: StatItem[];
}

const { stats = siteConfig.stats } = Astro.props;
---

{
  stats.length > 0 && (
    <section class="stats-bar" aria-label="Chiffres clés">
      <Container>
        <ul class="stats-bar__list">
          {stats.map((stat) => (
            <li class="stats-bar__item">
              <strong class="stats-bar__value">{stat.value}</strong>
              <span class="stats-bar__label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

<style>
  .stats-bar {
    background-color: var(--color-surface-muted);
    border-block: var(--border-default);
    padding-block: clamp(2rem, 4vw, 3.5rem);
  }

  .stats-bar__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 14rem), 1fr));
    gap: var(--space-6);
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .stats-bar__item {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    padding-left: var(--space-5);
    border-left: 2px solid var(--color-accent);
  }

  .stats-bar__value {
    font-family: var(--font-display);
    font-weight: 400;
    font-size: clamp(2.5rem, 5vw, 3.75rem);
    line-height: 1;
    color: var(--color-text);
  }

  .stats-bar__label {
    font-size: var(--fs-small);
    line-height: 1.4;
    color: var(--color-text-muted);
    max-width: 24ch;
  }
</style>
```

## 7. `src/components/ui/Services.astro` — NOUVEAU fichier (prestations)
```astro
---
import Tag from './Tag.astro';
import { siteConfig, type ServiceItem } from '../../config/site';

interface Props {
  services?: ServiceItem[];
}

const { services = siteConfig.services } = Astro.props;
---

{
  services.length > 0 && (
    <ol class="services">
      {services.map((service) => (
        <li class="services__item">
          <span class="services__number" aria-hidden="true">
            {service.number}
          </span>
          <div class="services__content">
            <h3 class="services__title">{service.title}</h3>
            <p class="services__description">{service.description}</p>
            <ul class="services__tags" aria-label="Outils et domaines">
              {service.tags.map((tag) => (
                <li>
                  <Tag label={tag} size="sm" />
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  )
}

<style>
  .services {
    margin: 0;
    padding: 0;
    list-style: none;
    border-bottom: var(--border-default);
  }

  .services__item {
    display: grid;
    grid-template-columns: minmax(3rem, 6rem) 1fr;
    gap: var(--space-5);
    padding-block: var(--space-6);
    border-top: var(--border-default);
  }

  .services__number {
    font-family: var(--font-display);
    font-size: var(--fs-h3);
    line-height: 1;
    color: var(--color-accent);
  }

  .services__content {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    max-width: 52rem;
  }

  .services__title {
    margin: 0;
    font-family: var(--font-display);
    font-weight: 400;
    font-size: var(--fs-h3);
    line-height: 1.15;
    color: var(--color-text);
  }

  .services__description {
    margin: 0;
    max-width: var(--text-max-width);
    font-size: var(--fs-body);
    line-height: 1.65;
    color: var(--color-text-muted);
  }

  .services__tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
    margin: var(--space-1) 0 0;
    padding: 0;
    list-style: none;
  }

  @media (max-width: 640px) {
    .services__item {
      grid-template-columns: 1fr;
      gap: var(--space-3);
    }
  }
</style>
```

## 8. `src/components/ui/Faq.astro` — NOUVEAU fichier (FAQ, HTML natif sans JavaScript)
```astro
---
import { siteConfig, type FaqItem } from '../../config/site';

interface Props {
  items?: FaqItem[];
}

const { items = siteConfig.faq } = Astro.props;
---

{
  items.length > 0 && (
    <div class="faq">
      {items.map((item) => (
        <details class="faq__item">
          <summary class="faq__question">
            <span>{item.question}</span>
            <span class="faq__icon" aria-hidden="true" />
          </summary>
          <p class="faq__answer">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}

<style>
  .faq {
    border-bottom: var(--border-default);
  }

  .faq__item {
    border-top: var(--border-default);
  }

  .faq__question {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-5);
    padding-block: var(--space-5);
    cursor: pointer;
    list-style: none;
    font-family: var(--font-display);
    font-size: var(--fs-subheading);
    line-height: 1.3;
    color: var(--color-text);
  }

  .faq__question::-webkit-details-marker {
    display: none;
  }

  .faq__question:hover {
    color: var(--color-accent);
  }

  .faq__question:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 4px;
    border-radius: var(--radius-sm);
  }

  /* Indicateur + / − dessiné en CSS */
  .faq__icon {
    position: relative;
    flex: none;
    width: 14px;
    height: 14px;
  }

  .faq__icon::before,
  .faq__icon::after {
    content: '';
    position: absolute;
    inset: 50% 0 auto 0;
    height: 1.5px;
    background-color: currentColor;
    transition: transform 0.2s ease;
  }

  .faq__icon::after {
    transform: rotate(90deg);
  }

  .faq__item[open] .faq__icon::after {
    transform: rotate(0deg);
  }

  .faq__answer {
    margin: 0;
    padding: 0 var(--space-8) var(--space-5) 0;
    max-width: var(--text-max-width);
    font-size: var(--fs-body);
    line-height: 1.65;
    color: var(--color-text-muted);
  }

  @media (max-width: 640px) {
    .faq__answer {
      padding-right: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .faq__icon::before,
    .faq__icon::after {
      transition: none;
    }
  }
</style>
```

## 9. `src/config/site.ts` — 3 ajouts
a) Juste avant `export interface SkillGroup {`, ajouter ces trois types :
```ts
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
```

b) Dans `export interface SiteConfig`, après la ligne `skills: SkillGroup[];`, ajouter :
```ts
  stats: StatItem[];
  services: ServiceItem[];
  faq: FaqItem[];
```

c) À la fin de l'objet `siteConfig`, après le tableau `skills: [ ... ],` (et avant le `};` final), ajouter :
```ts
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
```

## 10. `src/pages/index.astro` — 4 modifications
a) Ajouter ces imports après celui de `ProjectCard` :
```astro
import StatsBar from '../components/ui/StatsBar.astro';
import Services from '../components/ui/Services.astro';
```

b) **Chiffres clés.** Juste après la fin de la section hero (`</section>` qui suit le bloc `hero-grid`), remplacer le premier bloc
```astro
  <Container>
    <Divider />
  </Container>
```
(celui qui précède « SECTION 2 — Présentation courte ») par :
```astro
  <!-- Chiffres clés (configurables dans src/config/site.ts) -->
  <StatsBar />
```
Les autres `<Divider />` de la page ne changent pas.

c) **Prestations.** Juste avant le commentaire `<!-- ===... SECTION 4 — Approche de conception ===... -->`, insérer :
```astro
  <!-- =========================================================================
       Prestations (contenu dans src/config/site.ts)
       ========================================================================= -->
  <section id="prestations" class="section section--services">
    <Container>
      <SectionHeading
        eyebrow="Prestations"
        title="Ce que je peux réaliser pour vous."
        description="Trois façons de travailler ensemble, selon votre besoin."
      />
      <Services />
      <div class="services-cta">
        <Button variant="secondary" href="/contact" size="md" showArrow>
          Parler de mon projet
        </Button>
      </div>
    </Container>
  </section>

  <Container>
    <Divider />
  </Container>

```

d) **Styles** (dans le bloc `<style>` de `index.astro`) :

d1) Juste avant la règle `.cta-channels {`, ajouter :
```css
  .services-cta {
    margin-top: var(--space-7);
  }

```
d2) Corriger le contraste du lien WhatsApp (PageSpeed Accessibilité 96 → 100). Remplacer :
```css
    color: #25d366;
    font-size: var(--fs-base);
    font-weight: 500;
    text-decoration: none;
    transition: opacity 0.2s ease;
  }

  .cta-whatsapp-link:hover {
    opacity: 0.8;
  }
```
par :
```css
    color: #167a3c; /* vert WhatsApp assombri : contraste 4.7:1 sur le fond crème (WCAG AA) */
    font-size: var(--fs-base);
    font-weight: 500;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .cta-whatsapp-link:hover {
    color: #0f6b35;
  }
```

## 11. `src/pages/contact.astro` — 2 modifications (FAQ)
a) Ajouter ces imports après celui de `SocialIcon` :
```astro
import SectionHeading from '../components/ui/SectionHeading.astro';
import Faq from '../components/ui/Faq.astro';
```
b) Juste avant le commentaire `<!-- Liens d'exploration complémentaires -->`, insérer :
```astro
  <!-- Questions fréquentes (contenu dans src/config/site.ts) -->
  <section id="faq" class="section section--faq">
    <Container width="narrow">
      <SectionHeading
        eyebrow="Questions fréquentes"
        title="Avant de me contacter."
        description="Quelques réponses pour préparer notre premier échange."
      />
      <Faq />
    </Container>
  </section>

  <Container>
    <Divider />
  </Container>

```

## 12. Supprimer les 6 images inutilisées de `public/images/`
- `BoulevardHôtel.webp`
- `Elikia-sante.webp`
- `MOLATO.webp`
- `image-parc-vision.webp`
- `img-hero-aziz-studio.webp`
- `maison_kiala.webp`

À **conserver** : `aziz-studio-hero.webp`, `aziz-studio-vision.webp`, `og-aziz-studio.png`, ainsi que les fichiers
`boulevard-hotel`, `molato-commerce`, `maison-kiala` et `elikia-sante` en `.webp` et `-thumb.webp`.

## 13. `.gitignore` — vérifier qu'il contient au minimum
```
node_modules/
dist/
.astro/
.env
```

---

## Vérifications finales (à exécuter et à rapporter)
1. `npm run build` → **9 pages** générées, plus `/robots.txt`, `/sitemap.xml` et `/llms.txt` ; `/404.html` présent dans `dist/`.
2. `npx astro check` → 0 erreur, 0 avertissement.
3. `dist/index.html` : les sections apparaissent dans l'ordre `top`, `projets`, `prestations`, `approche`, `competences`, `a-propos`, `contact` ;
   3 éléments `services__item` ; une barre `stats-bar` avec 3 chiffres ; aucune balise `<link rel="stylesheet">` (CSS intégré) ; une balise `canonical` en URL absolue.
4. `dist/contact/index.html` : 8 balises `<details>` (FAQ) et aucune nouvelle balise `<script>` liée à la FAQ.
5. `dist/sitemap.xml` : toutes les `<loc>` commencent par `https://azizstudio.pages.dev`.
6. `dist/404.html` contient `<meta name="robots" content="noindex, follow">`.
7. Le numéro de téléphone n'apparaît qu'une seule fois dans le pied de page.
8. Rapport final : liste des fichiers créés/modifiés et tout problème rencontré.

## Notes
- Le contenu éditable (chiffres, prestations, FAQ) se trouve uniquement dans `src/config/site.ts` (clés `stats`, `services`, `faq`).
- Aucune animation ni bibliothèque supplémentaire n'est ajoutée ; la FAQ fonctionne sans JavaScript.
