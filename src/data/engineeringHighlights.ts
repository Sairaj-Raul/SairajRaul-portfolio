import { EngineeringHighlight } from '../types';

export const engineeringHighlightsData: EngineeringHighlight[] = [
  {
    id: 'auth-verification',
    title: 'Authentication & Verification',
    iconName: 'ShieldCheck',
    points: [
      'OTP-based email verification mechanisms with time-restricted token expiry.',
      'CAPTCHA integration to safeguard high-traffic submission forms against automated abuse.',
      'Secure, stateful application submission and identity verification workflows.',
    ],
  },
  {
    id: 'business-workflows',
    title: 'Complex Business Workflows',
    iconName: 'GitFork',
    points: [
      'Granular Role-Based Access Control (RBAC) accommodating multiple organization tiers.',
      'Multi-stage application approval, review, and rejection lifecycles.',
      'Secure, token-based resubmission and remediation flows for contested entries.',
    ],
  },
  {
    id: 'realtime-apps',
    title: 'Real-time Applications',
    iconName: 'Video',
    points: [
      'Seamless video conferencing and interactive session integration.',
      'Real-time meeting lifecycle management and attendee state synchronization.',
      'Timezone-aware scheduling with automated calendar event handling.',
    ],
  },
  {
    id: 'background-processing',
    title: 'Background Processing',
    iconName: 'Layers',
    points: [
      'Queue-based job orchestration to offload heavy compute operations from the main HTTP thread.',
      'Robust queue processing with BullMQ for retry mechanisms and dead-letter queues.',
      'Event-driven message pipelines using Apache Kafka and Pub/Sub topologies.',
    ],
  },
  {
    id: 'thirdparty-integrations',
    title: 'Third-party Integrations',
    iconName: 'Network',
    points: [
      'Automated email synchronization and dispatch via Gmail API and standard SMTP/IMAP.',
      'SMS delivery, alerts, and verification pipelines powered by Twilio.',
      'High-reliability external webhook listeners and partner API integrations.',
    ],
  },
  {
    id: 'database-engineering',
    title: 'Database Engineering',
    iconName: 'Database',
    points: [
      'Relational modeling and advanced query patterns using PostgreSQL.',
      'Document and schema-less data structures leveraging MongoDB for high-ingest payloads.',
      'Type-safe ORM schema migrations and transactions via Prisma ORM.',
    ],
  },
];
