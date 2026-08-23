import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Users, BarChart } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import ScrollReveal from '../components/ScrollReveal';
import CTAButton from '../components/CTAButton';
import ServiceCard from '../components/ServiceCard';
import StatsCounter from '../components/StatsCounter';
import ProcessTimeline from '../components/ProcessTimeline';
import TestimonialCarousel from '../components/TestimonialCarousel';
import IndustryGrid from '../components/IndustryGrid';
import { services, industries, processSteps, testimonials, stats, whyChooseUs, getWhatsAppLink } from '../data';
import { useModal } from '../context/ModalContext';

export default function Home() {
  const { openModal } = useModal();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="hero" id="hero">
        <div className="hero-bg"></div>
        <ParticleBackground />
        
        <div className="hero-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '4rem', alignItems: 'center' }}>
          {/* Left Text Column */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2, delayChildren: 0.3 }
              }
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="hero-badge"
              style={{ background: 'transparent', border: 'none', padding: 0, fontSize: '0.9rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 700 }}
            >
              Data-Driven Strategies for Explosive Growth
            </motion.div>

            <motion.h1
              className="hero-title"
              style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 'var(--space-2xl)' }}
            >
              <motion.span 
                style={{ display: 'block' }}
                variants={{
                  hidden: { opacity: 0, y: 40, rotateX: 20 },
                  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                }}
              >
                We shape <span className="text-gradient">perception.</span>
              </motion.span>
              <motion.span 
                style={{ display: 'block' }}
                variants={{
                  hidden: { opacity: 0, y: 40, rotateX: 20 },
                  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                }}
              >
                We drive <span className="text-gradient">growth.</span>
              </motion.span>
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 0 var(--space-3xl) 0', color: 'var(--text-secondary)' }}
            >
              MK Publicity is a premier full-service PR & marketing agency. We build 
              unshakable credibility, architect powerful brand narratives, and engineer 
              data-driven campaigns for industry leaders.
            </motion.p>

            <motion.div
              className="hero-actions"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'flex-start' }}
            >
              <CTAButton
                text="Request Needs Analysis"
                icon={Sparkles}
                size="lg"
                onClick={openModal}
              />
              <Link to="/portfolio" className="btn btn-secondary btn-lg" style={{ background: 'transparent', border: '1px solid var(--border-medium)', textDecoration: 'none' }}>
                Explore Case Studies
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Visuals Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hero-visuals"
            style={{ 
              position: 'relative', 
              minHeight: '450px',
              width: '100%',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center'
            }}
          >
            <style>
              {`
                @keyframes spin-slow { 100% { transform: rotate(360deg); } }
                @keyframes spin-reverse { 100% { transform: rotate(-360deg); } }
                @media (max-width: 900px) { .hero-visuals { display: none !important; } }
              `}
            </style>
            <div style={{ position: 'relative', width: '100%', maxWidth: '400px', height: '100%' }}>
              
              {/* Abstract Glowing Orb */}
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '250px', height: '250px', background: 'var(--primary-subtle)', borderRadius: '50%', filter: 'blur(50px)', zIndex: 0 }}></div>
              
              {/* Floating Stat 1 */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ position: 'absolute', top: '5%', right: '0%', background: '#fff', padding: '1.25rem', borderRadius: '1rem', boxShadow: 'var(--shadow-lg)', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '0.5rem', minWidth: '150px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)' }}>
                  <TrendingUp size={24} />
                  <span style={{ fontWeight: 800, fontSize: '1.5rem', color: '#000' }}>300%</span>
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Avg. ROI Increase</span>
              </motion.div>

              {/* Floating Stat 2 */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                style={{ position: 'absolute', bottom: '10%', left: '-10%', background: '#111', padding: '1.25rem', borderRadius: '1rem', boxShadow: 'var(--shadow-lg)', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '0.5rem', minWidth: '150px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}>
                  <Users size={24} />
                  <span style={{ fontWeight: 800, fontSize: '1.5rem', color: '#fff' }}>500+</span>
                </div>
                <span style={{ fontSize: '0.8rem', color: '#999', fontWeight: 600 }}>Clients Scaled</span>
              </motion.div>

              {/* Center Abstract Graphic */}
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1, width: '220px', height: '220px', border: '1px solid var(--border-medium)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '160px', height: '160px', border: '2px dashed var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'spin-slow 25s linear infinite' }}>
                  <div style={{ animation: 'spin-reverse 25s linear infinite' }}>
                    <BarChart size={56} color="var(--primary)" strokeWidth={1.5} />
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
        <div style={{ paddingBottom: '100px' }}></div>


      </section>

      {/* ═══ STATS ═══ */}
      <StatsCounter stats={stats} />

      {/* ═══ SERVICES ═══ */}
      <section className="section" id="services-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <div className="section-label">What We Do</div>
              <h2 className="section-title">Our Services</h2>
              <p className="section-subtitle">
                From performance marketing to event management, we deliver end-to-end
                solutions that drive measurable business growth.
              </p>
            </div>
          </ScrollReveal>

          <div className="services-grid">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>

          <ScrollReveal>
            <div style={{ textAlign: 'center', marginTop: 'var(--space-3xl)' }}>
              <Link to="/services" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={18} /> Explore All Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="section" id="why-section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <div className="section-label">Why MK Publicity</div>
              <h2 className="section-title">Why Brands Trust Us</h2>
              <p className="section-subtitle">
                We combine creativity, strategy, and data to deliver results that matter.
              </p>
            </div>
          </ScrollReveal>

          <div className="why-grid">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="why-card">
                    <div className="why-icon" style={{ display: 'flex', color: 'var(--primary)', marginBottom: 'var(--space-md)' }}>
                      {Icon && <Icon size={32} strokeWidth={1.5} />}
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="section" id="process-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <div className="section-label">Our Approach</div>
              <h2 className="section-title">How We Work</h2>
              <p className="section-subtitle">
                A proven 6-step methodology that ensures predictable, measurable results for every client.
              </p>
            </div>
          </ScrollReveal>

          <ProcessTimeline steps={processSteps} />

          <ScrollReveal>
            <div style={{ textAlign: 'center', marginTop: 'var(--space-3xl)' }}>
              <Link to="/process" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={18} /> Learn More About Our Process
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ INDUSTRIES MARQUEE ═══ */}
      <div className="marquee-section">
        <div className="marquee-track">
          {[...industries, ...industries].map((ind, i) => {
            const Icon = ind.icon;
            return (
              <div key={i} className="marquee-item">
                <span className="marquee-dot"></span>
                {Icon && <Icon size={24} style={{ marginRight: '10px' }} />} {ind.name}
              </div>
            );
          })}
        </div>
      </div>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="section" id="testimonials-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <div className="section-label">Client Stories</div>
              <h2 className="section-title">What Our Clients Say</h2>
              <p className="section-subtitle">
                Real results from real businesses. See why 500+ brands trust MK Publicity.
              </p>
            </div>
          </ScrollReveal>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* ═══ INDUSTRIES ═══ */}
      <section className="section" id="industries-section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <div className="section-label">Industries We Serve</div>
              <h2 className="section-title">Expertise Across Sectors</h2>
              <p className="section-subtitle">
                From manufacturing to tech startups, we've driven growth across 18+ industries.
              </p>
            </div>
          </ScrollReveal>

          <IndustryGrid industries={industries} />

          <ScrollReveal>
            <div style={{ textAlign: 'center', marginTop: 'var(--space-3xl)' }}>
              <Link to="/industries" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={18} /> View All Industries
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <section className="cta-banner" id="cta-banner">
        <div className="container">
          <ScrollReveal>
            <h2>Ready to Grow Your Brand?</h2>
            <p>Let's create a marketing strategy that delivers measurable results.</p>
            <a
              href={getWhatsAppLink('Hi! I want to transform my brand with MK Publicity.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}
            >
              <Sparkles size={20} /> Let's Talk on WhatsApp
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
