'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ text, className = '', delay = 0 }: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const words = text.split(' ');

  return (
    <motion.div ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={isInView ? { 
            opacity: 1, 
            y: 0,
            filter: "blur(0px)"
          } : {}}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.05,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

export function CharacterReveal({ text, className = '', delay = 0 }: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div ref={ref} className={className}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.03,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
}
