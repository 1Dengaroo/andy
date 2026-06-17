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
      "At Pegasystems, I joined the team behind Blueprint, Pega's flagship AI product helping enterprises build and automate business processes from natural language. I've helped scale Blueprint from early launch to over 2 million enterprise workflows by owning full-stack development across the generation pipeline, from the user-facing interface down through the distributed backend services and orchestration infrastructure that power it. Along the way, I've refactored services to reduce load times, fixed N+1 query patterns that had accumulated as the platform scaled, and worked on asynchronous, event-driven systems to keep generation pipelines reliable under high concurrency. I've also helped build out our agentic coding frameworks, contributing to the tooling and practices that drive AI-assisted development across the team. My ownership here has scaled up over time, starting with feature-level work and growing into a broader role across the platform's distributed architecture and the infrastructure the team relies on day to day."
  },
  {
    company: 'forREAL',
    title: 'Software Engineer (Full Stack / Product)',
    location: 'Boston, MA',
    dateRange: 'Sep 2024 – May 2025',
    description:
      'At forREAL, I joined an early-stage AI leasing startup building software for landlords and tenants, with a focus on international students leasing apartments remotely. Because we were a small team, my work touched nearly everything on the platform, from authentication and apartment browsing to lease applications and document signing. I owned our financial infrastructure end-to-end, building an idempotent payment pipeline on Django and Celery that processed autopay, lease signing, and identity verification, backed by reconciled state machines and webhook signature verification to keep things consistent under retries and failures. I also designed the underlying data models and APIs for lease lifecycle and role-based access, with integration test coverage across payment and webhook edge cases, and worked on reducing latency and cost across our geospatial and third-party API usage.'
  },
  {
    company: 'Vanta',
    title: 'Software Engineer Intern (Backend / Full Stack)',
    location: 'Remote',
    dateRange: 'Aug 2023 – Feb 2024',
    description:
      "At Vanta, I joined the backend team supporting infrastructure behind the company's real-time messaging and payments systems. I built a Redis-based pub/sub notification system to route tens of thousands of daily chat payloads, replacing a more expensive third-party solution and meaningfully cutting costs. I also built idempotent Stripe payment flows to handle retries safely, eliminating duplicate-charge edge cases across thousands of orders and helping keep the system reliable as it scaled."
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
