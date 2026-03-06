import type { Metadata } from 'next';
import {
  Plus_Jakarta_Sans,
  Bricolage_Grotesque,
  Lora,
  Space_Mono,
  Instrument_Sans
} from 'next/font/google';
import '@/styles/globals.css';

import ParticleNetwork from '@/components/particle-network/network';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from '@/lib/theme/theme-provider';
import { themeIds } from '@/lib/theme/theme-registry';
import { FontProvider } from '@/lib/font/font-provider';
import { ScrollArea } from '@/components/ui/scroll-area';
import LoaderWrapper from '@/components/layout/initial-loader';
import SkipLinks from '@/components/layout/skip-links';

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-plus-jakarta' });
const bricolage = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-bricolage' });
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' });
const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono'
});
const instrumentSans = Instrument_Sans({ subsets: ['latin'], variable: '--font-instrument-sans' });

const fontVariables = [
  plusJakarta.variable,
  bricolage.variable,
  lora.variable,
  spaceMono.variable,
  instrumentSans.variable
].join(' ');

const baseUrl = 'https://andydeng.me';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'andydeng.me',
    template: '%s | andydeng.me'
  },
  description: 'Andy Deng — Software Engineer',
  openGraph: {
    title: 'andydeng.me',
    description: 'Andy Deng — Software Engineer',
    url: baseUrl,
    siteName: 'Andy Deng',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og.webp',
        width: 1200,
        height: 630,
        alt: 'Andy Deng — Software Engineer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'andydeng.me',
    description: 'Andy Deng — Software Engineer',
    images: ['/og.webp']
  },
  icons: {
    icon: '/favicon.svg'
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
      <body
        className={`${fontVariables} antialiased`}
        style={{ fontFamily: 'var(--font-plus-jakarta)' }}
      >
        <SkipLinks />
        <ThemeProvider
          attribute="data-theme"
          themes={themeIds}
          defaultTheme="light"
          disableTransitionOnChange
        >
          <FontProvider>
            <div className="relative z-0">
              <ParticleNetwork />
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
