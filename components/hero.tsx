"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem, floatAnimation } from "@/lib/animations";
import { MagneticButton } from "@/components/magnetic-button";
import { TextReveal } from "@/components/text-reveal";
import { useIsMobile } from "@/lib/hooks";
import { GridScan } from "@/components/grid-scan";
import { useState, useEffect } from "react";

export function Hero() {
  const isMobile = useIsMobile();
  const [isGridReady, setIsGridReady] = useState(false);

  // Delay GridScan initialization slightly on desktop to prevent white flash
  useEffect(() => {
    // On mobile, load immediately. On desktop, slight delay to ensure background is painted first
    const delay = isMobile ? 0 : 50;
    const timer = setTimeout(() => {
      setIsGridReady(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [isMobile]);

  return (
    <section
      id="home"
      className="min-h-screen pt-36 sm:pt-20 pb-8 sm:pb-12 px-3 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden"
      style={{ 
        contain: 'layout style paint', 
        backgroundColor: '#000032',
        background: 'linear-gradient(180deg, #000032 0%, #0a0520 100%)'
      }}
    >
      {/* Solid background layer - always visible */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundColor: '#000032',
          background: 'linear-gradient(180deg, #000032 0%, #0a0520 100%)',
          pointerEvents: 'none'
        }}
      />
      
      {/* GridScan Background Animation - Loads after initial render */}
      {isGridReady && (
        <div className="absolute inset-0 z-0" style={{ pointerEvents: 'none', opacity: 0, animation: 'fadeIn 0.6s ease-out 0.2s forwards' }}>
          <GridScan
            sensitivity={isMobile ? 0.3 : 0.45}
            lineThickness={isMobile ? 0.8 : 1}
            linesColor="#392e4e"
            gridScale={isMobile ? 0.15 : 0.1}
            scanColor="#FF9FFC"
            scanOpacity={isMobile ? 0.25 : 0.35}
            enablePost={false}
            bloomIntensity={0}
            chromaticAberration={0}
            noiseIntensity={0.005}
          />
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Content */}
          <motion.div 
            className="flex flex-col justify-center space-y-4 sm:space-y-6 md:space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={staggerItem}>
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight text-balance"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                Science with Dilini Weerakkody
              </motion.h1>
            </motion.div>

            <motion.div className="space-y-2 sm:space-y-3" variants={staggerItem}>
              {/* <p className="text-lg sm:text-xl text-foreground font-semibold">
                Grades 6 – 11 | English Medium
              </p> */}
              <p className="text-lg sm:text-xl text-foreground font-semibold">
                English Medium Science Classes | Grades 6 – 11
              </p>
              {/* <p className="text-base sm:text-lg text-muted-foreground font-medium">
                Science Classes
              </p> */}
              <p className="text-base sm:text-lg text-muted-foreground font-medium leading-relaxed">
                Expert Tuition at{" "}
                <span className="font-semibold text-foreground">
                  Sunray (Galle)
                </span>
                ,
                <span className="font-semibold text-foreground">
                  {" "}
                  Zigma (Baddegama)
                </span>
                , and
                <span className="font-semibold text-foreground">
                  {" "}
                  Princeton College (Hirimbura)
                </span>
                .
              </p>
              {/* Only for screen readers */}
              <span className="sr-only">
                Best science teacher in Galle and Baddegama for O/L students.
              </span>
            </motion.div>

            <motion.div variants={staggerItem}>
              <MagneticButton
                className="px-6 py-4 sm:px-8 sm:py-6 text-sm sm:text-base font-bold rounded-md transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,204,7,0.6)] relative overflow-hidden group touch-manipulation w-full sm:w-auto"
                style={{ backgroundColor: "#FFCC07", color: "#000000" }}
                onClick={() => {
                  document
                    .getElementById("process")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                />
                <span className="relative z-10 flex items-center">
                  Our Process
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="inline-block ml-1.5 sm:ml-2"
                  >
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.span>
                </span>
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right Logo */}
          <motion.div
            className="relative flex items-center justify-center order-first md:order-last h-64 sm:h-80 md:h-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <motion.div
              className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-md lg:max-w-lg aspect-square"
              style={{
                filter:
                  "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 40px rgba(255, 204, 7, 0.4))",
              }}
              animate={floatAnimation}
            >
              <Image
                src="/logo.png"
                alt="Science with Dilini Weerakkody Logo"
                width={500}
                height={500}
                className="w-full h-full object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
