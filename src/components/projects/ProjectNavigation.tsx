import React from 'react';
import { Link } from '../../router';
import { ArrowLeft, ArrowRight, Mail, FolderGit2 } from 'lucide-react';
import { ProjectDetailsData } from '../../types';

interface ProjectNavigationProps {
  data: ProjectDetailsData;
}

export const ProjectNavigation: React.FC<ProjectNavigationProps> = ({ data }) => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-neon/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Next / Previous Project Navigation */}
        {data.navigation && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            {data.navigation.prevProject ? (
              <Link
                to={`/projects/${data.navigation.prevProject.slug}`}
                className="group p-5 rounded-2xl border border-dark-border bg-dark-850/80 hover:bg-dark-800 hover:border-dark-border-light transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-dark-800 border border-dark-border flex items-center justify-center text-muted group-hover:text-neon group-hover:border-neon/40 transition-all">
                    <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-muted uppercase tracking-wider">
                      Previous Project
                    </span>
                    <h4 className="text-base font-bold text-white group-hover:text-neon transition-colors">
                      {data.navigation.prevProject.name}
                    </h4>
                  </div>
                </div>
              </Link>
            ) : <div />}

            {data.navigation.nextProject && (
              <Link
                to={`/projects/${data.navigation.nextProject.slug}`}
                className="group p-5 rounded-2xl border border-dark-border bg-dark-850/80 hover:bg-dark-800 hover:border-dark-border-light transition-all flex items-center justify-between text-right"
              >
                <div className="flex items-center justify-end w-full gap-3">
                  <div>
                    <span className="text-[11px] font-semibold text-muted uppercase tracking-wider">
                      Next Project
                    </span>
                    <h4 className="text-base font-bold text-white group-hover:text-neon transition-colors">
                      {data.navigation.nextProject.name}
                    </h4>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-dark-800 border border-dark-border flex items-center justify-center text-muted group-hover:text-neon group-hover:border-neon/40 transition-all">
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            )}
          </div>
        )}

        {/* CTA Card */}
        <div className="relative rounded-2xl border border-dark-border bg-gradient-to-b from-dark-850 to-dark-900 p-8 sm:p-12 text-center overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-xs font-semibold bg-neon/10 border border-neon/30 text-neon">
              <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
              Full Stack Engineering Case Study
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              Interested in Building a Scalable Product Like {data.name}?
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              Whether you are architecting a real-time mobile platform, distributed backend APIs, or an AI-powered service, let’s discuss engineering solutions.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm bg-neon text-dark-950 hover:bg-neon-400 transition-all shadow-neon-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </Link>

              <Link
                to="/#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm bg-dark-800 text-slate-200 border border-dark-border hover:border-slate-400 transition-all"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View More Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
