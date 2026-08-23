import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

export default function ProcessTimeline({ steps }) {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="process-timeline" ref={containerRef} style={{ position: 'relative' }}>
      {/* Animated Line */}
      <motion.div 
        style={{
          position: 'absolute',
          top: 0,
          left: '20px',
          width: '2px',
          height: lineHeight,
          background: 'var(--gradient-primary)',
          zIndex: 1,
          transformOrigin: 'top'
        }}
        className="process-animated-line"
      />
      {steps.map((step, i) => (
        <ScrollReveal key={i} direction={i % 2 === 0 ? 'right' : 'left'} delay={i * 0.1}>
          <div className="process-step" style={{ position: 'relative', zIndex: 2 }}>
            <motion.div 
              className="process-step-number"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              {step.number}
            </motion.div>
            <div className="process-step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
