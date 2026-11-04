import React, { useState } from 'react';
import { PROJECTS } from '../data/projectsData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { SwapCaseStudy } from './SwapCaseStudy';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Embedded & Hardware' | 'Full-Stack Web' | 'AI & Environmental'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    { label: 'All', count: PROJECTS.length },
    {
      label: 'Embedded & Hardware',
      count: PROJECTS.filter((p) => p.tags.includes('ESP32') || p.tags.includes('STM32') || p.tags.includes('Hardware') || p.tags.includes('Robotics')).length,
    },
    {
      label: 'Full-Stack Web',
      count: PROJECTS.filter((p) => p.tags.includes('Full-Stack') || p.tags.includes('React') || p.tags.includes('Self-Hosted')).length,
    },
    {
      label: 'AI & Environmental',
      count: PROJECTS.filter((p) => p.tags.includes('AI/ML') || p.tags.includes('OCR') || p.tags.includes('Environmental') || p.tags.includes('AI Forecasting')).length,
    },
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Embedded & Hardware') {
      return project.tags.some((t) => ['ESP32', 'STM32', 'Custom PCB', 'Sub-GHz', 'Hardware', 'Robotics', 'PID Control'].includes(t));
    }
    if (activeFilter === 'Full-Stack Web') {
      return project.tags.some((t) => ['Full-Stack', 'React', 'TypeScript', 'PostgreSQL', 'Self-Hosted', 'Linux'].includes(t));
    }
    if (activeFilter === 'AI & Environmental') {
      return project.tags.some((t) => ['AI/ML', 'HealthTech', 'OCR', 'Environmental', 'AI Forecasting'].includes(t));
    }
    return true;
  });

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#ff5d35]" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#ff5d35] uppercase">
                02 // SELECTED PORTFOLIO
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
              Featured Engineering &amp;{' '}
              <span className="font-display italic font-normal text-gradient-accent">
                Software Systems.
              </span>
            </h2>
            <p className="text-base text-slate-300">
              Physically built embedded devices, autonomous robotics, deployed web applications, and self-hosted infrastructure.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((tab) => {
              const isSelected = activeFilter === tab.label;
              return (
                <button
                  key={tab.label}
                  onClick={() => setActiveFilter(tab.label as any)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 border ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#ff5d35] to-[#f97316] text-white border-[#ff5d35] shadow-lg shadow-[#ff5d35]/25 font-bold'
                      : 'bg-white/[0.04] text-slate-400 hover:text-white border-white/[0.08] hover:border-white/[0.15]'
                  }`}
                >
                  {tab.label} <span className="opacity-70 ml-1">({tab.count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid: 3 in a row on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* SWAP Scrap-Built NAS Case Study */}
        <SwapCaseStudy />

        {/* Modal for In-depth Case Study */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
