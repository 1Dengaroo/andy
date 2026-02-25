'use client';

import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { ArrowUpRight, Play } from 'lucide-react';

function KallioCard() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Card
            id="kallio"
            className="group relative h-full overflow-hidden transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            tabIndex={0}
          >
            <Button variant="ghost" asChild className="h-full w-full p-0" tabIndex={-1}>
              <a
                href="https://kallio.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Kallio Video Editor"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: 'url(/kallio.png)' }}
                />
                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />

                <CardContent className="relative z-10 w-full pt-6">
                  <div className="flex items-center justify-between px-2">
                    <div className="flex items-center gap-2">
                      <Play className="animate-pulse-soft h-5 w-5 fill-white text-white" />
                      <p className="text-xl font-light text-white">Kallio</p>
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
            A browser-based video editor built with React and Remotion. Edit videos directly in your
            browser with no downloads required.
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default KallioCard;
