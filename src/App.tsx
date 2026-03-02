import { useEffect, useRef, useState } from 'react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Research from './sections/Research';
import Teaching from './sections/Teaching';
import Awards from './sections/Awards';
import Services from './sections/Services';
import Footer from './sections/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-white">
      <Navigation scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Research />
        <Teaching />
        <Awards />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;
