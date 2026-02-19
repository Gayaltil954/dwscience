'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, defaultViewport } from '@/lib/animations';
import { useIsMobile } from '@/lib/hooks';

export function Features() {
  const isMobile = useIsMobile();

  return (
    <motion.section 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={staggerContainer}
    >
      <div className="max-w-4xl mx-auto relative">
        <motion.div 
          className="flex flex-col items-center text-center space-y-8 relative"
          variants={staggerContainer}
        >
          {/* Medal Badge Icon */}
          <motion.div
            variants={staggerItem}
            whileHover={{ 
              scale: 1.1,
              rotate: 5,
              filter: "drop-shadow(0 20px 40px rgba(255, 204, 7, 0.5))"
            }}
            transition={{ duration: 0.4 }}
            style={{
              filter: "drop-shadow(0 10px 25px rgba(255, 204, 7, 0.3))"
            }}
          >
            <svg 
              width="120" 
              height="140" 
              viewBox="0 0 140 160" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35 50 L25 90 L45 80 L50 70 Z"
                fill="url(#ribbonGradient)"
              />
              <path
                d="M105 50 L115 90 L95 80 L90 70 Z"
                fill="url(#ribbonGradient)"
              />
              <circle
                cx="70"
                cy="60"
                r="42"
                fill="url(#goldGradient)"
                stroke="#D97706"
                strokeWidth="2"
              />
              <circle
                cx="70"
                cy="60"
                r="35"
                fill="url(#yellowGradient)"
                stroke="#F59E0B"
                strokeWidth="2"
              />
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
              {!isMobile && (
                <motion.span
                  className="absolute right-full top-1/2 w-15 h-0.5 mr-5 -translate-y-1/2"
                  style={{
                    background: 'linear-gradient(90deg, transparent, #FFCC07, transparent)',
                    transformOrigin: 'right'
                  }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={defaultViewport}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />
              )}
              Results
              {!isMobile && (
                <motion.span
                  className="absolute left-full top-1/2 w-15 h-0.5 ml-5 -translate-y-1/2"
                  style={{
                    background: 'linear-gradient(90deg, transparent, #FFCC07, transparent)',
                    transformOrigin: 'left'
                  }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={defaultViewport}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />
              )}
            </motion.h3>
          </motion.div>

          <motion.div 
            className="max-w-2xl"
            variants={staggerItem}
          >
            <p className="text-xl sm:text-2xl text-foreground/90 leading-relaxed font-medium">
              Consistent academic excellence with improved student performance scores
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
