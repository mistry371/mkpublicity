import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, MessageCircle, Sparkles, ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck 
} from 'lucide-react';
import { brandPublicityServices, BRAND_PUBLICITY_AGENCY, PHONE, getWhatsAppLink } from '../data';
import { trackConversionEvent } from '../utils/analytics';
import { useModal } from '../context/ModalContext';

export default function BrandPublicitySection({ showHeader = true }) {
  const { openModal } = useModal();

  return (
    <section className="brand-publicity-section" style={{
      padding: 'clamp(4rem, 8vw, 6.5rem) 0',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(0, 0, 0, 0.06)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Subtle Accent Gradients */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245, 197, 24, 0.08) 0%, rgba(255, 255, 255, 0) 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        {showHeader && (
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
            <div className="mono-sub" style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '6px', 
              color: '#B8860B', 
              background: 'rgba(245, 197, 24, 0.12)',
              padding: '4px 14px',
              borderRadius: '9999px',
              marginBottom: '1rem',
              fontWeight: 700
            }}>
              <Sparkles size={14} /> BRAND PUBLICITY AGENCY // YOUR SUCCESS, OUR MISSION
            </div>

            <h2 className="display-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', lineHeight: 1.15, marginBottom: '1.2rem' }}>
              Inspire, Engage, Thrive: <br className="hidden md:block" />
              <span className="serif-em text-gold">Your Journey, Our Expertise</span>
            </h2>

            <p style={{ color: '#555555', fontSize: '1.1rem', lineHeight: 1.65 }}>
              From breaking national press conferences and tier-1 digital PR placements to hyper-targeted advertising and prestigious industry award accreditations, MK Publicity is your end-to-end Brand Publicity Agency in Surat and nationwide.
            </p>
          </div>
        )}

        {/* 2-Column Split: Visual Poster & Core 10 Services List */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
          gap: 'clamp(2rem, 4vw, 3.5rem)',
          alignItems: 'center'
        }}>
          {/* Left Column: Official Poster Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: '#FBFBFA',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              borderRadius: '16px',
              padding: 'clamp(1.5rem, 3vw, 2rem)',
              boxShadow: '0 15px 40px rgba(0, 0, 0, 0.04)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              position: 'relative'
            }}
          >
            {/* Poster Image Container */}
            <div style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              background: '#FFFFFF'
            }}>
              <img 
                src={BRAND_PUBLICITY_AGENCY.image} 
                alt="MK Publicity - Brand Publicity Agency Services Poster" 
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transition: 'transform 0.4s ease'
                }}
                className="poster-img"
              />

              {/* Verified Tag Overlay */}
              <div style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                background: 'rgba(12, 13, 14, 0.88)',
                backdropFilter: 'blur(8px)',
                color: '#F5C518',
                padding: '6px 14px',
                borderRadius: '100px',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
              }}>
                <ShieldCheck size={14} /> OFFICIAL CAPABILITIES
              </div>
            </div>

            {/* Quick Contact & Info Card */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              borderRadius: '12px',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  <span className="mono-sub" style={{ fontSize: '0.75rem', color: '#888888', display: 'block' }}>DIRECT AGENCY HOTLINE</span>
                  <a 
                    href={`tel:+91${PHONE}`} 
                    onClick={() => trackConversionEvent('phone_click', { source: 'brand_publicity_poster_card' })}
                    style={{ 
                      fontSize: '1.25rem', 
                      fontWeight: 800, 
                      color: '#0C0D0E', 
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <Phone size={18} className="text-gold" />
                    <span>+91 {PHONE}</span>
                  </a>
                </div>

                <div style={{
                  background: 'rgba(245, 197, 24, 0.1)',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#B8860B',
                  fontWeight: 600
                }}>
                  Surat & Nationwide
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <a
                  href={`tel:+91${PHONE}`}
                  onClick={() => trackConversionEvent('phone_click', { source: 'brand_publicity_call_btn' })}
                  className="btn btn-gold"
                  style={{ flex: '1 1 180px', justifyContent: 'center', padding: '10px 16px', fontSize: '0.88rem' }}
                >
                  <Phone size={16} /> Call Us Now
                </a>

                <a
                  href={getWhatsAppLink('Hi MK Publicity! I am interested in your Brand Publicity Agency services (Press Conference, PR, Media Management, Social Media & Advertising).')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackConversionEvent('whatsapp_click', { source: 'brand_publicity_wa_btn' })}
                  className="btn btn-editorial-ghost"
                  style={{ flex: '1 1 180px', justifyContent: 'center', padding: '10px 16px', fontSize: '0.88rem', color: '#1B8755', borderColor: 'rgba(27, 135, 85, 0.3)' }}
                >
                  <MessageCircle size={16} color="#25D366" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 10 Brand Publicity Services Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <div>
              <span className="mono-sub text-gold" style={{ display: 'block', marginBottom: '0.5rem' }}>
                10 CORE BRAND PUBLICITY SERVICES
              </span>
              <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, margin: 0, color: '#0C0D0E', lineHeight: 1.25 }}>
                Engineered to Build Authority & Multiply Client Revenue
              </h3>
            </div>

            {/* Services List / Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: '12px'
            }}>
              {brandPublicityServices.map((svc, idx) => {
                const Icon = svc.icon;
                const numStr = (idx + 1).toString().padStart(2, '0');

                return (
                  <Link
                    key={svc.id}
                    to={`/services/${svc.id}`}
                    className="brand-publicity-service-pill"
                    style={{
                      background: '#FBFBFA',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      borderRadius: '10px',
                      padding: '14px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      textDecoration: 'none',
                      color: '#0C0D0E',
                      transition: 'all 0.25s ease',
                      position: 'relative'
                    }}
                  >
                    {/* Number Badge */}
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#B8860B',
                      background: 'rgba(245, 197, 24, 0.15)',
                      padding: '4px 7px',
                      borderRadius: '5px',
                      flexShrink: 0
                    }}>
                      {numStr}
                    </span>

                    {/* Icon */}
                    <div style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '8px',
                      background: '#FFFFFF',
                      border: '1px solid rgba(0, 0, 0, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)'
                    }}>
                      <Icon size={18} className="text-gold" />
                    </div>

                    {/* Text */}
                    <div style={{ flexGrow: 1, minWidth: 0 }}>
                      <div style={{ 
                        fontSize: '0.95rem', 
                        fontWeight: 700, 
                        lineHeight: 1.25, 
                        color: '#0C0D0E',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {svc.name}
                      </div>
                      <div style={{ 
                        fontSize: '0.75rem', 
                        color: '#666666', 
                        fontFamily: 'var(--font-mono)',
                        marginTop: '2px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {svc.tag}
                      </div>
                    </div>

                    {/* Arrow */}
                    <ArrowUpRight size={16} className="pill-arrow" style={{ color: '#AAAAAA', flexShrink: 0, transition: 'transform 0.2s ease, color 0.2s ease' }} />
                  </Link>
                );
              })}
            </div>

            {/* Bottom Strategy Call CTA */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(245, 197, 24, 0.12) 0%, rgba(245, 197, 24, 0.03) 100%)',
              border: '1px solid rgba(245, 197, 24, 0.3)',
              borderRadius: '12px',
              padding: '1.25rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              <div>
                <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: '#0C0D0E' }}>
                  Looking for a custom Brand Publicity strategy?
                </h4>
                <p style={{ margin: '4px 0 0 0', fontSize: '0.85rem', color: '#555555' }}>
                  We align press, digital advertising, and high-trust media to scale your valuation.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  trackConversionEvent('primary_cta_click', { location: 'brand_publicity_section_audit' });
                  openModal('Public Relations & Strategic Media Placements');
                }}
                className="btn btn-gold"
                style={{ whiteSpace: 'nowrap', padding: '10px 18px', fontSize: '0.88rem' }}
              >
                <Sparkles size={16} /> Get Free Publicity Plan
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .brand-publicity-service-pill:hover {
          background: #FFFFFF !important;
          border-color: #F5C518 !important;
          box-shadow: 0 6px 20px rgba(245, 197, 24, 0.18) !important;
          transform: translateY(-2px);
        }
        .brand-publicity-service-pill:hover .pill-arrow {
          color: #B8860B !important;
          transform: translate(2px, -2px);
        }
        .poster-img:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
}
