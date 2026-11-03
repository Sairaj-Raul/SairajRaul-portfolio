import React from 'react';
import { ArrowRight, Mail, Briefcase, Smartphone, Layers } from 'lucide-react';
import { personalInfo } from '../../data/portfolioInfo';
import { Button } from '../ui/Button';
import { CodeWindow } from '../ui/CodeWindow';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
      {/* Background ambient gradient blurs - shifted away from text to preserve high contrast */}
      <div className="absolute -top-10 -right-10 w-[500px] h-[450px] bg-emerald-accent/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute -bottom-10 left-10 w-[350px] h-[300px] bg-neon/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Indicator Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-dark-border bg-dark-850/90 text-xs font-medium text-slate-300 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
              <span>Available for opportunities</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-3">
              Hi, I'm <span className="text-white">Sairaj Raul.</span>
            </h1>

            {/* Title with Neon Accent - high contrast and luminous */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-6">
              <span className="text-neon font-extrabold tracking-tight drop-shadow-[0_0_12px_rgba(16,245,118,0.45)]">Full Stack</span>{' '}
              <span className="text-slate-200">Software Developer</span>
            </h2>

            {/* Introduction paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-8">
              {personalInfo.shortBio}
            </p>

            {/* Compact Highlight Badges */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-dark-border bg-dark-850/80 text-xs font-medium text-slate-300">
                <Briefcase className="w-3.5 h-3.5 text-neon" />
                <span>3+ Years Experience</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-dark-border bg-dark-850/80 text-xs font-medium text-slate-300">
                <Smartphone className="w-3.5 h-3.5 text-neon" />
                <span>Web & Mobile Apps</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-dark-border bg-dark-850/80 text-xs font-medium text-slate-300">
                <Layers className="w-3.5 h-3.5 text-neon" />
                <span>Full Stack Development</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button
                href="#projects"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                className="w-full sm:w-auto"
              >
                Explore My Work
              </Button>
              <Button
                href="#contact"
                variant="secondary"
                size="md"
                icon={<Mail className="w-4 h-4 text-neon" />}
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Right Hero Column: Code Window */}
          <div className="lg:col-span-5 w-full">
            <CodeWindow />
          </div>
        </div>
      </div>
    </section>
  );
};
