import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../../data/portfolioInfo';
import { Button } from '../ui/Button';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-neon/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl border border-dark-border bg-gradient-to-b from-dark-850/90 to-dark-900/95 p-8 sm:p-12 shadow-2xl backdrop-blur-xl overflow-hidden text-center md:text-left">
          {/* Subtle background grid pattern */}
          <div className="absolute inset-0 bg-subtle-grid opacity-30 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-xs font-medium border border-dark-border bg-dark-800/80 text-neon">
                <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
                <span>Open for Opportunities</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Let's Build Something <br className="hidden sm:inline" />
                <span className="text-neon text-neon-glow">Great Together.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-xl">
                I'm always interested in connecting with developers, founders, and teams building meaningful products. Whether you have an exciting venture, a challenging problem, or just want to discuss engineering, let's connect.
              </p>

              {/* Direct Mail Action Buttons */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <Button
                  href={`mailto:${personalInfo.contact.email}`}
                  variant="primary"
                  size="md"
                  icon={<Mail className="w-4 h-4" />}
                  iconPosition="left"
                >
                  Send an Email
                </Button>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-dark-800 hover:bg-dark-750 text-slate-100 border border-dark-border hover:border-slate-400 transition-colors whitespace-nowrap shadow-sm"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-neon" />
                      <span className="text-neon">Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-muted" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Connect Links Card */}
            <div className="md:col-span-5 flex flex-col gap-3">
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl border border-dark-border bg-dark-900/80 hover:bg-dark-800 hover:border-neon/40 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-dark-800 border border-dark-border flex items-center justify-center text-slate-300 group-hover:text-neon group-hover:border-neon/30 transition-all">
                    <Github className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-semibold text-white group-hover:text-neon transition-colors">
                      GitHub
                    </h4>
                    <p className="text-xs text-muted">
                      Explore repositories & code
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-neon group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl border border-dark-border bg-dark-900/80 hover:bg-dark-800 hover:border-neon/40 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-dark-800 border border-dark-border flex items-center justify-center text-slate-300 group-hover:text-neon group-hover:border-neon/30 transition-all">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-semibold text-white group-hover:text-neon transition-colors">
                      LinkedIn
                    </h4>
                    <p className="text-xs text-muted">
                      Professional profile & network
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-neon group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="group p-4 rounded-xl border border-dark-border bg-dark-900/80 hover:bg-dark-800 hover:border-neon/40 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-dark-800 border border-dark-border flex items-center justify-center text-slate-300 group-hover:text-neon group-hover:border-neon/30 transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-semibold text-white group-hover:text-neon transition-colors">
                      Direct Email
                    </h4>
                    <p className="text-xs text-muted">
                      {personalInfo.contact.displayEmail}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-neon group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
