"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export function AboutTeacher() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const [countedValue, setCountedValue] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

          // Check if stats are visible
          if (statsRef.current && !statsVisible) {
            const statsRect = statsRef.current.getBoundingClientRect();
            if (statsRect.top < windowHeight * 0.8 && statsRect.bottom > 0) {
              setStatsVisible(true);
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [statsVisible]);

  // Counter animation effect
  useEffect(() => {
    if (!statsVisible) return;

    let startTime: number;
    const duration = 2000; // 2 seconds
    const targetValue = 1000;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (easeOutCubic)
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easedProgress * targetValue);

      setCountedValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [statsVisible]);

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
      {/* Animated geometric background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {[...Array(6)].map((_, i) => (
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
                className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent blur-xl"
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
              <div className="relative h-[500px] lg:h-[600px] group">
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
                      alt="Dilini Weerakkody - Expert Science Teacher"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                      priority
                    />
                  </div>

                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-yellow-500/30 via-transparent to-transparent"
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
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-500 to-yellow-600"
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

              {/* Decorative stats or highlights */}
              <div
                ref={statsRef}
                className="grid grid-cols-3 gap-4 pt-8"
                style={{
                  opacity: Math.max(0, (scrollProgress - 0.5) * 2),
                  transform: `translateY(${Math.max(0, (1 - scrollProgress) * 30)}px)`,
                  transition:
                    "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease-out",
                }}
              >
                <style>{`
                  @keyframes shimmer {
                    0% {
                      transform: translateX(-100%) translateY(-100%) rotate(45deg);
                    }
                    100% {
                      transform: translateX(300%) translateY(300%) rotate(45deg);
                    }
                  }

                  @keyframes pulseGlow {
                    0%, 100% {
                      box-shadow: 0 0 20px rgba(234, 179, 8, 0.2), 
                                  0 0 40px rgba(234, 179, 8, 0.1),
                                  inset 0 0 20px rgba(234, 179, 8, 0.05);
                    }
                    50% {
                      box-shadow: 0 0 30px rgba(234, 179, 8, 0.4), 
                                  0 0 60px rgba(234, 179, 8, 0.2),
                                  inset 0 0 30px rgba(234, 179, 8, 0.1);
                    }
                  }

                  @keyframes float {
                    0%, 100% {
                      transform: translateY(0px);
                    }
                    50% {
                      transform: translateY(-10px);
                    }
                  }

                  @keyframes scaleIn {
                    0% {
                      transform: scale(0.5) rotate(-10deg);
                      opacity: 0;
                    }
                    60% {
                      transform: scale(1.1) rotate(5deg);
                    }
                    100% {
                      transform: scale(1) rotate(0deg);
                      opacity: 1;
                    }
                  }

                  .stat-card {
                    position: relative;
                    overflow: hidden;
                    animation: pulseGlow 3s ease-in-out infinite;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                  }

                  .stat-card::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: linear-gradient(
                      45deg,
                      transparent 30%,
                      rgba(255, 255, 255, 0.3) 50%,
                      transparent 70%
                    );
                    animation: shimmer 3s infinite;
                  }

                  .stat-card::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(
                      circle at center,
                      rgba(234, 179, 8, 0.1) 0%,
                      transparent 70%
                    );
                    opacity: 0;
                    transition: opacity 0.4s ease;
                  }

                  .stat-card:hover {
                    transform: translateY(-12px) scale(1.05);
                    animation: float 2s ease-in-out infinite;
                    box-shadow: 0 20px 40px rgba(234, 179, 8, 0.3), 
                                0 10px 20px rgba(0, 0, 0, 0.2),
                                inset 0 0 40px rgba(234, 179, 8, 0.15);
                    border-color: rgba(234, 179, 8, 0.5);
                  }

                  .stat-card:hover::after {
                    opacity: 1;
                  }

                  .stat-card:hover .stat-value {
                    transform: scale(1.2);
                    text-shadow: 0 0 20px rgba(234, 179, 8, 0.5),
                                 0 0 40px rgba(234, 179, 8, 0.3);
                  }

                  .stat-card:hover .stat-label {
                    color: #eab308;
                  }

                  .stat-value {
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    display: inline-block;
                  }

                  .stat-label {
                    transition: color 0.4s ease;
                  }

                  .stat-card-animated {
                    animation: scaleIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                  }
                `}</style>
                {[
                  { label: "Experience", value: "Years", hasCounter: false },
                  { label: "Students", value: "1000+", hasCounter: true },
                  {
                    label: "Excellence",
                    value: "Top Rated",
                    hasCounter: false,
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`stat-card text-center p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/10 backdrop-blur-sm ${statsVisible ? "stat-card-animated" : ""}`}
                    style={{
                      animationDelay: statsVisible ? `${index * 0.15}s` : "0s",
                      opacity: statsVisible ? 1 : 0,
                    }}
                  >
                    <div className="stat-value text-2xl font-bold text-yellow-600">
                      {stat.hasCounter && statsVisible
                        ? `${countedValue}+`
                        : stat.value}
                    </div>
                    <div className="stat-label text-sm text-muted-foreground mt-1">
                      {stat.label}
                    </div>
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
