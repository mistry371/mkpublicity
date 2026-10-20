import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MessageCircle, ShieldCheck } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { getWhatsAppLink } from '../data';
import { trackConversionEvent } from '../utils/analytics';

export default function PageHero({ 
  label, 
  title, 
  highlight, 
  highlightEnd = false, 
  description,
  ctaText = 'Discuss Strategic Brief',
  secondaryCtaText = 'Direct WhatsApp Route'
}) {
  const { openModal } = useModal();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const renderTitle = () => {
    if (!highlight) {
      return title;
    }
    
    if (highlightEnd) {
      const parts = title.split(highlight);
      return (
        <>
          <span>{parts[0]}</span>
          <span className="serif-em text-gold" style={{ display: 'inline', textTransform: 'none', marginLeft: '0.25em' }}>
            {highlight}
          </span>
        </>
      );
    } else {
      const parts = title.split(new RegExp(`(${highlight})`, 'i'));
      return parts.map((part, i) => 
        part.toLowerCase() === highlight.toLowerCase() 
          ? <span key={i} className="serif-em text-gold" style={{ textTransform: 'none' }}>{part}</span>
          : part
      );
    }
  };

  return (
    <section className="editorial-hero" style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
      <div className="hero-glow-bg" />
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3.5rem' }} className="page-hero-editorial-grid">
            
            {/* Main Text Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              style={{ maxWidth: '820px' }}
            >
              {/* Telemetry Badge */}
              <motion.div variants={itemVariants} style={{ marginBottom: '1.25rem' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '6px 14px',
                  background: 'rgba(245, 197, 24, 0.12)',
                  border: '1px solid rgba(212, 160, 23, 0.35)',
                  borderRadius: '100px'
                }}>
                  <span style={{ color: '#B8860B', fontSize: '0.85rem' }}>✺</span>
                  <span className="mono-sub" style={{ color: '#B8860B', letterSpacing: '0.12em', fontWeight: 700 }}>
                    {label || 'STRATEGIC ARCHITECTURE // MK PUBLICITY'}
                  </span>
                </div>
              </motion.div>

              {/* Title */}
              <motion.h1
                variants={itemVariants}
                className="display-title"
                style={{
                  fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)',
                  lineHeight: 1.02,
                  letterSpacing: '-0.035em',
                  marginBottom: '1.5rem',
                  color: '#0C0D0E'
                }}
              >
                {renderTitle()}
              </motion.h1>

              {/* Description */}
              {description && (
                <motion.p
                  variants={itemVariants}
                  style={{
                    fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
                    lineHeight: 1.6,
                    color: '#555555',
                    maxWidth: '680px',
                    marginBottom: '2.5rem'
                  }}
                >
                  {description}
                </motion.p>
              )}

              {/* Action Buttons */}
              <motion.div 
                variants={itemVariants}
                style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}
              >
                <button 
                  className="btn-gold" 
                  onClick={() => {
                    trackConversionEvent('primary_cta_click', { location: `page_hero_${label || 'general'}` });
                    openModal();
                  }}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
                >
                  <Sparkles size={16} />
                  <span>{ctaText}</span>
                  <ArrowRight size={16} />
                </button>

                <a 
                  href={getWhatsAppLink(`Hi MK Publicity! I would like to discuss ${label || 'a growth project'} for my company.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-editorial-ghost"
                  onClick={() => trackConversionEvent('whatsapp_click', { location: `page_hero_${label || 'general'}` })}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <MessageCircle size={16} color="#25D366" />
                  <span>{secondaryCtaText}</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Editorial Telemetry Signal Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                maxWidth: '480px'
              }}
              className="page-hero-telemetry"
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(0, 0, 0, 0.08)', paddingBottom: '1rem' }}>
                <span className="mono-sub" style={{ color: '#666666' }}>OPERATIONAL DIRECTIVE</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', color: '#16a34a', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#16a34a', display: 'inline-block' }}></span>
                  Q3/Q4 INTAKE ACTIVE
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
                <div style={{ borderLeft: '2px solid #F5C518', paddingLeft: '0.85rem' }}>
                  <div className="mono-sub" style={{ color: '#777777', marginBottom: '4px' }}>VERIFIED RESULTS</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0C0D0E', fontFamily: 'var(--font-display)' }}>500+</div>
                  <div style={{ fontSize: '0.75rem', color: '#666666' }}>Campaigns Executed</div>
                </div>

                <div style={{ borderLeft: '2px solid rgba(0, 0, 0, 0.12)', paddingLeft: '0.85rem' }}>
                  <div className="mono-sub" style={{ color: '#777777', marginBottom: '4px' }}>RESPONSE SLA</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#B8860B', fontFamily: 'var(--font-display)' }}>&lt; 24H</div>
                  <div style={{ fontSize: '0.75rem', color: '#666666' }}>Direct Strategist Review</div>
                </div>

                <div style={{ borderLeft: '2px solid rgba(0, 0, 0, 0.12)', paddingLeft: '0.85rem' }}>
                  <div className="mono-sub" style={{ color: '#777777', marginBottom: '4px' }}>ASSET CONTROL</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0C0D0E', fontFamily: 'var(--font-display)' }}>100%</div>
                  <div style={{ fontSize: '0.75rem', color: '#666666' }}>Client Code & Ad Ownership</div>
                </div>

                <div style={{ borderLeft: '2px solid #F5C518', paddingLeft: '0.85rem' }}>
                  <div className="mono-sub" style={{ color: '#777777', marginBottom: '4px' }}>GEO FOOTPRINT</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#B8860B', fontFamily: 'var(--font-display)' }}>SURAT</div>
                  <div style={{ fontSize: '0.75rem', color: '#666666' }}>South Gujarat & Pan-India</div>
                </div>
              </div>

              <div style={{ 
                background: 'rgba(245, 197, 24, 0.08)', 
                border: '1px solid rgba(212, 160, 23, 0.25)', 
                padding: '0.85rem 1rem', 
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.78rem',
                color: '#333333'
              }}>
                <ShieldCheck size={16} color="#B8860B" style={{ flexShrink: 0 }} />
                <span>Zero junior sales handoffs. You work directly with experienced growth & PR practitioners.</span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .page-hero-editorial-grid {
            grid-template-columns: 1fr 420px !important;
            align-items: center !important;
          }
        }
        @media (max-width: 991px) {
          .page-hero-telemetry {
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
