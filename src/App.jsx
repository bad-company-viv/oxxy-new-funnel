import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Services from './components/Services';
import Network from './components/Network';
import Steps from './components/Steps';
import Testimonial from './components/Testimonial';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Plans from './components/Plans';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-body transition-colors duration-300">
      <Navbar />
      <Hero />
      <Metrics />
      <Services />
      <Network />
      <Steps />
      <Plans />
      <Testimonial />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
