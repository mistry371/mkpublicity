import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ServiceCard({ service, index = 0 }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <Link to={`/services/${service.id}`} className="service-card" id={`service-${service.id}`}>
        <div className="service-card-icon" style={{ color: service.color || 'var(--primary)' }}>
          {Icon && <Icon size={48} strokeWidth={1.5} />}
        </div>
        <h3 className="service-card-title">{service.title}</h3>
        <p className="service-card-desc">{service.shortDesc}</p>
        <span className="service-card-link">
          Learn More <span>→</span>
        </span>
      </Link>
    </motion.div>
  );
}
