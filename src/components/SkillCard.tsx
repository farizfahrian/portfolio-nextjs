import Image from 'next/image'

type CardProps = {
    imgsrc: string
    title: string
    desc: string
}

const SkillCard = ({ imgsrc, title, desc }: CardProps) => {
    return (
        <div className='card max-w-[425px] cursor-pointer flex flex-col px-8 pt-8 pb-6 rounded-[18px] bg-gray-50 shadow-lg overflow-hidden transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-xl'>
            <div
                className='flex flex-col gap-4'
                // initial='idle'
                // whileHover='hover'
            >
                <Image
                    src={imgsrc}
                    width={381}
                    height={196}
                    alt=''
                    className='w-full h-auto rounded-[8px]'
                />
                <div className='text-left card-content'>
                    <h3 className='font-display text-xl sm:text-2xl leading-[1.9375rem] mb-2 font-semibold'>
                        {title}
                    </h3>
                    <p className='text-gray-600 mb-6 text-base sm:text-lg leading-[1.5rem]'>
                        {desc}
                    </p>
                    {/* <button className='text-center font-medium text-zinc-700 w-full py-2 rounded-[10px] bg-white border border-zinc-200'>
                        More detail
                    </button> */}
                </div>
            </div>
        </div>
    )
}

export default SkillCard
