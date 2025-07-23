import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const projects = [
  {
    id: 1,
    title: 'UWGM Run Festival | Event Registration Platform',
    description:
      'Designed and developed a fully functional registration system with automated email confirmations, QR-based check-ins, secure payments, and an intuitive admin dashboard. Ensured seamless user experience.',
    image: '/assets/images/uwgm.png?height=200&width=400',
    technologies: [
      'Laravel',
      'Tailwind',
      'Alpinejs',
      'MySQL',
      'Filament',
      'Midtrans',
    ],
    liveUrl: 'https://uwgmrunfestival.com',
    githubUrl: '',
    realProject: true,
  },
  {
    id: 2,
    title: 'Nusantara Prima Solusi | Company Profile Website',
    description:
      'Developed a company profile website for Nusantara Prima Solusi, a Palm Oil company, showcasing their products and services in a modern, responsive, and user-friendly interface.',
    image: '/assets/images/nps.png?height=200&width=400',
    technologies: ['Wordpress'],
    liveUrl: 'https://gray-bison-645847.hostingersite.com',
    githubUrl: '',
    realProject: true,
  },
  {
    id: 3,
    title: 'Active Festival | Event Registration Platform',
    description:
      'Streamlined a high-performance registration system managing 1,500+ registrations with minimal resources (1GB RAM, single-core server). Delivered key features: automated email confirmations, QR-based check-ins, secure payments, and an intuitive admin dashboard. Ensured zero downtime during peak traffic while supporting hundreds of concurrent users.',
    image: '/assets/images/Activest.png?height=200&width=400',
    technologies: [
      'Laravel',
      'Tailwind',
      'Alpinejs',
      'MySQL',
      'Filament',
      'Midtrans',
    ],
    liveUrl: 'https://activefestsmr.com',
    githubUrl: '',
    realProject: true,
  },
  {
    id: 4,
    title: 'Al Mazaya | School Management Platform',
    description:
      'Designed a school registration system to enhance accessibility for users with diverse tech literacy levels. Simplified the enrollment process and optimized information architecture. Delivered high-fidelity prototypes that improved the experience for parents and staff. Effectively managed timelines and team collaboration to meet stakeholder expectations.',
    image: '/assets/images/Al-Mazaya.png?height=200&width=400',
    technologies: ['Figma', 'Notion'],
    liveUrl:
      'https://www.figma.com/design/fuAWQVZXpNVp4iDQyOfMZW/Al-Mazaya-Paser?node-id=0-1&t=K4loj3LluqKX01k3-1',
    githubUrl: '',
    realProject: true,
  },
  {
    id: 5,
    title: 'Digital Marketing Agency Landing Page: Sirkel',
    description:
      'Designed and developed a visually engaging and functional landing page for a digital marketing agency. Focused on creating a user-centric interface that effectively communicates the agency’s services and brand identity. Implemented responsive design to ensure seamless performance across devices.',
    image: '/assets/images/Sirkel.png?height=200&width=400',
    technologies: ['React', 'Tailwind', 'Figma', 'Sanity'],
    liveUrl: 'https://snow-gorilla-383164.hostingersite.com/',
    githubUrl: '',
    realProject: true,
  },
  {
    id: 6,
    title: 'News Media Website: Kaltimfolks',
    description:
      'Developed a comprehensive news media platform, crafting wireframes and high-fidelity mockups to visualize user journeys and information architecture. Designed an intuitive user interface to enhance navigation and content discoverability. Implemented a responsive front-end and managed hosting and server configuration to ensure a high-performing and scalable web application.',
    image: '/assets/images/Kaltimfolks.png?height=200&width=400',
    technologies: ['Nextjs', 'Tailwind', 'MongoDB', 'Prisma', 'Sanity'],
    liveUrl: 'https://kaltimfolks.com',
    githubUrl: '',
    realProject: true,
  },
  {
    id: 7,
    title: 'Software Agency Landing Page: Graviton Softworks',
    description:
      'Collaborated with stakeholders to design and develop a modern landing page for a software agency. Delivered a high-quality, responsive web interface that showcases the company’s expertise and portfolio, using scalable and performance-optimized technologies.',
    image: '/assets/images/Graviton.png?height=200&width=400',
    technologies: ['Nextjs', 'React', 'Figma', 'Tailwind', 'Sanity'],
    liveUrl: 'https://gravitonsoftworks.com',
    githubUrl: '',
    realProject: true,
  },
  {
    id: 8,
    title: 'Digital Marketing Profile Company: Davila',
    description:
      'Developed a responsive company profile website to highlight the brand identity and services of a digital marketing firm. Ensured smooth navigation and performance optimization for a professional user experience.',
    image: '/assets/images/Davila.png?height=200&width=400',
    technologies: ['Laravel', 'React', 'Tailwind', 'Sanity'],
    liveUrl: 'https://davila.id',
    githubUrl: '',
    realProject: true,
  },
  // Fake Mini Projects
  {
    id: 9,
    title: 'Forum Discussion App',
    description:
      'A forum-style discussion application built during the Dicoding React Expert class. Users can create topics, post comments, and like discussions in a Twitter-like interface.',
    image: '/assets/images/forum-discussion-app.png',
    technologies: ['React', 'Context API', 'React Router', 'Tailwind CSS'],
    liveUrl: 'https://forum-discussion-app-eta.vercel.app',
    githubUrl: 'https://github.com/farizfahrian/Forum-Discussion-App',
    realProject: false,
  },
  {
    id: 10,
    title: 'Catalyst Web Extension',
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
];

export default function PortfolioSection() {
  const featuredProjects = projects.filter((project) => project.realProject);
  const otherProjects = projects.filter((project) => !project.realProject);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-12 text-center">
        <h2 className="mb-4 font-bold text-2xl md:text-4xl">
          Featured Projects
        </h2>
        <p className="mx-auto max-w-2xl text-base text-muted-foreground">
          Here are some of my recent projects that showcase my skills in web
          development, design, and problem-solving. Each project represents a
          unique challenge.
        </p>
      </div>

      {/* Featured Projects */}
      <div className="mb-16 grid gap-8 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <Card
            className="group flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-lg"
            key={project.id}
          >
            <div className="relative overflow-hidden">
              <Image
                alt={project.title}
                className="h-48 w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                height={200}
                src={project.image || '/placeholder.svg'}
                width={400}
              />
              <div className="absolute top-4 left-4">
                <Badge
                  className="bg-primary text-primary-foreground"
                  variant="secondary"
                >
                  Real Project
                </Badge>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge className="text-xs" key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="mt-auto flex gap-3">
              {project.liveUrl && (
                <Button asChild className="flex-1" size="sm">
                  <Link
                    href={project.liveUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Other Projects */}
      <div className="mb-8">
        <h3 className="mb-6 font-bold text-2xl">Other Projects</h3>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {otherProjects.map((project) => (
          <Card
            className="group flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-md"
            key={project.id}
          >
            <div className="relative overflow-hidden">
              <Image
                alt={project.title}
                className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                height={200}
                src={project.image || '/placeholder.svg'}
                width={400}
              />
            </div>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{project.title}</CardTitle>
              <CardDescription className="line-clamp-3 text-sm">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 3).map((tech) => (
                  <Badge className="text-xs" key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 3 && (
                  <Badge className="text-xs" variant="outline">
                    +{project.technologies.length - 3}
                  </Badge>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex gap-2 pt-0">
              {project.liveUrl && (
                <Button asChild className="flex-1" size="sm">
                  <Link
                    href={project.liveUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <ExternalLink className="mr-1 h-3 w-3" />
                    Live
                  </Link>
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  asChild
                  className="flex-1 bg-transparent"
                  size="sm"
                  variant="outline"
                >
                  <Link
                    href={project.githubUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg
                      className="lucide lucide-github-icon lucide-github"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    GitHub
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      
    </section>
  );
}
