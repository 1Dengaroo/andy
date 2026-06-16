'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

interface ExperienceEntry {
  company: string;
  title: string;
  location: string;
  dateRange: string;
  description: string;
}

const experiences: ExperienceEntry[] = [
  {
    company: 'Pegasystems',
    title: 'Software Engineer (Backend / Frontend / Product)',
    location: 'Boston, MA',
    dateRange: 'May 2025 – Present',
    description:
      "At Pegasystems, I joined the team behind Blueprint, an AI product helping enterprises build workflows. I inherited a system where LLM integrations had sprawled across the codebase, each feature pulling in its own providers, retry logic, and output parsing. My first major project was consolidating this into a unified abstraction layer with dependency injection and structured output handling, letting us swap between models without touching application code. On the frontend, I tackled a persistent problem: the generation status screen relied on client polling and would time out during long operations. I rebuilt it with WebSocket event streams, eliminating a whole class of user-facing failures. I also discovered the initial load was bottlenecked by sequential API calls and accumulated N+1 queries. Parallelizing those calls and fixing the query patterns brought load times down significantly. Most recently, I've been working with the frontend team to adopt agentic development, building internal tooling and verification infrastructure to make that workflow seamless."
  },
  {
    company: 'forREAL',
    title: 'Software Engineer (Full Stack / Product)',
    location: 'Boston, MA',
    dateRange: 'Sep 2024 – May 2025',
    description:
      'I joined forREAL when it was an early-stage team building a consumer property platform. Starting with a blank slate, I owned the financial infrastructure end-to-end, designing the Stripe integration, autopay system, and identity verification. The tricky part was getting payments right: building an idempotent ledger that tracks every cent flowing between accounts, webhooks that might arrive out-of-order, and retry scenarios that could silently duplicate charges. I designed a state machine-backed system that made all of this atomic and auditable. On the backend, I built Django APIs for lease management and access control, with an integration test suite that caught issues before they hit production. On the frontend, I shipped the entire consumer experience in Next.js with search, property listings, the lease dashboard, and database schema. I also noticed we were hammering Google Maps for geospatial queries and burning money; I cut those costs significantly by clustering on the server side and caching aggressively.'
  },
  {
    company: 'Vanta',
    title: 'Software Engineer Intern (Backend / Full Stack)',
    location: 'Remote',
    dateRange: 'Aug 2023 – Feb 2024',
    description:
      'My first professional experience was at Vanta, where I worked on backend systems during a high-growth period. Early on, I spotted an opportunity: the platform was using an expensive third-party service to handle real-time chat notifications. I built a Redis pub/sub system in-house that handled the same throughput for a fraction of the cost. I also took ownership of payment flows, where I discovered retry scenarios could accidentally create duplicate charges. I implemented idempotent Stripe payment logic that made the system resilient to network issues and retries, turning what could be a costly edge case into a non-issue.'
  }
];

function ExperienceItem({ exp }: { exp: ExperienceEntry }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="space-y-2 border-b border-border/30 pb-6">
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
