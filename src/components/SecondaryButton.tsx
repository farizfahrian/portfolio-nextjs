import type { ButtonHTMLAttributes } from 'react';

export default function SecondaryButton({
  type = 'button',
  className = '',
  disabled,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={
        `inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 font-semibold text-gray-700 text-xs uppercase tracking-widest shadow-sm transition-[transform,background-color,border-color,color,box-shadow] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-[0.97] disabled:opacity-25 disabled:active:scale-100 ${
          disabled && 'opacity-25'
        } ` + className
      }
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}
