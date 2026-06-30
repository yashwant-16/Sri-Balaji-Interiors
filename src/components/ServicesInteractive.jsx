import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const services = [
  {
    number: "01",
    title: "Modular Kitchen",
    subtitle: "Smart layouts, premium finishes",
    description: "Providing professional advice on concepts, color schemes & material selection for your perfect modular kitchen.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=85",
    route: "/services#kitchens"
  },
  {
    number: "02",
    title: "TV Units Design",
    subtitle: "Feature walls that make a statement",
    description: "Custom TV units from minimalist floating panels to full floor-to-ceiling entertainment walls.",
    image: "https://images.unsplash.com/photo-1615529162924-f8605388461d?w=900&q=85",
    route: "/services#tvwalls"
  },
  {
    number: "03",
    title: "Commercial Interior Design",
    subtitle: "Workspaces that inspire",
    description: "Offices, retail and hospitality spaces designed for maximum impact and functionality.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85",
    route: "/services#commercial"
  },
  {
    number: "04",
    title: "Bedroom Interior Design",
    subtitle: "Your personal sanctuary",
    description: "From headboard walls to wardrobes — complete bedroom transformations tailored to you.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&q=85",
    route: "/services#bedrooms"
  },
  {
    number: "05",
    title: "Wardrobe & Dressing Unit",
    subtitle: "Organised luxury",
    description: "Walk-in closets, sliding wardrobes and fitted dressing units with premium fittings.",
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=900&q=85",
    route: "/services#wardrobes"
  },
  {
    number: "06",
    title: "False Ceiling & Lighting",
    subtitle: "Drama from above",
    description: "Cove ceilings, coffered panels and layered lighting plans that transform any room.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85",
    route: "/services#ceilings"
  }
];

const ServicesInteractive = () => {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div 
      className="w-full grid grid-cols-1 lg:grid-cols-[45%_55%] rounded-2xl overflow-hidden border border-blush shadow-lg"
      style={{ height: isMobile ? 'auto' : '580px' }}
    >
      {/* LEFT PANEL — Image */}
      <div style={{ height: isMobile ? '300px' : '100%', position: 'relative', overflow: 'hidden' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            style={{
              width: '100%', height: '100%',
              backgroundImage: `url('${services[activeService].image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: isMobile ? '0' : '0 16px 16px 0',
              position: 'relative'
            }}
          >
            {/* Description overlay box */}
            <div style={{
              position: 'absolute', bottom: isMobile ? '16px' : '28px', left: isMobile ? '16px' : '28px',
              background: 'rgba(28,28,28,0.85)',
              backdropFilter: 'blur(8px)',
              borderRadius: '12px',
              padding: '18px 22px',
              maxWidth: '280px',
              color: 'white',
              fontSize: '13px',
              lineHeight: 1.6,
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
            }}>
              {services[activeService].description}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* RIGHT PANEL — Numbered List */}
      <div 
        style={{
          background: '#FAF7F2',
          padding: isMobile ? '28px 20px' : '48px 48px 48px 56px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%'
        }}
      >
        <div className="space-y-1">
          {services.map((s, index) => (
            <div
              key={s.number}
              onMouseEnter={() => !isMobile && setActiveService(index)}
              onClick={() => {
                setActiveService(index);
                navigate(s.route);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '18px 0',
                borderBottom: '1px solid #E8E0D6',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                color: activeService === index ? '#C9A065' : '#2C2C2C'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                {/* Number */}
                <span style={{
                  fontFamily: 'Cormorant Garamond',
                  fontStyle: 'italic',
                  fontSize: '15px',
                  color: activeService === index ? '#C9A065' : '#AAA',
                  minWidth: '28px',
                  transition: 'color 0.3s'
                }}>
                  {s.number}
                </span>
                {/* Title + subtitle */}
                <div>
                  <p style={{
                    fontFamily: 'Playfair Display',
                    fontSize: '20px',
                    fontWeight: activeService === index ? '700' : '600',
                    margin: 0,
                    transition: 'all 0.3s'
                  }}>
                    {s.title}
                  </p>
                  <p style={{
                    fontFamily: 'Lato',
                    fontSize: '12px',
                    color: '#7A6A5A',
                    margin: '2px 0 0',
                    opacity: activeService === index ? 1 : 0,
                    maxHeight: activeService === index ? '20px' : '0',
                    overflow: 'hidden',
                    transition: 'all 0.35s ease'
                  }}>
                    {s.subtitle}
                  </p>
                </div>
              </div>

              {/* Arrow icon */}
              <div style={{
                width: '36px', height: '36px',
                borderRadius: '50%',
                background: activeService === index ? '#C9A065' : 'transparent',
                border: activeService === index ? 'none' : '1px solid #CCC',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.3s ease',
                color: activeService === index ? 'white' : '#888',
                fontSize: '16px'
              }}>
                {activeService === index ? '↗' : '→'}
              </div>
            </div>
          ))}
        </div>

        {/* Get a Free Quote Button */}
        <button 
          onClick={() => navigate('/contact')} 
          className="hover:bg-[#b08850] transition-all duration-300 transform active:scale-95 shadow-md"
          style={{
            marginTop: '28px',
            background: '#C9A065',
            color: 'white',
            border: 'none',
            padding: '14px 32px',
            borderRadius: '8px',
            fontFamily: 'Lato',
            fontSize: '15px',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            width: 'fit-content'
          }}
        >
          Get a Free Quote &rarr;
        </button>
      </div>
    </div>
  );
};

export default ServicesInteractive;
