export interface FontDefinition {
  id: string;
  name: string;
  description: string;
  variable: string; // CSS variable name e.g. --font-plus-jakarta
}

export const fonts: FontDefinition[] = [
  {
    id: 'sora',
    name: 'Sora',
    description: 'Sharp & geometric',
    variable: '--font-sora'
  },
  {
    id: 'plus-jakarta',
    name: 'Plus Jakarta Sans',
    description: 'Refined & contemporary',
    variable: '--font-plus-jakarta'
  },
  {
    id: 'lora',
    name: 'Lora',
    description: 'Warm serif',
    variable: '--font-lora'
  },
  {
    id: 'space-mono',
    name: 'Space Mono',
    description: 'Monospace terminal',
    variable: '--font-space-mono'
  }
];

export const defaultFontId = 'sora';

export function getFont(id: string): FontDefinition | undefined {
  return fonts.find((f) => f.id === id);
}
