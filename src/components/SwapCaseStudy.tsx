import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap } from 'lucide-react';

export const SwapCaseStudy: React.FC = () => {
  return (
    <section className="mt-16 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-panel rounded-3xl p-6 sm:p-10 border border-[#ff5d35]/30 relative overflow-hidden shadow-2xl"
      >
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#ff5d35]/15 via-transparent to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#ff5d35] animate-ping" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#ff5d35] uppercase">
                FEATURED INFRASTRUCTURE CHALLENGE // SWAPUAE
              </span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Scaling a community marketplace without cloud fees.
            </h3>
          </div>
          <a
            href="https://swap-xi-nine.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-mono text-slate-200 transition-colors"
          >
            <span>Visit SwapUAE</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#ff5d35]" />
          </a>
        </div>

        {/* Story Intro */}
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          SwapUAE was engineered to be completely free for students. When unexpected rapid adoption maxed out cloud quotas,
          commercial hosting tiers threatened to impose subscription costs. Rather than charging users or shutting down, I
          engineered a high-availability home NAS and database server entirely from salvaged and discarded PC components.
        </p>

        {/* 3 Step Interactive Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.15] transition-all">
            <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#ff5d35] font-mono font-bold text-xs mb-4">
              01
            </div>
            <h4 className="text-lg font-bold text-white mb-2">The Mission</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Create a free peer-to-peer item exchange with zero listing fees, zero subscriptions, and zero advertising barriers.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.15] transition-all">
            <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-cyan-400 font-mono font-bold text-xs mb-4">
              02
            </div>
            <h4 className="text-lg font-bold text-white mb-2">The Cloud Hurdle</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Surging active barter listings quickly exceeded free cloud tier database limits, presenting a bottleneck for student developers with no budget.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.15] transition-all">
            <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-emerald-400 font-mono font-bold text-xs mb-4">
              03
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Scrap-Built Edge NAS</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Assembled discarded computer parts into a Linux RAID storage node with automated backups and reverse SSL proxies—cutting cloud costs to $0.
            </p>
          </div>
        </div>

        {/* Takeaway Highlight Box */}
        <div className="p-5 rounded-2xl bg-[#ff5d35]/[0.08] border border-[#ff5d35]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#ff5d35]/20 text-[#ff7e5d] shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-mono font-bold text-[#ff7e5d] uppercase tracking-wider">
                CORE ENGINEERING LESSON
              </p>
              <p className="text-sm font-semibold text-white">
                Engineering does not stop at writing application code—scaling demands infrastructure resourcefulness and deep ownership of the underlying hardware.
              </p>
            </div>
          </div>
          <span className="shrink-0 px-3 py-1 rounded-full text-xs font-mono bg-white/[0.08] text-slate-300 border border-white/[0.1]">
            100% Salvaged Hardware
          </span>
        </div>
      </motion.div>
    </section>
  );
};
