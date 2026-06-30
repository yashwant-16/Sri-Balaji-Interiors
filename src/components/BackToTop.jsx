import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-4 bottom-36 z-[9000] w-14 h-14 bg-gold text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-gold/90 group ${
        isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Back to Top"
      title="Back to Top"
    >
      {/* Tooltip */}
      <span className="absolute right-16 bg-[#1C1612] text-white text-[11px] font-bold tracking-wider uppercase py-1.5 px-3.5 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-gold/20 z-[9001]">
        Back to Top
      </span>

      <ArrowUp size={24} />
    </button>
  );
};

export default BackToTop;
