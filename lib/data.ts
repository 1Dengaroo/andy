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
      'Own end-to-end development of Pega Blueprint, an agentic workflow SaaS platform, scaling the system to support 2M+ enterprise workflows',
      'Created LLM abstraction layer, accelerating feature development by enabling multi-model support via a dependency injection layer',
      'Accelerated initial load times by 75% (6s to 1.5s) via frontend optimization and backend API/service refactoring',
      'Helpted to cut backend load/rates by 30%+ by replacing client-side polling with WebSocket event streams',
      'Established WCAG 2.1 accessibility standards across Blueprint, ensuring full compliance for enterprise customers',
      'Improved engineering efficiency by building harness framework, leading to 60%+ adoption of AI code generation across Blueprint frontend developers',
      'Built concurrent async pipelines to parallelize LLM calls across Blueprint sections, cutting end-to-end generation time by over 50%'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'forREAL',
    location: 'Boston, MA',
    date: 'Sep 2024 – May 2025',
    achievements: [
      'Cut Google Maps API costs by 70% by implementing server-side clustering, caching, and lazy loading',
      'Developed Stripe payments backend (Django/Celery), managing $120k+ in monthly rent payments for rent collection, autopay, and identity verification',
      'Architected Django models/APIs for lease lifecycle and role management, ensuring transactional integrity with an integration test suite for payment flows',
      'Delivered property management frontend (Next.js), supporting listing display, search, and lease dashboard'
    ]
  },
  {
    role: 'Software Engineer Intern',
    company: 'Vanta',
    location: 'Remote',
    date: 'Aug 2023 – Feb 2024',
    achievements: [
      'Reduced Stream Chat API costs by $500/month by implementing a Redis-based real-time notification system handling 10k+ daily messages',
      'Improved reliability by implementing idempotent Stripe payment flows, processing 1k+ orders'
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
