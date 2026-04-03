---
name: new-theme
description: Create a new recognizable theme (e.g. Spotify, Discord, GitHub) with full token implementation, optional custom background, and registry wiring. Use when the user asks to add a theme.
user_invocable: true
---

# New Theme

Create a fully tokenized, recognizable theme inspired by a real brand or aesthetic. Themes should be immediately identifiable -- a user should look at the page and think "that's Spotify" or "that's Discord."

## Arguments

The user provides the theme name/inspiration (e.g. "spotify", "discord", "github", "terminal").

## Design Philosophy

Themes are not color swaps. Each theme should feel like the source material through:

- **Color palette** pulled from the real brand
- **Card styling** that matches the source aesthetic (rounded vs sharp, shadows vs flat, borders vs borderless)
- **Typography choices** that evoke the brand (monospace for terminal, clean sans for modern apps)
- **Component overrides** for `.card-editorial`, `.tag-pill`, `.section-label` when the default styling doesn't match the aesthetic
- **Body background** texture/gradient that sets the mood
- **Custom Three.js background** if the theme's identity demands animated visuals (e.g. a Matrix rain for a terminal theme, music visualizer for Spotify)

## Reference: Existing Theme Styles

Study these for range -- the system supports everything from beveled Win95 buttons to soft pill-shaped tags:

- **`light.css`** -- Minimal. Warm beige, burgundy accent, subtle oklch shadows, 2px card radius, no component overrides. The baseline.
- **`dark.css`** -- Same structure as light but inverted. Dark slate, brighter red accent. No component overrides.
- **`minecraft.css`** -- Blocky. 0px radius, 3px beveled borders (bright top-left, dark bottom-right), hard pixel shadows, monospace everything, uppercase labels. Overrides cards, tags, and labels.
- **`dotcom.css`** -- Windows 95. 0px radius, 2px beveled borders, no shadows at all, Times New Roman headings, blue underlined section labels. Active state reverses the bevel. Overrides cards, tags, and labels.
- **`comic.css`** -- Pop art. 4px radius, 3px solid black borders, hard offset shadows (no blur), Arial Black headings, halftone dot background. Tags get box-shadows and invert to orange on hover. Overrides cards, tags, and labels.
- **`claude.css`** -- Warm modern. 16px radius, 1px subtle border, no resting shadow but shadow-lg on hover, pill-shaped tags (9999px radius), inherit font everywhere. Background lightens on card hover. Overrides cards, tags, and labels.

## Steps

### 1. Research the brand palette

Identify the source's:

- Primary background color
- Accent/brand color
- Text colors (primary, secondary, muted)
- Border treatment (sharp, rounded, none)
- Shadow style (none, soft, hard)
- Typography feel (monospace, sans-serif, serif)
- Any signature UI patterns (Spotify's cards are dark with green accents and large radius; Discord uses rounded elements with blurple accents)

### 2. Create the CSS theme file

Create `styles/themes/<id>.css` following this structure:

```css
/* <Name> -- <short description of the aesthetic> */

[data-theme='<id>'] body {
  background-color: <hex>;
  background-image: <optional texture + gradient>;
  background-attachment: fixed;
}

[data-theme='<id>'] {
  /* Semantic tokens (oklch L C H) */
  --accent-primary: L C H;
  --accent-secondary: L C H;
  --surface-primary: L C H;
  --surface-secondary: L C H;
  --surface-elevated: L C H;
  --surface-overlay: L C H;
  --border-default: L C H;
  --border-subtle: L C H;
  --border-strong: L C H;
  --text-primary: L C H;
  --text-secondary: L C H;
  --text-muted: L C H;
  --text-inverse: L C H;
  --shadow-sm: <full shadow value>;
  --shadow-md: <full shadow value>;
  --shadow-lg: <full shadow value>;

  /* Card style tokens */
  --card-radius: ;
  --card-border-width: ;
  --card-border-opacity: ;
  --card-shadow: ;
  --card-hover-shadow: ;
  --card-hover-y: ;
  --card-accent-bar-height: ;
  --card-accent-bar-scale: ;

  /* Typography tokens */
  --heading-font: ;
  --section-label-font: ;
  --section-label-size: ;
  --section-label-tracking: ;
  --section-label-transform: ;
  --tag-font: ;
  --tag-radius: ;
  --tag-padding-y: ;
  --tag-padding-x: ;
  --tag-font-size: ;

  /* shadcn bridge tokens (HSL h s% l%) */
  --background: ;
  --foreground: ;
  --card: ;
  --card-foreground: ;
  --popover: ;
  --popover-foreground: ;
  --primary: ;
  --primary-foreground: ;
  --secondary: ;
  --secondary-foreground: ;
  --muted: ;
  --muted-foreground: ;
  --accent: ;
  --accent-foreground: ;
  --destructive: ;
  --destructive-foreground: ;
  --border: ;
  --input: ;
  --ring: ;
  --radius: ;
  --chart-1: ;
  --chart-2: ;
  --chart-3: ;
  --chart-4: ;
  --chart-5: ;
  --sidebar-background: ;
  --sidebar-foreground: ;
  --sidebar-primary: ;
  --sidebar-primary-foreground: ;
  --sidebar-accent: ;
  --sidebar-accent-foreground: ;
  --sidebar-border: ;
  --sidebar-ring: ;
}

/* Component overrides (add these when defaults don't match the aesthetic) */
[data-theme='<id>'] .card-editorial {
}
[data-theme='<id>'] .card-editorial:hover {
}
[data-theme='<id>'] .tag-pill {
}
[data-theme='<id>'] .tag-pill:hover {
}
[data-theme='<id>'] .section-label {
}
```

### 3. Import in globals.css

Add to `styles/globals.css` after the existing theme imports:

```css
@import '@/styles/themes/<id>.css';
```

### 4. Register in theme-registry.ts

Add entry to the `themes` array in `lib/theme/theme-registry.ts`:

```typescript
{
  id: '<id>',
  name: '<Display Name>',
  description: '<2-4 word tagline>',
  isDark: <boolean>,
  previewColors: ['oklch(surface)', 'oklch(accent)', 'oklch(text)'],
}
```

The `previewColors` tuple is `[surface-primary, accent-primary, text-primary]` used for the theme picker swatches.

### 5. Custom background (if needed)

If the theme's identity calls for an animated background (e.g. Matrix rain, music bars, starfield variant), create it:

1. Create `components/backgrounds/<name>.tsx` -- a Three.js canvas component (see existing `cosmos.tsx`, `aurora.tsx`, `grid.tsx` for patterns)
2. Register in `components/backgrounds/background-registry.ts`:
   ```typescript
   { id: '<name>', name: '<Display Name>' }
   ```
3. Add dynamic import + map entry in `components/backgrounds/background-canvas.tsx`:
   ```typescript
   const <Name>Background = dynamic(() => import('./<name>'), { ssr: false });
   // ...in componentMap:
   <name>: <Name>Background,
   ```

Skip this step if the CSS body background (texture + gradient) is sufficient. Most themes don't need a custom Three.js background.

### 6. Verify

- Run `npm run build` -- zero errors
- Run `npx prettier --write .` -- consistent formatting
- Switch to the new theme in the settings panel and verify:
  - Cards, tags, labels, buttons all look intentional
  - Text is readable at all hierarchy levels
  - Hover states work and feel on-brand
  - Background texture/animation fits the mood
  - Dark mode class is correctly applied (if isDark: true)

## Quality Bar

A theme is done when someone unfamiliar with the code could identify the inspiration at a glance. If it looks like "dark mode with a green accent," it's not a Spotify theme -- it's a color swap. Push the card styling, typography, shadows, and component overrides until the aesthetic is unmistakable.
