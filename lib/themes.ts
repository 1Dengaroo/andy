export interface Theme {
  name: string;
  label: string;
  colors: {
    light: ThemeColors;
    dark: ThemeColors;
  };
}

export interface ThemeColors {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
  chart1: string;
  chart2: string;
  chart3: string;
  chart4: string;
  chart5: string;
  sidebarBackground: string;
  sidebarForeground: string;
  sidebarPrimary: string;
  sidebarPrimaryForeground: string;
  sidebarAccent: string;
  sidebarAccentForeground: string;
  sidebarBorder: string;
  sidebarRing: string;
}

// Add new themes here - each theme has light and dark variants
export const themes: Theme[] = [
  {
    name: 'default',
    label: 'Default',
    colors: {
      light: {
        background: '210 5% 98%',
        foreground: '210 10% 15%',
        card: '210 5% 98%',
        cardForeground: '210 10% 15%',
        popover: '210 5% 98%',
        popoverForeground: '210 10% 15%',
        primary: '200 80% 60%',
        primaryForeground: '200 90% 95%',
        secondary: '310 60% 65%',
        secondaryForeground: '210 15% 10%',
        muted: '210 5% 90%',
        mutedForeground: '210 10% 40%',
        accent: '210 5% 90%',
        accentForeground: '210 10% 15%',
        destructive: '0 75% 55%',
        destructiveForeground: '0 10% 95%',
        border: '210 10% 85%',
        input: '210 10% 85%',
        ring: '200 80% 60%',
        chart1: '200 80% 60%',
        chart2: '310 60% 65%',
        chart3: '120 60% 45%',
        chart4: '60 70% 50%',
        chart5: '340 60% 50%',
        sidebarBackground: '210 5% 95%',
        sidebarForeground: '210 10% 38%',
        sidebarPrimary: '200 80% 57%',
        sidebarPrimaryForeground: '200 90% 0%',
        sidebarAccent: '210 5% 87%',
        sidebarAccentForeground: '210 10% 15%',
        sidebarBorder: '210 10% 82%',
        sidebarRing: '200 80% 57%'
      },
      dark: {
        background: '210 10% 10%',
        foreground: '200 50% 90%',
        card: '210 10% 10%',
        cardForeground: '200 50% 90%',
        popover: '210 10% 10%',
        popoverForeground: '200 50% 90%',
        primary: '200 80% 60%',
        primaryForeground: '200 90% 95%',
        secondary: '310 60% 40%',
        secondaryForeground: '210 50% 95%',
        muted: '210 20% 20%',
        mutedForeground: '210 40% 70%',
        accent: '210 20% 20%',
        accentForeground: '200 50% 90%',
        destructive: '0 75% 50%',
        destructiveForeground: '0 10% 95%',
        border: '210 20% 30%',
        input: '210 20% 30%',
        ring: '200 80% 60%',
        chart1: '200 80% 60%',
        chart2: '310 60% 50%',
        chart3: '120 60% 40%',
        chart4: '60 70% 50%',
        chart5: '340 60% 45%',
        sidebarBackground: '210 10% 2%',
        sidebarForeground: '200 50% 50%',
        sidebarPrimary: '200 80% 25%',
        sidebarPrimaryForeground: '200 90% 95%',
        sidebarAccent: '210 20% 12%',
        sidebarAccentForeground: '200 50% 90%',
        sidebarBorder: '210 20% 22%',
        sidebarRing: '200 80% 52%'
      }
    }
  },
  {
    name: 'indie',
    label: 'Indie',
    colors: {
      light: {
        background: '240 5% 95%',
        foreground: '240 5% 10%',
        card: '240 5% 95%',
        cardForeground: '240 5% 10%',
        popover: '240 5% 95%',
        popoverForeground: '240 5% 10%',
        primary: '220 80% 50%',
        primaryForeground: '220 90% 95%',
        secondary: '260 25% 85%',
        secondaryForeground: '240 20% 20%',
        muted: '260 15% 90%',
        mutedForeground: '260 10% 40%',
        accent: '260 15% 90%',
        accentForeground: '240 5% 10%',
        destructive: '0 70% 55%',
        destructiveForeground: '0 0% 98%',
        border: '260 25% 85%',
        input: '260 25% 85%',
        ring: '220 80% 50%',
        chart1: '220 80% 50%',
        chart2: '260 40% 60%',
        chart3: '280 60% 70%',
        chart4: '200 60% 50%',
        chart5: '240 50% 50%',
        sidebarBackground: '240 5% 92%',
        sidebarForeground: '240 5% 38%',
        sidebarPrimary: '220 80% 50%',
        sidebarPrimaryForeground: '220 90% 95%',
        sidebarAccent: '260 15% 87%',
        sidebarAccentForeground: '240 5% 10%',
        sidebarBorder: '260 25% 82%',
        sidebarRing: '220 80% 47%'
      },
      dark: {
        background: '240 10% 5%',
        foreground: '220 50% 90%',
        card: '240 10% 5%',
        cardForeground: '220 50% 90%',
        popover: '240 10% 5%',
        popoverForeground: '220 50% 90%',
        primary: '220 80% 50%',
        primaryForeground: '220 90% 95%',
        secondary: '260 25% 25%',
        secondaryForeground: '220 50% 85%',
        muted: '260 15% 15%',
        mutedForeground: '220 60% 70%',
        accent: '260 15% 15%',
        accentForeground: '220 50% 90%',
        destructive: '0 80% 50%',
        destructiveForeground: '220 90% 95%',
        border: '260 25% 25%',
        input: '260 25% 25%',
        ring: '220 80% 50%',
        chart1: '220 70% 40%',
        chart2: '260 60% 50%',
        chart3: '240 50% 60%',
        chart4: '280 70% 70%',
        chart5: '200 50% 50%',
        sidebarBackground: '0 0% 0%',
        sidebarForeground: '220 50% 63%',
        sidebarPrimary: '220 80% 42%',
        sidebarPrimaryForeground: '220 90% 95%',
        sidebarAccent: '260 15% 7%',
        sidebarAccentForeground: '220 50% 90%',
        sidebarBorder: '260 25% 17%',
        sidebarRing: '220 80% 42%'
      }
    }
  },
  {
    name: 'zinc',
    label: 'Zinc',
    colors: {
      light: {
        background: '240 5% 90%',
        foreground: '240 10% 3.9%',
        card: '0 0% 100%',
        cardForeground: '240 10% 3.9%',
        popover: '0 0% 100%',
        popoverForeground: '240 10% 3.9%',
        primary: '240 5.9% 10%',
        primaryForeground: '0 0% 98%',
        secondary: '240 4.8% 95.9%',
        secondaryForeground: '240 5.9% 10%',
        muted: '240 4.8% 95.9%',
        mutedForeground: '240 3.8% 46.1%',
        accent: '240 4.8% 95.9%',
        accentForeground: '240 5.9% 10%',
        destructive: '0 84.2% 60.2%',
        destructiveForeground: '0 0% 98%',
        border: '240 5.9% 90%',
        input: '240 5.9% 90%',
        ring: '240 10% 3.9%',
        chart1: '240 5.9% 10%',
        chart2: '240 4.8% 95.9%',
        chart3: '240 3.8% 46.1%',
        chart4: '240 5.9% 90%',
        chart5: '0 84.2% 60.2%',
        sidebarBackground: '240 5% 92%',
        sidebarForeground: '240 3.8% 46.1%',
        sidebarPrimary: '240 5.9% 10%',
        sidebarPrimaryForeground: '0 0% 98%',
        sidebarAccent: '240 4.8% 95.9%',
        sidebarAccentForeground: '240 5.9% 10%',
        sidebarBorder: '240 5.9% 90%',
        sidebarRing: '240 10% 3.9%'
      },
      dark: {
        background: '240 10% 3.9%',
        foreground: '0 0% 98%',
        card: '0 0% 6.67%',
        cardForeground: '0 0% 98%',
        popover: '240 10% 3.9%',
        popoverForeground: '0 0% 98%',
        primary: '0 0% 98%',
        primaryForeground: '240 5.9% 10%',
        secondary: '240 3.7% 15.9%',
        secondaryForeground: '0 0% 98%',
        muted: '240 3.7% 15.9%',
        mutedForeground: '240 5% 64.9%',
        accent: '240 3.7% 15.9%',
        accentForeground: '0 0% 98%',
        destructive: '0 62.8% 30.6%',
        destructiveForeground: '0 0% 98%',
        border: '240 3.7% 15.9%',
        input: '240 3.7% 15.9%',
        ring: '240 4.9% 83.9%',
        chart1: '0 0% 98%',
        chart2: '240 3.7% 15.9%',
        chart3: '240 5% 64.9%',
        chart4: '240 3.7% 15.9%',
        chart5: '0 62.8% 30.6%',
        sidebarBackground: '240 10% 2%',
        sidebarForeground: '240 5% 64.9%',
        sidebarPrimary: '0 0% 98%',
        sidebarPrimaryForeground: '240 5.9% 10%',
        sidebarAccent: '240 3.7% 15.9%',
        sidebarAccentForeground: '0 0% 98%',
        sidebarBorder: '240 3.7% 15.9%',
        sidebarRing: '240 4.9% 83.9%'
      }
    }
  }
];

export const themeNames = themes.map((t) => t.name);

export function getTheme(name: string): Theme | undefined {
  return themes.find((t) => t.name === name);
}
