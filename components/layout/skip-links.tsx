'use client';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const skipLinks = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

function SkipLinks() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <TooltipProvider delayDuration={0}>
      <nav
        aria-label="Skip links"
        className="fixed left-1/2 top-0 z-50 -translate-x-1/2 -translate-y-full transition-transform duration-200 ease-out focus-within:translate-y-0"
      >
        <div className="mt-3 rounded-lg border border-border bg-card p-2 shadow-lg">
          <div className="flex items-center gap-1">
            {skipLinks.map((link) => (
              <Tooltip key={link.id}>
                <TooltipTrigger asChild>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleClick(e, link.id)}
                    className="rounded-md px-3 py-1.5 text-sm font-medium text-card-foreground transition-colors hover:bg-accent focus:bg-accent"
                  >
                    {link.label}
                  </a>
                </TooltipTrigger>
                <TooltipContent side="bottom">Skip to {link.label}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </nav>
    </TooltipProvider>
  );
}

export default SkipLinks;
