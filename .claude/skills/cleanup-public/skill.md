---
name: cleanup-public
description: Find and remove dead static files in public/ that are not referenced anywhere in the codebase. Use after removing features or cleaning up assets.
user_invocable: true
---

# Cleanup Public

Find and remove unused static files in `public/` that are not referenced anywhere in the source code.

## Steps

### 1. List all files in public/

```bash
find public/ -type f
```

### 2. Check each file for references

For each file, search the entire codebase for any reference to it. Files in `public/` are served from the root, so a file at `public/images/photo.jpg` could be referenced as:

- `/images/photo.jpg` (absolute path in code)
- `images/photo.jpg` (relative path)
- `photo.jpg` (filename only in some contexts)

Search for the filename (without the `public/` prefix) across all source files:

```bash
grep -r "photo.jpg" --include="*.tsx" --include="*.ts" --include="*.css" --include="*.html" --include="*.json" --include="*.md" .
```

### 3. Report findings

Before deleting anything, list:
- **Referenced files** -- files that are used somewhere in the codebase
- **Unreferenced files** -- files with zero references (candidates for deletion)

### 4. Confirm with user

Present the unreferenced files list and ask the user to confirm deletion. Some files may be referenced externally (e.g. `robots.txt`, `favicon.ico`, `resume.pdf` linked from outside the repo) -- flag these as "likely needed despite no code reference."

**Always keep without asking:**
- `favicon.ico`, `favicon*.png`, `apple-touch-icon.png`
- `robots.txt`, `sitemap.xml`
- `manifest.json`, `site.webmanifest`
- `.well-known/*`
- Any file referenced in `app/sitemap.ts`, `app/robots.ts`, or `app/layout.tsx` metadata

### 5. Delete confirmed files

Remove the confirmed unreferenced files. If an entire directory becomes empty after deletion, remove the directory too.

### 6. Verify

```bash
npm run build
```

Build must pass. If it fails, a deleted file was actually referenced -- restore it and re-check.
