import { Newspaper, TrendingUp, Laptop, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { Link } from 'react-router-dom';

export default function HybridTrioSection() {
  const pillars = [
    {
      icon: Newspaper,
      badge: 'Perception & Authority',
      title: 'Strategic Public Relations (PR)',
      color: '#4ECDC4',
      description: 'We build undeniable market credibility through high-tier editorial media placements, executive thought leadership, and proactive brand reputation management.',
      points: [
        'National & Regional Press Distribution',
        'Tier-1 Business & Tech Media Features',
        'Crisis Communication & Brand Defense',
        'Award Nominations & Executive Positioning'
      ],
      link: '/services/public-relations'
    },
    {
      icon: TrendingUp,
      badge: 'Demand & Revenue',
      title: 'Performance Marketing',
      color: '#FF6B35',
      description: 'We architect scientific, data-driven paid advertising campaigns across Google, Meta, and LinkedIn that maximize ROAS and generate predictable qualified leads.',
      points: [
        'Multi-Platform Ad Spend Optimization',
        'Advanced Conversion Rate Optimization (CRO)',
        'Granular Audience Retargeting Matrices',
        'Predictable 300%+ Average ROI Scaling'
      ],
      link: '/services/performance-marketing'
    },
    {
      icon: Laptop,
      badge: 'Infrastructure & Automation',
      title: 'IT Solutions & MarTech Systems',
      color: '#00D2FF',
      description: 'We develop bespoke web applications, automated CRM data pipelines, and cloud systems that convert traffic surges into long-term enterprise value.',
      points: [
        'Custom Web & Mobile Application Engineering',
        'MarTech Integrations & Automated CRM Workflows',
        'High-Speed Core Web Vitals Optimization',
        'AI Customer Intelligence & Lead Telemetry'
      ],
      link: '/services/it-solutions'
    }
  ];

  return (
    <section className="section hybrid-trio-section" id="integrated-triad" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header" style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
            <div className="section-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <Zap size={16} /> The Power of Integration
            </div>
            <h2 className="section-title">The Strategic Intersection: Marketing, PR & IT</h2>
            <p className="section-subtitle" style={{ maxWidth: '780px', margin: '0 auto' }}>
              Isolated agencies create fragmented results. MK Publicity synchronizes Public Relations, Performance Marketing, and IT Engineering into a single compounding growth engine.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 330px), 1fr))', gap: '2rem' }}>
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal key={pillar.title} delay={i * 0.15}>
                <div 
                  className="card pillar-hybrid-card"
                  style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '2.5rem 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    position: 'relative',
                    transition: 'all 0.35s ease',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = pillar.color;
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-medium)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <div 
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: 'var(--radius-lg)',
                        background: `${pillar.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: pillar.color
                      }}
                    >
                      <Icon size={28} strokeWidth={1.75} />
                    </div>
                    <span 
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        padding: '0.35rem 0.85rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--bg-body)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                    {pillar.title}
                  </h3>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                    {pillar.description}
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {pillar.points.map(pt => (
                      <li key={pt} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                        <ShieldCheck size={16} color={pillar.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to={pillar.link} 
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: pillar.color,
                      fontWeight: 700,
                      fontSize: '0.92rem',
                      textDecoration: 'none',
                      marginTop: 'auto'
                    }}
                  >
                    Explore Capabilities <ArrowRight size={16} />
                  </Link>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Quantified Flywheel Proof Bar */}
        <ScrollReveal delay={0.3}>
          <div 
            style={{
              marginTop: '3.5rem',
              padding: '2rem',
              borderRadius: 'var(--radius-lg)',
              background: 'linear-gradient(135deg, rgba(245, 197, 24, 0.08) 0%, rgba(0, 210, 255, 0.05) 100%)',
              border: '1px solid var(--border-medium)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-around',
              gap: '2rem',
              textAlign: 'center'
            }}
          >
            <div>
              <div style={{ fontSize: '2.25rem', fontWeight: 900, color: 'var(--text-primary)' }}>340%</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Avg. Inbound Lead Growth</div>
            </div>
            <div style={{ width: '1px', height: '40px', background: 'var(--border-medium)' }}></div>
            <div>
              <div style={{ fontSize: '2.25rem', fontWeight: 900, color: 'var(--text-primary)' }}>2.5x - 4.2x</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Return on Ad Spend (ROAS)</div>
            </div>
            <div style={{ width: '1px', height: '40px', background: 'var(--border-medium)' }}></div>
            <div>
              <div style={{ fontSize: '2.25rem', fontWeight: 900, color: 'var(--text-primary)' }}>&lt; 1.2s</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Web App Paint Latency</div>
            </div>
            <div style={{ width: '1px', height: '40px', background: 'var(--border-medium)' }}></div>
            <div>
              <div style={{ fontSize: '2.25rem', fontWeight: 900, color: 'var(--text-primary)' }}>15+ Media</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Average Top-Tier Features</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
