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
    skills: ['PostgreSQL', 'Redis', 'AWS (S3, RDS)']
  },
  {
    title: 'Testing',
    skills: ['RSpec', 'Playwright', 'Pytest', 'Jest']
  },
  {
    title: 'Cloud Services',
    skills: ['Azure', 'Heroku', 'Vercel', 'Firebase']
  }
];

export const experiences = [
  {
    role: 'Software Engineer',
    company: 'Pegasystems',
    location: 'Boston, MA',
    date: 'May 2025 – Present',
    achievements: [
      'Designed and shipped numerous Blueprint AI features end-to-end (design → production), implementing complex React/TypeScript UI flows and backend APIs supporting 1M+ blueprint artifacts',
      'Improved performance by reducing initial load times by 75% (6s → 1.5s) and improving app-wide performance by 25-75% through frontend optimization, backend API refactoring, and caching strategies',
      "Contributed to internal React component library used across Pega's engineering organization, ensuring accessibility compliance and TypeScript best practices",
      'Conducted numerous code reviews across Blueprint frontend and backend features and component libraries, maintaining high code quality standards',
      'Replaced client-side polling with WebSocket-based real-time updates for Blueprint AI workflows, reducing API rate limiting incidents and lowering backend request volume by around half',
      'Designed a central React context to manage AI-generated diffs across the application, enabling highlighting of incremental changes without full re-renders'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'forREAL',
    location: 'Boston, MA',
    date: 'Sep 2024 – May 2025',
    achievements: [
      'Architected and built an end-to-end property management platform from 0-1 using Next.js and Django, handling apartment listings with interactive maps, lease applications/approvals, automated document signing with identity verification (Stripe, TransUnion), maintenance tracking, and payment processing with auto-pay',
      'Established test-driven development practices, writing 500+ integration and unit tests using Pytest and achieving 90% code coverage on payments and leases, significantly improving deployment confidence',
      'Reduced expensive Google API usage by over 70% by implementing clustering, caching, and lazy loading strategies to display apartment listings and points of interest while prioritizing user experience'
    ]
  },
  {
    role: 'Software Engineer Intern',
    company: 'Vanta',
    location: 'Remote',
    date: 'Aug 2023 – Feb 2024',
    achievements: [
      'Reduced Stream Chat API costs by $500/month by building and optimizing a Redis-based real-time chat notification system that tracked 10,000+ daily messages',
      'Built an atomic transaction system for Stripe payment processing that successfully processed over 1,000 orders',
      'Maintained 90% code coverage through comprehensive Playwright and RSpec testing suites'
    ]
  },
  {
    company: 'Boston College',
    location: 'Chestnut Hill, MA',
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
