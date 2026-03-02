'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes';
import { themes } from './theme-registry';

function DarkClassManager() {
  const { theme } = useTheme();

  React.useEffect(() => {
    const def = themes.find((t) => t.id === theme);
    if (def?.isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return null;
}

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      <DarkClassManager />
      {children}
    </NextThemesProvider>
  );
}
