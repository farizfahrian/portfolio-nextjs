'use client';

import { useEffect } from 'react';

const REVEAL_TARGET_SELECTOR =
  '.section-stage:not(.section-stage-hero), .journey-entry, .project-card, .compact-project-card';

export default function SectionReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_TARGET_SELECTOR)
    );

    const revealTarget = (target: HTMLElement) => {
      target.dataset.sectionRevealed = 'true';
    };

    root.dataset.sectionRevealReady = 'true';

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      for (const target of revealTargets) {
        revealTarget(target);
      }

      return () => {
        delete root.dataset.sectionRevealReady;
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }

          const target = entry.target as HTMLElement;
          revealTarget(target);
          observer.unobserve(target);
        }
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.01,
      }
    );

    for (const target of revealTargets) {
      observer.observe(target);
    }

    return () => {
      observer.disconnect();
      delete root.dataset.sectionRevealReady;
    };
  }, []);

  return null;
}
