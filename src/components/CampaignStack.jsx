import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Sparkles, Building2, Gem, Shirt, Stethoscope } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const CAMPAIGNS = [
  {
    num: '01 / 04',
    category: 'Textile & D2C Apparel',
    icon: Shirt,
    title: 'Surat Loom Manufacturer to Scaled National D2C Brand',
    frameworkType: 'Manufacturing to D2C Transition Model',
    situation: 'A multi-generational textile manufacturer in Surat relied on wholesale brokers with compressing margins and lacked direct access to consumer markets.',
    approach: 'MK Publicity designed a direct-to-consumer brand identity, built a high-performance e-commerce storefront with ERP inventory integration, and ran segmented Meta & Google ad campaigns backed by targeted digital PR.',
    aim: 'Establish direct brand ownership, capture retail margins, and generate steady inbound retail and distributor orders.',
    measures: ['Direct Consumer Channel Established', 'Multi-Tiered Acquisition Funnel', 'High Distributor Demand', 'Compound Brand Recall'],
    bgGradient: 'radial-gradient(circle at top right, rgba(245, 197, 24, 0.12), #FFFFFF)'
  },
  {
    num: '02 / 04',
    category: 'Luxury Lab-Grown Diamonds',
    icon: Gem,
    title: 'Lab-Grown Diamond Brand: Multi-Market Luxury Positioning',
    frameworkType: 'High-Ticket Luxury Brand Framework',
    situation: 'An emerging sustainable diamond producer faced consumer education hurdles and competitive marketing costs in high-ticket jewelry segments.',
    approach: 'Developed an editorial PR campaign focusing on sustainable craftsmanship, supported by high-intent search ads and an automated WhatsApp booking workflow for bespoke bridal consultations.',
    aim: 'Build buyer confidence, elevate perceived brand value, and accelerate inquiry-to-consultation conversion.',
    measures: ['Elevated Category Trust', 'Qualified Consultation Booking', 'Disciplined ROAS Optimization', 'Seamless Inbound Inquiries'],
    bgGradient: 'radial-gradient(circle at top right, rgba(59, 179, 195, 0.12), #FFFFFF)'
  },
  {
    num: '03 / 04',
    category: 'Super-Speciality Healthcare',
    icon: Stethoscope,
    title: 'Multi-Department Hospital: Local Patient Search & Triage',
    frameworkType: 'Healthcare Patient Inflow Architecture',
    situation: 'A regional healthcare institution needed to improve patient awareness and local search discoverability for specialized clinical departments.',
    approach: 'Built a search-intent structure targeting clinical procedures, optimized localized map listings, and deployed an automated WhatsApp inquiry assistant for rapid patient routing.',
    aim: 'Achieve local search visibility for key treatment categories and reduce response time for emergency and appointment queries.',
    measures: ['Prompt Patient Triage', 'Organized Department Inquiries', 'Localized Map Visibility', 'Reduced Patient Booking Friction'],
    bgGradient: 'radial-gradient(circle at top right, rgba(76, 175, 80, 0.12), #FFFFFF)'
  },
  {
    num: '04 / 04',
    category: 'Commercial & Luxury Real Estate',
    icon: Building2,
    title: 'Commercial Business Hub: Pre-Leasing & Investor Pipeline',
    frameworkType: 'Commercial Real Estate Velocity Model',
    situation: 'A newly constructed corporate commercial center in Surat required an accelerated investor inquiry pipeline prior to project completion.',
    approach: 'Produced high-fidelity architectural visual media, executive investor outreach, and hyper-targeted LinkedIn/Meta campaigns connected to an automated lead qualification CRM.',
    aim: 'Maximize qualified commercial buyer inquiries and accelerate sales cycle velocity.',
    measures: ['Investor Pipeline Accelerated', 'Verified Inquiry Lead Flow', 'High Sales Velocity', 'Complete Multi-Touch Attribution'],
    bgGradient: 'radial-gradient(circle at top right, rgba(233, 30, 99, 0.12), #FFFFFF)'
  }
];

export default function CampaignStack() {
  const { openModal } = useModal();

  return (
    <section className="section theme-light campaign-stack-section" id="case-studies">
      <div className="container">
        <header className="arch-sec-head">
          <div className="section-label text-gold">Strategic Campaign Models</div>
          <div className="arch-head-split">
            <h2 className="display-title">
              FRAMEWORKS BUILT FOR <em className="serif-em text-gold">MEASURABLE IMPACT.</em>
            </h2>
            <p className="arch-head-lead">
              Every campaign model demonstrates our consultative methodology: analyzing the commercial situation, developing a targeted strategy, and implementing synchronized creative, PR, and technical solutions.
            </p>
          </div>
        </header>

        <div className="campaign-stack-list">
          {CAMPAIGNS.map((camp, idx) => {
            const Icon = camp.icon;

            return (
              <article 
                key={idx} 
                className="campaign-stack-card"
                style={{ '--stack-index': idx, background: camp.bgGradient }}
              >
                <div className="campaign-card-header">
                  <div className="campaign-meta-left">
                    <span className="mono-sub text-gold">{camp.num}</span>
                    <span className="campaign-category-pill">
                      {Icon && <Icon size={14} className="category-icon" />}
                      {camp.category}
                    </span>
                  </div>
                  <span className="client-subtitle mono-sub">{camp.frameworkType}</span>
                </div>

                <h3 className="campaign-card-title">{camp.title}</h3>

                <div className="campaign-details-grid">
                  <div className="campaign-detail-item">
                    <div className="detail-label mono-sub">Situation</div>
                    <p className="detail-body">{camp.situation}</p>
                  </div>

                  <div className="campaign-detail-item">
                    <div className="detail-label mono-sub">Approach</div>
                    <p className="detail-body">{camp.approach}</p>
                  </div>

                  <div className="campaign-detail-item">
                    <div className="detail-label mono-sub">Objective</div>
                    <p className="detail-body">{camp.aim}</p>
                  </div>
                </div>

                <div className="campaign-measures-row">
                  <div className="measures-heading mono-sub">Core Strategy Pillars</div>
                  <div className="measures-tags">
                    {camp.measures.map((m, mIdx) => (
                      <span key={mIdx} className="measure-tag">
                        <CheckCircle2 size={13} className="text-gold" /> {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="campaign-card-footer">
                  <button 
                    type="button" 
                    onClick={() => openModal(camp.category)}
                    className="btn btn-gold btn-sm"
                  >
                    <Sparkles size={16} /> Discuss This Framework
                  </button>
                  <Link to="/portfolio" className="campaign-view-link mono-sub">
                    Explore Our Portfolio <ArrowUpRight size={14} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
