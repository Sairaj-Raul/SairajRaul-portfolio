export type ProjectCategory = 'all' | 'live' | 'upcoming' | 'personal';

export interface Project {
  id: string;
  name: string;
  category: string;
  type: 'live' | 'upcoming' | 'personal';
  description: string;
  status: string;
  iconName?: string;
  logoUrl?: string;
  techTags?: string[];
  liveUrl?: string;
  githubUrl?: string;
  ecosystem?: string;
  hasDetails?: boolean;
  detailsSlug?: string;
}

export interface ProjectFeature {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  iconName: string;
  highlight?: boolean;
  points: string[];
}

export interface ProjectScreenshot {
  url: string;
  caption: string;
  category: string;
}

export interface EngineeringChallenge {
  id: string;
  title: string;
  problem: string;
  solution: string;
}

export interface ProjectTechCategory {
  category: string;
  skills: string[];
}

export interface ProjectDetailsData {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  category: string;
  projectType: string;
  platform: string;
  status: string;
  organization: string;
  logoUrl?: string;
  mockupUrl?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  overview: {
    problem: string[];
    solution: string;
    highlights?: string[];
  };
  keyFeatures: ProjectFeature[];
  techStack: ProjectTechCategory[];
  screenshots: ProjectScreenshot[];
  challenges: EngineeringChallenge[];
  navigation?: {
    prevProject?: { slug: string; name: string };
    nextProject?: { slug: string; name: string };
  };
}

export interface SkillCategory {
  title: string;
  description?: string;
  iconName: string;
  skills: string[];
}

export interface ExperienceResponsibility {
  label: string;
  text: string;
}

export interface AssociatedProject {
  name: string;
  category?: string;
  url?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  statusBadge?: string;
  responsibilities: ExperienceResponsibility[];
  skillsMentioned?: string[];
  associatedProject?: AssociatedProject;
}

export interface EngineeringHighlight {
  id: string;
  title: string;
  iconName: string;
  points: string[];
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  subtext?: string;
  iconName: string;
}

export interface NavLink {
  name: string;
  href: string;
}
