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
      'Enhanced AI-driven workflow automation for enterprise clients by building full-stack features for Blueprint GenAI including case lifecycle processes, business rules, and bug fixes/accessibility improvements',
      'Improved internal React component library used by the Pega CRM platform and across 25+ engineering teams, establishing and adhering to React, TypeScript, and Git best practices',
      'Defined numerous data class structures for Blueprint backend services, establishing scalable data models for GenAI feature integration used by over a million blueprints',
      'Conducted over 45 code reviews on features, bug fixes, and accessibility improvements across Blueprint and component libraries, ensuring best practices and adherence to internal coding standards'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'forREAL',
    location: 'Boston, MA',
    date: 'Sep 2024 – May 2025',
    achievements: [
      'Designed and implemented a comprehensive lease management system that features real-time payment processing with Stripe, document signing and verification flows, and automatic payments',
      'Reduced expensive Google API usage by over 70% by implementing clustering, caching, and lazy loading strategies to display apartment listings and points of interest while prioritizing UX',
      'Improved code confidence, security, and reliability by advocating for and implementing test driven development and agile methodologies, writing over 300 integration and units tests using Pytest',
      'Collaborated with a team of 4 engineers to build a scalable and professional end-to-end apartment rental platform utilizing Next.js, TypeScript, Tailwind, Django, Firebase, Azure'
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
      'Collaborated closely with Ops and Cx teams to introduce several high priority QoL bug fixes and features',
      'Maintained 90% code coverage through comprehensive Playwright and RSpec testing suites'
    ]
  },
  {
    role: 'Undergraduate Research Assistant',
    company: 'Boston College',
    location: 'Chestnut Hill, MA',
    date: 'Jan 2023 – Jan 2024',
    achievements: [
      'Reduced course application processing time by 66% by developing a Django REST API used by 300+ users',
      'Played a key role in designing an algorithm for TA-Professor matching, completely eliminating complaints',
      'Automated deployment pipelines using GitHub Actions, integrating over 300 unit and integration tests with Pytest'
    ]
  },
  {
    role: 'Information Technology Technician',
    company: 'Boston College',
    location: 'Chestnut Hill, MA',
    date: 'Aug 2022 – May 2024',
    achievements: [
      'Resolved over 400 support tickets by quickly diagnosing and addressing technical issues for students and faculty',
      'Trained junior technicians on routine fixes and troubleshooting procedures'
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
