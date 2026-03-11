'use client';

import { Card, CardContent } from '../ui/card';
import { everaBackgroundImage } from '@/lib/data';
import { ArrowUpRight } from 'lucide-react';
import { ProjectModal, useHashModal } from './project-modal';

function EveraCard() {
  const [open, setOpen] = useHashModal('evera');

  return (
    <>
      <Card
        id="evera"
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
          style={{ backgroundImage: `url(${everaBackgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <CardContent className="relative z-10 flex h-full w-full flex-col justify-end p-5">
          <div className="flex items-end justify-between">
            <div>
              <span className="mb-1 block font-mono text-[0.6rem] uppercase tracking-widest text-white/50">
                Project
              </span>
              <p className="heading-serif text-xl font-light text-white sm:text-2xl">
                Evera Fashion
              </p>
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
            style={{ backgroundImage: `url(${everaBackgroundImage})` }}
          />
        }
        title="Evera Fashion"
        subtitle="Ecommerce site for a clothing brand"
        link={{ label: 'everafashion.com', href: 'https://everafashion.com' }}
      >
        <p>
          An ecommerce site I developed from scratch for my mother&apos;s clothing brand. Handled
          real transactions and fulfilled 70+ customer orders during its operation.
        </p>
        <p>This has since moved to Shopify as I am no longer able to dedicate the time.</p>
      </ProjectModal>
    </>
  );
}

export default EveraCard;
