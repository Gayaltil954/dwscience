'use client';

import { useEffect, useRef, useState } from 'react';

export function Process() {
  const [visibleIcons, setVisibleIcons] = useState<Set<number>>(new Set());
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    { 
      title: 'Teaching', 
      description: 'Engaging theory lessons with clear explanations, diagrams, and examples, combined with interactive discussions to strengthen understanding and clarify doubts.',
      icon: (
        <svg viewBox="0 0 100 100" className="w-20 h-20">
          <path d="M20 30 L50 15 L80 30 L80 50 L50 65 L20 50 Z" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M50 65 L50 85 M35 80 L50 85 L65 80" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 35 L15 55" fill="none" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    { 
      title: 'Practical Classes', 
      description: 'Hands-on lab sessions where students conduct experiments, learn correct use of equipment, record observations, write lab reports, and follow proper safety procedures, preparing effectively for practical exams',
      icon: (
        <svg viewBox="0 0 100 100" className="w-20 h-20">
          <path d="M30 70 L30 50 Q30 35 40 30 L60 30 Q70 35 70 50 L70 70 Q70 80 60 85 L40 85 Q30 80 30 70" fill="none" strokeWidth="2" strokeLinecap="round" />
          <path d="M25 70 L75 70" fill="none" strokeWidth="2" strokeLinecap="round" />
          <circle cx="40" cy="25" r="3" fill="none" strokeWidth="2" />
          <circle cx="60" cy="25" r="3" fill="none" strokeWidth="2" />
          <path d="M35 40 Q40 35 45 40 M55 40 Q60 35 65 40" fill="none" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    { 
      title: 'Paper Classes', 
      description: 'Interactive sessions using past and model papers, teaching students how to structure answers, manage time, understand marking schemes, and develop strong exam techniques.',
      icon: (
        <svg viewBox="0 0 100 100" className="w-20 h-20">
          <path d="M25 15 L75 15 L75 85 L25 85 Z" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M35 30 L65 30 M35 45 L65 45 M35 60 L55 60" fill="none" strokeWidth="2" strokeLinecap="round" />
          <path d="M60 65 L65 70 L75 55" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    { 
      title: 'Paper Marking', 
      description: 'Careful correction of students answer scripts with clear feedback on strengths, mistakes, and strategies for improvement, helping students maximize their marks.',
      icon: (
        <svg viewBox="0 0 100 100" className="w-20 h-20">
          <path d="M30 20 L70 20 L70 80 L30 80 Z" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M40 35 L60 35 M40 50 L60 50 M40 65 L55 65" fill="none" strokeWidth="2" strokeLinecap="round" />
          <path d="M75 25 L85 15 M85 15 L85 25 M85 15 L75 15" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="85" cy="35" r="8" fill="none" strokeWidth="2" />
          <path d="M78 42 L92 42" fill="none" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    { 
      title: 'Revision & Exam Preparation', 
      description: 'Targeted revision, mock exams, and focused practice to strengthen weak areas, build confidence, and ensure students are fully prepared for upcoming tests and final exams.',
      icon: (
        <svg viewBox="0 0 100 100" className="w-20 h-20">
          <circle cx="50" cy="50" r="30" fill="none" strokeWidth="2" />
          <path d="M50 30 L50 50 L65 60" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="50" cy="50" r="3" strokeWidth="2" />
          <path d="M35 15 L40 20 M65 15 L60 20 M85 35 L80 40 M85 65 L80 60 M65 85 L60 80 M35 85 L40 80 M15 65 L20 60 M15 35 L20 40" fill="none" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    { 
      title: 'Concept Reinforcement', 
      description: 'Regular exercises, quizzes, and mini-projects to strengthen understanding of key concepts, connect theory with practice, and boost retention for exams.',
      icon: (
        <svg viewBox="0 0 100 100" className="w-20 h-20">
          <circle cx="25" cy="30" r="8" fill="none" strokeWidth="2" />
          <circle cx="50" cy="50" r="8" fill="none" strokeWidth="2" />
          <circle cx="75" cy="30" r="8" fill="none" strokeWidth="2" />
          <circle cx="50" cy="75" r="8" fill="none" strokeWidth="2" />
          <path d="M30 35 L45 45 M55 45 L70 35 M50 58 L50 67" fill="none" strokeWidth="2" strokeLinecap="round" />
          <path d="M40 20 L50 10 L60 20" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          setVisibleIcons((prev) => {
            const newSet = new Set(prev);
            if (entry.isIntersecting) {
              newSet.add(index);
            } else {
              newSet.delete(index);
            }
            return newSet;
          });
        });
      },
      { threshold: 0.3, rootMargin: '0px' }
    );

    iconRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <style>{`
        @keyframes drawPath {
          to {
            stroke-dashoffset: 0;
          }
        }
        
        @keyframes subtleFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes fadeInUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            transform: translateX(-50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes iconScale {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes gentleBounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes shimmerSubtle {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .icon-animated path,
        .icon-animated circle {
          stroke: #FFCC07;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
        }
        
        .icon-visible path,
        .icon-visible circle {
          animation: drawPath 1.2s ease-out forwards;
        }
        
        .icon-visible path:nth-child(1) { animation-delay: 0s; }
        .icon-visible path:nth-child(2) { animation-delay: 0.15s; }
        .icon-visible path:nth-child(3) { animation-delay: 0.3s; }
        .icon-visible path:nth-child(4) { animation-delay: 0.45s; }
        .icon-visible circle:nth-child(1) { animation-delay: 0s; }
        .icon-visible circle:nth-child(2) { animation-delay: 0.15s; }
        .icon-visible circle:nth-child(3) { animation-delay: 0.3s; }

        .glass-card {
          background: rgba(255, 204, 7, 0.03);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 204, 7, 0.2);
          box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .glass-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 204, 7, 0.08),
            transparent
          );
          transition: left 0.6s ease;
        }

        .glass-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 50% 50%,
            rgba(255, 204, 7, 0.1) 0%,
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .glass-card:hover::before {
          left: 100%;
        }

        .glass-card:hover::after {
          opacity: 1;
        }

        .glass-card:hover {
          transform: translateY(-20px) rotateX(10deg) rotateY(8deg) scale(1.05);
          border-color: rgba(255, 204, 7, 0.5);
          box-shadow: 0 30px 60px 0 rgba(255, 204, 7, 0.25),
                      0 15px 30px 0 rgba(0, 0, 0, 0.2),
                      inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
        }

        .glass-card:hover .icon-container {
          transform: translateZ(50px) scale(1.1);
        }

        .glass-card:hover h3 {
          transform: translateZ(35px);
        }

        .glass-card:hover p {
          transform: translateZ(20px);
        }

        .glass-card-visible {
          animation: subtleFloat 6s ease-in-out infinite;
        }

        .icon-container {
          position: relative;
          transition: transform 0.4s ease;
          transform-style: preserve-3d;
        }

        .icon-container::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 90px;
          height: 90px;
          background: radial-gradient(circle, rgba(255, 204, 7, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .icon-container::after {
          content: '';
          position: absolute;
          top: 55%;
          left: 50%;
          width: 80px;
          height: 20px;
          background: radial-gradient(ellipse, rgba(0, 0, 0, 0.2) 0%, transparent 70%);
          border-radius: 50%;
          transform: translate(-50%, -50%) translateZ(-30px);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .glass-card:hover .icon-container::after {
          opacity: 1;
        }

        .icon-visible .icon-container::before {
          opacity: 1;
        }

        .icon-container.icon-visible {
          animation: gentleBounce 2s ease-in-out infinite;
        }

        .animate-slide-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .animate-slide-right {
          animation: slideInRight 0.6s ease-out forwards;
        }

        .animate-fade-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-icon-scale {
          animation: iconScale 0.5s ease-out forwards;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground text-center mb-20 text-balance">
          Our Process
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          {steps.map((step, index) => {
            const isVisible = visibleIcons.has(index);
            const animationDirection = index % 3 === 0 ? 'animate-slide-left' : index % 3 === 1 ? 'animate-fade-up' : 'animate-slide-right';
            
            return (
              <div
                key={index}
                ref={(el) => {
                  iconRefs.current[index] = el;
                }}
                data-index={index}
                className={`glass-card ${isVisible ? `glass-card-visible ${animationDirection}` : ''} rounded-3xl p-8 flex flex-col items-center text-center group`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Icon */}
                <div className={`icon-container ${isVisible ? 'icon-visible animate-icon-scale' : ''} mb-6`}
                     style={{
                       opacity: isVisible ? 1 : 0,
                       animationDelay: `${index * 100 + 150}ms`
                     }}>
                  <div className={`icon-animated ${isVisible ? 'icon-visible' : ''}`}>
                    {step.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 transition-all duration-500"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                      transitionDelay: `${index * 100 + 300}ms`,
                      transition: 'all 0.5s ease, transform 0.4s ease'
                    }}>
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-foreground/70 max-w-xs transition-all duration-500"
                   style={{
                     opacity: isVisible ? 1 : 0,
                     transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                     transitionDelay: `${index * 100 + 450}ms`,
                     transition: 'all 0.5s ease, transform 0.4s ease'
                   }}>
                  {step.description}
                </p>

                {/* Bottom accent line */}
                <div 
                  className="absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-transparent via-[#FFCC07] to-transparent transition-all duration-700"
                  style={{
                    width: isVisible ? '60%' : '0%',
                    transform: 'translateX(-50%)',
                    transitionDelay: `${index * 100 + 600}ms`
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}