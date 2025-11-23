import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import Chip from './Chip';

export function ExperienceTimeline() {
  const data = [
    {
      id: 'orimba',
      date: 'Sep 2025 – Present',
      content: (
        <div>
          <h3 className="mb-2 font-bold text-lg text-zinc-700 md:text-2xl dark:text-zinc-200">
            Orimba (Plywood Manufacturing) – Software Engineer
          </h3>
          <ul className="mb-4 list-disc list-outside font-normal text-neutral-700 text-sm md:text-sm dark:text-neutral-300 space-y-1">
            <li>
              Resolved a critical N+1 performance bottleneck in pagination, cutting load times by 87% (7.5s to &lt;1s) for a 6-million-row production database.
            </li>
            <li>
              Onboarded to an unfamiliar Django backend and contributed in 2 days (PR &lt; 48h), shipped core manufacturing ERP features by day 4, accelerated launch approximately to December, earned managers and CTO commendations for rapid execution.
            </li>
          </ul>
          <div className="mb-8 flex flex-wrap gap-2 text-sm">
            <Chip text="Django" className='text-xs' />
            <Chip text="Python" className='text-xs' />
            <Chip text="PostgreSQL" className='text-xs' />
            <Chip text="Docker" className='text-xs' />
          </div>
        </div>
      ),
    },
    {
      id: 'davila',
      date: 'Feb 2025 – Aug 2025',
      content: (
        <div>
          <h3 className="mb-2 font-bold text-lg text-zinc-700 md:text-2xl dark:text-zinc-200">
            Davila (Marketing Agency) – Software Developer & UI/UX Designer Lead
          </h3>
          <ul className="mb-4 list-disc list-outside font-normal text-neutral-700 text-sm md:text-sm dark:text-neutral-300 space-y-1">
            <li>
              Led a 3-person squad; ran sprint planning, backlog grooming, PR reviews, and UI audits. Standardized Git workflow and added basic CI/CD checks (lint/type/build) to keep project deliveries predictable.
            </li>
            <li>
              Coordinated design to developer handoffs to deliver projects on schedule.
            </li>
          </ul>
          <div className="mb-8 flex flex-wrap gap-2 text-sm">
            <Chip text="React" className='text-xs' />
            <Chip text="Next.js" className='text-xs' />
            <Chip text="Tailwind CSS" className='text-xs' />
            <Chip text="Figma" className='text-xs' />
            <Chip text="CI/CD" className='text-xs' />
          </div>
        </div>
      ),
    },
    {
      id: 'graviton',
      date: 'Feb 2024 – Jan 2025',
      content: (
        <div>
          <h3 className="mb-2 font-bold text-lg text-zinc-700 md:text-2xl dark:text-zinc-200">
            Graviton Softworks (Self‑Employed) – Software Developer & UI/UX Designer
          </h3>
          <ul className="mb-4 list-disc list-outside font-normal text-neutral-700 text-sm md:text-sm dark:text-neutral-300 space-y-1">
            <li>
              Architected and delivered multiple web apps, including a registration platform handling hundreds of concurrent signups with Midtrans payment integration (secure checkout and notification flows).
            </li>
            <li>
              Managed discovery, design, build and deploy. Converting requirements to defined database schemas and maintainable CRUD, and deployed to Linux/Nginx with environment-based configs.
            </li>
          </ul>
          <div className="mb-8 flex flex-wrap gap-2 text-sm">
            <Chip text="React" className='text-xs' />
            <Chip text="Next.js" className='text-xs' />
            <Chip text="Laravel" className='text-xs' />
            <Chip text="MySQL" className='text-xs' />
            <Chip text="Tailwind CSS" className='text-xs' />
            <Chip text="Figma" className='text-xs' />
            <Chip text="Linux/Nginx" className='text-xs' />
          </div>
        </div>
      ),
    },
    {
      id: 'mulawarman',
      date: 'Sep 2022 – Apr 2023',
      content: (
        <div>
          <h3 className="mb-2 font-bold text-lg text-zinc-700 md:text-2xl dark:text-zinc-200">
            Mulawarman University – Lab Assistant
          </h3>
          <ul className="mb-4 list-disc list-outside font-normal text-neutral-700 text-sm md:text-sm dark:text-neutral-300 space-y-1">
            <li>
              Designed and delivered modules in Computer Graphics, 2D Animation, and AR/VR. Mentored student capstone teams from brief to demo.
            </li>
          </ul>
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
