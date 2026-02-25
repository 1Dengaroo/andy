'use client';

const skipLinks = [
  { id: 'experience', label: 'Experience' },
  { id: 'hue-picker', label: 'Themes' },
  { id: 'kallio', label: 'Projects' }
];

function SkipLinks() {
  return (
    <nav
      aria-label="Skip links"
      className="fixed left-4 top-4 z-50 flex flex-col gap-1 focus-within:opacity-100 [&:not(:focus-within)]:pointer-events-none [&:not(:focus-within)]:opacity-0"
    >
      {skipLinks.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className="rounded-md bg-background px-3 py-2 text-sm font-medium text-foreground shadow-lg ring-1 ring-border transition-colors hover:bg-accent focus:outline-none focus:ring-2 focus:ring-hue"
        >
          Skip to {link.label}
        </a>
      ))}
    </nav>
  );
}

export default SkipLinks;
