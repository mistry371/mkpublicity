import PageHero from '../components/PageHero';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import ServiceCard from '../components/ServiceCard';
import { services, getWhatsAppLink } from '../data';
import { useModal } from '../context/ModalContext';

const categories = [
  'All',
  'Marketing',
  'Media & PR',
  'Creative',
  'Digital',
  'Events'
];

const categoryMap = {
  'Marketing': ['performance-marketing', 'advertising-solutions', 'social-media', 'influencer-marketing'],
  'Media & PR': ['public-relations', 'content-writing'],
  'Creative': ['branding', 'video-production'],
  'Digital': ['web-design', 'ecommerce'],
  'Events': ['event-marketing']
};

export default function Services() {
  const { openModal } = useModal();
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filteredServices = activeCategory === 'All'
    ? services
    : services.filter(s => categoryMap[activeCategory]?.includes(s.id));

  return (
    <>
      <PageHero 
        label="Our Services"
        title="11 Ways to Grow Your Brand"
        highlight="Grow"
        description="Comprehensive marketing, PR, and media solutions designed to build visibility and achieve measurable growth."
      />

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="filter-tabs">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <motion.div
            className="services-grid"
            layout
          >
            {filteredServices.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <ScrollReveal>
            <h2>Not Sure Which Service You Need?</h2>
            <p>Our experts will analyze your business and recommend the perfect strategy.</p>
            <button
              onClick={openModal}
              className="btn btn-lg"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}
            >
              <MessageCircle size={20} /> Get Expert Advice
            </button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
