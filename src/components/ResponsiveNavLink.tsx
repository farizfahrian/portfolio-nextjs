import { type InertiaLinkProps, Link } from '@inertiajs/react';

export default function ResponsiveNavLink({
  active = false,
  className = '',
  children,
  ...props
}: InertiaLinkProps & { active?: boolean }) {
  return (
    <Link
      {...props}
      className={`flex w-full items-start border-l-4 py-2 ps-3 pe-4 ${
        active
          ? 'border-indigo-400 bg-indigo-50 text-indigo-700 focus:border-indigo-700 focus:bg-indigo-100 focus:text-indigo-800'
          : 'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 focus:border-gray-300 focus:bg-gray-50 focus:text-gray-800'
      } font-medium text-base transition-[background-color,border-color,color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] focus:outline-none ${className}`}
    >
      {children}
    </Link>
  );
}
