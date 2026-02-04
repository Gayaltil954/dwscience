'use client';

export function Process() {
  const steps = [
    { title: 'Assessment', description: 'Understand your learning level' },
    { title: 'Planning', description: 'Create personalized study plan' },
    { title: 'Teaching', description: 'Engage with interactive lessons' },
    { title: 'Practice', description: 'Reinforce concepts through exercises' },
    { title: 'Mastery', description: 'Achieve academic excellence' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground text-center mb-16 text-balance">
          Our Process
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 auto-rows-max">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`${index >= 3 ? 'lg:col-span-1' : ''} ${index === 3 ? 'md:col-start-2' : ''} ${index === 4 ? 'md:col-start-4' : ''} animate-fade-in-up`}
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'both'
              }}
            >
              <div 
                className="rounded-3xl p-8 sm:p-10 min-h-48 flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
                style={{ backgroundColor: '#FFCC07' }}
              >
              <h3 className="text-xl sm:text-2xl font-bold text-black">
                {step.title}
              </h3>

              <p className="text-sm mt-3 opacity-90 text-black">
                {step.description}
              </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
