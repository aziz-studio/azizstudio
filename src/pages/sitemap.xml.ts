import type { APIRoute } from 'astro';

const routes = [
  { path: '', priority: '1.0', changefreq: 'monthly' },
  { path: '/projets', priority: '0.9', changefreq: 'monthly' },
  { path: '/projets/boulevard-hotel', priority: '0.8', changefreq: 'monthly' },
  { path: '/projets/molato-commerce', priority: '0.8', changefreq: 'monthly' },
  { path: '/projets/maison-kiala', priority: '0.8', changefreq: 'monthly' },
  { path: '/projets/elikia-sante', priority: '0.8', changefreq: 'monthly' },
  { path: '/projets/atre-steakhouse', priority: '0.8', changefreq: 'monthly' },
  { path: '/projets/renovo-couleur', priority: '0.8', changefreq: 'monthly' },
  { path: '/a-propos', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
];

export const GET: APIRoute = ({ site }) => {
  const base = site ? site.origin : (process.env.PUBLIC_SITE_URL || '');
  const currentDate = new Date().toISOString().split('T')[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${base}${r.path || '/'}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
