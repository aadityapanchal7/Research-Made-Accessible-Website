import { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/react";
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.researchmadeaccessible.org'),
  title: 'Research Made Accessible',
  description: 'At Research Made Accessible, we believe education is key to transforming lives. Our mentorship program provides underserved students with the opportunity to learn and grow through research mentorship.',
  icons: {
    icon: '/favicon.webp',
  },
  openGraph: {
    type: 'website',
    title: 'Research Made Accessible',
    description: 'At Research Made Accessible, we believe education is key to transforming lives. Our mentorship program provides underserved students with the opportunity to learn and grow through research mentorship.',
    url: 'https://www.researchmadeaccessible.org',
    images: [
      {
        url: '/og-image.webp',
        width: 800,
        height: 600,
        alt: 'Research Made Accessible',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Research Made Accessible',
    description: 'At Research Made Accessible, we believe education is key to transforming lives. Our mentorship program provides underserved students with the opportunity to learn and grow through research mentorship.',
    images: [
      {
        url: '/twitter-image.webp',
        alt: 'Research Made Accessible',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Default Next.js Metadata */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.webp" />
        
        {/* SEO Meta Tags */}
        <meta name="keywords" content="education, mentorship, research, underserved students, learning, growth, accessible" />
        <meta name="author" content="Research Made Accessible" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
