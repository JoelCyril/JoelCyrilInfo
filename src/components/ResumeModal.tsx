import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, Mail, MapPin, Github, Award, Briefcase, GraduationCap, Code, Copy, Check, Globe, Phone } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

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

  const handleCopyText = async () => {
    try {
      const response = await fetch('/Joel_Cyril_ATS_Resume.txt');
      const text = await response.text();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback text copy
      const element = document.getElementById('ats-resume-content');
      if (element) {
        await navigator.clipboard.writeText(element.innerText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      }
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
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
          className="resume-modal-container relative w-full max-w-4xl bg-[#121018] light:bg-white border border-white/[0.15] light:border-slate-300 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col text-slate-200 light:text-slate-800"
        >
          {/* Header Action Bar */}
          <div className="resume-modal-header px-5 py-3.5 border-b border-white/[0.08] light:border-slate-200 flex items-center justify-between bg-white/[0.02] light:bg-slate-50 no-print">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5d35]" />
              <span className="text-xs font-mono font-semibold text-slate-300 light:text-slate-700 uppercase tracking-wider">
                CURRICULUM VITAE // ATS-COMPLIANT
              </span>
              <span className="hidden md:inline-block px-2 py-0.5 text-[10px] font-mono bg-emerald-500/15 text-emerald-400 light:text-emerald-700 border border-emerald-500/30 rounded">
                Verified 2026
              </span>
            </div>
            
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={handleCopyText}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-slate-300 light:text-slate-700 hover:text-white light:hover:text-black bg-white/[0.05] light:bg-slate-100 border border-white/[0.1] light:border-slate-300 hover:border-white/[0.2] transition-colors"
                title="Copy standardized text for ATS web forms"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied ATS Text!' : 'Copy ATS Text'}</span>
              </button>

              <button
                onClick={handlePrint}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-slate-300 light:text-slate-700 hover:text-white light:hover:text-black bg-white/[0.05] light:bg-slate-100 border border-white/[0.1] light:border-slate-300 hover:border-white/[0.2] transition-colors"
                title="Print or export to PDF with clean ATS styles"
              >
                <Printer className="w-3.5 h-3.5 text-cyan-400" />
                <span>Print / Save PDF</span>
              </button>

              <a
                href="/Joel_Cyril_ATS_Resume.txt"
                download="Joel_Cyril_ATS_Resume.txt"
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-slate-300 light:text-slate-700 hover:text-white light:hover:text-black bg-white/[0.05] light:bg-slate-100 border border-white/[0.1] light:border-slate-300 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span>.txt</span>
              </a>

              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-slate-400 light:text-slate-600 hover:text-white light:hover:text-black hover:bg-white/[0.08] light:hover:bg-slate-200 transition-colors ml-1"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable & ATS-Compliant Document Canvas */}
          <div
            id="ats-resume-content"
            className="overflow-y-auto p-6 sm:p-10 space-y-7 bg-[#0d0c13] light:bg-white text-slate-200 light:text-slate-800 text-sm leading-relaxed"
          >
            {/* Header info */}
            <div className="border-b border-white/[0.12] light:border-slate-300 pb-5">
              <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-3">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
                    Joel Thomas Cyril
                  </h1>
                  <p className="text-sm font-semibold text-[#ff7e5d] light:text-[#ea580c] mt-1 font-mono">
                    Candidate for Undergraduate Computer Engineering · Embedded Systems, Web &amp; AI
                  </p>
                </div>
              </div>

              {/* Contact Meta Row */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-mono text-slate-300 light:text-slate-600 mt-3.5 pt-3 border-t border-white/[0.06] light:border-slate-200">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#ff5d35]" />
                  Abu Dhabi, United Arab Emirates
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  joeltcyril@gmail.com
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  +971 50 148 4596
                </span>
                <a
                  href="https://github.com/JoelCyril"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#ff5d35] light:hover:text-[#ea580c]"
                >
                  <Github className="w-3.5 h-3.5" />
                  github.com/JoelCyril
                </a>
                <a
                  href="https://joel-cyril-info-joelcyrils-projects.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#ff5d35] light:hover:text-[#ea580c]"
                >
                  <Globe className="w-3.5 h-3.5 text-amber-400" />
                  Portfolio
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#ff5d35] light:text-[#ea580c] font-bold mb-2 pb-1 border-b border-white/[0.1] light:border-slate-200 flex items-center gap-2">
                <span>01 // PROFESSIONAL SUMMARY</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 light:text-slate-700 leading-relaxed font-normal">
                Aspiring Computer Engineering undergraduate with deep practical engineering experience across low-power embedded electronics (ESP32, STM32, Sub-GHz LoRa, custom KiCAD PCBs), full-stack application development (React 19, TypeScript, Node.js, PostgreSQL), and applied AI systems. Demonstrates a verified record of scalable impact—deploying an AI educational assessment portal to 2,000+ active students, launching a zero-cost community web platform, captaining award-winning competitive robotics teams (FLL First Runner-Up), and maintaining elite academic rigor (100/100 CBSE Mathematics Centum score).
              </p>
            </div>

            {/* Education & Academic Honors */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#ff5d35] light:text-[#ea580c] font-bold mb-3 pb-1 border-b border-white/[0.1] light:border-slate-200 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>02 // EDUCATION &amp; ACADEMIC DISTINCTIONS</span>
              </h2>
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-white/[0.03] light:bg-slate-50 border border-white/[0.06] light:border-slate-200">
                  <div className="flex justify-between items-baseline flex-wrap gap-2">
                    <h3 className="font-bold text-white light:text-slate-900 text-sm sm:text-base">
                      Abu Dhabi Indian School (ADIS)
                    </h3>
                    <span className="text-xs font-mono text-cyan-400 light:text-cyan-700 font-semibold">
                      Class XII (CBSE) · Expected 2026
                    </span>
                  </div>
                  <p className="text-xs font-mono text-slate-400 light:text-slate-600 mt-0.5">
                    Senior Secondary Concentration: Computer Science, Mathematics &amp; Physics
                  </p>
                  <div className="mt-2.5 p-2 rounded-lg bg-amber-500/10 light:bg-amber-50 border border-amber-500/25 light:border-amber-200 text-xs font-mono text-amber-300 light:text-amber-800 flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>★ 100/100 Perfect Score (Centum)</strong> in Grade X CBSE Mathematics Board Exam &middot; 95/100 in English Language &amp; Literature</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] light:bg-slate-50 border border-white/[0.06] light:border-slate-200">
                  <div className="flex justify-between items-baseline flex-wrap gap-2">
                    <h3 className="font-bold text-white light:text-slate-900 text-sm">
                      IIT Madras — Centre for Outreach &amp; Digital Education (CODE)
                    </h3>
                    <span className="text-xs font-mono text-cyan-400 light:text-cyan-700 font-semibold">
                      Course Certification · 2026
                    </span>
                  </div>
                  <p className="text-xs font-mono text-slate-400 light:text-slate-600 mt-0.5">
                    Introduction to Electronic Systems (8-Week Advanced Program)
                  </p>
                  <p className="text-xs text-slate-300 light:text-slate-700 mt-1">
                    Circuit theorems, operational amplifiers, semiconductor physics, signal conditioning filters, and logic micro-architectures.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Skills & Protocols */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#ff5d35] light:text-[#ea580c] font-bold mb-3 pb-1 border-b border-white/[0.1] light:border-slate-200 flex items-center gap-2">
                <Code className="w-4 h-4" />
                <span>03 // TECHNICAL SKILLS &amp; CAPABILITIES (ATS KEYWORDS)</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white/[0.03] light:bg-slate-50 border border-white/[0.06] light:border-slate-200">
                  <p className="font-mono text-cyan-400 light:text-cyan-700 font-bold mb-1">Languages &amp; Core</p>
                  <p className="text-slate-300 light:text-slate-700">C, C++, Python, TypeScript, JavaScript, SQL (PostgreSQL, SQLite), HTML5, CSS3, JSON.</p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] light:bg-slate-50 border border-white/[0.06] light:border-slate-200">
                  <p className="font-mono text-cyan-400 light:text-cyan-700 font-bold mb-1">Embedded &amp; Hardware</p>
                  <p className="text-slate-300 light:text-slate-700">ESP32, STM32 (STM32WLE5), Sub-GHz LoRa (CC1101), KiCAD (Schematic &amp; PCB Layout), FreeRTOS, Brushless Motors, PID Control, I2C, SPI, UART, RS-485, NFC/RFID (PN532), Infrared TX/RX, 3D CAD (Fusion 360).</p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] light:bg-slate-50 border border-white/[0.06] light:border-slate-200">
                  <p className="font-mono text-cyan-400 light:text-cyan-700 font-bold mb-1">Web, Backend &amp; Cloud</p>
                  <p className="text-slate-300 light:text-slate-700">React 19, TypeScript, Node.js, FastAPI, PostgreSQL, Supabase, Tailwind CSS, Vite, WebSockets, Socket.io, REST APIs, Vercel, Cloudflare.</p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] light:bg-slate-50 border border-white/[0.06] light:border-slate-200">
                  <p className="font-mono text-cyan-400 light:text-cyan-700 font-bold mb-1">Systems, Tools &amp; AI</p>
                  <p className="text-slate-300 light:text-slate-700">Linux (Ubuntu Server), Self-Hosted Home NAS, Git, GitHub, Docker basics, Tesseract OCR, Predictive Telemetry, Recharts, PlatformIO.</p>
                </div>
              </div>
            </div>

            {/* Featured Engineering Projects */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#ff5d35] light:text-[#ea580c] font-bold mb-3 pb-1 border-b border-white/[0.1] light:border-slate-200 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>04 // FEATURED ENGINEERING PROJECTS</span>
              </h2>
              <div className="space-y-3.5 text-xs">
                {/* ReadTrack */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] light:bg-slate-50 border border-white/[0.06] light:border-slate-200">
                  <div className="flex justify-between items-baseline font-bold text-white light:text-slate-900 text-sm">
                    <span>ADIS ReadTrack — AI Literacy &amp; Reading Assessment Platform</span>
                    <span className="font-mono text-[11px] text-cyan-400 light:text-cyan-700">2,000+ Active Students</span>
                  </div>
                  <p className="font-mono text-[11px] text-[#ff7e5d] light:text-[#ea580c] mt-0.5">Lead Developer &amp; Systems Architect · React 19, TypeScript, Supabase, PostgreSQL, Tesseract OCR</p>
                  <ul className="list-disc pl-4 space-y-1 mt-2 text-slate-300 light:text-slate-700">
                    <li>Consulted directly with all high school English teachers to architect a school-wide reading portal serving nearly 2,000 students at Abu Dhabi Indian School.</li>
                    <li>Integrated camera OCR student ID verification and automated summary evaluations, eliminating paper reading logs and reducing teacher grading workload by 75%.</li>
                    <li>Designed gamified inter-class PISA score leaderboards aligned with ADEK 480+ target, with Class 12-B achieving #1 standing (546 pts) and school-wide reward privileges.</li>
                  </ul>
                </div>

                {/* SwapUAE */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] light:bg-slate-50 border border-white/[0.06] light:border-slate-200">
                  <div className="flex justify-between items-baseline font-bold text-white light:text-slate-900 text-sm">
                    <span>SwapUAE — Community Zero-Cash Barter Marketplace</span>
                    <span className="font-mono text-[11px] text-emerald-400 light:text-emerald-700">100+ Members · $0 Budget</span>
                  </div>
                  <p className="font-mono text-[11px] text-[#ff7e5d] light:text-[#ea580c] mt-0.5">Co-Founder &amp; Lead Systems Engineer · React 19, TypeScript, Node.js, PostgreSQL, WebSockets, Linux NAS</p>
                  <ul className="list-disc pl-4 space-y-1 mt-2 text-slate-300 light:text-slate-700">
                    <li>Architected full-stack trading application enabling students and UAE community members to swap books, electronics, and supplies without monetary transactions.</li>
                    <li>Grew to 100+ members, 110+ listings, and 12+ verified trades within 2 weeks of launch at $0 marketing spend.</li>
                    <li>Engineered a custom self-hosted Linux NAS server constructed from recycled PC hardware to eliminate cloud database fees, ensuring perpetual zero-cost community hosting.</li>
                  </ul>
                </div>

                {/* Reaper One */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] light:bg-slate-50 border border-white/[0.06] light:border-slate-200">
                  <div className="flex justify-between items-baseline font-bold text-white light:text-slate-900 text-sm">
                    <span>Reaper One — Multi-Protocol Handheld Hardware &amp; RF Instrument</span>
                    <span className="font-mono text-[11px] text-[#ff7e5d]">1.5 Year Physical Build</span>
                  </div>
                  <p className="font-mono text-[11px] text-[#ff7e5d] light:text-[#ea580c] mt-0.5">Hardware Engineer &amp; Firmware Developer · ESP32, C++, FreeRTOS, KiCad, CC1101, PN532</p>
                  <ul className="list-disc pl-4 space-y-1 mt-2 text-slate-300 light:text-slate-700">
                    <li>Engineered a standalone multi-protocol RF platform integrating Sub-GHz radio, NFC/RFID, IR transceivers, Wi-Fi, and Bluetooth LE into a single custom PCB.</li>
                    <li>Designed multi-layer schematics, surface-mount soldering, and 3D CAD enclosure, multiplexing SPI, I2C, and GPIO buses under tight physical constraints.</li>
                    <li>Authored 100% custom asynchronous C++ firmware utilizing FreeRTOS tasks to drive a responsive menu-driven OLED display interface.</li>
                  </ul>
                </div>

                {/* Pulso.ai & Manarat Al-Qurm */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-white/[0.03] light:bg-slate-50 border border-white/[0.06] light:border-slate-200">
                    <div className="font-bold text-white light:text-slate-900 text-xs">Pulso.ai — AI Healthcare Telemetry (UN SDG 3)</div>
                    <p className="text-[11px] text-pink-400 font-mono mt-0.5">Award-Winning · React, TypeScript, Recharts</p>
                    <p className="text-slate-300 light:text-slate-700 mt-1">
                      Synthesized lifestyle telemetry (sleep architecture, digital load, activity) into predictive health trajectories and preventative risk pattern analytics.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.03] light:bg-slate-50 border border-white/[0.06] light:border-slate-200">
                    <div className="font-bold text-white light:text-slate-900 text-xs">Manarat Al-Qurm — Smart Mangrove Buoy System</div>
                    <p className="text-[11px] text-cyan-400 font-mono mt-0.5">STM32WLE5, Sub-GHz LoRa, FastAPI</p>
                    <p className="text-slate-300 light:text-slate-700 mt-1">
                      Engineered autonomous floating buoy streaming 6-parameter Water Quality Indices over LoRa to Raspberry Pi with 48-hour AI forecasting running 100% offline.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership, Competitions & Honors */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#ff5d35] light:text-[#ea580c] font-bold mb-3 pb-1 border-b border-white/[0.1] light:border-slate-200 flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>05 // LEADERSHIP, COMPETITIONS &amp; EXTRACURRICULAR INVOLVEMENT</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <div className="p-2.5 rounded-lg bg-white/[0.02] light:bg-slate-50 border border-white/[0.05] light:border-slate-200">
                  <span className="font-bold text-white light:text-slate-900 block">ADIS Robotics Club Secretary</span>
                  <span className="text-slate-400 light:text-slate-600 font-mono">Elected Secretary · 3-Year Member · 2023–Present</span>
                  <p className="text-slate-300 light:text-slate-700 mt-0.5">Govern weekly club sessions, technical modules, member training, and competitive logistics.</p>
                </div>

                <div className="p-2.5 rounded-lg bg-white/[0.02] light:bg-slate-50 border border-white/[0.05] light:border-slate-200">
                  <span className="font-bold text-white light:text-slate-900 block">FIRST LEGO League (UNEARTHED) — Team Captain</span>
                  <span className="text-slate-400 light:text-slate-600 font-mono">1st Runner-Up Robot Game across Abu Dhabi · 2025–26</span>
                  <p className="text-slate-300 light:text-slate-700 mt-0.5">Directed chassis mechanical design, mission strategy, and autonomous sensor dead-reckoning.</p>
                </div>

                <div className="p-2.5 rounded-lg bg-white/[0.02] light:bg-slate-50 border border-white/[0.05] light:border-slate-200">
                  <span className="font-bold text-white light:text-slate-900 block">ADEK Cup Male Varsity Football Team</span>
                  <span className="text-slate-400 light:text-slate-600 font-mono">2-Year Starter · Current 2025–26 Campaign Active</span>
                  <p className="text-slate-300 light:text-slate-700 mt-0.5">Starting player in Abu Dhabi's premier inter-school tournament; national CBSE Cluster representation.</p>
                </div>

                <div className="p-2.5 rounded-lg bg-white/[0.02] light:bg-slate-50 border border-white/[0.05] light:border-slate-200">
                  <span className="font-bold text-white light:text-slate-900 block">Curtin University STEM Challenge (Dubai)</span>
                  <span className="text-slate-400 light:text-slate-600 font-mono">Top 12 Finalist Team · 2026</span>
                  <p className="text-slate-300 light:text-slate-700 mt-0.5">Developed engineering solution addressing regional environmental challenges.</p>
                </div>

                <div className="p-2.5 rounded-lg bg-white/[0.02] light:bg-slate-50 border border-white/[0.05] light:border-slate-200">
                  <span className="font-bold text-white light:text-slate-900 block">Model United Nations (MUN)</span>
                  <span className="text-slate-400 light:text-slate-600 font-mono">Official Committee Delegate · 2024–25</span>
                  <p className="text-slate-300 light:text-slate-700 mt-0.5">Multilateral diplomacy, policy negotiation, and resolution drafting.</p>
                </div>

                <div className="p-2.5 rounded-lg bg-white/[0.02] light:bg-slate-50 border border-white/[0.05] light:border-slate-200">
                  <span className="font-bold text-white light:text-slate-900 block">ADIS Speedcubing Championship</span>
                  <span className="text-slate-400 light:text-slate-600 font-mono">First Place Champion · 2022</span>
                  <p className="text-slate-300 light:text-slate-700 mt-0.5">1st Place in school-wide Rubik's Cube speedcubing tournament.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer Controls */}
          <div className="resume-modal-footer px-6 py-3.5 border-t border-white/[0.08] light:border-slate-200 bg-white/[0.02] light:bg-slate-50 flex items-center justify-between no-print">
            <span className="text-xs font-mono text-slate-400 light:text-slate-600 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>ATS Standard Format · Ready for Application Portals</span>
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyText}
                className="px-3.5 py-2 rounded-xl text-xs font-mono font-semibold bg-white/[0.05] light:bg-slate-200 hover:bg-white/[0.1] text-slate-200 light:text-slate-800 border border-white/[0.1] light:border-slate-300 transition-colors flex items-center gap-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied ATS Text!' : 'Copy Text'}</span>
              </button>

              <button
                onClick={handlePrint}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#ff5d35] to-[#f97316] text-white hover:brightness-110 flex items-center gap-2 shadow-md shadow-[#ff5d35]/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save as PDF</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
