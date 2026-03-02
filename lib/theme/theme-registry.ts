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
    description: 'Warm and refined',
    isDark: false,
    previewColors: ['oklch(0.96 0.01 75)', 'oklch(0.55 0.12 55)', 'oklch(0.58 0.1 15)']
  },
  {
    id: 'dark',
    name: 'Dark',
    description: 'Rich and elegant',
    isDark: true,
    previewColors: ['oklch(0.16 0.015 50)', 'oklch(0.62 0.12 65)', 'oklch(0.6 0.1 25)']
  },
  {
    id: 'neon',
    name: 'Neon',
    description: 'Cyberpunk nightlife',
    isDark: true,
    previewColors: ['oklch(0.12 0.03 290)', 'oklch(0.7 0.28 330)', 'oklch(0.75 0.18 195)']
  },
  {
    id: 'retro',
    name: 'Retro',
    description: '70s nostalgia',
    isDark: false,
    previewColors: ['oklch(0.93 0.025 80)', 'oklch(0.62 0.18 45)', 'oklch(0.55 0.12 145)']
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
    id: 'honey',
    name: 'Honey',
    description: 'Golden and warm',
    isDark: false,
    previewColors: ['oklch(0.95 0.02 75)', 'oklch(0.62 0.17 65)', 'oklch(0.55 0.14 35)']
  }
];

export const themeIds = themes.map((t) => t.id);

export function getTheme(id: string): ThemeDefinition | undefined {
  return themes.find((t) => t.id === id);
}
