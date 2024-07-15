import React from 'react';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: 'ResearchMadeAccessible',
  description: 'At Research Made Accessible, we believe education is key to transforming lives. Our mentorship program provides underserved students with the opportunity to learn and grow through research mentorship',
icons: {
    icon: '/favicon.webp',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
