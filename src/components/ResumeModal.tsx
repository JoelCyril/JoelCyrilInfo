import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, Mail, MapPin, Github, Award, Briefcase, GraduationCap, Code } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#060608]/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#121018] border border-white/[0.15] rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col"
        >
          {/* Header Action Bar */}
          <div className="px-6 py-4 border-b border-white/[0.08] flex items-center justify-between bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5d35]" />
              <span className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
                CURRICULUM VITAE &amp; RESUME // JOEL THOMAS CYRIL
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-slate-300 hover:text-white bg-white/[0.05] border border-white/[0.1] hover:border-white/[0.2] transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Canvas */}
          <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#0d0c13] text-slate-200">
            {/* Header info */}
            <div className="border-b border-white/[0.1] pb-6 flex flex-col sm:flex-row justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Joel Thomas Cyril
                </h1>
                <p className="text-sm font-mono text-[#ff7e5d] font-semibold mt-1">
                  Systems Engineer, Embedded Hardware Maker &amp; Full-Stack Developer
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mt-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#ff5d35]" />
                    Abu Dhabi, United Arab Emirates
                  </span>
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    joeltcyril@gmail.com
                  </span>
                  <a
                    href="https://github.com/JoelCyril"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-slate-300 hover:text-[#ff5d35]"
                  >
                    <Github className="w-3.5 h-3.5" />
                    github.com/JoelCyril
                  </a>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#ff5d35] font-bold mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>Education &amp; Academic Foundation</span>
              </h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex justify-between items-baseline flex-wrap gap-2">
                    <h3 className="font-bold text-white text-base">Abu Dhabi Indian School (ADIS)</h3>
                    <span className="text-xs font-mono text-cyan-400">Class XII (CBSE) · 2026</span>
                  </div>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">Senior Secondary · Computer Science, Mathematics &amp; Physics</p>
                  <p className="text-xs text-emerald-300 font-mono mt-2">
                    Academic Scores: CBSE Class X Mathematics 100/100 &middot; English Language &amp; Literature 95/100
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex justify-between items-baseline flex-wrap gap-2">
                    <h3 className="font-bold text-white text-base">IIT Madras — Centre for Outreach &amp; Digital Education</h3>
                    <span className="text-xs font-mono text-cyan-400">Course Certification · 2026</span>
                  </div>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">Introduction to Electronic Systems (8-Week Program)</p>
                  <p className="text-xs text-slate-300 mt-1">
                    Circuit theorems, operational amplifiers, semiconductor physics, signal filters, and logic micro-architectures.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#ff5d35] font-bold mb-3 flex items-center gap-2">
                <Code className="w-4 h-4" />
                <span>Technical Capabilities &amp; Stack</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <p className="font-mono text-cyan-400 font-bold mb-1">Embedded &amp; Hardware</p>
                  <p className="text-slate-300">ESP32, STM32WLE5, LoRa (Sub-GHz), C/C++, KiCad PCB Design, I2C/SPI/UART, FreeRTOS, Brushless Motors, PID Control.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <p className="font-mono text-cyan-400 font-bold mb-1">Full-Stack &amp; Cloud</p>
                  <p className="text-slate-300">React 19, TypeScript, JavaScript, Python (FastAPI), PostgreSQL, Supabase, Tailwind CSS, Vite, WebSockets, Vercel.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <p className="font-mono text-cyan-400 font-bold mb-1">Systems &amp; DevOps</p>
                  <p className="text-slate-300">Linux / Ubuntu Server, Self-Hosted Home NAS, ZFS / RAID, Docker, Reverse Proxy (Nginx), Git &amp; GitHub.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <p className="font-mono text-cyan-400 font-bold mb-1">AI, Robotics &amp; Tools</p>
                  <p className="text-slate-300">AI APIs, Tesseract OCR, Predictive Telemetry, FIRST LEGO League Robotics, 3D CAD modeling, 3D Printing.</p>
                </div>
              </div>
            </div>

            {/* Signature Projects */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#ff5d35] font-bold mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>Selected Engineering Projects</span>
              </h2>
              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex justify-between items-baseline font-bold text-white text-sm">
                    <span>SwapUAE — Cashless Barter Marketplace</span>
                    <span className="font-mono text-[11px] text-emerald-400">100+ Users · $0 Budget</span>
                  </div>
                  <p className="text-slate-300 mt-1">Co-founder &amp; lead engineer. Architected full-stack trading application using React 19, Node.js, PostgreSQL, and WebSockets. Engineered a scrap-built home NAS to eliminate cloud subscription costs.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex justify-between items-baseline font-bold text-white text-sm">
                    <span>Reaper One — Multi-Protocol RF Hardware</span>
                    <span className="font-mono text-[11px] text-[#ff7e5d]">1.5 Year Physical Build</span>
                  </div>
                  <p className="text-slate-300 mt-1">Integrated Sub-GHz (CC1101), NFC/RFID, IR, Bluetooth, and Wi-Fi on a single custom ESP32 PCB with responsive menu-driven C++ firmware and 3D CAD enclosure.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex justify-between items-baseline font-bold text-white text-sm">
                    <span>Manarat Al-Qurm — Smart Mangrove Buoy System</span>
                    <span className="font-mono text-[11px] text-cyan-400">STM32 + LoRa</span>
                  </div>
                  <p className="text-slate-300 mt-1">Designed low-power floating buoy with 6-parameter Water Quality Indexing, Sub-GHz LoRa telemetry to Raspberry Pi gateway, and 48-hour AI predictive ecosystem forecasting.</p>
                </div>
              </div>
            </div>

            {/* Competitions & Awards */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#ff5d35] font-bold mb-3 flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Honors &amp; Distinctions</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <span className="font-bold text-white block">FIRST LEGO League — Robot Game</span>
                  <span className="text-slate-400 font-mono">Team Captain &middot; First Runner-Up · 2025–26</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <span className="font-bold text-white block">Curtin University STEM Challenge</span>
                  <span className="text-slate-400 font-mono">Top 12 Finalist Team · Dubai · 2026</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <span className="font-bold text-white block">CBSE Cluster U-17 Football</span>
                  <span className="text-slate-400 font-mono">National Cluster Level Representation · 2024–25</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <span className="font-bold text-white block">ADIS Speedcubing Championship</span>
                  <span className="text-slate-400 font-mono">First Place Champion · 2022</span>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer Controls */}
          <div className="px-6 py-4 border-t border-white/[0.08] bg-white/[0.02] flex items-center justify-between">
            <span className="text-xs font-mono text-slate-500">
              Verified &amp; Updated · 2026
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#ff5d35] to-[#f97316] text-white hover:brightness-110 flex items-center gap-2 shadow-md shadow-[#ff5d35]/20"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download / Print PDF</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
