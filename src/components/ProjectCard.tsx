import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, index }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  // 3D Tilt Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { damping: 20, stiffness: 300 });
  const mouseYSpring = useSpring(y, { damping: 20, stiffness: 300 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'Working App':
        return 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30';
      case 'Physically Built':
        return 'bg-[#ff5d35]/15 text-[#ff7e5d] border-[#ff5d35]/30';
      case 'Award-Winning':
        return 'bg-pink-500/15 text-pink-300 border-pink-500/30';
      default:
        return 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`perspective-1000 ${project.featured ? 'lg:col-span-12' : 'lg:col-span-6'}`}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className={`glass-panel rounded-2xl border border-white/[0.08] hover:border-white/[0.2] overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#ff5d35]/5 group flex flex-col ${
          project.featured ? 'lg:grid lg:grid-cols-12 lg:gap-8 p-5 sm:p-7' : 'p-5 sm:p-6'
        }`}
      >
        {/* Project Thumbnail Image */}
        <div
          className={`relative rounded-xl overflow-hidden bg-[#12101a] border border-white/[0.08] cursor-pointer ${
            project.featured
              ? 'lg:col-span-7 h-64 sm:h-80 lg:h-full min-h-[280px]'
              : 'w-full h-56 sm:h-64 mb-6'
          }`}
          onClick={() => onSelect(project)}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center filter brightness-[0.95] group-hover:brightness-105 group-hover:scale-105 transition-all duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/90 via-[#09090b]/30 to-transparent" />

          {/* Status and Category Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border backdrop-blur-md ${getStatusBadge(
                project.status
              )}`}
            >
              {project.status}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-black/60 backdrop-blur-md text-slate-300 border border-white/[0.1]">
              {project.category}
            </span>
          </div>

          {/* Metrics overlay pills */}
          {project.metrics && (
            <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
              {project.metrics.slice(0, 3).map((metric) => (
                <div
                  key={metric.label}
                  className="px-2.5 py-1 rounded-lg bg-[#09090b]/85 backdrop-blur-md border border-white/[0.1] text-[11px] font-mono flex items-center gap-1.5"
                >
                  <span className="text-slate-400">{metric.label}:</span>
                  <span className="text-white font-bold">{metric.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Project Content Info */}
        <div
          className={`flex flex-col justify-between ${
            project.featured ? 'lg:col-span-5 flex flex-col justify-between pt-6 lg:pt-0' : 'flex-1'
          }`}
        >
          <div>
            {/* Title & Subtitle */}
            <div className="mb-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-[#ff7e5d] transition-colors flex items-center justify-between">
                <span>{project.title}</span>
                {project.featured && (
                  <Sparkles className="w-4 h-4 text-[#ff5d35] shrink-0" />
                )}
              </h3>
              <p className="text-xs font-mono text-cyan-400 mt-1 uppercase tracking-wider">
                {project.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-300 leading-relaxed font-normal mb-5">
              {project.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.technologies.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded-lg bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 5 && (
                <span className="px-2 py-1 text-xs font-mono rounded-lg bg-white/[0.02] text-slate-400">
                  +{project.technologies.length - 5}
                </span>
              )}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3">
            <button
              onClick={() => onSelect(project)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#ff5d35] transition-colors"
            >
              <span>View Case Study</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center gap-2">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.12] border border-white/[0.1] text-slate-300 hover:text-white transition-all text-xs font-mono flex items-center gap-1"
                  title={link.label}
                  aria-label={`${project.title} - ${link.label}`}
                >
                  {link.type === 'github' ? (
                    <Github className="w-3.5 h-3.5" />
                  ) : (
                    <ExternalLink className="w-3.5 h-3.5" />
                  )}
                  <span className="hidden sm:inline-block">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
