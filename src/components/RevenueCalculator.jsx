import { useState } from 'react';
import { Calculator, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { getWhatsAppLink } from '../data';

const INDUSTRIES_CONFIG = [
  { name: 'Textile & Apparel D2C', leadMultiplier: 0.0035, pipelineMult: 5.2, roas: '4.8x' },
  { name: 'Diamond & Luxury Jewellery', leadMultiplier: 0.0018, pipelineMult: 8.5, roas: '5.2x' },
  { name: 'Commercial & Residential Real Estate', leadMultiplier: 0.0008, pipelineMult: 14.0, roas: '6.4x' },
  { name: 'Healthcare & Hospital Clinics', leadMultiplier: 0.0028, pipelineMult: 4.5, roas: '4.2x' },
  { name: 'E-Commerce Brands', leadMultiplier: 0.0042, pipelineMult: 4.2, roas: '4.5x' },
  { name: 'B2B & Industrial Manufacturing', leadMultiplier: 0.0012, pipelineMult: 9.8, roas: '5.5x' }
];

export default function RevenueCalculator() {
  const [budget, setBudget] = useState(150000); // 1.5 Lakhs default
  const [selectedIndIdx, setSelectedIndIdx] = useState(0);

  const activeInd = INDUSTRIES_CONFIG[selectedIndIdx];

  // Dynamic calculations based on industry benchmarks
  const estimatedLeads = Math.round(budget * activeInd.leadMultiplier);
  const estimatedPipeline = Math.round((budget * activeInd.pipelineMult) / 100000); // In Lakhs
  const mediaReach = Math.round((budget * 18) / 1000); // In Thousands

  const formatLakhs = (val) => {
    if (val >= 100) {
      return `₹${(val / 100).toFixed(2)} Cr`;
    }
    return `₹${val} Lakhs`;
  };

  const whatsappMessage = `Hi MK Publicity! I calculated my growth projection on your website:\n• Monthly Growth Budget: ₹${budget.toLocaleString('en-IN')}\n• Industry: ${activeInd.name}\n• Projected Pipeline: ${formatLakhs(estimatedPipeline)}\n• Target ROAS: ${activeInd.roas}\nI want to discuss this roadmap with your growth architect.`;

  return (
    <section className="section theme-light rev-calc-section" id="calculator">
      <div className="container">
        <div className="rev-calc-card">
          <div className="rev-calc-head">
            <div className="calc-badge">
              <Calculator size={14} className="text-gold" />
              <span className="mono-sub">Revenue Forecasting Engine</span>
            </div>
            <h2 className="display-title calc-title">
              CALCULATE YOUR <em className="serif-em">PIPELINE MULTIPLIER.</em>
            </h2>
            <p className="calc-subtitle">
              Input your planned monthly growth capital. See real benchmarks engineered from over 500+ client campaigns across Surat and pan-India.
            </p>
          </div>

          <div className="rev-calc-body">
            {/* Left Controls Column */}
            <div className="calc-controls">
              {/* Industry Select */}
              <div className="calc-field-group">
                <label className="calc-label mono-sub">1. Select Your Primary Industry Sector</label>
                <div className="calc-ind-chips">
                  {INDUSTRIES_CONFIG.map((ind, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`calc-chip-btn ${i === selectedIndIdx ? 'is-active' : ''}`}
                      onClick={() => setSelectedIndIdx(i)}
                    >
                      {ind.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Slider */}
              <div className="calc-field-group">
                <div className="calc-slider-header">
                  <label htmlFor="budget-range" className="calc-label mono-sub">2. Monthly Growth Capital (Ad Spend + PR)</label>
                  <span className="calc-budget-display text-gold">₹{budget.toLocaleString('en-IN')}</span>
                </div>
                <input
                  id="budget-range"
                  type="range"
                  min="50000"
                  max="1500000"
                  step="25000"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="calc-range-slider"
                  aria-label="Monthly growth capital slider"
                />
                <div className="calc-range-ticks mono-sub">
                  <span>₹50K</span>
                  <span>₹5 Lakhs</span>
                  <span>₹10 Lakhs</span>
                  <span>₹15 Lakhs+</span>
                </div>
              </div>

              <div className="calc-guarantee-note">
                <ShieldCheck size={18} className="text-gold" />
                <span>
                  <strong>Disciplined Unit Economics:</strong> We focus on careful budget testing and audience segmentation before scaling ad spend.
                </span>
              </div>
            </div>

            {/* Right Output Column */}
            <div className="calc-output-box">
              <div className="output-header mono-sub">Estimated 90-Day Performance Projections</div>

              <div className="output-metrics-grid">
                <div className="output-metric-card">
                  <span className="mono-sub">Projected Pipeline Value</span>
                  <div className="output-metric-val text-gold">{formatLakhs(estimatedPipeline)}</div>
                  <span className="output-metric-hint">Estimated market value</span>
                </div>

                <div className="output-metric-card">
                  <span className="mono-sub">Target Blended ROAS</span>
                  <div className="output-metric-val">{activeInd.roas}</div>
                  <span className="output-metric-hint">Target revenue-to-spend ratio</span>
                </div>

                <div className="output-metric-card">
                  <span className="mono-sub">Est. Qualified Inquiries</span>
                  <div className="output-metric-val">{estimatedLeads}+</div>
                  <span className="output-metric-hint">Projected sales conversations</span>
                </div>

                <div className="output-metric-card">
                  <span className="mono-sub">Editorial Media Reach</span>
                  <div className="output-metric-val">{mediaReach}K+</div>
                  <span className="output-metric-hint">Target brand impressions</span>
                </div>
              </div>

              <a
                href={getWhatsAppLink(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold btn-lg calc-cta-btn"
              >
                <Sparkles size={18} /> Discuss This Growth Plan on WhatsApp <ArrowRight size={18} />
              </a>

              <p className="calc-disclaimer mono-sub">
                *Projections are illustrative estimates based on typical industry conversion rates. Actual outcomes vary depending on offer strength, sales follow-up speed, market seasonality, and total budget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
