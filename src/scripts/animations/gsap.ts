import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

let isRegistered = false;

export function registerGsapPlugins() {
  if (typeof window === 'undefined') return;
  if (!isRegistered) {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    isRegistered = true;
  }
}

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export { gsap, ScrollTrigger, SplitText };
