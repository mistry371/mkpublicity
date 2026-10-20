import { Link } from 'react-router-dom';
import { services, EMAIL, PHONE, ADDRESS } from '../data';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { trackConversionEvent } from '../utils/analytics';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mk-footer">
      <div className="mk-footer-grid">
        {/* Brand Column */}
        <div className="mk-footer-col mk-footer-brand">
          <Link to="/" className="mk-footer-logo">
            <img src="/logo.jpg" alt="MK Publicity Logo" className="mk-footer-logo-img" />
          </Link>
          <p className="mk-footer-desc">
            We unite Performance Marketing, Strategic Public Relations, and Custom IT Engineering to build brands that dominate their markets.
          </p>
          <div className="mk-footer-social">
            <a href="https://www.instagram.com/mkpublicitysurat" target="_blank" rel="noopener noreferrer" aria-label="MK Publicity on Instagram"><FaInstagram size={18} /></a>
            <a href="https://www.facebook.com/mkpublicitysurat" target="_blank" rel="noopener noreferrer" aria-label="MK Publicity on Facebook"><FaFacebookF size={18} /></a>
            <a href="https://www.linkedin.com/company/mkpublicity" target="_blank" rel="noopener noreferrer" aria-label="MK Publicity on LinkedIn"><FaLinkedinIn size={18} /></a>
            <a href="https://www.youtube.com/@mkpublicity" target="_blank" rel="noopener noreferrer" aria-label="MK Publicity on YouTube"><FaYoutube size={18} /></a>
          </div>
        </div>

        {/* Services Column */}
        <div className="mk-footer-col">
          <h4 className="mk-footer-heading">Expertise</h4>
          <ul className="mk-footer-links">
            {services.slice(0, 5).map(s => (
              <li key={s.id}><Link to={`/services/${s.id}`}>{s.title}</Link></li>
            ))}
          </ul>
        </div>

        {/* Company Column */}
        <div className="mk-footer-col">
          <h4 className="mk-footer-heading">Company</h4>
          <ul className="mk-footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/portfolio">Our Work</Link></li>
            <li><Link to="/process">Methodology</Link></li>
            <li><Link to="/industries">Industries</Link></li>
            <li><Link to="/blog">Insights</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="mk-footer-col">
          <h4 className="mk-footer-heading">Connect</h4>
          <ul className="mk-footer-contact">
            <li>
              <Phone size={16} className="mk-icon-gold" />
              <a href={`tel:+91${PHONE}`} onClick={() => trackConversionEvent('phone_click', { source: 'footer' })}>+91 {PHONE}</a>
            </li>
            <li>
              <Mail size={16} className="mk-icon-gold" />
              <a href={`mailto:${EMAIL}`} onClick={() => trackConversionEvent('email_click', { source: 'footer' })}>{EMAIL}</a>
            </li>
            <li>
              <MapPin size={16} className="mk-icon-gold" style={{ flexShrink: 0 }} />
              <span>{ADDRESS}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mk-footer-bottom">
        <div className="mk-footer-bottom-content">
          <span>&copy; {year} MK Publicity. All rights reserved.</span>
          <div className="mk-footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>

      <style>{`
        .mk-footer {
          background: #ffffff;
          color: #111;
          padding: 90px 0 0 0;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          border-top: 1px solid rgba(0,0,0,0.06);
          position: relative;
          overflow: hidden;
        }

        .mk-footer-grid {
          width: min(1240px, calc(100% - 64px));
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
          gap: 60px;
          padding-bottom: 70px;
          position: relative;
          z-index: 2;
        }

        .mk-footer-logo {
          display: inline-flex;
          margin-bottom: 24px;
        }

        .mk-footer-logo-img {
          height: 60px;
          width: auto;
          object-fit: contain;
        }

        .mk-footer-desc {
          color: #555;
          font-size: 0.95rem;
          line-height: 1.8;
          max-width: 320px;
          margin: 0 0 32px 0;
          font-weight: 500;
        }

        .mk-footer-social {
          display: flex;
          gap: 14px;
        }

        .mk-footer-social a {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid rgba(0,0,0,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #333;
          background: #fff;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.02);
        }

        .mk-footer-social a:hover {
          background: #b6904a;
          border-color: #b6904a;
          color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(182,144,74,0.25);
        }

        .mk-footer-heading {
          color: #111;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-weight: 800;
          margin: 0 0 28px 0;
        }

        .mk-footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .mk-footer-links a {
          color: #555;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.2s ease, padding-left 0.2s ease;
          display: inline-block;
        }

        .mk-footer-links a:hover {
          color: #b6904a;
          padding-left: 4px;
        }

        .mk-footer-contact {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .mk-footer-contact li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: #555;
          font-size: 0.95rem;
          line-height: 1.6;
          font-weight: 500;
        }

        .mk-footer-contact a {
          color: #555;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .mk-footer-contact a:hover {
          color: #b6904a;
        }

        .mk-icon-gold {
          color: #b6904a;
          margin-top: 2px;
        }

        .mk-footer-bottom {
          border-top: 1px solid rgba(0,0,0,0.06);
          padding: 28px 0;
          background: #f9f9fa;
        }

        .mk-footer-bottom-content {
          width: min(1240px, calc(100% - 64px));
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #777;
          font-size: 13px;
          font-weight: 500;
        }

        .mk-footer-legal {
          display: flex;
          gap: 24px;
        }

        .mk-footer-legal a {
          color: #777;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .mk-footer-legal a:hover {
          color: #111;
        }

        @media (max-width: 1024px) {
          .mk-footer-grid {
            grid-template-columns: 1fr 1fr;
            row-gap: 60px;
          }
          .mk-footer-brand {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 600px) {
          .mk-footer {
            padding-top: 60px;
          }
          .mk-footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            padding-bottom: 50px;
          }
          .mk-footer-bottom-content {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
