import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Bricolage_Grotesque, Lora, Space_Mono, Sora } from 'next/font/google';
import '@/styles/globals.css';

import BackgroundCanvas from '@/components/backgrounds/background-canvas';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from '@/lib/theme/theme-provider';
import { themeIds } from '@/lib/theme/theme-registry';
import { FontProvider } from '@/lib/font/font-provider';
import { ScrollArea } from '@/components/ui/scroll-area';
import LoaderWrapper from '@/components/layout/initial-loader';
import SkipLinks from '@/components/layout/skip-links';

const sora = Sora({ subsets: ['latin'], variable: '--font-sora' });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-plus-jakarta' });
const bricolage = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-bricolage' });
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' });
const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono'
});

const fontVariables = [
  sora.variable,
  plusJakarta.variable,
  bricolage.variable,
  lora.variable,
  spaceMono.variable
].join(' ');

const baseUrl = 'https://andydeng.me';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Andy Deng — Full-Stack Product Engineer',
    template: '%s | Andy Deng'
  },
  description:
    'Full-Stack Product Engineer with 2 years of experience building scalable consumer applications and AI-driven agentic workflows. Expertise in modern TypeScript, Next.js, and distributed systems.',
  keywords: [
    'Andy Deng',
    'software engineer',
    'full-stack engineer',
    'product engineer',
    'React',
    'Next.js',
    'TypeScript',
    'distributed systems',
    'LLM',
    'AI',
    'New York',
    'portfolio'
  ],
  authors: [{ name: 'Andy Deng', url: baseUrl }],
  creator: 'Andy Deng',
  alternates: {
    canonical: baseUrl
  },
  openGraph: {
    title: 'Andy Deng — Full-Stack Product Engineer',
    description:
      'Full-Stack Product Engineer with 2 years of experience building scalable consumer applications and AI-driven agentic workflows. Expertise in TypeScript, Next.js, and distributed systems.',
    url: baseUrl,
    siteName: 'Andy Deng',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og.webp',
        width: 1200,
        height: 630,
        alt: 'Andy Deng — Software Engineer portfolio website'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andy Deng — Full-Stack Product Engineer',
    description:
      'Full-Stack Product Engineer with 2 years of experience building scalable consumer applications and AI-driven agentic workflows. Expertise in TypeScript, Next.js, and distributed systems.',
    images: ['/images/og.webp']
  },
  icons: {
    icon: '/logos/favicon.svg'
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Andy Deng',
              url: baseUrl,
              jobTitle: 'Full-Stack Product Engineer',
              worksFor: {
                '@type': 'Organization',
                name: 'Pega'
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'New York',
                addressRegion: 'NY',
                addressCountry: 'US'
              },
              sameAs: ['https://github.com/1Dengaroo', 'https://linkedin.com/in/andydeng-'],
              alumniOf: {
                '@type': 'EducationalOrganization',
                name: 'Boston College'
              },
              knowsAbout: [
                'React',
                'Next.js',
                'TypeScript',
                'Python',
                'JavaScript',
                'Distributed Systems',
                'LLM Infrastructure',
                'Agentic AI',
                'Software Engineering'
              ]
            })
          }}
        />
      </head>
      <body className={`${fontVariables} antialiased`} style={{ fontFamily: 'var(--font-sora)' }}>
        <SkipLinks />
        <ThemeProvider
          attribute="data-theme"
          themes={themeIds}
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <FontProvider>
            <div className="relative z-0">
              <BackgroundCanvas />
            </div>
            <LoaderWrapper>
              <ScrollArea>
                <div className="flex min-h-screen flex-col items-center justify-center p-1">
                  {children}
                </div>
              </ScrollArea>
            </LoaderWrapper>
          </FontProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
