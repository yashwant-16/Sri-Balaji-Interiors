import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';

// Import components
import BalajiBanner from './components/BalajiBanner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CallButton from './components/CallButton';
import BackToTop from './components/BackToTop';
import Preloader from './components/Preloader';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

import useScrollAnimation from './hooks/useScrollAnimation';

function ScrollAnimationController() {
  useScrollAnimation();
  return null;
}

function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <>
      {!preloaderDone && (
        <Preloader onComplete={() => setPreloaderDone(true)} />
      )}
      <HelmetProvider>
        <Router>
          <ScrollAnimationController />
          <div className="flex flex-col min-h-screen">
            {/* Devotional strip banner */}
            <BalajiBanner />
            
            {/* Main sticky navigation */}
            <Navbar />
            
            {/* Page contents and footer fade in after preloader */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: preloaderDone ? 1 : 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-col flex-grow"
              style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}
            >
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/testimonials" element={<Testimonials />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
              
              {/* Multi-column footer */}
              <Footer />
            </motion.div>

            {/* Floating UI Elements */}
            <WhatsAppButton />
            <CallButton />
            <BackToTop />
          </div>
        </Router>
      </HelmetProvider>
    </>
  );
}

export default App;

