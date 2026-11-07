import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Download, Send, MapPin, Cpu, Users, Award } from 'lucide-react';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="top" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono text-slate-300 shadow-sm"
              >
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
                </span>
                <span>HARDWARE × SOFTWARE × AUTONOMOUS SYSTEMS</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/35 text-xs font-mono font-semibold text-amber-300 shadow-sm"
              >
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>100/100 CBSE Math Centum</span>
              </motion.div>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.05]">
              Joel Thomas <br />
              <span className="font-display italic font-normal text-gradient-accent">
                Cyril<span className="text-[#ff5d35]">.</span>
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-8">
              Systems engineer and full-stack developer in Abu Dhabi. Building real-world technology—from
              <span className="text-white font-semibold"> custom ESP32/STM32 embedded electronics</span> and
              <span className="text-white font-semibold"> LoRa environmental buoys</span> to
              <span className="text-white font-semibold"> high-scale community web platforms</span> and AI applications.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#ff5d35] to-[#f97316] text-white font-semibold text-sm shadow-[0_0_25px_-5px_rgba(255,93,53,0.5)] hover:shadow-[0_0_35px_-5px_rgba(255,93,53,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <a
                href="/Joel_Cyril_Resume.pdf"
                download="Joel_Cyril_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] text-white font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
                title="Download ATS Compliant CV (PDF)"
              >
                <Download className="w-4 h-4 text-[#ff5d35]" />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] text-slate-200 font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Send className="w-3.5 h-3.5 text-cyan-400" />
                <span>Contact</span>
              </a>

              <a
                href="https://github.com/JoelCyril"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] text-slate-300 hover:text-white transition-all hover:scale-105"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>

            {/* Meta Proof Points */}
            <div className="pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-2xl text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#ff5d35]" />
                <span>Abu Dhabi, UAE</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-semibold text-amber-400 light:text-amber-600">100/100 Math · Grade XII</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                <span>Robotics Club Sec.</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-amber-400" />
                <span>ADEK Varsity Player</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Portrait Card with 3D tilt & Hardware highlights */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#ff5d35]/30 via-transparent to-cyan-500/20 rounded-3xl blur-2xl opacity-75 -z-10" />

              {/* Main Card Frame */}
              <div className="glass-panel rounded-2xl p-5 border border-white/[0.12] shadow-2xl relative overflow-hidden group">
                {/* Image Container */}
                <div className="relative rounded-xl overflow-hidden bg-[#16141f] aspect-square flex items-center justify-center border border-white/[0.08]">
                  <img
                    src="/assets/profile/joel-portrait.webp"
                    alt="Joel Thomas Cyril"
                    className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
                    width={500}
                    height={500}
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Micro-Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3.5 py-2 rounded-xl bg-[#09090b]/80 backdrop-blur-md border border-white/[0.12]">
                    <div>
                      <p className="text-[11px] font-mono uppercase tracking-wider text-[#ff5d35] font-semibold">Portfolio 2026</p>
                      <p className="text-xs font-semibold text-white">Joel Thomas Cyril</p>
                    </div>
                    <span className="flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Active
                    </span>
                  </div>
                </div>

                {/* Key Spec Grid */}
                <div className="mt-4 pt-4 border-t border-white/[0.08] grid grid-cols-2 gap-3 text-xs">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Primary Focus</span>
                    <span className="text-slate-200 font-medium">Embedded · Web · AI</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Hardware Core</span>
                    <span className="text-slate-200 font-medium">ESP32 · STM32 · LoRa</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
