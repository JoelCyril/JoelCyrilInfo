import React, { useState, useEffect } from 'react';
import { ConstellationBackground } from './components/ConstellationBackground';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Awards } from './components/Awards';
import { CertificatesGallery } from './components/CertificatesGallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [activePhotoId, setActivePhotoId] = useState<number | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Sync dark class on html root
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDarkMode]);

  return (
    <div className={`relative min-h-screen selection:bg-[#ff5d35]/30 selection:text-white transition-colors duration-300 ${
      isDarkMode ? 'bg-[#09090b] text-slate-100' : 'bg-[#f8fafc] text-slate-900'
    }`}>
      {/* Interactive Constellation Particle Canvas */}
      <ConstellationBackground accentColor="#ff5d35" />

      {/* Trailing Custom Cursor (Desktop Only) */}
      <CustomCursor />

      {/* Sticky Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
      />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Awards onOpenPhoto={(id) => setActivePhotoId(id)} />
        <CertificatesGallery onOpenCertificate={(id) => setActivePhotoId(id)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Lightbox Viewer for Certificates and Trophies */}
      <LightboxModal
        activeId={activePhotoId}
        onClose={() => setActivePhotoId(null)}
        onSelectId={(id) => setActivePhotoId(id)}
      />

      {/* Interactive Resume & Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default App;
