---
name: customize-project-card
description: Customize a portfolio project card and modal to match the actual project's theme, colors, and interactive examples. Use when the user wants to update a project card to reflect the real product.
user_invocable: true
---

# Customize Project Card

Redesign a portfolio project card and its modal to visually match the actual project's design system, and replace static screenshots with interactive demo components that showcase the product's real functionality.

## Arguments

- **Project path**: Absolute path to the project's codebase (e.g. `/Users/andydeng/Projects/remes/remes`)
- **Card name**: Which card to customize (e.g. `remes`, `ooey`, `leafpad`)

## Philosophy

A project card should feel like a window into the actual product. The card's gradient, colors, and glow should use the project's real brand palette. The modal should contain interactive mini-demos that let visitors experience the product — not static screenshots.

## Steps

### 1. Research the project's design system

Use Explore subagents to thoroughly read the project's codebase:

- **Theme/styling files**: Look for CSS variables, theme files, Tailwind config, design tokens. Search in `styles/`, `globals.css`, `tailwind.config.*`, or equivalent.
- **Color palette**: Extract the primary, secondary, accent, background, foreground, border, and muted colors. Note if the project has light/dark themes — prefer the one that best represents the brand.
- **Brand gradient**: Look for any signature gradients used in heroes, headers, or CTAs.
- **Typography**: Font families, weights, heading styles.
- **Component patterns**: Find the project's showcase sections, dashboards, or key UI patterns that best represent the product. These become the interactive demos.

### 2. Research the existing card

Read the current card file at `components/cards/<name>-card.tsx` and understand:

- Current background treatment (gradient, image, video)
- Modal structure (preview section, description, links)
- How it uses `ProjectModal`, `useHashModal`, and `CardContent`
- What static assets it references (images in `public/`)

### 3. Design interactive demos

Identify 2-4 key UI patterns from the project that can be turned into self-contained interactive components. Good candidates:

- **Dashboards/tables** with clickable rows and state changes
- **Forms/inputs** with realistic mock data
- **Cards/lists** with enrichment or reveal interactions
- **Text generation** with streaming animations
- **Charts/visualizations** with hover states

Each demo should:

- Be fully self-contained (no external API calls, no imports from the source project)
- Use hardcoded mock data that looks realistic
- Have at least one interactive element (click, hover, toggle)
- Use the project's actual color palette via inline styles or hardcoded values (not the portfolio's theme tokens)

### 4. Create the demos file

Create `components/cards/<name>-demos.tsx`:

```tsx
'use client';

import { useState } from 'react';

/* Color constants from the project's theme */
const CARD = '#...';
const FG = '#...';
const FG_SECONDARY = '#...';
const FG_MUTED = '#...';
const BORDER = '#...';
const PRIMARY = '#...';

/* Mock data */
const DATA = [...];

export function DemoOne() {
  const [state, setState] = useState(...);
  return (
    <div style={{ borderColor: BORDER, backgroundColor: CARD }}>
      {/* Interactive demo using the project's real colors */}
    </div>
  );
}

export function DemoTwo() { ... }
```

Rules for the demos file:

- `'use client'` directive at top
- Extract all colors into named constants at the top (e.g. `const PRIMARY = '#6366f1'`)
- All mock data as module-level constants
- No `as` casts, no `any`, no `enum`
- Use inline `style={{ color: FG }}` for project-specific colors — not Tailwind semantic tokens
- Use Tailwind for layout/spacing/structure (`flex`, `gap-2`, `rounded-xl`, etc.)
- Keep text sizes small for compact display: `text-[9px]` to `text-xs`
- Each exported component is a standalone demo

### 5. Rewrite the card

Rewrite `components/cards/<name>-card.tsx`:

**Card background treatment:**

- Use the project's brand colors for a gradient background
- Layer 2-3 radial glows using the brand palette at low opacity for depth
- Add a bottom fade (to black or dark brand color) for text legibility
- White text over dark gradients, or dark text over light backgrounds

```tsx
{/* Base gradient using project brand colors */}
<div className="absolute inset-0" style={{
  background: 'linear-gradient(135deg, #brand1 0%, #brand2 50%, #brand3 100%)'
}} />

{/* Ambient glow */}
<div className="absolute inset-0 opacity-80 transition-opacity duration-700 group-hover:opacity-100" style={{
  background: 'radial-gradient(ellipse 70% 90% at 70% 55%, rgba(brand,0.4) 0%, transparent 70%)'
}} />

{/* Bottom depth */}
<div className="absolute inset-x-0 bottom-0 h-3/4" style={{
  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)'
}} />
```

**Card content (bottom-left):**

- Section label (mono, small, muted): category description
- Logo + project name (bold, large)
- Arrow icon with hover animation

**Modal:**

- Pass `className` to `ProjectModal` for wider layout: `sm:!max-w-3xl`
- Pass `previewClassName=""` to remove the default `aspect-video` constraint
- Style the modal to match the project's theme: override `!bg-[...]`, `!text-[...]`, `!border-[...]`
- Tab bar at the top of the preview section to switch between demos
- Use grid stacking (`col-start-1 row-start-1` + `visibility: hidden/visible`) for all tabs so the container never shifts height when switching

```tsx
{/* Grid stacking — tallest tab sets height, no layout shift */}
<div className="grid rounded-xl">
  {TABS.map((tab, i) => (
    <div
      key={tab.key}
      className="col-start-1 row-start-1"
      style={{
        visibility: activeTab === i ? 'visible' : 'hidden',
        pointerEvents: activeTab === i ? 'auto' : 'none'
      }}
    >
      <tab.Component />
    </div>
  ))}
</div>
```

**Modal description:**

- Style text with the project's secondary text color
- Keep the existing project description and link

### 6. Update ProjectModal if needed

`components/cards/project-modal.tsx` supports these optional props for customization:

- `className?: string` — override dialog width, bg, text, border
- `previewClassName?: string` — override preview aspect ratio (pass `""` to remove `aspect-video`)
- `closeClassName?: string` — override close button color (e.g. `"text-white"` for dark modals)

If these props don't exist yet, add them.

### 7. Clean up

- Delete any static screenshot assets from `public/images/` that are no longer referenced
- Remove unused imports
- Remove any dead data (e.g. signal types that no longer have associated entries)
- Remove unnecessary `as` casts
- Run `npx prettier --write .` on touched files

### 8. Verify

```bash
npx next build   # Zero errors
```

- Card gradient and glow are visible and use the project's real brand colors
- Card text is legible over the background
- Modal opens with tabbed interactive demos
- Each demo has working interactivity (clicks, hovers, state changes)
- Tab switching doesn't cause layout shift
- Modal scrolls on small screens but demos don't scroll internally
- Works across all portfolio themes (card/modal have their own hardcoded colors)

## Quality Bar

The card should make someone who uses the actual product say "oh, that's [product name]" from the colors alone. The demos should feel like a miniature version of the real UI — not generic placeholder cards. Interactive elements should respond naturally and showcase the product's core value proposition.
