'use client';

import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { ArrowUpRight, Video } from 'lucide-react';
import { DemoPreview } from './demo-preview';

function RShortsCard() {
  return (
    <div className="relative h-full">
      {/* Demo preview peeking above the top-right corner */}
      <div className="pointer-events-none absolute -right-10 -top-24 z-10 rotate-6">
        <DemoPreview />
      </div>

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
                  <div
                    className="absolute inset-0 bg-[#1a1a14] bg-cover bg-center"
                    style={{ backgroundImage: 'url(/rshorts.png)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                  <CardContent className="relative z-10 w-full pt-6">
                    <div className="flex items-center justify-between px-2">
                      <div className="flex items-center gap-2">
                        <Video className="h-5 w-5 animate-pulse-soft text-white" />
                        <p className="text-xl font-light text-white">r/Shorts</p>
                        <span className="text-xs text-white/90">AI Short-Style Content</span>
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
              AWS Lambda and S3.
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export default RShortsCard;
