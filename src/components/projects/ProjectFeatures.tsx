import React from 'react';
import {
  Navigation,
  MapPin,
  Sparkles,
  Bell,
  ShieldCheck,
  CheckCircle2,
  Image,
  Smartphone,
  ShieldAlert,
  Radio,
  KeyRound,
  GitBranch,
  Languages,
  FileCheck,
  Zap,
  BrainCircuit,
  Workflow,
  Bot,
  Activity,
  Video,
  Clock,
  MessageSquare,
  Database,
  CreditCard,
  FileText,
  Calendar,
  Building2,
  LucideIcon,
} from 'lucide-react';
import { ProjectDetailsData } from '../../types';

const featureIconMap: Record<string, LucideIcon> = {
  Navigation,
  MapPin,
  Sparkles,
  Bell,
  ShieldCheck,
  CheckCircle2,
  Image,
  Smartphone,
  ShieldAlert,
  Radio,
  KeyRound,
  GitBranch,
  Languages,
  FileCheck,
  Zap,
  BrainCircuit,
  Workflow,
  Bot,
  Activity,
  Video,
  Clock,
  MessageSquare,
  Database,
  CreditCard,
  FileText,
  Calendar,
  Building2,
};

interface ProjectFeaturesProps {
  data: ProjectDetailsData;
}

export const ProjectFeatures: React.FC<ProjectFeaturesProps> = ({ data }) => {
  return (
    <section id="features" className="py-16 sm:py-20 relative border-b border-dark-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-5 h-1 bg-neon rounded-full shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Key Features & Technical Contributions
            </h2>
          </div>
          <p className="text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
            Detailed engineering breakdown of subsystems, algorithms, and modules implemented across the platform.
          </p>
        </div>

        {/* Feature Cards Grid: Highlights are given emphasis */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.keyFeatures.map((feat) => {
            const IconComp = featureIconMap[feat.iconName] || CheckCircle2;
            const isHighlight = feat.highlight;

            return (
              <div
                key={feat.id}
                className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                  isHighlight
                    ? 'border-neon/40 bg-gradient-to-b from-dark-850 to-dark-900 shadow-neon-sm hover:shadow-neon hover:border-neon'
                    : 'border-dark-border bg-dark-850/70 hover:bg-dark-850 hover:border-dark-border-light'
                }`}
              >
                <div>
                  {/* Card Header: Icon + Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all ${
                        isHighlight
                          ? 'border-neon/50 bg-neon/10 text-neon group-hover:scale-105'
                          : 'border-dark-border bg-dark-800 text-slate-300 group-hover:text-neon group-hover:border-neon/30'
                      }`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>

                    {isHighlight && (
                      <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-neon/10 text-neon border border-neon/30">
                        Core Module
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-white tracking-tight mb-1 group-hover:text-neon transition-colors">
                    {feat.title}
                  </h3>
                  {feat.subtitle && (
                    <p className="text-xs font-medium text-slate-400 mb-3 font-mono">
                      {feat.subtitle}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {feat.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 pt-4 border-t border-dark-border/60">
                    {feat.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-neon shrink-0 mt-1.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
