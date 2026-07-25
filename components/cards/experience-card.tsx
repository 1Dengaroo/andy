'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { experiences } from '@/lib/data';
import type { BookmarkLink, ExperienceEntry } from '@/lib/types';

function BookmarkEmbed({ link }: { link: BookmarkLink }) {
  const domain = new URL(link.url).hostname.replace('www.', '');

  return (
    <div className="group/bookmark rounded-lg border border-border/50 bg-background">
      <Link
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 rounded-[inherit] p-2"
      >
        <div className="relative h-16 w-28 shrink-0 overflow-hidden rounded-md bg-muted">
          <Image
            src={link.image}
            alt=""
            fill
            sizes="112px"
            className="object-cover transition-transform duration-300 group-hover/bookmark:scale-105"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-foreground">{link.title}</p>
          <p className="mt-0.5 truncate text-xs text-muted-foreground">{domain}</p>
        </div>
        <ArrowUpRight className="mr-1 h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover/bookmark:-translate-y-0.5 group-hover/bookmark:translate-x-0.5 group-hover/bookmark:text-foreground" />
      </Link>
    </div>
  );
}

function ExperienceItem({ exp }: { exp: ExperienceEntry }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="space-y-3 border-b border-border/30 pb-6">
      <div className="flex items-baseline justify-between gap-2">
        <div>
          <h3 className="font-semibold text-accent-primary">{exp.company}</h3>
          <p className="text-xs text-muted-foreground">
            {exp.title} • {exp.location}
          </p>
        </div>
        <span className="whitespace-nowrap text-xs text-muted-foreground">{exp.dateRange}</span>
      </div>
      <p
        className={`text-sm leading-relaxed text-muted-foreground ${!expanded ? 'line-clamp-3' : ''}`}
      >
        {exp.description}
      </p>
      <Button
        variant="link"
        onClick={() => setExpanded(!expanded)}
        className="h-auto p-0 font-mono text-xs text-accent-primary transition-colors hover:text-accent-primary/80 hover:no-underline"
      >
        {expanded ? '- Show less' : '+ Show more'}
      </Button>
      <BookmarkEmbed link={exp.link} />
    </div>
  );
}

function ExperienceCard() {
  return (
    <Card id="experience" className="h-full pb-6">
      <CardContent className="space-y-6 pt-6">
        <div>
          <span className="section-label">Experience</span>
        </div>

        {experiences.map((exp, index) => (
          <ExperienceItem key={index} exp={exp} />
        ))}
      </CardContent>
    </Card>
  );
}

export default ExperienceCard;
