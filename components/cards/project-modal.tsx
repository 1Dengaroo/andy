'use client';

import { useState, useEffect, useRef, ReactNode } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { ArrowUpRight } from 'lucide-react';

interface ProjectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  preview?: ReactNode;
  logo?: ReactNode;
  title: string;
  subtitle: string;
  children: ReactNode;
  link: { label: string; href: string };
}

export function useHashModal(hash: string) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.location.hash === `#${hash}`) {
      setOpen(true);
    }

    const onHashChange = () => {
      if (window.location.hash === `#${hash}`) {
        setOpen(true);
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [hash]);

  useEffect(() => {
    if (!open && window.location.hash === `#${hash}`) {
      history.replaceState(null, '', window.location.pathname);
    }
  }, [open, hash]);

  return [open, setOpen] as const;
}

export function ProjectModal({
  open,
  onOpenChange,
  preview,
  logo,
  title,
  subtitle,
  children,
  link
}: ProjectModalProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="overflow-hidden sm:max-w-lg"
        onOpenAutoFocus={(e) => {
          e.preventDefault();
          linkRef.current?.focus();
        }}
      >
        {preview && (
          <div className="relative -mx-6 -mt-6 aspect-video overflow-hidden">{preview}</div>
        )}
        <DialogHeader>
          <div className="flex items-center gap-2">
            {logo}
            <DialogTitle>{title}</DialogTitle>
          </div>
          <DialogDescription>{subtitle}</DialogDescription>
        </DialogHeader>
        <div className="space-y-3 text-sm text-foreground">
          {children}
          <div className="flex gap-3 pt-2">
            <a
              ref={linkRef}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-sm text-sm font-medium text-accent-primary hover:underline focus:outline-none focus:ring-1 focus:ring-accent-primary focus:ring-offset-2"
            >
              {link.label} <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
