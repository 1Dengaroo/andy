'use client';

import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { ArrowUpRight, Braces } from 'lucide-react';

function ParselyCard() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Card
            id="parsely"
            className="group relative h-full overflow-hidden transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            tabIndex={0}
          >
            <Button variant="ghost" asChild className="h-full w-full p-0" tabIndex={-1}>
              <a
                href="https://parsely-two.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Parsely"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: 'url(/parsely.png)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                <CardContent className="relative z-10 w-full pt-6">
                  <div className="flex items-center justify-between px-2">
                    <div className="flex items-center gap-2">
                      <Braces className="h-5 w-5 animate-pulse-soft text-white" />
                      <p className="text-xl font-light text-white">Parsely</p>
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
            A modern JSON tool with formatting, minifying, sorting, and diffing. Clean UX, no ads,
            no popups — built because the popular ones are unusable.
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default ParselyCard;
