export interface ThemeDefinition {
  id: string;
  name: string;
  description: string;
  isDark: boolean;
  previewColors: [string, string, string];
}

export const themes: ThemeDefinition[] = [
  {
    id: 'light',
    name: 'Light',
    description: 'Warm stone & brass',
    isDark: false,
    previewColors: ['oklch(0.975 0.006 70)', 'oklch(0.55 0.13 55)', 'oklch(0.17 0.012 45)']
  },
  {
    id: 'dark',
    name: 'Dark',
    description: 'Charcoal & gold',
    isDark: true,
    previewColors: ['oklch(0.17 0.010 45)', 'oklch(0.68 0.14 65)', 'oklch(0.92 0.015 60)']
  },
  {
    id: 'candy',
    name: 'Candy',
    description: 'Bubblegum fun',
    isDark: false,
    previewColors: ['oklch(0.96 0.02 290)', 'oklch(0.6 0.24 350)', 'oklch(0.55 0.2 300)']
  },
  {
    id: 'sakura',
    name: 'Sakura',
    description: 'Soft and floral',
    isDark: false,
    previewColors: ['oklch(0.96 0.01 350)', 'oklch(0.6 0.15 350)', 'oklch(0.55 0.12 320)']
  },
  {
    id: 'arctic',
    name: 'Arctic',
    description: 'Cool and crisp',
    isDark: false,
    previewColors: ['oklch(0.97 0.008 220)', 'oklch(0.6 0.14 230)', 'oklch(0.7 0.1 200)']
  },
  {
    id: 'midnight',
    name: 'Midnight',
    description: 'Deep and electric',
    isDark: true,
    previewColors: ['oklch(0.13 0.03 265)', 'oklch(0.68 0.16 235)', 'oklch(0.6 0.14 275)']
  },
  {
    id: 'birch',
    name: 'Birch',
    description: 'Bark & golden amber',
    isDark: false,
    previewColors: ['oklch(0.975 0.005 65)', 'oklch(0.58 0.14 80)', 'oklch(0.30 0.01 50)']
  }
];

export const themeIds = themes.map((t) => t.id);

export function getTheme(id: string): ThemeDefinition | undefined {
  return themes.find((t) => t.id === id);
}
