import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Sparkles, TrendingUp, Layers, 
  Users, Lightbulb, Rocket, Target, Globe,
  Building, Briefcase, Mail, MessageCircle,
  BookOpen, BarChart
} from 'lucide-react';
import { useModal } from '../context/ModalContext';
import ParticleBackground from './ParticleBackground';

export default function PageHero({ 
  label, 
  title, 
  highlight, 
  highlightEnd = false, 
  description
}) {
  const { openModal } = useModal();

  // Dynamic animations based on page label
  let VisualIcon = Layers;
  let floating1 = { icon: TrendingUp, title: 'Scale', subtitle: 'Unprecedented Growth' };
  let floating2 = { icon: Sparkles, title: 'Innovate', subtitle: 'Industry Leading' };

  if (label === 'About Us') {
    VisualIcon = Globe;
    floating1 = { icon: Users, title: 'Team', subtitle: 'Global Experts' };
    floating2 = { icon: Lightbulb, title: 'Vision', subtitle: 'Future Focused' };
  } else if (label === 'Our Services') {
    VisualIcon = Rocket;
    floating1 = { icon: Target, title: 'Strategy', subtitle: 'Data-Driven' };
    floating2 = { icon: TrendingUp, title: 'Growth', subtitle: 'Exponential ROI' };
  } else if (label === 'Our Process') {
    VisualIcon = Layers;
    floating1 = { icon: Target, title: 'Execute', subtitle: 'Precision Focused' };
    floating2 = { icon: BarChart, title: 'Measure', subtitle: 'Analytics Driven' };
  } else if (label === 'Industries We Serve') {
    VisualIcon = Building;
    floating1 = { icon: Briefcase, title: 'B2B', subtitle: 'Enterprise Scale' };
    floating2 = { icon: Globe, title: 'B2C', subtitle: 'Consumer Impact' };
  } else if (label === 'Our Work') {
    VisualIcon = Target;
    floating1 = { icon: BarChart, title: 'Results', subtitle: 'Proven Impact' };
    floating2 = { icon: Sparkles, title: 'Creative', subtitle: 'Award Winning' };
  } else if (label === 'Contact Us') {
    VisualIcon = MessageCircle;
    floating1 = { icon: Mail, title: 'Connect', subtitle: '24/7 Support' };
    floating2 = { icon: Users, title: 'Partner', subtitle: "Let's Collaborate" };
  } else if (label === 'Insights & Knowledge') {
    VisualIcon = BookOpen;
    floating1 = { icon: Lightbulb, title: 'Insights', subtitle: 'Industry Trends' };
    floating2 = { icon: Target, title: 'Strategy', subtitle: 'Actionable Advice' };
  }

  // Animation variants mirroring Home.jsx
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 40, rotateX: 20 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  const renderTitle = () => {
    if (!highlight) {
      return (
        <motion.span style={{ display: 'block' }} variants={titleVariants}>
          {title}
        </motion.span>
      );
    }
    
    if (highlightEnd) {
      const parts = title.split(highlight);
      return (
        <>
          <motion.span style={{ display: 'block' }} variants={titleVariants}>
            {parts[0]}
          </motion.span>
          <motion.span style={{ display: 'block' }} variants={titleVariants}>
            <span className="text-gradient">{highlight}</span>
          </motion.span>
        </>
      );
    } else {
      const parts = title.split(new RegExp(`(${highlight})`, 'i'));
      return (
        <motion.span style={{ display: 'block' }} variants={titleVariants}>
          {parts.map((part, i) => 
            part.toLowerCase() === highlight.toLowerCase() 
              ? <span key={i} className="text-gradient">{part}</span>
              : part
          )}
        </motion.span>
      );
    }
  };

  return (
    <section className="hero" style={{ paddingTop: '150px', paddingBottom: '100px', borderBottom: '1px solid var(--border-subtle)', position: 'relative', overflow: 'hidden' }}>
      <div className="hero-bg"></div>
      <ParticleBackground />
      
      <div className="container">
        <div className="hero-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          {/* Left Text Column */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="hero-badge"
              style={{ background: 'transparent', border: 'none', padding: 0, fontSize: '0.9rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 700 }}
            >
              {label}
            </motion.div>

            <motion.h1
              className="hero-title"
              style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 'var(--space-2xl)' }}
            >
              {renderTitle()}
            </motion.h1>

            {description && (
              <motion.p
                className="hero-subtitle"
                variants={itemVariants}
                style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 0 var(--space-3xl) 0', color: 'var(--text-secondary)' }}
              >
                {description}
              </motion.p>
            )}

            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
              <button 
                className="btn btn-primary btn-lg" 
                onClick={openModal}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
              >
                Start Your Project <ArrowRight size={20} />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Visuals Column (Same styling as Home.jsx) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hero-visuals"
            style={{ 
              position: 'relative', 
              minHeight: '450px',
              width: '100%',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center'
            }}
          >
            <style>
              {`
                @keyframes spin-slow { 100% { transform: rotate(360deg); } }
                @keyframes spin-reverse { 100% { transform: rotate(-360deg); } }
                @media (max-width: 900px) { .page-hero-visuals { display: none !important; } }
              `}
            </style>
            <div className="page-hero-visuals" style={{ position: 'relative', width: '100%', maxWidth: '400px', height: '100%' }}>
              
              {/* Abstract Glowing Orb */}
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '250px', height: '250px', background: 'var(--primary-subtle)', borderRadius: '50%', filter: 'blur(50px)', zIndex: 0 }}></div>
              
              {/* Floating Element 1 */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ position: 'absolute', top: '10%', right: '-5%', background: '#fff', padding: '1.25rem', borderRadius: '1rem', boxShadow: 'var(--shadow-lg)', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '0.5rem', minWidth: '150px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)' }}>
                  <floating1.icon size={24} />
                  <span style={{ fontWeight: 800, fontSize: '1.25rem', color: '#000' }}>{floating1.title}</span>
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>{floating1.subtitle}</span>
              </motion.div>

              {/* Floating Element 2 */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                style={{ position: 'absolute', bottom: '15%', left: '-15%', background: '#111', padding: '1.25rem', borderRadius: '1rem', boxShadow: 'var(--shadow-lg)', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '0.5rem', minWidth: '150px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}>
                  <floating2.icon size={24} />
                  <span style={{ fontWeight: 800, fontSize: '1.25rem', color: '#fff' }}>{floating2.title}</span>
                </div>
                <span style={{ fontSize: '0.8rem', color: '#999', fontWeight: 600 }}>{floating2.subtitle}</span>
              </motion.div>

              {/* Center Abstract Graphic */}
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1, width: '220px', height: '220px', border: '1px solid var(--border-medium)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '160px', height: '160px', border: '2px dashed var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'spin-slow 25s linear infinite' }}>
                  <div style={{ animation: 'spin-reverse 25s linear infinite' }}>
                    <VisualIcon size={56} color="var(--primary)" strokeWidth={1.5} />
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
