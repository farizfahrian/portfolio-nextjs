'use client';
import Image from 'next/image';
import type React from 'react';
import { cn } from '@/lib/utils';
import Marquee from './ui/marquee';

const featuredProjects = [
  {
    img: '/assets/images/activest.jpg',
    title: 'Active Festival',
    meta: 'Event platform • Full-stack',
    targetId: 'project-active-festival',
  },
  {
    img: '/assets/images/al mazaya.jpg',
    title: 'Al Mazaya',
    meta: 'School flow • UI design',
    targetId: 'project-al-mazaya',
  },
  {
    img: '/assets/images/davila.jpg',
    title: 'Davila',
    meta: 'Brand site • Front-end',
    targetId: 'project-davila',
  },
  {
    img: '/assets/images/graviton.jpg',
    title: 'Graviton',
    meta: 'Agency site • Engineering',
    targetId: 'project-graviton-softworks',
  },
  {
    img: '/assets/images/kaltimfolks.jpg',
    title: 'Kaltimfolks',
    meta: 'Media site • Next.js',
    targetId: 'project-kaltimfolks',
  },
  {
    img: '/assets/images/sirkel.jpg',
    title: 'Sirkel',
    meta: 'Landing page • UI',
    targetId: 'project-sirkel',
  },
];

const firstRow = featuredProjects.slice(0, featuredProjects.length);

const ReviewCard = ({
  img,
  title,
  meta,
  targetId,
  index,
  rotateDirection = index % 2 === 0 ? -1.4 : 1.4,
}: {
  img: string;
  title: string;
  meta: string;
  targetId: string;
  index: number;
  rotateDirection?: number;
}) => {
  return (
    <a
      aria-label={`Jump to ${title} project screenshot`}
      className={cn(
        'hero-project-card group relative block w-76 cursor-pointer overflow-hidden rounded-xl border border-zinc-200 bg-[oklch(0.995_0.004_75)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.995_0.004_75)] sm:w-84'
      )}
      href={`#${targetId}`}
      style={{ '--hero-project-index': index } as React.CSSProperties}
    >
      <div className="relative h-[175px] w-full overflow-hidden bg-[oklch(0.965_0.004_75)]">
        <Image
          alt=""
          className="hero-project-image absolute inset-0 h-full w-full object-cover"
          fill
          loading="eager"
          sizes="(max-width: 640px) 304px, 336px"
          src={img}
          style={
            {
              '--hero-project-rotate': `${rotateDirection}deg`,
              WebkitTouchCallout: 'none',
              WebkitUserSelect: 'none',
              userSelect: 'none',
              touchAction: 'manipulation',
            } as React.CSSProperties
          }
        />
      </div>
      <div className="relative flex min-h-21 items-center justify-between gap-4 px-4 py-3">
        <div className="hero-project-copy">
          <p className="font-semibold text-base text-zinc-950 leading-tight">
            {title}
          </p>
          <p className="mt-1 text-sm text-zinc-600">{meta}</p>
        </div>
        <span className="hero-project-arrow grid size-10 shrink-0 place-items-center rounded-full border border-zinc-200 bg-[oklch(0.995_0.004_75)] text-zinc-950">
          {/* Plain <img> for SVG icon – no optimization needed, avoids aspect-ratio warning */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            aria-hidden="true"
            className="hero-project-arrow-icon"
            src="/assets/icons/arrow-up-right.svg"
            style={{ width: '17px', height: 'auto' }}
          />
        </span>
      </div>
    </a>
  );
};

export function MarqueeImage() {
  return (
    <div className="hero-project-strip relative mt-4 flex h-72 w-full flex-col items-center justify-center overflow-hidden rounded-xl sm:mt-8 sm:h-76">
      <Marquee className="[--duration:28s] [--gap:1.5rem]" pauseOnHover>
        {firstRow.map((review, index) => (
          <ReviewCard
            img={review.img}
            index={index}
            key={review.img}
            meta={review.meta}
            targetId={review.targetId}
            title={review.title}
          />
        ))}
      </Marquee>
    </div>
  );
}
