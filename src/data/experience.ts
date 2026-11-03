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
        label: 'Full-Stack Architecture',
        text: 'Developed and maintained scalable full-stack features across 7 production applications using Node.js, Express.js, React, React Native, TypeScript, MongoDB, and PostgreSQL.',
      },
      {
        label: 'Real-Time Systems',
        text: 'Engineered real-time application features using Socket.IO and WebSockets, including live meeting communication, streaming interactions, GPS tracking, and real-time user presence.',
      },
      {
        label: 'Asynchronous Processing',
        text: 'Built asynchronous background processing workflows using Redis, BullMQ, and Agenda.js for notifications, scheduled tasks, automated reminders, session management, and media processing.',
      },
      {
        label: 'Security & API Architecture',
        text: 'Designed and integrated secure backend APIs with JWT authentication, role-based access control (RBAC), OTP verification, subscription entitlements, and quota management across multi-role platforms.',
      },
      {
        label: 'Third-Party Integrations',
        text: 'Integrated third-party services including ZEGOCLOUD, Razorpay, AWS S3, AWS SES, Expo Push Notifications, and SMS gateways for video conferencing, payments, media storage, and communication workflows.',
      },
      {
        label: 'Database & Concurrency',
        text: 'Implemented database-driven workflows using MongoDB, Mongoose, Prisma ORM, and Redis, including transactional operations, geospatial queries, caching, and concurrency control.',
      },
      {
        label: 'Document & Media Automation',
        text: 'Developed automated document and media processing workflows, including server-side PDF generation, cloud recording management, file uploads, and transactional email delivery.',
      },
    ],
    skillsMentioned: [
      'Node.js',
      'Express.js',
      'React',
      'React Native',
      'TypeScript',
      'Socket.IO',
      'Redis',
      'BullMQ',
      'Agenda.js',
      'MongoDB',
      'PostgreSQL',
      'Prisma ORM',
      'ZEGOCLOUD',
      'Razorpay',
      'AWS S3',
      'AWS SES',
    ],
    associatedProject: {
      name: 'AECCI Global Deal Room (GDR)',
      category: 'B2B Trade Matchmaking Platform',
      url: 'https://aecci.org.in',
    },
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
