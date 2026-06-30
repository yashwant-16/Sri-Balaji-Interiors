import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import projectTours from '../data/projectToursData';

const ProjectTours = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const activeProject = projectTours[activeIndex];

  // Screen width observer for responsiveness
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Escape key handler for the video modal
  useEffect(() => {
    const handler = (e) => { 
      if (e.key === 'Escape') setShowVideo(false); 
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <div className="w-full">
      {/* Main Split Panel */}
      <div 
        style={{
          width: '100%',
          height: isMobile ? 'auto' : '520px',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 24px 60px rgba(0,0,0,0.18)'
        }}
      >
        {/* LEFT PANEL (Room Image) */}
        <div 
          style={{
            width: isMobile ? '100%' : '55%',
            height: isMobile ? '260px' : '100%',
            backgroundImage: `url('${activeProject.roomImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'background-image 0.6s ease',
            position: 'relative'
          }}
        >
          {/* Subtle Dark Gradient Overlay */}
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(0,0,0,0.15) 0%, transparent 40%)',
              pointerEvents: 'none'
            }} 
          />
        </div>

        {/* RIGHT PANEL (Content) */}
        <div 
          style={{
            width: isMobile ? '100%' : '45%',
            background: '#1C1C1C',
            padding: isMobile ? '28px 24px' : '48px 40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            color: 'white'
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col justify-center h-full"
            >
              {/* 1. Label badge */}
              <span style={{
                fontSize: '12px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#C9A065',         // gold
                fontFamily: 'Lato',
                marginBottom: '12px',
                display: 'block'
              }}>
                {activeProject.label}
              </span>

              {/* 2. Project title */}
              <h2 style={{
                fontFamily: 'Playfair Display',
                fontSize: isMobile ? '24px' : '32px',
                fontWeight: '700',
                color: '#FFFFFF',
                marginBottom: '8px',
                lineHeight: 1.2
              }}>
                {activeProject.title}
              </h2>

              {/* 3. Location line */}
              <p style={{
                fontSize: '13px',
                color: '#C9A065',
                marginBottom: '16px',
                fontFamily: 'Lato'
              }}>
                📍 {activeProject.location}
              </p>

              {/* 4. Category tags */}
              <p style={{
                fontSize: '11px',
                color: '#888',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                marginBottom: '20px'
              }}>
                {activeProject.category}
              </p>

              {/* 5. Description text */}
              <p style={{
                fontSize: isMobile ? '14px' : '15px',
                color: '#CCCCCC',
                lineHeight: 1.75,
                fontFamily: 'Lato',
                marginBottom: '32px',
                borderLeft: '3px solid #C9A065',
                paddingLeft: '16px'
              }}>
                " {activeProject.description} "
              </p>

              {/* 6. Action buttons row */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                {/* Button 1: Video Tour */}
                <button 
                  onClick={() => setShowVideo(true)} 
                  className="hover:bg-[#f0f0f0] transition-colors"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: '#FFFFFF',
                    color: '#1C1C1C',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '14px 28px',
                    fontSize: '15px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  ▶ Video Tour
                </button>

                {/* Button 2: View More Projects */}
                <button 
                  onClick={() => navigate('/portfolio')} 
                  className="hover:text-gold transition-colors"
                  style={{
                    background: 'transparent',
                    color: '#FFFFFF',
                    border: 'none',
                    fontSize: '15px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '14px 0',
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px'
                  }}
                >
                  View All Projects ›
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Project Selector Tabs */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: '12px',
          marginTop: '16px'
        }}
      >
        {projectTours.map((project, index) => (
          <div
            key={project.id}
            onClick={() => { setActiveIndex(index); setShowVideo(false); }}
            style={{
              cursor: 'pointer',
              borderRadius: '10px',
              overflow: 'hidden',
              position: 'relative',
              height: '90px',
              border: activeIndex === index 
                ? '2px solid #C9A065' 
                : '2px solid transparent',
              transition: 'border 0.2s ease',
              opacity: activeIndex === index ? 1 : 0.65
            }}
          >
            <img 
              src={project.roomImage} 
              alt={project.title}
              style={{ 
                width:'100%', height:'100%', 
                objectFit:'cover' 
              }} 
            />
            <div style={{
              position:'absolute', bottom:0, left:0, right:0,
              background:'linear-gradient(transparent, rgba(0,0,0,0.75))',
              padding:'6px 8px'
            }}>
              <p style={{
                color:'#fff', fontSize:'11px', 
                fontWeight:'600', margin:0,
                fontFamily:'Lato',
                whiteSpace:'nowrap',
                overflow:'hidden',
                textOverflow:'ellipsis'
              }}>
                {project.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal Overlay */}
      {showVideo && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.92)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }} 
          onClick={() => setShowVideo(false)}
        >
          <div 
            style={{
              position: 'relative',
              width: '90%',
              maxWidth: '900px',
              aspectRatio: '16/9',
              borderRadius: '12px',
              overflow: 'hidden'
            }} 
            onClick={e => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${activeProject.videoId}?autoplay=1&rel=0&modestbranding=1`}
              title={`${activeProject.title} - Room Tour`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ border:'none' }}
            />

            <button
              onClick={() => setShowVideo(false)}
              style={{
                position:'absolute', top:'12px', right:'12px',
                background:'rgba(255,255,255,0.15)',
                border:'none', borderRadius:'50%',
                width:'36px', height:'36px',
                color:'white', fontSize:'18px',
                cursor:'pointer', 
                backdropFilter:'blur(4px)'
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectTours;
