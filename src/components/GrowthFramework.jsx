import { useState } from 'react';
import { 
  Compass, Award, TrendingUp, Cpu, 
  ShieldCheck, CheckCircle2, Sparkles, 
  BarChart3, Zap 
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useModal } from '../context/ModalContext';
import { trackConversionEvent } from '../utils/analytics';

const FRAMEWORK_STAGES = [
  {
    num: '01',
    phase: 'COMMERCIAL DIAGNOSTICS',
    timeline: 'Sprint 01 // Days 1–14',
    title: 'Forensic Audit & Funnel Telemetry',
    icon: Compass,
    color: '#D4A017',
    summary: 'We unpack your unit economics, audit historical ad waste, and map out where qualified buyers are bouncing.',
    deliverables: [
      'CAC vs. LTV unit economic breakdown',
      'Competitor vulnerability & market gap analysis',
      'Leaking funnel & bounce-rate fixes',
      '90-Day Capital Allocation Blueprint'
    ],
    kpi: '30%+ CAC Reduction Target'
  },
  {
    num: '02',
    phase: 'PERCEPTION ENGINEERING',
    timeline: 'Sprint 02 // Days 15–30',
    title: 'Tier-1 PR & Institutional Authority',
    icon: Award,
    color: '#B8860B',
    summary: 'We build undeniable market credibility through high-tier editorial media features that establish pricing power.',
    deliverables: [
      'National business & trade media placements',
      'Executive founder thought-leadership columns',
      'Crisis defense & brand equity safeguarding',
      'Verified media kit for wholesale / enterprise buyers'
    ],
    kpi: '10x Credibility Multiplier'
  },
  {
    num: '03',
    phase: 'REVENUE SCALING',
    timeline: 'Sprint 03 // Days 31–60',
    title: 'Algorithmic Paid Acquisition & CRO',
    icon: TrendingUp,
    color: '#D4A017',
    summary: 'We deploy scientific, multi-platform campaigns that target high-intent commercial buyers ready to purchase.',
    deliverables: [
      'Full-funnel Google, Meta & LinkedIn architecture',
      'High-converting landing pages with sub-second speeds',
      'Granular retargeting & lookalike audience matrices',
      'Continuous creative testing & ad margin expansion'
    ],
    kpi: '4.5x Average Cash ROAS'
  },
  {
    num: '04',
    phase: 'SYSTEM AUTOMATION',
    timeline: 'Sprint 04 // Days 61–90',
    title: 'Custom MarTech & Lead Automation',
    icon: Cpu,
    color: '#B8860B',
    summary: 'We engineer custom web systems and automated CRM funnels so no qualified inquiry ever goes unanswered.',
    deliverables: [
      'Automated WhatsApp lead dispatch (< 30s response)',
      'Custom CRM pipeline & lead qualification funnels',
      'Real-time closed-loop revenue telemetry dashboards',
      'Permanent institutional IP owned 100% by you'
    ],
    kpi: '< 30s Instant Lead Response'
  }
];

export default function GrowthFramework() {
  const { openModal } = useModal();
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="section theme-light growth-framework-section" id="growth-framework">
      <div className="container">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="arch-sec-head" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <span className="mono-sub text-gold">PROPRIETARY OPERATING SYSTEM // THE MK BLUEPRINT</span>
            <div className="arch-head-split">
              <h2 className="display-title">
                HOW WE ARCHITECT <em className="serif-em">MARKET DOMINANCE.</em>
              </h2>
              <p className="arch-head-lead">
                We do not sell isolated services or billable hours. We deploy a synchronized four-phase growth operating system that transforms regional enterprises into category-dominating national brands.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 4-Stage Architectural Framework Grid */}
        <div className="framework-grid">
          {FRAMEWORK_STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            const isSelected = activeStage === idx;

            return (
              <ScrollReveal key={stage.num} delay={idx * 0.1}>
                <div 
                  className={`framework-card ${isSelected ? 'framework-card--active' : ''}`}
                  onClick={() => setActiveStage(idx)}
                  onMouseEnter={() => setActiveStage(idx)}
                >
                  {/* Card Header */}
                  <div className="framework-card-header">
                    <span className="framework-card-num mono-sub">{stage.num}</span>
                    <span className="framework-card-phase mono-sub">{stage.phase}</span>
                    <div className="framework-icon-wrap">
                      <Icon size={22} className="framework-icon" />
                    </div>
                  </div>

                  {/* Timeline Badge */}
                  <div className="framework-timeline mono-sub">
                    {stage.timeline}
                  </div>

                  {/* Card Title & Summary */}
                  <h3 className="framework-card-title">{stage.title}</h3>
                  <p className="framework-card-summary">{stage.summary}</p>

                  {/* Deliverables Checklist */}
                  <div className="framework-deliverables">
                    <span className="mono-sub deliverable-head">PHASE DELIVERABLES</span>
                    <ul className="deliverable-list">
                      {stage.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="deliverable-item">
                          <CheckCircle2 size={14} className="text-gold item-check" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Metric Footer */}
                  <div className="framework-card-footer">
                    <span className="mono-sub footer-label">TARGET BENCHMARK</span>
                    <span className="footer-kpi">{stage.kpi}</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Institutional Governance Callout Bar */}
        <ScrollReveal delay={0.25}>
          <div className="framework-governance-bar">
            <div className="governance-grid">
              <div className="gov-item">
                <div className="gov-icon-box">
                  <ShieldCheck size={22} className="text-gold" />
                </div>
                <div>
                  <strong className="gov-title">100% Client Ownership</strong>
                  <p className="gov-desc">All ad accounts, master creative files, domain assets, and CRM source code remain 100% your legal property.</p>
                </div>
              </div>

              <div className="gov-item">
                <div className="gov-icon-box">
                  <BarChart3 size={22} className="text-gold" />
                </div>
                <div>
                  <strong className="gov-title">Direct Media Billing</strong>
                  <p className="gov-desc">Zero markups on ad spend. Ad platforms bill directly to your corporate card for complete financial clarity.</p>
                </div>
              </div>

              <div className="gov-item">
                <div className="gov-icon-box">
                  <Zap size={22} className="text-gold" />
                </div>
                <div>
                  <strong className="gov-title">Senior Strategy Pods</strong>
                  <p className="gov-desc">Every client engagement is directed by battle-tested growth architects and senior engineers, never junior interns.</p>
                </div>
              </div>
            </div>

            <div className="gov-cta-action">
              <button
                type="button"
                onClick={() => {
                  trackConversionEvent('primary_cta_click', { location: 'framework_governance_bar' });
                  openModal('Full Strategic Growth Audit & Roadmap');
                }}
                className="btn btn-gold btn-lg"
              >
                <Sparkles size={18} /> Schedule Executive Discovery Session
              </button>
              <span className="mono-sub gov-guarantee-note">
                Surat Headquarters • Pan-India Execution Pods
              </span>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
