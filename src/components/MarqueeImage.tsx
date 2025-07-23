'use client';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import Marquee from './ui/marquee';

const reviews = [
  {
    img: '/assets/images/Activest.png',
  },
  {
    img: '/assets/images/Al-Mazaya.png',
  },
  {
    img: '/assets/images/Davila.png',
  },
  {
    img: '/assets/images/Graviton.png',
  },
  {
    img: '/assets/images/Kaltimfolks.png',
  },
  {
    img: '/assets/images/Sirkel.png',
  },
];

const firstRow = reviews.slice(0, reviews.length);

const ReviewCard = ({
  img,
  rotateDirection = 15,
}: {
  img: string;
  rotateDirection?: number;
}) => {
  const preventContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    return false;
  };

  return (
    <figure
      className={cn(
        'relative w-64 cursor-pointer overflow-clip rounded-lg border',
        // light styles
        'border-gray-700/[.02] bg-gray-950/[.1]',
        // dark styles
        'dark:border-gray-50/[.05] dark:bg-gray-50/[.10]'
      )}
    >
      <motion.div className="relative h-[125px] w-full">
        <motion.img
          alt=""
          className="absolute inset-0 h-auto w-full rounded-xl object-cover px-4 pt-4"
          height="125"
          initial={{ rotate: rotateDirection }}
          onContextMenu={preventContextMenu}
          src={img}
          style={{
            WebkitTouchCallout: 'none',
            WebkitUserSelect: 'none',
            userSelect: 'none',
            touchAction: 'manipulation',
          }}
          whileHover={{
            padding: 0,
            borderRadius: 0,
            rotate: 0, // Reset to 0 on hover
            transition: {
              duration: 0.3,
              ease: [0.33, 1.3, 0.68, 1],
            },
          }} // Use the prop here
          whileTap={{
            rotate: 0,
            transition: {
              duration: 0.3,
              ease: [0.33, 1.3, 0.68, 1],
            },
          }}
          width="240"
        />
      </motion.div>
    </figure>
  );
};

export function MarqueeImage() {
  return (
    <div className="relative mt-6 flex h-[150px] w-full flex-col items-center justify-center overflow-hidden rounded-xl sm:mt-12">
      <Marquee className="[--duration:20s]" pauseOnHover>
        {firstRow.map((review) => (
          <ReviewCard
            img={review.img}
            key={review.img}
          />
        ))}
      </Marquee>
    </div>
  );
}
