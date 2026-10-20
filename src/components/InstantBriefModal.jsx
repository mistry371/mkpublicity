import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, ShieldCheck, AlertCircle } from 'lucide-react';
import { WHATSAPP_BASE, WHATSAPP_NUMBER, services } from '../data';
import { trackEvent } from '../utils/analytics';

export default function InstantBriefModal({ isOpen, onClose, initialService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    service: initialService || 'Integrated Marketing & PR',
    timeline: 'As soon as possible',
    budget: '₹1 Lakh – ₹3 Lakhs/month',
    requirements: '',
    honeypot: '' // Anti-bot trap
  });

  const [formError, setFormError] = useState('');

  useEffect(() => {
    if (isOpen) {
      setFormError('');
      if (initialService) {
        setFormData(prev => ({
          ...prev,
          service: initialService
        }));
      }
    }
  }, [isOpen, initialService]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formError) setFormError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Bot detection
    if (formData.honeypot) {
      console.warn('Bot detected via honeypot');
      return;
    }

    if (!formData.name.trim()) {
      setFormError('Please enter your name.');
      return;
    }

    const note = formData.requirements.trim() || 'Requesting free revenue & growth consultation for our brand.';

    // Analytics conversion event
    trackEvent('form_submit_success', {
      form_name: 'instant_brief_modal',
      service_selected: formData.service || 'General Growth Strategy',
      timeline: formData.timeline
    });

    const msg = `⚡ *NEW GROWTH BRIEF FOR MK PUBLICITY* ⚡\n\n• *Name:* ${formData.name.trim()}\n• *Company:* ${formData.company.trim() || 'Not Specified'}\n• *Service Needed:* ${formData.service || 'Growth Audit'}\n• *Timeline:* ${formData.timeline}\n• *Monthly Budget:* ${formData.budget}\n• *Goal / Notes:* ${note}\n\n_Sent via mkpublicity.com Instant Brief_`;

    const waUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="brief-modal-overlay" onClick={onClose}>
          <motion.div
            className="brief-modal-card"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="brief-modal-title"
          >
            <header className="brief-modal-head">
              <div>
                <span className="mono-sub text-gold">Executive Inquiry</span>
                <h3 id="brief-modal-title" className="brief-title">
                  Start a Conversation with <em className="serif-em">MK Publicity.</em>
                </h3>
                <p className="brief-lead">
                  Fill out 4 quick details, then we’ll immediately continue your strategic consultation on WhatsApp.
                </p>
              </div>
              <button 
                type="button" 
                onClick={onClose} 
                className="brief-close-btn"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </header>

            <form onSubmit={handleSubmit} className="brief-form">
              {/* Honeypot field (hidden from real users) */}
              <input 
                type="text" 
                name="honeypot" 
                value={formData.honeypot} 
                onChange={handleChange} 
                style={{ display: 'none' }} 
                tabIndex={-1} 
                autoComplete="off" 
              />

              {formError && (
                <div style={{
                  background: 'rgba(255, 59, 48, 0.1)',
                  border: '1px solid rgba(255, 59, 48, 0.3)',
                  color: '#FF3B30',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '1rem'
                }}>
                  <AlertCircle size={16} />
                  <span>{formError}</span>
                </div>
              )}

              <div className="form-row">
                <div className="form-field">
                  <label className="field-label mono-sub">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Rajesh Shah"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="field-input"
                  />
                </div>

                <div className="form-field">
                  <label className="field-label mono-sub">Brand / Company Name</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="e.g. Surat Enterprise"
                    value={formData.company}
                    onChange={handleChange}
                    className="field-input"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label className="field-label mono-sub">Primary Discipline Needed</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="field-select"
                  >
                    {/* Top Recommended Custom Options */}
                    <option value="Integrated Marketing & PR">Integrated Marketing & PR (Full Trio)</option>
                    <option value="General Growth Strategy">General Growth Strategy & Revenue Audit</option>
                    <option value="Full Trio Growth Engine (Marketing + PR + IT)">Full Trio Growth Engine (Marketing + PR + IT)</option>

                    {/* Catalog Options */}
                    <optgroup label="Core Disciplines">
                      {services.map(s => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                <div className="form-field">
                  <label className="field-label mono-sub">Planned Monthly Budget</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="field-select"
                  >
                    <option value="₹50K – ₹1 Lakh/month">₹50,000 – ₹1 Lakh / month</option>
                    <option value="₹1 Lakh – ₹3 Lakhs/month">₹1 Lakh – ₹3 Lakhs / month</option>
                    <option value="₹3 Lakhs – ₹8 Lakhs/month">₹3 Lakhs – ₹8 Lakhs / month</option>
                    <option value="₹8 Lakhs – ₹20 Lakhs+/month">₹8 Lakhs – ₹20 Lakhs+ / month</option>
                    <option value="Flexible / Based on Strategy">Flexible / Performance-Linked</option>
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label className="field-label mono-sub">Tell Us About Your Growth Goal (Optional)</label>
                <textarea
                  name="requirements"
                  rows={3}
                  placeholder="Where is your revenue today, and what is the #1 hurdle holding back your business?"
                  value={formData.requirements}
                  onChange={handleChange}
                  className="field-textarea"
                />
              </div>

              <div className="brief-actions">
                <button type="submit" className="btn btn-gold btn-lg submit-btn" style={{ width: '100%', cursor: 'pointer' }}>
                  <Send size={18} /> Continue Conversation on WhatsApp
                </button>
              </div>

              <div className="brief-footer-note">
                <ShieldCheck size={14} className="text-gold" />
                <span>You’ll be redirected to WhatsApp with your details pre-formatted. Direct line: +{WHATSAPP_NUMBER}</span>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
