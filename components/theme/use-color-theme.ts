'use client';

import { useEffect, useState } from 'react';
import { themeNames } from '@/lib/themes';

export function useColorTheme() {
  const [colorTheme, setColorTheme] = useState('indie');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('color-theme');
    if (stored && themeNames.includes(stored)) {
      setColorTheme(stored);
      document.documentElement.setAttribute('data-theme', stored);
    }
  }, []);

  const setTheme = (name: string) => {
    if (!themeNames.includes(name)) return;
    setColorTheme(name);
    document.documentElement.setAttribute('data-theme', name);
    localStorage.setItem('color-theme', name);
  };

  return { colorTheme, setTheme, mounted };
}
