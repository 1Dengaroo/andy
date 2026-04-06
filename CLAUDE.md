## Documentation

- [Architecture](docs/ARCHITECTURE.md) - Tech stack, directory structure, data flow, component patterns
- [Theme Framework](docs/THEME_FRAMEWORK.md) - Token contract, color spaces, how to add themes, tokenization rules
- [TypeScript](docs/TYPESCRIPT.md) - Compiler config, type patterns, style guidelines
- [Skills](.claude/skills/) - Custom Claude Code skills (new-theme, update-resume, code-cleanup, cleanup-public)

## Workflow Orchestration

### Plan Node Default

- Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions)
- If something goes sideways, STOP and re-plan immediately – don't keep pushing
- Use plan mode for verification steps, not just building
- Write detailed specs upfront to reduce ambiguity

### Subagent Strategy

- Use subagents liberally to keep main context window clean
- Offload research, exploration, and parallel analysis to subagents
- For complex problems, throw more compute at it via subagents
- One task per subagent for focused execution

### Verification Before Done

- Never mark a task complete without proving it works
- Diff behavior between main and your changes when relevant
- Ask yourself: "Would a staff engineer approve this?"

### Demand Elegance (Balanced)

- For non-trivial changes: pause and ask "is there a more elegant way?"
- If a fix feels hacky: "Knowing everything I know now, implement the elegant solution"
- Skip this for simple, obvious fixes – don't over-engineer
- Challenge your own work before presenting it

### Autonomous Bug Fixing

- When given a bug report: just fix it. Don't ask for hand-holding- Point at logs, errors, failing tests – then resolve them- Zero context switching required from the user- Go fix failing CI tests without being told how

## Core Principles

- Simplicity First: Make every change as simple as possible. Impact minimal code.
- No Laziness: Find root causes. No temporary fixes. Senior developer standards.
- Minimal Impact: Changes should only touch what's necessary.

## Conventions

### SSR / Client Boundary

- Never `'use client'` in `/app` -- not in `page.tsx`, `layout.tsx`, or any file
- Interactivity -> `<Name>.client.tsx` in `@/components`
- `page.tsx` <= 40 lines, composition only
- Fetch in server components, pass as props

### TypeScript

- No `as`, no `enum`, no `any`
- `as const` for union types, `unknown` + narrowing for unknowns
- `interface` for objects, `type` for unions/intersections
- Return types on all public functions and hooks
- All types -> `lib/types.ts` (single source of truth)

### Tailwind

- Canonical classes over arbitrary values (`w-16` not `w-[64px]`)
- Semantic tokens only (`bg-primary`, `text-muted-foreground`) -- no raw hex/rgb
- Missing token -> add CSS variable to `globals.css`
- Responsive variants (`md:flex`) over JS conditional class logic

### Components

- `shadcn/ui` first -- `npx shadcn@latest add <component>` before custom primitives
- All styling themeable -- no hardcoded colors, radii, shadows
- Extract repeated JSX after second duplication
- Feature-organized (`research/`, `auth/`) -- never by type
- Cross-feature components -> `components/shared/`

### Formatting

- `npx prettier --write .` after code changes
