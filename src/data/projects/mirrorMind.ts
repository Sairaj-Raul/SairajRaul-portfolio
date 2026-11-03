import { ProjectDetailsData } from '../../types';

export const mirrorMindProjectData: ProjectDetailsData = {
  slug: 'mirror-mind',
  name: 'MirrorMind',
  tagline: 'AI-Powered Cognitive Twin & Counterfactual Decision Intelligence',
  shortDescription:
    'An AI-powered cognitive twin and decision-intelligence platform built with Next.js, LangChain, and PostgreSQL that helps users evaluate personal choices, analyze emotional loops, and simulate counterfactual outcomes.',
  category: 'Full-Stack AI Application / Applied Cognitive Systems',
  projectType: 'Full-Stack Web & Android AI Application',
  platform: 'Next.js 16 Web Application & Native Android (Capacitor 8)',
  status: 'Live Platform',
  organization: 'EGC India',
  logoUrl: '/projects/mirrormind/Logo.webp',
  playStoreUrl: '', // [EDITABLE: Add verified Google Play Store URL when public]
  appStoreUrl: '', // [EDITABLE: Add verified Apple App Store URL when public]
  liveUrl: '', // [EDITABLE: Add official platform URL when public]
  githubUrl: '', // [EDITABLE: Add repository URL if public]

  overview: {
    problem: [
      'Individuals making high-stakes personal and career choices often face emotional reactivity, hidden cognitive biases, and recurring avoidance patterns that are hard to self-diagnose in isolation.',
      'Traditional journaling tools remain static and passive, failing to extract longitudinal behavioral insights or connect historical choices to present dilemmas.',
      'Conversational AI systems often experience high latency when attempting to combine immediate real-time token streaming with multi-step analytical and emotional evaluation.',
      'Decision-makers lack safe, simulated environments to test counterfactual scenarios or stress-test alternatives before committing to irreversible real-world actions.',
    ],
    solution:
      'MirrorMind functions as an interactive cognitive twin, pairing Next.js 16, LangChain, and Claude API to stream reflective dialogues in real time while asynchronously processing multi-tiered memory layers, diagnosing longitudinal behavioral loops, and simulating counterfactual timeline branches.',
    highlights: [
      'Decoupled Web Streams token streaming with asynchronous background cognitive processing',
      '3-tier memory model (ProfileMemory, CompanionMessage, EpisodicMemory) with >= 6 importance thresholding',
      'Counterfactual decision simulation supporting 4 modes (double, alt-reality, persona, root-cause)',
      '6-stage progressive conversational onboarding extracting psychographic profile attributes',
      'Longitudinal behavioral pattern diagnostics uncovering emotional tension and avoidance loops',
      'Cross-platform Android packaging with Capacitor 8 and dual-mode pooled PostgreSQL connection management',
    ],
  },

  keyFeatures: [
    {
      id: 'async-cognitive-pipeline',
      title: 'Asynchronous Cognitive Pipeline & LLM Streaming',
      subtitle: 'Web Streams API & Decoupled Background Workers',
      iconName: 'Zap',
      highlight: true,
      description:
        'Decoupled real-time conversational token streaming from heavy cognitive analysis, delivering immediate interactive responses while executing deep evaluation in the background.',
      points: [
        'Leveraged Web Streams API and LangChain to stream LLM tokens directly to the client interface without latency spikes.',
        'Asynchronous post-turn pipeline triggering emotion extraction, psychographic updates, and episodic memory persistence.',
        'Background processing queue preventing compute-intensive cognitive tasks from blocking interactive conversational throughput.',
        'Fault-tolerant background worker execution ensuring memory indexing succeeds independently of network drops.',
      ],
    },
    {
      id: 'multi-tier-memory',
      title: 'Multi-Tier Cognitive Memory Architecture',
      subtitle: 'Importance Thresholding & Layered Retrieval',
      iconName: 'BrainCircuit',
      highlight: true,
      description:
        'Engineered a structured, three-tiered memory hierarchy to preserve critical user context and longitudinal patterns without bloating conversational prompt windows.',
      points: [
        'Multi-tier architecture segregating ProfileMemory (core traits), CompanionMessage (dialogue history), and EpisodicMemory (pivotal choices).',
        'Algorithmic importance-score filtering (>= 6 threshold) ensuring only high-signal events transition to long-term memory.',
        'Deduplication and memory decay logic preventing stale or redundant observations from polluting LLM context windows.',
        'Dynamic context injection assembling tailored system prompts based on current dilemma categorization.',
      ],
    },
    {
      id: 'counterfactual-simulation',
      title: 'Counterfactual Decision & Timeline Simulation Engine',
      subtitle: 'Predictive Modeling & 4-Mode Scenario Branching',
      iconName: 'Workflow',
      highlight: true,
      description:
        'Developed a counterfactual decision simulator enabling users to forecast alternative realities, uncover hidden assumptions, and test choices against past outcomes.',
      points: [
        'Built 4 distinct simulation modes: predictive choice modeling (double), alternative reality projection (alt-reality), persona-based guidance (persona), and root-cause interrogation (why-am-i-like-this).',
        'Ingestion of historical decision logs, emotional baselines, and past outcomes to generate realistic branching paths.',
        'Structured dilemma breakdown highlighting trade-offs between short-term emotional comfort and long-term strategic growth.',
        'Actionable risk-versus-regret score synthesis assisting users in breaking cognitive paralysis.',
      ],
    },
    {
      id: 'progressive-onboarding',
      title: 'Progressive Conversational Onboarding',
      subtitle: 'Psychographic Extraction & Dynamic Persona Calibration',
      iconName: 'Bot',
      highlight: false,
      description:
        'Designed a multi-stage conversational intake flow that extracts structured psychographic attributes from unstructured dialogue to calibrate the AI persona.',
      points: [
        'Six-stage progressive dialogue flow guiding new users through ambient self-disclosure without static form fatigue.',
        'Automated psychographic extraction mapping communication styles, risk tolerance, and decision values.',
        'Dynamic calibration of the AI twin’s tone, response length, and challenge intensity based on user comfort.',
        'Safe transition from onboarding discovery to active daily reflection with initialized profile vectors.',
      ],
    },
    {
      id: 'behavioral-pattern-engine',
      title: 'Behavioral Pattern & Reflection Engine',
      subtitle: 'Longitudinal Bias Detection & Recurring Loop Diagnostics',
      iconName: 'Activity',
      highlight: false,
      description:
        'Constructed an analytical reflection engine that evaluates longitudinal logs to detect behavioral loops, cognitive dissonance, and recurring avoidance tendencies.',
      points: [
        'Automated parsing of decision logs, emotional intensity scores, and conversational sentiment trends.',
        'Detection of recurring behavioral loops (e.g., vision enthusiasm vs. risk aversion paralysis).',
        'Synthesis of actionable reflection audits with specific behavioral growth levers and cognitive rules.',
        'Structured audit reports highlighting contradictions between expressed aspirations and recorded choices.',
      ],
    },
    {
      id: 'cross-platform-android',
      title: 'Cross-Platform Android Integration',
      subtitle: 'Capacitor 8 Native Runtime Wrapper',
      iconName: 'Smartphone',
      highlight: false,
      description:
        'Integrated Capacitor 8 with the Next.js modern web application to enable native Android packaging and mobile-optimized touch interactions.',
      points: [
        'Native Android packaging via Capacitor 8 bridge maintaining full parity with the web platform.',
        'Mobile-tailored viewport handling, touch gestures, and persistent biometric session states.',
        'Optimized asset caching and responsive layouts tailored for mobile, tablet, and desktop viewports.',
        'Unified codebase architecture minimizing maintenance overhead across web and native mobile distributions.',
      ],
    },
  ],

  techStack: [
    {
      category: 'Frontend Architecture',
      skills: [
        'Next.js 16',
        'React 19',
        'TypeScript',
        'Tailwind CSS',
        'Radix UI',
        'Framer Motion',
        'Capacitor 8',
      ],
    },
    {
      category: 'Backend & AI Pipeline',
      skills: [
        'Next.js Route Handlers',
        'Node.js',
        'NextAuth.js',
        'LangChain',
        'Anthropic Claude API',
        'Web Streams API',
      ],
    },
    {
      category: 'Database & Persistence',
      skills: [
        'PostgreSQL',
        'Prisma ORM',
        'Supabase / Neon',
        'PgBouncer',
      ],
    },
    {
      category: 'Infrastructure & DevOps',
      skills: [
        'Docker',
        'Docker Compose',
        'GitHub Container Registry',
        'Vercel',
      ],
    },
    {
      category: 'Integrations & Delivery',
      skills: [
        'Anthropic Claude API',
        'Capacitor Native Bridge',
        'Server-Sent Events (SSE)',
      ],
    },
  ],

  screenshots: [
    {
      url: '/projects/mirrormind/patterns-CM4lwnVF.webp',
      caption:
        'Behavioral Pattern & Reflection Diagnostics: Deep behavioral diagnostics and cognitive insights analyzing decision logs, emotional loops, and actionable growth levers.',
      category: 'Behavioral Patterns',
    },
    {
      url: '/projects/mirrormind/3 (1).webp',
      caption:
        'Active Behavioral Audit & Loop Recognition: AI-powered audit identifying "Ambition vs. Safety" split signals, recognized recurring loops, and average decision confidence metrics.',
      category: 'Cognitive Insights',
    },
    {
      url: '/projects/mirrormind/4.webp',
      caption:
        'Conversational Cognitive Double: Multi-turn reflective AI dialogue utilizing LangChain token streaming, psychographic context tags, and personalized query suggestions.',
      category: 'AI Conversation',
    },
    {
      url: '/projects/mirrormind/Logo.webp',
      caption:
        'MirrorMind Official Brand Emblem: Dual mirrored cognitive head silhouettes with glowing central sphere representing self-reflection and decision intelligence.',
      category: 'Brand Identity',
    },
  ],

  challenges: [
    {
      id: 'streaming-heavy-processing',
      title: 'Streaming Responses Alongside Heavy AI Processing',
      problem:
        'Running complex cognitive tasks (emotion classification, memory scoring, psychographic profiling) synchronously during conversation caused prohibitive delays in token generation and degraded chat responsiveness.',
      solution:
        'Separated immediate conversational streaming from background cognitive processing using the Web Streams API (ReadableStream) and an asynchronous background pipeline that executes multi-step analysis after the user prompt response stream is initialized.',
    },
    {
      id: 'llm-output-validation',
      title: 'LLM Output Validation and Reliability',
      problem:
        'Generative AI outputs for structured diagnostics and counterfactual timelines would intermittently return malformed JSON, markdown-wrapped blocks, or incomplete schemas that could crash downstream application rendering.',
      solution:
        'Implemented defensive JSON sanitization pipelines with robust error recovery, regex fence stripping, schema validation via runtime parsing, and deterministic fallback data structures to guarantee application stability.',
    },
    {
      id: 'postgresql-connection-pooling',
      title: 'PostgreSQL Connection Pooling in Serverless Environments',
      problem:
        'Next.js serverless route handlers created bursty, short-lived database connections that rapidly exhausted PostgreSQL connection limits, while database migrations required direct unfiltered connections.',
      solution:
        'Configured dual database connection strings utilizing PgBouncer with Supabase/Neon: a pooled connection URL for high-throughput serverless API route handlers and a direct connection URL dedicated to Prisma migrations and schema deployments.',
    },
  ],

  navigation: {
    prevProject: { slug: 'agq', name: 'AGQ (Ask Gov Question)' },
    nextProject: { slug: 'utap-live', name: 'UTAP LIVE' },
  },
};
