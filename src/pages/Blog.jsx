import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Sparkles, MessageCircle, 
  Calendar, Clock, ArrowUpRight 
} from 'lucide-react';
import PageHero from '../components/PageHero';
import ScrollReveal from '../components/ScrollReveal';
import SEOHead from '../components/SEOHead';
import InstantBriefModal from '../components/InstantBriefModal';
import { blogPosts, getWhatsAppLink } from '../data';
import { trackConversionEvent } from '../utils/analytics';

export default function Blog() {
  const [isBriefModalOpen, setIsBriefModalOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('');

  useEffect(() => { 
    window.scrollTo(0, 0); 
  }, []);

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    'name': 'MK Publicity Strategic Insights & Growth Intelligence',
    'description': 'Thought leadership, industry analysis, and tactical guides on Performance Marketing, PR, and MarTech engineering.',
    'url': 'https://mkpublicity.com/blog',
    'blogPost': blogPosts.map(post => ({
      '@type': 'BlogPosting',
      'headline': post.title,
      'description': post.excerpt,
      'articleSection': post.category,
      'timeRequired': post.readTime,
      'datePublished': '2025-08-01',
      'author': {
        '@type': 'Organization',
        'name': 'MK Publicity Editorial Team'
      }
    }))
  };

  return (
    <div style={{ background: '#FBFBFA', color: '#0C0D0E', minHeight: '100vh' }}>
      <SEOHead
        title="Insights & Strategies — Marketing, PR & IT Intelligence | MK Publicity"
        description="Actionable market intelligence, tactical frameworks, and commercial guides on Performance Marketing, Public Relations, and IT MarTech solutions from MK Publicity in Surat."
        keywords="marketing blog, PR trends, MarTech insights, performance marketing guide, digital marketing strategy, MK Publicity blog"
        canonical="/blog"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Insights', url: '/blog' }
        ]}
        jsonLd={blogSchema}
      />

      <InstantBriefModal
        isOpen={isBriefModalOpen}
        onClose={() => setIsBriefModalOpen(false)}
        initialService={selectedTopic ? `Strategic Discussion: ${selectedTopic}` : 'Strategic Marketing Consultation'}
      />

      {/* ═══ 1. EDITORIAL PAGE HERO ═══ */}
      <PageHero 
        label="EDITORIAL DISPATCH // GROWTH INTELLIGENCE"
        title="Field Intelligence On Marketing, PR & Digital Systems"
        highlight="Digital Systems"
        description="Actionable analysis, algorithmic ad breakdowns, and public relations frameworks written for founders, commercial directors, and marketing leaders."
        ctaText="Discuss Insights"
      />

      {/* ═══ 2. MAGAZINE ARTICLE GRID ═══ */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 0', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
        <div className="container">
          <div className="arch-sec-head">
            <span className="mono-sub text-gold">THE EDITORIAL COLLECTION</span>
            <div className="arch-head-split">
              <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
                Featured Commercial <span className="serif-em text-gold">Briefings</span>
              </h2>
              <p className="arch-head-lead">
                Practical, fluff-free analysis addressing customer acquisition bottlenecks, media authority, and conversion optimization in competitive markets.
              </p>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 350px), 1fr))',
            gap: '2rem'
          }}>
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'border-color 0.3s ease, transform 0.3s ease'
                }}
                className="blog-card-editorial"
              >
                <div>
                  {/* Article Accent Header */}
                  <div style={{
                    padding: '1.75rem 2rem 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span className="mono-sub text-gold" style={{ letterSpacing: '0.1em' }}>
                      {post.category.toUpperCase()}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#666666', fontSize: '0.78rem' }}>
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div style={{ padding: '1.25rem 2rem 2rem' }}>
                    <h3 style={{
                      fontSize: 'clamp(1.3rem, 1.8vw, 1.55rem)',
                      fontWeight: 800,
                      color: '#0C0D0E',
                      lineHeight: 1.25,
                      letterSpacing: '-0.02em',
                      marginBottom: '1rem',
                      fontFamily: 'var(--font-display)'
                    }}>
                      {post.title}
                    </h3>

                    <p style={{
                      color: '#555555',
                      fontSize: '0.92rem',
                      lineHeight: 1.6,
                      marginBottom: '1.5rem'
                    }}>
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div style={{
                  padding: '1.25rem 2rem',
                  borderTop: '1px solid rgba(0, 0, 0, 0.08)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: '#F9F9F7'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#666666', fontSize: '0.78rem' }}>
                    <Calendar size={13} color="#B8860B" />
                    <span>{post.date}</span>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedTopic(post.title);
                      trackConversionEvent('primary_cta_click', { topic: post.title, location: 'blog_card_button' });
                      setIsBriefModalOpen(true);
                    }}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#B8860B',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    <span>CONSULT ON TOPIC</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <style>{`
          .blog-card-editorial:hover {
            border-color: #B8860B !important;
            transform: translateY(-4px);
          }
        `}</style>
      </section>

      {/* ═══ 3. FINAL CONSULTATION BANNER ═══ */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <ScrollReveal>
            <span className="mono-sub text-gold" style={{ display: 'block', marginBottom: '1rem' }}>
              EXECUTIVE INTELLIGENCE
            </span>
            <h2 className="display-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: '1.5rem' }}>
              Turn These Principles Into <br/>
              <span className="serif-em text-gold">Revenue For Your Brand.</span>
            </h2>
            <p style={{ color: '#555555', fontSize: '1.15rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
              Connect with our strategists in Surat. We will unpack how these strategies apply directly to your market segment and current growth targets.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => {
                  trackConversionEvent('primary_cta_click', { location: 'blog_footer_cta' });
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
                href={getWhatsAppLink('Hi MK Publicity! I would like to discuss strategic marketing insights for my company.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-ghost"
                onClick={() => trackConversionEvent('whatsapp_click', { location: 'blog_footer_whatsapp' })}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <MessageCircle size={18} color="#25D366" />
                <span>WhatsApp Directly</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
