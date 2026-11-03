import React from 'react';
import { Code2, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo, navLinks } from '../../data/portfolioInfo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-dark-border bg-dark-950/80 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-dark-border/60">
          {/* Brand Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-dark-850 border border-dark-border flex items-center justify-center text-neon">
                <Code2 className="w-3.5 h-3.5 text-neon" />
              </div>
              <span className="text-lg font-bold font-mono text-white tracking-tight">
                Sairaj<span className="text-neon">.dev</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-muted">
              {personalInfo.role} • 3+ Years of Building Digital Products
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-neon transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-dark-850 border border-dark-border text-slate-300 hover:text-neon hover:border-neon/40 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-dark-850 border border-dark-border text-slate-300 hover:text-neon hover:border-neon/40 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.contact.email}`}
              aria-label="Send Email"
              className="p-2 rounded-lg bg-dark-850 border border-dark-border text-slate-300 hover:text-neon hover:border-neon/40 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2 rounded-lg bg-dark-850 border border-dark-border text-slate-300 hover:text-neon hover:border-neon/40 transition-colors ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-dark">
          <p>
            © {currentYear} Sairaj Raul. All rights reserved.
          </p>
          <p className="flex items-center gap-1 font-mono">
            <span>Built with React, TypeScript & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
