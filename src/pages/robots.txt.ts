import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = site ? site.origin : (process.env.PUBLIC_SITE_URL || '');

  const lines = [
    '# Robots.txt — Aziz Studio',
    'User-agent: *',
    'Allow: /',
  ];

  if (base) {
    lines.push('', '# Plan du site (sitemap)', `Sitemap: ${base}/sitemap.xml`);
  }

  return new Response(lines.join('\n') + '\n', {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
