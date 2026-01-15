import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { Services } from '@/app/components/Services';
import { About } from '@/app/components/About';
import { Leadership } from '@/app/components/Leadership';
import { Contact } from '@/app/components/Contact';
import { Partners } from '@/app/components/Partners';
import { Footer } from '@/app/components/Footer';

// Delta K Electrical - Landing Page v1.4 - FULL VERSION
export default function App() {
  // Verify build version - v1.4 with all components
  console.log("Delta K - Build v1.4 - FULL VERSION WITH ALL FEATURES");
  
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Hero />
      <Services />
      <About />
      <Leadership />
      <Contact />
      <Partners />
      <Footer />
    </div>
  );
}
