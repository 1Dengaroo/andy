export const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'Ruby', 'C', 'Java', 'SQL']
  },
  {
    title: 'Frameworks',
    skills: ['Next.js', 'Rails', 'Django', 'React', 'Node.js', 'Swift']
  },
  {
    title: 'Tools',
    skills: ['Git', 'Docker', 'Jira']
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'Redis', 'AWS (S3, RDS)']
  },
  {
    title: 'Testing',
    skills: ['RSpec', 'Playwright', 'Pytest', 'Jest']
  }
];

export const experiences = [
  {
    role: 'Software Engineer',
    company: 'forREAL',
    location: 'Boston, MA',
    date: 'Oct 2024 – Present',
    achievements: [
      'Designed and implemented a comprehensive lease management system that features real-time payment processing with Stripe, document signing and verification flows, and automatic payments',
      'Reduced expensive Google API usage by over 70% by implementing clustering, caching, and lazy loading strategies to display apartment listings and points of interest while prioritizing UX',
      'Improved code confidence, security, and reliability by advocating for and implementing test driven development and agile methodologies',
      'Collaborate with a team of 4 engineers to build a scalable and professional end-to-end apartment rental platform utilizing Next.js, TypeScript, Tailwind, Django, Firebase, Azure'
    ]
  },
  {
    role: 'Software Engineer (Contract)',
    company: 'Evera',
    location: 'Remote',
    date: 'Jul 2024 – Sep 2024',
    achievements: [
      'Built an end-to-end e-commerce platform with React and Rails, implementing secure Stripe payments, automated SendGrid emails, and UPS shipping integration',
      'Designed scalable components and APIs using SOLID principles, and clean architecture to ensure maintainability and testability',
      'Implemented comprehensive RSpec and Playwright test coverage for payment and order flows'
    ]
  },
  {
    role: 'Software Engineer Intern',
    company: 'Vanta',
    location: 'Boston, MA',
    date: 'Aug 2023 – Feb 2024',
    achievements: [
      'Reduced Stream Chat API costs by $500/month by building and optimizing a Redis-based real-time chat notification system that tracked 10,000+ daily messages',
      'Built an atomic transaction system for Stripe payment processing that successfully processed over 1,000 orders with zero failures',
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
      'Trained junior technicians to handle routine technical issues, improving overall team efficiency'
    ]
  }
];
