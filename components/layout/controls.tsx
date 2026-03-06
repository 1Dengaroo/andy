'use client';

import { useEffect, useState } from 'react';
import { Card } from '../ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '../ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { themes, getTheme } from '@/lib/theme/theme-registry';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useFont } from '@/lib/font/font-provider';

function useParticles() {
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

  const toggle = () => {
    const newValue = !enabled;
    setEnabled(newValue);
    localStorage.setItem('particles-enabled', String(newValue));
  };

  return { enabled, toggle, mounted };
}

function SettingsDialog() {
  const { theme, setTheme } = useTheme();
  const { fontId, setFont, fonts, mounted: fontMounted } = useFont();
  const particles = useParticles();
  const [mounted, setMounted] = useState(false);
  const [showAllThemes, setShowAllThemes] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeTheme = mounted ? (getTheme(theme ?? '') ?? themes[0]) : themes[0];

  return (
    <Dialog>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <button
                className={cn(
                  'group relative flex items-center gap-1.5 rounded-full p-1.5 transition-all duration-300',
                  'hover:scale-110',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'
                )}
                aria-label="Settings"
              >
                {activeTheme.previewColors.map((color, i) => (
                  <span
                    key={i}
                    className={cn(
                      'inline-block rounded-full transition-all duration-300',
                      'group-hover:shadow-[0_0_8px_currentColor]',
                      i === 0 ? 'size-3' : i === 1 ? 'size-3.5' : 'size-3'
                    )}
                    style={{
                      backgroundColor: color,
                      boxShadow: `0 0 0 1px oklch(var(--border-subtle))`
                    }}
                  />
                ))}
                <span
                  className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle, oklch(var(--accent-primary) / 0.08) 0%, transparent 70%)`
                  }}
                />
              </button>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Customize</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>Customize your experience.</DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          <section>
            <h3 className="mb-3 text-sm font-medium">Theme</h3>
            <div className="grid grid-cols-3 gap-2">
              {(showAllThemes
                ? themes
                : themes.filter((t) => t.id === 'light' || t.id === 'dark' || t.id === theme)
              ).map((t) => {
                const isActive = mounted && theme === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className={cn(
                      'flex flex-col items-center gap-1.5 rounded-lg border p-3 text-xs transition-colors',
                      'hover:bg-accent/50',
                      isActive ? 'border-primary ring-1 ring-primary' : 'border-border'
                    )}
                  >
                    <div className="flex gap-1">
                      {t.previewColors.map((color, i) => (
                        <span
                          key={i}
                          className="inline-block size-3.5 rounded-full border border-border/50"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <span>{t.name}</span>
                  </button>
                );
              })}
            </div>
            {themes.length > 2 && (
              <button
                onClick={() => setShowAllThemes((prev) => !prev)}
                className="mt-2 flex w-full items-center justify-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                <span>{showAllThemes ? 'Show less' : `${themes.length - 2} more themes`}</span>
                <ChevronDown
                  className={cn('size-3 transition-transform', showAllThemes && 'rotate-180')}
                />
              </button>
            )}
          </section>

          <section>
            <h3 className="mb-3 text-sm font-medium">Font</h3>
            <select
              value={fontMounted ? fontId : ''}
              onChange={(e) => setFont(e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground transition-colors hover:border-ring/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              style={{
                fontFamily: fontMounted
                  ? `var(${fonts.find((f) => f.id === fontId)?.variable})`
                  : undefined
              }}
            >
              {fonts.map((f) => (
                <option key={f.id} value={f.id} style={{ fontFamily: `var(${f.variable})` }}>
                  {f.name}
                </option>
              ))}
            </select>
          </section>

          <section>
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">Particle network</h3>
              <button
                onClick={particles.toggle}
                role="switch"
                aria-checked={particles.enabled}
                className={cn(
                  'relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors',
                  particles.enabled ? 'bg-primary' : 'bg-input'
                )}
              >
                <span
                  className={cn(
                    'pointer-events-none inline-block size-4 rounded-full bg-background shadow-sm ring-0 transition-transform',
                    particles.enabled ? 'translate-x-4' : 'translate-x-0'
                  )}
                />
              </button>
            </div>
            <p className="mt-1.5 text-xs text-muted-foreground">
              Animated background effect. Looks best on dark themes.
            </p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
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
        <SettingsDialog />
      </div>
    </Card>
  );
}
