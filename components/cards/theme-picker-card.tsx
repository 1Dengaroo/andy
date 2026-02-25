'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { themes, themeNames } from '@/lib/themes';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { useTheme } from 'next-themes';

function ThemePickerCard() {
  const [colorTheme, setColorTheme] = useState('indie');
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('color-theme');
    if (stored && themeNames.includes(stored)) {
      setColorTheme(stored);
    }
  }, []);

  const handleThemeClick = (name: string) => {
    setColorTheme(name);
    document.documentElement.setAttribute('data-theme', name);
    localStorage.setItem('color-theme', name);
  };

  const getThemeColors = (themeName: string) => {
    const theme = themes.find((t) => t.name === themeName);
    if (!theme) return null;

    const isDark = mounted && resolvedTheme === 'dark';
    const colors = isDark ? theme.colors.dark : theme.colors.light;

    return {
      primary: colors.primary,
      secondary: colors.secondary,
      accent: colors.accent
    };
  };

  return (
    <Card id="theme-picker" className="group relative h-full overflow-hidden">
      <CardContent className="relative z-10 pt-6">
        <div className="flex flex-nowrap justify-center gap-3">
          {themes.map((theme) => {
            const colors = getThemeColors(theme.name);
            const isActive = colorTheme === theme.name;

            return (
              <button
                key={theme.name}
                onClick={() => handleThemeClick(theme.name)}
                className={cn(
                  'relative flex h-8 shrink-0 items-center gap-0.5 rounded-full border px-1 transition-all hover:scale-105',
                  isActive
                    ? 'border-ring ring-2 ring-ring ring-offset-1 ring-offset-background'
                    : 'border-input hover:border-ring/50'
                )}
                aria-label={`Change theme to ${theme.label}`}
                title={theme.label}
              >
                {colors && (
                  <>
                    <span
                      className="h-5 w-5 shrink-0 rounded-full"
                      style={{ backgroundColor: `hsl(${colors.primary})` }}
                    />
                    <span
                      className="h-5 w-5 shrink-0 rounded-full"
                      style={{ backgroundColor: `hsl(${colors.secondary})` }}
                    />
                    <span
                      className="h-5 w-5 shrink-0 rounded-full"
                      style={{ backgroundColor: `hsl(${colors.accent})` }}
                    />
                  </>
                )}
                {isActive && (
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 animate-float items-center justify-center rounded-full bg-primary">
                    <Check className="h-3 w-3 text-primary-foreground" />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

export default ThemePickerCard;
