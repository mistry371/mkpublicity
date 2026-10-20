import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { Users, TrendingUp, Layers, ShieldCheck, Award } from 'lucide-react';

const STAT_ICONS = [Users, TrendingUp, Layers, ShieldCheck];
const STAT_TAGS = ['01 // SCALE', '02 // VOLUME', '03 // DIVERSITY', '04 // TRUST'];
const STAT_SUBTEXTS = [
  'High-growth B2B & B2C enterprise brands scaled across Gujarat and India.',
  'High-converting performance campaigns, national PR stunts & digital launches.',
  'Textiles, Diamonds, Real Estate, FMCG, Healthcare, IT & Retail.',
  'Verified multi-year client retention and word-of-mouth referral rate.'
];

function AnimatedNumber({ target, suffix = '', duration = 1600 }) {
  const [count, setCount] = useState(target);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current || typeof target !== 'number') return;
    hasAnimated.current = true;

    setCount(0);
    const startTime = performance.now();
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  if (typeof target !== 'number') {
    return (
      <span className="stat-digits">
        {target}
        {suffix && <span className="stat-suffix">{suffix}</span>}
      </span>
    );
  }

  return (
    <span ref={ref} className="stat-digits">
      {count.toLocaleString()}
      {suffix && <span className="stat-suffix">{suffix}</span>}
    </span>
  );
}

const DEFAULT_CREDIBILITY_PILLARS = [
  { number: 500, suffix: '+', label: 'Enterprise Clients Scaled', tag: '01 // SCALE', subtext: 'High-growth brands scaled across Gujarat and national markets.' },
  { number: 2000, suffix: '+', label: 'Commercial Campaigns Delivered', tag: '02 // VOLUME', subtext: 'High-converting performance campaigns, viral PR & digital launches.' },
  { number: 18, suffix: '+', label: 'Industry Verticals Mastered', tag: '03 // DIVERSITY', subtext: 'Textiles, Diamonds, Real Estate, FMCG, Healthcare & Tech.' },
  { number: 98, suffix: '%', label: 'Client Retention Rate', tag: '04 // TRUST', subtext: 'Verified multi-year client retention backed by contract renewals.' }
];

export default function StatsCounter({ stats = DEFAULT_CREDIBILITY_PILLARS }) {
  const displayStats = stats && stats.length > 0 ? stats : DEFAULT_CREDIBILITY_PILLARS;

  return (
    <section className="stats-section theme-light" id="credentials" aria-label="MK Publicity Verified Track Record">
      <div className="container">
        {/* Architectural Section Header */}
        <div className="stats-header">
          <div className="stats-eyebrow">
            <span className="stats-live-dot" aria-hidden="true"></span>
            VERIFIED INSTITUTIONAL TRACK RECORD
          </div>
          <h2 className="stats-title">
            PROVEN SCALE IN <em className="serif-em text-gold">EVERY METRIC.</em>
          </h2>
          <p className="stats-subtitle">
            Over 4+ years of audited commercial performance for category leaders across Surat and national markets.
          </p>
        </div>

        {/* 4 Architectural Credibility Cards */}
        <div className="stats-grid">
          {displayStats.map((stat, i) => {
            const Icon = STAT_ICONS[i % STAT_ICONS.length] || Award;
            const tag = stat.tag || STAT_TAGS[i % STAT_TAGS.length];
            const subtext = stat.subtext || STAT_SUBTEXTS[i % STAT_SUBTEXTS.length];

            return (
              <div key={i} className="stat-card">
                <div className="stat-card-top">
                  <div className="stat-icon-wrap" aria-hidden="true">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <span className="stat-tag mono-sub">{tag}</span>
                </div>

                <div className="stat-number">
                  <AnimatedNumber target={stat.number} suffix={stat.suffix} />
                </div>

                <h3 className="stat-label">{stat.label}</h3>
                <p className="stat-subtext">{subtext}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
