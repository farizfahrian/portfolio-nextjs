import type { ButtonHTMLAttributes } from 'react';

export default function PrimaryButton({
  className = '',
  disabled,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={
        `inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 font-semibold text-white text-xs uppercase tracking-widest transition-[transform,background-color,border-color,color,box-shadow] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-[0.97] active:bg-gray-900 disabled:active:scale-100 ${
          disabled && 'opacity-25'
        } ` + className
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
}
