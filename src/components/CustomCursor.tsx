import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth springs for trailing circle
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isPointerFine = window.matchMedia('(pointer: fine)').matches;
    if (!isPointerFine) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Detect clickable elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isClickable = !!target.closest('button, a, input, textarea, [data-cursor-hover]');
      setIsHovered(isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleElementHover, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleElementHover);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden hidden md:block">
      {/* Outer trailing aura */}
      <motion.div
        className="absolute rounded-full border border-[#ff5d35]/60 bg-[#ff5d35]/10 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          width: isHovered ? 48 : 26,
          height: isHovered ? 48 : 26,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 250 }}
      />
      {/* Center pinpoint */}
      <motion.div
        className="absolute w-1.5 h-1.5 rounded-full bg-[#ff5d35] -translate-x-1/2 -translate-y-1/2 pointer-events-none shadow-[0_0_8px_#ff5d35]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
    </div>
  );
};
