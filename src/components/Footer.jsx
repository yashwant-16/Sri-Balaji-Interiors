import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer
      className="text-blush pt-16 pb-8"
      style={{
        background: '#0F0C09',
        borderTop: '1px solid rgba(201,160,101,0.2)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Studio Info */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold text-white tracking-wide">
              Sri Balaji Interiors
            </h3>
            <p className="font-cormorant italic text-gold text-lg tracking-wider">
              "Designing Spaces, Defining Lives"
            </p>
            <p className="text-sm text-blush/75 leading-relaxed font-lato">
              Rooted in devotion, craftsmanship, and creative passion, we bring your dream spaces to life with royal Indian heritage and modern luxury.
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://www.instagram.com/sribalajiinteriorsstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-taupe/20 border border-taupe/30 flex items-center justify-center text-blush hover:text-gold hover:border-gold transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                </svg>
              </a>
              {/* <a
                href="https://facebook.com/sribalajiinteriors"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-taupe/20 border border-taupe/30 flex items-center justify-center text-blush hover:text-gold hover:border-gold transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.95 14.22 5.95C15.31 5.95 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A9.96 9.96 0 0,0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                </svg>
              </a> */}
              <a
                href="https://www.youtube.com/@SriBalajiInteriors-s2z/shorts"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-taupe/20 border border-taupe/30 flex items-center justify-center text-blush hover:text-gold hover:border-gold transition-colors duration-200"
                aria-label="YouTube"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10,15L15.19,12L10,9V15M21.56,7.11C21.72,7.72 21.84,8.68 21.91,10C21.97,11.29 22,12.18 22,12.65V13C22,13.82 21.92,15.14 21.75,16.94C21.58,18.74 21.11,19.5 20.35,19.64C19.5,19.8 17.75,19.89 15.11,19.93C12.47,19.97 10.89,20 10.35,20H9.65C9.11,20 7.53,19.97 4.89,19.93C2.25,19.89 0.5,19.8 0.35,19.64C-0.41,19.5 -0.88,18.74 -1.05,16.94C-1.22,15.14 -1.3,13.82 -1.3,13V12.65C-1.3,12.18 -1.27,11.29 -1.21,10C-1.14,8.68 -1.02,7.72 -0.86,7.11C-0.61,6.15 -0.09,5.5 0.72,5.25C1.5,5 3.25,4.89 5.89,4.86C8.53,4.83 10.11,4.82 10.65,4.82H11.35C11.89,4.82 13.47,4.83 16.11,4.86C18.75,4.89 20.5,5 21.28,5.25C22.09,5.5 21.61,6.15 21.56,7.11Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-playfair text-lg font-semibold text-white tracking-wide border-b border-taupe/30 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 font-lato text-sm">
              <li>
                <Link to="/" className="text-blush/80 hover:text-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-blush/80 hover:text-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-blush/80 hover:text-gold transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-blush/80 hover:text-gold transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-blush/80 hover:text-gold transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link to="/contact" className="text-blush/80 hover:text-gold transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="space-y-4">
            <h4 className="font-playfair text-lg font-semibold text-white tracking-wide border-b border-taupe/30 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2.5 font-lato text-sm">
              <li>
                <Link to="/services#residential" className="text-blush/80 hover:text-gold transition-colors">Residential Interiors</Link>
              </li>
              <li>
                <Link to="/services#commercial" className="text-blush/80 hover:text-gold transition-colors">Commercial Interiors</Link>
              </li>
              <li>
                <Link to="/services#kitchens" className="text-blush/80 hover:text-gold transition-colors">Modular Kitchens</Link>
              </li>
              <li>
                <Link to="/services#wardrobes" className="text-blush/80 hover:text-gold transition-colors">Wardrobe Design</Link>
              </li>
              <li>
                <Link to="/services#ceilings" className="text-blush/80 hover:text-gold transition-colors">False Ceilings &amp; Lighting</Link>
              </li>
              <li>
                <Link to="/services#tvwalls" className="text-blush/80 hover:text-gold transition-colors">TV Units &amp; Entertainment</Link>
              </li>
              <li>
                <Link to="/services#bedrooms" className="text-blush/80 hover:text-gold transition-colors">Bedroom Design</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h4 className="font-playfair text-lg font-semibold text-white tracking-wide border-b border-taupe/30 pb-2">
              Contact Info
            </h4>
            <ul className="space-y-4 font-lato text-sm">
              <li className="flex items-start space-x-3 text-blush/80">
                <MapPin size={22} className="text-gold shrink-0 mt-0.5" />
                <span>
                  Sri Balaji Interiors Studio,<br />
                  Boduppal,<br />
                  Hyderabad, Telangana 500092
                </span>
              </li>
              <li className="flex items-center space-x-3 text-blush/80">
                <Phone size={18} className="text-gold shrink-0" />
                <a href="tel:+919948536840" className="hover:text-gold transition-colors">
                  +91 99485 36840
                </a>
              </li>
              <li className="flex items-center space-x-3 text-blush/80">
                <Mail size={18} className="text-gold shrink-0" />
                <a href="mailto:sbinteriorschirra@gmail.com" className="hover:text-gold transition-colors">
                  sbinteriorschirra@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-taupe/20 pt-8 flex flex-col md:flex-row items-center justify-between font-lato text-xs text-blush/60">
          <p className="mb-4 md:mb-0">
            &copy; 2026 Sri Balaji Interiors. All Rights Reserved.
          </p>
          <p className="mb-4 md:mb-0">
            Designed with <span className="text-gold">&#x2764;</span> by <span className="text-gold font-bold">Syncmates Design Studio(8355970931)</span>
          </p>
          <div className="flex space-x-4">
            <Link to="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-gold transition-colors">Terms</Link>
            <Link to="#" className="hover:text-gold transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
