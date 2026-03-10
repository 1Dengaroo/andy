'use client';

import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { ProjectModal, useHashModal } from './project-modal';

function LeafpadCard() {
  const [open, setOpen] = useHashModal('leafpad');

  return (
    <>
      <Card
        id="leafpad"
        className="group relative h-full cursor-pointer overflow-hidden focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
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
          className="absolute inset-0 bg-cover bg-center brightness-75"
          style={{ backgroundImage: 'url(/leafpad.png)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        <CardContent className="relative z-10 w-full pt-6">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-3">
              <Image
                src="/leafpad-logo.svg"
                alt="Leafpad"
                width={22}
                height={22}
                className="animate-pulse-soft"
              />
              <span
                className="text-xl font-bold tracking-tight text-white"
                style={{ fontFamily: 'var(--font-sora)', letterSpacing: '-0.025em' }}
              >
                Leafpad
              </span>
            </div>
            <Button variant="ghost" size="icon" className="text-white" tabIndex={-1}>
              <ArrowUpRight className="h-5 w-5" />
            </Button>
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
