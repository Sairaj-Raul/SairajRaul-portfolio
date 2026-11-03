import { ProjectDetailsData } from '../../types';
import { nailifyProjectData } from './nailify';
import { ridezProjectData } from './ridez';
import { agqProjectData } from './agq';
import { mirrorMindProjectData } from './mirrorMind';
import { utapLiveProjectData } from './utapLive';
import { aecciGdrProjectData } from './aecciGdr';

// Project details registry mapping slug to detailed case study data
export const projectDetailsRegistry: Record<string, ProjectDetailsData> = {
  nailify: nailifyProjectData,
  ridez: ridezProjectData,
  ridz: ridezProjectData, // Alias support for both slug patterns
  agq: agqProjectData,
  'mirror-mind': mirrorMindProjectData,
  mirrormind: mirrorMindProjectData, // Alias support
  'utap-live': utapLiveProjectData,
  utaplive: utapLiveProjectData, // Alias support
  'aecci-gdr': aecciGdrProjectData,
  aecci: aecciGdrProjectData, // Alias support
};

export const getProjectBySlug = (slug: string): ProjectDetailsData | undefined => {
  return projectDetailsRegistry[slug.toLowerCase()];
};

export {
  nailifyProjectData,
  ridezProjectData,
  agqProjectData,
  mirrorMindProjectData,
  utapLiveProjectData,
  aecciGdrProjectData,
};
