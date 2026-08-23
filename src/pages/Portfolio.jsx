import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, MessageCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import CTAButton from '../components/CTAButton';
import { portfolioItems, getWhatsAppLink } from '../data';
import { useModal } from '../context/ModalContext';

const categories = ['All', 'Performance Marketing', 'Social Media', 'Branding', 'Public Relations', 'Advertising', 'E-Commerce'];

export default function Portfolio() {
  const { openModal } = useModal();
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filtered = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter(p => p.category === activeFilter);

  return (
    <>
      <section className="page-hero" id="portfolio-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="page-hero-label">Our Work</div>
            <h1>Results That <span className="text-gradient">Speak</span></h1>
            <p>
              Real campaigns, real results. Explore how we've helped brands achieve
              extraordinary growth across industries.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="filter-tabs">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`filter-tab ${activeFilter === cat ? 'active' : ''}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="portfolio-grid">
            {filtered.map((item, i) => (
              <motion.div
                key={item.title}
                className="portfolio-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                layout
              >
                <div className="portfolio-card-image" style={{ background: item.gradient }}>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    opacity: 0.3
                  }}>
                    <BarChart size={48} />
                  </div>
                  <div className="portfolio-card-overlay">
                    <button
                      onClick={openModal}
                      className="btn btn-primary btn-sm"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                    >
                      <MessageCircle size={16} /> Discuss This Project
                    </button>
                  </div>
                </div>
                <div className="portfolio-card-body">
                  <span className="portfolio-card-tag">{item.category}</span>
                  <h3 className="portfolio-card-title">{item.title}</h3>
                  <p className="portfolio-card-desc">{item.description}</p>
                  <div className="portfolio-stats">
                    {item.stats.map((s, j) => (
                      <div key={j} className="portfolio-stat">
                        <div className="portfolio-stat-value">{s.value}</div>
                        <div className="portfolio-stat-label">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <ScrollReveal>
            <h2>Want Results Like These?</h2>
            <p>Let's create a success story for your brand too.</p>
            <button
              onClick={openModal}
              className="btn btn-lg"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}
            >
              <MessageCircle size={20} /> Let's Build Your Success Story
            </button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
