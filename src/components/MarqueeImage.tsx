'use client'
import { cn } from '@/lib/utils'
import Marquee from './ui/marquee'
import { motion } from 'motion/react'

const reviews = [
    {
        img: '/assets/images/Activest.png'
    },
    {
        img: '/assets/images/Al-Mazaya.png'
    },
    {
        img: '/assets/images/Davila.png'
    },
    {
        img: '/assets/images/Graviton.png'
    },
    {
        img: '/assets/images/Kaltimfolks.png'
    },
    {
        img: '/assets/images/Sirkel.png'
    }
]

const firstRow = reviews.slice(0, reviews.length)

const ReviewCard = ({ img }: { img: string }) => {
    return (
        <figure
            className={cn(
                'relative w-64 cursor-pointer border overflow-clip rounded-lg',
                // light styles
                'border-gray-700/[.02] bg-gray-950/[.1]',
                // dark styles
                'dark:border-gray-50/[.05] dark:bg-gray-50/[.10]'
            )}
        >
            <motion.div className='relative h-[125px] w-full'>
                <motion.img
                    className='absolute inset-0 object-cover w-full h-auto px-4 pt-4 rounded-xl'
                    src={img}
                    alt=''
                    width='240'
                    height='125'
                    whileHover={{
                        padding: 0,
                        borderRadius: 0,
                        transition: {
                            duration: 0.3,
                            ease: [0.33, 1.3, 0.68, 1]
                        }
                    }}
                />
            </motion.div>
        </figure>
    )
}

export function MarqueeImage () {
    return (
        <div className='relative flex mt-6 sm:mt-12 h-[150px] w-full flex-col items-center justify-center overflow-hidden rounded-xl'>
            <Marquee pauseOnHover className='[--duration:20s]'>
                {firstRow.map(review => (
                    <ReviewCard key={review.img} {...review} />
                ))}
            </Marquee>
        </div>
    )
}
