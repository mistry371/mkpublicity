import PageHero from '../components/PageHero';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MessageCircle, MapPin } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import ScrollReveal from '../components/ScrollReveal';
import { services, PHONE, EMAIL, ADDRESS, getWhatsAppLink } from '../data';

export default function Contact() {
  const { openModal } = useModal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi MK Publicity! I'm ${form.name}.
${form.email ? `Email: ${form.email}` : ''}
${form.phone ? `Phone: ${form.phone}` : ''}
${form.service ? `Interested in: ${form.service}` : ''}
${form.message ? `Message: ${form.message}` : ''}

I'd like to discuss this further!`;
    window.open(getWhatsAppLink(msg), '_blank');
  };

  return (
    <>
      <PageHero 
        label="Contact Us"
        title="Let's Build Your Legacy"
        highlight="Legacy"
        description="Ready to scale? Our experts are standing by to engineer your next big growth phase."
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <ScrollReveal direction="left">
              <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
                <div className="form-group">
                  <label htmlFor="contact-name">Your Name *</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="grid-2">
                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-phone">Phone Number</label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-service">Service Interested In</label>
                  <select
                    id="contact-service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    {services.map(s => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Multiple Services">Multiple Services</option>
                    <option value="Not Sure">Not Sure — Need Guidance</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Your Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, goals, and timeline..."
                    rows={5}
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg" id="contact-submit" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                  <Send size={18} /> Send via WhatsApp
                </button>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem', textAlign: 'center' }}>
                  Your form data will open in WhatsApp for instant communication.
                </p>
              </form>
            </ScrollReveal>

            {/* Info */}
            <ScrollReveal direction="right">
              <div className="contact-info-cards">
                <div className="contact-info-card">
                  <div className="contact-info-icon"><Phone size={24} /></div>
                  <div>
                    <h4>Call Us</h4>
                    <p><a href={`tel:+91${PHONE}`} style={{ color: 'var(--primary)' }}>+91 {PHONE}</a></p>
                    <p>Mon - Sat, 10AM - 7PM IST</p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon"><Mail size={24} /></div>
                  <div>
                    <h4>Email Us</h4>
                    <p><a href={`mailto:${EMAIL}`} style={{ color: 'var(--primary)' }}>{EMAIL}</a></p>
                    <p>We reply within 24 hours</p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon"><MessageCircle size={24} /></div>
                  <div>
                    <h4>WhatsApp</h4>
                    <p>
                      <button
                        onClick={openModal}
                        className="btn btn-secondary btn-sm"
                      >
                        Chat Now →
                      </button>
                    </p>
                    <p>Fastest way to reach us</p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon"><MapPin size={24} /></div>
                  <div>
                    <h4>Visit Us</h4>
                    <p>{ADDRESS}</p>
                  </div>
                </div>

                {/* Map */}
                <div className="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.2!2d72.82!3d21.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA3JzQ4LjAiTiA3MsKwNDknMTIuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MK Publicity Office Location"
                  ></iframe>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
