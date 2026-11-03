import React from 'react';
import { AlertCircle, CheckCircle2, Lightbulb } from 'lucide-react';
import { ProjectDetailsData } from '../../types';

interface ProjectOverviewProps {
  data: ProjectDetailsData;
}

export const ProjectOverview: React.FC<ProjectOverviewProps> = ({ data }) => {
  return (
    <section id="overview" className="py-14 sm:py-18 relative border-b border-dark-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-5 h-1 bg-neon rounded-full shrink-0" />
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Project Overview & The Problem
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: The Challenge */}
          <div className="lg:col-span-6 p-6 sm:p-7 rounded-2xl border border-dark-border bg-dark-850/70">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <AlertCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                The Industry Problem
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 mb-5 leading-relaxed">
              Before Nailify, the beauty and nail care sector suffered from fragmented booking channels, unverified technician quality, and manual operational coordination:
            </p>

            <ul className="space-y-3.5">
              {data.overview.problem.map((prob, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-2" />
                  <span>{prob}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: The Engineered Solution */}
          <div className="lg:col-span-6 p-6 sm:p-7 rounded-2xl border border-neon/30 bg-dark-850/80 shadow-neon-sm relative overflow-hidden">
            {/* Subtle top corner gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-neon/10 border border-neon/30 flex items-center justify-center text-neon shrink-0">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                The Architectural Solution
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              {data.overview.solution}
            </p>

            {data.overview.highlights && data.overview.highlights.length > 0 && (
              <div className="pt-4 border-t border-dark-border/80">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-dark mb-3">
                  Core Implementation Highlights
                </h4>
                <div className="space-y-2.5">
                  {data.overview.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-neon shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
