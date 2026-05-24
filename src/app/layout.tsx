import type { Metadata } from 'next';
import { Crimson_Pro, Inter } from 'next/font/google';
import './globals.css';

const displayFont = Crimson_Pro({
  variable: '--font-display',
  subsets: ['latin'],
  display: 'swap',
});

const bodyFont = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Fariz Fahrian',
    template: '%s | Fariz Fahrian',
  },
  description:
    'Software Engineer and UI/UX Designer specializing in full-stack web development with React, Next.js, and Laravel',
  keywords: [
    'Fariz Fahrian',
    'Software Engineer',
    'UI/UX Designer',
    'Full Stack Developer',
    'React',
    'Next.js',
    'Laravel',
    'TypeScript',
    'Portfolio',
  ],
  authors: [{ name: 'Fariz Fahrian' }],
  creator: 'Fariz Fahrian',
  openGraph: {
    type: 'website',
    locale: 'en_ID',
    url: 'https://farizfahrian.com',
    siteName: 'Fariz Fahrian Portfolio',
    title: 'Fariz Fahrian - Software Engineer & UI/UX Designer',
    description:
      'Full-stack developer specializing in React, Next.js, and Laravel. Creating digital solutions that solve real problems.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Fariz Fahrian Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fariz Fahrian - Software Engineer & UI/UX Designer',
    description:
      'Full-stack developer specializing in React, Next.js, and Laravel.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
