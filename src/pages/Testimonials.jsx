import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProjectTours from '../components/ProjectTours';

const Testimonials = () => {
  const [gridCols, setGridCols] = React.useState('repeat(3, 1fr)');

  React.useEffect(() => {
    const handleResize = () => {
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
    <div className="pb-20">
      <Helmet>
        <title>Client Reviews & Testimonials | Sri Balaji Interiors</title>
        <meta name="description" content="Read client reviews and testimonials. Find out why families in Hyderabad trust Sri Balaji Interiors for premium residential projects." />
      </Helmet>

      {/* Project Tours Hero Section */}
      <section style={{
        padding: '80px 5%',
        background: '#FAF7F2'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }} className="anim-fadeup">
          <span style={{
            fontFamily: 'Cormorant Garamond',
            fontStyle: 'italic',
            color: '#7A6A5A',
            fontSize: '16px',
            letterSpacing: '2px'
          }}>
            Our Work Speaks
          </span>
          <h2 style={{
            fontFamily: 'Playfair Display',
            fontSize: '36px',
            color: '#2C2C2C',
            margin: '8px 0 0'
          }}>
            Project Tours
          </h2>
          <div style={{
            width: '60px', height: '2px',
            background: '#C9A065',
            margin: '16px auto 0'
          }} />
        </div>
        <div className="anim-scalein">
          <ProjectTours />
        </div>
      </section>

      {/* Rating Overview Dashboard */}
      <section className="py-12 px-4 max-w-4xl mx-auto anim-fadeup">
        <div className="bg-white border border-blush rounded-md p-8 text-center shadow-sm space-y-4">
          <div className="font-playfair text-6xl font-extrabold text-gold">4.9</div>
          <div className="flex justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} className="fill-gold text-gold" />
            ))}
          </div>
          <p className="font-lato text-sm text-taupe tracking-wide max-w-md mx-auto">
            Based on 120+ verified Google and in-house client reviews from premium residential projects across Hyderabad.
          </p>
        </div>
      </section>

      {/* Written Reviews Grid Section */}
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
          }}/>
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
              }}/>

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

    </div>
  );
};

export default Testimonials;
