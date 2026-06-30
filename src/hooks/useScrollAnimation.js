import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = () => {
  const location = useLocation();

  useEffect(() => {
    // Kill all existing scroll triggers to start fresh on the new route
    ScrollTrigger.getAll().forEach(t => t.kill());

    const ctx = gsap.context(() => {
      const isTouch = window.matchMedia('(hover: none)').matches;

      // FADE UP — any element with class .anim-fadeup
      gsap.utils.toArray('.anim-fadeup').forEach(el => {
        el.style.willChange = 'transform, opacity';
        gsap.fromTo(el,
          { opacity: 0, y: 60 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.9, 
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' }
          }
        );
      });

      // FADE LEFT — class .anim-fadeleft
      gsap.utils.toArray('.anim-fadeleft').forEach(el => {
        el.style.willChange = 'transform, opacity';
        gsap.fromTo(el,
          { opacity: 0, x: -80 },
          { 
            opacity: 1, 
            x: 0, 
            duration: 1, 
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%' }
          }
        );
      });

      // FADE RIGHT — class .anim-faderight
      gsap.utils.toArray('.anim-faderight').forEach(el => {
        el.style.willChange = 'transform, opacity';
        gsap.fromTo(el,
          { opacity: 0, x: 80 },
          { 
            opacity: 1, 
            x: 0, 
            duration: 1, 
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%' }
          }
        );
      });

      // STAGGER CHILDREN — parent class .anim-stagger
      gsap.utils.toArray('.anim-stagger').forEach(parent => {
        const children = Array.from(parent.children);
        children.forEach(child => {
          child.style.willChange = 'transform, opacity';
        });
        gsap.fromTo(children,
          { opacity: 0, y: 40 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.7, 
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: { trigger: parent, start: 'top 85%' }
          }
        );
      });

      // SCALE IN — class .anim-scalein
      gsap.utils.toArray('.anim-scalein').forEach(el => {
        el.style.willChange = 'transform, opacity';
        gsap.fromTo(el,
          { opacity: 0, scale: 0.88 },
          { 
            opacity: 1, 
            scale: 1, 
            duration: 0.8, 
            ease: 'back.out(1.4)',
            scrollTrigger: { trigger: el, start: 'top 88%' }
          }
        );
      });

      // PARALLAX IMAGE — class .anim-parallax
      gsap.utils.toArray('.anim-parallax').forEach(el => {
        el.style.willChange = 'transform';
        gsap.to(el, {
          yPercent: isTouch ? -8 : -18,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });
    });

    // Refresh ScrollTrigger to calculate correct layout measurements
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      ctx.revert();
    };
  }, [location.pathname]);
};

export default useScrollAnimation;
