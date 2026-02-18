import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { StatsSection } from "@/components/stats-section";
import { Process } from "@/components/process";
import { Gallery } from "@/components/gallery";
import { ClassCenters } from "@/components/class-centers";
import { AboutTeacher } from "@/components/about-teacher";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { AnimatedBackground } from "@/components/animated-background";
import { FloatingParticles } from "@/components/floating-particles";

//SEO - JSON-LD - Authn
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationEvent",
      name: "Science with Dilini Weerakkody",
      description: "English medium science classes for grades 6-11.",
      performer: {
        "@type": "Person",
        name: "Dilini Weerakkody",
      },
      location: [
        {
          "@type": "Place",
          name: "Sunray Educational Institute",
          address: "Galle",
        },
        { "@type": "Place", name: "Zigma Academy", address: "Baddegama" },
        { "@type": "Place", name: "Princeton Collage", address: "Hirikumbura" },
      ],
    }),
  }}
/>;

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <AnimatedBackground />
      <FloatingParticles />
      <Header />
      <main className="min-h-screen bg-background relative">
        <Hero />
        <Features />
        <StatsSection />
        <Process />
        <Gallery />
        <ClassCenters />
        <AboutTeacher />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
