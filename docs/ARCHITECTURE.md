# Architecture

## Tech Stack

- **Next.js 15** (App Router) with **React 19** and **TypeScript 5** (strict mode)
- **Tailwind CSS 3** with CSS custom properties for theming
- **shadcn/ui** (Radix UI primitives) for accessible components
- **Three.js** for 3D background animations
- **Zod** + **react-hook-form** for contact form validation
- **Formspree** for email submission
- **Vercel** for hosting, analytics, and speed insights

## Directory Structure

```
app/                    # Next.js App Router pages and metadata
  page.tsx              # Main portfolio page (card grid layout)
  layout.tsx            # Root layout with theme/font providers
  not-found.tsx         # 404 page
  robots.ts, sitemap.ts # SEO

components/
  cards/                # Portfolio section cards (Welcome, Experience, Projects, etc.)
  layout/               # Layout primitives (Controls, FadeIn, InitialLoader, SkipLinks)
  ui/                   # shadcn/ui components (Button, Card, Dialog, Accordion, etc.)
  backgrounds/          # Three.js canvas backgrounds (Cosmos, Aurora, Grid)

lib/
  data.ts               # All structured content (skills, experiences, social links)
  utils.ts              # Utility functions (cn - class merging)
  theme/                # Theme registry, provider, and dark class manager
  font/                 # Font registry, provider, and useFont hook

styles/
  globals.css           # Base Tailwind imports
  loader.css            # Loader animation
  themes/               # Per-theme CSS variable files + _contract.css token spec

public/
  docs/                 # Static files (resume PDF)
  images/               # Portfolio images
```

## Data Flow

The site is statically rendered with no API calls. All content lives in `lib/data.ts` as typed arrays. Theme and font state are managed via context providers with localStorage persistence.

```
lib/data.ts (content) --> page.tsx (layout) --> cards/* (presentation)
lib/theme/*  (theme context + CSS variables)
lib/font/*   (font context + CSS variables)
```

## Theming System

Two-tier approach using CSS custom properties:

1. **Theme Registry** (`lib/theme/theme-registry.ts`): Defines theme objects with metadata (id, name, description, isDark, previewColors)
2. **CSS Variable Files** (`styles/themes/*.css`): Implement token values per theme, scoped via `[data-theme='*']` selectors
3. **Token Contract** (`styles/themes/_contract.css`): Documents the full set of semantic tokens

Token categories:

- **Semantic tokens** (oklch): `--accent-*`, `--surface-*`, `--border-*`, `--text-*`, `--shadow-*`
- **shadcn bridge tokens** (HSL): `--background`, `--foreground`, `--primary`, `--card`, etc.
- **Card customization tokens**: `--card-radius`, `--card-border-width`, `--card-hover-shadow`, etc.

Available themes: Light, Dark, Minecraft, Dotcom, Comic, Claude.

## Font System

Registry pattern mirroring the theme system:

- **Font Registry** (`lib/font/font-registry.ts`): 4 fonts (Sora, Plus Jakarta Sans, Lora, Space Mono)
- **Font Provider** (`lib/font/font-provider.tsx`): Context with localStorage persistence + DOM style injection
- **`useFont()` hook**: Access/modify active font

## Component Patterns

- **Card grid layout**: `page.tsx` arranges cards in responsive rows with staggered FadeIn animations
- **FadeIn**: IntersectionObserver wrapper for scroll-triggered opacity + translateY transitions
- **Controls**: Header bar with site name + settings dialog (theme, font, background pickers)
- **BackgroundCanvas**: Dynamically imported Three.js component (SSR disabled) with theme-aware color palettes
- **Dialog modals**: Settings panel and contact form

## Performance

- Dynamic imports for Three.js (no SSR)
- IntersectionObserver for lazy animation triggers
- Image lazy loading
- Three.js pixel ratio capped at 2x
- Animation delays disabled on mobile for faster initial paint
