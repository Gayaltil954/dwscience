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
      className="shrink-0 cursor-pointer"
      style={{ 
        width: '90vw',
        maxWidth: '400px',
        height: '500px',
        perspective: '1000px'
      }}
      onClick={onFlip}
    >
      <div 
        className="relative w-full h-full transition-transform duration-700"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Front Side */}
        <div 
          className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl"
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
              sizes="400px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{center.name}</h3>
              <p className="text-white/80 text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Click to view details
              </p>
            </div>
            <div className="absolute top-4 right-4">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#FFCC07' }}
              >
                <ArrowLeft className="w-5 h-5 text-black" style={{ transform: 'rotate(180deg)' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl p-6"
          style={{ 
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            backgroundColor: '#FFFFFF'
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#FFCC07' }}
            >
              <MapPin className="w-6 h-6 text-black" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">{center.name}</h3>
              <p className="text-gray-600 text-sm">{center.location}</p>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-5 h-5" style={{ color: '#FFCC07' }} />
              <h4 className="font-semibold text-black">Class Timetable</h4>
            </div>
            <div className="space-y-2">
              {center.timetable.map((slot, idx) => (
                <div 
                  key={idx}
                  className="flex justify-between items-center p-3 rounded-lg"
                  style={{ backgroundColor: '#FFF9E6' }}
                >
                  <span className="text-sm font-medium text-black">{slot.day}</span>
                  <span className="text-sm" style={{ color: '#FFCC07' }}>{slot.time}</span>
                </div>
              ))}
            </div>
          </div>

          <a
            href={center.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-semibold text-black transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#FFCC07' }}
            onClick={(e) => e.stopPropagation()}
          >
            <MapPin className="w-5 h-5" />
            Open in Google Maps
          </a>

          <p className="text-center text-gray-400 text-xs mt-4">
            Click card to flip back
          </p>
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
    { 
      id: 4, 
      name: 'Jaffna Center', 
      image: '/class4.jpg',
      timetable: [
        { day: 'Wednesday', time: '4:00 PM - 6:00 PM' },
        { day: 'Friday', time: '4:00 PM - 6:00 PM' },
        { day: 'Sunday', time: '9:00 AM - 12:00 PM' },
      ],
      location: '12 Point Pedro Road, Jaffna',
      mapUrl: 'https://maps.google.com/?q=Jaffna'
    },
    { 
      id: 5, 
      name: 'Negombo Center', 
      image: '/class1.jpg',
      timetable: [
        { day: 'Tuesday', time: '4:00 PM - 6:00 PM' },
        { day: 'Thursday', time: '4:00 PM - 6:00 PM' },
        { day: 'Saturday', time: '10:00 AM - 1:00 PM' },
      ],
      location: '89 Lagoon Road, Negombo',
      mapUrl: 'https://maps.google.com/?q=Negombo'
    },
    { 
      id: 6, 
      name: 'Matara Center', 
      image: '/class2.jpg',
      timetable: [
        { day: 'Monday', time: '3:30 PM - 5:30 PM' },
        { day: 'Wednesday', time: '3:30 PM - 5:30 PM' },
        { day: 'Sunday', time: '8:30 AM - 11:30 AM' },
      ],
      location: '34 Beach Road, Matara',
      mapUrl: 'https://maps.google.com/?q=Matara'
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const scroll = () => {
      if (!isPaused && scrollContainer && flippedCard === null) {
        scrollContainer.scrollLeft += 1;
        
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused, flippedCard]);

  const handleFlip = (id: number) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -420, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 420, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground text-center mb-16 text-balance animate-fade-in-up">
          Class Centers
        </h2>

        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 -ml-6"
            style={{ backgroundColor: '#FFCC07' }}
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 -mr-6"
            style={{ backgroundColor: '#FFCC07' }}
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>

          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-4"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
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
        </div>
      </div>
    </section>
  );
}
