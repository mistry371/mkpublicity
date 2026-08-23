import PageHero from '../components/PageHero';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { blogPosts, getWhatsAppLink } from '../data';
import { useModal } from '../context/ModalContext';

export default function Blog() {
  const { openModal } = useModal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <PageHero 
        label="Insights & Knowledge"
        title="Strategies for Market Dominance"
        highlight="Dominance"
        description="Deep dives, case studies, and actionable insights from the frontlines of marketing and PR."
      />

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 0.1}>
                <div className="blog-card">
                  <div className="blog-card-image" style={{ background: post.gradient }}>
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '3rem',
                      opacity: 0.3
                    }}>
                      <MessageCircle size={48} />
                    </div>
                  </div>
                  <div className="blog-card-body">
                    <div className="blog-card-meta">
                      <span className="blog-card-category" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <MessageCircle size={14} />
                        {post.category}
                      </span>
                      <span>•</span>
                      <span>{post.readTime} read</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="blog-card-title">{post.title}</h3>
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    <button
                      onClick={openModal}
                      className="read-more"
                      style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', marginTop: 'var(--space-md)' }}
                    >
                      Discuss Topic →
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <ScrollReveal>
            <h2>Want Marketing Tips in Your Inbox?</h2>
            <p>We share exclusive insights, case studies, and trends with our community.</p>
            <button
              onClick={openModal}
              className="btn btn-primary btn-lg"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}
            >
              <MessageCircle size={20} /> Subscribe via WhatsApp
            </button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
