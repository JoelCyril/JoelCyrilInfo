import React, { useEffect, useRef } from 'react';

interface ConstellationBackgroundProps {
  accentColor?: string;
}

export const ConstellationBackground: React.FC<ConstellationBackgroundProps> = ({
  accentColor = '#ff5d35'
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let isVisible = true;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mouse = { x: -9999, y: -9999, active: false };

    // Hex to rgb helper
    const hexToRgb = (hex: string) => {
      const sanitized = hex.replace('#', '');
      const num = parseInt(sanitized, 16);
      return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
    };
    const [r, g, b] = hexToRgb(accentColor);
    const rgba = (alpha: number) => `rgba(${r}, ${g}, ${b}, ${alpha})`;

    const dotCount = 75;
    const dots = Array.from({ length: dotCount }, (_, i) => ({
      x: ((i * 0.61803398875 + 0.05) % 1),
      y: ((i * 0.38196601125 + 0.15) % 1),
      baseX: 0,
      baseY: 0,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      phase: i * 2.1,
      radius: i % 8 === 0 ? 2.4 : i % 3 === 0 ? 1.6 : 1.0
    }));

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    handleResize();

    const handlePointerMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handlePointerLeave = () => {
      mouse.active = false;
    };

    const handleVisibility = () => {
      isVisible = !document.hidden;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave, { passive: true });
    document.addEventListener('visibilitychange', handleVisibility);

    const render = (time: number) => {
      if (!isVisible) {
        animId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // 1. Futuristic Ambient Glow
      const ambient = ctx.createRadialGradient(
        width * 0.75,
        height * 0.25,
        20,
        width * 0.75,
        height * 0.25,
        Math.max(width, height) * 0.8
      );
      ambient.addColorStop(0, rgba(0.06));
      ambient.addColorStop(0.5, rgba(0.02));
      ambient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = ambient;
      ctx.fillRect(0, 0, width, height);

      // Cyan secondary glow in bottom-left
      const cyanGlow = ctx.createRadialGradient(
        width * 0.2,
        height * 0.8,
        10,
        width * 0.2,
        height * 0.8,
        Math.max(width, height) * 0.6
      );
      cyanGlow.addColorStop(0, 'rgba(6, 182, 212, 0.04)');
      cyanGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = cyanGlow;
      ctx.fillRect(0, 0, width, height);

      // 2. Subtle Grid overlay
      const gridSize = 56;
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
      ctx.beginPath();
      for (let x = 0; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // 3. Mouse spotlight glow
      if (mouse.active) {
        const mouseSpot = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          240
        );
        mouseSpot.addColorStop(0, rgba(0.12));
        mouseSpot.addColorStop(0.4, rgba(0.03));
        mouseSpot.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = mouseSpot;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 240, 0, Math.PI * 2);
        ctx.fill();
      }

      // 4. Update and paint nodes
      const seconds = time * 0.001;
      const positions: { x: number; y: number }[] = [];

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        let px = dot.x * width;
        let py = dot.y * height;

        if (!prefersReducedMotion) {
          px += Math.sin(seconds * 0.35 + dot.phase) * 12;
          py += Math.cos(seconds * 0.28 + dot.phase) * 10;
        }

        // Mouse interaction
        let intensity = 0;
        if (mouse.active) {
          const dx = px - mouse.x;
          const dy = py - mouse.y;
          const dist = Math.hypot(dx, dy);
          const maxDist = 160;

          if (dist < maxDist && dist > 0.01) {
            intensity = 1 - dist / maxDist;
            const push = intensity * 22;
            px += (dx / dist) * push;
            py += (dy / dist) * push;

            // Connect mouse to node
            ctx.beginPath();
            ctx.strokeStyle = rgba(intensity * 0.28);
            ctx.lineWidth = intensity * 1.2;
            ctx.moveTo(px, py);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }

        positions.push({ x: px, y: py });

        // Draw dot
        const pulse = prefersReducedMotion ? 1 : 0.85 + Math.sin(seconds * 1.5 + dot.phase) * 0.15;
        ctx.beginPath();
        ctx.arc(px, py, dot.radius * (1 + intensity * 0.5), 0, Math.PI * 2);
        ctx.fillStyle = rgba((0.2 + intensity * 0.6) * pulse);
        ctx.fill();
      }

      // 5. Connect nearest neighbor constellation lines
      ctx.lineWidth = 0.5;
      const connectionDist = 110;
      for (let i = 0; i < positions.length; i++) {
        for (let j = i + 1; j < positions.length; j++) {
          const p1 = positions[i];
          const p2 = positions[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.12;
            ctx.beginPath();
            ctx.strokeStyle = rgba(alpha);
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [accentColor]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-85 transition-opacity duration-1000"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />
    </div>
  );
};
