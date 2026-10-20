import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, ChevronDown, Sparkles, MessageCircle, Phone, 
  Clock, CheckCircle2, ArrowRight, ArrowUpRight, 
  TrendingUp, ShieldCheck, Zap, Building2, MapPin,
  Calculator, HelpCircle, Layers, Award
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SEOHead from '../components/SEOHead';
import InstantBriefModal from '../components/InstantBriefModal';
import { services, PHONE, ADDRESS, getWhatsAppLink } from '../data';
import { getServiceSEOData } from '../serviceDetailData';
import { trackConversionEvent } from '../utils/analytics';

const BUDGET_TIERS = [
  {
    id: 'starter',
    name: 'Starter Growth',
    spendRange: '₹35,000 – ₹60,000 / mo',
    projectedLeads: '45 – 90 verified leads',
    cacEstimate: '₹450 – ₹750 per qualified lead',
    pipelineEstimate: '₹15L – ₹35L potential sales pipeline',
    suitableFor: 'Emerging Surat brands & regional manufacturers testing digital acquisition',
    timeline: 'First leads in 48–72 hours'
  },
  {
    id: 'scaling',
    name: 'Accelerated Scaling',
    spendRange: '₹75,000 – ₹1,50,000 / mo',
    projectedLeads: '120 – 280 verified leads',
    cacEstimate: '₹380 – ₹620 per qualified lead',
    pipelineEstimate: '₹40L – ₹1.2Cr potential sales pipeline',
    suitableFor: 'Established Gujarat enterprises scaling pan-India market share',
    timeline: 'Sub-48 hr lead velocity + daily bid tuning'
  },
  {
    id: 'enterprise',
    name: 'Enterprise Domination',
    spendRange: '₹2,00,000 – ₹5,00,000+ / mo',
    projectedLeads: '350 – 950+ verified leads',
    cacEstimate: '₹290 – ₹480 per qualified lead',
    pipelineEstimate: '₹1.8Cr – ₹5Cr+ potential sales pipeline',
    suitableFor: 'Category leaders, textile conglomerates, and diamond exporters',
    timeline: 'Dedicated 24/7 war-room + CAPI server attribution'
  }
];

export default function ServiceDetail() {
  const { slug } = useParams();
  const [activeFaq, setActiveFaq] = useState(0);
  const [isBriefModalOpen, setIsBriefModalOpen] = useState(false);
  const [selectedBudgetTier, setSelectedBudgetTier] = useState('scaling');

  const service = services.find(s => s.id === slug);
  const relatedServices = services.filter(s => s.id !== slug).slice(0, 4);

  useEffect(() => { 
    window.scrollTo(0, 0); 
  }, [slug]);

  if (!service) {
    return (
      <section style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FBFBFA', color: '#0C0D0E' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="display-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Discipline Not Found</h1>
          <p style={{ color: '#555555', marginBottom: '2rem' }}>
            The practice area you are seeking does not exist or has been restructured.
          </p>
          <Link to="/services" className="btn-gold">← Return to All Services</Link>
        </div>
      </section>
    );
  }

  const seoData = getServiceSEOData(service);
  const activeTier = BUDGET_TIERS.find(t => t.id === selectedBudgetTier) || BUDGET_TIERS[1];

  // Schema.org Structured Data
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://mkpublicity.com/services/${service.id}#service`,
    'name': `${service.title} in Surat & Gujarat`,
    'description': seoData.metaDesc,
    'provider': {
      '@type': 'Organization',
      'name': 'MK Publicity',
      'url': 'https://mkpublicity.com',
      'telephone': `+91-${PHONE}`,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': ADDRESS,
        'addressLocality': 'Surat',
        'addressRegion': 'Gujarat',
        'postalCode': '394210',
        'addressCountry': 'IN'
      }
    },
    'serviceType': service.title,
    'areaServed': [
      { '@type': 'City', 'name': 'Surat' },
      { '@type': 'AdministrativeArea', 'name': 'Gujarat' },
      { '@type': 'Country', 'name': 'India' }
    ],
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '500',
      'bestRating': '5'
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': `${service.title} Deliverables`,
      'itemListElement': (service.includes || []).map(inc => ({
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': inc
        }
      }))
    }
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': seoData.faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.a
      }
    }))
  };

  return (
    <div style={{ background: '#FBFBFA', color: '#0C0D0E', minHeight: '100vh' }}>
      <SEOHead
        title={seoData.metaTitle}
        description={seoData.metaDesc}
        keywords={`${seoData.primaryKeyword}, ${seoData.secondaryKeywords.join(', ')}`}
        canonical={`/services/${service.id}`}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: service.title, url: `/services/${service.id}` }
        ]}
        jsonLd={[serviceJsonLd, faqJsonLd]}
      />

      <InstantBriefModal
        isOpen={isBriefModalOpen}
        onClose={() => setIsBriefModalOpen(false)}
        initialService={service.title}
      />

      {/* ═══════════════════════════════════════════════════════════════
          1. EDITORIAL DISCIPLINE HERO SECTION
          ═══════════════════════════════════════════════════════════════ */}
      <section className="editorial-hero" style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
        <div className="hero-glow-bg" />
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Breadcrumb Bar */}
          <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.75rem', flexWrap: 'wrap' }}>
            <Link to="/services" className="mono-sub" style={{ color: '#666666', textDecoration: 'none' }}>
              ← ALL CAPABILITIES
            </Link>
            <span style={{ color: '#999999' }}>/</span>
            <span className="mono-sub text-gold" style={{ letterSpacing: '0.1em' }}>
              {service.title.toUpperCase()}
            </span>
            <span style={{ color: '#999999' }}>/</span>
            <span className="mono-sub" style={{ color: '#777777' }}>
              SURAT HQ
            </span>
          </nav>

          <div className="service-detail-hero-grid">
            
            {/* Left Narrative Column */}
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
                  CORE COMMERCIAL PRACTICE · SURAT HQ
                </span>
              </div>

              <h1 className="display-title" style={{ fontSize: 'clamp(2.3rem, 4.8vw, 4.2rem)', lineHeight: 1.04, marginBottom: '1rem', color: '#0C0D0E' }}>
                {service.title} <br />
                <em className="serif-em text-gold" style={{ fontSize: '0.9em' }}>
                  {seoData.heroSubtitle}
                </em>
              </h1>

              <p style={{ fontSize: 'clamp(1.05rem, 1.35vw, 1.25rem)', lineHeight: 1.6, color: '#555555', maxWidth: '640px', marginBottom: '2rem' }}>
                {service.description}
              </p>

              <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <button
                  type="button"
                  className="btn-gold"
                  onClick={() => {
                    trackConversionEvent('primary_cta_click', { service: service.id, location: 'service_hero' });
                    setIsBriefModalOpen(true);
                  }}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
                >
                  <Sparkles size={16} />
                  <span>Request Custom Strategy</span>
                  <ArrowRight size={16} />
                </button>

                <a 
                  href={getWhatsAppLink(`Hi MK Publicity! I want to discuss ${service.title} for my business in Surat.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-editorial-ghost"
                  onClick={() => trackConversionEvent('whatsapp_click', { service: service.id, location: 'service_hero' })}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <MessageCircle size={16} color="#25D366" />
                  <span>WhatsApp Lead Architect</span>
                </a>

                <a 
                  href={`tel:+91${PHONE}`}
                  className="btn-editorial-ghost"
                  onClick={() => trackConversionEvent('phone_click', { service: service.id, location: 'service_hero' })}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.75rem 1.25rem' }}
                >
                  <Phone size={15} color="#B8860B" />
                  <span>+91 {PHONE}</span>
                </a>
              </div>
            </motion.div>

            {/* Right Column: Executive SLA & Performance Matrix */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="service-sla-matrix"
            >
              <div className="service-sla-header">
                <div>
                  <span className="mono-sub" style={{ color: '#777777', display: 'block' }}>EXECUTIVE SLA MATRIX</span>
                  <strong style={{ fontSize: '0.9rem', color: '#0C0D0E' }}>Standard Practice Agreement</strong>
                </div>
                <span className="verified-pill" style={{ background: 'rgba(245, 197, 24, 0.12)', padding: '4px 8px', borderRadius: '4px' }}>
                  <ShieldCheck size={12} color="#B8860B" /> Verified Metrics
                </span>
              </div>

              <div className="service-sla-grid">
                {seoData.executiveStats.map((st, i) => (
                  <div key={i} className="service-sla-item">
                    <div className="service-sla-label">{st.label}</div>
                    <div className="service-sla-val">{st.value}</div>
                    <div className="service-sla-sub">{st.sub}</div>
                  </div>
                ))}
              </div>

              <div style={{
                background: '#F9F9F7',
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                fontSize: '0.84rem',
                color: '#555555',
                lineHeight: 1.5,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <MapPin size={16} color="#B8860B" style={{ flexShrink: 0 }} />
                <span>
                  <strong>Surat Onboarding Hub:</strong> Direct senior strategist alignment from Rajmahal Mall, Dindoli. No junior delegation.
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          2. PROBLEM VS ARCHITECTURAL SOLUTION (SEO RATIONALE)
          ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(4rem, 7vw, 6rem) 0', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
        <div className="container">
          <div className="arch-sec-head">
            <span className="mono-sub text-gold">STRATEGIC RATIONALE</span>
            <div className="arch-head-split">
              <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)' }}>
                The Problem vs. <span className="serif-em text-gold">Our Execution</span>
              </h2>
              <p className="arch-head-lead">
                Most agencies run isolated tactics that generate surface-level clicks without commercial pipeline contribution. Here is how MK Publicity executes differently.
              </p>
            </div>
          </div>

          <div className="service-problem-solution-grid">
            {/* The Industry Failure */}
            <div className="problem-card">
              <span className="mono-sub" style={{ color: '#dc2626', display: 'block', marginBottom: '1rem', fontWeight: 700 }}>
                {seoData.marketProblem.tag}
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '1rem', color: '#0C0D0E', lineHeight: 1.3 }}>
                {seoData.marketProblem.headline}
              </h3>
              <p style={{ color: '#555555', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {seoData.marketProblem.body}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem', color: '#b91c1c', fontWeight: 500 }}>
                {seoData.marketProblem.bulletPoints.map((pt, pIdx) => (
                  <div key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ fontWeight: 'bold' }}>✕</span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* The MK Publicity Standard */}
            <div className="solution-card">
              <span className="mono-sub text-gold" style={{ display: 'block', marginBottom: '1rem', fontWeight: 700 }}>
                {seoData.mkSolution.tag}
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '1rem', color: '#0C0D0E', lineHeight: 1.3 }}>
                {seoData.mkSolution.headline}
              </h3>
              <p style={{ color: '#555555', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {seoData.mkSolution.body}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem', color: '#0C0D0E' }}>
                {seoData.mkSolution.bulletPoints.map((sPt, sIdx) => (
                  <div key={sIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <CheckCircle2 size={16} color="#B8860B" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{sPt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3. 3 TECHNICAL EXECUTION PILLARS (DEEP DIVE CAPABILITIES)
          ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(4rem, 7vw, 6rem) 0', background: '#FFFFFF', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
        <div className="container">
          <div className="arch-sec-head">
            <span className="mono-sub text-gold">TECHNICAL EXECUTION PILLARS</span>
            <div className="arch-head-split">
              <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)' }}>
                The Architecture of <span className="serif-em text-gold">Commercial Velocity</span>
              </h2>
              <p className="arch-head-lead">
                Every client campaign under {service.title} is deployed through three synchronized technical pillars engineered for continuous revenue generation.
              </p>
            </div>
          </div>

          <div className="pillar-grid">
            {seoData.pillars.map((pil, idx) => (
              <div key={idx} className="pillar-card">
                <span className="pillar-number">PILLAR {pil.number}</span>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0C0D0E', marginBottom: '0.35rem' }}>
                  {pil.title}
                </h3>
                <div className="mono-sub" style={{ color: '#B8860B', fontSize: '0.7rem', marginBottom: '1rem' }}>
                  {pil.subtitle}
                </div>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: 1.6, marginBottom: '1.5rem', flex: 1 }}>
                  {pil.desc}
                </p>
                
                <div style={{ borderTop: '1px solid rgba(0, 0, 0, 0.06)', paddingTop: '1rem', marginTop: 'auto' }}>
                  <span className="mono-sub" style={{ fontSize: '0.65rem', color: '#777777', display: 'block', marginBottom: '0.5rem' }}>
                    KEY OUTPUTS:
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {pil.deliverables.map((del, dIdx) => (
                      <div key={dIdx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#333333' }}>
                        <Check size={13} color="#B8860B" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          4. SECTOR APPLICATIONS IN SURAT & GUJARAT
          ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(4rem, 7vw, 6rem) 0', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
        <div className="container">
          <div className="arch-sec-head">
            <span className="mono-sub text-gold">LOCALIZED INDUSTRY ADAPTATION</span>
            <div className="arch-head-split">
              <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)' }}>
                Engineered for Gujarat’s <span className="serif-em text-gold">Core Industries</span>
              </h2>
              <p className="arch-head-lead">
                How our Surat headquarters adapts {service.title} to solve sector-specific sales and positioning challenges across regional manufacturing and enterprise hubs.
              </p>
            </div>
          </div>

          <div className="verticals-grid">
            {seoData.industryApplications.map((app, aIdx) => (
              <div key={aIdx} className="vertical-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
                  <Building2 size={16} color="#B8860B" />
                  <strong style={{ fontSize: '1.05rem', color: '#0C0D0E' }}>{app.industry}</strong>
                </div>
                <p style={{ fontSize: '0.86rem', color: '#555555', lineHeight: 1.55, margin: 0 }}>
                  {app.useCase}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5. INTERACTIVE COMMERCIAL ESTIMATOR (HIGH CONVERTING TOOL)
          ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(4rem, 7vw, 6rem) 0', background: '#FFFFFF', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
        <div className="container" style={{ maxWidth: '980px', margin: '0 auto' }}>
          <div className="arch-sec-head" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="mono-sub text-gold">COMMERCIAL PLANNING TOOL</span>
            <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', marginTop: '0.5rem' }}>
              Projected ROI & <span className="serif-em text-gold">Pipeline Yield</span>
            </h2>
            <p className="arch-head-lead" style={{ margin: '0.85rem auto 0', maxWidth: '640px' }}>
              Select your projected monthly investment tier to preview estimated lead flow, customer acquisition benchmarks, and commercial pipeline volume.
            </p>
          </div>

          {/* Tier Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {BUDGET_TIERS.map(tier => (
              <button
                key={tier.id}
                type="button"
                onClick={() => setSelectedBudgetTier(tier.id)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: selectedBudgetTier === tier.id ? '1px solid #0C0D0E' : '1px solid rgba(0, 0, 0, 0.12)',
                  background: selectedBudgetTier === tier.id ? '#0C0D0E' : '#FFFFFF',
                  color: selectedBudgetTier === tier.id ? '#FFFFFF' : '#444444',
                  transition: 'all 0.2s ease'
                }}
              >
                {tier.name}
              </button>
            ))}
          </div>

          {/* Active Tier Interactive Card */}
          <div style={{
            background: '#FBFBFA',
            border: '1px solid rgba(212, 160, 23, 0.4)',
            borderRadius: '16px',
            padding: 'clamp(1.75rem, 3vw, 2.5rem)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(0, 0, 0, 0.07)', paddingBottom: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span className="mono-sub text-gold">RECOMMENDED AD / PRACTICE TIER</span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0C0D0E', margin: '4px 0 0 0' }}>
                  {activeTier.name} — {activeTier.spendRange}
                </h3>
              </div>
              <span className="verified-pill" style={{ background: '#FFFFFF', padding: '6px 12px', borderRadius: '9999px', border: '1px solid rgba(0, 0, 0, 0.08)' }}>
                <Clock size={12} color="#B8860B" /> {activeTier.timeline}
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '1.75rem' }}>
              <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: '8px', border: '1px solid rgba(0, 0, 0, 0.06)' }}>
                <span className="mono-sub" style={{ color: '#777777', fontSize: '0.65rem' }}>PROJECTED INBOUND VOLUME</span>
                <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0C0D0E', fontFamily: 'var(--font-display)', margin: '4px 0' }}>
                  {activeTier.projectedLeads}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#16a34a', fontWeight: 600 }}>Closed-loop verified inquiries</div>
              </div>

              <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: '8px', border: '1px solid rgba(0, 0, 0, 0.06)' }}>
                <span className="mono-sub" style={{ color: '#777777', fontSize: '0.65rem' }}>TARGET CAC BENCHMARK</span>
                <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#B8860B', fontFamily: 'var(--font-display)', margin: '4px 0' }}>
                  {activeTier.cacEstimate}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#555555' }}>Optimized via continuous CRO</div>
              </div>

              <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: '8px', border: '1px solid rgba(0, 0, 0, 0.06)' }}>
                <span className="mono-sub" style={{ color: '#777777', fontSize: '0.65rem' }}>ESTIMATED PIPELINE CONTRIB.</span>
                <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0C0D0E', fontFamily: 'var(--font-display)', margin: '4px 0' }}>
                  {activeTier.pipelineEstimate}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#555555' }}>Based on 500+ client cohort data</div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid rgba(0, 0, 0, 0.06)', paddingTop: '1.25rem' }}>
              <div style={{ fontSize: '0.84rem', color: '#555555' }}>
                <strong style={{ color: '#0C0D0E' }}>Ideal For:</strong> {activeTier.suitableFor}
              </div>
              <button
                type="button"
                onClick={() => {
                  trackConversionEvent('estimator_quote_click', { tier: activeTier.id, service: service.id });
                  setIsBriefModalOpen(true);
                }}
                className="btn-gold"
                style={{ padding: '0.65rem 1.4rem', fontSize: '0.85rem' }}
              >
                <span>Request Custom Quote for this Tier</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          6. DELIVERABLES & DEPLOYMENT SPRINT ROADMAP (WITH SIDEBAR)
          ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(4rem, 7vw, 6rem) 0', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
        <div className="container">
          <div className="service-main-grid">
            
            {/* Sticky Sidebar Column */}
            <div style={{ position: 'sticky', top: '100px', alignSelf: 'start' }}>
              <span className="mono-sub text-gold" style={{ display: 'block', marginBottom: '0.75rem' }}>
                ECOSYSTEM EXPLORER
              </span>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1.25rem', color: '#0C0D0E' }}>
                Complementary Disciplines
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                {relatedServices.map(rs => (
                  <Link
                    key={rs.id}
                    to={`/services/${rs.id}`}
                    style={{
                      padding: '0.85rem 1.15rem',
                      background: '#FFFFFF',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textDecoration: 'none',
                      color: '#0C0D0E',
                      fontSize: '0.86rem',
                      fontWeight: 600,
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = '#B8860B';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.08)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <span>{rs.title}</span>
                    <ArrowUpRight size={15} color="#B8860B" />
                  </Link>
                ))}
              </div>

              {/* Direct Strategist Contact Card */}
              <div style={{
                background: '#FFFFFF',
                border: '1px solid rgba(184, 134, 11, 0.3)',
                padding: '1.5rem',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)'
              }}>
                <span className="mono-sub text-gold" style={{ display: 'block', marginBottom: '0.4rem' }}>
                  SURAT HEADQUARTERS
                </span>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0C0D0E', marginBottom: '0.5rem' }}>
                  Direct Strategic Clarity
                </h4>
                <p style={{ fontSize: '0.8rem', color: '#555555', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                  Consult directly with Mehul Desai or our senior strategy team at Rajmahal Mall, Dindoli, Surat.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <a 
                    href={`tel:+91${PHONE}`}
                    onClick={() => trackConversionEvent('phone_click', { source: 'service_sidebar' })}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#0C0D0E',
                      textDecoration: 'none',
                      fontWeight: 700,
                      fontSize: '0.88rem'
                    }}
                  >
                    <Phone size={15} color="#B8860B" /> +91 {PHONE}
                  </a>
                  <a 
                    href={getWhatsAppLink(`Hi MK Publicity, I would like to schedule a strategy session for ${service.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#25D366',
                      textDecoration: 'none',
                      fontWeight: 700,
                      fontSize: '0.88rem'
                    }}
                  >
                    <MessageCircle size={15} color="#25D366" /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Right Main Column: Deliverables & 4-Stage Roadmap */}
            <div>
              {/* Deliverables Checklist */}
              <div className="arch-sec-head" style={{ marginBottom: '2rem' }}>
                <span className="mono-sub text-gold">TANGIBLE DELIVERABLES</span>
                <h2 className="display-title" style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.7rem)', marginTop: '0.5rem' }}>
                  Scope of Responsibilities & Output
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.85rem', marginBottom: '3.5rem' }}>
                {(service.includes || []).map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '1.15rem 1.35rem',
                      background: '#FFFFFF',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.02)'
                    }}
                  >
                    <div style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      background: 'rgba(245, 197, 24, 0.15)',
                      color: '#B8860B',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Check size={14} strokeWidth={2.5} />
                    </div>
                    <span style={{ fontSize: '0.92rem', fontWeight: 600, color: '#0C0D0E' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* 4-Stage Deployment Sprint */}
              <div className="arch-sec-head" style={{ marginBottom: '1.75rem' }}>
                <span className="mono-sub text-gold">EXECUTION BLUEPRINT</span>
                <h3 className="display-title" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', marginTop: '0.5rem' }}>
                  The 4-Stage Deployment Sprint
                </h3>
              </div>

              <div className="roadmap-grid">
                <div className="roadmap-card">
                  <div className="mono-sub text-gold" style={{ marginBottom: '0.4rem', fontSize: '0.65rem' }}>STAGE 01 // DAYS 01-05</div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.4rem', color: '#0C0D0E' }}>Forensic Audit</h4>
                  <p style={{ color: '#555555', fontSize: '0.82rem', lineHeight: 1.55, margin: 0 }}>
                    Full review of existing pixels, landers, competitors, and attribution bottlenecks.
                  </p>
                </div>

                <div className="roadmap-card">
                  <div className="mono-sub text-gold" style={{ marginBottom: '0.4rem', fontSize: '0.65rem' }}>STAGE 02 // DAYS 06-12</div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.4rem', color: '#0C0D0E' }}>Creative Production</h4>
                  <p style={{ color: '#555555', fontSize: '0.82rem', lineHeight: 1.55, margin: 0 }}>
                    High-converting direct response copy, 4K visual hooks, and landers engineered.
                  </p>
                </div>

                <div className="roadmap-card">
                  <div className="mono-sub text-gold" style={{ marginBottom: '0.4rem', fontSize: '0.65rem' }}>STAGE 03 // DAYS 13-21</div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.4rem', color: '#0C0D0E' }}>Campaign Ignition</h4>
                  <p style={{ color: '#555555', fontSize: '0.82rem', lineHeight: 1.55, margin: 0 }}>
                    Algorithmic launch across chosen channels with real-time attribution and daily bid tuning.
                  </p>
                </div>

                <div className="roadmap-card">
                  <div className="mono-sub text-gold" style={{ marginBottom: '0.4rem', fontSize: '0.65rem' }}>STAGE 04 // DAY 22+</div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.4rem', color: '#0C0D0E' }}>Scale & Compound</h4>
                  <p style={{ color: '#555555', fontSize: '0.82rem', lineHeight: 1.55, margin: 0 }}>
                    Spend reallocated to winning audiences and scaling top assets for maximum ROAS.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          7. AEO-OPTIMIZED PRE-SALES FAQS (WITH STRUCTURED SCHEMA)
          ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(4rem, 7vw, 6rem) 0', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div className="arch-sec-head" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="mono-sub text-gold">TRANSPARENCY FIRST</span>
            <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', marginTop: '0.5rem' }}>
              Frequently Asked Questions
            </h2>
            <p className="arch-head-lead" style={{ margin: '0.85rem auto 0', maxWidth: '600px' }}>
              Clear answers regarding deployment timelines, intellectual property, contract terms, and performance measurement.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {seoData.faqs.map((faq, fIdx) => {
              const isOpen = activeFaq === fIdx;
              return (
                <div
                  key={fIdx}
                  style={{
                    background: '#FFFFFF',
                    border: isOpen ? '1px solid #B8860B' : '1px solid rgba(0, 0, 0, 0.08)',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)',
                    transition: 'border-color 0.2s ease'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : fIdx)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      textAlign: 'left',
                      background: 'transparent',
                      border: 'none',
                      color: '#0C0D0E',
                      fontSize: '1.02rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    <span>{faq.q}</span>
                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
                      <ChevronDown size={18} color="#B8860B" />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{
                          padding: '0 1.5rem 1.5rem 1.5rem',
                          fontSize: '0.92rem',
                          color: '#555555',
                          lineHeight: 1.65
                        }}
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          8. HIGH-CONVERTING BOTTOM PROPOSAL BANNER
          ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6.5rem) 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <ScrollReveal>
            <span className="mono-sub text-gold" style={{ display: 'block', marginBottom: '1rem' }}>
              GET STARTED IN SURAT & BEYOND
            </span>
            <h2 className="display-title" style={{ fontSize: 'clamp(2.2rem, 4.8vw, 3.8rem)', marginBottom: '1.25rem' }}>
              Request a Custom Strategy for <br/>
              <span className="serif-em text-gold">{service.title}</span>
            </h2>
            <p style={{ color: '#555555', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2.25rem' }}>
              Speak with a senior growth architect in Surat. We will audit your current bottlenecks, model your projected pipeline yield, and provide an actionable scope proposal.
            </p>

            <div style={{
              background: '#FFFFFF',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              padding: '1.15rem 1.5rem',
              borderRadius: '10px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '0.88rem',
              color: '#555555',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)',
              marginBottom: '2rem'
            }}>
              <Clock size={16} color="#B8860B" />
              <span><strong>What happens next?</strong> A senior strategist reviews your business and delivers an actionable proposal within 24 hours.</span>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => {
                  trackConversionEvent('primary_cta_click', { service: service.id, location: 'service_footer_modal' });
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
                href={getWhatsAppLink(`Hi MK Publicity! I am interested in discussing ${service.title} for my brand in Surat.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-ghost"
                onClick={() => trackConversionEvent('whatsapp_click', { service: service.id, location: 'service_footer_whatsapp' })}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <MessageCircle size={18} color="#25D366" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
