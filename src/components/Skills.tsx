'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { Code2, Database, Layers, Settings } from 'lucide-react';
import Image from 'next/image';
import type React from 'react';
import { useMemo, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Skill {
  name: string;
  icon: string;
  description: string;
}

interface SkillGroup {
  value: string;
  title: string;
  shortTitle: string;
  mobileTitle: string;
  summary: string;
  proof: string;
  skills: Skill[];
  icon: React.ElementType;
}

// Programming languages and scripting based on CV
const programmingLanguages: Skill[] = [
  {
    name: 'JavaScript',
    icon: '/assets/icons/skills/javascript-original.svg',
    description:
      'Expert in modern ES6+ JavaScript for dynamic, responsive web applications',
  },
  {
    name: 'TypeScript',
    icon: '/assets/icons/skills/typescript-original.svg',
    description:
      'Strongly typed superset of JavaScript for scalable, maintainable codebases',
  },
  {
    name: 'PHP',
    icon: '/assets/icons/skills/php-original.svg',
    description:
      'Proficient in PHP for backend development, especially with Laravel',
  },
  {
    name: 'Python',
    icon: '/assets/icons/skills/python-original.svg',
    description:
      'Experienced with Python for scripting, automation, and data tasks',
  },
  {
    name: 'Dart',
    icon: '/assets/icons/skills/dart-original.svg',
    description:
      'Familiar with Dart for building cross-platform Flutter applications',
  },
  {
    name: 'SQL',
    icon: '/assets/icons/skills/mysql-original.svg',
    description:
      'Skilled in SQL (MySQL, PostgreSQL) for database design and queries',
  },
];

// Frameworks and libraries from projects and certifications
const frameworks: Skill[] = [
  {
    name: 'Laravel',
    icon: '/assets/icons/skills/laravel-original.svg',
    description: 'PHP MVC framework for building secure, maintainable web apps',
  },
  {
    name: 'React',
    icon: '/assets/icons/skills/react-original.svg',
    description: 'Component-driven library for building interactive UIs',
  },
  {
    name: 'Next.js',
    icon: '/assets/icons/skills/nextjs-original.svg',
    description: 'React meta-framework with SSR/SSG and API routes',
  },
  {
    name: 'Flutter',
    icon: '/assets/icons/skills/flutter-original.svg',
    description: 'UI toolkit for crafting natively compiled mobile/web apps',
  },
  {
    name: 'Alpine.js',
    icon: '/assets/icons/skills/alpinejs-original.svg',
    description: 'Minimal JS framework for declarative UI behavior',
  },
  {
    name: 'Tailwind CSS',
    icon: '/assets/icons/skills/tailwindcss-original.svg',
    description: 'Utility-first CSS framework for rapid UI styling',
  },
  {
    name: 'Framer Motion',
    icon: '/assets/icons/skills/framer-motion.svg',
    description:
      'Production-ready motion library for polished React interactions',
  },
];

// Development tools and workflows
const tools: Skill[] = [
  {
    name: 'Git & GitHub',
    icon: '/assets/icons/skills/github-original.svg',
    description:
      'Version control and collaboration, pull requests, code reviews',
  },
  {
    name: 'Figma',
    icon: '/assets/icons/skills/figma-original.svg',
    description: 'UI/UX design, prototyping, and developer handoff',
  },
  {
    name: 'Postman',
    icon: '/assets/icons/skills/postman-original.svg',
    description:
      'API testing and local tunneling with Ngrok for webhooks and callbacks',
  },
  {
    name: 'Docker',
    icon: '/assets/icons/skills/docker-original.svg',
    description:
      'Containerization for reproducible development and production environments',
  },
  {
    name: 'CI/CD (GitHub Actions)',
    icon: '/assets/icons/skills/githubactions-original.svg',
    description: 'Automated testing, linting, and deployment pipelines',
  },
  {
    name: 'Node.js',
    icon: '/assets/icons/skills/nodejs-original.svg',
    description: 'JavaScript runtime for scalable server-side applications',
  },
  {
    name: 'Webpack',
    icon: '/assets/icons/skills/webpack-original.svg',
    description:
      'Module bundler for JavaScript applications with asset optimization',
  },
  {
    name: 'Vite',
    icon: '/assets/icons/skills/vitejs-original.svg',
    description:
      'Fast build tool with hot module replacement for modern web development',
  },
  {
    name: 'Storybook',
    icon: '/assets/icons/skills/storybook-original.svg',
    description: 'Component-driven UI development environment for React',
  },
  {
    name: 'Cypress',
    icon: '/assets/icons/skills/cypressio-original.svg',
    description: 'End-to-end testing framework for modern web applications',
  },
  {
    name: 'React Testing Library',
    icon: '/assets/icons/react-testing-library.svg',
    description: 'Lightweight solution for testing React components',
  },
  {
    name: 'Jest',
    icon: '/assets/icons/skills/jest-plain.svg',
    description:
      'Delightful JavaScript testing framework with a focus on simplicity',
  },
  {
    name: 'Vitest',
    icon: '/assets/icons/skills/vitest-original.svg',
    description: 'Blazing-fast unit test framework powered by Vite',
  },
  {
    name: 'Socket.io',
    icon: '/assets/icons/skills/socketio-original.svg',
    description:
      'Real-time bidirectional event-based communication library for web applications',
  },
  {
    name: 'Midtrans',
    icon: '/assets/icons/color/Midtrans.svg',
    description:
      'Indonesian payment gateway integration for seamless e-commerce transactions',
  },
];

// Databases & storage technologies
const databases: Skill[] = [
  {
    name: 'MySQL',
    icon: '/assets/icons/skills/mysql-original.svg',
    description: 'Relational database for transactional web applications',
  },
  {
    name: 'PostgreSQL',
    icon: '/assets/icons/skills/postgresql-original.svg',
    description: 'Advanced open-source RDBMS with JSON support',
  },
  {
    name: 'MongoDB',
    icon: '/assets/icons/skills/mongodb-original.svg',
    description:
      'NoSQL document store for flexible schemas and rapid iteration',
  },
  {
    name: 'Redis',
    icon: '/assets/icons/skills/redis-original.svg',
    description: 'In-memory data store for caching, sessions, and pub/sub',
  },
  {
    name: 'Supabase',
    icon: '/assets/icons/skills/supabase-original.svg',
    description: 'Open source Firebase alternative with PostgreSQL backend',
  },
  {
    name: 'Prisma',
    icon: '/assets/icons/skills/prisma-original.svg',
    description: 'Type-safe ORM for database modeling and migrations',
  },
];

const skillGroups: SkillGroup[] = [
  {
    value: 'languages',
    title: 'Programming Languages',
    shortTitle: 'Programming',
    mobileTitle: 'Code',
    summary:
      'Core languages used to ship product interfaces, backend workflows, automation, and data-heavy features.',
    proof: 'Used across Laravel, React, Flutter, database, and scripting work.',
    skills: programmingLanguages,
    icon: Code2,
  },
  {
    value: 'frameworks',
    title: 'Frameworks & Libraries',
    shortTitle: 'Frameworks',
    mobileTitle: 'Frame',
    summary:
      'Framework choices for responsive frontends, production dashboards, mobile experiences, and maintainable server-rendered applications.',
    proof:
      'Project stack includes Laravel, Next.js, React, Alpine.js, and Tailwind.',
    skills: frameworks,
    icon: Layers,
  },
  {
    value: 'tools',
    title: 'Development Tools',
    shortTitle: 'Tools',
    mobileTitle: 'Tools',
    summary:
      'Daily workflow tools for design handoff, API testing, component QA, version control, and deployment confidence.',
    proof:
      'Supports design-to-build delivery, testing, CI, and production release work.',
    skills: tools,
    icon: Settings,
  },
  {
    value: 'databases',
    title: 'Databases & Storage',
    shortTitle: 'Databases',
    mobileTitle: 'DB',
    summary:
      'Storage choices for transactional systems, admin dashboards, caching, relational modeling, and flexible content structures.',
    proof:
      'Used in registration platforms, media sites, and content-managed products.',
    skills: databases,
    icon: Database,
  },
];

const SkillIcon: React.FC<{ index: number; skill: Skill }> = ({
  index,
  skill,
}) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="skill-card-motion flex min-h-[9.5rem] w-full flex-col items-start justify-between gap-4 rounded-2xl border border-zinc-200 bg-[oklch(0.995_0.004_75)] p-4 text-left shadow-[0_1px_2px_rgb(9_9_11_/_0.04)]"
      initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.98 }}
      transition={{
        delay: Math.min(index * 0.035, 0.24),
        duration: 0.42,
        ease: [0.23, 1, 0.32, 1],
      }}
      viewport={{ margin: '0px 0px -12% 0px', once: true }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      style={{ '--skill-card-index': index } as React.CSSProperties}
    >
      <div className="flex size-11 items-center justify-center rounded-full border border-zinc-200 bg-[oklch(0.97_0.005_75)]">
        <Image
          alt=""
          aria-hidden="true"
          className="h-6 w-6 object-contain"
          height={24}
          src={skill.icon}
          width={24}
        />
      </div>
      <div className="space-y-1.5">
        <span className="block max-w-full text-balance font-semibold text-sm text-zinc-950 leading-tight">
          {skill.name}
        </span>
        <span className="line-clamp-2 block text-sm text-zinc-600 leading-5">
          {skill.description}
        </span>
      </div>
    </motion.article>
  );
};

const SkillCategory: React.FC<{ group: SkillGroup }> = ({ group }) => (
  <div className="skill-category-motion grid gap-8 lg:grid-cols-[minmax(240px,0.72fr)_minmax(0,1.8fr)] lg:items-start">
    <div className="skill-category-copy space-y-5 lg:sticky lg:top-8">
      <div className="inline-flex items-center rounded-full border border-zinc-200 bg-[oklch(0.995_0.004_75)] px-4 py-2 font-medium text-sm text-zinc-600">
        {group.skills.length} capabilities
      </div>
      <div className="space-y-3">
        <h3 className="font-display font-semibold text-3xl text-zinc-950 leading-tight sm:text-4xl">
          {group.title}
        </h3>
        <p className="max-w-xl text-base text-zinc-600 leading-7">
          {group.summary}
        </p>
      </div>
      <p className="max-w-xl border-zinc-300 border-t pt-4 font-medium text-sm text-zinc-700 leading-6">
        {group.proof}
      </p>
    </div>

    <div className="skill-category-grid grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
      {group.skills.map((skill, index) => (
        <SkillIcon index={index} key={skill.name} skill={skill} />
      ))}
    </div>
  </div>
);

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(skillGroups[0].value);
  const activeIndex = skillGroups.findIndex(
    (group) => group.value === activeTab
  );
  const tabIndicatorStyle = useMemo(
    () =>
      ({
        '--skill-tab-index': Math.max(activeIndex, 0),
        '--skill-tab-col': Math.max(activeIndex, 0) % 2,
        '--skill-tab-row': Math.floor(Math.max(activeIndex, 0) / 2),
      }) as React.CSSProperties,
    [activeIndex]
  );

  return (
    <section className="section-stage section-stage-skills section-frame">
      <div className="skills-panel overflow-hidden rounded-[1.25rem] px-4 py-12 text-zinc-950 sm:px-6 md:px-8 lg:px-10 lg:py-16">
        <div className="page-content">
          <div className="mb-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.6fr)] lg:items-end">
            <div className="space-y-4">
              <p className="mb-4 flex items-center gap-3 font-semibold text-[0.68rem] text-zinc-700 uppercase tracking-[0.24em]">
                <span className="size-1.5 rounded-full bg-orange-600" />
                Technical range
              </p>
              <div className="space-y-3">
                <h2 className="max-w-4xl font-display font-semibold text-4xl leading-tight sm:text-5xl">
                  Tools I use to turn product problems into working systems.
                </h2>
                <p className="max-w-3xl text-base text-zinc-600 leading-7">
                  A focused view of the languages, frameworks, workflows, and
                  data tools behind the projects below. Select a category to see
                  where each capability fits in the build process.
                </p>
              </div>
            </div>
            <div className="space-y-3 border-zinc-300 border-t pt-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6">
              <p className="font-medium text-sm text-zinc-500 leading-6">
                Current emphasis
              </p>
              <p className="font-display font-semibold text-2xl text-zinc-950 leading-tight">
                Full-stack delivery with product design judgment.
              </p>
            </div>
          </div>

          <Tabs
            className="w-full gap-8"
            onValueChange={setActiveTab}
            value={activeTab}
          >
            <TabsList
              className="skills-tabs-list grid h-auto w-full grid-cols-2 gap-2 rounded-2xl border border-zinc-200 bg-[oklch(0.995_0.004_75)] p-1.5 text-zinc-600 shadow-[0_1px_2px_rgb(9_9_11_/_0.04)] sm:grid-cols-4"
              style={tabIndicatorStyle}
            >
              {skillGroups.map((group) => {
                const Icon = group.icon;

                return (
                  <TabsTrigger
                    className="skill-tab-motion relative z-10 min-h-11 rounded-xl bg-transparent px-3 py-2 font-semibold text-sm focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.995_0.004_75)] data-[state=active]:bg-transparent data-[state=active]:text-orange-50 data-[state=active]:shadow-none"
                    key={group.value}
                    value={group.value}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden md:inline">{group.shortTitle}</span>
                    <span className="md:hidden">{group.mobileTitle}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {skillGroups.map((group) => (
              <TabsContent
                className="skills-tab-content pt-1"
                key={group.value}
                value={group.value}
              >
                <SkillCategory group={group} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};
