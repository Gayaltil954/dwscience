'use client';

import Image from 'next/image';
import { Play, ZoomIn } from 'lucide-react';
import { useState } from 'react';

const BentoGrid = ({ items, hoveredId, setHoveredId, offset = 0 }: { 
  items: { id: number; image: string; size: string; type: string }[]; 
  hoveredId: number | null; 
  setHoveredId: (id: number | null) => void;
  offset?: number 
}) => {
  const getGridClass = (size: string) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2';
      case 'medium':
        return 'col-span-1 row-span-2';
      default:
        return 'col-span-1 row-span-1';
    }
  };

  return (
    <div className="grid grid-cols-4 gap-3 w-[800px] flex-shrink-0" style={{ gridAutoRows: '150px' }}>
      {items.map((item) => (
        <div
          key={`${item.id}-${offset}`}
          className={`relative rounded-xl overflow-hidden cursor-pointer group ${getGridClass(item.size)}`}
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <Image
            src={item.image}
            alt={`Gallery ${item.id}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="200px"
          />
          
          <div 
            className="absolute inset-0 transition-opacity duration-300"
            style={{ 
              background: hoveredId === item.id 
                ? 'rgba(255, 204, 7, 0.3)' 
                : 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)'
            }}
          />

          {item.type === 'video' && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'rgba(255, 204, 7, 0.9)' }}
              >
                <Play className="w-6 h-6 text-black fill-black ml-0.5" />
              </div>
            </div>
          )}

          <div 
            className={`absolute top-2 right-2 transition-all duration-300 ${
              hoveredId === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#FFCC07' }}
            >
              <ZoomIn className="w-4 h-4 text-black" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-2">
            <p className="font-semibold text-white text-xs">
              {item.type === 'video' ? 'Class Video' : `Photo ${item.id}`}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export function Gallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const galleryItems = [
    { id: 1, image: '/class1.jpg', size: 'large', type: 'image' },
    { id: 2, image: '/class2.jpg', size: 'small', type: 'image' },
    { id: 3, image: '/class3.jpg', size: 'small', type: 'image' },
    { id: 4, image: '/class4.jpg', size: 'medium', type: 'image' },
    { id: 5, image: '/class1.jpg', size: 'medium', type: 'image' },
    { id: 6, image: '/class2.jpg', size: 'large', type: 'video' },
    { id: 7, image: '/class3.jpg', size: 'small', type: 'image' },
    { id: 8, image: '/class4.jpg', size: 'small', type: 'image' },
  ];

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-center mb-16 text-balance"
          style={{ color: '#FFCC07' }}
        >
          Our Gallery
        </h2>

        {/* Auto-Scrolling Bento Grids */}
        <div className="relative">
          <div 
            className="flex gap-6"
            style={{
              animation: 'scrollBento 30s linear infinite',
              width: 'fit-content'
            }}
          >
            <BentoGrid items={galleryItems} hoveredId={hoveredId} setHoveredId={setHoveredId} offset={0} />
            <BentoGrid items={galleryItems} hoveredId={hoveredId} setHoveredId={setHoveredId} offset={100} />
            <BentoGrid items={galleryItems} hoveredId={hoveredId} setHoveredId={setHoveredId} offset={200} />
            <BentoGrid items={galleryItems} hoveredId={hoveredId} setHoveredId={setHoveredId} offset={300} />
          </div>
        </div>

        <style jsx>{`
          @keyframes scrollBento {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </section>
  );
}
