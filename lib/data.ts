import { Github, Linkedin, Mail } from 'lucide-react';
import type { ExperienceEntry } from './types';

export const skillCategories = [
  {
    title: 'Languages',
    skills: ['TypeScript', 'Python', 'Ruby', 'Java', 'SQL']
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'Zustand', 'Tailwind CSS', 'SSR']
  },
  {
    title: 'Backend & AI',
    skills: [
      'Node.js',
      'Django',
      'Spring',
      'LLM Orchestration',
      'Agentic Workflows',
      'Async Pipelines',
      'Event-Driven Architecture',
      'WebSockets',
      'REST/GraphQL'
    ]
  },
  {
    title: 'Systems & Infrastructure',
    skills: [
      'AWS (EC2, S3, RDS, Lambda)',
      'Docker',
      'CI/CD (GitHub Actions)',
      'Distributed Systems',
      'Caching',
      'PostgreSQL',
      'Redis',
      'Celery'
    ]
  }
];

export const experiences: ExperienceEntry[] = [
  {
    company: 'Pegasystems',
    title: 'Software Engineer (Backend / Frontend / Infrastructure)',
    location: 'Boston, MA',
    dateRange: 'May 2025 – Present',
    description:
      "At Pegasystems, I joined the team behind Blueprint, Pega's flagship AI product helping enterprises build applications through secure, governed agentic generation. I've helped scale Blueprint from early launch to millions of enterprise workflows by owning full-stack development across the generation pipeline, from the user-facing interface down through the distributed backend services and agentic orchestration infrastructure that power it. Along the way I've worked on LLM orchestration, event-driven pipelines, real-time delivery systems, and the agentic coding tooling and practices the team relies on to ship faster. My ownership has scaled up over time, starting with feature-level work and growing into a broader role across the platform's distributed architecture and the infrastructure the team depends on day to day.",
    link: {
      title: 'Agentic Workflow Builder | Pega Blueprint',
      url: 'https://www.pega.com/blueprint',
      image: 'https://www.pega.com/sites/default/files/media/images/2024-04/Pega-Blueprint-OG.png'
    }
  },
  {
    company: 'forREAL',
    title: 'Software Engineer (Full Stack / Infrastructure)',
    location: 'Boston, MA',
    dateRange: 'Oct 2024 – May 2025',
    description:
      'At forREAL, I helped scale the platform from the ground up by architecting the full financial idempotent infrastructure including Stripe collection, autopay, payouts, and accounting. Because we were a small team, my work touched nearly everything on the platform, from authentication and apartment browsing to lease applications and document signing.',
    link: {
      title: 'forREAL Virtual Tour Showcase',
      url: 'https://www.myforreal.com/showcase',
      image: 'https://www.myforreal.com/images/luxuryassets/yachthero_frame.png'
    }
  },
  {
    company: 'Vanta',
    title: 'Software Engineer Intern (Backend / Full Stack)',
    location: 'Remote',
    dateRange: 'Aug 2023 – Feb 2024',
    description:
      "At Vanta, I joined the backend team supporting infrastructure behind the company's real-time messaging and payments systems. I worked on replacing a third-party notification dependency with an internal solution that scaled to tens of thousands of payloads, and built atomic Stripe payment flows that kept the system reliable under retries and failure conditions.",
    link: {
      title:
        "PlayVS Acquires Vanta Esports, Strengthening the Nation's Largest Education-Focused Gaming Ecosystem - PlayVS",
      url: 'https://playvs.com/playvs-vanta/',
      image: 'https://playvs.com/wp-content/uploads/2026/01/VantaACQ_Blog.png'
    }
  }
];

export const socialLinks = [
  { href: 'https://github.com/1Dengaroo/', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/in/andydeng-/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:andydeng0224@gmail.com', icon: Mail, label: 'Email' }
];
