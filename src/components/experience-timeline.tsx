'use client';

import { CheckCircle2 } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import Chip from './Chip';

const experiences = [
  {
    id: 'orimba',
    date: 'Sep 2025 to Present',
    company: 'Orimba',
    context: 'Plywood manufacturing ERP',
    role: 'Software Engineer',
    summary:
      'Joined an unfamiliar Django ERP codebase and became productive quickly, moving from first PR to core manufacturing features in the same week.',
    proof: [
      'Cut pagination load time by 87%, from 7.5s to under 1s, on a 6-million-row production database.',
      'Shipped ERP features for production workflows by day 4, helping pull the launch schedule forward.',
      'Earned manager and CTO recognition for speed, ownership, and ability to improve critical backend paths.',
    ],
    impact: '87% faster',
    impactLabel: 'critical database path',
    outcome: '87% faster pagination on a critical 6-million-row database path.',
    tools: ['Django', 'Python', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'davila',
    date: 'Feb 2025 to Aug 2025',
    company: 'Davila',
    context: 'Marketing agency delivery team',
    role: 'Software Developer and UI/UX Design Lead',
    summary:
      'Led a small delivery squad across product design, frontend implementation, workflow discipline, and stakeholder handoff.',
    proof: [
      'Ran sprint planning, backlog grooming, PR reviews, and UI audits for a 3-person squad.',
      'Standardized Git workflow and added lint, type, and build checks to reduce delivery surprises.',
      'Tightened design to developer handoffs so agency projects could move from brief to release with less rework.',
    ],
    impact: 'Brief to release',
    impactLabel: 'delivery system for a small agency squad',
    outcome:
      'Created a steadier agency delivery cadence through planning, PR review, UI audits, and handoff discipline.',
    tools: ['React', 'Next.js', 'Tailwind CSS', 'Figma', 'CI/CD'],
  },
  {
    id: 'graviton',
    date: 'Feb 2024 to Jan 2025',
    company: 'Graviton Softworks',
    context: 'Self-employed product and web delivery',
    role: 'Software Developer and UI/UX Designer',
    summary:
      'Handled discovery, UX, database design, implementation, and deployment for web systems that needed to run in real operational settings.',
    proof: [
      'Delivered registration platforms with Midtrans payments, automated email confirmations, QR check-ins, and admin dashboards.',
      'Converted loose requirements into database schemas, maintainable CRUD flows, and deployment-ready Linux/Nginx setups.',
      'Balanced interface quality with operational constraints, including traffic spikes and lean hosting resources.',
    ],
    impact: '1,500+ signups',
    impactLabel: 'handled on constrained hosting',
    outcome:
      'Kept registration, payment, QR check-in, and admin workflows dependable through 1,500+ signups.',
    tools: ['React', 'Next.js', 'Laravel', 'MySQL', 'Tailwind CSS', 'Figma'],
  },
  {
    id: 'mulawarman',
    date: 'Sep 2022 to Apr 2023',
    company: 'Mulawarman University',
    context: 'Computer graphics and immersive media lab',
    role: 'Lab Assistant',
    summary:
      'Supported students from technical fundamentals to demo-ready work, translating abstract visual computing topics into practical exercises.',
    proof: [
      'Delivered modules in Computer Graphics, 2D Animation, and AR/VR.',
      'Mentored capstone teams through brief interpretation, prototyping, iteration, and final presentation.',
      'Built an early foundation in explaining technical systems clearly to mixed-skill audiences.',
    ],
    impact: '3 modules',
    impactLabel: 'taught and mentored',
    outcome:
      'Taught three visual computing modules while mentoring students toward demo-ready work.',
    tools: ['Computer Graphics', 'AR/VR', '2D Animation', 'Mentoring'],
  },
];

export function ExperienceTimeline() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="journey-list">
      <div className="grid gap-3">
        {experiences.map((experience, index) => (
          <motion.article
            className="journey-entry group rounded-[1.125rem] border border-zinc-200 bg-[oklch(0.995_0.004_75)] p-5 shadow-[0_1px_2px_rgb(9_9_11/0.04)] md:p-6 lg:p-7"
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    transform: 'translate3d(0, 22px, 0) scale(0.985)',
                  }
            }
            key={experience.id}
            transition={{
              duration: 0.46,
              ease: [0.23, 1, 0.32, 1],
              delay: index * 0.04,
            }}
            viewport={{ once: true, margin: '-80px 0px -120px 0px' }}
            whileInView={{
              opacity: 1,
              transform: 'translate3d(0, 0, 0) scale(1)',
            }}
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <p className="rounded-full border border-orange-200 bg-[oklch(0.985_0.018_55)] px-3 py-1 font-semibold text-[0.72rem] text-orange-700 uppercase tracking-[0.12em]">
                {experience.date}
              </p>
              <p className="font-semibold text-sm text-zinc-500 leading-6">
                {experience.context}
              </p>
            </div>

            <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1.5">
              <h3 className="font-display font-semibold text-2xl text-zinc-950 leading-tight">
                {experience.company}
              </h3>
              <p className="font-semibold text-sm text-zinc-500 leading-6">
                {experience.role}
              </p>
            </div>

            <p className="mt-3 max-w-[68ch] text-sm text-zinc-600 leading-7 md:text-base">
              {experience.summary}
            </p>

            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              {experience.proof.slice(0, 2).map((item) => (
                <li
                  className="journey-proof-item flex gap-3 rounded-2xl border border-zinc-200 bg-[oklch(0.985_0.004_75)] p-4 text-sm text-zinc-700 leading-6"
                  key={item}
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-orange-600"
                    strokeWidth={1.9}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-col gap-4 border-zinc-200 border-t pt-5 lg:flex-row lg:items-center lg:justify-between">
              <p className="max-w-[62ch] text-sm text-zinc-600 leading-6">
                <span className="font-semibold text-zinc-950">Outcome:</span>{' '}
                {experience.outcome}
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.tools.map((tool) => (
                  <Chip
                    className="border-zinc-200/90 px-3 py-1.5 text-xs"
                    key={tool}
                    text={tool}
                  />
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
