import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, ArrowLeft, CheckCircle2, Sparkles } from 'lucide-react';
import { services, getWhatsAppLink } from '../data';
import { trackConversionEvent } from '../utils/analytics';

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 40 : -40,
    opacity: 0
  })
};

const timelines = ['ASAP', '1-3 Months', '3-6 Months', 'Flexible'];
const budgets = ['₹50k - ₹1L', '₹1L - ₹3L', '₹3L - ₹8L', '₹8L+ / Performance'];

export default function NeedsAnalysisModal({ isOpen, onClose, initialService = '' }) {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [formData, setFormData] = useState({
    category: '',
    specificService: '',
    timeline: 'ASAP',
    budget: '₹1L - ₹3L',
    name: '',
    company: '',
    contact: '',
    details: ''
  });

  useEffect(() => {
    if (isOpen) {
      if (initialService) {
        // Try to match initialService with existing catalog
        const match = services.find(s => 
          s.id.toLowerCase() === initialService.toLowerCase() ||
          s.title.toLowerCase().includes(initialService.toLowerCase()) ||
          initialService.toLowerCase().includes(s.title.toLowerCase())
        );

        if (match) {
          setFormData(prev => ({
            ...prev,
            category: match.title,
            specificService: match.includes?.[0] || 'Strategic Consultation'
          }));
          setStep(2);
        } else {
          setFormData(prev => ({
            ...prev,
            category: initialService,
            specificService: 'Comprehensive Strategy'
          }));
          setStep(2);
        }
      } else {
        setStep(1);
      }
    }
  }, [isOpen, initialService]);

  const handleClose = () => {
    setStep(1);
    setDirection(0);
    setFormData({
      category: '',
      specificService: '',
      timeline: 'ASAP',
      budget: '₹1L - ₹3L',
      name: '',
      company: '',
      contact: '',
      details: ''
    });
    onClose();
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setStep(prev => prev + newDirection);
  };

  const handleSelect = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (field === 'category') {
      setFormData(prev => ({ ...prev, specificService: '' }));
      paginate(1);
    } else if (field === 'specificService') {
      paginate(1);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    trackConversionEvent('form_submit_success', {
      category: formData.category,
      specificService: formData.specificService,
      timeline: formData.timeline,
      budget: formData.budget
    });
    trackConversionEvent('whatsapp_click', { source: 'needs_analysis_modal' });

    const message = `*🎯 NEW PROJECT INQUIRY FOR MK PUBLICITY*

*Client Details:*
👤 Name: ${formData.name}
🏢 Company: ${formData.company || 'Not Specified'}
📞 Contact: ${formData.contact}

*Project Scope:*
📂 Category: ${formData.category || 'Strategic Growth Audit'}
🔧 Specific Need: ${formData.specificService || 'General Assessment'}
⏱️ Timeline: ${formData.timeline}
💰 Monthly Budget: ${formData.budget}

*Goals & Notes:*
${formData.details || 'Interested in scheduling a revenue & marketing consultation.'}

_Sent via mkpublicity.com Diagnostic Wizard_`;

    window.open(getWhatsAppLink(message), '_blank', 'noopener,noreferrer');
    handleClose();
  };

  const selectedCategoryData = services.find(s => s.title === formData.category);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-backdrop"
            onClick={handleClose}
          />
          <div className="modal-wrapper" onClick={handleClose}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="modal-content wizard-content"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="wizard-modal-title"
            >
              <button 
                type="button"
                className="modal-close" 
                onClick={handleClose} 
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Header & Progress */}
              <div className="wizard-header">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  {step > 1 ? (
                    <button 
                      type="button" 
                      className="wizard-back-btn" 
                      onClick={() => paginate(-1)}
                    >
                      <ArrowLeft size={16} /> Back
                    </button>
                  ) : (
                    <span className="mono-sub text-gold" style={{ fontSize: '0.75rem' }}>
                      Diagnostic Assessment // Free Consultation
                    </span>
                  )}
                  <span className="progress-text mono-sub">Step {step} of 4</span>
                </div>
                
                <div className="wizard-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${(step / 4) * 100}%` }}></div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="wizard-body">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ type: "tween", ease: "easeInOut", duration: 0.25 }}
                      className="wizard-step"
                    >
                      <h2 id="wizard-modal-title">What are you looking to scale?</h2>
                      <p className="wizard-subtitle">Select a core discipline or request a full strategic growth audit.</p>
                      
                      {/* Anchor option for custom growth roadmap */}
                      <button
                        type="button"
                        className={`selection-card selection-card--hero ${formData.category === 'Full Strategic Growth Audit & Roadmap' ? 'active' : ''}`}
                        onClick={() => handleSelect('category', 'Full Strategic Growth Audit & Roadmap')}
                        style={{
                          marginBottom: '1rem',
                          background: 'linear-gradient(135deg, rgba(245, 197, 24, 0.12) 0%, rgba(245, 197, 24, 0.03) 100%)',
                          border: '1px solid rgba(245, 197, 24, 0.35)',
                          width: '100%'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <div className="selection-icon" style={{ background: '#F5C518', color: '#070809' }}>
                            <Sparkles size={20} />
                          </div>
                          <div>
                            <h3 style={{ margin: 0, fontSize: '1.05rem', color: '#0C0D0E' }}>
                              Full Strategic Growth & Revenue Audit (Recommended)
                            </h3>
                            <p style={{ margin: '2px 0 0 0', fontSize: '0.82rem', color: '#555555' }}>
                              Unite Performance Marketing, Strategic PR & MarTech into a 90-day blueprint.
                            </p>
                          </div>
                        </div>
                        {formData.category === 'Full Strategic Growth Audit & Roadmap' && <CheckCircle2 className="active-check" size={20} />}
                      </button>

                      <div className="selection-grid">
                        {services.map(service => {
                          const Icon = service.icon;
                          const isActive = formData.category === service.title;
                          return (
                            <button
                              key={service.id}
                              type="button"
                              className={`selection-card ${isActive ? 'active' : ''}`}
                              onClick={() => handleSelect('category', service.title)}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%' }}>
                                <Icon size={20} className="selection-icon" style={{ color: service.color || '#B8860B', flexShrink: 0 }} />
                                <h3 style={{ fontSize: '0.92rem', lineHeight: 1.3, margin: 0 }}>{service.title}</h3>
                              </div>
                              {isActive && <CheckCircle2 className="active-check" size={18} />}
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ type: "tween", ease: "easeInOut", duration: 0.25 }}
                      className="wizard-step"
                    >
                      <h2>Select Specific Deliverable</h2>
                      <p className="wizard-subtitle">Which area of <strong>{formData.category}</strong> is your primary focus?</p>
                      
                      <div className="selection-list">
                        {(selectedCategoryData?.includes || [
                          'Complete Strategic Audit & Execution Blueprint',
                          'Multi-Channel Inbound Funnel Deployment',
                          'High-Authority PR & National Media Placements',
                          'Custom CRM Pipeline & Lead Routing Automation',
                          'Brand Identity, Creative Direction & Video Assets'
                        ]).map((item, idx) => {
                          const isActive = formData.specificService === item;
                          return (
                            <button
                              key={idx}
                              type="button"
                              className={`selection-list-item ${isActive ? 'active' : ''}`}
                              onClick={() => handleSelect('specificService', item)}
                            >
                              <span>{item}</span>
                              {isActive && <CheckCircle2 className="active-check text-gold" size={18} />}
                            </button>
                          );
                        })}
                        <button
                          type="button"
                          className={`selection-list-item ${formData.specificService === 'Other / Comprehensive Strategy' ? 'active' : ''}`}
                          onClick={() => handleSelect('specificService', 'Other / Comprehensive Strategy')}
                        >
                          <span>Other / Comprehensive Strategy</span>
                          {formData.specificService === 'Other / Comprehensive Strategy' && <CheckCircle2 className="active-check text-gold" size={18} />}
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ type: "tween", ease: "easeInOut", duration: 0.25 }}
                      className="wizard-step"
                    >
                      <h2>Project Scope & Budget</h2>
                      <p className="wizard-subtitle">Help us calibrate the execution team and strategy timeline.</p>
                      
                      <div className="form-group mb-4">
                        <label className="mono-sub" style={{ fontSize: '0.8rem', color: '#555555', display: 'block', marginBottom: '8px' }}>
                          Target Deployment Timeline
                        </label>
                        <div className="pill-group">
                          {timelines.map(t => (
                            <button
                              key={t}
                              type="button"
                              className={`pill-btn ${formData.timeline === t ? 'active' : ''}`}
                              onClick={() => setFormData(prev => ({ ...prev, timeline: t }))}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="form-group mb-4" style={{ marginTop: '1.5rem' }}>
                        <label className="mono-sub" style={{ fontSize: '0.8rem', color: '#555555', display: 'block', marginBottom: '8px' }}>
                          Planned Monthly Growth Investment
                        </label>
                        <div className="pill-group">
                          {budgets.map(b => (
                            <button
                              key={b}
                              type="button"
                              className={`pill-btn ${formData.budget === b ? 'active' : ''}`}
                              onClick={() => setFormData(prev => ({ ...prev, budget: b }))}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div style={{ marginTop: '2rem' }}>
                        <button 
                          type="button"
                          className="btn btn-gold modal-submit-btn" 
                          onClick={() => paginate(1)}
                        >
                          Continue to Final Step →
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === 4 && (
                    <motion.div
                      key="step4"
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ type: "tween", ease: "easeInOut", duration: 0.25 }}
                      className="wizard-step"
                    >
                      <h2>Almost Done!</h2>
                      <p className="wizard-subtitle">Where should our growth architect send your diagnostic brief?</p>
                      
                      <form onSubmit={handleSubmit} className="modal-form">
                        <div className="form-row">
                          <div className="form-group">
                            <label htmlFor="modal-name">Your Full Name *</label>
                            <input 
                              type="text" 
                              id="modal-name" 
                              name="name" 
                              required 
                              placeholder="e.g. Rajesh Shah" 
                              value={formData.name} 
                              onChange={handleInputChange} 
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="modal-company">Brand / Company Name</label>
                            <input 
                              type="text" 
                              id="modal-company" 
                              name="company" 
                              placeholder="e.g. Surat Enterprise" 
                              value={formData.company} 
                              onChange={handleInputChange} 
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label htmlFor="modal-contact">Phone or WhatsApp Number *</label>
                          <input 
                            type="text" 
                            id="modal-contact" 
                            name="contact" 
                            required 
                            placeholder="+91 95372 95599" 
                            value={formData.contact} 
                            onChange={handleInputChange} 
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="modal-details">Current Bottleneck or Goal (Optional)</label>
                          <textarea 
                            id="modal-details" 
                            name="details" 
                            rows={3} 
                            placeholder="Tell us what you want to achieve or where your leads are leaking..." 
                            value={formData.details} 
                            onChange={handleInputChange}
                          />
                        </div>

                        <button type="submit" className="btn btn-gold modal-submit-btn">
                          <span>Continue Consultation on WhatsApp</span>
                          <Send size={18} />
                        </button>
                        
                        <span className="mono-sub" style={{ fontSize: '0.75rem', color: '#777777', textAlign: 'center', display: 'block', marginTop: '6px' }}>
                          🔒 100% Confidential • Immediate WhatsApp Dispatch
                        </span>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
