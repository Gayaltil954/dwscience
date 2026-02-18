'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFCC07] via-[#FFA500] to-[#FFCC07] origin-left z-[100]"
        style={{ scaleX }}
      />
      
      {/* Bottom glow effect */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 blur-md bg-gradient-to-r from-[#FFCC07] via-[#FFA500] to-[#FFCC07] origin-left z-[99]"
        style={{ scaleX, opacity: 0.5 }}
      />
    </>
  );
}
