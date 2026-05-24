'use client';
import Image from 'next/image';
import type React from 'react';
import { cn } from '@/lib/utils';
import Marquee from './ui/marquee';

const featuredProjects = [
  {
    img: '/assets/images/Activest.png',
    title: 'Active Festival',
    meta: 'Event platform • Full-stack',
  },
  {
    img: '/assets/images/Al-Mazaya.png',
    title: 'Al Mazaya',
    meta: 'School flow • UI design',
  },
  {
    img: '/assets/images/Davila.png',
    title: 'Davila',
    meta: 'Brand site • Front-end',
  },
  {
    img: '/assets/images/Graviton.png',
    title: 'Graviton',
    meta: 'Agency site • Engineering',
  },
  {
    img: '/assets/images/Kaltimfolks.png',
    title: 'Kaltimfolks',
    meta: 'Media site • Next.js',
  },
  {
    img: '/assets/images/Sirkel.png',
    title: 'Sirkel',
    meta: 'Landing page • UI',
  },
];

const firstRow = featuredProjects.slice(0, featuredProjects.length);

const ReviewCard = ({
  img,
  title,
  meta,
  index,
  rotateDirection = index % 2 === 0 ? -1.4 : 1.4,
}: {
  img: string;
  title: string;
  meta: string;
  index: number;
  rotateDirection?: number;
}) => {
  return (
    <figure
      className={cn(
        'hero-project-card group relative w-[19rem] cursor-pointer overflow-hidden rounded-xl border border-zinc-200 bg-[oklch(0.995_0.004_75)] sm:w-[21rem]'
      )}
      style={{ '--hero-project-index': index } as React.CSSProperties}
    >
      <div className="relative h-[175px] w-full overflow-hidden bg-[oklch(0.965_0.004_75)]">
        <Image
          alt=""
          className="hero-project-image absolute inset-0 h-full w-full object-cover"
          height={175}
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
          width={336}
        />
      </div>
      <figcaption className="relative flex min-h-[5.25rem] items-center justify-between gap-4 px-4 py-3">
        <div>
          <p className="font-semibold text-base text-zinc-950 leading-tight">
            {title}
          </p>
          <p className="mt-1 text-sm text-zinc-600">{meta}</p>
        </div>
        <span className="hero-project-arrow grid size-10 shrink-0 place-items-center rounded-full border border-zinc-200 bg-[oklch(0.995_0.004_75)] text-zinc-950">
          <Image
            alt=""
            aria-hidden="true"
            className="hero-project-arrow-icon h-auto w-[17px]"
            height={18}
            src="/assets/icons/arrow-up-right.svg"
            width={17}
          />
        </span>
      </figcaption>
    </figure>
  );
};

export function MarqueeImage() {
  return (
    <div className="hero-project-strip relative mt-4 flex h-[18rem] w-full flex-col items-center justify-center overflow-hidden rounded-xl sm:mt-8 sm:h-[19rem]">
      <Marquee className="[--duration:28s] [--gap:1.5rem]" pauseOnHover>
        {firstRow.map((review, index) => (
          <ReviewCard
            img={review.img}
            index={index}
            key={review.img}
            meta={review.meta}
            title={review.title}
          />
        ))}
      </Marquee>
    </div>
  );
}
