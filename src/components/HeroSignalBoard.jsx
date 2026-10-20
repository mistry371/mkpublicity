import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Search, 
  Newspaper, 
  Activity, 
  CheckCircle, 
  Radio, 
  TrendingUp, 
  Zap, 
  ShieldCheck,
  Headphones,
  Sparkles
} from 'lucide-react';

const MEDIA_BRIEFS = [
  {
    outlet: 'Digital PR & Media Strategy',
    tag: 'Editorial Positioning',
    title: 'How Gujarat Enterprises Earn National Press Coverage to Win Institutional Buyer Trust',
    time: 'Editorial Brief'
  },
  {
    outlet: 'Performance Advertising',
    tag: 'ROAS Engineering',
    title: 'From Commodity Pricing to Premium Margin: Multi-Tiered Paid Acquisition Frameworks',
    time: 'Strategic Playbook'
  },
  {
    outlet: 'Enterprise MarTech',
    tag: 'Pipeline Optimization',
    title: 'Why Growing Brands Unite Custom Web Applications with Real-Time Closed-Loop Attribution',
    time: 'Tech Insights'
  }
];

const SEARCH_QUERIES = [
  "Surat's #1 Digital Marketing & PR Agency",
  'Best Corporate PR Agency Gujarat',
  'Top Rated Marketing Agency Surat — MK Publicity',
  'High-ROI Performance Marketing Surat',
  'Custom Web Apps & MarTech Surat'
];

const OPERATIONAL_SIGNALS = [
  {
    channel: 'Meta & Google Ads',
    status: 'Live Optimization',
    detail: 'Algorithmic bidding adjusted for high-intent B2B search queries in Surat & Mumbai.',
    metric: 'Active · 4.8x ROAS',
    tag: 'Ads AI'
  },
  {
    channel: 'Digital PR Syndication',
    status: 'Coverage Deployed',
    detail: 'Executive founder editorial syndicated across leading business publications.',
    metric: 'Published · Tier 1 Media',
    tag: 'PR Wire'
  },
  {
    channel: 'CRM Lead Telemetry',
    status: 'Zero Lead Lag',
    detail: 'Automated WhatsApp routing delivers first lead response in under 30 seconds.',
    metric: '< 30s Response SLA',
    tag: 'MarTech'
  }
];

export default function HeroSignalBoard() {
  const [briefIndex, setBriefIndex] = useState(0);
  const [signalIndex, setSignalIndex] = useState(0);
  const [searchIndex, setSearchIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');
  const audioCtxRef = useRef(null);

  // Play a gentle ambient synth hum when toggled on
  const toggleAudio = () => {
    const nextState = !isPlayingAudio;
    setIsPlayingAudio(nextState);

    try {
      if (nextState) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          if (!audioCtxRef.current) {
            audioCtxRef.current = new AudioContext();
          }
          if (audioCtxRef.current.state === 'suspended') {
            audioCtxRef.current.resume();
          }
          const ctx = audioCtxRef.current;
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(432, ctx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(528, ctx.currentTime + 0.3);
          gain.gain.setValueAtTime(0.04, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + 0.35);
        }
      }
    } catch {
      // AudioContext unavailable or restricted, proceed quietly
    }
  };

  useEffect(() => {
    const briefTimer = setInterval(() => {
      setBriefIndex((prev) => (prev + 1) % MEDIA_BRIEFS.length);
    }, 4500);

    const signalTimer = setInterval(() => {
      setSignalIndex((prev) => (prev + 1) % OPERATIONAL_SIGNALS.length);
    }, 3800);

    const searchTimer = setInterval(() => {
      setSearchIndex((prev) => (prev + 1) % SEARCH_QUERIES.length);
    }, 4000);

    return () => {
      clearInterval(briefTimer);
      clearInterval(signalTimer);
      clearInterval(searchTimer);
    };
  }, []);

  const activeBrief = MEDIA_BRIEFS[briefIndex];
  const activeSignal = OPERATIONAL_SIGNALS[signalIndex];
  const activeQuery = SEARCH_QUERIES[searchIndex];

  return (
    <div className="signal-board-container" aria-label="MK Publicity Operational Telemetry Board">
      <div className="signal-board-backdrop"></div>

      {/* ── ENHANCEMENT: EXECUTIVE TELEMETRY COMMAND BAR ── */}
      <div className="signal-telemetry-header">
        <div className="telemetry-status-badge">
          <span className="live-status-beacon" aria-hidden="true"></span>
          <span className="telemetry-label">SURAT'S #1 AGENCY TELEMETRY</span>
        </div>
        <div className="telemetry-filter-tabs">
          {[
            { id: 'all', label: 'All Signals' },
            { id: 'pr', label: 'PR & Media' },
            { id: 'ads', label: 'ROAS / Ads' },
            { id: 'tech', label: 'MarTech' }
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`telemetry-tab-btn ${activeFilter === tab.id ? 'is-active' : ''}`}
              onClick={() => setActiveFilter(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── CARD 1: STRATEGIC PR & MEDIA POSITIONING (FULL ORIGINAL GRAPHIC) ── */}
      <motion.div 
        className={`signal-card signal-news-card ${activeFilter === 'pr' ? 'highlight-pulse' : ''}`}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <div className="signal-card-header">
          <div className="signal-outlet-badge">
            <Newspaper size={14} className="text-gold" />
            <span className="mono-text">{activeBrief.outlet}</span>
          </div>
          <span className="signal-live-pill">
            <span className="live-dot"></span> STRATEGIC FOCUS
          </span>
        </div>

        <div className="signal-news-body">
          <AnimatePresence mode="wait">
            <motion.p
              key={briefIndex}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="signal-news-title"
            >
              “{activeBrief.title}”
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="signal-card-footer">
          <span className="mono-tag">{activeBrief.tag}</span>
          <span className="time-text">{activeBrief.time}</span>
        </div>
      </motion.div>

      {/* ── CARD 2: CAMPAIGN TELEMETRY & ATTRIBUTION (SPLIT 2-COL FULL GRAPHIC) ── */}
      <div className="signal-split-row">
        {/* Left: Active Lead Telemetry */}
        <motion.div 
          className={`signal-card signal-mini-stat ${activeFilter === 'ads' ? 'highlight-pulse' : ''}`}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <div className="mini-stat-top">
            <span className="mono-sub">Campaign Signals</span>
            <span className="growth-chip">Real-Time</span>
          </div>
          <div className="mini-stat-val">100<span className="stat-unit">%</span></div>
          <div className="signal-equalizer-bars" aria-hidden="true">
            {[45, 75, 55, 90, 65, 100, 80, 95, 70, 85].map((h, i) => (
              <span 
                key={i} 
                className="eq-bar" 
                style={{ 
                  height: `${h}%`,
                  animationDelay: `${i * 0.1}s`
                }} 
              />
            ))}
          </div>
          <span className="mini-stat-desc">Attributed Revenue & Sales Tracking</span>
        </motion.div>

        {/* Right: Integrated Approach */}
        <motion.div 
          className={`signal-card signal-mini-stat ${activeFilter === 'tech' ? 'highlight-pulse' : ''}`}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="mini-stat-top">
            <span className="mono-sub">Execution Model</span>
            <span className="verified-pill">
              <CheckCircle size={12} /> Synchronized
            </span>
          </div>
          <div className="mini-stat-val text-gold">3-in-1</div>
          <p className="mini-stat-desc">Marketing + PR + IT under one accountable team.</p>
        </motion.div>
      </div>

      {/* ── CARD 3: DEDICATED PODCAST / AUDIO STRATEGY SHOWCASE (FULL ORIGINAL GRAPHIC) ── */}
      <motion.div 
        className={`signal-card signal-audio-card ${activeFilter === 'pr' ? 'highlight-pulse' : ''}`}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.35 }}
      >
        <div className="audio-card-inner">
          <button 
            type="button" 
            className={`audio-play-btn ${isPlayingAudio ? 'is-playing' : ''}`}
            onClick={toggleAudio}
            aria-label={isPlayingAudio ? 'Pause Founder Audio Preview' : 'Play Founder Audio Preview'}
          >
            {isPlayingAudio ? <Volume2 size={16} /> : <Play size={16} />}
          </button>
          
          <div className="audio-info">
            <div className="audio-meta">
              <span className="mono-text">Strategy Series • Episode 12</span>
              <span className="audio-badge">Executive Thought Leadership</span>
            </div>
            <p className="audio-title">The Blueprint: Scaling Surat Manufacturers into National Brands</p>
          </div>

          <div className="audio-soundwaves" aria-hidden="true">
            {[40, 85, 55, 95, 65, 100, 50, 85, 60, 75].map((h, i) => (
              <i 
                key={i} 
                style={{ 
                  height: isPlayingAudio ? `${h}%` : '20%',
                  animationDuration: `${0.75 + (i % 4) * 0.25}s`,
                  opacity: isPlayingAudio ? 1 : 0.4
                }} 
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── CARD 4: SEARCH ENGINE & AEO INTENT MAPPING (FULL ORIGINAL GRAPHIC) ── */}
      <motion.div 
        className={`signal-card signal-search-card ${activeFilter === 'ads' ? 'highlight-pulse' : ''}`}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <div className="search-field-sim">
          <Search size={14} className="search-icon" />
          <AnimatePresence mode="wait">
            <motion.span 
              key={searchIndex}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="search-query"
            >
              “{activeQuery}”
            </motion.span>
          </AnimatePresence>
          <span className="search-rank">Top 1% Authority</span>
        </div>

        <div className="search-chart-row">
          <div>
            <div className="mono-sub" style={{ fontSize: '0.68rem', letterSpacing: '0.04em' }}>SEARCH INTENT MAPPING</div>
            <div className="search-growth-text">Commercial Buyer Keywords</div>
          </div>
          <svg className="sparkline-svg" viewBox="0 0 100 30" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="sparkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#b38600" />
                <stop offset="50%" stopColor="#F5C518" />
                <stop offset="100%" stopColor="#FFE066" />
              </linearGradient>
            </defs>
            <path 
              d="M 2 26 Q 20 22 35 18 T 60 12 T 85 6 T 98 2" 
              fill="none" 
              stroke="url(#sparkGradient)" 
              strokeWidth="2.75" 
              strokeLinecap="round" 
            />
          </svg>
        </div>
      </motion.div>

      {/* ── CARD 5: LIVE CHANNEL DISPATCH & CLIENT SOCIAL STREAM (FULL ORIGINAL GRAPHIC) ── */}
      <motion.div 
        className={`signal-card signal-social-card ${activeFilter === 'tech' ? 'highlight-pulse' : ''}`}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.45 }}
      >
        <div className="social-card-inner">
          <div className="social-avatars" aria-hidden="true">
            <div className="avatar-chip av-1">MK</div>
            <div className="avatar-chip av-2">PR</div>
            <div className="avatar-chip av-3">IT</div>
            <div className="avatar-chip av-4">+37</div>
          </div>

          <div className="social-stream">
            <div className="social-item-header">
              <strong style={{ color: '#0C0D0E', fontSize: '0.82rem' }}>{activeSignal.channel}</strong>
              <span className="network-pill">{activeSignal.status}</span>
              <span className="signal-metric-badge">{activeSignal.metric}</span>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.p 
                key={signalIndex}
                initial={{ opacity: 0, x: 4 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -4 }}
                transition={{ duration: 0.2 }}
                className="social-item-msg"
              >
                {activeSignal.detail}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* ── ENHANCEMENT: VERIFIED IMPACT SUMMARY FOOTER ── */}
      <div className="signal-telemetry-footer">
        <div className="telemetry-pill-item">
          <TrendingUp size={12} className="text-gold" />
          <span>500+ Scaled Brands</span>
        </div>
        <div className="telemetry-pill-divider">·</div>
        <div className="telemetry-pill-item">
          <ShieldCheck size={12} className="text-gold" />
          <span>99.8% Attribution Accuracy</span>
        </div>
        <div className="telemetry-pill-divider">·</div>
        <div className="telemetry-pill-item">
          <Zap size={12} className="text-gold" />
          <span>&lt; 30s Lead Routing</span>
        </div>
      </div>

      {/* ── FLOATING ACCENT BADGES ── */}
      <div className="floating-signal-badge badge-top">
        <Activity size={12} className="text-gold" />
        <span>🏆 Surat's #1 Agency • Pan-India Scale</span>
      </div>
      <div className="floating-signal-badge badge-bottom">
        <Radio size={12} className="text-gold pulse-icon" />
        <span>Unified MarTech Architecture</span>
      </div>
    </div>
  );
}
