'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export function ClassCenters() {
  const centers = [
    { id: 1, name: 'Center 1', image: '/class1.jpg' },
    { id: 2, name: 'Center 2', image: '/class2.jpg' },
    { id: 3, name: 'Center 3', image: '/class3.jpg' },
    { id: 4, name: 'Center 4', image: '/class4.jpg' },
    { id: 5, name: 'Center 5', image: '/class1.jpg' },
    { id: 6, name: 'Center 6', image: '/class2.jpg' },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += 1;
        
        // Reset scroll when reaching the end
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground text-center mb-16 text-balance animate-fade-in-up">
          Class Centers
        </h2>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {centers.map((center, index) => (
            <div
              key={center.id}
              className="flex-shrink-0 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer group hover:scale-105 hover:shadow-xl animate-fade-in-up"
              style={{ 
                backgroundColor: '#FFFFFF',
                width: '90vw',
                maxWidth: '600px',
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              <div className="relative overflow-hidden" style={{ height: '400px' }}>
                <Image
                  src={center.image}
                  alt={center.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="90vw"
                />
              </div>
              <div className="p-6">
                <p className="font-semibold text-center" style={{ color: '#000000' }}>{center.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
