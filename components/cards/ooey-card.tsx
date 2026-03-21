'use client';

import { Card, CardContent } from '../ui/card';
import { ArrowUpRight } from 'lucide-react';
import { ProjectModal, useHashModal } from './project-modal';

function OoeyCard() {
  const [open, setOpen] = useHashModal('ooey');

  return (
    <>
      <Card
        id="ooey"
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
        <div className="absolute inset-0 bg-neutral-900" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50 transition-all duration-700 group-hover:scale-105 group-hover:opacity-65"
          style={{ backgroundImage: `url(/images/ooey.webp)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <CardContent className="relative z-10 flex h-full w-full flex-col justify-end p-5">
          <div className="flex items-end justify-between">
            <div>
              <span className="mb-1 block font-mono text-[0.6rem] uppercase tracking-widest text-white/50">
                Freelance
              </span>
              <p className="heading-serif text-xl font-light text-white sm:text-2xl">Ooey</p>
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
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(/images/ooey.webp)` }}
          />
        }
        title="Ooey"
        subtitle="New bakery started in Boston"
        link={{ label: 'ooeybakery.com', href: 'https://ooeybakery.com' }}
      >
        <p>
          A freelance project for a new bakery started in Boston. Built with Next.js and TypeScript,
          focused on simplicity, ease of use, and easy customization. Uses Supabase for
          authentication and storage, and Resend for transactional emails.
        </p>
      </ProjectModal>
    </>
  );
}

export default OoeyCard;
