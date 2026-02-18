'use client';

import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeInUp, scaleIn, staggerContainer, staggerItem, defaultViewport } from '@/lib/animations';

export function Features() {
  const [isHovered, setIsHovered] = useState(false);
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <motion.section 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={staggerContainer}
    >
      {/* Floating Background Shapes with Parallax */}
      <motion.div 
        className="absolute top-10% left-5% w-150 h-150 rounded-full pointer-events-none"
        style={{ 
          y: y1,
          background: 'radial-gradient(circle, rgba(255, 204, 7, 0.1) 0%, transparent 70%)'
        }}
      />
      <motion.div 
        className="absolute top-60% right-10% w-100 h-100 rounded-full pointer-events-none"
        style={{ 
          y: y2,
          background: 'radial-gradient(circle, rgba(255, 204, 7, 0.15) 0%, transparent 70%)'
        }}
      />
      <motion.div 
        className="absolute bottom-10% left-50% w-200 h-200 rounded-full pointer-events-none"
        style={{ 
          y: y1,
          background: 'radial-gradient(circle, rgba(255, 204, 7, 0.08) 0%, transparent 70%)'
        }}
      />
      
      <div className="max-w-4xl mx-auto relative">
        <motion.div 
          className="flex flex-col items-center text-center space-y-8 relative"
          variants={staggerContainer}
        >
          {/* Sparkle Effects with Motion */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, #FFCC07 0%, transparent 70%)',
                top: i % 2 === 0 ? '10%' : '80%',
                left: i < 2 ? '15%' : '85%'
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5
              }}
            />
          ))}

          {/* Medal/Badge Logo */}
          <motion.div
            variants={scaleIn}
            whileHover={{ 
              scale: 1.2, 
              rotate: 360,
              filter: "drop-shadow(0 25px 50px rgba(255, 204, 7, 0.6))"
            }}
            transition={{ duration: 0.6 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              filter: "drop-shadow(0 15px 30px rgba(255, 204, 7, 0.4))",
              position: 'relative'
            }}
          >
            {/* Pulsing rings */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-45 h-45 border-3 border-yellow-400/30 rounded-full"
              style={{ transform: 'translate(-50%, -50%)' }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.8, 0.4, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 w-55 h-55 border-2 border-yellow-400/20 rounded-full"
              style={{ transform: 'translate(-50%, -50%)' }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.8, 0.4, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
            <svg 
              width="140" 
              height="160" 
              viewBox="0 0 140 160" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Ribbon Left */}
              <path
                d="M35 50 L25 90 L45 80 L50 70 Z"
                fill="url(#ribbonGradient)"
              />
              {/* Ribbon Right */}
              <path
                d="M105 50 L115 90 L95 80 L90 70 Z"
                fill="url(#ribbonGradient)"
              />
              {/* Outer Circle Ring */}
              <circle
                cx="70"
                cy="60"
                r="42"
                fill="url(#goldGradient)"
                stroke="#D97706"
                strokeWidth="2"
              />
              {/* Inner Circle */}
              <circle
                cx="70"
                cy="60"
                r="35"
                fill="url(#yellowGradient)"
                stroke="#F59E0B"
                strokeWidth="2"
              />
              {/* Number 1 */}
              <text
                x="70"
                y="75"
                fontSize="48"
                fontWeight="bold"
                textAnchor="middle"
                fill="#1F2937"
                fontFamily="Arial, sans-serif"
              >
                1
              </text>
              
              {/* Gradients */}
              <defs>
                <linearGradient id="ribbonGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#DC2626" />
                  <stop offset="50%" stopColor="#EF4444" />
                  <stop offset="100%" stopColor="#DC2626" />
                </linearGradient>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FCD34D" />
                  <stop offset="50%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#D97706" />
                </linearGradient>
                <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FEF3C7" />
                  <stop offset="50%" stopColor="#FDE047" />
                  <stop offset="100%" stopColor="#FACC15" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Results Title with decorative lines */}
          <motion.div
            variants={staggerItem}
            className="relative"
          >
            <motion.h3 
              className="text-5xl sm:text-6xl font-black relative inline-block"
              style={{
                background: 'linear-gradient(135deg, #FFCC07 0%, #F59E0B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              <motion.span
                className="absolute right-full top-1/2 w-15 h-0.5 mr-5 -translate-y-1/2"
                style={{
                  background: 'linear-gradient(90deg, transparent, #FFCC07, transparent)'
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
              Results
              <motion.span
                className="absolute left-full top-1/2 w-15 h-0.5 ml-5 -translate-y-1/2"
                style={{
                  background: 'linear-gradient(90deg, transparent, #FFCC07, transparent)'
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </motion.h3>
          </motion.div>

          {/* Results Description */}
          <motion.div 
            className="max-w-2xl"
            variants={staggerItem}
          >
            <motion.p 
              className="text-xl sm:text-2xl text-foreground/90 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={defaultViewport}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Consistent academic excellence with improved student performance scores
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
