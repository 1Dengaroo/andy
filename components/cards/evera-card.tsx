'use client';

import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { everaBackgroundImage } from '@/lib/data';
import { ArrowUpRight } from 'lucide-react';

function EveraCard() {
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
                href="https://everafashion.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Evera Fashion"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-60"
                  style={{ backgroundImage: `url(${everaBackgroundImage})` }}
                />
                <CardContent className="relative z-10 w-full pt-6">
                  <div className="flex items-center justify-between px-6">
                    <p className="text-center align-middle font-serif text-2xl">Evera Fashion</p>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="group-hover:text-hue group-focus:text-hue focus:text-hue"
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
            An ecommerce site I developed from scratch for my mother&apos;s clothing brand. Handled
            real transactions and fulfilled <span className="text-hue font-bold">25+</span> customer
            orders during its operation.
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default EveraCard;
