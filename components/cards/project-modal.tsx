'use client';

import { useState, useEffect, useRef, ReactNode } from 'react';
import { Button } from '../ui/button';
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
  closeClassName?: string;
  className?: string;
  previewClassName?: string;
  triggerId?: string;
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
  link,
  closeClassName,
  className,
  previewClassName,
  triggerId
}: ProjectModalProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={`sm:max-w-lg ${className ?? ''}`}
        closeClassName={closeClassName}
        onOpenAutoFocus={(e) => {
          e.preventDefault();
          linkRef.current?.focus();
        }}
        onCloseAutoFocus={(e) => {
          if (triggerId) {
            e.preventDefault();
            document.getElementById(triggerId)?.focus();
          }
        }}
      >
        {preview && (
          <div
            className={`relative -mx-6 -mt-6 overflow-hidden ${previewClassName ?? 'aspect-video'}`}
          >
            {preview}
          </div>
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
            <Button variant="link" asChild className="h-auto p-0 text-accent-primary">
              <a ref={linkRef} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label} <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
