'use client';

import { motion } from 'framer-motion';
import { useIsMobile } from '@/lib/hooks';

export function AnimatedBackground() {
  const isMobile = useIsMobile();

  // Disable on mobile for better performance
  if (isMobile) {
    return null;
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', contain: 'layout style paint', zIndex: -10 }}>
      {/* Optimized gradient orbs - reduced blur and simplified animations */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(255,204,7,0.3) 0%, transparent 70%)',
          top: '10%',
          left: '10%',
          filter: 'blur(80px)',
          willChange: 'transform',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(255,165,0,0.25) 0%, transparent 70%)',
          top: '50%',
          right: '10%',
          filter: 'blur(90px)',
          willChange: 'transform',
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Static grid pattern - no animation needed */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,204,7,0.08) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,204,7,0.08) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
}
