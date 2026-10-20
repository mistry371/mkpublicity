import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MessageCircle, ArrowRight, Zap, Layers, Globe } from 'lucide-react';
import PageHero from '../components/PageHero';
import ScrollReveal from '../components/ScrollReveal';
import ServiceCard from '../components/ServiceCard';
import SEOHead from '../components/SEOHead';
import AEOAnswerSection from '../components/AEOAnswerSection';
import InstantBriefModal from '../components/InstantBriefModal';
import BrandPublicitySection from '../components/BrandPublicitySection';
import { services, getWhatsAppLink } from '../data';
import { trackConversionEvent } from '../utils/analytics';

const categories = [
  'All Disciplines',
  'Brand Publicity & PR',
  'Performance & Paid Ads',
  'Content & Social Media',
  'IT & Engineering',
  'Creative & Media',
  'Events & Activation'
];

const categoryMap = {
  'Brand Publicity & PR': ['press-conference', 'digital-pr', 'media-management', 'public-relations', 'award-nominations'],
  'Performance & Paid Ads': ['performance-marketing', 'advertising-solutions', 'social-media-ads', 'influencer-marketing'],
  'Content & Social Media': ['social-media', 'content-writing', 'social-media-ads', 'influencer-marketing'],
  'IT & Engineering': ['it-solutions', 'web-design', 'ecommerce'],
  'Creative & Media': ['branding', 'video-production', 'content-writing'],
  'Events & Activation': ['event-marketing', 'press-conference']
};

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All Disciplines');
  const [isBriefModalOpen, setIsBriefModalOpen] = useState(false);

  useEffect(() => { 
    window.scrollTo(0, 0); 
  }, []);

  const filteredServices = activeCategory === 'All Disciplines'
    ? services
    : services.filter(s => categoryMap[activeCategory]?.includes(s.id));

  const serviceCatalogSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'MK Publicity Services Catalog',
    'description': 'End-to-end performance marketing, brand publicity, public relations, and custom IT engineering services in Surat, Gujarat.',
    'itemListElement': services.map((s, idx) => ({
      '@type': 'ListItem',
      'position': idx + 1,
      'name': s.title,
      'description': s.shortDesc,
      'url': `https://mkpublicity.com/services/${s.id}`
    }))
  };

  return (
    <div style={{ background: '#FBFBFA', color: '#0C0D0E', minHeight: '100vh' }}>
      <SEOHead
        title="Services — Performance Marketing, Brand Publicity & IT Solutions | MK Publicity"
        description={`Explore ${services.length} specialized disciplines spanning Brand Publicity, Performance Marketing, Strategic Public Relations (PR), and Custom IT & MarTech Systems. Scale your brand with MK Publicity.`}
        keywords="marketing services, PR agency Surat, brand publicity agency, press conference Surat, digital PR, media management, IT solutions, Google Ads, Meta Ads, MarTech"
        canonical="/services"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' }
        ]}
        jsonLd={serviceCatalogSchema}
      />

      <InstantBriefModal
        isOpen={isBriefModalOpen}
        onClose={() => setIsBriefModalOpen(false)}
      />

      {/* ═══ 1. EDITORIAL PAGE HERO ═══ */}
      <PageHero 
        label={`CAPABILITIES // ${services.length} SPECIALIZED DISCIPLINES`}
        title="Engineering Commercial Dominance Through Integrated Execution"
        highlight="Integrated Execution"
        description={`We eliminate the fragmentation of hiring separate marketing, PR, and tech agencies. Explore our ${services.length} specialized disciplines designed to accelerate customer acquisition, command public authority, and build scalable infrastructure.`}
        ctaText="Discuss Your Requirements"
      />

      {/* ═══ 2. BRAND PUBLICITY AGENCY SPOTLIGHT (OFFICIAL FLYER & 10 CORE SERVICES) ═══ */}
      <BrandPublicitySection showHeader={true} />

      {/* ═══ 2. DISCIPLINE FILTER & ARCHITECTURAL GRID ═══ */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 0', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
        <div className="container">
          
          {/* Header & Category Switcher */}
          <div style={{ marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
            <div className="mono-sub" style={{ color: '#B8860B', textAlign: 'center' }}>
              FILTER BY PRACTICE AREA
            </div>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.5rem',
              background: '#FFFFFF',
              padding: '6px',
              borderRadius: '100px',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)'
            }}>
              {categories.map(cat => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{
                      padding: '8px 18px',
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-mono)',
                      borderRadius: '100px',
                      cursor: 'pointer',
                      border: 'none',
                      background: isActive ? '#F5C518' : 'transparent',
                      color: isActive ? '#070809' : '#666666',
                      fontWeight: isActive ? 700 : 500,
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid of 12 Services */}
          <motion.div
            layout
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 350px), 1fr))',
              gap: '1.5rem'
            }}
          >
            <AnimatePresence>
              {filteredServices.map((service, i) => (
                <ServiceCard key={service.id} service={service} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* ═══ 3. TRINITY INTEGRATION PLAYBOOK ═══ */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 0', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
        <div className="container">
          <div className="arch-sec-head">
            <span className="mono-sub text-gold">THE COMPOUND EFFECT</span>
            <div className="arch-head-split">
              <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
                Why Isolated Marketing Services <span className="serif-em text-gold">Underperform</span>
              </h2>
              <p className="arch-head-lead">
                Running Meta Ads without Tier-1 PR creates high customer acquisition costs. Generating press coverage without high-converting landing pages wastes attention. MK Publicity unifies all three pillars.
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2rem' }}>
            <div style={{ background: '#FFFFFF', border: '1px solid rgba(0, 0, 0, 0.08)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)', padding: '2.5rem', borderRadius: '4px' }}>
              <div style={{ color: '#B8860B', marginBottom: '1.25rem' }}><Zap size={32} /></div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem', color: '#0C0D0E' }}>01. Performance Ads</h3>
              <p style={{ color: '#555555', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Algorithmic ad campaigns across Meta, Google, and YouTube targeting buyers at the moment of highest purchase intent.
              </p>
              <div className="mono-sub" style={{ color: '#777777' }}>SYNERGY: LOWERS BLENDED CAC</div>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid rgba(0, 0, 0, 0.08)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)', padding: '2.5rem', borderRadius: '4px' }}>
              <div style={{ color: '#B8860B', marginBottom: '1.25rem' }}><Globe size={32} /></div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem', color: '#0C0D0E' }}>02. Tier-1 PR Authority</h3>
              <p style={{ color: '#555555', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Verified editorial coverage in Times of India, Economic Times, Mid-Day, and leading vernacular publications.
              </p>
              <div className="mono-sub" style={{ color: '#777777' }}>SYNERGY: MULTIPLIES TRUST & ROAS</div>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid rgba(0, 0, 0, 0.08)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)', padding: '2.5rem', borderRadius: '4px' }}>
              <div style={{ color: '#B8860B', marginBottom: '1.25rem' }}><Layers size={32} /></div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem', color: '#0C0D0E' }}>03. High-Velocity Tech</h3>
              <p style={{ color: '#555555', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Sub-second loading landing pages, headless e-commerce, and automated CRM lead capture pipelines.
              </p>
              <div className="mono-sub" style={{ color: '#777777' }}>SYNERGY: STOPS LEAKED REVENUE</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4. STRATEGIC AEO ANSWERS ═══ */}
      <AEOAnswerSection 
        title="Service Execution & Engagement FAQs"
        subtitle="Transparent answers regarding SLAs, reporting cadences, intellectual property ownership, and onboarding timelines."
      />

      {/* ═══ 5. FINAL CONSULTATION BANNER ═══ */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <ScrollReveal>
            <span className="mono-sub text-gold" style={{ letterSpacing: '0.15em', display: 'block', marginBottom: '1rem' }}>
              ZERO GUESSWORK // TAILORED ARCHITECTURE
            </span>
            <h2 className="display-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: '1.5rem' }}>
              Unsure Which Practice Will Unlock The <span className="serif-em text-gold">Fastest ROI</span> For You?
            </h2>
            <p style={{ color: '#555555', fontSize: '1.15rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
              Schedule a 1-on-1 Growth Diagnostic with our Senior Strategists. We will audit your current pipeline, pinpoint where you're losing deals, and prescribe a custom ROI roadmap.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => {
                  trackConversionEvent('primary_cta_click', { location: 'services_footer_banner' });
                  setIsBriefModalOpen(true);
                }}
                className="btn-gold"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
              >
                <Sparkles size={18} />
                <span>Submit Instant Project Brief</span>
                <ArrowRight size={18} />
              </button>

              <a
                href={getWhatsAppLink('Hi MK Publicity! I am looking for a tailored proposal across your services.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-ghost"
                onClick={() => trackConversionEvent('whatsapp_click', { location: 'services_footer_whatsapp' })}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <MessageCircle size={18} color="#25D366" />
                <span>Chat Directly on WhatsApp</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
