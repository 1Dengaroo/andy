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
    id: 'crimson-pro',
    name: 'Crimson Pro',
    description: 'Elegant serif',
    variable: '--font-crimson-pro'
  },
  {
    id: 'outfit',
    name: 'Outfit',
    description: 'Modern geometric',
    variable: '--font-outfit'
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
