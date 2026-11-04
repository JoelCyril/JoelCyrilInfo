import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILLS } from '../data/skillsData';
import { Terminal, Cpu, Layout, Server, BrainCircuit, Layers, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    { label: 'All', icon: <Layers className="w-4 h-4" /> },
    { label: 'Embedded & IoT', icon: <Cpu className="w-4 h-4" /> },
    { label: 'Languages', icon: <Terminal className="w-4 h-4" /> },
    { label: 'Web & Frontend', icon: <Layout className="w-4 h-4" /> },
    { label: 'Backend & Cloud', icon: <Server className="w-4 h-4" /> },
    { label: 'AI & Robotics', icon: <BrainCircuit className="w-4 h-4" /> },
  ];

  const filteredSkills = activeCategory === 'All'
    ? SKILLS
    : SKILLS.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#ff5d35]" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#ff5d35] uppercase">
                03 // ENGINEERING TOOLKIT
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
              Skills, Protocols &amp;{' '}
              <span className="font-display italic font-normal text-gradient-accent">
                Technologies.
              </span>
            </h2>
            <p className="text-base text-slate-300">
              Only verified tools applied across physical hardware builds, production web applications, and autonomous robotics.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat.label;
              return (
                <button
                  key={cat.label}
                  onClick={() => setActiveCategory(cat.label)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-mono transition-all border ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#ff5d35] to-[#f97316] text-white border-[#ff5d35] shadow-lg shadow-[#ff5d35]/25 font-bold'
                      : 'bg-white/[0.04] text-slate-400 hover:text-white border-white/[0.08] hover:border-white/[0.15]'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, idx) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: idx * 0.02 }}
                className={`glass-card rounded-2xl p-4 sm:p-5 border flex flex-col justify-between group transition-all ${
                  skill.highlight
                    ? 'border-[#ff5d35]/30 hover:border-[#ff5d35] bg-gradient-to-br from-white/[0.04] to-[#ff5d35]/[0.02]'
                    : 'border-white/[0.08] hover:border-white/[0.18]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">
                      {skill.category}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                        skill.level === 'Advanced'
                          ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30 font-semibold'
                          : 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#ff7e5d] transition-colors flex items-center gap-1.5 mb-1.5">
                    <span>{skill.name}</span>
                    {skill.highlight && (
                      <Sparkles className="w-3.5 h-3.5 text-[#ff5d35]" />
                    )}
                  </h3>
                </div>

                <div className="mt-3 pt-3 border-t border-white/[0.06]">
                  <p className="text-xs text-slate-300 leading-relaxed font-mono">
                    {skill.context}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Supporting Notice */}
        <div className="mt-10 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center text-xs font-mono text-slate-400 max-w-xl mx-auto">
          <p>
            Hardware &amp; firmware tested with GCC / ESP-IDF / PlatformIO &middot; Production web applications running on Vercel &amp; custom Linux edge server.
          </p>
        </div>

      </div>
    </section>
  );
};
