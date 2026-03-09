'use client';

import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

function RShortsCard() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Card
            id="rshorts"
            className="relative h-full overflow-hidden focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            tabIndex={0}
          >
            <Button variant="ghost" asChild className="h-full w-full p-0" tabIndex={-1}>
              <a
                href="https://rshorts.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit r/Shorts"
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
                    <Button variant="ghost" size="icon" className="text-white">
                      <ArrowUpRight className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </a>
            </Button>
          </Card>
        </TooltipTrigger>
        <TooltipContent className="max-w-64">
          <p>
            An AI Shorts-style video generator. Paste a prompt, get a fully narrated, captioned
            video ready for TikTok, Reels, and YouTube Shorts. Built with Remotion, rendered with
            AWS Lambda and stored in S3.
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default RShortsCard;
