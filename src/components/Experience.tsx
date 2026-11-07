import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../data/experienceData';
import { Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';

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
          {EXPERIENCES.map((item, idx) => {
            const isMathCentum = item.badge.includes('100/100');

            return (
              <motion.div
                key={item.role + item.period}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline Pin Indicator */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform ${
                    isMathCentum
                      ? 'bg-amber-950/80 border-2 border-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.7)]'
                      : 'bg-[#121018] border-2 border-[#ff5d35]'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isMathCentum
                        ? 'bg-amber-400 shadow-[0_0_8px_#f59e0b]'
                        : 'bg-[#ff5d35] shadow-[0_0_8px_#ff5d35]'
                    }`}
                  />
                </div>

                {/* Card Container */}
                <div
                  className={`glass-card rounded-2xl p-6 sm:p-7 border transition-all ${
                    isMathCentum
                      ? 'border-amber-500/50 light:border-amber-400 shadow-[0_0_35px_-5px_rgba(245,158,11,0.25)] bg-gradient-to-br from-amber-500/[0.08] via-transparent to-transparent'
                      : 'border-white/[0.08] light:border-slate-200 hover:border-white/[0.2] light:hover:border-slate-300'
                  }`}
                >
                  {/* Academic Centum Top Highlight Banner */}
                  {isMathCentum && (
                    <div className="mb-4 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-amber-500/20 via-orange-500/10 to-transparent border border-amber-500/35 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                        <Award className="w-6 h-6 text-amber-400" />
                      </div>
                      <div>
                        <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                          <span>★ Academic Centum Distinction</span>
                          <span className="px-1.5 py-0.2 bg-amber-400/20 text-amber-300 rounded text-[10px] font-bold">100 / 100</span>
                        </div>
                        <p className="text-sm font-bold text-white light:text-slate-900">
                          Perfect 100/100 Score in Grade X CBSE Mathematics Board Examination
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#ff7e5d] font-bold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                    <span
                      className={`px-3 py-1 text-xs font-mono font-semibold rounded-full border ${
                        isMathCentum
                          ? 'bg-amber-500/15 text-amber-300 border-amber-500/35'
                          : 'bg-[#ff5d35]/15 text-[#ff7e5d] border-[#ff5d35]/30'
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white light:text-slate-900 mb-1">
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

                  <p className="text-sm text-slate-300 light:text-slate-700 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2 pt-3 border-t border-white/[0.06] light:border-slate-200">
                    {item.highlights.map((point) => (
                      <div key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 light:text-slate-600">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isMathCentum ? 'text-amber-400' : 'text-emerald-400'}`} />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
