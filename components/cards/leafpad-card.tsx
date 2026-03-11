'use client';

import { Card, CardContent } from '../ui/card';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { ProjectModal, useHashModal } from './project-modal';

function LeafpadCard() {
  const [open, setOpen] = useHashModal('leafpad');

  return (
    <>
      <Card
        id="leafpad"
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
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[0.55] transition-all duration-700 group-hover:scale-105 group-hover:brightness-[0.7]"
          style={{ backgroundImage: 'url(/leafpad.png)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <CardContent className="relative z-10 flex h-full w-full flex-col justify-end p-5">
          <div className="flex items-end justify-between">
            <div>
              <span className="mb-1 block font-mono text-[0.6rem] uppercase tracking-widest text-white/50">
                Project
              </span>
              <div className="flex items-center gap-2">
                <Image src="/leafpad-logo.svg" alt="Leafpad" width={18} height={18} />
                <span
                  className="text-lg font-bold tracking-tight text-white sm:text-xl"
                  style={{ fontFamily: 'var(--font-sora)', letterSpacing: '-0.025em' }}
                >
                  Leafpad
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
        preview={
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: 'url(/leafpad.png)' }}
          />
        }
        logo={<Image src="/leafpad-logo.svg" alt="Leafpad" width={20} height={20} />}
        title="Leafpad"
        subtitle="A clean set of developer tools"
        link={{ label: 'leafpad.app', href: 'https://leafpad.app' }}
      >
        <p>
          I wanted a clean markdown editor, a fast JSON formatter, and a simple notepad that I
          actually enjoyed using. So I built them all in one place.
        </p>
        <p>
          Leafpad is simple, free, and focused. No ads, no accounts, no distractions. Just the
          tools, done well.
        </p>
      </ProjectModal>
    </>
  );
}

export default LeafpadCard;
