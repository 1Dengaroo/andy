'use client';

import { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ArrowUpRight, Info } from 'lucide-react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';

function LeafpadCard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card
        id="leafpad"
        className="group relative h-full overflow-hidden focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        tabIndex={0}
      >
        <Button variant="ghost" asChild className="h-full w-full p-0" tabIndex={-1}>
          <a
            href="https://leafpad.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Leafpad"
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
          </a>
        </Button>

        {/* Hover pill */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setOpen(true);
          }}
          className="absolute bottom-3 left-3 z-20 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-2.5 py-1 text-[11px] font-medium text-white/80 opacity-0 backdrop-blur-sm transition-opacity duration-200 hover:bg-black/70 hover:text-white group-hover:opacity-100"
        >
          Better Dev Tools
          <Info className="h-3 w-3" />
        </button>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Better Dev Tools</DialogTitle>
            <DialogDescription>Why I built Leafpad</DialogDescription>
          </DialogHeader>
          <div className="space-y-3 text-sm text-foreground">
            <p>
              I wanted a clean markdown editor, a fast JSON formatter, and a simple notepad that I
              actually enjoyed using. So I built them all in one place.
            </p>
            <p>
              Leafpad is simple, free, and focused. No ads, no accounts, no distractions. Just the
              tools, done well.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://leafpad.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-accent-primary hover:underline"
              >
                Leafpad <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default LeafpadCard;
