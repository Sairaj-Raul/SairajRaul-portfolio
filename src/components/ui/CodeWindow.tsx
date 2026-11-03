import React, { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';

export const CodeWindow: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const rawCode = `const developer = {
  name: "Sairaj Raul",
  role: "Full Stack Developer",
  experience: "3+ Years",
  stack: ["MERN", "Next.js", "Node.js", "TypeScript"],
  focus: "Build → Solve → Ship"
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(rawCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none group">
      {/* Background ambient neon glow */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-neon/20 via-emerald-accent/20 to-neon/10 blur-xl opacity-60 group-hover:opacity-80 transition duration-500" />

      {/* Editor Container */}
      <div className="relative rounded-xl border border-dark-border bg-dark-900/90 backdrop-blur-xl shadow-2xl overflow-hidden">
        {/* Window Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-dark-border bg-dark-850/80">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <div className="ml-3 flex items-center gap-1.5 text-xs text-muted font-mono">
              <Terminal className="w-3.5 h-3.5 text-neon" />
              <span>developer.ts</span>
            </div>
          </div>

          <button
            onClick={handleCopy}
            title="Copy code snippet"
            className="flex items-center gap-1.5 text-xs text-muted hover:text-neon transition-colors px-2 py-1 rounded hover:bg-dark-750"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-neon" />
                <span className="text-[11px] text-neon">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span className="text-[11px]">Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Code Content */}
        <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-300">
          <div className="grid grid-cols-[2rem_1fr] gap-3">
            {/* Line Numbers */}
            <div className="select-none text-muted-dark text-right flex flex-col space-y-1 text-xs">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
            </div>

            {/* Code Lines with Syntax Coloring */}
            <div className="flex flex-col space-y-1">
              <div>
                <span className="text-neon-400 font-semibold">const</span>{' '}
                <span className="text-blue-300">developer</span>{' '}
                <span className="text-slate-400">=</span>{' '}
                <span className="text-slate-300">{'{'}</span>
              </div>

              <div className="pl-4">
                <span className="text-slate-300">name</span>
                <span className="text-slate-400">:</span>{' '}
                <span className="text-emerald-300">"Sairaj Raul"</span>
                <span className="text-slate-400">,</span>
              </div>

              <div className="pl-4">
                <span className="text-slate-300">role</span>
                <span className="text-slate-400">:</span>{' '}
                <span className="text-emerald-300">"Full Stack Developer"</span>
                <span className="text-slate-400">,</span>
              </div>

              <div className="pl-4">
                <span className="text-slate-300">experience</span>
                <span className="text-slate-400">:</span>{' '}
                <span className="text-emerald-300">"3+ Years"</span>
                <span className="text-slate-400">,</span>
              </div>

              <div className="pl-4">
                <span className="text-slate-300">stack</span>
                <span className="text-slate-400">:</span>{' '}
                <span className="text-slate-400">[</span>
                <span className="text-emerald-300">"MERN"</span>
                <span className="text-slate-400">,</span>{' '}
                <span className="text-emerald-300">"Next.js"</span>
                <span className="text-slate-400">,</span>{' '}
                <span className="text-emerald-300">"Node.js"</span>
                <span className="text-slate-400">]</span>
                <span className="text-slate-400">,</span>
              </div>

              <div className="pl-4">
                <span className="text-slate-300">focus</span>
                <span className="text-slate-400">:</span>{' '}
                <span className="text-neon">"Build → Solve → Ship"</span>
              </div>

              <div>
                <span className="text-slate-300">{'}'}</span>
                <span className="text-slate-400">;</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer status bar in editor */}
        <div className="px-4 py-2 border-t border-dark-border/60 bg-dark-950/60 flex items-center justify-between text-[11px] text-muted-dark font-mono">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
              TypeScript 5.x
            </span>
            <span>UTF-8</span>
          </div>
          <span className="text-muted">Ln 7, Col 2</span>
        </div>
      </div>
    </div>
  );
};
