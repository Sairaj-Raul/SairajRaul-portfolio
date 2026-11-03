import React from 'react';
import {
  ShieldCheck,
  GitFork,
  Video,
  Layers,
  Network,
  Database,
  LucideIcon,
  CheckCircle2,
} from 'lucide-react';
import { engineeringHighlightsData } from '../../data/engineeringHighlights';
import { SectionHeading } from '../ui/SectionHeading';

const highlightIconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  GitFork,
  Video,
  Layers,
  Network,
  Database,
};

export const EngineeringHighlights: React.FC = () => {
  return (
    <section id="engineering" className="py-16 sm:py-20 relative bg-dark-900/30 border-y border-dark-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Engineering Highlights"
          subtitle="A breakdown of architectural challenges, resilient backend patterns, and system capabilities solved across diverse production workflows."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineeringHighlightsData.map((item) => {
            const IconComponent = highlightIconMap[item.iconName] || ShieldCheck;

            return (
              <div
                key={item.id}
                className="p-6 rounded-xl border border-dark-border bg-dark-850/80 hover:bg-dark-800/90 hover:border-dark-border-light transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-dark-card"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-dark-800 border border-dark-border flex items-center justify-center text-neon group-hover:scale-105 group-hover:border-neon/40 transition-all shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-semibold text-white tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-3">
                    {item.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-neon shrink-0 mt-0.5" />
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
