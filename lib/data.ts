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
      'Shipped AI-assisted Blueprint generation features end-to-end, building React/TypeScript interfaces and Java APIs to process and persist artifacts across 1M+ Blueprints',
      'Reduced initial load time from 6s to 1.5s and improved performance by up to 75% through frontend rendering optimizations and backend API/service refactoring',
      'Engineered prompt templates and LLM output parsing with structured fallbacks across multiple providers via a dependency-injected model abstraction layer',
      'Designed core Java services, APIs, and data models for AI-generated Blueprint artifacts, defining schemas and maintaining backward compatibility',
      'Led cross-team frontend and backend architecture improvements, standardizing shared components, accessibility patterns, and code quality',
      'Built a centralized React context layer for AI-generated diffs, enabling incremental change highlighting without full re-renders'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'forREAL',
    location: 'Boston, MA',
    date: 'Sep 2024 – May 2025',
    achievements: [
      'Built a 0–1 property management platform (Next.js and Django) supporting listings with geospatial search, lease workflows, identity verification, document signing, maintenance tracking, and automated payments',
      'Established test-driven development, writing 500+ Pytest unit and integration tests covering payments and leases',
      'Reduced Google Maps API usage by 70% by implementing clustering, caching, and lazy loading for apartment listings and points of interest'
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

export const navigationLinks = [
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/experience', label: 'Experience' }
];

export const everaBackgroundImage = 'https://www.everafashion.com/images/home_1.webp';
