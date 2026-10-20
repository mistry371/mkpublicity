import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SEOHead from '../components/SEOHead';
import { EMAIL, PHONE } from '../data';

export default function TermsOfService() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const termsSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'Terms of Service — MK Publicity',
    'description': 'Terms of Service and professional agency engagement conditions for MK Publicity Marketing, PR, and IT Solutions.',
    'url': 'https://mkpublicity.com/terms'
  };

  return (
    <>
      <SEOHead
        title="Terms of Service — Professional Engagement Conditions | MK Publicity"
        description="Review MK Publicity's clear terms of service, engagement conditions, deliverables framework, and intellectual property ownership rules."
        keywords="MK Publicity terms of service, agency contract terms, marketing terms of service Surat"
        canonical="/terms"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Terms of Service', url: '/terms' }
        ]}
        jsonLd={termsSchema}
      />

      <PageHero
        label="Legal & Governance"
        title="Terms of Service"
        highlight="Terms"
        description="Clear, transparent terms governing marketing, PR, and software engineering engagements with MK Publicity."
      />

      <section style={{ background: '#FBFBFA', color: '#0C0D0E', padding: 'clamp(3rem, 6vw, 5rem) 0', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ lineHeight: 1.8, color: '#555555' }}>
            <p style={{ fontSize: '0.85rem', color: '#666666', marginBottom: '2rem' }}>
              Last Updated: October 16, 2026 • Effective Date: October 16, 2026
            </p>

            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0C0D0E', margin: '2.5rem 0 1rem', fontFamily: 'var(--font-display)' }}>
              1. Engagement & Scope of Work
            </h2>
            <p>
              By accessing our website or retaining MK Publicity for Performance Marketing, Public Relations (PR), or IT & Software Engineering services, you agree to these Terms of Service. Every client engagement is accompanied by a custom Statement of Work (SOW) detailing exact deliverables, timelines, approval milestones, and financial terms.
            </p>

            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0C0D0E', margin: '2.5rem 0 1rem', fontFamily: 'var(--font-display)' }}>
              2. Intellectual Property & Asset Ownership
            </h2>
            <p>
              Unlike restrictive agencies, MK Publicity believes in total client ownership:
            </p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', margin: '1rem 0' }}>
              <li><strong style={{ color: '#0C0D0E' }}>Advertising Accounts:</strong> All Google Ads, Meta Ads, and LinkedIn Campaign Manager accounts remain registered under the client’s legal entity and credit card.</li>
              <li><strong style={{ color: '#0C0D0E' }}>Source Code & Systems:</strong> Custom software, web applications, and database funnels engineered by MK Publicity are transferred to the client upon settlement of final invoices.</li>
              <li><strong style={{ color: '#0C0D0E' }}>Creative Assets:</strong> Finished video files, high-resolution branding kits, and press releases are the permanent property of the client.</li>
            </ul>

            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0C0D0E', margin: '2.5rem 0 1rem', fontFamily: 'var(--font-display)' }}>
              3. Transparent Billing & Ad Spend Administration
            </h2>
            <p>
              MK Publicity charges a professional agency management fee or software development retainer. Media ad spend (payable directly to Google, Meta, or media publishers) is billed directly to the client's corporate card to guarantee complete financial transparency without hidden markups.
            </p>

            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0C0D0E', margin: '2.5rem 0 1rem', fontFamily: 'var(--font-display)' }}>
              4. Service Warranties & Client Responsibilities
            </h2>
            <p>
              We warrant that all services are performed by senior industry specialists using ethical white-hat SEO, compliant ad techniques, and verified PR editorial outreach. The client agrees to provide timely creative approvals, business information, and authorized access credentials required for smooth project execution.
            </p>

            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0C0D0E', margin: '2.5rem 0 1rem', fontFamily: 'var(--font-display)' }}>
              5. Governing Law & Dispute Resolution
            </h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in Surat, Gujarat.
            </p>

            <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '4px', border: '1px solid rgba(0, 0, 0, 0.08)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)', marginTop: '2rem' }}>
              <p style={{ margin: 0, color: '#555555' }}>
                Questions regarding these terms? Contact our legal counsel at <a href={`mailto:${EMAIL}`} style={{ color: '#B8860B' }}>{EMAIL}</a> or call <a href={`tel:+91${PHONE}`} style={{ color: '#B8860B' }}>+91 {PHONE}</a>.
              </p>
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
