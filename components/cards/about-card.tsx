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
        <span className="section-label">Introduction</span>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Full-stack product engineer with 2 years of experience shipping consumer applications and
          AI-driven agentic workflows. Currently at Pega, owning features end-to-end across the
          React frontend and Java backend. Recent winner of Pega&apos;s annual hackathon across 225+
          participants, building an LLM-powered developer tool.
        </p>
      </CardContent>
    </Card>
  );
}

export default AboutCard;
