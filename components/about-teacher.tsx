"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useIsMobile } from "@/lib/hooks";
import LiquidEther from "./liquid-ether";

export function AboutTeacher() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Simplify/disable scroll animations on mobile for better performance
    if (isMobile) {
      setScrollProgress(1);
      return;
    }

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) {
            ticking = false;
            return;
          }

          const rect = sectionRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // Calculate smooth progress
          const visibleHeight =
            Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
          const visibilityRatio = visibleHeight / rect.height;
          const progress = Math.max(0, Math.min(1, visibilityRatio * 2.5));

          setScrollProgress(progress);

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden"
      style={{
        willChange:
          scrollProgress > 0 && scrollProgress < 1 ? "transform" : "auto",
      }}
    >
      {/* LiquidEther Background Animation - Disabled on mobile for performance */}
      {!isMobile && (
        <div className="absolute inset-0 z-0" style={{ pointerEvents: 'none' }}>
          <LiquidEther
            colors={['#5227FF', '#FF9FFC', '#B19EEF']}
            mouseForce={15}
            cursorSize={80}
            isViscous
            viscous={20}
            iterationsViscous={12}
            iterationsPoisson={12}
            resolution={0.3}
            isBounce={false}
            autoDemo
            autoSpeed={0.4}
            autoIntensity={1.8}
            takeoverDuration={0.2}
            autoResumeDelay={3000}
            autoRampDuration={0.5}
          />
        </div>
      )}

      {/* Animated geometric background - Reduced on mobile */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-1">
        {[...Array(isMobile ? 3 : 6)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-yellow-500/20"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${20 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
              borderRadius: i % 2 === 0 ? "50%" : "0",
              transform: `rotate(${i * 15 + scrollProgress * 360}deg) scale(${0.5 + scrollProgress * 0.5})`,
              opacity: scrollProgress * 0.4,
              willChange:
                scrollProgress > 0 && scrollProgress < 1
                  ? "transform, opacity"
                  : "auto",
              transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Main Content Container */}
        <div className="relative">
          {/* Title - Fixed position with morphing effect */}
          <div
            className="mb-16 text-center"
            style={{
              transform: `translateY(${(1 - scrollProgress) * 200}px) scale(${0.6 + scrollProgress * 0.4})`,
              opacity: scrollProgress,
              filter: `blur(${(1 - scrollProgress) * 15}px)`,
              willChange:
                scrollProgress > 0 && scrollProgress < 1
                  ? "transform, opacity, filter"
                  : "auto",
              transition:
                "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease-out, filter 0.6s ease-out",
            }}
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground relative inline-block">
              <span className="relative z-10">About Me</span>
              <div
                className="absolute inset-0 bg-linear-to-r from-yellow-500/20 to-transparent blur-xl"
                style={{
                  transform: `scaleX(${scrollProgress * 2})`,
                  opacity: scrollProgress * 0.5,
                }}
              />
            </h2>
          </div>

          {/* Content Grid - Staggered reveal */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Left Side - Image with 3D perspective */}
            <div
              className="lg:col-span-2 relative"
              style={{
                transform: `perspective(1500px) rotateY(${(1 - scrollProgress) * 45}deg) translateX(${(1 - scrollProgress) * -200}px)`,
                opacity: scrollProgress,
                transformStyle: "preserve-3d",
                transition:
                  "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease-out",
              }}
            >
              {/* Main image container */}
              <div className="relative h-125 lg:h-150 group">
                {/* Layered shadow effect */}
                <div
                  className="absolute inset-0 bg-yellow-500/20 rounded-3xl blur-2xl"
                  style={{
                    transform: `translate(${-40 + scrollProgress * 40}px, ${40 - scrollProgress * 40}px) scale(${0.8 + scrollProgress * 0.2})`,
                    opacity: scrollProgress * 0.6,
                    transition:
                      "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease-out",
                  }}
                />

                {/* Image frame with clip-path animation */}
                <div
                  className="relative h-full rounded-3xl overflow-hidden"
                  style={{
                    clipPath: `polygon(
                      ${scrollProgress * 100}% 0%, 
                      100% 0%, 
                      100% ${scrollProgress * 100}%, 
                      100% 100%, 
                      ${100 - scrollProgress * 100}% 100%, 
                      0% 100%, 
                      0% ${100 - scrollProgress * 100}%, 
                      0% 0%
                    )`,
                    boxShadow: `0 ${scrollProgress * 40}px ${scrollProgress * 80}px rgba(0, 0, 0, ${scrollProgress * 0.4})`,
                    transition:
                      "clip-path 0.8s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s ease-out",
                  }}
                >
                  {/* Zooming image */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      transform: `scale(${1.4 - scrollProgress * 0.4})`,
                      filter: `saturate(${0.7 + scrollProgress * 0.3}) contrast(${0.9 + scrollProgress * 0.1})`,
                      transition:
                        "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease-out",
                    }}
                  >
                    <Image
                      src="/Dilini-Weerakkody.jpeg"
                      alt="Dilini Weerakkody - Leading Science Teacher in Galle, Baddegama & Hirikumbura"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                      priority
                    />
                  </div>

                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 bg-linear-to-br from-yellow-500/30 via-transparent to-transparent"
                    style={{
                      opacity: (1 - scrollProgress) * 0.5,
                      mixBlendMode: "overlay",
                      transition: "opacity 0.6s ease-out",
                    }}
                  />
                </div>

                {/* Animated border elements */}
                <div
                  className="absolute -inset-2 border-4 border-yellow-500/40 rounded-3xl"
                  style={{
                    clipPath: `inset(0 ${100 - scrollProgress * 100}% 0 0)`,
                    transition: "clip-path 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
                <div
                  className="absolute -inset-2 border-4 border-yellow-500/40 rounded-3xl"
                  style={{
                    clipPath: `inset(0 0 0 ${100 - scrollProgress * 100}%)`,
                    transition: "clip-path 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
              </div>

              {/* Floating accent elements */}
              <div
                className="absolute -z-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl"
                style={{
                  right: "-10%",
                  top: "10%",
                  transform: `translate(${(1 - scrollProgress) * 150}px, ${(1 - scrollProgress) * -150}px) scale(${scrollProgress})`,
                  opacity: scrollProgress * 0.6,
                  transition:
                    "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease-out",
                }}
              />
              <div
                className="absolute -z-10 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl"
                style={{
                  left: "-10%",
                  bottom: "10%",
                  transform: `translate(${(1 - scrollProgress) * -150}px, ${(1 - scrollProgress) * 150}px) scale(${scrollProgress})`,
                  opacity: scrollProgress * 0.6,
                  transition:
                    "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease-out",
                }}
              />
            </div>

            {/* Right Side - Text content with cascading reveal */}
            <div
              className="lg:col-span-3 space-y-8"
              style={{
                transform: `translateX(${(1 - scrollProgress) * 200}px)`,
                opacity: scrollProgress,
                transition:
                  "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease-out",
              }}
            >
              {/* Bio paragraphs with staggered animations */}
              <div className="space-y-6">
                {[
                  "Dilini Weerakkody is a dedicated science educator with years of experience in transforming how students understand and appreciate scientific concepts. With a passion for innovative teaching methodologies and student-centered learning, she has consistently delivered exceptional academic results.",
                  "Her approach combines traditional pedagogical excellence with modern educational techniques, creating an environment where students not only learn but truly understand the beauty of science. Dilini believes that every student has the potential to excel when given the right guidance and support.",
                ].map((text, index) => (
                  <div
                    key={index}
                    className="relative"
                    style={{
                      transform: `translateY(${Math.max(0, (1 - scrollProgress) * 80 - index * 30)}px)`,
                      opacity: Math.max(
                        0,
                        (scrollProgress - index * 0.15) * 1.5,
                      ),
                      transition:
                        "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease-out",
                    }}
                  >
                    {/* Sliding reveal line */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-yellow-500 to-yellow-600"
                      style={{
                        height: `${Math.min(100, Math.max(0, (scrollProgress - index * 0.15 - 0.1) * 300))}%`,
                        opacity: scrollProgress > index * 0.15 ? 1 : 0,
                        transition:
                          "height 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease-out",
                      }}
                    />

                    {/* Text content */}
                    <p
                      className="pl-6 text-lg text-muted-foreground leading-relaxed relative"
                      style={{
                        clipPath: `polygon(0 0, ${Math.min(100, Math.max(0, (scrollProgress - index * 0.15) * 200))}% 0, ${Math.min(100, Math.max(0, (scrollProgress - index * 0.15) * 200))}% 100%, 0 100%)`,
                        transition:
                          "clip-path 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    >
                      {text}
                    </p>
                  </div>
                ))}
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
