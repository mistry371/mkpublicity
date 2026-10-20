import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, HelpCircle } from 'lucide-react';
import { strategicFAQs } from '../data';
import ScrollReveal from './ScrollReveal';

export default function AEOAnswerSection({ title = "Strategic FAQs & Answer Center", subtitle = "Direct answers on how MK Publicity converges Performance Marketing, Strategic PR, and IT Engineering." }) {
  const [openIndex, setOpenIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Hybrid Advantage', 'PR & IT Convergence', 'IT Solutions', 'Performance Marketing', 'Public Relations'];

  const filteredFaqs = selectedCategory === 'All' 
    ? strategicFAQs 
    : strategicFAQs.filter(item => item.category === selectedCategory);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="section aeo-faq-section" id="faq-knowledge-center" style={{ background: 'var(--bg-surface)', position: 'relative' }}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header" style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
            <div className="section-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <HelpCircle size={16} /> Knowledge Base & Direct Answers
            </div>
            <h2 className="section-title" style={{ marginTop: '0.5rem' }}>{title}</h2>
            <p className="section-subtitle" style={{ maxWidth: '750px', margin: '0 auto' }}>
              {subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filter Pills */}
        <ScrollReveal delay={0.1}>
          <div className="filter-tabs" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem', marginBottom: '2.5rem' }}>
            {categories.map(cat => (
              <button
                key={cat}
                type="button"
                className={`filter-tab ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory(cat);
                  setOpenIndex(0);
                }}
                style={{
                  padding: '0.5rem 1.25rem',
                  fontSize: '0.85rem',
                  borderRadius: 'var(--radius-full)',
                  cursor: 'pointer',
                  border: selectedCategory === cat ? '1px solid var(--primary)' : '1px solid var(--border-medium)',
                  background: selectedCategory === cat ? 'var(--primary)' : 'transparent',
                  color: selectedCategory === cat ? '#000' : 'var(--text-secondary)',
                  fontWeight: 600,
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* FAQ Accordion List */}
        <div className="aeo-faq-list" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filteredFaqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollReveal key={faq.question} delay={i * 0.05}>
                <div 
                  className={`aeo-faq-card ${isOpen ? 'open' : ''}`}
                  style={{
                    background: 'var(--bg-card)',
                    border: isOpen ? '1px solid var(--primary)' : '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    boxShadow: isOpen ? 'var(--shadow-md)' : 'none',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(i)}
                    aria-expanded={isOpen}
                    style={{
                      width: '100%',
                      padding: '1.5rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      color: 'var(--text-primary)',
                      gap: '1rem'
                    }}
                  >
                    <span style={{ fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.4 }}>
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ color: isOpen ? 'var(--primary)' : 'var(--text-secondary)', flexShrink: 0 }}
                    >
                      <ChevronDown size={22} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                          {/* Direct Answer Box (Inverted pyramid for AI snippets) */}
                          <div 
                            style={{
                              background: 'var(--primary-subtle)',
                              borderLeft: '4px solid var(--primary)',
                              padding: '1rem',
                              borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                              marginBottom: '1rem',
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.75rem'
                            }}
                          >
                            <Sparkles size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <div>
                              <strong style={{ display: 'block', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-accent)', marginBottom: '0.25rem' }}>
                                Direct Answer
                              </strong>
                              <p style={{ margin: 0, fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.5 }}>
                                {faq.shortAnswer}
                              </p>
                            </div>
                          </div>

                          {/* Detailed Explanation */}
                          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                            {faq.detailedAnswer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* AI & Human Consultation CTA */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>
            Have a custom business question? Ask our 24/7 AI Strategist in the chat widget or reach our engineering leadership.
          </p>
        </div>
      </div>
    </section>
  );
}
