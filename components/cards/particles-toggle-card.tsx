'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

function ParticlesToggleCard() {
  const [enabled, setEnabled] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('particles-enabled');
    if (stored !== null) {
      setEnabled(stored === 'true');
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    window.dispatchEvent(new CustomEvent('particles-toggle', { detail: enabled }));
  }, [enabled, mounted]);

  const handleToggle = () => {
    const newValue = !enabled;
    setEnabled(newValue);
    localStorage.setItem('particles-enabled', String(newValue));
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Card id="particles-toggle" className="group relative h-full overflow-hidden">
            <CardContent className="relative z-10 flex items-center justify-center pt-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleToggle}
                className={`flex items-center gap-2 transition-all ${enabled ? 'text-hue' : 'text-muted-foreground'}`}
                aria-label={enabled ? 'Disable particles' : 'Enable particles'}
              >
                <Sparkles className={`h-4 w-4 ${enabled ? 'animate-pulse-soft' : ''}`} />
                <span className="text-sm">{enabled ? 'Particles On' : 'Particles Off'}</span>
              </Button>
            </CardContent>
          </Card>
        </TooltipTrigger>
        <TooltipContent>
          <p>Toggle background particles. Disable if experiencing performance issues.</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default ParticlesToggleCard;
