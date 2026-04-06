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
        {/* Dark warm base */}
        <div className="absolute inset-0" style={{ backgroundColor: '#1A1410' }} />

        {/* Mini phone frames floating in background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Phone 1 — tilted left */}
          <div
            className="absolute transition-transform duration-700 group-hover:translate-y-[-4px]"
            style={{
              right: '18%',
              top: '10%',
              width: 52,
              height: 92,
              borderRadius: 10,
              border: '1.5px solid rgba(230,55,87,0.25)',
              background:
                'linear-gradient(180deg, rgba(230,55,87,0.08) 0%, rgba(26,20,16,0.9) 100%)',
              transform: 'rotate(-8deg)',
              boxShadow: '0 8px 32px rgba(230,55,87,0.12)'
            }}
          >
            <div
              className="mx-auto mt-2 h-1 w-4 rounded-full"
              style={{ backgroundColor: 'rgba(230,55,87,0.2)' }}
            />
            {/* Caption lines */}
            <div className="absolute inset-x-0 bottom-[28%] px-2">
              <div className="flex flex-col items-center gap-0.5">
                <div
                  className="h-[2px] w-10 rounded-full"
                  style={{ backgroundColor: 'rgba(255,255,255,0.25)' }}
                />
                <div
                  className="h-[2px] w-7 rounded-full"
                  style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
                />
              </div>
            </div>
            {/* Progress bar */}
            <div
              className="absolute inset-x-0 bottom-0 h-[2px]"
              style={{ backgroundColor: 'rgba(230,55,87,0.15)' }}
            >
              <div className="h-full w-[65%]" style={{ backgroundColor: 'rgba(230,55,87,0.5)' }} />
            </div>
          </div>

          {/* Phone 2 — center, slightly larger */}
          <div
            className="absolute transition-transform duration-700 group-hover:translate-y-[-6px]"
            style={{
              right: '8%',
              top: '5%',
              width: 58,
              height: 102,
              borderRadius: 11,
              border: '1.5px solid rgba(230,55,87,0.35)',
              background:
                'linear-gradient(180deg, rgba(230,55,87,0.12) 0%, rgba(26,20,16,0.95) 100%)',
              transform: 'rotate(4deg)',
              boxShadow: '0 12px 40px rgba(230,55,87,0.18)'
            }}
          >
            <div
              className="mx-auto mt-2 h-1 w-5 rounded-full"
              style={{ backgroundColor: 'rgba(230,55,87,0.25)' }}
            />
            {/* Play button */}
            <div className="flex h-[50%] items-center justify-center">
              <div
                className="flex size-5 items-center justify-center rounded-full"
                style={{ backgroundColor: 'rgba(230,55,87,0.2)' }}
              >
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: '5px solid rgba(230,55,87,0.6)',
                    borderTop: '3px solid transparent',
                    borderBottom: '3px solid transparent',
                    marginLeft: 1
                  }}
                />
              </div>
            </div>
            {/* Caption overlay */}
            <div className="absolute inset-x-0 bottom-[22%] px-2">
              <div className="flex flex-col items-center gap-0.5">
                <div
                  className="h-[2px] w-12 rounded-full"
                  style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}
                />
                <div
                  className="h-[2px] w-8 rounded-full"
                  style={{ backgroundColor: 'rgba(255,255,255,0.18)' }}
                />
              </div>
            </div>
            {/* Progress bar */}
            <div
              className="absolute inset-x-0 bottom-0 h-[2px]"
              style={{ backgroundColor: 'rgba(230,55,87,0.15)' }}
            >
              <div className="h-full w-[40%]" style={{ backgroundColor: 'rgba(230,55,87,0.6)' }} />
            </div>
          </div>

          {/* Prompt input panel — left side */}
          <div
            className="absolute transition-transform duration-700 group-hover:translate-y-[-3px] group-hover:rotate-[0.5deg]"
            style={{
              left: '6%',
              top: '8%',
              borderRadius: 8,
              border: '1px solid rgba(230,55,87,0.15)',
              backgroundColor: 'rgba(31,25,21,0.9)',
              boxShadow: '0 6px 24px rgba(230,55,87,0.08)',
              transform: 'rotate(-2deg)',
              padding: '6px 8px',
              overflow: 'hidden',
              width: 110
            }}
          >
            {/* Header label */}
            <div className="mb-1.5 flex items-center justify-between">
              <div
                className="h-0.5 w-10 rounded-full"
                style={{ backgroundColor: 'rgba(176,168,156,0.25)' }}
              />
              <div
                className="size-1.5 rounded-full"
                style={{ backgroundColor: 'rgba(230,55,87,0.25)' }}
              />
            </div>
            {/* Textarea mockup */}
            <div
              className="rounded border p-1.5"
              style={{ borderColor: 'rgba(230,55,87,0.12)', backgroundColor: 'rgba(26,20,16,0.6)' }}
            >
              <div className="space-y-0.5">
                <div
                  className="h-0.5 w-full rounded-full"
                  style={{ backgroundColor: 'rgba(176,168,156,0.15)' }}
                />
                <div
                  className="h-0.5 w-[85%] rounded-full"
                  style={{ backgroundColor: 'rgba(176,168,156,0.12)' }}
                />
                <div
                  className="h-0.5 w-[60%] rounded-full"
                  style={{ backgroundColor: 'rgba(176,168,156,0.09)' }}
                />
              </div>
            </div>
            {/* Example prompt chips */}
            <div className="mt-1.5 flex flex-wrap gap-0.5">
              {[16, 12, 20, 14].map((w, i) => (
                <div
                  key={i}
                  className="h-1.5 rounded-full"
                  style={{
                    width: w,
                    border: '0.5px solid rgba(230,55,87,0.1)',
                    backgroundColor: 'rgba(230,55,87,0.04)'
                  }}
                />
              ))}
            </div>
            {/* Generate button */}
            <div
              className="mt-1.5 h-2.5 w-full rounded"
              style={{ backgroundColor: 'rgba(230,55,87,0.25)' }}
            />
          </div>

          {/* Audio waveform visualization — center */}
          <div
            className="absolute transition-transform duration-700 group-hover:translate-y-[-2px]"
            style={{
              left: '32%',
              top: '12%',
              borderRadius: 7,
              border: '1px solid rgba(230,55,87,0.12)',
              backgroundColor: 'rgba(31,25,21,0.85)',
              boxShadow: '0 4px 16px rgba(230,55,87,0.06)',
              padding: '5px 8px',
              transform: 'rotate(1deg)'
            }}
          >
            {/* Waveform bars */}
            <div className="flex items-end gap-[2px]" style={{ height: 16 }}>
              {[4, 8, 6, 12, 10, 14, 8, 11, 6, 9, 13, 7, 10, 5, 8, 11, 6].map((h, i) => (
                <div
                  key={i}
                  className="w-[2px] rounded-full"
                  style={{
                    height: h,
                    backgroundColor:
                      i < 10 ? `rgba(230,55,87,${0.5 - i * 0.02})` : `rgba(230,55,87,0.15)`
                  }}
                />
              ))}
            </div>
            <div className="mt-1 flex items-center justify-between">
              <span className="text-[5px]" style={{ color: 'rgba(176,168,156,0.4)' }}>
                0:18
              </span>
              <span className="text-[5px]" style={{ color: 'rgba(176,168,156,0.25)' }}>
                0:42
              </span>
            </div>
          </div>

          {/* Render status card — bottom center */}
          <div
            className="absolute transition-transform duration-700 group-hover:translate-y-[-2px]"
            style={{
              left: '28%',
              bottom: '30%',
              borderRadius: 6,
              border: '1px solid rgba(230,55,87,0.1)',
              backgroundColor: 'rgba(31,25,21,0.85)',
              boxShadow: '0 3px 12px rgba(0,0,0,0.15)',
              padding: '4px 8px'
            }}
          >
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div
                  className="size-1.5 rounded-full"
                  style={{ backgroundColor: 'rgba(52,211,153,0.5)' }}
                />
                <span className="text-[5px]" style={{ color: 'rgba(176,168,156,0.5)' }}>
                  Rendered
                </span>
              </div>
              <span className="text-[5px]" style={{ color: 'rgba(176,168,156,0.25)' }}>
                ·
              </span>
              <span className="text-[5px]" style={{ color: 'rgba(176,168,156,0.4)' }}>
                1080×1920
              </span>
              <span className="text-[5px]" style={{ color: 'rgba(176,168,156,0.25)' }}>
                ·
              </span>
              <span className="text-[5px]" style={{ color: 'rgba(176,168,156,0.4)' }}>
                Nova
              </span>
            </div>
          </div>
        </div>

        {/* Subtle coral ambient light */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 40% 70% at 75% 50%, rgba(230,55,87,0.1) 0%, transparent 70%)'
          }}
        />

        {/* Bottom gradient for text */}
        <div
          className="absolute inset-x-0 bottom-0 h-2/3"
          style={{
            background:
              'linear-gradient(to top, #1A1410 0%, rgba(26,20,16,0.8) 50%, transparent 100%)'
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
