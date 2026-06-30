import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import portfolioData from '../data/portfolioData';
import ProjectTours from '../components/ProjectTours';
import ServicesInteractive from '../components/ServicesInteractive';
import GalleryHero from '../components/GalleryHero';

const Home = () => {
  const navigate = useNavigate();
  const [portfolioRef, portfolioInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Track mobile and grid column layout
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
  const [gridCols, setGridCols] = React.useState('repeat(3, 1fr)');

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setGridCols('1fr');
      } else if (window.innerWidth < 1024) {
        setGridCols('repeat(2, 1fr)');
      } else {
        setGridCols('repeat(3, 1fr)');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Inspiration items
  const inspirationItems = [
    { image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&q=80', tag: 'Japandi' },
    { image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80', tag: 'Modern Luxury' },
    { image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80', tag: 'Boho Chic' },
    { image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80', tag: 'Minimalist' },
    { image: 'https://images.unsplash.com/photo-1615529162924-f8605388461d?w=600&q=80', tag: 'Royal Classic' },
    { image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80', tag: 'Contemporary' },
  ];

  const featuredPortfolio = portfolioData.slice(0, 6);

  const stats = [
    { value: "200+", label: "Projects Completed" },
    { value: "19+", label: "Years of Experience" },
    { value: "200+", label: "Happy Families" },
    { value: "15+", label: "Awards Won" }
  ];

  // Specific 6 client images from the folders
  const instagramImages = [
    '/images/tv-units/tv1.jpg',
    '/images/bedrooms/bedroom1.jpg',
    '/images/wardrobes/wardrobe1.jpg',
    '/images/walls/IMG-20260629-WA0028.jpg',
    '/images/ceilings/ceiling2.jpg',
    '/images/partitions/IMG-20260629-WA0117.jpg'
  ];

  const instagramFallbacks = [
    'https://images.unsplash.com/photo-1615529162924-f8605388461d?w=400&h=400&fit=crop&q=80',
    'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&h=400&fit=crop&q=80',
    'https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=400&h=400&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=400&fit=crop&q=80',
    'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=400&h=400&fit=crop&q=80',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&q=80'
  ];

  const reviews = [
    {
      name: "A Nishanth",
      location: "Gachibowli, Hyderabad",
      project: "Modular Kitchen & TV Unit",
      rating: 5,
      review: "We got our Modular Kitchen and TV unit designed by Sri Balaji Interiors. The craftsmanship is top-notch, and the delivery was right on time! The team was professional throughout. Strongly recommended."
    },
    {
      name: "Neha Reddy",
      location: "Jubilee Hills, Hyderabad",
      project: "Bedroom & Walk-in Wardrobe",
      rating: 5,
      review: "Their attention to detail is mind-blowing. The walk-in wardrobe and bedroom panels they crafted feel like a premium luxury hotel. The 3D visualization they showed before execution was exactly what was delivered. Extremely happy."
    },
    {
      name: "Hemanth Babu",
      location: "Kondapur, Hyderabad",
      project: "Full Home Interiors",
      rating: 5,
      review: "The entire process was stress-free. From 3D visuals to material selection and handover, their team handled everything perfectly. Best turnkey interior service in Hyderabad."
    },
    {
      name: "Kushal Kumar",
      location: "Madhapur, Hyderabad",
      project: "False Ceiling & Living Room",
      rating: 5,
      review: "The false ceiling design they did for our living room completely transformed the space. The LED lighting plan was expertly done. Very reasonable pricing for the quality delivered."
    },
    {
      name: "Ramesh K",
      location: "Miyapur, Hyderabad",
      project: "Modular Kitchen",
      rating: 5,
      review: "Excellent work on our modular kitchen. The storage solutions they suggested were brilliant. Every cabinet has a purpose. The anti-slam fittings are still working perfectly after 8 months."
    },
    {
      name: "Anitha Krishnan",
      location: "Banjara Hills, Hyderabad",
      project: "Bedroom & Wardrobe",
      rating: 5,
      review: "I was skeptical initially but the team put all doubts to rest. The bedroom design exceeded expectations. Communication was smooth throughout and they finished 3 days ahead of schedule."
    }
  ];

  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Sri Balaji Interiors | Premium Residential & Commercial Interior Designers in Hyderabad</title>
        <meta name="description" content="Experience royal Indian heritage meets modern luxury. Premium residential & commercial interior design services in Hyderabad. Book a free consultation." />
        <meta property="og:title" content="Sri Balaji Interiors | Premium Interior Studio Hyderabad" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1920&q=90" />
      </Helmet>

      {/* 1. Hero Section */}
      <section style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url('https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1920&q=90')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        {/* Dark overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.40)',
          zIndex: 1
        }} />

        {/* Hero content */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '0 5%',
          maxWidth: '900px'
        }}>
          {/* Label */}
          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: 'clamp(15px, 1.8vw, 19px)',
            letterSpacing: '3.5px',
            textTransform: 'uppercase',
            marginBottom: '16px',
            display: 'inline-block',
            background: `linear-gradient(
              105deg,
              #C9956A 0%,
              #E8C99A 28%,
              #F5E6C8 50%,
              #E0B97A 72%,
              #BF8A50 100%
            )`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
            filter: 'drop-shadow(0px 1px 8px rgba(232,195,130,0.35))'
          }}>
            Welcome to Sri Balaji Interiors
          </p>

          {/* H1 */}
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(40px, 6vw, 72px)',
            fontWeight: '800',
            color: '#FFFFFF',
            lineHeight: 1.1,
            margin: '0 0 20px'
          }}>
            Where Luxury Meets Living
          </h1>

          {/* Subtext */}
          <p style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: 'clamp(15px, 1.6vw, 18px)',
            color: 'rgba(255,255,255,0.80)',
            lineHeight: 1.7,
            maxWidth: '520px',
            margin: '0 auto 36px'
          }}>
            Premium Residential & Commercial Interior Design
          </p>

          {/* Two buttons */}
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button onClick={() => navigate('/portfolio')}
              style={{
                background: '#C9A065',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '4px',
                padding: '16px 36px',
                fontSize: '14px',
                fontWeight: '700',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                cursor: 'pointer'
              }}>
              EXPLORE OUR WORK
            </button>

            <button onClick={() => navigate('/contact')}
              style={{
                background: 'transparent',
                color: '#FFFFFF',
                border: '1px solid #FFFFFF',
                borderRadius: '4px',
                padding: '16px 36px',
                fontSize: '14px',
                fontWeight: '600',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                cursor: 'pointer'
              }}>
              BOOK FREE CONSULTATION
            </button>
          </div>
        </div>

        {/* Scroll chevron */}
        <div style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          color: 'rgba(255,255,255,0.7)',
          fontSize: '24px',
          animation: 'bounce 2s infinite'
        }}>
          ∨
        </div>
      </section>

      {/* 2. Stats Section */}
      <section id="stats" style={{
        background: '#FAF7F2',
        borderTop: '1px solid rgba(201,160,101,0.2)',
        borderBottom: '1px solid rgba(201,160,101,0.2)',
        padding: '0'
      }}>
        <div style={{
          maxWidth: '100%',
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: '0'
        }}>
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                padding: isMobile ? '20px 16px' : '28px 24px',
                textAlign: 'center',
                borderRight: isMobile
                  ? (i % 2 === 0 ? '1px solid rgba(201,160,101,0.2)' : 'none')
                  : (i < 3 ? '1px solid rgba(201,160,101,0.2)' : 'none'),
                borderBottom: isMobile && i < 2
                  ? '1px solid rgba(201,160,101,0.2)'
                  : 'none'
              }}
            >
              <div style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(28px, 3.5vw, 42px)',
                fontWeight: '700',
                color: '#C9A065',
                lineHeight: 1,
                marginBottom: '6px'
              }}>
                {stat.value}
              </div>
              <div style={{
                fontFamily: 'Lato, sans-serif',
                fontSize: '10px',
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                color: '#7A6A5A'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Project Tours Section */}
      <section style={{
        padding: '80px 5%',
        background: '#FAF7F2'
      }}>
        <div className="text-center mb-10 anim-fadeup">
          <span className="section-label">Our Work Speaks</span>
          <h2 className="section-heading">Project Tours</h2>
          <div className="gold-divider" />
        </div>
        <div className="anim-scalein">
          <ProjectTours />
        </div>
      </section>

      {/* 4. Services Interactive Section */}
      <section style={{
        padding: '80px 0',
        background: '#FAF7F2'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '48px',
          padding: '0 5%'
        }}>
          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: '16px',
            color: '#C9A065',
            letterSpacing: '2px',
            marginBottom: '8px'
          }}>
            Exquisite Craftsmanship
          </p>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: '700',
            color: '#2C2C2C',
            margin: 0
          }}>
            Our Signature Services
          </h2>
        </div>

        <ServicesInteractive />
      </section>

      {/* 5. Gallery Hero Section */}
      <GalleryHero showPortfolioLink={true} />

      {/* Featured Portfolio Section */}
      <section className="bg-blush/30 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div ref={portfolioRef} className="text-center mb-16">
            <span className="font-cormorant italic text-lg text-gold font-semibold tracking-wider block mb-2">Visual Inspirations</span>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-charcoal">Our Recent Work</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPortfolio.map((item, index) => {
              const [itemRef, itemInView] = useInView({ triggerOnce: true, threshold: 0.1 });
              return (
                <motion.div
                  ref={itemRef}
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={itemInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative overflow-hidden group rounded-sm shadow-md aspect-[4/3] bg-charcoal cursor-pointer"
                  onClick={() => navigate('/portfolio')}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = '/images/placeholders/default.jpg'
                    }}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-20">
                    <h4 className="font-playfair text-xl font-bold text-white mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {item.title}
                    </h4>
                    <span className="font-lato text-xs tracking-wider text-gold font-bold uppercase translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {item.category.replace('-', ' ')}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-block bg-gold border border-gold hover:bg-gold/90 text-white font-bold text-sm uppercase tracking-wider py-4 px-8 rounded transition-all shadow-md"
            >
              View All Projects &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Founder Section */}
      <section style={{
        background: '#1C1612',
        padding: 'clamp(60px, 8vw, 100px) 5%'
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '48px' : '80px',
          alignItems: 'center'
        }}>
          {/* LEFT — Founder photo */}
          <div style={{ position: 'relative' }}>
            <div style={{
              width: '100%',
              aspectRatio: '3/4',
              borderRadius: '4px',
              overflow: 'hidden',
              border: '1px solid rgba(201,160,101,0.25)'
            }}>
              <img
                src="/images/founder.jpg"
                alt="Founder - Sri Balaji Interiors"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top'
                }}
              />
            </div>

            {/* Overlapping badge: desktop vs mobile repositioning */}
            {!isMobile ? (
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                right: '-20px',
                background: 'linear-gradient(135deg, #C9A065, #E8C99A)',
                padding: '20px 24px',
                borderRadius: '4px',
                textAlign: 'center',
                zIndex: 2
              }}>
                <div style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '32px',
                  fontWeight: '800',
                  color: '#1C1612',
                  lineHeight: 1
                }}>
                  19+
                </div>
                <div style={{
                  fontFamily: 'Lato, sans-serif',
                  fontSize: '9px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#1C1612',
                  marginTop: '4px'
                }}>
                  Years of Mastery
                </div>
              </div>
            ) : (
              <div style={{
                position: 'absolute',
                bottom: '12px',
                right: '12px',
                background: 'linear-gradient(135deg, #C9A065, #E8C99A)',
                padding: '10px 14px',
                borderRadius: '4px',
                textAlign: 'center',
                zIndex: 2
              }}>
                <div style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '20px',
                  fontWeight: '800',
                  color: '#1C1612',
                  lineHeight: 1
                }}>
                  19+
                </div>
                <div style={{
                  fontFamily: 'Lato, sans-serif',
                  fontSize: '8px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  color: '#1C1612',
                  marginTop: '2px'
                }}>
                  Years of Mastery
                </div>
              </div>
            )}
          </div>

          {/* RIGHT — Quote and bio */}
          <div>
            <span style={{
              fontFamily: 'Lato, sans-serif',
              fontSize: '11px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#C9A065',
              display: 'block',
              marginBottom: '20px'
            }}>
              A Note From The Founder
            </span>

            <div style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(24px, 2.8vw, 36px)',
              color: '#FFFFFF',
              lineHeight: 1.5,
              borderLeft: '3px solid #C9A065',
              paddingLeft: '24px',
              marginBottom: '28px'
            }}>
              "For nineteen years, my hands have shaped homes that feel like quiet luxury — one joint, one shadow, one room at a time."
            </div>

            <div style={{
              width: '40px',
              height: '1px',
              background: '#C9A065',
              marginBottom: '16px'
            }} />

            <p style={{
              fontFamily: 'Lato, sans-serif',
              fontSize: '14px',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.8,
              marginBottom: '8px'
            }}>
              Founder & Principal Designer
            </p>
            <p style={{
              fontFamily: 'Lato, sans-serif',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.35)',
              letterSpacing: '1px'
            }}>
              Sri Balaji Interiors · Hyderabad
            </p>
          </div>
        </div>
      </section>

      {/* 7. Written Reviews Grid Section */}
      <section style={{
        background: '#FAF7F2',
        padding: 'clamp(60px, 8vw, 100px) 5%'
      }}>
        {/* Heading area */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{
            fontFamily: 'Lato',
            fontSize: '11px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#C9A065',
            display: 'block',
            marginBottom: '12px'
          }}>
            Client Experiences
          </span>
          <h2 style={{
            fontFamily: 'Playfair Display',
            fontSize: 'clamp(28px, 4vw, 44px)',
            color: '#2C2C2C',
            margin: '0 0 16px'
          }}>
            What Our Clients Say
          </h2>
          <div style={{
            width: '48px',
            height: '2px',
            background: '#C9A065',
            margin: '0 auto'
          }} />
        </div>

        {/* Reviews Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: gridCols,
          gap: '24px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {reviews.map((review, i) => (
            <div key={i} style={{
              background: '#FFFFFF',
              borderRadius: '4px',
              padding: '32px 28px',
              borderTop: '3px solid #C9A065',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              {/* Large decorative quote mark */}
              <div style={{
                fontFamily: 'Cormorant Garamond',
                fontSize: '72px',
                color: '#C9A065',
                opacity: 0.25,
                lineHeight: 0.8,
                marginBottom: '-8px'
              }}>
                "
              </div>

              {/* Star rating */}
              <div style={{ display: 'flex', gap: '3px' }}>
                {[...Array(review.rating)].map((_, s) => (
                  <span key={s} style={{
                    color: '#C9A065',
                    fontSize: '14px'
                  }}>★</span>
                ))}
              </div>

              {/* Review text */}
              <p style={{
                fontFamily: 'Lato',
                fontSize: '14px',
                color: '#555',
                lineHeight: 1.8,
                margin: 0,
                flex: 1
              }}>
                {review.review}
              </p>

              {/* Divider */}
              <div style={{
                width: '32px',
                height: '1px',
                background: 'rgba(201,160,101,0.4)'
              }} />

              {/* Client info */}
              <div>
                <p style={{
                  fontFamily: 'Playfair Display',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#2C2C2C',
                  margin: '0 0 4px'
                }}>
                  {review.name}
                </p>
                <p style={{
                  fontFamily: 'Lato',
                  fontSize: '11px',
                  color: '#7A6A5A',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  margin: '0 0 4px'
                }}>
                  {review.location}
                </p>
                <p style={{
                  fontFamily: 'Lato',
                  fontSize: '12px',
                  color: '#C9A065',
                  margin: 0,
                  fontStyle: 'italic'
                }}>
                  {review.project}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verified client footer */}
        <p style={{
          textAlign: 'center',
          fontFamily: 'Lato',
          fontSize: '13px',
          color: '#7A6A5A',
          marginTop: '40px',
          letterSpacing: '0.5px'
        }}>
          ★ All reviews are from verified clients of Sri Balaji Interiors, Hyderabad
        </p>
      </section>

      {/* VIDEO TESTIMONIALS — UNCOMMENT WHEN CLIENT PROVIDES REAL VIDEOS
      <section className="bg-[#FAF7F2] py-20 px-4 border-t border-b border-blush">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 anim-fadeup">
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-charcoal">
              Hear From Our Clients
            </h2>
            <p className="font-cormorant italic text-lg text-taupe mt-2">
              Real stories from real homes
            </p>
            <div className="w-24 h-[2px] bg-gold mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12 anim-stagger">
            <div style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)'
            }} className="will-change-transform">
              <iframe
                style={{
                  position: 'absolute',
                  top: 0, left: 0,
                  width: '100%', height: '100%',
                  border: 'none',
                  borderRadius: '12px'
                }}
                src="https://www.youtube.com/embed/2Vv-BfVoq4g?rel=0&modestbranding=1"
                title="Client Testimonial - Sri Balaji Interiors"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)'
            }} className="will-change-transform">
              <iframe
                style={{
                  position: 'absolute',
                  top: 0, left: 0,
                  width: '100%', height: '100%',
                  border: 'none',
                  borderRadius: '12px'
                }}
                src="https://www.youtube.com/embed/ScMzIvxBSi4?rel=0&modestbranding=1"
                title="Client Testimonial - Sri Balaji Interiors"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="text-center mt-10 anim-fadeup">
            <Link to="/contact" className="font-lato text-sm font-bold text-gold hover:text-gold/80 inline-flex items-center group">
              Have a project in mind? Let's talk <span className="ml-1 group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
      */}

      {/* Design Inspiration Section (Purely visual masonry grid replacing the Blog) */}
      <section className="py-20 px-4 bg-white border-t border-blush">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-charcoal">Design Inspiration</h2>
            <p className="font-lato text-sm text-taupe mt-2">
              Trends we love, styles we create
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {inspirationItems.map((item, idx) => (
              <div
                key={idx}
                className="break-inside-avoid relative overflow-hidden group rounded-sm shadow-md cursor-pointer border border-blush bg-blush/10"
              >
                <img
                  src={item.image}
                  alt={item.tag}
                  loading="lazy"
                  className="w-full h-auto object-cover block transition-transform duration-500 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                  <span className="bg-gold text-white font-lato text-xs font-bold uppercase tracking-widest py-2 px-5 rounded-full select-none">
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-12 font-lato text-sm">
            <a
              href="https://www.instagram.com/sribalajiinteriorsstudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold font-bold hover:text-gold/80 inline-flex items-center group"
            >
              Follow us on Instagram for daily inspiration <span className="ml-1 group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a>
          </p>
        </div>
      </section>

      {/* 8. Instagram Section */}
      <section style={{
        background: '#FAF7F2',
        padding: 'clamp(60px, 7vw, 90px) 5%'
      }}>
        {/* Heading area */}
        <div style={{
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(26px, 3vw, 36px)',
            fontWeight: '700',
            color: '#2C2C2C',
            margin: '0 0 8px'
          }}>
            Follow Our Journey
          </h2>
          <a
            href="https://www.instagram.com/sribalajiinteriorsstudio/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '18px',
              color: '#C9A065',
              textDecoration: 'none',
              letterSpacing: '0.5px'
            }}
          >
            @sribalajiinteriorsstudio
          </a>
        </div>

        {/* 6-image grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
          gap: isMobile ? '8px' : '12px',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {instagramImages.map((imagePath, idx) => (
            <a
              key={idx}
              href="https://www.instagram.com/sribalajiinteriorsstudio/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                aspectRatio: '1/1',
                overflow: 'hidden',
                borderRadius: '8px',
                position: 'relative'
              }}
            >
              <img
                src={imagePath}
                alt="Sri Balaji Interiors project"
                loading="lazy"
                onError={(e) => {
                  e.target.src = instagramFallbacks[idx];
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                  filter: 'saturate(1.05)'
                }}
              />

              {/* Instagram hover overlay */}
              <div className="insta-overlay" style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(201,160,101,0.20)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'opacity 0.3s ease'
              }}>
                {/* Instagram icon */}
                <svg width="28" height="28" viewBox="0 0 24 24"
                  fill="none" stroke="white" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="white" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Follow button below grid */}
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <a
            href="https://www.instagram.com/sribalajiinteriorsstudio/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'Lato, sans-serif',
              fontSize: '12px',
              fontWeight: '700',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#C9A065',
              textDecoration: 'none',
              border: '1px solid rgba(201,160,101,0.4)',
              borderRadius: '100px',
              padding: '12px 28px',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#C9A065';
              e.currentTarget.style.color = '#FAF7F2';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#C9A065';
            }}
          >
            Follow on Instagram →
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
