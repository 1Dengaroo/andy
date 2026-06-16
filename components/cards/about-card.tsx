'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FileText } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { socialLinks } from '@/lib/data';

function AboutCard() {
  const [loaded, setLoaded] = useState(false);

  return (
    <Card className="flex h-full flex-col items-center justify-center p-6">
      <div className="relative h-80 w-80 overflow-hidden rounded-lg bg-muted">
        {!loaded && <div className="absolute inset-0 animate-pulse bg-muted" />}
        <Image
          src="/images/pfp.webp"
          alt="Andy Deng"
          fill
          sizes="320px"
          loading="lazy"
          className={`scale-110 object-cover transition-all duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setLoaded(true)}
        />
      </div>
      <div className="mt-6 flex flex-1 flex-col items-center justify-between">
        <div className="text-center">
          <h3 className="text-lg font-semibold">Andy Deng</h3>
          <p className="mt-2 text-sm text-muted-foreground">Full-stack software engineer</p>
          <p className="text-sm text-muted-foreground">Based in Boston / NYC</p>
        </div>
        <div className="mt-4 flex gap-x-1.5">
          <TooltipProvider>
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Tooltip key={link.label}>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      asChild
                      className="h-8 w-8 rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-primary hover:text-accent-primary active:translate-y-0"
                    >
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{link.label}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="h-8 w-8 rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-primary hover:text-accent-primary active:translate-y-0"
                >
                  <a
                    href="/docs/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Resume"
                  >
                    <FileText className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Resume</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </Card>
  );
}

export default AboutCard;
