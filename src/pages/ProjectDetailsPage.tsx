import React, { useEffect } from 'react';
import { useParams, Link } from '../router';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { getProjectBySlug } from '../data/projects/index';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ProjectHero } from '../components/projects/ProjectHero';
import { ProjectOverview } from '../components/projects/ProjectOverview';
import { ProjectFeatures } from '../components/projects/ProjectFeatures';
import { ProjectGallery } from '../components/projects/ProjectGallery';
import { ProjectChallenges } from '../components/projects/ProjectChallenges';
import { ProjectTechStack } from '../components/projects/ProjectTechStack';
import { ProjectNavigation } from '../components/projects/ProjectNavigation';

export const ProjectDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow flex items-center justify-center py-24 px-4">
          <div className="max-w-md w-full p-8 rounded-2xl border border-dark-border bg-dark-900 text-center shadow-2xl">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              Case Study In Progress
            </h1>
            <p className="text-sm text-muted mb-6 leading-relaxed">
              The detailed technical case study for <strong className="text-slate-200">"{slug}"</strong> is currently being assembled. You can view its summary in the Projects section.
            </p>
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold bg-neon text-dark-950 hover:bg-neon-400 transition-all shadow-neon-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Projects</span>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col font-sans selection:bg-neon selection:text-dark-950">
      {/* Background subtle noise/grid texture */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-20" />

      {/* Header */}
      <Navbar />

      {/* Case Study Sections */}
      <main className="flex-grow">
        <ProjectHero data={project} />
        <ProjectOverview data={project} />
        <ProjectFeatures data={project} />
        <ProjectGallery data={project} />
        <ProjectChallenges data={project} />
        <ProjectTechStack data={project} />
        <ProjectNavigation data={project} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
