import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Rocket, Menu } from 'lucide-react';
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
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileOpen ? 'menu-open' : ''}`} id="main-nav">
        <div className="navbar-inner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" className="navbar-logo" id="logo-link" style={{ display: 'flex', alignItems: 'center', zIndex: 100 }}>
            <img src="/logo.jpg" alt="MK Publicity Logo" style={{ height: '70px', width: 'auto', objectFit: 'contain' }} />
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
                  color: location.pathname === link.path ? 'var(--primary)' : 'var(--text-primary)',
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
              <motion.span animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} style={{ width: '30px', height: '2px', background: mobileOpen ? '#000' : 'var(--text-primary)', display: 'block', transformOrigin: 'center' }}></motion.span>
              <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} style={{ width: '20px', height: '2px', background: 'var(--text-primary)', display: 'block', marginLeft: 'auto' }}></motion.span>
              <motion.span animate={mobileOpen ? { rotate: -45, y: -8, width: '30px' } : { rotate: 0, y: 0, width: '30px' }} style={{ width: '30px', height: '2px', background: mobileOpen ? '#000' : 'var(--text-primary)', display: 'block', transformOrigin: 'center' }}></motion.span>
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
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              background: '#fff',
              zIndex: 99,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'var(--space-2xl)'
            }}
          >
            <div className="menu-links-container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 50, rotateX: 20 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.05 + 0.3, duration: 0.5 }}
                  style={{ perspective: '1000px' }}
                >
                  <Link
                    to={link.path}
                    className={`menu-link ${location.pathname === link.path ? 'active' : ''}`}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      fontSize: 'clamp(2rem, 5vw, 3rem)',
                      color: location.pathname === link.path ? 'var(--primary)' : '#000',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '-1px',
                      textDecoration: 'none',
                      transition: 'color 0.3s'
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                style={{ marginTop: 'var(--space-xl)' }}
              >
                <CTAButton
                  text="Start Your Project"
                  icon={Rocket}
                  size="lg"
                  message="Hi! I want to work with MK Publicity."
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
