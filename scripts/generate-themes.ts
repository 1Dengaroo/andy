import { themes, ThemeColors } from '../lib/themes';
import * as fs from 'fs';
import * as path from 'path';

function colorsToCss(colors: ThemeColors): string {
  return `  --background: ${colors.background};
  --foreground: ${colors.foreground};
  --card: ${colors.card};
  --card-foreground: ${colors.cardForeground};
  --popover: ${colors.popover};
  --popover-foreground: ${colors.popoverForeground};
  --primary: ${colors.primary};
  --primary-foreground: ${colors.primaryForeground};
  --secondary: ${colors.secondary};
  --secondary-foreground: ${colors.secondaryForeground};
  --muted: ${colors.muted};
  --muted-foreground: ${colors.mutedForeground};
  --accent: ${colors.accent};
  --accent-foreground: ${colors.accentForeground};
  --destructive: ${colors.destructive};
  --destructive-foreground: ${colors.destructiveForeground};
  --border: ${colors.border};
  --input: ${colors.input};
  --ring: ${colors.ring};
  --radius: 0.5rem;
  --chart-1: ${colors.chart1};
  --chart-2: ${colors.chart2};
  --chart-3: ${colors.chart3};
  --chart-4: ${colors.chart4};
  --chart-5: ${colors.chart5};
  --sidebar-background: ${colors.sidebarBackground};
  --sidebar-foreground: ${colors.sidebarForeground};
  --sidebar-primary: ${colors.sidebarPrimary};
  --sidebar-primary-foreground: ${colors.sidebarPrimaryForeground};
  --sidebar-accent: ${colors.sidebarAccent};
  --sidebar-accent-foreground: ${colors.sidebarAccentForeground};
  --sidebar-border: ${colors.sidebarBorder};
  --sidebar-ring: ${colors.sidebarRing};`;
}

function generateThemesCss(): string {
  let css = '/* Auto-generated from lib/themes.ts - do not edit directly */\n\n';

  for (const theme of themes) {
    const isDefault = theme.name === 'indie';

    // Light mode
    if (isDefault) {
      css += `:root,\n[data-theme="${theme.name}"] {\n`;
    } else {
      css += `[data-theme="${theme.name}"] {\n`;
    }
    css += colorsToCss(theme.colors.light);
    css += '\n}\n\n';

    // Dark mode
    if (isDefault) {
      css += `.dark,\n[data-theme="${theme.name}"].dark,\n[data-theme="${theme.name}"] .dark {\n`;
    } else {
      css += `[data-theme="${theme.name}"].dark,\n[data-theme="${theme.name}"] .dark {\n`;
    }
    css += colorsToCss(theme.colors.dark);
    css += '\n}\n\n';
  }

  return css;
}

// Generate and write the CSS file
const themesDir = path.join(__dirname, '../styles/themes');
if (!fs.existsSync(themesDir)) {
  fs.mkdirSync(themesDir, { recursive: true });
}

const cssContent = generateThemesCss();
fs.writeFileSync(path.join(themesDir, 'generated.css'), cssContent);

console.log('Generated styles/themes/generated.css');
