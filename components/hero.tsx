"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Logo3D } from "@/components/logo-3d";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem, floatAnimation } from "@/lib/animations";
import { MagneticButton } from "@/components/magnetic-button";
import { TextReveal } from "@/components/text-reveal";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-background pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Periodic Table Background Effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ top: "80px" }}
      >
        <div
          className="w-full h-full p-2 opacity-10"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(60px, 1fr))",
            gridAutoRows: "minmax(60px, auto)",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          {[...Array(250)].map((_, i) => {
            const elements = [
              "H",
              "He",
              "Li",
              "Be",
              "B",
              "C",
              "N",
              "O",
              "F",
              "Ne",
              "Na",
              "Mg",
              "Al",
              "Si",
              "P",
              "S",
              "Cl",
              "Ar",
              "K",
              "Ca",
              "Fe",
              "Cu",
              "Zn",
              "Ag",
              "Au",
            ];
            return (
              <div
                key={i}
                className="border border-accent/20 rounded m-0.5 flex items-center justify-center"
              >
                <span className="text-accent font-bold text-xs">
                  {elements[i % elements.length]}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Content */}
          <motion.div 
            className="flex flex-col justify-center space-y-6 md:space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={staggerItem}>
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-tight text-balance"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                Science with Dilini Weerakkody
              </motion.h1>
            </motion.div>

            <motion.div className="space-y-3" variants={staggerItem}>
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
                  Prinstent (Hirikumbura)
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
                className="px-8 py-6 text-base font-bold rounded-md transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,204,7,0.6)] relative overflow-hidden group"
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
                    className="inline-block ml-2"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </span>
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right 3D Logo */}
          <motion.div
            className="relative flex items-center justify-center order-first md:order-last h-75 sm:h-100 md:h-auto"
            style={{ perspective: "1200px" }}
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <motion.div
              className="relative w-full max-w-70 sm:max-w-md md:max-w-6xl aspect-square"
              style={{
                transformStyle: "preserve-3d",
                filter:
                  "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 40px rgba(255, 204, 7, 0.4))",
              }}
              animate={floatAnimation}
            >
              <Logo3D variant="cylinder" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
