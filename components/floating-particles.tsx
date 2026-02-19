'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useIsMobile } from '@/lib/hooks';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export function FloatingParticles() {
  const isMobile = useIsMobile();
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Reduce particles on mobile or skip entirely
    if (isMobile) return;

    const generateParticles = () => {
      const newParticles: Particle[] = [];
      // Reduced from 20 to 12 for better performance
      const particleCount = 12;
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 2,
          duration: Math.random() * 8 + 12,
          delay: Math.random() * 5,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, [isMobile]);

  // Skip rendering on mobile
  if (isMobile) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 opacity-25" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', contain: 'layout style paint', zIndex: -10 }}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: 'radial-gradient(circle, rgba(255,204,7,0.6) 0%, rgba(255,204,7,0.1) 100%)',
            willChange: 'transform, opacity',
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
