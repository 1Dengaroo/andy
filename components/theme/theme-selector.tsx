'use client';

import * as React from 'react';
import { Moon, Sun, Palette, Check } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger
} from '@/components/ui/dropdown-menu';
import { themes } from '@/lib/themes';

export function ThemeSelector({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [colorTheme, setColorTheme] = React.useState('default');

  React.useEffect(() => {
    // Read color theme from data attribute
    const stored = document.documentElement.getAttribute('data-theme') || 'default';
    setColorTheme(stored);
  }, []);

  const handleColorTheme = (name: string) => {
    setColorTheme(name);
    document.documentElement.setAttribute('data-theme', name);
    localStorage.setItem('color-theme', name);
  };

  const handleMode = (mode: string) => {
    setTheme(mode);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className={className}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Palette className="mr-2 h-4 w-4" />
            Color Theme
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            {themes.map((t) => (
              <DropdownMenuItem key={t.name} onClick={() => handleColorTheme(t.name)}>
                {colorTheme === t.name && <Check className="mr-2 h-4 w-4" />}
                {colorTheme !== t.name && <span className="mr-2 w-4" />}
                {t.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleMode('light')}>
          {resolvedTheme === 'light' && theme !== 'system' && <Check className="mr-2 h-4 w-4" />}
          {(resolvedTheme !== 'light' || theme === 'system') && <span className="mr-2 w-4" />}
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleMode('dark')}>
          {resolvedTheme === 'dark' && theme !== 'system' && <Check className="mr-2 h-4 w-4" />}
          {(resolvedTheme !== 'dark' || theme === 'system') && <span className="mr-2 w-4" />}
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleMode('system')}>
          {theme === 'system' && <Check className="mr-2 h-4 w-4" />}
          {theme !== 'system' && <span className="mr-2 w-4" />}
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
