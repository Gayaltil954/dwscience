'use client';

import { useState } from 'react';

export function Features() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes rotateIn {
          from {
            opacity: 0;
            transform: rotate(-180deg) scale(0);
          }
          to {
            opacity: 1;
            transform: rotate(0deg) scale(1);
          }
        }

        @keyframes pulseRing {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.4;
          }
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .medal-container {
          animation: rotateIn 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          filter: drop-shadow(0 15px 30px rgba(255, 204, 7, 0.4));
          position: relative;
        }

        .medal-container::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 180px;
          height: 180px;
          border: 3px solid rgba(255, 204, 7, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: pulseRing 2s ease-in-out infinite;
        }

        .medal-container::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 220px;
          height: 220px;
          border: 2px solid rgba(255, 204, 7, 0.2);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: pulseRing 2s ease-in-out infinite 0.5s;
        }

        .medal-container:hover {
          transform: scale(1.4) rotate(360deg);
          filter: drop-shadow(0 25px 50px rgba(255, 204, 7, 0.6));
          animation: bounce 1s ease-in-out infinite;
        }

        .results-title {
          animation: fadeInUp 0.8s ease-out 0.5s both;
          transition: all 0.4s ease;
          background: linear-gradient(135deg, #FFCC07 0%, #F59E0B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .results-text {
          animation: fadeInUp 0.8s ease-out 0.7s both;
          position: relative;
        }

        .sparkle {
          position: absolute;
          width: 12px;
          height: 12px;
          background: radial-gradient(circle, #FFCC07 0%, transparent 70%);
          border-radius: 50%;
          animation: sparkle 2s ease-in-out infinite;
        }

        .sparkle:nth-child(1) {
          top: 10%;
          left: 15%;
          animation-delay: 0s;
        }

        .sparkle:nth-child(2) {
          top: 20%;
          right: 20%;
          animation-delay: 0.5s;
        }

        .sparkle:nth-child(3) {
          bottom: 30%;
          left: 10%;
          animation-delay: 1s;
        }

        .sparkle:nth-child(4) {
          bottom: 20%;
          right: 15%;
          animation-delay: 1.5s;
        }

        .decorative-line {
          position: relative;
          display: inline-block;
        }

        .decorative-line::before,
        .decorative-line::after {
          content: '';
          position: absolute;
          top: 50%;
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #FFCC07, transparent);
        }

        .decorative-line::before {
          right: calc(100% + 20px);
        }

        .decorative-line::after {
          left: calc(100% + 20px);
        }

        .floating-shape {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 204, 7, 0.1) 0%, transparent 70%);
          animation: floatSlow 6s ease-in-out infinite;
        }

        .shape-1 {
          width: 150px;
          height: 150px;
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 100px;
          height: 100px;
          top: 60%;
          right: 10%;
          animation-delay: 1s;
        }

        .shape-3 {
          width: 200px;
          height: 200px;
          bottom: 10%;
          left: 50%;
          animation-delay: 2s;
        }
      `}</style>

      {/* Floating Background Shapes */}
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>
      <div className="floating-shape shape-3"></div>
      
      <div className="max-w-4xl mx-auto relative">
        <div className="flex flex-col items-center text-center space-y-8 relative">
          {/* Sparkle Effects */}
          <div className="sparkle"></div>
          <div className="sparkle"></div>
          <div className="sparkle"></div>
          <div className="sparkle"></div>

          {/* Medal/Badge Logo */}
          <div 
            className="medal-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
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
          </div>

          {/* Results Title with decorative lines */}
          <h3 className="results-title text-5xl sm:text-6xl font-black decorative-line">
            Results
          </h3>

          {/* Results Description */}
          <div className="results-text max-w-2xl">
            <p className="text-xl sm:text-2xl text-foreground/90 leading-relaxed font-medium">
              Consistent academic excellence with improved student performance scores
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
