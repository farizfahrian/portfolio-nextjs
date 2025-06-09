import Chip from '@/components/Chip'
import Button from '@/components/Button'
import { MarqueeImage } from '@/components/MarqueeImage'
import ProjectCard from '@/components/ProjectCard'
import SkillCard from '@/components/SkillCard'
import Image from 'next/image'

const projects = [
    {
        imgsrc: '/assets/images/uwgm.png',
        chiptext: 'Event Website',
        title: 'UWGM Run Festival | Event Registration Platform',
        roles: 'UI/UX Designer & Backend Developer',
        teamSize: '3-Person Team',
        deliveryTime: '4 weeks',
        desc: 'Designed and developed a fully functional registration system with automated email confirmations, QR-based check-ins, secure payments, and an intuitive admin dashboard. Ensured seamless user experience.',
        tools: [
            'Laravel',
            'Tailwind',
            'Alpinejs',
            'MySQL',
            'Filament',
            'Midtrans'
        ],
        urlLink: 'https://uwgmrunfestival.com'
    },
    {
        imgsrc: '/assets/images/nps.png',
        chiptext: 'Profile Company',
        title: 'Nusantara Prima Solusi | Company Profile Website',
        roles: 'Wordpress Developer',
        teamSize: '3-Person Team',
        deliveryTime: '4 weeks',
        desc: 'Developed a company profile website for Nusantara Prima Solusi, a Palm Oil company, showcasing their products and services in a modern, responsive, and user-friendly interface.',
        tools: [
            'Wordpress',
        ],
        urlLink: 'https://gray-bison-645847.hostingersite.com'
    },
    {
        imgsrc: '/assets/images/Activest.png',
        chiptext: 'Event Website',
        title: 'Active Festival | Event Registration Platform',
        roles: 'Full Stack Developer',
        teamSize: '3-Person Team',
        deliveryTime: '4 weeks',
        desc: 'Streamlined a high-performance registration system managing 1,500+ registrations with minimal resources (1GB RAM, single-core server). Delivered key features: automated email confirmations, QR-based check-ins, secure payments, and an intuitive admin dashboard. Ensured zero downtime during peak traffic while supporting hundreds of concurrent users.',
        tools: [
            'Laravel',
            'Tailwind',
            'Alpinejs',
            'MySQL',
            'Filament',
            'Midtrans'
        ],
        urlLink: 'https://activefestsmr.com'
    },
    {
        imgsrc: '/assets/images/Al-Mazaya.png',
        chiptext: 'School Website',
        title: 'Al Mazaya | School Management Platform',
        roles: 'UI/UX Designer & Project Manager',
        teamSize: '3-Person Team',
        deliveryTime: '4 weeks',
        desc: 'Designed a school registration system to enhance accessibility for users with diverse tech literacy levels. Simplified the enrollment process and optimized information architecture. Delivered high-fidelity prototypes that improved the experience for parents and staff. Effectively managed timelines and team collaboration to meet stakeholder expectations.',
        tools: ['Figma', 'Notion'],
        urlLink:
            'https://www.figma.com/design/fuAWQVZXpNVp4iDQyOfMZW/Al-Mazaya-Paser?node-id=0-1&t=K4loj3LluqKX01k3-1'
    },
    {
        imgsrc: '/assets/images/Sirkel.png',
        chiptext: 'Landing Page',
        title: 'Digital Marketing Agency Landing Page: Sirkel',
        roles: 'UI/UX Designer & Frontend Developer',
        teamSize: '3-Person Team',
        deliveryTime: '4 weeks',
        desc: 'Designed and developed a visually engaging and functional landing page for a digital marketing agency. Focused on creating a user-centric interface that effectively communicates the agency’s services and brand identity. Implemented responsive design to ensure seamless performance across devices.',
        tools: ['React', 'Tailwind', 'Figma', 'Sanity'],
        urlLink: 'https://snow-gorilla-383164.hostingersite.com/'
    },
    {
        imgsrc: '/assets/images/Kaltimfolks.png',
        chiptext: 'News Website',
        title: 'News Media Website: Kaltimfolks',
        roles: 'Frontend Developer',
        teamSize: '3-Person Team',
        deliveryTime: '4 weeks',
        desc: 'Developed a comprehensive news media platform, crafting wireframes and high-fidelity mockups to visualize user journeys and information architecture. Designed an intuitive user interface to enhance navigation and content discoverability. Implemented a responsive front-end and managed hosting and server configuration to ensure a high-performing and scalable web application.',
        tools: ['Nextjs', 'Tailwind', 'MongoDB', 'Prisma', 'Sanity'],
        urlLink: 'https://kaltimfolks.com'
    },
    {
        imgsrc: '/assets/images/Graviton.png',
        chiptext: 'Landing Page',
        title: 'Software Agency Landing Page: Graviton Softworks',
        roles: 'UI/UX Designer & Frontend Developer',
        teamSize: '3-Person Team',
        deliveryTime: '4 weeks',
        desc: 'Collaborated with stakeholders to design and develop a modern landing page for a software agency. Delivered a high-quality, responsive web interface that showcases the company’s expertise and portfolio, using scalable and performance-optimized technologies.',
        tools: ['Nextjs', 'React', 'Figma', 'Tailwind', 'Sanity'],
        urlLink: 'https://gravitonsoftworks.com'
    },
    {
        imgsrc: '/assets/images/Davila.png',
        chiptext: 'Profile Company',
        title: 'Digital Marketing Profile Company: Davila',
        roles: 'Frontend Developer',
        teamSize: '3-Person Team',
        deliveryTime: '4 weeks',
        desc: 'Developed a responsive company profile website to highlight the brand identity and services of a digital marketing firm. Ensured smooth navigation and performance optimization for a professional user experience.',
        tools: ['Laravel', 'React', 'Tailwind', 'Sanity'],
        urlLink: 'https://davila.id'
    }
]

function Home () {
    return (
        <>
            <section>
                <div className='relative font-body border-zinc-200 rounded-[1.25rem] pt-6 md:pt-10 lg:pt-14 pb-4 md:pb-8 xl:pt-20 text-zinc-950 bg-gray-100 m-3 sm:m-6'>
                    <div className='px-3 mb-24'>
                        <div className='flex justify-center w-full mb-2'>
                            <Chip
                                className='text-[0.75rem]'
                                text='Software Engineer •  UI/UX Designer'
                            />
                        </div>
                        <div className='mb-4 text-center lg:mb-6'>
                            <h1 className='font-display max-w-[1170px] mx-auto max-[415px]:text-2xl max-[415px]:leading-[1.7rem] text-4xl leading-[2.5rem] lg:text-[3.5rem] lg:leading-[3.9rem] xl:text-[4rem] xl:leading-[4.4375rem] font-semibold'>
                                Designing with Purpose, <br /> Coding with
                                NextJs.
                            </h1>
                            <p className='font-body max-w-[322px] lg:max-w-[526px] mx-auto text-sm mt-2 xl:mt-4 text-zinc-600 font-medium'>
                                A curious creator blending empathy and logic to
                                craft digital solutions that solve real problems
                                and inspire meaningful connections.
                            </p>
                        </div>
                        <div className='w-full flex max-[415px]:flex-col justify-center max-[415px]:gap-2 gap-4 mb-11'>
                            <Button link='mailto:farizfhrian@gmail.com' />
                            <div className='flex items-center justify-center'>
                                <Button
                                    link='https://github.com/farizfahrian'
                                    trailingIcon='/assets/icons/Github.svg'
                                    variant='ghost'
                                    iconOnly={true}
                                />
                                <Button
                                    link='https://linkedin.com/in/fariz-fahrian-60a75014a'
                                    trailingIcon='/assets/icons/Linkedin.svg'
                                    variant='ghost'
                                    iconOnly={true}
                                />
                                <Button
                                    link='/assets/CV-Fariz_Fahrian.pdf'
                                    trailingIcon='/assets/icons/CV.svg'
                                    variant='ghost'
                                    iconOnly={true}
                                />
                            </div>
                        </div>
                    </div>
                    <Image
                        width={96}
                        height={42}
                        className='absolute bottom-[160px] right-[20px] w-[72px] sm:w-[96px] h-auto sm:bottom-[160px] sm:right-[30px] md:bottom-[170px] md:right-[50px] lg:bottom-[190px] lg:right-[50px]'
                        src='/assets/images/Mywork-arrow.png'
                        alt=''
                    />
                    <MarqueeImage />
                </div>
            </section>
            <section>
                <div className='flex justify-center items-center flex-col mx-3 sm:mx-auto my-24 text-center'>
                    <h2 className='font-display text-xl leading-tight sm:text-5xl mb-2 sm:leading-[3.9rem] font-semibold'>
                        What I&apos;m Good At
                    </h2>
                    <p className='font-body leading-tight max-w-[510px]'>
                        Bringing together technical expertise and creative
                        problem-solving to deliver impactful solutions.
                    </p>
                    <div className='flex flex-col gap-8 mt-10 sm:flex-row'>
                        <SkillCard
                            imgsrc='/assets/images/skill-software.png'
                            title='Software Development'
                            desc='Building reliable web applications is where I excel, combining clean structured code, and optimized performance throughout development.'
                        />
                        <SkillCard
                            imgsrc='/assets/images/skill-design.png'
                            title='UI/UX Design'
                            desc='Creating thoughtful user-focused designs is my strength, blending creativity, deep user empathy, and practical functionality seamlessly.'
                        />
                        <SkillCard
                            imgsrc='/assets/images/skill-ai.png'
                            title='Making Use of AI'
                            desc='Optimizing workflows is what I consistently do best, using AI tools to boost productivity and substantially improve my overall efficiency.'
                        />
                    </div>
                </div>
            </section>
            <section>
                <div className='max-w-[1400px] mx-3 sm:my-6 sm:mx-auto'>
                    <h2 className='font-display text-xl leading-tight sm:text-4xl my-6 sm:leading-[3.9rem] font-semibold'>
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
            </section>
        </>
    )
}

export default Home
