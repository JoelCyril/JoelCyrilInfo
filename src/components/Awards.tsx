import React from 'react';
import { motion } from 'framer-motion';
import { AWARDS } from '../data/awardsData';
import { CERTIFICATES } from '../data/certificatesData';
import { ArrowUpRight } from 'lucide-react';

interface AwardsProps {
  onOpenPhoto: (photoId: number) => void;
}

export const Awards: React.FC<AwardsProps> = ({ onOpenPhoto }) => {
  return (
    <section id="awards" className="py-24 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#ff5d35]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#ff5d35] uppercase">
              05 // HONORS &amp; RECOGNITION
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Podium Finishes, Trophies &amp;{' '}
            <span className="font-display italic font-normal text-gradient-accent">
              Distinctions.
            </span>
          </h2>
          <p className="text-base text-slate-300">
            Proven leadership across robotics, engineering design, collegiate STEM, speedcubing, and athletics. Click any honor to inspect verified photographic evidence.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {AWARDS.map((award, idx) => {
            const cert = award.photoId
              ? CERTIFICATES.find((c) => c.id === award.photoId)
              : null;

            return (
              <motion.button
                type="button"
                key={award.id}
                onClick={() => award.photoId && onOpenPhoto(award.photoId)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
                className="glass-card rounded-2xl p-5 text-left border border-white/[0.08] hover:border-[#ff5d35]/40 flex flex-col justify-between group transition-all"
              >
                <div>
                  {/* Photo Preview Thumbnail */}
                  {cert && (
                    <div className="w-full h-36 rounded-xl overflow-hidden bg-[#16141e] mb-4 border border-white/[0.06] relative">
                      <img
                        src={cert.thumb}
                        alt={award.title}
                        className="w-full h-full object-contain filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121018]/60 via-transparent to-transparent" />
                      <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-[10px] font-mono bg-black/70 text-slate-300 border border-white/[0.1] backdrop-blur-sm">
                        Inspect Trophy ↗
                      </div>
                    </div>
                  )}

                  {/* Category Pill & Year */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                      {award.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400 font-medium">
                      {award.date}
                    </span>
                  </div>

                  {/* Title & Rank */}
                  <h3 className="text-lg font-bold text-white group-hover:text-[#ff7e5d] transition-colors mb-1.5 leading-snug">
                    {award.title}
                  </h3>
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-[#ff5d35]/15 text-[#ff7e5d] border border-[#ff5d35]/30 mb-3">
                    {award.rank}
                  </div>

                  <p className="text-xs text-slate-400 font-mono mb-2">
                    {award.organization}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {award.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-[#ff5d35] transition-colors">
                  <span>View Evidence Scan</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
