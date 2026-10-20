import { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function TestimonialCarousel({ testimonials }) {
  const trackRef = useRef(null);

  const scroll = (direction) => {
    if (!trackRef.current) return;
    const cardWidth = 420;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <ScrollReveal>
      <div className="testimonials-container" style={{ position: 'relative' }}>
        {/* Navigation Arrow Controls for Desktop & Tablet */}
        <div 
          className="testimonial-controls" 
          style={{ 
            display: 'flex', 
            justifyContent: 'flex-end', 
            gap: '0.75rem', 
            marginBottom: '1rem',
            paddingRight: '0.5rem'
          }}
        >
          <button
            onClick={() => scroll('left')}
            className="carousel-nav-btn"
            aria-label="Previous testimonial"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              border: '1px solid var(--border-medium)',
              background: 'var(--bg-card)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              transition: 'all 0.2s ease',
              boxShadow: 'var(--shadow-sm)'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--primary)';
              e.currentTarget.style.transform = 'scale(1.08)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border-medium)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="carousel-nav-btn"
            aria-label="Next testimonial"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              border: '1px solid var(--border-medium)',
              background: 'var(--bg-card)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              transition: 'all 0.2s ease',
              boxShadow: 'var(--shadow-sm)'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--primary)';
              e.currentTarget.style.transform = 'scale(1.08)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border-medium)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div
          ref={trackRef}
          className="testimonials-track"
          style={{
            display: 'flex',
            gap: 'var(--space-xl)',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            paddingBottom: 'var(--space-xl)',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'thin'
          }}
        >
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="testimonial-card" 
              style={{ 
                scrollSnapAlign: 'start', 
                flexShrink: 0, 
                minWidth: 'min(420px, 85vw)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-xl)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div className="testimonial-rating" style={{ display: 'flex', gap: '4px', color: '#F5C518', marginBottom: '1rem' }}>
                {Array.from({ length: t.rating }).map((_, rIdx) => (
                  <Star key={rIdx} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="testimonial-text" style={{ fontSize: '1rem', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                "{t.text}"
              </p>
              <div className="testimonial-author" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="testimonial-avatar" style={{ width: '48px', height: '48px', flexShrink: 0 }}>
                  <img src={t.image} alt={t.name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                </div>
                <div className="testimonial-author-info">
                  <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>{t.name}</h4>
                  <p style={{ margin: '2px 0 0 0', fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>{t.role} • {t.industry}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
