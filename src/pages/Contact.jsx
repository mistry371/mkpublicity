import { useEffect, useState } from 'react';
import { 
  Send, Phone, Mail, MessageCircle, MapPin, 
  Clock, CheckCircle2, ExternalLink 
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SEOHead from '../components/SEOHead';
import { services, PHONE, EMAIL, ADDRESS, getWhatsAppLink } from '../data';
import { trackConversionEvent } from '../utils/analytics';

const budgetTiers = [
  '₹50,000 – ₹1,50,000 / mo',
  '₹1,50,000 – ₹5,00,000 / mo',
  '₹5,00,000 – ₹15,00,000 / mo',
  '₹15,00,000+ / mo (Enterprise Scale)'
];

const timelineOptions = [
  'Immediate (Within 7–14 Days)',
  'Within 30 Days',
  'Q3 / Q4 Strategic Planning'
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Performance Marketing',
    budget: budgetTiers[1],
    timeline: timelineOptions[0],
    message: '',
    botField: '' // Honeypot anti-spam
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => { 
    window.scrollTo(0, 0); 
  }, []);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.botField) return; // Silent reject for spam bots

    trackConversionEvent('contact_form_submit', {
      service: form.service,
      budget: form.budget,
      timeline: form.timeline
    });
    trackConversionEvent('whatsapp_click', { source: 'contact_page_terminal' });

    setSubmitted(true);

    const formattedMessage = `*🎯 NEW EXECUTIVE PROJECT INQUIRY*
---------------------------------
*Client Name:* ${form.name}
*Company:* ${form.company || 'Not Specified'}
*Phone:* ${form.phone}
*Email:* ${form.email || 'Not Provided'}

*Discipline:* ${form.service}
*Monthly Investment Tier:* ${form.budget}
*Target Horizon:* ${form.timeline}

*Current Bottleneck / Notes:*
${form.message || 'None provided'}
---------------------------------
Requesting a strategic audit within 24 hours.`;

    const waLink = getWhatsAppLink(formattedMessage);
    window.open(waLink, '_blank');
  };

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'name': 'Contact MK Publicity Agency',
    'description': 'Direct consultation and contact coordinates for MK Publicity Marketing, PR, and IT Solutions in Surat.',
    'url': 'https://mkpublicity.com/contact'
  };

  return (
    <div style={{ background: '#FBFBFA', color: '#0C0D0E', minHeight: '100vh' }}>
      <SEOHead
        title="Contact Us — Start Your Growth Journey | MK Publicity"
        description="Connect with MK Publicity in Surat. Schedule an executive consultation for Performance Marketing, Public Relations, or Custom IT & MarTech Solutions. Direct strategist response within 24 hours."
        keywords="contact MK Publicity, marketing agency contact, PR agency Surat phone, hire digital marketing Surat, IT consultation Gujarat"
        canonical="/contact"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Contact Us', url: '/contact' }
        ]}
        jsonLd={contactSchema}
      />

      {/* ═══ 1. EDITORIAL PAGE HERO ═══ */}
      <PageHero 
        label="EXECUTIVE INTAKE // DIRECT ACCESS"
        title="Start Scaling Your Revenue & Brand Authority Today"
        highlight="Revenue & Brand Authority"
        description="Tell us about your current commercial bottleneck and growth targets. A senior growth strategist in Surat will audit your pipeline and deliver an actionable execution roadmap within 24 hours."
        ctaText="Fill Executive Brief Below"
      />

      {/* ═══ 2. CONSULTATION TERMINAL ═══ */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3.5rem' }} className="contact-terminal-grid">
            
            {/* Left Column: Verified Coordinates & SLAs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* Office Coordinates Card */}
              <div style={{
                background: '#FFFFFF',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                padding: 'clamp(2rem, 3vw, 2.5rem)',
                borderRadius: '6px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(0, 0, 0, 0.08)', paddingBottom: '1rem', marginBottom: '1.75rem' }}>
                  <span className="mono-sub text-gold">HEADQUARTERS DOSSIER</span>
                  <span className="mono-sub" style={{ color: '#16a34a', fontWeight: 600 }}>● SURAT, GUJARAT</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  
                  {/* Address */}
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ color: '#B8860B', marginTop: '3px' }}><MapPin size={20} /></div>
                    <div>
                      <div className="mono-sub" style={{ color: '#777777', marginBottom: '4px' }}>OFFICE LOCATION</div>
                      <div style={{ fontSize: '1rem', color: '#0C0D0E', fontWeight: 600, lineHeight: 1.5 }}>
                        {ADDRESS}
                      </div>
                      <a 
                        href="https://maps.google.com/?q=Rajmahal+Mall+Dindoli+Surat" 
                        target="_blank" 
                        rel="noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#B8860B', fontSize: '0.8rem', marginTop: '6px', textDecoration: 'none', fontWeight: 600 }}
                      >
                        <span>Open in Google Maps</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ color: '#B8860B', marginTop: '3px' }}><Phone size={20} /></div>
                    <div>
                      <div className="mono-sub" style={{ color: '#777777', marginBottom: '4px' }}>DIRECT TELEPHONE</div>
                      <a 
                        href={`tel:+91${PHONE}`}
                        onClick={() => trackConversionEvent('phone_click', { source: 'contact_page' })}
                        style={{ fontSize: '1.1rem', color: '#0C0D0E', fontWeight: 700, textDecoration: 'none' }}
                      >
                        +91 {PHONE}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ color: '#B8860B', marginTop: '3px' }}><Mail size={20} /></div>
                    <div>
                      <div className="mono-sub" style={{ color: '#777777', marginBottom: '4px' }}>EXECUTIVE EMAIL</div>
                      <a 
                        href={`mailto:${EMAIL}`}
                        style={{ fontSize: '1rem', color: '#0C0D0E', textDecoration: 'none' }}
                      >
                        {EMAIL}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ color: '#B8860B', marginTop: '3px' }}><Clock size={20} /></div>
                    <div>
                      <div className="mono-sub" style={{ color: '#777777', marginBottom: '4px' }}>OPERATING HOURS</div>
                      <div style={{ fontSize: '0.95rem', color: '#555555' }}>
                        Monday – Saturday: 10:00 AM – 7:30 PM IST
                      </div>
                    </div>
                  </div>

                </div>

                <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(0, 0, 0, 0.08)', paddingTop: '1.5rem' }}>
                  <a
                    href={getWhatsAppLink('Hi MK Publicity! I would like to schedule an in-person meeting at your Surat office.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-editorial-ghost"
                    onClick={() => trackConversionEvent('whatsapp_click', { source: 'contact_office_button' })}
                    style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
                  >
                    <MessageCircle size={16} color="#25D366" />
                    <span>Instant WhatsApp Priority Chat</span>
                  </a>
                </div>
              </div>

              {/* Consultation Commitments */}
              <div style={{
                background: 'rgba(245, 197, 24, 0.06)',
                border: '1px solid rgba(184, 134, 11, 0.25)',
                padding: '1.75rem',
                borderRadius: '6px'
              }}>
                <div className="mono-sub text-gold" style={{ marginBottom: '1rem', fontWeight: 700 }}>THE MK ENGAGEMENT STANDARD</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem', color: '#0C0D0E' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={16} color="#B8860B" /> Guaranteed senior strategist review within 24 hours
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={16} color="#B8860B" /> Zero sales pressure; purely strategic diagnostic advice
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={16} color="#B8860B" /> Complete NDA and intellectual property protection
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Executive Brief Form Terminal */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              padding: 'clamp(2rem, 4vw, 3rem)',
              borderRadius: '6px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)'
            }}>
              <div style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.08)', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
                <span className="mono-sub text-gold" style={{ display: 'block', marginBottom: '6px', fontWeight: 700 }}>
                  CONFIDENTIAL INQUIRY TERMINAL
                </span>
                <h3 className="display-title" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', margin: 0, color: '#0C0D0E' }}>
                  Request Strategic Growth Audit
                </h3>
                <p style={{ color: '#555555', fontSize: '0.9rem', margin: '0.5rem 0 0', lineHeight: 1.5 }}>
                  Provide your project parameters below. Submitting will pre-format your brief directly to our leadership team.
                </p>
              </div>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(37, 211, 102, 0.1)',
                    color: '#25D366',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem'
                  }}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#F6F6F4', marginBottom: '0.75rem' }}>
                    Inquiry Transmitted Successfully
                  </h4>
                  <p style={{ color: '#888888', maxWidth: '440px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
                    Your project parameters have been routed to our senior team. A growth architect will review your commercial model and connect within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-editorial-ghost"
                  >
                    Submit Another Brief
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  
                  {/* Honeypot field (hidden from real users) */}
                  <input
                    type="text"
                    name="botField"
                    value={form.botField}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                    tabIndex="-1"
                    autoComplete="off"
                  />

                  {/* Row 1: Name & Company */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '1.25rem' }}>
                    <div>
                      <label className="mono-sub" style={{ display: 'block', color: '#555555', marginBottom: '6px' }}>
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. Rajesh Patel"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          background: '#F9F9F7',
                          border: '1px solid rgba(0, 0, 0, 0.12)',
                          borderRadius: '4px',
                          color: '#0C0D0E',
                          fontSize: '0.95rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label className="mono-sub" style={{ display: 'block', color: '#555555', marginBottom: '6px' }}>
                        COMPANY / BRAND NAME
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="e.g. Apex Textiles"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          background: '#F9F9F7',
                          border: '1px solid rgba(0, 0, 0, 0.12)',
                          borderRadius: '4px',
                          color: '#0C0D0E',
                          fontSize: '0.95rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Email */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '1.25rem' }}>
                    <div>
                      <label className="mono-sub" style={{ display: 'block', color: '#555555', marginBottom: '6px' }}>
                        PHONE / WHATSAPP NUMBER *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          background: '#F9F9F7',
                          border: '1px solid rgba(0, 0, 0, 0.12)',
                          borderRadius: '4px',
                          color: '#0C0D0E',
                          fontSize: '0.95rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label className="mono-sub" style={{ display: 'block', color: '#555555', marginBottom: '6px' }}>
                        CORPORATE EMAIL
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="rajesh@apextextiles.com"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          background: '#F9F9F7',
                          border: '1px solid rgba(0, 0, 0, 0.12)',
                          borderRadius: '4px',
                          color: '#0C0D0E',
                          fontSize: '0.95rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  {/* Discipline Selection */}
                  <div>
                    <label className="mono-sub" style={{ display: 'block', color: '#555555', marginBottom: '6px' }}>
                      PRIMARY DISCIPLINE OF INTEREST
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: '#FFFFFF',
                        border: '1px solid rgba(0, 0, 0, 0.12)',
                        borderRadius: '4px',
                        color: '#0C0D0E',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    >
                      {services.map(s => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                      <option value="Integrated Ecosystem (Marketing + PR + IT)">Integrated Ecosystem (Marketing + PR + IT)</option>
                    </select>
                  </div>

                  {/* Budget Tier */}
                  <div>
                    <label className="mono-sub" style={{ display: 'block', color: '#555555', marginBottom: '6px' }}>
                      MONTHLY GROWTH INVESTMENT BRACKET
                    </label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: '#FFFFFF',
                        border: '1px solid rgba(0, 0, 0, 0.12)',
                        borderRadius: '4px',
                        color: '#0C0D0E',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    >
                      {budgetTiers.map((tier, idx) => (
                        <option key={idx} value={tier}>{tier}</option>
                      ))}
                    </select>
                  </div>

                  {/* Timeline Selection */}
                  <div>
                    <label className="mono-sub" style={{ display: 'block', color: '#555555', marginBottom: '6px' }}>
                      TARGET DEPLOYMENT HORIZON
                    </label>
                    <select
                      name="timeline"
                      value={form.timeline}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: '#FFFFFF',
                        border: '1px solid rgba(0, 0, 0, 0.12)',
                        borderRadius: '4px',
                        color: '#0C0D0E',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    >
                      {timelineOptions.map((opt, idx) => (
                        <option key={idx} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message / Bottlenecks */}
                  <div>
                    <label className="mono-sub" style={{ display: 'block', color: '#555555', marginBottom: '6px' }}>
                      CURRENT CUSTOMER ACQUISITION BOTTLENECK / OBJECTIVES
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="e.g. Current cost-per-lead on Meta has doubled; need to build brand authority in Surat and scale our wholesale distribution."
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: '#F9F9F7',
                        border: '1px solid rgba(0, 0, 0, 0.12)',
                        borderRadius: '4px',
                        color: '#0C0D0E',
                        fontSize: '0.95rem',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn-gold"
                    style={{
                      width: '100%',
                      padding: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      fontSize: '1rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      border: 'none',
                      marginTop: '0.5rem'
                    }}
                  >
                    <Send size={18} />
                    <span>Submit Executive Brief & Launch Chat</span>
                  </button>

                  <div style={{ textAlign: 'center', fontSize: '0.78rem', color: '#777777', marginTop: '0.5rem' }}>
                    🔒 100% Confidential. Your data is never shared with third parties.
                  </div>

                </form>
              )}

            </div>

          </div>
        </div>

        <style>{`
          @media (min-width: 992px) {
            .contact-terminal-grid {
              grid-template-columns: 420px 1fr !important;
            }
          }
        `}</style>
      </section>
    </div>
  );
}
