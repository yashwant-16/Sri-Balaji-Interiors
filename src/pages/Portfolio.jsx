import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import portfolioData from '../data/portfolioData.js';


const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    { label: 'All', value: 'all' },
    { label: 'TV Units', value: 'tv-units' },
    { label: 'Bedroom Designs', value: 'bedrooms' },
    { label: 'Ceilings', value: 'ceilings' },
    { label: 'Wardrobes', value: 'wardrobes' },
    { label: 'Modular Kitchen', value: 'modular-kitchen' },
    { label: 'Walls', value: 'walls' },
    { label: 'Partitions', value: 'partitions' },
    { label: 'Temples', value: 'temples' },
    { label: 'Shelves', value: 'shelves' },
    { label: 'Doors', value: 'doors' },
    { label: 'Dressing Tables', value: 'dressing-tables' },
    { label: 'stairs', value: 'stairs' },
    { label: 'gates', value: 'gates' },
  ];

  // Filter items and sort client images to the top
  const filtered = activeFilter === 'all'
    ? portfolioData
    : portfolioData.filter(item => item.category === activeFilter);

  const filteredItems = [...filtered].sort((a, b) =>
    (b.isClientImage ? 1 : 0) - (a.isClientImage ? 1 : 0)
  );

  // Prepare slides for Lightbox
  const slides = filteredItems.map(item => ({
    src: item.image,
    title: item.title,
    description: `${item.location} • ${item.category.toUpperCase().replace('-', ' ')} \n\n${item.description || ''}`
  }));

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="pb-20">
      <Helmet>
        <title>Design Gallery | Sri Balaji Interiors</title>
        <meta name="description" content="Browse our luxury design gallery. Filter by Bedrooms, TV Units, modular kitchens, custom ceilings, and premium wardrobes." />
      </Helmet>

      {/* Page Heading */}
      <div style={{
        padding: '32px 5% 20px',
        textAlign: 'center',
        background: '#FAF7F2',
        marginTop: '72px'
      }}>
        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(28px, 4vw, 36px)',
          fontWeight: '700',
          color: '#2C2C2C',
          margin: 0
        }}>
          Design Gallery
        </h1>
      </div>

      {/* Sticky Filter Bar */}
      <div
        className="sticky top-[72px] z-30 bg-ivory/95 backdrop-blur border-b border-blush shadow-sm select-none"
      >
        <div
          className="max-w-7xl mx-auto px-4 filter-bar"
          style={{
            display: 'flex',
            gap: '10px',
            overflowX: 'auto',
            overflowY: 'hidden',
            padding: '16px 5%',
            scrollbarWidth: 'none',   // hide scrollbar Firefox
            msOverflowStyle: 'none',  // hide scrollbar IE
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              style={{
                flexShrink: 0,  // prevents buttons from shrinking
                whiteSpace: 'nowrap',
                padding: '9px 20px',
                borderRadius: '100px',
                border: '1px solid rgba(201,160,101,0.4)',
                background: activeFilter === cat.value
                  ? '#C9A065'
                  : 'transparent',
                color: activeFilter === cat.value
                  ? '#FAF7F2'
                  : '#2C2C2C',
                fontFamily: 'Lato, sans-serif',
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Portfolio Gallery Grid */}
      <section className="mt-12 px-4 max-w-7xl mx-auto anim-fadeup">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => openLightbox(index)}
                style={{ borderRadius: '8px' }}
                className="portfolio-item relative overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-blush bg-blush/10 aspect-[4/3]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  onError={(e) => {
                    e.target.closest('.portfolio-item')
                      .style.display = 'none';
                  }}
                  loading="lazy"
                  className="w-full h-full object-cover block"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-charcoal/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-20">
                  <span className="font-lato text-[10px] tracking-widest text-gold font-bold uppercase mb-1">
                    {item.location}
                  </span>
                  <h4 className="font-playfair text-xl font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="font-lato text-xs text-blush/80 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={currentIndex}
          slides={slides}
          plugins={[Captions]}
          captions={{
            descriptionMaxLines: 5,
            descriptionTextAlignment: 'center'
          }}
        />
      )}
    </div>
  );
};

export default Portfolio;
