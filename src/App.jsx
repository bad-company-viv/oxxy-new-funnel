import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Services from './components/Services';
import WhoIsThisFor from './components/WhoIsThisFor';
import WhyGiftVsCash from './components/WhyGiftVsCash';
import Network from './components/Network';
import Steps from './components/Steps';
import Testimonial from './components/Testimonial';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Plans from './components/Plans';
import FAQ from './components/FAQ';
import StickyMobileCTA from './components/StickyMobileCTA';
import LeadPopup from './components/LeadPopup';

function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-body transition-colors duration-300 pb-24 md:pb-0">
      <Navbar />
      <Hero />
      <Metrics />
      <Services />
      <WhoIsThisFor />
      <WhyGiftVsCash />
      <Network />
      <Steps />
      <Plans />
      <Testimonial />
      <FAQ />
      <CTA />
      <Footer />
      <StickyMobileCTA />
      <LeadPopup />
    </div>
  );
}

export default App;
