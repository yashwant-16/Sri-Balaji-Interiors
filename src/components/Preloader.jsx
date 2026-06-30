import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Preloader({ onComplete }) {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3400);

    const removeTimer = setTimeout(() => {
      setVisible(false);
      onComplete();
      document.body.style.overflow = '';
    }, 4200);

    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: fadeOut ? 0 : 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99999,
          background: '#0D0A07',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}
      >
        {/* Full screen video */}
        <video
          autoPlay
          muted
          playsInline
          disablePictureInPicture
          className="preloader-video"
        >
          <source src="/preloader.webm" type="video/webm" />
          <source src="/preloader.mp4" type="video/mp4" />
        </video>

        {/* Vignette overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(
            ellipse at center,
            transparent 40%,
            rgba(0,0,0,0.55) 100%
          )`,
          zIndex: 1,
          pointerEvents: 'none'
        }} />

        {/* Logo + name + loading bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <img
            src="/images/logo.png"
            alt="Sri Balaji Interiors"
            style={{
              height: '48px',
              filter: 'brightness(0) invert(1)',
              opacity: 0.9
            }}
          />

          <p style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '18px',
            color: 'rgba(255,255,255,0.85)',
            margin: 0,
            letterSpacing: '3px',
            textTransform: 'uppercase'
          }}>
            Sri Balaji Interiors
          </p>

          {/* Gold loading bar */}
          <div style={{
            width: '160px',
            height: '2px',
            background: 'rgba(255,255,255,0.15)',
            borderRadius: '2px',
            overflow: 'hidden',
            marginTop: '6px'
          }}>
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 3.4, ease: 'linear' }}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #C9A065, #F0D49A, #C9A065)',
                borderRadius: '2px'
              }}
            />
          </div>
        </motion.div>

      </motion.div>
    </AnimatePresence>
  );
}

export default Preloader;
