'use client';

import { useEffect } from 'react';

const DEFAULT_HUE = '0 0% 100%';

const ThemeHueProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const savedHue = sessionStorage.getItem('theme-hue');
    document.documentElement.style.setProperty('--hue', savedHue || DEFAULT_HUE);

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'theme-hue' && e.newValue) {
        document.documentElement.style.setProperty('--hue', e.newValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return <>{children}</>;
};

export default ThemeHueProvider;
