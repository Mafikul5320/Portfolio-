'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  hue: number;
  life: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationId: number;

    const particles: Particle[] = [];
    const particleCount = 80;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.6 + 0.2,
      hue: Math.random() * 60 + 260,
      life: Math.random() * 100 + 100
    });

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle());
      }
    };

    const updateParticles = () => {
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        if (particle.life <= 0) {
          particles[index] = createParticle();
        }

        particle.opacity = Math.sin(Date.now() * 0.001 + index) * 0.3 + 0.4;
      });
    };

    const drawParticles = () => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      if (isDark) {
        gradient.addColorStop(0, 'rgba(17, 24, 39, 0.95)');
        gradient.addColorStop(0.5, 'rgba(31, 41, 55, 0.98)');
        gradient.addColorStop(1, 'rgba(17, 24, 39, 0.95)');
      } else {
        gradient.addColorStop(0, 'rgba(249, 250, 251, 0.95)');
        gradient.addColorStop(0.5, 'rgba(243, 244, 246, 0.98)');
        gradient.addColorStop(1, 'rgba(249, 250, 251, 0.95)');
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach(particle2 => {
          const dx = particle1.x - particle2.x;
          const dy = particle1.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            
            const opacity = (1 - distance / 120) * 0.15;
            if (isDark) {
              ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
            } else {
              ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
            }
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        const particleGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        
        if (isDark) {
          particleGradient.addColorStop(0, `hsla(${particle.hue}, 70%, 60%, ${particle.opacity})`);
          particleGradient.addColorStop(1, `hsla(${particle.hue}, 70%, 60%, 0)`);
        } else {
          particleGradient.addColorStop(0, `hsla(${particle.hue}, 60%, 50%, ${particle.opacity * 0.8})`);
          particleGradient.addColorStop(1, `hsla(${particle.hue}, 60%, 50%, 0)`);
        }
        
        ctx.fillStyle = particleGradient;
        ctx.fill();
      });

      const time = Date.now() * 0.001;
      for (let i = 0; i < 3; i++) {
        const x = canvas.width * 0.2 + Math.sin(time + i * 2) * 100;
        const y = canvas.height * 0.3 + Math.cos(time * 0.7 + i * 2) * 80;
        const size = 40 + Math.sin(time + i) * 10;
        
        const orbGradient = ctx.createRadialGradient(x, y, 0, x, y, size);
        if (isDark) {
          orbGradient.addColorStop(0, 'rgba(139, 92, 246, 0.1)');
          orbGradient.addColorStop(1, 'rgba(139, 92, 246, 0)');
        } else {
          orbGradient.addColorStop(0, 'rgba(99, 102, 241, 0.08)');
          orbGradient.addColorStop(1, 'rgba(99, 102, 241, 0)');
        }
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = orbGradient;
        ctx.fill();
      }
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: isDark ? 0.6 : 0.4 }}
    />
  );
};

export default ParticleBackground;
