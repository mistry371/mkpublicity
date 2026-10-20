import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const ECOSYSTEM_NODES = [
  {
    id: 0,
    name: 'Performance Ads',
    pillar: 'Marketing',
    coords: { x: 50, y: 10 },
    summary: 'High-intent Google Search, Meta Ads, and LinkedIn campaigns optimized against real cash margin rather than cheap clicks.',
    feeds: ['Custom CRM', 'High-Intent Search'],
    caseResult: '4.8x ROAS achieved for Surat diamond exporter via hyper-segmented US audiences.',
    metric: '4.8x Avg ROAS'
  },
  {
    id: 1,
    name: 'Tier-1 National PR',
    pillar: 'PR',
    coords: { x: 74, y: 20 },
    summary: 'Placements in Economic Times, Forbes India, Business Standard, and trade media that establish instant institutional credibility.',
    feeds: ['Founder Authority', 'Organic Search'],
    caseResult: 'Over 450 distributor enquiries generated in 7 days for a local textile manufacturing house.',
    metric: '100% Earned Authority'
  },
  {
    id: 2,
    name: 'Custom CRM & ERP',
    pillar: 'IT',
    coords: { x: 90, y: 44 },
    summary: 'Bespoke lead management, automated sales pipelines, and inventory sync systems that prevent lead leakage.',
    feeds: ['Performance Ads', 'Conversion CRO'],
    caseResult: 'Eliminated 62% lead response lag, increasing close rates by 340% for a real estate conglomerate.',
    metric: '0% Lead Leakage'
  },
  {
    id: 3,
    name: 'Founder Authority',
    pillar: 'PR',
    coords: { x: 80, y: 72 },
    summary: 'Positioning founders as the undisputed voice of their industry through podcasts, keynote panels, and LinkedIn thought leadership.',
    feeds: ['Tier-1 National PR', 'High-Ticket Sales'],
    caseResult: 'Enabled Surat startup founder to raise pre-Series A capital within 90 days of media rollout.',
    metric: '5M+ Profile Impressions'
  },
  {
    id: 4,
    name: 'Conversion Rate Opt (CRO)',
    pillar: 'Marketing',
    coords: { x: 50, y: 88 },
    summary: 'Fast, psychologically engineered landing pages and checkout funnels that turn casual visitors into committed buyers.',
    feeds: ['Performance Ads', 'Custom CRM & ERP'],
    caseResult: 'Elevated landing page conversion from 1.8% to 6.4% on high-ticket diamond bridal jewellery.',
    metric: '+255% Conversion Lift'
  },
  {
    id: 5,
    name: 'Influencer & Creator Seeding',
    pillar: 'Marketing',
    coords: { x: 20, y: 72 },
    summary: 'Cultivating authentic partnerships with verified category creators who command real consumer trust, not fake follower counts.',
    feeds: ['Performance Ads', 'Social Proof'],
    caseResult: 'Generated ₹1.8Cr in retail footfall across Surat and Ahmedabad flagship stores.',
    metric: '3.8M Organic Reach'
  },
  {
    id: 6,
    name: 'High-Intent Search (SEO/AEO)',
    pillar: 'IT + PR',
    coords: { x: 10, y: 44 },
    summary: 'Dominating traditional Google Search rankings and AI Answer Engines (ChatGPT, Perplexity, Gemini) as the verified market leader.',
    feeds: ['Performance Ads', 'Custom CRM & ERP'],
    caseResult: '#1 Rankings for 64 high-value commercial keywords, unlocking 1,800+ inbound organic leads.',
    metric: '#1 Google & AI Search'
  },
  {
    id: 7,
    name: 'AI Chatbots & Automation',
    pillar: 'IT',
    coords: { x: 26, y: 20 },
    summary: '24/7 intelligent sales assistants integrated with WhatsApp that qualify leads, answer FAQs, and book meetings in under 30 seconds.',
    feeds: ['Custom CRM & ERP', 'Performance Ads'],
    caseResult: 'Captured 41% of after-hours leads that competitors lost to response delays.',
    metric: '28-Sec First Response'
  }
];

export default function TrinityEcosystem() {
  const [activeId, setActiveId] = useState(0);
  const activeNode = ECOSYSTEM_NODES[activeId];

  return (
    <section className="section theme-light trinity-ecosystem-section" id="growth-engine">
      <div className="container">
        <div className="ecosystem-header">
          <div className="section-label text-gold">The Integrated Growth Matrix</div>
          <h2 className="display-title">
            ONE STORY. ONE TECH STACK. <em className="serif-em text-gold">UNSTOPPABLE REVENUE.</em>
          </h2>
          <p className="ecosystem-lead">
            Traditional agencies treat Marketing, PR, and Software as separate silos that argue over attribution. 
            MK Publicity synchronizes all 3 disciplines into one unified revenue-generating engine.
          </p>
        </div>

        <div className="ecosystem-grid">
          {/* Interactive Info Panel */}
          <div className="ecosystem-panel">
            <div className="panel-badge-row">
              <span className="mono-sub">Discipline 0{activeNode.id + 1} / 08</span>
              <span className="pillar-pill pillar-{activeNode.pillar.toLowerCase()}">
                {activeNode.pillar}
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="panel-node-title">{activeNode.name}</h3>
                <p className="panel-node-summary">{activeNode.summary}</p>

                <div className="panel-metric-highlight">
                  <span className="mono-sub">Proven Benchmark</span>
                  <div className="metric-bold text-gold">{activeNode.metric}</div>
                </div>

                <div className="panel-case-box">
                  <div className="case-badge">
                    <CheckCircle2 size={13} className="text-gold" />
                    <span>Real Surat Case Result</span>
                  </div>
                  <p className="case-text">{activeNode.caseResult}</p>
                </div>

                <div className="panel-feeds-row">
                  <span className="mono-sub">Signal feeds forward into:</span>
                  <div className="feeds-tags">
                    {activeNode.feeds.map((feed, i) => (
                      <span key={i} className="feed-tag">
                        {feed} <ArrowUpRight size={12} />
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Interactive SVG Orbital Radar */}
          <div className="ecosystem-radar-wrap">
            <svg className="ecosystem-svg" viewBox="0 0 100 100">
              {/* Radar Rings */}
              <circle cx="50" cy="50" r="42" className="radar-orbit radar-orbit-outer" />
              <circle cx="50" cy="50" r="28" className="radar-orbit radar-orbit-inner" />
              
              {/* Lines from Center to each Node */}
              {ECOSYSTEM_NODES.map((node) => {
                const isActive = node.id === activeId;
                return (
                  <line
                    key={node.id}
                    x1="50"
                    y1="50"
                    x2={node.coords.x}
                    y2={node.coords.y}
                    className={`radar-line ${isActive ? 'radar-line-active' : ''}`}
                  />
                );
              })}

              {/* Animated Motion Pulse along active line */}
              <circle r="1.5" className="radar-pulse-dot">
                <animateMotion
                  dur="2.4s"
                  repeatCount="indefinite"
                  path={`M 50 50 L ${activeNode.coords.x} ${activeNode.coords.y}`}
                />
              </circle>

              {/* Central Core */}
              <circle cx="50" cy="50" r="11" className="radar-core-glow" />
              <circle cx="50" cy="50" r="8" className="radar-core-circle" />
              <text x="50" y="49" textAnchor="middle" className="radar-core-text">MK</text>
              <text x="50" y="53" textAnchor="middle" className="radar-core-sub">ENGINE</text>
            </svg>

            {/* Clickable Node Buttons */}
            {ECOSYSTEM_NODES.map((node) => {
              const isActive = node.id === activeId;
              return (
                <button
                  key={node.id}
                  type="button"
                  style={{ left: `${node.coords.x}%`, top: `${node.coords.y}%` }}
                  className={`ecosystem-node-btn ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveId(node.id)}
                  aria-pressed={isActive}
                  aria-label={`${node.name}: ${node.summary}`}
                >
                  <span className="node-indicator">
                    <span className="node-dot"></span>
                  </span>
                  <span className="node-label-pill">{node.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
