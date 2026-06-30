import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Scale, Lightbulb, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      title: "Integrity",
      desc: "Honest quotes, premium raw materials, clear timelines, and transparent processes at every stage of the design cycle.",
      icon: Scale
    },
    {
      title: "Creativity",
      desc: "Merging traditional Indian elements with state-of-the-art modular designs to craft unique spaces tailored to your style.",
      icon: Lightbulb
    },
    {
      title: "Client-First",
      desc: "Your vision is our blueprint. We listen, adapt, and build spaces that align perfectly with your dreams and lifestyle needs.",
      icon: Heart
    }
  ];

  return (
    <div>
      <Helmet>
        <title>About Our Studio | Sri Balaji Interiors</title>
        <meta name="description" content="Discover the story, history, and core values of integrity, creativity, and client-first commitment at Sri Balaji Interiors." />
      </Helmet>

      {/* Page Title Banner */}
      <section className="bg-blush/40 py-16 text-center border-b border-blush/80">
        <div className="max-w-7xl mx-auto px-4 anim-fadeup">
          <span className="section-label">Our Legacy</span>
          <h1 className="section-heading">
            About Sri Balaji Interiors
          </h1>
          <div className="gold-divider" />
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Founder / Team Image */}
          <div className="aspect-[4/5] rounded overflow-hidden shadow-lg bg-blush anim-fadeleft img-zoom-wrap">
            <img
              src="/images/founder.jpg"
              alt="Founder of Sri Balaji Interiors"
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top'
              }}
            />
          </div>

          {/* Story Text */}
          <div className="space-y-6 text-taupe leading-relaxed anim-faderight">
            <span className="section-label">Our Story</span>
            <h2 className="section-heading leading-tight">
              Designing Spaces, Defining Lives
            </h2>
            <div className="gold-divider left" />
            <p className="font-lato font-semibold text-charcoal text-lg">
              Sri Balaji Interiors was founded with a singular belief — that every home deserves to tell a beautiful story. Rooted in devotion, craftsmanship, and creative passion, we bring your dream spaces to life.
            </p>
            <p className="font-lato text-sm md:text-base">
              Over the past ten years, we have grown from a small design studio to a premier full-service interior firm in Hyderabad. Our design process fuses modern functional intelligence with classical Indian aesthetic choices, resulting in spaces that look breathtakingly premium and remain warm, welcoming, and robust.
            </p>
            <p className="font-lato text-sm md:text-base">
              Whether it is a custom floating TV console desk, space-efficient sliding wardrobes, or a complete residential transformation, we treat every project as a work of art. We work closely with our clients at every step—from layout drawings to wooden material selection and the final styling touch—ensuring a smooth, premium, and stress-free journey.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-blush/30 border-t border-b border-blush py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 anim-fadeup">
            <span className="section-label">Guiding Philosophy</span>
            <h2 className="section-heading">Our Core Values</h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 anim-stagger">
            {values.map((item) => {
              const ValueIcon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white p-8 rounded border border-blush/80 hover:border-gold hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-blush flex items-center justify-center text-gold">
                    <ValueIcon size={28} className="stroke-[1.5]" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-charcoal">{item.title}</h3>
                  <p className="font-lato text-sm text-taupe leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Consultation Banner */}
      <section className="py-20 px-4 text-center max-w-4xl mx-auto space-y-6 anim-fadeup">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal">
          Build a Home You Love
        </h2>
        <p className="font-lato text-base text-taupe leading-relaxed">
          Connect with our design experts today and get a personalized 3D layout consultation for free.
        </p>
        <div className="pt-4">
          <Link
            to="/contact"
            className="inline-block bg-gold border border-gold hover:bg-gold/90 text-white font-bold text-sm uppercase tracking-wider py-4.5 px-10 rounded transition-all shadow-md"
          >
            Connect With Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
