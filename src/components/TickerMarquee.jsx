export default function TickerMarquee({
  theme = 'gold', // 'gold', 'dark', 'light'
  phrases = [
    "SURAT'S #1 MARKETING & PR AGENCY",
    '500+ ENTERPRISES SCALED',
    'PERFORMANCE MARKETING',
    'TIER-1 PUBLIC RELATIONS',
    'ENTERPRISE IT & MARTECH',
    '300%+ VERIFIED ROI',
    'SURAT TO GLOBAL SCALE',
    'ZERO VANITY FLUFF',
    'PREDICTABLE REVENUE PIPELINE',
    'HIGH-TICKET CLIENT ACQUISITION'
  ]
}) {
  return (
    <div className={`ticker-marquee-wrap ticker-${theme}`} aria-hidden="true">
      <div className="ticker-marquee-track">
        <div className="ticker-marquee-group">
          {phrases.map((phrase, idx) => (
            <span key={idx} className="ticker-item">
              <span className="ticker-text">{phrase}</span>
              <span className="ticker-star">✺</span>
            </span>
          ))}
        </div>
        <div className="ticker-marquee-group" aria-hidden="true">
          {phrases.map((phrase, idx) => (
            <span key={`clone-${idx}`} className="ticker-item">
              <span className="ticker-text">{phrase}</span>
              <span className="ticker-star">✺</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
