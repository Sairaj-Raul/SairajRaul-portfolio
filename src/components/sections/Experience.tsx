import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ExternalLink } from 'lucide-react';
import { experiencesData } from '../../data/experience';
import { SectionHeading } from '../ui/SectionHeading';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Professional Experience"
          subtitle="Proven track record in architecting full-stack digital products, complex business workflows, and automation solutions."
        />

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-dark-border space-y-10 sm:space-y-12">
          {experiencesData.map((exp, index) => {
            const isCurrent = exp.statusBadge === 'Present';

            return (
              <div key={exp.id} className="relative group">
                {/* Timeline Node Icon/Dot */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    isCurrent
                      ? 'border-neon bg-dark-950 text-neon shadow-neon-sm'
                      : 'border-dark-border bg-dark-900 text-slate-400 group-hover:border-neon/60'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isCurrent ? 'bg-neon animate-pulse' : 'bg-slate-500'
                    }`}
                  />
                </div>

                {/* Experience Card */}
                <div className="p-6 rounded-xl border border-dark-border bg-dark-850/80 hover:bg-dark-800 transition-all duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                        <span>{exp.role}</span>
                        {index === 0 && (
                          <span className="w-2 h-2 rounded-full bg-neon inline-block" />
                        )}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-muted mt-1.5">
                        <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5 text-neon" />
                          {exp.company}
                        </span>
                        {exp.location && (
                          <span className="flex items-center gap-1 text-muted-dark">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Period badge */}
                    <div className="self-start sm:self-auto shrink-0">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
                          isCurrent
                            ? 'text-neon bg-neon/10 border-neon/30'
                            : 'text-slate-300 bg-dark-800 border-dark-border'
                        }`}
                      >
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Responsibilities list with bold technical category labels */}
                  <ul className="mt-4 space-y-3 text-xs sm:text-sm">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-neon shrink-0 mt-0.5" />
                        <span className="text-slate-300">
                          <strong className="text-white font-semibold">
                            {resp.label}:
                          </strong>{' '}
                          {resp.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Associated Product link (e.g. Sales Buddy CRM for Research Connect LLC) */}
                  {exp.associatedProject && (
                    <div className="mt-5 p-3 rounded-lg bg-dark-900/90 border border-dark-border/80 flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-neon font-medium">Associated Product:</span>
                        <span className="text-white font-semibold">{exp.associatedProject.name}</span>
                        {exp.associatedProject.category && (
                          <span className="text-muted-dark font-mono text-[11px]">
                            • {exp.associatedProject.category}
                          </span>
                        )}
                      </div>
                      {exp.associatedProject.url && (
                        <a
                          href={exp.associatedProject.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-neon hover:text-neon-400 font-medium transition-colors"
                        >
                          <span>Visit Platform</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  )}

                  {/* Skills tags */}
                  {exp.skillsMentioned && exp.skillsMentioned.length > 0 && (
                    <div className="mt-5 pt-4 border-t border-dark-border/60 flex flex-wrap gap-1.5">
                      {exp.skillsMentioned.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-dark-900 border border-dark-border/80 text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
