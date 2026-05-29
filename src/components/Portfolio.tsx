import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'UWGM Run Festival',
    anchorId: 'project-uwgm-run-festival',
    type: 'Event registration platform',
    role: 'Full-stack delivery',
    proof:
      'Registration, payment, QR check-in, and admin operations in one flow.',
    outcome:
      'Reduced manual event work with automated confirmations and scan-ready attendance.',
    description:
      'Designed and built a production registration system for a public running event. The platform connected participant onboarding, Midtrans payments, email confirmations, QR-based check-ins, and a Filament admin dashboard so organizers could manage race-day operations without spreadsheet handoffs.',
    image: '/assets/images/uwgm.jpg',
    technologies: [
      'Laravel',
      'Tailwind',
      'Alpinejs',
      'MySQL',
      'Filament',
      'Midtrans',
    ],
    liveUrl: '',
    githubUrl: '',
    availabilityLabel: 'Archived project',
    realProject: true,
  },
  {
    id: 2,
    title: 'Nusantara Prima Solusi',
    anchorId: 'project-nusantara-prima-solusi',
    type: 'Company profile website',
    role: 'Website development',
    proof: 'Clear product storytelling for an industrial palm oil business.',
    outcome:
      'A responsive company profile that makes products, services, and credibility easier to evaluate.',
    description:
      'Developed a responsive company profile for a palm oil business, shaping the content structure around products, services, and trust signals. The result gives buyers and partners a cleaner path to understand the company before starting a conversation.',
    image: '/assets/images/nps.jpg',
    technologies: ['Wordpress'],
    liveUrl: '',
    githubUrl: '',
    availabilityLabel: 'Archived project',
    realProject: true,
  },
  {
    id: 3,
    title: 'Active Festival',
    anchorId: 'project-active-festival',
    type: 'Event registration platform',
    role: 'Full-stack delivery',
    proof: '1,500+ registrations on a 1GB RAM, single-core server.',
    outcome:
      'Kept registration, payment, email, QR check-in, and admin workflows stable during peak demand.',
    description:
      'Built a lean registration system that handled 1,500+ signups on constrained hosting. I tuned the operational flow around fast registration, Midtrans payments, automated email confirmations, QR check-ins, and admin visibility, keeping the experience dependable during traffic spikes.',
    image: '/assets/images/activest.jpg',
    technologies: [
      'Laravel',
      'Tailwind',
      'Alpinejs',
      'MySQL',
      'Filament',
      'Midtrans',
    ],
    liveUrl: '',
    githubUrl: '',
    availabilityLabel: 'Archived project',
    realProject: true,
  },
  {
    id: 4,
    title: 'Al Mazaya',
    anchorId: 'project-al-mazaya',
    type: 'School registration platform',
    role: 'UI/UX design',
    proof: 'Parent and staff workflows mapped before interface production.',
    outcome:
      'A clearer enrollment experience for users with varied levels of technical confidence.',
    description:
      'Designed the enrollment experience for a school registration system, with emphasis on accessibility for parents and staff who have different levels of technical literacy. The work covered flow structure, information architecture, high-fidelity prototypes, and stakeholder handoff.',
    image: '/assets/images/al mazaya.jpg',
    technologies: ['Figma', 'Notion'],
    liveUrl: '',
    githubUrl: '',
    availabilityLabel: 'Design case study',
    realProject: true,
  },
  {
    id: 5,
    title: 'Sirkel',
    anchorId: 'project-sirkel',
    type: 'Digital marketing agency landing page',
    role: 'Design and frontend',
    proof: 'Brand messaging, responsive UI, and CMS-backed content structure.',
    outcome:
      'A sharper first impression for an agency selling strategy, content, and campaign work.',
    description:
      'Designed and developed a landing page for a digital marketing agency, translating service positioning into a responsive interface with clear sections, brand presence, and content structure that can support ongoing campaign updates.',
    image: '/assets/images/sirkel.jpg',
    technologies: ['React', 'Tailwind', 'Figma', 'Sanity'],
    liveUrl: 'https://sirkel-agency.vercel.app/',
    githubUrl: '',
    availabilityLabel: 'Live project',
    realProject: true,
  },
  {
    id: 6,
    title: 'Kaltimfolks',
    anchorId: 'project-kaltimfolks',
    type: 'News media website',
    role: 'Product design and web delivery',
    proof:
      'Editorial navigation, content discovery, hosting, and server setup.',
    outcome:
      'A scalable media experience that supports publishing depth without losing readability.',
    description:
      'Delivered a news platform from wireframes to deployment, including information architecture, high-fidelity UI, responsive front-end implementation, hosting, and server configuration. The work focused on making a growing editorial library easier to scan and navigate.',
    image: '/assets/images/kaltimfolks.jpg',
    technologies: ['Nextjs', 'Tailwind', 'MongoDB', 'Prisma', 'Sanity'],
    liveUrl: 'https://kaltimfolks.com',
    githubUrl: '',
    availabilityLabel: 'Live project',
    realProject: true,
  },
  {
    id: 7,
    title: 'Graviton Softworks',
    anchorId: 'project-graviton-softworks',
    type: 'Software agency landing page',
    role: 'Design and frontend',
    proof:
      'Positioning, portfolio presentation, and performance-minded implementation.',
    outcome:
      'A polished agency presence that explains the team, offer, and proof of work quickly.',
    description:
      'Collaborated with stakeholders to design and build a responsive software agency site. The interface presents services, expertise, and portfolio context with a clean content model and scalable front-end implementation.',
    image: '/assets/images/graviton.jpg',
    technologies: ['Nextjs', 'React', 'Figma', 'Tailwind', 'Sanity'],
    liveUrl: '',
    githubUrl: '',
    availabilityLabel: 'Archived project',
    realProject: true,
  },
  {
    id: 8,
    title: 'Davila',
    anchorId: 'project-davila',
    type: 'Digital marketing company profile',
    role: 'Full-stack web delivery',
    proof: 'Laravel, React, Tailwind, and Sanity for a manageable brand site.',
    outcome:
      'A responsive profile that makes services and brand identity easier to browse.',
    description:
      'Developed a responsive company profile for a digital marketing firm, connecting brand identity, service explanation, and manageable content. The build prioritized smooth navigation, clear hierarchy, and practical performance.',
    image: '/assets/images/davila.jpg',
    technologies: ['Laravel', 'React', 'Tailwind', 'Sanity'],
    liveUrl: '',
    githubUrl: '',
    availabilityLabel: 'Archived project',
    realProject: true,
  },
  // Fake Mini Projects
  {
    id: 9,
    title: 'Forum Discussion App',
    type: 'React learning project',
    role: 'Frontend engineering',
    proof: 'Topic creation, comments, likes, routing, and shared state.',
    outcome:
      'A compact social discussion interface built to practice production React patterns.',
    description:
      'A forum-style discussion application built during the Dicoding React Expert class. Users can create topics, post comments, and like discussions in a familiar social interface.',
    image: '/assets/images/forum-discussion-app.png',
    technologies: ['React', 'Context API', 'React Router', 'Tailwind CSS'],
    liveUrl: 'https://forum-discussion-app-eta.vercel.app',
    githubUrl: 'https://github.com/farizfahrian/Forum-Discussion-App',
    realProject: false,
  },
  {
    id: 10,
    title: 'Catalyst Web Extension',
    type: 'Browser extension',
    role: 'Extension development',
    proof:
      'AI-assisted writing tools embedded into rich text editor workflows.',
    outcome:
      'A browser-native writing utility that reduces context switching during content creation.',
    description:
      'A browser extension for content generation that integrates with rich text editors and provides AI-assisted writing tools directly in the browser.',
    image: '/assets/images/catalyst.png',
    technologies: ['JavaScript', 'Web Extensions API', 'React'],
    liveUrl:
      'https://microsoftedge.microsoft.com/addons/detail/creative-content-catalyst/langbocbheocmplkcjdbknpkhdfalpjl',
    githubUrl: 'https://github.com/farizfahrian/catalyst-web-extension',
    realProject: false,
  },
  {
    id: 11,
    title: 'Virtual Tour of University Buildings',
    type: 'Interactive campus tour',
    role: '3D web prototype',
    proof: 'Panorama navigation with Three.js, Panolens.js, and mapping APIs.',
    outcome:
      'A spatial browsing prototype for exploring campus buildings remotely.',
    description:
      'An interactive virtual tour application showcasing campus buildings at Mulawarman University, developed using Three.js and mapping APIs.',
    image: '/assets/images/virtual-tour.png',
    technologies: ['Panolens.js', 'JavaScript', 'Three.js'],
    liveUrl:
      'https://farizfahrian.github.io/Virtual-Tour-of-Recorate-Building-at-Mulawarman-University',
    githubUrl:
      'https://github.com/farizfahrian/Virtual-Tour-of-Recorate-Building-at-Mulawarman-University',
    realProject: false,
  },
  {
    id: 12,
    title: 'AI Sales Bot',
    type: 'Currently building',
    role: 'AI automation product',
    proof:
      'Lead intake, qualification logic, follow-up messaging, and handoff notes.',
    outcome:
      'A sales assistant designed to help small teams respond faster without losing context between first contact and follow-up.',
    description:
      'An AI-assisted sales workflow for capturing inquiries, qualifying intent, drafting follow-ups, and preparing useful handoff summaries for the person closing the conversation.',
    image: '',
    technologies: ['Nextjs', 'React', 'Tailwind', 'AI Workflows'],
    liveUrl: '',
    githubUrl: '',
    realProject: false,
    currentlyBuilding: true,
  },
];

export default function PortfolioSection() {
  const featuredProjects = projects.filter((project) => project.realProject);
  const currentlyBuildingProjects = projects.filter(
    (project) => project.currentlyBuilding
  );
  const otherProjects = projects.filter(
    (project) => !(project.realProject || project.currentlyBuilding)
  );

  return (
    <section
      className="section-stage section-stage-portfolio section-frame"
      id="portfolio"
    >
      <div className="portfolio-panel overflow-hidden rounded-[1.25rem] border border-zinc-200 px-4 py-12 text-zinc-950 sm:px-6 md:px-8 lg:px-10 lg:py-16">
        <div className="page-content">
          <div className="mb-10 border-zinc-200 border-b pb-8">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(280px,0.48fr)] lg:items-end">
              <div className="max-w-4xl">
                <p className="flex items-center gap-3 font-semibold text-[0.68rem] text-zinc-700 uppercase tracking-[0.24em]">
                  <span className="size-1.5 rounded-full bg-orange-600" />
                  Selected work
                </p>
                <h2 className="mt-4 max-w-[860px] text-balance font-display font-semibold text-4xl leading-tight sm:text-5xl">
                  Shipped systems, designed from the workflow outward.
                </h2>
                <p className="mt-5 max-w-3xl text-base text-zinc-600 leading-7">
                  Each project pairs interface craft with the operational layer
                  behind it: registration, payments, admin tooling, publishing,
                  content systems, and handoff-ready product decisions.
                </p>
              </div>

              <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1">
                {[
                  'Event platforms with payments and QR check-ins',
                  'CMS-backed marketing and media websites',
                  'Currently building practical AI sales workflows',
                ].map((item, index) => (
                  <div
                    className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-[oklch(0.995_0.004_75)] p-3 shadow-[0_1px_2px_rgb(9_9_11/0.04)]"
                    key={item}
                  >
                    <span className="mt-0.5 font-medium text-orange-600 text-xs tabular-nums">
                      0{index + 1}
                    </span>
                    <p className="font-medium text-sm text-zinc-700 leading-6">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {featuredProjects.map((project, index) => (
              <article
                className="project-card grid overflow-hidden rounded-[1.125rem] border border-zinc-200 bg-[oklch(0.995_0.004_75)] shadow-[0_1px_2px_rgb(9_9_11/0.04)] lg:grid-cols-[minmax(320px,0.95fr)_minmax(0,1.05fr)]"
                key={project.id}
                style={{ '--project-index': index } as React.CSSProperties}
              >
                <div
                  className="relative min-h-[230px] scroll-mt-24 overflow-hidden bg-zinc-100 sm:min-h-[310px] lg:min-h-full"
                  id={project.anchorId}
                >
                  <Image
                    alt={`${project.title} project screenshot`}
                    className="project-image-motion object-cover object-top"
                    fill
                    priority={index < 2}
                    sizes="(max-width: 1024px) 100vw, 46vw"
                    src={project.image}
                  />
                </div>

                <div className="flex flex-col justify-between gap-8 p-5 sm:p-6 lg:p-8">
                  <div className="space-y-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge className="rounded-full border-zinc-200 bg-[oklch(0.965_0.004_75)] px-3 py-1 font-medium text-zinc-600 hover:bg-[oklch(0.965_0.004_75)]">
                        {project.type}
                      </Badge>
                      <Badge
                        className="rounded-full border-orange-200 bg-[oklch(0.985_0.028_55)] px-3 py-1 font-medium text-orange-700"
                        variant="outline"
                      >
                        {project.role}
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-display font-semibold text-3xl leading-tight sm:text-4xl">
                        {project.title}
                      </h3>
                      <p className="max-w-2xl text-base text-zinc-600 leading-7">
                        {project.description}
                      </p>
                    </div>

                    <div className="grid gap-3 border-zinc-200 border-y py-4 sm:grid-cols-2">
                      <div>
                        <p className="font-medium text-xs text-zinc-500 uppercase tracking-[0.16em]">
                          Constraint
                        </p>
                        <p className="mt-2 font-medium text-sm text-zinc-800 leading-6">
                          {project.proof}
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-xs text-zinc-500 uppercase tracking-[0.16em]">
                          Result
                        </p>
                        <p className="mt-2 font-medium text-sm text-zinc-800 leading-6">
                          {project.outcome}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          className="rounded-full border-zinc-200 bg-white px-3 py-1 font-medium text-xs text-zinc-600"
                          key={tech}
                          variant="outline"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {project.liveUrl ? (
                    <Button
                      asChild
                      className="h-10 w-full rounded-md border-2 border-orange-200 bg-orange-600 px-5 font-semibold text-orange-50 transition-[transform,background-color,border-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-orange-700 active:scale-[0.98] sm:w-fit"
                      size="sm"
                    >
                      <Link
                        href={project.liveUrl}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View live project
                      </Link>
                    </Button>
                  ) : (
                    <span className="inline-flex h-10 w-full items-center justify-center rounded-md border-2 border-zinc-200 bg-zinc-100 px-5 font-semibold text-sm text-zinc-500 sm:w-fit">
                      {project.availabilityLabel}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(240px,0.72fr)_minmax(0,1.8fr)] lg:items-start">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border border-zinc-200 bg-[oklch(0.995_0.004_75)] px-4 py-2 font-medium text-sm text-zinc-600">
                {otherProjects.length} additional builds
              </div>
              <div className="space-y-3">
                <h3 className="font-display font-semibold text-3xl leading-tight sm:text-4xl">
                  Smaller builds that sharpened specific product skills.
                </h3>
                <p className="max-w-xl text-base text-zinc-600 leading-7">
                  Focused projects for React architecture, browser extension
                  behavior, and spatial interfaces.
                </p>
              </div>
            </div>

            <div className="grid gap-3">
              <div className="mb-1 flex items-center justify-between gap-4">
                <h4 className="font-display font-semibold text-2xl leading-tight">
                  Currently Building
                </h4>
                <span className="rounded-full border border-orange-200 bg-[oklch(0.985_0.028_55)] px-3 py-1 font-medium text-[0.7rem] text-orange-700">
                  Active
                </span>
              </div>
              {currentlyBuildingProjects.map((project, index) => (
                <article
                  className="compact-project-card grid gap-4 rounded-[1.125rem] border border-orange-200 bg-[oklch(0.995_0.008_55)] p-3 shadow-[0_1px_2px_rgb(9_9_11/0.04)] sm:grid-cols-[168px_minmax(0,1fr)] sm:p-4"
                  key={project.id}
                  style={{ '--project-index': index } as React.CSSProperties}
                >
                  <div className="relative grid aspect-[1.45/1] overflow-hidden rounded-xl border border-zinc-200 bg-[oklch(0.94_0.004_75)] p-4 text-zinc-500 sm:aspect-auto sm:min-h-32">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,oklch(0.99_0.004_75/0.72),transparent_34%),linear-gradient(135deg,oklch(0.97_0.004_75/0.72),transparent_55%)]" />
                    <div className="flex items-start justify-between">
                      <div className="relative grid size-9 place-items-center rounded-lg border border-zinc-200 bg-[oklch(0.985_0.004_75)] font-semibold text-sm text-zinc-500">
                        WIP
                      </div>
                      <span className="relative rounded-full border border-zinc-200 bg-[oklch(0.985_0.004_75)] px-2.5 py-1 font-medium text-[0.68rem] text-zinc-500">
                        Draft
                      </span>
                    </div>
                    <div className="relative mt-auto space-y-2">
                      <div className="h-2 w-3/4 rounded-full bg-zinc-300/70" />
                      <div className="h-2 w-1/2 rounded-full bg-zinc-300/50" />
                      <div className="grid grid-cols-3 gap-1.5 pt-1">
                        <span className="h-7 rounded-md bg-[oklch(0.985_0.004_75)]/70" />
                        <span className="h-7 rounded-md bg-[oklch(0.985_0.004_75)]/70" />
                        <span className="h-7 rounded-md bg-[oklch(0.985_0.004_75)]/70" />
                      </div>
                    </div>
                  </div>

                  <div className="min-w-0 space-y-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-medium text-orange-600 text-sm">
                          {project.role}
                        </p>
                        <Badge className="rounded-full border-orange-200 bg-[oklch(0.985_0.028_55)] px-2.5 py-1 font-medium text-[0.68rem] text-orange-700">
                          In progress
                        </Badge>
                      </div>
                      <h4 className="mt-1 font-display font-semibold text-2xl leading-tight">
                        {project.title}
                      </h4>
                    </div>
                    <p className="max-w-2xl text-sm text-zinc-600 leading-6">
                      {project.outcome}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          className="rounded-full border-zinc-200 bg-white px-2.5 py-1 font-medium text-[0.7rem] text-zinc-600"
                          key={tech}
                          variant="outline"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </article>
              ))}

              <h4 className="pt-5 font-display font-semibold text-2xl leading-tight">
                Other Projects
              </h4>
              {otherProjects.map((project, index) => (
                <article
                  className="compact-project-card grid gap-4 rounded-[1.125rem] border border-zinc-200 bg-[oklch(0.995_0.004_75)] p-3 shadow-[0_1px_2px_rgb(9_9_11/0.04)] sm:grid-cols-[168px_minmax(0,1fr)] sm:p-4"
                  key={project.id}
                  style={{ '--project-index': index } as React.CSSProperties}
                >
                  <div className="relative aspect-[1.45/1] overflow-hidden rounded-xl bg-zinc-100 sm:aspect-auto sm:min-h-32">
                    <Image
                      alt={`${project.title} project screenshot`}
                      className="project-image-motion object-cover object-top"
                      fill
                      sizes="(max-width: 640px) 100vw, 168px"
                      src={project.image}
                    />
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0 space-y-3">
                      <div>
                        <p className="font-medium text-orange-600 text-sm">
                          {project.type}
                        </p>
                        <h4 className="mt-1 font-display font-semibold text-2xl leading-tight">
                          {project.title}
                        </h4>
                      </div>
                      <p className="max-w-2xl text-sm text-zinc-600 leading-6">
                        {project.outcome}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            className="rounded-full border-zinc-200 bg-white px-2.5 py-1 font-medium text-[0.7rem] text-zinc-600"
                            key={tech}
                            variant="outline"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex shrink-0 gap-2 sm:flex-col">
                      {project.liveUrl && (
                        <Button
                          asChild
                          className="h-9 rounded-md px-3 font-semibold transition-[transform,background-color,border-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.98]"
                          size="sm"
                        >
                          <Link
                            href={project.liveUrl}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <ExternalLink className="mr-2 h-3.5 w-3.5" />
                            Live
                          </Link>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          asChild
                          className="h-9 rounded-md bg-transparent px-3 font-semibold transition-[transform,background-color,border-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.98]"
                          size="sm"
                          variant="outline"
                        >
                          <Link
                            href={project.githubUrl}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <Github className="mr-2 h-3.5 w-3.5" />
                            Code
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
