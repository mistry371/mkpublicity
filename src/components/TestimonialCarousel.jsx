
import { Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function TestimonialCarousel({ testimonials }) {
  return (
    <ScrollReveal>
      <div className="testimonials-container">
        <div
          className="testimonials-track"
          style={{
            display: 'flex',
            gap: 'var(--space-xl)',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            paddingBottom: 'var(--space-xl)',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card" style={{ scrollSnapAlign: 'start', flexShrink: 0, minWidth: 'min(400px, 85vw)' }}>
              <div className="testimonial-rating" style={{ display: 'flex', gap: '4px', color: '#F5C518', marginBottom: '1rem' }}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <img src={t.image} alt={t.name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                </div>
                <div className="testimonial-author-info">
                  <h4>{t.name}</h4>
                  <p>{t.role} • {t.industry}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
