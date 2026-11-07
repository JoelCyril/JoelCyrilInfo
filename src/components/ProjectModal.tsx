import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, Wrench, Layers } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    if (!project) return;
    setActiveImage(project.image);
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
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
          className="relative w-full max-w-3xl bg-[#121018] light:bg-white border border-white/[0.15] light:border-slate-200 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black overflow-hidden z-10 max-h-[88vh] flex flex-col text-slate-200 light:text-slate-800"
        >
          {/* Top Bar */}
          <div className="px-5 py-3.5 border-b border-white/[0.08] light:border-slate-200 flex items-center justify-between bg-white/[0.02] light:bg-slate-50">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5d35]" />
              <span className="text-xs font-mono font-semibold text-slate-300 light:text-slate-700 uppercase tracking-wider">
                {project.category} // CASE STUDY
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 light:text-slate-600 hover:text-white light:hover:text-black hover:bg-white/[0.08] light:hover:bg-slate-200 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
            {/* Header section */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 text-xs font-mono font-semibold rounded-full bg-[#ff5d35]/15 text-[#ff7e5d] border border-[#ff5d35]/30">
                  {project.status}
                </span>
                <span className="text-xs font-mono text-cyan-400 font-medium">
                  {project.subtitle}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white light:text-slate-900 tracking-tight">
                {project.title}
              </h2>
            </div>

            {/* Hero Visual Preview - Keeps authentic aspect ratio without cropping */}
            <div className="space-y-2.5">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#07060b] light:bg-slate-100 border border-white/[0.08] light:border-slate-200 h-64 sm:h-80 md:h-[390px] w-full flex items-center justify-center p-2.5 sm:p-3">
                {/* Ambient Blurred Backdrop to fill space organically */}
                <div
                  className="absolute inset-0 bg-cover bg-center filter blur-2xl opacity-25 dark:opacity-20 scale-125 pointer-events-none"
                  style={{ backgroundImage: `url(${activeImage || project.image})` }}
                />

                {/* Natural Aspect Ratio Uncropped Screenshot */}
                <img
                  src={activeImage || project.image}
                  alt={project.title}
                  className="relative z-10 max-h-full max-w-full object-contain object-center rounded-lg shadow-2xl transition-all duration-300"
                />
              </div>

              {/* Gallery Image switcher thumbnails if multiple exist */}
              {project.galleryImages && project.galleryImages.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto py-1.5 px-0.5">
                  {project.galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`relative w-20 h-14 rounded-lg overflow-hidden border shrink-0 transition-all p-0.5 bg-[#0a090e] light:bg-slate-200 flex items-center justify-center ${
                        (activeImage || project.image) === img
                          ? 'border-[#ff5d35] ring-2 ring-[#ff5d35]/40 scale-105'
                          : 'border-white/[0.12] light:border-slate-300 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${project.title} preview ${idx + 1}`}
                        className="w-full h-full object-contain rounded"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Metrics Grid */}
            {project.metrics && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="p-3 rounded-xl bg-white/[0.03] light:bg-slate-50 border border-white/[0.08] light:border-slate-200"
                  >
                    <p className="text-[10px] font-mono text-slate-400 light:text-slate-500 uppercase tracking-wider mb-0.5">
                      {metric.label}
                    </p>
                    <p className="text-base sm:text-lg font-bold text-white light:text-slate-900 font-mono">{metric.value}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Deep-Dive Narrative */}
            <div className="space-y-2.5">
              <h3 className="text-lg font-bold text-white light:text-slate-900 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#ff5d35]" />
                <span>Architecture &amp; Overview</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 light:text-slate-700 leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Problem vs Solution Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl bg-red-500/[0.05] light:bg-red-50/60 border border-red-500/20 light:border-red-200">
                <div className="flex items-center gap-2 text-red-400 font-semibold text-xs mb-1.5 font-mono">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>THE ENGINEERING CHALLENGE</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 light:text-slate-700 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-500/[0.05] light:bg-emerald-50/60 border border-emerald-500/20 light:border-emerald-200">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs mb-1.5 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>THE IMPLEMENTED SOLUTION</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 light:text-slate-700 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Technologies Applied */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 light:text-slate-600 mb-2.5 flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5 text-cyan-400" />
                <span>Technologies &amp; Protocols Used</span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono rounded-lg bg-white/[0.05] light:bg-slate-100 text-slate-200 light:text-slate-800 border border-white/[0.1] light:border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Controls */}
          <div className="px-5 py-3.5 border-t border-white/[0.08] light:border-slate-200 bg-white/[0.02] light:bg-slate-50 flex items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 text-xs font-mono text-slate-400 light:text-slate-600 hover:text-white light:hover:text-black transition-colors"
            >
              Close [Esc]
            </button>

            <div className="flex items-center gap-2.5">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#ff5d35] to-[#f97316] text-white hover:brightness-110 shadow-md shadow-[#ff5d35]/20 transition-all"
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
