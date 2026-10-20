import { Link } from 'react-router-dom';
import { Home, ArrowRight, Sparkles } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function NotFound() {
  return (
    <div style={{ background: '#FBFBFA', color: '#0C0D0E', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SEOHead
        title="404 — Page Not Found | MK Publicity"
        description="The page you are looking for may have been moved or updated. Explore MK Publicity's Marketing, PR, and IT Solutions."
        canonical="/404"
        robots="noindex, follow"
      />

      <section style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(6rem, 12vw, 10rem) 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div className="mono-sub text-gold" style={{ letterSpacing: '0.2em', marginBottom: '1rem' }}>
            HTTP ERROR // 404
          </div>
          
          <div style={{
            fontSize: 'clamp(6rem, 18vw, 11rem)',
            fontWeight: 800,
            lineHeight: 0.9,
            color: '#B8860B',
            fontFamily: 'var(--font-display)',
            letterSpacing: '-0.05em',
            marginBottom: '1.5rem'
          }}>
            404
          </div>

          <h1 className="display-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginBottom: '1.25rem', color: '#0C0D0E' }}>
            Looking For Growth In <br/>
            <span className="serif-em text-gold">The Wrong Place?</span>
          </h1>

          <p style={{ color: '#555555', fontSize: '1.15rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
            The page you requested doesn't exist or has been relocated during our architectural upgrade. Let's get you back to scaling your brand's revenue and media authority.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            <Link to="/" className="btn-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <Home size={16} />
              <span>Return to Homepage</span>
            </Link>
            <Link to="/services" className="btn-editorial-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={16} color="#B8860B" />
              <span>Explore Services</span>
            </Link>
          </div>

          <div style={{ borderTop: '1px solid rgba(0, 0, 0, 0.08)', paddingTop: '2rem' }}>
            <span className="mono-sub" style={{ color: '#666666', display: 'block', marginBottom: '1.25rem' }}>
              KEY COMMERCIAL DESTINATIONS
            </span>
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', fontSize: '0.9rem', fontWeight: 600 }}>
              <Link to="/portfolio" style={{ color: '#0C0D0E', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Case Studies <ArrowRight size={13} color="#B8860B" />
              </Link>
              <Link to="/about" style={{ color: '#0C0D0E', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Agency Leadership <ArrowRight size={13} color="#B8860B" />
              </Link>
              <Link to="/contact" style={{ color: '#0C0D0E', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Consultation Terminal <ArrowRight size={13} color="#B8860B" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
