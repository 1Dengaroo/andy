'use client';

import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { everaBackgroundImage } from '@/lib/data';
import { ArrowUpRight } from 'lucide-react';
import { ProjectModal, useHashModal } from './project-modal';

function EveraCard() {
  const [open, setOpen] = useHashModal('evera');

  return (
    <>
      <Card
        id="evera"
        className="group relative aspect-[3/1] cursor-pointer overflow-hidden border-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
          className="absolute inset-0 bg-cover bg-center opacity-50 transition-all duration-500 group-hover:scale-105 group-hover:opacity-65"
          style={{ backgroundImage: `url(${everaBackgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <CardContent className="relative z-10 w-full pt-6">
          <div className="flex items-end justify-between px-2">
            <p className="font-serif text-2xl font-light text-white">Evera Fashion</p>
            <Button
              variant="ghost"
              size="icon"
              className="text-white/70 transition-colors group-hover:text-white"
              tabIndex={-1}
            >
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
