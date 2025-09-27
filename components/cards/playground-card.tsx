'use client';

import { useEffect } from 'react';
import { Card, CardContent } from '../ui/card';
import { Palette } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

function PlaygroundCard() {
  const hueColors = [
    { color: '217 91% 53%', label: 'Blue' },
    { color: '142 76% 36%', label: 'Green' },
    { color: '0 84% 60%', label: 'Red' },
    { color: '280 83% 60%', label: 'Purple' },
    { color: '45 93% 47%', label: 'Orange' },
    { color: '330 81% 60%', label: 'Pink' }
  ];

  // Load saved theme on mount
  useEffect(() => {
    const savedHue = sessionStorage.getItem('theme-hue');
    if (savedHue) {
      document.documentElement.style.setProperty('--hue', savedHue);
    }
  }, []);

  const handleColorClick = (hue: string) => {
    document.documentElement.style.setProperty('--hue', hue);
    sessionStorage.setItem('theme-hue', hue);
  };

  const handleCustomColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hex = e.target.value;
    const hsl = hexToHSL(hex);
    document.documentElement.style.setProperty('--hue', hsl);
    sessionStorage.setItem('theme-hue', hsl);
  };

  const hexToHSL = (hex: string): string => {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0,
      s = 0,
      l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r:
          h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
          break;
        case g:
          h = ((b - r) / d + 2) / 6;
          break;
        case b:
          h = ((r - g) / d + 4) / 6;
          break;
      }
    }

    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return `${h} ${s}% ${l}%`;
  };

  return (
    <Card className="group relative h-full overflow-hidden">
      <CardContent className="relative z-10 pt-6">
        <div className="flex justify-center gap-2">
          {hueColors.map((item) => (
            <Button
              key={item.color}
              onClick={() => handleColorClick(item.color)}
              className="h-8 w-8 rounded-full transition-transform hover:scale-110"
              style={{ backgroundColor: `hsl(${item.color})` }}
              aria-label={`Change theme to ${item.label}`}
            />
          ))}
          <label
            className="group relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-input bg-background transition-transform focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-1 hover:scale-110 hover:bg-accent"
            aria-label="Choose custom color"
          >
            <Input
              type="color"
              onChange={handleCustomColorChange}
              className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
            />
            <Palette className="pointer-events-none h-4 w-4 text-muted-foreground" />
          </label>
        </div>
      </CardContent>
    </Card>
  );
}

export default PlaygroundCard;
