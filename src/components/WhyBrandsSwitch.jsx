import { CheckCircle2, XCircle, Sparkles, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useModal } from '../context/ModalContext';

export default function WhyBrandsSwitch() {
  const { openModal } = useModal();

  const comparisons = [
    {
      painPoint: 'Multiple Disconnected Agencies',
      oldWay: 'Ad agency blames your web dev for poor sales, while PR works in a silo with zero revenue tracking.',
      newWay: 'One unified growth engine. Your PR, paid ads, and IT software operate as a single revenue-generating machine.'
    },
    {
      painPoint: 'Vanity Metrics vs. Banked Revenue',
      oldWay: 'Reports celebrate clicks, impressions, and follower counts while your sales pipeline remains dry.',
      newWay: 'Strict closed-loop revenue attribution. We measure booked sales calls, signed contracts, and verified cash ROAS.'
    },
    {
      painPoint: 'Slow Websites Leaking Qualified Buyers',
      oldWay: 'Sluggish template websites where 60%+ of paid ad traffic bounces before ever requesting a quote.',
      newWay: 'Sub-second custom web apps and automated CRM funnels that capture and nurture every single buyer.'
    },
    {
      painPoint: 'Ignored Press Releases with Zero Sales Impact',
      oldWay: 'Generic wire distribution to spam blogs that no real executive or decision-maker ever reads.',
      newWay: 'Guaranteed tier-1 editorial placements in premier business journals that command immediate buyer trust.'
    },
    {
      painPoint: 'Junior Interns Managing Your Ad Spend',
      oldWay: 'Senior executives pitch you, then hand your account over to entry-level trainees who burn your capital.',
      newWay: 'Direct collaboration with senior growth architects, full-stack engineers, and battle-tested PR specialists.'
    }
  ];

  return (
    <section className="section why-switch-section" id="why-brands-switch" style={{ background: 'var(--bg-surface)', position: 'relative' }}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header" style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
            <div className="section-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={16} /> The Unfair Growth Advantage
            </div>
            <h2 className="section-title">Why Ambitious Brands Fire Their Old Agencies</h2>
            <p className="section-subtitle" style={{ maxWidth: '780px', margin: '0 auto' }}>
              Stop settling for fragmented vendors who pass the blame. See how our integrated Marketing, PR, and IT model turns marketing from a cost center into your most profitable revenue engine.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ maxWidth: '980px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {comparisons.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.08}>
              <div 
                className="comparison-row-card"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.75rem',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                  gap: '1.75rem',
                  alignItems: 'center',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border-medium)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                }}
              >
                {/* Old Way Column */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', borderRight: '1px solid var(--border-subtle)', paddingRight: '1rem' }}>
                  <div style={{ color: '#ff4d4f', flexShrink: 0, marginTop: '2px' }}>
                    <XCircle size={24} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#ff4d4f' }}>
                      Traditional Fragmented Agencies
                    </span>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0.25rem 0 0.5rem 0', color: 'var(--text-secondary)' }}>
                      {item.painPoint}
                    </h3>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-tertiary)', lineHeight: 1.5 }}>
                      {item.oldWay}
                    </p>
                  </div>
                </div>

                {/* The MK Publicity Engine */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }}>
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-accent)' }}>
                      The MK Publicity Integrated Engine
                    </span>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, margin: '0.25rem 0 0.5rem 0', color: 'var(--text-primary)' }}>
                      Guaranteed Pipeline Revenue
                    </h3>
                    <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: 500, lineHeight: 1.5 }}>
                      {item.newWay}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* High-Intent Conversion Action Callout */}
        <ScrollReveal delay={0.2}>
          <div 
            style={{
              marginTop: '3.5rem',
              padding: '2.5rem',
              borderRadius: 'var(--radius-xl)',
              background: 'linear-gradient(135deg, rgba(245, 197, 24, 0.12) 0%, rgba(0, 0, 0, 0.03) 100%)',
              border: '1px solid var(--border-accent)',
              textAlign: 'center',
              maxWidth: '850px',
              margin: '3.5rem auto 0 auto'
            }}
          >
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
              Ready to Stop Guessing and Start Dominating Your Market?
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 1.75rem auto' }}>
              Book a 1-on-1 Strategic Growth Audit. We will analyze your current ad spend, website conversion bottlenecks, and media presence—completely free.
            </p>
            <button
              onClick={openModal}
              className="btn btn-primary btn-lg"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '1.1rem 2.25rem',
                fontSize: '1.05rem',
                fontWeight: 700,
                borderRadius: 'var(--radius-full)'
              }}
            >
              Claim Your Free Growth & Revenue Audit <ArrowRight size={18} />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
