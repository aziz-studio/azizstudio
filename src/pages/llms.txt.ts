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
