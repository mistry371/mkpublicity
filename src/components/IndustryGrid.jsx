import { motion } from 'framer-motion';

export default function IndustryGrid({ industries }) {
  return (
    <div className="industries-grid">
      {industries.map((ind, i) => {
        const Icon = ind.icon;
        return (
          <motion.div
            key={ind.name}
            className="industry-tag"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="industry-tag-icon">
              {Icon ? <Icon size={16} /> : null}
            </span>
            {ind.name}
          </motion.div>
        );
      })}
    </div>
  );
}
