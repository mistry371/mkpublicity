import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * SEOHead - Dynamic SEO & AEO Manager for React Single Page Applications.
 * Dynamically updates document title, meta tags, canonical links, OpenGraph,
 * Twitter Cards, and injects route-specific JSON-LD schemas.
 */
export default function SEOHead({
  title = 'MK Publicity — Marketing, PR & IT Solutions Agency | Surat & India',
  description = 'MK Publicity is an integrated agency uniting Performance Marketing, Strategic Public Relations (PR), and IT & Software Solutions. 500+ clients, 340% average lead increase.',
  keywords = 'MK Publicity, marketing and IT agency, PR agency Surat, digital marketing, MarTech, performance marketing, IT solutions, custom software',
  canonical = '',
  ogType = 'website',
  ogImage = 'https://mkpublicity.com/logo.jpg',
  jsonLd = null,
  breadcrumbs = []
}) {
  const location = useLocation();
  const currentUrl = `https://mkpublicity.com${canonical || location.pathname}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper to update or create a meta tag
    const updateMetaTag = (selector, attrName, attrValue, contentValue) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentValue);
    };

    // 2. Standard Meta
    updateMetaTag('meta[name="description"]', 'name', 'description', description);
    updateMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords);

    // 3. Open Graph
    updateMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    updateMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    updateMetaTag('meta[property="og:url"]', 'property', 'og:url', currentUrl);
    updateMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType);
    updateMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage);

    // 4. Twitter Cards
    updateMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    updateMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    updateMetaTag('meta[name="twitter:url"]', 'name', 'twitter:url', currentUrl);
    updateMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);

    // 5. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // 6. Dynamic JSON-LD Injection
    const scriptId = 'dynamic-route-jsonld';
    let scriptEl = document.getElementById(scriptId);
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = scriptId;
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }

    // Prepare Breadcrumb Schema
    const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbs.map((crumb, idx) => ({
        '@type': 'ListItem',
        'position': idx + 1,
        'name': crumb.name,
        'item': crumb.url.startsWith('http') ? crumb.url : `https://mkpublicity.com${crumb.url}`
      }))
    } : null;

    // Combine breadcrumbs and page-specific JSON-LD schemas
    const schemasToInject = [];
    if (breadcrumbSchema) schemasToInject.push(breadcrumbSchema);
    if (jsonLd) {
      if (Array.isArray(jsonLd)) {
        schemasToInject.push(...jsonLd);
      } else {
        schemasToInject.push(jsonLd);
      }
    }

    if (schemasToInject.length > 0) {
      scriptEl.textContent = JSON.stringify(
        schemasToInject.length === 1 ? schemasToInject[0] : {
          '@context': 'https://schema.org',
          '@graph': schemasToInject
        }
      );
    } else {
      scriptEl.textContent = '';
    }

    // Scroll to top on route change smoothly
    window.scrollTo({ top: 0, behavior: 'instant' });

  }, [title, description, keywords, currentUrl, ogType, ogImage, jsonLd, breadcrumbs]);

  return null;
}
