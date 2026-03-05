import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MediaCoverage from './components/MediaCoverage';

import Services from './components/Services';
import WhoIsThisFor from './components/WhoIsThisFor';
import WhyGiftVsCash from './components/WhyGiftVsCash';
import UrgencyBanner from './components/UrgencyBanner';
import Network from './components/Network';
import Steps from './components/Steps';
import LeadFormSection from './components/LeadFormSection';
import Plans from './components/Plans';
import GiftStories from './components/GiftStories';
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';
import LeadPopup from './components/LeadPopup';

function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-body transition-colors duration-300 pb-24 md:pb-0">
      <Navbar />
      <Hero />
      <MediaCoverage />
      <UrgencyBanner />
      <Services />

      <WhoIsThisFor />
      <GiftStories />
      <WhyGiftVsCash />
      <Steps />
      <Network />
      <Plans />
      <LeadFormSection />
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
