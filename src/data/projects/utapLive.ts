import { ProjectDetailsData } from '../../types';

export const utapLiveProjectData: ProjectDetailsData = {
  slug: 'utap-live',
  name: 'UTAP LIVE',
  tagline: 'Real-Time Live Streaming & Creator Monetization Network',
  shortDescription:
    'A full-stack, real-time live streaming and creator monetization platform built with React Native (Expo), Node.js, Express, MongoDB, and Redis. It enables performers to broadcast live video, engage audiences through real-time chat and UPI tipping, and monetize past performances through cloud recording and video replay capabilities.',
  category: 'Full-Stack Real-Time Mobile & Media Streaming Platform',
  projectType: 'Mobile Application & Streaming Platform',
  platform: 'Android & iOS (React Native / Expo SDK 54)',
  status: 'Live Platform',
  organization: 'EGC India',
  logoUrl: '/projects/utaplive/logo.webp',
  playStoreUrl: '', // [EDITABLE: Add verified Google Play Store URL when public]
  appStoreUrl: '', // [EDITABLE: Add verified Apple App Store URL when public]
  liveUrl: '', // [EDITABLE: Add official platform URL when public]
  githubUrl: '', // [EDITABLE: Add repository URL if public]

  overview: {
    problem: [
      'Performing artists and creators struggle to find accessible, high-performance mobile streaming platforms offering ultra-low-latency broadcast with integrated virtual gifting and audience interactions.',
      'Single-provider WebRTC implementations suffer from regional outages, vendor lock-in, and unpredictable streaming quality across fluctuating mobile networks.',
      'Manual stream lifecycle coordination leads to orphaned broadcast rooms, stale active statuses, and unrecorded sessions that waste infrastructure bandwidth.',
      'High-frequency real-time events (chat messages, hearts, joins/leaves) flood traditional relational or document databases, causing query contention and performance degradation during peak viewer surges.',
    ],
    solution:
      'UTAP LIVE resolves these challenges by uniting dual-provider WebRTC video pipelines (ZegoCloud and 100ms), automated cloud recording workflows, an asynchronous BullMQ stream lifecycle supervisor, and a throttled Socket.IO room presence engine in a cross-platform mobile application powered by React Native and Node.js.',
    highlights: [
      'Dual-provider WebRTC architecture abstracting ZegoCloud and 100ms with automated cloud recording',
      'Asynchronous stream lifecycle supervisor automating room promotion, 30-min idle teardown, and 48-hr archival',
      'Throttled Socket.IO room presence engine with synchronized viewer counts and animated reaction bursts',
      'Automated AI content moderation webhook pipeline enforcing safety score thresholds',
      'Secure phone OTP authentication with bcrypt hashing, Redis-backed rate limiting, and JWT token rotation',
      'ACID transaction-based stream creation preventing race conditions and subscription quota violations',
    ],
  },

  keyFeatures: [
    {
      id: 'dual-provider-webrtc',
      title: 'Dual-Provider WebRTC Streaming & Cloud Recording',
      subtitle: 'ZegoCloud & 100ms Abstraction with S3 Ingestion',
      iconName: 'Video',
      highlight: true,
      description:
        'End-to-end WebRTC live streaming architecture with dual-provider abstraction and automated server-side cloud recording pipelines.',
      points: [
        'Provider abstraction layer decoupling mobile rendering from underlying WebRTC vendors (ZegoCloud and 100ms).',
        'Dynamic runtime room configuration adapting bitrate and frame rates to creator network conditions.',
        'Server-triggered cloud recording pipelines initiating automated session captures upon stream promotion.',
        'Automated recording uploads to AWS S3 / Cloudflare R2 object storage with CDN URL resolution.',
      ],
    },
    {
      id: 'stream-lifecycle-automation',
      title: 'Distributed Background Stream Lifecycle Automation',
      subtitle: 'BullMQ & Redis Scheduled Supervisors',
      iconName: 'Clock',
      highlight: true,
      description:
        'Designed an asynchronous job processing system using BullMQ and Redis to automate stream lifecycle transitions, session archival, and periodic viewer analytics.',
      points: [
        'Redis-backed BullMQ scheduled jobs continuously supervising creator broadcast status transitions.',
        'Automatic promotion promoting scheduled events to active live rooms upon creator handshake.',
        'Idle room reaper terminating broadcast rooms after 30 minutes with zero active viewers to conserve compute.',
        'Session archival pipeline moving ended sessions to cold storage after 48 hours and generating 30-second viewer analytics snapshots.',
      ],
    },
    {
      id: 'interactive-room-engine',
      title: 'Real-Time Interactive Room Engine',
      subtitle: 'High-Throughput Socket.IO Presence & Reaction Mesh',
      iconName: 'Radio',
      highlight: true,
      description:
        'Engineered a real-time communication layer handling viewer presence, host connectivity, live chat, and reaction streams with optimized database synchronization.',
      points: [
        'Ephemeral Socket.IO room management tracking live viewer presence and sudden host disconnections.',
        'Bi-directional low-latency messaging delivering animated heart reactions, virtual gifting, and audience chat.',
        'Throttled database synchronization batching high-frequency room metrics before committing to MongoDB.',
        'Resilient heartbeat ping-pong protocol maintaining synchronized viewer tallies without socket drift.',
      ],
    },
    {
      id: 'automated-moderation',
      title: 'Automated Content Moderation',
      subtitle: 'Webhook-Driven AI Safety Scoring & Enforcement',
      iconName: 'ShieldAlert',
      highlight: false,
      description:
        'Implemented an automated content moderation pipeline that evaluates real-time stream frames using AI safety webhooks to protect platform integrity.',
      points: [
        'Webhook ingestion pipeline processing automated AI safety scores and visual infraction classifications.',
        'Multi-tier infraction handling issuing progressive creator warnings for minor compliance violations.',
        'Automated circuit-breaker terminating live streams instantly if safety scores exceed configured hazard thresholds.',
        'Moderator audit logging storing infraction snapshots for compliance review.',
      ],
    },
    {
      id: 'secure-otp-auth',
      title: 'Secure Phone OTP Authentication',
      subtitle: 'bcrypt-Hashed OTP Storage & JWT Token Rotation',
      iconName: 'KeyRound',
      highlight: false,
      description:
        'Constructed a hardened phone OTP authentication service featuring bcrypt hashing, Redis rate-limiting, and dual-token JWT lifecycle rotation.',
      points: [
        'Six-digit OTP verification with one-way bcrypt hashing preventing credential compromise in transit and rest.',
        'Redis sliding-window rate limiting mitigating SMS spam, brute-force enumeration, and carrier abuse.',
        'Dual-token JWT security model with short-lived access tokens and Redis-backed refresh token revocation.',
        'Seamless mobile session persistence with encrypted device-level token storage.',
      ],
    },
    {
      id: 'acid-stream-management',
      title: 'ACID Transaction-Based Stream Management',
      subtitle: 'Multi-Document MongoDB Replica Set Transactions',
      iconName: 'Database',
      highlight: false,
      description:
        'Utilized MongoDB multi-document transactions to eliminate concurrency race conditions during stream creation and enforce creator tier quotas.',
      points: [
        'Multi-document ACID transactions across creator profiles, stream rooms, and active subscription ledgers.',
        'Strict concurrency guards preventing creators from accidentally initiating multiple overlapping active sessions.',
        'Atomic subscription quota validation ensuring broadcast limits cannot be exceeded during concurrent requests.',
        'Automatic rollback preserving data consistency across collections if room initialization fails.',
      ],
    },
    {
      id: 'chunked-notifications',
      title: 'Chunked Push Notification Dispatcher',
      subtitle: 'Batch Follower Fanout via Expo Push API',
      iconName: 'Bell',
      highlight: false,
      description:
        'Built a decoupled, chunked notification fanout engine to alert active followers when creators initiate live broadcasts without slowing down API responses.',
      points: [
        'Dynamic follower device token retrieval resolving targeted recipient lists upon live broadcast promotion.',
        'Partitioned chunking dispatching notifications in batches of 100 tokens through the Expo Push Notification API.',
        'Asynchronous worker execution completely decoupled from the primary HTTP go-live response lifecycle.',
        'Failed token identification automatically purging invalid or uninstalled device endpoints.',
      ],
    },
  ],

  techStack: [
    {
      category: 'Frontend & Mobile Architecture',
      skills: [
        'React Native',
        'Expo SDK 54',
        'TypeScript',
        'ZegoCloud UIKit',
        '100ms HMS SDK',
        'React Navigation',
        'TanStack React Query',
        'Zustand',
        'React Native Reanimated',
        'Expo AV',
        'Socket.io-client',
      ],
    },
    {
      category: 'Backend & Real-Time Engine',
      skills: [
        'Node.js',
        'Express 5',
        'TypeScript',
        'Socket.io',
        'BullMQ',
        'Winston',
        'Zod',
        'Helmet',
      ],
    },
    {
      category: 'Database & Persistence',
      skills: [
        'MongoDB',
        'Mongoose',
        'Redis',
        'ioredis',
      ],
    },
    {
      category: 'Infrastructure & Cloud Gateways',
      skills: [
        'ZegoCloud WebRTC & Cloud Recording API',
        '100ms Live API',
        'AWS S3 / Cloudflare R2',
        'Expo Push Notification API',
        'TechMore SMS Gateway',
        'Docker',
      ],
    },
  ],

  screenshots: [
    {
      url: '/projects/utaplive/screen-1-BKjnIsss.webp',
      caption:
        'Interactive Live Broadcast Room: Real-time low-latency WebRTC live stream with floating heart reactions, audience chat, viewer counter, and virtual gifting overlay.',
      category: 'Live Broadcast',
    },
    {
      url: '/projects/utaplive/go_live-B3QvnBaH.webp',
      caption:
        'Creator Go-Live Studio: Professional creator broadcast interface with one-tap go-live initiation, 4K streaming support, and interactive camera effects.',
      category: 'Creator Studio',
    },
    {
      url: '/projects/utaplive/community_discovery-CyzQpC30.webp',
      caption:
        'Live Community & Stream Feed: Category-based discovery (Music, Gaming, Dance), trending live creator showcases, and instant stream previews.',
      category: 'Discovery Feed',
    },
    {
      url: '/projects/utaplive/personal_library-CLHKuvzV.webp',
      caption:
        'Personal Saved Library & Replays: Cloud-recorded past performances, saved broadcasts, duration markers, and creator follow notifications.',
      category: 'Recordings & Library',
    },
    {
      url: '/projects/utaplive/screen-2-BGPtQ-Js.webp',
      caption:
        'Multi-Genre Performance Explorer: Filtered discovery grid enabling users to connect with trending live performers across diverse creative fields.',
      category: 'Performance Explorer',
    },
    {
      url: '/projects/utaplive/logo.webp',
      caption:
        'UTAP LIVE Official Brand Emblem: High-energy gradient emblem representing interactive live performance and creator expression.',
      category: 'Brand Identity',
    },
  ],

  challenges: [
    {
      id: 'cloud-recording-sync',
      title: 'Cloud Recording Synchronization & Webhook Reliability',
      problem:
        'Cloud recording webhooks could be missed or blocked by transient network drops, leaving recordings indefinitely stuck in an unresolved uploading state.',
      solution:
        'Combined webhook processing with an exponential-backoff BullMQ polling worker that queries the Zego Query API until media URLs are resolved and persisted in object storage.',
    },
    {
      id: 'stream-creation-race-conditions',
      title: 'Stream Creation Race Conditions',
      problem:
        'Concurrent creator requests could bypass subscription limits or create duplicate streaming rooms under high-traffic broadcast launches.',
      solution:
        'Used MongoDB replica-set transactions to atomically handle creator verification, active-room checks, room creation, and quota enforcement in a single ACID commit block.',
    },
    {
      id: 'socket-events-db-contention',
      title: 'High-Frequency Socket Events & Database Contention',
      problem:
        'Persisting every viewer join, leave, heart reaction, and chat event directly to MongoDB could degrade performance during high-traffic streams.',
      solution:
        'Maintained live presence entirely in the Socket.IO layer and synchronized viewer metrics to the database through throttled updates and periodic BullMQ snapshot jobs.',
    },
  ],

  navigation: {
    prevProject: { slug: 'mirror-mind', name: 'MirrorMind' },
    nextProject: { slug: 'aecci-gdr', name: 'AECCI Global Deal Room' },
  },
};
