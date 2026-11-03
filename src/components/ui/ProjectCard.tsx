import React from 'react';
import { Link } from '../../router';
import {
  Building2,
  Bike,
  ShieldAlert,
  Sparkles,
  ShoppingBag,
  Radio,
  Boxes,
  BrainCircuit,
  Users,
  Globe2,
  HeartHandshake,
  Video,
  MapPin,
  FileSearch,
  Workflow,
  MailCheck,
  ExternalLink,
  ArrowRight,
  Code2,
  LucideIcon,
} from 'lucide-react';
import { Project } from '../../types';

const projectIconMap: Record<string, LucideIcon> = {
  Building2,
  Bike,
  ShieldAlert,
  Sparkles,
  ShoppingBag,
  Radio,
  Boxes,
  BrainCircuit,
  Users,
  Globe2,
  HeartHandshake,
  Video,
  MapPin,
  FileSearch,
  Workflow,
  MailCheck,
};

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const IconComponent = (project.iconName && projectIconMap[project.iconName]) || Code2;
  const hasDetails = project.hasDetails || Boolean(project.detailsSlug) || project.id === 'nailify';
  const detailsSlug = project.detailsSlug || project.id;

  // Status badge styling helper
  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Live Platform':
      case 'Completed':
        return 'text-neon bg-neon/10 border-neon/30';
      case 'In Development':
        return 'text-amber-300 bg-amber-500/10 border-amber-500/30';
      case 'Coming Soon':
      case 'Beta Coming Soon':
      case 'Prototype':
        return 'text-cyan-300 bg-cyan-500/10 border-cyan-500/30';
      default:
        return 'text-slate-300 bg-slate-800 border-slate-700';
    }
  };

  return (
    <div className="group relative rounded-xl border border-dark-border bg-dark-850/80 hover:bg-dark-800/90 hover:border-dark-border-light transition-all duration-300 flex flex-col justify-between p-5 hover:shadow-dark-card hover:-translate-y-1">
      {/* Top Header: Icon + Titles + Action */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-3.5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg bg-dark-800 border border-dark-border flex items-center justify-center text-neon group-hover:scale-105 group-hover:border-neon/40 transition-all shrink-0 overflow-hidden">
              {project.logoUrl ? (
                <img
                  src={project.logoUrl}
                  alt={`${project.name} Logo`}
                  className="w-full h-full object-contain p-1 rounded-md"
                  loading="lazy"
                />
              ) : (
                <IconComponent className="w-5 h-5" />
              )}
            </div>
            <div>
              {hasDetails ? (
                <Link
                  to={`/projects/${detailsSlug}`}
                  className="text-base font-semibold text-white tracking-tight hover:text-neon transition-colors block"
                >
                  {project.name}
                </Link>
              ) : (
                <h3 className="text-base font-semibold text-white tracking-tight group-hover:text-neon transition-colors">
                  {project.name}
                </h3>
              )}
              <p className="text-xs font-medium text-muted">
                {project.category}
              </p>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-1 shrink-0">
            {hasDetails && (
              <Link
                to={`/projects/${detailsSlug}`}
                aria-label={`View ${project.name} Case Study`}
                title="View Case Study"
                className="p-1.5 rounded-lg text-slate-300 hover:text-neon hover:bg-dark-750 transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.name}`}
                className="p-1.5 rounded-lg text-muted hover:text-neon hover:bg-dark-750 transition-colors shrink-0"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : !hasDetails ? (
              <div className="p-1.5 rounded-lg text-muted-dark/50 shrink-0">
                <ExternalLink className="w-4 h-4" />
              </div>
            ) : null}
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
          {project.description}
        </p>
      </div>

      {/* Card Footer: Status & Verified Tech Tags */}
      <div className="pt-3 border-t border-dark-border/60 flex flex-col gap-2.5">
        <div className="flex items-center justify-between text-xs">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[11px] font-medium ${getStatusStyle(project.status)}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {project.status}
          </span>

          {project.ecosystem && (
            <span className="text-[11px] text-muted-dark font-medium">
              {project.ecosystem}
            </span>
          )}
        </div>

        {/* Verified Tech tags (Only shown if defined and verified) */}
        {project.techTags && project.techTags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-1">
            {project.techTags.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-dark-900 border border-dark-border text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Case Study Available Link */}
        {hasDetails && (
          <div className="pt-1 flex items-center justify-between">
            <Link
              to={`/projects/${detailsSlug}`}
              className="inline-flex items-center gap-1.5 text-xs text-neon hover:text-neon-400 font-semibold group/link transition-colors"
            >
              <span>Explore Case Study</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
            </Link>
            <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-neon/10 text-neon border border-neon/20">
              Deep Dive
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
