import React, { useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Check } from 'lucide-react';
import { servicesData } from '../data/servicesData';

const ServiceSection = ({ service, index }) => {
  const isReversed = index % 2 === 1;
  const navigate = useNavigate();

  return (
    <section 
      id={service.id} 
      className="py-16 md:py-24 px-4 scroll-mt-24 border-b border-blush/60 last:border-0"
    >
      <div 
        className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          isReversed ? 'lg:flex lg:flex-row-reverse' : ''
        }`}
      >
        {/* Image block */}
        <div 
          className={`w-full aspect-[4/3] rounded overflow-hidden shadow-md bg-blush img-zoom-wrap ${
            isReversed ? 'anim-faderight' : 'anim-fadeleft'
          }`}
        >
          <img 
            src={service.image} 
            alt={service.title} 
            loading="lazy" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=900&q=85'
            }}
          />
        </div>

        {/* Info block */}
        <div 
          className={`space-y-6 ${
            isReversed ? 'anim-fadeleft' : 'anim-faderight'
          }`}
        >
          <span className="section-label">Service {index + 1}</span>
          <h2 className="section-heading">
            {service.title}
          </h2>
          <div className="gold-divider left" />
          <p className="font-lato text-taupe leading-relaxed">
            {service.desc}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {service.features.map((feature, i) => (
              <div key={i} className="flex items-center space-x-2 text-charcoal font-lato text-sm">
                <span className="w-5 h-5 rounded-full bg-blush flex items-center justify-center text-gold shrink-0">
                  <Check size={12} className="stroke-[3]" />
                </span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <button 
              onClick={() => 
                navigate(`/contact?service=${encodeURIComponent(service.title)}`)
              }
              className="inline-block bg-gold border border-gold hover:bg-gold/90 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-8 rounded transition-all shadow-md"
            >
              Get a Quote for This
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash links for scrolling (e.g. /services#kitchens)
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div>
      <Helmet>
        <title>Our Designing Services | Sri Balaji Interiors</title>
        <meta name="description" content="View our detailed interior design services: Residential, Commercial, Modular Kitchens, Wardrobe Designs, False Ceilings, and TV Unit console backdrops." />
      </Helmet>

      {/* Page Title Banner */}
      <section className="bg-blush/40 py-16 text-center border-b border-blush/80">
        <div className="max-w-7xl mx-auto px-4 anim-fadeup">
          <span className="section-label">Exquisite Solutions</span>
          <h1 className="section-heading">Our Designing Services</h1>
          <div className="gold-divider" />
        </div>
      </section>

      {/* Services List Grid */}
      <div className="bg-ivory/50">
        {servicesData.map((service, index) => (
          <ServiceSection key={service.id} service={service} index={index} />
        ))}
      </div>

      {/* consultation cta banner */}
      <section className="py-20 px-4 bg-charcoal text-blush text-center anim-fadeup">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="section-label">Consultation</span>
          <h2 className="section-heading" style={{ color: '#FFFFFF' }}>
            Transform Your Spaces Today
          </h2>
          <div className="gold-divider" />
          <p className="font-lato text-base text-blush/80 max-w-xl mx-auto">
            Book a private visual mockup and material selection meeting at our display center in Jubilee Hills.
          </p>
          <div className="pt-4">
            <Link 
              to="/contact" 
              className="inline-block bg-gold border border-gold hover:bg-gold/90 text-white font-bold text-sm uppercase tracking-wider py-4 px-10 rounded transition-all shadow-md"
            >
              Book Consultation &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
