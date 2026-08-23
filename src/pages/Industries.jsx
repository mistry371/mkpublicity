import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import IndustryGrid from '../components/IndustryGrid';
import CTAButton from '../components/CTAButton';
import { industries, getWhatsAppLink } from '../data';
import { useModal } from '../context/ModalContext';

const industryDetails = {
  'Manufacturing': 'We help manufacturers build B2B brand visibility, generate qualified leads, and establish thought leadership through digital marketing and PR.',
  'Textile': 'Surat\'s textile industry deserves world-class marketing. We drive brand awareness, digital presence, and buyer connections for textile businesses.',
  'Retail': 'From footfall to online sales, we create omnichannel marketing strategies that keep your retail brand top-of-mind.',
  'E-Commerce': 'Marketplace optimization, digital advertising, and conversion-focused strategies to dominate online selling platforms.',
  'Healthcare': 'Trust-building campaigns, patient acquisition, and reputation management for hospitals, clinics, and healthcare brands.',
  'Education': 'Student enrollment campaigns, brand positioning, and digital presence for educational institutions and ed-tech companies.',
  'Real Estate': 'Lead generation, virtual tours, and brand campaigns that convert property seekers into buyers.',
  'Hospitality': 'Guest acquisition, reputation management, and social media strategies for hotels, restaurants, and tourism brands.',
  'FMCG': 'Mass-market campaigns, influencer partnerships, and retail visibility strategies for fast-moving consumer goods.',
  'Food & Beverage': 'Appetite-inducing content, influencer campaigns, and delivery platform optimization for F&B brands.',
  'Technology': 'Product launches, thought leadership PR, and developer community building for tech companies.',
  'Startups': 'Budget-friendly growth marketing, PR coverage, and brand building for early-stage startups.',
  'Professional Services': 'Credibility building, thought leadership, and lead generation for consultancies and service firms.',
  'Finance': 'Trust-focused marketing, compliance-friendly advertising, and digital presence for financial institutions.',
  'Automotive': 'Showroom footfall campaigns, video marketing, and digital advertising for automotive brands.',
  'Fashion & Lifestyle': 'Influencer collaborations, social media aesthetics, and brand storytelling for fashion labels.',
  'Jewellery': 'Luxury brand positioning, e-commerce optimization, and visual storytelling for jewellery brands.',
  'Interior & Architecture': 'Portfolio showcasing, lead generation, and brand positioning for interior designers and architects.'
};

export default function Industries() {
  const { openModal } = useModal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <section className="page-hero" id="industries-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="page-hero-label">Industries We Serve</div>
            <h1>Expertise Across <span className="text-gradient">18+ Industries</span></h1>
            <p>
              Whatever your industry, we have the experience and expertise to drive
              measurable growth for your business.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <IndustryGrid industries={industries} />
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <div className="section-label">Industry Expertise</div>
              <h2 className="section-title">How We Drive Growth in Your Industry</h2>
              <p className="section-subtitle">
                Tailored strategies for every sector we serve.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid-2">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <ScrollReveal key={ind.name} delay={i * 0.04}>
                  <div className="card" style={{ padding: 'var(--space-xl)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-md)' }}>
                      <span style={{ display: 'inline-flex', color: 'var(--primary)' }}>{Icon && <Icon size={24} />}</span>
                      <h4>{ind.name}</h4>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      {industryDetails[ind.name] || 'Tailored marketing solutions for your industry.'}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <ScrollReveal>
            <h2>Don't See Your Industry?</h2>
            <p>We work with businesses across all sectors. Let's discuss your specific needs.</p>
            <button
              onClick={openModal}
              className="btn btn-lg"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}
            >
              <MessageCircle size={20} /> Let's Discuss Your Industry
            </button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
