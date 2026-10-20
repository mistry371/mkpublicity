import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SEOHead from '../components/SEOHead';
import { EMAIL, PHONE, ADDRESS } from '../data';

export default function PrivacyPolicy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const privacySchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'Privacy Policy — MK Publicity',
    'description': 'MK Publicity privacy policy explaining client data collection, usage, WhatsApp inquiry handling, and retention standards.',
    'url': 'https://mkpublicity.com/privacy'
  };

  return (
    <>
      <SEOHead
        title="Privacy Policy — Data Protection & Client Confidentiality | MK Publicity"
        description="Review MK Publicity's strict privacy policy, data security standards, and client confidentiality protocols in Surat, Gujarat."
        keywords="MK Publicity privacy policy, data protection, client confidentiality, advertising agency privacy"
        canonical="/privacy"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Privacy Policy', url: '/privacy' }
        ]}
        jsonLd={privacySchema}
      />

      <PageHero
        label="Legal & Governance"
        title="Privacy Policy"
        highlight="Privacy"
        description="How MK Publicity collects, protects, and handles your business information with enterprise-grade confidentiality."
      />

      <section style={{ background: '#FBFBFA', color: '#0C0D0E', padding: 'clamp(3rem, 6vw, 5rem) 0', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ lineHeight: 1.8, color: '#555555' }}>
            <p style={{ fontSize: '0.85rem', color: '#666666', marginBottom: '2rem' }}>
              Last Updated: October 16, 2026 • Effective Date: October 16, 2026
            </p>

            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0C0D0E', margin: '2.5rem 0 1rem', fontFamily: 'var(--font-display)' }}>
              1. Introduction & Commitment to Confidentiality
            </h2>
            <p>
              MK Publicity ("we", "us", or "our") respects your privacy and is committed to protecting the confidential business information, personal details, and campaign data of our clients and website visitors. This Privacy Policy details how we collect, store, and utilize data across <a href="https://mkpublicity.com" style={{ color: '#B8860B', fontWeight: 600 }}>mkpublicity.com</a>.
            </p>

            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0C0D0E', margin: '2.5rem 0 1rem', fontFamily: 'var(--font-display)' }}>
              2. Information We Collect
            </h2>
            <p>We only collect information necessary to deliver high-performance marketing, strategic PR, and custom IT software solutions:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', margin: '1rem 0' }}>
              <li><strong style={{ color: '#0C0D0E' }}>Contact Information:</strong> Name, professional email address, phone number, and company name provided via inquiry forms or direct WhatsApp consultations.</li>
              <li><strong style={{ color: '#0C0D0E' }}>Project Scope & Requirements:</strong> Business goals, timeline, marketing budget range, and technical specifications provided during needs assessments.</li>
              <li><strong style={{ color: '#0C0D0E' }}>Technical Telemetry:</strong> Aggregated, anonymized website engagement metrics (page visits, bounce rates, session durations) via cookieless or privacy-compliant analytics. We strictly forbid transmitting PII (Personally Identifiable Information) into analytics event streams.</li>
            </ul>

            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0C0D0E', margin: '2.5rem 0 1rem', fontFamily: 'var(--font-display)' }}>
              3. WhatsApp Communication & Lead Dispatch
            </h2>
            <p>
              Our website provides direct inquiry dispatch to WhatsApp for fast priority communication. When you initiate a WhatsApp conversation, your message is encrypted under WhatsApp's end-to-end encryption protocols. We use your contact information exclusively to answer your business inquiry and do not sell, rent, or trade your phone number to third-party telemarketers.
            </p>

            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0C0D0E', margin: '2.5rem 0 1rem', fontFamily: 'var(--font-display)' }}>
              4. Client Data Ownership & Ad Account Integrity
            </h2>
            <p>
              We maintain a strict client-first policy: all advertising accounts, creative assets, domain names, and customer data generated during marketing engagements remain 100% the property of the client. MK Publicity operates under non-disclosure agreements (NDAs) upon request for all enterprise and proprietary projects.
            </p>

            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0C0D0E', margin: '2.5rem 0 1rem', fontFamily: 'var(--font-display)' }}>
              5. Contact Us Regarding Your Data
            </h2>
            <p>If you have questions, require data deletion, or wish to review data submitted to MK Publicity, contact our Data Privacy Officer:</p>
            <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '4px', border: '1px solid rgba(0, 0, 0, 0.08)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)', marginTop: '1rem' }}>
              <p style={{ margin: '0 0 0.5rem 0' }}><strong style={{ color: '#0C0D0E' }}>MK Publicity Agency</strong></p>
              <p style={{ margin: '0 0 0.5rem 0' }}>Address: {ADDRESS}</p>
              <p style={{ margin: '0 0 0.5rem 0' }}>Email: <a href={`mailto:${EMAIL}`} style={{ color: '#B8860B' }}>{EMAIL}</a></p>
              <p style={{ margin: 0 }}>Phone: <a href={`tel:+91${PHONE}`} style={{ color: '#B8860B' }}>+91 {PHONE}</a></p>
            </div>

            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
              <Link to="/" className="btn-editorial-ghost">
                ← Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
