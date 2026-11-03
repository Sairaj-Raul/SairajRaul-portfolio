import React from 'react';
import { Zap, CheckCircle2, TrendingUp, LucideIcon } from 'lucide-react';
import { personalInfo } from '../../data/portfolioInfo';
import { SectionHeading } from '../ui/SectionHeading';

const iconMap: Record<string, LucideIcon> = {
  Zap,
  CheckCircle2,
  TrendingUp,
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Passionate about designing reliable application workflows and shipping production-ready systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Bio Text */}
          <div className="lg:col-span-7 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            {personalInfo.aboutText.map((paragraph, index) => (
              <p key={index} className="text-slate-300">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Three Value Cards */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {personalInfo.values.map((val) => {
              const IconComp = iconMap[val.icon] || Zap;
              return (
                <div
                  key={val.title}
                  className={`group p-4 rounded-xl border border-dark-border bg-dark-850/80 hover:bg-dark-800 transition-all duration-200 flex items-center gap-4 ${val.bgGlow}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-dark-800 border border-dark-border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <IconComp className={`w-5 h-5 ${val.color}`} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white tracking-tight">
                      {val.title}
                    </h4>
                    <p className="text-xs text-muted">
                      {val.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
