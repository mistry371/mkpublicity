import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Rocket } from 'lucide-react';
import CTAButton from './CTAButton';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/industries', label: 'Industries' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/process', label: 'Process' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // All pages are light theme
  const baseColor = 'var(--text-primary)';

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileOpen ? 'menu-open' : ''}`} id="main-nav">
        <div className="navbar-inner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" className="navbar-logo" id="logo-link" style={{ display: 'flex', alignItems: 'center', gap: '11px', textDecoration: 'none', zIndex: 100 }}>
            <div className="navbar-brand-badge" style={{
              width: '38px',
              height: '38px',
              borderRadius: '9px',
              background: '#F5C518',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 10px rgba(245, 197, 24, 0.35)',
              flexShrink: 0
            }}>
              <span style={{
                fontFamily: "'Arial Black', Impact, sans-serif",
                fontWeight: 900,
                fontSize: '1.25rem',
                color: '#000000',
                letterSpacing: '-1px',
                lineHeight: 1
              }}>
                mk
              </span>
            </div>
            <div className="navbar-brand-text" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.22rem',
                letterSpacing: '0.04em',
                color: '#0C0D0E',
                textTransform: 'uppercase'
              }}>
                PUBLICITY
              </span>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: '#777777',
                textTransform: 'uppercase'
              }}>
                MARKETING • PR • IT
              </span>
            </div>
          </Link>

          <div className="navbar-links" style={{ alignItems: 'center', gap: '1.5rem', zIndex: 100 }}>
            {navLinks.map(link => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
                style={{
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  color: location.pathname === link.path ? '#B8860B' : '#0C0D0E',
                  transition: 'color 0.2s ease'
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="navbar-right" style={{ display: 'flex', alignItems: 'center', gap: '2rem', zIndex: 100 }}>
            <div className="navbar-cta">
              <CTAButton
                text="Let's Talk"
                icon={MessageCircle}
                size="sm"
                message="Hi! I want to discuss my marketing needs with MK Publicity."
              />
            </div>

            <div
              className={`menu-trigger ${mobileOpen ? 'open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ cursor: 'pointer', flexDirection: 'column', gap: '6px', padding: '10px' }}
            >
              <motion.span animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} style={{ width: '30px', height: '2px', background: mobileOpen ? '#000' : baseColor, display: 'block', transformOrigin: 'center' }}></motion.span>
              <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} style={{ width: '20px', height: '2px', background: baseColor, display: 'block', marginLeft: 'auto' }}></motion.span>
              <motion.span animate={mobileOpen ? { rotate: -45, y: -8, width: '30px' } : { rotate: 0, y: 0, width: '30px' }} style={{ width: '30px', height: '2px', background: mobileOpen ? '#000' : baseColor, display: 'block', transformOrigin: 'center' }}></motion.span>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="full-screen-menu"
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100dvh',
              maxHeight: '100vh',
              background: '#ffffff',
              zIndex: 99,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              padding: 'calc(var(--nav-height) + 1rem) 1.5rem 3rem',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <div className="menu-links-container" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center', width: '100%', maxWidth: '400px', margin: 'auto 0' }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ delay: i * 0.04 + 0.15, duration: 0.4 }}
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <Link
                    to={link.path}
                    className={`menu-link ${location.pathname === link.path ? 'active' : ''}`}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      fontSize: 'clamp(1.5rem, 5vw, 2.2rem)',
                      color: location.pathname === link.path ? '#B8860B' : '#000000',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '-0.5px',
                      textDecoration: 'none',
                      display: 'inline-block',
                      padding: '0.25rem 0',
                      transition: 'color 0.2s'
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                style={{ marginTop: '1.5rem', width: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}
              >
                <CTAButton
                  text="Claim Free Revenue Audit"
                  icon={Rocket}
                  size="lg"
                  message="Hi! I want to work with MK Publicity."
                  onClick={() => setMobileOpen(false)}
                />
                <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', textAlign: 'center' }}>
                  Surat, Gujarat • Fast Priority Response
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
