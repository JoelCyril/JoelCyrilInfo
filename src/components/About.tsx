import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BrainCircuit, Cpu, Bot, Wrench, Users, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Code2 className="w-5 h-5 text-emerald-400" />,
      title: 'Software Development',
      description: 'Architecting modern full-stack systems using React 19, TypeScript, PostgreSQL, and WebSockets—prioritizing resilient architecture and responsive UI/UX.'
    },
    {
      icon: <BrainCircuit className="w-5 h-5 text-cyan-400" />,
      title: 'AI & Machine Learning',
      description: 'Building practical AI applications with OCR pipelines, predictive telemetry engines, and health pattern analytics aligned with UN SDG 3.'
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#ff5d35]" />,
      title: 'Electronics & Embedded Systems',
      description: 'Designing custom PCBs, flashing C++ firmware, and interfacing low-power microcontrollers (ESP32, STM32) with Sub-GHz LoRa, NFC/RFID, and IR transceivers.'
    },
    {
      icon: <Bot className="w-5 h-5 text-indigo-400" />,
      title: 'Robotics & Mechanical Engineering',
      description: 'Engineering autonomous competition robots and underwater ROVs with multi-thruster differential steering, closed-loop PID control, and 3D printed enclosures.'
    },
    {
      icon: <Wrench className="w-5 h-5 text-amber-400" />,
      title: 'Resourceful Problem-Solving',
      description: 'Overcoming real constraints—like building an entire self-hosted Linux NAS server from scrap PC components to keep community marketplace SwapUAE 100% free.'
    },
    {
      icon: <Users className="w-5 h-5 text-pink-400" />,
      title: 'Leadership & Athletics',
      description: '3-year Robotics Club Secretary & FLL Team Captain (1st Runner-Up), 2-year ADEK Cup Male Varsity football player (current 2025–26 campaign active), CBSE Cluster football representation, and Model United Nations (MUN) delegate.'
    }
  ];

  return (
    <section id="about" className="py-24 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#ff5d35]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#ff5d35] uppercase">
              01 // PROFILE & PHILOSOPHY
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
            Driven by curiosity, engineering discipline, and{' '}
            <span className="font-display italic font-normal text-gradient-accent">
              practical innovation.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            I don’t just sketch ideas—I design the schematics, mill and solder the boards, write the firmware and frontend,
            stress-test the system, and deploy it for real human beings. Currently studying at Abu Dhabi Indian School (CBSE)
            and preparing for university studies in Computer Engineering.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.6 }}
              className="glass-card rounded-2xl p-6 border border-white/[0.08] hover:border-white/[0.2] transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2.5 flex items-center justify-between">
                <span>{pillar.title}</span>
                <ArrowRight className="w-4 h-4 text-slate-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed font-normal">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-2xl glass-panel border border-white/[0.08]">
          <div className="p-4 border-r border-white/[0.06] last:border-0">
            <p className="text-3xl sm:text-4xl font-extrabold text-[#ff5d35] font-display mb-1">07+</p>
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Engineered Projects</p>
          </div>
          <div className="p-4 border-r border-white/[0.06] last:border-0">
            <p className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-display mb-1">03 Yrs</p>
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Robotics Club Secretary</p>
          </div>
          <div className="p-4 border-r border-white/[0.06] last:border-0">
            <p className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-display mb-1">02 Yrs</p>
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">ADEK Varsity Football</p>
          </div>
          <div className="p-4">
            <p className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-display mb-1">TOP 12</p>
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Curtin STEM University</p>
          </div>
        </div>

      </div>
    </section>
  );
};
