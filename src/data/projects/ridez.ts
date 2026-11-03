import { ProjectDetailsData } from '../../types';

export const ridezProjectData: ProjectDetailsData = {
  slug: 'ridez',
  name: 'RIDEZ (HerRidez)',
  tagline: 'A Safety-First Motorcycle Community Empowering Women Riders',
  shortDescription:
    'A full-stack mobile platform designed to connect women riders through real-time group tracking, emergency SOS assistance, proximity-based rider discovery and community experiences.',
  category: "Mobility & Community / Women's Motorcycle Safety",
  projectType: 'Mobile Application',
  platform: 'Android & iOS (React Native / Expo)',
  status: 'Live Platform',
  organization: 'EGC India',
  logoUrl: '/projects/ridez/RidezLogo.webp',
  playStoreUrl: '', // [EDITABLE: Add verified Google Play Store URL when public]
  appStoreUrl: '', // [EDITABLE: Add verified Apple App Store URL when public]
  liveUrl: '', // [EDITABLE: Add official platform URL when public]

  overview: {
    problem: [
      'Women riders often lack dedicated, verified safety networks to coordinate highway trips and discover peer riders.',
      'Group rides frequently suffer from disjointed communication, lost riders in remote terrain, and unreliable location sharing.',
      'Motorcycle emergencies and breakdown incidents require immediate high-reliability SOS broadcasts with verifiable live GPS coordinates.',
      'Managing community meetups, route reviews, and route difficulty classification requires a centralized platform tailored to two-wheeler enthusiasts.',
    ],
    solution:
      'HerRidez addresses these challenges by uniting real-time ride telemetry, geofenced Rider Radar, multi-channel emergency SOS dispatch, and automated post-ride analytics in a high-performance cross-platform mobile application powered by React Native, Expo, Node.js, and Socket.IO.',
    highlights: [
      'Bidirectional Socket.IO telemetry with Ramer-Douglas-Peucker route compression',
      'Tokenized Emergency SOS broadcast with background BullMQ queue retries',
      'Geospatial Rider Radar powered by MongoDB 2dsphere and MapLibre GL',
      'Multi-room authenticated WebSocket architecture with transactional data protection',
    ],
  },

  keyFeatures: [
    {
      id: 'ride-telemetry',
      title: 'Real-Time Ride Telemetry & GPS Processing',
      subtitle: 'Path Simplification & Live Metric Calculation',
      iconName: 'Navigation',
      highlight: true,
      description:
        'Engineered a real-time ride telemetry system using Socket.IO and GPS route simplification algorithms to process participant locations, calculate ride metrics and optimize route storage.',
      points: [
        'Bidirectional WebSocket streaming for synchronized live participant tracking.',
        'Haversine distance formulation for precise geographical distance calculations.',
        'Ramer-Douglas-Peucker algorithm implementation to compress high-frequency GPS coordinate trails by up to 75% without compromising path fidelity.',
        'Dynamic elevation gain, descent, and moving average speed calculation engine.',
      ],
    },
    {
      id: 'emergency-sos',
      title: 'Emergency SOS & Live Incident Tracking',
      subtitle: 'Multi-Channel Incident Dispatch Pipeline',
      iconName: 'ShieldAlert',
      highlight: true,
      description:
        'Developed an asynchronous emergency SOS dispatch system using BullMQ and Redis, enabling multi-channel emergency notifications with tokenized live GPS tracking.',
      points: [
        'One-touch SOS activation generating cryptographically signed live-share location tokens.',
        'Asynchronous dispatch pipeline via BullMQ and Redis handling concurrent emergency events.',
        'Automated multi-channel broadcast across Twilio SMS and email with exponential backoff retries.',
        'Web-viewable emergency tracker accessible by trusted contacts without requiring app installation.',
      ],
    },
    {
      id: 'rider-radar',
      title: 'Geospatial Rider Discovery – Rider Radar',
      subtitle: 'Proximity-Based Rider Mesh',
      iconName: 'MapPin',
      highlight: true,
      description:
        'Implemented a geospatial rider discovery engine using MongoDB location queries and MapLibre GL to identify and visualize nearby active riders.',
      points: [
        'Hyperlocal proximity scanning utilizing MongoDB 2dsphere indices and GeoJSON point features.',
        'Dynamic radar radius filtering adjustable between 1 km and 300 km.',
        'Smooth hardware-accelerated vector map rendering with MapLibre GL and React Native Reanimated.',
        'Privacy-preserving location fuzzing to protect stationary riders at home/work destinations.',
      ],
    },
    {
      id: 'ride-processing-gamification',
      title: 'Background Ride Processing & Gamification',
      subtitle: 'Asynchronous Metric Aggregation & Achievements',
      iconName: 'CheckCircle2',
      description:
        'Built a background processing pipeline using BullMQ and Redis to calculate ride statistics and manage automated rider achievement rewards.',
      points: [
        'Decoupled post-ride compute worker aggregating distance, duration, elevation, and speed.',
        'Automated achievement milestone badge evaluation based on cumulative riding history.',
        'Atomic database operations preventing duplicate badge or reward attribution.',
        'Comprehensive ride summary generation for exportable community showcases.',
      ],
    },
    {
      id: 'multi-room-socket',
      title: 'Multi-Room Real-Time Communication Architecture',
      subtitle: 'Multiplexed Room State Synchronization',
      iconName: 'Radio',
      description:
        'Designed a multiplexed Socket.IO communication architecture with authenticated room management for real-time rides, community groups and private messaging.',
      points: [
        'JWT-based socket handshake authentication guarding state transition events.',
        'Isolated ephemeral namespaces for ongoing group ride telemetry channels.',
        'Persistent community group chat rooms with typing indicators and offline delivery queuing.',
        'Secure peer-to-peer direct messaging channels between verified riding buddies.',
      ],
    },
    {
      id: 'transactional-deletion',
      title: 'Transactional Account Deletion & Data Anonymization',
      subtitle: 'ACID Compliance Across 20+ Collections',
      iconName: 'ShieldCheck',
      description:
        'Implemented an atomic account deletion and data anonymization workflow using MongoDB transactions to maintain data integrity across 20+ related collections.',
      points: [
        'Multi-document MongoDB transactions ensuring atomic commit or complete rollback on failure.',
        'Cascading anonymization purging Personally Identifiable Information (PII) while preserving historical route stats.',
        'Sanitization of emergency contact links, media uploads, and socket subscriptions.',
        'Strict referential integrity enforcement preventing orphaned records across the database.',
      ],
    },
  ],

  techStack: [
    {
      category: 'Mobile Development',
      skills: [
        'React Native',
        'Expo SDK 54',
        'TypeScript',
        'Expo Router',
        'TanStack React Query',
        'Zustand',
        'React Native Reanimated',
        'Expo Location',
      ],
    },
    {
      category: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'TypeScript', 'Socket.IO', 'BullMQ', 'Zod', 'Winston'],
    },
    {
      category: 'Database & Caching',
      skills: ['MongoDB', 'Mongoose', 'Redis', 'GeoJSON Spatial Indexing'],
    },
    {
      category: 'Mapping & Telemetry',
      skills: ['MapLibre GL', 'Ramer-Douglas-Peucker Algorithm', 'Haversine Formulation', 'GPS Coordinate Simplification'],
    },
    {
      category: 'Infrastructure & DevOps',
      skills: ['Docker', 'AWS S3', 'Redis Cluster', 'Nodemailer'],
    },
    {
      category: 'Notifications & Emergency',
      skills: ['Twilio SMS API', 'Expo Push Notifications', 'Tokenized Live Tracking'],
    },
  ],

  screenshots: [
    {
      url: '/projects/ridez/screen-1-CHRsFj6Q.webp',
      caption:
        'Rider Radar & Live Discovery: Proximity-based active rider detection across a dynamic 1–300km radius with MapLibre GL map integration.',
      category: 'Rider Radar',
    },
    {
      url: '/projects/ridez/screen-2-Cv_XUhjV.webp',
      caption:
        'Solo & Group Ride Interface: Real-time route planning, live-share token generation, garage bike selection, and telemetry tracking.',
      category: 'Ride Tracking',
    },
    {
      url: '/projects/ridez/screen-3-BWUKXLLK.webp',
      caption:
        'Verified Motorcycle Events: Group ride meetups, route distance, elevation, time, and verified organizer participation tracking.',
      category: 'Community & Events',
    },
    {
      url: '/projects/ridez/screen-4-Due5BIEK.webp',
      caption:
        'Route Exploration Feed: Community road reviews, scenic loop recommendations, terrain filters, and curated rider highlights.',
      category: 'Route Exploration',
    },
    {
      url: '/projects/ridez/RidezLogo.webp',
      caption: 'RIDEZ Official Brand Identity and Mobile Application Emblem.',
      category: 'Brand Identity',
    },
  ],

  challenges: [
    {
      id: 'gps-route-simplification',
      title: 'High-Frequency GPS Data Processing',
      problem:
        'Continuous raw GPS updates emitted during multi-hour highway rides create an overwhelming volume of coordinate points, straining server storage, slowing down database queries, and causing laggy mobile map re-renders.',
      solution:
        'Implemented the Ramer-Douglas-Peucker (RDP) algorithm along with distance-displacement thresholds. The RDP algorithm recursively eliminates intermediate collinear points while strictly preserving the authentic geometric curve and critical turns of the route, compressing coordinate storage by up to 75% without compromising map accuracy.',
    },
    {
      id: 'sos-delivery-reliability',
      title: 'Reliable Emergency SOS Notifications',
      problem:
        'External third-party SMS and mail delivery APIs can experience transient timeouts, rate limits, or carrier network drops during critical emergency SOS activations, jeopardizing rider safety.',
      solution:
        'Architected an isolated, prioritized BullMQ queue on Redis dedicated to emergency events. The worker implements intelligent exponential backoff retries with multi-channel fallbacks (SMS and high-priority email notifications) while providing instant cryptographically tokenized live GPS tracking links to emergency contacts.',
    },
    {
      id: 'transactional-account-cleanup',
      title: 'Data Integrity During Account Deletion',
      problem:
        'When a user requests account deletion, removing records across 20+ tightly coupled MongoDB collections (rides, telemetry logs, emergency contacts, group memberships, chat messages) risks partial failures and orphaned data that corrupts referential integrity.',
      solution:
        'Designed a multi-document MongoDB transaction session that encapsulates the entire cascading anonymization and deletion process. If any collection operation fails or times out, the entire transaction is rolled back atomically, guaranteeing strict ACID compliance and zero dangling records.',
    },
  ],

  navigation: {
    prevProject: { slug: 'nailify', name: 'Nailify' },
    nextProject: { slug: 'agq', name: 'AGQ (Ask Gov Question)' },
  },
};
