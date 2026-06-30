import React from 'react';
import { Phone } from 'lucide-react';

const CallButton = () => {
  return (
    <a
      href="tel:+919948536840"
      className="fixed right-4 bottom-20 z-[9000] w-14 h-14 bg-gold rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-gold/90 group"
      aria-label="Call Us Now"
      title="Call Us Now"
    >
      {/* Tooltip */}
      <span className="absolute right-16 bg-[#1C1612] text-white text-[11px] font-bold tracking-wider uppercase py-1.5 px-3.5 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-gold/20 z-[9001]">
        Call Us Now
      </span>

      <Phone size={24} className="animate-pulse" />
    </a>
  );
};

export default CallButton;
