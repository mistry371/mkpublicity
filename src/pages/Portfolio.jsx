import { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, X, Maximize2, RefreshCw, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import PageHero from '../components/PageHero';
import SEOHead from '../components/SEOHead';
import InstantBriefModal from '../components/InstantBriefModal';
import assetData from '../assetData.json';
import { getWhatsAppLink } from '../data';
import { trackConversionEvent } from '../utils/analytics';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('Marketing'); // 'Marketing' | 'IT'
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImg, setLightboxImg] = useState(null);
  const [isBriefModalOpen, setIsBriefModalOpen] = useState(false);
  
  // Pagination
  const ITEMS_PER_PAGE = 12;
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  useEffect(() => { 
    window.scrollTo(0, 0); 
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  // Accessibility: close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setLightboxImg(null);
      }
    };
    if (lightboxImg) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImg]);

  // Clean IT Project titles
  const itProjects = useMemo(() => {
    return (assetData.itProjects || []).map(p => ({
      ...p,
      title: p.title.replace(/\(\d+\)/g, '').replace(/ChatGPT Image.*/gi, '').trim() || 'IT Solution'
    }));
  }, []);

  const marketingItems = assetData.marketingPortfolio || [];
  const marketingCategories = ['All', ...new Set(marketingItems.map(item => item.category))];

  const filteredMarketing = activeCategory === 'All'
    ? marketingItems
    : marketingItems.filter(item => item.category === activeCategory);

  const displayedMarketing = filteredMarketing.slice(0, visibleCount);

  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'MK Publicity Case Studies & Portfolio',
    'description': 'Real campaigns, quantifiable ROI, and custom IT software solutions delivered by MK Publicity in Surat, Gujarat.',
    'url': 'https://mkpublicity.com/portfolio'
  };

  return (
    <div style={{ background: '#FBFBFA', color: '#0C0D0E', minHeight: '100vh' }}>
      <SEOHead
        title="Portfolio & Case Studies — Marketing Campaigns & IT Solutions | MK Publicity"
        description="Explore 500+ successful client campaigns and IT solutions delivered by MK Publicity. Real ROI, high-impact PR coverage, and scalable software architectures in Surat."
        keywords="marketing portfolio, IT solutions case studies, PR campaigns Surat, brand transformations, web design portfolio, MarTech results"
        canonical="/portfolio"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Portfolio', url: '/portfolio' }
        ]}
        jsonLd={portfolioSchema}
      />

      <InstantBriefModal
        isOpen={isBriefModalOpen}
        onClose={() => setIsBriefModalOpen(false)}
      />

      {/* ═══ 1. EDITORIAL PAGE HERO ═══ */}
      <PageHero 
        label="EVIDENCE // 500+ DEPLOYMENTS"
        title="Verifiable Outcomes Across Marketing, PR & Custom Tech"
        highlight="Verifiable Outcomes"
        description="Explore our track record of customer acquisition, national media placements, and custom software infrastructure delivered for ambitious brands in South Gujarat and nationwide."
        ctaText="Request Case Study Audit"
      />

      {/* ═══ 2. PORTFOLIO SHOWCASE ═══ */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 0', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
        <div className="container">
          
          {/* Practice Tabs (Marketing vs IT) */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
            <div style={{
              display: 'inline-flex',
              background: '#FFFFFF',
              padding: '6px',
              borderRadius: '100px',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)'
            }}>
              <button 
                onClick={() => handleTabChange('Marketing')}
                style={{
                  padding: '10px 24px',
                  borderRadius: '100px',
                  border: 'none',
                  background: activeTab === 'Marketing' ? '#F5C518' : 'transparent',
                  color: activeTab === 'Marketing' ? '#070809' : '#666666',
                  fontWeight: activeTab === 'Marketing' ? 800 : 600,
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                01 // MARKETING & PR CAMPAIGNS
              </button>

              <button 
                onClick={() => handleTabChange('IT')}
                style={{
                  padding: '10px 24px',
                  borderRadius: '100px',
                  border: 'none',
                  background: activeTab === 'IT' ? '#F5C518' : 'transparent',
                  color: activeTab === 'IT' ? '#070809' : '#666666',
                  fontWeight: activeTab === 'IT' ? 800 : 600,
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                02 // IT & SOFTWARE SOLUTIONS
              </button>
            </div>
          </div>

          {/* Marketing Sub-Categories */}
          {activeTab === 'Marketing' && (
            <>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem', marginBottom: '3.5rem' }}>
                {marketingCategories.map(cat => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      style={{
                        padding: '6px 16px',
                        borderRadius: '100px',
                        border: '1px solid',
                        borderColor: isActive ? '#B8860B' : 'rgba(0, 0, 0, 0.1)',
                        background: isActive ? '#F5C518' : '#FFFFFF',
                        color: isActive ? '#070809' : '#555555',
                        cursor: 'pointer',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.02)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {cat.replace(/[^a-zA-Z &]/g, ' ').trim()}
                    </button>
                  );
                })}
              </div>

              {/* Marketing Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
                gap: '1.5rem'
              }}>
                <AnimatePresence>
                  {displayedMarketing.map((item, i) => (
                    <motion.div
                      key={item.image + i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid rgba(0, 0, 0, 0.08)',
                        borderRadius: '6px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                        transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease'
                      }}
                      className="portfolio-card-hover"
                      onClick={() => {
                        trackConversionEvent('case_study_view', { category: item.category, type: 'marketing' });
                        setLightboxImg(item.image);
                      }}
                    >
                      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', overflow: 'hidden' }}>
                        <img 
                          src={item.image} 
                          alt={`${item.category.replace(/[^a-zA-Z &]/g, ' ').trim()} Marketing Campaign by MK Publicity`} 
                          loading="lazy"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.5s ease'
                          }}
                        />
                        <div style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, transparent 60%)',
                          display: 'flex',
                          alignItems: 'flex-end',
                          padding: '1.25rem'
                        }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                            <span className="mono-sub text-gold" style={{ letterSpacing: '0.1em' }}>
                              {item.category.replace(/[^a-zA-Z &]/g, ' ').trim()}
                            </span>
                            <div style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '50%',
                              background: 'rgba(255, 255, 255, 0.2)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#fff'
                            }}>
                              <Maximize2 size={16} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {visibleCount < filteredMarketing.length && (
                <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
                  <button 
                    onClick={() => setVisibleCount(v => v + ITEMS_PER_PAGE)}
                    className="btn-editorial-ghost"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                  >
                    <RefreshCw size={16} color="#F5C518" />
                    <span>Load Additional Campaigns</span>
                  </button>
                </div>
              )}
            </>
          )}

          {/* IT Projects Tab */}
          {activeTab === 'IT' && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
              gap: '1.5rem'
            }}>
              {itProjects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)'
                  }}
                >
                  <div 
                    style={{ position: 'relative', width: '100%', aspectRatio: '16/10', overflow: 'hidden', cursor: 'pointer' }}
                    onClick={() => {
                      trackConversionEvent('case_study_view', { title: project.title, type: 'it_solution' });
                      setLightboxImg(project.image);
                    }}
                  >
                    <img 
                      src={project.image} 
                      alt={`${project.title} - IT Software Solution by MK Publicity`} 
                      loading="lazy" 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(0, 0, 0, 0.3)',
                      opacity: 0,
                      transition: 'opacity 0.2s',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Maximize2 size={28} color="#F5C518" />
                    </div>
                  </div>

                  <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                    <div>
                      <span className="mono-sub text-gold" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 700 }}>
                        ENTERPRISE MARTECH // IT
                      </span>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0C0D0E', marginBottom: '1.25rem', lineHeight: 1.3 }}>
                        {project.title}
                      </h3>
                    </div>

                    {project.pdf && (
                      <a 
                        href={project.pdf} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="btn-editorial-ghost" 
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', width: 'fit-content', padding: '6px 14px', fontSize: '0.8rem' }}
                      >
                        <FileText size={15} color="#B8860B" />
                        <span>View Technical PDF</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ═══ 3. LIGHTBOX MODAL ═══ */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(7, 8, 9, 0.95)',
              backdropFilter: 'blur(15px)',
              zIndex: 99999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
            onClick={() => setLightboxImg(null)}
          >
            <button 
              onClick={() => setLightboxImg(null)}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                cursor: 'pointer'
              }}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            <motion.img
              src={lightboxImg}
              alt="Preview"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              style={{
                maxWidth: '90vw',
                maxHeight: '85vh',
                objectFit: 'contain',
                borderRadius: '6px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 30px 80px rgba(0, 0, 0, 0.9)'
              }}
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ 4. FINAL CONSULTATION CTA ═══ */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <ScrollReveal>
            <span className="mono-sub text-gold" style={{ display: 'block', marginBottom: '1rem' }}>
              PROVEN RESULTS // YOUR NEXT MILESTONE
            </span>
            <h2 className="display-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: '1.5rem' }}>
              Want Measurable Impact Like <br/>
              <span className="serif-em text-gold">These Deployments?</span>
            </h2>
            <p style={{ color: '#555555', fontSize: '1.15rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
              Let’s audit your current acquisition economics and build an execution roadmap tailored to your specific commercial niche.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => {
                  trackConversionEvent('primary_cta_click', { location: 'portfolio_footer_cta' });
                  setIsBriefModalOpen(true);
                }}
                className="btn-gold"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
              >
                <Sparkles size={18} />
                <span>Discuss A Custom Campaign</span>
                <ArrowRight size={18} />
              </button>

              <a
                href={getWhatsAppLink('Hi MK Publicity! I reviewed your portfolio and would like to discuss a similar project.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-ghost"
                onClick={() => trackConversionEvent('whatsapp_click', { location: 'portfolio_footer_whatsapp' })}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <MessageCircle size={18} color="#25D366" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <style>{`
        .portfolio-card-hover:hover {
          border-color: #F5C518 !important;
          transform: translateY(-4px);
        }
        .portfolio-card-hover:hover img {
          transform: scale(1.04);
        }
      `}</style>
    </div>
  );
}
