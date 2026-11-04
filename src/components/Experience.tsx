import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../data/experienceData';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#ff5d35]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#ff5d35] uppercase">
              04 // TRAJECTORY &amp; LEADERSHIP
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Experience, Competitions &amp;{' '}
            <span className="font-display italic font-normal text-gradient-accent">
              Academic Milestones.
            </span>
          </h2>
          <p className="text-base text-slate-300">
            Proven track record in national competitive robotics, inter-collegiate STEM challenges, and academic rigor.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/[0.12] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {EXPERIENCES.map((item, idx) => (
            <motion.div
              key={item.role + item.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Pin Indicator */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#121018] border-2 border-[#ff5d35] flex items-center justify-center group-hover:scale-125 transition-transform">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff5d35] shadow-[0_0_8px_#ff5d35]" />
              </div>

              {/* Card Container */}
              <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/[0.08] hover:border-white/[0.2] transition-all">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ff7e5d] font-bold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                  <span className="px-3 py-1 text-xs font-mono font-semibold rounded-full bg-[#ff5d35]/15 text-[#ff7e5d] border border-[#ff5d35]/30">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {item.role}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-cyan-400 mb-4">
                  <span>{item.organization}</span>
                  <span className="text-slate-600">&bull;</span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 pt-3 border-t border-white/[0.06]">
                  {item.highlights.map((point) => (
                    <div key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
