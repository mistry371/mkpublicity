import { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, X, Maximize2, RefreshCw } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import PageHero from '../components/PageHero';
import assetData from '../assetData.json';
import { useModal } from '../context/ModalContext';

export default function Portfolio() {
  const { openModal } = useModal();
  const [activeTab, setActiveTab] = useState('Marketing'); // 'Marketing' | 'IT'
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImg, setLightboxImg] = useState(null);
  
  // Pagination
  const ITEMS_PER_PAGE = 12;
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  // Reset pagination when category changes
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [activeCategory, activeTab]);

  // Marketing Categories logic
  const marketingCategories = useMemo(() => {
    const rawCategories = assetData.marketing.map(item => item.category);
    // Standardize category names for a cleaner look
    const cleanCats = rawCategories.map(c => {
      let clean = c.replace(/[^a-zA-Z &]/g, ' ').trim();
      return clean;
    });
    return ['All', ...new Set(cleanCats)];
  }, []);
  
  const filteredMarketing = useMemo(() => {
    let filtered = assetData.marketing;
    if (activeCategory !== 'All') {
      filtered = assetData.marketing.filter(m => {
         let clean = m.category.replace(/[^a-zA-Z &]/g, ' ').trim();
         return clean === activeCategory;
      });
    }
    return filtered;
  }, [activeCategory]);

  const displayedMarketing = filteredMarketing.slice(0, visibleCount);

  // Clean IT Project titles
  const itProjects = useMemo(() => {
    return (assetData.itProjects || []).map(p => ({
      ...p,
      title: p.title.replace(/\(\d+\)/g, '').replace(/ChatGPT Image.*/gi, '').trim() || 'IT Solution'
    }));
  }, []);

  return (
    <>
      <PageHero 
        label="Our Work"
        title="Premium Portfolio"
        highlight="Portfolio"
        highlightEnd={true}
        description="Real campaigns, real results. Explore how we've helped brands achieve extraordinary growth across industries through elite marketing and IT solutions."
      />

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          {/* Top Level Tabs */}
          <ScrollReveal>
            <div className="portfolio-main-tabs" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
              <button 
                className={`btn ${activeTab === 'Marketing' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setActiveTab('Marketing')}
                style={{ minWidth: '200px' }}
              >
                Marketing Campaigns
              </button>
              <button 
                className={`btn ${activeTab === 'IT' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setActiveTab('IT')}
                style={{ minWidth: '200px' }}
              >
                IT Solutions
              </button>
            </div>
          </ScrollReveal>

          {activeTab === 'Marketing' && (
            <>
              <ScrollReveal>
                <div className="filter-tabs" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', marginBottom: '3rem' }}>
                  {marketingCategories.map(cat => (
                    <button
                      key={cat}
                      className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
                      onClick={() => setActiveCategory(cat)}
                      style={{ 
                        padding: '0.5rem 1.25rem', 
                        borderRadius: '50px', 
                        border: '1px solid var(--border-medium)', 
                        background: activeCategory === cat ? 'var(--primary)' : 'transparent', 
                        color: activeCategory === cat ? '#000' : 'var(--text-primary)', 
                        cursor: 'pointer', 
                        fontWeight: 600, 
                        transition: 'all 0.3s ease',
                        fontSize: '0.9rem'
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </ScrollReveal>

              <div className="masonry-grid">
                <AnimatePresence>
                  {displayedMarketing.map((item, i) => (
                    <motion.div
                      key={item.image + i}
                      className="masonry-item"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      layout
                      onClick={() => setLightboxImg(item.image)}
                    >
                      <img src={item.image} alt={item.category} loading="lazy" />
                      <div className="masonry-overlay">
                        <Maximize2 size={32} color="#fff" />
                        <span>{item.category.replace(/[^a-zA-Z &]/g, ' ').trim()}</span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {visibleCount < filteredMarketing.length && (
                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                  <button 
                    onClick={() => setVisibleCount(v => v + ITEMS_PER_PAGE)}
                    className="btn btn-secondary"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                  >
                    <RefreshCw size={18} /> Load More Campaigns
                  </button>
                </div>
              )}
            </>
          )}

          {activeTab === 'IT' && (
            <div className="it-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
              {itProjects.map((project, i) => (
                <motion.div
                  key={i}
                  className="it-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="it-card-img" onClick={() => setLightboxImg(project.image)}>
                    <img src={project.image} alt={project.title} loading="lazy" />
                    <div className="it-card-overlay">
                      <Maximize2 size={24} color="#fff" />
                    </div>
                  </div>
                  <div className="it-card-body" style={{ padding: '1.5rem', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderTop: 'none', borderRadius: '0 0 var(--radius-lg) var(--radius-lg)' }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', lineHeight: 1.4 }}>{project.title}</h3>
                    {project.pdf && (
                      <a href={project.pdf} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                        <FileText size={16} /> View Full PDF
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={() => setLightboxImg(null)}
          >
            <button className="lightbox-close" onClick={() => setLightboxImg(null)}>
              <X size={24} />
            </button>
            <motion.img
              src={lightboxImg}
              alt="Preview"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="lightbox-img"
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <section className="cta-banner">
        <div className="container">
          <ScrollReveal>
            <h2>Want Results Like These?</h2>
            <p>Let's create a success story for your brand too.</p>
            <button
              onClick={openModal}
              className="btn btn-lg"
            >
              Let's Build Your Success Story
            </button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
