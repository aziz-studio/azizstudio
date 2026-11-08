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
