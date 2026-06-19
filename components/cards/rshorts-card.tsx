'use client';

import { Card, CardContent } from '../ui/card';
import { ArrowUpRight, Play, Heart, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { ProjectModal, useHashModal } from './project-modal';
import { MockVideoGenerator } from './rshorts-demos';

function FloatTile({
  icon: Icon,
  gradient,
  className
}: {
  icon: LucideIcon;
  gradient: string;
  className?: string;
}) {
  return (
    <div
      className={`absolute flex size-11 items-center justify-center rounded-2xl text-white shadow-lg ring-1 ring-white/20 transition-transform duration-500 ${className ?? ''}`}
      style={{ background: gradient }}
    >
      <Icon className="size-[1.1rem]" strokeWidth={2.5} />
    </div>
  );
}

function RShortsCard() {
  const [open, setOpen] = useHashModal('rshorts');

  return (
    <>
      <Card
        id="rshorts"
        className="group relative aspect-[5/2] cursor-pointer overflow-hidden !border-0"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setOpen(true);
          }
        }}
      >
        {/* Base crimson gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #1A0A0E 0%, #3D0F1E 40%, #6B1226 72%, #240A12 100%)'
          }}
        />

        {/* Vibrant rose glow — behind the tiles, intensifies on hover */}
        <div
          className="absolute -right-10 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full opacity-80 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background: 'radial-gradient(circle, rgba(244,63,94,0.45) 0%, transparent 70%)'
          }}
        />

        {/* Warm amber glow — top-left for depth */}
        <div
          className="absolute -left-10 -top-12 h-48 w-48 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(251,146,60,0.22) 0%, transparent 70%)'
          }}
        />

        {/* Playful floating engagement tiles (right side) */}
        <div
          aria-hidden
          className="absolute right-7 top-1/2 hidden -translate-y-1/2 transition-transform duration-500 group-hover:scale-105 sm:block"
        >
          <div className="relative h-28 w-32">
            <FloatTile
              icon={Heart}
              gradient="linear-gradient(135deg, #FB7185 0%, #E11D48 100%)"
              className="left-0 top-9 z-10 -rotate-[10deg] group-hover:-translate-x-1 group-hover:-rotate-[14deg]"
            />
            <FloatTile
              icon={Play}
              gradient="linear-gradient(135deg, #FDBA74 0%, #F43F5E 100%)"
              className="right-0 top-5 z-10 rotate-[10deg] group-hover:translate-x-1 group-hover:rotate-[14deg]"
            />
            <FloatTile
              icon={Sparkles}
              gradient="linear-gradient(135deg, #F472B6 0%, #DB2777 100%)"
              className="left-1/2 top-0 z-20 -translate-x-1/2 group-hover:-translate-y-1"
            />
          </div>
        </div>

        {/* Left-side darkening for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(10,4,6,0.78) 0%, rgba(10,4,6,0.25) 45%, transparent 68%)'
          }}
        />

        {/* Fade to black at bottom */}
        <div
          className="absolute inset-x-0 bottom-0 h-2/3"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)'
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
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
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
        triggerId="rshorts"
        closeClassName="text-white"
        className="max-h-[90vh] overflow-y-auto sm:!max-w-2xl"
        previewClassName=""
        preview={
          <div className="relative h-full w-full p-5 pb-3" style={{ backgroundColor: '#170A0F' }}>
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
        <p>
          An AI Shorts-style video generator. Paste a prompt, get a fully narrated, captioned video
          ready for TikTok, Reels, and YouTube Shorts.
        </p>
        <p>
          Built with Remotion, rendered with AWS Lambda and stored in S3. Features 12+ AI voices,
          word-level captions, background video selection, and one-click cloud rendering.
        </p>
      </ProjectModal>
    </>
  );
}

export default RShortsCard;
