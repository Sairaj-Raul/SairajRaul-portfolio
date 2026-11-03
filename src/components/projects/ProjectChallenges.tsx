import React from 'react';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';
import { ProjectDetailsData } from '../../types';

interface ProjectChallengesProps {
  data: ProjectDetailsData;
}

export const ProjectChallenges: React.FC<ProjectChallengesProps> = ({ data }) => {
  return (
    <section id="challenges" className="py-16 sm:py-20 relative border-b border-dark-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-5 h-1 bg-neon rounded-full shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Engineering Challenges & Architectural Tradeoffs
            </h2>
          </div>
          <p className="text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
            Deep-dive into non-trivial edge cases, race conditions, and distributed synchronization patterns solved in production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.challenges.map((challenge, idx) => (
            <div
              key={challenge.id}
              className="p-6 rounded-2xl border border-dark-border bg-dark-850/80 hover:border-dark-border-light transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-dark-800 border border-dark-border flex items-center justify-center text-neon text-xs font-mono font-bold shrink-0">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {challenge.title}
                  </h3>
                </div>

                {/* The Problem */}
                <div className="mb-4 p-4 rounded-xl bg-dark-900/90 border border-red-500/20">
                  <div className="flex items-center gap-2 text-xs font-semibold text-red-400 mb-1.5 uppercase tracking-wider">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>The Challenge</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {challenge.problem}
                  </p>
                </div>

                {/* The Solution */}
                <div className="p-4 rounded-xl bg-dark-900/90 border border-neon/30">
                  <div className="flex items-center gap-2 text-xs font-semibold text-neon mb-1.5 uppercase tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>The Architectural Fix</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {challenge.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
