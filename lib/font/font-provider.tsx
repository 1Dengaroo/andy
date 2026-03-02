'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { fonts, defaultFontId, FontDefinition, getFont } from './font-registry';

interface FontContextValue {
  fontId: string;
  setFont: (id: string) => void;
  current: FontDefinition;
  fonts: FontDefinition[];
  mounted: boolean;
}

const FontContext = createContext<FontContextValue | null>(null);

export function FontProvider({ children }: { children: ReactNode }) {
  const [fontId, setFontId] = useState(defaultFontId);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('font-id');
    if (stored && getFont(stored)) {
      setFontId(stored);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const font = getFont(fontId);
    if (font) {
      document.body.style.fontFamily = `var(${font.variable})`;
    }
  }, [fontId, mounted]);

  const handleSetFont = (id: string) => {
    setFontId(id);
    localStorage.setItem('font-id', id);
  };

  const current = getFont(fontId) ?? fonts[0];

  return (
    <FontContext.Provider value={{ fontId, setFont: handleSetFont, current, fonts, mounted }}>
      {children}
    </FontContext.Provider>
  );
}

export function useFont() {
  const ctx = useContext(FontContext);
  if (!ctx) throw new Error('useFont must be used within FontProvider');
  return ctx;
}
