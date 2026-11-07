import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // URL de production : configurable via la variable d'environnement PUBLIC_SITE_URL.
  // Aucun domaine public n'est imposé par défaut tant que le domaine officiel n'a pas été confirmé.
  site: process.env.PUBLIC_SITE_URL || undefined,
  compressHTML: true,
  devToolbar: { enabled: false },
});
