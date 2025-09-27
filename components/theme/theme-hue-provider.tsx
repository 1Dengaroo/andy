'use client';

import { useEffect } from 'react';

const ThemeHueProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const savedHue = sessionStorage.getItem('theme-hue');
    if (savedHue) {
      document.documentElement.style.setProperty('--hue', savedHue);
    }

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
