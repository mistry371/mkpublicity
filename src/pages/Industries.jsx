import { useEffect, useState } from 'react';
import { 
  Building, Gem, Shirt, Stethoscope, Factory, ShoppingBag, 
  ArrowRight, Sparkles, MessageCircle, ChevronRight 
} from 'lucide-react';
import PageHero from '../components/PageHero';
import ScrollReveal from '../components/ScrollReveal';
import SEOHead from '../components/SEOHead';
import InstantBriefModal from '../components/InstantBriefModal';
import { industries, getWhatsAppLink } from '../data';
import { trackConversionEvent } from '../utils/analytics';

const flagshipPlaybooks = [
  {
    id: 'textile',
    icon: Shirt,
    sector: 'Textiles, Apparel & Synthetic Fabrics',
    marketContext: 'Surat produces over 40% of India’s man-made fabric. Traditional manufacturers struggle to transition from low-margin wholesale broking to high-margin direct buyer relationships.',
    bottleneck: 'Reliance on middleman brokers, zero digital brand equity, and price erosion.',
    mkStrategy: 'Direct B2B buyer lead generation across domestic & export hubs, coupled with high-end fabric shoot catalogs and trade press authority.',
    stack: ['Meta B2B Ads', 'Trade PR Syndication', 'Digital Export Catalogs', 'WhatsApp Commerce CRM'],
    timeline: '14–21 Days to Initial Inbound Wholesale Inquiries'
  },
  {
    id: 'diamonds',
    icon: Gem,
    sector: 'Lab-Grown Diamonds & Fine Jewellery',
    marketContext: 'Surat processes over 90% of the world’s diamonds. The surge in Lab-Grown Diamonds (LGD) requires intense certification trust and high-end international positioning.',
    bottleneck: 'Consumer scepticism around authenticity, fierce price competition, and commoditization.',
    mkStrategy: 'Luxury brand storytelling, IGI/GIA certificate trust funnels, Google Search intent capture for high-intent jewellery keywords, and US/GCC export leads.',
    stack: ['Google Search High-Intent', 'Luxury 4K Macro Shoots', 'Influencer Styling', 'Headless Shopify'],
    timeline: '30 Days to Qualified High-Ticket Inquiries'
  },
  {
    id: 'real-estate',
    icon: Building,
    sector: 'Commercial & High-End Residential Real Estate',
    marketContext: 'Surat’s rapid urban expansion demands targeted marketing that pre-qualifies investors before sales calls, avoiding wasted site visits.',
    bottleneck: 'Low-quality lead forms filled with unqualified applicants and high cost-per-site-visit.',
    mkStrategy: 'Strict 2-step financial qualification funnels, architectural cinematic drone shoots, and targeted NRI buyer campaigns across the Gulf and North America.',
    stack: ['Cinematic Drone Video', 'Pre-Qualification WhatsApp Bot', 'Meta Ads Geo-Fencing', 'Investor PR'],
    timeline: '48 Hours to Qualified Buyer Pipeline'
  },
  {
    id: 'healthcare',
    icon: Stethoscope,
    sector: 'Multi-Speciality Hospitals & Healthcare Institutions',
    marketContext: 'Patients choose doctors and surgical centres based on clinical trust, NABH accreditation, and transparent treatment outcomes.',
    bottleneck: 'Over-reliance on offline hoardings with zero patient attribution and inconsistent OPD bookings.',
    mkStrategy: 'Doctor thought-leadership video series, hyper-local emergency keyword dominance, and reputation management across Google Business profiles.',
    stack: ['Google Local Service Ads', 'Doctor Interview Reels', 'Digital PR & Medical Editorial', 'OPD Booking CRO'],
    timeline: '7 Days to Consistent OPD Lead Flow'
  },
  {
    id: 'manufacturing',
    icon: Factory,
    sector: 'Industrial Engineering & Heavy Manufacturing',
    marketContext: 'Gujarat’s industrial belt requires sustained B2B distributor acquisition and high-value equipment procurement leads.',
    bottleneck: 'Outdated websites with no conversion mechanism, invisible to international procurement heads.',
    mkStrategy: 'Technical search optimization, LinkedIn Account-Based Marketing (ABM) targeting VP of Procurement profiles, and industrial facility video production.',
    stack: ['LinkedIn ABM', 'Technical SEO', 'Industrial Facility 4K Shoot', 'Global Trade PR'],
    timeline: '21 Days to Qualified Enterprise RFP Submissions'
  },
  {
    id: 'd2c',
    icon: ShoppingBag,
    sector: 'D2C Consumer Brands & E-Commerce',
    marketContext: 'Rising ad costs require brands to prioritize repeat purchases, customer lifetime value (LTV), and sub-second checkout speeds.',
    bottleneck: 'Skyrocketing Meta ad costs, high cart abandonment, and unprofitable first-order ROAS.',
    mkStrategy: 'Algorithmic creative testing, post-purchase WhatsApp retention flows, and lightning-fast custom web development.',
    stack: ['Meta Conversion API (CAPI)', 'Automated WhatsApp CRM', 'Speed-Optimized Web Architecture', 'KOL Seeding'],
    timeline: '7 Days to Scaled Campaign Optimization'
  }
];

export default function Industries() {
  const [selectedPlaybook, setSelectedPlaybook] = useState(flagshipPlaybooks[0]);
  const [isBriefModalOpen, setIsBriefModalOpen] = useState(false);

  useEffect(() => { 
    window.scrollTo(0, 0); 
  }, []);

  const industriesSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'Industries Scaled by MK Publicity',
    'description': 'Strategic Marketing, PR, and Custom IT software playbooks for Textiles, Diamonds, Real Estate, Healthcare, and Manufacturing across Surat, Gujarat, and India.',
    'url': 'https://mkpublicity.com/industries'
  };

  return (
    <div style={{ background: '#FBFBFA', color: '#0C0D0E', minHeight: '100vh' }}>
      <SEOHead
        title="Industries We Scale — Textiles, Diamonds, Real Estate, Healthcare | MK Publicity"
        description="Discover tailored growth playbooks for Surat's premier sectors: Textiles, Lab-Grown Diamonds, Real Estate, Healthcare & Manufacturing. Tested commercial frameworks by MK Publicity."
        keywords="textile marketing Surat, lab grown diamond advertising, real estate lead generation Surat, healthcare digital marketing, industrial B2B marketing Gujarat"
        canonical="/industries"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Industries', url: '/industries' }
        ]}
        jsonLd={industriesSchema}
      />

      <InstantBriefModal
        isOpen={isBriefModalOpen}
        onClose={() => setIsBriefModalOpen(false)}
        initialService={`Industry Strategy: ${selectedPlaybook.sector}`}
      />

      {/* ═══ 1. EDITORIAL PAGE HERO ═══ */}
      <PageHero 
        label="SECTOR INTELLIGENCE // 18+ VERTICALS"
        title="Deep Commercial Playbooks Tailored To Your Industry"
        highlight="Your Industry"
        description="We do not apply cookie-cutter digital marketing to complex businesses. Explore how we solve the unique unit economics and customer acquisition challenges of South Gujarat and India’s powerhouse sectors."
        ctaText="Request Sector Audit"
      />

      {/* ═══ 2. INTERACTIVE FLAGSHIP SECTOR PLAYBOOKS ═══ */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 0', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
        <div className="container">
          <div className="arch-sec-head">
            <span className="mono-sub text-gold">TACTICAL BLUEPRINTS</span>
            <div className="arch-head-split">
              <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
                Select Your Commercial <span className="serif-em text-gold">Vertical</span>
              </h2>
              <p className="arch-head-lead">
                Click any sector below to inspect the verified market bottleneck, our architectural response, and the exact channel stack deployed.
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }} className="playbook-layout-grid">
            
            {/* Sector Selector List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {flagshipPlaybooks.map(pb => {
                const isSelected = selectedPlaybook.id === pb.id;
                const Icon = pb.icon;
                return (
                  <button
                    key={pb.id}
                    onClick={() => setSelectedPlaybook(pb)}
                    style={{
                      padding: '1.25rem 1.5rem',
                      background: isSelected ? 'rgba(245, 197, 24, 0.12)' : '#FFFFFF',
                      border: '1px solid',
                      borderColor: isSelected ? '#B8860B' : 'rgba(0, 0, 0, 0.08)',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      cursor: 'pointer',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: isSelected ? '#F5C518' : 'rgba(0, 0, 0, 0.04)',
                        color: isSelected ? '#070809' : '#B8860B',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <Icon size={18} />
                      </div>
                      <div>
                        <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0C0D0E' }}>{pb.sector}</div>
                        <div className="mono-sub" style={{ color: isSelected ? '#B8860B' : '#777777', fontSize: '0.7rem' }}>
                          PROVEN REVENUE PLAYBOOK
                        </div>
                      </div>
                    </div>
                    <ChevronRight size={18} color={isSelected ? '#B8860B' : '#888888'} />
                  </button>
                );
              })}
            </div>

            {/* Selected Sector Architectural Detail Card */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              padding: 'clamp(2rem, 4vw, 3rem)',
              borderRadius: '6px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)'
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(0, 0, 0, 0.08)', paddingBottom: '1.25rem', marginBottom: '1.75rem' }}>
                  <span className="mono-sub text-gold">VERTICAL PLAYBOOK BREAKDOWN</span>
                  <span className="mono-sub" style={{ color: '#16a34a', fontWeight: 600 }}>● ACTIVE FRAMEWORK</span>
                </div>

                <h3 className="display-title" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)', marginBottom: '1rem', color: '#0C0D0E' }}>
                  {selectedPlaybook.sector}
                </h3>

                <p style={{ color: '#555555', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                  {selectedPlaybook.marketContext}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
                  <div style={{ background: 'rgba(239, 68, 68, 0.04)', border: '1px solid rgba(239, 68, 68, 0.2)', padding: '1.25rem', borderRadius: '4px' }}>
                    <span className="mono-sub" style={{ color: '#dc2626', display: 'block', marginBottom: '6px', fontWeight: 700 }}>THE PRIMARY BOTTLENECK</span>
                    <p style={{ color: '#b91c1c', fontSize: '0.88rem', margin: 0, lineHeight: 1.5 }}>{selectedPlaybook.bottleneck}</p>
                  </div>

                  <div style={{ background: 'rgba(245, 197, 24, 0.06)', border: '1px solid rgba(184, 134, 11, 0.25)', padding: '1.25rem', borderRadius: '4px' }}>
                    <span className="mono-sub text-gold" style={{ display: 'block', marginBottom: '6px', fontWeight: 700 }}>THE MK PUBLICITY SOLUTION</span>
                    <p style={{ color: '#0C0D0E', fontSize: '0.88rem', margin: 0, lineHeight: 1.5 }}>{selectedPlaybook.mkStrategy}</p>
                  </div>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <span className="mono-sub text-gold" style={{ display: 'block', marginBottom: '0.75rem' }}>RECOMMENDED CAPABILITY STACK</span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {selectedPlaybook.stack.map((item, idx) => (
                      <span
                        key={idx}
                        style={{
                          background: '#F5F5F2',
                          border: '1px solid rgba(0, 0, 0, 0.08)',
                          padding: '6px 14px',
                          borderRadius: '100px',
                          fontSize: '0.8rem',
                          fontFamily: 'var(--font-mono)',
                          color: '#333333'
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ borderTop: '1px solid rgba(0, 0, 0, 0.08)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ fontSize: '0.85rem', color: '#555555' }}>
                  <strong style={{ color: '#B8860B' }}>Benchmark SLA:</strong> {selectedPlaybook.timeline}
                </div>

                <button
                  className="btn-gold"
                  onClick={() => {
                    trackConversionEvent('primary_cta_click', { sector: selectedPlaybook.id, location: 'industry_playbook_card' });
                    setIsBriefModalOpen(true);
                  }}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', fontSize: '0.85rem' }}
                >
                  <Sparkles size={16} />
                  <span>Deploy For My Brand</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        <style>{`
          @media (min-width: 992px) {
            .playbook-layout-grid {
              grid-template-columns: 380px 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* ═══ 3. COMPLETE 18+ INDUSTRY DIRECTORY ═══ */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 0', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
        <div className="container">
          <div className="arch-sec-head">
            <span className="mono-sub text-gold">COMPLETE SCOPE</span>
            <div className="arch-head-split">
              <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
                18+ Sectors Scaled Across <span className="serif-em text-gold">Gujarat & India</span>
              </h2>
              <p className="arch-head-lead">
                Every business category possesses distinct customer acquisition dynamics. We bring tested category intelligence to each engagement.
              </p>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
            gap: '1.25rem'
          }}>
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.name}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    padding: '1.75rem',
                    borderRadius: '4px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.02)'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                      <span style={{ color: '#B8860B' }}>{Icon && <Icon size={20} />}</span>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0, color: '#0C0D0E' }}>{ind.name}</h3>
                    </div>
                    <p style={{ color: '#555555', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>
                      Custom growth models, algorithmic ad campaigns, and press outreach tailored to {ind.name} commercial dynamics.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ 4. FINAL CONSULTATION CTA ═══ */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <ScrollReveal>
            <span className="mono-sub text-gold" style={{ display: 'block', marginBottom: '1rem' }}>
              TAILORED STRATEGY FOR YOUR INDUSTRY
            </span>
            <h2 className="display-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: '1.5rem' }}>
              Do Not Waste Ad Spend On <br/>
              <span className="serif-em text-gold">Generic Marketing.</span>
            </h2>
            <p style={{ color: '#555555', fontSize: '1.15rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
              Let’s conduct a sector-specific pipeline audit. Speak with our growth strategists to see how other companies in your industry scaled their customer acquisition with MK Publicity.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => {
                  trackConversionEvent('primary_cta_click', { location: 'industries_footer_cta' });
                  setIsBriefModalOpen(true);
                }}
                className="btn-gold"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
              >
                <Sparkles size={18} />
                <span>Request Industry Audit</span>
                <ArrowRight size={18} />
              </button>

              <a
                href={getWhatsAppLink('Hi MK Publicity! I would like to discuss digital marketing and PR for my industry.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-ghost"
                onClick={() => trackConversionEvent('whatsapp_click', { location: 'industries_footer_whatsapp' })}
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
