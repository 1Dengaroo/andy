export interface ThemeDefinition {
  id: string;
  name: string;
  description: string;
  isDark: boolean;
  previewColors: [string, string, string];
}

export const themes: ThemeDefinition[] = [
  {
    id: 'system',
    name: 'System',
    description: 'Follows OS preference',
    isDark: false,
    previewColors: ['oklch(0.97 0 0)', 'oklch(0.5 0 0)', 'oklch(0.15 0 0)']
  },
  {
    id: 'light',
    name: 'Light',
    description: 'Parchment & wine',
    isDark: false,
    previewColors: ['oklch(0.95 0.02 85)', 'oklch(0.34 0.13 12)', 'oklch(0.13 0.014 68)']
  },
  {
    id: 'dark',
    name: 'Dark',
    description: 'Slate & burgundy',
    isDark: true,
    previewColors: ['oklch(0.17 0.01 260)', 'oklch(0.62 0.14 360)', 'oklch(0.93 0.005 260)']
  },
  {
    id: 'nocturne',
    name: 'Clean',
    description: 'White & minimal',
    isDark: false,
    previewColors: ['oklch(1 0 0)', 'oklch(0.4 0.12 250)', 'oklch(0.1 0 0)']
  },
  {
    id: 'minecraft',
    name: 'Minecraft',
    description: 'Blocky & crafted',
    isDark: true,
    previewColors: ['oklch(0.22 0.01 60)', 'oklch(0.58 0.15 145)', 'oklch(0.52 0.08 75)']
  },
  {
    id: 'spotify',
    name: 'Spotify',
    description: 'Matte black & green',
    isDark: true,
    previewColors: ['oklch(0.16 0.003 0)', 'oklch(0.7 0.2 145)', 'oklch(0.98 0 0)']
  },
  {
    id: 'claude',
    name: 'Claude',
    description: 'Dark sand & terracotta',
    isDark: true,
    previewColors: ['oklch(0.18 0.015 50)', 'oklch(0.65 0.15 45)', 'oklch(0.92 0.01 70)']
  }
];

export const themeIds = themes.map((t) => t.id);

export function getTheme(id: string): ThemeDefinition | undefined {
  return themes.find((t) => t.id === id);
}
