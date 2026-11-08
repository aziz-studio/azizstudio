import { registerGsapPlugins, gsap, ScrollTrigger, prefersReducedMotion } from './gsap';
import { initLenis, updateLenis, setupAnchorScrolling, scrollToHashIfPresent } from './lenis';
import { animateTitles, type TextAnimationContext } from './text';
import { initScrollAnimations, type ScrollAnimationContext } from './scroll';

// Enregistrement unique des plugins GSAP
registerGsapPlugins();

let currentGsapContext: gsap.Context | null = null;
let currentTextContext: TextAnimationContext | null = null;
let currentScrollContext: ScrollAnimationContext | null = null;
let resizeTimer: number | null = null;

/**
 * Initialisation complète des animations pour la page active
 */
export function setupPageAnimations() {
  if (typeof window === 'undefined') return;

  // Si l'utilisateur préfère réduire les mouvements, tout afficher immédiatement
  if (prefersReducedMotion()) {
    cleanupPageAnimations();
    return;
  }

  // Nettoyage préventif des animations de la page précédente
  cleanupPageAnimations();

  // Initialisation ou réactivation de Lenis
  initLenis();

  // Attendre le chargement complet des polices pour un calcul parfait des lignes SplitText
  const onFontsReady = () => {
    // Création d'un contexte GSAP isolé pour la page
    currentGsapContext = gsap.context(() => {
      // 1. Révélation progressive des titres (SplitText)
      currentTextContext = animateTitles(document.body);

      // 2. Animations au défilement (ScrollTrigger : sections, cartes, séparateurs)
      currentScrollContext = initScrollAnimations(document.body);
    });

    // Rafraîchissement des mesures après injection des animations
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      updateLenis();
      setupAnchorScrolling();

      // Gestion du hash dans l'URL après une View Transition
      // (ex: navigation depuis /a-propos vers /#approche)
      scrollToHashIfPresent();
    });
  };

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(onFontsReady).catch(onFontsReady);
  } else {
    onFontsReady();
  }
}

/**
 * Nettoyage complet des animations avant le remplacement du DOM par ClientRouter
 */
export function cleanupPageAnimations() {
  // Revert des contextes SplitText
  if (currentTextContext) {
    currentTextContext.revert();
    currentTextContext = null;
  }

  // Tuer les ScrollTriggers actifs de la page
  if (currentScrollContext) {
    currentScrollContext.revert();
    currentScrollContext = null;
  }

  // Réinitialisation du contexte GSAP global de la page
  if (currentGsapContext) {
    currentGsapContext.revert();
    currentGsapContext = null;
  }

  // Tuer tous les ScrollTriggers orphelins résiduels
  ScrollTrigger.getAll().forEach((trigger) => {
    try {
      trigger.kill();
    } catch (e) {}
  });
}

// --------------------------------------------------------------------------
// Gestion des cycles de vie Astro (ClientRouter / View Transitions)
// --------------------------------------------------------------------------

// Événement déclenché à chaque affichage de page (chargement initial ou navigation interne)
document.addEventListener('astro:page-load', () => {
  setupPageAnimations();
});

// Événement déclenché juste avant le remplacement du DOM de l'ancienne page
document.addEventListener('astro:before-swap', () => {
  cleanupPageAnimations();
});

// Gestion du redimensionnement de la fenêtre avec temporisation (debounce)
window.addEventListener('resize', () => {
  if (resizeTimer) window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(() => {
    if (!prefersReducedMotion()) {
      updateLenis();
      ScrollTrigger.refresh();
    }
  }, 250);
});
