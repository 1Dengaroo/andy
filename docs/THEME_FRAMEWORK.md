# Theme Framework

Everything in this codebase must be tokenized to allow for full themability. No hardcoded colors, radii, shadows, or font families in components.

## Architecture

The theme system has three layers:

1. **Token Contract** (`styles/themes/_contract.css`) -- defines every CSS variable a theme must implement
2. **Theme Files** (`styles/themes/<name>.css`) -- implement the contract with concrete values
3. **Theme Registry** (`lib/theme/theme-registry.ts`) -- TypeScript metadata for each theme (id, name, isDark, preview colors)

Switching themes is instant: `next-themes` sets `data-theme` on `<html>`, CSS selectors `[data-theme='id']` activate the matching token file, and `DarkClassManager` toggles the `dark` class based on `isDark`.

## Token Contract

Every theme must define these CSS variables:

### Semantic Tokens (oklch `L C H` format)

| Token                 | Purpose                                        |
| --------------------- | ---------------------------------------------- |
| `--accent-primary`    | Brand/interactive color                        |
| `--accent-secondary`  | Secondary brand color                          |
| `--surface-primary`   | Main background                                |
| `--surface-secondary` | Alternate background                           |
| `--surface-elevated`  | Raised elements                                |
| `--surface-overlay`   | Modal/overlay backgrounds                      |
| `--border-default`    | Standard borders                               |
| `--border-subtle`     | Light borders                                  |
| `--border-strong`     | Emphasized borders                             |
| `--text-primary`      | Body text                                      |
| `--text-secondary`    | Secondary text                                 |
| `--text-muted`        | De-emphasized text                             |
| `--text-inverse`      | Text on accent backgrounds                     |
| `--shadow-sm/md/lg`   | Full shadow definitions with oklch() + opacity |

### shadcn Bridge Tokens (HSL `h s% l%` format)

Required for shadcn/ui component compatibility:

| Token                                        | Purpose                |
| -------------------------------------------- | ---------------------- |
| `--background` / `--foreground`              | Page defaults          |
| `--card` / `--card-foreground`               | Card surfaces          |
| `--popover` / `--popover-foreground`         | Popover surfaces       |
| `--primary` / `--primary-foreground`         | Buttons, links         |
| `--secondary` / `--secondary-foreground`     | Secondary actions      |
| `--muted` / `--muted-foreground`             | Subdued elements       |
| `--accent` / `--accent-foreground`           | Highlights             |
| `--destructive` / `--destructive-foreground` | Errors, danger         |
| `--border`                                   | Default border color   |
| `--input`                                    | Input borders          |
| `--ring`                                     | Focus rings            |
| `--radius`                                   | Base border radius     |
| `--chart-1` through `--chart-5`              | Data visualization     |
| `--sidebar-*`                                | Sidebar variant tokens |

### Card Style Tokens

These let themes define entirely different card aesthetics:

| Token                      | Default | Purpose                |
| -------------------------- | ------- | ---------------------- |
| `--card-radius`            | `2px`   | Card border radius     |
| `--card-border-width`      | `1px`   | Border thickness       |
| `--card-border-opacity`    | `0.4`   | Border transparency    |
| `--card-shadow`            | `none`  | Resting shadow         |
| `--card-hover-shadow`      | varies  | Hover elevation        |
| `--card-hover-y`           | `-2px`  | Vertical lift on hover |
| `--card-accent-bar-height` | `2px`   | Top accent bar         |
| `--card-accent-bar-scale`  | `0`-`1` | Accent bar expansion   |

### Typography Tokens

| Token                       | Default            | Purpose              |
| --------------------------- | ------------------ | -------------------- |
| `--heading-font`            | inherited          | Heading font family  |
| `--section-label-font`      | Space Mono         | Label font           |
| `--section-label-size`      | `0.65rem`          | Label size           |
| `--section-label-tracking`  | `0.12em`           | Label letter spacing |
| `--section-label-transform` | `uppercase`        | Label text transform |
| `--tag-font`                | Space Mono         | Tag font             |
| `--tag-radius`              | `2px`              | Tag border radius    |
| `--tag-padding-y/x`         | `0.2rem`/`0.55rem` | Tag padding          |
| `--tag-font-size`           | `0.7rem`           | Tag font size        |

## How to Add a New Theme

### Step 1: Create the CSS file

Create `styles/themes/<name>.css`:

```css
/* Body background (optional texture/gradient) */
[data-theme='<name>'] body {
  background-color: <solid fallback>;
  background-image: <optional pattern>;
  background-attachment: fixed;
}

/* Token values */
[data-theme='<name>'] {
  /* Semantic tokens (oklch L C H) */
  --accent-primary: 0.55 0.2 250;
  --accent-secondary: 0.6 0.15 280;
  --surface-primary: 0.97 0.005 250;
  --surface-secondary: 0.94 0.008 250;
  --surface-elevated: 0.99 0.002 250;
  --surface-overlay: 0.98 0.003 250;
  --border-default: 0.8 0.01 250;
  --border-subtle: 0.88 0.005 250;
  --border-strong: 0.6 0.02 250;
  --text-primary: 0.15 0.01 250;
  --text-secondary: 0.35 0.01 250;
  --text-muted: 0.55 0.01 250;
  --text-inverse: 0.98 0.005 250;
  --shadow-sm: 0 1px 2px oklch(0 0 0 / 0.06);
  --shadow-md: 0 2px 6px oklch(0 0 0 / 0.08);
  --shadow-lg: 0 4px 12px oklch(0 0 0 / 0.12);

  /* shadcn bridge tokens (HSL h s% l%) */
  --background: 240 10% 96%;
  --foreground: 240 10% 10%;
  --card: 240 10% 98%;
  --card-foreground: 240 10% 10%;
  --popover: 240 10% 98%;
  --popover-foreground: 240 10% 10%;
  --primary: 250 60% 50%;
  --primary-foreground: 0 0% 100%;
  --secondary: 240 8% 92%;
  --secondary-foreground: 240 10% 20%;
  --muted: 240 8% 92%;
  --muted-foreground: 240 5% 45%;
  --accent: 250 30% 92%;
  --accent-foreground: 250 60% 30%;
  --destructive: 0 70% 50%;
  --destructive-foreground: 0 0% 100%;
  --border: 240 8% 85%;
  --input: 240 8% 85%;
  --ring: 250 60% 50%;
  --radius: 0.5rem;
  --chart-1: 250 60% 50%;
  --chart-2: 200 50% 45%;
  --chart-3: 150 40% 40%;
  --chart-4: 100 30% 50%;
  --chart-5: 50 50% 50%;

  /* Card style tokens */
  --card-radius: 2px;
  --card-border-width: 1px;
  --card-border-opacity: 0.4;
  --card-shadow: none;
  --card-hover-shadow: var(--shadow-md);
  --card-hover-y: -2px;
  --card-accent-bar-height: 2px;
  --card-accent-bar-scale: 0;
}

/* Optional: component overrides for unique aesthetics */
[data-theme='<name>'] .card-editorial {
  /* ... */
}
[data-theme='<name>'] .tag-pill {
  /* ... */
}
[data-theme='<name>'] .section-label {
  /* ... */
}
```

### Step 2: Import in globals.css

Add to `styles/globals.css`:

```css
@import '@/styles/themes/<name>.css';
```

### Step 3: Register in theme-registry.ts

Add to `lib/theme/theme-registry.ts`:

```typescript
{
  id: '<name>',
  name: 'Display Name',
  description: 'Short tagline',
  isDark: false, // true if dark theme
  previewColors: ['oklch(L C H)', 'oklch(L C H)', 'oklch(L C H)'],
}
```

That's it. The theme will appear in the settings picker and work immediately.

## Two Color Spaces: Why?

**oklch (semantic tokens):** Perceptually uniform. Adjusting L (lightness) gives predictable visual results across hues. Used for shadows, accents, text hierarchy, and any place where consistent contrast matters.

**HSL (shadcn bridge tokens):** Required by shadcn/ui components. The component library expects `hsl(var(--token))` format. These tokens exist solely for compatibility.

Both must be defined. They should represent the same visual intent -- e.g., `--accent-primary` and `--primary` should be the same color expressed in different spaces.

## Tokenization Rules

- **Never use raw colors** in components. Always reference tokens via Tailwind classes (`bg-primary`, `text-muted-foreground`) or CSS variables (`oklch(var(--accent-primary))`).
- **Never hardcode shadows, radii, or font families.** Use the card/typography tokens.
- **Missing token?** Add it to `_contract.css` first, then implement in every theme file.
- **Component overrides** (`.card-editorial`, `.tag-pill`, `.section-label`) allow themes to completely transform component aesthetics without touching component code.

## Existing Themes

| Theme       | Mood                   | isDark | Key Aesthetic                                         |
| ----------- | ---------------------- | ------ | ----------------------------------------------------- |
| `light`     | Paper & ink            | false  | Warm beige, burgundy accent, subtle shadows           |
| `dark`      | Slate & burgundy       | true   | Dark background, red accent                           |
| `minecraft` | Blocky & crafted       | true   | Lime green, 0px radius, beveled 3D borders, monospace |
| `dotcom`    | Windows 95             | false  | Purple, flat shadows, beveled Win95 buttons           |
| `comic`     | Pop art & bold         | false  | Orange, hard pixel shadows, thick borders             |
| `claude`    | Dark sand & terracotta | true   | Warm terracotta, 16px radius, pill-shaped tags        |
