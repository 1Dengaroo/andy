'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';

function RShortsCard() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.location.hash === '#rshorts') {
      setOpen(true);
    }

    const onHashChange = () => {
      if (window.location.hash === '#rshorts') {
        setOpen(true);
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    if (!open && window.location.hash === '#rshorts') {
      history.replaceState(null, '', window.location.pathname);
    }
  }, [open]);

  return (
    <>
      <Card
        id="rshorts"
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
        <video
          src="/rshorts.mov"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        <CardContent className="relative z-10 w-full pt-6">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <Image
                src="/rshorts-logo.svg"
                alt="r/Shorts"
                width={24}
                height={24}
                className="rounded-lg"
              />
              <span
                className="text-2xl font-bold tracking-tight text-white"
                style={{ fontFamily: 'var(--font-bricolage)' }}
              >
                r/Shorts
              </span>
            </div>
            <Button variant="ghost" size="icon" className="text-white" tabIndex={-1}>
              <ArrowUpRight className="h-5 w-5" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="overflow-hidden sm:max-w-lg">
          <div className="relative -mx-6 -mt-6 aspect-video overflow-hidden">
            <video
              src="/rshorts.mov"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover object-[18%_center]"
            />
          </div>
          <DialogHeader>
            <div className="flex items-center gap-2">
              <Image
                src="/rshorts-logo.svg"
                alt="r/Shorts"
                width={20}
                height={20}
                className="rounded-lg"
              />
              <DialogTitle>r/Shorts</DialogTitle>
            </div>
            <DialogDescription>AI-powered short-form video generator</DialogDescription>
          </DialogHeader>
          <div className="space-y-3 text-sm text-foreground">
            <p>
              An AI Shorts-style video generator. Paste a prompt, get a fully narrated, captioned
              video ready for TikTok, Reels, and YouTube Shorts.
            </p>
            <p>Built with Remotion, rendered with AWS Lambda and stored in S3.</p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://rshorts.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-accent-primary hover:underline"
              >
                rshorts.app <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default RShortsCard;
