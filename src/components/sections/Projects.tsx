import React, { useState, useMemo } from 'react';
import { ProjectCategory } from '../../types';
import { projectsData } from '../../data/projects';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from '../ui/ProjectCard';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  const liveCount = useMemo(
    () => projectsData.filter((p) => p.type === 'live').length,
    []
  );
  const upcomingCount = useMemo(
    () => projectsData.filter((p) => p.type === 'upcoming').length,
    []
  );
  const personalCount = useMemo(
    () => projectsData.filter((p) => p.type === 'personal').length,
    []
  );

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projectsData;
    return projectsData.filter((project) => project.type === activeFilter);
  }, [activeFilter]);

  const filterTabs: { id: ProjectCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Projects', count: projectsData.length },
    { id: 'live', label: 'Live Platforms', count: liveCount },
    { id: 'upcoming', label: 'Upcoming Platforms', count: upcomingCount },
    { id: 'personal', label: 'Professional & Personal', count: personalCount },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
          <SectionHeading
            title="Projects & Products"
            subtitle="Building digital products across multiple industries and solving real-world business challenges."
            className="mb-0"
          />

          {/* Filter Pills - single horizontal line with no wrapping */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-dark-900 border border-dark-border flex-nowrap overflow-x-auto max-w-full shrink-0">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-neon text-dark-950 font-semibold shadow-sm'
                      : 'text-muted hover:text-slate-200 hover:bg-dark-800'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                      isActive ? 'bg-dark-950/20 text-dark-950' : 'bg-dark-800 text-muted-dark'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* EGC India Contribution Note */}
        <div className="mb-6 p-3.5 rounded-xl border border-dark-border/80 bg-dark-900/60 text-xs text-muted flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-neon shrink-0" />
          <span>
            Platforms include products contributed to within the <strong className="text-slate-200">EGC India</strong> ecosystem alongside independent technical builds. Exact verified modules and stacks are highlighted.
          </span>
        </div>

        {/* Projects Responsive Grid (3 cols on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
