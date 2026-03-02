'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '../ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '../ui/dropdown-menu';
import { themes, getTheme } from '@/lib/theme/theme-registry';
import { cn } from '@/lib/utils';
import { Check, ChevronDown } from 'lucide-react';
import { useTheme } from 'next-themes';

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

function ThemePickerCard() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeTheme = mounted ? (getTheme(theme ?? '') ?? themes[0]) : themes[0];

  return (
    <Card id="theme-picker" className="group relative h-full overflow-hidden">
      <CardContent className="relative z-10 flex items-center justify-center pt-6">
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
              <span className="text-sm font-medium">{mounted ? activeTheme.name : '\u00A0'}</span>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center" className="w-56">
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
      </CardContent>
    </Card>
  );
}

export default ThemePickerCard;
