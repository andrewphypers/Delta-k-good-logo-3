import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { Services } from '@/app/components/Services';
import { About } from '@/app/components/About';
import { Leadership } from '@/app/components/Leadership';
import { Contact } from '@/app/components/Contact';
import { Partners } from '@/app/components/Partners';
import { Footer } from '@/app/components/Footer';

// Delta K Electrical - Landing Page v1.2
export default function App() {
  // Verify build version
  console.log("Delta K - Build loaded successfully - v1.2");
  
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
