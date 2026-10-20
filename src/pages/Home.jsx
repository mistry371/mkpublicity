import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import HeroSignalBoard from '../components/HeroSignalBoard';
import TickerMarquee from '../components/TickerMarquee';
import ClientMarquee from '../components/ClientMarquee';
import TrinityEcosystem from '../components/TrinityEcosystem';
import GrowthFramework from '../components/GrowthFramework';
import StatsCounter from '../components/StatsCounter';
import ArchitecturalServiceGrid from '../components/ArchitecturalServiceGrid';
import BrandPublicitySection from '../components/BrandPublicitySection';
import DualIndustryMarquee from '../components/DualIndustryMarquee';
import CampaignStack from '../components/CampaignStack';
import RevenueCalculator from '../components/RevenueCalculator';
import TestimonialCarousel from '../components/TestimonialCarousel';
import AEOAnswerSection from '../components/AEOAnswerSection';
import InstantBriefModal from '../components/InstantBriefModal';
import { stats, testimonials, strategicFAQs, getWhatsAppLink } from '../data';
import { useModal } from '../context/ModalContext';
import { trackConversionEvent } from '../utils/analytics';

export default function Home() {
  const { openModal } = useModal();
  const [isBriefModalOpen, setIsBriefModalOpen] = useState(false);
  const [selectedServiceForBrief, setSelectedServiceForBrief] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOpenBrief = (serviceName = 'Integrated Marketing & PR') => {
    trackConversionEvent('primary_cta_click', { service: serviceName, location: 'home_hero' });
    openModal(serviceName);
  };

  const homeFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': strategicFAQs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': `${faq.shortAnswer} ${faq.detailedAnswer}`
      }
    }))
  };

  const homePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://mkpublicity.com/#webpage',
    'url': 'https://mkpublicity.com/',
    'name': 'MK Publicity — Surat\'s #1 Digital Marketing, Strategic PR & IT Solutions Agency',
    'description': 'Surat\'s #1 rated integrated agency uniting Performance Marketing, Strategic Public Relations (PR), and IT & Software Solutions in Surat, Gujarat. 500+ clients scaled, 300%+ verified ROI.',
    'isPartOf': {
      '@id': 'https://mkpublicity.com/#website'
    },
    'about': {
      '@id': 'https://mkpublicity.com/#organization'
    }
  };

  return (
    <>
      <SEOHead
        title="MK Publicity — Surat's #1 Digital Marketing, PR & MarTech Agency"
        description="Surat's #1 rated agency uniting Performance Marketing, Strategic PR, and IT & Software Solutions. 500+ clients scaled, 340% average lead surge, 300%+ verified ROI. Located at Rajmahal Mall, Surat."
        keywords="Surat's #1 marketing agency, best digital marketing agency in Surat, top PR agency Surat, MK Publicity Surat, performance marketing Surat, MarTech solutions Gujarat, branding agency Surat, web development Surat"
        canonical="/"
        jsonLd={[homePageSchema, homeFaqSchema]}
      />

      {/* ═══════════════════════════════════════════════════════════════
          1. ULTRA-PREMIUM EDITORIAL HERO
          ═══════════════════════════════════════════════════════════════ */}
      <section className="editorial-hero" id="hero">
        <div className="hero-glow-bg" aria-hidden="true"></div>

        <div className="container">
          <div className="editorial-hero-grid">
            {/* Left Narrative Column */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15, delayChildren: 0.1 }
                }
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                className="hero-eyebrow-pill"
              >
                <span>🏆 SURAT’S #1 MARKETING, PR & MARTECH AGENCY</span>
              </motion.div>

              <motion.h1
                className="editorial-hero-title"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
              >
                <span>Surat’s #1 Marketing & PR Agency</span><br />
                <em className="serif-em text-gold">for Brands Ready to Dominate.</em>
              </motion.h1>

              <motion.p
                className="editorial-hero-lead"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
                }}
              >
                Surat's undisputed leader in Performance Marketing, National Public Relations, High-Conversion Web Architecture & MarTech Solutions. Backed by 500+ scaled enterprises across textiles, diamonds, real estate & healthcare, delivering an average 340% verified pipeline growth.
              </motion.p>

              <motion.div
                className="hero-action-buttons"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
                }}
              >
                <button
                  type="button"
                  id="hero-cta-discuss-project"
                  onClick={() => handleOpenBrief('Integrated Marketing & PR')}
                  className="btn-gold"
                  style={{ cursor: 'pointer', position: 'relative', zIndex: 10 }}
                >
                  <Sparkles size={18} /> Discuss Your Project
                </button>

                <Link to="/portfolio" className="btn-editorial-ghost">
                  Explore Our Work <ArrowRight size={16} />
                </Link>
              </motion.div>

              <motion.div
                className="hero-proof-chips"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { delay: 0.6, duration: 0.6 } }
                }}
              >
                <span className="proof-chip">
                  <CheckCircle2 size={15} className="text-gold" /> Surat’s #1 Rated Agency (5.0★ Verified)
                </span>
                <span className="proof-chip">
                  <CheckCircle2 size={15} className="text-gold" /> 500+ Scaled Brands & 340% Avg Surge
                </span>
                <span className="proof-chip">
                  <CheckCircle2 size={15} className="text-gold" /> Surat HQ (Rajmahal Mall, Dindoli)
                </span>
                <span className="proof-chip">
                  <CheckCircle2 size={15} className="text-gold" /> In-House Creative, PR & Tech Labs
                </span>
              </motion.div>
            </motion.div>

            {/* Right Live Signal Board */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="hero-signal-col"
            >
              <HeroSignalBoard />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          2. INFINITE ASTRAL TICKER
          ═══════════════════════════════════════════════════════════════ */}
      <TickerMarquee theme="gold" />

      {/* ═══════════════════════════════════════════════════════════════
          3. VERIFIED CLIENT LOGOS MARQUEE
          ═══════════════════════════════════════════════════════════════ */}
      <ClientMarquee />

      {/* ═══════════════════════════════════════════════════════════════
          4. THE STRATEGIC TRINITY: MARKETING, PR & IT (INTERACTIVE SVG RADAR)
          ═══════════════════════════════════════════════════════════════ */}
      <TrinityEcosystem />

      {/* ═══════════════════════════════════════════════════════════════
          5. THE PROPRIETARY GROWTH FRAMEWORK (THE 4-STAGE MK BLUEPRINT)
          ═══════════════════════════════════════════════════════════════ */}
      <GrowthFramework />

      {/* ═══════════════════════════════════════════════════════════════
          6. STATS BENCHMARK GRID
          ═══════════════════════════════════════════════════════════════ */}
      <StatsCounter stats={stats} />

      {/* ═══════════════════════════════════════════════════════════════
          7. ARCHITECTURAL SERVICES GRID (SWEEP-UP HOVER)
          ═══════════════════════════════════════════════════════════════ */}
      <ArchitecturalServiceGrid />

      {/* ═══════════════════════════════════════════════════════════════
          8. DUAL-DIRECTION CATEGORY WALL (TEXTILES, DIAMONDS, REAL ESTATE)
          ═══════════════════════════════════════════════════════════════ */}
      <DualIndustryMarquee />

      {/* ═══════════════════════════════════════════════════════════════
          8B. BRAND PUBLICITY AGENCY SPOTLIGHT (OFFICIAL 10 CORE SERVICES)
          ═══════════════════════════════════════════════════════════════ */}
      <BrandPublicitySection showHeader={true} />

      {/* ═══════════════════════════════════════════════════════════════
          9. STICKY-STACKING CAMPAIGN CASE STUDIES ("STORIES THAT SCALE")
          ═══════════════════════════════════════════════════════════════ */}
      <CampaignStack />

      {/* ═══════════════════════════════════════════════════════════════
          10. REVENUE & PIPELINE FORECASTING CALCULATOR
          ═══════════════════════════════════════════════════════════════ */}
      <RevenueCalculator />

      {/* ═══════════════════════════════════════════════════════════════
          11. CLIENT TESTIMONIALS
          ═══════════════════════════════════════════════════════════════ */}
      <section className="section theme-light" id="testimonials-section">
        <div className="container">
          <header className="arch-sec-head">
            <div className="section-label">Verified Client Endorsements</div>
            <div className="arch-head-split">
              <h2 className="display-title">
                WHAT FOUNDERS SAY ABOUT <em className="serif-em">OUR ROI.</em>
              </h2>
              <p className="arch-head-lead">
                Real feedback from family business founders, corporate directors, and startup leaders who scaled with MK Publicity.
              </p>
            </div>
          </header>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          12. STRATEGIC FAQS & AEO ANSWER CENTER
          ═══════════════════════════════════════════════════════════════ */}
      <AEOAnswerSection 
        title="Knowledge Base & Strategic Pre-Sales FAQs"
        subtitle="Authoritative answers on performance guarantees, marketing budgets, PR timelines, and IT system integrations."
      />

      {/* ═══════════════════════════════════════════════════════════════
          13. HIGH-IMPACT CLOSING BANNER
          ═══════════════════════════════════════════════════════════════ */}
      <section className="theme-accent cta-banner" id="cta-banner" style={{ padding: 'clamp(4rem, 8vw, 7rem) 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '46rem', margin: '0 auto' }}>
            <span className="mono-sub" style={{ background: '#000', color: '#F5C518', padding: '4px 12px', borderRadius: '9999px' }}>
              Q4 / Q1 Partnership Openings
            </span>
            <h2 className="display-title" style={{ color: '#070809', margin: '1rem 0 1.25rem 0' }}>
              YOUR BRAND HAS A STORY. <em className="serif-em">LET’S MAKE IT PROFITABLE.</em>
            </h2>
            <p style={{ color: '#222', fontSize: '1.15rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              Schedule your free 30-minute growth & PR diagnosis. We will audit your current funnel, diagnose pipeline leaks, and show you how to achieve 300%+ ROI with zero vanity fluff.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => handleOpenBrief('General Growth Strategy')}
                className="btn-gold"
                style={{ background: '#070809', color: '#F5C518', border: '1px solid #070809' }}
              >
                <Sparkles size={18} /> Start a Conversation with Our Architect
              </button>
              <a
                href={getWhatsAppLink('Hi! I want to request a free revenue and growth audit for my brand.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-ghost"
                style={{ borderColor: '#070809', color: '#070809' }}
              >
                Direct WhatsApp Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          14. INSTANT BRIEF MODAL (NATIVE OVERLAY)
          ═══════════════════════════════════════════════════════════════ */}
      <InstantBriefModal
        isOpen={isBriefModalOpen}
        onClose={() => setIsBriefModalOpen(false)}
        initialService={selectedServiceForBrief}
      />
    </>
  );
}
