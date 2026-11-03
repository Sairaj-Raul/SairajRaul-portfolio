import { ProjectDetailsData } from '../../types';

export const nailifyProjectData: ProjectDetailsData = {
  slug: 'nailify',
  name: 'Nailify',
  tagline: 'An On-Demand Beauty Marketplace Connecting Customers with Nail Artists',
  shortDescription: 'A mobile-first beauty platform combining intelligent artist discovery, real-time booking, live location tracking and AI-powered nail styling.',
  category: 'On-demand Beauty / Beauty Technology',
  projectType: 'Mobile Application',
  platform: 'Android & iOS (React Native / Expo)',
  status: 'Live Platform',
  organization: 'EGC India',
  logoUrl: '/projects/nailify/NailifyLogo.webp',
  playStoreUrl: '', // [EDITABLE: Add verified Google Play Store URL when public]
  appStoreUrl: '', // [EDITABLE: Add verified Apple App Store URL when public]
  liveUrl: '', // [EDITABLE: Add official landing page URL if available]

  overview: {
    problem: [
      'Customers struggle to discover certified, high-quality nail artists and salons in their immediate neighborhood.',
      'Lack of flexible scheduling models that support both at-home doorstep services and scheduled in-salon appointments.',
      'Independent nail technicians and salon owners lack dedicated dispatch tools, booking orchestration, and business management software.',
      'Clients often have difficulty visualizing nail art options or finding artists capable of executing trending specialized styles.',
    ],
    solution:
      'Nailify solves these challenges with a unified mobile application built on React Native and Expo. It incorporates an automated geospatial artist-matching engine, live GPS journey tracking, a 17-state booking workflow with OTP verification, and an interactive Google Gemini AI assistant for personalized nail styling consultations.',
    highlights: [
      'Geofenced artist dispatch within 20km–50km dynamic radius',
      'Live turn-by-turn GPS journey tracking with real-time ETA',
      'Google Gemini AI conversational stylist with database function calls',
      'Dual-stage arrival and job-completion OTP verification with AWS S3 photo proof',
    ],
  },

  keyFeatures: [
    {
      id: 'geofenced-matching',
      title: 'Real-Time Geofenced Artist Matching',
      subtitle: 'Geospatial Discovery & Concurrent Dispatch',
      iconName: 'Navigation',
      highlight: true,
      description:
        'An automated matching engine built on MongoDB geospatial queries and Socket.IO for instant client-to-artist connection.',
      points: [
        'Hyperlocal artist discovery using 2dsphere indexing and $geoNear queries.',
        'Dynamic search radius expansion scaling from 20km up to 50km if local capacity is filled.',
        'Parallel booking offers broadcast to verified nearby artists with countdown timers.',
        'Atomic status verification ensuring strictly zero double-booking race conditions.',
      ],
    },
    {
      id: 'live-gps-tracking',
      title: 'Live GPS Tracking & Navigation',
      subtitle: 'Real-Time Journey Synchronization',
      iconName: 'MapPin',
      highlight: true,
      description:
        'End-to-end real-time journey tracking giving customers transparent visibility as artists travel to their location.',
      points: [
        'Live coordinate streaming powered by Socket.IO over persistent mobile connections.',
        'Google Directions API integration rendering road paths and turn-by-turn routing.',
        'Dynamic ETA calculation adapting dynamically to road traffic conditions.',
        'Interactive map visualization with custom vehicle and destination markers.',
      ],
    },
    {
      id: 'ai-stylist',
      title: 'AI-Powered Nail Stylist',
      subtitle: 'Conversational Style & Artist Recommendations',
      iconName: 'Sparkles',
      highlight: true,
      description:
        'Deep integration with Google Gemini AI featuring custom function calling to turn natural language queries into booked appointments.',
      points: [
        'Intelligent multi-turn nail styling conversations tailored to outfit, occasion, and preferences.',
        'AI function calling executed against the MongoDB database to recommend nearby artists skilled in the requested style.',
        'Redis-based response caching for trending style queries to ensure sub-second response times.',
        'Direct one-tap navigation from AI chat recommendations directly to booking checkout.',
      ],
    },
    {
      id: 'notification-pipeline',
      title: 'Background Notification Processing',
      subtitle: 'Asynchronous Event Dispatching',
      iconName: 'Bell',
      description:
        'A resilient asynchronous push notification pipeline engineered using BullMQ queues and Redis.',
      points: [
        'Decoupled notification dispatch to keep critical HTTP request threads non-blocking.',
        'Automatic retry mechanisms with exponential backoff for transient device reachability issues.',
        'Automated device token verification with automated invalid token pruning.',
        'Expo Push Notifications and TechMore SMS gateway integration for multi-channel alerts.',
      ],
    },
    {
      id: 'rbac-system',
      title: 'Hierarchical Role-Based Access Control',
      subtitle: 'Multi-Tier Permission Governance',
      iconName: 'ShieldCheck',
      description:
        'Comprehensive multi-persona management accommodating Freelance artists, Salon Owners, and Salon Employees.',
      points: [
        'Granular role-specific operational permissions and interface dashboard rendering.',
        'Salon team roster management, booking assignment delegation, and staff scheduling.',
        'Dependent employee authorization conditionally tied to the parent salon owner’s verified KYC status.',
      ],
    },
    {
      id: 'booking-lifecycle',
      title: 'Complex 17-State Booking Lifecycle',
      subtitle: 'State Machine & Escrow Protection',
      iconName: 'CheckCircle2',
      description:
        'A deterministic finite state machine governing the complete customer journey from request to payment release.',
      points: [
        'Arrival OTP verification preventing fraudulent check-ins before physical artist arrival.',
        'AWS S3 photographic proof upload required prior to and immediately following service execution.',
        'In-session add-on service requests with instant customer digital authorization.',
        'Completion OTP verification with automated escrow payout settlement.',
      ],
    },
    {
      id: 'social-feed',
      title: 'Optimized Social Discovery Feed',
      subtitle: 'High-Throughput Media Exploration',
      iconName: 'Image',
      description:
        'High-performance media discovery feed enabling clients to browse curated portfolios and trending nail designs.',
      points: [
        'Cursor-based keyset pagination delivering frictionless infinite scroll performance.',
        'Elimination of N+1 database queries through batch pre-fetching of user like and bookmark states.',
        'Composite indexing on category, engagement score, and publication timestamps.',
      ],
    },
    {
      id: 'mobile-architecture',
      title: 'Cross-Platform Mobile Architecture',
      subtitle: 'Unified React Native & Expo Stack',
      iconName: 'Smartphone',
      description:
        'A modern cross-platform application developed with React Native and Expo SDK 54 for iOS and Android.',
      points: [
        'Single codebase sharing components across customer and service-provider personas.',
        'Zustand for lightweight client-side state management and TanStack Query for server caching.',
        'Expo Router file-based navigation with deep-linking capabilities.',
      ],
    },
  ],

  techStack: [
    {
      category: 'Mobile Development',
      skills: ['React Native', 'Expo SDK 54', 'TypeScript', 'Expo Router', 'Zustand', 'TanStack Query'],
    },
    {
      category: 'Backend Development',
      skills: ['Node.js', 'Express 5', 'TypeScript', 'Socket.IO', 'BullMQ'],
    },
    {
      category: 'Database & Caching',
      skills: ['MongoDB', 'Redis', 'AWS S3'],
    },
    {
      category: 'Real-Time Communication',
      skills: ['Socket.IO', 'WebSockets', 'Live GPS Streaming'],
    },
    {
      category: 'AI Integration',
      skills: ['Google Gemini AI', 'Function Calling', 'Redis Caching'],
    },
    {
      category: 'Cloud & Notifications',
      skills: ['Google Maps Platform', 'Expo Push Notifications', 'TechMore SMS Gateway', 'AWS S3'],
    },
  ],

  screenshots: [
    {
      url: '/projects/nailify/screen-2-5uWGJdnv.webp',
      caption: 'Customer Dashboard & Booking Interface: Instant booking, live balance, daily AI recommendations, and verified service packages.',
      category: 'Customer Experience',
    },
    {
      url: '/projects/nailify/WhatsApp Image 2026-11-02 at 5.59.42 PM.jpeg',
      caption: 'Hyperlocal Social Discovery Feed: Curated salon portfolios, trending nail art filters, and floating "Ask AI" assistant.',
      category: 'Discovery & Social Feed',
    },
    {
      url: '/projects/nailify/screen-1-VDn5p9AR.webp',
      caption: 'Premium Nail Art Hub & Feature Overview: Virtual AR styling preview, top nearby artist discovery, and personalized offers.',
      category: 'AI & AR Styling',
    },
    {
      url: '/projects/nailify/NailifyLogo.webp',
      caption: 'Nailify Official Brand Identity and Mobile Application Icon.',
      category: 'Brand Identity',
    },
  ],

  challenges: [
    {
      id: 'concurrent-booking',
      title: 'Concurrent Artist Booking Acceptance',
      problem:
        'When a client creates an urgent appointment request, multiple nearby artists within the geofenced radius receive simultaneous broadcast alerts. High concurrency risks multiple artists accepting the exact same appointment, resulting in double-bookings and race conditions.',
      solution:
        'Implemented atomic MongoDB document update operations using conditional matching ($set on status: "PENDING"). Paired with Redis distributed locks, the first valid artist acceptance atomically transitions the appointment state to "MATCHED", immediately rejecting concurrent incoming requests and canceling other active broadcast alerts.',
    },
    {
      id: 'gps-battery-efficiency',
      title: 'Real-Time GPS Battery & Network Efficiency',
      problem:
        'Continuous high-frequency GPS coordinate streaming from mobile devices drains the artist’s phone battery rapidly and overwhelms the Socket.IO cluster with redundant packets during traffic jams or stationary stops.',
      solution:
        'Designed an adaptive client-side distance and speed threshold filter. Location coordinates are only emitted across the WebSocket connection if the artist has displaced by at least 15 meters or after a 10-second throttling interval, drastically reducing battery drain while maintaining accurate real-time journey tracking.',
    },
    {
      id: 'salon-authorization',
      title: 'Salon Employee Authorization & Dependent KYC',
      problem:
        'Salon employees must manage appointments on behalf of salon owners, but cannot legally operate or receive client dispatches if the parent salon’s regulatory KYC verification is revoked or expired.',
      solution:
        'Constructed a hierarchical authorization middleware in Express that recursively verifies the active status and KYC compliance of the parent salon on every privileged request. Any suspension of the parent entity automatically cascades down to halt all dependent employee booking dispatches instantly.',
    },
  ],

  navigation: {
    prevProject: { slug: 'aecci-gdr', name: 'AECCI Global Deal Room' },
    nextProject: { slug: 'ridez', name: 'RIDEZ (HerRidez)' },
  },
};
