import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILLS } from '../data/skillsData';
import { 
  Terminal, Cpu, Layout, Server, BrainCircuit, Layers, Sparkles, 
  Code2, Code, Database, Radio, Bot, Zap, Activity, Atom, Palette, 
  Cloud, GitBranch, HardDrive, Scan, TrendingUp, Network
} from 'lucide-react';

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

  const getSkillIcon = (skill: string) => {
    switch (skill) {
      case 'Python': return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 'TypeScript': return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'JavaScript': return <Code className="w-5 h-5 text-amber-400" />;
      case 'C / C++': return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'HTML5 & CSS3': return <Layout className="w-5 h-5 text-orange-400" />;
      case 'SQL': return <Database className="w-5 h-5 text-violet-400" />;
      case 'ESP32': return <Cpu className="w-5 h-5 text-[#ff5d35]" />;
      case 'STM32': return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'LoRa & RF (Sub-GHz)': return <Radio className="w-5 h-5 text-cyan-400" />;
      case 'Electronics & Robotics': return <Bot className="w-5 h-5 text-emerald-400" />;
      case 'Custom PCB & KiCAD': return <Layers className="w-5 h-5 text-amber-400" />;
      case 'Hardware Protocols': return <Activity className="w-5 h-5 text-pink-400" />;
      case 'React': return <Atom className="w-5 h-5 text-cyan-400" />;
      case 'Tailwind CSS': return <Palette className="w-5 h-5 text-teal-400" />;
      case 'Framer Motion': return <Sparkles className="w-5 h-5 text-purple-400" />;
      case 'Vite': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'REST & WebSockets': return <Network className="w-5 h-5 text-emerald-400" />;
      case 'Supabase': return <Database className="w-5 h-5 text-emerald-400" />;
      case 'PostgreSQL': return <Server className="w-5 h-5 text-blue-400" />;
      case 'Vercel': return <Cloud className="w-5 h-5 text-slate-300 light:text-slate-700" />;
      case 'Git & GitHub': return <GitBranch className="w-5 h-5 text-orange-400" />;
      case 'Linux & Self-Hosted NAS': return <HardDrive className="w-5 h-5 text-amber-400" />;
      case 'AI / ML Integration': return <BrainCircuit className="w-5 h-5 text-pink-400" />;
      case 'Computer Vision & OCR': return <Scan className="w-5 h-5 text-cyan-400" />;
      case 'Predictive Telemetry': return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      case 'FLL Autonomous Robotics': return <Bot className="w-5 h-5 text-[#ff5d35]" />;
      default: return <Cpu className="w-5 h-5 text-[#ff5d35]" />;
    }
  };

  const filteredSkills = activeCategory === 'All'
    ? SKILLS
    : SKILLS.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative z-10 border-t border-white/[0.06] light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[1px] bg-[#ff5d35]" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#ff5d35] uppercase">
                03 // ENGINEERING TOOLKIT
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white light:text-slate-900 mb-2">
              Skills, Protocols &amp;{' '}
              <span className="font-display italic font-normal text-gradient-accent">
                Technologies.
              </span>
            </h2>
            <p className="text-sm text-slate-300 light:text-slate-600">
              Compact directory of verified languages, embedded microcontrollers, protocols, and toolchains.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat.label;
              return (
                <button
                  key={cat.label}
                  onClick={() => setActiveCategory(cat.label)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all border ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#ff5d35] to-[#f97316] text-white border-[#ff5d35] shadow-md shadow-[#ff5d35]/25 font-bold'
                      : 'bg-white/[0.04] light:bg-slate-100 text-slate-400 light:text-slate-600 hover:text-white light:hover:text-black border-white/[0.08] light:border-slate-200'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Compressed Skills Logo Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, idx) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2, delay: idx * 0.015 }}
                className={`glass-card rounded-xl p-3 flex flex-col items-center justify-center text-center group transition-all relative border ${
                  skill.highlight
                    ? 'border-[#ff5d35]/30 hover:border-[#ff5d35] bg-gradient-to-b from-white/[0.04] to-transparent light:from-slate-50 light:to-white'
                    : 'border-white/[0.08] light:border-slate-200 hover:border-white/[0.2] light:hover:border-slate-400'
                }`}
                title={`${skill.name} (${skill.level}): ${skill.context}`}
              >
                {/* Logo / Icon Container */}
                <div className="w-10 h-10 rounded-lg bg-white/[0.04] light:bg-slate-100 border border-white/[0.06] light:border-slate-200 flex items-center justify-center mb-2 group-hover:scale-110 group-hover:bg-[#ff5d35]/15 transition-all">
                  {getSkillIcon(skill.name)}
                </div>

                {/* Tech Name */}
                <span className="text-xs font-mono font-bold text-white light:text-slate-900 group-hover:text-[#ff7e5d] transition-colors truncate w-full">
                  {skill.name}
                </span>

                {/* Proficiency Indicator */}
                <div className="flex items-center gap-1 mt-1">
                  <span
                    className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                      skill.level === 'Advanced'
                        ? 'text-emerald-400 light:text-emerald-700 bg-emerald-500/10'
                        : 'text-cyan-400 light:text-cyan-700 bg-cyan-500/10'
                    }`}
                  >
                    {skill.level}
                  </span>
                  {skill.highlight && (
                    <Sparkles className="w-2.5 h-2.5 text-[#ff5d35]" />
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Supporting Notice */}
        <div className="mt-6 p-3 rounded-xl bg-white/[0.02] light:bg-slate-50 border border-white/[0.06] light:border-slate-200 text-center text-xs font-mono text-slate-400 light:text-slate-600 max-w-xl mx-auto">
          <p>
            Hardware &amp; firmware tested with GCC / ESP-IDF / PlatformIO &middot; Production applications deployed via Vercel &amp; custom self-hosted Linux edge server.
          </p>
        </div>

      </div>
    </section>
  );
};
