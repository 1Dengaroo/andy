'use client';

import { useEffect, useState } from 'react';
import { Card } from '../ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '../ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { themes, getTheme } from '@/lib/theme/theme-registry';
import { cn } from '@/lib/utils';
import { Check, ChevronDown, Sparkles, Type } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useFont } from '@/lib/font/font-provider';

function ColorDots({
  colors,
  size = 'lg'
}: {
  colors: [string, string, string];
  size?: 'sm' | 'lg';
}) {
  return (
    <span className="flex items-center gap-0.5">
      {colors.map((color, i) => (
        <span
          key={i}
          className={cn(
            'shrink-0 rounded-full',
            size === 'lg' ? 'h-5 w-5' : 'h-3 w-3 border border-border/50'
          )}
          style={{ backgroundColor: color }}
        />
      ))}
    </span>
  );
}

function ThemePicker() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeTheme = mounted ? (getTheme(theme ?? '') ?? themes[0]) : themes[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            'flex items-center gap-2 rounded-full border border-input px-3 py-1.5 transition-all',
            'hover:scale-105 hover:border-ring/50',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'
          )}
          aria-label="Change theme"
        >
          <ColorDots colors={activeTheme.previewColors} />
          <span className="hidden text-sm font-medium sm:inline">
            {mounted ? activeTheme.name : '\u00A0'}
          </span>
          <ChevronDown className="hidden h-4 w-4 text-muted-foreground sm:block" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {themes.map((t) => {
          const isActive = mounted && theme === t.id;

          return (
            <DropdownMenuItem
              key={t.id}
              onClick={() => setTheme(t.id)}
              className="flex cursor-pointer items-center justify-between py-2.5"
            >
              <div className="flex items-center gap-3">
                <ColorDots colors={t.previewColors} size="sm" />
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.description}</div>
                </div>
              </div>
              {isActive && <Check className="h-4 w-4 text-primary" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function ParticlesToggle() {
  const [enabled, setEnabled] = useState(false);
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
          <button
            onClick={handleToggle}
            className={cn(
              'flex items-center gap-2 rounded-full border border-input px-3 py-1.5 text-sm transition-all',
              'hover:scale-105 hover:border-ring/50',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
              enabled ? 'text-accent-primary' : 'text-muted-foreground'
            )}
            aria-label={enabled ? 'Disable particle network' : 'Enable particle network'}
          >
            <Sparkles className={cn('h-4 w-4', enabled && 'animate-pulse-soft')} />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Toggle particle network</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

function FontPicker() {
  const { fontId, setFont, current, fonts, mounted } = useFont();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            'flex items-center gap-2 rounded-full border border-input px-3 py-1.5 transition-all',
            'hover:scale-105 hover:border-ring/50',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'
          )}
          aria-label="Change font"
        >
          <Type className="h-4 w-4 text-muted-foreground" />
          <span className="hidden text-sm font-medium sm:inline">
            {mounted ? current.name : '\u00A0'}
          </span>
          <ChevronDown className="hidden h-4 w-4 text-muted-foreground sm:block" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {fonts.map((f) => {
          const isActive = mounted && fontId === f.id;

          return (
            <DropdownMenuItem
              key={f.id}
              onClick={() => setFont(f.id)}
              className="flex cursor-pointer items-center justify-between py-2.5"
            >
              <div>
                <div className="text-sm font-medium">{f.name}</div>
                <div className="text-xs text-muted-foreground">{f.description}</div>
              </div>
              {isActive && <Check className="h-4 w-4 text-primary" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function Controls() {
  return (
    <Card className="flex w-full items-center justify-between px-4 py-2">
      <div>
        <h1 className="text-lg font-bold">Andy Deng</h1>
        <p className="text-xs text-muted-foreground">Software Engineer</p>
      </div>
      <div className="flex items-center gap-1.5 sm:gap-2">
        <ParticlesToggle />
        <FontPicker />
        <ThemePicker />
      </div>
    </Card>
  );
}
