'use client';

import { Card, CardContent } from '../ui/card';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { ProjectModal, useHashModal } from './project-modal';
import { MockVideoGenerator } from './rshorts-demos';

function RShortsCard() {
  const [open, setOpen] = useHashModal('rshorts');

  return (
    <>
      <Card
        id="rshorts"
        className="group relative aspect-[7/2] cursor-pointer overflow-hidden !border-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setOpen(true);
          }
        }}
      >
        {/* Base gradient — warm dark with coral accent */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #1A1410 0%, #2A1A18 35%, #3A1E1E 60%, #1A1410 100%)'
          }}
        />

        {/* Coral glow — center-right */}
        <div
          className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{
            opacity: 0.8,
            background:
              'radial-gradient(ellipse 65% 80% at 65% 45%, rgba(230,55,87,0.2) 0%, rgba(230,55,87,0.08) 40%, transparent 70%)'
          }}
        />

        {/* Secondary warm glow — top-left */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 50% 60% at 20% 30%, rgba(230,55,87,0.1) 0%, transparent 60%)'
          }}
        />

        {/* Fade to black at bottom */}
        <div
          className="absolute inset-x-0 bottom-0 h-3/4"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(26,20,16,0.4) 40%, transparent 100%)'
          }}
        />

        <CardContent className="relative z-10 flex h-full w-full flex-col justify-end p-5">
          <div className="flex items-end justify-between">
            <div>
              <span className="mb-1 block font-mono text-[0.6rem] uppercase tracking-widest text-white/50">
                AI Video Generator
              </span>
              <div className="flex items-center gap-2">
                <Image
                  src="/logos/rshorts-logo.svg"
                  alt="r/Shorts"
                  width={20}
                  height={20}
                  className="rounded-sm"
                />
                <span
                  className="text-xl font-bold tracking-tight text-white sm:text-2xl"
                  style={{ fontFamily: 'var(--font-bricolage)' }}
                >
                  r/Shorts
                </span>
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/80" />
          </div>
        </CardContent>
      </Card>

      <ProjectModal
        open={open}
        onOpenChange={setOpen}
        closeClassName="text-white"
        className="max-h-[90vh] overflow-y-auto !border-[#332D26] !bg-[#1A1410] !text-[#EDE5DA] sm:!max-w-2xl"
        previewClassName=""
        preview={
          <div className="relative h-full w-full p-5 pb-3" style={{ backgroundColor: '#1A1410' }}>
            <MockVideoGenerator />
          </div>
        }
        logo={
          <Image
            src="/logos/rshorts-logo.svg"
            alt="r/Shorts"
            width={20}
            height={20}
            className="rounded-lg"
          />
        }
        title="r/Shorts"
        subtitle="AI-powered short-form video generator"
        link={{ label: 'rshorts.app', href: 'https://rshorts.app' }}
      >
        <p style={{ color: '#B0A89C' }}>
          An AI Shorts-style video generator. Paste a prompt, get a fully narrated, captioned video
          ready for TikTok, Reels, and YouTube Shorts.
        </p>
        <p style={{ color: '#B0A89C' }}>
          Built with Remotion, rendered with AWS Lambda and stored in S3. Features 12+ AI voices,
          word-level captions, background video selection, and one-click cloud rendering.
        </p>
      </ProjectModal>
    </>
  );
}

export default RShortsCard;
