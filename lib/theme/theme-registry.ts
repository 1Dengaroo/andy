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
    description: 'Paper & ink',
    isDark: false,
    previewColors: ['oklch(0.96 0.005 80)', 'oklch(0.42 0.14 360)', 'oklch(0.15 0.01 50)']
  },
  {
    id: 'dark',
    name: 'Dark',
    description: 'Slate & burgundy',
    isDark: true,
    previewColors: ['oklch(0.17 0.01 260)', 'oklch(0.62 0.14 360)', 'oklch(0.93 0.005 260)']
  },
  {
    id: 'minecraft',
    name: 'Minecraft',
    description: 'Blocky & crafted',
    isDark: true,
    previewColors: ['oklch(0.22 0.01 60)', 'oklch(0.58 0.15 145)', 'oklch(0.52 0.08 75)']
  },
  {
    id: 'dotcom',
    name: 'Dotcom',
    description: 'Windows 95 nostalgia',
    isDark: false,
    previewColors: ['oklch(0.82 0.005 250)', 'oklch(0.45 0.25 265)', 'oklch(0.10 0.005 250)']
  },
  {
    id: 'spotify',
    name: 'Spotify',
    description: 'True black & green',
    isDark: true,
    previewColors: ['oklch(0.15 0.003 0)', 'oklch(0.75 0.20 155)', 'oklch(0.48 0.004 0)']
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
