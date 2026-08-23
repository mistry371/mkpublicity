import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Handshake, BarChart, Trophy, Leaf, Building2, MapPin, MessageCircle, Sparkles, Users, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import CTAButton from '../components/CTAButton';
import StatsCounter from '../components/StatsCounter';
import { stats, getWhatsAppLink } from '../data';
import { useModal } from '../context/ModalContext';

const values = [
  { icon: Target, title: 'Mission-Driven', desc: 'Every strategy is designed around your business goals. We don\'t just market — we build growth engines.' },
  { icon: Lightbulb, title: 'Innovation First', desc: 'We stay ahead of marketing trends, adopting new platforms and technologies before they become mainstream.' },
  { icon: Handshake, title: 'Partnership Approach', desc: 'We become an extension of your team, invested in your success as if it were our own.' },
  { icon: BarChart, title: 'Data-Informed', desc: 'Every decision is backed by analytics. We measure, learn, and optimize continuously.' },
  { icon: Trophy, title: 'Excellence Standard', desc: 'From creative quality to campaign execution, we maintain the highest standards in everything we do.' },
  { icon: Leaf, title: 'Sustainable Growth', desc: 'We focus on long-term, sustainable brand building — not short-term vanity metrics.' }
];

export default function About() {
  const { openModal } = useModal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      {/* Hero */}
      <section className="page-hero" id="about-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="page-hero-label">About Us</div>
            <h1>We Build Brands That <span className="text-gradient">Dominate</span></h1>
            <p>
              MK Publicity is a full-service marketing, PR, and media agency
              delivering integrated strategies for measurable business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section" id="about-story">
        <div className="container">
          <div className="about-story">
            <ScrollReveal direction="left">
              <div>
                <div className="section-label">Our Story</div>
                <h2 style={{ marginBottom: 'var(--space-xl)' }}>
                  From Surat to the <span className="text-gradient">World</span>
                </h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 'var(--space-lg)' }}>
                  Born in the vibrant city of Surat, Gujarat, MK Publicity was founded with a singular vision:
                  to make world-class marketing accessible to businesses of all sizes. We believe every brand
                  has a story worth telling, and we're here to tell it brilliantly.
                </p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 'var(--space-xl)' }}>
                  We combine creative storytelling, strategic communication, digital marketing, and
                  technology-driven solutions to deliver measurable business growth. From startups finding
                  their voice to enterprises scaling their market dominance, we've partnered with 500+
                  businesses across 18+ industries.
                </p>
                <button 
                  className="btn" 
                  onClick={openModal}
                >
                  Partner With Us
                </button>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="card" style={{ padding: 'var(--space-3xl)', textAlign: 'center' }}>
                <div style={{ color: 'var(--primary)', marginBottom: 'var(--space-lg)', display: 'flex', justifyContent: 'center' }}>
                  <Building2 size={64} strokeWidth={1.5} />
                </div>
                <h3 style={{ marginBottom: 'var(--space-md)' }}>MK Publicity</h3>
                <p className="text-gradient" style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 'var(--space-lg)' }}>
                  Marketing • PR • Media • Digital Growth
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  "Your Success, Our Mission"
                </p>
                <div className="divider"></div>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <MapPin size={16} /> Surat, Gujarat, India
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsCounter stats={stats} />

      {/* Values */}
      <section className="section" id="about-values" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <div className="section-label">Our Values</div>
              <h2 className="section-title">What Drives Us</h2>
              <p className="section-subtitle">
                The principles that guide every strategy, campaign, and creative decision we make.
              </p>
            </div>
          </ScrollReveal>

          <div className="values-grid">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="value-card card">
                    <div className="value-icon">
                      <Icon size={32} />
                    </div>
                    <h3 className="value-title">{v.title}</h3>
                    <p className="value-desc">{v.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="section" id="about-team">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <div className="section-label">Our Team</div>
              <h2 className="section-title">A Team of Passionate Experts</h2>
              <p className="section-subtitle">
                Strategists, creatives, analysts, and storytellers — working together
                to make your brand unstoppable.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="card" style={{ textAlign: 'center', padding: 'var(--space-4xl)', maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ fontSize: '3rem', marginBottom: 'var(--space-xl)', display: 'flex', justifyContent: 'center', color: 'var(--primary)' }}><Users size={64} /></div>
              <h3 style={{ marginBottom: 'var(--space-lg)' }}>
                Marketing Strategists, Creative Directors, Digital Experts,
                Content Writers, PR Specialists & More
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 'var(--space-xl)' }}>
                Our multi-disciplinary team brings together expertise from performance marketing,
                public relations, creative design, content creation, and technology. We don't just
                execute — we think, strategize, create, and optimize relentlessly.
              </p>
              <CTAButton
                text="Join Our Team"
                icon={Sparkles}
                message="Hi! I'm interested in career opportunities at MK Publicity."
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner" id="about-cta">
        <div className="container">
          <ScrollReveal>
            <h2>Let's Build Something Amazing Together</h2>
            <p>Your brand deserves world-class marketing. Let's make it happen.</p>
              <button
                onClick={openModal}
                className="btn btn-lg"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}
              >
                <MessageCircle size={20} /> Start the Conversation
              </button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
