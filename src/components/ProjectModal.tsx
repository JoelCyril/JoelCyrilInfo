import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, Wrench, Layers } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#060608]/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#121018] border border-white/[0.15] rounded-3xl shadow-2xl shadow-black overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Top Bar */}
          <div className="px-6 py-4 border-b border-white/[0.08] flex items-center justify-between bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5d35]" />
              <span className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
                {project.category} // CASE STUDY
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
            {/* Header section */}
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-2">
                <span className="px-3 py-1 text-xs font-mono font-semibold rounded-full bg-[#ff5d35]/15 text-[#ff7e5d] border border-[#ff5d35]/30">
                  {project.status}
                </span>
                <span className="text-xs font-mono text-cyan-400 font-medium">
                  {project.subtitle}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {project.title}
              </h2>
            </div>

            {/* Hero Visual Preview */}
            <div className="relative rounded-2xl overflow-hidden bg-[#0a090e] border border-white/[0.08] max-h-96 flex items-center justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain max-h-96"
              />
            </div>

            {/* Metrics Grid */}
            {project.metrics && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]"
                  >
                    <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                      {metric.label}
                    </p>
                    <p className="text-lg font-bold text-white font-mono">{metric.value}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Deep-Dive Narrative */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#ff5d35]" />
                <span>Architecture &amp; Overview</span>
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Problem vs Solution Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-red-500/[0.05] border border-red-500/20">
                <div className="flex items-center gap-2 text-red-400 font-semibold text-sm mb-2 font-mono">
                  <AlertCircle className="w-4 h-4" />
                  <span>THE ENGINEERING CHALLENGE</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-emerald-500/[0.05] border border-emerald-500/20">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-2 font-mono">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>THE IMPLEMENTED SOLUTION</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Technologies Applied */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                <Wrench className="w-3.5 h-3.5 text-cyan-400" />
                <span>Technologies &amp; Protocols Used</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-mono rounded-lg bg-white/[0.05] text-slate-200 border border-white/[0.1]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Controls */}
          <div className="px-6 py-4 border-t border-white/[0.08] bg-white/[0.02] flex items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
            >
              Close [Esc]
            </button>

            <div className="flex items-center gap-3">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#ff5d35] to-[#f97316] text-white hover:brightness-110 shadow-md shadow-[#ff5d35]/20 transition-all"
                >
                  {link.type === 'github' ? (
                    <Github className="w-3.5 h-3.5" />
                  ) : (
                    <ExternalLink className="w-3.5 h-3.5" />
                  )}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
