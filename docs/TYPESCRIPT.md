# TypeScript Conventions

## Compiler Configuration

- **Strict mode** enabled (`strict: true`)
- **Target**: ES2017
- **Module resolution**: Bundler (Next.js)
- **Path alias**: `@/*` maps to the project root

## Type Patterns

### Registries and Definitions

Theme and font systems use typed definition objects:

```typescript
interface ThemeDefinition {
  id: string;
  name: string;
  description: string;
  isDark: boolean;
  previewColors: [string, string, string];
}

interface FontDefinition {
  id: string;
  name: string;
  description: string;
  variable: string;
}
```

### Data Structures

Content in `lib/data.ts` uses inline typed arrays:

```typescript
skillCategories: Array<{ title: string; skills: string[] }>;
experiences: Array<{
  role: string;
  company: string;
  location: string;
  date: string;
  achievements: string[];
}>;
socialLinks: Array<{ href: string; icon: LucideIcon; label: string }>;
```

### Form Validation

Zod schemas with inferred types:

```typescript
const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1)
});
type ContactForm = z.infer<typeof contactSchema>;
```

### Component Props

- `className?: string` for style extension
- `React.ReactNode` for children
- State callbacks typed as `(value: T) => void`
- Union types for finite states: `'idle' | 'sending' | 'sent' | 'error'`

## Style Guidelines

- Favor clarity over type gymnastics. No complex generics or mapped types.
- Use interfaces for domain objects, inline types for component props where simple.
- Infer from Zod schemas rather than duplicating types.
- No `any` or `as` casts unless unavoidable (e.g., Three.js interop).
