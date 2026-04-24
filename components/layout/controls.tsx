'use client';

import { useEffect, useState } from 'react';
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
import { backgrounds } from '@/components/backgrounds/background-registry';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { useFont } from '@/lib/font/font-provider';

function useBackground() {
  const [backgroundId, setBackgroundId] = useState('none');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('background-id');
    if (stored !== null) {
      setBackgroundId(stored);
    }
  }, []);

  const setBackground = (id: string) => {
    setBackgroundId(id);
    localStorage.setItem('background-id', id);
    window.dispatchEvent(new CustomEvent('background-change', { detail: id }));
  };

  return { backgroundId, setBackground, mounted };
}

function SettingsDialog({
  contentVisible,
  onToggleContent
}: {
  contentVisible: boolean;
  onToggleContent: () => void;
}) {
  const { theme, setTheme } = useTheme();
  const { fontId, setFont, fonts, mounted: fontMounted } = useFont();
  const background = useBackground();
  const [mounted, setMounted] = useState(false);
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
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  'group relative flex items-center gap-1 rounded-sm p-1.5 transition-all duration-300'
                )}
                aria-label="Settings"
              >
                {activeTheme.previewColors.map((color, i) => (
                  <span
                    key={i}
                    className={cn(
                      'inline-block rounded-[1px] transition-all duration-300',
                      'group-hover:shadow-[0_0_6px_currentColor]',
                      i === 0 ? 'size-2.5' : i === 1 ? 'size-3' : 'size-2.5'
                    )}
                    style={{
                      backgroundColor: color,
                      boxShadow: `0 0 0 1px oklch(var(--border-subtle))`
                    }}
                  />
                ))}
              </Button>
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
              {themes.map((t) => {
                const isActive = mounted && theme === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className={cn(
                      'flex flex-col items-center gap-1.5 rounded-sm border p-3 text-xs transition-colors',
                      'hover:bg-accent/50',
                      isActive ? 'border-primary ring-1 ring-primary' : 'border-border'
                    )}
                  >
                    <div className="flex gap-1">
                      {t.previewColors.map((color, i) => (
                        <span
                          key={i}
                          className="inline-block size-3.5 rounded-[1px] border border-border/50"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <span>{t.name}</span>
                  </button>
                );
              })}
            </div>
          </section>

          <section>
            <h3 className="mb-3 text-sm font-medium">Font</h3>
            <select
              value={fontMounted ? fontId : ''}
              onChange={(e) => setFont(e.target.value)}
              className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm text-foreground transition-colors hover:border-ring/50 focus:border-ring"
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
            <h3 className="mb-3 text-sm font-medium">Background</h3>
            <select
              value={background.mounted ? background.backgroundId : 'none'}
              onChange={(e) => background.setBackground(e.target.value)}
              className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm text-foreground transition-colors hover:border-ring/50 focus:border-ring"
            >
              {backgrounds.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name}
                </option>
              ))}
            </select>
            <p className="mt-1.5 text-xs text-muted-foreground">
              Backgrounds look best on dark themes.
            </p>
          </section>

          <section>
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">Hide content</h3>
              <button
                onClick={onToggleContent}
                role="switch"
                aria-checked={!contentVisible}
                className={cn(
                  'relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors',
                  !contentVisible ? 'bg-primary' : 'bg-input'
                )}
              >
                <span
                  className={cn(
                    'pointer-events-none inline-block size-4 rounded-full bg-background shadow-sm ring-0 transition-transform',
                    !contentVisible ? 'translate-x-4' : 'translate-x-0'
                  )}
                />
              </button>
            </div>
            <p className="mt-1.5 text-xs text-muted-foreground">
              Hide all cards to view the background.
            </p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function Controls({
  contentVisible,
  onToggleContent
}: {
  contentVisible: boolean;
  onToggleContent: () => void;
}) {
  return (
    <Card className="flex w-full items-center justify-between px-4 py-3">
      <div>
        <h1 className="heading-serif text-xl font-semibold tracking-tight">Andy Deng</h1>
        <p className="section-label">Full-Stack Product Engineer</p>
      </div>
      <div className="flex items-center gap-1.5 sm:gap-2">
        <SettingsDialog contentVisible={contentVisible} onToggleContent={onToggleContent} />
      </div>
    </Card>
  );
}
