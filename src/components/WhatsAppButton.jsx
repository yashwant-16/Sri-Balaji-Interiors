import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919948536840?text=Hi!%20I'm%20interested%20in%20your%20interior%20design%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 z-[9000] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg transition-transform hover:scale-110 active:scale-95 group"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      {/* Tooltip */}
      <span className="absolute right-16 bg-[#1C1612] text-white text-[11px] font-bold tracking-wider uppercase py-1.5 px-3.5 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-gold/20 z-[9001]">
        Chat on WhatsApp
      </span>

      {/* Pulse Ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping opacity-75 group-hover:animate-none" />

      <svg className="w-8 h-8 fill-current relative z-10" viewBox="0 0 24 24">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.47 16.86L2 22L7.3 20.61C8.75 21.4 10.37 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 9.26 20.92 6.78 19.05 4.9C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15C10.66 20.15 9.3 19.78 8.1 19.09L7.81 18.92L4.62 19.76L5.47 16.65L5.28 16.34C4.52 15.14 4.12 13.75 4.12 11.92C4.12 7.38 7.82 3.67 12.05 3.67M8.75 7.31C8.57 7.31 8.28 7.38 8.04 7.64C7.8 7.9 7.12 8.58 7.12 9.94C7.12 11.3 8.11 12.62 8.25 12.8C8.38 12.97 10.2 15.78 13 16.97C13.66 17.25 14.19 17.43 14.59 17.56C15.26 17.77 15.86 17.74 16.34 17.67C16.88 17.59 18 16.97 18.23 16.34C18.46 15.71 18.46 15.17 18.39 15.06C18.32 14.95 18.14 14.89 17.87 14.75C17.6 14.61 16.28 13.96 16.03 13.87C15.79 13.78 15.61 13.74 15.43 14.03C15.25 14.31 14.73 14.93 14.57 15.11C14.41 15.29 14.25 15.31 13.98 15.18C13.71 15.04 12.84 14.76 11.81 13.84C11.01 13.12 10.47 12.24 10.31 11.97C10.15 11.7 10.3 11.55 10.43 11.42C10.55 11.3 10.7 11.1 10.84 10.94C10.97 10.78 11.02 10.67 11.11 10.49C11.2 10.31 11.15 10.15 11.1 10.02C11.05 9.88 10.59 8.75 10.4 8.28C10.21 7.82 10 7.89 9.87 7.88C9.74 7.88 9.59 7.88 9.44 7.88C9.29 7.88 9.04 7.94 8.85 8.15C8.66 8.36 8.75 8.75 8.75 7.31Z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
