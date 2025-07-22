import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <Hero />
      <div className="h-32"></div>
      <About />
      <div className="h-32"></div>
      <Portfolio />
      <div className="h-32"></div>
      <Contact />
      <div className="h-32"></div>
      <Footer />
    </main>
  );
}
