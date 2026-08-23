import { Link } from 'react-router-dom';
import { services, EMAIL, PHONE, ADDRESS, getWhatsAppLink } from '../data';
import { useModal } from '../context/ModalContext';
import { Phone, Mail, MapPin, MessageCircle, Heart } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

export default function Footer() {
  const year = new Date().getFullYear();
  const { openModal } = useModal();

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <ScrollReveal>
          <div className="footer-grid">
            <div className="footer-brand">
              <Link to="/" className="navbar-logo" style={{ marginBottom: '8px' }}>
                <div className="navbar-logo-icon">mk</div>
                <div className="navbar-logo-text">
                  <span>MK Publicity</span>
                  <span>Your Success, Our Mission</span>
                </div>
              </Link>
              <p>
                Full-service marketing, PR & media agency delivering integrated strategies
                for measurable business growth. From startups to enterprises, we build brands
                that dominate markets.
              </p>
              <div className="footer-social">
                <a href="https://www.instagram.com/mkpublicitysurat" target="_blank" rel="noopener noreferrer" className="footer-social-link" id="social-instagram"><FaInstagram size={20} /></a>
                <a href="https://www.facebook.com/mkpublicitysurat" target="_blank" rel="noopener noreferrer" className="footer-social-link" id="social-facebook"><FaFacebookF size={20} /></a>
                <a href="https://www.linkedin.com/company/mkpublicity" target="_blank" rel="noopener noreferrer" className="footer-social-link" id="social-linkedin"><FaLinkedinIn size={20} /></a>
                <a href="https://www.youtube.com/@mkpublicity" target="_blank" rel="noopener noreferrer" className="footer-social-link" id="social-youtube"><FaYoutube size={20} /></a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Services</h4>
              {services.slice(0, 6).map(s => (
                <Link key={s.id} to={`/services/${s.id}`}>{s.title}</Link>
              ))}
            </div>

            <div className="footer-col">
              <h4>Company</h4>
              <Link to="/about">About Us</Link>
              <Link to="/portfolio">Our Work</Link>
              <Link to="/process">Our Process</Link>
              <Link to="/industries">Industries</Link>
              <Link to="/blog">Blog & Insights</Link>
              <Link to="/contact">Contact Us</Link>
            </div>

            <div className="footer-col">
              <h4>Get in Touch</h4>
              <div className="footer-contact-item">
                <span className="footer-contact-icon"><Phone size={18} /></span>
                <a href={`tel:+91${PHONE}`}>+91 {PHONE}</a>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon"><Mail size={18} /></span>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon"><MapPin size={18} /></span>
                <span>{ADDRESS}</span>
              </div>
              <button
                onClick={openModal}
                className="btn btn-primary"
                style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '12px' }}
                id="footer-whatsapp-cta"
              >
                <MessageCircle size={18} /> Chat Now
              </button>
            </div>
          </div>
        </ScrollReveal>

        <div className="footer-bottom">
          <span>© {year} MK Publicity. All rights reserved.</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>Designed with <Heart size={14} style={{ color: 'red', fill: 'red' }} /> in Surat, Gujarat</span>
        </div>
      </div>
    </footer>
  );
}
