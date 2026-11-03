import { ProjectDetailsData } from '../../types';

export const aecciGdrProjectData: ProjectDetailsData = {
  slug: 'aecci-gdr',
  name: 'AECCI Global Deal Room',
  tagline: 'Enterprise Cross-Border B2B Trade Facilitation & Real-Time Deal Matchmaking',
  shortDescription:
    'The AECCI Global Deal Room is an enterprise cross-border B2B trade facilitation and matchmaking platform connecting global exporters, importers, trade partners, and industry experts. It enables structured virtual deal rooms, bilateral consultations, country-level trade intelligence, advertising management, subscription-based services, and automated invoicing through a responsive web and mobile architecture.',
  category: 'Enterprise Full-Stack B2B Platform / Real-Time Trade Matchmaking System',
  projectType: 'Full-Stack Web Application & Mobile (Capacitor)',
  platform: 'Web Portal (React 19 / Vite) & Mobile (Capacitor)',
  status: 'Live Platform',
  organization: 'Asian-Exim Chamber of Commerce and Industry (AECCI)',
  logoUrl: '/projects/aecci/logo.webp',
  liveUrl: 'https://aecci.org.in',
  playStoreUrl: '', // [EDITABLE: Add verified Google Play Store URL when public]
  appStoreUrl: '', // [EDITABLE: Add verified Apple App Store URL when public]
  githubUrl: '', // [EDITABLE: Add repository URL if public]

  overview: {
    problem: [
      'Global exporters and importers face fragmented communication channels, lack of institutional trust, and high coordination friction when organizing cross-border B2B trade negotiations.',
      'Traditional video conferencing platforms lack trade-specific workflows such as waiting room vetting, bilateral agenda enforcement, institutional certification, and country-level trade intelligence.',
      'Scheduling meetings across heterogeneous international timezones often leads to booking collisions, timezone miscalculations, and missed holiday constraints.',
      'Synchronous document generation (GST-compliant tax invoices and host certificates) and heavy notification fanouts risk payment gateway timeouts during peak transaction surges.',
    ],
    solution:
      'AECCI Global Deal Room establishes an end-to-end digital trade enclave combining ZEGOCLOUD WebRTC video rooms with custom Socket.IO signaling, dual-layer BullMQ and Agenda.js automation pipelines, Razorpay B2B subscription and quota enforcement, and automated Puppeteer PDF generation in a unified responsive platform.',
    highlights: [
      'Real-time virtual deal room architecture combining ZEGOCLOUD WebRTC with custom Socket.IO signaling',
      'Dual-layer background automation pipeline utilizing BullMQ (Redis) and Agenda.js (MongoDB)',
      'Razorpay subscription entitlement engine with slot-based quota deductions and offline approval flows',
      'Automated GST-compliant PDF invoice and host certificate rendering pipeline via Puppeteer and AWS S3',
      'Granular multi-role access control for Admins, Exporters, Importers, Partners, and Indenting Agents',
      'Timezone-aware bilateral scheduling system with IST calendar normalization and international holiday validation',
    ],
  },

  keyFeatures: [
    {
      id: 'virtual-deal-room-signaling',
      title: 'Real-Time Virtual Deal Room & Meeting Signaling Engine',
      subtitle: 'ZEGOCLOUD WebRTC & Custom Socket.IO Signaling Mesh',
      iconName: 'Video',
      highlight: true,
      description:
        'Built a real-time virtual deal-room architecture combining WebRTC media streaming with custom WebSocket signaling for waiting rooms, participant moderation, and live meeting lifecycle management.',
      points: [
        'Integrated ZEGOCLOUD WebRTC high-definition video conferencing paired with dedicated Socket.IO signaling rooms.',
        'Granular participant state management handling waiting room transitions, host hand-raising, and mute requests.',
        'Administrative participant moderation supporting user ejection, screen-sharing permissions, and meeting lifecycle status transitions.',
        'Server-orchestrated meeting recording triggers with status query polling and storage synchronization.',
      ],
    },
    {
      id: 'dual-background-automation',
      title: 'Dual Background Processing & Automation Architecture',
      subtitle: 'BullMQ (Redis) & Agenda.js (MongoDB) Task Supervisor',
      iconName: 'Workflow',
      highlight: true,
      description:
        'Engineered a dual-layer background processing architecture using BullMQ and Agenda.js to manage asynchronous notifications, scheduled session cleanup, and automatic availability-slot expiry.',
      points: [
        'High-throughput BullMQ queues on Redis handling asynchronous transactional email fanouts, invoice generation, and meeting reminders.',
        'Persistent Agenda.js workers on MongoDB supervising scheduled recurring maintenance and session state transitions.',
        'Automated availability reaper expiring unbooked trade slots and releasing locked calendar resources.',
        'Self-healing cleanup jobs terminating stale authentication tokens and purging orphaned ephemeral socket sessions.',
      ],
    },
    {
      id: 'subscription-razorpay-entitlements',
      title: 'Subscription Entitlements, Quota Management & Razorpay Integration',
      subtitle: 'Monetization Engine & Slot-Based Quota Deductions',
      iconName: 'CreditCard',
      highlight: true,
      description:
        'Developed a B2B subscription and monetization engine supporting Razorpay payment verification, tier-based entitlements, and meeting-booking quota management.',
      points: [
        'Razorpay order creation, payment signature verification, and idempotent webhook reconciliation.',
        'Multi-tier B2B subscription plans enforcing feature access rules, country directory visibility, and meeting booking limits.',
        'Slot-based meeting quota deduction engine preventing overbooking and supporting prorated top-up purchases.',
        'Offline payment approval workflows enabling institutional bank transfers with manual administrative verification.',
      ],
    },
    {
      id: 'automated-pdf-generation',
      title: 'Automated PDF & Certificate Generation',
      subtitle: 'Headless Puppeteer & Handlebars Document Engine',
      iconName: 'FileText',
      highlight: false,
      description:
        'Constructed an automated document rendering engine generating GST-compliant tax invoices and GDR host certificates via Puppeteer and Handlebars.',
      points: [
        'Headless Puppeteer rendering engine compiling dynamic Handlebars templates into pixel-perfect PDF documents.',
        'Indian Rupee (INR) amount-to-words currency formatting engine tailored for GST regulatory compliance.',
        'Automated S3 bucket ingestion returning signed asset URLs for persistent audit trails.',
        'Asynchronous email attachment dispatch via AWS SES / Nodemailer decoupled from checkout flows.',
      ],
    },
    {
      id: 'multi-role-rbac-security',
      title: 'Multi-Role Access Control & Security',
      subtitle: 'Institutional Verification & Permission Matrices',
      iconName: 'ShieldCheck',
      highlight: false,
      description:
        'Designed a comprehensive security and role-based access control framework supporting multiple international trade stakeholder archetypes.',
      points: [
        'Role-based authorization governing Admins, Exporters, Importers, Trade Partners, and Indenting Agents.',
        'Institutional company verification lifecycle managing pending_verification, approved, and rejected states.',
        'Granular navigation and action permissions guarding confidential trade leads and pricing quotes.',
        'Platform maintenance circuit-breaker with emergency email whitelisting and rate-limiting safeguards.',
      ],
    },
    {
      id: 'timezone-aware-advertising',
      title: 'Timezone-Aware Advertising & Placement Management',
      subtitle: 'IST Calendar Normalization & Dynamic Quotations',
      iconName: 'Calendar',
      highlight: false,
      description:
        'Engineered a specialized advertising placement system managing high-visibility promotional banners across the web portal and deal rooms.',
      points: [
        'Timezone-aware date calculations normalizing disparate international client requests to Indian Standard Time (IST).',
        'Slot collision prevention enforcing maximum concurrent campaign caps across homepage and deal room feeds.',
        'Dynamic quotation engine calculating pro-rated banner rates based on tier, duration, and placement category.',
        'Real-time campaign activation and automated expiry tracking maintaining inventory accuracy.',
      ],
    },
  ],

  techStack: [
    {
      category: 'Frontend & Cross-Platform',
      skills: [
        'React 19',
        'TypeScript',
        'Vite',
        'Tailwind CSS v4',
        'Capacitor',
        'Redux Toolkit',
        'Socket.io-client',
        'ZEGOCLOUD UI Kit',
        'Three.js',
        'React Three Fiber',
        'D3 / d3-geo',
        'TanStack Table',
        'React Hook Form',
        'Zod',
        'Framer Motion',
      ],
    },
    {
      category: 'Backend & Scheduling',
      skills: [
        'Node.js',
        'Express 5',
        'TypeScript',
        'Socket.io',
        'BullMQ',
        'Agenda.js',
        'Puppeteer',
        'Handlebars',
        'JWT',
        'Bcrypt',
        'Helmet',
        'Express Rate Limit',
      ],
    },
    {
      category: 'Database & Persistence',
      skills: [
        'MongoDB',
        'Prisma ORM',
        'Redis',
        'ioredis',
      ],
    },
    {
      category: 'Infrastructure & Integrations',
      skills: [
        'AWS S3',
        'AWS SES / SESv2',
        'Nodemailer',
        'Razorpay Payment Gateway',
        'ZEGOCLOUD WebRTC',
        'Web Push API',
        'Capacitor Local & Push Notifications',
      ],
    },
  ],

  screenshots: [
    {
      url: '/projects/aecci/image.png',
      caption:
        'Live Virtual Round Table Session: Encrypted trade desk with real-time ZEGOCLOUD WebRTC video conferencing, multi-participant bilateral room moderation, and synchronized group chat for UAE engineering exports.',
      category: 'Round Table Session',
    },
    {
      url: '/projects/aecci/Screenshot 2026-11-03 101133.png',
      caption:
        'Enterprise Web Portal – Discover Round Tables: Country-level bilateral trade session matchmaking, international market filters, Grant Thornton partner sessions, and subscription quota actions.',
      category: 'Round Table Session',
    },
    {
      url: '/projects/aecci/4.webp',
      caption:
        'AECCI Global Deal Room Mobile Platform: "Connecting Global Opportunities. Building Global Success." Export opportunities across 50+ countries, verified buyer matching, and bilateral B2B meeting access.',
      category: 'Mobile Deal Room',
    },
    {
      url: '/projects/aecci/2.webp',
      caption:
        'International Trade Events & Summits: Global trade webinar calendar, policy consultant listings, and bilateral trade delegation tracking across 40+ countries.',
      category: 'Events & Summits',
    },
    {
      url: '/projects/aecci/logo.webp',
      caption:
        'AECCI Sourcing Enterprise & Global Deal Room Official Emblem: Industrial gear and laurel emblem symbolizing cross-border commerce.',
      category: 'Brand Identity',
    },
  ],

  challenges: [
    {
      id: 'timezone-sensitive-scheduling',
      title: 'Timezone-Sensitive Scheduling & Holiday Validation',
      problem:
        'Coordinating bilateral meetings across international timezones while enforcing Indian national holidays and minimum booking lead times created scheduling discrepancies.',
      solution:
        'Stored dates in UTC while calculating calendar boundaries in IST using timezone-aware date utilities. Added Indian national holiday validation rules and scheduled background jobs to expire unbooked slots.',
    },
    {
      id: 'heavy-pdf-payment-workflows',
      title: 'Heavy PDF Generation During Payment Workflows',
      problem:
        'Running Puppeteer PDF rendering, AWS S3 uploads, and transactional email delivery inside synchronous Razorpay payment webhooks risked gateway timeout failures.',
      solution:
        'Moved document generation, cloud storage, and email delivery into dedicated Redis-backed BullMQ queues with unique job keys and idempotent processing to guarantee sub-second webhook acknowledgments.',
    },
    {
      id: 'webrtc-admin-moderation-sync',
      title: 'WebRTC Streaming & Administrative Moderation',
      problem:
        'Synchronizing live video session states with administrative actions such as muting participants, removing users, and triggering cloud recordings across heterogeneous clients.',
      solution:
        'Separated high-bandwidth media streaming through ZEGOCLOUD from application-level moderation signaling through dedicated Socket.IO session rooms and targeted private client channels.',
    },
  ],

  navigation: {
    prevProject: { slug: 'utap-live', name: 'UTAP LIVE' },
    nextProject: { slug: 'nailify', name: 'Nailify' },
  },
};
