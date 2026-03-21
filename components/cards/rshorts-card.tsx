'use client';

import { Card, CardContent } from '../ui/card';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { ProjectModal, useHashModal } from './project-modal';

function RShortsCard() {
  const [open, setOpen] = useHashModal('rshorts');

  return (
    <>
      <Card
        id="rshorts"
        className="group relative aspect-[5/2] cursor-pointer overflow-hidden !border-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setOpen(true);
          }
        }}
      >
        <video
          src="/videos/rshorts.mov"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover brightness-[0.55] transition-all duration-700 group-hover:scale-105 group-hover:brightness-[0.7]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <CardContent className="relative z-10 flex h-full w-full flex-col justify-end p-5">
          <div className="flex items-end justify-between">
            <div>
              <span className="mb-1 block font-mono text-[0.6rem] uppercase tracking-widest text-white/50">
                Project
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
        preview={
          <video
            src="/videos/rshorts.mov"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover object-[18%_center]"
          />
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
        <p>Built with Remotion, rendered with AWS Lambda and stored in S3.</p>
      </ProjectModal>
    </>
  );
}

export default RShortsCard;
