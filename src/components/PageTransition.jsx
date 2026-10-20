import { motion } from 'framer-motion';

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
}
