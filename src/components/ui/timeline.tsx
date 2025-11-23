'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import type React from 'react';
import { useEffect, useRef, useState } from 'react';

interface TimelineEntry {
  id?: string;
  date: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white font-sans md:px-10 dark:bg-neutral-950"
      ref={containerRef}
    >
      <div className="relative mx-auto mb-20 max-w-7xl pb-10" ref={ref}>
        {data.map((item, index) => (
          <div
            className="flex justify-start pt-10 md:gap-10 md:pt-20"
            key={item.id || index}
          >
            <div className="top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
              <div className="absolute left-2.5 flex h-10 w-10 items-center rounded-full bg-white sm:justify-center md:left-3 dark:bg-black">
                <div className="h-3 w-3 rounded-full border border-zinc-300 bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-800" />
              </div>
              <h3 className="hidden font-bold text-xl text-zinc-500 md:block md:pl-20 md:text-3xl dark:text-zinc-500 ">
                {item.date}
              </h3>
            </div>

            <div className="relative w-full pr-4 pl-16 sm:pl-20 md:pl-4">
              <h3 className="mb-4 block text-left font-bold text-2xl text-zinc-500 md:hidden dark:text-zinc-500">
                {item.date}
              </h3>
              {item.content}{' '}
            </div>
          </div>
        ))}
        <div
          className="absolute top-0 left-4 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-[0%] from-transparent via-zinc-200 to-[99%] to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8 dark:via-zinc-800 "
          style={{
            height: height + 'px',
          }}
        >
          <motion.div
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-[0%] from-zinc-200 via-[10%] via-zinc-500 to-transparent dark:from-zinc-800 dark:via-zinc-500"
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
          />
        </div>
      </div>
    </div>
  );
};
