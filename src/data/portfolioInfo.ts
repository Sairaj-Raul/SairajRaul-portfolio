import { NavLink, StatItem } from '../types';

export const personalInfo = {
  name: 'Sairaj Raul',
  role: 'Full Stack Software Developer',
  experienceYears: '3+',
  headline: "Hi, I'm Sairaj Raul.",
  subheadline: 'Full Stack Software Developer',
  shortBio: 'I build scalable web applications, robust backend systems, and mobile experiences that solve real-world business problems.',
  
  aboutText: [
    "I'm a Full Stack Software Developer with 3+ years of experience building end-to-end digital products.",
    "My experience spans frontend development, backend engineering, mobile applications, database design, automation, and third-party integrations.",
    "I enjoy solving complex business problems, designing reliable application workflows, and turning ideas into functional software products.",
    "I believe in writing maintainable code, understanding the problem before choosing the solution, and continuously improving as an engineer.",
  ],

  // Value props shown below About Me
  values: [
    {
      title: 'Build',
      subtitle: 'End-to-end Products',
      icon: 'Zap',
      color: 'text-neon',
      bgGlow: 'group-hover:border-neon/40',
    },
    {
      title: 'Solve',
      subtitle: 'Real Business Problems',
      icon: 'CheckCircle2',
      color: 'text-emerald-400',
      bgGlow: 'group-hover:border-emerald-400/40',
    },
    {
      title: 'Improve',
      subtitle: 'Performance & Scalability',
      icon: 'TrendingUp',
      color: 'text-neon-400',
      bgGlow: 'group-hover:border-neon/40',
    },
  ],

  contact: {
    // Editable contact information
    email: 'sairaj.raul2001@gmail.com', // [EDITABLE: Replace with your email address]
    displayEmail: 'sairaj.raul2001@gmail.com',
    github: 'https://github.com/Sairaj-Raul',
    linkedin: 'https://www.linkedin.com/in/sairajraul', // [EDITABLE: Replace with your LinkedIn profile link]
  },
};

export const statsData: StatItem[] = [
  {
    id: 'live-products',
    value: '9+',
    label: 'Live Products',
    subtext: '(EGC India)',
    iconName: 'Code',
  },
  {
    id: 'total-platforms',
    value: '12+',
    label: 'Platforms',
    subtext: '(Live + Upcoming)',
    iconName: 'Layers',
  },
  {
    id: 'experience-years',
    value: '3+ Years',
    label: 'Professional Experience',
    iconName: 'Users',
  },
  {
    id: 'full-stack-reach',
    value: 'Full Stack',
    label: 'Web, Mobile & Backend',
    iconName: 'Rocket',
  },
];

export const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];
