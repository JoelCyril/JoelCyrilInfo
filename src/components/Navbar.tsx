import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Moon, Sun, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDarkMode,
  onToggleTheme
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Awards', href: '#awards' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'projects', 'skills', 'awards', 'certificates', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-[#09090b]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#top"
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white group"
          aria-label="Joel Cyril — Home"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5d35] shadow-[0_0_10px_#ff5d35] group-hover:scale-125 transition-transform" />
          <span className="tracking-tight text-white font-mono">
            joel<span className="text-[#ff5d35]">.</span>cyril
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] uppercase font-mono font-semibold tracking-wider rounded-full bg-white/[0.06] text-slate-300 border border-white/[0.08]">
            Student &middot; Builder
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 bg-white/[0.03] border border-white/[0.08] px-3.5 py-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-3 py-1.5 text-xs lg:text-sm font-medium transition-colors rounded-full ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-white/[0.1] rounded-full border border-white/[0.15]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-2 text-slate-400 hover:text-white rounded-full bg-white/[0.04] border border-white/[0.08] transition-colors"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-200" />}
          </button>

          {/* Resume Download CTA */}
          <a
            href="/Joel_Thomas_Cyril_CV.pdf"
            download="Joel_Thomas_Cyril_CV.pdf"
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-gradient-to-r from-[#ff5d35] to-[#f97316] text-white hover:brightness-110 shadow-[0_0_20px_-3px_rgba(255,93,53,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            title="Download ATS Compliant CV (PDF)"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CV</span>
            <ArrowUpRight className="w-3 h-3 opacity-80" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="p-2 text-slate-400 hover:text-white rounded-full bg-white/[0.04] border border-white/[0.08]"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-200" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg bg-white/[0.05] border border-white/[0.08]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-white/[0.08] bg-[#0c0c10]/95 backdrop-blur-2xl px-6 py-6"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-base font-medium text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2">
                <a
                  href="/Joel_Thomas_Cyril_CV.pdf"
                  download="Joel_Thomas_Cyril_CV.pdf"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-[#ff5d35] to-[#f97316] text-white shadow-md shadow-[#ff5d35]/25"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV (PDF)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
