import React from 'react';
import { ProjectDetailsData } from '../../types';

interface ProjectTechStackProps {
  data: ProjectDetailsData;
}

export const ProjectTechStack: React.FC<ProjectTechStackProps> = ({ data }) => {
  return (
    <section id="tech-stack" className="py-16 sm:py-20 relative border-b border-dark-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-5 h-1 bg-neon rounded-full shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Technology Stack & Infrastructure
            </h2>
          </div>
          <p className="text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
            Technologies, libraries, and protocols verified through codebase inspection and production deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.techStack.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-2xl border border-dark-border bg-dark-850/70 hover:border-dark-border-light transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-sm font-bold text-white tracking-tight mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-neon inline-block" />
                  <span>{group.category}</span>
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-dark-900 border border-dark-border text-slate-200 hover:border-neon/40 hover:text-neon transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
