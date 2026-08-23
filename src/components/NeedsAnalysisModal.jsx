import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { services, getWhatsAppLink } from '../data';

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 50 : -50,
    opacity: 0
  })
};

const timelines = ['ASAP', '1-3 Months', '3-6 Months', 'Flexible'];
const budgets = ['Under ₹50k', '₹50k - ₹1L', '₹1L - ₹5L', '₹5L+'];

export default function NeedsAnalysisModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [formData, setFormData] = useState({
    category: '',
    specificService: '',
    timeline: '',
    budget: '',
    name: '',
    company: '',
    contact: '',
    details: ''
  });

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setDirection(0);
      setFormData({
        category: '',
        specificService: '',
        timeline: '',
        budget: '',
        name: '',
        company: '',
        contact: '',
        details: ''
      });
    }
  }, [isOpen]);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setStep(prev => prev + newDirection);
  };

  const handleSelect = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (field === 'category') {
      // Reset specific service when category changes
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
    
    const message = `*🎯 NEW PROJECT INQUIRY*

*Client Details:*
👤 Name: ${formData.name}
🏢 Company: ${formData.company || 'N/A'}
📞 Contact: ${formData.contact}

*Project Scope:*
📂 Category: ${formData.category}
🔧 Specific Service: ${formData.specificService}
⏱️ Timeline: ${formData.timeline}
💰 Budget: ${formData.budget}

*Additional Details:*
${formData.details || 'None provided'}

I would like to schedule a consultation.`;

    window.open(getWhatsAppLink(message), '_blank');
    onClose();
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
            onClick={onClose}
          />
          <div className="modal-wrapper">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="modal-content wizard-content"
            >
              <button className="modal-close" onClick={onClose} aria-label="Close modal">
                <X size={24} />
              </button>

              {/* Header & Progress */}
              <div className="wizard-header">
                {step > 1 && (
                  <button className="wizard-back-btn" onClick={() => paginate(-1)}>
                    <ArrowLeft size={18} /> Back
                  </button>
                )}
                <div className="wizard-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${(step / 4) * 100}%` }}></div>
                  </div>
                  <span className="progress-text">Step {step} of 4</span>
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
                      transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                      className="wizard-step"
                    >
                      <h2>What are you looking for?</h2>
                      <p className="wizard-subtitle">Select a category to get started.</p>
                      
                      <div className="selection-grid">
                        {services.map(service => {
                          const Icon = service.icon;
                          const isActive = formData.category === service.title;
                          return (
                            <button
                              key={service.id}
                              className={`selection-card ${isActive ? 'active' : ''}`}
                              onClick={() => handleSelect('category', service.title)}
                            >
                              <Icon size={32} className="selection-icon" style={{ color: service.color }} />
                              <h3>{service.title}</h3>
                              {isActive && <CheckCircle2 className="active-check" size={20} />}
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
                      transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                      className="wizard-step"
                    >
                      <h2>Select Specific Service</h2>
                      <p className="wizard-subtitle">Which area of {formData.category} do you need help with?</p>
                      
                      <div className="selection-list">
                        {selectedCategoryData?.includes.map((item, idx) => {
                          const isActive = formData.specificService === item;
                          return (
                            <button
                              key={idx}
                              className={`selection-list-item ${isActive ? 'active' : ''}`}
                              onClick={() => handleSelect('specificService', item)}
                            >
                              <span>{item}</span>
                              {isActive && <CheckCircle2 className="active-check" size={20} />}
                            </button>
                          );
                        })}
                        <button
                          className={`selection-list-item ${formData.specificService === 'Other / Unsure' ? 'active' : ''}`}
                          onClick={() => handleSelect('specificService', 'Other / Unsure')}
                        >
                          <span>Other / Unsure</span>
                          {formData.specificService === 'Other / Unsure' && <CheckCircle2 className="active-check" size={20} />}
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
                      transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                      className="wizard-step"
                    >
                      <h2>Project Scope</h2>
                      <p className="wizard-subtitle">Help us understand the timeline and budget.</p>
                      
                      <div className="form-group mb-4">
                        <label>Timeline</label>
                        <div className="pill-group">
                          {timelines.map(t => (
                            <button
                              key={t}
                              className={`pill-btn ${formData.timeline === t ? 'active' : ''}`}
                              onClick={() => setFormData(prev => ({ ...prev, timeline: t }))}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="form-group mb-4" style={{ marginTop: 'var(--space-lg)' }}>
                        <label>Estimated Budget</label>
                        <div className="pill-group">
                          {budgets.map(b => (
                            <button
                              key={b}
                              className={`pill-btn ${formData.budget === b ? 'active' : ''}`}
                              onClick={() => setFormData(prev => ({ ...prev, budget: b }))}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div style={{ marginTop: 'var(--space-2xl)' }}>
                        <button 
                          className="btn btn-primary" 
                          onClick={() => paginate(1)}
                          disabled={!formData.timeline || !formData.budget}
                          style={{ width: '100%', padding: '16px' }}
                        >
                          Continue →
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
                      transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                      className="wizard-step"
                    >
                      <h2>Almost done!</h2>
                      <p className="wizard-subtitle">Tell us how to reach you.</p>
                      
                      <form onSubmit={handleSubmit} className="modal-form">
                        <div className="form-row">
                          <div className="form-group">
                            <label htmlFor="name">Full Name *</label>
                            <input type="text" id="name" name="name" required placeholder="Jane Doe" value={formData.name} onChange={handleInputChange} />
                          </div>
                          <div className="form-group">
                            <label htmlFor="company">Company Name</label>
                            <input type="text" id="company" name="company" placeholder="Acme Corp" value={formData.company} onChange={handleInputChange} />
                          </div>
                        </div>

                        <div className="form-group">
                          <label htmlFor="contact">Email or Phone Number *</label>
                          <input type="text" id="contact" name="contact" required placeholder="jane@example.com or +91..." value={formData.contact} onChange={handleInputChange} />
                        </div>

                        <div className="form-group">
                          <label htmlFor="details">Additional Details (Optional)</label>
                          <textarea id="details" name="details" rows="3" placeholder="Tell us more about your goals..." value={formData.details} onChange={handleInputChange}></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary modal-submit-btn">
                          <span>Submit to WhatsApp</span>
                          <Send size={18} />
                        </button>
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
