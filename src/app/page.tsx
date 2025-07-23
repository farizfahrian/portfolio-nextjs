import Image from 'next/image';
import Button from '@/components/Button';
import Chip from '@/components/Chip';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { MarqueeImage } from '@/components/MarqueeImage';
import Portfolio from '@/components/Portfolio';
// import ProjectCard from '@/components/ProjectCard'
import SkillCard from '@/components/SkillCard';
import { Skills } from '@/components/Skills';
import TrainingTimeline from '@/components/TrainingTimeline';
import ContactSection from '@/components/ContactSection';

// const projects = [
//     {
//         imgsrc: '/assets/images/uwgm.png',
//         chiptext: 'Event Website',
//         title: 'UWGM Run Festival | Event Registration Platform',
//         roles: 'UI/UX Designer & Backend Developer',
//         teamSize: '3-Person Team',
//         deliveryTime: '4 weeks',
//         desc: 'Designed and developed a fully functional registration system with automated email confirmations, QR-based check-ins, secure payments, and an intuitive admin dashboard. Ensured seamless user experience.',
//         tools: [
//             'Laravel',
//             'Tailwind',
//             'Alpinejs',
//             'MySQL',
//             'Filament',
//             'Midtrans'
//         ],
//         urlLink: 'https://uwgmrunfestival.com'
//     },
//     {
//         imgsrc: '/assets/images/nps.png',
//         chiptext: 'Profile Company',
//         title: 'Nusantara Prima Solusi | Company Profile Website',
//         roles: 'Wordpress Developer',
//         teamSize: '3-Person Team',
//         deliveryTime: '4 weeks',
//         desc: 'Developed a company profile website for Nusantara Prima Solusi, a Palm Oil company, showcasing their products and services in a modern, responsive, and user-friendly interface.',
//         tools: [
//             'Wordpress',
//         ],
//         urlLink: 'https://gray-bison-645847.hostingersite.com'
//     },
//     {
//         imgsrc: '/assets/images/Activest.png',
//         chiptext: 'Event Website',
//         title: 'Active Festival | Event Registration Platform',
//         roles: 'Full Stack Developer',
//         teamSize: '3-Person Team',
//         deliveryTime: '4 weeks',
//         desc: 'Streamlined a high-performance registration system managing 1,500+ registrations with minimal resources (1GB RAM, single-core server). Delivered key features: automated email confirmations, QR-based check-ins, secure payments, and an intuitive admin dashboard. Ensured zero downtime during peak traffic while supporting hundreds of concurrent users.',
//         tools: [
//             'Laravel',
//             'Tailwind',
//             'Alpinejs',
//             'MySQL',
//             'Filament',
//             'Midtrans'
//         ],
//         urlLink: 'https://activefestsmr.com'
//     },
//     {
//         imgsrc: '/assets/images/Al-Mazaya.png',
//         chiptext: 'School Website',
//         title: 'Al Mazaya | School Management Platform',
//         roles: 'UI/UX Designer & Project Manager',
//         teamSize: '3-Person Team',
//         deliveryTime: '4 weeks',
//         desc: 'Designed a school registration system to enhance accessibility for users with diverse tech literacy levels. Simplified the enrollment process and optimized information architecture. Delivered high-fidelity prototypes that improved the experience for parents and staff. Effectively managed timelines and team collaboration to meet stakeholder expectations.',
//         tools: ['Figma', 'Notion'],
//         urlLink:
//             'https://www.figma.com/design/fuAWQVZXpNVp4iDQyOfMZW/Al-Mazaya-Paser?node-id=0-1&t=K4loj3LluqKX01k3-1'
//     },
//     {
//         imgsrc: '/assets/images/Sirkel.png',
//         chiptext: 'Landing Page',
//         title: 'Digital Marketing Agency Landing Page: Sirkel',
//         roles: 'UI/UX Designer & Frontend Developer',
//         teamSize: '3-Person Team',
//         deliveryTime: '4 weeks',
//         desc: 'Designed and developed a visually engaging and functional landing page for a digital marketing agency. Focused on creating a user-centric interface that effectively communicates the agency’s services and brand identity. Implemented responsive design to ensure seamless performance across devices.',
//         tools: ['React', 'Tailwind', 'Figma', 'Sanity'],
//         urlLink: 'https://snow-gorilla-383164.hostingersite.com/'
//     },
//     {
//         imgsrc: '/assets/images/Kaltimfolks.png',
//         chiptext: 'News Website',
//         title: 'News Media Website: Kaltimfolks',
//         roles: 'Frontend Developer',
//         teamSize: '3-Person Team',
//         deliveryTime: '4 weeks',
//         desc: 'Developed a comprehensive news media platform, crafting wireframes and high-fidelity mockups to visualize user journeys and information architecture. Designed an intuitive user interface to enhance navigation and content discoverability. Implemented a responsive front-end and managed hosting and server configuration to ensure a high-performing and scalable web application.',
//         tools: ['Nextjs', 'Tailwind', 'MongoDB', 'Prisma', 'Sanity'],
//         urlLink: 'https://kaltimfolks.com'
//     },
//     {
//         imgsrc: '/assets/images/Graviton.png',
//         chiptext: 'Landing Page',
//         title: 'Software Agency Landing Page: Graviton Softworks',
//         roles: 'UI/UX Designer & Frontend Developer',
//         teamSize: '3-Person Team',
//         deliveryTime: '4 weeks',
//         desc: 'Collaborated with stakeholders to design and develop a modern landing page for a software agency. Delivered a high-quality, responsive web interface that showcases the company’s expertise and portfolio, using scalable and performance-optimized technologies.',
//         tools: ['Nextjs', 'React', 'Figma', 'Tailwind', 'Sanity'],
//         urlLink: 'https://gravitonsoftworks.com'
//     },
//     {
//         imgsrc: '/assets/images/Davila.png',
//         chiptext: 'Profile Company',
//         title: 'Digital Marketing Profile Company: Davila',
//         roles: 'Frontend Developer',
//         teamSize: '3-Person Team',
//         deliveryTime: '4 weeks',
//         desc: 'Developed a responsive company profile website to highlight the brand identity and services of a digital marketing firm. Ensured smooth navigation and performance optimization for a professional user experience.',
//         tools: ['Laravel', 'React', 'Tailwind', 'Sanity'],
//         urlLink: 'https://davila.id'
//     }
// ]

function Home() {
  return (
    <>
      <section>
        <div className="relative m-3 rounded-[1.25rem] border-zinc-200 bg-gray-100 pt-6 pb-4 text-zinc-950 sm:m-6 md:pt-10 md:pb-8 lg:pt-14 xl:pt-20">
          <div className="mb-24 px-3">
            <div className="mb-2 flex w-full justify-center">
              <Chip
                className="text-[0.75rem]"
                text="Software Engineer •  UI/UX Designer"
              />
            </div>
            <div className="mb-4 text-center lg:mb-6">
              <h1 className="mx-auto max-w-[1170px] font-semibold text-4xl leading-[2.5rem] max-[415px]:text-3xl max-[415px]:leading-[2rem] lg:text-[3.5rem] lg:leading-[3.9rem] xl:text-[4rem] xl:leading-[4.4375rem]">
                Designing with Purpose, <br /> Coding with Precision.
              </h1>
              <p className="mx-auto mt-2 max-w-[322px] font-medium text-sm text-zinc-600 lg:max-w-[526px] xl:mt-4">
                A curious creator blending empathy and logic to craft digital
                solutions that solve real problems and inspire meaningful
                connections.
              </p>
            </div>
            <div className="mb-11 flex w-full justify-center gap-4 max-[415px]:flex-col max-[415px]:gap-2">
              <Button link="mailto:farizfhrian@gmail.com" />
              <div className="flex items-center justify-center gap-2">
                <Button
                  iconOnly={true}
                  link="https://github.com/farizfahrian"
                  trailingIcon="/assets/icons/Github.svg"
                  variant="ghost"
                />
                <Button
                  iconOnly={true}
                  link="https://linkedin.com/in/fariz-fahrian-60a75014a"
                  trailingIcon="/assets/icons/Linkedin.svg"
                  variant="ghost"
                />
                <Button
                  iconOnly={true}
                  link="/assets/CV-Fariz_Fahrian.pdf"
                  trailingIcon="/assets/icons/CV.svg"
                  variant="ghost"
                />
              </div>
            </div>
          </div>
          <Image
            alt=""
            className="absolute right-[20px] bottom-[160px] h-auto w-[72px] sm:right-[30px] sm:bottom-[160px] sm:w-[96px] md:right-[50px] md:bottom-[170px] lg:right-[50px] lg:bottom-[190px]"
            height={42}
            src="/assets/images/Mywork-arrow.png"
            width={96}
          />
          <MarqueeImage />
        </div>
      </section>
      <section>
        <div className="mx-3 my-20 flex flex-col items-center justify-center text-center sm:mx-auto">
          <h2 className="mb-2 font-display font-semibold text-3xl sm:text-5xl">
            What I&apos;m Good At
          </h2>
          <p className="max-w-[510px] text-muted-foreground text-sm leading-normal sm:text-base sm:leading-relaxed">
            Bringing together technical expertise and creative problem-solving
            to deliver impactful solutions.
          </p>
          <div className="mt-10 flex flex-col gap-8 sm:flex-row">
            <SkillCard
              desc="Building reliable web applications is where I excel, combining clean structured code, and optimized performance throughout development."
              imgsrc="/assets/images/skill-software.png"
              title="Software Development"
            />
            <SkillCard
              desc="Creating thoughtful user-focused designs is my strength, blending creativity, deep user empathy, and practical functionality seamlessly."
              imgsrc="/assets/images/skill-design.png"
              title="UI/UX Design"
            />
            <SkillCard
              desc="Optimizing workflows is what I consistently do best, using AI tools to boost productivity and substantially improve my overall efficiency."
              imgsrc="/assets/images/skill-ai.png"
              title="Making Use of AI"
            />
          </div>
        </div>
      </section>
      {/* <section>
                <div className='max-w-[1400px] mx-3 sm:my-6 sm:mx-auto'>
                    <h2 className='font-display text-3xl leading-tight sm:text-4xl my-6 sm:leading-[3.9rem] font-semibold'>
                        Recent Projects
                    </h2>
                    <div className='space-y-4'>
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                imgsrc={project.imgsrc}
                                chiptext={project.chiptext}
                                title={project.title}
                                roles={project.roles}
                                // teamSize={project.teamSize}
                                // deliveryTime={project.deliveryTime}
                                desc={project.desc}
                                tools={project.tools}
                                urlLink={project.urlLink}
                            />
                        ))}
                    </div>
                </div>
            </section> */}
      <section>
        <div className="mx-3 max-w-[1400px] sm:mx-auto sm:my-6">
          <Skills />
        </div>
      </section>
      <section>
        <Portfolio />
      </section>
      <section>
        <div className="mx-3 my-4 max-w-[1400px] sm:mx-auto sm:my-6">
          <div className="mx-auto max-w-7xl px-4 py-4 text-left sm:py-10 sm:text-center md:px-8 lg:px-10">
            <h2 className="mb-2 font-display font-semibold text-3xl sm:text-5xl">
              My Professional Journey
            </h2>
            <p className="mx-auto max-w-md text-base text-muted-foreground md:text-base dark:text-neutral-300">
              Here&apos;s a timeline of my career journey, highlighting key
              experiences and achievements along the way.
            </p>
          </div>
          <div className="space-y-4">
            <ExperienceTimeline />
          </div>
        </div>
      </section>
      <section>
        <div className="mx-3 my-4 max-w-[1400px] sm:mx-auto sm:my-6">
          <div className="mx-auto max-w-7xl px-4 py-4 text-left sm:py-10 sm:text-center md:px-8 lg:px-10">
            <h2 className="mb-2 font-display font-semibold text-3xl sm:text-5xl">
              My Training and Achievement
            </h2>
            <p className="mx-auto max-w-md text-base text-muted-foreground md:text-base dark:text-neutral-300">
              Here&apos;s a timeline of my career journey, highlighting key
              experiences and achievements along the way.
            </p>
          </div>
          <div className="space-y-4">
            <TrainingTimeline />
          </div>
        </div>
        <ContactSection />
      </section>
    </>
  );
}

export default Home;
