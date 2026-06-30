import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const today = new Date().toISOString().split('T')[0];

  const preselectedService = searchParams.get('service') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    service: preselectedService,
    budget: 'Under ₹5L',
    consultationDate: today,
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const preSelectedService = params.get('service');

    if (preSelectedService) {
      setFormData(prev => ({
        ...prev,
        service: preSelectedService
      }));
    }
  }, [location.search]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.fullName || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }

    // Build a clean WhatsApp message from form data
    const message =
      `New Inquiry from Website

*Name:* ${formData.fullName}
*Phone:* ${formData.phone}
${formData.email ? `*Email:* ${formData.email}\n` : ''}${formData.city ? `*City/Area:* ${formData.city}\n` : ''}${formData.service ? `*Service Interested In:* ${formData.service}\n` : ''}${formData.budget ? `*Budget Range:* ${formData.budget}\n` : ''}${formData.consultationDate ? `*Preferred Date:* ${formData.consultationDate}\n` : ''}${formData.message ? `\n*Project Description:*\n${formData.message}` : ''}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '918073759181';
    // Replace with client's actual WhatsApp 
    // Business number, country code + number, 
    // no + or spaces

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');

    // Show success state
    setSubmitted(true);

    // Reset form after short delay
    setTimeout(() => {
      setFormData({
        fullName: '', phone: '', email: '',
        city: '', service: '', budget: '',
        consultationDate: '', message: ''
      });
    }, 500);
  };

  return (
    <div className="pb-0">
      <Helmet>
        <title>Contact & Booking | Sri Balaji Interiors</title>
        <meta name="description" content="Book a free 3D design consultation. Get in touch with our studio in Jubilee Hills, Hyderabad." />
      </Helmet>

      <section style={{
        position: 'relative',
        minHeight: '100vh',
        padding: '0',
        overflow: 'hidden'
      }}>

        {/* Background: 3D floor plan image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0
        }}>
          <img
            src="/images/contact-bg.jpg"
            alt=""
            aria-hidden="true"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              // This is the key — lower opacity 
              // so it reads as a tasteful watermark
              opacity: 0.55
            }}
          />
        </div>

        {/* Dark gradient overlay — heavier at bottom */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: `linear-gradient(
            160deg,
            rgba(13, 10, 7, 0.38) 0%,
            rgba(13, 10, 7, 0.28) 50%,
            rgba(13, 10, 7, 0.42) 100%
          )`
        }} />

        {/* Page heading area — sits above the panels */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '80px 5% 48px'
        }}>
          {/* Small italic label */}
          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: '17px',
            color: '#C9A065',
            letterSpacing: '2px',
            margin: '0 0 10px'
          }}>
            Get In Touch
          </p>

          {/* Main heading */}
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(36px, 5vw, 60px)',
            fontWeight: '700',
            color: '#FFFFFF',
            margin: 0
          }}>
            Contact &amp; Booking
          </h1>
        </div>

        {/* Two panel row */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1.6fr',
          gap: '24px',
          padding: isMobile ? '0 4% 60px' : '0 5% 80px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>

          {/* LEFT PANEL — Studio info + map */}
          <div style={{
            background: 'rgba(20, 16, 12, 0.88)',
            backdropFilter: 'blur(12px)',
            borderRadius: '16px',
            border: '1px solid rgba(201, 160, 101, 0.2)',
            padding: '40px 36px',
            color: '#FFFFFF'
          }}>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '24px',
              fontWeight: '600',
              marginBottom: '12px'
            }}>
              Sri Balaji Interiors Studio
            </h2>
            <p style={{
              fontFamily: 'Lato, sans-serif',
              fontSize: '14px',
              color: '#BBBBBB',
              lineHeight: 1.7,
              marginBottom: '28px'
            }}>
              Visit our premium display center to feel
              different surface coatings, fluted wood
              profiles, and modular wardrobe hinge actions.
            </p>

            <div className="space-y-6 font-lato text-sm mt-8">
              {/* Address */}
              <div className="flex items-start space-x-3 text-white">
                <MapPin className="text-gold shrink-0 mt-0.5" size={20} />
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-wider text-gold mb-1">Studio Location</h5>
                  <p className="text-sm text-gray-300">
                    Sri Balaji Interiors,<br />
                    Boduppal, Hyderabad, Telangana - 500092
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3 text-white">
                <Phone className="text-gold shrink-0 mt-0.5" size={20} />
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-wider text-gold mb-1">Call Us Directly</h5>
                  <p className="text-sm font-semibold text-white">
                    <a href="tel:+919948536840" className="hover:text-gold transition-colors">
                      +91 99485 36840
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3 text-white">
                <Mail className="text-gold shrink-0 mt-0.5" size={20} />
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-wider text-gold mb-1">Email Correspondence</h5>
                  <p className="text-sm text-gray-300">
                    <a href="mailto:sbinteriorschirra@gmail.com" className="hover:text-gold transition-colors">
                      sbinteriorschirra@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-3 text-white">
                <Clock className="text-gold shrink-0 mt-0.5" size={20} />
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-wider text-gold mb-1">Studio Hours</h5>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Monday - Saturday: 09:00 AM - 05:00 PM<br />
                    Sunday: Closed (Prior appointment only)
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Container */}

          </div>

          {/* RIGHT PANEL — Inquiry form */}
          <div style={{
            background: 'rgba(245, 237, 227, 0.96)',
            backdropFilter: 'blur(8px)',
            borderRadius: '16px',
            border: '1px solid rgba(201,160,101,0.15)',
            padding: '40px 40px'
          }}>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '26px',
              color: '#2C2C2C',
              marginBottom: '8px'
            }}>
              Request Consultation
            </h2>
            <p style={{
              fontFamily: 'Lato, sans-serif',
              fontSize: '13px',
              color: '#7A6A5A',
              marginBottom: '28px',
              lineHeight: 1.6
            }}>
              Fill out this inquiry form, and our lead design
              consultant will get in touch with you within
              24 business hours.
            </p>

            {submitted && (
              <div style={{
                background: 'rgba(201,160,101,0.10)',
                border: '1px solid rgba(201,160,101,0.35)',
                borderRadius: '12px',
                padding: '28px',
                textAlign: 'center',
                marginBottom: '24px'
              }}>
                <div style={{
                  width: '52px', height: '52px',
                  borderRadius: '50%',
                  background: '#25D366',
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 14px',
                  fontSize: '22px', color: '#FFFFFF'
                }}>
                  ✓
                </div>
                <p style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '20px', color: '#2C2C2C',
                  margin: '0 0 8px', fontWeight: '700'
                }}>
                  WhatsApp Opened!
                </p>
                <p style={{
                  fontFamily: 'Lato, sans-serif',
                  fontSize: '14px', color: '#7A6A5A',
                  margin: '0 0 4px', lineHeight: 1.7
                }}>
                  Please tap "Send" in the WhatsApp window
                  to complete your inquiry. We'll respond
                  within a few hours.
                </p>
                <p style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontStyle: 'italic', fontSize: '13px',
                  color: '#C9A065', marginTop: '12px'
                }}>
                  || Sri Venkatesaya Namaha ||
                </p>
              </div>
            )}

            {formData.service && (
              <div style={{
                background: 'rgba(201,160,101,0.10)',
                border: '1px solid rgba(201,160,101,0.3)',
                borderRadius: '8px',
                padding: '12px 16px',
                marginBottom: '20px',
                fontFamily: 'Lato, sans-serif',
                fontSize: '13px',
                color: '#C9A065'
              }}>
                ✓ Inquiring about: <strong>{formData.service}</strong>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5 font-lato" noValidate>

              {/* Row 1: Full Name (full width) */}
              <div className="flex flex-col space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-taupe" htmlFor="fullName">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="contact-input"
                />
              </div>

              {/* Row 2: Phone | Email (grid) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-taupe" htmlFor="phone">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="contact-input"
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-taupe" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="contact-input"
                  />
                </div>
              </div>

              {/* Row 3: Service Interested In (full width) */}
              <div className="flex flex-col space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-taupe" htmlFor="service">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="contact-input bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="Residential Interiors">Residential Interiors</option>
                  <option value="Commercial Interiors">Commercial Interiors</option>
                  <option value="Modular Kitchens">Modular Kitchens</option>
                  <option value="Wardrobes">Wardrobe Design</option>
                  <option value="False Ceilings">False Ceiling & Lighting</option>
                  <option value="TV Units">TV Units</option>
                  <option value="Bedroom Design">Bedroom Design</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Row 4: City | Budget Range (grid) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-taupe" htmlFor="cityArea">
                    City / Area
                  </label>
                  <input
                    type="text"
                    id="cityArea"
                    name="city"
                    placeholder="e.g. Jubilee Hills, Gachibowli"
                    value={formData.city}
                    onChange={handleChange}
                    className="contact-input"
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-taupe" htmlFor="budget">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="contact-input bg-white"
                  >
                    <option value="Under ₹5L">Under ₹5 Lakhs</option>
                    <option value="₹5–10L">₹5 – ₹10 Lakhs</option>
                    <option value="₹10–25L">₹10 – ₹25 Lakhs</option>
                    <option value="₹25L+">₹25 Lakhs +</option>
                  </select>
                </div>
              </div>

              {/* Row 5: Preferred Date (optional, lighter label) */}
              <div className="flex flex-col space-y-1">
                <label className="text-xs font-semibold uppercase tracking-wider text-taupe/60" htmlFor="date">
                  Preferred Date (optional)
                </label>
                <input
                  type="date"
                  id="date"
                  name="consultationDate"
                  min={today}
                  value={formData.consultationDate}
                  onChange={handleChange}
                  className="contact-input"
                  style={{ border: '1px solid #E0D8CE' }}
                />
              </div>

              {/* Row 6: Project Description (textarea) */}
              <div className="flex flex-col space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-taupe" htmlFor="message">
                  Project Description
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Briefly describe your space and requirement details..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="contact-input resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '16px',
                  background: 'linear-gradient(135deg, #C9A065, #E8C99A)',
                  color: '#1C1612',
                  border: 'none',
                  borderRadius: '8px',
                  fontFamily: 'Lato, sans-serif',
                  fontSize: '13px',
                  fontWeight: '700',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#1C1612">
                  <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.9 11.9L4 20l4.2-1.1a7.93 7.93 0 0 0 3.8 1h.05A7.94 7.94 0 0 0 20.1 11.9a7.86 7.86 0 0 0-2.5-5.58zm-5.55 12.2h-.04a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.5.66.67-2.43-.16-.25a6.58 6.58 0 0 1 10.2-8.2 6.51 6.51 0 0 1 1.93 4.66 6.6 6.6 0 0 1-6.5 6.62z" />
                </svg>
                Send Inquiry via WhatsApp
              </button>

              {/* WhatsApp direct alternative button */}
              {/* <div className="pt-6 border-t border-blush/60 text-center">
                <a
                  href="https://wa.me/919948536840?text=Hi!%20I%20want%20to%20book%20a%20free%20consultation%20for%20interior%20design."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#1ebd57] text-white font-bold text-xs uppercase tracking-wider py-4 px-8 rounded w-full transition-all shadow-md"
                >
                  <MessageSquare size={16} className="mr-2" />
                  Or chat directly on WhatsApp &rarr;
                </a>
              </div> */}
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
