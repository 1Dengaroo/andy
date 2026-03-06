'use client';

import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { ArrowUpRight, RefreshCw } from 'lucide-react';

function QuFlowCard() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Card
            id="quflow"
            className="relative h-full overflow-hidden focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            tabIndex={0}
          >
            <Button variant="ghost" asChild className="h-full w-full p-0" tabIndex={-1}>
              <a
                href="https://js-visualizer-xi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit QuFlow"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: 'url(/js-viz.webp)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                <CardContent className="relative z-10 w-full pt-6">
                  <div className="flex items-center justify-between px-2">
                    <div className="flex items-center gap-2">
                      <RefreshCw className="h-5 w-5 animate-pulse-soft text-white" />
                      <p className="text-xl font-light text-white">QuFlow</p>
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
            A JavaScript event loop visualizer. Step through code and watch how the call stack,
            microtask queue, and macrotask queue interact in real time.
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default QuFlowCard;
