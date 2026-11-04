import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CERTIFICATES } from '../data/certificatesData';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, ExternalLink } from 'lucide-react';

interface LightboxModalProps {
  activeId: number | null;
  onClose: () => void;
  onSelectId: (id: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  activeId,
  onClose,
  onSelectId
}) => {
  const [zoom, setZoom] = useState(1);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, ox: 0, oy: 0 });

  const activeIndex = activeId !== null
    ? CERTIFICATES.findIndex((c) => c.id === activeId)
    : -1;

  const currentCert = activeIndex >= 0 ? CERTIFICATES[activeIndex] : null;

  // Reset zoom on photo change
  useEffect(() => {
    setZoom(1);
    setDragOffset({ x: 0, y: 0 });
  }, [activeId]);

  // Keyboard navigation
  useEffect(() => {
    if (activeId === null) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        const nextIdx = (activeIndex + 1) % CERTIFICATES.length;
        onSelectId(CERTIFICATES[nextIdx].id);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const prevIdx = (activeIndex - 1 + CERTIFICATES.length) % CERTIFICATES.length;
        onSelectId(CERTIFICATES[prevIdx].id);
      } else if (e.key === '+' || e.key === '=') {
        e.preventDefault();
        setZoom((z) => Math.min(z + 0.35, 4));
      } else if (e.key === '-') {
        e.preventDefault();
        setZoom((z) => Math.max(z - 0.35, 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeId, activeIndex, onClose, onSelectId]);

  if (!currentCert) return null;

  const handlePointerDown = (e: React.PointerEvent) => {
    if (zoom <= 1) return;
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
      ox: dragOffset.x,
      oy: dragOffset.y
    };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || zoom <= 1) return;
    setDragOffset({
      x: dragStart.current.ox + (e.clientX - dragStart.current.x),
      y: dragStart.current.oy + (e.clientY - dragStart.current.y)
    });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handleStep = (step: number) => {
    const nextIdx = (activeIndex + step + CERTIFICATES.length) % CERTIFICATES.length;
    onSelectId(CERTIFICATES[nextIdx].id);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#060608]/95 backdrop-blur-xl"
        />

        {/* Lightbox Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-6xl h-[92vh] max-h-[960px] bg-[#100e16] border border-white/[0.15] rounded-3xl shadow-2xl flex flex-col z-10 overflow-hidden"
        >
          {/* Top Control Bar */}
          <div className="px-5 py-3.5 border-b border-white/[0.08] flex items-center justify-between bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <span className="text-sm font-mono font-bold text-[#ff5d35]">
                {String(activeIndex + 1).padStart(2, '0')} / {String(CERTIFICATES.length).padStart(2, '0')}
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.06] text-slate-300">
                {currentCert.type}
              </span>
            </div>

            {/* Zoom & Action Controls */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={() => setZoom((z) => Math.max(z - 0.35, 1))}
                className="p-2 rounded-xl text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08]"
                aria-label="Zoom out"
                title="Zoom Out (-)"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoom((z) => Math.min(z + 0.35, 4))}
                className="p-2 rounded-xl text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08]"
                aria-label="Zoom in"
                title="Zoom In (+)"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  setZoom(1);
                  setDragOffset({ x: 0, y: 0 });
                }}
                className="px-2.5 py-1.5 rounded-xl text-xs font-mono text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08]"
                title="Reset zoom"
              >
                {Math.round(zoom * 100)}%
              </button>

              <button
                onClick={onClose}
                className="ml-2 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#ff5d35] hover:bg-[#ff7e5d] text-white transition-colors"
                aria-label="Close viewer"
              >
                Close ✕
              </button>
            </div>
          </div>

          {/* Canvas Viewing Stage */}
          <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className={`flex-1 relative overflow-hidden bg-[#09080d] flex items-center justify-center p-4 select-none ${
              zoom > 1 ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-zoom-in'
            }`}
            onClick={() => {
              if (zoom === 1) setZoom(1.75);
            }}
          >
            <img
              src={currentCert.full}
              alt={currentCert.title}
              style={{
                transform: `translate(${dragOffset.x}px, ${dragOffset.y}px) scale(${zoom})`,
                transition: isDragging ? 'none' : 'transform 0.15s ease-out'
              }}
              className="max-h-full max-w-full object-contain pointer-events-none rounded-lg shadow-2xl"
              draggable={false}
            />

            {/* Left and Right Nav Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleStep(-1);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#ff5d35] text-white border border-white/[0.1] backdrop-blur-md transition-all"
              aria-label="Previous certificate"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleStep(1);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#ff5d35] text-white border border-white/[0.1] backdrop-blur-md transition-all"
              aria-label="Next certificate"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Caption & Download Bar */}
          <div className="px-6 py-4 border-t border-white/[0.08] bg-white/[0.02] flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-0.5">
                {currentCert.title}
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                {currentCert.subtitle} &middot; {currentCert.issuer || 'Official Recognition'}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={currentCert.full}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-slate-300 hover:text-white bg-white/[0.05] border border-white/[0.1] hover:border-white/[0.2] transition-colors"
              >
                <span>Original Scan (4K)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
