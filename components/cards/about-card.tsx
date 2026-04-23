'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '../ui/card';

function AboutCard() {
  const [loaded, setLoaded] = useState(false);

  return (
    <Card className="h-full overflow-hidden">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        {!loaded && <div className="absolute inset-0 animate-pulse bg-muted" />}
        <Image
          src="/images/pfp.webp"
          alt="Andy Deng"
          fill
          sizes="(max-width: 1024px) 100vw, 25vw"
          loading="lazy"
          className={`object-cover transition-all duration-500 ${loaded ? 'opacity-100 hover:scale-[1.03]' : 'opacity-0'}`}
          onLoad={() => setLoaded(true)}
        />
      </div>
      <CardContent className="pt-4">
        <span className="section-label">About</span>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Full-Stack Product Engineer with 2 years of experience building scalable consumer
          applications and AI-driven agentic workflows. Expertise in modern TypeScript, Next.js, and
          distributed systems to accelerate user experiences and deploy robust LLM infrastructure.
        </p>
      </CardContent>
    </Card>
  );
}

export default AboutCard;
