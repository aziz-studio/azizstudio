import { gsap, ScrollTrigger, SplitText, prefersReducedMotion } from './gsap';

export interface TextAnimationContext {
  splits: InstanceType<typeof SplitText>[];
  triggers: ScrollTrigger[];
  revert: () => void;
}

/**
 * Système d'animation typographique SplitText
 * - H1 (Titres principaux) : Révélation progressive par lignes masquées au chargement (above the fold)
 * - H2 (Titres de sections) : Révélation progressive par lignes masquées déclenchée au défilement (ScrollTrigger)
 * - H3 (Sous-titres & cartes) : Animés naturellement dans la cascade de leur carte respective (pas de SplitText superflu)
 */
export function animateTitles(container: HTMLElement = document.body): TextAnimationContext {
  const splits: InstanceType<typeof SplitText>[] = [];
  const triggers: ScrollTrigger[] = [];

  const revertAll = () => {
    triggers.forEach((st) => {
      try {
        st.kill();
      } catch (e) {}
    });
    triggers.length = 0;

    splits.forEach((s) => {
      try {
        if (s.elements) {
          s.elements.forEach((el: any) => el?.removeAttribute?.('data-split-done'));
        }
        s.revert();
      } catch (e) {
        // Ignorer si l'élément a déjà été retiré du DOM
      }
    });
    splits.length = 0;
  };

  // Si l'utilisateur préfère des mouvements réduits, aucun découpage ni animation
  if (prefersReducedMotion()) {
    return { splits, triggers, revert: revertAll };
  }

  // --------------------------------------------------------------------------
  // 1. TITRES PRINCIPAUX H1 (Immersion au chargement de la page)
  // --------------------------------------------------------------------------
  const heroTitleSelectors = [
    '.hero-title',
    '.page-hero__title',
    '.project-hero__title',
    '.about-hero__title',
    '.contact-hero__title',
  ];

  const heroElements = container.querySelectorAll<HTMLElement>(heroTitleSelectors.join(', '));

  heroElements.forEach((el) => {
    if (!el || el.dataset.splitDone === 'true') return;
    el.dataset.splitDone = 'true';

    try {
      const split = new SplitText(el, {
        type: 'lines',
        linesClass: 'split-line-child',
        mask: 'lines',
      });

      splits.push(split);

      gsap.from(split.lines, {
        yPercent: 105,
        opacity: 0,
        duration: 0.85,
        stagger: 0.08,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
      });
    } catch (err) {
      console.warn('Erreur lors du découpage SplitText H1 :', err);
    }
  });

  // --------------------------------------------------------------------------
  // 2. TITRES DE SECTIONS H2 (Révélation par lignes masquées au défilement)
  // --------------------------------------------------------------------------
  const sectionTitleSelectors = [
    '.section-heading__title',
    '.presentation-title',
    '.about-title',
    '.cta-title',
    '.future-card__title',
    '.method-note__title',
    '.contact-cta__title',
    '.section-title',
    '.conclusion-box__title',
    '.form-card__title',
    '.explore-box__title',
    '.method-card__title',
    '.contribution-card__title',
    '.detail-cta__title',
  ];

  const sectionElements = container.querySelectorAll<HTMLElement>(sectionTitleSelectors.join(', '));

  sectionElements.forEach((el) => {
    if (!el || el.dataset.splitDone === 'true') return;
    el.dataset.splitDone = 'true';

    try {
      const split = new SplitText(el, {
        type: 'lines',
        linesClass: 'split-line-child',
        mask: 'lines',
      });

      splits.push(split);

      // Animation par ligne synchronisée avec ScrollTrigger
      const tween = gsap.from(split.lines, {
        yPercent: 105,
        opacity: 0,
        duration: 0.8,
        stagger: 0.07,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      });

      if (tween.scrollTrigger) {
        triggers.push(tween.scrollTrigger);
      }
    } catch (err) {
      console.warn('Erreur lors du découpage SplitText H2 :', err);
    }
  });

  return { splits, triggers, revert: revertAll };
}
