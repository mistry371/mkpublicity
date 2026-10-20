import { useEffect, useState } from 'react';
import { 
  CheckCircle2, ArrowRight, Sparkles, MessageCircle, Clock 
} from 'lucide-react';
import PageHero from '../components/PageHero';
import ScrollReveal from '../components/ScrollReveal';
import SEOHead from '../components/SEOHead';
import InstantBriefModal from '../components/InstantBriefModal';
import { getWhatsAppLink } from '../data';
import { trackConversionEvent } from '../utils/analytics';

const sprintPhases = [
  {
    phase: 'PHASE 01',
    days: 'DAYS 01–05',
    title: 'Forensic Audit & Infrastructure Alignment',
    objective: 'Diagnose historical ad leaks, verify server-side CAPI telemetry, and establish conversion baseline.',
    deliverables: [
      'Conversion API (CAPI) & GA4 server-side tracking audit',
      'Historical ad account analysis & wasted budget audit',
      'Competitor creative & media positioning teardown',
      'ICP (Ideal Customer Profile) definition document'
    ],
    sla: 'Delivery within 5 business days of onboarding'
  },
  {
    phase: 'PHASE 02',
    days: 'DAYS 06–12',
    title: 'Creative Production & Funnel Architecture',
    objective: 'Engineer high-converting creative assets, video hooks, and sub-second landing pages.',
    deliverables: [
      'On-site 4K video shoot and short-form Reels scripting',
      'Conversion-rate optimized (CRO) landing page build',
      'Copywriting angle testing: Fear, Greed, Authority & Status hooks',
      'Tier-1 PR press release drafting and media target list'
    ],
    sla: 'Asset approval review within 48 hours of delivery'
  },
  {
    phase: 'PHASE 03',
    days: 'DAYS 13–21',
    title: 'Omnichannel Ignition & Campaign Launch',
    objective: 'Ignite targeted performance ad campaigns and distribute national PR syndication.',
    deliverables: [
      'Meta Ads & Google Search campaign structure live deployment',
      'Press release pitching across Tier-1 media desks',
      'Automated WhatsApp lead response funnel active',
      'Daily bid and audience cohort algorithm tuning'
    ],
    sla: 'Live campaigns active within 14 days of contract start'
  },
  {
    phase: 'PHASE 04',
    days: 'DAYS 22–35',
    title: 'Real-Time CRO & Attribution Tuning',
    objective: 'Identify winning ad cohorts, kill unprofitable creative angles, and scale return on ad spend (ROAS).',
    deliverables: [
      'Bi-weekly creative refresh based on click-to-lead drop-off rates',
      'Budget migration to top-performing audience segments',
      'Landing page heat-mapping and form optimization',
      'Comprehensive monthly executive attribution report'
    ],
    sla: 'Attribution telemetry updated 24/7 in client dashboard'
  },
  {
    phase: 'PHASE 05',
    days: 'DAY 36+',
    title: 'Compounding Flywheel & Enterprise Scale',
    objective: 'Layer SEO compounding, automated CRM flows, and brand authority to lower blended acquisition costs.',
    deliverables: [
      'Organic search authority expansion and technical SEO updates',
      'Executive thought leadership PR features',
      'Customer lifetime value (LTV) and retention email/WhatsApp flows',
      'Quarterly growth roadmap and new channel expansion'
    ],
    sla: 'Quarterly strategic business review with agency partners'
  }
];

export default function Process() {
  const [isBriefModalOpen, setIsBriefModalOpen] = useState(false);

  useEffect(() => { 
    window.scrollTo(0, 0); 
  }, []);

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': 'MK Publicity 5-Phase Growth & Delivery Methodology',
    'description': 'Our proven sprint process for scaling brand perception, performance marketing, and IT systems.',
    'step': sprintPhases.map((phase, idx) => ({
      '@type': 'HowToStep',
      'position': idx + 1,
      'name': phase.title,
      'text': phase.objective
    }))
  };

  return (
    <div style={{ background: '#FBFBFA', color: '#0C0D0E', minHeight: '100vh' }}>
      <SEOHead
        title="Our Methodology — 5-Phase Sprint Framework | MK Publicity"
        description="Discover our 5-phase data-driven sprint methodology: Forensic Audit, Creative Engineering, Campaign Ignition, Attribution Tuning, and Flywheel Scale. Built for serious growth."
        keywords="marketing process, PR methodology, IT growth framework, conversion optimization, campaign execution, MK Publicity process"
        canonical="/process"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Our Process', url: '/process' }
        ]}
        jsonLd={howToSchema}
      />

      <InstantBriefModal
        isOpen={isBriefModalOpen}
        onClose={() => setIsBriefModalOpen(false)}
      />

      {/* ═══ 1. EDITORIAL PAGE HERO ═══ */}
      <PageHero 
        label="THE SPRINT METHODOLOGY // ZERO GUESSWORK"
        title="The Engineering Blueprint for Predictable Commercial Growth"
        highlight="Predictable Commercial Growth"
        description="We replaced the slow, opaque traditional agency model with a transparent, milestone-driven 5-phase execution sprint. Inspect every deliverable, timeline, and SLA commitment below."
        ctaText="Initiate Phase 1 Audit"
      />

      {/* ═══ 2. THE 5-PHASE SPRINT ROADMAP ═══ */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 0', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
        <div className="container">
          <div className="arch-sec-head">
            <span className="mono-sub text-gold">THE TIMELINE</span>
            <div className="arch-head-split">
              <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
                Milestone-Driven <span className="serif-em text-gold">Execution</span>
              </h2>
              <p className="arch-head-lead">
                No endless meetings or unexplained delays. Every phase has a designated time horizon, explicit outputs, and senior leadership accountability.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {sprintPhases.map((phase, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: '6px',
                  padding: 'clamp(2rem, 4vw, 3.5rem)',
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '2rem',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)'
                }}
                className="sprint-phase-card"
              >
                {/* Left Phase Badge & Title */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <span className="mono-sub text-gold" style={{ fontSize: '0.8rem', fontWeight: 800 }}>
                      {phase.phase}
                    </span>
                    <span style={{ color: '#999999' }}>//</span>
                    <span style={{
                      background: 'rgba(245, 197, 24, 0.15)',
                      color: '#070809',
                      padding: '4px 12px',
                      borderRadius: '100px',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700
                    }}>
                      {phase.days}
                    </span>
                  </div>

                  <h3 style={{ fontSize: 'clamp(1.4rem, 2vw, 1.8rem)', fontWeight: 800, color: '#0C0D0E', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>
                    {phase.title}
                  </h3>

                  <p style={{ color: '#555555', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem', maxWidth: '520px' }}>
                    {phase.objective}
                  </p>

                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.8rem',
                    color: '#555555',
                    background: '#F9F9F7',
                    padding: '8px 14px',
                    borderRadius: '4px',
                    border: '1px solid rgba(0, 0, 0, 0.06)'
                  }}>
                    <Clock size={15} color="#B8860B" />
                    <span>{phase.sla}</span>
                  </div>
                </div>

                {/* Right Tangible Deliverables List */}
                <div style={{ background: '#FBFBFA', border: '1px solid rgba(0, 0, 0, 0.06)', padding: '1.75rem', borderRadius: '4px' }}>
                  <span className="mono-sub text-gold" style={{ display: 'block', marginBottom: '1.25rem', fontWeight: 700 }}>
                    EXACT TANGIBLE DELIVERABLES
                  </span>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {phase.deliverables.map((item, dIdx) => (
                      <div key={dIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: '#444444' }}>
                        <CheckCircle2 size={16} color="#B8860B" style={{ marginTop: '3px', flexShrink: 0 }} />
                        <span style={{ lineHeight: 1.5 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (min-width: 992px) {
            .sprint-phase-card {
              grid-template-columns: 1fr 1fr !important;
              align-items: center !important;
            }
          }
        `}</style>
      </section>

      {/* ═══ 3. COMPARISON: MK PUBLICITY SPRINT VS TRADITIONAL AGENCY ═══ */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 0', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
        <div className="container">
          <div className="arch-sec-head">
            <span className="mono-sub text-gold">CONTRAST MATRIX</span>
            <div className="arch-head-split">
              <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
                Why Companies Switch To Our <span className="serif-em text-gold">Sprint Model</span>
              </h2>
              <p className="arch-head-lead">
                Compare our milestone-governed methodology against the typical slow, unaccountable retainers common in the regional agency market.
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '2rem' }}>
            
            {/* Traditional Agency */}
            <div style={{ background: 'rgba(239, 68, 68, 0.04)', border: '1px solid rgba(239, 68, 68, 0.2)', padding: '2.5rem', borderRadius: '6px' }}>
              <div className="mono-sub" style={{ color: '#dc2626', marginBottom: '1rem', fontWeight: 700 }}>TRADITIONAL AGENCY MODEL</div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0C0D0E', marginBottom: '1.5rem' }}>
                Slow Onboarding & Vanity Reporting
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', color: '#666666' }}>
                <div>✕ Takes 4–6 weeks just to get initial creative approved</div>
                <div>✕ Relies on surface-level vanity metrics (impressions, clicks)</div>
                <div>✕ Disconnected teams: marketing agency blames the website developer</div>
                <div>✕ You are handed off to an inexperienced junior executive</div>
                <div>✕ Account access is locked under agency-owned profiles</div>
              </div>
            </div>

            {/* MK Publicity Sprint */}
            <div style={{ background: '#FFFFFF', border: '1px solid rgba(184, 134, 11, 0.3)', padding: '2.5rem', borderRadius: '6px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)' }}>
              <div className="mono-sub text-gold" style={{ marginBottom: '1rem', fontWeight: 700 }}>THE MK PUBLICITY SPRINT</div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0C0D0E', marginBottom: '1.5rem' }}>
                Rapid Deployment & Attribution
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', color: '#0C0D0E' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={16} color="#B8860B" /> Live campaigns ignited within 14 days of start
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={16} color="#B8860B" /> Pure commercial metrics: qualified leads, CAC & ROAS
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={16} color="#B8860B" /> Unified execution: Performance + PR + Tech under 1 roof
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={16} color="#B8860B" /> Direct leadership review with Mehul Desai & senior architects
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={16} color="#B8860B" /> 100% client ownership of all code, assets, and ad accounts
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ 4. FINAL CONSULTATION BANNER ═══ */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <ScrollReveal>
            <span className="mono-sub text-gold" style={{ display: 'block', marginBottom: '1rem' }}>
              START WITH A SPRINT ZERO AUDIT
            </span>
            <h2 className="display-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: '1.5rem' }}>
              Ready For High-Speed <br/>
              <span className="serif-em text-gold">Execution?</span>
            </h2>
            <p style={{ color: '#555555', fontSize: '1.15rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
              Schedule a 30-minute discovery session with our senior strategists. We will evaluate your current growth bottlenecks and map out your custom 5-phase timeline.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => {
                  trackConversionEvent('primary_cta_click', { location: 'process_footer_cta' });
                  setIsBriefModalOpen(true);
                }}
                className="btn-gold"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
              >
                <Sparkles size={18} />
                <span>Book Discovery Session</span>
                <ArrowRight size={18} />
              </button>

              <a
                href={getWhatsAppLink('Hi MK Publicity! I would like to review the sprint process for my company.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-ghost"
                onClick={() => trackConversionEvent('whatsapp_click', { location: 'process_footer_whatsapp' })}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <MessageCircle size={18} color="#25D366" />
                <span>WhatsApp Directly</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
