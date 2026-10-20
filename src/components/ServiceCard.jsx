import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ServiceCard({ service, index = 0 }) {
  const Icon = service.icon;
  const numStr = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      style={{ height: '100%' }}
    >
      <Link 
        to={`/services/${service.id}`} 
        className="arch-service-card"
        id={`service-${service.id}`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          padding: 'clamp(1.75rem, 3vw, 2.5rem)',
          background: '#FFFFFF',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
          position: 'relative',
          overflow: 'hidden',
          textDecoration: 'none',
          transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease'
        }}
      >
        <div>
          {/* Top Row: Discipline Index & Icon */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem' }}>
            <span className="mono-sub" style={{ color: '#B8860B', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em' }}>
              ENG—{numStr}
            </span>
            <div style={{
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(184, 134, 11, 0.08)',
              border: '1px solid rgba(184, 134, 11, 0.2)',
              borderRadius: '50%',
              color: '#B8860B'
            }}>
              {Icon && <Icon size={20} strokeWidth={1.75} />}
            </div>
          </div>

          {/* Title */}
          <h3 style={{
            fontSize: 'clamp(1.25rem, 1.8vw, 1.6rem)',
            fontWeight: 800,
            fontFamily: 'var(--font-display)',
            color: '#0C0D0E',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '1rem'
          }}>
            {service.title}
          </h3>

          {/* Short Desc */}
          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.6,
            color: '#555555',
            marginBottom: '1.5rem'
          }}>
            {service.shortDesc}
          </p>

          {/* Deliverables snippet */}
          {service.includes && service.includes.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
              {service.includes.slice(0, 3).map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#444444' }}>
                  <CheckCircle2 size={13} color="#B8860B" style={{ flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom CTA Action Link */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '1.25rem',
          borderTop: '1px solid rgba(0, 0, 0, 0.08)',
          marginTop: 'auto'
        }}>
          <span className="mono-sub" style={{ color: '#0C0D0E', fontSize: '0.72rem', letterSpacing: '0.08em', fontWeight: 600 }}>
            VIEW FULL BRIEF
          </span>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'rgba(245, 197, 24, 0.2)',
            color: '#0C0D0E'
          }}>
            <ArrowUpRight size={16} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
