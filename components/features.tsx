'use client';

import { Card } from '@/components/ui/card';

export function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground text-center mb-12 animate-fade-in-up">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            {
              title: 'Personalized Learning',
              description: 'Tailored lessons adapted to individual learning styles and paces.',
            },
            {
              title: 'Proven Results',
              description: 'Consistent academic excellence with improved student performance scores.',
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="p-8 sm:p-12 border-0 rounded-20xl flex items-center justify-center min-h-60 animate-fade-in-up transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
              style={{ 
                backgroundColor: '#FFFFFF',
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'both'
              }}
            >
              <p className="text-center font-semibold text-lg" style={{ color: '#000000' }}>{feature.title}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
