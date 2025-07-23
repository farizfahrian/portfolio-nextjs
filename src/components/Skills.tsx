'use client';
import { Code2, Database, Layers, Settings } from 'lucide-react';
import Image from 'next/image';
import type React from 'react';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface Skill {
  name: string;
  icon: string;
  description: string;
}

// Programming languages and scripting based on CV
const programmingLanguages: Skill[] = [
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    description:
      'Expert in modern ES6+ JavaScript for dynamic, responsive web applications',
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    description:
      'Strongly typed superset of JavaScript for scalable, maintainable codebases',
  },
  {
    name: 'PHP',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
    description:
      'Proficient in PHP for backend development, especially with Laravel',
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    description:
      'Experienced with Python for scripting, automation, and data tasks',
  },
  {
    name: 'Dart',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg',
    description:
      'Familiar with Dart for building cross-platform Flutter applications',
  },
  {
    name: 'SQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    description:
      'Skilled in SQL (MySQL, PostgreSQL) for database design and queries',
  },
];

// Frameworks and libraries from projects and certifications
const frameworks: Skill[] = [
  {
    name: 'Laravel',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
    description: 'PHP MVC framework for building secure, maintainable web apps',
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    description: 'Component-driven library for building interactive UIs',
  },
  {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    description: 'React meta-framework with SSR/SSG and API routes',
  },
  {
    name: 'Flutter',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg',
    description: 'UI toolkit for crafting natively compiled mobile/web apps',
  },
  {
    name: 'Alpine.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/alpinejs/alpinejs-original.svg',
    description: 'Minimal JS framework for declarative UI behavior',
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    description: 'Utility-first CSS framework for rapid UI styling',
  },
];

// Development tools and workflows
const tools: Skill[] = [
  {
    name: 'Git & GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    description:
      'Version control and collaboration, pull requests, code reviews',
  },
  {
    name: 'Figma',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
    description: 'UI/UX design, prototyping, and developer handoff',
  },
  {
    name: 'Postman',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
    description:
      'API testing and local tunneling with Ngrok for webhooks and callbacks',
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    description:
      'Containerization for reproducible development and production environments',
  },
  {
    name: 'CI/CD (GitHub Actions)',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg',
    description: 'Automated testing, linting, and deployment pipelines',
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    description: 'JavaScript runtime for scalable server-side applications',
  },
  {
    name: 'Webpack',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg',
    description:
      'Module bundler for JavaScript applications with asset optimization',
  },
  {
    name: 'Vite',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
    description:
      'Fast build tool with hot module replacement for modern web development',
  },
  {
    name: 'Storybook',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/storybook/storybook-original.svg',
    description: 'Component-driven UI development environment for React',
  },
  {
    name: 'Cypress',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg',
    description: 'End-to-end testing framework for modern web applications',
  },
  {
    name: 'React Testing Library',
    icon: '/assets/icons/react-testing-library.svg',
    description: 'Lightweight solution for testing React components',
  },
  {
    name: 'Jest',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg',
    description:
      'Delightful JavaScript testing framework with a focus on simplicity',
  },
  {
    name: 'Vitest',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg',
    description: 'Blazing-fast unit test framework powered by Vite',
  },
  {
    name: 'Socket.io',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg',
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
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    description: 'Relational database for transactional web applications',
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    description: 'Advanced open-source RDBMS with JSON support',
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
    description:
      'NoSQL document store for flexible schemas and rapid iteration',
  },
  {
    name: 'Redis',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',
    description: 'In-memory data store for caching, sessions, and pub/sub',
  },
  {
    name: 'Supabase',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
    description: 'Open source Firebase alternative with PostgreSQL backend',
  },
  {
    name: 'Prisma',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg',
    description: 'Type-safe ORM for database modeling and migrations',
  },
];

const SkillIcon: React.FC<{ skill: Skill }> = ({ skill }) => {
  const [open, setOpen] = useState(false);

  return (
    <Tooltip
      delayDuration={0}
      onOpenChange={setOpen}
      open={open} // show immediately
    >
      <TooltipTrigger asChild>
        <div>
          <div
            className="mx-auto flex items-center justify-center rounded-full bg-primary/5 p-3 transition-colors duration-300 group-hover:bg-primary/10"
            onClick={() => setOpen(!open)}
          >
            <Image alt={skill.name} height={24} src={skill.icon} width={24} />
          </div>
          <div className="space-y-1 text-center">
            <h3 className="font-semibold text-foreground text-sm transition-colors duration-300 group-hover:text-primary">
              {skill.name}
            </h3>
          </div>
        </div>
      </TooltipTrigger>
      <TooltipContent className="mb-2 max-w-72" side="top">
        <div className="space-y-2">
          <p className="font-semibold">{skill.name}</p>
          <p className="text-sm text-zinc-200">{skill.description}</p>
        </div>
      </TooltipContent>
    </Tooltip>
  );
};

const SkillCategory: React.FC<{ skills: Skill[]; title: string }> = ({
  skills,
}) => (
  <div className="space-y-6">
    <div className="text-center"></div>
    <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {skills.map((skill, index) => (
        <SkillIcon key={index} skill={skill} />
      ))}
    </div>
  </div>
);

export const Skills: React.FC = () => {
  return (
    <TooltipProvider>
      <section className="mx-auto w-full max-w-7xl px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-bold text-4xl text-foreground">
            Technical Skills
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground sm:text-base">
            A comprehensive overview of my technical expertise across various
            domains. Hover over each skill to learn more about my experience and
            proficiency level.
          </p>
        </div>

        <Tabs className="w-full" defaultValue="languages">
          <TabsList className="mb-8 grid h-12 w-full grid-cols-4">
            <TabsTrigger className="font-medium text-sm" value="languages">
              <Code2 className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Programming</span>
              <span className="sm:hidden">Code</span>
            </TabsTrigger>
            <TabsTrigger className="font-medium text-sm" value="frameworks">
              <Layers className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Frameworks</span>
              <span className="sm:hidden">Frame</span>
            </TabsTrigger>
            <TabsTrigger className="font-medium text-sm" value="tools">
              <Settings className="mr-2 h-4 w-4" />
              Tools
            </TabsTrigger>
            <TabsTrigger className="font-medium text-sm" value="databases">
              <Database className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Databases</span>
              <span className="sm:hidden">DB</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent className="space-y-8" value="languages">
            <SkillCategory
              skills={programmingLanguages}
              title="Programming Languages"
            />
          </TabsContent>

          <TabsContent className="space-y-8" value="frameworks">
            <SkillCategory skills={frameworks} title="Frameworks & Libraries" />
          </TabsContent>

          <TabsContent className="space-y-8" value="tools">
            <SkillCategory skills={tools} title="Development Tools" />
          </TabsContent>

          <TabsContent className="space-y-8" value="databases">
            <SkillCategory skills={databases} title="Databases & Storage" />
          </TabsContent>
        </Tabs>
      </section>
    </TooltipProvider>
  );
};
