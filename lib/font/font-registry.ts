export interface FontDefinition {
  id: string;
  name: string;
  description: string;
  variable: string; // CSS variable name e.g. --font-plus-jakarta
}

export const fonts: FontDefinition[] = [
  {
    id: 'plus-jakarta',
    name: 'Plus Jakarta Sans',
    description: 'Refined & contemporary',
    variable: '--font-plus-jakarta'
  },
  {
    id: 'bricolage',
    name: 'Bricolage Grotesque',
    description: 'Quirky & characterful',
    variable: '--font-bricolage'
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
  },
  {
    id: 'instrument-sans',
    name: 'Instrument Sans',
    description: 'Clean editorial',
    variable: '--font-instrument-sans'
  }
];

export const defaultFontId = 'plus-jakarta';

export function getFont(id: string): FontDefinition | undefined {
  return fonts.find((f) => f.id === id);
}
