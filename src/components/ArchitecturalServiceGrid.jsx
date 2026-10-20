import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { services } from '../data';
import { useModal } from '../context/ModalContext';

const serviceTags = {
  'performance-marketing': 'PERFORMANCE',
  'public-relations': 'PR & MEDIA',
  'it-solutions': 'IT & MARTECH',
  'advertising-solutions': 'PAID SEARCH',
  'social-media': 'SOCIAL MEDIA',
  'influencer-marketing': 'INFLUENCER',
  'content-writing': 'COPYWRITING',
  'branding': 'BRANDING',
  'video-production': 'PRODUCTION',
  'web-design': 'WEB & UX',
  'ecommerce': 'E-COMMERCE',
  'event-marketing': 'EVENTS',
  'press-conference': 'PRESS MEET',
  'digital-pr': 'DIGITAL PR',
  'media-management': 'MEDIA BUREAU',
  'social-media-ads': 'PAID SOCIAL',
  'award-nominations': 'ACCREDITATIONS'
};

export default function ArchitecturalServiceGrid() {
  const { openModal } = useModal();

  return (
    <section className="section theme-light arch-services-section" id="services">
      <div className="container">
        <header className="arch-sec-head">
          <div className="section-label">17 Core Disciplines + Custom Growth Architecture</div>
          <div className="arch-head-split">
            <h2 className="display-title">
              WE BUILD BRANDS THAT <em className="serif-em">DOMINATE MARKETS.</em>
            </h2>
            <p className="arch-head-lead">
              Every service is engineered to feed into the next. Choose an individual discipline, or let our unified 
              Performance Marketing, Strategic PR, and IT Engineering team run your entire revenue engine.
            </p>
          </div>
        </header>

        {/* 18-Cell Balanced Grid (6 rows x 3 columns on desktop, 9 rows x 2 columns on tablet) */}
        <ul className="arch-svc-grid">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            const isPrimary = idx === 0;
            const numStr = (idx + 1).toString().padStart(2, '0');
            const tag = serviceTags[svc.id] || 'DISCIPLINE';

            return (
              <li 
                key={svc.id} 
                className={`arch-svc-cell ${isPrimary ? 'arch-svc-cell--primary' : ''}`}
              >
                <Link to={`/services/${svc.id}`} className="arch-svc-card">
                  <div className="arch-svc-top">
                    <span className="arch-svc-num mono-sub">{numStr}</span>
                    <span className={`arch-svc-flag ${isPrimary ? 'flag-primary' : ''}`}>{tag}</span>
                    
                    {Icon && (
                      <div className="arch-svc-icon-wrap">
                        <Icon size={24} strokeWidth={1.5} className="arch-svc-icon" />
                      </div>
                    )}
                  </div>

                  <div className="arch-svc-body">
                    <h3 className="arch-svc-title">{svc.title}</h3>
                    <p className="arch-svc-text">{svc.shortDesc}</p>
                  </div>

                  <div className="arch-svc-bottom">
                    <span className="arch-svc-link mono-sub">
                      Explore Discipline <ArrowUpRight size={14} className="arrow-glide" />
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}

          {/* 18th Perfectly Balanced Anchor Cell: Growth Audit */}
          <li key="grid-audit-anchor" className="arch-svc-cell arch-svc-cell--audit">
            <div 
              onClick={() => openModal('Full Strategic Growth Audit & Roadmap')} 
              className="arch-svc-card arch-svc-card--audit"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openModal('Full Strategic Growth Audit & Roadmap'); }}
            >
              <div className="arch-svc-top">
                <span className="arch-svc-num mono-sub" style={{ color: '#B8860B', fontWeight: 800 }}>18</span>
                <span className="arch-svc-flag flag-gold">GROWTH AUDIT</span>
                
                <div className="arch-svc-icon-wrap">
                  <Sparkles size={24} strokeWidth={1.5} className="arch-svc-icon text-gold" />
                </div>
              </div>

              <div className="arch-svc-body">
                <h3 className="arch-svc-title" style={{ color: '#0C0D0E' }}>
                  Custom Growth Roadmap
                </h3>
                <p className="arch-svc-text">
                  Not sure which discipline fits your current bottleneck? We audit your revenue funnel, diagnose leakage, and build your 90-day multi-channel execution blueprint.
                </p>
              </div>

              <div className="arch-svc-bottom">
                <span className="arch-svc-link mono-sub" style={{ color: '#B8860B', fontWeight: 700 }}>
                  Claim Free Audit <ArrowUpRight size={14} className="arrow-glide" />
                </span>
              </div>
            </div>
          </li>
        </ul>

        {/* Standalone Full-Width Strategic Consultation Banner */}
        <div className="arch-cta-banner-wrapper">
          <div className="arch-svc-cta-box">
            <div className="arch-svc-cta-content">
              <span className="mono-sub text-gold">CUSTOM ARCHITECTURE // REVENUE ROADMAP</span>
              <h3 className="cta-box-title">Not sure which discipline fits your current bottleneck?</h3>
              <p className="cta-box-desc">
                Tell us where your revenue is today and where you want it to be. We'll audit your funnel, diagnose leaks, and deliver a comprehensive 90-day growth roadmap.
              </p>

              <div className="cta-box-perks">
                <div className="cta-perk-item">
                  <Sparkles size={16} className="text-gold" />
                  <span>Closed-loop funnel leakage & CAC attribution diagnosis</span>
                </div>
                <div className="cta-perk-item">
                  <Sparkles size={16} className="text-gold" />
                  <span>Cross-channel media scaling & PR authority alignment</span>
                </div>
                <div className="cta-perk-item">
                  <Sparkles size={16} className="text-gold" />
                  <span>Actionable 90-day multi-channel execution blueprint</span>
                </div>
              </div>

              <div className="cta-box-action">
                <button 
                  type="button" 
                  onClick={() => openModal('Full Strategic Growth Audit & Roadmap')} 
                  className="btn btn-gold btn-lg"
                >
                  <Sparkles size={18} /> Claim Free Growth Audit
                </button>
                <span className="mono-sub" style={{ fontSize: '0.8rem', color: '#666666' }}>
                  🔒 100% Confidential • Zero Agency Fluff
                </span>
              </div>
            </div>

            <div className="arch-svc-cta-visual">
              <div className="arch-cta-img-container">
                <img 
                  src="/assets/growth-audit.jpg" 
                  alt="MK Publicity Strategic Growth Audit & Revenue Funnel Architecture" 
                  className="arch-cta-img"
                  loading="lazy"
                />
                <div className="arch-cta-overlay-badge">
                  <span className="mono-sub text-gold" style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '1px' }}>
                    EXECUTIVE INTELLIGENCE
                  </span>
                  <strong style={{ display: 'block', fontSize: '0.85rem', color: '#0C0D0E', fontWeight: 700 }}>
                    90-Day Funnel Architecture
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
