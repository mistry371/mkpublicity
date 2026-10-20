import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Compass,
  Target,
  Lightbulb,
  BarChart3,
  ArrowRight,
  Sparkles,
  Quote,
  MessageCircle
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SEOHead from '../components/SEOHead';
import InstantBriefModal from '../components/InstantBriefModal';
import { stats, getWhatsAppLink } from '../data';
import { trackConversionEvent } from '../utils/analytics';

const principles = [
  {
    index: '01',
    icon: Compass,
    title: 'Clarity Over Noise',
    text: 'We turn complexity into unambiguous commercial direction. Every rupee deployed has a verified role; every message serves a quantifiable purpose.',
  },
  {
    index: '02',
    icon: Target,
    title: 'Precision Execution',
    text: 'Strategy is worthless without high-speed execution. We engineer disciplined ad funnels, tier-1 media syndication, and high-velocity web architectures.',
  },
  {
    index: '03',
    icon: Lightbulb,
    title: 'Strategic Perspective',
    text: 'We challenge conventional local agency playbooks. We find the high-margin market positioning and audience cohorts competitors overlook.',
  },
  {
    index: '04',
    icon: BarChart3,
    title: 'Compound Attribution',
    text: 'We reject vanity metrics. We measure client success in qualified inbound sales pipeline, lowered customer acquisition costs, and brand equity.',
  },
];

const values = [
  { title: 'Mission-Driven Architecture', text: 'Every ad campaign, press release, and web deploy directly targets your commercial P&L.' },
  { title: 'Innovation Over Mimicry', text: 'We explore algorithmic ad features and AEO search paradigms before competitors know they exist.' },
  { title: 'Executive Partnership', text: 'We operate as an embedded digital growth arm to your executive team, not an aloof outside vendor.' },
  { title: 'Evidence-Based Attribution', text: 'Decisions are driven by server-side CAPI telemetry, analytics cohorts, and verifiable market demand.' },
  { title: 'Obsessive Quality Standards', text: 'Flawless typography, sub-second web load times, 4K production, and pristine media positioning.' },
  { title: 'Long-Term Equity Value', text: 'We build compounding brand authority that continues driving inbound enterprise deals for years.' }
];

const imagePath = '/assets/mehul-desai.jpg';

export default function About() {
  const [isBriefModalOpen, setIsBriefModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': 'https://mkpublicity.com/about#webpage',
    'url': 'https://mkpublicity.com/about',
    'name': 'About MK Publicity — Vision, Leadership & Engineering Excellence',
    'description': 'Learn how MK Publicity unites Strategic Public Relations, Performance Marketing, and IT Engineering. Founded by Mehul Desai in Surat.',
    'isPartOf': {
      '@id': 'https://mkpublicity.com/#website'
    },
    'about': {
      '@id': 'https://mkpublicity.com/#organization'
    }
  };

  return (
    <div style={{ background: '#FBFBFA', color: '#0C0D0E', minHeight: '100vh' }}>
      <SEOHead
        title="About Us — MK Publicity | Marketing, PR & IT Leadership"
        description="Learn how MK Publicity unites Strategic Public Relations, Performance Marketing, and IT Engineering. Founded by Mehul Desai to build dominating brands in Surat and across India."
        keywords="about MK Publicity, Mehul Desai, marketing agency Surat, PR agency Gujarat, IT MarTech firm, branding leadership, advertising agency founders"
        canonical="/about"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'About Us', url: '/about' }
        ]}
        jsonLd={aboutPageSchema}
      />

      <InstantBriefModal
        isOpen={isBriefModalOpen}
        onClose={() => setIsBriefModalOpen(false)}
      />

      {/* ═══ 1. EDITORIAL HERO ═══ */}
      <section className="editorial-hero" style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
        <div className="hero-glow-bg" />
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3.5rem' }} className="about-hero-editorial-grid">
            
            {/* Left Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                background: 'rgba(245, 197, 24, 0.15)',
                border: '1px solid rgba(184, 134, 11, 0.3)',
                borderRadius: '100px',
                marginBottom: '1.25rem'
              }}>
                <span style={{ color: '#B8860B' }}>✺</span>
                <span className="mono-sub" style={{ color: '#B8860B', fontWeight: 600 }}>
                  THE AGENCY MANIFESTO // SURAT ORIGIN
                </span>
              </div>

              <h1 className="display-title" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', lineHeight: 1.02, marginBottom: '1.5rem', color: '#0C0D0E' }}>
                Built With <span className="serif-em text-gold">Intention.</span> <br/>
                Engineered For Scale.
              </h1>

              <p style={{ fontSize: 'clamp(1.1rem, 1.4vw, 1.3rem)', lineHeight: 1.6, color: '#555555', maxWidth: '640px', marginBottom: '2.5rem' }}>
                MK Publicity was founded on a simple conviction: ambitious Indian enterprises should never have to choose between creative flair and cold commercial math. We unite strategic PR authority, performance advertising, and modern IT systems under one roof.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <button
                  className="btn-gold"
                  onClick={() => {
                    trackConversionEvent('primary_cta_click', { location: 'about_hero' });
                    setIsBriefModalOpen(true);
                  }}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
                >
                  <Sparkles size={16} />
                  <span>Start A Conversation</span>
                  <ArrowRight size={16} />
                </button>

                <a 
                  href="#founder"
                  className="btn-editorial-ghost"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <span>Meet The Leadership</span>
                </a>
              </div>
            </motion.div>

            {/* Right Visual Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '420px',
                aspectRatio: '4/5',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.12)'
              }}>
                <img
                  src={imagePath}
                  alt="Mehul Desai — Founder & CEO, MK Publicity"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'contrast(1.02)'
                  }}
                />
                
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.1) 40%, transparent 100%)'
                }} />

                <div style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '24px',
                  right: '24px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  padding: '16px 20px',
                  borderRadius: '6px',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)'
                }}>
                  <div className="mono-sub text-gold" style={{ marginBottom: '4px', fontWeight: 700 }}>FOUNDER & CHIEF STRATEGIST</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0C0D0E', fontFamily: 'var(--font-display)' }}>Mehul Desai</div>
                  <div style={{ fontSize: '0.78rem', color: '#555555' }}>Architecting brand dominance across South Gujarat & Pan-India</div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        <style>{`
          @media (min-width: 992px) {
            .about-hero-editorial-grid {
              grid-template-columns: 1fr 420px !important;
              align-items: center !important;
            }
          }
        `}</style>
      </section>

      {/* ═══ 2. SCALE & VERIFIED PROOF ═══ */}
      <section style={{ padding: 'clamp(3rem, 5vw, 4.5rem) 0', borderBottom: '1px solid rgba(0, 0, 0, 0.08)', background: '#F5F5F2' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '2rem' }}>
            {stats.map((stat, idx) => (
              <div key={idx} style={{ borderLeft: '2px solid #F5C518', paddingLeft: '1.25rem' }}>
                <div className="mono-sub" style={{ color: '#777777', marginBottom: '6px' }}>METRIC // 0{idx + 1}</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0C0D0E', fontFamily: 'var(--font-display)', lineHeight: 1 }}>
                  {stat.number}{stat.suffix}
                </div>
                <div style={{ fontSize: '0.88rem', color: '#555555', marginTop: '6px' }}>{stat.label}</div>
              </div>
            ))}

            <div style={{ borderLeft: '2px solid rgba(0, 0, 0, 0.15)', paddingLeft: '1.25rem' }}>
              <div className="mono-sub text-gold" style={{ marginBottom: '6px', fontWeight: 700 }}>REGIONAL FOOTPRINT</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0C0D0E', fontFamily: 'var(--font-display)', lineHeight: 1.2 }}>
                Surat Capital
              </div>
              <div style={{ fontSize: '0.88rem', color: '#555555', marginTop: '6px' }}>Textiles, Diamonds, Real Estate, FMCG</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. THE FOUNDER'S THESIS ═══ */}
      <section id="founder" style={{ padding: 'clamp(4rem, 8vw, 6rem) 0', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
        <div className="container" style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div className="arch-sec-head" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="mono-sub text-gold">LEADERSHIP PHILOSOPHY</span>
            <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginTop: '0.5rem' }}>
              The Founder's <span className="serif-em text-gold">Perspective</span>
            </h2>
          </div>

          <div style={{
            background: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            padding: 'clamp(2rem, 4vw, 3.5rem)',
            borderRadius: '8px',
            position: 'relative',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)'
          }}>
            <Quote size={48} color="#B8860B" style={{ opacity: 0.25, position: 'absolute', top: '24px', right: '24px' }} />

            <blockquote style={{
              fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
              lineHeight: 1.5,
              color: '#0C0D0E',
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              marginBottom: '2rem'
            }}>
              “In competitive hubs like Surat, business owners are bombarded by agencies promising viral shortcuts and inflated metrics. Our role is to cut through that noise with disciplined strategy: build genuine brand authority, deploy high-converting ad pipelines, and construct tech systems that compound value month over month.”
            </blockquote>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid rgba(0, 0, 0, 0.08)', paddingTop: '1.5rem' }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#0C0D0E' }}>Mehul Desai</div>
                <div className="mono-sub" style={{ color: '#777777' }}>FOUNDER & CEO // MK PUBLICITY</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4. FOUR OPERATING PRINCIPLES ═══ */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 0', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
        <div className="container">
          <div className="arch-sec-head">
            <span className="mono-sub text-gold">HOW WE OPERATE</span>
            <div className="arch-head-split">
              <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
                Four Non-Negotiable <span className="serif-em text-gold">Principles</span>
              </h2>
              <p className="arch-head-lead">
                Strategy is not a slideshow. It is the quality of decisions made every single day in ad managers, PR newsrooms, and code repositories.
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
            {principles.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    padding: '2.25rem',
                    borderRadius: '4px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.02)'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                      <span className="mono-sub text-gold" style={{ fontSize: '0.8rem', fontWeight: 700 }}>{p.index}</span>
                      <Icon size={22} color="#B8860B" />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.75rem', color: '#0C0D0E' }}>{p.title}</h3>
                    <p style={{ color: '#555555', fontSize: '0.9rem', lineHeight: 1.6 }}>{p.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ 5. SIX CORE VALUES ═══ */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 0', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
        <div className="container">
          <div className="arch-sec-head">
            <span className="mono-sub text-gold">AGENCY STANDARDS</span>
            <div className="arch-head-split">
              <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
                Standards Create <span className="serif-em text-gold">Reputation</span>
              </h2>
              <p className="arch-head-lead">
                Culture is reflected in client deliverables. These six commitments define how we treat every partner relationship.
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '1.5rem' }}>
            {values.map((v, i) => (
              <div
                key={i}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  padding: '2rem',
                  borderRadius: '4px',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.02)'
                }}
              >
                <span className="mono-sub text-gold" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 700 }}>
                  STANDARD // 0{i + 1}
                </span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.5rem', color: '#0C0D0E' }}>{v.title}</h3>
                <p style={{ color: '#555555', fontSize: '0.88rem', lineHeight: 1.6 }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6. FINAL CONSULTATION CTA ═══ */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <ScrollReveal>
            <span className="mono-sub text-gold" style={{ display: 'block', marginBottom: '1rem' }}>
              THE NEXT CHAPTER OF YOUR BUSINESS
            </span>
            <h2 className="display-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: '1.5rem' }}>
              Your Ambition Deserves A <br/>
              <span className="serif-em text-gold">Sharper Strategy.</span>
            </h2>
            <p style={{ color: '#555555', fontSize: '1.15rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
              Schedule a strategic consultation directly with our leadership team in Surat. Discover what is possible when marketing, PR, and technology align.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => {
                  trackConversionEvent('primary_cta_click', { location: 'about_footer_cta' });
                  setIsBriefModalOpen(true);
                }}
                className="btn-gold"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
              >
                <Sparkles size={18} />
                <span>Start The Conversation</span>
                <ArrowRight size={18} />
              </button>

              <a
                href={getWhatsAppLink('Hi Mehul and MK Publicity team! I would like to schedule an introductory discussion.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-ghost"
                onClick={() => trackConversionEvent('whatsapp_click', { location: 'about_footer_whatsapp' })}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <MessageCircle size={18} color="#25D366" />
                <span>WhatsApp Directly</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
