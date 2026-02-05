'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { MapPin, Clock, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

interface Center {
  id: number;
  name: string;
  image: string;
  timetable: { day: string; time: string }[];
  location: string;
  mapUrl: string;
}

const CenterCard = ({ center, isFlipped, onFlip }: { center: Center; isFlipped: boolean; onFlip: () => void }) => {
  return (
    <div 
      className="snap-center shrink-0 cursor-pointer"
      style={{ 
        width: 'calc(100vw - 48px)',
        maxWidth: '400px',
        height: '480px',
        perspective: '1500px'
      }}
      onClick={onFlip}
    >
      <div 
        className="relative w-full h-full transition-transform duration-700 ease-out"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Front Side */}
        <div 
          className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
          style={{ 
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
        >
          <div className="relative h-full">
            <Image
              src={center.image}
              alt={center.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
              loading="lazy"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{center.name}</h3>
              <p className="text-white/90 text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Tap to view details
              </p>
            </div>
            <div className="absolute top-4 right-4 animate-bounce">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                style={{ backgroundColor: '#FFCC07' }}
              >
                <ArrowLeft className="w-5 h-5 text-black" style={{ transform: 'rotate(180deg)' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6"
          style={{ 
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            backgroundColor: '#FFFFFF'
          }}
        >
          <div className="h-full flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: '#FFCC07' }}
              >
                <MapPin className="w-6 h-6 text-black" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-black truncate">{center.name}</h3>
                <p className="text-gray-600 text-xs sm:text-sm truncate">{center.location}</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto mb-4">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 shrink-0" style={{ color: '#FFCC07' }} />
                <h4 className="font-semibold text-black">Class Timetable</h4>
              </div>
              <div className="space-y-2">
                {center.timetable.map((slot, idx) => (
                  <div 
                    key={idx}
                    className="flex justify-between items-center p-2.5 sm:p-3 rounded-lg"
                    style={{ backgroundColor: '#FFF9E6' }}
                  >
                    <span className="text-xs sm:text-sm font-medium text-black">{slot.day}</span>
                    <span className="text-xs sm:text-sm font-semibold" style={{ color: '#FFCC07' }}>{slot.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={center.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-semibold text-black transition-all duration-300 hover:scale-105 active:scale-95"
              style={{ backgroundColor: '#FFCC07' }}
              onClick={(e) => e.stopPropagation()}
            >
              <MapPin className="w-5 h-5" />
              <span className="text-sm sm:text-base">Open in Google Maps</span>
            </a>

            <p className="text-center text-gray-400 text-xs mt-3">
              Tap card to flip back
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export function ClassCenters() {
  const centers: Center[] = [
    { 
      id: 1, 
      name: 'Colombo Center', 
      image: '/class1.jpg',
      timetable: [
        { day: 'Monday', time: '4:00 PM - 6:00 PM' },
        { day: 'Wednesday', time: '4:00 PM - 6:00 PM' },
        { day: 'Saturday', time: '9:00 AM - 12:00 PM' },
      ],
      location: '123 Galle Road, Colombo 03',
      mapUrl: 'https://maps.google.com/?q=Colombo'
    },
    { 
      id: 2, 
      name: 'Kandy Center', 
      image: '/class2.jpg',
      timetable: [
        { day: 'Tuesday', time: '3:30 PM - 5:30 PM' },
        { day: 'Thursday', time: '3:30 PM - 5:30 PM' },
        { day: 'Sunday', time: '8:00 AM - 11:00 AM' },
      ],
      location: '45 Peradeniya Road, Kandy',
      mapUrl: 'https://maps.google.com/?q=Kandy'
    },
    { 
      id: 3, 
      name: 'Galle Center', 
      image: '/class3.jpg',
      timetable: [
        { day: 'Monday', time: '3:00 PM - 5:00 PM' },
        { day: 'Friday', time: '3:00 PM - 5:00 PM' },
        { day: 'Saturday', time: '2:00 PM - 5:00 PM' },
      ],
      location: '78 Hikkaduwa Road, Galle',
      mapUrl: 'https://maps.google.com/?q=Galle'
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkMobile, 150);
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isMobile || !isVisible) return;

    let animationId: number;
    let lastTime = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const scroll = (currentTime: number) => {
      if (!lastTime) lastTime = currentTime;
      const deltaTime = currentTime - lastTime;
      
      if (!isPaused && scrollContainer && flippedCard === null && deltaTime > 16) {
        scrollContainer.scrollLeft += scrollSpeed;
        
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0;
        }
        lastTime = currentTime;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused, flippedCard, isMobile, isVisible]);

  const handleFlip = (id: number) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      const scrollAmount = isMobile ? scrollRef.current.clientWidth : 420;
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const scrollAmount = isMobile ? scrollRef.current.clientWidth : 420;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} id="class-centers" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground text-center mb-8 sm:mb-16 text-balance animate-fade-in-up">
          Class Centers
        </h2>

        <div className="relative">
          {/* Navigation Buttons - Hidden on very small screens */}
          <button
            onClick={scrollLeft}
            aria-label="Scroll left"
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 -ml-4 md:-ml-6"
            style={{ backgroundColor: '#FFCC07' }}
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-black" />
          </button>

          <button
            onClick={scrollRight}
            aria-label="Scroll right"
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 -mr-4 md:-mr-6"
            style={{ backgroundColor: '#FFCC07' }}
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-black" />
          </button>

          <div 
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth pb-4 px-2 sm:px-4 snap-x snap-mandatory"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
            onMouseEnter={() => !isMobile && setIsPaused(true)}
            onMouseLeave={() => !isMobile && setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setTimeout(() => setIsPaused(false), 2000)}
          >
            {centers.map((center) => (
              <CenterCard 
                key={center.id}
                center={center}
                isFlipped={flippedCard === center.id}
                onFlip={() => handleFlip(center.id)}
              />
            ))}
          </div>

          {/* Mobile scroll indicator */}
          <div className="flex sm:hidden justify-center gap-2 mt-4">
            {centers.slice(0, 3).map((_, idx) => (
              <div 
                key={idx}
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: '#FFCC07', opacity: 0.3 }}
              />
            ))}
          </div>
        </div>

        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
}
