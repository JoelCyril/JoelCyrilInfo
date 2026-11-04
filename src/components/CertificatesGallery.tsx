import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CERTIFICATES } from '../data/certificatesData';
import { ZoomIn } from 'lucide-react';

interface CertificatesGalleryProps {
  onOpenCertificate: (id: number) => void;
}

export const CertificatesGallery: React.FC<CertificatesGalleryProps> = ({
  onOpenCertificate
}) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'STEM' | 'Sports' | 'Arts' | 'Education'>('All');

  const categories: Array<'All' | 'STEM' | 'Sports' | 'Arts' | 'Education'> = ['All', 'STEM', 'Sports', 'Arts', 'Education'];

  const filteredCertificates = activeFilter === 'All'
    ? CERTIFICATES
    : CERTIFICATES.filter((c) => c.type === activeFilter);

  return (
    <section id="certificates" className="py-24 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#ff5d35]" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#ff5d35] uppercase">
                06 // ARCHIVE &amp; VERIFIED EVIDENCE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
              Certificates &amp;{' '}
              <span className="font-display italic font-normal text-gradient-accent">
                Visual Evidence.
              </span>
            </h2>
            <p className="text-base text-slate-300">
              22 high-resolution scans (up to 4000px) from robotics championships, STEM challenges, sports tournaments, and collegiate courses. Select any certificate to open the interactive zoom viewer.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const count = cat === 'All'
                ? CERTIFICATES.length
                : CERTIFICATES.filter((c) => c.type === cat).length;
              const isSelected = activeFilter === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all border ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#ff5d35] to-[#f97316] text-white border-[#ff5d35] shadow-md shadow-[#ff5d35]/25 font-bold'
                      : 'bg-white/[0.04] text-slate-400 hover:text-white border-white/[0.08] hover:border-white/[0.15]'
                  }`}
                >
                  {cat} <span className="opacity-70 ml-1">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Certificates Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {filteredCertificates.map((cert) => (
              <motion.button
                layout
                key={cert.id}
                type="button"
                onClick={() => onOpenCertificate(cert.id)}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl p-3 sm:p-4 text-left border border-white/[0.08] hover:border-[#ff5d35]/40 group flex flex-col justify-between transition-all"
                aria-label={`Open certificate: ${cert.title}`}
              >
                <div>
                  {/* Thumbnail Image Container */}
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#16141e] border border-white/[0.06] mb-3 flex items-center justify-center">
                    <img
                      src={cert.thumb}
                      alt={cert.title}
                      className="w-full h-full object-contain filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#09090b]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[2px]">
                      <span className="p-2 rounded-full bg-white/20 text-white backdrop-blur-md">
                        <ZoomIn className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#ff7e5d] transition-colors line-clamp-1 mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono line-clamp-1 mb-2">
                    {cert.subtitle}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono">
                  <span className="text-cyan-400">{cert.type}</span>
                  <span className="text-slate-500 group-hover:text-slate-300 transition-colors">
                    #{String(cert.id).padStart(2, '0')}
                  </span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Note */}
        <p className="mt-8 text-center text-xs font-mono text-slate-500">
          * Original scans preserved in high-resolution up to 4000&times;3000px. Click any item for keyboard navigation &amp; full zoom inspection.
        </p>

      </div>
    </section>
  );
};
