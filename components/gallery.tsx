'use client';

import Image from 'next/image';

export function Gallery() {
  const galleryItems = [
    { id: 1, image: '/class1.jpg' },
    { id: 2, image: '/class2.jpg' },
    { id: 3, image: '/class3.jpg' },
    { id: 4, image: '/class4.jpg' },
    { id: 5, image: '/class1.jpg' },
    { id: 6, image: '/class2.jpg' },
    { id: 7, image: '/class3.jpg' },
    { id: 8, image: '/class4.jpg' },
  ];

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground text-center mb-16 text-balance animate-fade-in-up">
          Our Gallery
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl animate-fade-in-up"
              style={{ 
                backgroundColor: '#FFFFFF',
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              <div className="w-full aspect-square relative">
                <Image
                  src={item.image}
                  alt={`Gallery Image ${item.id}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-4">
                <p className="font-semibold text-center" style={{ color: '#000000' }}>
                  Gallery Image {item.id}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card border-2 border-border rounded-2xl p-12 min-h-64 flex items-center justify-center">
          <div className="text-center">
            <div className="text-muted-foreground mb-4">Play Icon</div>
            <p className="text-foreground font-bold text-xl">VIDEO</p>
          </div>
        </div>
      </div>
    </section>
  );
}
