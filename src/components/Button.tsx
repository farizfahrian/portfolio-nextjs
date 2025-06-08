'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

type ButtonProps = {
    link: string
    className?: string
    text?: string
    variant?: 'primary' | 'secondary' | 'ghost' | 'disabled'
    trailingIcon?: string
    iconOnly?: boolean
}

const Button = ({
    link,
    className,
    text = 'Connect with me',
    variant = 'primary',
    trailingIcon = '/assets/icons/arrow-up-right.svg',
    iconOnly = false
}: ButtonProps) => {
    const [isTapped, setIsTapped] = useState(false)

    const focusStyles =
        'focus-visible:none focus:outline-none focus:ring-2 focus:ring-orange-300'

    const variantClasses = {
        primary: `bg-orange-600 text-white border-orange-200 ${focusStyles}`,
        secondary: `bg-white text-orange-600 border-orange-600 ${focusStyles}`,
        ghost: `bg-transparent text-orange-600 border-transparent ${focusStyles}`,
        disabled:
            'bg-zinc-100 text-zinc-400 border-zinc-200 disabled cursor-not-allowed'
    }

    return (
        <motion.a
            href={variant !== 'disabled' ? link : undefined}
            className={`border-2 ${
                iconOnly ? 'px-2 py-3' : 'px-4 py-3'
            } font-body rounded-lg ${variantClasses[variant]} ${className}`}
            target={variant !== 'disabled' ? '_blank' : undefined}
            onClick={
                variant === 'disabled' ? e => e.preventDefault() : undefined
            }
            role='button'
            aria-disabled={variant === 'disabled'}
            tabIndex={variant === 'disabled' ? -1 : undefined}
            whileHover={{
                paddingLeft: iconOnly ? undefined : '24px',
                paddingRight: iconOnly ? undefined : '24px',
                transition: iconOnly
                    ? {}
                    : { duration: 0.3, ease: [0.33, 1.3, 0.68, 1] }
            }}
            whileTap={{
                scale: iconOnly ? 1 : 0.95,
                transition: iconOnly
                    ? {}
                    : { duration: 0.3, ease: [0.33, 1.3, 0.68, 1] }
            }}
            onTapStart={() => setIsTapped(true)}
            onTapCancel={() => setIsTapped(false)}
        >
            <span
                className={`flex items-center justify-center text-sm sm:text-base ${
                    iconOnly ? 'justify-center' : ''
                }`}
            >
                {!iconOnly && text}
                {trailingIcon && (
                    <motion.img
                        src={trailingIcon}
                        alt=''
                        aria-hidden='true'
                        className={`inline-block ${iconOnly ? '' : 'ml-2'} ${
                            iconOnly ? 'w-6 h-6' : 'w-[17px] h-auto'
                        }`}
                        animate={{ rotate: isTapped && !iconOnly ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                    />
                )}
            </span>
        </motion.a>
    )
}

export default Button
