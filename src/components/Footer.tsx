import React from 'react';
import { ArrowUp, Github, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-[#08070c] py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#top"
              className="text-lg font-bold tracking-tight text-white flex items-center gap-2 font-mono mb-2"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5d35]" />
              <span>joel<span className="text-[#ff5d35]">.</span>cyril</span>
            </a>
            <p className="text-xs font-mono text-slate-500 max-w-sm">
              Engineering practical technology, autonomous robotics, and resilient systems that solve real-world problems.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#awards" className="hover:text-white transition-colors">Awards</a>
            <a href="#certificates" className="hover:text-white transition-colors">Certificates</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/JoelCyril"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-slate-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="mailto:joeltcyril@gmail.com"
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-slate-300 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-[#ff5d35] hover:text-white border border-white/[0.08] text-slate-300 transition-all flex items-center gap-1.5 text-xs font-mono"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Metadata */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500 text-center sm:text-left">
          <p>© 2026 JOEL THOMAS CYRIL · BUILD / LEARN / REPEAT</p>
          <p className="flex items-center gap-1 justify-center">
            <span>CBSE Grade XII · Abu Dhabi Indian School, UAE</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
