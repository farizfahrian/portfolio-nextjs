import Image from 'next/image'
import Button from './Button'
import Chip from './Chip'

const toolIcons: Record<string, string> = {
    Laravel: '/assets/icons/Laravel.svg',
    MySQL: '/assets/icons/MySQL.svg',
    React: '/assets/icons/Reactjs.svg',
    Alpinejs: '/assets/icons/Alpinejs.svg',
    Figma: '/assets/icons/Figma.svg',
    Filament: '/assets/icons/Filament.svg',
    Midtrans: '/assets/icons/Midtrans.svg',
    MongoDB: '/assets/icons/MongoDB.svg',
    Nextjs: '/assets/icons/Nextjs.svg',
    Notion: '/assets/icons/Notion.svg',
    Prisma: '/assets/icons/Prisma.svg',
    Sanity: '/assets/icons/Sanity.svg',
    Tailwind: '/assets/icons/Tailwind.svg',
    Wordpress: '/assets/icons/Wordpress.svg',
    // Default fallback for unrecognized tools
    default: '/assets/icons/Laravel.svg'
}

const getToolIcon = (tool: string): string =>
    toolIcons[tool] || toolIcons.default

type CardProps = {
    imgsrc: string
    chiptext: string
    title: string
    roles: string
    // teamSize: string
    // deliveryTime: string
    desc: string
    tools: string[]
    urlLink: string
}

const ProjectCard = ({
    imgsrc,
    chiptext,
    title,
    roles,
    // teamSize,
    // deliveryTime,
    desc,
    tools,
    urlLink
}: CardProps) => {
    return (
        <div className='flex flex-col font-body min-[1170px]:flex-row gap-3 md:gap-6 sm:gap-9 p-3 md:p-6 lg:p-8 xl:px-14 xl:py-10 bg-zinc-100/60 shadow-sm rounded-[18px]'>
            <Image
                src={imgsrc}
                width={572}
                height={381}
                className='w-full min-[1170px]:max-w-[572px] h-auto aspect-[1.5/1]'
                alt='project image'
            />
            <div className='flex flex-col justify-between'>
                <div className='text-zinc-600'>
                    <Chip text={chiptext} />
                    <h3 className='font-display my-2 text-zinc-950 sm:text-2xl text-xl leading-[1.1] font-semibold'>
                        {title}
                    </h3>
                    <div className='text-sm'>
                        <div className='flex flex-col flex-wrap gap-2 my-2 sm:flex-row'>
                            <div className='flex gap-2 w-fit'>
                                <Image src='/assets/icons/Document.svg' alt='' width={20} height={20} />
                                <p>{roles}</p>
                            </div>
                            {/* <div className='flex gap-2 w-fit'>
                                <img src='/assets/icons/People.svg' alt='' />
                                <p>{teamSize}</p>
                            </div>
                            <div className='flex gap-2 w-fit'>
                                <img src='/assets/icons/Clock.svg' alt='' />
                                <p>{deliveryTime}</p>
                            </div> */}
                        </div>
                        <p className='mb-2'>{desc}</p>
                        <p className='flex flex-col mt-3'>
                            <span>Tools:</span>
                            <span className='flex flex-wrap gap-1 mt-2'>
                                {tools.map((tool, index) => (
                                    <Image
                                        key={index}
                                        src={getToolIcon(tool)}
                                        alt={`Tool ${index + 1}`}
                                        width={24}
                                        height={24}
                                        className='object-contain w-6 h-6'
                                    />
                                ))}
                            </span>
                        </p>
                    </div>
                </div>
                <div className='flex flex-col gap-2 mt-6 lg:mt-2 sm:flex-row sm:gap-4'>
                    <Button
                        link='#'
                        className='w-full md:w-auto'
                        text='Details coming soon'
                        variant='disabled'
                        trailingIcon=''
                    />
                    <Button
                        link={urlLink}
                        className='w-full md:w-auto'
                        text='Link to website'
                        variant='ghost'
                        trailingIcon=''
                    />
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
