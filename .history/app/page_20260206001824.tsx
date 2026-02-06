import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { Process } from '@/components/process';
import { Gallery } from '@/components/gallery';
import { ClassCenters } from '@/components/class-centers';
import { AboutTeacher } from '@/components/about-teacher';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <Hero />
        <Features />
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
