'use client';

export function AboutTeacher() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col space-y-6 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground text-balance">
              About The Teacher
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Dilini Weerakkody is a dedicated science educator with years of experience in transforming how students understand and appreciate scientific concepts. With a passion for innovative teaching methodologies and student-centered learning, she has consistently delivered exceptional academic results.
              </p>

              <p>
                Her approach combines traditional pedagogical excellence with modern educational techniques, creating an environment where students not only learn but truly understand the beauty of science. Dilini believes that every student has the potential to excel when given the right guidance and support.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-80 sm:h-96 md:h-full md:min-h-96 bg-linear-to-br from-accent/20 to-background rounded-2xl flex items-center justify-center animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
            <div className="text-center text-muted-foreground">
              <p className="text-sm">Teacher Photo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
