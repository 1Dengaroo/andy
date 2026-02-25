'use client';

import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { ArrowUpRight } from 'lucide-react';

function KallioCard() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Card
            className="group relative h-full overflow-hidden transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            tabIndex={0}
          >
            <Button variant="link" asChild className="h-full w-full p-0" tabIndex={-1}>
              <a
                href="https://kallio.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Kallio Video Editor"
              >
                {/* Animated film strip background */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* Film perforations - left side */}
                  <div className="animate-film-scroll absolute left-1 top-0 flex h-full flex-col gap-2">
                    {[...Array(12)].map((_, i) => (
                      <div key={`left-${i}`} className="h-3 w-2 rounded-sm bg-foreground/20" />
                    ))}
                  </div>
                  {/* Film perforations - right side */}
                  <div className="animate-film-scroll absolute right-1 top-0 flex h-full flex-col gap-2">
                    {[...Array(12)].map((_, i) => (
                      <div key={`right-${i}`} className="h-3 w-2 rounded-sm bg-foreground/20" />
                    ))}
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-hue/20 via-transparent to-hue/10" />
                </div>

                <CardContent className="relative z-10 w-full pt-6">
                  <div className="flex items-center justify-between px-2">
                    {/* Play button icon */}
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-hue bg-hue/20 transition-transform group-hover:scale-110">
                        <div className="ml-0.5 h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-hue" />
                      </div>
                      <p className="text-center align-middle font-serif text-xl">Kallio</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="focus:text-hue group-hover:text-hue group-focus:text-hue"
                    >
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
            browser with no uploads required.
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default KallioCard;
