import Lenis from 'lenis';
import { gsap, ScrollTrigger, prefersReducedMotion } from './gsap';

let lenisInstance: Lenis | null = null;
let tickerCallback: ((time: number) => void) | null = null;

export function initLenis(): Lenis | null {
  if (typeof window === 'undefined') return null;

  // Si le visiteur préfère des mouvements réduits, utiliser le défilement natif
  if (prefersReducedMotion()) {
    destroyLenis();
    return null;
  }

  // Singleton : si déjà initialisé, rafraîchir les dimensions
  if (lenisInstance) {
    lenisInstance.resize();
    return lenisInstance;
  }

  try {
    lenisInstance = new Lenis({
      lerp: 0.1, // Défilement fluide, naturel et maîtrisé
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      smoothWheel: true,
    });

    // Synchronisation de Lenis avec ScrollTrigger
    lenisInstance.on('scroll', () => {
      ScrollTrigger.update();
    });

    // Centralisation de la boucle d'animation dans le ticker GSAP
    tickerCallback = (time: number) => {
      lenisInstance?.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // Prise en charge fluide des liens d'ancrage internes
    setupAnchorScrolling();

    return lenisInstance;
  } catch (err) {
    console.warn('Initialisation de Lenis ignorée :', err);
    return null;
  }
}

export function setupAnchorScrolling() {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
    // Éviter les écouteurs multiples
    if (anchor.dataset.lenisBound === 'true') return;
    anchor.dataset.lenisBound = 'true';

    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#' || !lenisInstance) return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        lenisInstance.scrollTo(target as HTMLElement, {
          offset: -70,
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      }
    });
  });
}

export function updateLenis() {
  if (lenisInstance) {
    lenisInstance.resize();
    setupAnchorScrolling();
  }
}

export function destroyLenis() {
  if (tickerCallback) {
    gsap.ticker.remove(tickerCallback);
    tickerCallback = null;
  }
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
}

export function getLenis(): Lenis | null {
  return lenisInstance;
}

/**
 * Après une View Transition, si l'URL contient un hash (#approche, #competences…),
 * Lenis scrolle vers la section correspondante.
 */
export function scrollToHashIfPresent() {
  const hash = window.location.hash;
  if (!hash || hash === '#') return;

  const target = document.querySelector(hash);
  if (!target) return;

  if (lenisInstance) {
    // Petit délai pour laisser le DOM se stabiliser après la transition
    setTimeout(() => {
      lenisInstance!.scrollTo(target as HTMLElement, {
        offset: -70,
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }, 100);
  } else {
    // Fallback sans Lenis (reduced-motion)
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
