'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Logo3D } from '@/components/logo-3d';

export function Hero() {
  return (
    <section id="home" className="min-h-screen bg-background pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Periodic Table Background Effect */}
      <div className="absolute inset-0 pointer-events-none" style={{ top: '80px' }}>
        <div className="w-full h-full p-2 opacity-10" style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(60px, 1fr))',
          gridAutoRows: 'minmax(60px, auto)',
          alignContent: 'center',
          justifyContent: 'center'
        }}>
          {[...Array(250)].map((_, i) => {
            const elements = ['H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca', 'Fe', 'Cu', 'Zn', 'Ag', 'Au'];
            return (
              <div key={i} className="border border-accent/20 rounded m-0.5 flex items-center justify-center">
                <span className="text-accent font-bold text-xs">{elements[i % elements.length]}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-tight text-balance">
                Science with Dilini Weerakkody
              </h1>
            </div>

            <div className="space-y-3">
              {/* <p className="text-lg sm:text-xl text-foreground font-semibold">
                Grades 6 – 11 | English Medium
              </p> */}
              <p className="text-lg sm:text-xl text-foreground font-semibold">
                English Medium Science Classes | Grades 6 – 11
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

          {/* Right 3D Logo */}
          <div className="relative flex items-center justify-center order-first md:order-last h-75 sm:h-100 md:h-auto" style={{ perspective: '1200px' }}>
            <div 
              className="relative w-full max-w-70 sm:max-w-md md:max-w-6xl aspect-square" 
              style={{ 
                transformStyle: 'preserve-3d',
                filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 40px rgba(255, 204, 7, 0.4))'
              }}
            >
              <Logo3D variant="cylinder" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
