import type { APIRoute } from 'astro';
import { detailedProjects } from '../data/projects';

// Pages fixes du site.
const staticRoutes = [
  '/',
  '/projets',
  '/a-propos',
  '/contact',
];

export const GET: APIRoute = ({ site }) => {
  // Utilise l'URL du site définie dans astro.config.mjs.
  const siteUrl =
    site?.origin ||
    process.env.PUBLIC_SITE_URL ||
    'https://azizstudio.pages.dev';

  const baseUrl = siteUrl.replace(/\/+$/, '');

  // Ajoute automatiquement toutes les fiches projets.
  const projectRoutes = detailedProjects.map(
    (project) => `/projets/${project.id}`
  );

  // Regroupe les pages fixes et les fiches projets.
  const allRoutes = [...staticRoutes, ...projectRoutes];

  // Génère les entrées XML.
  const urlEntries = allRoutes
    .map((path) => {
      const loc = path === '/' ? `${baseUrl}/` : `${baseUrl}${path}`;

      return `  <url>
    <loc>${loc}</loc>
  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
