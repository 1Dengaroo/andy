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
        <div className="absolute inset-0 bg-black" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url(${everaBackgroundImage})` }}
        />
        <CardContent className="relative z-10 w-full pt-6">
          <div className="flex items-center justify-between px-6">
            <p className="relative text-center align-middle font-serif text-2xl text-white">
              Evera Fashion
            </p>
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
