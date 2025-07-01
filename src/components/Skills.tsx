'use client'
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {
    FileCode,
    Code2,
    Terminal,
    Shield,
    Braces,
    Globe,
    Layers,
    Activity,
    GitBranch,
    Box,
    Workflow,
    Package,
    Database,
    Zap,
    Settings
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const programmingLanguages: Skill[] = [
    {
      name: 'JavaScript',
      icon: FileCode,
      description: 'Expert in modern ES6+ JavaScript for dynamic, responsive web applications',
    },
    {
      name: 'TypeScript',
      icon: Code2,
      description: 'Strongly typed superset of JavaScript for scalable, maintainable codebases',
    },
    {
      name: 'PHP',
      icon: Code2,
      description: 'Proficient in PHP for backend development, especially with Laravel',
    },
    {
      name: 'Python',
      icon: Terminal,
      description: 'Experienced with Python for scripting, automation, and data tasks',
    },
    {
      name: 'Dart',
      icon: Zap,
      description: 'Familiar with Dart for building cross-platform Flutter applications',
    },
    {
      name: 'SQL',
      icon: Database,
      description: 'Skilled in SQL (MySQL, PostgreSQL) for database design and queries',
    }
  ];
  
  // Frameworks and libraries from projects and certifications
  const frameworks: Skill[] = [
    {
      name: 'Laravel',
      icon: Shield,
      description: 'PHP MVC framework for building secure, maintainable web apps',
    },
    {
      name: 'React',
      icon: Braces,
      description: 'Component-driven library for building interactive UIs',
    },
    {
      name: 'Next.js',
      icon: Globe,
      description: 'React meta-framework with SSR/SSG and API routes',
    },
    {
      name: 'Flutter',
      icon: Zap,
      description: 'UI toolkit for crafting natively compiled mobile/web apps',
    },
    {
      name: 'Alpine.js',
      icon: Layers,
      description: 'Minimal JS framework for declarative UI behavior',
    },
    {
      name: 'Tailwind CSS',
      icon: Package,
      description: 'Utility-first CSS framework for rapid UI styling',
    }
  ];
  
  // Development tools and workflows
  const tools: Skill[] = [
    {
      name: 'Git & GitHub',
      icon: GitBranch,
      description: 'Version control and collaboration, pull requests, code reviews',
    },
    {
      name: 'Figma',
      icon: Box,
      description: 'UI/UX design, prototyping, and developer handoff',
    },
    {
      name: 'Postman & Ngrok',
      icon: Activity,
      description: 'API testing and local tunneling for webhooks and callbacks',
    },
    {
      name: 'Docker & Docker Compose',
      icon: Box,
      description: 'Containerization for reproducible dev and production environments',
    },
    {
      name: 'CI/CD (GitHub Actions)',
      icon: Workflow,
      description: 'Automated testing, linting, and deployment pipelines',
    },
    {
      name: 'Prisma',
      icon: Layers,
      description: 'Type-safe ORM for database modeling and migrations',
    },  
    {
      name: 'Webpack',
      icon: Package,
      description: 'Module bundler for JavaScript applications with asset optimization',
    },
    {
      name: 'Vite',
      icon: Zap,
      description: 'Fast build tool with hot module replacement for modern web development',
    }
];

const databases: Skill[] = [
  {
    name: 'PostgreSQL',
    icon: Database,
    description: 'Advanced open-source relational database with JSON support',
  },
  {
    name: 'MongoDB',
    icon: Database,
    description: 'NoSQL document database for flexible and scalable applications',
  },
  {
    name: 'Redis',
    icon: Activity,
    description: 'In-memory data store used for caching and real-time applications',
  },
  {
    name: 'MySQL',
    icon: Database,
    description: 'Popular relational database management system for web applications',
  },
  {
    name: 'Supabase',
    icon: Database,
    description: 'Open source Firebase alternative with PostgreSQL backend',
  },
  {
    name: 'Prisma',
    icon: Layers,
    description: 'Type-safe database toolkit and ORM for modern application development',
  }
];

const SkillIcon: React.FC<{ skill: Skill }> = ({ skill }) => {
    const [open, setOpen] = useState(false)
  const IconComponent = skill.icon;
  
  return (
    <Tooltip
    open={open}
      onOpenChange={setOpen}
      delayDuration={0}        // show immediately
      >
      <TooltipTrigger asChild>
        <div>
            <div
                onClick={() => setOpen(!open)} 
                className="mx-auto flex items-center justify-center p-3 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300">
                <IconComponent className="h-8 w-8 text-primary group-hover:text-primary/80 transition-colors duration-300" />
            </div>
            <div className="text-center space-y-1">
                <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors duration-300">
                {skill.name}
                </h3>
            </div>
        </div>
      </TooltipTrigger>
      <TooltipContent side="top" className="max-w-xs">
        <div className="space-y-2">
          <p className="font-semibold">{skill.name}</p>
          <p className="text-sm text-muted-foreground">{skill.description}</p>
        </div>
      </TooltipContent>
    </Tooltip>
  );
};

const SkillCategory: React.FC<{ skills: Skill[]; title: string }> = ({ skills, title }) => (
  <div className="space-y-6">
    <div className="text-center">
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <div className="w-24 h-1 bg-primary/20 rounded-full mx-auto"></div>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
      {skills.map((skill, index) => (
        <SkillIcon key={index} skill={skill} />
      ))}
    </div>
  </div>
);

export const Skills: React.FC = () => {
  return (
    <TooltipProvider>
      <section className="w-full max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various domains. 
            Hover over each skill to learn more about my experience and proficiency level.
          </p>
        </div>

        <Tabs defaultValue="languages" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 h-12">
            <TabsTrigger value="languages" className="text-sm font-medium">
              <Code2 className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Programming</span>
              <span className="sm:hidden">Code</span>
            </TabsTrigger>
            <TabsTrigger value="frameworks" className="text-sm font-medium">
              <Layers className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Frameworks</span> 
              <span className="sm:hidden">Frame</span>
            </TabsTrigger>
            <TabsTrigger value="tools" className="text-sm font-medium">
              <Settings className="w-4 h-4 mr-2" />
              Tools
            </TabsTrigger>
            <TabsTrigger value="databases" className="text-sm font-medium">
              <Database className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Databases</span>
              <span className="sm:hidden">DB</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="languages" className="space-y-8">
            <SkillCategory skills={programmingLanguages} title="Programming Languages" />
          </TabsContent>

          <TabsContent value="frameworks" className="space-y-8">
            <SkillCategory skills={frameworks} title="Frameworks & Libraries" />
          </TabsContent>

          <TabsContent value="tools" className="space-y-8">
            <SkillCategory skills={tools} title="Development Tools" />
          </TabsContent>

          <TabsContent value="databases" className="space-y-8">
            <SkillCategory skills={databases} title="Databases & Storage" />
          </TabsContent>
        </Tabs>
      </section>
    </TooltipProvider>
  );
};