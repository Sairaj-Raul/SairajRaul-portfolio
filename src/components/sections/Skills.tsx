import React from 'react';
import {
  Layout,
  Server,
  Database,
  Cpu,
  Smartphone,
  Zap,
  Terminal,
  LucideIcon,
} from 'lucide-react';
import { skillsCategories, featuredTechStack } from '../../data/skills';
import { SectionHeading } from '../ui/SectionHeading';

const skillIconMap: Record<string, LucideIcon> = {
  Layout,
  Server,
  Database,
  Cpu,
  Smartphone,
  Zap,
  Terminal,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Technical Expertise"
          subtitle="A comprehensive toolkit built through hands-on full-stack product engineering across web, mobile, and distributed services."
        />

        {/* Quick Featured Cloud */}
        <div className="mb-10 p-5 sm:p-6 rounded-2xl border border-dark-border bg-dark-900/60 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider text-muted-dark">
            <span className="w-2 h-2 rounded-full bg-neon inline-block" />
            <span>Core Technologies & Frameworks</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {featuredTechStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-dark-850 border border-dark-border text-slate-200 hover:border-neon/40 hover:text-neon transition-colors duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Categorized Detailed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsCategories.map((category) => {
            const IconComponent = skillIconMap[category.iconName] || Terminal;

            return (
              <div
                key={category.title}
                className="p-5 rounded-xl border border-dark-border bg-dark-850/70 hover:bg-dark-850 hover:border-dark-border-light transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-dark-800 border border-dark-border flex items-center justify-center text-neon group-hover:scale-105 group-hover:border-neon/40 transition-all shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white tracking-tight">
                        {category.title}
                      </h3>
                      {category.description && (
                        <p className="text-[11px] text-muted-dark line-clamp-1">
                          {category.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-dark-900/80 border border-dark-border/80 text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
