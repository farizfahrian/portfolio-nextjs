import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import Chip from './Chip';

export function ExperienceTimeline() {
  const data = [
    {
      date: 'Feb 2025– Present',
      content: (
        <div>
          <h3 className="mb-2 font-bold text-lg text-zinc-700 md:text-2xl dark:text-zinc-200">
            Davila (Marketing Agency)– Frontend Developer & UI/UX Designer Lead
          </h3>
          <p className="mb-4 font-normal text-neutral-700 text-sm md:text-sm dark:text-neutral-300">
            Led a team of 3 (1 UI/UX Designer & 2 Frontend Developers), conducting code reviews,
            sprint planning, and performance evaluations. Coordinated cross‑functional collaboration
            between design, frontend, and backend teams to deliver high‑impact marketing projects on schedule.
          </p>
          <div className="mb-8 flex flex-wrap gap-2 text-sm">
            <Chip text="React" className='text-xs' />
            <Chip text="Next.js" className='text-xs' />
            <Chip text="Tailwind CSS" className='text-xs' />
            <Chip text="Figma" className='text-xs' />
          </div>
        </div>
      ),
    },
    {
      date: 'Feb 2024 – Jan 2025',
      content: (
        <div>
          <h3 className="mb-2 font-bold text-lg text-zinc-700 md:text-2xl dark:text-zinc-200">
            Graviton Softworks (Self‑Employed) – Frontend Developer & UI/UX
            Designer
          </h3>
          <p className="mb-4 font-normal text-neutral-700 text-sm md:text-sm dark:text-neutral-300">
            Architected and delivered multiple web solutions, including a registration platform
            handling hundreds of simultaneous users. Managed full project lifecycle from requirements
            gathering through deployment, showcasing end‑to‑end full‑stack development skills.
          </p>
          <div className="mb-8 flex flex-wrap gap-2 text-sm">
            <Chip text="React" className='text-xs' />
            <Chip text="Next.js" className='text-xs' />
            <Chip text="Laravel" className='text-xs' />
            <Chip text="MySQL" className='text-xs' />
            <Chip text="Tailwind CSS" className='text-xs' />
            <Chip text="Figma" className='text-xs' />
          </div>
        </div>
      ),
    },
    {
      date: 'Sep 2022 – Apr 2023',
      content: (
        <div>
          <h3 className="mb-2 font-bold text-lg text-zinc-700 md:text-2xl dark:text-zinc-200">
            Mulawarman University – Lab Assistant
          </h3>
          <p className="mb-4 font-normal text-neutral-700 text-sm md:text-sm dark:text-neutral-300">
            Designed and delivered modules on Computer Graphics, 2D Animation, and AR/VR, developing
            hands‑on lab materials. Mentored students through project work, providing guidance on
            software tools and best practices.
          </p>
          <div className="mb-8 flex flex-wrap gap-2 text-xs">
            <Chip text="Figma" className='text-xs' />
            <Chip text="React" className='text-xs' />
            <Chip text="Tailwind CSS" className='text-xs' />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
