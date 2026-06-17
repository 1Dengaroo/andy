'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes';
import { themes } from './theme-registry';

function DarkClassManager() {
  const { theme, resolvedTheme } = useTheme();

  React.useEffect(() => {
    const effective = theme === 'system' ? resolvedTheme : theme;
    const def = themes.find((t) => t.id === effective);
    if (def?.isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme, resolvedTheme]);

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
