export const profile = {
  name: 'Susmita Dhital',
  firstName: 'Susmita',
  role: 'Software Engineer',
  location: 'Sydney, Australia',
  phone: '+61 433 651 834',
  email: 'susmitadhital7@gmail.com',
  resumePath: '/resume.pdf',
  intro:
    'Full-stack software engineer with 3+ years of experience creating useful, dependable web products — from the first interface detail to the API behind it.',
  summary:
    'I’m a software engineer with experience delivering production web applications across the full stack, with a particular love for frontend engineering. At PortPro, I helped build enterprise logistics software with React, TypeScript, Redux and Node.js — translating complex workflows into clear, accessible experiences.',
  approach:
    'I care about the details people feel: a thoughtful interaction, a fast page, a reliable API, and a team that can confidently build on the work.',
  impact: {
    value: '80%',
    label: 'reduction in demurrage charges enabled for customers',
  },
  highlights: [
    { value: '3+ yrs', label: 'professional experience' },
    { value: '80%', label: 'lower demurrage charges enabled' },
    { value: 'React + Node', label: 'across the full stack' },
  ],
  links: {
    linkedin: 'https://www.linkedin.com/in/susmitadhital98',
    github: 'https://github.com/dsushmita',
  },
  experience: [
    {
      company: 'PortPro',
      title: 'Software Engineer',
      period: 'Aug 2021 — Feb 2024',
      location: 'Kathmandu, Nepal',
      summary:
        'Built and maintained an enterprise transportation management platform for logistics teams, spanning user-facing workflows, backend services and data.',
      achievements: [
        'Designed reusable React and TypeScript application patterns, then turned Figma designs into accessible, production-ready interfaces.',
        'Built REST APIs and Node.js services for load management, routing and document workflows, with validation, error handling and logging.',
        'Created a port-monitoring scraper for near-real-time container and terminal updates; the resulting visibility helped customers reduce demurrage charges by approximately 80%.',
        'Worked across PostgreSQL and MongoDB, secure token-based authentication, API integrations and automated testing.',
      ],
      technologies: [
        'React',
        'TypeScript',
        'Redux',
        'Node.js',
        'Express',
        'PostgreSQL',
        'MongoDB',
        'Jest',
      ],
    },
    {
      company: 'Supreme IT Solution',
      title: 'Web Developer',
      period: 'May 2020 — Jun 2021',
      location: 'Kathmandu, Nepal',
      summary:
        'Created responsive web pages and interactive client experiences, from early UI concepts through implementation and cross-browser checks.',
      achievements: [
        'Built semantic, responsive interfaces with HTML, CSS, JavaScript, Flexbox and CSS Grid.',
        'Produced original UI concepts, wireframes and prototypes in Figma for client projects.',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Figma', 'Responsive UI'],
    },
  ],
  skills: [
    {
      category: 'Frontend',
      items: [
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'Redux Toolkit',
        'React Query',
        'React Router',
        'HTML',
        'CSS / SCSS',
      ],
    },
    {
      category: 'Backend & data',
      items: [
        'Node.js',
        'Express',
        'REST APIs',
        'PostgreSQL',
        'MongoDB',
        'Schema design',
        'Query optimisation',
      ],
    },
    {
      category: 'Product & interface',
      items: [
        'Figma',
        'Accessible UI',
        'Responsive design',
        'Material UI',
        'Tailwind CSS',
        'Component libraries',
      ],
    },
    {
      category: 'Quality & delivery',
      items: [
        'Jest',
        'React Testing Library',
        'Git',
        'CI/CD',
        'Code reviews',
        'Agile / Scrum',
        'Performance optimisation',
      ],
    },
  ],
  featuredSkills: [
    { name: 'React', shortName: 'R', area: 'Frontend' },
    { name: 'Next.js', shortName: 'N', area: 'Frontend' },
    { name: 'TypeScript', shortName: 'TS', area: 'Language' },
    { name: 'Node.js', shortName: 'JS', area: 'Backend' },
    { name: 'Tailwind CSS', shortName: '~', area: 'Styling' },
    { name: 'PostgreSQL', shortName: 'DB', area: 'Database' },
  ],
  projects: [
    {
      name: 'Transportation Management Platform',
      type: 'PORTPRO · ENTERPRISE SAAS',
      summary:
        'Customer-facing logistics workflows for load management, routing setup and document uploads.',
      technologies: ['React', 'TypeScript', 'Redux'],
      visual: 'platform',
    },
    {
      name: 'Port Monitoring System',
      type: 'PORTPRO · DATA & INTEGRATIONS',
      summary:
        'Near-real-time container, vessel and terminal updates that helped customers reduce demurrage charges by approximately 80%.',
      technologies: ['Node.js', 'Web scraping', 'Data processing'],
      visual: 'monitor',
    },
    {
      name: 'Shared Component Library',
      type: 'PORTPRO · DESIGN SYSTEM',
      summary:
        'Reusable, production-ready React components translated from Figma designs to improve consistency across teams.',
      technologies: ['React', 'Figma', 'Material UI'],
      visual: 'library',
    },
  ],
  education: [
    {
      qualification: 'Master of Information Technology',
      institution: 'KOI — King’s Own Institute · Sydney, Australia',
      period: 'Feb 2024 — Feb 2026',
      note: 'All coursework completed',
    },
    {
      qualification: 'Bachelor of Science in Computing',
      institution: 'The British College · Leeds Beckett University',
      period: 'Aug 2018 — Jun 2022',
      note: 'Web technologies, software development and database management',
    },
  ],
  certifications: [
    'Full Stack MERN Development Bootcamp',
    'Complete ReactJS Developer Bootcamp',
    'Master JavaScript from Basics to Advanced',
    'HTML5 & CSS3 for Modern Web Development',
  ],
}
