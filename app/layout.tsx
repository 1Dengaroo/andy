import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import ParticleNetwork from '@/components/particle-network/network';
import Footer from '@/components/layout/footer';

import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

const baseUrl = 'https://andydeng.me';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Andy Deng',
    template: '%s | Andy Deng'
  },
  description: "Andy Deng's Portfolio",
  openGraph: {
    title: 'Andy Deng Portfolio',
    description: "Andy Deng's Portfolio",
    url: baseUrl,
    siteName: 'Andy Deng Portfolio',
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-hidden antialiased`}>
        <div className="relative min-h-screen">
          <div className="relative z-0">
            <ParticleNetwork />
          </div>
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-2">
            {children}
            <Footer />
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
