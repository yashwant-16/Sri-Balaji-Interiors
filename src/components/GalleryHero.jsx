import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const gallerySlides = [
  [
    { src: "/images/bedrooms/bedroom1.jpg", 
      fallback: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=500&q=80" },
    { src: "/images/tv-units/tv1.jpg",
      fallback: "https://images.unsplash.com/photo-1615529162924-f8605388461d?w=500&q=80" },
    { src: "/images/ceilings/ceiling1.jpg",
      fallback: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&q=80" }
  ],
  [
    { src: "/images/wardrobes/wardrobe1.jpg",
      fallback: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=500&q=80" },
    { src: "/images/bedrooms/bedroom2.jpg",
      fallback: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&q=80" },
    { src: "/images/tv-units/tv2.jpg",
      fallback: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80" }
  ]
];

const GalleryHero = ({ showPortfolioLink = true }) => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
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
    <section 
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        background: '#0F0C0A'
      }}
    >
      {/* Background image with parallax */}
      <div 
        className="anim-parallax" 
        style={{
          position: 'absolute', 
          inset: '-20%',
          backgroundImage: `url('https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1920&q=90')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          zIndex: 0
        }} 
      />
      <div 
        style={{
          position: 'absolute', 
          inset: 0,
          background: 'rgba(15,12,10,0.78)',
          zIndex: 1
        }} 
      />

      {/* Content layer */}
      <div 
        style={{
          zIndex: 2, 
          position: 'relative',
          width: '100%',
          padding: isMobile ? '120px 20px 60px' : '100px 6%',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          gap: '40px'
        }}
      >
        {/* LEFT SIDE */}
        <div style={{ width: isMobile ? '100%' : '40%', flexShrink: 0 }}>
          {/* Small pill label */}
          <span 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(201,160,101,0.18)',
              border: '1px solid rgba(201,160,101,0.4)',
              color: '#C9A065',
              padding: '6px 16px',
              borderRadius: '100px',
              fontSize: '12px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '24px'
            }}
          >
            <span 
              style={{
                width: '6px', 
                height: '6px',
                borderRadius: '50%', 
                background: '#C9A065'
              }}
            />
            Our Gallery
          </span>

          {/* Giant heading */}
          <h1 
            style={{
              fontFamily: 'Playfair Display',
              fontSize: isMobile ? '42px' : 'clamp(52px, 7vw, 88px)',
              fontWeight: '800',
              color: '#FFFFFF',
              lineHeight: 1.05,
              margin: '0 0 32px'
            }}
          >
            Our<br />Interior<br />Design<br />Gallery
          </h1>

          {/* Arrow navigation buttons */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
            <button 
              onClick={() => setCurrentSlide(prev => 
                prev === 0 ? gallerySlides.length - 1 : prev - 1
              )} 
              className="hover:bg-gold hover:border-gold transition-colors duration-300"
              style={{
                width: '48px', 
                height: '48px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.3)',
                color: 'white', 
                fontSize: '18px', 
                cursor: 'pointer',
                backdropFilter: 'blur(4px)',
                transition: 'all 0.3s'
              }}
            >
              ←
            </button>
            <button 
              onClick={() => setCurrentSlide(prev => 
                (prev + 1) % gallerySlides.length
              )} 
              className="hover:bg-gold hover:border-gold transition-colors duration-300"
              style={{
                width: '48px', 
                height: '48px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.3)',
                color: 'white', 
                fontSize: '18px', 
                cursor: 'pointer',
                backdropFilter: 'blur(4px)',
                transition: 'all 0.3s'
              }}
            >
              →
            </button>
          </div>

          {/* "View Full Gallery" link */}
          {showPortfolioLink !== false && (
            <span 
              onClick={() => navigate('/portfolio')} 
              style={{
                color: '#C9A065',
                fontFamily: 'Lato',
                fontSize: '15px',
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
                cursor: 'pointer'
              }}
              className="hover:text-white transition-colors"
            >
              View Full Portfolio &rarr;
            </span>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div style={{ width: isMobile ? '100%' : '60%', overflow: 'visible' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                paddingLeft: isMobile ? '0' : '40px',
                flexDirection: 'row',
                flexWrap: isMobile ? 'wrap' : 'nowrap',
                justifyContent: isMobile ? 'center' : 'flex-start'
              }}
            >
              {gallerySlides[currentSlide].map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: i % 2 === 0 ? 40 : -40 }}
                  animate={{ opacity: 1, y: isMobile ? 0 : (i === 1 ? -30 : 0) }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  style={{
                    flex: isMobile ? '1 1 140px' : (i === 1 ? '0 0 280px' : '0 0 220px'),
                    height: isMobile ? '180px' : (i === 1 ? '360px' : '280px'),
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
                    cursor: 'pointer',
                    minWidth: isMobile ? '140px' : 'auto'
                  }}
                  whileHover={{ scale: 1.04, y: isMobile ? 0 : (i === 1 ? -40 : -12) }}
                  onClick={() => navigate('/portfolio')}
                >
                  <img
                    src={img.src}
                    onError={e => { e.target.src = img.fallback; }}
                    alt="Interior design"
                    style={{
                      width: '100%', 
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s ease'
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;
