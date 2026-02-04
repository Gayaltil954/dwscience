'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen bg-background pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-tight text-balance">
                Science with Dilini Weerakkody
              </h1>
            </div>

            <div className="space-y-3">
              <p className="text-lg sm:text-xl text-foreground font-semibold">
                Grades 6 – 11 | English Medium
              </p>
              <p className="text-base sm:text-lg text-muted-foreground font-medium">
                Science Classes
              </p>
            </div>

            <div>
              <Button
                className="px-8 py-6 text-base font-bold rounded-md transition-colors hover:opacity-90"
                style={{ backgroundColor: '#FFCC07', color: '#000000' }}
                onClick={() => {
                  document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Our Process
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Right Video */}
          <div className="relative flex items-center justify-center order-first md:order-last" style={{ perspective: '1200px' }}>
            <div 
              className="relative w-full max-w-6xl aspect-square" 
              style={{ 
                transformStyle: 'preserve-3d',
                /*animation: 'rotate-3d 8s ease-in-out infinite',*/
                filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 40px rgba(255, 204, 7, 0.4))'
              }}
            >
              <video
                src="/vdo1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
                style={{ 
                  transform: 'translateZ(50px)',
                  filter: 'brightness(1.1) contrast(1.05)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
