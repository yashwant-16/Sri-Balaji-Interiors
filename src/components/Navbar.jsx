import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();
  const navigate = useNavigate();

  // Resize listener
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getPath = (label) => {
    if (label === 'Home') return '/';
    return `/${label.toLowerCase()}`;
  };

  const isActivePage = (label) => {
    const path = getPath(label);
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  // Close mobile dropdown menu when location changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const labels = ['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'Contact'];

  return (
    <>
      <div 
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: 'rgba(250,247,242,0.98)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(201,160,101,0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 5%',
          minHeight: '64px',
          opacity: 1,
          visibility: 'visible',
          boxShadow: '0 2px 16px rgba(0,0,0,0.06)'
        }}
      >
        {/* LEFT — Original logo */}
        <div 
          onClick={() => navigate('/')} 
          style={{
            display: 'flex', 
            alignItems: 'center',
            gap: '10px', 
            cursor: 'pointer'
          }}
        >
          <img 
            src="/images/logo.png"
            alt="Sri Balaji Interiors Logo"
            style={{ 
              height: '40px', 
              width: '40px',
              borderRadius: '50%', 
              objectFit: 'cover' 
            }} 
          />
          <span 
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '18px', 
              fontWeight: '700',
              color: '#2C2C2C'
            }}
          >
            Sri Balaji Interiors
          </span>
        </div>

        {/* CENTER — All nav links visible (Hidden on mobile) */}
        {!isMobile && (
          <nav 
            style={{
              display: 'flex', 
              alignItems: 'center',
              gap: '32px'
            }}
          >
            {labels.map(label => (
              <a 
                key={label}
                onClick={() => navigate(getPath(label))}
                style={{
                  fontFamily: 'Lato, sans-serif',
                  fontSize: '13px',
                  fontWeight: '500',
                  color: isActivePage(label) ? '#C9A065' : '#2C2C2C',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  borderBottom: isActivePage(label) ? '1px solid #C9A065' : 'none',
                  paddingBottom: '2px',
                  transition: 'color 0.2s'
                }}
              >
                {label}
              </a>
            ))}
          </nav>
        )}

        {/* RIGHT — Book Free Consultation button (Hidden on mobile) */}
        {!isMobile && (
          <button 
            onClick={() => navigate('/contact')}
            style={{
              fontFamily: 'Lato, sans-serif',
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              background: 'transparent',
              border: '1px solid #C9A065',
              color: '#C9A065',
              borderRadius: '4px',
              padding: '10px 20px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            Book Free Consultation
          </button>
        )}

        {/* MOBILE HAMBURGER BUTTON (Visible only on mobile) */}
        {isMobile && (
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '5px',
              width: '32px',
              height: '32px',
              padding: 0
            }}
            aria-label="Toggle Menu"
          >
            <span style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: '#2C2C2C',
              transition: 'all 0.3s ease',
              transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
            }} />
            <span style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: '#2C2C2C',
              transition: 'all 0.3s ease',
              opacity: mobileOpen ? 0 : 1
            }} />
            <span style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: '#2C2C2C',
              transition: 'all 0.3s ease',
              transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
            }} />
          </button>
        )}
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div 
        style={{
          position: 'fixed',
          top: '68px', // directly below the fixed navbar height
          left: 0, right: 0,
          background: 'rgba(250,247,242,0.98)',
          backdropFilter: 'blur(12px)',
          zIndex: 999,
          padding: '20px 5%',
          display: mobileOpen ? 'flex' : 'none',
          flexDirection: 'column',
          gap: '0',
          borderBottom: '1px solid rgba(201,160,101,0.15)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
          maxHeight: 'calc(100vh - 100px)',
          overflowY: 'auto'
        }}
      >
        {labels.map(label => (
          <a 
            key={label}
            onClick={(e) => { 
              e.preventDefault(); 
              navigate(getPath(label)); 
              setMobileOpen(false); 
            }}
            style={{
              fontFamily: 'Lato, sans-serif',
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: '#2C2C2C',
              textDecoration: 'none',
              padding: '14px 0',
              borderBottom: '1px solid rgba(201,160,101,0.12)',
              cursor: 'pointer'
            }}
          >
            {label}
          </a>
        ))}
        <button
          onClick={() => { navigate('/contact'); setMobileOpen(false); }}
          style={{
            marginTop: '16px',
            background: '#C9A065',
            color: '#FAF7F2',
            border: 'none',
            borderRadius: '100px',
            padding: '13px 24px',
            fontFamily: 'Lato, sans-serif',
            fontSize: '12px',
            fontWeight: '700',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            cursor: 'pointer'
          }}
        >
          Book Free Consultation
        </button>
      </div>
    </>
  );
};

export default Navbar;
