import { gsap, ScrollTrigger, prefersReducedMotion } from './gsap';

export interface ScrollAnimationContext {
  triggers: ScrollTrigger[];
  revert: () => void;
}

export function initScrollAnimations(container: HTMLElement = document.body): ScrollAnimationContext {
  const triggers: ScrollTrigger[] = [];

  const revertAll = () => {
    triggers.forEach((st) => {
      try {
        st.kill();
      } catch (e) {}
    });
    triggers.length = 0;
  };

  if (prefersReducedMotion()) {
    return { triggers, revert: revertAll };
  }

  // --------------------------------------------------------------------------
  // 1. Accompagnement doux des surtitres, descriptions et textes éditoriaux
  //    (Les titres H2 sont pris en charge directement par SplitText)
  // --------------------------------------------------------------------------
  const accompanyingElements = container.querySelectorAll<HTMLElement>(
    '.section-heading__eyebrow, .section-heading__description, .presentation-label, .section-eyebrow, .section-text, .lead-paragraph'
  );

  accompanyingElements.forEach((el) => {
    const tween = gsap.from(el, {
      y: 14,
      opacity: 0,
      duration: 0.65,
      ease: 'power2.out',
      clearProps: 'transform,opacity',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        once: true,
      },
    });

    if (tween.scrollTrigger) {
      triggers.push(tween.scrollTrigger);
    }
  });

  // --------------------------------------------------------------------------
  // 2. Révélation douce des blocs éditoriaux autonomes
  // --------------------------------------------------------------------------
  const editorialBlocks = container.querySelectorAll<HTMLElement>(
    '.method-note-box, .contact-cta-card, .project-visual-card, .objectives-card, .reflection-block, .next-project-card, .bio-narrative, .explore-box'
  );

  editorialBlocks.forEach((block) => {
    const tween = gsap.from(block, {
      y: 20,
      opacity: 0,
      duration: 0.7,
      ease: 'power2.out',
      clearProps: 'transform,opacity',
      scrollTrigger: {
        trigger: block,
        start: 'top 88%',
        once: true,
      },
    });

    if (tween.scrollTrigger) {
      triggers.push(tween.scrollTrigger);
    }
  });

  // --------------------------------------------------------------------------
  // 3. Révélation en cascade (stagger) des grilles de cartes
  //    (Les sous-titres H3 des cartes sont animés naturellement avec leur carte)
  // --------------------------------------------------------------------------
  const gridSelectors = [
    '.projects-grid',
    '.projects-catalog-grid',
    '.approach-grid',
    '.approach-steps-grid',
    '.skills-grid',
    '.skills-categories-grid',
    '.art-details-grid',
    '.structure-timeline',
    '.values-grid',
    '.contact-grid',
    '.two-col-grid',
    '.presentation-grid',
  ];

  gridSelectors.forEach((selector) => {
    const grids = container.querySelectorAll<HTMLElement>(selector);

    grids.forEach((grid) => {
      // Sélection des enfants directs à animer
      const cards = grid.querySelectorAll<HTMLElement>(
        ':scope > .project-card, :scope > .project-item, :scope > .approach-card, :scope > .step-card, :scope > .skill-card, :scope > .skill-category-card, :scope > .art-detail-card, :scope > .structure-step, :scope > .value-card, :scope > .info-card, :scope > .presentation-card, :scope > div'
      );

      if (cards.length > 0) {
        const tween = gsap.from(cards, {
          y: 24,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: grid,
            start: 'top 85%',
            once: true,
          },
        });

        if (tween.scrollTrigger) {
          triggers.push(tween.scrollTrigger);
        }
      }
    });
  });

  // --------------------------------------------------------------------------
  // 4. Déploiement horizontal des séparateurs (Divider)
  // --------------------------------------------------------------------------
  const dividers = container.querySelectorAll<HTMLElement>('.divider');

  dividers.forEach((divider) => {
    const tween = gsap.from(divider, {
      scaleX: 0,
      transformOrigin: 'left center',
      duration: 0.8,
      ease: 'power2.out',
      clearProps: 'transform',
      scrollTrigger: {
        trigger: divider,
        start: 'top 92%',
        once: true,
      },
    });

    if (tween.scrollTrigger) {
      triggers.push(tween.scrollTrigger);
    }
  });

  return { triggers, revert: revertAll };
}
