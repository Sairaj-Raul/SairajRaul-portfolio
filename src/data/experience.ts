import { ExperienceItem } from '../types';

export const experiencesData: ExperienceItem[] = [
  {
    id: 'aecci',
    role: 'Full Stack Developer',
    company: 'AECCI',
    location: 'Navi Mumbai, India',
    period: 'December 2025 – Present',
    statusBadge: 'Present',
    responsibilities: [
      {
        label: 'Backend & Infrastructure',
        text: 'Built scalable Node.js APIs using Redis and BullMQ for concurrent processing across multiple production applications.',
      },
      {
        label: 'Real-Time Systems',
        text: 'Engineered real-time location tracking and live meeting capabilities using WebSockets, supporting multiple concurrent users.',
      },
      {
        label: 'Mobile & Integrations',
        text: 'Developed React Native applications with Google Maps, geocoding, EXIF-based location extraction, and Firebase/Expo push notifications.',
      },
      {
        label: 'Platform Features',
        text: 'Implemented authentication, role-based access, media uploads, notifications, and other reusable full-stack modules across 7 production applications.',
      },
    ],
    skillsMentioned: [
      'Node.js',
      'Redis',
      'BullMQ',
      'WebSockets',
      'React Native',
      'Google Maps',
      'Firebase',
      'Expo',
    ],
  },
  {
    id: 'research-connect-llc',
    role: 'Full Stack Software Developer',
    company: 'Research Connect LLC',
    location: 'Mumbai, India',
    period: 'June 2025 – December 2025',
    statusBadge: 'June 2025 – Dec 2025',
    responsibilities: [
      {
        label: 'Email Synchronization',
        text: 'Built a real-time Gmail synchronization pipeline using Pub/Sub and Kafka, syncing 50K+ CRM contact records with less than 5-second latency.',
      },
      {
        label: 'Bulk Email Delivery',
        text: 'Developed a bulk email delivery system using Redis and BullMQ, supporting 10K+ parallel sends with automated follow-up threads, reducing bounce/spam rates by 30%.',
      },
      {
        label: 'Backend Optimization',
        text: 'Enhanced backend API performance, achieving 10–12× faster response times and 80% latency reduction through optimized database queries and caching.',
      },
      {
        label: 'Calling Integration',
        text: 'Integrated a Twilio-based calling platform with a power dialer and voicemail automation, enabling 250+ agent calls per day and improving outreach productivity.',
      },
    ],
    skillsMentioned: [
      'Gmail API',
      'Pub/Sub',
      'Kafka',
      'Redis',
      'BullMQ',
      'Twilio',
      'PostgreSQL',
      'API Optimization',
    ],
    associatedProject: {
      name: 'Sales Buddy CRM',
      category: 'CRM & Sales Automation',
      url: 'https://sales-buddy.in/',
    },
  },
  {
    id: 'pascali-technologies',
    role: 'Software Developer – Backend + Automation',
    company: 'Pascali Technologies Private Limited',
    location: 'Mumbai, India',
    period: 'July 2023 – April 2025',
    statusBadge: 'July 2023 – Apr 2025',
    responsibilities: [
      {
        label: 'RPA Automation',
        text: 'Designed and deployed 25+ RPA automation bots to handle repetitive finance operations, cutting manual effort by 90% and error rates by 95%.',
      },
      {
        label: 'Task Orchestration',
        text: 'Built instance-based and queue-based task orchestration systems to optimize process concurrency and eliminate bottlenecks.',
      },
    ],
    skillsMentioned: [
      'RPA Automation',
      'Task Orchestration',
      'Node.js',
      'Queue Systems',
      'Process Concurrency',
    ],
  },
];
