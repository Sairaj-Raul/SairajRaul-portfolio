import { ProjectDetailsData } from '../../types';

export const agqProjectData: ProjectDetailsData = {
  slug: 'agq',
  name: 'AGQ – Aapli Gaav',
  tagline: 'Connecting Citizens with Authorities Through Transparent Digital Governance.',
  shortDescription:
    'A full-stack civic technology platform enabling citizens to report municipal issues, track grievance resolution and communicate with authorities through real-time updates and location-aware workflows.',
  category: 'Civic Technology / Grievance Management',
  projectType: 'Full-Stack Mobile & Web Platform',
  platform: 'Cross-Platform Mobile (Expo) & Admin Web Portal (React / Vite)',
  status: 'Live Platform',
  organization: 'EGC India',
  logoUrl: '/projects/agq/AgqLogo.webp',
  playStoreUrl: '', // [EDITABLE: Add verified Google Play Store URL when public]
  appStoreUrl: '', // [EDITABLE: Add verified Apple App Store URL when public]
  liveUrl: '', // [EDITABLE: Add official platform URL when public]

  overview: {
    problem: [
      'Citizens facing municipal infrastructure breakdowns (water supply, drainage, potholes, waste) lack direct, transparent channels to report issues to appropriate municipal departments.',
      'Traditional civic complaint handling suffers from lack of accountability, untraceable complaint references, and zero visibility into ground-level resolution progress.',
      'Field municipal officers and external department teams lack streamlined access to inspect and update issues without heavy application onboarding barriers.',
      'Whistleblowers and citizens reporting sensitive community concerns fear identity exposure or bureaucratic friction without privacy-preserving submission options.',
    ],
    solution:
      'AGQ (Ask Gov Question) connects citizens with municipal authorities through a transparent digital governance platform featuring guided 3-step reporting, automated departmental routing, stateless tokenized field officer workflows, multi-channel notifications, and live geospatial tracking.',
    highlights: [
      'Stateless field officer magic links with cryptographic access and citizen privacy masking',
      'Collision-safe grievance lifecycle tracking (#AQG-YYYY-NNNN) with append-only audit trails',
      'Multi-channel real-time notifications via WebSockets, Mobile Push, SMS, and Email',
      'Geospatial issue discovery with MongoDB 2dsphere indexing and interactive Google Maps',
      'Rule-based municipal authority routing across municipal departments and jurisdictional wards',
      'Multilingual localization supporting 10 Indian regional languages with i18next',
    ],
  },

  keyFeatures: [
    {
      id: 'stateless-officer-workflow',
      title: 'Stateless Field Officer Resolution Workflow',
      subtitle: 'Magic-Link Authentication & Citizen Identity Masking',
      iconName: 'KeyRound',
      highlight: true,
      description:
        'Architected a stateless field officer resolution workflow using cryptographic access tokens, enabling external municipal authorities to review complaints and submit resolution proof without application onboarding while protecting citizen identities.',
      points: [
        'Passwordless field officer access powered by cryptographically signed magic-link tokens.',
        'Token-based complaint inspection allowing immediate on-site review without formal application registration.',
        'Field-level resolution proof uploads with before/after photo documentation and verification notes.',
        'Dynamic citizen identity masking safeguarding personal details when complaints are marked anonymous.',
      ],
    },
    {
      id: 'grievance-lifecycle-audit',
      title: 'Grievance Lifecycle & Audit Management',
      subtitle: 'Deterministic State Machine & Traceable Audit Trails',
      iconName: 'FileCheck',
      highlight: true,
      description:
        'Engineered a structured civic grievance lifecycle with collision-safe reference generation and append-only audit trails, ensuring traceability across municipal complaint status transitions.',
      points: [
        'Structured multi-stage lifecycle managing OPEN, FORWARDED, IN_PROGRESS, RESOLVED, and ESCALATED states.',
        'Collision-safe reference identifier generation (e.g., #AQG-2026-0002) with year-based sequential indexing.',
        'Citizen profile validation and dynamic submission quotas preventing spam and duplicate submissions.',
        'Append-only activity timeline recording municipal transfers, officer notes, and status transitions.',
      ],
    },
    {
      id: 'multichannel-notification-engine',
      title: 'Multi-Channel Real-Time Notification Engine',
      subtitle: 'Asynchronous Notification Dispatch Pipeline',
      iconName: 'Bell',
      description:
        'Developed a multi-channel notification system integrating WebSockets, mobile push notifications, SMS and email to deliver real-time grievance updates without blocking primary API operations.',
      points: [
        'Bidirectional Socket.IO rooms broadcasting live status transitions to active citizen and admin sessions.',
        'Mobile push notifications delivered via Expo Push Notification service for instant incident alerts.',
        'Transactional SMS gateway integration through TechMore with automated localization templating.',
        'Asynchronous dispatch pipeline isolating third-party network latency from core HTTP response cycles.',
      ],
    },
    {
      id: 'geospatial-complaint-tracking',
      title: 'Geospatial Complaint Tracking',
      subtitle: '2dsphere Spatial Indexing & Interactive Mapping',
      iconName: 'MapPin',
      description:
        'Implemented geospatial grievance tracking using MongoDB 2dsphere indexes and Google Maps, enabling location-aware civic issue discovery and visualization across mobile and administrative portals.',
      points: [
        'MongoDB 2dsphere spatial indexing for radius queries and municipal boundary containment checks.',
        'Interactive map visualization with categorized marker clusters for water supply, roads, and drainage.',
        'Reverse-geocoded address resolution linking GPS coordinates to civic wards and administrative sectors.',
        'Proximity radar enabling citizens to discover and follow 60+ active nearby community issues.',
      ],
    },
    {
      id: 'rule-based-authority-routing',
      title: 'Rule-Based Municipal Authority Routing',
      subtitle: 'Automated Department & Jurisdiction Dispatch',
      iconName: 'GitBranch',
      description:
        'Designed a rule-based departmental recommendation engine that analyzes grievance categories and jurisdictional rules to assist administrators in routing complaints to appropriate municipal authorities.',
      points: [
        'Category-to-department classification mapping issues to MSEDCL, PWD, water supply, and drainage boards.',
        'Jurisdictional ward hierarchy evaluation matching civic boundaries with responsible department desks.',
        'Confidence-based authority suggestions minimizing administrative triage delays and misroutes.',
        'Dynamic SLA monitoring with automatic escalation triggers for overdue community grievances.',
      ],
    },
    {
      id: 'otp-multilingual-architecture',
      title: 'OTP Authentication & Multilingual Architecture',
      subtitle: 'Passwordless Auth & 10 Regional Languages',
      iconName: 'Languages',
      description:
        'Implemented a passwordless OTP authentication system with JWT token rotation and multilingual localization supporting 10 Indian regional languages across backend responses and mobile interfaces.',
      points: [
        'Passwordless mobile and email OTP authentication with rate limiting and replay attack prevention.',
        'Dual-token JWT architecture featuring short-lived access tokens and secure refresh token rotation.',
        'Backend localization middleware delivering localized validation errors and notification copies.',
        'Mobile i18next integration rendering seamless native interfaces in 10 Indian regional languages.',
      ],
    },
  ],

  techStack: [
    {
      category: 'Mobile Application',
      skills: [
        'React Native',
        'Expo SDK 54',
        'React 19',
        'TypeScript',
        'Expo Router',
        'Zustand',
        'TanStack Query',
        'React Native Maps',
        'Expo Location',
        'i18next',
      ],
    },
    {
      category: 'Admin Web Portal',
      skills: [
        'React',
        'Vite',
        'TypeScript',
        'Tailwind CSS',
        'Shadcn UI / Radix UI',
        'TanStack Table',
        'TanStack Query',
        'Recharts',
        'Redux Toolkit',
        'Framer Motion',
        'Google Maps API',
      ],
    },
    {
      category: 'Backend Architecture',
      skills: [
        'Node.js',
        'Express 5',
        'TypeScript',
        'Socket.IO',
        'BullMQ',
        'Zod',
        'Winston',
        'JWT',
        'Multer',
      ],
    },
    {
      category: 'Database & Infrastructure',
      skills: [
        'MongoDB',
        'Mongoose',
        'Redis',
        'AWS S3',
        'Cloudinary',
      ],
    },
    {
      category: 'Integrations & Gateways',
      skills: [
        'Google Maps Platform',
        'TechMore SMS Gateway',
        'Nodemailer',
        'Expo Push Notifications',
      ],
    },
  ],

  screenshots: [
    {
      url: '/projects/agq/3.webp',
      caption:
        'Citizen Home & Civic Dashboard: "Your City. Your Voice." Overview of live civic grievances across Maharashtra, categorized issues, pending/in-progress/resolved metrics, and quick filing actions.',
      category: 'Citizen Dashboard',
    },
    {
      url: '/projects/agq/4.webp',
      caption:
        '3-Step Guided Grievance Submission: Streamlined citizen reporting with issue categorization, geo-tagged photo evidence, municipality detection, and privacy/identity disclosure settings.',
      category: 'Complaint Submission',
    },
    {
      url: '/projects/agq/5.webp',
      caption:
        'Real-Time Grievance Lifecycle Tracking: Multi-stage progress tracking (Submitted, Verified, In Progress, Resolved) with collision-safe reference #AQG-2026-0002 and timestamped officer activity timeline.',
      category: 'Lifecycle Tracking',
    },
    {
      url: '/projects/agq/6.webp',
      caption:
        'Geospatial Issue Discovery & Map Radar: Interactive map visualization displaying 61 nearby civic issues across municipal wards with category filtering for water supply, roads, and drainage.',
      category: 'Geospatial Mapping',
    },
    {
      url: '/projects/agq/image.webp',
      caption:
        'Citizen Profile & Multilingual Preferences: Account management interface featuring privacy-first controls and multilingual selection supporting 10 Indian regional languages.',
      category: 'Profile & Localization',
    },
    {
      url: '/projects/agq/AgqLogo.webp',
      caption:
        'AGQ (Ask Gov Question) Official Brand Emblem: Minimalist civic identity emblem representing transparent citizen-authority governance.',
      category: 'Brand Identity',
    },
  ],

  challenges: [
    {
      id: 'collision-safe-reference-generation',
      title: 'Collision-Safe Grievance Reference Generation',
      problem:
        'MongoDB unique indexes caused duplicate key errors when multiple complaints had null reference numbers during the transition to the updated grievance workflow.',
      solution:
        'Implemented sparse unique indexing and collision-safe reference generation for year-based complaint identifiers.',
    },
    {
      id: 'external-officer-access-privacy',
      title: 'External Officer Access & Citizen Privacy',
      problem:
        'Municipal field officers needed access to complaints without creating application accounts, while citizens required protection of their identities when reporting sensitive issues.',
      solution:
        'Implemented cryptographic magic-link access tokens and dynamic identity masking based on the citizen’s disclosure preference.',
    },
    {
      id: 'reliable-multichannel-notifications',
      title: 'Reliable Multi-Channel Notifications',
      problem:
        'External SMS, email and push notification services could introduce latency or failures during grievance submission and forwarding.',
      solution:
        'Separated notification processing into independent execution stages, prioritizing in-app records and real-time WebSocket updates while isolating external service failures.',
    },
  ],

  navigation: {
    prevProject: { slug: 'ridez', name: 'RIDEZ (HerRidez)' },
    nextProject: { slug: 'mirror-mind', name: 'MirrorMind' },
  },
};
