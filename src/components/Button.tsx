'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

type ButtonProps = {
  link: string;
  className?: string;
  text?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'disabled';
  trailingIcon?: string;
  iconOnly?: boolean;
};

const Button = ({
  link,
  className,
  text = 'Connect with me',
  variant = 'primary',
  trailingIcon = '/assets/icons/arrow-up-right.svg',
  iconOnly = false,
}: ButtonProps) => {
  const [isTapped, setIsTapped] = useState(false);

  const focusStyles =
    'focus-visible:none focus:outline-none focus:ring-2 focus:ring-orange-300';

  const variantClasses = {
    primary: `bg-orange-600 text-white border-orange-200 ${focusStyles}`,
    secondary: `bg-white text-orange-600 border-orange-600 ${focusStyles}`,
    ghost: `bg-transparent text-orange-600 border-transparent ${focusStyles}`,
    disabled:
      'bg-zinc-100 text-zinc-400 border-zinc-200 disabled cursor-not-allowed',
  };

  return (
    <motion.a
      aria-disabled={variant === 'disabled'}
      className={`border-2 ${
        iconOnly ? 'px-1 py-1' : 'px-10 py-2'
      } rounded-md font-body ${variantClasses[variant]} ${className}`}
      href={variant !== 'disabled' ? link : undefined}
      onClick={variant === 'disabled' ? (e) => e.preventDefault() : undefined}
      onTapCancel={() => setIsTapped(false)}
      onTapStart={() => setIsTapped(true)}
      role="button"
      tabIndex={variant === 'disabled' ? -1 : undefined}
      target={variant !== 'disabled' ? '_blank' : undefined}
      whileHover={{
        paddingLeft: iconOnly ? undefined : '24px',
        paddingRight: iconOnly ? undefined : '24px',
        transition: iconOnly
          ? {}
          : { duration: 0.3, ease: [0.33, 1.3, 0.68, 1] },
      }}
      whileTap={{
        scale: iconOnly ? 1 : 0.95,
        transition: iconOnly
          ? {}
          : { duration: 0.3, ease: [0.33, 1.3, 0.68, 1] },
      }}
    >
      <span
        className={`flex items-center justify-center text-sm sm:text-base ${
          iconOnly ? 'justify-center' : ''
        }`}
      >
        {!iconOnly && text}
        {trailingIcon && (
          <motion.img
            alt=""
            animate={{ rotate: isTapped && !iconOnly ? 45 : 0 }}
            aria-hidden="true"
            className={`inline-block ${iconOnly ? '' : 'ml-2'} ${
              iconOnly ? 'h-6 w-6' : 'h-auto w-[17px]'
            }`}
            src={trailingIcon}
            transition={{ duration: 0.2 }}
          />
        )}
      </span>
    </motion.a>
  );
};

export default Button;
