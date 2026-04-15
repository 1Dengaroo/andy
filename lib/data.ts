import { Github, Linkedin, Mail } from 'lucide-react';

export const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript/TypeScript', 'Ruby', 'Java', 'SQL']
  },
  {
    title: 'Frameworks',
    skills: ['Next.js', 'React', 'Rails', 'Django']
  },
  {
    title: 'Tools',
    skills: ['Git', 'Docker', 'Linear', 'Jira']
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'Redis']
  },
  {
    title: 'Testing',
    skills: ['RSpec', 'Playwright', 'Pytest', 'Jest']
  },
  {
    title: 'Cloud Services',
    skills: ['AWS', 'Vercel', 'Firebase']
  }
];

export const experiences = [
  {
    role: 'Software Engineer',
    company: 'Pegasystems',
    location: 'Boston, MA',
    date: 'May 2025 – Present',
    achievements: [
      'Led full-stack performance overhaul of Blueprint, cutting initial load time from 6s to 1.5s through frontend rendering optimizations and backend API refactoring',
      'Built LLM orchestration layer handling 1M+ blueprints, with structured outputs, schema validation, retries, and fallback to ensure reliable production behavior',
      'Designed error handling framework for AI-native workflows ensuring LLM failures degraded gracefully rather than surfacing unpredictably in production',
      "Owned architectural decisions on Blueprint's core data models and API contracts; aligned with engineers on cross-team changes touching backward compatibility",
      'Evangelized Claude Code workflows internally to team members; built harness tooling with CLAUDE.md configuration, and linting as mechanical reinforcement'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'forREAL',
    location: 'Boston, MA',
    date: 'Sep 2024 – May 2025',
    achievements: [
      'Built Stripe payments backend (Django/Celery) handling rent collection, autopay scheduling, payment methods, and identity verification',
      'Designed Django models and APIs for lease lifecycle, maintenance, and tenant/landlord role management',
      'Created a comprehensive integration test suite covering payment flows, lease state transitions, and API contracts',
      'Cut Google Maps API costs by 70% via server-side clustering, caching, and lazy loading',
      'Built property management platform frontend (Next.js) for listings, geospatial search, and lease workflows'
    ]
  },
  {
    role: 'Software Engineer Intern',
    company: 'Vanta',
    location: 'Remote',
    date: 'Aug 2023 – Feb 2024',
    achievements: [
      'Reduced Stream Chat API costs by $500/month by building a Redis-based real-time notification system handling 10k+ daily messages',
      'Implemented idempotent Stripe payment flows with transactional safeguards, processing 1k+ orders',
      'Maintained Playwright and RSpec test suites, preventing regressions across core application workflows'
    ]
  },
  {
    company: 'Boston College',
    location: 'Chestnut Hill, MA',
    dateRange: 'Aug 2020 – May 2024',
    roles: [
      {
        role: 'Research Assistant',
        date: 'Jan 2023 – Jan 2024',
        achievements: [
          'Selected from 90+ engineering students to work directly with Professor Maira Samary on a Django REST API and algorithm that reduced TA-Professor matching time by almost 80% for 300+ BC students and faculty'
        ]
      },
      {
        role: 'IT Technician',
        date: 'Aug 2022 – May 2024',
        achievements: [
          'Resolved over 400 support tickets by diagnosing and addressing technical issues for students and faculty'
        ]
      }
    ]
  }
];

export const socialLinks = [
  { href: 'https://github.com/1Dengaroo/', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/in/andydeng-/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:andydeng0224@gmail.com', icon: Mail, label: 'Email' }
];
