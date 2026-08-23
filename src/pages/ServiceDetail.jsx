import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, CheckCircle2, MessageCircle } from 'lucide-react';
import PageHero from '../components/PageHero';
import ScrollReveal from '../components/ScrollReveal';
import CTAButton from '../components/CTAButton';
import { services, getWhatsAppLink } from '../data';
import { useModal } from '../context/ModalContext';

export default function ServiceDetail() {
  const { slug } = useParams();
  const { openModal } = useModal();
  const service = services.find(s => s.id === slug);
  const relatedServices = services.filter(s => s.id !== slug).slice(0, 3);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!service) {
    return (
      <section className="page-hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1>Service Not Found</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-xl)' }}>
            The service you're looking for doesn't exist.
          </p>
          <Link to="/services" className="btn btn-primary">← Back to Services</Link>
        </div>
      </section>
    );
  }

  return (
    <div style={{ background: 'var(--bg-body)' }}>
      {/* Editorial Hero */}
      <section className="service-detail-hero" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', paddingTop: '150px', paddingBottom: '100px', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/services" style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--space-2xl)' }}>
               ← Return to Expertise
            </Link>
            
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2xl)', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 min(100%, 500px)' }}>
                <div style={{ color: service.color || 'var(--primary)', marginBottom: 'var(--space-md)' }}>
                  {service.icon && (() => {
                    const Icon = service.icon;
                    return <Icon size={64} strokeWidth={1.5} />;
                  })()}
                </div>
                <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: 'var(--space-xl)' }}>
                  {service.title}
                </h1>
              </div>
              <div style={{ flex: '1 1 min(100%, 300px)', paddingTop: '1.5rem' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', lineHeight: 1.7, marginBottom: 'var(--space-xl)' }}>
                  {service.description}
                </p>
                <CTAButton 
                  text="Inquire Now" 
                  message={`Hi MK Publicity! I'm interested in the ${service.title} service.%0A%0A*Name:* %0A*Company:* %0A*Specific Requirements:* `}
                  size="lg" 
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Split Screen Content */}
      <section style={{ padding: 'var(--space-4xl) 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'var(--space-4xl)' }}>
            
            {/* Sticky Sidebar */}
            <div style={{ position: 'sticky', top: '150px', alignSelf: 'start' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 'var(--space-lg)' }}>Related Expertise</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {relatedServices.map(rs => (
                  <Link
                    key={rs.id}
                    to={`/services/${rs.id}`}
                    style={{
                      padding: '1.5rem',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-lg)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      fontWeight: 600,
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'var(--primary)';
                      e.currentTarget.style.transform = 'translateX(10px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'var(--border-subtle)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <span style={{ fontSize: '1.5rem', color: rs.color || 'var(--text-primary)', display: 'flex' }}>
                      {rs.icon && (() => {
                        const RelatedIcon = rs.icon;
                        return <RelatedIcon size={24} strokeWidth={2} />;
                      })()}
                    </span>
                    {rs.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Scrolling Content */}
            <div>
              <ScrollReveal>
                <div style={{ marginBottom: 'var(--space-3xl)' }}>
                  <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 'var(--space-xl)', letterSpacing: '-0.02em' }}>Strategic Capabilities</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {service.includes.map((item, i) => (
                      <div key={i} style={{ padding: '1.5rem', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--primary-subtle)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Check size={18} strokeWidth={3} />
                        </div>
                        <span style={{ fontSize: '1.1rem', fontWeight: 500 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div>
                  <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 'var(--space-xl)', letterSpacing: '-0.02em' }}>Tangible Outcomes</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '1.5rem' }}>
                    {service.deliverables.map((d, i) => (
                      <div key={i} style={{ padding: '2rem', background: 'var(--bg-dark)', color: 'var(--text-primary)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
                        <div style={{ width: '40px', height: '4px', background: 'var(--primary)', marginBottom: '1.5rem' }}></div>
                        <h4 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{d}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
          </div>
        </div>
      </section>

      {/* Massive CTA */}
      <section style={{ padding: 'var(--space-5xl) 0', background: 'var(--bg-dark)', textAlign: 'center', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <ScrollReveal>
            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 'var(--space-lg)' }}>
              Ready to architect your <br/><span style={{ color: 'var(--primary)' }}>success story?</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto var(--space-2xl)' }}>
              Partner with MK Publicity to transform your brand's digital presence and dominate your industry.
            </p>
            <button
              onClick={openModal}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '1.25rem 2.5rem',
                background: 'var(--primary)',
                color: '#000',
                fontWeight: 700,
                fontSize: '1.1rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Start the Conversation →
            </button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
