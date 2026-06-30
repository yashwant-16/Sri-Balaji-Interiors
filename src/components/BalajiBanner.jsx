import React from 'react';

const BalajiBanner = () => {
  return (
    <div id="balaji-banner-wrapper" style={{ position: 'relative' }}>
      <div
        id="balaji-banner"
        className="w-full py-2 px-4 flex flex-col items-center justify-center select-none"
        style={{
          position: 'relative',  // normal flow, scrolls away
          width: '100%',
          zIndex: 1001,
          background: '#FDF3E3',
          borderBottom: '1px solid rgba(201,160,101,0.25)'
        }}
      >
        <div className="flex items-center justify-center space-x-4">
          {/* Elegant Lotus Motif Left */}
          <svg className="w-6 h-6 fill-gold opacity-80" viewBox="0 0 24 24">
            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4M12,18A2,2 0 0,1 10,16A2,2 0 0,1 12,14A2,2 0 0,1 14,16A2,2 0 0,1 12,18M8,10A2,2 0 0,1 10,12A2,2 0 0,1 8,14A2,2 0 0,1 6,12A2,2 0 0,1 8,10M16,10A2,2 0 0,1 18,12A2,2 0 0,1 16,14A2,2 0 0,1 14,12A2,2 0 0,1 16,10Z" />
          </svg>

          {/* Deity Avatar Frame */}
          <div className="w-20 h-20 rounded-full border-2 border-gold overflow-hidden bg-white shadow-sm flex items-center justify-center" title="Lord Balaji">
            <img
              src="/images/lord-balaji-deity.jpg"
              alt="Lord Balaji"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Elegant Lotus Motif Right */}
          <svg className="w-6 h-6 fill-gold opacity-80" viewBox="0 0 24 24">
            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4M12,18A2,2 0 0,1 10,16A2,2 0 0,1 12,14A2,2 0 0,1 14,16A2,2 0 0,1 12,18M8,10A2,2 0 0,1 10,12A2,2 0 0,1 8,14A2,2 0 0,1 6,12A2,2 0 0,1 8,10M16,10A2,2 0 0,1 18,12A2,2 0 0,1 16,14A2,2 0 0,1 14,12A2,2 0 0,1 16,10Z" />
          </svg>
        </div>
        <div className="mt-1 font-cormorant italic font-semibold text-gold tracking-widest text-sm md:text-base">
          || Om Namo Venkateshaya Namaha ||
        </div>
      </div>
    </div>
  );
};

export default BalajiBanner;
