import Image from 'next/image';
import Button from './Button';
import Chip from './Chip';

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
};

const getToolIcon = (tool: string): string => toolIcons[tool];

type CardProps = {
  imgsrc: string;
  chiptext: string;
  title: string;
  roles: string;
  // teamSize: string
  // deliveryTime: string
  desc: string;
  tools: string[];
  urlLink: string;
};

const ProjectCard = ({
  imgsrc,
  chiptext,
  title,
  roles,
  // teamSize,
  // deliveryTime,
  desc,
  tools,
  urlLink,
}: CardProps) => {
  return (
    <div className="flex flex-col gap-3 rounded-[18px] bg-zinc-100/60 p-3 font-body shadow-sm sm:gap-9 md:gap-6 md:p-6 lg:p-8 xl:px-14 xl:py-10 min-[1170px]:flex-row">
      <Image
        alt="project image"
        className="aspect-[1.5/1] h-auto w-full flex-2 min-[1170px]:max-w-[572px]"
        height={381}
        src={imgsrc}
        width={572}
      />
      <div className="flex flex-1 flex-col justify-between">
        <div className="text-zinc-600">
          <Chip text={chiptext} />
          <h3 className="my-2 font-display font-semibold text-xl text-zinc-950 leading-[1.1] sm:text-2xl">
            {title}
          </h3>
          <div className="text-sm">
            <div className="my-2 flex flex-col flex-wrap gap-2 sm:flex-row">
              <div className="flex w-fit gap-2">
                <Image
                  alt=""
                  height={20}
                  src="/assets/icons/Document.svg"
                  width={20}
                />
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
            <p className="mb-2">{desc}</p>
            <p className="mt-3 flex flex-col">
              <span>Tools:</span>
              <span className="mt-2 flex flex-wrap gap-1">
                {tools.map((tool, index) => (
                  <Image
                    alt={`Tool ${index + 1}`}
                    className="h-6 w-6 object-contain"
                    height={24}
                    key={index}
                    src={getToolIcon(tool)}
                    width={24}
                  />
                ))}
              </span>
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:gap-4 lg:mt-2">
          {/* <Button
                        link='#'
                        className='w-full md:w-auto'
                        text='Details coming soon'
                        variant='disabled'
                        trailingIcon=''
                    /> */}
          <Button
            className="w-full md:w-auto"
            link={urlLink}
            text="Link to website"
            trailingIcon=""
            variant="secondary"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
