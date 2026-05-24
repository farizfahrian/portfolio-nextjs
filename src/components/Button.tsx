'use client';
import Image from 'next/image';

type ButtonProps = {
  link: string;
  ariaLabel?: string;
  className?: string;
  text?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'disabled';
  trailingIcon?: string;
  iconOnly?: boolean;
};

const shouldOpenInNewTab = (link: string) =>
  link.startsWith('http') || link.endsWith('.pdf');

const Button = ({
  link,
  ariaLabel,
  className,
  text = 'Connect with me',
  variant = 'primary',
  trailingIcon = '/assets/icons/arrow-up-right.svg',
  iconOnly = false,
}: ButtonProps) => {
  const focusStyles =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.965_0.004_75)]';

  const bgClasses = {
    primary: 'border-orange-200 bg-orange-600',
    secondary: 'border-orange-600 bg-[oklch(0.995_0.004_75)]',
    ghost: 'border-zinc-200 bg-[oklch(0.995_0.004_75)]',
    disabled: 'border-zinc-200 bg-zinc-100',
  };

  const textClasses = {
    primary: 'text-orange-50',
    secondary: 'text-orange-600',
    ghost: 'text-orange-600',
    disabled: 'text-zinc-400',
  };

  const isExternal = shouldOpenInNewTab(link);
  const disabled = variant === 'disabled';
  const href = disabled ? undefined : link;
  const disabledClasses = disabled ? 'cursor-not-allowed opacity-70' : '';
  const sizeClasses = iconOnly
    ? 'portfolio-button-icon-only size-10 p-2'
    : 'min-h-11 px-10 py-2';
  const contentClasses = iconOnly ? 'justify-center' : '';
  const iconSpacingClasses = iconOnly ? '' : 'ml-2';
  const iconSizeClasses = iconOnly ? 'h-6 w-6' : 'h-auto w-[17px]';
  const iconSize = iconOnly ? 24 : 17;

  return (
    <a
      aria-disabled={disabled}
      aria-label={iconOnly ? ariaLabel : undefined}
      className={`portfolio-button relative isolate inline-flex items-center justify-center overflow-hidden rounded-md border-2 font-body font-medium ${textClasses[variant]} ${bgClasses[variant]} ${focusStyles} ${sizeClasses} ${className ?? ''} ${disabledClasses}`}
      data-icon-only={iconOnly}
      data-variant={variant}
      href={href}
      onClick={disabled ? (e) => e.preventDefault() : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      tabIndex={disabled ? -1 : undefined}
      target={isExternal ? '_blank' : undefined}
    >
      <span
        className={`portfolio-button-content relative z-10 flex items-center justify-center text-sm sm:text-base ${contentClasses}`}
      >
        {!iconOnly && text}
        {trailingIcon && (
          <span
            className={`portfolio-button-icon-shell inline-grid place-items-center ${iconSpacingClasses}`}
          >
            <Image
              alt=""
              aria-hidden="true"
              className={`portfolio-button-icon inline-block ${iconSizeClasses}`}
              height={iconSize}
              src={trailingIcon}
              width={iconSize}
            />
          </span>
        )}
      </span>
    </a>
  );
};

export default Button;
