import PageHero from '../components/PageHero';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Rocket, MessageCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import ProcessTimeline from '../components/ProcessTimeline';
import { processSteps, getWhatsAppLink } from '../data';
import { useModal } from '../context/ModalContext';

export default function Process() {
  const { openModal } = useModal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <PageHero 
        label="Our Process"
        title="The Blueprint for Success"
        highlight="Success"
        description="A proven, data-driven methodology that ensures predictable and scalable results for every campaign."
      />

      <section className="section">
        <div className="container">
          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      {/* Why This Works */}
      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <div className="section-label">Why It Works</div>
              <h2 className="section-title">The Science Behind Our Method</h2>
            </div>
          </ScrollReveal>

          <div className="grid-3">
            <ScrollReveal delay={0.1}>
              <div className="card pillar-card" style={{ textAlign: 'center', padding: 'var(--space-2xl)' }}>
                <div style={{ color: 'var(--primary)', marginBottom: 'var(--space-md)', display: 'flex', justifyContent: 'center' }}><Target size={48} /></div>
                <h4 style={{ marginBottom: 'var(--space-md)' }}>Strategic Foundation</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>Every campaign starts with deep market research and competitive analysis.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="card pillar-card" style={{ textAlign: 'center', padding: 'var(--space-2xl)' }}>
                <div style={{ color: 'var(--primary)', marginBottom: 'var(--space-md)', display: 'flex', justifyContent: 'center' }}><Lightbulb size={48} /></div>
                <h4 style={{ marginBottom: 'var(--space-md)' }}>Creative Excellence</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>We blend analytical thinking with award-winning creative execution.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="card pillar-card" style={{ textAlign: 'center', padding: 'var(--space-2xl)' }}>
                <div style={{ color: 'var(--primary)', marginBottom: 'var(--space-md)', display: 'flex', justifyContent: 'center' }}><Rocket size={48} /></div>
                <h4 style={{ marginBottom: 'var(--space-md)' }}>Measurable Impact</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>Focus on metrics that matter: leads, conversions, and revenue growth.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <ScrollReveal>
            <h2>Ready to Start Your Growth Journey?</h2>
            <p>Let's discover what's possible for your brand.</p>
            <button
              onClick={openModal}
              className="btn btn-lg"
            >
              <MessageCircle size={20} style={{ marginRight: '8px' }} /> Book a Discovery Session
            </button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
