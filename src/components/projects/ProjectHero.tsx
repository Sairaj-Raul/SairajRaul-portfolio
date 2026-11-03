import React from 'react';
import { Link } from '../../router';
import { ArrowLeft, ExternalLink, Smartphone, Sparkles, Building2, Globe } from 'lucide-react';
import { ProjectDetailsData } from '../../types';

interface ProjectHeroProps {
  data: ProjectDetailsData;
}

export const ProjectHero: React.FC<ProjectHeroProps> = ({ data }) => {
  const hasMobile =
    data.projectType.toLowerCase().includes('mobile') ||
    data.projectType.toLowerCase().includes('android');
  const hasWeb = data.projectType.toLowerCase().includes('web');
  const isMultiPlatform = hasMobile && hasWeb;

  return (
    <div className="relative pt-8 pb-14 sm:pb-20 border-b border-dark-border/60 overflow-hidden">
      {/* Background ambient gradient glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-neon/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-muted hover:text-neon transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Title, Metadata, Description */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            {/* Badges row */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-neon/10 border border-neon/30 text-neon">
                <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
                {data.status}
              </span>

              {isMultiPlatform ? (
                <>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-dark-850 border border-dark-border text-slate-300">
                    <Smartphone className="w-3.5 h-3.5 text-neon" />
                    {data.projectType.toLowerCase().includes('android') ? 'Android Application' : 'Mobile Application'}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-dark-850 border border-dark-border text-slate-300">
                    <Globe className="w-3.5 h-3.5 text-cyan-400" />
                    {data.projectType.toLowerCase().includes('admin') ? 'Admin Web Portal' : 'Web Application'}
                  </span>
                </>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-dark-850 border border-dark-border text-slate-300">
                  <Smartphone className="w-3.5 h-3.5 text-neon" />
                  {data.projectType}
                </span>
              )}

              {data.organization && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-dark-850 border border-dark-border text-slate-300">
                  <Building2 className="w-3.5 h-3.5 text-slate-400" />
                  {data.organization}
                </span>
              )}
            </div>

            {/* Project Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
              {data.name}
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl font-semibold text-slate-200 tracking-tight mb-4">
              {data.tagline}
            </p>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mb-8">
              {data.shortDescription}
            </p>

            {/* Actions / Links */}
            <div className="flex flex-wrap items-center gap-3.5">
              {data.playStoreUrl && (
                <a
                  href={data.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-xs sm:text-sm bg-neon text-dark-950 hover:bg-neon-400 transition-all shadow-neon-sm"
                >
                  <span>Google Play Store</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              {data.liveUrl && (
                <a
                  href={data.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-xs sm:text-sm bg-dark-850 text-slate-200 border border-dark-border hover:border-slate-400 transition-all"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              <a
                href="#features"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-xs sm:text-sm bg-dark-850 hover:bg-dark-800 text-slate-300 border border-dark-border hover:border-neon/40 transition-all"
              >
                <Sparkles className="w-4 h-4 text-neon" />
                <span>Explore Technical Features</span>
              </a>
            </div>
          </div>

          {/* Right Column: Logo & Platform Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative group p-6 sm:p-8 rounded-2xl border border-dark-border bg-dark-900/90 shadow-2xl backdrop-blur-xl max-w-sm w-full text-center">
              {/* Subtle neon glow border hover */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-neon/20 to-transparent opacity-50 group-hover:opacity-100 transition duration-300 -z-10" />

              {data.logoUrl && (
                <div className="w-24 h-24 mx-auto mb-5 rounded-2xl bg-white p-3 shadow-lg flex items-center justify-center overflow-hidden border border-slate-200/20">
                  <img
                    src={data.logoUrl}
                    alt={`${data.name} Logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}

              <h2 className="text-xl font-bold text-white mb-1">{data.name}</h2>
              <p className="text-xs text-muted font-medium mb-4">{data.category}</p>

              <div className="pt-4 border-t border-dark-border/80 flex flex-col gap-2 text-xs text-slate-300 text-left">
                <div className="flex justify-between py-1">
                  <span className="text-muted">Platform:</span>
                  <span className="font-semibold text-white">{data.platform}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted">Organization:</span>
                  <span className="font-semibold text-white">{data.organization}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted">Status:</span>
                  <span className="font-semibold text-neon">{data.status}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
