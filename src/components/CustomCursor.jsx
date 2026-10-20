import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isOverInput, setIsOverInput] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  
  // Smooth out mouse movement
  const cursorX = useSpring(-100, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(-100, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      if (!hasMoved) setHasMoved(true);
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const tagName = target.tagName ? target.tagName.toLowerCase() : '';
      
      // Preserve standard native text selection cursor on inputs and form controls
      if (['input', 'textarea', 'select'].includes(tagName) || target.isContentEditable) {
        setIsOverInput(true);
        setIsHovering(false);
        return;
      }
      setIsOverInput(false);

      if (
        tagName === 'a' ||
        tagName === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.service-card') ||
        target.closest('.selection-card') ||
        target.closest('.marquee-card')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [hasMoved, cursorX, cursorY]);

  if (!hasMoved || isOverInput) return null;

  return (
    <>
      <motion.div
        className="custom-cursor-dot"
        style={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        animate={{
          opacity: isHovering ? 0 : 1
        }}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        className="custom-cursor-ring"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 1.6 : 1,
          backgroundColor: isHovering ? 'rgba(245, 197, 24, 0.15)' : 'transparent',
          borderColor: isHovering ? 'var(--primary)' : 'rgba(245, 197, 24, 0.6)'
        }}
        transition={{ duration: 0.18 }}
      />
    </>
  );
}
